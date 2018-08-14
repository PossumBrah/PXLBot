const Discord = require("discord.js");
const superagent = require("superagent");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help"){
    message.reply("Display a Random Doggo. ^‿^");
    return;
    }
    if (talkedRecently.has(message.author.id)) {
     message.channel.send(message.author + "Please wait 1 minute; Doggo needs to go hide again. ");
    } else {

    let {body} = await superagent
    .get (`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#ffc3ce")
    .setImage(body.url);

    message.channel.send(dogembed).then(sentMessage => {
      sentMessage.delete(45000);
      });

    talkedRecently.add(message.author.id);
    setTimeout(() => {
     talkedRecently.delete(message.author.id);
    }, 60000);
  }
}

module.exports.help = {
    name: "doggo"
  }