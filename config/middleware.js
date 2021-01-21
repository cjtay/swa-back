// https://strapi.io/documentation/developer-docs/latest/concepts/middlewares.html#core-middleware-configurations
// refer to the above to define more security at cors

module.exports = {
  load: {
    before: ["responseTime", "logger", "cors", "responses"],
    order: [
      "Define the middlewares' load order by putting their name in this array in the right order",
    ],
    after: ["parser", "router"],
  },
  settings: {
    cors: {
      origin: ["http://localhost:8000"],
      headers: ["Content-Type", "Authorization", "X-Frame-Options"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
  },
};
