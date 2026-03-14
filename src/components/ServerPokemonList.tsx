import { getClient } from "@/lib/ApolloClient";
import { PokemonDocument } from "@/gql/graphql";

export async function ServerPokemonList() {
  const { data } = await getClient().query({
    query: PokemonDocument,
  });

  // Slice to first 100 to simulate network delay with large dataset
  const pokemons = data?.pokemon_v2_pokemon.slice(0, 12);

  if (!pokemons) return null

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Server Component
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Fetched {pokemons.length} Pokémon via Server Component
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                #{pokemon.id}
              </span>
              {pokemon.is_default && (
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Default
                </span>
              )}
            </div>

            <div className="mb-4 flex h-24 items-center justify-center rounded-md bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
              <div className="text-4xl">🎮</div>
            </div>

            <h3 className="mb-3 text-lg font-bold capitalize text-gray-900 dark:text-white">
              {pokemon.name}
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Height:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {pokemon.height}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Weight:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {pokemon.weight}
                </span>
              </div>
              {pokemon.base_experience && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">XP:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {pokemon.base_experience}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
