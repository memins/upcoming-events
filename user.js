const Event = require("./event");

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.events = [];
  }

  addEvent(title, date, description) {
    const newEvent = new Event(title, this, date, description);
    this.events.push(newEvent);
    return newEvent;
  }
}

module.exports = User;
