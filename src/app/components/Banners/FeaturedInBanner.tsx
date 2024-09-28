import Image from 'next/image';

const FeaturedInBanner = () => {
  const featuredInPublications = ['cbs.svg', 'forbes.svg', 'nyt.svg', 'time.svg', 'wall-st.svg'];

  return (
    <section className="bg-black text-white">
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <div className="text-2xl text-slate-500">Featured In</div>

        <div className="mt-12 grid grid-cols-2 place-content-center gap-12 md:grid-cols-5">
          {featuredInPublications.map((data, index) => {
            return (
              <div key={index} className="flex justify-center text-white">
                <Image src={`featured-logos/` + data} alt={data} width={150} height={150} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInBanner;
