const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    if(!message.member.roles.cache.find(r =>r.name === "BOT Update (Amsterdam Zuid)" || r.name === "👑 Game Creator | GC" || r.name === "👑Co Creator | CC" )) return message.channel.send("> Je hebt hiervoor geen rechten!");
     
        var updateEmbed = new discord.MessageEmbed()
        .setTitle("BOT Update")
        .setDescription("Er is terug een update hoor!!")
        .setColor("#02eba9")
        .setFooter("Deze bot is gemaakt door Ruben_ツ#5865")
        .addFields(
            {name: "Nog even dit:",value: "Geniet van de nieuwe dingen! Een bug of dergelijke? Meld het bij een <@&757117334472359997>"},
            {name: "LET OP!",value: "De bot is nog altijd niet 24/24 Beschikbaar."},
            {name: "Wat is er nieuw?",value: "De meeste commands werken terug optimaal, help command moet nog aangepast worden."}
        )
        .setTimestamp();


    return message.channel.send(updateEmbed);
    
}

module.exports.help = {
    name: "botupdate"
}