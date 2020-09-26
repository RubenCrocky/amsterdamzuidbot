const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    var seperator = "|";

        if (args[0] == null) {
            var embed = new discord.MessageEmbed()
                .setTitle("Gebruik")
                .setColor("options.color")
                .setDescription(`Dien een suggestie in door: \n !suggestie Suggestie \n\n Bijvoorbeeld: !suggestie Doe iets aan de game`);
    
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
    
        var suggestEmbed = new discord.MessageEmbed()
            .setTitle("Suggestie")
            .setColor(options.kleur)
            .setDescription(`Suggestie van: ${message.author} \n\n Suggestie:: ${options.titel}`)
            .setTimestamp();
    
        var channel = message.member.guild.channels.cache.find(channel => channel.name === "⭐suggestions");
        if (!channel) return message.reply("Kanaal bestaat niet");
    
        channel.send(suggestEmbed);
}

module.exports.help = {
    name: "suggestie"
}