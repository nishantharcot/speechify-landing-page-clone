import Image from "next/image"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type PersonCardProps = {
    name: string,
    title: string,
    verified?: boolean
    photo: string
}

const PersonCard = (person: PersonCardProps) => {
    return (
        <div className="overflow-hidden text-center bg-black text-white shadow-slate-200 flex flex-col ">
        {/*  <!-- Icon --> */}
        <div className="flex justify-center">
            <Image src={person.photo} alt='personImage' width="80" height="80" />
        </div>
        {/*  <!-- Body--> */}
        <div className="pt-4 pb-2">
          <h3 className="font-medium px-4">
            <span className="pr-1">
                {person.name}
            </span>
            {person.verified ? <CheckCircleIcon fontSize="small" /> : null}
          </h3>
          <p className="text-slate-500">
            {person.title}
          </p>
        </div>
      </div>
    )
}

export default PersonCard