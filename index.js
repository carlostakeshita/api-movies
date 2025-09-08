const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/Movie");

const app = express();
app.use(express.json());

// Conexão MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-movies")
  .then(() => console.log("Conectado ao MongoDB 🎬"))
  .catch(err => console.error(err));

// Rota principal - lista de filmes
app.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));