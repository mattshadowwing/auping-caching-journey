"use server";

import { getClient } from "@/lib/ApolloClient";
import { PokemonDocument, PokemonSpeciesDocument } from "@/gql/graphql";

async function fetchPokemonDataCached() {
  const { data } = await getClient().query({
    query: PokemonDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: 60 * 60 * 24, // Cache for 24 hours
        }
      }
    }
  });

  return data?.pokemon_v2_pokemon.slice(0, 12);
}

async function fetchPokemonSpeciesDataCached() {
  const { data } = await getClient().query({
    query: PokemonSpeciesDocument,
    context: {
      fetchOptions: {
        next: {
          revalidate: 60 * 60 * 24, // Cache for 24 hours
        }
      }
    }
  });

  return data?.pokemon_v2_pokemonspecies.slice(0, 12);
}

export async function getPokemonData() {
  return await fetchPokemonDataCached();
}

export async function getPokemonSpeciesData() {
  return await fetchPokemonSpeciesDataCached();
}
