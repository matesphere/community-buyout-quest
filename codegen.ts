import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: [
        {
            'https://data.community-buyout.quest/v1/graphql': {
                headers: {
                    'X-Hasura-Access-Key': 'community-land',
                },
            },
        },
    ],
    documents: ['packages/shared-data/gql'],
    generates: {
        './packages/shared-data/gql/types/baseTypes.ts': {
            plugins: ['typescript'],
        },
        './packages/shared-data/gql/types': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.generated.ts',
                baseTypesPath: 'baseTypes.ts',
                folder: 'types',
            },
            plugins: ['typescript-operations'],
            config: {
                skipTypename: true,
            },
        },
    },
}
export default config
