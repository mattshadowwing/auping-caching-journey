/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query Pokemon {\n  pokemon_v2_pokemon {\n    base_experience\n    height\n    id\n    is_default\n    name\n    order\n    pokemon_species_id\n    weight\n  }\n}": typeof types.PokemonDocument,
    "query PokemonSpecies {\n  pokemon_v2_pokemonspecies(limit: 100) {\n    id\n    name\n    base_happiness\n    capture_rate\n    is_legendary\n    is_mythical\n    evolution_chain_id\n    generation_id\n  }\n}": typeof types.PokemonSpeciesDocument,
};
const documents: Documents = {
    "query Pokemon {\n  pokemon_v2_pokemon {\n    base_experience\n    height\n    id\n    is_default\n    name\n    order\n    pokemon_species_id\n    weight\n  }\n}": types.PokemonDocument,
    "query PokemonSpecies {\n  pokemon_v2_pokemonspecies(limit: 100) {\n    id\n    name\n    base_happiness\n    capture_rate\n    is_legendary\n    is_mythical\n    evolution_chain_id\n    generation_id\n  }\n}": types.PokemonSpeciesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Pokemon {\n  pokemon_v2_pokemon {\n    base_experience\n    height\n    id\n    is_default\n    name\n    order\n    pokemon_species_id\n    weight\n  }\n}"): (typeof documents)["query Pokemon {\n  pokemon_v2_pokemon {\n    base_experience\n    height\n    id\n    is_default\n    name\n    order\n    pokemon_species_id\n    weight\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PokemonSpecies {\n  pokemon_v2_pokemonspecies(limit: 100) {\n    id\n    name\n    base_happiness\n    capture_rate\n    is_legendary\n    is_mythical\n    evolution_chain_id\n    generation_id\n  }\n}"): (typeof documents)["query PokemonSpecies {\n  pokemon_v2_pokemonspecies(limit: 100) {\n    id\n    name\n    base_happiness\n    capture_rate\n    is_legendary\n    is_mythical\n    evolution_chain_id\n    generation_id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;