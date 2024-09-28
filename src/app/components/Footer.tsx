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
  ];

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
  ];

  return (
    <>
      <hr />
      <div className="grid grid-cols-12 gap-x-2 gap-y-4 px-6">
        {footerData.map((data, index) => {
          return (
            <div
              className="col-span-6 flex flex-col gap-y-2 text-white sm:col-span-3 md:col-span-2"
              key={index}
            >
              {data.title != '' ? <div className="pb-4 text-slate-400">{data.title}</div> : null}
              {data.children.map((child, index2) => {
                return <div key={index2}>{child}</div>;
              })}
            </div>
          );
        })}

        <div className="col-span-12 flex flex-col gap-y-2 text-white sm:col-span-6 md:col-span-2">
          <div className="hidden pb-4 text-slate-400 sm:block">Follow Speechify</div>
          <div className="hidden sm:block">
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
          <div className="my-4 flex w-full justify-around sm:hidden">
            <InstagramIcon />
            <TwitterIcon />
            <XIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div className="col-span-12 mb-4 flex flex-col gap-y-2 text-white sm:col-span-6 md:col-span-2">
          <div className="hidden pb-4 text-slate-400 sm:block">Get the App</div>
          <div className="flex gap-x-6">
            <button className="rounded-6x h-18 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-2 font-medium tracking-wide text-black shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none sm:w-auto">
              <span>
                <Apple fontSize="large" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs">
                  Download on the <br />
                </span>
                <span>App Store</span>
              </div>
            </button>
          </div>
          <div className="flex gap-x-6">
            <button className="rounded-6x h-18 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-2 font-medium tracking-wide text-black shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none sm:w-auto">
              <span>
                <PlayArrowIcon fontSize="large" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs">
                  Get it on <br />
                </span>
                <span>Google Play</span>
              </div>
            </button>
          </div>
        </div>

        <div className="col-span-12 mb-6 text-3xl text-slate-400">Recommended Reading</div>

        <div className="col-span-12 flex flex-col gap-y-2 text-white sm:col-span-6">
          {recommendedReadingsPart1.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>

        <div className="col-span-12 mt-4 flex flex-col gap-y-2 text-white sm:col-span-3">
          {recommendedReadingsPart2.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>

        <div className="col-span-12 mt-2">
          <hr />
        </div>

        <div className="hidden md:col-span-6 md:block">
          <Image src={`/speechify.png`} width="180" height="180" alt={''} />
        </div>

        <div className="col-span-6 flex flex-wrap content-center text-xs text-slate-500 md:col-span-1">
          Terms & conditions
        </div>

        <div className="col-span-6 flex flex-wrap content-center justify-end text-xs text-slate-500 md:col-span-1">
          Privacy Policy
        </div>

        <div className="col-span-6 flex flex-wrap content-center text-xs text-slate-500 md:col-span-1">
          Speechify Inc 2024
        </div>

        <div className="col-span-6 flex flex-wrap content-center justify-end text-sm text-white md:col-span-3">
          <span>
            <LanguageIcon /> English <KeyboardArrowDownIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
