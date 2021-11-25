const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const Discord = require("discord.js");
const fetch = require('node-fetch');
const kill = [
    'https://media.giphy.com/media/PnhOSPReBR4F5NT5so/giphy.gif',
    'https://cdn.zerotwo.dev/SHOOT/028bfc32-c06b-4295-87a5-7ddaef08d5ef.gif',
    'https://cdn.zerotwo.dev/SHOOT/91f5ec6a-3857-4e13-b5d0-482ccf8e4a75.gif',
    'https://media.giphy.com/media/QHYHhShm1sjVS/giphy.gif',
    'https://media.giphy.com/media/uTCAwWNtz7U2c/giphy.gif',
    'https://media.giphy.com/media/dEXC4BdZf1dMA/giphy.gif',
    'https://media.giphy.com/media/gFPhbYRr8G7Bdh9bJB/giphy.gif',
    'https://media.giphy.com/media/otRxOGlWgI9hu/giphy.gif',
    'https://media.giphy.com/media/UcNaNsFk5jLSytk40R/giphy.gif',
    'https://media.giphy.com/media/AaThTI6tAkJcgZylgw/giphy.gif',
    'https://media.giphy.com/media/FDouUdQnZa3WPyTJDX/giphy.gif',
    'https://media.giphy.com/media/UVqjBMIG79utCWIR5j/giphy.gif',
    'https://media.giphy.com/media/3oz8xrsmRyy8uTeUk8/giphy.gif'
];
module.exports = {
  name: "kill",
  category: "Fun",
  usage: "kill",
  description: "kill user",
  run: async (client, message, args, cmduser, text, prefix) => {
        //code
   const user = message.mentions.users.first();
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to Kill -_-');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setImage(kill[Math.floor(Math.random() * kill.length)])
            .setDescription(`${message.author.username} Killed ${user.username}!`)
        );
    }}