const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle('**Amsterdam Zuid V1! FAQ**')
        .setDescription("Hierin vind je de Veelgestelde vragen!")
        .addFields( 
            {name: "**Is de game al open?**",value: "Nee, De developers zijn druk bezig om de game af te krijgen"},
            {name: "**Kan ik béta tester worden?**",value: "Nee béta tester kan je enkel worden door gekozen te worden (Later meer info)"},
            {name: "**Kan ik HR worden?**",value: "Wacht tot de sollicitaties open zijn! Hou <#739593161529360457> in de gaten"},
            {name: "**Kan ik partner worden?**",value: "Zolang partners niet gesloten zijn kan je partner worden! Je moet **minimaal rond de 100 leden** hebben. Heb je die? Maak een ticket aan in <#740515443134955520>"}  
            )
        .setColor("#0099ff")
        .setThumbnail('')
        .setTimestamp()
        .setFooter('The bot is maded by: ItzMeRubenツ#5865', '');

    return message.channel.send(botEmbed);
           
}

module.exports.help = {
    name: "faq"
}