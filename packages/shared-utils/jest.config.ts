import { Config } from 'jest'

const config: Config = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
}

export default config
