import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((result) => result.json());
  const pokemons = data.results.map((result) => {
    return {
      id: result.url.split("/").at(-2)!,
      name: result.name,
    };
  });
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small className="text-blue-500">estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
