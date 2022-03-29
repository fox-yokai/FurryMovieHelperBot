const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

const discordBotToken = process.env['TOKEN']


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
} )

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

client.login(discordBotToken)

