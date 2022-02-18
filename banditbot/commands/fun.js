const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'fun',
    description: "fun menu SFW",
    execute(message, args){
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
         message.channel.send( { embeds:[ embed ] } )
    }
}