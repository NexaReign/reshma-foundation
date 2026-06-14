import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL || '';
// Accept either SERVICE_ROLE_KEY (recommended) or SECRET_KEY for compatibility
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '';

if (!url || !key) {
  throw new Error(
    'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SECRET_KEY) must be configured in .env.local or your deployed environment.'
  );
}

export const supabaseServer = createClient(url, key, {
  auth: { persistSession: false }
});
