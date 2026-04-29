const SUPABASE_URL = 'https://xcqvwrkxevvzlbajppke.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjcXZ3cmt4ZXZ2emxiYWpwcGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0Mjg0MzMsImV4cCI6MjA5MzAwNDQzM30.7sOitYl8JZNV4_4IjL5CPKxgOd5T9GZm7tDRS13Os7Q';

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
