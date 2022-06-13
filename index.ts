const Router = require("./routes");
const express = require('express');


const initApp = () => {
  const app =  express();
  app.use(express.json());

  app.use(Router);
  return app;
}
const app = initApp();
module.exports = app;