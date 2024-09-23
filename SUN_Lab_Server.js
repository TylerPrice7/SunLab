const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const PORT = 8080;

const db = new sqlite3.Database('./sqlite.db', (err) => {
    if (err) 
        return console.error(err.message);
    else { console.log("Connected to the database."); }
});

app.set('view engine', 'ejs');
app.use(express.json());

app.listen(PORT, (error) => {
    if(error)
        console.log("Error occurred, server can't start", error);
    else {
        console.log("Server is Successfully Running, " + "and App is listening on port " + PORT);
    }
});

// Example endpoint to get access logs
app.get('/', (req, res) => {
    const { id_filter, date_filter, date_times } = req.query;
    
    let query = `SELECT * FROM RECORDS WHERE true`;
    const params = [];

    if (id_filter && id_filter != ' ') {
        query += ` AND user_id = ?`;
        params.push(id_filter);
    }
    if (date_filter && date_filter != ' ') {
        query += ` AND strftime('%Y-%m-%d %H:%M', timestamp) = ?`;
        params.push(date_filter);
    }
    if (date_times && date_times != ' ') {
        dates = date_times.split(" : ");
        query += ` AND strftime('%Y-%m-%d %H:%M', timestamp) BETWEEN ? AND ?`;
        params.push(dates[0], dates[1]);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.render('index', { records: rows, id_filter: id_filter, date_filter: date_filter, date_times: date_times });
    });
});