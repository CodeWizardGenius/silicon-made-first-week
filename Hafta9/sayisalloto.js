import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

function askNumber() {
  if (numbers.length < 6) {
    rl.question(
      `Sayisal Loto icin ${6 - numbers.length} sayi girin (cikmak icin exit yazin): `,
      (answer) => {
        if (answer.toLowerCase() === "exit") {
          console.log("Oyun sonlandirildi.");
          rl.close();
          return;
        }
        const num = parseInt(answer);
        if (
          !isNaN(num) &&
          num >= 1 &&
          num <= 49 &&
          !numbers.includes(num)
        ) {
          numbers.push(num);
          console.log("Girdiginiz sayilar:", numbers);
        } else {
          console.log("Lutfen 1 ile 49 arasinda benzersiz bir sayi girin.");
        }
        askNumber();
      }
    );
  } else {
    // Rastgele loto sayilari üret
    const SayisalLoto = [...Array(49).keys()]
      .map((n) => n + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    console.log("\nKazanan sayilar:", SayisalLoto.join(", "));
    console.log("Sizin sayilariniz:", numbers.join(", "));

    // Tüm sayılar eşleşiyor mu kontrolü
    const kazandin = numbers.every(num => SayisalLoto.includes(num));
    if (kazandin) {
      console.log("Tebrikler! Tüm sayılar eşleşti, kazandınız!");
    } else {
      console.log("Maalesef, tüm sayılar eşleşmedi. Kazanamadınız.");
    }

    console.log("Gule gule!");
    rl.close();
  }
}

askNumber();
