"use client";

import { useState, useEffect } from "react";
import { getPokemonSpeciesData } from "@/lib/actions";
import type { PokemonSpeciesQuery } from "@/gql/graphql";

type PokemonSpecies =
  PokemonSpeciesQuery["pokemon_v2_pokemonspecies"][number];

export function ClientPokemonListAction() {
  const [species, setSpecies] = useState<PokemonSpecies[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonSpeciesData().then((data) => {
      setSpecies(data ?? []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg text-gray-600 dark:text-gray-400">
          Loading client data via server action...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Client Component (via Server Action)
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Fetched {species.length} Pokémon Species via cached Server Action (1
        hour TTL)
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {species.map((sp) => (
          <div
            key={sp.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                #{sp.id}
              </span>
              <div className="flex gap-1">
                {sp.is_legendary && (
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    ⭐
                  </span>
                )}
                {sp.is_mythical && (
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    ✨
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 flex h-24 items-center justify-center rounded-md bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-700 dark:to-gray-600">
              <div className="text-4xl">
                {sp.is_legendary ? "👑" : sp.is_mythical ? "🌟" : "🔮"}
              </div>
            </div>

            <h3 className="mb-3 text-lg font-bold capitalize text-gray-900 dark:text-white">
              {sp.name}
            </h3>

            <div className="space-y-2 text-sm">
              {sp.base_happiness !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Happiness:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {sp.base_happiness}
                  </span>
                </div>
              )}
              {sp.capture_rate !== null && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Capture Rate:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {sp.capture_rate}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Gen:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {sp.generation_id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
