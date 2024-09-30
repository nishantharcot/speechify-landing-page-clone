import countryList from '../../data/countryListData';
import CountryOptionCard from '../CountryOptionCard';
import PersonCard from '../PersonCard';

const TryItYourselfBanner = () => {
  const personsData = [
    {
      name: 'Cliff',
      title: 'Speechify Founder',
      verified: true,
      photo: '/person-logos/Cliff.png',
      showPlay: false,
    },
    {
      name: 'Gwyneth',
      title: 'Actress',
      verified: true,
      photo: '/person-logos/Gwyneth.png',
      showPlay: false,
    },
    {
      name: 'Beast',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/Beast.png',
      showPlay: false,
    },
    {
      name: 'Snoop',
      title: 'Music Icon',
      verified: true,
      photo: '/person-logos/Snoop.png',
      showPlay: false,
    },
    {
      name: 'Cliff',
      title: 'Speechify Founder',
      verified: true,
      photo: '/person-logos/Cliff.png',
      showPlay: false,
    },
    {
      name: 'Gwyneth',
      title: 'Actress',
      verified: true,
      photo: '/person-logos/Gwyneth.png',
      showPlay: false,
    },
    {
      name: 'Beast',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/Beast.png',
      showPlay: false,
    },
    {
      name: 'Sign In',
      title: 'To explore',
      verified: false,
      photo: '/person-logos/sign-in.svg',
      showPlay: false,
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="px-6 text-white">
        <div className="text-5xl">Try it Yourself</div>
        <div className="mt-6 rounded-lg bg-white p-6 text-black">
          <div className="my-4 flex flex-col items-center gap-x-4 md:flex-row">
            <div>Generate text in</div>
            <div className="flex w-full gap-x-4 overflow-x-auto">
              {countryList.map((data, index) => {
                return (
                  <div key={index}>
                    <CountryOptionCard {...data} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between md:flex-row">
            <div className="max-h-[40vh] overflow-y-scroll">
              <div>
                Hi, I'm Cliff, founder of Speechify. <br /> <br />
                I have Dyslexia. <br /> <br />
                When I was a kid, I wanted my dad to be proud of me. But I couldn't read well.{' '}
                <br /> <br />
                My dad started reading Harry Potter to me. I loved it. <br /> <br />
                Without reading, I couldn't become who I wanted to be. <br /> <br />
                So, I built Speechify to turn anything into an audiobook. <br /> <br />
                Today, 30 million people use Speechify to read 3x faster, remember 2x more & reduce
                their stress. <br /> <br />
                My mission is to be who I needed most when you were growing up. <br /> <br />
                Much love ❤, Cliff <br />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 justify-center gap-6 md:mt-0 md:grid-cols-4">
              {personsData.map((data, i) => {
                return (
                  <div key={i}>
                    <PersonCard {...data} />
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItYourselfBanner;
