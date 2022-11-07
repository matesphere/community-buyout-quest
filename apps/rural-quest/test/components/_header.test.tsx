import { getHeaderText } from '../../src/components/_header'

describe('Student Header', () => {
    test('returns correct stage text', () => {
        expect(getHeaderText('/student/team-hub')).toBe('Team Hub')
        expect(getHeaderText('/student/stage-5')).toBe('Stage 5')
    })
})
