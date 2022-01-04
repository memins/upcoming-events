const BaseService = require("./base-service");
const User = require("../models/user");
const EventService = require("./event-service.js");

class UserService extends BaseService {
  async findByName(name) {
    return this.findBy("name", name);
  }

  async addEvent(title, userId, date, description) {
    const user = await this.find(userId);

    const event = await EventService.insert({
      title,
      user,
      date,
      description,
    });
    user.events.push(event);
    await user.save();

    return event;
  }
}

module.exports = new UserService(User);
