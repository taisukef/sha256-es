import { SHA256 } from "./SHA256.js";
console.log(SHA256);

const mes = new TextEncoder().encode("こんにちは");
const bin = SHA256.digest(mes);
console.log(bin);
const bin2 = SHA256.x2(mes);
console.log(bin2);
