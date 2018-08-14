const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.reply("Display Information about PXL Server. ( ಠ ͜ʖರೃ)");
    return;
  }
    let servericon = message.guild.iconURL;
    let servCreated = message.guild.createdAt.toString().split(' ');
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#ffc3ce")
    .setThumbnail(servericon)
    .addField("__Server Name__", message.guild.name, true)
    .addField("__Server ID__", message.guild.id, true)
    .addField("__Server Region__", message.guild.region, true)
    .addField("__Total Members__", message.guild.memberCount, true)
    .addField("__Server Created On__", servCreated[1] + ', ' + servCreated[2] + ' ' + servCreated[3],(true))
    .setFooter("Pixel Vault®", "https://i.imgur.com/Pb1eq9j.png");

    return message.channel.send(serverembed);

}
 
module.exports.help = {
  name: "serverinfo",
}