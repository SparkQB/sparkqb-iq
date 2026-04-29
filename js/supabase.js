const SUPABASE_URL = 'https://sgyaszxifhpwpcjyvnfw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneWFzenhpZmhwd3Bjanl2bmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MjM5NDMsImV4cCI6MjA5Mjk5OTk0M30.qvN1xdbgOWCSDLT_kMloBVKlihXlFs4QUhp9MMTu_UU';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getUser() {
  const { data: { user } } = await db.auth.getUser();
  return user;
}

async function getProfile(userId) {
  const { data, error } = await db.from('players').select('*').eq('id', userId).single();
  if (error) return null;
  return data;
}

async function requireAuth(redirectTo = 'index.html') {
  const user = await getUser();
  if (!user) { window.location.href = redirectTo; return null; }
  return user;
}

async function requireAdmin(redirectTo = 'locker-room.html') {
  const user = await requireAuth();
  if (!user) return null;
  const profile = await getProfile(user.id);
  if (!profile || !profile.is_admin) { window.location.href = redirectTo; return null; }
  return { user, profile };
}
