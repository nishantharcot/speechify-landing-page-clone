import Image from 'next/image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TickIcon from './Icons/TickIcon';

type PersonCardProps = {
  name: string;
  title: string;
  verified?: boolean;
  photo: string;
  showPlay: boolean;
  height?: number;
  width?: number;
  additonalClasses?: string[];
};
const PersonCard = (person: PersonCardProps) => {
  const additionalClasses = person.additonalClasses?.join(' ');

  return (
    <div className="relative flex flex-col justify-center gap-y-4 text-center text-inherit">
      {/*  <!-- Icon --> */}
      <div>
        <div className="z-[-1] flex h-full justify-center text-center">
          <Image
            className={'rounded-full' + ' ' + additionalClasses}
            src={person.photo}
            alt="personImage"
            width={person.width ? person.width : 150}
            height={person.height ? person.height : 150}
          />
        </div>
      </div>
      {/*  <!-- Body--> */}
      <div>
        <h3 className="flex content-center justify-center px-4 font-medium">
          <span className="pr-1">{person.name}</span>
          {person.verified ? <TickIcon /> : null}
        </h3>
        <p className="text-slate-500">{person.title}</p>
      </div>
      {person.showPlay && (
        <div className="absolute right-[-5px] top-[100px] z-[20] rounded-full">
          <PlayCircleIcon style={{ width: 48, height: 48 }} />
        </div>
      )}
    </div>
  );
};

export default PersonCard;
