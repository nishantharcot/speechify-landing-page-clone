import FAQAnswer from '../FAQAnswer';
import FAQs from '@/app/data/faqData';

const FAQBanner = () => {
  return (
    <div className="flex flex-col justify-center bg-black text-white md:min-h-[100vh]">
      <div className="mb-4 text-center text-3xl uppercase md:text-7xl">FAQ</div>
      <div className="flex w-full flex-col flex-wrap content-center justify-center divide-y rounded">
        {FAQs.map((data, index) => {
          return (
            <div className="mx-24 w-full px-6 sm:w-[60vw]" key={index}>
              <details className="group p-4">
                <summary className="relative cursor-pointer list-none pr-8 text-2xl font-medium transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-300 [&::-webkit-details-marker]:hidden">
                  {data.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-200 transition duration-300 group-open:rotate-45"
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
                </summary>
                <div className="mt-4 text-xl text-white">
                  <FAQAnswer ans={data.ans} />
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQBanner;
