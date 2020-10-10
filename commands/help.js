const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    try {
        
        var helpEmbed = new discord.MessageEmbed()
        .setTitle("Commands Amsterdam Zuid V1")
        .setColor("#03befc")
        .setDescription("Let erop dat je niet gaat spammen met commands.")
        .addFields(
            {name:"Algemene Commands", value:"Deze Commands kan iedereen uitvoeren!"},
            {name:"!avatar", value:"Krijg hiermee je avatar te zien."},
            {name:"!bug", value:"Zend hiermee een bug naar de developers"},
            {name:"!suggestie", value:"Zend hiermee een suggestie naar de developers"},
            {name:"!faq", value:"Krijg de Veelgestelde vragen in een mooi berichtje"},
            {name:"!help", value:"Krijg dit te zien"},
            {name:"Permissie Commands", value:"Deze commands kan je enkel uitvoeren als je bepaalde permissies heb!"},
            {name:"!announcement", value:"Zend hiermee een announcement naar de discord server!"},
            {name:"!claim", value:"Claim een ticket"},
            {name:"!clear", value:"Verwijder berichten"},
            {name:"LET EROP", value:"ER word nog hard gewerkt aan commands."}
    
        )
     
       
        message.author.send(helpEmbed);
    
        message.channel.send("Alle commando's staan in je privé berichten! :mailbox_with_mail: ");
    
    } catch (error) {
        message.reply("Er is iets fout gebeurd!");
    }
    
};

module.exports.help = {
    name: "help"
}