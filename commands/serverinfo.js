const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
        var serverEmbed = new discord.MessageEmbed()
        .setDescription("Dit is een discord server voor: Amsterdam Zuid V1!")
        .setColor("#02eba9")
        .addFields(
            {name: "Je bent deze server gejoind op",value: message.member.joinedAt},
            {name: "Totaal aantal leden",value: message.guild.memberCount}
        )
        .setTimestamp();

    return message.channel.send(serverEmbed);    
}

module.exports.help = {
    name: "serverinfo"
}