import { promises as fsPromises } from "node:fs";

const remove = async () => {
  try {
    await fsPromises.unlink("./src/fs/files/fileToRemove.txt");
  } catch (err) {
    console.log(err);
    throw new Error("FS operation failed");
  }
};

await remove();
