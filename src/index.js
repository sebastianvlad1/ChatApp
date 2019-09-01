const express = require('express');
const path = require('path');
const router = require('./routes/route');

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

const port = process.env.port || 3000;

app.use(express.static(publicDirectoryPath));
app.use(router);

app.listen(port, (req, res) => {
    console.log('Server is running on port ' + port);
});