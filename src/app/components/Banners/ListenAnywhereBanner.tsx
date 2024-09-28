import countryList from '../../data/countryListData';
import CountryOptionCard from '../CountryOptionCard';
import PersonCard from '../PersonCard';
import TabsWithIcon from '../Tabs/TabsWithIcon';

const ListenAnywhereBanner = () => {
  return (
    <section className="bg-black px-6 text-white">
      <div className="mb-4 text-3xl md:text-7xl">LISTEN ANYWHERE</div>
      <hr />
      <TabsWithIcon />
    </section>
  );
};

export default ListenAnywhereBanner;
