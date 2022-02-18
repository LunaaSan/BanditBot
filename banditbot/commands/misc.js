const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'lunaa',
    description: "lunaas menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      setTitle("COMING SOON")
  .setDescription(`
Coming soon...
`)
.setColor("65409d")
         message.channel.send( { embeds:[ embed ] } )
    }
}