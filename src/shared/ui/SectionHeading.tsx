import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          {title}
        </h2>
        {description ? <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

