import movie from '../../models/movie.js';

const postMovie = async (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    id,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;
  try {
    const newMovie = await movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      owner,
      id,
      nameRU,
      nameEN,
    });
    res.status(201).send(newMovie);
  } catch (err) {
    next(err);
  }
};

export default postMovie;
