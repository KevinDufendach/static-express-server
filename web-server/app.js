const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// tell express that we want to use www for static assets
app.use(express.static(path.join(__dirname, '../public')));

// Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`));