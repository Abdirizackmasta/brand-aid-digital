import Footer from "../components/footer/Footer"
import Pricing from "../components/pricing/Pricing"
import Services from "../components/services/Services"
import Team from "../components/team/Team"
import Values from "../components/values/Values"
import WhyUs from "../components/whyChoseUs/WhyUs"
import About from "../components/about/About"
import Hero from "../components/hero/Hero"

function Home() {
    return (
        <div>
            <Hero />
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
