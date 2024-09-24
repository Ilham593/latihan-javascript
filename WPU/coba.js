const fs = require('fs')
const readline =  require('readline')
const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('masukan nama anda', 'utf-8', (jawab){
  console.log('nama saya', jawab)
})