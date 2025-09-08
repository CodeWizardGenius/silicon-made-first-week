import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

try {
  const res = await axios.get(API_URL + "42");
  const pokemon = res.data.name;
  console.log(pokemon);
} catch (error) {
  console.error("An error occurred while fetching the Pokémon:", error.message);
}