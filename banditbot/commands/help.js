const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "Help menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setColor("#65409d")
      .setTitle("<:communitymem:941084435124740156> General Help") 
      .setDescription(` CMD | EXAMPLE | USAGE

help | Displays all commands. | ".help" 
fun | Displays all fun commands. | ".fun" 
moderation | Displays all moderation commands. | ".moderation" 
tools | Displays all tool commands. | ".tools" 
misc | Displays all misc commands. | ".misc" 
credits | Displays the credit menu. | ".credits"

───────────── ⋆⋅☆⋅⋆ ───────────── 
Bot Website > https://bit.ly/
Support server > https://discord.gg/k2vJM5NvXa Prefix > . `)
      .setThumbnail("https://hypebots.org/storage/sites/thebanditblock.png")
      .setFooter("Made with love by Lunaa ♡")
         message.channel.send( { embeds:[ embed ] } )
    }
}