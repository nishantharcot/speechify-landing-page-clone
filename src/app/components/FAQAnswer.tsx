import TrySpeechifyForFreeButton from './Buttons/TrySpeechifyForFreeButton';

type FAQAnswerProps = {
  ans: string;
};

const FAQAnswer = ({ ans }: FAQAnswerProps) => {
  return (
    <div className="flex flex-col gap-y-8">
      <div>{ans}</div>
      <span className="mt-4">
        <TrySpeechifyForFreeButton />
      </span>
    </div>
  );
};

export default FAQAnswer;
