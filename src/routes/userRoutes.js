import { Router } from 'express';
import { celebrate } from 'celebrate';
// import getUsers from '../controllers/Users/getUsers.js';
// import getUserById from '../controllers/Users/getUserById.js';
// import updateAvatar from '../controllers/Users/Me/updateAvatar.js';
import updateMe from '../controllers/Users/Me/updateMe.js';
import getMe from '../controllers/Users/Me/getMe.js';
import {
  authorizedUserSchema,
  patchUserSchema,
  // patchAvatarSchema,
  // userIdSchema,
} from '../ValidationSchemas/ValidationSchemas.js';

const userRouter = Router();

userRouter.get('/me', celebrate(authorizedUserSchema), getMe);
userRouter.patch('/me', celebrate(authorizedUserSchema), celebrate(patchUserSchema), updateMe);

export default userRouter;
