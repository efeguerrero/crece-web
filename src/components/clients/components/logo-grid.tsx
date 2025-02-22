import { useState, useEffect } from 'react';

interface LogoGridProps {
  clientsImgs: string[];
  lang: string;
}

export default function LogoGrid({ clientsImgs, lang }: LogoGridProps) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setShowAll(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleLogos =
    isMobile && !showAll ? clientsImgs.slice(0, 10) : clientsImgs;

  return (
    <section className="flex flex-col">
      <div className="relative p-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {visibleLogos.map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <img
                className="max-h-[50px] max-w-[130px] object-contain"
                src={img}
                alt={`Client Logo ${index + 1}`}
                width="130"
                height="50"
              />
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 h-28 w-28 border-r-2 border-t-2 border-bravo"></div>
        <div className="absolute bottom-0 left-0 h-28 w-28 border-b-2 border-l-2 border-bravo"></div>
      </div>
      {isMobile && clientsImgs.length > 10 && (
        <button
          className="mx-auto mt-16 w-max rounded-md border-[1px] bg-bravo px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 lg:hover:border-bravo lg:hover:bg-transparent lg:hover:text-bravo"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? lang === 'en'
              ? 'Show Less'
              : 'Ver Menos'
            : lang === 'en'
            ? 'Show More'
            : 'Ver Más'}
        </button>
      )}
    </section>
  );
}
