import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type PersonCardProps = {
  name: string;
  title: string;
  verified?: boolean;
  photo: string;
};

const PersonCard = (person: PersonCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden text-center text-inherit shadow-slate-200">
      {/*  <!-- Icon --> */}
      <div className="flex justify-center">
        <Image src={person.photo} alt="personImage" width="80" height="80" />
      </div>
      {/*  <!-- Body--> */}
      <div className="pb-2 pt-4">
        <h3 className="px-4 font-medium">
          <span className="pr-1">{person.name}</span>
          {person.verified ? <CheckCircleIcon fontSize="small" /> : null}
        </h3>
        <p className="text-slate-500">{person.title}</p>
      </div>
    </div>
  );
};

export default PersonCard;
