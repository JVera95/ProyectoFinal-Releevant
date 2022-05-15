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

// ------------------------Sacar juegos de PC---------------------------------

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

// ------------------------Sacar juegos de PS---------------------------------

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

// ------------------------Sacar juegos de XBOX---------------------------------

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

// ------------------------Sacar juegos de NINTENDO------------------------------

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

// -------------------Sacar al usuario por id----------------------------

app.get("/profile/:_id", function (req, res) {
  let _id = req.params._id;
  res.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;

    let database = client.db("RatingGames");

    database
      .collection("Users")
      .find({ _id: ObjectId(_id) })
      .toArray((err, results) => {
        console.log(results);
        if (err) throw err;

        results.forEach((value) => {
          console.log(value);
        });
        res.json(results);
      });
  });
});

// --------------------Modificar datos de usuarios por id--------------------



// ----------------Sacar lista de favoritos de usuarios por id---------------

app.get("/mylist/:_id", function (req, res) {
  let _id = req.params._id;
  res.set("Access-Control-Allow-Origin", "*");
  /* response.send({ msg: "This has CORS enabled" }); */
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;

    let database = client.db("RatingGames");

    database
      .collection("Users")
      .find({ _id: ObjectId(_id) })
      .toArray((err, results) => {
        console.log(results);
        if (err) throw err;

        results.forEach((value) => {
          console.log(value);
        });
        res.json(results);
      });
  });
});

// --------Borrar juegos de la lista de favoritos de usuarios por id---------



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
            _id: games._id,
            title: games.title,
            rating: games.rating,
          };
          information.push(game);
        });
        res.json(information);
      });
  });
});

// ----------------------------Register------------------------------------

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

// ------------------------------Login------------------------------------

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
          _id: usuarios._id,
        },
        "validedToken",
        {
          expiresIn: "1h",
        }
      );
      result = {
        _id: usuarios._id,
        email: usuarios.email,
        token: token,
      };
    }
    response.json(result);
  });
});

// --------------------------------------------------------------------------

app.listen(8080);
