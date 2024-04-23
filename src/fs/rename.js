import { promises as fsPromises } from "node:fs";

const rename = async () => {
  try {
    await fsPromises.rename(
      "./src/fs/files/wrongFilename.txt",
      "./src/fs/files/properFilename.md"
    );
  } catch (err) {
    console.log(err);
    throw new Error("FS operation failed");
  }
};

await rename();
