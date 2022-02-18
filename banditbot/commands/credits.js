const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'credits',
    description: "credits menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("<:discord_ownerbadge:942309281594753097> Credits")
 .setDescription(`
All Credits goto Not Lunaa#4776

Do command ".lunaa"
`)
 .setFooter("Made with love by Lunaa ♡")
 .setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}