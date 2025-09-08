import MovieService from "../services/movieService.js";

class MovieController {
  async getAllMovies(req, res) {
    try {
      const movies = await MovieService.getAll();
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async getOneMovie(req, res) {
    try {
      const movie = await MovieService.getOne(req.params.id);
      if (!movie) return res.status(404).json({ error: "Filme não encontrado" });
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async createMovie(req, res) {
    try {
      const movie = await MovieService.create(req.body);
      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async updateMovie(req, res) {
    try {
      const movie = await MovieService.update(req.params.id, req.body);
      if (!movie) return res.status(404).json({ error: "Filme não encontrado" });
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async deleteMovie(req, res) {
    try {
      const movie = await MovieService.delete(req.params.id);
      if (!movie) return res.status(404).json({ error: "Filme não encontrado" });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new MovieController();