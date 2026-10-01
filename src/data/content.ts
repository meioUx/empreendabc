import {
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  GraduationCap,
  HandCoins,
  HelpCircle,
  Landmark,
  MapPinned,
  MessageCircle,
  Receipt,
  SearchCheck,
  ShieldCheck,
  Store,
  UserRoundCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type LinkItem = {
  title: string;
  description: string;
  href: string;
  category?: string;
  cta?: string;
  icon?: LucideIcon;
  placeholder?: boolean;
  source?: string;
};

export const contactInfo = {
  name: 'Praça do Empreendedor de Balneário Camboriú',
  whatsapp: '(47) 99105-2900',
  whatsappHref: 'https://wa.me/5547991052900',
  whatsappNote: 'Somente mensagens por escrito, não atende ligação.',
  address: 'Rua 1822, nº 1510 - Centro, Balneário Camboriú - SC, 88330-484',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Rua+1822+1510+Centro+Balneario+Camboriu+SC',
  hours: 'Segunda a sexta, 12h às 17h30',
  email: 'empreendamais@bc.sc.gov.br',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Abrir seu negócio', href: '/abrir-meu-negocio' },
  { label: 'MEI', href: '/mei' },
  { label: 'Nota fiscal', href: '/nota-fiscal' },
  { label: 'Licenças', href: '/viabilidade-licencas-alvaras' },
  { label: 'Certidões', href: '/regularidade-certidoes' },
  { label: 'Compras', href: '/compras-publicas' },
  { label: 'Cursos', href: '/cursos-consultorias' },
  { label: 'Dados', href: '/cenario-empreendedor-bc' },
  { label: 'Biblioteca', href: '/biblioteca' },
  { label: 'Atendimento', href: '/atendimento' },
];

export const headerNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Abrir seu negócio', href: '/abrir-meu-negocio' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Cursos', href: '/cursos-consultorias' },
];

export const intentCards = [
  { title: 'Abrir MEI', description: 'Entenda se o MEI combina com sua atividade e inicie sua formalização.', href: '/mei', icon: UserRoundCheck },
  { title: 'Abrir empresa', description: 'Veja a jornada para ME, EPP ou empresa com apoio contábil.', href: '/abrir-meu-negocio', icon: Building2 },
  { title: 'Nota fiscal', description: 'Acesse orientações para emitir NFS-e de serviço ou NF-e de produto.', href: '/nota-fiscal', icon: Receipt },
  { title: 'Regularizar MEI', description: 'Pague DAS, envie DASN e organize pendências cadastrais.', href: '/mei', icon: BadgeCheck },
  { title: 'Licenças', description: 'Consulte viabilidade, alvarás e órgãos que podem se aplicar.', href: '/viabilidade-licencas-alvaras', icon: ClipboardCheck },
  { title: 'Compras públicas', description: 'Prepare sua empresa para vender para a Prefeitura.', href: '/compras-publicas', icon: Landmark },
  { title: 'Cursos', description: 'Encontre capacitações, consultorias e soluções de parceiros.', href: '/cursos-consultorias', icon: GraduationCap },
  { title: 'Dados do empreendedorismo', description: 'Acesse o painel Cenário Empreendedor em BC.', href: '/cenario-empreendedor-bc', icon: BarChart3 },
];

export const services = [
  ...intentCards,
  { title: 'CND Federal', description: 'Emitir certidão federal para CNPJ.', href: '/regularidade-certidoes', icon: FileCheck2 },
  { title: 'CND Municipal BC', description: 'Acessar certidão municipal pelo portal cidadão.', href: '/regularidade-certidoes', icon: ShieldCheck },
  { title: 'Biblioteca', description: 'Manuais, cartilhas e documentos de apoio.', href: '/biblioteca', icon: BookOpen },
  { title: 'WhatsApp', description: 'Fale com atendimento por mensagem escrita.', href: '/atendimento', icon: MessageCircle },
];

export const executedServices = [
  'Formalização do MEI',
  'Alteração e baixa do MEI',
  'Declaração anual de faturamento do MEI',
  'Regularização do MEI',
  'Emissão de guias do MEI',
  'Emissão de nota fiscal de serviço do MEI',
  'Capacitações',
  'Consultorias',
  'Orientações',
];

export const serviceCategories = [
  {
    title: 'Empresas e MEI',
    description: 'Formalização, alteração, baixa, CCMEI, contratação de empregado e orientações para manter o cadastro em dia.',
    href: '/mei',
    icon: Store,
    items: ['Antes de ser MEI', 'Formalize-se', 'Alteração e baixa', 'CCMEI'],
  },
  {
    title: 'Tributos e regularidade',
    description: 'Guias, declarações, certidões, parcelamentos e comprovantes para organizar a situação do CNPJ.',
    href: '/regularidade-certidoes',
    icon: FileCheck2,
    items: ['Boleto mensal DAS', 'DASN', 'Certidões negativas', 'Parcelamentos'],
  },
  {
    title: 'Nota fiscal',
    description: 'Acesso ao emissor de NFS-e do MEI, inscrição estadual quando aplicável e manuais de apoio.',
    href: '/nota-fiscal',
    icon: Receipt,
    items: ['NFS-e MEI', 'Inscrição Estadual MEI', 'Manuais de emissão', 'Erros e dificuldades'],
  },
  {
    title: 'Licenciamento',
    description: 'Viabilidade de endereço e atividade, normas sanitárias, meio ambiente, bombeiros e Polícia Civil.',
    href: '/viabilidade-licencas-alvaras',
    icon: ClipboardCheck,
    items: ['Consulta de viabilidade', 'Sanitária', 'Meio ambiente', 'Bombeiros'],
  },
  {
    title: 'Compras públicas',
    description: 'Preparação de MEI, ME e EPP para consultar licitações, acessar portais oficiais e manter certidões em dia.',
    href: '/compras-publicas',
    icon: Landmark,
    items: ['Contrata + Brasil', 'PNCP', 'Certidões', 'Consultas de licitações'],
  },
  {
    title: 'Cursos e consultorias',
    description: 'Agenda da Praça, capacitações do Sebrae e grupo de WhatsApp para acompanhar oportunidades.',
    href: '/cursos-consultorias',
    icon: GraduationCap,
    items: ['Agenda editável', 'Sebrae SC', 'Sebrae Nacional', 'Grupo WhatsApp'],
  },
];

export const businessSteps = [
  'Defina atividade e modelo de negócio',
  'Veja se pode ser MEI',
  'Consulte viabilidade do endereço e da atividade',
  'Formalize no gov.br/MEI ou siga a abertura de empresa',
  'Organize documentos, CNAE, capital social e endereço',
  'Verifique licenças e normas aplicáveis',
  'Emita notas quando necessário',
  'Mantenha obrigações em dia',
];

export const businessProfiles = [
  { title: 'MEI', description: 'Para quem atua em atividade permitida, dentro dos limites do MEI e busca formalização simples.', icon: Store },
  { title: 'ME/EPP', description: 'Para negócios que precisam de estrutura societária, faturamento maior ou enquadramento diferente.', icon: Building2 },
  { title: 'Consultoria SENAI', description: 'Parceiro para empresas que buscam consultoria, tecnologia e apoio para melhorar a competitividade do negócio.', icon: Award, href: 'https://institutos.sc.senai.br/', cta: 'Acessar SENAI' },
];

const meiBoletoManual: LinkItem = { title: 'Manual de Boleto MEI', description: 'Consulte o passo a passo para emitir o boleto mensal DAS do MEI.', href: '/assets/docs/manual-boleto-mei.pdf', category: 'MEI', cta: 'Abrir PDF', icon: BookOpen };

export const meiLinks: LinkItem[] = [
  { title: 'Antes de ser MEI', description: 'Confira limites, atividades permitidas e responsabilidades antes de formalizar.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/o-que-voce-precisa-saber-antes-de-se-tornar-um-mei', cta: 'Ler orientação', icon: HelpCircle },
  { title: 'Passo a passo para formalizar seu negócio', description: 'Consulte a cartilha de orientação antes de abrir seu MEI ou iniciar a formalização da empresa.', href: '/assets/docs/manual-formalizacao-mei.pdf', cta: 'Abrir cartilha', icon: UserRoundCheck },
  { title: 'Formalize-se', description: 'Acesse o serviço oficial para abrir seu MEI quando já estiver com as informações organizadas.', href: 'https://mei.receita.economia.gov.br/inscricao/login', cta: 'Formalizar no gov.br', icon: UserRoundCheck },
  { title: 'Alteração de dados', description: 'Atualize dados cadastrais do seu MEI.', href: 'https://mei.receita.economia.gov.br/alteracao/login', cta: 'Alterar dados', icon: FileText },
  { title: 'CCMEI', description: 'Emita o Certificado da Condição de Microempreendedor Individual.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei', cta: 'Emitir comprovante', icon: BadgeCheck },
  { title: 'Boleto mensal DAS', description: 'Gere a guia mensal de pagamento do MEI.', href: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao', cta: 'Pagar DAS', icon: Receipt },
  meiBoletoManual,
  { title: 'DASN', description: 'Envie a Declaração Anual de Faturamento do MEI.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/declaracao-anual-de-faturamento', cta: 'Fazer declaração', icon: FileCheck2 },
  { title: 'Baixa MEI', description: 'Encerre formalmente o CNPJ MEI quando necessário.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/baixa-de-mei', cta: 'Solicitar baixa', icon: ClipboardCheck },
  { title: 'Dúvidas MEI', description: 'Consulte perguntas frequentes no portal oficial.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/perguntas-frequentes', cta: 'Ver dúvidas', icon: HelpCircle },
  { title: 'Contratação de empregado', description: 'Entenda orientações para MEI que precisa contratar.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/contratacao-de-empregado', cta: 'Consultar', icon: UserRoundCheck },
  { title: 'CredMEI', description: 'Acesse informações sobre crédito para empreendedores.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/credito', cta: 'Conhecer crédito', icon: HandCoins },
  { title: 'Regularização', description: 'Organize guias, declaração anual e dados cadastrais antes de buscar atendimento.', href: '/regularidade-certidoes', cta: 'Ver regularidade', icon: ShieldCheck },
];

export const invoiceLinks: LinkItem[] = [
  { title: 'NFS-e MEI', description: 'Emissor Nacional para nota fiscal de serviço do MEI.', href: 'https://www.nfse.gov.br/EmissorNacional/Login?ReturnUrl=%2fEmissorNacional', cta: 'Emitir NFS-e', icon: Receipt },
  { title: 'Inscrição Estadual MEI', description: 'Solicitação em Santa Catarina quando aplicável à atividade.', href: 'https://www.sef.sc.gov.br/servicos/simei-solicitacao-inscricao-estadual', cta: 'Solicitar', icon: FileCheck2 },
  { title: 'Manual NFS-e MEI', description: 'Arquivo de apoio para emissão de NFS-e.', href: '/assets/docs/manual-nfse-mei.pdf', category: 'Nota Fiscal', cta: 'Abrir PDF', icon: FileText },
  { title: 'Manual erros NFS-e', description: 'Orientações para mensagens de erro comuns no emissor.', href: '/assets/docs/manual-erros-nfse-mei.pdf', category: 'Nota Fiscal', cta: 'Abrir PDF', icon: FileText },
  { title: 'CNAE x Código Serviço NFS-e MEI', description: 'Manual de consulta para relacionar CNAE e código de serviço na NFS-e do MEI.', href: '/assets/docs/manual-cnae-codigo-servico-nfse-mei.pdf', category: 'Nota Fiscal', cta: 'Abrir PDF', icon: FileText },
  { title: 'Manual NF-e Produto APP NFF', description: 'Material de orientação para emissão de NF-e de produto.', href: '/assets/docs/manual-nfe-produto-app-nff.pdf', category: 'Nota Fiscal', cta: 'Abrir PDF', icon: FileText },
];

export const licenseLinks: LinkItem[] = [
  { title: 'Consulta/Pedido de Viabilidade', description: 'Consulte a compatibilidade da atividade com o endereço. No sistema estadual, selecione Balneário Camboriú. A viabilidade não substitui as licenças exigidas para funcionar.', href: 'https://www.jucesc.sc.gov.br/index.php/servicos/viabilidade-regin', cta: 'Consultar viabilidade', icon: SearchCheck, source: 'JUCESC • Santa Catarina' },
  { title: 'Vigilância Sanitária', description: 'Acesse as orientações municipais para alvará sanitário, requerimentos e atendimento. Consulte as exigências aplicáveis à sua atividade em Balneário Camboriú.', href: 'https://www.bc.sc.gov.br/artigo/20', cta: 'Consultar a Vigilância', icon: ShieldCheck, source: 'Prefeitura de Balneário Camboriú' },
  { title: 'Meio Ambiente', description: 'Use o simulador do IMA, também indicado no catálogo da Prefeitura, para consultar o enquadramento ambiental. A simulação orienta a consulta e não emite uma licença.', href: 'https://consultas.ima.sc.gov.br/simulador', cta: 'Consultar enquadramento', icon: MapPinned, source: 'IMA • Santa Catarina' },
  { title: 'Bombeiros', description: 'Acesse o e-SCI para os procedimentos de segurança contra incêndio. O sistema estadual utiliza o acesso da plataforma e-Bombeiro.', href: 'https://esci.cbm.sc.gov.br/', cta: 'Acessar e-SCI', icon: ClipboardCheck, source: 'Corpo de Bombeiros Militar • SC' },
  { title: 'Polícia Civil', description: 'Consulte documentos e procedimentos para atividades sujeitas à fiscalização de jogos e diversões públicas. A exigência depende da atividade exercida.', href: 'https://pc.sc.gov.br/?page_id=35262', cta: 'Consultar autorizações', icon: ShieldCheck, source: 'Polícia Civil • Santa Catarina' },
  { title: 'Taxas municipais', description: 'Consulte débitos e emita guias no Portal do Cidadão de Balneário Camboriú. Os valores e lançamentos devem ser conferidos no cadastro do contribuinte.', href: 'https://cidadao.bc.sc.gov.br/cidadao/balneario_camboriu/portal/servicos/debitos?params=NA%3D%3D', cta: 'Consultar e emitir guias', icon: Receipt, source: 'Prefeitura de Balneário Camboriú' },
];

export const licenseDocuments: LinkItem[] = [
  { title: 'Como fazer o pedido de viabilidade', description: 'Passo a passo da nova consulta da JUCESC: município, endereço, atividades e informações municipais. Escolha Balneário Camboriú para o seu estabelecimento.', href: 'https://atendimento.jucesc.sc.gov.br/help/pt-br/72-consulta-de-viabilidade-dbe-requerimento-eletronico-e-demais-procedimentos-de-sistema/427-como-preencher-a-nova-consulta-de-viabilidade', category: 'Licenciamento', cta: 'Ler o passo a passo', icon: SearchCheck, source: 'JUCESC • Santa Catarina' },
  { title: 'Alvará fazendário eletrônico', description: 'Acesso ao serviço municipal de alvará fazendário eletrônico. Consulte a disponibilidade do documento para o cadastro da empresa.', href: 'https://cidadao.bc.sc.gov.br/cidadao/balneario_camboriu/portal/servicos/alvaras?params=MjU%3D', category: 'Licenciamento', cta: 'Acessar alvará fazendário', icon: FileCheck2, source: 'Prefeitura de Balneário Camboriú' },
  { title: 'Alvará sanitário eletrônico', description: 'Acesse o serviço municipal para consultar e emitir o alvará sanitário eletrônico disponibilizado para o estabelecimento.', href: 'https://cidadao.bc.sc.gov.br/cidadao/balneario_camboriu/portal/servicos/alvaras?params=MTQ%3D', category: 'Sanitária', cta: 'Acessar alvará sanitário', icon: ShieldCheck, source: 'Prefeitura de Balneário Camboriú' },
  { title: 'Orientações da Vigilância Sanitária', description: 'Informações oficiais, requerimentos e canais de atendimento da Vigilância Sanitária municipal. Atendimento na Avenida Palestina, 150, 1º piso, bairro Nações, entrada pela Rua Suíça.', href: 'https://www.bc.sc.gov.br/artigo/20', category: 'Sanitária', cta: 'Consultar orientações', icon: BookOpen, source: 'Prefeitura de Balneário Camboriú' },
  { title: 'Grau de risco da atividade', description: 'O guia estadual explica a análise de risco sanitário, ambiental e de incêndio na consulta de viabilidade. Confira o resultado para a atividade e as orientações municipais de Balneário Camboriú.', href: 'https://atendimento.jucesc.sc.gov.br/help/pt-br/72-consulta-de-viabilidade-dbe-requerimento-eletronico-e-demais-procedimentos-de-sistema/427-como-preencher-a-nova-consulta-de-viabilidade', category: 'Sanitária', cta: 'Entender a análise de risco', icon: SearchCheck, source: 'JUCESC • Santa Catarina' },
  { title: 'Lei municipal nº 5.204/2026', description: 'Acesse a publicação da Lei nº 5.204, de 23 de janeiro de 2026, de Balneário Camboriú no Diário Oficial dos Municípios.', href: 'https://edicao.dom.sc.gov.br/atos/7922677', category: 'Licenciamento', cta: 'Consultar publicação', icon: FileText, source: 'Balneário Camboriú • Diário Oficial' },
  { title: 'Legislação municipal', description: 'Consulte as publicações de Balneário Camboriú. Para pesquisar o Código Sanitário e sua alteração, utilize os números das leis complementares 40/2019 e 55/2019.', href: 'https://edicao.dom.sc.gov.br/?r=site%2FmunView&id=128', category: 'Sanitária', cta: 'Pesquisar normas de BC', icon: FileText, source: 'Balneário Camboriú • Diário Oficial' },
  { title: 'Serviços e protocolos municipais', description: 'Catálogo oficial de Balneário Camboriú com acesso aos protocolos, à viabilidade de zoneamento e aos serviços de licenciamento disponíveis.', href: 'https://www.bc.sc.gov.br/servicos', category: 'Licenciamento', cta: 'Consultar serviços de BC', icon: ClipboardCheck, source: 'Prefeitura de Balneário Camboriú' },
  { title: 'Jogos e diversões públicas', description: 'Orientações estaduais sobre documentos, taxas e modalidades de alvará para as atividades abrangidas pela fiscalização da Polícia Civil.', href: 'https://pc.sc.gov.br/?page_id=35262', category: 'Licenciamento', cta: 'Ler as orientações', icon: ShieldCheck, source: 'Polícia Civil • Santa Catarina' },
];

export const certificates: LinkItem[] = [
  { title: 'CND Federal', description: 'Certidão federal para CNPJ.', href: 'https://servicos.receitafederal.gov.br/servico/certidoes/#/home/cnpj', icon: FileCheck2 },
  { title: 'CND Estadual SC', description: 'Certidão negativa estadual em Santa Catarina.', href: 'https://sat.sef.sc.gov.br/tax.NET/Sat.CtaCte.Web/SolicitacaoCnd.aspx', icon: FileCheck2 },
  { title: 'CND Municipal BC', description: 'Certidão municipal no portal cidadão de Balneário Camboriú.', href: 'https://cidadao.bc.sc.gov.br/cidadao/balneario_camboriu/portal/servicos/certidoes/emissao?params=MTU%3D', icon: FileCheck2 },
  { title: 'Débitos trabalhistas', description: 'Consulta de certidão de débitos trabalhistas.', href: 'https://www.tst.jus.br/certidao1', icon: ShieldCheck },
  { title: 'Regularidade FGTS', description: 'Consulta CRF da Caixa para empregador.', href: 'https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf', icon: ShieldCheck },
  { title: 'Comprovante CNPJ', description: 'Emissão do comprovante de inscrição e situação cadastral.', href: 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp', icon: FileText },
  { title: 'Parcelamento Simples', description: 'Serviços de parcelamento no Simples Nacional.', href: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Servicos/Grupo.aspx?grp=19', icon: Receipt },
  { title: 'Dívida Ativa', description: 'Regularize débitos inscritos na PGFN.', href: 'https://www.regularize.pgfn.gov.br/', icon: BadgeCheck },
];

export const procurementLinks: LinkItem[] = [
  { title: 'Cartilha de Compras Governamentais BC 2026', description: 'Material de apoio para fornecedores locais que querem vender para o poder público.', href: '/assets/docs/cartilha-compras-governamentais-bc-2026.docx', category: 'Compras Públicas', cta: 'Abrir cartilha', icon: BookOpen },
  { title: 'Checklist Unificado de Documentos', description: 'Lista de documentos para apoiar a preparação da empresa antes de participar de compras públicas.', href: '/assets/docs/checklist-unificado-documentos.docx', category: 'Compras Públicas', cta: 'Abrir checklist', icon: FileCheck2 },
  { title: 'Contrata + Brasil - Área do Fornecedor', description: 'Acesse informações e serviços do Contrata + Brasil voltados ao fornecedor.', href: 'https://www.gov.br/contratamaisbrasil/pt-br/area-do-fornecedor', cta: 'Acessar', icon: Landmark },
  { title: 'Portal Nacional de Compras Públicas', description: 'Consulte contratações, editais, atas e oportunidades publicadas no PNCP.', href: 'https://www.gov.br/pncp/pt-br', cta: 'Consultar PNCP', icon: SearchCheck },
  { title: 'SICAF - Cadastro de Fornecedores', description: 'Acesse o sistema federal de cadastramento de fornecedores.', href: 'https://www3.comprasnet.gov.br', cta: 'Acessar SICAF', icon: ClipboardCheck },
  { title: 'Portal Compras do Governo Federal', description: 'Consulte serviços, orientações e oportunidades de compras do Governo Federal.', href: 'https://www.gov.br/compras', cta: 'Acessar portal', icon: Landmark },
  { title: 'Contrata + Brasil', description: 'Atalho para o portal gov.br relacionado ao programa Contrata + Brasil.', href: 'https://www.gov.br/pt-br', cta: 'Acessar gov.br', icon: Landmark },
  { title: 'Certidões necessárias', description: 'Organize documentos de regularidade antes de participar de compras públicas.', href: '/regularidade-certidoes', cta: 'Emitir certidões', icon: FileCheck2 },
  { title: 'Consulta de licitações', description: 'Use os portais oficiais para acompanhar editais, prazos e oportunidades abertas.', href: 'https://www.gov.br/pncp/pt-br', cta: 'Consultar licitações', icon: SearchCheck },
];

export const documents: LinkItem[] = [
  meiBoletoManual,
  { title: 'Identidade da marca Empreenda+ BC', description: 'Apresentação da marca: conceito, cores e linguagem visual. Arquivo PDF.', href: '/assets/docs/identidade-marca-empreenda-mais-bc.pdf', category: 'Identidade visual', icon: FileText },
  { title: 'Logo Empreenda+ BC', description: 'Logo original em PNG com fundo transparente.', href: '/assets/logo_empreenda_mais_bc_transparente.png', category: 'Identidade visual', icon: FileText },

  { title: 'Manual de Formalização do MEI', description: 'Manual digital anexado para orientar a formalização do MEI.', href: '/assets/docs/manual-formalizacao-mei.pdf', category: 'MEI', cta: 'Abrir PDF', icon: BookOpen },
  { title: 'Cartilha de Compras Governamentais BC 2026', description: 'Material de apoio para fornecedores locais que querem vender para o poder público.', href: '/assets/docs/cartilha-compras-governamentais-bc-2026.docx', category: 'Compras Públicas', cta: 'Abrir DOCX', icon: BookOpen },
  { title: 'Checklist Unificado de Documentos', description: 'Documento de apoio para organizar certidões, cadastros e demais itens necessários.', href: '/assets/docs/checklist-unificado-documentos.docx', category: 'Compras Públicas', cta: 'Abrir DOCX', icon: FileCheck2 },
  ...invoiceLinks.filter((item) => item.category === 'Nota Fiscal'),
  ...licenseDocuments,
  ...procurementLinks.filter((item) => item.placeholder),
  { title: 'Passo a passo para formalização de empresas no município', description: 'Material citado como conteúdo a elaborar para abertura de empresas em Balneário Camboriú.', href: '#', category: 'MEI', cta: 'Em elaboração', icon: FileText, placeholder: true },
  { title: 'Cartilha MEI', description: 'Documento de apoio para orientação inicial.', href: '#', category: 'MEI', cta: 'PDF em breve', icon: BookOpen, placeholder: true },
  { title: 'Manuais gerais', description: 'Repositório para materiais de autoatendimento.', href: '#', category: 'Manuais', cta: 'Em breve', icon: FileText, placeholder: true },
  { title: 'Cartilhas de parceiros', description: 'Materiais de entidades, universidades e instituições parceiras.', href: '#', category: 'Cartilhas', cta: 'Em breve', icon: BookOpen, placeholder: true },
];

// Agenda de 2026 informada pela Praça do Empreendedor.
// Mantém o nono dígito do WhatsApp oficial já utilizado no portal.
export const courses = [
  { date: '07/10/2026', endsAt: '2026-10-07T21:00:00-03:00', theme: 'Comece a Planejar o Marketing de sua Empresa', format: 'Oficina • 17h às 21h', location: 'Centro Comunitário Nova Esperança — Balneário Camboriú', audience: 'Capacitação com o Sebrae para planejar o marketing da sua empresa.' },
  { date: '21/10/2026', endsAt: '2026-10-21T21:00:00-03:00', theme: 'Vendas: Impulsione suas Vendas com WhatsApp Business e Instagram', format: 'Oficina • 18h às 21h', location: 'Centro Comunitário Nova Esperança — Rua Alécio Domingos Linhares, Nova Esperança, Balneário Camboriú — SC, 88336-280', audience: 'Oficina sobre vendas com WhatsApp Business e Instagram.' },
  { date: '17/11/2026', endsAt: '2026-11-17T17:00:00-03:00', theme: 'Consultoria Individual', format: 'Atendimento individual • 9h às 12h e 13h às 17h', location: 'Centro Comunitário Estaleiro Tonho Cilo — Rua Vereador Domingos Fonseca, Praia do Estaleiro, Balneário Camboriú', audience: 'Atendimento individual para empreendedores.' },
].map(course => ({
  ...course,
  signup: `${contactInfo.whatsappHref}?text=${encodeURIComponent(`Olá, tenho interesse em participar do evento ${course.theme}, no dia ${course.date}. Como faço minha inscrição?`)}`,
}));

export function getUpcomingCourses(now = Date.now()) {
  return courses
    .filter(course => new Date(course.endsAt).getTime() > now)
    .sort((a, b) => new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime());
}

export const dataCards = [
  { title: 'Empresas ativas', description: 'Indicador reservado para integração com fonte oficial.', icon: Building2 },
  { title: 'MEIs', description: 'Espaço para acompanhamento do universo MEI no município.', icon: Store },
  { title: 'Setores em destaque', description: 'Área para leitura por atividade econômica.', icon: BarChart3 },
  { title: 'Bairros com maior concentração', description: 'Visualização territorial para análise local.', icon: MapPinned },
  { title: 'Evolução mensal', description: 'Série histórica para acompanhar abertura e movimentação.', icon: SearchCheck },
];

export const faq = [
  { question: 'A Praça abre empresas no lugar do empreendedor?', answer: 'A Praça orienta, facilita o acesso aos serviços oficiais e estimula o autoatendimento. Quando necessário, indica o caminho adequado para cada situação.' },
  { question: 'O atendimento pelo WhatsApp recebe ligações?', answer: 'Não. O WhatsApp informado atende somente mensagens por escrito.' },
  { question: 'Preciso levar documentos para atendimento presencial?', answer: 'Depende do serviço. Antes de ir, envie uma mensagem informando sua necessidade para receber orientação inicial.' },
  { question: 'Todo MEI pode emitir nota fiscal pelo mesmo sistema?', answer: 'MEI prestador de serviço costuma usar a NFS-e nacional. Atividades de produto podem envolver inscrição estadual e outros emissores. Consulte a página de Nota Fiscal.' },
];

export const partners = [
  'Casa Civil',
  'Compras',
  'Turismo',
  'Educação',
  'Assistência Social',
  'Mulher e Família',
  'Fundação Cultural',
  'Entidades empresariais',
  'Microcrédito',
  'Instituições financeiras',
  'Universidades',
];
