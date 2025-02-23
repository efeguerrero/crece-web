import { useState, useEffect, useRef } from 'react';

interface LogoGridProps {
  clientsImgs: string[];
  lang: string;
}

export default function LogoGrid({ clientsImgs, lang }: LogoGridProps) {
  const [showAll, setShowAll] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const refWidth = useRef(window.innerWidth);

  const logosToShowMobile = 10;
  const totalLogos = clientsImgs.length;

  // Here we do the number of rows (only 2 logos per row as max) * (logo height (defined below) + Gap between rows * # of spaces between rows
  const logoGridMaxHeight =
    Math.ceil(totalLogos / 2) * 40 + Math.ceil(totalLogos / 2 - 1) * 48;
  const logoGridMinHeight =
    Math.ceil(logosToShowMobile / 2) * 40 +
    Math.ceil(logosToShowMobile / 2 - 1) * 48;

  const logoGridInitialHeight =
    isMobile && !showAll
      ? `${logoGridMinHeight}px`
      : isMobile && showAll
      ? `${logoGridMaxHeight}px`
      : 'auto';

  console.log('max', logoGridMaxHeight);
  console.log('min', logoGridMinHeight);

  const handleResize = () => {
    if (window.innerWidth != refWidth.current) {
      setIsMobile(window.innerWidth < 768);
      refWidth.current = window.innerWidth;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const logoGrid = document.getElementById('logo-container');
    if (!showAll) {
      logoGrid.style.height = `${logoGridMaxHeight}px`;
      setShowAll(true);
    } else {
      logoGrid.style.height = `${logoGridMinHeight}px`;
      setTimeout(() => {
        setShowAll(false);
      }, 1000);
    }
  };

  const visibleLogos =
    isMobile && !showAll
      ? clientsImgs.slice(0, logosToShowMobile)
      : clientsImgs;

  return (
    <section className="flex flex-col">
      <div className="relative p-8">
        <div
          id="logo-container"
          style={{
            height: logoGridInitialHeight,
          }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-12 overflow-hidden transition-all duration-1000"
        >
          {visibleLogos.map((img, index) => (
            <div
              key={index}
              style={{
                animationDelay: `calc((${index}/${logosToShowMobile}) * var(--base-animation-delay))`,
              }}
              className="flex w-[calc(50%-12px)] animate-fade-in items-center justify-center transition-all duration-300 ease-in-out md:w-[calc(33.333%-16px)] md:animate-[none] lg:w-[calc(25%-18px)]"
            >
              <img
                className="h-[40px] max-w-[120px] object-contain md:h-[50px] md:max-w-[130px]"
                src={img}
                alt={`Client Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 h-28 w-28 border-r-2 border-t-2 border-bravo"></div>
        <div
          id="animated-divider"
          className="absolute bottom-0 left-0 h-28 w-28 border-b-2 border-l-2 border-bravo transition-opacity"
        ></div>
      </div>
      {isMobile && clientsImgs.length > 10 && (
        <button
          id="toggle-button"
          className="mx-auto mt-16 w-32 rounded-md border-[1px] bg-bravo px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors  lg:hover:border-bravo lg:hover:bg-transparent lg:hover:text-bravo"
          onClick={(e) => handleToggle(e)}
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
