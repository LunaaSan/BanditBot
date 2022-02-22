const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'lunaa',
    description: "lunaas menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("<:discord_ownerbadge:942309281594753097> Abt Lunaa <:discord_ownerbadge:942309281594753097>")
  .setDescription(`
       Discord > Not Lunaa#4776 | ID > 929840249348190340
       Server  > https://discord.gg/k2vJM5NvXa`)

   .addField("Socials", `
      Doxbin > https://doxbin.com/user/values
       Doxbin2 > https://doxbin.com/user/maisan
       Github  > https://github.com/LunaaSan
       Website > https://bit.ly/LunaaPortfolio `)
.setThumbnail("https://replit.com/cdn-cgi/image/width=1920,quality=80/https://storage.googleapis.com/replit/images/1645046592742_34385927315bfeb4d8f570640a665113.gif")
.setColor("#FF9FED")
         message.channel.send( { embeds:[ embed ] } )
    }
}
