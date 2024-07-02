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
      "input": "lorem",
      "response": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Diam vel quam elementum pulvinar etiam non. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. In fermentum et sollicitudin ac orci. Faucibus purus in massa tempor nec feugiat. Aliquet nec ullamcorper sit amet risus nullam. Ipsum dolor sit amet consectetur. Tincidunt eget nullam non nisi est sit. Et tortor consequat id porta nibh venenatis cras sed felis.\n\nMauris pharetra et ultrices neque ornare aenean euismod elementum. Arcu cursus euismod quis viverra nibh cras. Imperdiet dui accumsan sit amet. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Netus et malesuada fames ac turpis. Tincidunt ornare massa eget egestas purus viverra accumsan. Ultrices sagittis orci a scelerisque purus. Vitae semper quis lectus nulla at volutpat diam. Quis lectus nulla at volutpat diam ut venenatis tellus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Maecenas volutpat blandit aliquam etiam erat velit. Semper auctor neque vitae tempus quam pellentesque nec nam. Turpis tincidunt id aliquet risus. Aenean et tortor at risus viverra adipiscing at in. Ac felis donec et odio pellentesque. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Amet commodo nulla facilisi nullam. Enim nulla aliquet porttitor lacus. Id faucibus nisl tincidunt eget.\n\nAccumsan in nisl nisi scelerisque eu. Volutpat odio facilisis mauris sit. Phasellus vestibulum lorem sed risus. Mi sit amet mauris commodo quis. Odio ut sem nulla pharetra. Aliquet nibh praesent tristique magna sit amet. Dolor purus non enim praesent elementum facilisis leo vel. Sit amet nisl suscipit adipiscing bibendum. Euismod elementum nisi quis eleifend. Quam vulputate dignissim suspendisse in est ante.\n\nQuis lectus nulla at volutpat diam ut venenatis. Consequat nisl vel pretium lectus quam id leo. Purus in massa tempor nec feugiat nisl pretium. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Id semper risus in hendrerit gravida rutrum. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. In aliquam sem fringilla ut morbi tincidunt. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Eget nunc lobortis mattis aliquam faucibus purus. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Diam in arcu cursus euismod quis viverra nibh cras. Mi proin sed libero enim sed faucibus turpis in. Integer malesuada nunc vel risus commodo viverra maecenas. Id aliquet risus feugiat in ante metus dictum. Fusce id velit ut tortor pretium viverra suspendisse potenti. Fermentum iaculis eu non diam phasellus. Ultrices vitae auctor eu augue ut lectus arcu. At elementum eu facilisis sed odio morbi quis commodo. Integer feugiat scelerisque varius morbi enim nunc faucibus.\n\nErat pellentesque adipiscing commodo elit. Rhoncus dolor purus non enim praesent elementum facilisis. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Malesuada fames ac turpis egestas. Et leo duis ut diam quam nulla. Rutrum quisque non tellus orci. Massa massa ultricies mi quis hendrerit dolor magna. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. At risus viverra adipiscing at. Fermentum et sollicitudin ac orci. Senectus et netus et malesuada fames ac turpis egestas maecenas. Molestie a iaculis at erat pellentesque. Nascetur ridiculus mus mauris vitae ultricies. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.\n\nId aliquet risus feugiat in ante metus dictum at tempor. Bibendum est ultricies integer quis auctor elit sed vulputate. At tellus at urna condimentum mattis. Elit at imperdiet dui accumsan sit. Quis commodo odio aenean sed. Purus non enim praesent elementum. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Elementum curabitur vitae nunc sed velit dignissim sodales. Etiam erat velit scelerisque in dictum non consectetur. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Ut eu sem integer vitae justo eget magna fermentum. Velit dignissim sodales ut eu sem integer.\n\nLeo vel orci porta non pulvinar. Turpis cursus in hac habitasse platea dictumst. Bibendum at varius vel pharetra. Arcu odio ut sem nulla pharetra diam sit. Tristique nulla aliquet enim tortor at auctor urna nunc. Ut sem nulla pharetra diam. Aliquet nec ullamcorper sit amet risus. Vel facilisis volutpat est velit egestas dui id ornare arcu. Sit amet dictum sit amet. Leo a diam sollicitudin tempor id eu nisl. Elementum curabitur vitae nunc sed. Arcu vitae elementum curabitur vitae. Euismod in pellentesque massa placerat duis ultricies lacus sed. Commodo viverra maecenas accumsan lacus. Dui id ornare arcu odio ut.\n\nConsequat mauris nunc congue nisi vitae. Ultricies lacus sed turpis tincidunt id aliquet. Pellentesque massa placerat duis ultricies lacus. Ullamcorper a lacus vestibulum sed. Vulputate enim nulla aliquet porttitor lacus. Venenatis cras sed felis eget velit aliquet. Nisi est sit amet facilisis magna. Massa eget egestas purus viverra accumsan in nisl nisi. Pretium fusce id velit ut tortor. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Viverra suspendisse potenti nullam ac tortor vitae. Amet commodo nulla facilisi nullam vehicula ipsum. Amet nisl purus in mollis nunc sed id semper. Lorem ipsum dolor sit amet. Ultrices in iaculis nunc sed augue lacus viverra. Egestas diam in arcu cursus euismod quis viverra. Nisi est sit amet facilisis magna etiam. At erat pellentesque adipiscing commodo elit at. Eget sit amet tellus cras adipiscing. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.\n\nEnim eu turpis egestas pretium aenean. Enim diam vulputate ut pharetra sit amet aliquam id. At risus viverra adipiscing at in. Sed vulputate mi sit amet mauris commodo. Commodo ullamcorper a lacus vestibulum. Arcu cursus vitae congue mauris rhoncus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ante in nibh mauris cursus mattis molestie. Lectus magna fringilla urna porttitor rhoncus dolor purus. Habitant morbi tristique senectus et netus et malesuada. Nulla facilisi nullam vehicula ipsum a arcu. Tortor posuere ac ut consequat semper viverra nam. Nibh praesent tristique magna sit amet purus. Bibendum at varius vel pharetra vel. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Mauris sit amet massa vitae tortor condimentum. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Tellus mauris a diam maecenas sed enim ut sem viverra.\n\nNon consectetur a erat nam at. Id volutpat lacus laoreet non. Hendrerit dolor magna eget est. Luctus accumsan tortor posuere ac. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Ullamcorper dignissim cras tincidunt lobortis feugiat. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Sit amet dictum sit amet justo donec enim diam vulputate. A erat nam at lectus urna duis. Sagittis purus sit amet volutpat consequat mauris nunc congue. Enim ut tellus elementum sagittis. Et odio pellentesque diam volutpat commodo sed egestas. Ut tellus elementum sagittis vitae et leo. Mattis pellentesque id nibh tortor id aliquet lectus. Odio eu feugiat pretium nibh ipsum consequat nisl. Aliquet eget sit amet tellus cras adipiscing enim eu. Morbi tempus iaculis urna id. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.\n\nSit amet dictum sit amet justo donec. Odio euismod lacinia at quis risus sed vulputate. Facilisis volutpat est velit egestas dui id. Nec dui nunc mattis enim ut. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Adipiscing tristique risus nec feugiat. Adipiscing vitae proin sagittis nisl. Rutrum tellus pellentesque eu tincidunt tortor. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Sed velit dignissim sodales ut eu sem integer. Dolor sit amet consectetur adipiscing elit. Aliquet bibendum enim facilisis gravida neque convallis a cras. Tristique senectus et netus et malesuada fames ac turpis egestas. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Duis ut diam quam nulla. Consectetur adipiscing elit ut aliquam purus sit. Leo in vitae turpis massa sed elementum tempus. Non blandit massa enim nec dui. Tellus mauris a diam maecenas. Tincidunt ornare massa eget egestas.\n\nA diam maecenas sed enim. Tristique nulla aliquet enim tortor at auctor urna. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Pharetra et ultrices neque ornare aenean euismod. Cursus mattis molestie a iaculis at erat. Cras sed felis eget velit aliquet sagittis id. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Lacus luctus accumsan tortor posuere. Purus semper eget duis at tellus at urna condimentum mattis. Condimentum lacinia quis vel eros. Convallis convallis tellus id interdum velit laoreet. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Ut enim blandit volutpat maecenas volutpat."
    },
    {
      "input": "goodbye",
      "response": "Goodbye Have a great day!"
    },
    {
      "input": "testing",
      "response": "This is a test command!"
    }
  ]
}
```

After editing, save the `commands.json` file.

## Step 5: Start the Bot

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
