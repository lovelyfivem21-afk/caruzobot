const Guild = require("../models/Guild");
const Log = require("../models/Log");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    const config = await Guild.findById(member.guild.id);
    if (!config) return;

    // Auto-Rolle vergeben
    if (config.autoRoleId) {
      try {
        await member.roles.add(config.autoRoleId);
      } catch (err) {
        console.error(`Konnte Auto-Rolle nicht vergeben (${member.guild.id}):`, err.message);
      }
    }

    // Willkommensnachricht senden
    if (config.welcomeEnabled && config.welcomeChannelId) {
      const channel = member.guild.channels.cache.get(config.welcomeChannelId);
      if (channel) {
        const text = config.welcomeMessage
          .replaceAll("{user}", `<@${member.id}>`)
          .replaceAll("{server}", member.guild.name)
          .replaceAll("{membercount}", String(member.guild.memberCount));

        channel.send(text).catch((err) => console.error("Konnte Willkommensnachricht nicht senden:", err.message));
      }
    }

    await Log.create({ guildId: member.guild.id, type: "welcome", message: `${member.user.tag} ist beigetreten.` });
  },
};
