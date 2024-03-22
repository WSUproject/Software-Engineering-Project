const express = require("express");
const db = require("./models");
const app = express();
const router = require("./routes");
require("express-async-errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ error: true, message: message });
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
  db.sequelize.sync().then((req) => {
    console.log("DB synchronized");
  });
});
