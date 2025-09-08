import express from "express";
import MovieController from "../controllers/movieController.js";

const router = express.Router();

// Rotas CRUD
router.get("/movies", MovieController.getAllMovies);
router.get("/movies/:id", MovieController.getOneMovie);
router.post("/movies", MovieController.createMovie);
router.put("/movies/:id", MovieController.updateMovie);
router.delete("/movies/:id", MovieController.deleteMovie);

export default router;