import Image from "next/image";


const FeaturedInBanner = () => {

  const featuredInPublications = [
    'cbs.svg',
    'forbes.svg',
    'nyt.svg',
    'time.svg',
    'wall-st.svg'
  ]

  return (
    <section className="bg-black text-white pt-12">
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        <div className="text-slate-500 text-2xl">
          Featured In
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-12 place-content-center">
          {featuredInPublications.map((data, index) => {
            return (
              <div className="flex justify-center text-white">
                <Image src={`featured-logos/` + data} alt={data} width={150} height={150} />
              </div>
            )
          })}
        </div>




      </div>
    </section>
  );
};

export default FeaturedInBanner;
