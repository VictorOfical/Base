const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['9999999'] // no own
global.packname = '© sticker by 999999' // nama pack sticker
global.author = '999999'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})