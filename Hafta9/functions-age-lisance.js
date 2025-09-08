import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Kac Yasindaniz   ? ", function(ageString) {
    const age = parseInt(ageString, 10);
    isEhliyet(age);
});

function isEhliyet(age) {
    if (isNaN(age) || age <= 0) {
        console.log("Lütfen geçerli bir yaş giriniz.");
    } else if (age < 18) {
        console.log("Ehiliyet alamazsın");
    } else {
        console.log("Ehliyet alabilirsin");
    }
    rl.close();
}

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});