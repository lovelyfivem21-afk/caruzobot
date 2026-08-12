const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Discord Guild ID
    name: { type: String },
    iconUrl: { type: String },
    prefix: { type: String, default: "!" },

    // Welcomer
    welcomeEnabled: { type: Boolean, default: false },
    welcomeChannelId: { type: String, default: null },
    welcomeMessage: { type: String, default: "Willkommen {user} auf {server}! 🎉" },
    autoRoleId: { type: String, default: null },

    // Verabschiedung
    leaveEnabled: { type: Boolean, default: false },
    leaveChannelId: { type: String, default: null },
    leaveMessage: { type: String, default: "{user} hat den Server verlassen." },
  },
  { timestamps: true, _id: false }
);

module.exports = mongoose.models.Guild || mongoose.model("Guild", guildSchema);
