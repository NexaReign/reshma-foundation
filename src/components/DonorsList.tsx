"use client";

import { useEffect, useState } from 'react';

type Donor = { name: string; amount: number; created_at?: string };

export default function DonorsList() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchDonors() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/donors');
      const data = await res.json();
      if (data?.error) {
        setError(data.error);
        setDonors([]);
      } else {
        setDonors(data?.donors || []);
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to load donors');
      setDonors([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let mounted = true;
    fetchDonors();

    const handler = (e: any) => {
      // optimistic prepend if detail exists
      const d = e?.detail;
      if (d && d.name && d.amount) {
        setDonors((prev) => [{ name: d.name, amount: d.amount, created_at: d.created_at }, ...prev]);
      }
      // also attempt a fresh server fetch
      fetchDonors();
    };

    window.addEventListener('donation:completed', handler as EventListener);

    return () => {
      mounted = false;
      window.removeEventListener('donation:completed', handler as EventListener);
    };
  }, []);

  if (loading) return <div className="text-sm text-slate-600">Loading donors...</div>;
  if (error) return <div className="text-sm text-rose-700">{error}</div>;

  return (
    <div className="space-y-4 max-h-80 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <div />
        <button
          onClick={() => fetchDonors()}
          className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm hover:opacity-90"
        >
          Refresh
        </button>
      </div>

      {donors.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-700">
          No donations recorded yet. Your support will appear here soon.
        </div>
      ) : (
        donors.map((donor, idx) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 shadow-sm">
            <div>
              <p className="font-medium text-slate-900">{donor.name}</p>
              {donor.created_at ? (
                <p className="text-xs text-slate-500">{new Date(donor.created_at).toLocaleDateString()}</p>
              ) : null}
            </div>
            <span className="text-slate-600 font-semibold">₹{donor.amount}</span>
          </div>
        ))
      )}
    </div>
  );
}
