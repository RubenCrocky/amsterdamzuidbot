const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
        var serverEmbed = new discord.MessageEmbed()
        .setTitle("Poll")
        .setDescription("Jullie kunnen stemmen op volgende dingen.")
        .setColor("#02eba9")
        .addFields(
            {name: "Auto's spanwnen op de parkeerplaats?",value: "Reageer met 🚗"},
            {name: "Geen auto spawn's zetten op de parkeerplaats?",value: "Reageer met 🚲"}
        )
        .setTimestamp()
        .setFooter("Random emojij's");

    return message.channel.send(serverEmbed);
    
}

module.exports.help = {
    name: "jklgjdkjgd"
}