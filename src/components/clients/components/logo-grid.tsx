import { useState, useEffect } from 'react';

interface LogoGridProps {
  clientsImgs: string[];
}

export default function LogoGrid({ clientsImgs }: LogoGridProps) {
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
    <div className="relative mx-auto max-w-7xl p-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {visibleLogos.map((img, index) => (
          <div
            key={index}
            className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
              isMobile && index >= 10 && !showAll
                ? 'translate-y-4 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            <img
              className="max-h-[50px] max-w-[130px] object-contain"
              src={img || '/placeholder.svg'}
              alt={`Client Logo ${index + 1}`}
              width="130"
              height="50"
            />
          </div>
        ))}
      </div>
      {isMobile && clientsImgs.length > 10 && (
        <button
          className="bg-gray-200 hover:bg-gray-300 mx-auto mt-6 block rounded px-4 py-2 transition-colors duration-200"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
      <div className="absolute right-0 top-0 h-28 w-28 border-r-2 border-t-2 border-bravo"></div>
      <div className="absolute bottom-0 left-0 h-28 w-28 border-b-2 border-l-2 border-bravo"></div>
    </div>
  );
}
