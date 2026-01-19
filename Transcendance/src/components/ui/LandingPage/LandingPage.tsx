import AccessService from "./AccessService.tsx";
import HeroSection from "./HeroSection.tsx";
import WhatPeopleSaying from "./WhatPeopleSaying.tsx";
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
        <WhatPeopleSaying/>
        <GetStartSection/>
        <Footer/>
    </>)
}
export default LandingPage