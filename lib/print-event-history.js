const colors = require("colors");

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

module.exports = printEventHistory;
