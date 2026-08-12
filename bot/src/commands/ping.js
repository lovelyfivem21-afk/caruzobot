const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Testet, ob der Bot antwortet."),

  async execute(interaction) {
    const start = Date.now();
    await interaction.reply("Pong! 🏓");
    const latency = Date.now() - start;
    await interaction.editReply(`Pong! 🏓 (${latency}ms, API: ${Math.round(interaction.client.ws.ping)}ms)`);
  },
};
