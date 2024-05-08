import path from "node:path";
import { readFile } from "node:fs/promises";

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch (error) {
    console.error(error);
    throw new Error("FS operation failed");
  }
};

await read();
