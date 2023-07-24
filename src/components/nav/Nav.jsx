import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'How We Work', href: '#how' },
  { name: 'Culture', href: '#culture' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 70);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={`${
        isSticky
          ? 'z-10 bg-white shadow-[0px_4px_30px_0px] shadow-black/20'
          : ''
      } cubic-bezier(0.4, 0,  0.2, 1) fixed inset-x-0 top-0 z-50 transition-all duration-75`}
    >
      <nav
        className={`${
          isSticky ? 'px-6 py-4 lg:w-[85vw] lg:p-4 ' : ' p-6 lg:w-[80vw]'
        } flex  items-center justify-between   transition-all duration-500  lg:mx-auto  lg:px-0 `}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className={`${
                isSticky ? 'h-12 lg:h-16' : 'h-16'
              } w-auto transition-all duration-300`}
              src="/imgs/logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10 text-bravo" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-8 2xl:gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                isSticky ? 'font-medium text-alpha' : 'text-white'
              } lg:text-md font-regular relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-bravo after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden cursor-pointer gap-2 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className={`${
              isSticky ? 'font-medium text-alpha' : 'text-white'
            } text-md font-regular  transition duration-300 ease-in-out  hover:text-bravo `}
          >
            ES
          </a>
          <span
            className={`${
              isSticky ? 'font-medium text-alpha' : 'text-white'
            } text-md font-regular  transition duration-300 ease-in-out `}
          >
            |
          </span>
          <a
            href="#"
            className={`${
              isSticky ? 'font-medium text-alpha' : 'text-white'
            } text-md font-regular  transition duration-300 ease-in-out  hover:text-bravo `}
          >
            EN
          </a>
          {/* <span
            aria-hidden="true"
            className={`${
              isSticky ? 'text-alpha' : 'text-white'
            } translate-x-0  transition duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-bravo `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span> */}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className={`${
            isSticky ? 'py-4' : 'py-6'
          } sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-alpha px-6  sm:max-w-sm sm:ring-1`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className={`${
                  isSticky ? 'h-12 lg:h-16' : 'h-16'
                } w-auto transition-all duration-300`}
                src="/imgs/logo.png"
                alt=""
              />
            </a>

            <button
              type="button"
              className="text-gray-700 -m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-10 w-10 text-bravo" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-16 flow-root">
            <div className="divide-gray-500/10 -my-6 divide-y">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-regular -mx-3 block rounded-lg px-3 py-2 text-4xl font-bold text-white "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#contact"
                  className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-4xl font-bold text-bravo"
                >
                  Contact Us
                </a>
              </div>
              <div className="flex gap-2 py-6">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-normal text-white"
                >
                  ES
                </a>
                <span className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-normal text-white">
                  |
                </span>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-normal text-white"
                >
                  EN
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}
