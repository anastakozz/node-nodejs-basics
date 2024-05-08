import { promises as fsPromises } from "node:fs";
import path from "node:path";

const create = async () => {
  const __dirname = import.meta.dirname;
  const content = "I am fresh and young";
  const filePath = path.join(__dirname, "files", "fresh.txt");

  try {
    await fsPromises.writeFile(filePath, content, { flag: "wx" });
  } catch (error) {
    console.error(error);
    throw new Error("FS operation failed");
  }
};

await create();
