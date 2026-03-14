"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { ApolloProvider } from "@apollo/client/react";
import { PropsWithChildren } from "react";
import { HttpLink } from "@apollo/client";

const makeClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://beta.pokeapi.co/graphql/v1beta",
    }),
    cache: new InMemoryCache(),
    // Enable client-side caching
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-first",
      },
    },
  });
};

let client: ApolloClient | null;

function getClient() {
  if (!client || typeof window === "undefined") {
    client = makeClient();
  }
  return client;
}

export function ApolloWrapper({ children }: PropsWithChildren) {
  return <ApolloProvider client={getClient()}>{children}</ApolloProvider>;
}
