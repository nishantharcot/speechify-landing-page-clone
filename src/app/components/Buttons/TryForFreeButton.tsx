const TryForFreeButton = () => {
  return (
    <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded rounded-lg bg-white px-5 font-medium tracking-wide text-black text-white shadow-md transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
      <span className="text-black">Try For Free</span>
    </button>
  );
};

export default TryForFreeButton;
