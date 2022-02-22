const djs = require('discord.js');
const { MessageEmbed } = require('discord.js');
const process = require('process');
const { intents } = djs
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const { prefix, token , logCH, serverID, owner } = process.env;
const config = process.env;
const fs = require('fs');
const discord = require('discord.js');
const { stdout } = require('process');


// Command Names
const commandNames = new Array;


//discord shit
const client = new discord.Client({
    intents: [ "GUILDS", "GUILD_MESSAGES" ]
});

client.commands = new discord.Collection();

//load the commands
const commands = fs.readdirSync(`${__dirname}/commands/`).filter(f => f.endsWith('.js'));

for (file of commands) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    commandNames.push(command.name);
    stdout.write(`Loaded ${command.name}\n`);
}


client.on("ready", () => { 
    client.user.setStatus("online");
    client.user.setActivity('My prefix is "." | Watching your kids sleep ', { type: "PLAYING"});
    stdout.write("Bandit's online\n");
})

client.on('messageCreate', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
 
    const params = msg.content.slice(prefix.length).split(/ +/);
    const userCommand = params.shift().toLowerCase();

    //check if the parameter the user put in is in the commandNames array
    if(commandNames.indexOf(userCommand) != -1) {
        client.commands.get(userCommand).execute(msg, params)
    };
});

client.login(config.token);
