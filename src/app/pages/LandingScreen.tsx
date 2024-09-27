import NavbarSimple from '../components/Navbar';
import MainBanner from '../components/Banners/MainBanner';
import TryItYourselfBanner from '../components/Banners/TryItYourselfBanner';
import FeaturedInBanner from '../components/Banners/FeaturedInBanner';
import ListenAnywhereBanner from '../components/Banners/ListenAnywhereBanner';

const LandingScreen = () => {
  return (
    <>
      <NavbarSimple />
      <MainBanner />
      <TryItYourselfBanner />
      <FeaturedInBanner />
      <ListenAnywhereBanner />
    </>
  );
};

export default LandingScreen;
