require('dotenv').config(); // Load environment variables from.env file
const fs = require('fs');
const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

/**
 * Loads custom commands from a JSON file.
 * @returns {Promise<Array>} An array of custom command objects.
 */
async function loadCustomCommands() {
    try {
        const filePath = path.join(__dirname, 'commands.json');
        const commandsJson = await readFile(filePath, 'utf8');
        return JSON.parse(commandsJson).commands;
    } catch (error) {
        console.error('Failed to load custom commands:', error);
        return [];
    }
}

/**
 * Watches for changes in the specified file and reloads the custom commands.
 * @param {string} filePath Path to the file being watched.
 * @param {Function} callback Function to execute when the file changes.
 */
function watchForChanges(filePath, callback) {
    fs.watch(filePath, (eventType, filename) => {
        if (filename) {
            console.log(`${filePath} changed, reloading...`);
            callback();
        }
    });
}

client.once('ready', async () => {
    console.log('Discord Bot is now Online');

    client.guilds.cache.forEach(async (guild) => {
        const customCommand = new SlashCommandBuilder()
            .setName('custom')
            .setDescription('Executes a custom command')
            .addStringOption(option =>
                option.setName('custom_command')
                    .setDescription('The custom command to execute')
                    .setRequired(true));

        try {
            await guild.commands.create(customCommand);
            console.log(`Custom command registered successfully in guild ${guild.id}`);
        } catch (error) {
            console.error(error);
        }
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'custom') {
        const customCommandInput = interaction.options.getString('custom_command');
        const commandResponses = await loadCustomCommands();
        const commandResponse = commandResponses.find(cmd => cmd.input.toLowerCase() === customCommandInput.toLowerCase());

        if (commandResponse) {
            let response = commandResponse.response;
            if (response.length > 2000) {
                const chunks = [];
                for (let i = 0; i < response.length; i += 2000) {
                    chunks.push(response.slice(i, i + 2000));
                }

                await interaction.reply(chunks[0]);
                for (let i = 1; i < chunks.length; i++) {
                    await interaction.followUp(chunks[i]);
                }
            } else {
                await interaction.reply(response);
            }
        } else {
            await interaction.reply('Sorry, I did not understand that command.');
        }
    }
});

watchForChanges(path.join(__dirname, 'commands.json'), loadCustomCommands);

client.login(process.env.BOT_TOKEN);
