import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.slice(2);
  const result = args
    .map((item, index) =>
      !(index % 2) ? item.replace("--", "") + " is" : item + ","
    )
    .join(" ");
  console.log(result.substring(0, result.length - 1));
};

parseArgs();
