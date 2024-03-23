import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemon";

interface PokemonState {
  [key: string]: SimplePokemon;
}

const getInitalState = (): PokemonState => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonState = { ...getInitalState() };

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      if (!!state[pokemon.id]) {
        delete state[pokemon.id];
        return;
      }
      state[pokemon.id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
