const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    message.reply("Display Information about PXL Token. ( ಠ ͜ʖರೃ)");
    return;
  }
    let serverembed = new Discord.RichEmbed()
    .setTitle("PXL Token Specs")
    .setColor("#ffc3ce")
    .addField("__Consensus Algorithm__", "PoS + Masternode Hybrid", true)
    .addField("__Block Size__", "2 MB", true)
    .addField("__Block Time__", "60 Seconds", true)
    .addField("__Min Stake Age__", "60 Minutes", true)
    .addField("__Masternode Collateral__", "5000 PXL", true)
    .addField("__Max Coin Supply__", "50,000 000 PXL", true)
    .setImage("https://i.imgur.com/fryGoQF.png")
    .setFooter("Pixel Vault®", "https://i.imgur.com/Pb1eq9j.png");

    return message.channel.send(serverembed);

}
 
module.exports.help = {
  name: "tokeninfo",
}