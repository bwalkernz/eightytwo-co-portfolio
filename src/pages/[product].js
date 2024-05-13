import Curve from "@/components/Layout/Curve";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { textAnim, pageAnimationProduct } from "@/components/Layout/Curve/anim";
import React, { useRef, useState, useEffect, Suspense } from "react";
import parse from "html-react-parser";
import Video from "next-video";

import canterburymuseumVideo from "../../videos/canterburymuseum.mp4";
import timberunlimitedVideo from "../../videos/timberunlimited.mp4";
import tekahaVideo from "../../videos/tekaha.mp4";
import ccVideo from "../../videos/christscollege.mp4";
import ttvVideo from "../../videos/turitv.mp4";
import tetahiyouthVideo from "../../videos/tetahiyouth.mp4";
import qtparkVideo from "../../videos/queenstownparkhotel.mp4";
import russellsVideo from "../../videos/russellscurtains.mp4";
import trailliteVideo from "../../videos/traillite.mp4";
import tribeVideo from "../../videos/tribe.mp4";
import weareglobalVideo from "../../videos/weareglobal.mp4";

const pathNamesA = {
  "/": "",
  "/timberunlimited": "",
  "/canterburymuseum": "",
  "/tekaha": "",
  "/platocreative": "",
  "/christscollege": "",
  "/turitv": "",
  "/tetahiyouth": "",
  "/nike": "",
  "/queenstownparkhotel": "",
  "/russellscurtains": "",
  "/traillite": "",
  "/tribe": "",
  "/wearebar": "",
  "/weareglobal": "",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};
export default function Product() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Star the transition after the component has mounted
    React.startTransition(() => {
      setReady(true);
    });
  }, []);

  const pathname = usePathname();
  const {
    query: { product },
  } = useRouter();

  const productDescriptions = {
    canterburymuseum:
      "<p>Canterbury Museum is one of the largest in New Zealand, this project was a complete re-design and build of their website, It showcases exhibits, events and collections and brings forward Canterbury Museum as a world-leading research institute. It can can receive online donations. Built at Plato; I was the lead front end developer, creating and coding the front end experience.</p>",
    timberunlimited:
      "<p>I led the front-end development for this website at Plato. Timber Unlimited is dedicated to promoting timber to create a better future for New Zealand. Our solution not only met their requirements but also showcased rich images and a refined design language.</p>",
    tekaha:
      "<p>Still in construction, the Te Kaha stadium project is one of the largest currently underway in NewZealand. The initial website requirement was to introduce the brand and tell the story behind the meaning of the Maori name Te Kaha. A rich animation was developed to show how the stadium will have an impact on the city of Christchurch from day to night.</p>",
    platocreative:
      "<p>I was part of the redesign and rebuild project of Plato's 2020 website. Built during the pandemic to life Plato Creative’s new brand, the site was built using Next JS and features a variety of animation and page transitions. </p>",
    christscollege:
      "<p>Christs College is one of New Zealand's most prestigious private schools, they wanted a website that would reflect this. We used slow fades, video,  rich imagery and an easy to follow information architecture to showcase all the facilities offered by the school.</p>",
    turitv:
      "<p>This site is a Netflix type website built for the deaf community as an education resource for children, viewers can select and watch their favorite videos using this tool. </p>",
    tetahiyouth:
      "<p>The design of this site lent itself so well to digital, a very fun site developed as a resource for troubled youth. Rich and engaging we wanted to talk to youth at their level not down to them.</p>",
    nike: "<p>Contracted as a Front End Developer for OMM to help build and develop animation for a microsite and touch screens for the Nike release of the Pegasus Turbo shoe. The microsite sits inside the Runners Point e-commerce site. The touch screens were located in Nike Towns Europe wide. I worked with one other developer who took care of the JS logic, while I built the HTML frame-work, markup, and styling as well as the animations in Greensock JS.</p>",
    queenstownparkhotel:
      "<p>A site built to showcase the hotels offerings, rich imagery, polite animations and a luxurious feel was used to portray the hotels high end stature. </p>",
    russellscurtains:
      "<p>As one the largest suppliers of curtains and blinds in New Zealand, the website for Russells was developed in 2021. I worked on the initial development and have been involved ever since as the site has been constantly refined as more UX work is incorporated into the project.</p>",
    traillite:
      "<p>Traillite is one of the largest suppliers and manufacturers of motorhomes and caravans in New Zealand. We built a comprehensive website that allows you to view all their products, floor plans and specs for every product they offer.</p>",
    tribe: "<p>Tribe is an IT firm based in New Zealand.</p>",
    wearebar:
      "<p>Contracted on a project basis by Ragged Edge to deliver a three stage digital roll out for the recently rebranded We Are Bar from the well known Jamie’s Wine Bar. The project involved an initial holding site counting down the opening while encouraging users to sign up to a mailing list. This was then replaced with an interim launch site with more information on the openings, moving on the launch of the full WordPress updatable site with supporting campaign monitor mail outs.</p>",
    weareglobal:
      "<p>Global is a software company based in Christchurch, the website was built based on an obvious grid system, scattered with animations that bring the site to life and add some depth.</p>",
  };

  const techList = {
    canterburymuseum: {
      techlist: ["Next JS", "React", "Tailwind CSS", "Lottie JS", "Craft CMS"],
    },
    timberunlimited: {
      techlist: ["Next JS", "React", "Tailwind CSS", "Lottie JS", "Craft CMS"],
    },
    tekaha: {
      techlist: ["Next JS", "React", "Tailwind CSS", "GSAP", "Craft CMS"],
    },
    platocreative: {
      techlist: ["Next JS", "React", "Tailwind CSS", "Lottie JS", "Craft CMS"],
    },
    christscollege: {
      techlist: ["Twig", "Tailwind CSS", "Vanilla", "Craft CMS"],
    },
    turitv: {
      techlist: ["Next JS", "React", "Tailwind CSS", "Craft CMS"],
    },
    tetahiyouth: {
      techlist: ["Next JS", "React", "Tailwind CSS", "Lottie JS", "Craft CMS"],
    },
    nike: {
      techlist: ["Jade", "CSS", "GSAP", "Vanilla JS"],
    },

    queenstownparkhotel: {
      techlist: ["Twig", "Vanilla JS", "Tailwind CSS", "Craft CMS"],
    },
    russellscurtains: {
      techlist: ["Next JS", "React", "Tailwind CSS", "GSAP", "Craft CMS"],
    },
    traillite: {
      techlist: ["Twig", "Tailwind CSS", "Vanilla JS", "Craft CMS"],
    },
    tribe: {
      techlist: [
        "Twig",
        "Vanilla JS",
        "Tailwind CSS",
        "Lottie JS",
        "Craft CMS",
      ],
    },
    wearebar: {
      techlist: ["Wordpress", "CSS", "jQuery"],
    },
    weareglobal: {
      techlist: [
        "Twig",
        "Vanilla JS",
        "Tailwind CSS",
        "Lottie JS",
        "Craft CMS",
      ],
    },
  };

  const productVideos = {
    canterburymuseum: canterburymuseumVideo,
    timberunlimted: timberunlimitedVideo,
    tekaha: tekahaVideo,
    platocreative: "",
    christscollege: ccVideo,
    turitv: ttvVideo,
    tetahiyouth: tetahiyouthVideo,
    nike: "",
    queenstownparkhotel: qtparkVideo,
    russellscurtains: russellsVideo,
    traillite: trailliteVideo,
    tribe: tribeVideo,
    wearebar: "",
    weareglobal: weareglobalVideo,
  };

  const productLinks = {
    canterburymuseum: "https://www.canterburymuseum.com/",
    timberunlimited: "https://www.timberunlimited.co.nz/",
    tekaha: "https://www.tekaha.co.nz/",
    christscollege: "https://christscollege.com/",
    turitv: "https://www.turitv.co.nz/",
    tetahiyouth: "https://www.tetahiyouth.co.nz/",
    queenstownparkhotel: "https://www.queenstownparkhotel.co.nz/",
    russellscurtains: "https://www.russellscurtains.co.nz/",
    traillite: "https://www.traillite.co.nz/",
    tribe: "https://www.tribe.co.nz/",
    weareglobal: "https://www.weareglobal.co.nz/",
  };

  const description = productDescriptions[product];
  const video = productVideos[product];
  const links = productLinks[product];
  const tech = techList[product];

  const reversed = product === "watch" ? true : false;

  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    //console.log(secondImagePercent);
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  if (!product) return <div>Loading...</div>;

  if (!ready) {
    return <div>Loading video...</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor="#ecebe7">
        <motion.p
          {...anim(textAnim)}
          className="fixed top-0 pt-2.5 pr-4 right-0 z-50 drop-down-text"
        >
          {pathNamesA[pathname]}
        </motion.p>
        <motion.div {...anim(pageAnimationProduct)} className="origin-top">
          <div
            className="body product flex pt-28 pb-4 px-4"
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
          >
            <div ref={firstImage} className="w-1/2 bg-white p-2">
              <motion.img
                className="w-full"
                src={"/images/big-images/" + product + ".jpg"}
              />
            </div>
            <div ref={secondImage} className="flex relative w-1/2">
              <div className={video ? "w-1/2" : "w-fill"}>
                <div className="pb-6 pr-6">
                  {parse(description)}
                  <div className="pt-6">
                    <h3 className="text-black font-sans text-lg mb-2">
                      Tech used:
                    </h3>

                    <ul className="tech-list flex flex-wrap">
                      {tech &&
                        tech.techlist.map((item, index) => (
                          <li className="mr-2" key={index}>
                            {item},
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {links && (
                  <a className="button" target="_blank" href={links}>
                    <span>View project</span>
                  </a>
                )}
              </div>

              {video && (
                <div className="relative w-1/2">
                  <div className="sticky top-[112px] p-2 bg-white">
                    <Suspense fallback={<div>Loading video...</div>}>
                      <Video
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        controls={false}
                        src={video}
                        className="!aspect-[640/378] w-full object-cover"
                      />
                    </Suspense>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Curve>
    </>
  );
}
