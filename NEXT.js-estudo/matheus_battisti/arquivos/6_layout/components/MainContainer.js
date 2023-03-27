import Navbar from  './Navbar'
import Footer from './Footer'

export default function MainContainer({children}) {
    return (
        <>
        <Navbar/>
        <div>{children}</div>
        <Footer />
        </>
    )
}