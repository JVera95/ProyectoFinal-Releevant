const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

function conectar(callback, error) {
  client.connect().then(callback).catch(error);
}
function logError(e) {
  console.log(e);
}

function find(baseDatos, collection, filtro, execute, callback, error) {
  client
    .db(baseDatos)
    .collection(collection)
    .find(filtro)
    .forEach(execute)
    .then(callback)
    .catch(error);
}

// -------------------Sacar juegos que sean de PC----------------------------

conectar(() => {
    find("RatingGames", "Games", { platform: { $in: ["PC"] } }, (game) => {
      console.log("Prueba 1: " + game.title, game.platform);
    });
  }, logError);

// -------------------Sacar juegos que tengan gameModes Single player----------------------------

conectar(() => {
    find("RatingGames", "Games", { gameModes: { $in: ["Single player"] } }, (game) => {
      console.log("Prueba 2: " + game.title, game.gameModes);
    });
  }, logError);

// -------------------Sacar juegos que su rating sean menor o igual----------------------------
