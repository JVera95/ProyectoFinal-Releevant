const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function conectar() {
  await client.connect();
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

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// -------------------Sacar juegos que sean de PC----------------------------

app.get("/platform", function (req, res) {
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { platform: { $in: ["PC"] } },
    (game) => {
      // console.log("Prueba 1: " + game.title, game.platform);
      games.push(game.title, game.platform);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

// -------------------Sacar juegos que tengan gameModes Single player--------

app.get("/gamemode", function (req, res) {
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { gameModes: { $in: ["Single player"] } },
    (game) => {
      // console.log("Prueba 2: " + game.title, game.gameModes);
      games.push(game.title, game.gameModes);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

// -------------------Sacar juegos que sean RPG's----------------------------

app.get("/genre", function (req, res) {
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { genre: { $in: ["Role-playing(RPG)"] } },
    (game) => {
      // console.log("Prueba 3: " + game.title, game.genre);
      games.push(game.title, game.genre);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

// -------------------Sacar juegos que tengan un rating especifico------------

app.get("/rating", function (req, res) {
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { rating: { $eq: 99 } },
    (game) => {
      // console.log("Prueba 4: " + game.title, game.rating);
      games.push(game.title, game.rating);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

// ------------------Sacar juegos que sean de "Bethesda Game Studios"---------

app.get("/company", function (req, res) {
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { company: { $eq: "Bethesda Game Studios" } },
    (game) => {
      // console.log("Prueba 5: " + game.title, game.company);
      games.push(game.title, game.company);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

// --------------------------------------------------------------------------

app.listen(8080);
