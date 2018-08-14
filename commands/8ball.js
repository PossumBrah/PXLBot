const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
        message.reply(".8ball <question? ( ͡° ͜ʖ ͡°)");
        return;
      }
//8ball Answers
    if (!args[2]) return message.reply("Please ask a full question!");
    let replies = ["It is certain.", "As I see it, yes.", "I don't know.", "Ask again later.", "Better not tell you now", 
    "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "Most likely.", "My reply is no.", "My sources say no.",
    "Outlook good.", "Outlook not so good.", "Are you crazy?", "Signs point to yes", "Very doubtful.", "Without a doubt.", 
    "Yes.", "No.", "You may rely on it.", "Yes, definitely."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ffc3ce")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);

}

module.exports.help = {
    name: "8ball",   
}