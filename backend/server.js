const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { kv } = require('@vercel/kv');
const { JSDOM } = require('jsdom');
const DOMPurify = require('dompurify');

const window = new JSDOM('').window;
const purify = DOMPurify(window);

const app = express();

app.use(cors());
app.use(bodyParser.json());

// API routes
app.get('/api/instructors', async (req, res) => {
  try {
    let instructors = await kv.get('instructors');
    if (!instructors) {
      instructors = []; // If the key doesn't exist, return an empty array
    }
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch instructors' });
  }
});

app.post('/api/instructors', async (req, res) => {
  try {
    let instructors = await kv.get('instructors') || [];
    const sanitizedBio = purify.sanitize(req.body.bio);
    const newInstructor = { id: Date.now().toString(), ...req.body, bio: sanitizedBio };
    instructors.push(newInstructor);
    await kv.set('instructors', instructors);
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add instructor' });
  }
});

app.put('/api/instructors/:id', async (req, res) => {
  try {
    let instructors = await kv.get('instructors') || [];
    const { id } = req.params;
    const instructorIndex = instructors.findIndex(i => i.id === id);

    if (instructorIndex === -1) {
      return res.status(404).send('Instructor not found');
    }

    const sanitizedBio = purify.sanitize(req.body.bio);
    const updatedInstructor = { ...instructors[instructorIndex], ...req.body, bio: sanitizedBio };
    instructors[instructorIndex] = updatedInstructor;
    await kv.set('instructors', instructors);
    res.json(updatedInstructor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update instructor' });
  }
});

app.delete('/api/instructors/:id', async (req, res) => {
  try {
    let instructors = await kv.get('instructors') || [];
    const { id } = req.params;
    const newInstructors = instructors.filter(i => i.id !== id);

    if (instructors.length === newInstructors.length) {
      return res.status(404).send('Instructor not found');
    }

    await kv.set('instructors', newInstructors);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete instructor' });
  }
});

// For local development, we still need to listen on a port.
// Vercel will handle the routing and listening in production.
const IS_VERCEL = process.env.VERCEL === '1';
if (!IS_VERCEL) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running for local development on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel's serverless environment
module.exports = app;
