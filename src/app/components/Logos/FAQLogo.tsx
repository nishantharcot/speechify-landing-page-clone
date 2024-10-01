interface LogoProps {
  className?: string;
}

const FAQLogo = ({ className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-1 h-4 w-4 shrink-0 text-slate-700 transition duration-300 group-open:rotate-45"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-labelledby="title-ac01 desc-ac01"
    >
      <title id="title-ac01">Open icon</title>
      <desc id="desc-ac01">icon that represents the state of the summary</desc>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
};

export default FAQLogo;
