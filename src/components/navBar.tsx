'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="">
      <div className="sticky top-0 z-50 hidden h-20 w-full overflow-hidden md:block">
        <div className="absolute -z-10 h-full w-full bg-[#020103]/40 blur-3xl"></div>
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-4 py-7">
          <div className="h-full">
            <img
              className="h-full w-56 object-contain"
              src="./logo.png"
              alt=""
            />
          </div>
          <div className="flex items-center gap-5">
            <p className="cursor-pointer text-white">About</p>
            <p className="cursor-pointer text-white">Portfolio</p>
            <p className="cursor-pointer text-white">Contact Us</p>
          </div>
          <div className="whitespace-nowrap rounded-3xl bg-[#00EAFF] px-4 py-2 font-medium capitalize">
            Work with us
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 block h-20 w-full overflow-hidden md:hidden">
        <div className="absolute -z-10 h-full w-full bg-[#020103]/40 blur-3xl"></div>
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-4 py-7">
          <div className="h-full">
            <img
              className="h-full w-36 object-contain"
              src="./logo.png"
              alt=""
            />
          </div>

          <AnimatePresence>
            {!openMobileMenu ? (
              <div onClick={() => setOpenMobileMenu(true)} className="">
                <Menu color="#ccc" />
              </div>
            ) : (
              <motion.div
                initial={{
                  x: '100%',
                }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: '100%',
                }}
                transition={{
                  ease: 'easeInOut',
                }}
                className="fixed left-0 top-0 z-30 flex h-screen w-full flex-col gap-12 bg-black px-4 py-7"
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="h-full">
                    <img
                      className="h-full w-36 object-contain"
                      src="./logo.png"
                      alt=""
                    />
                  </div>
                  <X onClick={() => setOpenMobileMenu(false)} color="#ccc" />
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <p className="cursor-pointer text-white">About</p>
                  <p className="cursor-pointer text-white">Portfolio</p>
                  <p className="cursor-pointer text-white">Contact Us</p>
                  <div className="mt-10 whitespace-nowrap rounded-3xl bg-[#00EAFF] px-4 py-2 text-center font-medium capitalize">
                    Work with us
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// Exit style is not working on mobile
