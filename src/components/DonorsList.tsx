"use client";

import { useEffect, useState } from 'react';

type Donor = { name: string; amount: number; created_at?: string };

export default function DonorsList() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch('/api/donors')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setDonors(data.donors || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="text-sm text-slate-600">Loading donors...</div>;

  return (
    <div className="space-y-4 max-h-80 overflow-y-auto">
      {donors.length === 0 ? (
        <div className="text-sm text-slate-600">No donors yet. Be the first!</div>
      ) : (
        donors.map((donor: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <span className="font-medium text-slate-900">{donor.name}</span>
            <span className="text-slate-600 font-semibold">{donor.amount}</span>
          </div>
        ))
      )}
    </div>
  );
}
