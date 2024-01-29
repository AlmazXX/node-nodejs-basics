import fs from "fs/promises";
import path from "path";

const create = async () => {
  try {
    await fs.writeFile(
      path.resolve("src", "fs", "files", "fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );
  } catch (error) {
    if (error.code === "EEXIST") {
      throw Error("FS operation failed");
    }
  }
};

await create();
