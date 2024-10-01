import NytLogo from '../Logos/NytLogo';
import CbsLogo from '../Logos/CbsLogo';
import ForbesLogo from '../Logos/ForbesLogo';
import TimeLogo from '../Logos/TimeLogo';
import WallStLogo from '../Logos/WallStLogo';

const FeaturedInBanner = () => {
  const featuredInPublications = [
    <ForbesLogo className="h-[30px] fill-white" />,
    <CbsLogo className="h-[30px] fill-white" />,
    <TimeLogo className="h-[30px] fill-white" />,
    <NytLogo className="h-[30px] fill-white" />,
    <WallStLogo className="h-[30px] fill-white" />,
  ];

  return (
    <section className="bg-black text-white">
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-14">
        <div className="text-2xl text-slate-500">Featured In</div>
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
