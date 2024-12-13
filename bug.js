const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Uncommon error: Unexpected token in JSON response
// This error is often caused by sending a non-JSON response when the client expects JSON.
// For example, if a route handler sends a plain text string instead of a JSON object, this error occurs.
// This could also be due to incorrect content-type headers.
