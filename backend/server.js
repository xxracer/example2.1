const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// --- Vercel Deployment Fix ---
const IS_VERCEL = process.env.VERCEL === '1';
const LOCAL_DB_PATH = path.join(__dirname, 'instructors.json');
const VERCEL_TMP_DB_PATH = '/tmp/instructors.json';
const DB_PATH = IS_VERCEL ? VERCEL_TMP_DB_PATH : LOCAL_DB_PATH;
// ----------------------------

app.use(cors());
app.use(bodyParser.json());

// Helper function to read the database
const readDB = () => {
  if (IS_VERCEL && !fs.existsSync(DB_PATH)) {
    if (fs.existsSync(LOCAL_DB_PATH)) {
      const initialData = fs.readFileSync(LOCAL_DB_PATH, 'utf8');
      fs.writeFileSync(DB_PATH, initialData, 'utf8');
    } else {
      fs.writeFileSync(DB_PATH, JSON.stringify([]), 'utf8');
    }
  }
  if (!fs.existsSync(DB_PATH)) {
    return [];
  }
  const data = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
};

// Helper function to write to the database
const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
};

// API routes
app.get('/api/instructors', (req, res) => {
  const instructors = readDB();
  res.json(instructors);
});

app.post('/api/instructors', (req, res) => {
  const instructors = readDB();
  const newInstructor = { id: Date.now().toString(), ...req.body };
  instructors.push(newInstructor);
  writeDB(instructors);
  res.status(201).json(newInstructor);
});

app.put('/api/instructors/:id', (req, res) => {
  let instructors = readDB();
  const { id } = req.params;
  const instructorIndex = instructors.findIndex(i => i.id === id);

  if (instructorIndex === -1) {
    return res.status(404).send('Instructor not found');
  }

  const updatedInstructor = { ...instructors[instructorIndex], ...req.body };
  instructors[instructorIndex] = updatedInstructor;
  writeDB(instructors);
  res.json(updatedInstructor);
});

app.delete('/api/instructors/:id', (req, res) => {
  let instructors = readDB();
  const { id } = req.params;
  const newInstructors = instructors.filter(i => i.id !== id);

  if (instructors.length === newInstructors.length) {
    return res.status(404).send('Instructor not found');
  }

  writeDB(newInstructors);
  res.status(204).send();
});

// For local development, we still need to listen on a port.
// Vercel will handle the routing and listening in production.
if (!IS_VERCEL) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running for local development on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel's serverless environment
module.exports = app;