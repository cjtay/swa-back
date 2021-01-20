module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "fceb606cc7f6e1f021a1230b78c49ae7"),
    },
  },
  cron: {
    enabled: true,
  },
});
