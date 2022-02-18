const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'tools',
    description: "tools menu",
    execute(message, args){
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
         message.channel.send( { embeds:[ embed ] } )
    }
}