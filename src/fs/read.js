import fs from "fs";
import path from "path";

const read = async () => {
  const targetFile = path.resolve("src", "fs", "files", "fileToRead.txt");

  if (!fs.existsSync(targetFile)) {
    throw Error("FS operation failed");
  }

  const fileContent = await fs.promises.readFile(targetFile, {
    encoding: "utf-8",
  });

  console.log(fileContent);
};

await read();
