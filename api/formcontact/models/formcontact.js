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
          subject: "SWA Website Contact Us Enquiry Notification",
          text: `Name: ${result.name}, Email: ${result.email}, Message: ${result.message}`,
          html: `
                  <p>Name: ${result.name}</p> 
                  <p>Company Name: ${result.company}</p> 
                  <p>Email: ${result.email}</p>
                  <p>Phone: ${result.phone}</p>
                  <p>Address: ${result.address}</p>
                  <p>Message: ${result.message}</p>
                  `,
        });
        console.log("sent to sendgrid");
      } catch (err) {
        console.log("error: ", err[0].messages);
      }
    },
  },
};
