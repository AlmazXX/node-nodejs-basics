import fs from "fs";
import path from "path";

const rename = async () => {
  const originalFilename = path.resolve(
    "src",
    "fs",
    "files",
    "wrongFilename.txt"
  );
  const targetFilename = path.resolve(
    "src",
    "fs",
    "files",
    "properFilename.md"
  );

  if (fs.existsSync(targetFilename) || !fs.existsSync(originalFilename)) {
    throw Error("FS operation failed");
  }

  await fs.promises.rename(originalFilename, targetFilename);
};

await rename();
