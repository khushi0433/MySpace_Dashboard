const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 4000;
const FILE_PATH = "note.json";

app.use(express.json());
app.use(cors());

app.get('/api/note', (req, res) => {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    res.json(JSON.parse(data));
  } else {
    res.json({ note: "" });
  }
});

app.post('/api/note', (req, res) => {
  const { note } = req.body;
  fs.writeFileSync(FILE_PATH, JSON.stringify({ note }));
  res.json({ message: "Note saved successfully!" });
});

app.get('/', (req, res) => {
  res.send('Welcome to Notes API! Try /api/note');
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
