import fs from "node:fs/promises";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

  let todoList = [];
    try {
        const data = await fs.readFile("todoList.json", "utf8");
        todoList = JSON.parse(data);
        console.log("Onceki Alisveris Listesi:", todoList);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.error("Dosya okunurken hata olustu:", error);
        }
    }

rl.question("Ne alalim? (cikmak icin exit yazin) ", async (answer) => {

    while (answer.toLowerCase() !== "exit") {
        todoList.push(answer);
        console.log("Alisveris Listesi:", todoList);
        await fs.writeFile("todoList.json", JSON.stringify(todoList, null, 2));
        answer = await new Promise((resolve) => {
            rl.question("Ne alalim? (cikmak icin exit yazin) ", resolve);
        });
    }

    rl.close();
    console.log("Gule gule!");
});