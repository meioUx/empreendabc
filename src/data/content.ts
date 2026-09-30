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
};

export const contactInfo = {
  name: 'Praça do Empreendedor de Balneário Camboriú',
  whatsapp: '(47) 99105-2900',
  whatsappHref: 'https://wa.me/5547991052900',
  whatsappNote: 'Somente mensagens por escrito, não atende ligação.',
  address: 'Rua 1822, nº 1510 - Centro, Balneário Camboriú - SC, 88330-484',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Rua+1822+1510+Centro+Balneario+Camboriu+SC',
  hours: 'Segunda a sexta, 12h às 17h30',
  email: 'saladoempreendedorbc@gmail.com',
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

export const meiLinks: LinkItem[] = [
  { title: 'Antes de ser MEI', description: 'Confira limites, atividades permitidas e responsabilidades antes de formalizar.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/quero-ser-mei/o-que-voce-precisa-saber-antes-de-se-tornar-um-mei', cta: 'Ler orientação', icon: HelpCircle },
  { title: 'Passo a passo para formalizar seu negócio', description: 'Consulte a cartilha de orientação antes de abrir seu MEI ou iniciar a formalização da empresa.', href: '/assets/docs/manual-formalizacao-mei.pdf', cta: 'Abrir cartilha', icon: UserRoundCheck },
  { title: 'Formalize-se', description: 'Acesse o serviço oficial para abrir seu MEI quando já estiver com as informações organizadas.', href: 'https://mei.receita.economia.gov.br/inscricao/login', cta: 'Formalizar no gov.br', icon: UserRoundCheck },
  { title: 'Alteração de dados', description: 'Atualize dados cadastrais do seu MEI.', href: 'https://mei.receita.economia.gov.br/alteracao/login', cta: 'Alterar dados', icon: FileText },
  { title: 'CCMEI', description: 'Emita o Certificado da Condição de Microempreendedor Individual.', href: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/emissao-de-comprovante-ccmei', cta: 'Emitir comprovante', icon: BadgeCheck },
  { title: 'Boleto mensal DAS', description: 'Gere a guia mensal de pagamento do MEI.', href: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao', cta: 'Pagar DAS', icon: Receipt },
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
  { title: 'Manual NFS-e MEI', description: 'Arquivo de apoio para emissão de NFS-e.', href: '#', category: 'Nota Fiscal', cta: 'PDF em breve', icon: FileText, placeholder: true },
  { title: 'Manual erros NFS-e', description: 'Orientações para mensagens de erro comuns no emissor.', href: '#', category: 'Nota Fiscal', cta: 'PDF em breve', icon: FileText, placeholder: true },
  { title: 'CNAE x Código Serviço NFS-e MEI', description: 'Documento de consulta para apoio à classificação.', href: '#', category: 'Nota Fiscal', cta: 'DOCX em breve', icon: FileText, placeholder: true },
  { title: 'Manual NF-e Produto APP NFF', description: 'Material de orientação para emissão de NF-e de produto.', href: '#', category: 'Nota Fiscal', cta: 'PDF em breve', icon: FileText, placeholder: true },
];

export const licenseLinks: LinkItem[] = [
  { title: 'Consulta/Pedido de Viabilidade', description: 'Confira se endereço e atividade são compatíveis antes de funcionar.', href: 'https://www.jucesc.sc.gov.br/index.php/servicos/viabilidade-regin#pedido-de-viabilidade', cta: 'Consultar', icon: SearchCheck },
  { title: 'Vigilância Sanitária', description: 'Verifique exigências quando a atividade envolver saúde, alimentos ou riscos sanitários.', href: '#', cta: 'Orientação em breve', icon: ShieldCheck, placeholder: true },
  { title: 'Meio Ambiente', description: 'Consulte possíveis licenças ambientais conforme a atividade.', href: '#', cta: 'Orientação em breve', icon: MapPinned, placeholder: true },
  { title: 'Bombeiros', description: 'Veja se a estrutura precisa de análise ou autorização do Corpo de Bombeiros.', href: '#', cta: 'Orientação em breve', icon: ClipboardCheck, placeholder: true },
  { title: 'Polícia Civil', description: 'Algumas atividades podem exigir autorização específica.', href: '#', cta: 'Orientação em breve', icon: ShieldCheck, placeholder: true },
  { title: 'Taxas e normas municipais', description: 'Área reservada para materiais oficiais do município.', href: '#', cta: 'Em breve', icon: FileText, placeholder: true },
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
  { title: 'Cadastro de fornecedores', description: 'Item em standby até definição do link oficial de cadastro municipal.', href: '#', cta: 'Em standby', icon: ClipboardCheck, placeholder: true },
  { title: 'Dicas de preparação', description: 'Acompanhe editais, confira prazos e mantenha dados atualizados.', href: '#', cta: 'Conteúdo em breve', icon: BadgeCheck, placeholder: true },
];

export const documents: LinkItem[] = [
  { title: 'Identidade da marca Empreenda+ BC', description: 'Apresentação da marca: conceito, cores e linguagem visual. Arquivo PDF.', href: '/assets/docs/identidade-marca-empreenda-mais-bc.pdf', category: 'Identidade visual', icon: FileText },
  { title: 'Logo Empreenda+ BC', description: 'Logo original em PNG com fundo transparente.', href: '/assets/logo_empreenda_mais_bc_transparente.png', category: 'Identidade visual', icon: FileText },

  { title: 'Manual de Formalização do MEI', description: 'Manual digital anexado para orientar a formalização do MEI.', href: '/assets/docs/manual-formalizacao-mei.pdf', category: 'MEI', cta: 'Abrir PDF', icon: BookOpen },
  { title: 'Cartilha de Compras Governamentais BC 2026', description: 'Material de apoio para fornecedores locais que querem vender para o poder público.', href: '/assets/docs/cartilha-compras-governamentais-bc-2026.docx', category: 'Compras Públicas', cta: 'Abrir DOCX', icon: BookOpen },
  { title: 'Checklist Unificado de Documentos', description: 'Documento de apoio para organizar certidões, cadastros e demais itens necessários.', href: '/assets/docs/checklist-unificado-documentos.docx', category: 'Compras Públicas', cta: 'Abrir DOCX', icon: FileCheck2 },
  { title: 'Como fazer o pedido de viabilidade', description: 'Anexo citado como material de apoio para consulta e pedido de viabilidade.', href: '#', category: 'Licenciamento', cta: 'Anexo em breve', icon: SearchCheck, placeholder: true },
  ...invoiceLinks.filter((item) => item.placeholder),
  ...licenseLinks.filter((item) => item.placeholder),
  ...procurementLinks.filter((item) => item.placeholder),
  { title: 'Passo a passo para formalização de empresas no município', description: 'Material citado como conteúdo a elaborar para abertura de empresas em Balneário Camboriú.', href: '#', category: 'MEI', cta: 'Em elaboração', icon: FileText, placeholder: true },
  { title: 'Cartilha MEI', description: 'Documento de apoio para orientação inicial.', href: '#', category: 'MEI', cta: 'PDF em breve', icon: BookOpen, placeholder: true },
  { title: 'Roteiro de Licenciamento', description: 'Checklist orientativo para atividades e licenças.', href: '#', category: 'Licenciamento', cta: 'PDF em breve', icon: ClipboardCheck, placeholder: true },
  { title: 'Manual Sanitária', description: 'Espaço para normas e orientações sanitárias oficiais.', href: '#', category: 'Sanitária', cta: 'PDF em breve', icon: ShieldCheck, placeholder: true },
  { title: 'VISA - Alteração Código Sanitário LC 55/2019', description: 'Norma sanitária citada no documento institucional.', href: '#', category: 'Sanitária', cta: 'PDF em breve', icon: ShieldCheck, placeholder: true },
  { title: 'VISA - Código Sanitário LC 40/2019', description: 'Norma sanitária citada no documento institucional.', href: '#', category: 'Sanitária', cta: 'PDF em breve', icon: ShieldCheck, placeholder: true },
  { title: 'VISA - Grau de risco', description: 'Anexo de grau de risco citado para licenciamento sanitário.', href: '#', category: 'Sanitária', cta: 'PDF em breve', icon: ShieldCheck, placeholder: true },
  { title: 'VISA - Taxa de Licenciamento Lei Ordinária 5204/2026', description: 'Arquivo citado para taxas de licenciamento sanitário.', href: '#', category: 'Sanitária', cta: 'PDF em breve', icon: ShieldCheck, placeholder: true },
  { title: 'Manuais gerais', description: 'Repositório para materiais de autoatendimento.', href: '#', category: 'Manuais', cta: 'Em breve', icon: FileText, placeholder: true },
  { title: 'Cartilhas de parceiros', description: 'Materiais de entidades, universidades e instituições parceiras.', href: '#', category: 'Cartilhas', cta: 'Em breve', icon: BookOpen, placeholder: true },
];

export const courses = [
  { date: '15/07', theme: 'Comunicação assertiva para os negócios', format: 'Oficina - 19h', location: 'Casa dos Conselhos, Rua 1822, nº 1510', audience: 'Como líderes impactam o dia a dia das empresas com uma comunicação clara e eficaz.', signup: '#' },
  { date: '22/07', theme: 'Praça do Empreendedor', format: 'Atendimento itinerante - 9h às 12h e 13h às 17h', location: 'Centro Comunitário da Vila Real, Rua Dom Daniel, esquina com a Rua Dom Ricardo', audience: 'Orientações sobre regularizações, parcelamentos, guias e notas fiscais.', signup: '#' },
  { date: '29/07', theme: 'Praça do Empreendedor', format: 'Atendimento itinerante - 9h às 12h e 13h às 17h', location: 'UBS do bairro dos Municípios, Rua Alfredo Wagner, s/n', audience: 'Orientações sobre regularizações, parcelamentos, guias e notas fiscais.', signup: '#' },
  { date: '30/07', theme: 'Compras Públicas', format: 'Oficina - 19h', location: 'Casa dos Conselhos, Rua 1822, nº 1510', audience: 'Oportunidades no setor público, licitações, documentação e nova lei de licitações.', signup: '#' },
  { date: '12/08', theme: 'Transforme sua reunião em algo que valha a pena', format: 'Oficina - 17h', location: 'Centro de Treinamento Comunitário (CTC), Rua Itália, nº 1059', audience: 'Dinâmicas para conduzir reuniões produtivas e envolver a equipe.', signup: '#' },
  { date: '25/08', theme: 'Faça seu fluxo de caixa e controle seu capital de giro', format: 'Oficina - 17h', location: 'Casa dos Conselhos, Rua 1822, nº 1510', audience: 'Aprenda a montar o fluxo de caixa e administrar o capital de giro.', signup: '#' },
];

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
