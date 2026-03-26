import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-700 dark:focus:ring-slate-800',
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500 dark:focus:border-slate-700 dark:focus:ring-slate-800',
        className,
      )}
      {...props}
    />
  );
}

