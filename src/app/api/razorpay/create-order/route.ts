import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amount = Number(body.amount); // expected in rupees
    if (!amount || Number.isNaN(amount)) {
      return NextResponse.json({ error: 'A valid donation amount is required' }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return NextResponse.json({ error: 'Razorpay keys are not configured on the server' }, { status: 500 });
    }

    const orderPayload = {
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      payment_capture: 1
    };

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderPayload)
    });

    const data = await res.json();
    if (!res.ok) {
      const message = data?.error?.description || data?.error?.reason || JSON.stringify(data);
      console.error('Razorpay create order failed:', data);
      return NextResponse.json({ error: `Razorpay order creation failed: ${message}` }, { status: res.status });
    }

    return NextResponse.json({ order: data, keyId });
  } catch (err: any) {
    console.error('Create order exception:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
