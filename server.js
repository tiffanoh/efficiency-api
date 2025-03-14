const express = require('express');
console.log("✅ Server script is running...");  // Debug log
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    console.log("✅ /ping endpoint hit");  // Debug log
    res.json({ message: "API is running" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
