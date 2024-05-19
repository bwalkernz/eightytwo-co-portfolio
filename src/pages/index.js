import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "@/components/Layout/Curve/anim";
import React, { useState, useEffect, Suspense } from "react";
import Lenis from "@studio-freight/lenis";
import { useInView } from "react-intersection-observer";
import Video from "next-video";
//import MouseOver from "@/components/mouseOver.js";

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

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Home() {
  const [ready, setReady] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Start the transition after the component has mounted
    React.startTransition(() => {
      setReady(true);
    });
  }, []);

  const products = [
    {
      name: "seequent",
      isVideo: true,
      title: "Seequent",
      logo: "/images/logo-seequent.svg",
      videoPath: seequentVideo,
    },
    {
      name: "canterburymuseum",
      isVideo: true,
      title: "Canterbury Museum",
      logo: "/images/logo-canterburymuseum.svg",
      videoPath: canterburymuseumVideo,
    },
    {
      name: "timberunlimited",
      isVideo: true,
      title: "Timber Unlimited",
      logo: "/images/logo-timberunlimited.svg",
      videoPath: timberunlimitedVideo,
    },
    {
      name: "tekaha",
      isVideo: true,
      title: "Te Kaha Stadium",
      logo: "/images/logo-tekaha.svg",
      videoPath: tekahaVideo,
    },
    {
      name: "platocreative",
      isVideo: false,
      title: "Plato Creative 2020",
      logo: "/images/logo-platocreative.svg",
    },
    {
      name: "christscollege",
      isVideo: true,
      title: "Christ's College Canterbury",
      logo: "/images/logo-christscollege.svg",
      videoPath: ccVideo,
    },
    {
      name: "turitv",
      isVideo: true,
      title: "Turi TV",
      logo: "/images/logo-turitv.svg",
      videoPath: ttvVideo,
    },
    {
      name: "tetahiyouth",
      isVideo: true,
      title: "Te Tahi Youth",
      logo: "/images/logo-tetahiyouth.svg",
      videoPath: tetahiyouthVideo,
    },
    {
      name: "nike",
      isVideo: false,
      title: "Nike",
      logo: "/images/logo-nike.svg",
    },
    {
      name: "queenstownparkhotel",
      isVideo: true,
      title: "Queenstown Park Hotel",
      logo: "/images/logo-queenstownparkhotel.svg",
      videoPath: qtparkVideo,
    },
    {
      name: "russellscurtains",
      isVideo: true,
      title: "Russells Curtains and Blinds",
      logo: "/images/logo-russells.svg",
      videoPath: russellsVideo,
    },
    {
      name: "traillite",
      isVideo: true,
      title: "Traillite",
      logo: "/images/logo-traillite.svg",
      videoPath: trailliteVideo,
    },
    {
      name: "tribe",
      isVideo: true,
      title: "Tribe",
      logo: "/images/logo-tribe.svg",
      videoPath: tribeVideo,
    },
    {
      name: "wearebar",
      isVideo: false,
      title: "We are Bar",
      logo: "/images/we-are-bar.png",
    },
    {
      name: "weareglobal",
      isVideo: true,
      title: "We are Global",
      logo: "/images/logo-weareglobal.svg",
      videoPath: weareglobalVideo,
    },
  ];

  return (
    <>
      <Head>
        <title>BW82</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor={"#ecebe7"}>
        <AnimatePresence>
          {hoveredProduct && (
            <motion.p
              className="drop-down-text pt-6 lg:pt-5 pr-4 xl:pr-8 fixed top-0 right-0 z-50"
              key={hoveredProduct}
              initial={{
                opacity: 0,
                translateY: -100,
                transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
              }}
              animate={{ duration: 0.9, opacity: 1, translateY: 0 }}
              exit={{
                opacity: 0,
                translateY: -100,
                transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
              }}
              transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
            >
              {hoveredProduct}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div {...anim(pageAnimation)} className="origin-top">
          <div className="body intro md:h-dvh px-4 xl:px-8 pt-32 pb-16 flex items-center w-full">
            <div className="w-full">
              <h1 className="max-w-[1200px] h1 mb-6 relative z-20 lg:mb-16">
                Ben is a highly skilled Web Developer with a diverse
                professional background spanning contract, freelance, and
                permanent roles.
              </h1>
              <div className="w-full lg:w-2/3 lg:mx-auto flex flex-wrap">
                <div className="w-full mb-6">
                  <p className="relative z-20 max-w-[1180px]">
                    Well-versed in delivering innovative solutions for clients
                    in diverse industries such as retail, telecommunications,
                    music, tech, and advertising. Ben is experienced in both
                    client and agency environments, with a global perspective
                    gained from international projects such as work for{" "}
                    <span className="text-red">NBC Universal</span>,
                    <span className="text-red"> Nike</span>,
                    <span className="text-red"> Seequent</span> and{" "}
                    <span className="text-red">Ragged Edge</span>.
                  </p>
                </div>
                <div className="w-full">
                  {/* <h2 className="h2 relative z-20">Contact:</h2> */}
                  <p>
                    e.{" "}
                    <a className="button_a" href="mailto:bwalkernz@gmail.com">
                      <span>bwalkernz@gmail.com</span>
                    </a>
                  </p>
                  <p>
                    p.{" "}
                    <a className="button_a" href="tel:0064273016610">
                      <span>+64 27 301 6610</span>
                    </a>
                  </p>
                  <p className="pt-10">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="button"
                      href="/ben-walker-cv.pdf"
                    >
                      download my CV here
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* <MouseOver /> */}
          </div>
          <div className="relative flex flex-wrap border-t border-solid border-white mb-4">
            {products.map((product, index) => (
              <ProductItem
                key={product.name}
                product={product}
                index={index}
                ready={ready}
                setHoveredProduct={setHoveredProduct}
              />
            ))}
          </div>
        </motion.div>
      </Curve>
    </>
  );
}

function ProductItem({ product, index, ready, setHoveredProduct }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, // Adjust threshold as needed
  });

  if (!ready) {
    return <div>Loading video...</div>;
  }

  return (
    <Link
      className={`item w-full sm:w-1/2 lg:w-1/3 relative border-r border-b border-solid border-white p-4 group${
        product.isVideo ? " video" : " image"
      }`}
      key={product.name}
      href={product.name}
      scroll={false}
      onMouseEnter={() => setHoveredProduct(product.title)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 }} // Stagger delay
      >
        <div className="relative z-20">
          {product.isVideo ? (
            <Suspense fallback={<div>Loading video...</div>}>
              <Video
                autoPlay={true}
                muted={true}
                loop={true}
                controls={false}
                src={product.videoPath}
                className="opacity-0 !aspect-[642/380] w-full object-cover transition-opacity duration-500 group-hover:opacity-100"
              />
            </Suspense>
          ) : (
            <motion.img
              className={`${product.name} opacity-0 aspect-[642/380] w-full object-cover transition-opacity duration-500 group-hover:opacity-100`}
              src={`/images/${product.name}.jpg`}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1 }}
            />
          )}
        </div>
        <span className="logo-container opacity-100 overflow-hidden z-10 flex px-4 items-center justify-center bg-[#ecebe7] absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
          <Image
            width={360}
            height={200}
            src={product.logo}
            alt={product.title}
            className={`${product.name} max-w-[280px]`}
          />
        </span>
      </motion.div>
    </Link>
  );
}
