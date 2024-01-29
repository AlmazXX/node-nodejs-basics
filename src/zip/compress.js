import fs from "fs";
import path from "path";
import zlib from "zlib";

const compress = async () => {
  const inputFilePath = path.resolve(
    "src",
    "zip",
    "files",
    "fileToCompress.txt"
  );
  const outputFilePath = path.resolve("src", "zip", "files", "archive.gz");

  const readStream = fs.createReadStream(inputFilePath);
  const gzipStream = zlib.createGzip();
  const writeStream = fs.createWriteStream(outputFilePath);

  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
