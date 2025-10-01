const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Use Vercel's port if available
const DB_PATH = path.join(__dirname, 'instructors.json');

app.use(cors());
app.use(bodyParser.json());

// API routes
// Helper function to read the database
const readDB = () => {
  if (!fs.existsSync(DB_PATH)) {
    // If the file doesn't exist in the serverless environment, create it.
    fs.writeFileSync(DB_PATH, JSON.stringify([]), 'utf8');
    return [];
  }
  const data = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
};

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