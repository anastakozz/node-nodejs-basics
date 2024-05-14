import { promises as fsPromises, mkdir } from "node:fs";
import path from "node:path";

const copy = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = path.join(__dirname, "files");
  const destinationPath = path.join(__dirname, "files_copy");

  const copyWithContents = async (source, destination) => {
    const files = await fsPromises.readdir(source);

    files.forEach(async (file) => {
      const stat = await fsPromises.lstat(path.join(source, file));

      if (stat.isDirectory()) {
        await fsPromises.mkdir(path.join(destination, file));
        await copyWithContents(
          path.join(source, file),
          path.join(destination, file)
        );
      }

      if (stat.isFile()) {
        await fsPromises.copyFile(
          path.join(source, file),
          path.join(destination, file)
        );
      }
    });
  };

  try {
    if (!fsPromises.access(sourcePath)) {
      throw new Error("FS operation failed");
    }

    await fsPromises.mkdir(destinationPath);
    copyWithContents(sourcePath, destinationPath);
  } catch (error) {
    console.error(error);
    throw new Error("FS operation failed");
  }
};

await copy();
