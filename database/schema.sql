CREATE TABLE event_information (
  id INTEGER PRIMARY KEY,
  venue TEXT NOT NULL,
  map_url TEXT NOT NULL,
  starts_at TEXT NOT NULL,
  ends_at TEXT NOT NULL,
  price_text TEXT NOT NULL
);

INSERT INTO event_information (id, venue, map_url, starts_at, ends_at, price_text)
VALUES (
  1,
  'Kroměříž, stálý objekt z posledních akcí',
  'https://mapy.cz/s/mufotatude',
  'Čtvrtek 24. září 2026 v 18:00',
  'Neděle 27. září 2026 po obědě',
  'bude upřesněno'
);
