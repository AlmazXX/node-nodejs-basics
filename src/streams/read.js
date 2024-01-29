import fs from "fs";
import path from "path";
import os from "os";
import { Transform } from "stream";

const addEOL = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, Buffer.concat([chunk, Buffer.from(os.EOL)]));
  },
});

const read = async () => {
  const filePath = path.resolve("src", "streams", "files", "fileToRead.txt");
  fs.createReadStream(filePath).pipe(addEOL).pipe(process.stdout);
};

await read();
