const Guild = require("../models/Guild");

module.exports = {
  name: "guildMemberRemove",
  async execute(member) {
    const config = await Guild.findById(member.guild.id);
    if (!config || !config.leaveEnabled || !config.leaveChannelId) return;

    const channel = member.guild.channels.cache.get(config.leaveChannelId);
    if (!channel) return;

    const text = config.leaveMessage
      .replaceAll("{user}", member.user.tag)
      .replaceAll("{server}", member.guild.name);

    channel.send(text).catch((err) => console.error("Konnte Abschiedsnachricht nicht senden:", err.message));
  },
};
