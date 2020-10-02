const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  
    var botEmbed = new discord.MessageEmbed()
        .setTitle('Gamepass Amsterdam Zuid.')
        .setDescription("Let erop! Wij betalen geen robux terug!")
        .setColor("#0099ff")
        .setURL('https://www.roblox.com/game-pass/12042513/Boombox') 
        .setThumbnail('')
        .setTimestamp()
        .setFooter('The bot is maded by: ItzMeRubenツ#5865', '');

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "gamepass"
}