// Dependencies
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

//Routes
require('./routes/apiRoutes');
require('./routes/htmlRoutes');

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));