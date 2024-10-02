import FAQAnswer from '../FAQAnswer';
import FAQs from '@/app/data/faqData';
import FAQLogo from '../Logos/FAQLogo';

const FAQBanner = () => {
  return (
    <div className="flex flex-col justify-center bg-black text-white md:min-h-[100vh]">
      <div className="mb-4 text-center text-3xl uppercase md:text-7xl">FAQ</div>
      <div className="flex w-full flex-col flex-wrap content-center justify-center divide-y rounded">
        {FAQs.map((data, index) => {
          return (
            <div className="mx-24 w-full sm:w-[60vw]" key={index}>
              <details className="group py-6 hover:text-slate-700">
                <summary className="relative cursor-pointer list-none pr-8 text-lg text-white md:text-2xl md:hover:text-slate-700">
                  {data.question}
                  <FAQLogo />
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
