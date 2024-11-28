// https://github.com/PrismarineJS/node-minecraft-protocol
const mc = require('minecraft-protocol');

const client = mc.createClient({
  host: "localhost",   // optional
  port: 25565,                 // set if you need a port that isn't 25565
  username: 'Bot',             // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
  // version: false,           // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // password: '12345678'      // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
});

client.on('playerChat', function (ev) {
  // Get the chat content, handling different message formats
  const content = ev.formattedMessage
    ? JSON.parse(ev.formattedMessage)
    : ev.unsignedContent
      ? JSON.parse(ev.unsignedContent)
      : ev.plainMessage

  // Don't echo our own messages
  if (ev.senderName === client.username) return

  client.chat(JSON.stringify(content))
})

client.on('error', function(err) {
  console.error(err)
  process.exit(1)
})

client.on('end', function() {
  console.log('Connection closed')
})