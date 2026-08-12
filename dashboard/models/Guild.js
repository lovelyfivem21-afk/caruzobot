import mongoose from "mongoose";

const guildSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String },
    iconUrl: { type: String },
    prefix: { type: String, default: "!" },

    welcomeEnabled: { type: Boolean, default: false },
    welcomeChannelId: { type: String, default: null },
    welcomeMessage: { type: String, default: "Willkommen {user} auf {server}! 🎉" },
    autoRoleId: { type: String, default: null },

    leaveEnabled: { type: Boolean, default: false },
    leaveChannelId: { type: String, default: null },
    leaveMessage: { type: String, default: "{user} hat den Server verlassen." },
  },
  { timestamps: true, _id: false }
);

export default mongoose.models.Guild || mongoose.model("Guild", guildSchema);
