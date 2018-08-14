const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const Report = require("../models/report.js");
const secrets = require("../secrets.json");
const MongoClient = require("mongoose");
MongoClient.connect(secrets.MongoConnectReports, { useNewUrlParser: true });

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(args[0] == "help"){
    message.reply(".report <user> <reason>  ┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴");
    return;
  }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    if(rUser.id === bot.user.id) return errors.rbotuser(message);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);
    if(rUser.hasPermission("MANAGE_MESSAGES")) return errors.rmodPerm(message, rUser);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("~Reports~")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `<@${message.author}> with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    const report = new Report({
      _id: MongoClient.Types.ObjectId(),
      username: rUser.user.username,
      userID: rUser.id,
      reason: rreason,
      channel: message.channel.name,
      rUsername: message.author.username,
      rID: message.author.id,
      time: message.createdAt
  });

      report.save()
      // .then(result => console.log(result))
      // .catch(err => console.log(err));

      // message.reply("Your .report has been saved to the database!");

}
 
module.exports.help = {
  name: "report",
}