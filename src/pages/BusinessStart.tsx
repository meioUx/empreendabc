import { useState } from 'react';
import { LinkCard } from '../components/Cards';
import { PageHero } from '../components/PageHero';
import { businessProfiles, businessSteps } from '../data/content';

const businessStepDetails = [
  {
    description: 'Comece definindo o que será vendido, para quem, onde a atividade acontecerá e se o modelo combina com MEI, ME, EPP ou outro enquadramento.',
    actions: ['Descreva produtos ou serviços principais.', 'Confira se haverá atendimento presencial, delivery, online ou em endereço fixo.', 'Separe dúvidas fiscais ou societárias para atendimento especializado.'],
  },
  {
    description: 'Antes de formalizar, verifique se a atividade é permitida para MEI, se o faturamento previsto cabe no limite e se as responsabilidades combinam com sua operação.',
    actions: ['Consulte atividades permitidas no portal oficial.', 'Confira limites de faturamento e regras de contratação.', 'Se houver sócio ou atividade vedada, avalie abrir empresa com contador.'],
  },
  {
    description: 'A viabilidade ajuda a confirmar se o endereço e a atividade podem funcionar juntos, evitando abrir o CNPJ em um local que depois não consiga operar.',
    actions: ['Consulte a viabilidade do endereço pretendido.', 'Verifique regras municipais e exigências por atividade.', 'Guarde protocolos e respostas recebidas.'],
  },
  {
    description: 'Com a atividade e o endereço alinhados, siga pelo Portal do Empreendedor para MEI ou pela abertura de empresa com apoio contábil, conforme o porte escolhido.',
    actions: ['Use canais oficiais para formalização do MEI.', 'Para ME, EPP ou sociedade, procure apoio contábil.', 'Revise dados antes de concluir a inscrição.'],
  },
  {
    description: 'Documentos bem organizados reduzem retrabalho na formalização, em licenças e no atendimento da Praça do Empreendedor.',
    actions: ['Tenha documentos pessoais e comprovante de endereço em mãos.', 'Defina CNAE principal e secundários com cuidado.', 'Registre capital social, nome empresarial e dados de sócios quando houver.'],
  },
  {
    description: 'Algumas atividades exigem licenças, alvarás ou autorizações específicas antes de iniciar o funcionamento.',
    actions: ['Confira exigências de vigilância sanitária, meio ambiente e bombeiros.', 'Verifique se há taxa ou norma municipal aplicável.', 'Não inicie atividade regulada sem entender as autorizações necessárias.'],
  },
  {
    description: 'A emissão de nota depende do tipo de atividade. Serviços costumam usar NFS-e; produtos podem envolver inscrição estadual e outros emissores.',
    actions: ['Identifique se sua receita vem de serviço, produto ou ambos.', 'Acesse o emissor correto antes da primeira venda formal.', 'Peça orientação se aparecer erro de CNAE, código de serviço ou cadastro.'],
  },
  {
    description: 'Depois de aberto, o CNPJ precisa manter pagamentos, declarações, cadastro e certidões em dia.',
    actions: ['Acompanhe DAS, DASN e certidões quando for MEI.', 'Atualize dados cadastrais sempre que houver mudança.', 'Procure atendimento antes que pequenas pendências virem bloqueios.'],
  },
];

const businessStepImages = [
  {
    src: '/assets/hero-bc-stitch.jpg',
    alt: 'Pessoa organizando ideias de negócio em uma mesa de trabalho',
  },
  {
    src: '/assets/hero-praca-empreendedor.png',
    alt: 'Atendimento da Praça do Empreendedor para orientação de formalização',
  },
  {
    src: '/assets/hub-eventos-stitch.jpg',
    alt: 'Empreendedores conversando em ambiente de orientação e planejamento',
  },
  {
    src: '/assets/hero-bc-stitch.jpg',
    alt: 'Computador aberto para realizar etapas digitais de formalização',
  },
  {
    src: '/assets/hero-praca-empreendedor.png',
    alt: 'Organização de documentos para abertura de empresa',
  },
  {
    src: '/assets/hub-eventos-stitch.jpg',
    alt: 'Ambiente de consultoria para análise de licenças e autorizações',
  },
  {
    src: '/assets/hero-bc-stitch.jpg',
    alt: 'Pessoa usando computador para acessar serviços digitais de nota fiscal',
  },
  {
    src: '/assets/hero-praca-empreendedor.png',
    alt: 'Acompanhamento de rotina empresarial após a formalização',
  },
];

export function BusinessStart() {
  const [selectedStep, setSelectedStep] = useState(0);
  const activeStep = businessSteps[selectedStep];
  const activeDetail = businessStepDetails[selectedStep];
  const activeImage = businessStepImages[selectedStep];

  return (
    <>
      <PageHero title="Abrir meu negócio" eyebrow="Jornada guiada" description="Use este roteiro como orientação inicial. Para decisões fiscais, societárias ou contábeis, busque apoio profissional quando necessário." />
      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-navy">Passo a passo</h2>
            <p className="mt-3 text-slate-600">A jornada começa antes do CNPJ: atividade, endereço e licenças precisam conversar entre si.</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3" aria-label="Lista de passos para abrir negócio">
              {businessSteps.map((step, index) => {
                const isSelected = selectedStep === index;

                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => setSelectedStep(index)}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                      isSelected
                        ? 'border-ocean bg-ocean text-white shadow-md'
                        : 'border-slate-200 bg-white text-navy shadow-sm hover:border-ocean hover:bg-slate-50'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${isSelected ? 'bg-white text-ocean' : 'bg-mint text-ocean'}`}>
                      {index + 1}
                    </span>
                    <span className="font-semibold leading-6">{step}</span>
                  </button>
                );
              })}
            </div>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28 lg:self-start">
              <span className="text-sm font-bold uppercase text-ocean">Passo {selectedStep + 1}</span>
              <h3 className="mt-3 text-2xl font-bold text-navy">{activeStep}</h3>
              <p className="mt-4 leading-7 text-slate-700">{activeDetail.description}</p>
              <ul className="mt-6 grid gap-3">
                {activeDetail.actions.map((action) => (
                  <li key={action} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ocean" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
                <img src={activeImage.src} alt={activeImage.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-white/10" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Escolha o melhor caminho</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {businessProfiles.map((profile) => (
              <LinkCard
                key={profile.title}
                {...profile}
                href={profile.href ?? '/atendimento'}
                cta={profile.cta ?? 'Receber orientação'}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
