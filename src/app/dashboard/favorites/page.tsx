import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-blue-500">global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
