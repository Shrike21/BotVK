const VkBot = require('node-vk-bot-api')
 
const bot = new VkBot({
  token: "7a550c238fc37c8762238b63c3fef90b4d2463393290a9a196cd5115c37beef4a4fd78cf757ad65bf2738",
  group_id: "170925362"
})
 
bot.command('/start', (ctx) => {
  ctx.reply('Hello!')
})
 
bot.startPolling()