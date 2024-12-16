import React from 'react';

const Footer = () => {
  return (
    <div className="w-full overflow-hidden bg-neutral-800 pb-10">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-14 px-4 md:gap-16">
        <div className="flex h-full w-full flex-col">
          <div className="text-center font-lato text-6xl font-bold uppercase leading-3 text-neutral-700 sm:text-[4rem] sm:leading-7 md:text-[7rem] xl:text-[9rem] 2xl:text-[12rem]">
            codeframe
          </div>
          <div className="mt-10 flex w-full flex-col justify-between gap-2 px-2 md:mt-12 md:flex-row md:gap-4 md:px-10 xl:mt-20 xl:px-12">
            <p className="text-xl font-semibold text-neutral-700 md:text-2xl">
              /creative
            </p>
            <p className="text-xl font-semibold text-neutral-700 md:text-2xl">
              /Technology
            </p>
            <p className="text-xl font-semibold text-neutral-700 md:text-2xl">
              /personalization
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-8 text-gray-200 md:flex-row md:gap-4">
          <div className="hidden max-w-96 flex-col gap-4 md:flex md:gap-6">
            <div className="h-full w-full">
              <img src="./logo.png" alt="logo" />
            </div>
            <div className="text-gray-200">
              Where innovative design meets seamless development
            </div>
          </div>
          <div className="flex max-w-96 flex-col gap-8 md:flex-row md:gap-12">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-bold text-gray-200">Quick Links</p>
              <p className="text-gray-200 md:mt-4">Home</p>
              <p className="text-gray-200">Portfolio</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-bold text-gray-200">Let's Build together</p>
              <p className="text-gray-200 md:mt-4">
                Have a project in mind? <br /> Let’s craft your vision into
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
