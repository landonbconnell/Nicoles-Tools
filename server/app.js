const express = require('express');
require('dotenv').config();
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const {
  refreshKrogerAccessToken,
} = require('./services/kroger/refreshKrogerAccessToken');

const app = express();

// Retrieves all access tokens and refreshes it before expiring
refreshKrogerAccessToken();

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

app.use('/api', apiRoutes);
