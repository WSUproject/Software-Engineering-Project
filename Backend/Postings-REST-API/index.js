const express = require("express");
const db = require("./models");
const app = express();
const jobRoutes = require("./controllers/job.controller");
require("express-async-errors");

app.use(express.json());



db.sequelize.sync().then((req) => {
  app.listen(3000, () => {
    console.log("server is running");
  });
});

app.use("/api/jobs", jobRoutes);

app.use((err, req, res, next) => {
  console.log("inside this middleware");
  console.log("error is error" + err);
  res.status(err.status || 500).send("something went wrong");
});
