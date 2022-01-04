const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: { maxDepth: 1 },
  },
  title: String,
  date: Date,
  description: String,
});

EventSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Event", EventSchema);
