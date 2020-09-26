const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  
    var botEmbed = new discord.MessageEmbed()
        .setTitle('Amsterdam Zuid V1!')
        .setDescription("Deze BOT is gemaakt voor Amsterdam Zuid V1.")
        .setColor("#0099ff")
        .setThumbnail('')
        .setTimestamp()
        .setFooter('The bot is maded by: ItzMeRubenツ#5865', '');

    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}