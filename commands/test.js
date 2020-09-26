const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  
    var botEmbed = new discord.MessageEmbed()
        botEmbed.setTitle('Amsterdam Zuid V1!')
        botEmbed.setDescription("Deze BOT is gemaakt voor Amsterdam Zuid V1.")
        botEmbed.setColor("#0099ff")
        botEmbed.setThumbnail('')
        botEmbed.setTimestamp()
        botEmbed.setFooter('The bot is maded by: ItzMeRubenツ#5865', '');


        botEmbed.setTitle('Test')
        botEmbed.setDescription("Dit is een test");

    
    return message.channel.send(botEmbed);
    
}

module.exports.help = {
    name: "test"
}