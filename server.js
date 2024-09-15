const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const faqRoutes = require('./routes/faqRoutes');
const database = require("./utils/database");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
database.connect();

// Routes
app.use('/faqs', faqRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
