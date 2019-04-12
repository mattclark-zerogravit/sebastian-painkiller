
const express = require('express');
const bodyParser = require('body-parser');
const issue = require('./routes/issue.route'); // Imports routes for the products
const app = express();
app.use('/issue', issue);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
