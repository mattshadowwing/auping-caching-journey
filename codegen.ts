import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://beta.pokeapi.co/graphql/v1beta',
    documents: ['src/operations/**/*.graphql'],
    generates: {
        './src/gql/': {
            preset: 'client',
        }
    }
}
export default config