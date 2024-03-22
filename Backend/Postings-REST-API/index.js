const express = require("express");
const db = require("./models");
const app = express();
const jobRoutes = require("./controllers/job.controller");
require("express-async-errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jobs", jobRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("something went wrong");
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
  db.sequelize.sync().then((req) => {
    console.log("DB synchronized");
  });
});
