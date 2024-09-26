import countryList from "../../data/countryListData";
import CountryOptionCard from "../CountryOptionCard";
import PersonCard from "../PersonCard";

const TryItYourselfBanner = () => {

  const personsData = [
    {
      name: 'Cliff',
      title: 'Speechify Founder',
      verified: true,
      photo: '/person-logos/Cliff.png',
    },
    {
      name: 'Gwyneth',
      title: 'Actress',
      verified: true,
      photo: '/person-logos/Gwyneth.png',
    },
    {
      name: 'Beast',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/Beast.png',
    },
    {
      name: 'Snoop',
      title: 'Music Icon',
      verified: true,
      photo: '/person-logos/Snoop.png',
    },
    {
      name: 'Cliff',
      title: 'Speechify Founder',
      verified: true,
      photo: '/person-logos/Cliff.png',
    },
    {
      name: 'Gwyneth',
      title: 'Actress',
      verified: true,
      photo: '/person-logos/Gwyneth.png',
    },
    {
      name: 'Beast',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/Beast.png',
    },
    {
      name: 'Snoop',
      title: 'Music Icon',
      verified: true,
      photo: '/person-logos/Snoop.png',
    },
  ];



  return (
    <section className="bg-black py-12">
      <div className="px-6 text-white">
        <div className="text-5xl">
          Try it Yourself
        </div>
        <div className="bg-white mt-6 text-black p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-x-4 my-4">
            <div>
              Generate text in
            </div>
            <div className="flex gap-x-4 overflow-x-auto w-full">
              {countryList.map((data, index) => {
                return (
                  <div key={index}>
                    <CountryOptionCard {...data} />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex mt-6 flex-col md:flex-row justify-between">
            <div className="max-h-[40vh] overflow-y-scroll">
              <div>

                Hi, I'm Cliff, founder of Speechify. <br /> <br />

                I have Dyslexia. <br /> <br />

                When I was a kid, I wanted my dad to be proud of me. But I couldn't read well. <br /> <br />

                My dad started reading Harry Potter to me. I loved it. <br /> <br />
                
                Without reading, I couldn't become who I wanted to be. <br /> <br />

                So, I built Speechify to turn anything into an audiobook. <br /> <br />

                Today, 30 million people use Speechify to read 3x faster, remember 2x more & reduce their stress. <br /> <br />

                My mission is to be who I needed most when you were growing up. <br /> <br />

                Much love ❤, Cliff <br />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-6 md:mt-0 justify-center">
                  {personsData.map((data, i) => {
                    return (
                      <div className="" key={i}>
                        <PersonCard {...data} />
                      </div>
                    );
                  })}
            </div>
          <div>

          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default TryItYourselfBanner;
