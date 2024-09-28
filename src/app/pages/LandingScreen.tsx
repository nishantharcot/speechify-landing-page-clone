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
import Footer from '../components/Footer';
import ReviewBanner from '../components/Banners/ReviewBanner';

const LandingScreen = () => {
  return (
    <div className="space-y-12 bg-black">
      <NavbarSimple />
      <MainBanner />
      <TryItYourselfBanner />
      <FeaturedInBanner />
      <ListenAnywhereBanner />
      <ListenToAnythingBanner />
      <FeaturesBanner />
      <ScanAndListenBanner />
      <ReviewBanner />
      <CEOBanner />
      <FAQBanner />
      <Footer />
    </div>
  );
};

export default LandingScreen;
