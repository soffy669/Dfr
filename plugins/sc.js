let handler = async m => m.reply(`
Bot Ini Mengunakan Sc : 
https://github.com/Ervan2525/sesceh-bot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler
