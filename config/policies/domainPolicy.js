module.exports = async (ctx, next) => {
  // console.log("************************************");
  // console.log("domain: ", ctx.request.header.origin);
  // console.log("ctx: ", ctx);
  // console.log("************************************");
  if (ctx.request.header.origin === "http://localhost:8000") {
    console.log("successfully called next");
    return await next();
  } else {
    // console.log("response status: ", ctx.response.status);
    // console.log("response message: ", ctx.response.message);
    return ctx.unauthorized("You are not authorised");
  }
};
