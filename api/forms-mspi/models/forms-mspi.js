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
          replyTo: `${result.email}`,
          subject: "SWA Website MSPI Application Notification",
          text: `Name: ${result.name}, Email: ${result.email}`,
          html: `
              <p>Name: ${result.name}</p> 
              <p>NRIC: ${result.nric}</p> 
              <p>Mobile: ${result.mobile}</p> 
              <p>Email: ${result.email}</p> 
              <p>Marital Status: ${result.maritalStatus}</p> 
              <p>Education: ${result.education}</p>
              <p>Occupation: ${result.occupation}</p>
              <p>Facebook link: ${result.facebook}</p>
              <p>Instagram link: ${result.instagram}</p>
              <p>Date of Birth: ${result.dob}</p>
              <p>Height: ${result.height}</p>
              <p>Weight: ${result.weight}</p>
              <p>Hobbies & Interests: ${result.hobbies}</p>
              <p>Availability: ${result.availability}</p>
              <p>Photo: please login to SWA admin website to download photo </p>

              `,
        });
        console.log("sent to sendgrid");
      } catch (err) {
        console.log("error: ", err[0].messages);
      }
    },
  },
};
