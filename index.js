const djs = require('discord.js');
const process = require('process');
const { intents } = djs
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const { prefix, token , logCH, serverID, owner } = process.env;
const client = new djs.Client({
  intents: [ "GUILDS", "GUILD_MESSAGES" ]
});
const config = process.env;
 
client.on("ready", () => { 
        client.user.setStatus("online");
        client.user.setActivity('My prefix is "." | Watching your kids sleep ', { type: "PLAYING"})
    })

client.on('ready', () => {
  console.log(`Bandits Online`)
});








//    /$$        /$$$$$$                                                                  /$$                 /$$   
//   /$$/       /$$__  $$                                                                | $$                |  $$  
//  /$$/       | $$  \__/  /$$$$$$  /$$$$$$/$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$  /$$$$$$$       \  $$ 
// /$$/        | $$       /$$__  $$| $$_  $$_  $$| $$_  $$_  $$ |____  $$| $$__  $$ /$$__  $$ /$$_____/        \  $$
//|  $$        | $$      | $$  \ $$| $$ \ $$ \ $$| $$ \ $$ \ $$  /$$$$$$$| $$  \ $$| $$  | $$|  $$$$$$          /$$/
// \  $$       | $$    $$| $$  | $$| $$ | $$ | $$| $$ | $$ | $$ /$$__  $$| $$  | $$| $$  | $$ \____  $$        /$$/ 
//  \  $$      |  $$$$$$/|  $$$$$$/| $$ | $$ | $$| $$ | $$ | $$|  $$$$$$$| $$  | $$|  $$$$$$$ /$$$$$$$/       /$$/  
//   \__/       \______/  \______/ |__/ |__/ |__/|__/ |__/ |__/ \_______/|__/  |__/ \_______/|_______/       |__/   
//                                I need to add button embeds & Command Handler









client.on('messageCreate', (msg) => {
  if(msg.author.bot || msg.channel.type === "dm")
  return;
  const messageArray = msg.content.split(' ');
  const cmd = messageArray[0];
  const args = msg.content.substring(msg.content.indexOf(' ') + 1);
  const prefix = config.prefix;
 
if(cmd === prefix + 'ping' ) {
msg.channel.send({
  content: 'pong!'
})

}
if(cmd === prefix + 'help' ) {
let embed = new Discord.MessageEmbed()
 .setTitle("<:communitymem:941084435124740156> General Help")
 .setDescription(`
**CMD | EXAMPLE | USAGE**

help       | Displays all commands.            | ".help" 
fun        | Displays all fun commands.        | ".fun"
moderation | Displays all moderation commands. | ".moderation"
tools      | Displays all tool commands.       | ".tools"
misc       | Displays all misc commands.       | ".misc"
credits    | Displays the credit menu.         | ".credits"

───────────── ⋆⋅☆⋅⋆ ─────────────
** Bot Website > https://bit.ly/BotBandit**
** Support server >  https://discord.gg/k2vJM5NvXa **
** Prefix > .**
`)
 .setFooter("Made with love by Lunaa ♡")
 .setThumbnail("https://hypebots.org/storage/sites/thebanditblock.png")
 .setColor("65409d")
 
 msg.channel.send( { embeds:[ embed ] } )
}

if(cmd === prefix + 'fun' ) {
let embed = new Discord.MessageEmbed()
 .setTitle("<:spark1:933549956571222096> Fun Commands SFW")
 .setDescription(`
**CMD | EXAMPLE | USAGE**
**SWF Version, Do ".funnsfw" for NSFW version.**

IQ           | Displays a users IQ.              | ".iq @user" 
Rate         | Shows a users attractiveness.     | ".rate @user"
LoveCalc     | Displays love between users.      | ".lovecalc @user @user"
Kiss         | Kiss a user.                      | ".kiss @user"
Hug          | Hug a user.                       | ".hug @user"
Slap         | Slap a user.                      | ".slap @user"         
Feed         | Feed a user food.                 | ".feed @user" 
Pet          | Pet a user like they your dog.    | ".pet @user" 
Gay          | See how gay a user is.            | ".gay @user" 
`)
 .setFooter("Made with love by Lunaa ♡")
 .setColor("65409d")
 
 msg.channel.send( { embeds:[ embed ] } )
}

if(cmd === prefix + 'moderation' ) {
let embed = new Discord.MessageEmbed()
 .setTitle("<:modbadge:941084498525823017> Moderation Commands")
 .setDescription(`
**CMD | EXAMPLE | USAGE**

Ban           | Ban a member.                                                                     | ".ban @user (limit) (reason)" 
Case          | Show a single moderation case.                                                    | ".case [case number]"
Clean         | Cleanup the bot responses.                                                        | ".clean (count)"
clearnotes    | Cleans amount of notes.                                                           | ".clearnotes @user"
Deafen        | Deafen a member.                                                                  | ".deafen @user (reason)"
Delnote       | Delete a single note about a member.                                              | ".delnote @user [note ID]"
Diagnose      | Diagnose any command or module in the bot to determine if there are any problems. | "diagnose [command or module]"         
Duration      | Change the duration of a timed punishment.                                        | "duration [modlog ID] [new limit]" 
Editnote      | Edit a note about a member.                                                       | ".editnote @user [note ID] [note]" 
Ignored       | List ignored channels, roles and users.                                           | "ignored" 
Kick          | Kick a member.                                                                    | ".kick @user (reason)" 
Lock          | Lock a channel.                                                                   | ".lock [channel] (limit) (reason)" 
Lockdown      | Lock a channel                                                                    | ".lockdown (optional message))" 
Members       | List members in a role or roles.                                                  | ".members [role]" 
Moderations   | Get a list of active timed moderations and remaining time.                        | ".moderations" 
Modlogs       | Get a list of moderation logs for a user.                                         | ".modlogs @user" 
Modstats      | Get moderation statistics for a mod/admin (may take up to 30 minutes to update).  | ".modstats @user" 
Mute          | Mute a member so they cannot type.                                                | ".mute @user (limit) (reason)" 
Note          | Add a note about a member.                                                        | ".note @user [note]" 
Notes         | Get notes for a user.                                                             | ".notes @user" 
Reason        | Supply a reason for a moderation log case.                                        | ".reason [case number] [reason]" 
Rolepersist   | Assign/unassign a role that persists if the user leaves and rejoins.              | ".rolepersist @user [role], (reason)" 
Softban       | Softban a member (ban and immediately unban to delete their messages).            | ".softban @user (reason)" 
Star          | View Starboard stats for a message.                                               | ".star [message ID/link]" 
Temprole      | Assign/unassign a role for a limited time that persists if the user leaves and rejoins.	| ".temprole @user [time] [role], (reason)" 
Unban         | Unban a member.	                                                                  | ".unban @user (reason)" 
Undeafen      | Undeafen a member. 	                                                              | ".undeafen @user (reason)" 
Unlock        | Unlock a channel. 	                                                              | ".unlock [channel]" 
Unmute        | Unmute a member. 	                                                                | ".unmute @user (reason)"  
Warn          | Warn a member. 	                                                                  | .warn @user (reason)
Warninglogs   | Get warnings for a user. 	                                                        | warnings @user             
`)
 .setFooter("Made with love by Lunaa ♡")
 .setColor("65409d")
 
 msg.channel.send( { embeds:[ embed ] } )
}

if(cmd === prefix + 'credits' ) {
let embed = new Discord.MessageEmbed()
 .setTitle("<:discord_ownerbadge:942309281594753097> Credits")
 .setDescription(`
All Credits goto Not Lunaa#4776

Do command ".lunaa"
`)
 .setFooter("Made with love by Lunaa ♡")
 .setColor("#FF9FED")
 
 msg.channel.send( { embeds:[ embed ] } )
}

if(cmd === prefix + 'lunaa' ) {
let embed = new Discord.MessageEmbed()
  .setTitle("<:discord_ownerbadge:942309281594753097> Abt Lunaa <:discord_ownerbadge:942309281594753097>")
  .setDescription(`
       Discord > Not Lunaa#4776 | ID > 929840249348190340
       Server  > https://discord.gg/k2vJM5NvXa`)

   .addField("Socials", `
      Doxbin > https://doxbin.com/user/values
       Doxbin2 > https://doxbin.com/user/maisan
       Github  > https://github.com/LunaaSan
       Website > https://bit.ly/LunasWeb `)
.setThumbnail("https://replit.com/cdn-cgi/image/width=1920,quality=80/https://storage.googleapis.com/replit/images/1645046592742_34385927315bfeb4d8f570640a665113.gif")
.setColor("#FF9FED")

 msg.channel.send( { embeds:[ embed ] } )
}

if(cmd === prefix + 'tools' ) {
let embed = new Discord.MessageEmbed()
  .setTitle("<:staffbadge:941084559682965504> Tool Commands")
  .setDescription(`
afk		             |  Set an AFK status to display when you are mentioned.	        |    ".afk (status)"
avatar		         |  Get the avatar of yourself or another user.	                  |    ".avatar @user"
botlist		         |  Gets the Carbonitex bot list ordered by server counts.        |	   ".botlist (page)"
color              |	Show a color using the hex code.	                            |    ".color [hex code]"
discrim            |	Gets a list of users matching a discriminator.	              |    ".discrim (discriminator)"
distance           |	Get the distance between two sets of coordinates.	            |    ".distance [coords] [coords]"
emotes             |	Get a list of server emojis.	                                |    ".emotes (search)"
inviteinfo         |	Get information about a Discord invite.	                      |    ".inviteinfo [invite code]"
membercount        |	Get the membercount of the current server.	                  |    ".membercount"
randomcolor        |	Generates a random hex color with a preview.	                |    ".randomcolor"
remindme           |	Set a reminder.	                                              |    ".remindme [time] [reminder]"
roll               |	Roll a dice.	                                                |    ".roll (size) [number of dice]"
rps                |	Play rock, papers, scissors with the bot.	                    |    ".rps [choice]"
serverinfo         |	Get information about the current server.	                    |    ".serverinfo"
whois              |	Get information about a user.	                                |    ".whois @user"
`)
.setColor("65409d")

 msg.channel.send( { embeds:[ embed ] } )
}

if(cmd === prefix + 'misc' ) {
let embed = new Discord.MessageEmbed()
  .setTitle("COMING SOON")
  .setDescription(`
Coming soon...
`)
.setColor("65409d")

 msg.channel.send( { embeds:[ embed ] } )
}


// /$$      /$$                 /$$                                /$$     /$$                    
//| $$$    /$$$                | $$                               | $$    |__/                    
//| $$$$  /$$$$  /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$  /$$$$$$   /$$  /$$$$$$  /$$$$$$$ 
//| $$ $$/$$ $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$|____  $$|_  $$_/  | $$ /$$__  $$| $$__  $$
//| $$  $$$| $$| $$  \ $$| $$  | $$| $$$$$$$$| $$  \__/ /$$$$$$$  | $$    | $$| $$  \ $$| $$  \ $$
//| $$\  $ | $$| $$  | $$| $$  | $$| $$_____/| $$      /$$__  $$  | $$ /$$| $$| $$  | $$| $$  | $$
//| $$ \/  | $$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$     |  $$$$$$$  |  $$$$/| $$|  $$$$$$/| $$  | $$
//|__/     |__/ \______/  \_______/ \_______/|__/      \_______/   \___/  |__/ \______/ |__/  |__/

// /$$$$$$$$                 
//| $$_____/                 
//| $$    /$$   /$$ /$$$$$$$ 
//| $$$$$| $$  | $$| $$__  $$
//| $$__/| $$  | $$| $$  \ $$
//| $$   | $$  | $$| $$  | $$
//| $$   |  $$$$$$/| $$  | $$
//|__/    \______/ |__/  |__/

if(cmd === prefix + 'funnsfw' ) {
let embed = new Discord.MessageEmbed()
  .setTitle("<:spark1:933549956571222096> Fun Commands NSFW")
  .setDescription(`
Penis        | Displays a users penis size.      | ".penis @user"
Fuck         | Fuck a user from the back.        | ".fuck @user" 
`)
.setColor("65409d")

 msg.channel.send( { embeds:[ embed ] } )
}
if(cmd === prefix + 'iq' ) {
let embed = new Discord.MessageEmbed()
  .setTitle("<:spark1:933549956571222096> Fun Commands NSFW")
  .setDescription(`
Penis        | Displays a users penis size.      | ".penis @user"
Fuck         | Fuck a user from the back.        | ".fuck @user" 
`)
.setColor("65409d")

 msg.channel.send( { embeds:[ embed ] } )
}
});

client.login(config.token);
