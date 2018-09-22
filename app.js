const express = require('express');
const bodyParser = require('body-parser')
/*  const  PORT = 3000;  */ 
const { Botact } = require('botact')
const bot = new Botact({
  confirmation: "31e7993a",
  token: "7a550c238fc37c8762238b63c3fef90b4d2463393290a9a196cd5115c37beef4a4fd78cf757ad65bf2738"
})

const app = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
 app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
}); 

 bot.on(({ reply }) => {
  reply('напиши "дай"')
})



 bot.hears(/(дай|Дай)/, function (raspisanie) {
 var result;
 var d0 = new Date ().getTime (),
    d  = new Date (new Date ().getFullYear (), 0, 1),
    d1 = d.getTime (),
    dd = d.getDay (),
    re = Math.floor ((d0 - d1) / 8.64e7) + (dd ? dd - 1 : 6);
result = ('Неделя ' + ((Math.floor (re / 7) % 2) ? 'не' : '') + 'Четная');
 
 const date = new Date();
 const w = date.getDay();

 if (result == 'Неделя Четная') { 
	switch (w) {
	case 1:{
		raspisanie.reply('16:30-17:50 Э106 "Стратегии и современная модель управления в сфере денежно-кредитных отношений" Лекция Савдерова А.ф');
		raspisanie.reply('18:05-19:25 Э106 "Стратегии и современная модель управления в сфере денежно-кредитных отношений" Практика Савдерова А.ф');
		raspisanie.reply('19:40-21:00 Э106 "Стратегии и современная модель управления в сфере денежно-кредитных отношений" Практика Савдерова А.ф');
		break;
	}
	case 2:{
		raspisanie.reply('16:30-17:50 Э401 "Система государственных(муниципальных закупок) ФКС" Практика Алексеева О.Л.');
		raspisanie.reply('18:05-19:25 Э401 "Система государственных(муниципальных закупок) ФКС" Лекция Алексеева О.Л.');
		break;
	}
	case 3:{
		raspisanie.reply('18:05-19:25 302 "Государственный(муниципальный) финансовый контрольб надзор и аудит эффективности" Лекция Аркадьева О.Г');
		break;
	}
	case 4:{
		raspisanie.reply('Отдыхаем');
		break;
	}
	case 5:{
		raspisanie.reply('Отдыхаем');
		break;
	}
	case 6:{
		raspisanie.reply('Отдыхаем');
		break;
	}	
	default:{
		raspisanie.reply('НЕ хватало еще в Воскресенье учиться');
		break;
	}
 }
 } else {
	switch (w) {
	case 1:{
		raspisanie.reply('16:30-17:50 Э106 "Государственная(муниципальная)" долговая политика Лекция Алексеева О.Л.');
		raspisanie.reply('16:30-17:50 Э106 "Государственная(муниципальная)" долговая политика Практика Алексеева О.Л.');
		break;
	}
	case 2:{
		raspisanie.reply('16:30-17:50 Э401 "Система государственных(муниципальных закупок) ФКС" Практика Алексеева О.Л.');
		raspisanie.reply('18:05-19:25 Э401 "Государственный(муниципальный) финансовый контрольб надзор и аудит эффективности" Практика Аркадьева О.Г');
		break;
	}
	case 3:{
		raspisanie.reply('16:30-17:50 Э107 "Финансовый учет и финансовая отчетность" Практика Панферова Л.В.');
		raspisanie.reply('18:05-19:25 Э302 "Государственный(муниципальный) финансовый контрольб надзор и аудит эффективности" Лекция Аркадьева О.Г');
		break;
	}
	case 4:{
		raspisanie.reply('16:30-17:50 Э306 "Экономико-правовые отношения в бюджетной сфере" Лекция Ахметова В.');
		raspisanie.reply('18:05-19:25 Э306 "Экономико-правовые отношения в бюджетной сфере" Лекция Ахметова В.');
		break;
	}
	case 5:{
		raspisanie.reply('Отдыхаем');
		break;
	}
	case 6:{
		raspisanie.reply('8:20-9:40 Э301 "Межбюджетные отношения" Лекция Метелева О.В.');
		raspisanie.reply('9:55-11:15 Э301 "Межбюджетные отношения" Практика Метелева О.В.');
		break;
	}	
	default:{
		raspisanie.reply('НЕ хватало еще в Воскресенье учиться');
		break;
	}
 } 
 }

}) 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/', bot.listen)
 /* app.listen(PORT, () => console.log('Example app listening on port111 ', PORT));  */
 
