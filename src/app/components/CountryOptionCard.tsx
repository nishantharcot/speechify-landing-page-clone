import Image from 'next/image';

type CountryOptionCardProps = {
  name: string;
  flag: string;
};

const CountryOptionCard = (country: CountryOptionCardProps) => {
  return (
    <button className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-[#F1F4F9] px-6 text-sm font-medium tracking-wide text-black">
      <Image src={country.flag} alt={`${country.name}'s flag`} width={20} height={20} />
      <span>{country.name}</span>
    </button>
  );
};

export type { CountryOptionCardProps };
export default CountryOptionCard;
