const express = require('express');
const app = express();
app.use(express.json()); // Add this line to parse JSON bodies
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' }); // Use res.json to send JSON responses
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Solution: Using express.json() middleware to parse JSON bodies and res.json() to send JSON responses.
// The express.json() middleware parses incoming requests with JSON payloads.  This is crucial for correctly handling JSON data sent to the server.
// res.json() method automatically sets the content-type header to 'application/json' and stringifies the object sent as response.