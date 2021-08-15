# sha256-es

JavaScript ES module to compute the SHA256 of strings or bytes for browser and Deno.

## Usage

There are two methods, one for computing the hash of the input, and one for double-hashing it:

```js
import { SHA256 } from "https://taisukef.github.io/sha256-es/SHA256.js";

const mes = new TextEncoder().encode("Hello!");
const bin = SHA256.digest(mes);
console.log(bin);

const bin2 = SHA256.x2(mes);
console.log(bin2);
```

# Credits

Most of the code from CryptoJS https://code.google.com/p/crypto-js/

# License

(MIT License)

Copyright 2013, JP Richardson  <jprichardson@gmail.com>
