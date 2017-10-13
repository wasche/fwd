CREATE TABLE IF NOT EXISTS routes (
  id        SERIAL,
  name      text NOT NULL UNIQUE,
  url       text NOT NULL,
  count     integer DEFAULT 0,
  created   timestamp DEFAULT current_timestamp,
  modified  timestamp DEFAULT NULL,
  used      timestamp DEFAULT NULL
);
