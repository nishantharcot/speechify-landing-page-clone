import { ReactElement } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import StarIcon from '@mui/icons-material/Star';
import { TabInfoProps } from '../../data/tabInfoData';

let tabInfoData = {
  firstText: 'Let Speechify read to you while you walk to work, go for a run, or do laundry. Get through PDFs, books, articles, docs & emails twice as fast.',
  buttonIcon: <GoogleIcon />,
  buttonText: 'Add to Chrome',
  comments: 
  
  <div className='flex flex-row gap-x-6 md:flex-row'>
    <div className='flex flex-col'>
      <div>
        Favourite App of 2023
      </div>
      <div>
        by Google Chrome
      </div>
    </div>
    <div className='flex flex-col'>
      <div>
        <StarIcon /> 
        <span className='pl-2'>
          4.5  
        </span>
      </div>
      <div>
        12.5k ratings
      </div>
    </div>
  </div>
}

const TabInfo = (tabInfoData: TabInfoProps) => {
  return (
    <section className="bg-black pt-12 px-6">
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='max-w-[300px] min-h-[40vh]'>
          <div className='flex flex-col h-[100%] justify-around'>
            <div className='hidden md:block text-xl'>
              {tabInfoData.firstText}
            </div>
            <div className='mt-6 flex flex-col md:justify-between h-full'>
              <div>
                <button className="w-full md:w-auto rounded-2x inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-5 font-medium tracking-wide text-black text-white shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                  <span className="text-black">
                    {tabInfoData.buttonIcon}
                    <span className='pl-2'>
                      {tabInfoData.buttonText}
                    </span>
                  </span>
                </button>
              </div>
              <div className='my-4 order-first md:order-last'>
                {tabInfoData.comments}
              </div>
            </div>
          </div>
        </div>
        <div className='order-first md:order-last rounded-6'>
          <video controls className='rounded-6 w-full h-full'>
            <source src={tabInfoData.bannerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default TabInfo;
