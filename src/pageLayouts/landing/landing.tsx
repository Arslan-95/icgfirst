import React from 'react';
import Main from './ui/main/main';
import Features from './ui/features/features';
import Benefits from './ui/benefits/benefits';
import AboutUs from './ui/about-us/about-us';
import OurPartners from './ui/our-partners/our-partners';
import SystemCapabilities from './ui/system-capabilities/system-capabilities';

const LandingPage = () => {
  return (
    <div>
      <Main />
      <Features />
      {/* <Benefits /> */}
      <AboutUs />
      <OurPartners />
      <SystemCapabilities />
    </div>
  );
};

export default LandingPage;
