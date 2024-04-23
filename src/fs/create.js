import { promises as fsPromises } from "node:fs";

const create = async () => {
  const content = "I am fresh and young";
  const filePath = "./src/fs/files/fresh.txt";

  try {
    await fsPromises.writeFile(filePath, content, { flag: "wx" });
  } catch (error) {
    console.error(error);
    throw new Error("FS operation failed");
  }
};

await create();
