const { SlashCommandBuilder } = require('discord.js');
const { MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weinkls')
        .setDescription('smoof'),
    async execute(interaction) {
        return interaction.reply('https://media.discordapp.net/attachments/1115870287125286963/1122717081528442900/weinkls.webp');
    },
};
