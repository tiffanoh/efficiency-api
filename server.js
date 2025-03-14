const express = require('express');
require('dotenv').config(); // Load environment variables from .env
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const apiRoutes = require('./src/routes/apiRoutes');
app.use('/api', apiRoutes);

// Default route (this would display a welcome message when visiting root /)
app.get('/', (req, res) => {
  res.send('Welcome to the Efficiency API! 🚀 Use /api/ping to check the API status.');
});

// 404 Error Handling (if route is not found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
