import countryList from '../../data/countryListData';
import CountryOptionCard from '../CountryOptionCard';
import PersonCard from '../PersonCard';
import TabsWithIcon from '../Tabs/TabsWithIcon';
import TryForFreeButton from '../Buttons/TryForFreeButton';
import Image from 'next/image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const CEOBanner = () => {
  return (
    <section className="bg-black px-6 py-12 text-white">
      <div className="grid min-h-[50vh] grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-3">
          <div className="flex md:justify-center">
            <Image src="/Cliff.webp" alt="Cliff-Photo" width={200} height={200} />
          </div>
        </div>
        <div className="col-span-12 text-xl md:col-span-6">
          <div className="flex">
            <PlayCircleIcon fontSize="large" />
            <div className="pl-4">
              Hi, I'm CliffWeitzman, founder of Speechify. <br /> <br /> I'm also dyslexic. <br />{' '}
              <br /> Growingup, my dad would readme HarryPotter because I couldn't do it myself. He
              was my hero. <br /> <br /> But without reading, I couldn't become the person I wanted
              to be. So, I taught myself to code and created Speechify to read books to me. <br />{' '}
              <br /> Today, Speechify helps over 30 million people read 2x faster, remember more &
              save time <br /> <br />
              <Image src="/cliff-signature.webp" alt="Cliff-Photo" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOBanner;
