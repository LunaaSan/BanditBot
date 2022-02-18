const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
     description: "Clear Messages",
    async execute(message, args){

    if(message.member.roles.cache.has('944360410281308191')){
    
          if(!args[0]) return message.reply("Please enter the amount of messages you want cleared.")
      if(isNaN(args[0])) return message.reply("Pleasse enter a real number!")

      if(args[0] > 100) return message.reply("You cannot delete more then 100!")
      if(args[0] < 1) return message.reply("You must delete atleast one message!")

      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);

      });
    
    }
    else {
      message.channel.send('You dont have the required permissions to use this command.')
    }


    }
}