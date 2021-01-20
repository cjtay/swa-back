"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      console.log("result: ", result);
      console.log("data: ", data);
      try {
        const send = await strapi.plugins["email"].services.email.send({
          to: "cjtay888@gmail.com",
          subject: "Lifecycle Hook - Notification from SWA website",
          text: `Name: ${result.name}, Email: ${result.email}, Message: ${result.message}`,
          html: `<h1>Lifecycle Hook test</h1><p>Name: ${result.name}</p> <p>Email: ${result.email}</p> `,
        });
        console.log("sent to sendgrid");
      } catch (err) {
        console.log("error: ", err[0].messages);
      }
    },
  },
};
