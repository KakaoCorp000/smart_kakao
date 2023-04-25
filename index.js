const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);
const readline = require("readline");
const sendphonenumber = ''
const number = ''


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  client.messages
    .create({
      body: line,
      from: sendphonenumber,
      to: number
    })
  console.log(`[ SUCCESS ]`)
});

rl.on('close', () => {
  process.exit();
})

