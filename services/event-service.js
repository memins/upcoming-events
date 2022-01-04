const BaseService = require("./base-service");
const Event = require("../models/event");

class EventService extends BaseService {
  async findByPassengerId(userId) {
    return this.findBy("user", userId);
  }
}

module.exports = new EventService(Event);
