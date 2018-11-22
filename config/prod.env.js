'use strict'
module.exports = {
  NODE_ENV: '"production"',
  SERVER_URL: '"https://editcuts.herokuapp.com"',
  PORT: '"' + process.env.PORT + '"',
}

console.log('This should print out the port')
console.log(process.env.PORT)