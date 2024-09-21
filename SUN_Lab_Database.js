const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./Homework1/sqlite.db');

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext();

// let width = canvas.width;
// let height = canvas.height;

// // Create authors table
// db.run(`CREATE TABLE IF NOT EXISTS authors (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     birth_year INTEGER
// )`);

// // Create books table
// db.run(`CREATE TABLE IF NOT EXISTS books (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT NOT NULL,
//     author_id INTEGER,
//     publication_year INTEGER,
//     FOREIGN KEY (author_id) REFERENCES authors (id)
// )`);

// // Create loans table
// db.run(`CREATE TABLE IF NOT EXISTS loans (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     book_id INTEGER,
//     loaned_to TEXT,
//     loan_date TEXT,
//     return_date TEXT,
//     FOREIGN KEY (book_id) REFERENCES books (id)
// )`);

// // Insert sample data into authors table
// const authors = [
//     { name: 'George Orwell', birth_year: 1903 },
//     { name: 'J.K. Rowling', birth_year: 1965 },
// ];

// authors.forEach(({ name, birth_year }) => {
//     db.run(`INSERT INTO authors (name, birth_year) VALUES (?, ?)`, [name, birth_year]);
// });

// // Insert sample data into books table
// const books = [
//     { title: '1984', author_id: 1, publication_year: 1949 },
//     { title: 'Animal Farm', author_id: 1, publication_year: 1945 },
//     { title: "Harry Potter and the Philosopher's Stone", author_id: 2, publication_year: 1997 },
// ];

// books.forEach(({ title, author_id, publication_year }) => {
//     db.run(`INSERT INTO books (title, author_id, publication_year) VALUES (?, ?, ?)`, [title, author_id, publication_year]);
// });

// // Insert sample data into loans table
// const loans = [
//     { book_id: 1, loaned_to: 'Alice', loan_date: '2023-01-15', return_date: '2023-01-22' },
//     { book_id: 3, loaned_to: 'Bob', loan_date: '2023-02-10', return_date: null },
// ];

// loans.forEach(({ book_id, loaned_to, loan_date, return_date }) => {
//     db.run(`INSERT INTO loans (book_id, loaned_to, loan_date, return_date) VALUES (?, ?, ?, ?)`, [book_id, loaned_to, loan_date, return_date]);
// });

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});
