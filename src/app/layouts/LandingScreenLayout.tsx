import React from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
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
import Image from 'next/image';
import TryForFreeButton from '../components/Buttons/TryForFreeButton';

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
    <div className="w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none bg-black px-4 py-2 lg:px-8 lg:py-4">
        <div className="text-blue-gray-900 flex items-center justify-between p-6">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            <Image src={`/speechify.png`} width="180" height="180" alt="Speechify" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block">
                <span>Log In</span>
              </Button>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                <span>
                  <TryForFreeButton />
                </span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <TryForFreeButton />
            </Button>
          </div>
        </MobileNav>
      </Navbar>
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
  );
}
