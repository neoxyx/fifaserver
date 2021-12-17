const express = require("express");
const router = express.Router();
const playersService = require("./players.service");

// routes
router.get("/", getAll);
router.post("/team", getByTeam);
router.get("/players", getPlayers);

module.exports = router;

function getAll(req, res, next) {
  playersService
    .getAll()
    .then((players) => res.json(players))
    .catch(next);
}

function getByTeam(req, res, next) {
  playersService
    .getPlayersTeam(req.body)
    .then((players) => res.json(players))
    .catch(next);
}

function getPlayers(req, res, next) {
  playersService
    .getPlayersByName(req.query.search, req.query.order, req.query.page)
    .then((players) => res.json(players))
    .catch(next);
}
