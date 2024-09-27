import * as TelegramBot from 'node-telegram-bot-api';

const TELEGRAM_BOT_TOKEN = '8135994721:AAGHNkh2acM_QLfvdcAnx6w-biB-vvhIBkg';
const WEB_APP_URL = 'https://wecastle.vercel.app'; 

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {
    polling: {
        autoStart: true,
        interval: 1000,
        params: {
            timeout: 10,
        },
    },
});

bot.on("polling_error", (error) => {
    console.error("Polling error:", error);
    console.error('Error stack:', error.stack);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Click the button below to play the game:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Play Game', web_app: { url: WEB_APP_URL } }],
            ],
        },
    });
});

console.log('Telegram bot is running...');
