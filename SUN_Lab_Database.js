const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./sqlite.db', (err) => {
    if (err) 
        return console.error(err.message);
    else { console.log("Connected to the database."); }
});

// Creates record table for ID and timestamps.
db.run(`CREATE TABLE IF NOT EXISTS RECORDS (
    user_id INTEGER,
    timestamp DATETIME,
    PRIMARY KEY (user_id, timestamp),
    FOREIGN KEY (user_id) REFERENCES USERS(user_id) 
    );`
);

// Create user table for future implementation.
db.run(`CREATE TABLE IF NOT EXISTS USERS (
    user_id INTEGER PRIMARY KEY,
    active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1)),  
    role VARCHAR(20) NOT NULL DEFAULT 'student'
    );`
);

// Adds mock values.
db.serialize(() => {
    db.run(
        `
        INSERT or REPLACE INTO RECORDS (user_id, timestamp) VALUES 
        (1001, '2024-09-21 08:30:00'),
        (1002, '2024-09-22 09:15:00'),
        (1003, '2024-09-23 10:45:00'),
        (1004, '2024-09-24 11:00:00'),
        (1005, '2024-09-25 12:30:00'),
        (1006, '2024-09-26 13:00:00'),
        (1007, '2024-09-27 14:15:00'),
        (1008, '2024-09-28 15:30:00'),
        (1009, '2024-09-29 16:00:00'),
        (1010, '2024-09-30 17:45:00'),
        (1011, '2024-10-01 08:00:00'),
        (1012, '2024-10-02 08:05:00'),
        (1013, '2024-10-03 08:10:00'),
        (1014, '2024-10-04 08:20:00'),
        (1015, '2024-10-05 08:25:00'),
        (1016, '2024-10-06 08:35:00'),
        (1017, '2024-10-07 08:40:00'),
        (1018, '2024-10-08 08:50:00'),
        (1019, '2024-10-09 09:00:00'),
        (1020, '2024-10-10 09:05:00'),
        (1021, '2024-10-11 09:10:00'),
        (1022, '2024-10-12 09:20:00'),
        (1023, '2024-10-13 09:25:00'),
        (1024, '2024-10-14 09:30:00'),
        (1025, '2024-10-15 09:35:00'),
        (1026, '2024-10-16 09:40:00'),
        (1027, '2024-10-17 09:50:00'),
        (1028, '2024-10-18 10:00:00'),
        (1029, '2024-10-19 10:05:00'),
        (1030, '2024-10-20 10:10:00'),
        (1031, '2024-10-21 10:20:00'),
        (1032, '2024-10-22 10:25:00'),
        (1033, '2024-10-23 10:30:00'),
        (1034, '2024-10-24 10:35:00'),
        (1035, '2024-10-25 10:40:00'),
        (1036, '2024-10-26 10:50:00'),
        (1037, '2024-10-27 11:10:00'),
        (1038, '2024-10-28 11:15:00'),
        (1039, '2024-10-29 11:20:00'),
        (1040, '2024-10-30 11:30:00'),
        (1041, '2024-10-31 11:35:00'),
        (1042, '2024-11-01 11:40:00'),
        (1043, '2024-11-02 11:50:00'),
        (1044, '2024-11-03 12:00:00'),
        (1045, '2024-11-04 12:05:00'),
        (1046, '2024-11-05 12:10:00'),
        (1047, '2024-11-06 12:20:00'),
        (1048, '2024-11-07 12:25:00'),
        (1049, '2024-11-08 12:40:00'),
        (1050, '2024-11-09 12:45:00');
        `
    )
});

// Deletes from the database any timestamp older than 5 years.
db.run(
    `DELETE FROM RECORDS WHERE timestamp < DATETIME('now', '-5 years');`
);

// Closes the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});