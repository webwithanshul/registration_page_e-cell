const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and body parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'dist' directory (Vite build output)
app.use(express.static(path.join(__dirname, 'dist')));

// Path to store registration data
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'registrations.json');

// Ensure data directory and file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf8');
}

// Helper functions for reading and writing data
const getRegistrations = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(fileContent);
    }
  } catch (err) {
    console.error('Error reading registration file:', err);
  }
  return [];
};

const saveRegistrations = (registrations) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing registration file:', err);
    return false;
  }
};

// API Endpoint to process registrations
app.post('/api/register', (req, res) => {
  const { name, email, college, phone, event } = req.body;

  // 1. Basic validation: check for missing fields
  if (!name || !email || !college || !phone || !event) {
    return res.status(400).json({ error: 'All registration fields are required.' });
  }

  // 2. Validate field values
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedCollege = college.trim();
  const trimmedPhone = phone.trim();
  const trimmedEvent = event.trim();

  if (trimmedName.length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters long.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Invalid email address format.' });
  }

  if (trimmedCollege.length < 3) {
    return res.status(400).json({ error: 'College Name must be at least 3 characters long.' });
  }

  const phoneRegex = /^[0-9+\s-]{10,15}$/;
  if (!phoneRegex.test(trimmedPhone)) {
    return res.status(400).json({ error: 'Invalid contact number format. Please provide a valid 10-15 digit number.' });
  }

  const validEvents = ['Pitch Arena', 'Hackathon', 'Panel Discussions', 'Workshops', 'General Pass'];
  if (!validEvents.includes(trimmedEvent)) {
    return res.status(400).json({ error: 'Selected event is invalid.' });
  }

  // 3. Read current registrations and check for duplicates
  const registrations = getRegistrations();
  const emailExists = registrations.some(r => r.email === trimmedEmail);

  if (emailExists) {
    return res.status(400).json({ error: 'This email is already registered for E-Summit 2026.' });
  }

  // 4. Generate custom Registration ID: ES26-XXXXX
  let registrationId;
  let isUnique = false;
  while (!isUnique) {
    const randNum = Math.floor(10000 + Math.random() * 90000); // 5-digit number
    registrationId = `ES26-${randNum}`;
    isUnique = !registrations.some(r => r.id === registrationId);
  }

  // 5. Build and save new record
  const newRegistration = {
    id: registrationId,
    name: trimmedName,
    email: trimmedEmail,
    college: trimmedCollege,
    phone: trimmedPhone,
    event: trimmedEvent,
    registeredAt: new Date().toISOString()
  };

  registrations.push(newRegistration);
  if (saveRegistrations(registrations)) {
    return res.status(201).json({
      message: 'Registration successful!',
      registration: newRegistration
    });
  } else {
    return res.status(500).json({ error: 'Database error. Failed to save registration.' });
  }
});

// Admin endpoint to view registrations
app.get('/api/registrations', (req, res) => {
  const registrations = getRegistrations();
  res.json(registrations);
});

// Admin endpoint to delete a registration
app.delete('/api/registrations/:id', (req, res) => {
  const { id } = req.params;
  const registrations = getRegistrations();
  const index = registrations.findIndex(r => r.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Registration not found.' });
  }
  registrations.splice(index, 1);
  if (saveRegistrations(registrations)) {
    return res.json({ message: 'Registration deleted successfully.' });
  } else {
    return res.status(500).json({ error: 'Database error. Failed to delete registration.' });
  }
});

// Fallback to serving built React page (index.html in dist/)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start listening
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` E-Summit 2026 server running at http://localhost:${PORT}`);
  console.log(`==================================================`);
});
