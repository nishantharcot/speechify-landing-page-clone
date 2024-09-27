type FeatureProps = {
  heading: string;
  text: string;
  video: string;
};

const FeaturesBanner = () => {

  const features: FeatureProps[] = [
    {
      heading: '200+ Human Voices',
      text: 'Enjoy over 200 natural, lifelike voices across 60+ languages or clone your voice',
      video: 'features-videos/human-voices.mp4'
    },
    {
      heading: 'Read 4.5x Faster',
      text: 'Our users save up to 9hrs a week by using Speechify to speed read',
      video: 'features-videos/speed-card.mp4'
    },
    {
      heading: 'Instant AI Summaries',
      text: 'We summarize every reading so you get the takeaways right away',
      video: 'features-videos/ai-summary-1.mp4'
    }
  ]

  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {features.map((data, index) => {
          return (<div key={index} className="flex flex-col gap-6">
            <hr />
            <div className="text-2xl">
              {data.heading}
            </div>
            <div className="text-xl">
              {data.text}
            </div>
            <div className="mt-8">
              <video controls className='rounded-6 w-full h-full'>
                <source src={data.video} type="video/mp4" />
              </video>
            </div>
          </div>)
        })}
      </div>
    </section>
  );
};

export default FeaturesBanner;
