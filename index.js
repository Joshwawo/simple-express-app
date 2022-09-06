const express = require("express");
const cors = require("cors");
const axios = require("axios");

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
  res.send("hola desde aqui");
});

app.get("/data", (req, res) => {
  res.json({
    data: "hola desde data",
  });
});

app.get("/test", async (req, res) => {
  const data = await fethData();
  res.json(data);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
