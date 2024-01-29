import fs from "fs";
import path from "path";

const write = async () => {
  const filePath = path.resolve("src", "streams", "files", "fileToWrite.txt");
  process.stdin.pipe(fs.createWriteStream(filePath));
};

await write();
