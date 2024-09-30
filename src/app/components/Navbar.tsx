import React from 'react';
import Image from 'next/image';
import TryForFreeButton from './Buttons/TryForFreeButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const midNavItems = ['Text to Speech', 'Creators', 'Developers', 'Solutions', 'About'];

  return (
    <div className="fixed sticky inset-x-0 top-0 z-50 font-ABCDiatype">
      <nav className="w-full bg-black">
        <div className="mx-auto w-full px-6 lg:max-w-[1600px]">
          <div className="flex w-full items-center justify-between py-2 text-white">
            <div className="flex items-center gap-4">
              <Image src="/speechify.png" alt="speechify-logo" width={150} height={150} />
            </div>
            <div className="hidden gap-6 px-6 md:flex">
              <div className="flex gap-4">
                {midNavItems.map((data, index) => {
                  return (
                    <div key={index} className="text-sm">
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="z-10 hidden items-center gap-4 md:flex">
              <div className="text-sm">Log In</div>
              <div className="rounded-full">
                <TryForFreeButton />
              </div>
            </div>
            <div className="z-10 flex items-center gap-4 md:hidden">
              <div>
                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded rounded-lg bg-white px-2 font-medium tracking-wide text-black text-white shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none">
                  <span className="text-sm text-black">Download Now</span>
                </button>
              </div>
              <div className="text-sm">
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
