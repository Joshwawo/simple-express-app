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
  res.json(
    [
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 3648151,
        "segunda_dosis_cantidad": 4022093,
        "dosis_adicional_cantidad": 832920,
        "dosis_refuerzo_cantidad": 1120874
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 251403,
        "segunda_dosis_cantidad": 382,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 90254,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 7712,
        "dosis_adicional_cantidad": 1530,
        "dosis_refuerzo_cantidad": 109491
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 420221,
        "segunda_dosis_cantidad": 1245627,
        "dosis_adicional_cantidad": 3185,
        "dosis_refuerzo_cantidad": 3244732
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 10371,
        "segunda_dosis_cantidad": 2072,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 3155
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1370181,
        "segunda_dosis_cantidad": 1444991,
        "dosis_adicional_cantidad": 77619,
        "dosis_refuerzo_cantidad": 5272592
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 19314,
        "segunda_dosis_cantidad": 8499,
        "dosis_adicional_cantidad": 122373,
        "dosis_refuerzo_cantidad": 2
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 5950425,
        "segunda_dosis_cantidad": 5257919,
        "dosis_adicional_cantidad": 1662,
        "dosis_refuerzo_cantidad": 10398
      },
      {
        "jurisdiccion_codigo_indec": "06",
        "jurisdiccion_nombre": "Buenos Aires",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 4315633,
        "segunda_dosis_cantidad": 2692905,
        "dosis_adicional_cantidad": 6256,
        "dosis_refuerzo_cantidad": 853914
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 728030,
        "segunda_dosis_cantidad": 762447,
        "dosis_adicional_cantidad": 204581,
        "dosis_refuerzo_cantidad": 506018
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 65649,
        "segunda_dosis_cantidad": 197,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 29831,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 1585,
        "dosis_adicional_cantidad": 44,
        "dosis_refuerzo_cantidad": 50587
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 32172,
        "segunda_dosis_cantidad": 274813,
        "dosis_adicional_cantidad": 1490,
        "dosis_refuerzo_cantidad": 1493969
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 5130,
        "segunda_dosis_cantidad": 1795,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 12024
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 192608,
        "segunda_dosis_cantidad": 219122,
        "dosis_adicional_cantidad": 62883,
        "dosis_refuerzo_cantidad": 1261265
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2436,
        "segunda_dosis_cantidad": 1889,
        "dosis_adicional_cantidad": 1566,
        "dosis_refuerzo_cantidad": 84929
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1018411,
        "segunda_dosis_cantidad": 965829,
        "dosis_adicional_cantidad": 1668,
        "dosis_refuerzo_cantidad": 5242
      },
      {
        "jurisdiccion_codigo_indec": "02",
        "jurisdiccion_nombre": "CABA",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 896561,
        "segunda_dosis_cantidad": 627382,
        "dosis_adicional_cantidad": 231,
        "dosis_refuerzo_cantidad": 13834
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 86651,
        "segunda_dosis_cantidad": 86541,
        "dosis_adicional_cantidad": 18029,
        "dosis_refuerzo_cantidad": 59257
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 4820,
        "segunda_dosis_cantidad": 13,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 2578,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 1032,
        "dosis_adicional_cantidad": 328,
        "dosis_refuerzo_cantidad": 47664
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 7645,
        "segunda_dosis_cantidad": 24073,
        "dosis_adicional_cantidad": 403,
        "dosis_refuerzo_cantidad": 96171
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2445,
        "segunda_dosis_cantidad": 379,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 2465
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 33546,
        "segunda_dosis_cantidad": 30704,
        "dosis_adicional_cantidad": 863,
        "dosis_refuerzo_cantidad": 82836
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 33,
        "segunda_dosis_cantidad": 55,
        "dosis_adicional_cantidad": 41,
        "dosis_refuerzo_cantidad": 14029
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 171126,
        "segunda_dosis_cantidad": 156512,
        "dosis_adicional_cantidad": 43,
        "dosis_refuerzo_cantidad": 537
      },
      {
        "jurisdiccion_codigo_indec": 10,
        "jurisdiccion_nombre": "Catamarca",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 96763,
        "segunda_dosis_cantidad": 73641,
        "dosis_adicional_cantidad": 1649,
        "dosis_refuerzo_cantidad": 28784
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 240177,
        "segunda_dosis_cantidad": 220230,
        "dosis_adicional_cantidad": 29270,
        "dosis_refuerzo_cantidad": 91708
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 15544,
        "segunda_dosis_cantidad": 778,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 11262,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 808,
        "dosis_adicional_cantidad": 212,
        "dosis_refuerzo_cantidad": 20762
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 30765,
        "segunda_dosis_cantidad": 68457,
        "dosis_adicional_cantidad": 1400,
        "dosis_refuerzo_cantidad": 119932
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2097,
        "segunda_dosis_cantidad": 317,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 1610
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 68589,
        "segunda_dosis_cantidad": 57334,
        "dosis_adicional_cantidad": 7795,
        "dosis_refuerzo_cantidad": 144279
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 727,
        "segunda_dosis_cantidad": 257,
        "dosis_adicional_cantidad": 197,
        "dosis_refuerzo_cantidad": 3274
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 390698,
        "segunda_dosis_cantidad": 309626,
        "dosis_adicional_cantidad": 445,
        "dosis_refuerzo_cantidad": 3021
      },
      {
        "jurisdiccion_codigo_indec": 22,
        "jurisdiccion_nombre": "Chaco",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 258215,
        "segunda_dosis_cantidad": 181748,
        "dosis_adicional_cantidad": 4471,
        "dosis_refuerzo_cantidad": 54467
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 132813,
        "segunda_dosis_cantidad": 128675,
        "dosis_adicional_cantidad": 20527,
        "dosis_refuerzo_cantidad": 45739
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 11933,
        "segunda_dosis_cantidad": 661,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 3574,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 362,
        "dosis_adicional_cantidad": 52,
        "dosis_refuerzo_cantidad": 5688
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 20714,
        "segunda_dosis_cantidad": 33332,
        "dosis_adicional_cantidad": 1220,
        "dosis_refuerzo_cantidad": 58567
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 210,
        "segunda_dosis_cantidad": 24,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 154
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 33212,
        "segunda_dosis_cantidad": 39610,
        "dosis_adicional_cantidad": 4516,
        "dosis_refuerzo_cantidad": 129691
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 415,
        "segunda_dosis_cantidad": 164,
        "dosis_adicional_cantidad": 27,
        "dosis_refuerzo_cantidad": 2159
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 172925,
        "segunda_dosis_cantidad": 141419,
        "dosis_adicional_cantidad": 174,
        "dosis_refuerzo_cantidad": 801
      },
      {
        "jurisdiccion_codigo_indec": 26,
        "jurisdiccion_nombre": "Chubut",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 136786,
        "segunda_dosis_cantidad": 100158,
        "dosis_adicional_cantidad": 905,
        "dosis_refuerzo_cantidad": 15166
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 194100,
        "segunda_dosis_cantidad": 185862,
        "dosis_adicional_cantidad": 17689,
        "dosis_refuerzo_cantidad": 158657
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 19885,
        "segunda_dosis_cantidad": 489,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 11247,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 279,
        "dosis_adicional_cantidad": 71,
        "dosis_refuerzo_cantidad": 39095
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 27833,
        "segunda_dosis_cantidad": 62003,
        "dosis_adicional_cantidad": 393,
        "dosis_refuerzo_cantidad": 195607
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 5839,
        "segunda_dosis_cantidad": 858,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 2478
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 83244,
        "segunda_dosis_cantidad": 81132,
        "dosis_adicional_cantidad": 1794,
        "dosis_refuerzo_cantidad": 258883
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 300,
        "segunda_dosis_cantidad": 215,
        "dosis_adicional_cantidad": 258,
        "dosis_refuerzo_cantidad": 35845
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 428556,
        "segunda_dosis_cantidad": 367756,
        "dosis_adicional_cantidad": 66,
        "dosis_refuerzo_cantidad": 2414
      },
      {
        "jurisdiccion_codigo_indec": 18,
        "jurisdiccion_nombre": "Corrientes",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 268465,
        "segunda_dosis_cantidad": 194717,
        "dosis_adicional_cantidad": 16,
        "dosis_refuerzo_cantidad": 48394
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 809215,
        "segunda_dosis_cantidad": 824860,
        "dosis_adicional_cantidad": 184039,
        "dosis_refuerzo_cantidad": 658248
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 44130,
        "segunda_dosis_cantidad": 128,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 38330,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 5739,
        "dosis_adicional_cantidad": 33,
        "dosis_refuerzo_cantidad": 11323
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 48103,
        "segunda_dosis_cantidad": 265219,
        "dosis_adicional_cantidad": 36,
        "dosis_refuerzo_cantidad": 635566
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2811,
        "segunda_dosis_cantidad": 444,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 1760
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 283166,
        "segunda_dosis_cantidad": 257491,
        "dosis_adicional_cantidad": 16580,
        "dosis_refuerzo_cantidad": 707214
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1606,
        "segunda_dosis_cantidad": 941,
        "dosis_adicional_cantidad": 148,
        "dosis_refuerzo_cantidad": 20913
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1252820,
        "segunda_dosis_cantidad": 1137625,
        "dosis_adicional_cantidad": 516,
        "dosis_refuerzo_cantidad": 8412
      },
      {
        "jurisdiccion_codigo_indec": 14,
        "jurisdiccion_nombre": "Córdoba",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 940011,
        "segunda_dosis_cantidad": 627663,
        "dosis_adicional_cantidad": 4079,
        "dosis_refuerzo_cantidad": 98586
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 292017,
        "segunda_dosis_cantidad": 287389,
        "dosis_adicional_cantidad": 72091,
        "dosis_refuerzo_cantidad": 178512
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 17379,
        "segunda_dosis_cantidad": 368,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 14022,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 497,
        "dosis_adicional_cantidad": 14,
        "dosis_refuerzo_cantidad": 5077
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 23775,
        "segunda_dosis_cantidad": 85850,
        "dosis_adicional_cantidad": 217,
        "dosis_refuerzo_cantidad": 190443
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1272,
        "segunda_dosis_cantidad": 237,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 1256
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 97969,
        "segunda_dosis_cantidad": 86134,
        "dosis_adicional_cantidad": 7714,
        "dosis_refuerzo_cantidad": 244974
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 218,
        "segunda_dosis_cantidad": 111,
        "dosis_adicional_cantidad": 46,
        "dosis_refuerzo_cantidad": 13908
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 483473,
        "segunda_dosis_cantidad": 428709,
        "dosis_adicional_cantidad": 304,
        "dosis_refuerzo_cantidad": 1460
      },
      {
        "jurisdiccion_codigo_indec": 30,
        "jurisdiccion_nombre": "Entre Ríos",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 325128,
        "segunda_dosis_cantidad": 233507,
        "dosis_adicional_cantidad": 3780,
        "dosis_refuerzo_cantidad": 86894
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 129550,
        "segunda_dosis_cantidad": 156223,
        "dosis_adicional_cantidad": 231065,
        "dosis_refuerzo_cantidad": 77054
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 7391,
        "segunda_dosis_cantidad": 8,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 7289,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 0,
        "dosis_adicional_cantidad": 13,
        "dosis_refuerzo_cantidad": 4751
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 40577,
        "segunda_dosis_cantidad": 9107,
        "dosis_adicional_cantidad": 155,
        "dosis_refuerzo_cantidad": 108599
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2116,
        "segunda_dosis_cantidad": 241,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 1094
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 26519,
        "segunda_dosis_cantidad": 56083,
        "dosis_adicional_cantidad": 21470,
        "dosis_refuerzo_cantidad": 82211
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 27,
        "segunda_dosis_cantidad": 82,
        "dosis_adicional_cantidad": 112,
        "dosis_refuerzo_cantidad": 11307
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 235333,
        "segunda_dosis_cantidad": 210391,
        "dosis_adicional_cantidad": 372,
        "dosis_refuerzo_cantidad": 445
      },
      {
        "jurisdiccion_codigo_indec": 34,
        "jurisdiccion_nombre": "Formosa",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 138018,
        "segunda_dosis_cantidad": 89193,
        "dosis_adicional_cantidad": 2986,
        "dosis_refuerzo_cantidad": 10069
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 165383,
        "segunda_dosis_cantidad": 159327,
        "dosis_adicional_cantidad": 31957,
        "dosis_refuerzo_cantidad": 52581
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 14041,
        "segunda_dosis_cantidad": 293,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 1714,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 1681,
        "dosis_adicional_cantidad": 36,
        "dosis_refuerzo_cantidad": 32367
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 26408,
        "segunda_dosis_cantidad": 41555,
        "dosis_adicional_cantidad": 1542,
        "dosis_refuerzo_cantidad": 129556
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1850,
        "segunda_dosis_cantidad": 205,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 617
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 57997,
        "segunda_dosis_cantidad": 71913,
        "dosis_adicional_cantidad": 14714,
        "dosis_refuerzo_cantidad": 151171
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2482,
        "segunda_dosis_cantidad": 794,
        "dosis_adicional_cantidad": 160,
        "dosis_refuerzo_cantidad": 11871
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 278662,
        "segunda_dosis_cantidad": 218657,
        "dosis_adicional_cantidad": 439,
        "dosis_refuerzo_cantidad": 1308
      },
      {
        "jurisdiccion_codigo_indec": 38,
        "jurisdiccion_nombre": "Jujuy",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 154332,
        "segunda_dosis_cantidad": 125489,
        "dosis_adicional_cantidad": 12804,
        "dosis_refuerzo_cantidad": 38841
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 69355,
        "segunda_dosis_cantidad": 76607,
        "dosis_adicional_cantidad": 37279,
        "dosis_refuerzo_cantidad": 45543
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 4588,
        "segunda_dosis_cantidad": 0,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 2907,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 0,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 3234
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 6268,
        "segunda_dosis_cantidad": 26056,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 96031
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 314,
        "segunda_dosis_cantidad": 73,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 1414
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 27725,
        "segunda_dosis_cantidad": 27385,
        "dosis_adicional_cantidad": 4686,
        "dosis_refuerzo_cantidad": 140346
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 194,
        "segunda_dosis_cantidad": 110,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 5669
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 135987,
        "segunda_dosis_cantidad": 130859,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 7
      },
      {
        "jurisdiccion_codigo_indec": 42,
        "jurisdiccion_nombre": "La Pampa",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 89557,
        "segunda_dosis_cantidad": 62012,
        "dosis_adicional_cantidad": 330,
        "dosis_refuerzo_cantidad": 20178
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 78764,
        "segunda_dosis_cantidad": 79549,
        "dosis_adicional_cantidad": 21300,
        "dosis_refuerzo_cantidad": 30477
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 7269,
        "segunda_dosis_cantidad": 125,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 3153,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 50,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 4383
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 10401,
        "segunda_dosis_cantidad": 26744,
        "dosis_adicional_cantidad": 1892,
        "dosis_refuerzo_cantidad": 76154
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 655,
        "segunda_dosis_cantidad": 55,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 544
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 30315,
        "segunda_dosis_cantidad": 35326,
        "dosis_adicional_cantidad": 10362,
        "dosis_refuerzo_cantidad": 103507
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 51,
        "segunda_dosis_cantidad": 50,
        "dosis_adicional_cantidad": 423,
        "dosis_refuerzo_cantidad": 5592
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 140563,
        "segunda_dosis_cantidad": 126029,
        "dosis_adicional_cantidad": 56,
        "dosis_refuerzo_cantidad": 430
      },
      {
        "jurisdiccion_codigo_indec": 46,
        "jurisdiccion_nombre": "La Rioja",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 95101,
        "segunda_dosis_cantidad": 70055,
        "dosis_adicional_cantidad": 4327,
        "dosis_refuerzo_cantidad": 29227
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 442010,
        "segunda_dosis_cantidad": 432126,
        "dosis_adicional_cantidad": 43464,
        "dosis_refuerzo_cantidad": 289069
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 25667,
        "segunda_dosis_cantidad": 470,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 11497,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 1808,
        "dosis_adicional_cantidad": 52,
        "dosis_refuerzo_cantidad": 41478
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 30291,
        "segunda_dosis_cantidad": 142728,
        "dosis_adicional_cantidad": 185,
        "dosis_refuerzo_cantidad": 215292
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 3181,
        "segunda_dosis_cantidad": 482,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 3551
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 151595,
        "segunda_dosis_cantidad": 153072,
        "dosis_adicional_cantidad": 6847,
        "dosis_refuerzo_cantidad": 391382
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 3933,
        "segunda_dosis_cantidad": 860,
        "dosis_adicional_cantidad": 40,
        "dosis_refuerzo_cantidad": 17257
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 614380,
        "segunda_dosis_cantidad": 524537,
        "dosis_adicional_cantidad": 297,
        "dosis_refuerzo_cantidad": 2168
      },
      {
        "jurisdiccion_codigo_indec": 50,
        "jurisdiccion_nombre": "Mendoza",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 473477,
        "segunda_dosis_cantidad": 301003,
        "dosis_adicional_cantidad": 3161,
        "dosis_refuerzo_cantidad": 119692
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 227936,
        "segunda_dosis_cantidad": 241854,
        "dosis_adicional_cantidad": 87980,
        "dosis_refuerzo_cantidad": 62774
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 16858,
        "segunda_dosis_cantidad": 819,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 7622,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 97,
        "dosis_adicional_cantidad": 49,
        "dosis_refuerzo_cantidad": 753
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 42824,
        "segunda_dosis_cantidad": 55652,
        "dosis_adicional_cantidad": 1049,
        "dosis_refuerzo_cantidad": 19428
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1009,
        "segunda_dosis_cantidad": 105,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 259
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 61099,
        "segunda_dosis_cantidad": 62172,
        "dosis_adicional_cantidad": 15127,
        "dosis_refuerzo_cantidad": 134608
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1921,
        "segunda_dosis_cantidad": 557,
        "dosis_adicional_cantidad": 142,
        "dosis_refuerzo_cantidad": 1740
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 348764,
        "segunda_dosis_cantidad": 275810,
        "dosis_adicional_cantidad": 1079,
        "dosis_refuerzo_cantidad": 5106
      },
      {
        "jurisdiccion_codigo_indec": 54,
        "jurisdiccion_nombre": "Misiones",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 257846,
        "segunda_dosis_cantidad": 175390,
        "dosis_adicional_cantidad": 27761,
        "dosis_refuerzo_cantidad": 52674
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 142516,
        "segunda_dosis_cantidad": 146437,
        "dosis_adicional_cantidad": 24471,
        "dosis_refuerzo_cantidad": 72446
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 12837,
        "segunda_dosis_cantidad": 67,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 10525,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 2417,
        "dosis_adicional_cantidad": 1,
        "dosis_refuerzo_cantidad": 56751
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 13803,
        "segunda_dosis_cantidad": 44413,
        "dosis_adicional_cantidad": 67,
        "dosis_refuerzo_cantidad": 80800
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 516,
        "segunda_dosis_cantidad": 68,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 403
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 50733,
        "segunda_dosis_cantidad": 47106,
        "dosis_adicional_cantidad": 3339,
        "dosis_refuerzo_cantidad": 126810
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 328,
        "segunda_dosis_cantidad": 153,
        "dosis_adicional_cantidad": 17,
        "dosis_refuerzo_cantidad": 2778
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 235843,
        "segunda_dosis_cantidad": 210861,
        "dosis_adicional_cantidad": 87,
        "dosis_refuerzo_cantidad": 553
      },
      {
        "jurisdiccion_codigo_indec": 58,
        "jurisdiccion_nombre": "Neuquén",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 172984,
        "segunda_dosis_cantidad": 125427,
        "dosis_adicional_cantidad": 1718,
        "dosis_refuerzo_cantidad": 56120
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 147331,
        "segunda_dosis_cantidad": 155825,
        "dosis_adicional_cantidad": 38873,
        "dosis_refuerzo_cantidad": 62764
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 14012,
        "segunda_dosis_cantidad": 93,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 4111,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 633,
        "dosis_adicional_cantidad": 42,
        "dosis_refuerzo_cantidad": 12191
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 11324,
        "segunda_dosis_cantidad": 52911,
        "dosis_adicional_cantidad": 6624,
        "dosis_refuerzo_cantidad": 115553
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 726,
        "segunda_dosis_cantidad": 118,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 697
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 55500,
        "segunda_dosis_cantidad": 53380,
        "dosis_adicional_cantidad": 26623,
        "dosis_refuerzo_cantidad": 145168
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 745,
        "segunda_dosis_cantidad": 270,
        "dosis_adicional_cantidad": 16,
        "dosis_refuerzo_cantidad": 3205
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 277445,
        "segunda_dosis_cantidad": 244921,
        "dosis_adicional_cantidad": 589,
        "dosis_refuerzo_cantidad": 1840
      },
      {
        "jurisdiccion_codigo_indec": 62,
        "jurisdiccion_nombre": "Río Negro",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 177592,
        "segunda_dosis_cantidad": 117964,
        "dosis_adicional_cantidad": 16149,
        "dosis_refuerzo_cantidad": 37477
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 311601,
        "segunda_dosis_cantidad": 276131,
        "dosis_adicional_cantidad": 23083,
        "dosis_refuerzo_cantidad": 25678
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 17985,
        "segunda_dosis_cantidad": 69,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 3895,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 257,
        "dosis_adicional_cantidad": 476,
        "dosis_refuerzo_cantidad": 8498
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 35587,
        "segunda_dosis_cantidad": 97870,
        "dosis_adicional_cantidad": 4505,
        "dosis_refuerzo_cantidad": 229259
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 3344,
        "segunda_dosis_cantidad": 396,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 3644
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 104555,
        "segunda_dosis_cantidad": 110556,
        "dosis_adicional_cantidad": 17422,
        "dosis_refuerzo_cantidad": 279518
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 3232,
        "segunda_dosis_cantidad": 988,
        "dosis_adicional_cantidad": 55,
        "dosis_refuerzo_cantidad": 6807
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 417425,
        "segunda_dosis_cantidad": 338028,
        "dosis_adicional_cantidad": 277,
        "dosis_refuerzo_cantidad": 1072
      },
      {
        "jurisdiccion_codigo_indec": 66,
        "jurisdiccion_nombre": "Salta",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 300198,
        "segunda_dosis_cantidad": 206231,
        "dosis_adicional_cantidad": 10559,
        "dosis_refuerzo_cantidad": 58161
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 157656,
        "segunda_dosis_cantidad": 165534,
        "dosis_adicional_cantidad": 24464,
        "dosis_refuerzo_cantidad": 55925
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 8867,
        "segunda_dosis_cantidad": 13,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 7270,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 1213,
        "dosis_adicional_cantidad": 362,
        "dosis_refuerzo_cantidad": 31866
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 19114,
        "segunda_dosis_cantidad": 44112,
        "dosis_adicional_cantidad": 665,
        "dosis_refuerzo_cantidad": 88792
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1311,
        "segunda_dosis_cantidad": 170,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 807
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 58622,
        "segunda_dosis_cantidad": 52481,
        "dosis_adicional_cantidad": 7353,
        "dosis_refuerzo_cantidad": 131463
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 529,
        "segunda_dosis_cantidad": 291,
        "dosis_adicional_cantidad": 2,
        "dosis_refuerzo_cantidad": 8736
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 263074,
        "segunda_dosis_cantidad": 236884,
        "dosis_adicional_cantidad": 53,
        "dosis_refuerzo_cantidad": 414
      },
      {
        "jurisdiccion_codigo_indec": 70,
        "jurisdiccion_nombre": "San Juan",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 197689,
        "segunda_dosis_cantidad": 137004,
        "dosis_adicional_cantidad": 6125,
        "dosis_refuerzo_cantidad": 52994
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 99367,
        "segunda_dosis_cantidad": 106947,
        "dosis_adicional_cantidad": 37240,
        "dosis_refuerzo_cantidad": 55023
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 6829,
        "segunda_dosis_cantidad": 0,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 6212,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 935,
        "dosis_adicional_cantidad": 1,
        "dosis_refuerzo_cantidad": 30647
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 9108,
        "segunda_dosis_cantidad": 32058,
        "dosis_adicional_cantidad": 430,
        "dosis_refuerzo_cantidad": 137560
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 290,
        "segunda_dosis_cantidad": 29,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 1526
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 38637,
        "segunda_dosis_cantidad": 37114,
        "dosis_adicional_cantidad": 12270,
        "dosis_refuerzo_cantidad": 175265
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 108,
        "segunda_dosis_cantidad": 50,
        "dosis_adicional_cantidad": 4,
        "dosis_refuerzo_cantidad": 16396
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 174371,
        "segunda_dosis_cantidad": 165653,
        "dosis_adicional_cantidad": 22,
        "dosis_refuerzo_cantidad": 436
      },
      {
        "jurisdiccion_codigo_indec": 74,
        "jurisdiccion_nombre": "San Luis",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 126858,
        "segunda_dosis_cantidad": 93031,
        "dosis_adicional_cantidad": 306,
        "dosis_refuerzo_cantidad": 29876
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 65246,
        "segunda_dosis_cantidad": 65088,
        "dosis_adicional_cantidad": 8994,
        "dosis_refuerzo_cantidad": 31004
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 6007,
        "segunda_dosis_cantidad": 729,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 2343,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 85,
        "dosis_adicional_cantidad": 1,
        "dosis_refuerzo_cantidad": 2587
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 9610,
        "segunda_dosis_cantidad": 20015,
        "dosis_adicional_cantidad": 121,
        "dosis_refuerzo_cantidad": 41531
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 317,
        "segunda_dosis_cantidad": 49,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 277
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 24229,
        "segunda_dosis_cantidad": 25921,
        "dosis_adicional_cantidad": 7684,
        "dosis_refuerzo_cantidad": 66430
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 109,
        "segunda_dosis_cantidad": 63,
        "dosis_adicional_cantidad": 11,
        "dosis_refuerzo_cantidad": 2961
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 106142,
        "segunda_dosis_cantidad": 93427,
        "dosis_adicional_cantidad": 80,
        "dosis_refuerzo_cantidad": 627
      },
      {
        "jurisdiccion_codigo_indec": 78,
        "jurisdiccion_nombre": "Santa Cruz",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 91619,
        "segunda_dosis_cantidad": 68915,
        "dosis_adicional_cantidad": 3135,
        "dosis_refuerzo_cantidad": 23660
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 761839,
        "segunda_dosis_cantidad": 774965,
        "dosis_adicional_cantidad": 248704,
        "dosis_refuerzo_cantidad": 287850
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 41487,
        "segunda_dosis_cantidad": 58,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 26551,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 179,
        "dosis_adicional_cantidad": 29,
        "dosis_refuerzo_cantidad": 2107
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 45496,
        "segunda_dosis_cantidad": 254695,
        "dosis_adicional_cantidad": 14226,
        "dosis_refuerzo_cantidad": 1139905
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 3565,
        "segunda_dosis_cantidad": 450,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 3707
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 269053,
        "segunda_dosis_cantidad": 261956,
        "dosis_adicional_cantidad": 133666,
        "dosis_refuerzo_cantidad": 1009052
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 515,
        "segunda_dosis_cantidad": 258,
        "dosis_adicional_cantidad": 1217,
        "dosis_refuerzo_cantidad": 23383
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 1180947,
        "segunda_dosis_cantidad": 1099058,
        "dosis_adicional_cantidad": 651,
        "dosis_refuerzo_cantidad": 2969
      },
      {
        "jurisdiccion_codigo_indec": 82,
        "jurisdiccion_nombre": "Santa Fe",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 921743,
        "segunda_dosis_cantidad": 648238,
        "dosis_adicional_cantidad": 7666,
        "dosis_refuerzo_cantidad": 122923
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 212006,
        "segunda_dosis_cantidad": 211746,
        "dosis_adicional_cantidad": 49262,
        "dosis_refuerzo_cantidad": 120473
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 11967,
        "segunda_dosis_cantidad": 1314,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 17391,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 969,
        "dosis_adicional_cantidad": 5207,
        "dosis_refuerzo_cantidad": 75020
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 11570,
        "segunda_dosis_cantidad": 72353,
        "dosis_adicional_cantidad": 1596,
        "dosis_refuerzo_cantidad": 180196
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2225,
        "segunda_dosis_cantidad": 335,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 2750
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 97019,
        "segunda_dosis_cantidad": 90966,
        "dosis_adicional_cantidad": 3754,
        "dosis_refuerzo_cantidad": 123979
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 80,
        "segunda_dosis_cantidad": 70,
        "dosis_adicional_cantidad": 34,
        "dosis_refuerzo_cantidad": 17998
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 1,
        "primera_dosis_cantidad": 398343,
        "segunda_dosis_cantidad": 369916,
        "dosis_adicional_cantidad": 316,
        "dosis_refuerzo_cantidad": 1279
      },
      {
        "jurisdiccion_codigo_indec": 86,
        "jurisdiccion_nombre": "Santiago del Estero",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 229204,
        "segunda_dosis_cantidad": 157028,
        "dosis_adicional_cantidad": 14758,
        "dosis_refuerzo_cantidad": 61601
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 35154,
        "segunda_dosis_cantidad": 35548,
        "dosis_adicional_cantidad": 6892,
        "dosis_refuerzo_cantidad": 21399
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2740,
        "segunda_dosis_cantidad": 758,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 346,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 125,
        "dosis_adicional_cantidad": 17,
        "dosis_refuerzo_cantidad": 3111
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2282,
        "segunda_dosis_cantidad": 12548,
        "dosis_adicional_cantidad": 210,
        "dosis_refuerzo_cantidad": 24690
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 118,
        "segunda_dosis_cantidad": 19,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 252
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 14484,
        "segunda_dosis_cantidad": 13637,
        "dosis_adicional_cantidad": 944,
        "dosis_refuerzo_cantidad": 32468
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 104,
        "segunda_dosis_cantidad": 37,
        "dosis_adicional_cantidad": 10,
        "dosis_refuerzo_cantidad": 2972
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 58395,
        "segunda_dosis_cantidad": 53500,
        "dosis_adicional_cantidad": 24,
        "dosis_refuerzo_cantidad": 182
      },
      {
        "jurisdiccion_codigo_indec": 94,
        "jurisdiccion_nombre": "Tierra del Fuego",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 44863,
        "segunda_dosis_cantidad": 30837,
        "dosis_adicional_cantidad": 539,
        "dosis_refuerzo_cantidad": 7473
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "AstraZeneca ChAdOx1 S recombinante",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 352868,
        "segunda_dosis_cantidad": 331656,
        "dosis_adicional_cantidad": 43762,
        "dosis_refuerzo_cantidad": 189840
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "COVISHIELD ChAdOx1nCoV COVID 19",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 20628,
        "segunda_dosis_cantidad": 86,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 0
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Cansino Ad5 nCoV",
        "dosis_unica_cantidad": 7707,
        "primera_dosis_cantidad": 0,
        "segunda_dosis_cantidad": 62,
        "dosis_adicional_cantidad": 1410,
        "dosis_refuerzo_cantidad": 17627
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Moderna ARNm",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 34084,
        "segunda_dosis_cantidad": 107771,
        "dosis_adicional_cantidad": 21453,
        "dosis_refuerzo_cantidad": 210095
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Moderna Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 512,
        "segunda_dosis_cantidad": 93,
        "dosis_adicional_cantidad": 0,
        "dosis_refuerzo_cantidad": 339
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Pfizer BioNTech Comirnaty",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 118510,
        "segunda_dosis_cantidad": 101678,
        "dosis_adicional_cantidad": 246,
        "dosis_refuerzo_cantidad": 156966
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Pfizer Pediátrica",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 2091,
        "segunda_dosis_cantidad": 483,
        "dosis_adicional_cantidad": 2645,
        "dosis_refuerzo_cantidad": 33531
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Sinopharm Vacuna SARSCOV 2 inactivada",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 537947,
        "segunda_dosis_cantidad": 474318,
        "dosis_adicional_cantidad": 3,
        "dosis_refuerzo_cantidad": 577
      },
      {
        "jurisdiccion_codigo_indec": 90,
        "jurisdiccion_nombre": "Tucumán",
        "vacuna_nombre": "Sputnik V COVID19 Instituto Gamaleya",
        "dosis_unica_cantidad": 0,
        "primera_dosis_cantidad": 431397,
        "segunda_dosis_cantidad": 324924,
        "dosis_adicional_cantidad": 4078,
        "dosis_refuerzo_cantidad": 78131
      }
    ]
  )
});

app.get("/test", async (req, res) => {
  const data = await fethData();
  res.json(data);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
