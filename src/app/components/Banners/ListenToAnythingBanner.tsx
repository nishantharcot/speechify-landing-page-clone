import TryForFreeButton from '../Buttons/TryForFreeButton';
import Image from 'next/image';

const ListenToAnythingBanner = () => {
  return (
    <div className="relative flex flex-col justify-center bg-black text-center text-white md:min-h-[100vh]">
      <div className="flex h-full w-full justify-center">
        <Image
          src="/Listen-to-Anything.png"
          alt="Listen to Anything Image"
          style={{ width: '100%' }}
          width={2784}
          height={1392}
        />
      </div>
      <div
        className="absolute w-full"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '100px' }}
      >
        <TryForFreeButton />
      </div>
    </div>
  );
};

export default ListenToAnythingBanner;
