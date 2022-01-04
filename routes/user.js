const userService = require("../services/user-service");
const flatted = require("flatted");
const router = require("express").Router();
const eventService = require("../services/event-service");

router.get("/", async (req, res) => {
  const users = await userService.load();

  res.render("users", { users });
});

router.post("/", async (req, res) => {
  const user = await userService.insert(req.body);
  res.send(user);
});

router.delete("/:userId", async (req, res) => {
  await userService.removeBy("_id", req.params.userId);
});

router.get("/:userId", async (req, res) => {
  const user = await userService.find(req.params.userId);
  if (!user) return res.status(404).send("User not found");

  res.render("user", { user });
});

router.post("/:userId/events", async (req, res) => {
  const { title, date } = req.body;
  const { userId } = req.params;

  const event = await userService.addEvent(title, userId, date);

  res.send(event);
});

router.patch("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  await userService.update(userId, { name });
});

module.exports = router;
