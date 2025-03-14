// src/controllers/apiController.js
const getPingResponse = (req, res) => {
    res.json({ message: "API is running" });
  };
  
  const getData = (req, res) => {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    res.json(data);
  };
  
  module.exports = { getPingResponse, getData };
  