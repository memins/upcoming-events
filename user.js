const Event = require("./event");
const uuid = require("uuid");

class User {
  constructor(id = uuid.v4(), name, email, events = []) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.events = events;
  }

  addEvent(title, date, description) {
    const newEvent = new Event(title, this, date, description);
    this.events.push(newEvent);
    return newEvent;
  }

  static create({ id, name, email, events }) {
    return new User(id, name, email, events);
  }
}

module.exports = User;