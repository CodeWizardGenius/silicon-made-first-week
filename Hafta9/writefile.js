import fs from "node:fs/promises";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const user = {
    name: "John Doe",
    age: 30
};

const data = await fs.readFile("user.json", "utf-8");
if (data) {
    console.log ("File already exists.");
    rl.question("Do you want to overwrite it? (yes/no) ", async function(answer) {
        if (answer.toLowerCase() === "yes") {
            await fs.writeFile("user.json", JSON.stringify(user, null, 2), "utf-8");
            console.log("File overwritten.");
        } else {
            console.log("File not overwritten.");
        }
        rl.close();
    });
}else {
    await fs.writeFile("user.json", JSON.stringify(user, null, 2), "utf-8");
    console.log("File written.");
    rl.close();
}