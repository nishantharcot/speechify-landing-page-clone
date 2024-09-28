import countryList from '../../data/countryListData';
import CountryOptionCard from '../CountryOptionCard';
import PersonCard from '../PersonCard';
import TabsWithIcon from '../Tabs/TabsWithIcon';
import TryForFreeButton from '../Buttons/TryForFreeButton';

const ListenToAnythingBanner = () => {
  return (
      <div className='flex flex-col justify-center text-center md:min-h-[100vh] bg-black text-white'>
        <div className="mb-4 text-3xl uppercase md:text-7xl">
          Listen To Anything
        </div>
        <span>
          <TryForFreeButton />
        </span>
      </div>
  );
};

export default ListenToAnythingBanner;
