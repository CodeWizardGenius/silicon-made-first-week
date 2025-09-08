import fs from "node:fs/promises";

const data = await fs.readFile("package.json", "utf-8");

console.log(data);