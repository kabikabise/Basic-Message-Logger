const Discord = require("discord.js");
const fs = require("fs");
module.exports = async (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  //if (message.content.indexOf(client.config.prefix) !== 0) return;

  if (message.content.indexOf(client.config.prefix) !== 0){
    if (message.channel.name === 'general'){
      //message.channel.send("PING").catch(console.error);
      //await client.channels.cache.get('831619361230946345').send(message.content)
      let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
      let embed = new Discord.MessageEmbed();
          embed.setAuthor(message.author.tag, message.author.avatarURL())
          embed.setDescription(message.content)
          if (messageAttachment) embed.setImage(messageAttachment)
          //embed.setDescription('in '+ message.guild.channels.cache.get(message.channel.id).toString())
          embed.setFooter('Sent in #' + message.channel.name)
          .setTimestamp()
          embed.setColor(14680086)
      //await client.channels.cache.get('831619361230946345').send(embed)
      //minh channel
      await client.channels.cache.get('831635090047107112').send(embed)
    }
    return;
  }

  // Ignore everyone but me
  if (message.author.id !== client.config.ownerID) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};