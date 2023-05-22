const corsConfig = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  sameSite: 'none',
  secure: false,
};

const expressConfig = {
  extended: true,
};

const helmetConfig = {
  contentSecurityPolicy: false,
};

export {
  corsConfig,
  expressConfig,
  helmetConfig,
};
