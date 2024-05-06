import { promises as fsPromises } from "node:fs";
import path from "node:path";

const remove = async () => {
  const dirname = import.meta.dirname;
  try {
    await fsPromises.unlink(path.join(dirname, "files", "fileToRemove.txt"));
  } catch (err) {
    console.log(err);
    throw new Error("FS operation failed");
  }
};

await remove();
