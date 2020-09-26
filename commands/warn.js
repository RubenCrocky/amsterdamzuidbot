const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
         
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry, je kan dit niet doen.");
    
        if (!args[0]) return message.reply("Geen gebruiker opgegeven.");
    
        if (!args[1]) return message.reply("Geef een reden op!");
    
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen permissions");
    
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
        var reason = args.slice(1).join(" ");
    
        if (!kickUser) return message.reply("kan de gebruiker niet vinden");
    
        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kan die persoon niet warnen.");
    
        if (!warns[kickUser.id]) warns[kickUser.id] = {
            warns: 0
        };
    
        warns[kickUser.id].warns++;
    
        fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err);
        });
    
        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`**Gewarnd:** ${kickUser} (${kickUser.id})
            **Warning door:** ${message.author}
            **Redenen: ** ${reason}`)
            .addField("Aantal warns", warns[kickUser.id].warns);
    
        const channel = message.member.guild.channels.cache.get("740665347820224562");
    
        if (!channel) return;
    
        channel.send(embed);
        
}

module.exports.help = {
    name: "warn"
}