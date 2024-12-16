'use client';
import { ArrowRight, CircleArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navBar';
import { cn } from '@/utils/cn';
import Footer from '@/components/footer';
import { data, desc } from 'framer-motion/client';

const App = () => {
  return (
    <div className="bg-dark">
      <HeroSection />
      <TrustDelivery />
      <OurMission />
      <Services />
      <Portfolio />
      <Testimonial />
      <WorkWithUs />
      <Footer />
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
    <div className="relative h-screen w-full overflow-hidden bg-[#020103]">
      <Navbar />

      {/* Black gradient upper and down part */}
      <div className="absolute bottom-0 z-10 h-48 w-full bg-gradient-to-t from-neutral-900 to-transparent md:bottom-0"></div>
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

function WorkWithUs() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 bg-dark px-4 py-10 md:flex-row md:py-12">
      <GradientText className="text-5xl font-semibold">
        Work With Us
      </GradientText>
      <p className="text-gray-200">
        help you to build website company that is modern,
        <br />
        user friendly, good SEO, and Clean design
      </p>
    </div>
  );
}

function Testimonial() {
  const testimonialData = [
    {
      name: 'John Doe',
      position: 'CEO',
      companyName: 'ABC Company',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './person.png',
    },
    {
      name: 'John Doe',
      position: 'CEO',
      companyName: 'ABC Company',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './person.png',
    },
    {
      name: 'John Doe',
      position: 'CEO',
      companyName: 'ABC Company',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './person.png',
    },
    {
      name: 'John Doe',
      position: 'CEO',
      companyName: 'ABC Company',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './person.png',
    },
  ];

  return (
    <div className="h-full w-full bg-dark">
      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col gap-6 px-4 py-10">
        {/* Dubble blur codes */}
        <div className="absolute left-2 top-2 size-40">
          <img
            src="./blur-codes.png"
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
        {/* Testimonial heading */}
        <div className="flex flex-col gap-2 md:gap-4">
          <GradientText className="text-3xl font-medium md:text-5xl">
            Let Team Speak For You
          </GradientText>
          <p className="text-gray-200">
            Our latest work, working with the best
          </p>
        </div>
        {/* Testimonial */}
        <div className="grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-2 xl:grid-cols-4">
          {testimonialData.map((data, i) => (
            <TestimonialCard index={i} data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  data,
  index,
}: {
  data: {
    name: string;
    position: string;
    companyName: string;
    description: string;
    img: string;
  };
  index: number;
}) {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 rounded-3xl border border-cyan-700 bg-neutral-900 px-4 py-6 text-gray-200 md:w-full">
      {/* image */}
      <div className="size-12 overflow-hidden rounded-full border">
        <img
          className="h-full w-full object-cover"
          src={data.img}
          alt="profile image"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="size-4">
            <img
              className="h-full w-full object-contain"
              src="./dubble-cods.png"
              alt=""
            />
          </div>
          <p> 0{index + 1}</p>
        </div>
        <div className="">{data.description}</div>
      </div>
      <div className="relative flex flex-col p-2">
        <div className="absolute left-0 top-0 h-full w-[1.5px] rounded bg-gradient-to-b from-cyan-600 to-cyan-800"></div>
        <p className="text-sm">{data.name}</p>
        <p className="text-sm text-gray-500">{data.position}</p>
        <p className="text-sm text-gray-500">{data.companyName}</p>
      </div>
    </div>
  );
}

// Show case of all the projects
function Portfolio() {
  const portfolioData = [
    {
      name: 'Filltex',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor? sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './person.png',
      websiteLink: 'https://www.filltex.com/',
      caseStudyLink: '',
    },
    {
      name: 'Chal Chitrakaar',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor? sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './chalchitrakaar-website.png',
      websiteLink: 'https://www.chalchitrakaar.com/',
      caseStudyLink: '',
    },
    {
      name: 'Cozzy corner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor? sit amet consectetur adipisicing elit. Aperiam, dolor?',
      img: './cozzy-corner-website.png',
      websiteLink: 'https://www.cozzycorner.com/',
      caseStudyLink: '',
    },
  ];

  return (
    <div className="w-full bg-neutral-900 px-4 py-8 text-gray-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-2 md:gap-4">
          <GradientText className="text-3xl font-medium md:text-5xl">
            Our Success Stories
          </GradientText>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <p>Our latest work, working with the best</p>
            <div className="flex w-fit items-center justify-center gap-2 rounded-3xl border border-cyan-700 px-4 py-2">
              All Portfolio
              <ArrowRight
                size={20}
                className="-rotate-45 rounded-full border p-1"
                color="#fff"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 divide-y divide-cyan-400">
          {portfolioData.map((data, i) => (
            <PortfolioCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({
  data,
}: {
  data: {
    name: string;
    description: string;
    img: string;
    websiteLink: string;
    caseStudyLink: string;
  };
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-8 py-8 text-gray-200 md:flex-row md:gap-16">
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="font-lato text-2xl font-medium">{data.name}</p>
        <p className="text-sm text-gray-400 md:text-base">{data.description}</p>
        <div className="mt-2 flex gap-4">
          <div className="rounded-3xl border px-4 py-2">View Website</div>
          <div className="rounded-3xl border px-4 py-2">Read Case Study</div>
        </div>
      </div>
      <div className="h-auto w-full max-w-xl overflow-hidden rounded-md md:h-80">
        <img className="h-full w-full object-cover" src={data.img} alt="img" />
      </div>
    </div>
  );
}
