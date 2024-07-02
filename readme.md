# Simple Discord Bot Setup Guide for Beginners

This guide will help you get started with running a simple Discord bot that responds to custom commands. No coding experience required!

## What You Need

- A computer with internet access.
- Node.js installed. Download it from [https://nodejs.org](https://nodejs.org).
- Basic knowledge of using a computer and navigating folders.

## Step 1: Download the Bot Files

Visit the [repository page](https://github.com/SatinCake/custom-commands-discord-bot) on GitHub. Click the green "Code" button, then select "Download ZIP". Extract the contents of the ZIP file to a folder on your computer.

## Step 2: Install Node.js Packages

Open your terminal or command prompt. Navigate to the folder where you extracted the bot files. Then, run these commands:

`npm install`

These commands prepare your project and install the software needed for the bot to work.

## Step 3: Set Up Your Bot Token

Inside the extracted folder, find the `.env.example` file. Rename this file to `.env`. Open this file and paste your Discord bot token inside: *You can obtain a bot token by creating a new application on the [Discord Developer Portal](https://discord.com/developers/applications).*


Replace `your_bot_token_here` with the token you got from the Discord Developer Portal when you created your bot.

## Step 4: Customize Commands

Locate the `main.js` file in the extracted folder. It contains a sample `commands.json` file where you can add your custom commands. Each command needs a name (`input`) and what it says back (`response`). Here's an example:

```
{
  "commands": [
    {
      "input": "goodbye",
      "response": "Goodbye Have a great day!"
    },
    {
      "input": "hello",
      "response": "Hello hope you have a great day!"
    }
  ]
}
```


After editing, save the `commands.json` file.

## Step 5: Add the Bot to Your Server

To add the bot to your Discord server, follow these steps:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in.
2. Select your bot application.
3. Navigate to the "Bot" tab and click "Copy" under the "Token" section to copy your bot token.
4. Paste the copied token into your `.env` file.
5. Go to the OAuth2 Tab and select the Bot permission, then all of the message permissions or Just the Administrator Permission.
6. Then copy the URL that is outputed below all of the permissions and open that in a new tab and select the server you would like the Bot to join. *Note: You must have Administrator permissions to have a bot join a discord server as a guild bot.*


## Step 6: Start the Bot

Return to your terminal or command prompt. While still in the folder with `main.js`, type this command to start the bot:

`node main.js`

Your bot is now online and ready to respond to commands!

## What's Next?

Now that you've set up the basics, you might want to explore more about what your bot can do. Consider learning about:

- Adding more commands to `commands.json`.
- Making your bot respond differently based on who sends the command.
- Integrating your bot with other services or APIs.

Remember, if you encounter errors, double-check the `.env` file to ensure your bot token is correct, and verify that your `commands.json` file is saved properly.

Happy coding!

