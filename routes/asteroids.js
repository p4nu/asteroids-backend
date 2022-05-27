const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

/* GET asteroids listing. */
router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.start_date}&end_date=${req.query.end_date}&api_key=${process.env.NASA_API_KEY}`);
    res.json(data);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
