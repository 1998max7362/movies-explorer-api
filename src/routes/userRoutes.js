import { Router } from 'express';
import { celebrate } from 'celebrate';
import updateMe from '../controllers/Users/Me/updateMe.js';
import getMe from '../controllers/Users/Me/getMe.js';
import {
  authorizedUserSchema,
  patchUserSchema,
} from '../ValidationSchemas/ValidationSchemas.js';

const userRouter = Router();

userRouter.get('/me', celebrate(authorizedUserSchema), getMe);
userRouter.patch('/me', celebrate(authorizedUserSchema), celebrate(patchUserSchema), updateMe);

export default userRouter;
