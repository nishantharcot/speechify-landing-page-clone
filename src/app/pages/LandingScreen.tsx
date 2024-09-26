import NavbarSimple from '../components/Navbar';
import MainBanner from '../components/MainBanner';
import TryItYourselfBanner from '../components/TryItYourselfBanner';

const LandingScreen = () => {
  return (
    <>
      <NavbarSimple />
      <MainBanner />
      <hr/>
      <TryItYourselfBanner />
    </>
  );
};

export default LandingScreen;
