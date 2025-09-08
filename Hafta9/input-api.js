import axios from "axios";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function sor() {
    rl.question("Kacinci Pokemonu gormek istersin ? ", async function (pokemonNumberString) {
        const pokemonNumber = parseInt(pokemonNumberString, 10);
        if (isNaN(pokemonNumber) || pokemonNumber <= 0 || pokemonNumberString.toLowerCase() === "exit") {
            if (pokemonNumberString.toLowerCase() === "exit") {
                console.log("Çıkış yapılıyor...");
                rl.close();
                return;
            } else if (isNaN(pokemonNumber) || pokemonNumber <= 0) {
                console.log("Lütfen geçerli bir sayı giriniz.");
                sor();
            } 
        }

        const API_URL = "https://pokeapi.co/api/v2/pokemon/";
        try {
            const res = await axios.get(API_URL + pokemonNumber);
            const pokemon = res.data.name;
            console.log(`Pokemon adı: ${pokemon}`);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.error(`Hata: ${pokemonNumber} numaralı Pokémon bulunamadı.`);
            } else {
                console.error("Pokémon getirilirken bir hata oluştu:", error.message);
            }
        } finally {
            sor();
        }
    })
};

sor();
