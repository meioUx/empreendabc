export function Timeline({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-bold text-ocean">{index + 1}</span>
          <p className="pt-1 font-semibold text-navy">{step}</p>
        </li>
      ))}
    </ol>
  );
}
