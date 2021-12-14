const BaseDatabase = require("./base-database");
const User = require("../models/user");

class UserDatabase extends BaseDatabase {
  findByName(name) {
    const data = this.load();
    return data.find((item) => item.name === name);
  }
}

module.exports = new UserDatabase(User);
