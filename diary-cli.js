import fs from "node:fs/promises";;

const command = process.argv[2];
const message = process.argv.slice(3).join(" ");
const file = "my-diary.txt";

async function addNote(note) {
  const line=`${new Date().toLocaleString()} - ${note}\n`;
  await fs.appendFile(file, line, "utf8");
  console.log(`added note: ${note}`);
}

