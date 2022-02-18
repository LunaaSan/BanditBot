const ms = require('ms');

module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){

      if(message.member.roles.cache.has('944360410281308191')){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
      }  
      } else {
      message.channel.send('You dont have the required permissions to use this command.')
    }
    }
    }