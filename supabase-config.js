// SAFEROLLOUT - CONEXIÓN SUPABASE

const SUPABASE_URL =
  'https://uqdodulfxdigpfdwpckb.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_rvqK_4bsE5eJgnFMPdaNhQ__QhCsBdX';

const { createClient } = supabase;

window.supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log('SafeRollOut conectado con Supabase');
