const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
        var embed = new discord.MessageEmbed()
        .setDescription("Your avatar")
        .setColor("#0099ff")
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter('The bot is maded by: Ruben_#5865');
    
        return message.channel.send(embed);

    }


module.exports.help = {
    name: "avatar"
}