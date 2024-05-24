import { env } from "node:process";

const parseEnv = () => {
  const prefix = "RSS_";
  const filteredVariables = Object.keys(env)
    .filter((item) => item.startsWith(prefix))
    .map((item) => `${item}=${env[item]}`)
    .join("; ");
  console.log(filteredVariables);
};

parseEnv();
