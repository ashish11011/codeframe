'use client';
import { CircleArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navBar';
import { cn } from '@/utils/cn';

const App = () => {
  return (
    <div className="bg-dark">
      <HeroSection />
      <TrustDelivery />
      <OurMission />
      <Services />
      <div className="h-96"></div>
    </div>
  );
};

export default App;

function GradientText({ children, className }: any) {
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-[#00EAFF] via-white to-[#88FCF2] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  const x = new Array(100).fill(1);
  return (
    <div className="h-screen w-full overflow-hidden bg-[#020103]">
      <Navbar />
      <div className="absolute -bottom-14 z-10 h-48 w-full bg-gradient-to-t from-neutral-900 to-transparent md:bottom-0"></div>
      <div className="absolute top-0 z-10 h-48 w-full bg-gradient-to-b from-neutral-900 to-transparent"></div>

      <div className="absolute -left-12 bottom-8 h-28 w-72 overflow-hidden bg-[#88FCF2]/80 blur-[80px] md:bottom-36 md:left-0 md:h-48 md:w-96 md:blur-[150px]"></div>
      <div className="absolute -top-12 right-24 h-40 w-72 overflow-hidden bg-[#00EAFF] blur-[80px] md:top-36 md:h-48 md:w-80 md:blur-[150px]"></div>
      <div className="absolute top-0 h-screen w-full">
        <div className="inset-0 flex h-screen w-full overflow-hidden">
          {x.map((_, i) => {
            if ([0, 6, 14, 19].includes(i)) {
              return (
                <div
                  key={i}
                  className="h-full w-12 shrink-0 border-r border-blue-800 md:w-16"
                ></div>
              );
            }
            return (
              <div
                key={i}
                className="h-full w-12 shrink-0 bg-gradient-to-r from-transparent to-white/5 blur-[0.5px] md:w-16"
              ></div>
            );
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto flex h-5/6 w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-4 md:gap-8 md:py-6 [&>*]:z-10">
        <GradientText className="max-w-4xl text-center font-lato text-3xl font-semibold md:text-5xl xl:text-7xl">
          We Design and Develop Your Idea and Success
        </GradientText>
        <p className="text-center font-lato text-white">
          We help brands elevate their digital presence by crafting their ideas
          into digital products
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row">
          <div className="w-full max-w-56 cursor-pointer rounded-3xl bg-[#00EAFF] px-6 py-2 text-center font-medium md:w-fit">
            Work with Us
          </div>
          <div className="w-full max-w-56 cursor-pointer rounded-3xl border border-[#00EAFF] px-6 py-2 text-center font-medium text-white md:w-fit">
            View Our Portfolio
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img src="./hero-scroll-down.png" alt="" />
        </div>
      </div>
    </div>
  );
}

function TrustDelivery() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-6 bg-dark px-4 py-6 md:flex-row md:justify-between md:py-8">
      <GradientText className="text-center text-2xl font-semibold md:text-3xl">
        They Trusted , We Delivered
      </GradientText>
      <div className="flex items-center justify-between gap-6">
        <img src="./deliceryLogo.png" alt="" />
        <img src="./deliceryLogo.png" alt="" />
        <img src="./deliceryLogo.png" alt="" />
      </div>
    </div>
  );
}

function OurMission() {
  return (
    <div className="mx-auto flex max-w-7xl flex-row flex-wrap justify-between gap-6 px-4 py-8 text-white md:gap-10 md:py-12">
      <GradientText className="order-1 mr-10 w-full text-3xl font-semibold leading-10 md:order-none md:mr-0 md:w-2/5 md:text-5xl">
        Our mission ? “Get brands to the world wide web”
      </GradientText>
      <div className="order-4 aspect-square min-h-36 w-full border bg-white md:order-none md:aspect-auto md:w-2/5"></div>
      <div className="order-3 mt-6 flex w-full flex-col gap-4 md:order-none md:mt-0 md:w-2/5">
        <p>
          At CodeFrame, we thrive on collaboration, combining our technical
          skills and creative vision to craft experiences that drive success.
          Whether it’s designing intuitive user interfaces, building robust
          applications, or optimizing for performance,
        </p>
        <p>
          we’re here to elevate your digital presence. Let’s create something
          extraordinary—together.
        </p>
      </div>
      <div className="order-2 flex w-full justify-between gap-4 overflow-hidden md:order-none md:w-2/5 md:flex-wrap md:gap-6">
        <ProjectCompletedCount />
        <ProjectCompletedCount />
        <ProjectCompletedCount />
        <ProjectCompletedCount />
      </div>
    </div>
  );
}

function ProjectCompletedCount() {
  return (
    <div className="flex w-full flex-col justify-center gap-2 md:w-2/5">
      <p className="text-2xl md:text-3xl">16</p>
      <p className="text-sm text-gray-300 md:text-base">Projects Completed</p>
    </div>
  );
}

// Services Crafted for Your Success
function Services() {
  return (
    <div className="mx-auto mt-12 flex w-full max-w-7xl flex-wrap justify-between gap-6 px-4 py-4 md:py-6">
      <GradientText className="order-1 mr-10 w-full text-3xl font-semibold leading-10 md:order-none md:mr-0 md:w-2/5 md:text-5xl">
        Services Crafted for Your Success
      </GradientText>
      <div className="order-3 flex w-full flex-col gap-4 md:order-none md:w-2/5">
        <p className="text-white">
          We help not only create digital products which look impressive but
          also perform exceptionally
        </p>
        <div className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl bg-gray-50 px-4 py-2.5">
          <p className="font-semibold">Get Started</p>
          <CircleArrowRightLink />
        </div>
      </div>
      <div className="order-2 mt-6 grid w-full grid-cols-12 md:order-3 md:mt-10">
        {servicesData.map((data, i) => (
          <SuccessProjectCard data={data} key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

function SuccessProjectCard({ data, index }: any) {
  const [isSideBorder, setIsSideBorder] = useState(false);
  const [isbottomBorder, setIsbottomBorder] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;

    console.log(width);

    // For caluclation x border
    if (width < 768) {
      if (index % 2 === 0) {
        setIsSideBorder(true);
      }
    } else {
      if ((index + 1) % 4 !== 0) {
        setIsSideBorder(true);
      }
    }

    // For caluclating y border
    if (width < 768) {
      if (![6, 7].includes(index)) {
        setIsbottomBorder(true);
      }
    } else {
      if (![4, 5, 6, 7].includes(index)) {
        setIsbottomBorder(true);
      }
    }
  }, []);

  return (
    <a
      href="#"
      className={cn(
        'group relative col-span-6 grid grid-rows-[auto,auto,1fr,auto] gap-4 px-2 py-5 font-lato text-white sm:col-span-4 md:col-span-3 md:px-4',
        isbottomBorder && 'border-b border-neutral-700'
      )}
    >
      <p className="text-gray-400">{`{0${index + 1}}`}</p>

      <p className="text-lg font-medium">{data.heading}</p>

      <p className="text-gray-400">{data.description}</p>
      <CircleArrowRightLink />

      {isSideBorder && (
        <div className="absolute right-0 top-1/2 h-[95%] w-[0.1px] -translate-y-1/2 bg-neutral-700"></div>
      )}
    </a>
  );
}

const servicesData = [
  {
    heading: 'UI/UX Design',
    description:
      'Visually stunning interfaces with seamless journeys reflecting your brand’s essence',
    link: '#',
  },
  {
    heading: 'E-commerce Website Design',
    description:
      'Build intuitive online store interfaces that turn visitors into buyers',
    link: '#',
  },
  {
    heading: 'Portfolio and Showcase Design',
    description:
      'Highlight your work or brand with clean, captivating portfolio design',
    link: '#',
  },
  {
    heading: 'Landing Page Design',
    description:
      'Craft high-converting landing pages tailored to your business goals',
    link: '#',
  },
  {
    heading: 'Responsive Web Development',
    description:
      'Build fast, responsive, and scalable websites that look great on every device',
    link: '#',
  },
  {
    heading: 'E-commerce Development',
    description:
      'Launch secure and scalable online stores to grow your business',
    link: '#',
  },
  {
    heading: 'Full-Stack Development',
    description:
      'Seamlessly handle everything from front-end designs to back-end architecture',
    link: '#',
  },
  {
    heading: 'Web Development with Framer',
    description:
      'Build fully functional websites with Framer’s design-first approach',
    link: '#',
  },
];

function CircleArrowRightLink({ className }: { className?: string }) {
  return (
    <CircleArrowRight
      className={cn(
        '-rotate-45 transform duration-200 group-hover:rotate-0 group-hover:scale-110',
        className
      )}
    />
  );
}
