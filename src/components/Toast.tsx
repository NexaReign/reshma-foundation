"use client";

import { useEffect } from 'react';

type Props = {
  message: string | null;
  type?: 'success' | 'error';
  onClose: () => void;
};

export default function Toast({ message, type = 'success', onClose }: Props) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(t);
  }, [message, onClose]);

  if (!message) return null;

  const bg = type === 'success' ? 'bg-emerald-600' : 'bg-rose-600';

  return (
    <div className="pointer-events-none fixed right-6 bottom-6 z-50">
      <div
        className={`pointer-events-auto max-w-sm rounded-2xl px-4 py-3 text-white shadow-lg transition transform duration-300 ${bg} ring-1 ring-black/5`}>
        <div className="flex items-start gap-3">
          <div className="text-sm font-semibold">{type === 'success' ? 'Success' : 'Error'}</div>
          <div className="text-sm text-white/90 flex-1">{message}</div>
          <button onClick={onClose} className="ml-2 text-white/90 opacity-90">✕</button>
        </div>
      </div>
    </div>
  );
}
