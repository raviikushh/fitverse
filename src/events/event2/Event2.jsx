import Navbar from "../event1/Navbar"
import BlurText from "../../components/BlurText"
import Contact from "../event1/Contact"
import Footer from "../../pages/Footer"

const event2 = () => {
    // Event 2
    return (
        <div>
            <Navbar />
            <body>
            <div className="hero py-12 md:py-24 flex justify-center p-4 md:px-32 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white font-semibold ">
                <BlurText
                    text="Coming Soon..."
                    delay={170}
                    animateBy="words"
                    direction="top"
                    className="text-6xl  font-semibold text-green-100 "
                />
                </div>
                <Contact/>
                <Footer/>
            </body>
        </div>
    )
}

export default event2