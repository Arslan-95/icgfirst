import React from 'react';
import Main from './ui/main/main';
import Features from './ui/features/features';
import Benefits from './ui/benefits/benefits';
import AboutUs from './ui/about-us/about-us';
import OurPartners from './ui/our-partners/our-partners';
import SystemCapabilities from './ui/system-capabilities/system-capabilities';
import Process from './ui/process/process';
import Portfolio from './ui/portfolio/portfolio';
import FormScreen from './ui/form-screen/form-screen';

const LandingPage = () => {
  return (
    <div>
      <Main />
      <Features />
      <AboutUs />
      <OurPartners />
      <SystemCapabilities />
      <Process />
      <Portfolio />
      <Benefits />
      <FormScreen />
    </div>
  );
};

export default LandingPage;
