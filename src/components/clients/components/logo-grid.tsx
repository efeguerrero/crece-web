import { useState, useEffect } from 'react';

interface LogoGridProps {
  clientsImgs: string[];
  lang: string;
}

export default function LogoGrid({ clientsImgs, lang }: LogoGridProps) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const logosToShow = 10;

  useEffect(() => {
    // Problem here is that resize is triggered also on viewport height, so the chrome bar triggers this event all the time.
    console.log('use effect ran');
    const checkMobile = () => {
      console.log('checkMobile running', showAll);
      console.log('innerWidth', window.innerWidth);
      setIsMobile(window.innerWidth < 768);
      setShowAll(window.innerWidth >= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleLogos =
    isMobile && !showAll ? clientsImgs.slice(0, logosToShow) : clientsImgs;

  return (
    <section className="flex flex-col">
      <div className="relative p-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
          {visibleLogos.map((img, index) => (
            <div
              key={index}
              style={{
                animationDelay: `calc((${index}/${logosToShow}) * var(--base-animation-delay))`,
              }}
              className="flex w-[calc(50%-12px)] animate-fade-in items-center justify-center transition-all duration-300 ease-in-out md:w-[calc(33.333%-16px)] md:animate-[none] lg:w-[calc(25%-18px)]"
            >
              <img
                className="max-h-[40px] max-w-[120px] object-contain md:max-h-[50px] md:max-w-[130px]"
                src={img}
                alt={`Client Logo ${index + 1}`}
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
