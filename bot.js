const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
});

client.on('message') , msg => {
              var prefix = "$" ;
   if(msg.content.startsWith(prefix + "msgcount")) {
msg.channel.fetchMessage()
  .then(messages => msg.channel.send(`Message Count
${messages.size} `))
  .catch(console.error);
  }
  })

client.login(process.env.BOT_TOKEN);
