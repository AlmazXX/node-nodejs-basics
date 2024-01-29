import { createServer as createServerHttp } from "http";
import { release, version } from "os";
import path from "path";
import "./files/c.js";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const random = Math.random();
const require = createRequire(import.meta.url);

let unknownObject;

if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
