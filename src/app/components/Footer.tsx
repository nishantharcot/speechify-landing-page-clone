import { ReactElement } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Apple from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type FooterProps = {
  title: string;
  children: (string | ReactElement)[];
};

const Footer = () => {
  const footerData: FooterProps[] = [
    {
      title: 'Text to speech',
      children: [
        'iPhone & iPad Apps',
        'Android App',
        'Mac App',
        'Web App',
        'Chrome Extension',
        'Edge Add-on',
      ],
    },
    {
      title: 'For creators',
      children: ['AI voice generator', 'Dubbing', 'Voice cloning'],
    },
    {
      title: 'For Business',
      children: ['Teams', 'Education', 'Developers'],
    },
    {
      title: 'Company',
      children: [
        'About',
        'Contact',
        'Blog',
        'Careers',
        'Affiliates',
        'Help',
        'Status',
        'Press',
        'Brand Kit',
      ],
    },
  ];

  const recommendedReadingsPart1 = [
    'Audiobook vs. Reading',
    'PDF Text to Speech Android',
    'Female Voice Generator',
    'Male Voice Generator',
    'Top Dyslexia Reading Programs',
    'Robot Voice Generator',
    'Text to Speech Anime',
    'Cartoon Character Voice Generator',
    'Text to Speech Chrome Extension',
  ]

  const recommendedReadingsPart2 = [
    'AI Voice Changer',
    'PDF Audio Reader',
    'Can Google Docs Read to Me',
    'Cartoon Character Voice Generator',
    'Hindi Text to Speech',
    'PDF Read Aloud',
    'AI Voice Generator',
    'Texto a Voz',
    'Leitor de Texto',
  ]

  return (
    <>
      <hr />
      <div className="grid grid-cols-12 px-6 gap-y-4 gap-x-2">
        {footerData.map((data, index) => {
          return (
            <div className="flex flex-col col-span-6 sm:col-span-3 gap-y-2 text-white" key={index}>
              {data.title != '' ? <div className="pb-4 text-slate-400">{data.title}</div> : null}
              {data.children.map((child, index2) => {
                return <div key={index2}>{child}</div>;
              })}
            </div>
          );
        })}

        <div className="col-span-12 flex flex-col gap-y-2 text-white sm:col-span-6">
          <div className="hidden pb-4 text-slate-400 sm:block">Follow Speechify</div>
          <div className='hidden sm:block'>
            <div className="flex gap-x-6">
              <InstagramIcon />
              <TwitterIcon />
              <XIcon />
            </div>
            <div className="flex gap-x-6">
              <FacebookIcon />
              <YouTubeIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className='sm:hidden w-full flex justify-around my-4'>
              <InstagramIcon />
              <TwitterIcon />
              <XIcon />
              <FacebookIcon />
              <YouTubeIcon />
              <LinkedInIcon />
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-y-2 text-white sm:col-span-6 mb-4">
          <div className="hidden pb-4 text-slate-400 sm:block">
            Get the App
          </div>
          <div className="flex gap-x-6">
            <button className="w-full sm:w-auto rounded-6x inline-flex h-18 items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-2 font-medium tracking-wide text-black shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>
                <Apple fontSize='large' />
              </span>
              <div className='flex flex-col'>
                <span className='text-xs'>
                  Download on the <br/>
                </span>
                <span>
                  App Store
                </span>
              </div>

            </button>
          </div>
          <div className="flex gap-x-6">
            <button className="w-full sm:w-auto rounded-6x inline-flex h-18 items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-2 font-medium tracking-wide text-black shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>
                  <PlayArrowIcon fontSize='large' />
                </span>
                <div className='flex flex-col'>
                  <span className='text-xs'>
                    Get it on <br/>
                  </span>
                  <span>
                    Google Play
                  </span>
                </div>

              </button>
          </div>
        </div>
        
        <div className='text-3xl text-slate-400 col-span-12 mb-6'>
          Recommended Reading
        </div>
        
        <div className="flex flex-col col-span-12 sm:col-span-6 gap-y-2 text-white">
          {recommendedReadingsPart1.map((data, index) => {
            return (
              <div key={index}>
                {data}
              </div>
              )
            })}
        </div>

        <div className="flex flex-col mt-4 col-span-12 sm:col-span-3 gap-y-2 text-white">
        {recommendedReadingsPart2.map((data, index) => {
          return (
            <div key={index}>
              {data}
            </div>
            )
          })}
        </div>
        
        <div className='col-span-12 mt-2'>
          <hr />
        </div>

        <div className='hidden md:block md:col-span-6'>
          <Image src={`/speechify.png`} width="180" height="180" alt={''} />
        </div>

        <div className='col-span-6 md:col-span-1 text-xs flex flex-wrap content-center text-slate-500'>
          Terms & conditions
        </div>

        <div className='col-span-6 md:col-span-1 text-xs flex flex-wrap content-center text-slate-500 justify-end'>
          Privacy Policy
        </div>

        <div className='col-span-6 text-xs md:col-span-1 flex flex-wrap content-center text-slate-500'>
          Speechify Inc 2024
        </div>

        <div className='col-span-6 text-sm md:col-span-3 flex flex-wrap content-center text-white justify-end'>
          <span>
            <LanguageIcon /> English <KeyboardArrowDownIcon />
          </span>
        </div>

      </div>
    </>
  );
};

export default Footer;
