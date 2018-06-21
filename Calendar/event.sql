DROP TABLE IF EXISTS event;

CREATE TABLE event (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    event_name TEXT NOT NULL,
    event_desc TEXT,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
);
