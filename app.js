const express = require('express');
const bodyParser = require('body-parser')
const  PORT = 3000;
const { Botact } = require('botact')
const bot = new Botact({
  confirmation: "31e7993a",
  token: "7a550c238fc37c8762238b63c3fef90b4d2463393290a9a196cd5115c37beef4a4fd78cf757ad65bf2738"
})

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
/*app.post('/', (req, res) => {
const {body} = req;
switch(body.type) {
	case 'confirmation':
	res.end('31e7993a');
	break;

	case 'message_new':
	res.end('ok');
	break;
	default:
	res.end('31e7993a');
	break;
}
});*/
bot.command('start', ({ reply }) => {
  reply('This is start!')
})
app.post('/', bot.listen)
app.listen(PORT, () => console.log('Example app listening on port ', PORT));