const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());

app.get('/message', async (req, res) => {
  const result = await pool.query('SELECT * FROM message LIMIT 1');
  res.json(result.rows[0]);
});

app.listen(3001, () => console.log('Backend running on port 3001'));
