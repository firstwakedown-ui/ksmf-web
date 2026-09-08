create table public.event_info (id int primary key, venue text not null, map_url text not null, starts_at text not null, ends_at text not null, price_text text not null);
insert into public.event_info values (1,'Kroměříž, stálý objekt z posledních akcí','https://mapy.cz/s/mufotatude','Čtvrtek 24. září 2026 v 18:00','Neděle 27. září 2026 po obědě','bude upřesněno');
create table public.applications (id bigint generated always as identity primary key, name text not null, email text not null, note text, created_at timestamptz not null default now());
create table public.forum_posts (id bigint generated always as identity primary key, author text not null check(char_length(author) between 2 and 80), body text not null check(char_length(body) between 2 and 2000), created_at timestamptz not null default now());
alter table public.event_info enable row level security; alter table public.applications enable row level security; alter table public.forum_posts enable row level security;
create policy "veřejné informace" on public.event_info for select using (true);
create policy "odeslat přihlášku" on public.applications for insert with check (char_length(name) between 2 and 100 and char_length(email) between 5 and 254);
create policy "číst diskuzi" on public.forum_posts for select using (true);
create policy "přidat příspěvek" on public.forum_posts for insert with check (true);
