const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";
 
client.login('NTMzMzQ4MDU2MTYzMTU1OTc4.D3wdxQ.IjDIIGrpcpFqo3XjMVTiDcC1xvU');
 
client.on('message', message =>{
    if(message.content === "!!comment tu vas"){
        message.reply('bien et toi')
        console.log('répond à comment tu vas');
    }
});

client.on('message', message =>{
    if(message.content === "!!help"){
        message.reply('bonjour je suis en développement en se moment mais voici quand même mes commandes:                                    !!comment tu vas             et quand on dit bonne nuit je vous répond');
        console.log('commandes');
    }
});
 
 
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('557298752973701123').send(embed)
    
 });
 
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('557298752973701123').send(embed)
 
});

client.on('message', message =>{
    if(message.content === "bonne nuit"){
        message.channel.reply('bonne nuit a toi');
        console.log('répond à comment tu vas');
    }
});

client.on('ready',function () {     
    client.user.setGame('!!help').catch(console.error)
})
