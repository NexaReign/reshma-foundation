import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amount = Number(body.amount); // expected in rupees
    if (Number.isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: 'A valid donation amount is required' }, { status: 400 });
    }

    // ensure minimum amount: 100 paise (i.e., ₹1)
    const amountPaise = Math.round(amount * 100);
    if (amountPaise < 100) {
      return NextResponse.json({ error: 'Minimum amount is ₹1 (100 paise)' }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return NextResponse.json({ error: 'Razorpay keys are not configured on the server' }, { status: 500 });
    }

    const orderPayload = {
      amount: amountPaise,
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
      // propagate status (401 for auth issues, 4xx/5xx from Razorpay)
      return NextResponse.json({ error: `Razorpay order creation failed: ${message}` }, { status: res.status });
    }

    // return minimal info needed by the client
    return NextResponse.json({ order_id: data.id, amount: data.amount, currency: data.currency, keyId });
  } catch (err: any) {
    console.error('Create order exception:', err);
    return NextResponse.json({ error: err.message || 'Unexpected server error' }, { status: 500 });
  }
}
