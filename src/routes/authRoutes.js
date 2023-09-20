import { Router } from 'express';
import { celebrate } from 'celebrate';

import postUser from '../controllers/Users/postUser.js';
import loginUser from '../controllers/Users/loginUser.js';
import logoutUser from '../controllers/Users/logoutUser.js';
import { signInSchema, signUpSchema } from '../ValidationSchemas/ValidationSchemas.js';

const authRouter = Router();

authRouter.post('/signup', celebrate(signUpSchema), postUser);
authRouter.post('/signin', celebrate(signInSchema), loginUser);
authRouter.get('/signout', logoutUser);

export default authRouter;
