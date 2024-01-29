import fs from "fs";
import path from "path";

const remove = async () => {
  const targetFilename = path.resolve("src", "fs", "files", "fileToRemove.txt");

  if (!fs.existsSync(targetFilename)) {
    throw Error("FS operation failed");
  }

  await fs.promises.rm(targetFilename);
};

await remove();
