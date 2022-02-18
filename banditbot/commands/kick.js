const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "Kicks a user",
    execute(message, args){

    if(message.member.roles.cache.has('944360410281308191')){
    
          const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else {
            message.channel.send(`You coudn't kick that member!`);

      };
    
    }
    else {
      message.channel.send('You dont have the required permissions to use this command.')
    }
      
  }
}