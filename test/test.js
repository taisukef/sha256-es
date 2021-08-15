import { SHA256 } from "../SHA256.js";
//console.log(SHA256);

const payload = 'Hello World!';
const mes = new TextEncoder().encode(payload);
const bin = SHA256.digest(mes);
console.log(bin);
const bin2 = SHA256.x2(mes);
console.log("x2", bin2);
