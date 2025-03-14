<<<<<<< HEAD
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



=======
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const pingRoutes = require('./src/routes/pingRoutes');

// Middleware
app.use('/ping', pingRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


>>>>>>> e233eaf54385cb636c125710be1d68dc65f5284e
