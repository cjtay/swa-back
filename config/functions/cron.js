"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  //cron job to send every 10 secs
  // "*/10 * * * * *": async () => {
  //   console.log("cron job runs");
  //   try {
  //     const send = await strapi.plugins["email"].services.email.send({
  //       to: "cjtay888@gmail.com",
  //       subject: "Notification from SWA website",
  //       text: "Email Title in plain text",
  //       html: "<h1>Email Title in html</h1><p>This is a test</p>",
  //     });
  //     console.log("sent to sendgrid");
  //   } catch (err) {
  //     console.log("error: ", err[0].messages);
  //   }
  // },
};
