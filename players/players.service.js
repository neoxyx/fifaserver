const db = require("_helpers/db");
const { Sequelize } = require("sequelize");

const Op = Sequelize.Op;

module.exports = {
  getAll,
  getPlayersTeam,
  getPlayersByName,
};

// helper functions
async function getAll() {
  const players = await db.players.findAll();
  if (!players) throw "Players not found";
  return players;
}

async function getPlayersTeam(params) {
  const players = await db.players.findAll({
    where: { team: params.Name, page: params.Page },
    attributes: ["name", "position", "country"],
  });
  const items = await db.players.count({
    where: { team: params.Name, page: params.Page },
  });
  const totalItems = await db.players.count();
  if (!players) throw "Players not found";
  return {
    Page: params.Page,
    Items: items,
    totalItems: totalItems,
    players,
  };
}

async function getPlayersByName(search, order, page) {
  var orderBy = order != "" ? order : "ASC";
  const players = await db.players.findAll({
    where: { name: { [Op.like]: "%" + search + "%" } },
    order: [["name", orderBy]],
    attributes: ["name", "position", "country", "team"],
  });
  const items = await db.players.count({
    where: { name: { [Op.like]: "%" + search + "%" } },
  });
  const totalItems = await db.players.count();
  if (!players) throw "Players not found";
  return {
    Page: page,
    Items: items,
    totalItems: totalItems,
    players,
  };
}
