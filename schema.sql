-- Signal Caller — Supabase Schema
-- Run this in your Supabase SQL editor

-- PLAYERS TABLE
create table public.players (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  overall integer default 60,
  xp integer default 0,
  attr_coverage_iq integer default 60,
  attr_processing_speed integer default 60,
  attr_decision_making integer default 60,
  attr_blitz_recognition integer default 60,
  sessions integer default 0,
  accuracy integer default 0,
  badges jsonb default '[]',
  is_admin boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.players enable row level security;

create policy "Players can view own profile"
  on public.players for select using (auth.uid() = id);

create policy "Players can update own profile"
  on public.players for update using (auth.uid() = id);

create policy "Players can insert own profile"
  on public.players for insert with check (auth.uid() = id);

create policy "Admins can view all players"
  on public.players for select using (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

create policy "Admins can update all players"
  on public.players for update using (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

-- FORMATIONS TABLE
create table public.formations (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  coverage text,
  front text,
  personnel text,
  difficulty text default 'beginner',
  has_blitz boolean default false,
  blitz_type text,
  has_routes boolean default false,
  is_disguised boolean default false,
  film_notes text,
  dots jsonb default '[]',
  created_by uuid references auth.users,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.formations enable row level security;

create policy "Anyone authenticated can view formations"
  on public.formations for select using (auth.uid() is not null);

create policy "Admins can insert formations"
  on public.formations for insert with check (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

create policy "Admins can update formations"
  on public.formations for update using (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

create policy "Admins can delete formations"
  on public.formations for delete using (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

-- ATTEMPTS TABLE
create table public.attempts (
  id uuid default gen_random_uuid() primary key,
  player_id uuid references public.players on delete cascade,
  formation_id uuid references public.formations on delete set null,
  coverage_id text,
  mode text, -- 'quickreps' or 'drive'
  tap1_correct boolean, -- coverage ID
  tap2_correct boolean, -- concept selection
  tap3_correct boolean, -- first read / receiver tap
  reaction_time_ms integer, -- tap3 reaction time in milliseconds
  correct boolean, -- overall correct
  difficulty text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.attempts enable row level security;

create policy "Players can insert own attempts"
  on public.attempts for insert with check (auth.uid() = player_id);

create policy "Players can view own attempts"
  on public.attempts for select using (auth.uid() = player_id);

create policy "Admins can view all attempts"
  on public.attempts for select using (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

-- SETTINGS TABLE
create table public.settings (
  id integer default 1 primary key,
  clock_beginner integer default 7,
  clock_intermediate integer default 5,
  clock_advanced integer default 3,
  clock_elite integer default 15,
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

insert into public.settings (id) values (1) on conflict do nothing;

alter table public.settings enable row level security;

create policy "Anyone can view settings"
  on public.settings for select using (true);

create policy "Admins can update settings"
  on public.settings for update using (
    exists (select 1 from public.players where id = auth.uid() and is_admin = true)
  );

-- FUNCTION: auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger players_updated_at before update on public.players for each row execute procedure public.handle_updated_at();
create trigger formations_updated_at before update on public.formations for each row execute procedure public.handle_updated_at();

-- GRANT YOUR FIRST ADMIN (replace with your email after signing up)
-- update public.players set is_admin = true where email = 'your@email.com';
