const parseEnv = () => {
  const envs = process.env;
  const targetEnvs = Object.keys(envs)
    .reduce(
      (acc, key) =>
        key.includes("RSS_") ? (acc.push(`${key}=${envs[key]}`), acc) : acc,
      []
    )
    .join("; ");
  console.log(targetEnvs);
};

parseEnv();
