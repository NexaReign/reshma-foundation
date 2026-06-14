"use client";

import { useEffect, useState } from 'react';
import Toast from '@/components/Toast';

export default function DonateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('1000');
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    return () => {
      setToastMessage(null);
    };
  }, []);

  async function handleDonate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setToastMessage(null);

    try {
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      });

      const data = await res.json();
      if (!res.ok) {
        const errorText = data?.error || 'Order creation failed';
        setToastType('error');
        setToastMessage(errorText);
        return;
      }

      const order = data.order ?? { id: data.order_id, amount: data.amount, currency: data.currency };
      const keyId = data.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Reshma Foundation',
        description: 'Donation',
        order_id: order.id,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              name,
              email,
              amount
            })
          });

          const verifyData = await verifyRes.json();
          if (!verifyRes.ok) {
            setToastType('error');
            setToastMessage(verifyData?.error || 'Verification failed');
            return;
          }

          // optimistic update: notify donors list to refresh or prepend
          try {
            const eventDetail = { name: name || 'Anonymous', amount: Number(amount), created_at: new Date().toISOString() };
            window.dispatchEvent(new CustomEvent('donation:completed', { detail: eventDetail }));
          } catch (e) {
            // ignore
          }

          setToastType('success');
          setToastMessage('Thank you — your donation was successful and is being recorded.');
          setName('');
          setEmail('');
          setAmount('1000');
        },
        prefill: {
          name,
          email
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          }
        }
      } as any;

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      setToastType('error');
      setToastMessage(err.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleDonate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 transition focus:scale-[1.01] focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 transition focus:scale-[1.01] focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Amount (₹)</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 transition focus:scale-[1.01] focus:ring-2 focus:ring-orange-300"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-[#0b1220] to-[#172554] px-6 py-3 text-white font-semibold transform transition hover:scale-[1.02] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Processing...' : 'Donate Online Now'}
        </button>
      </form>

      <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage(null)} />
    </>
  );
}

function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) return resolve(true);
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => reject(false);
    document.body.appendChild(script);
  });
}
