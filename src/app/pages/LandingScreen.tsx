import NavbarSimple from '../components/Navbar';
import MainBanner from '../components/Banners/MainBanner';
import TryItYourselfBanner from '../components/Banners/TryItYourselfBanner';
import FeaturedInBanner from '../components/Banners/FeaturedInBanner';
import TabsWithIcon from '../components/temp';

const LandingScreen = () => {
  return (
    <>
      <NavbarSimple />
      <MainBanner />
      <hr/>
      <TryItYourselfBanner />
      <FeaturedInBanner />
      <TabsWithIcon />
    </>
  );
};

export default LandingScreen;
