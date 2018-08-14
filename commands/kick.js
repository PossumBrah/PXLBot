const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    if(kUser.id === bot.user.id) return errors.kbotuser(message);
    let kReason = args.join(" ").slice(22);
    if(!kReason) return errors.noReason(message.channel);
    if(kUser.hasPermission("KICK_MEMBERS")) return errors.kmodPerm(message, kUser);
    
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
    
    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");
    
    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    portschannel.send(reportEmbed);
    
}
 
module.exports.help = {
  name: "kick"
}