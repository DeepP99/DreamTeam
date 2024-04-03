const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// View engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
const port = 5500;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});