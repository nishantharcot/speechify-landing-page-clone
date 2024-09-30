import React from 'react';
import { Typography } from '@material-tailwind/react';
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
import StickyNavbar from '../components/Navbar';

export default function LandingScreenLayout() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Text to Speech
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Creators
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Developers
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Solutions
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto w-full px-4 lg:max-w-[1600px]">
      <div>
        <StickyNavbar />
        <div className="space-y-12 bg-black pt-12">
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
      </div>
    </div>
  );
}
