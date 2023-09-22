import movie from '../../models/movie.js';

const getMovies = async (req, res, next) => {
  const owner = req.user._id;
  try {
    const movies = await movie.find({ owner });
    res.send(movies);
  } catch (err) {
    next(err);
  }
};

export default getMovies;
