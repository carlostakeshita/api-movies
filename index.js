import express from "express";
import mongoose from "mongoose";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
const PORT = 4000;

// Middleware JSON
app.use(express.json());

// Rotas
app.use("/api", movieRoutes);

// Conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-movies")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Erro MongoDB:", err));

// Servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.get("/", (req, res) => {
  res.send("API Movies está funcionando!");
});