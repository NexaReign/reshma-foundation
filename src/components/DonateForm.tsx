"use client";

import { useState } from 'react';

export default function DonateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('1000');
  const [loading, setLoading] = useState(false);

  async function handleDonate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Order creation failed');

      const order = data.order;
      const keyId = data.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      // load razorpay script
      await loadScript('https://checkout.razorpay.com/v1/checkout.js');

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Reshma Foundation',
        description: 'Donation',
        order_id: order.id,
        handler: async function (response: any) {
          // verify on server
          await fetch('/api/razorpay/verify', {
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
          alert('Thank you for your donation!');
          window.location.reload();
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
      alert(err.message || 'Payment failed');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleDonate} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Amount (₹)</label>
        <input value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <button type="submit" disabled={loading} className="w-full rounded-2xl bg-[#0f172a] px-6 py-3 text-white font-semibold">
        {loading ? 'Processing...' : 'Donate Online Now'}
      </button>
    </form>
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
