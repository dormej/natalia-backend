export default [
  'strapi::errors', 
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:4200', 'https://natalia-portfolio.onrender.com'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: ['Content-Type', 'Authorization'],
    },
  },

  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
