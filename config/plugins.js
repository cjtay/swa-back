require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    },
  },
});

module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: process.env.SENDGRID_API_KEY,
    },
    settings: {
      defaultFrom: "swa@outlook.sg",
      defaultReplyTo: "swa@outlook.sg",
    },
  },
  // ...
});
