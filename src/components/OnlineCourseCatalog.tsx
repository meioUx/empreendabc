import { ArrowLeft, ArrowRight, BookOpen, Play } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { onlineCourseTopics } from '../data/onlineCourses';
import { LinkCard } from './Cards';

export function OnlineCourseCatalog() {
  const [params] = useSearchParams();
  const topic = onlineCourseTopics.find(item => item.id === params.get('tema'));
  return <div aria-labelledby="online-title">
    {topic ? <>
      <Link to="?modalidade=online#agenda" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Voltar aos temas</Link>
      <h2 id="online-title" className="text-2xl font-bold text-navy">{topic.title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{topic.description}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ocean">{topic.courses.length} vídeos · Aprenda no seu ritmo</p>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {topic.courses.map((course, index) => <article key={course.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="flex h-full flex-col">
                  <div className="aspect-video w-full self-center bg-slate-100">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${course.videoId}?list=${course.playlistId}`} title={`${course.title} — vídeo e playlist`} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="h-full w-full border-0" />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ocean"><Play aria-hidden="true" className="h-4 w-4" />Vídeo {index + 1} de {topic.courses.length}</span>
                    <h3 className="mt-4 text-xl font-bold leading-7 text-navy">{course.title}</h3>
                  </div>
                </div>
              </article>)}
            </div>

    </> : <>
      <h2 id="online-title" className="text-2xl font-bold text-navy">Escolha o que você quer aprender</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">Selecione um tema para acessar sua sequência de vídeos.</p>
      <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {onlineCourseTopics.map(item => <Link key={item.id} to={`?modalidade=online&tema=${item.id}#agenda`} className="card group flex flex-col transition hover:-translate-y-1 hover:border-ocean" aria-label={`Ver cursos: ${item.title}`}>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-ocean"><BookOpen aria-hidden="true" className="h-7 w-7" /></span>
          <h3 className="mt-6 text-xl font-bold text-navy">{item.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5"><span className="text-xs font-semibold text-slate-500">{item.courses.length} vídeos</span><span className="inline-flex items-center gap-2 text-sm font-semibold text-ocean">Ver cursos <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" /></span></div>
        </Link>)}
      </div>
      <div className="mt-8"><LinkCard title="Mais cursos online do Sebrae" description="Explore conteúdos para diferentes fases do seu negócio." href="https://sc.loja.sebrae.com.br/cursos/cursos-online" cta="Ver cursos online" /></div>
    </>}
  </div>;
}
