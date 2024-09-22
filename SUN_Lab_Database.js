const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./sqlite.db');

// // Create ID table
db.run(`CREATE TABLE IF NOT EXISTS ID (
    user_id INTEGER PRIMARY KEY,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
);

db.run(
    `
    INSERT INTO ID (user_id, timestamp) VALUES (1001, '2024-09-21 08:15:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1002, '2024-09-21 09:30:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1003, '2024-09-21 10:45:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1004, '2024-09-21 11:00:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1005, '2024-09-21 12:15:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1006, '2024-09-21 13:30:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1007, '2024-09-21 14:00:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1008, '2024-09-21 15:15:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1009, '2024-09-21 16:30:00');
    INSERT INTO ID (user_id, timestamp) VALUES (1010, '2024-09-21 17:45:00');
    `
)

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});
