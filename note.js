import fs from "node:fs/promises";
const text = "starting........" + new Date().toISOString();
await fs.writeFile("dairy.txt", text, "utf8");
const data = await fs.readFile("dairy.txt", "utf8");
console.log("file a ase.....");
console.log(data);