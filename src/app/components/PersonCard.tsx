import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TickIcon from './Icons/TickIcon';

type PersonCardProps = {
  name: string;
  title: string;
  verified?: boolean;
  photo: string;
  showPlay: boolean;
  backgroundColor?: string;
  height?: number;
  width?: number;
};
{
  /* <div class="absolute bottom-[2px] right-[2px] z-20 overflow-hidden rounded-full text-[40px] text-white" style="background:radial-gradient(circle, rgba(26,26,27,1) 60%, transparent 60%)"><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.05 10.8579L10.95 8.60622C11.4167 8.33679 11.4167 7.66321 10.95 7.39378L7.05 5.14212C6.58333 4.87269 6 5.20947 6 5.74833V10.2517C6 10.7905 6.58333 11.1273 7.05 10.8579Z"></path></svg></div> */
}
const PersonCard = (person: PersonCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-4 overflow-hidden text-center text-inherit">
      {/*  <!-- Icon --> */}
      <div>
        <div className="flex h-full justify-center text-center">
          <Image
            className={`rounded-full bg-[${person.backgroundColor}]`} // 1e1a38
            src={person.photo}
            alt="personImage"
            width={person.width ? person.width : 150}
            height={person.height ? person.height : 150}
          />
        </div>
        {person.showPlay && (
          <div className="relative bottom-[40px] z-30 flex justify-end">
            <PlayCircleIcon style={{ width: 48, height: 48 }} />
          </div>
        )}
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
    </div>
  );
};

export default PersonCard;
