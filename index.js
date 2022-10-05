const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { covicho, jobs, apple } = require("./helpers.js");

const app = express();

app.use(cors());

const fethData = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=20%27&offset=0"
  );
  return response.data;
};

// fethData();

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rest API TESTING</title>

    <style>
      .bod{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.788);
        color: white;
      }
    </style>
  </head>
  <body class="bod">
    <h1>Bienvenido a la REST API DE PRUEBA</h1>
  </body>
</html>

  `);
});

app.get("/covidataset", (req, res) => {
  res.json(covicho);
});

app.get("/jobsdataset", (req, res) => {
  res.json(jobs);
});

app.get("/appledataset", (req, res) => {
  res.json(apple);
});

app.get("/test", async (req, res) => {
  const data = await fethData();
  res.json(data);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
