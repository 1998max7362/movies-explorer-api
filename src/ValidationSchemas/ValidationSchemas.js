import Joi from 'joi';

export const signUpSchema = {
  body: Joi.object()
    .keys({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
    })
    .unknown(true),
};

export const signInSchema = {
  body: Joi.object()
    .keys({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      password: Joi.string().required(),
    })
    .unknown(true),
};

export const authorizedUserSchema = {
  params: Joi.object()
    .keys({
      user: Joi.object().keys({
        _id: Joi.string().length(24).hex().required(),
      }),
    })
    .unknown(true),
};

export const patchUserSchema = {
  body: Joi.object()
    .keys({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      name: Joi.string().min(2).max(30).required(),
    })
    .unknown(true),
};

// export const userIdSchema = {
//   params: Joi.object()
//     .keys({
//       userId: Joi.string().length(24).hex().required(),
//       user: Joi.object().keys({
//         _id: Joi.string().length(24).hex().required(),
//       }),
//     })
//     .unknown(true),
// };
