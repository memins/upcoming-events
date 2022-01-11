const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRouter = require("./routes/user");
const indexRouter = require("./routes/index");
const eventsRouter = require("./routes/events");
require("./mongo-connections");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
  console.log("started listening on 3000");
});

app.set("view engine", "pug");

app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/", indexRouter);

module.exports = app;
