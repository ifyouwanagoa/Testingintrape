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

client.login(process.env.BOT_TOKEN);
