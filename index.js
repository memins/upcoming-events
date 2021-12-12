const colors = require("colors");

const User = require("./user");
const Event = require("./event");

const emin = new User("emin");

const event1 = emin.addEvent("event1", "2020-01-01", "description");
const event2 = emin.addEvent("demoEvent", "2022-11-04", "desc");
const event3 = emin.addEvent("event3", "2020-01-01", "description3");

console.log(`${emin.name.blue} has ${colors.blue(emin.events.length)} events`);
console.log(
  `${emin.name.blue} add new Event: ${emin.events[0].title.green} on ${emin.events[0].date.bgRed.white}`
);
