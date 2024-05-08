import path from "node:path";
import { promises as fsPromises } from "node:fs";

const list = async () => {
  const __dirname = import.meta.dirname;
  const folderPath = path.join(__dirname, "files");

  try {
    if (!fsPromises.access(folderPath)) {
      throw new Error("FS operation failed");
    }
    const files = await fsPromises.readdir(folderPath);
    files.forEach((file) => console.log(file));
  } catch (error) {
    console.log(error);
  }
};

await list();
