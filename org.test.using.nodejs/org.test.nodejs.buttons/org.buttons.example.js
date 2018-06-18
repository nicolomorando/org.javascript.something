// Morando Nicolò
// Simple telegram bot with buttons using 'node-telegram-bot-api'.

var Bot = require('node-telegram-bot-api')

var bot = new Bot(config.telegram.token, { polling: true });

bot.onText(/\/start/, (msg, match) => {	
  const chatId = msg.chat.id;
  const text = "DaDombToms";
  bot.sendMessage(msg.chat.id, "start section", {
		"reply_markup": {
		"keyboard": [["1", "2"], ["3"], ["4"]]
	}
});
});
// END.

