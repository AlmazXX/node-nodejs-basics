import fs from "fs";
import path from "path";
import zlib from "zlib";

const decompress = async () => {
  const inputFilePath = path.resolve("src", "zip", "files", "archive.gz");
  const outputFilePath = path.resolve(
    "src",
    "zip",
    "files",
    "fileToCompress.txt"
  );

  const readStream = fs.createReadStream(inputFilePath);
  const gunzipStream = zlib.createGunzip();
  const writeStream = fs.createWriteStream(outputFilePath);

  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
