const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    guildId: { type: String, required: true, index: true },
    type: { type: String, required: true }, // z.B. "welcome", "moderation", "config"
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Log || mongoose.model("Log", logSchema);
