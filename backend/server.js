const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// --- Vercel Deployment Fix ---
// Vercel has a read-only filesystem, except for the /tmp directory.
// We use a different DB path for local development vs. production on Vercel.
const IS_VERCEL = process.env.VERCEL === '1';
const LOCAL_DB_PATH = path.join(__dirname, 'instructors.json');
const VERCEL_TMP_DB_PATH = '/tmp/instructors.json';
const DB_PATH = IS_VERCEL ? VERCEL_TMP_DB_PATH : LOCAL_DB_PATH;
// ----------------------------

app.use(cors());
app.use(bodyParser.json());

// Helper function to read the database
const readDB = () => {
  // On Vercel, if the /tmp file doesn't exist, we need to create it.
  // We'll copy the initial data from our bundled JSON file to the writable /tmp directory.
  if (IS_VERCEL && !fs.existsSync(DB_PATH)) {
    if (fs.existsSync(LOCAL_DB_PATH)) {
      const initialData = fs.readFileSync(LOCAL_DB_PATH, 'utf8');
      fs.writeFileSync(DB_PATH, initialData, 'utf8');
    } else {
      // If for some reason the local file doesn't exist, start with an empty DB.
      fs.writeFileSync(DB_PATH, JSON.stringify([]), 'utf8');
    }
  }

  // Fallback for local development if the file doesn't exist.
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

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});