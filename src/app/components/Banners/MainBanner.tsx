import React from 'react';
import TryForFreeButton from '../Buttons/TryForFreeButton';
import PersonCard from '../PersonCard';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import { CheckCircleIcon } from 'lucide-react';

export default function MainBanner() {
  const personsData = [
    {
      name: 'Cliff',
      title: 'Speechify Founder',
      verified: true,
      photo: '/person-logos/Cliff.png',
    },
    {
      name: 'Gwyneth',
      title: 'Actress',
      verified: true,
      photo: '/person-logos/Gwyneth.png',
    },
    {
      name: 'Beast',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/Beast.png',
    },
    {
      name: 'Snoop',
      title: 'Music Icon',
      verified: true,
      photo: '/person-logos/Snoop.png',
    },
  ];

  return (
    <section className="bg-black pt-12">
      <div className="px-6 text-white">
        <div className="flex min-h-[60vh] flex-col justify-between">
          <div className="flex flex-col">
            <div className="text-5xl">CUT YOUR READING TIME IN HALF.</div>
            <div className="text-5xl">LET SPEECHIFY READ TO YOU.</div>

            <span className="mt-6">
              <TryForFreeButton />
            </span>
          </div>
          <div className="py-12">
            <div className="flex flex-col flex-wrap md:flex-row md:justify-between">
              <div className="flex flex-col justify-end items-center mt-4 md:mt-0">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col items-center md:flex-row">
                    <p>
                      <AppleIcon />
                      App of the Day
                    </p>
                    <p className="md:pl-4">
                      <LanguageIcon />
                      Chrome Extension of The Year
                    </p>
                  </div>
                  <div className="flex flex-col items-center md:flex-row">
                    <p>250k+ 5-star reviews</p>
                    <p className="md:pl-4">30M+ Users</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col order-first md:order-last">
                <div className="flex justify-center order-last md:order-first md:justify-end text-slate-500 mt-6 md:mt-0">
                  <CheckCircleIcon fontSize="small" />
                  <span className="pl-1">Official Speechify partnership</span>
                </div>
                <div className="flex flex-wrap justify-center">
                  {personsData.map((data, i) => {
                    return (
                      <div className="" key={i}>
                        <PersonCard {...data} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
