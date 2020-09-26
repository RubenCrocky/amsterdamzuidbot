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
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Amsterdam Zuid V1", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    //command handler
    var arguments = messageArray.slice(1); 
    
    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);

    if(command === `${prefix}kljgldjklgj`){

        message.channel.send('https://imgur.com/5yiipSF ');

    
    };

    if(command === `${prefix}jklgjdklj`){

        message.channel.send('Dit is het Amsterdam Medisch Centrum! \n\n **De bouwvakkers en de gemeente van Amsterdam Zuid doen er alles aan om zo snel mogelijk het ziekenhuis ingericht te hebben en operationeel te krijgen!** \n De ramen zijn nog in vertraging! 😂 \n <@&746381038963523785> ');

    
    };

    
    if(command === `${prefix}jgkldjklgj`){

        var Embed = new discord.MessageEmbed()
        .setTitle('Bedrijf kopen in Amsterdam Zuid!')
        .setDescription("Hallo allemaal. Zoals jullie weten werken we hard aan de map en we lanceren ook een bedrijventerrein. Nu vonden we het leuk om misschien wel jullie een bedrijf te laten maken. Dus je kan je eigen bedrijf **Kopen**. Prijzen staan hieronder")
        .setColor("#0099ff")
        .addFields(
            {name: "Gewoon basic bedrijf.",value: "30 Robux."},
            {name: "Gewoon basic bedrijf. + Inrichting binnenkant",value: "50 Robux."},
            {name: "Andere dingen in overleg met de developers als het mogelijk is.",value: "Dan is de prijs overeen te komen."},
            {name: "Ja ik wil zo een bedrijf met men bedrijf naam.!",value: "Maak dan een **__Hulp__** ticket aan en dan zullen we uw verder helpen."},
        )
        .setThumbnail('')
        .setTimestamp()
        .setFooter("Development Team Amsterdam Zuid.");

        message.channel.send(Embed);

        if(command === `${prefix}jklgjdljgld`){
    
            message.channel.send("@here");
    
        }
    
    };
});