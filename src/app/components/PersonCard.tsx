import Image from 'next/image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TickIcon from './Icons/TickIcon';

type PersonCardProps = {
  name: string;
  title: string;
  verified?: boolean;
  photo: string;
  showPlay: boolean;
  backgroundColor?: string;
  hoverColor?: string;
  height?: number;
  width?: number;
};
const PersonCard = (person: PersonCardProps) => {
  return (
    <div className="relative flex flex-col justify-center gap-y-4 text-center text-inherit">
      {/*  <!-- Icon --> */}
      <div>
        <div className="flex h-full justify-center text-center">
          <Image
            className={`rounded-full bg-[${person.backgroundColor}] hover:bg-${person.hoverColor}`} // 1e1a38
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
          {/* {person.verified ? <CheckCircleIcon fontSize="small" /> : null} */}
          {person.verified ? <TickIcon /> : null}
        </h3>
        <p className="text-slate-500">{person.title}</p>
      </div>
      {person.showPlay && (
        <div className="absolute right-[-5px] top-[100px] z-[9999]">
          <PlayCircleIcon style={{ width: 48, height: 48 }} />
        </div>
      )}
    </div>
  );
};

export default PersonCard;
