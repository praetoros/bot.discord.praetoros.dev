const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Commands that you can use with PraeBot!'),
    async execute(interaction) {
        return interaction.reply('/ping');
    },
};
