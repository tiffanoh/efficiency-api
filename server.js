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


