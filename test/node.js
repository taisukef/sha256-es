const crypto = require('crypto')

const secretKey = 'secret key'
const payload = 'Hello World!'

//const hmac = crypto.createHmac('sha256', payload)
//const hmac = crypto.createHmac('sha256', new TextEncoder().encode(payload));
const hmac = crypto.createHmac('sha256', secretKey)
hmac.update(payload)

//console.log(hmac.digest('hex'))
console.log(new Uint8Array(hmac.digest()));

