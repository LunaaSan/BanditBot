const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'moderation',
    description: "moderation menu",
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle("<:modbadge:941084498525823017> Moderation Commands")
 .setDescription(`
**CMD | EXAMPLE | USAGE**

Ban           | Ban a member.                                                                     | ".ban @user (limit) (reason)" 
Case          | Show a single moderation case.                                                    | ".case [case number]"
Clean         | Cleanup the bot responses.                                                        | ".clean (count)"
clearnotes    | Cleans amount of notes.                                                           | ".clearnotes @user"
Deafen        | Deafen a member.                                                                  | ".deafen @user (reason)"
Delnote       | Delete a single note about a member.                                              | ".delnote @user [note ID]"
Diagnose      | Diagnose any command or module in the bot to determine if there are any problems. | "diagnose [command or module]"         
Duration      | Change the duration of a timed punishment.                                        | "duration [modlog ID] [new limit]" 
Editnote      | Edit a note about a member.                                                       | ".editnote @user [note ID] [note]" 
Ignored       | List ignored channels, roles and users.                                           | "ignored" 
Kick          | Kick a member.                                                                    | ".kick @user (reason)" 
Lock          | Lock a channel.                                                                   | ".lock [channel] (limit) (reason)" 
Lockdown      | Lock a channel                                                                    | ".lockdown (optional message))" 
Members       | List members in a role or roles.                                                  | ".members [role]" 
Moderations   | Get a list of active timed moderations and remaining time.                        | ".moderations" 
Modlogs       | Get a list of moderation logs for a user.                                         | ".modlogs @user" 
Modstats      | Get moderation statistics for a mod/admin (may take up to 30 minutes to update).  | ".modstats @user" 
Mute          | Mute a member so they cannot type.                                                | ".mute @user (limit) (reason)" 
Note          | Add a note about a member.                                                        | ".note @user [note]" 
Notes         | Get notes for a user.                                                             | ".notes @user" 
Reason        | Supply a reason for a moderation log case.                                        | ".reason [case number] [reason]" 
Rolepersist   | Assign/unassign a role that persists if the user leaves and rejoins.              | ".rolepersist @user [role], (reason)" 
Softban       | Softban a member (ban and immediately unban to delete their messages).            | ".softban @user (reason)" 
Star          | View Starboard stats for a message.                                               | ".star [message ID/link]" 
Temprole      | Assign/unassign a role for a limited time that persists if the user leaves and rejoins.	| ".temprole @user [time] [role], (reason)" 
Unban         | Unban a member.	                                                                  | ".unban @user (reason)" 
Undeafen      | Undeafen a member. 	                                                              | ".undeafen @user (reason)" 
Unlock        | Unlock a channel. 	                                                              | ".unlock [channel]" 
Unmute        | Unmute a member. 	                                                                | ".unmute @user (reason)"  
Warn          | Warn a member. 	                                                                  | .warn @user (reason)
Warninglogs   | Get warnings for a user. 	                                                        | warnings @user             
`)
 .setFooter("Made with love by Lunaa ♡")
 .setColor("65409d")
         message.channel.send( { embeds:[ embed ] } )
    }
}
