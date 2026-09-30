# Cenário Empreendedor de Balneário Camboriú

## Implementação e origem

Rota: `/cenario-empreendedor-bc`. Projeto React/Vite, sem backend ou PostgreSQL configurados. Os valores iniciais são os fornecidos pelo solicitante: setembro/2026 para resumo e setores, agosto/2026 para bairros, histórico de agosto/2025 a setembro/2026. Não houve extração nem validação independente desses números nos arquivos nacionais. `metadata.origem = "seed"` e a nota exibida ao cidadão tornam essa procedência explícita. Não inventar data de atualização.

Fonte primária prevista: [Receita Federal — Dados Abertos CNPJ](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/dados-abertos). O link não constitui certificação dos valores iniciais. Somente após processamento e conferência da base primária usar `origem = "receita-federal"` e registrar `atualizadoEm` no formato ISO 8601. Não alterar a procedência apenas para remover a nota.

## Arquitetura

- `public/data/business/current.json`: resposta agregada pequena, substituível sem alterações nos componentes.
- `public/data/business/snapshots/2026-09.json`: snapshot inicial imutável, incluindo o histórico fornecido. Não existem snapshots completos dos meses anteriores; somente a série histórica disponibilizada.
- `src/types/business.ts`: contrato de dados. Contagens podem ser `number | null`; identificadores são texto.
- `src/services/businessRules.ts`: formatação, validação do contrato, ordenação e cálculo do saldo.
- `src/services/businessDataService.ts`: carregamento assíncrono, cache em memória de 12 horas, deduplicação de requisições concorrentes e timeout de 15 segundos. Não retorna zeros nem troca silenciosamente uma falha de API pelo seed.
- `src/config/business.ts`: URL configurável e flag do iframe.
- `src/components/cenario-empreendedor/`: cards, gráficos SVG, rankings, fonte e iframe opcional. Reutiliza `PageHero`, `card`, botões, cores e ícones do portal. Nenhuma biblioteca de gráficos adicionada.
- `src/pages/DataScenario.tsx`: orquestração dos estados de loading, erro, nova tentativa e conteúdo.

## Contrato e endpoints

O endpoint integrado é único, `GET /api/cenario-empreendedor`, configurado por `VITE_BUSINESS_DATA_URL`. O backend deve retornar **diretamente** um objeto `BusinessDashboard`:

```text
{
  metadata: { fonte, urlFonte, competencia, origem, atualizadoEm?, nota? },
  overview: { competencia, municipio, uf, estabelecimentosAtivos, matrizesAtivas,
              meisAtivos, percentualMei, aberturasMes, baixasMes } | null,
  history: [{ mes, ativos, aberturas, baixas }],
  sectors: { competencia, items: [{ codigoCnae?, nome, quantidade }] },
  neighborhoods: { competencia, completa, items: [{ nome, quantidade }] }
}
```

O JSON em `public/data/business/current.json` é o exemplo executável do contrato. Os endpoints separados `/resumo`, `/setores?limit=10`, `/bairros?limit=10`, `/evolucao?meses=24` e `/movimentacao?meses=24` são alternativas futuras, não rotas fictícias implementadas neste frontend. A integração atual requer apenas o endpoint agregado. Configurações Vite são aplicadas no build; após mudar `.env.local`, reiniciar o servidor/recompilar.

## Regras e indicadores

- Contar estabelecimentos distintos por CNPJ completo; razão social não é chave.
- Filtrar UF `SC`, município de Balneário Camboriú e situação cadastral ativa conforme o leiaute oficial vigente. Resolver o código municipal pela tabela de municípios da Receita: não assumir que coincide com o código IBGE.
- Matrizes: subconjunto com identificador de matriz. Não confundir empresas (CNPJ básico) com estabelecimentos.
- MEIs: cruzar CNPJ básico com Simples/SIMEI; considerar opção SIMEI vigente na data de corte, com datas de opção/exclusão conforme o leiaute.
- Percentual MEI: MEIs ativos / estabelecimentos ativos × 100, uma casa decimal na apresentação. Denominador zero ou desconhecido: `null`.
- Saldo: aberturas menos baixas no mês; calculado na camada de regras. Não derivar de diferenças do estoque ativo.
- Aberturas e baixas são fluxos, não devem ser calculados apenas sobre estabelecimentos atualmente ativos. O ETL deve definir data de início e eventos de baixa/situação usando o leiaute, a data de corte e snapshots; documentar como tratar registros retroativos e reativações. Um único arquivo cadastral atual não reconstrói todos os eventos históricos.
- Setores: CNAE fiscal **principal**, quantidade decrescente. Não inventar códigos CNAE: não foram fornecidos no seed. Top 5 inicial; expansão para todos os itens recebidos (10 no seed).
- Bairros: campo BAIRRO; chave normalizada com trim, espaços simples e uppercase; `normalizeNeighborhood` centraliza a chave. Mapa administrativo de aliases deve ser versionado. Preservar acentos e nomes legíveis na apresentação. Os três bairros iniciais são um recorte, com `completa: false`, sem coordenadas ou geometria inventadas.
- Competências independentes para resumo, setores e bairros. Histórico ordenado cronologicamente; rejeitar mês inválido, repetido e contagens negativas. Ausência é `null`, exibida como `—`; array vazio recebe mensagem específica. `overview: null` representa ausência de resumo.

## Atualização mensal

Não existe job de extração da Receita ativo neste projeto. O processamento nacional deve ocorrer fora do navegador:

1. Job administrativo baixa os arquivos mensais oficiais após verificar disponibilidade e leiaute; registra competência, URLs, hashes, data de corte e execução.
2. Processa por streaming/lotes; filtra SC e município, normaliza, cruza Simples/SIMEI, deduplica por CNPJ e produz os agregados.
3. Valida totais, competência de cada série, consistência entre resumo/histórico e diferenças relevantes em relação ao mês anterior. Dados desconhecidos permanecem `null`.
4. Produz um JSON no contrato acima. Para bases territoriais de outro mês, manter sua competência própria.
5. Testa sem publicar: `node scripts/update-business-data.mjs caminho/agregado.json --dry-run`.
6. Publica localmente: `node scripts/update-business-data.mjs caminho/agregado.json`. A rotina preserva o histórico anterior, rejeita alterações de meses antigos e competências não posteriores, cria um novo snapshot sem sobrescrita e atualiza `current.json` via arquivo temporário. Executar um job por vez. Correções retroativas precisam de processo administrativo versionado, não de sobrescrita silenciosa.
7. Publica os arquivos/endpoint no servidor municipal. Para hospedagem estática, executar build e publicar `dist`, ou atualizar o JSON público no destino. O script não faz deploy e não agenda tarefas.

O arquivo recebido pode conter somente a série do mês novo; a rotina mescla os meses anteriores. Não remover snapshots. O agendador (cron/Task Scheduler/pipeline municipal) ainda precisa ser configurado na infraestrutura que processará a Receita; não depende de acessos ao portal.

## Cache

No servidor/API configurar `Cache-Control: public, max-age=43200` e `ETag`/`Last-Modified` para o agregado atual. Snapshots imutáveis podem receber `max-age=31536000, immutable`. Alteração urgente exige invalidar o cache da CDN. O cache em memória do cliente é adicional e não substitui esses headers. Em desenvolvimento o Vite não representa a configuração de cache de produção. Nenhuma consulta direta à Receita por visitante.

## Banco municipal (opcional, não existente neste repositório)

Se o backend utilizar PostgreSQL, aplicar migração equivalente a:

```sql
CREATE TABLE business_snapshot (
  competence char(7) PRIMARY KEY,
  active_establishments integer,
  active_headquarters integer,
  active_mei integer,
  openings integer,
  closures integer,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE business_sector_snapshot (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  competence char(7) NOT NULL,
  cnae_code text,
  cnae_description text NOT NULL,
  total integer
);
CREATE INDEX business_sector_competence_idx ON business_sector_snapshot (competence);
CREATE TABLE business_neighborhood_snapshot (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  competence char(7) NOT NULL,
  neighborhood text NOT NULL,
  total integer,
  UNIQUE (competence, neighborhood)
);
```

A chave do resumo e a restrição dos bairros já indexam competência. `id bigint` acima é chave técnica, **não CNPJ**. Acrescentar constraints de valores não negativos, rastreabilidade e política de publicação na migração real. O banco servido ao frontend precisa dos agregados, não da base nacional inteira. Competência territorial pode diferir do resumo; por isso não deve depender de uma FK para o mês do resumo.

## CNPJ alfanumérico

CNPJ completo, básico, ordem e DV devem ser strings, com colunas `TEXT`/`VARCHAR` no armazenamento. Nunca usar `parseInt`, `Number` ou bigint sobre identificadores. `src/utils/cnpj.ts` normaliza caixa/pontuação e valida 12 caracteres alfanuméricos + 2 DVs numéricos pelo módulo 11, ASCII - 48. [Manual oficial do DV](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/documentos-tecnicos/cnpj/manual-dv-cnpj.pdf). Conversão por caractere é exclusiva do cálculo do DV; o identificador permanece texto, incluindo zeros iniciais. Os testes incluem o exemplo oficial `12.ABC.345/01DE-35` e CNPJ numérico.

## Gráficos, acessibilidade e iframe

Gráficos ocupam a largura disponível sem scroll horizontal. Série de estoque usa eixo Y ajustado ao intervalo, rotulado em números; valores ausentes interrompem a linha. Movimentação parte de zero e diferencia séries por preenchimento sólido/hachurado, legenda e tabela, não apenas por cor. Pontos/colunas aceitam foco, Enter, espaço e toque. A informação selecionada aparece abaixo do gráfico e em um seletor de mês acessível; tabelas oferecem todos os valores. Preferência de movimento reduzido é herdada do portal.

O mapa de concentração empresarial do ArcGIS fica incorporado no final da página, no lugar do antigo bloco “Painel completo”. `VITE_ENABLE_BUSINESS_DASHBOARD_EMBED` é habilitado por padrão; definir `false` oculta o mapa. `BusinessOfficialDashboardEmbed` usa iframe responsivo, carregamento lazy e link alternativo para abrir o mesmo mapa em nova aba com `noopener noreferrer`. A URL do mapa é `https://gis.emasa.com.br/portal/apps/webappviewer/index.html?id=2eed196a77564b56a71f5e44ea399b47`, usada tanto no iframe quanto no link alternativo. O carregamento depende da disponibilidade e das políticas de incorporação do ArcGIS oficial.

## Validação e limitações

Executar `npm run test:business` e `npm run build`. Os testes cobrem contrato, números nulos, saldo, ordenação, CNPJ, competências e preservação de histórico. A inspeção de navegador deve incluir desktop/mobile, expansão de setores, seleção de meses, loading, erro/retry, vazio, cache e carregamento do mapa incorporado.

Limites: dados iniciais fornecidos, bairros parciais, CNAEs sem códigos, histórico disponível somente desde agosto/2025, API/ETL/agendamento de produção ainda não conectados. Este painel está integrado ao projeto local; não foi publicado no site municipal.
