const VkBot = require('node-vk-bot-api')
const Scene = require('node-vk-bot-api/lib/scene')
const Session = require('node-vk-bot-api/lib/session')
const Stage = require('node-vk-bot-api/lib/stage')
const TOKEN = "7a550c238fc37c8762238b63c3fef90b4d2463393290a9a196cd5115c37beef4a4fd78cf757ad65bf2738"
const GROUP_ID = "170925362"
 
const bot = new VkBot({
  token: process.env.TOKEN,
  group_id: process.env.GROUP_ID,
})
const scene = new Scene('meet',
  (ctx) => {
    ctx.scene.next()
    ctx.reply('How old are you?')
  },
  (ctx) => {
    ctx.session.age = +ctx.message.text
 
    ctx.scene.next()
    ctx.reply('What is your name?')
  },
  (ctx) => {
    ctx.session.name = ctx.message.text
 
    ctx.scene.leave()
    ctx.reply(`Nice to meet you, ${ctx.session.name} (${ctx.session.age} years old)`)
  }
)
const session = new Session()
const stage = new Stage(scene)
 
bot.use(session.middleware())
bot.use(stage.middleware())
 
bot.command('/meet', (ctx) => {
  ctx.scene.enter('meet')
})
 
bot.startPolling()