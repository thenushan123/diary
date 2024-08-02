DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    text TEXT NOT NULL,
    category VARCHAR(50)
);