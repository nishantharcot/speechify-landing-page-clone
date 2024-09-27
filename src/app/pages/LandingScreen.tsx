import NavbarSimple from '../components/Navbar';
import MainBanner from '../components/Banners/MainBanner';
import TryItYourselfBanner from '../components/Banners/TryItYourselfBanner';
import FeaturedInBanner from '../components/Banners/FeaturedInBanner';
import ListenAnywhereBanner from '../components/Banners/ListenAnywhereBanner';
import ListenToAnythingBanner from '../components/Banners/ListenToAnythingBanner';
import FeaturesBanner from '../components/Banners/FeaturesBanner';
import ScanAndListenBanner from '../components/Banners/ScanAndListenBanner';
import FAQBanner from '../components/Banners/FAQBanner';
import CEOBanner from '../components/Banners/CEOBanner';

const LandingScreen = () => {
  return (
    <div className='bg-black space-y-12'>
      <NavbarSimple />
      <MainBanner />
      <TryItYourselfBanner />
      <FeaturedInBanner />
      <ListenAnywhereBanner />
      <ListenToAnythingBanner />
      <FeaturesBanner />
      <ScanAndListenBanner />
      <CEOBanner />
      <FAQBanner />
    </div>
  );
};

export default LandingScreen;
