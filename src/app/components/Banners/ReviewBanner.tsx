import React from 'react';
import TryForFreeButton from '../Buttons/TryForFreeButton';
import PersonCard from '../PersonCard';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import { CheckCircleIcon } from 'lucide-react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';


export default function ReviewBanner() {
  const reviewData = [
    {
      personData: 'Sir Richard Branson, Business Magnate',
      review:
        'Speechify is absolutely brilliant. Growing up with dyslexia this would have made a big difference. I"m so glad to have it today.',
      rating: 5,
      photo: '/review-photos/richard-branson.webp',
    },
    {
      personData: 'Gwyneth Paltrow, Actress and Businesswoman',
      review:
        'Speechify makes it easy to learn at 2x or even 3x the speed you read with your eyes.',
      rating: 5,
      photo: '/review-photos/gwyneth-paltrow.webp',
    },
    {
      personData: 'Ali Abdaal, most followed Productivity Expert in the world.',
      review:
        'If there’s one hill I’m going to die on, it’s that speed listening is the best way forward. Speechify is a game-changer for me.',
      rating: 5,
      photo: '/review-photos/ali-abdaal.webp',
    },
    {
      personData: 'Jenemarie',
      review:
        'Amazing I have ADHD and I love to read but have piles of book that I have never touched. I downloaded this app and it has helped me read more and obtain information better for school! Love this app, I recommend it to everyone!',
      rating: 5,
      photo: '',
    },
    {
      personData: 'LEAHLIZ1989',
      review:
        'This is the only review I’ve ever written. I downloaded this app to help me read books about the stock market and finance while I do my day job. It brough me to the brink of tears at my desk. Love the app.',
      rating: 5,
    },
    {
      personData: 'Ana',
      review:
        'I used to hate school because I"d spend hours just trying to read the assignments. Listening has been totally life changing. This app saved my education.',
      rating: 5,
    },
    {
      personData: 'TJV 34',
      review:
        'Mighty be one of the GOAT apps This is probably top 5 of greatest apps ever, you can literally read alone an entire book in a day. Easily worth the cost of the app.',
      rating: 5,
    },
    {
      personData: 'THEODOTA',
      review:
        'I am a resident and this app saves me a ton of time. I listen to PDF’s while walking to clinic, running, making coffee in the morning.',
      rating: 5,
    },
  ];

  return (
    <section className="bg-black pt-12 text-white">
      <div className="flex w-full flex-col content-center justify-center gap-y-4 text-center">
        <div className="text-6xl">OUR LISTENERS LOVE US</div>
        <div className="text-2xl">Over 250k people have given Speechify 5 stars</div>
        <div className="text-xl text-slate-400">
          Read more reviews <CallMadeIcon />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-4 px-6 py-12">
        {reviewData.map((data, index) => {
          return (
            <div className="col-span-12 overflow-hidden rounded-lg bg-gray-900 text-slate-500 shadow-md shadow-gray-900 sm:col-span-6 md:col-span-3">
              <div className="p-6">
                {data.photo ? (
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    <Image src={data.photo} alt="Richard-Branson" width={120} height={120} />
                  </h3>
                ) : null}
                <h3 className="mb-4 text-xl font-medium text-white">
                  {Array.from({ length: data.rating }, (v, i) => {
                    return (
                      <span key={i}>
                        <StarIcon />
                      </span>
                    );
                  })}
                </h3>
                <p className="text-lg text-white">{data.review}</p>
                <p className="mt-4">{data.personData}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex w-full flex-col md:flex-row content-center justify-center gap-y-4 gap-x-4 text-center">
        <span className='px-6 w-full md:w-auto'>
          <TryForFreeButton />
        </span>
        <div className="text-slate-400 flex flex-wrap text-center justify-center content-center">
          Read reviews <CallMadeIcon />
        </div>
      </div>


    </section>
  );
}
