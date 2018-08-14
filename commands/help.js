const Discord = require("discord.js");

module.exports.run = async (bot, message, args,) => {    
    if(args[0] == "help"){
        message.reply("Are you really asking me this right now? ლ(ಠ益ಠლ)");
        return;
      }
    let helpembed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setAuthor(message.author.tag)
    .setColor("#ffc3ce")
    .addField("__Information Commands__", "*.help*\n *.serverinfo*\n *.botinfo*\n *.userinfo*\n *.tokeninfo*\n *.report*", true)
    .addField("__Random Commands__", "*.8ball*\n *.doggo*\n *.cat*\n", true)
    .addField("__Up-Coming Casino Commands__", "*.bet*\n *.roll*\n *.balance*\n *.deposit*\n *.withdraw*")
    .setFooter("Individual command help: .command help");

    message.channel.send(helpembed);

    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setTitle("Moderator Help Menu")
    .setAuthor(message.author.tag, "https://i.imgur.com/Pb1eq9j.png")
    .setColor("#ffc3ce")
    .addField("__Mod Commands__", "*.say*\n *.clear*\n *.kick*\n *.ban*", true)
    .addField("__Command Description__", ".say <whatPXLBOTwillsay>\n .clear <#ofposts+1>\n .kick <@user> <reason>\n .ban <@user> <reason>", true)
    .setFooter("Use these commands cautiously. ﴾͡๏̯͡๏﴿ O'RLY?");

    try{
        await message.author.send(modembed);
    }catch(e){
        message.reply("Your DMs are locked. I cannot send you the mod commands.");
    }
  }
}

module.exports.help = {
    name: "help"
}