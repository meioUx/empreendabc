import { useMemo, useState } from 'react';
import type { LinkItem } from '../data/content';
import { LinkCard } from './Cards';

export function CategoryFilter({ items }: { items: LinkItem[] }) {
  const categories = useMemo(() => ['Todos', ...Array.from(new Set(items.map((item) => item.category ?? 'Manuais')))], [items]);
  const [active, setActive] = useState('Todos');
  const filtered = active === 'Todos' ? items : items.filter((item) => (item.category ?? 'Manuais') === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${active === category ? 'bg-ocean text-white' : 'border border-slate-300 bg-white text-navy hover:border-ocean'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <LinkCard key={`${item.title}-${item.category}`} {...item} />
        ))}
      </div>
    </div>
  );
}
