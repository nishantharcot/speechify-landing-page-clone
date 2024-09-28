import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type ReviewCardProps = {
  name: string;
  title: string;
  verified?: boolean;
  photo: string;
};

const ReviewCard = (review: ReviewCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden text-center text-inherit shadow-slate-200">
      {/*  <!-- Icon --> */}
      <div className="flex justify-center">
        <Image src={review.photo} alt="reviewImage" width="80" height="80" />
      </div>
      {/*  <!-- Body--> */}
      <div className="pb-2 pt-4">
        <h3 className="px-4 font-medium">
          <span className="pr-1">{review.name}</span>
          {review.verified ? <CheckCircleIcon fontSize="small" /> : null}
        </h3>
        <p className="text-slate-500">{review.title}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
