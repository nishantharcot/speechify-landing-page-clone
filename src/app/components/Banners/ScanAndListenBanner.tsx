const ScanAndListenBanner = () => {
  return (
    <section className="bg-black px-6 py-12 text-white">
      <div className="grid min-h-[50vh] grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-4 md:content-end">
          <div className="flex max-w-[350px] flex-col justify-end gap-y-6">
            <div className="uppercase">Scan & Listen</div>
            <div className="text-xl md:text-3xl">
              Use the app to snap a pic of any page and have Speechify read to you
            </div>
            <span>
              <button className="rounded-2xl bg-white px-6 py-4 font-ABCDiatype text-lg text-black">
                Try For Free
              </button>
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <video controls className="h-full w-full rounded-3xl">
            <source src="features-videos/phone-scan.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ScanAndListenBanner;
