const pathToErrorMap = {
  user: 'Запрашиваемый пользователь не найден',
  movie: 'Запрашиваемый фильм не найден',
};

const pathToErrorMapper = (modelName) => pathToErrorMap[modelName];

export default class NotFoundIdError extends Error {
  constructor(path) {
    super('');
    this.name = 'notFoundId';
    this.path = path;
    this.message = pathToErrorMapper(path);
    this.statusCode = 404;
  }
}
