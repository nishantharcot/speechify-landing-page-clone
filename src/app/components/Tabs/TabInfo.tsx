import { TabInfoProps } from '../../data/tabInfoData';

const TabInfo = (tabInfoData: TabInfoProps) => {
  return (
    <section className="w-full bg-black pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="min-h-[40vh]">
          <div className="flex h-[100%] flex-col justify-around">
            <div className="hidden max-w-[300px] text-xl md:block">{tabInfoData.firstText}</div>
            <div className="mt-6 flex h-full w-full flex-col md:justify-between">
              <div>
                <button className="rounded-2x inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-5 font-medium tracking-wide text-black text-white shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none md:w-auto">
                  <span className="text-black">
                    {tabInfoData.buttonIcon}
                    <span className="pl-2">{tabInfoData.buttonText}</span>
                  </span>
                </button>
              </div>
              <div className="order-first my-4 w-full md:order-last">{tabInfoData.comments}</div>
            </div>
          </div>
        </div>
        <div className="relative left-[calc(-50vw+50%)] order-first w-[100vw] md:static md:order-last md:w-auto">
          <video autoPlay={true} muted loop className="h-full w-full rounded-[32px]">
            <source src={tabInfoData.bannerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default TabInfo;
