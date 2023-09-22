import { Router } from 'express';
import { celebrate } from 'celebrate';
import postMovie from '../controllers/Movies/postMovie.js';
import getMovies from '../controllers/Movies/getMovies.js';

import {
  authorizedUserSchema,
  postMovieSchema,
} from '../ValidationSchemas/ValidationSchemas.js';

const moviesRoutes = Router();

moviesRoutes.get('/', celebrate(authorizedUserSchema), getMovies);
moviesRoutes.post('/', celebrate(authorizedUserSchema), celebrate(postMovieSchema), postMovie);
// moviesRoutes.delete('/:movieId', celebrate(authorizedUserSchema), deleteMovie);

export default moviesRoutes;
