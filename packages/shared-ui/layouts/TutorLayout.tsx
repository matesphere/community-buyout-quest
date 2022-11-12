import { TutorHeader } from '../components/tutor/_header'
import { TutorFooter } from '../components/tutor/_footer'

export const TutorLayout = ({ children }) => (
    <>
        <TutorHeader />
        {children}
        <TutorFooter />
    </>
)
