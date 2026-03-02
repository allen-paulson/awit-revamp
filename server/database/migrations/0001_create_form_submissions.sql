CREATE TABLE IF NOT EXISTS form_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    form_id TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL
);
