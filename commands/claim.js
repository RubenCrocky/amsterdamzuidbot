const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    if(!message.member.roles.cache.find(r =>r.name === "🎫Support Team" || r.name === "👑 Game Creator | GC" || r.name === "👑Co Creator | CC" )) return message.channel.send("> Je hebt hiervoor geen rechten!");

    var claimer = message.author

    var embed = new discord.MessageEmbed()
           .setDescription(` Dit ticket is geclaimed door: ${claimer}`)
           .setColor("#0099ff")
           .setFooter("Gebruik dit command alleen in ticket kanalen!")

           return message.channel.send(embed);
}

module.exports.help = {
    name: "claim"
}