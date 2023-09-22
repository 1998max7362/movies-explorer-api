import movie from '../../models/movie.js';
import NotFoundIdError from '../../middlewares/Errors/customErrors/NotFoundIdError.js';
import NotEnoughRightsError from '../../middlewares/Errors/customErrors/notEnoughRightsError.js';

const deleteMovie = async (req, res, next) => {
  const { movieId } = req.params;
  const userId = req.user._id;
  try {
    const foundCard = await movie.findById({ _id: movieId });
    if (!foundCard) {
      throw new NotFoundIdError('card');
    }
    if (foundCard.owner.valueOf() !== userId) {
      throw new NotEnoughRightsError();
    }
    const removedCard = await movie.deleteOne({ _id: movieId });
    res.send({ removedCard, message: 'Фильм удалён' });
  } catch (err) {
    next(err);
  }
};
export default deleteMovie;
