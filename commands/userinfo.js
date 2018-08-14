const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
        message.reply(".userinfo ||OR|| .userinfo <@user> (▀̿Ĺ̯▀̿ ̿)");
        return;
      }

    let user = message.mentions.users.first();
    let userCreated = message.author.createdAt.toString().split(' ');
    let userJoined = message.member.joinedAt.toString().split(' ');

    let userembed = new Discord.RichEmbed()
    .setTitle("User Information")
    .setColor("#ffc3ce")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("__Username__", message.author.tag, true)
    .addField("__User ID__", message.author.id, true)
    .addField("__User Created On__", userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3],(true))
    .addField("__Joined Server__", userJoined[1] + ', ' + userJoined[2] + ' ' + userJoined[3],(true))
    .setFooter("Pixel Vault®", "https://i.imgur.com/Pb1eq9j.png");
   
    if (message.mentions.users.size < 1) return message.channel.send(userembed);

    let taguserembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Info`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .setColor("#ffc3ce")
    .addField("Username", user.tag, true)
    .addField("User ID", user.id, true)
    .addField("Status", user.presence.status, true)
    .addField("Bot [T/F]", user.bot, true)
    .setFooter("Requested by: " + message.author.tag);

    return message.channel.send(taguserembed);
}
 
module.exports.help = {
  name: "userinfo",
}