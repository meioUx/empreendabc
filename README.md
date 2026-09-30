# Empreenda+ Balneário Camboriú

Portal da Praça do Empreendedor, desenvolvido com React, TypeScript, Vite e Tailwind CSS.

## Executar localmente

```sh
npm ci
npm run dev
```

## Verificar e compilar

```sh
npm run test:business
npm run build
npm run preview
```

O build é gerado em `dist/`. Em hospedagem estática, configure o fallback das rotas para `index.html` (React Router).

## Cenário Empreendedor

Indicadores, gráficos, rankings e mapa ArcGIS em `/cenario-empreendedor-bc`. Os dados iniciais foram fornecidos para implantação e estão identificados como referência; a atualização automática pela Receita Federal ainda depende de backend/ETL municipal.

Consulte [a documentação técnica](docs/cenario-empreendedor.md) para contrato da API, atualização mensal, preservação de histórico e configuração do mapa. As opções de ambiente estão em `.env.example`.

## Marca

Logo e materiais em `public/assets/`. A apresentação de identidade visual está disponível na Biblioteca do portal.
