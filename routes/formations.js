const express = require('express');
const router = express.Router();
const formations = [
  { name: 'Formation 1', description: 'Description 1' },
  { name: 'Formation 2', description: 'Description 2' },
  { name: 'Formation 3', description: 'Description 3' },
];

router.get('/', function(req, res) {
  res.render('layouts/formations', { formations: formations });
});

module.exports = router;