const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'funnsfw',
    description: "fun menu NSFW",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
  .setTitle("<:spark1:933549956571222096> Fun Commands NSFW")
  .setDescription(`
Penis        | Displays a users penis size.      | ".penis @user"
Fuck         | Fuck a user from the back.        | ".fuck @user" 
`)
 .setFooter("Made with love by Lunaa ♡")
 .setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}