import React from 'react';
import TryForFreeButton from '../Buttons/TryForFreeButton';
import PersonCard from '../PersonCard';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import { CheckCircleIcon } from 'lucide-react';
import Image from 'next/image';
import TickIcon from '../Icons/TickIcon';

export default function MainBanner() {
  const personsData = [
    {
      name: 'Cliff',
      title: 'Speechify Founder',
      verified: true,
      photo: '/person-logos/Cliff.png',
      showPlay: true,
    },
    {
      name: 'Gwyneth',
      title: 'Actress',
      verified: true,
      photo: '/person-logos/Gwyneth.png',
      showPlay: true,
    },
    {
      name: 'Beast',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/Beast.png',
      showPlay: true,
    },
    {
      name: 'Snoop',
      title: 'Music Icon',
      verified: true,
      photo: '/person-logos/Snoop.png',
      showPlay: true,
    },
  ];

  return (
    <section className="bg-black">
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
            <div className="flex flex-col flex-wrap gap-y-4 sm:flex-row sm:justify-center md:justify-between">
              <div className="mt-4 flex flex-col justify-end sm:mt-0 sm:items-center">
                <div className="flex flex-col gap-y-4 text-nowrap">
                  <div className="flex flex-col items-center gap-x-4 sm:flex-row sm:justify-center md:justify-start">
                    <div className="flex content-center gap-x-2">
                      <div>
                        <Image
                          src="award-photos/award-wing-left.svg"
                          alt="award-wing-left"
                          width={15}
                          height={15}
                        />
                      </div>
                      <div className="flex flex-wrap content-center">
                        <AppleIcon />
                      </div>
                      <div className="flex flex-wrap content-center">App of the Day</div>
                      <div>
                        <Image
                          src="award-photos/award-wing-right.svg"
                          alt="award-wing-right"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                    <div className="flex content-center gap-x-2">
                      <div>
                        <Image
                          src="award-photos/award-wing-left.svg"
                          alt="award-wing-left"
                          width={15}
                          height={15}
                        />
                      </div>
                      <div className="flex flex-wrap content-center">
                        <LanguageIcon />
                      </div>
                      <div className="flex flex-wrap content-center">
                        Chrome Extension of The Year
                      </div>
                      <div>
                        <Image
                          src="award-photos/award-wing-right.svg"
                          alt="award-wing-right"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-x-4 sm:flex-row sm:justify-center md:justify-start">
                    <div className="flex content-center gap-x-2">
                      <div>
                        <Image
                          src="award-photos/award-wing-left.svg"
                          alt="award-wing-left"
                          width={15}
                          height={15}
                        />
                      </div>
                      <div className="flex flex-wrap content-center">250k+ 5-star reviews</div>
                      <div>
                        <Image
                          src="award-photos/award-wing-right.svg"
                          alt="award-wing-right"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                    <div className="flex content-center gap-x-2">
                      <div>
                        <Image
                          src="award-photos/award-wing-left.svg"
                          alt="award-wing-left"
                          width={15}
                          height={15}
                        />
                      </div>
                      <div className="flex flex-wrap content-center">30M+ Users</div>
                      <div>
                        <Image
                          src="award-photos/award-wing-right.svg"
                          alt="award-wing-right"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-first flex flex-col gap-y-4 md:order-last">
                <div className="order-last mt-6 flex justify-center text-slate-500 md:order-first md:mt-0 md:justify-end">
                  <TickIcon />
                  <span className="pl-2">Official Speechify partnership</span>
                </div>
                <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-6">
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
