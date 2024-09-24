const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.json());

// Very secure
const admin_username = "admin"
const admin_password = "password123";
userAuthenticated = false;


const db = new sqlite3.Database('./sqlite.db', (err) => {
    if (err) 
        return console.error(err.message);
    else { console.log("Connected to the database."); }
});


app.listen(PORT, (error) => {
    if(error)
        console.log("Error occurred, server can't start", error);
    else {
        console.log("Server is Successfully Running" + " on port " + PORT);
    }
});

// Admin front page. Redirects to login if not authenticated.
app.get('/', (req, res) => {
    if (userAuthenticated) {
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
    }
    else { res.redirect('login'); }
});


app.get('/timestamp', (req, res) => {
    res.render('timestamp');
});

// Inserts id and timestamps into the database.
app.post('/timestamp', (req, res) => {
    const user_id = req.body.user_id;
    const time = new Date();
    const timestamp = time.toLocaleDateString('en-CA') + ' ' + time.toLocaleTimeString('en-US', {hour12: false});
    let query = "INSERT or REPLACE INTO RECORDS (user_id, timestamp) VALUES (";
    query += user_id + ", '" + timestamp + "');";
    
    db.run(query);

    res.render('timestamp');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Checks if login information is admin.
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username == admin_username && password == admin_password) {
        userAuthenticated = true;
        res.redirect('/');
    }
    else { res.render('login'); }
});