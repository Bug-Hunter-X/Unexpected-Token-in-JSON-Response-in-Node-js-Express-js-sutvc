# Unexpected Token in JSON Response in Node.js Express.js

This repository demonstrates an uncommon error in Node.js Express.js applications: the "Unexpected token" error in JSON responses. This error typically arises when the server sends a response that is not valid JSON, while the client expects JSON data.  This often occurs due to incorrect content-type headers or sending a plain text string when a JSON object is anticipated.

The `bug.js` file contains code that reproduces the error.  The `bugSolution.js` provides a corrected version demonstrating how to prevent the error.