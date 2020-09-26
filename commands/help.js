const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {

    var text = "**Amsterdam Zuid V1 Commands** \n\n **__Commands__** \n **Algemene Commands** \n\n !hallo - Stuurt hallo terug \n !help - Geeft deze commando's \n !bug - Hiermee meld je een bug, de developers kunnen die dan oplossen! \n !info - Hiermee krijg je info over de bot \n !serverinfo - Hiermee krijg je info over de server \n !suggestie - Hiermee kan je een suggestie indienen en dan kijkend de developers wat ze ermee doen! \n\n **Support Commands** \n\n !claim - Hiermee claim je een ticket *(Staff only)* \n !ticket - Hiermee maak je een nieuw ticket \n !close - Hiermee close je een ticket *(Staff only)* \n\n **Other Staff Commands** \n\n !warn - Hiermee warn je iemand \n !kick - Hiermee kick je iemand van de server. \n !ban - Hiermee ban je iemand van de server. \n !tempmute - Hiermee tempmute je iemand." ;

   
    message.author.send(text);

    message.channel.send("Alle commando's staan in je privé berichten!");

} catch (error) {
    message.reply("Er is iets fout gebeurd");
}
}

module.exports.help = {
    name: "help"
}