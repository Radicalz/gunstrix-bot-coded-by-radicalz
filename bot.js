const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = '!';
const sayvar = ''
const YTDL = require("ytdl-core");
const config = require("./config.json")
version = '0.4 BETA'
modrole = 'Mods'
adminrole = 'Admins'
game = 'V1 - !help'
var cleverON = false;
var RESTRICT_CLEVERBOT_TO_CHANNEL = false
var cleverbot = require("cleverbot.io");
var notifydevchannel = 0;
var ownerID = '';
var coownerID1 = '';
var coownerID2 = '';
var coownerID3 = '';
var coownerID4 = '';
var coownerID5 = '';
var coownerID6 = '';
var coownerID7 = '';
var servers = {};
function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

  server.queue.shift();
  
  server.dispatcher.on("end", function() {
      if (server.queue[0]) play(connection, message);
      else connection.disconnect();
  });
}
function commandIs(str, msg) {
  return msg.content.startsWith(prefix + str);
}

function pluck(array) {
  return array.map(function(item) { return item["name"]; });
}


function hasRole(mem, role) {
  if(pluck(mem.roles).includes(role)) {
    return true;
  } else {
    return false;
  }
}

bot.on('ready', () => {
  bot.user.setGame(game);
  console.log('Gunstrix BOT initializing...');

    bot.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    bot.user.setPresence({
      game: {
        name: (game),
        type: 0
         }
    });
});

bot.on('message', message => {
  var args = message.content.split(/[ ]+/);
  if (message.content === prefix + 'ping') {
      startTime = Date.now();
      message.channel.sendMessage("Summoning the Lords of memes..").then((message) => {
        endTime = Date.now();
          message.edit("The Lords of memes have pinged you... // " + Math.round(endTime - startTime) + " ms");
      });
  }
 

  //Setgame Command
  if (message.content.startsWith('!setgame')) {
    if((message.author.id === ownerID) || (message.author.id === coownerID1) || (message.author.id === coownerID2) || (message.author.id === coownerID3) || (message.author.id === coownerID4) || (message.author.id === coownerID5)) {
      game = message.content.replace("!setgame", "");
      bot.user.setGame(game);
      message.channel.sendMessage('Successfully changed the game to: ' + '``' + game + '``');
    } else {
      message.channel.sendMessage('Nope!, you are not an owner of the bot :| ')
    }
  }

  if (message.content === prefix + 'shutdown') {
    if((message.author.id === ownerID) || (message.author.id === coownerID1) || (message.author.id === coownerID2) || (message.author.id === coownerID3) || (message.author.id === coownerID4) || (message.author.id === coownerID5)) {
      message.channel.sendMessage('bye :hand_splayed::skin-tone-3:')
      bot.destroy()
    } else {
      message.reply('No, Bad!')
    }
  }

  if (message.content === prefix + 'help') {
    message.channel.sendMessage('Check your DMs! :envelope_with_arrow:')
    message.author.sendMessage('***My commands are:***\n' +
      '```ping | the Lords of Memes pings you\n' +
      'info | gives you the bot info\n' +
      'inviteme | gives you the invite link for the bot\n'+
      'setgame | changes the bots game (Only for Bot Owners)\n'+
      'say | makes the bot say what you say\n'+
      'ayylmao | came to earth in a silver chrome UFO\n'+
      'cykablyat | cykablyat meme...\n'+
      'help | shows this message\n'+
      'triggered | triggered boi!\n'+
      'randommeme | Posts a random ass meme\n'+
      'mlg | mlg grandma\n'+
      'spam | sends you spam!\n'+
      '8ball | ask 8ball a question!\n'+
      'mute | mutes a user\n'+
      'ban | bans a user\n'+
      'kick | kicks a user\n+
      'unmute | unmutes a user\n+
      'admin-commands | please see file bot.js\n```');
  }

  if (message.content === prefix + 'inviteme') {
    message.channel.sendMessage('Sent you the invite link in DMs');
    message.author.sendMessage('Invite me to your server: https://discordapp.com/oauth2/authorize?client_id=473668620694847511&permissions=1178065984&scope=bot');
  }

  if (message.content === prefix + 'info') {
    message.channel.sendMessage('``Dank meme discord bot made by SKY-SHOOTERS!``\n ```Version: '+version+'```');
  }


  if (message.content.startsWith('!say')) {
    //if(hasRole(message.member, modrole) || hasRole(message.member, adminrole)) {
      var msg = message.content.replace("mb!say", "");
      message.delete();
      message.channel.sendMessage(msg);
    //} else {
      //message.channel.sendMessage('You dont have the ``Mods`` Role')
    //}
  }
  if (message.content === prefix + 'randommeme') {
      var answers = [
        //STOLEN MEMES :>
      'http://i.imgur.com/esZlkxd.jpg', 
      'http://i.imgur.com/hPW0SKr.jpg', 
      'http://i.imgur.com/Pqprl6S.jpg', 
      'http://i.imgur.com/2UsbZdM.jpg',
      'http://i.imgur.com/Ub93dy4.jpg', 
      'http://i.imgur.com/1WssNcV.jpg', 
      'http://i.imgur.com/yGr52CL.jpg', 
      'http://i.imgur.com/mTD0vZh.jpg',
      'http://i.imgur.com/BtBCqMg.jpg', 
      'http://i.imgur.com/cYLudbe.jpg', 
      'http://i.imgur.com/xdZa4Nj.jpg', 
      'http://i.imgur.com/Kb04V4W.jpg', 
      'http://i.imgur.com/5OSaf9u.png',
      'http://i.imgur.com/zqqu4Vi.jpg', 
      'http://i.imgur.com/uIJjMXA.jpg', 
      'http://i.imgur.com/HCfN7P8.jpg', 
      'http://i.imgur.com/cE21Jdc.jpg',
      'http://i.imgur.com/IiA4fRm.jpg', 
      'http://i.imgur.com/iKxAaq0.jpg', 
      'http://i.imgur.com/XEicSEg.jpg',
      'http://i.imgur.com/36yEXvC.jpg', 
      'http://i.imgur.com/vls4AR7.jpg', 
      'http://i.imgur.com/hu7jZr6.png',
      'http://i.imgur.com/gCJrl7e.jpg', 
      'http://i.imgur.com/K9Oetiw.png',
      'http://i.imgur.com/i6UWgIg.jpg',
      'http://i.imgur.com/vWjSwqf.jpg',
      'http://i.imgur.com/YTCAK51.jpg',
      'http://i.imgur.com/UMLm1mL.jpg',
      'http://i.imgur.com/68Zr7rs.jpg',
      'http://i.imgur.com/qnqITS3.jpg',
      'http://i.imgur.com/vOK9gcj.jpg',
      'http://i.imgur.com/qqS1oWu.jpg',
      'http://i.imgur.com/d3Wbs3l.jpg',
      'http://i.imgur.com/L5yUVYw.jpg',
      'http://i.imgur.com/GKnXFsQ.jpg',
      'http://i.imgur.com/Wf733vC.png',
      'http://i.imgur.com/tKQuOEe.jpg',
      'http://i.imgur.com/nf5ncDG.png',
      'http://i.imgur.com/oJVK22f.jpg',
      'http://i.imgur.com/3TQsgvH.jpg',
      'http://i.imgur.com/TuMP4qQ.png',
      'http://i.imgur.com/gPCXHzH.jpg',
      'http://i.imgur.com/5UoZyvQ.png',
      'http://i.imgur.com/SzyiCeS.jpg',
      'http://i.imgur.com/rJ8AnPx.jpg',
      'http://i.imgur.com/9PhB6tR.jpg',
      'http://i.imgur.com/dWwpKhz.jpg',
      'http://i.imgur.com/1DxoHS1.jpg',
      'http://i.imgur.com/T5hphPD.jpg',
      'http://i.imgur.com/D1hMVa3.jpg',
      'http://i.imgur.com/YlBWOUx.jpg',
      'http://i.imgur.com/Hs0bNbm.jpg',
      'http://i.imgur.com/o14goLr.jpg',
      'http://i.imgur.com/TFIA8ds.jpg',
      'http://i.imgur.com/cIiqY8w.jpg',
      'http://i.imgur.com/5dNlLf6.jpg',
      'http://i.imgur.com/ZABeZC8.jpg',
      'http://i.imgur.com/BDvkS64.jpg',
      'https://i.imgur.com/UtIUE7K.jpg',
      'https://youtu.be/kB81r6pcDGA',
      'https://youtu.be/H46FRRvb-9o',
      'https://youtu.be/zfhEuP1D9iE'


      ];
      var answer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.sendMessage(answer);
  }
  
  if (message.content.startsWith('!8ball')) {
    if ( message.content.endsWith('?')) {
      var answers = [
      'Maybe.', 'Lol no.', 'I really hope so.', 'Not in your wildest dreams.',
      'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
      'I hope so.', 'Wtf no!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
      'Sorry, bby.', 'f, yes.', 'Hell to the no.', 'ehhhhhh, i dont know.',
      'The future is uncertain.', 'I would rather not say.', 'Who cares?',
      'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];
      var answer = answers[Math.floor(Math.random() * answers.length)];
    } else {
      message.channel.sendMessage('Is that a question?')
    }
  message.channel.sendMessage(answer);
  } 

  if (message.content === prefix + 'cykablyat') {
    message.channel.sendFile('img/cykablyat.png');
  }

  if (message.content === prefix + 'triggered') {
    message.channel.sendFile('img/triggered.png');
  }
  
  if (message.content === prefix + 'ayylmao') {
    message.channel.sendFile('img/ayylmao.gif');
  }

  if (message.content === prefix + 'spam') {
    message.channel.sendFile('img/spam.png');
  }
  //Warn Command
  if (message.content.startsWith('!warn')) {
  if((message.author.id === ownerID) || (message.author.id === owner2ID) || (message.author.id === owner3ID)) {
   var msg = message.content.replace("!warn", "");
   let discrim = message.mentions.users.first();
   message.delete();
   discrim.sendMessage(discrim.username + " you have been warned in "+ Guild.server.name+ ", reason: " + msg);
   message.channel.sendMessage("User has been **successfuly** warned!");
   console.log(message.author.username + " tried to execute in General Gaming"+ Guild.server.name +" !warn and it successfuly warned the user: " + discrim.username + " with the reason: " + msg);
      } else {
      message.reply('You arent the owner of the bot to do that!');
      console.log(message.author.username + " tried to execute in General Gaming !warn but it failed.")
      }
  }
  //press f to pay respects
  if (message.content === prefix + 'respect') {
              var f = Math.floor((Math.random() * 9999) + 1)
              let User = message.author
              message.channel.send("You know what? " + User + " just paid their respects! Respects paid: ``" + f + "``"); 
  }
});

var bannedwords = "fuck,shit,slut,whore,asshole,ass,faggot,nigger,pussy,cunt,bitch,rape,rapist,dick,sex,penis,vegina,arse,naked".split(",");

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("Please do not use inappropriate language! :underage: ");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send(" :interrobang: An error occured! You may not have set the bot up right! Please go to our support server if you keep having this issue... :interrobang:  https://discord.gg/mf3YaAe");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send(" :interrobang: An error occured! You may not have set the bot up right! Please go to our support server if you keep having this issue... :interrobang:  https://discord.gg/mf3YaAe");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute ")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send(" :interrobang: An error occured! You may not have set the bot up right! Please go to our support server if you keep having this issue... :interrobang:  https://discord.gg/mf3YaAe");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute ")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send(" :interrobang: An error occured! You may not have set the bot up right! Please go to our support server if you keep having this issue... :interrobang:  https://discord.gg/mf3YaAe");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }
});

client.login(config.token);
bot.login(config.token);
