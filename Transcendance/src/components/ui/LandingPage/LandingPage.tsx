import AccessService from "./AccessService.tsx";
import HeroSection from "./HeroSection.tsx";
import GetStartSection from "./GetStartSection.tsx";
import Footer from "./Footer.tsx";
import ProblemsSection from "./ProblemsSection.tsx";
import SolutionSection from "./SolutionSection.tsx";

function LandingPage() {
    return (<>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection/>
        <AccessService/>
        <GetStartSection/>
        <Footer/>
    </>)
}
export default LandingPage