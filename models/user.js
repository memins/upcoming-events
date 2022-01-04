const Event = require("./event");
const uuid = require("uuid");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      autopopulate: { maxDepth: 2 },
    },
  ],
});

userSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("User", userSchema);
