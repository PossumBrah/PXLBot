const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.reply("Display Information about PXL Bot. ( ಠ ͜ʖರೃ)");
    return;
  }
    let boticon = bot.user.displayAvatarURL;
    let botCreated = bot.user.createdAt.toString().split(' ');
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#ffc3ce")
    .setThumbnail(boticon)
    .addField("__Bot Name__", bot.user.username, true)
    .addField("__Bot version__", botconfig.version, true)
    .addField("__Bot Created On__", botCreated[1] + ', ' + botCreated[2] + ' ' + botCreated[3],(true))
    .addField("__# of Servers__", bot.guilds.size, true)
    .setFooter("Pixel Vault®", "https://i.imgur.com/Pb1eq9j.png");
  
    return message.channel.send(botembed);

}
 
module.exports.help = {
  name: "botinfo",
}