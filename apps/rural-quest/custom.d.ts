declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.mp4'

declare module '*.graphql' {
    import { DocumentNode } from 'graphql'
    const Schema: DocumentNode

    export = Schema
}
