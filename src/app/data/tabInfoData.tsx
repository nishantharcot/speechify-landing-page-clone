import { ReactElement } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import StarIcon from '@mui/icons-material/Star';
import Android from '@mui/icons-material/Android';
import Image from 'next/image';

type TabInfoProps = {
  firstText: string;
  buttonIcon?: ReactElement;
  buttonText: string;
  comments?: ReactElement;
  bannerVideo: string;
};

const tabInfoData: TabInfoProps[] = [
  {
    firstText:
      'Read up to 4.5x faster by listening with Speechify. Listen to Google Docs, emails, articles & more seamlessly on Chrome.',
    buttonIcon: <GoogleIcon />,
    buttonText: 'Add to Chrome',
    comments: (
      <div className="flex flex-col content-center justify-center gap-x-6 gap-y-2 md:flex-row md:justify-start">
        <div className="flex flex-row justify-center gap-x-2 md:flex-row">
          <div>
            <Image
              src="award-photos/award-wing-left.svg"
              alt="award-wing-left"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>Favourite App of 2023</div>
            <div className="text-slate-500">by Google Chrome</div>
          </div>
          <div>
            <Image
              src="award-photos/award-wing-right.svg"
              alt="award-wing-right"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-2 md:flex-row">
          <div>
            <Image
              src="award-photos/award-wing-left.svg"
              alt="award-wing-left"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>
              <StarIcon /> 4.5
            </div>
            <div className="text-slate-500">12.5k ratings</div>
          </div>
          <div>
            <Image
              src="award-photos/award-wing-right.svg"
              alt="award-wing-right"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    ),
    bannerVideo: '/platform-videos/chrome-extension.mp4',
  },
  {
    firstText:
      'Let Speechify read to you while you commute, exercise, and run errands. Breeze through PDFs, books, articles, emails — anything.',
    buttonIcon: <AppleIcon />,
    buttonText: 'Download on App Store',
    comments: (
      <div className="flex flex-col content-center justify-center gap-x-6 gap-y-2 md:flex-row md:justify-start">
        <div className="flex flex-row justify-center gap-x-2 md:flex-row">
          <div>
            <Image
              src="award-photos/award-wing-left.svg"
              alt="award-wing-left"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>App of the day</div>
            <div className="text-slate-500">App Store</div>
          </div>
          <div>
            <Image
              src="award-photos/award-wing-right.svg"
              alt="award-wing-right"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-2 md:flex-row">
          <div>
            <Image
              src="award-photos/award-wing-left.svg"
              alt="award-wing-left"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>
              <StarIcon /> 4.7
            </div>
            <div className="text-slate-500">192k ratings</div>
          </div>
          <div>
            <Image
              src="award-photos/award-wing-right.svg"
              alt="award-wing-right"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    ),
    bannerVideo: '/platform-videos/iOS.mp4',
  },
  {
    firstText:
      'Let Speechify read to you while you walk to work, go for a run, or do laundry. Get through PDFs, books, articles, docs & emails twice as fast.',
    buttonIcon: <Android />,
    buttonText: 'Get it on Google Play',
    comments: (
      <div className="flex flex-col content-center justify-center gap-x-6 gap-y-2 md:flex-row md:justify-start">
        <div className="flex flex-row justify-center gap-x-2 md:flex-row">
          <div>
            <Image
              src="award-photos/award-wing-left.svg"
              alt="award-wing-left"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>
              <StarIcon /> 4.4
            </div>
            <div className="text-slate-500">120k ratings</div>
          </div>
          <div>
            <Image
              src="award-photos/award-wing-right.svg"
              alt="award-wing-right"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    ),
    bannerVideo: '/platform-videos/android.mp4',
  },
  {
    firstText:
      'The fastest way to read any PDF, book, or doc and make it stick. Integrates with Google Drive, Dropbox, Canvas & more.',
    buttonText: 'Try for free',
    bannerVideo: '/platform-videos/web.mp4',
  },
  {
    firstText:
      'Use Speechify from your Dock to read PDFs, Word docs, emails & more. Listen and read at the same time to read faster and retain more.',
    buttonIcon: <AppleIcon />,
    buttonText: 'Download on App Store',
    bannerVideo: '/platform-videos/mac.mp4',
  },
];

export type { TabInfoProps };

export default tabInfoData;
