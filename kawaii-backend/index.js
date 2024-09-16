const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Secret for JWT token (for simplicity, hardcoded here)
const JWT_SECRET = 'a2baafe316970a04d79a542e4e5cc00af0432071c9ca45f534a20a343ae8c060';

// Middleware to protect routes
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ message: 'Failed to authenticate token' });

    req.userId = decoded.id;
    next();
    });
};

// Register user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password' });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Save user to the database
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering user', error: err });
    }

    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password' });
  }

  // Find user by username
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = results[0];

    // Compare passwords
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  });
});

// Get users (protected route)
app.get('/users', verifyToken, (req, res) => {
    const query = 'SELECT id, username FROM users';
    db.query(query, (err, results) => {
    if (err) {
        return res.status(500).json({ message: 'Error fetching users' });
    }

    res.json({ users: results });
    });
});

// Add a new user (protected route)
app.post('/users', verifyToken, (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password for security
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    
    db.query(query, [username, hashedPassword], (err, result) => {
    if (err) {
        console.error('Error adding user to database:', err);
        return res.status(500).json({ message: 'Error adding user' });
    }
    res.status(201).json({ message: 'User added successfully' });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
