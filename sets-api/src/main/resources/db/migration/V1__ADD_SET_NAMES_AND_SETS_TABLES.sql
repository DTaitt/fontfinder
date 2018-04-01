CREATE TABLE set_names (
  PRIMARY KEY (id),
  id serial,
  set_name VARCHAR(100)
);

CREATE TABLE "sets" (
    PRIMARY KEY (id),
    id serial,
    favorites_id VARCHAR(100),
    set_names_id INTEGER
);