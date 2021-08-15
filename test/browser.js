const secretKey = 'secret key'
const payload = 'Hello World!'

/*
const hmac = crypto.createHmac('sha256', secretKey)
hmac.update(payload)

console.log(hmac.digest('hex'))
*/
const bin = new TextEncoder().encode(payload);
const digest = await crypto.subtle.digest("SHA-256", bin);
console.log(new Uint8Array(digest));
