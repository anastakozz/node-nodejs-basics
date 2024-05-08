import { promises as fsPromises } from "node:fs";
import path from "node:path";

const rename = async () => {
  const __dirname = import.meta.dirname;
  const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
  const newPath = path.join(__dirname, "files", "properFilename.md");
  try {
    await fsPromises.rename(oldPath, newPath);
  } catch (err) {
    console.log(err);
    throw new Error("FS operation failed");
  }
};

await rename();
