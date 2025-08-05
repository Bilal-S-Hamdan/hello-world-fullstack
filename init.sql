CREATE TABLE IF NOT EXISTS message (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255)
);

INSERT INTO message (text) VALUES ('Hello World!');
