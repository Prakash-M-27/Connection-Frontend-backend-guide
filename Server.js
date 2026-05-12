const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mentorship_db'
});

// Connect Database
db.connect((err) => {
    if (err) {
        console.log('Database Connection Failed');
    } else {
        console.log('Database Connected');
    }
});

// Get all mentors
app.get('/mentors', (req, res) => {
    db.query('SELECT * FROM mentors', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

// Add mentor
app.post('/addMentor', (req, res) => {
    const { name, expertise, email } = req.body;

    const sql = 'INSERT INTO mentors(name, expertise, email) VALUES (?, ?, ?)';

    db.query(sql, [name, expertise, email], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send('Mentor Added Successfully');
        }
    });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
