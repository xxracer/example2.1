const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'instructors.json');

app.use(cors());
app.use(bodyParser.json());

// Helper function to read the database
const readDB = () => {
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

// GET all instructors
app.get('/api/instructors', (req, res) => {
  const instructors = readDB();
  res.json(instructors);
});

// POST a new instructor
app.post('/api/instructors', (req, res) => {
  const instructors = readDB();
  const newInstructor = { id: Date.now().toString(), ...req.body };
  instructors.push(newInstructor);
  writeDB(instructors);
  res.status(201).json(newInstructor);
});

// PUT (update) an instructor
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

// DELETE an instructor
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

app.listen(PORT, () => {
  console.log(`Admin server is running on http://localhost:${PORT}`);
});