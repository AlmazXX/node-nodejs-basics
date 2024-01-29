import fs from "fs";
import path from "path";

const copy = async () => {
  const srcDir = path.resolve("src", "fs", "files");
  const destDir = path.resolve("src", "fs", "files_copy");

  if (fs.existsSync(destDir) || !fs.existsSync(srcDir)) {
    throw Error("FS operation failed");
  }

  await fs.promises.mkdir(destDir);

  const srcFilenames = await fs.promises.readdir(srcDir);

  srcFilenames.forEach(async (filename) => {
    await fs.promises.copyFile(
      path.join(srcDir, filename),
      path.join(destDir, filename)
    );
  });
};

await copy();
