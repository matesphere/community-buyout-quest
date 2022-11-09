import Header from '../components/tutor/_header'
import Footer from '../components/tutor/_footer'

export const TutorLayout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)
