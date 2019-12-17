module.exports =  (client, member) => {
  member.send("Salut à toi !");
  const channel = client.channels.find(r => r.name === "bienvenue");
  channel.send(`${member} a rejoint le serveur de test!`);
  const role = member.guild.roles.find("id", "6656620399349596170");
  message.member.roles.add(role);
}