const bedrock = require('bedrock-protocol')

try{
    const server = bedrock.createServer({
        host: '0.0.0.0',        // optional
        port: 19132,            // optional
        version: '1.19.80',    // The server version
        motd: {                 // The message of the day
          motd: 'Funtime Server',
          levelName: 'Wonderland'
        }
      })
      server.on('error', err => {
        console.error(err)
      })
      
      server.on('connect', client => {
          console.log('server connected')
        client.on('join', () => { // The client has joined the server.
          const d = new Date()  // Once client is in the server, send a colorful kick message
          client.disconnect(`Good ${d.getHours() < 12 ? '§emorning§r' : '§3afternoon§r'} :)\n\nMy time is ${d.toLocaleString()} !`)
        })
      })
      
}
catch(err){
    console.error(err)
}
