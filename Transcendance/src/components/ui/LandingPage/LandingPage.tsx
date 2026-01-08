import AccessService from "./AccessService.tsx";
import HowItWorks from "./HowItWork.tsx";
import HeroSection from "./HeroSection.tsx";
import WhyUsSection from "./WhyUsSection";
import WhatPeopleSaying from "./WhatPeopleSaying.tsx";
import GetStartSection from "./GetStartSection.tsx";
import Footer from "./Footer.tsx";

function LandingPage() {
    return (<>
        <HeroSection />
        <WhyUsSection />
        <AccessService/>
        <HowItWorks/>
        <WhatPeopleSaying/>
        <GetStartSection/>
        <Footer/>
    </>)
}
export default LandingPage