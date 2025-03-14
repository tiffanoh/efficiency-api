require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // Use PORT from .env or default to 3000

// Import routes
const apiRoutes = require('./src/routes/apiRoutes');

// Use routes
app.use('/api', apiRoutes);  // All routes will be prefixed with /api

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});



