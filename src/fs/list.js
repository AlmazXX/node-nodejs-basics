import fs from "fs";
import path from "path";

const list = async () => {
  const targetDir = path.resolve("src", "fs", "files");

  if (!fs.existsSync(targetDir)) {
    throw Error("FS operation failed");
  }

  const filenames = await fs.promises.readdir(targetDir);

  console.log(filenames);
};

await list();
