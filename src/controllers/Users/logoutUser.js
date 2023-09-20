const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie('jwt').send({ message: 'Пользователь снова не авторизован' });
  } catch (err) {
    next(err);
  }
};

export default logoutUser;
