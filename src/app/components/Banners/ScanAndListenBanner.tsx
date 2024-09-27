import countryList from "../../data/countryListData";
import CountryOptionCard from "../CountryOptionCard";
import PersonCard from "../PersonCard";
import TabsWithIcon from "../Tabs/TabsWithIcon";
import TryForFreeButton from "../Buttons/TryForFreeButton";

const ScanAndListenBanner = () => {
  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="grid grid-cols-12 min-h-[50vh] gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-4 md:content-end">
          <div className="flex flex-col justify-end gap-y-6 max-w-[350px]">
            <div className="uppercase">
              Scan & Listen
            </div>
            <div className="text-3xl">
              Use the app to snap a pic of any page and have Speechify read to you
            </div>
            <span>
              <TryForFreeButton />
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <video controls className='rounded-6 w-full h-full'>
            <source src="features-videos/phone-scan.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default ScanAndListenBanner;
