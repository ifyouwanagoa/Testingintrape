const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', message => {
     if (message.author.bot) return;
	 if(message.content == "$type"){
  message.channel.startTyping();
  }
  });

client.on('message', message => {
     if (message.author.bot) return;
	 if(message.content == "$type"){
  message.channel.stopTyping();
  }
  });

client.on('message' , message => {
    var prefix = "$";
   if(message.content.startsWith(prefix + "msgcount")) {
message.channel.fetchMessages()
	.then(messages => message.channel.send(`Message Count
${messages.size} `))
  .catch(console.error);
  }
  })

client.on("message", message => {
    var prefix = "$";
    if (message.content.startsWith(prefix + "voice#bc")) {
        const broadcast = client.createVoiceBroadcast();
        broadcast.playFile('Untitled223');
        for (const connection of client.voiceConnections.values())
{
                  connection.playBroadcast(broadcast);
             }
                              }
                              });

client.login(process.env.BOT_TOKEN);
