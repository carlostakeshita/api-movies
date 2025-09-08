import Movie from "../models/Movie.js";

class MovieService {
  async getAll() {
    return await Movie.find();
  }

  async getOne(id) {
    return await Movie.findById(id);
  }

  async create(data) {
    const movie = new Movie(data);
    return await movie.save();
  }

  async update(id, data) {
    return await Movie.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Movie.findByIdAndDelete(id);
  }
}

export default new MovieService();