import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!url || !key) {
  // Do not throw in production; keep it safe but log for development.
  console.warn('Supabase URL or SERVICE_ROLE_KEY not set.');
}

export const supabaseServer = createClient(url, key, {
  auth: { persistSession: false }
});
