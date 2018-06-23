DROP TABLE IF EXISTS event;

CREATE TABLE event (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    event_title TEXT NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    event_desc TEXT
);
