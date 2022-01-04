const eventService = require("../services/event-service");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const events = await eventService.load();

  res.render("events", { events });
});

router.get("/search", async (req, res) => {
  const user = req.query.user;
  const event = req.query.event;

  const query = {};

  if (user) query.user = user;
  if (event) query.title = event;

  const events = await eventService.query(query);

  res.render("events", { events });
});

module.exports = router;
