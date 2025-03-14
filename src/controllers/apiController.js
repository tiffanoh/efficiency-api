const getPingResponse = (req, res) => {
    res.json({ message: "API is running" });
  };
  
  // This would be an endpoint to get all data
  const getData = (req, res) => {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    res.json(data);
  };
  
  // Example of getting data by ID
  const getDataById = (req, res) => {
    const { id } = req.params;
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    const item = data.find(d => d.id === parseInt(id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  };
  
  module.exports = { getPingResponse, getData, getDataById };
  