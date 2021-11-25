const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons')

let os = require("os");

let cpuStat = require("cpu-stat");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const {
    duration
} = require("../../handlers/functions")
module.exports = {
    name: "botinfo",
    aliases: ["info"],
    category: "Information",
    description: "Sends detailed info about the client",
    usage: "botinfo",
    run: async (client, message, args, cmduser, text, prefix) => {
        try {
            cpuStat.usagePercent(function (e, percent, seconds) {
                if (e) {
                    return console.log(String(e.stack).red);
                }
                let connectedchannelsamount = 0;
                let guilds = client.guilds.cache.map((guild) => guild);
                for (let i = 0; i < guilds.length; i++) {
                    if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
                }
                if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;
                //info
                const botinfo = new Discord.MessageEmbed()
                    .setTitle("__**BOTINFO**__")
                    .setColor(ee.color)
                    .addField("📁 Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``)
                    .addField("Uptime ", `\`${duration(client.uptime)}\``)
                    .addField("Users", `\`Total: ${client.users.cache.size} Users\``)
                    .addField("Servers", `\`Total: ${client.guilds.cache.size} Servers\``)
                    .addField("Discord.js", `\`v${Discord.version}\``)
                    .addField("Node", `\`${process.version}\``)
                    .addField("🤖 CPU", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
                    .addField("🤖 CPU usage", `\`${percent.toFixed(2)}%\``)
                    .addField("API Latency", `\`${client.ws.ping}ms\``)
                    .addField("**Developers**",
                    `\` 1 • MathisCool#8659
 2 • Tomato#6966\``)
                    .setFooter("Minigames bot | powered by milrato.eu", "https://media.discordapp.net/attachments/902890371393126420/913328834596716544/a_6a5521bea97de4e7b2f3b3f90c573e14.gif");

                message.channel.send(botinfo);
            })
        } catch (e) {
            console.log(String(e.stack).bgRed)
            return message.channel.send(new Discord.MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
                .setDescription(`\`\`\`${e.message}\`\`\``)
            );
        }
    },
};