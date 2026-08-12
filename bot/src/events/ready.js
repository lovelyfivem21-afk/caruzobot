const Guild = require("../models/Guild");

module.exports = {
  name: "clientReady",
  once: true,
  async execute(client) {
    console.log(`✅ Eingeloggt als ${client.user.tag}`);

    for (const [guildId, guild] of client.guilds.cache) {
      await Guild.findByIdAndUpdate(
        guildId,
        { _id: guildId, name: guild.name, iconUrl: guild.iconURL() ?? undefined },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    console.log(`📊 ${client.guilds.cache.size} Server synchronisiert.`);
  },
};
