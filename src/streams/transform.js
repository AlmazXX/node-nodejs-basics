import { Transform } from "stream";
import os from "os";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        Buffer.concat([
          Buffer.from(String(chunk).split("").reverse().join("")),
          Buffer.from(os.EOL),
        ])
      );
    },
  });

  process.stdin.pipe(reverseString).pipe(process.stdout);
};

await transform();
