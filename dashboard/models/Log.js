import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    guildId: { type: String, required: true, index: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Log || mongoose.model("Log", logSchema);
