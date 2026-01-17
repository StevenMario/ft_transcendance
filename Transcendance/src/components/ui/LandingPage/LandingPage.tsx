import AccessService from "./AccessService.tsx";
import HowItWorks from "./HowItWork.tsx";
import HeroSection from "./HeroSection.tsx";
import WhatPeopleSaying from "./WhatPeopleSaying.tsx";
import GetStartSection from "./GetStartSection.tsx";
import Footer from "./Footer.tsx";
import ProblemsSection from "./ProblemsSection.tsx";

function LandingPage() {
    return (<>
        <HeroSection />
        <ProblemsSection />
        <AccessService/>
        <HowItWorks/>
        <WhatPeopleSaying/>
        <GetStartSection/>
        <Footer/>
    </>)
}
export default LandingPage