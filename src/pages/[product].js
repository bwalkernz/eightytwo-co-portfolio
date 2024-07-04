import Curve from "@/components/Layout/Curve";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { textAnim, pageAnimationProduct } from "@/components/Layout/Curve/anim";
import React, { useRef, useState, useEffect, Suspense } from "react";
import parse from "html-react-parser";
import Video from "next-video";
import Image from "next/image";

import seequentVideo from "../../videos/seequent.mp4";
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
  "/seequent": "",
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
    seequent:
      "<p>Seequent is a world leading earth-modelling, analysis, data management and collaboration software company. <br /> <br />We were tasked with developing a new all products filtering page and creating reusable content blocks to make up other product pages. This was a challenging job working with a fragile code base on a site with high traffic and constant content updates, we added a new dynamic content system to make content entry a lot more efficient for the business. Not to mention bringing to life an elegant design system, which was designed in house at Seequent.</p>",
    canterburymuseum:
      "<p>Canterbury Museum is one of the largest in New Zealand, this project was a complete re-design and build of their website. It showcases exhibits, events and collections and brings forward Canterbury Museum as a world-leading research institute. It can can receive online donations. Built at Plato; I was the lead front end developer, creating and coding the front end experience.</p>",
    timberunlimited:
      "<p>Timber Unlimited is dedicated to promoting timber to create a better future for New Zealand. I led the front-end development for this website at Plato. Our solution not only met their requirements but also showcased rich images and a refined design language.</p>",
    tekaha:
      "<p>Still in construction, the Te Kaha stadium project is one of the largest currently underway in New Zealand. The initial website requirement was to introduce the brand and tell the story behind the meaning of the Maori name Te Kaha. A rich animation was developed to show how the stadium will have an impact on the city of Christchurch from day to night.</p>",
    platocreative:
      "<p>Plato is an integrated agency focused on partnerships and delivering real world results. <br /> <br />I was part of the redesign and rebuild project of Plato's 2020 website. Built during the pandemic to life Plato Creative’s new brand, the site was built using Next JS and features a variety of animation and page transitions. </p>",
    christscollege:
      "<p>Christs College is one of New Zealand's most prestigious private schools, they wanted a website that would reflect this. We used slow fades, video,  rich imagery and an easy to follow information architecture to showcase all the facilities offered by the school.</p>",
    turitv:
      "<p>This site is a Netflix type website built for the deaf community as an education resource for children, viewers can select and watch their favorite videos using this tool. </p>",
    tetahiyouth:
      "<p>Te Tahi Youth provides comprehensive youth support to help young people achieve their goals. Learn more about our youth services today. <br /> <br />The design of this site lent itself so well to digital, a very fun site developed as a resource for troubled youth. Rich and engaging we wanted to talk to youth at their level not down to them.</p>",
    nike: "<p>Contracted as a Front End Developer for OMM to help build and develop animation for a microsite and touch screens for the Nike release of the Pegasus Turbo shoe. The microsite sits inside the Runners Point e-commerce site. The touch screens were located in Nike Towns Europe wide. I worked with one other developer who took care of the JS logic, while I built the HTML frame-work, markup, and styling as well as the animations in Greensock JS.</p>",
    queenstownparkhotel:
      "<p>A boutique hotel based in Queenstown, New Zealand. <br /> <br />A site built to showcase the hotels offerings, rich imagery, polite animations and a luxurious feel was used to portray the hotels high end stature. </p>",
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
    seequent: {
      techlist: ["PHP", "Vanilla JS", "Tailwind CSS", "WordPress"],
    },
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
      techlist: ["Twig", "Tailwind CSS", "Vanilla JS", "Craft CMS"],
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
    seequent: seequentVideo,
    canterburymuseum: canterburymuseumVideo,
    timberunlimited: timberunlimitedVideo,
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

  const productTitles = {
    seequent: "Seequent",
    canterburymuseum: "Canterbury Museum",
    timberunlimited: "Timber Unlimited",
    tekaha: "Te Kaha",
    platocreative: "Plato 2020",
    christscollege: "Christ's College",
    turitv: "Turi TV",
    tetahiyouth: "Te Tahi Youth",
    nike: "Nike Runners Point",
    queenstownparkhotel: "Queenstown Park Hotel",
    russellscurtains: "Russells Curtains",
    traillite: "Traillite",
    tribe: "Tribe",
    wearebar: "We Are Bar",
    weareglobal: "We Are Global",
  };

  const productLinks = {
    seequent: "https://www.seequent.com/products-solutions/geostudio-2d/",
    canterburymuseum: "https://www.canterburymuseum.com/",
    timberunlimited: "https://www.timberunlimited.co.nz/",
    platocreative:
      "https://web.archive.org/web/20230305140732/https://platocreative.co.nz/",
    tekaha: "https://www.onenewzealandstadium.co.nz/",
    christscollege: "https://christscollege.com/",
    turitv: "https://www.turitv.co.nz/",
    tetahiyouth: "https://www.tetahiyouth.co.nz/",
    queenstownparkhotel: "https://www.queenstownparkhotel.co.nz/",
    russellscurtains: "https://www.russellscurtains.co.nz/",
    traillite: "https://www.traillite.co.nz/",
    tribe: "https://www.tribe.co.nz/",
    weareglobal: "https://www.weareglobal.co.nz/",
    wearebar: "https://web.archive.org/web/20180530204638/http://wearebar.com/",
  };

  const description = productDescriptions[product];
  const video = productVideos[product];
  const links = productLinks[product];
  const tech = techList[product];
  const titles = productTitles[product];

  const reversed = product === "watch" ? true : false;

  // const firstImage = useRef(null);
  // const secondImage = useRef(null);
  // let requestAnimationFrameId = null;
  // let xPercent = reversed ? 100 : 0;
  // let currentXPercent = reversed ? 100 : 0;
  // const speed = 0.15;

  // const manageMouseMove = (e) => {
  //   const { clientX } = e;
  //   if (window.innerWidth > 1024) {
  //     xPercent = (clientX / window.innerWidth) * 100;

  //     if (!requestAnimationFrameId) {
  //       requestAnimationFrameId = window.requestAnimationFrame(animate);
  //     }
  //   }
  // };

  // const animate = () => {
  //   //Add easing to the animation
  //   const xPercentDelta = xPercent - currentXPercent;
  //   currentXPercent = currentXPercent + xPercentDelta * speed;

  //   //Change width of images between 33.33% and 66.66% based on cursor
  //   const firstImagePercent = 66.66 - currentXPercent * 0.33;
  //   const secondImagePercent = 33.33 + currentXPercent * 0.33;
  //   //console.log(secondImagePercent);

  //   if (window.innerWidth > 1024) {
  //     firstImage.current.style.width = `${firstImagePercent}%`;
  //     secondImage.current.style.width = `${secondImagePercent}%`;
  //   }

  //   if (Math.round(xPercent) == Math.round(currentXPercent)) {
  //     window.cancelAnimationFrame(requestAnimationFrameId);
  //     requestAnimationFrameId = null;
  //   } else {
  //     window.requestAnimationFrame(animate);
  //   }
  // };

  if (!product) return <div>Loading...</div>;

  if (!ready) {
    return <div>Loading video...</div>;
  }

  return (
    <>
      <Head>
        <title>BW82</title>
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
        <motion.div
          {...anim(pageAnimationProduct)}
          className="origin-top z-[5] relative"
        >
          <div
            className="body product max-w-6xl xl:max-w-none xl:flex xl:flex-wrap pt-28 pb-4 px-4 xl:px-8 xl:pt-32"
            // onMouseMove={(e) => {
            //   manageMouseMove(e);
            // }}
          >
            <div className="w-full pb-6 border-b border-solid border-black">
              <p>{titles}</p>
            </div>
            <div
              //ref={secondImage}
              className="second-image flex flex-wrap relative w-full"
            >
              <div className="w-full pb-6 xl:pb-12 xl:w-1/2">
                <div className="pr-6 xl:sticky xl:top-[130px]">
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

                  <div className="w-full pt-6 hidden xl:flex">
                    {links && (
                      <a className="button" target="_blank" href={links}>
                        <span>View project</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-1/2">
                {video && (
                  <div className="relative w-full mb-6">
                    <div className="lg:sticky top-[112px] p-2 z-20 bg-white">
                      <div className="video-container">
                        <Suspense fallback={<div>Loading video...</div>}>
                          <Video
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            controls={false}
                            src={video}
                            className="!aspect-[640/378] w-full object-cover z-10"
                          />
                        </Suspense>
                      </div>
                      {/* <div className="mouse-hand hidden z-30 lg:flex lg:items-center absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
                      <Image
                        width={219}
                        height={272}
                        src="/images/mouse-hand.png"
                        alt=""
                        className="w-[30px] mr-4"
                      />
                      <span className="text-white font-sans">Mouse over</span>
                    </div> */}
                    </div>
                  </div>
                )}

                <div
                  //ref={firstImage}
                  className="first-image w-full bg-white p-2 ml-0"
                >
                  {/* <div className="mouse-hand hidden z-20 lg:flex lg:items-center absolute left-2/4 translate-x-[-50%] top-[5%]">
                <Image
                  width={219}
                  height={272}
                  src="/images/mouse-hand.png"
                  alt=""
                  className="w-[30px] mr-4"
                />
                <span className="text-white font-sans">Mouse over</span>
              </div> */}
                  <div className="image-container">
                    <motion.img
                      className="w-full"
                      src={"/images/big-images/" + product + ".jpg"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-6xl flex justify-center pt-6 xl:hidden">
              {links && (
                <a className="button" target="_blank" href={links}>
                  <span>View project</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </Curve>
    </>
  );
}
