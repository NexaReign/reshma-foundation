import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(req: Request) {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '';
    if (!webhookSecret) {
      return NextResponse.json({ error: 'Webhook secret is not configured' }, { status: 500 });
    }

    const signature = req.headers.get('x-razorpay-signature') || '';
    const bodyText = await req.text();

    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(bodyText)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
    }

    const payload = JSON.parse(bodyText);
    const event = payload.event;
    const data = payload.payload?.payment?.entity || payload.payload?.order?.entity || {};

    if (event !== 'payment.captured' && event !== 'payment.authorized' && event !== 'order.paid') {
      return NextResponse.json({ ok: true, message: 'Event ignored' });
    }

    const record = {
      name: data.notes?.donor_name || 'Anonymous',
      email: data.email || null,
      amount: data.amount ? Number(data.amount) / 100 : null,
      razorpay_order_id: data.order_id || data.id || null,
      razorpay_payment_id: data.id || null,
      method: data.method || null,
      status: data.status || null
    };

    const { error } = await supabaseServer.from('donations').insert([record]);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
