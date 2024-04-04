const express = require('express');
const router = express.Router();
const players = [
  { name: 'Player 1', team: 'Team A' },
  { name: 'Player 2', team: 'Team B' },
  { name: 'Player 3', team: 'Team C' },
];

router.get('/', function(req, res) {
  res.render('layouts/players', { players: players });
});

module.exports = router;