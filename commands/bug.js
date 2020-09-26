const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        var seperator = "|";
    
        if (args[0] == null) {
            var embed = new discord.MessageEmbed()
                .setTitle("Gebruik")
                .setColor("#00ee00")
                .setDescription(`Dien een bug in door: \n ;bug Soort bug ${seperator} Bug \n\n Bijvoorbeeld: ;bug Er is niets geanchord waardoor het uit mekaar valt`)
                .addField("De prefix op dit moment is", ";");
    
            return message.reply(embed);
        }
    
        var argsList = args.join(" ").split(seperator);
    
        console.log(argsList);
    
        if (argsList[2] == undefined) argsList[2] = "#eeeeee";
        if (argsList[3] == undefined) argsList[3] = "general";
    
        var options = {
    
            titel: argsList[0],
            bericht: argsList[1] || "No content specified.",
            kleur: argsList[2].trim(),
            kanaal: argsList[3].trim()
    
        }
    
        console.log(options);
    
        var bugEmbed = new discord.MessageEmbed()
            .setTitle("Bug")
            .setColor(options.kleur)
            .setDescription(`Bug gemeld door: ${message.author} \n\n Bug: ${options.titel}`)
            .setTimestamp();
    
        var channel = message.member.guild.channels.cache.find(channel => channel.name === "🔎bugs");
        if (!channel) return message.reply("Kanaal bestaat niet");
    
        channel.send(bugEmbed);

}

module.exports.help = {
    name: "bug"
}