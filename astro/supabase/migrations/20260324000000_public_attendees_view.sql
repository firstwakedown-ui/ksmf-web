-- Veřejný seznam účastníků: nikdy nezpřístupňuje e-mail.
create or replace view public.public_attendees
with (security_invoker = false)
as
select
  id,
  name,
  note,
  created_at
from public.applications;

revoke select on public.applications from anon, authenticated;
grant insert on public.applications to anon, authenticated;
grant select on public.public_attendees to anon, authenticated;

alter table public.applications enable row level security;

-- Přímé čtení applications je zakázané; veřejná stránka používá pouze view.
drop policy if exists "veřejně číst účastníky" on public.applications;
drop policy if exists "veřejně číst pouze veřejné údaje účastníků" on public.applications;

-- View používá oprávnění vlastníka a zpřístupňuje jen vybrané sloupce.
-- RLS policy se nad view nevytváří, protože PostgreSQL policies patří tabulkám.