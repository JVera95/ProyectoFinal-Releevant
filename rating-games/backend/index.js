const express = require("express");
const app = express();
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");
const cors = require("cors");
const jwt = require("jsonwebtoken");

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
app.use(cors());

// -------------------Sacar juegos de plataformas especificas----------------------------

app.get("/pc/:PC", function (req, res) {
  let PC = req.params.PC;
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { platform: { $regex: new RegExp(PC, "i") } },
    (game) => {
      games.push(game);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

app.get("/ps/:PS", function (req, res) {
  let PS = req.params.PS;
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { platform: { $regex: new RegExp(PS, "i") } },
    (game) => {
      games.push(game);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

app.get("/xbox/:XBOX", function (req, res) {
  let XBOX = req.params.XBOX;
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { platform: { $regex: new RegExp(XBOX, "i") } },
    (game) => {
      games.push(game);
    },
    function () {
      res.send(games);
    },
    logError
  );
});

app.get("/nint/:NINT", function (req, res) {
  let NINT = req.params.NINT;
  conectar();
  let games = [];
  find(
    "RatingGames",
    "Games",
    { platform: { $regex: new RegExp(NINT, "i") } },
    (game) => {
      games.push(game);
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

// ----------------Sacar toda la información de juegos por id-------------------

app.get("/game/:_id", function (req, res) {
  let _id = req.params._id;
  res.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;

    let database = client.db("RatingGames");

    database
      .collection("Games")
      .find({ _id: ObjectId(_id) })
      .toArray((err, results) => {
        if (err) throw err;

        results.forEach((value) => {
          console.log(value);
        });
        res.json(results);
      });
  });
});

// -----------------Sacar los juegos de mayor a menor rating-----------------

app.get("/toprating", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;

    let database = client.db("RatingGames");

    let information = [];

    database
      .collection("Games")
      .find()
      .sort({ rating: -1 })
      .toArray((err, results) => {
        if (err) throw err;

        results.forEach((games) => {
          let game = {
            title: games.title,
            rating: games.rating,
          };
          information.push(game);
        });
        res.json(information);
      });
  });
});

// --------------------------------------------------------------------------

///////REGISTER//////
app.post("/newUser", function (request, response) {
  response.set("Access-Control-Allow-Origin", "*");
  let MyNewUser = request.body;
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;
    let database = client.db("RatingGames");
    database
      .collection("Users")
      .findOne({})
      .then((doc) => {
        database.collection("Users").insertOne(MyNewUser);
        database
          .collection("Users")
          .find()
          .toArray((err, results) => {
            if (err) throw err;
            response.json(results);
          });
      });
  });
});

///////LOGIN//////
app.post("/login", function (request, response) {
  myBody = request.body;
  response.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  MongoClient.connect("mongodb://localhost:27017/", async (err, client) => {
    if (err) throw err;
    let database = client.db("RatingGames");
    var exist = false;
    let token = "";
    let result = "";
    var usuarios = await database.collection("Users").findOne({
      email: { $eq: myBody.email },
      password: { $eq: myBody.password },
    });
    if (usuarios !== null) {
      token = jwt.sign(
        {
          email: usuarios.email,
          id: usuarios._id,
        },
        "validedToken",
        {
          expiresIn: "1h",
        }
      );
      result = {
        email: usuarios.email,
        id: usuarios._id,
        token: token,
      };
    }
    response.json(result);
  });
});

// --------------------------------------------------------------------------

app.listen(8080);
