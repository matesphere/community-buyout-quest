import Header from '../components/student/_header'
import Footer from '../components/student/_footer'

export const StudentLayout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)
