import crypto from "crypto";
import fs from "fs";
import path from "path";

const calculateHash = async () => {
  const filePath = path.resolve(
    "src",
    "hash",
    "files",
    "fileToCalculateHashFor.txt"
  );
  const hash = crypto.createHash("sha256");
  const readableStream = fs.createReadStream(filePath);

  readableStream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
