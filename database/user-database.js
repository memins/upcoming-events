const BaseDatabase = require("./base-database");
const User = require("../user");

class UserDatabase extends BaseDatabase {
  findByName(name) {
    const data = this.load();
    return data.find((item) => item.name === name);
  }
}

module.exports = new UserDatabase(User);
