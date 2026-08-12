const Guild = require("../models/Guild");

module.exports = {
  name: "guildCreate",
  async execute(guild) {
    await Guild.findByIdAndUpdate(
      guild.id,
      { _id: guild.id, name: guild.name, iconUrl: guild.iconURL() ?? undefined },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    console.log(`➕ Bot wurde zu "${guild.name}" hinzugefügt.`);
  },
};
