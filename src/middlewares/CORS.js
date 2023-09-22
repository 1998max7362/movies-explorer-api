// eslint-disable-next-line consistent-return
const allowedCors = [
  'http://localhost:3000',
  'https://localhost:3000',
  'http://localhost:3001/',
  'https://localhost:3001/',
  'http://NobodyMaximDiploma.nomoredomainsrocks.ru',
  'https://NobodyMaximDiploma.nomoredomainsrocks.ru',
  'http://NobodyMaximDiploma.nomoredomainsrocks.ru/',
  'https://NobodyMaximDiploma.nomoredomainsrocks.ru/',
  'http://nobodymaximdiploma.nomoredomainsrocks.ru',
  'https://nobodymaximdiploma.nomoredomainsrocks.ru',
  'http://nobodymaximdiploma.nomoredomainsrocks.ru/',
  'https://nobodymaximdiploma.nomoredomainsrocks.ru/',
];

// eslint-disable-next-line consistent-return
const corsAllow = (req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
  );
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH');

  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', true);
  const { method } = req;
  if (method === 'OPTIONS') {
    return res.end();
  }

  next();
};

export default corsAllow;
