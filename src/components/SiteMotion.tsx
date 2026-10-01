import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Progressive enhancement: content stays visible without animation support. */
export function SiteMotion() {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const courseView = `${params.get('modalidade') ?? ''}:${params.get('tema') ?? ''}`;

  useEffect(() => {
    const root = document.getElementById('conteudo');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || preference.matches || !root.animate) return;
    const animation = root.animate(
      [{ opacity: 0.35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' },
    );
    const cancel = () => animation.cancel();
    preference.addEventListener('change', cancel);
    return () => { animation.cancel(); preference.removeEventListener('change', cancel); };
  }, [pathname, courseView]);

  useEffect(() => {
    const root = document.getElementById('conteudo');
    if (!root || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const animated = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (!preference.matches && !entry.target.contains(document.activeElement)) {
          entry.target.classList.add('motion-enter');
          animated.add(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const scan = () => {
      root.querySelectorAll<HTMLElement>('h1, h2, .card, article, [data-motion]').forEach(element => {
        if (seen.has(element) || element.parentElement?.closest('.card, article, [data-motion]')) return;
        seen.add(element);
        observer.observe(element);
      });
    };
    const finish = (event: Event) => {
      const element = event.target as Element;
      element.classList.remove('motion-enter');
      animated.delete(element);
    };
    const reset = () => {
      animated.forEach(element => element.classList.remove('motion-enter'));
      animated.clear();
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    root.addEventListener('animationend', finish);
    preference.addEventListener('change', reset);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.removeEventListener('animationend', finish);
      preference.removeEventListener('change', reset);
      reset();
    };
  }, [pathname]);
  return null;
}
