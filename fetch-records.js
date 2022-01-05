const colors = require("colors");
const User = require("./models/user");
const Event = require("./models/event");
const userService = require("./services/user-service");
const printEventHistory = require("./lib/print-event-history");

const emin = User.create({ name: "Emin", email: "mes@gmail.com" });
const hanne = User.create({ name: "hanne", email: "h@mail.com" });

emin.addEvent("event1", "2020-01-01", "description");
emin.addEvent("demoEvent", "2022-11-04", "desc");
emin.addEvent("event3", "2020-01-01", "description3");
hanne.addEvent("eventHanne", "2020-01-01", "descriptionHanne");

(async () => {
  try {
    await userService.save([emin, hanne]);

    const meryem = User.create({ name: "meryem", email: "ms@mail.com" });

    await userService.insert(meryem);

    const users = await userService.load();

    users.forEach(printEventHistory);
  } catch (e) {
    return console.log(e);
  }
})();
