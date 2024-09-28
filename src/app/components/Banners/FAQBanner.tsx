import { ReactElement } from 'react';
import countryList from '../../data/countryListData';
import CountryOptionCard from '../CountryOptionCard';
import PersonCard from '../PersonCard';
import TabsWithIcon from '../Tabs/TabsWithIcon';
import TryForFreeButton from '../Buttons/TryForFreeButton';
import FAQAnswer from '../FAQAnswer';
import FAQs from '@/app/data/faqData';

const FAQBanner = () => {


  return (
    <div className="flex md:min-h-[100vh] flex-col justify-center bg-black text-white">
      <div className="mb-4 text-3xl uppercase md:text-7xl text-center">
        FAQ
      </div>
      <div className="w-full divide-y rounded flex flex-col justify-center content-center flex-wrap">
        {FAQs.map((data, index) => {
          return (
            <div className='w-full sm:w-[60vw] px-6 mx-24' key={index}>
              <details className="p-4 group">
                <summary className="relative text-2xl cursor-pointer list-none pr-8 font-medium transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-300  [&::-webkit-details-marker]:hidden">
                  {data.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-200 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01"
                  >
                    <title id="title-ac01">Open icon</title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <div className="mt-4 text-white text-xl">
                  <FAQAnswer ans={data.ans} />
                </div>
              </details>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default FAQBanner;
