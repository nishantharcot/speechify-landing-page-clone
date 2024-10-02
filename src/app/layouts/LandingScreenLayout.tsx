import React from 'react';
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
  return (
    <div className="mx-auto w-full px-4 lg:max-w-[1600px]">
      <div>
        <StickyNavbar />
        <div className="space-y-6 bg-black pt-12">
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
