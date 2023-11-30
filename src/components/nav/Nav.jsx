import { useState, useEffect } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

//Radix Imports
import * as Dialog from '@radix-ui/react-dialog';

//Framer Motion Imports
import { motion, AnimatePresence } from 'framer-motion';

const navigation = {
  en: [
    { name: 'Services', href: '/#services' },
    { name: 'How We Work', href: '/#how' },
    { name: 'Culture', href: '/#culture' },
    { name: 'Cases', href: '/cases' },
    { name: 'Clients', href: '/#clients' },
    { name: 'Contact Us', href: '/#contact' },
  ],
  es: [
    { name: 'Servicios', href: '/#services' },
    { name: 'Cómo Trabajamos', href: '/#how' },
    { name: 'Cultura', href: '/#culture' },
    { name: 'Casos', href: '/cases' },
    { name: 'Clientes', href: '/#clients' },
    { name: 'Contacto', href: '/#contact' },
  ],
};

export default function NavBar({ lang, alternateNav }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 70);
  };

  useEffect(() => {
    if (window.scrollY >= 70) {
      // setSticky(true);
    }
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
      <main className="mx-auto max-w-7xl px-8 xl:px-4">
        <nav
          className={`${
            isSticky ? 'py-4 ' : ' py-6'
          }   flex items-center   justify-between transition-all  duration-500  `}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/#" className="-m-1.5 p-1.5">
              <span className="sr-only">Crecé Más</span>
              <img
                className={`${
                  isSticky ? 'h-10 lg:h-14' : 'h-14'
                } w-auto transition-all duration-300`}
                src="/imgs/logo.png"
                alt=""
              />
            </a>
          </div>
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Bars3Icon
                    className="h-10 w-10 text-bravo transition-all duration-300 ease-in-out active:scale-[1.2] lg:hidden"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Dialog.Trigger>
            <AnimatePresence>
              {mobileMenuOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay />
                  <Dialog.Content
                    asChild
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 h-[100svh] w-full bg-alpha"
                    >
                      <div
                        className={`${
                          isSticky ? 'py-4' : 'py-6'
                        } sm:ring-gray-900/10 fixed inset-y-0 z-50 w-full overflow-y-auto  px-6 sm:ring-1`}
                      >
                        <div className="flex items-center justify-between">
                          <Dialog.Close asChild>
                            <a href="/#" className="-m-1.5 p-1.5">
                              <span className="sr-only">Crecé Más</span>
                              <img
                                className={`${
                                  isSticky ? 'h-10 lg:h-14' : 'h-14'
                                } w-auto transition-all duration-300`}
                                src="/imgs/logo.png"
                                alt=""
                              />
                            </a>
                          </Dialog.Close>
                          <Dialog.Close asChild>
                            <button
                              type="button"
                              className="text-gray-700 -m-2.5 rounded-md p-2.5"
                            >
                              <XMarkIcon
                                className="h-10 w-10 text-bravo"
                                aria-hidden="true"
                              />
                            </button>
                          </Dialog.Close>
                        </div>

                        <div className="mt-16 flow-root">
                          <div className="divide-gray-500/10 -my-6 divide-y">
                            <div className="space-y-2 py-6">
                              {navigation[lang].map((item) => (
                                <Dialog.Close asChild key={item.name}>
                                  <a
                                    href={item.href}
                                    className="font-regular -mx-3 block rounded-lg px-3 py-2 text-4xl font-bold text-white "
                                  >
                                    {item.name}
                                  </a>
                                </Dialog.Close>
                              ))}
                            </div>
                            <div className="flex gap-2 py-6">
                              <Dialog.Close asChild>
                                <a
                                  href="/"
                                  className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-normal text-white"
                                >
                                  ES
                                </a>
                              </Dialog.Close>
                              <span className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-normal text-white">
                                |
                              </span>
                              <Dialog.Close asChild>
                                <a
                                  href="/en"
                                  className="font-regular hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-normal text-white"
                                >
                                  EN
                                </a>
                              </Dialog.Close>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>

          <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-8 2xl:gap-x-10">
            {navigation[lang].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  isSticky || alternateNav
                    ? 'font-medium text-alpha'
                    : 'text-white'
                } lg:text-md font-regular relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-bravo after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden cursor-pointer gap-2 lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/"
              className={`${
                isSticky || alternateNav
                  ? 'font-medium text-alpha'
                  : 'text-white'
              } text-md font-regular  transition duration-300 ease-in-out  hover:text-bravo `}
            >
              ES
            </a>
            <span
              className={`${
                isSticky || alternateNav
                  ? 'font-medium text-alpha'
                  : 'text-white'
              } text-md font-regular  transition duration-300 ease-in-out `}
            >
              |
            </span>
            <a
              href="/en"
              className={`${
                isSticky || alternateNav
                  ? 'font-medium text-alpha'
                  : 'text-white'
              } text-md font-regular  transition duration-300 ease-in-out  hover:text-bravo `}
            >
              EN
            </a>
          </div>
        </nav>
      </main>
      {/* Dialog Component */}
    </section>
  );
}
