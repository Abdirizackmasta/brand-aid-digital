import Footer from "../components/footer/Footer"
import Pricing from "../components/pricing/Pricing"
import Services from "../components/services/Services"
import Team from "../components/team/Team"
import Values from "../components/values/Values"
import WhyUs from "../components/whyChoseUs/WhyUs"
import About from "../components/about/About"
import Nav from "../components/nav/Nav"

function Home() {
    return (
        <div>
            <Nav />
            <About />
            <Team />
            <Values />
            <Services />
            <Pricing />
            <WhyUs />
            <Footer />
        </div>
    )
}

export default Home
