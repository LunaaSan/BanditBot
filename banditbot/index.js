const djs = require('discord.js');
const { MessageEmbed } = require('discord.js');
const process = require('process');
const { intents } = djs
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const { prefix, token , logCH, serverID, owner } = process.env;
const client = new djs.Client({
  intents: [ "GUILDS", "GUILD_MESSAGES" ]});
const config = process.env;
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.on("ready", () => { 
        client.user.setStatus("online");
        client.user.setActivity('My prefix is "." | Watching your kids sleep ', { type: "PLAYING"})
    })

client.on('ready', () => {
  console.log(`Bandits Online`)
});










client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'moderation'){
        client.commands.get('mod').execute(message, args);
    } 
     else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
       else if(command === 'credits'){
        client.commands.get('credits').execute(message, args);
    } 
       else if(command === 'fun'){
        client.commands.get('fun').execute(message, args);
    } 
       else if(command === 'funnsfw'){
        client.commands.get('funnsfw').execute(message, args);
    } 
       else if(command === 'lunaa'){
        client.commands.get('lunaa').execute(message, args);
    } 
     else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
          else if(command === 'tools'){
        client.commands.get('tools').execute(message, args);
    } 
});

client.login(config.token);
