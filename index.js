const discord = require("discord.js");
const botConfig = require("./botconfig.json");
//command handler
const fs = require("fs");
const client = new discord.Client();

//command handler
client.commands = new discord.Collection();
//command handler
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.login(process.env.token);

client.on("guildMemberAdd", member => {

    // var role = member.guild.roles.cache.get('462166173690232842');

    // if (!role) return;

    // member.roles.add(role);

    var channel = member.guild.channels.cache.get('739591916836094032');

    if (!channel) return;

    // channel.send(`Welkom bij de server ${member}`);

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hoi ${member.user.username}, **Welkom op de server**`)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor("#00FF00")
        .setFooter("Gebruiker gejoined")
        .setTimestamp();

    channel.send(joinEmbed);

});


client.on("guildMemberRemove", member => {

    var channel = member.guild.channels.cache.get('739591916836094032');

    if (!channel) return;

    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor("#FF0000")
        .setFooter("Gebruiker geleaved")
        .setTimestamp();

    channel.send(leaveEmbed);

});

client.on("messageDelete", messageDeleted => {

    if (messageDeleted.author.bot) return;

    var content = messageDeleted.content;
    if (!content) content = "Geen tekst te vinden";

    var respone = `Bericht ${messageDeleted.id} is verwijderd uit ${messageDeleted.channel}\n **Bericht:** ${content}`;

    var embed = new discord.MessageEmbed()
        .setAuthor(`${messageDeleted.author.id} ${messageDeleted.author.tag}`, `${messageDeleted.author.avatarURL({ size: 4096 })}`)
        .setDescription(respone)
        .setTimestamp()
        .setColor("#FF0000");

    client.channels.cache.find(c => c.name == "logs").send(embed);

});
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Amsterdam Zuid V1", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;

    if (!message.content.startsWith(prefix)) return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    //command handler
    var arguments = messageArray.slice(1); 
    
    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);

    if(command === `${prefix}avatar`){

        var embed = new discord.MessageEmbed()
        .setDescription("Your avatar")
        .setColor("#0099ff")
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter('The bot is maded by: Ruben_#5865');
    
        return message.channel.send(embed);

    };

    if(command === `${prefix}claim`){
        if(!message.member.roles.cache.find(r =>r.name === "🎫Support Team" || r.name === "👑 Game Creator | GC" || r.name === "👑Co Creator | CC" )) return message.channel.send("> Je hebt hiervoor geen rechten!");

        var claimer = message.author
    
        var embed = new discord.MessageEmbed()
               .setDescription(` Dit ticket is geclaimed door: ${claimer}`)
               .setColor("#0099ff")
               .setFooter("Gebruik dit command alleen in ticket kanalen!")
    
               return message.channel.send(embed);
    };

    if(command === `${prefix}faq`){

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
    };

    if(command === `${prefix}hallo`){

        return message.reply("Hallo, hoe gaat het? *[Ik reageeer niet terug moest je het willen weten]*");

    };

    if(command === `${prefix}help`){
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
                {name:"!info", value:"Krijg je info over de bot te zien!"},
                {name:"!serverinfo", value:"Hiermee krijg je info over de discord server."},
                {name:"!Permissie Commands", value:"Deze commands kan je enkel uitvoeren als je bepaalde permissies heb!"},
                {name:"!announcement", value:"Zend hiermee een announcement naar de discord server!"},
                {name:"!claim", value:"Claim een ticket"},
                {name:"!clear", value:"Verwijder berichten"},
                {name:"!bug", value:"Zend hiermee een bug naar de developers"},
                {name:"LET EROP", value:"ER word nog hard gewerkt aan commands."}
        
            )
         
           
            message.author.send(helpEmbed);
        
            message.channel.send("Alle commando's staan in je privé berichten!");
        
        } catch (error) {
            message.reply("Er is iets fout gebeurd");
        }
        
    };

    if(command === `${prefix}info`){
        var botEmbed = new discord.MessageEmbed()
        .setTitle('Amsterdam Zuid V1!')
        .setDescription("Deze BOT is gemaakt voor Amsterdam Zuid V1.")
        .setColor("#0099ff")
        .setThumbnail('')
        .setTimestamp()
        .setFooter('The bot is maded by: ItzMeRubenツ#5865', '');

    return message.channel.send(botEmbed);
    };

    if(command === `${prefix}serverinfo`){
         
        var serverEmbed = new discord.MessageEmbed()
        .setDescription("Dit is een discord server voor: Amsterdam Zuid V1!")
        .setColor("#02eba9")
        .addFields(
            {name: "Je bent deze server gejoind op",value: message.member.joinedAt},
            {name: "Totaal aantal leden",value: message.guild.memberCount}
        )
        .setTimestamp();

    return message.channel.send(serverEmbed); 
    };



  
});