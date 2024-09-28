import countryList from "../../data/countryListData";
import CountryOptionCard from "../CountryOptionCard";
import PersonCard from "../PersonCard";
import TabsWithIcon from "../Tabs/TabsWithIcon";

const ListenAnywhereBanner = () => {
  return (
    <section className="bg-black text-white px-6">
      <div className="text-3xl md:text-7xl mb-4">
        LISTEN ANYWHERE
      </div>
      <hr/>
      <TabsWithIcon />
    </section>
  );
};

export default ListenAnywhereBanner;
