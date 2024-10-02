import countryList from '../../data/countryListData';
import CountryOptionCard from '../CountryOptionCard';
import TickIcon from '../Icons/TickIcon';
import PersonCard from '../PersonCard';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EditIcon from '@mui/icons-material/Edit';
import SignInIcon from '../Icons/SignInIcon';

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
      name: 'Ali Abdaal',
      title: 'Youtuber',
      verified: true,
      photo: '/person-logos/ali-abdaal.png',
      showPlay: false,
    },
    {
      name: 'Benajamin',
      title: 'Narrator',
      verified: false,
      photo: '/person-logos/Benajmin.png',
      showPlay: false,
    },
    {
      name: 'Erica',
      title: 'Narrator',
      verified: false,
      photo: '/person-logos/erica.png',
      showPlay: false,
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="px-6 text-white">
        <div className="border-white/20 pt-4 text-4xl md:border-t">Try it Yourself</div>
        <div className="mt-6 rounded-3xl bg-white p-6 text-black">
          <div className="my-4 flex flex-col items-center gap-x-4 text-nowrap md:flex-row">
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
            <div className="max-h-[60vh] overflow-y-scroll md:max-w-[600px]">
              <div className="text-lg">
                <EditIcon color="primary" /> &nbsp; Hi, I'm Cliff, founder of Speechify. <br />{' '}
                <br />
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

            <div>
              {/* For Medium and large Screens */}
              <div className="mt-6 hidden grid-cols-2 justify-center gap-6 md:mt-0 md:grid md:grid-cols-4">
                {personsData.map((data, i) => {
                  return (
                    <div key={i}>
                      {i === 0 ? (
                        <PersonCard
                          additonalClasses={['border-4', 'border-blue-600']}
                          backgroundColor="#f0f4f9"
                          {...data}
                        />
                      ) : (
                        <PersonCard backgroundColor="#f0f4f9" {...data} />
                      )}
                    </div>
                  );
                })}
                <div className="relative hidden flex-col justify-center gap-y-4 text-center text-inherit md:flex">
                  <div>
                    <div className="flex h-full justify-center text-center">
                      <div className="flex h-[150px] w-[150px] flex-col justify-center gap-y-2 rounded-full bg-[#f0f4f9]">
                        <div className="flex justify-center">
                          <SignInIcon />
                        </div>
                        <div className="text-xl">200+</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="flex content-center justify-center px-4 font-medium">
                      <span className="pr-1">Sign in</span>
                    </h3>
                    <p className="text-slate-500">to explore</p>
                  </div>
                </div>
              </div>
              {/* For Small Screens */}
              <div className="mt-4 flex w-full gap-x-4 overflow-x-auto text-nowrap md:hidden">
                {personsData.map((data, i) => {
                  return (
                    <div key={i}>
                      {i === 0 ? (
                        <PersonCard
                          additonalClasses={['border-4', 'border-blue-600']}
                          height={72}
                          width={72}
                          backgroundColor="#f0f4f9"
                          {...data}
                        />
                      ) : (
                        <PersonCard height={72} width={72} backgroundColor="#f0f4f9" {...data} />
                      )}
                    </div>
                  );
                })}

                <div className="relative flex flex-col justify-center gap-y-4 text-center text-inherit md:hidden">
                  <div>
                    <div className="flex h-full justify-center text-center">
                      <div className="flex h-[72px] w-[72px] flex-col justify-center gap-y-2 rounded-full bg-[#f0f4f9]">
                        <div className="flex justify-center">
                          <SignInIcon />
                        </div>
                        <div className="text-xl">200+</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="flex content-center justify-center px-4 font-medium">
                      <span className="pr-1">Sign in</span>
                    </h3>
                    <p className="text-slate-500">to explore</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex items-center justify-center md:justify-between">
                <div className="self-center">
                  <PlayCircleIcon style={{ fontSize: '96px', color: 'blue' }} />
                </div>
                <div className="flex hidden md:flex">
                  <TickIcon />
                  <span className="pl-2">Official Speechify partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItYourselfBanner;
