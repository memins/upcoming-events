const userDatabase = require("../database/user-database");
const flatted = require("flatted");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const users = await userDatabase.load();

  res.render("users", { users });
});

router.post("/", async (req, res) => {
  const user = await userDatabase.insert(req.body);
  res.send(user);
});

router.delete("/:userId", async (req, res) => {
  await userDatabase.removeBy("id", req.params.userId);

  res.send("OK");
});

router.get("/:userId", async (req, res) => {
  const user = await userDatabase.find(req.params.userId);
  if (!user) return res.status(404).send("User not found");

  res.render("user", { user });
});

router.post("/:userId/events", async (req, res) => {
  const { title, date } = req.body;
  const { userId } = req.params;

  const user = await userDatabase.find(userId);

  user.addEvent(title, date);

  await userDatabase.update(user);

  res.send("OK");
});

module.exports = router;
