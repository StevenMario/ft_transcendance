import AccessService from "./AccessService.tsx";
import HowItWorks from "./HowItWork.tsx";
import HeroSection from "./HeroSection.tsx";
import WhyUsSection from "./WhyUsSection";
import WhatPeopleSaying from "./WhatPeopleSaying.tsx";
import GetStartSection from "./GetStartSection.tsx";

function LandingPage() {
    return (<>
        <HeroSection />
        <WhyUsSection />
        <AccessService/>
        <HowItWorks/>
        <WhatPeopleSaying/>
        <GetStartSection/>
    </>)
}
export default LandingPage