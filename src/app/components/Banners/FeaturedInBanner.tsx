import NytLogo from '../Logos/NytLogo';
import CbsLogo from '../Logos/CbsLogo';
import ForbesLogo from '../Logos/ForbesLogo';
import TimeLogo from '../Logos/TimeLogo';
import WallStLogo from '../Logos/WallStLogo';

const FeaturedInBanner = () => {
  const featuredInPublications = [
    <ForbesLogo key="fobes-logo" className="h-[30px] fill-white" />,
    <CbsLogo key="cbs-logo" className="h-[30px] fill-white" />,
    <TimeLogo key="time-logo" className="h-[30px] fill-white" />,
    <NytLogo key="nyt-logo" className="h-[30px] fill-white" />,
    <WallStLogo key="wall-st-logo" className="h-[30px] fill-white" />,
  ];

  return (
    <section className="bg-black text-white">
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-14">
        <div className="text-2xl text-[#808080]">Featured In</div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-9 gap-y-10">
          {featuredInPublications.map((data, index) => {
            return (
              <div key={index} className="flex justify-center text-white">
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInBanner;
