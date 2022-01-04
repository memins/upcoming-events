const colors = require("colors");
const User = require("./models/user");
const Event = require("./models/event");
const userService = require("./services/user-service");

const emin = User.create({ name: "Emin", email: "mes@gmail.com" });
const hanne = User.create({ name: "hanne", email: "h@mail.com" });

emin.addEvent("event1", "2020-01-01", "description");
emin.addEvent("demoEvent", "2022-11-04", "desc");
emin.addEvent("event3", "2020-01-01", "description3");
hanne.addEvent("eventHanne", "2020-01-01", "descriptionHanne");

function printEvent(event) {
  console.log(
    `${colors.blue(event.user.name)} will go to ${colors.blue(
      event.title
    )} on ${colors.bgRed.white(event.date)}`
  );
}

function printEventHistory(user) {
  if (user.events.length === 0)
    return console.log(`${colors.blue(user.name)} has no events yet!`);

  user.events.forEach(printEvent);
}

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

// const emin2 = userDatabase.findByName("Emin");

// emin2.addEvent("neu-event", "2022-11-09", "local desc.");
// userDatabase.update(emin2);

// printEventHistory(hanne);

// console.log(userDatabase.findBy("mail", "mes@gmail.com"));
