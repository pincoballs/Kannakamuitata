const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
    console.log("I'm ready to ban!");
})

client.on('message', message => {
    if(message.content === 'hello') message.reply('Hello Tatanudes');
})
client.login(process.env.BOT_TOKEN);