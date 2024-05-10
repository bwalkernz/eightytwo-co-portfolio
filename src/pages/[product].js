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
      "<p>CM A comfortable and stylish shoe for everyday wear.</p>",
    timberunlimited:
      "<p>CM A comfortable and stylish shoe for everyday wear.</p>",
    tekaha: "<p>CM A comfortable and stylish shoe for everyday wear.</p>",
    platocreative:
      "<p>CM A comfortable and stylish shoe for everyday wear.</p>",
    christscollege:
      "<p>CM A comfortable and stylish shoe for everyday wear.</p>",
    turitv: "<p>CM A comfortable and stylish shoe for everyday wear.</p>",
    tetahiyouth: "A comfortable and stylish shoe for everyday wear.",
    nike: "A comfortable and stylish shoe for everyday wear.",
    queenstownparkhotel: "A comfortable and stylish shoe for everyday wear.",
    russellscurtains: "A comfortable and stylish shoe for everyday wear.",
    traillite: "A comfortable and stylish shoe for everyday wear.",
    tribe: "A comfortable and stylish shoe for everyday wear.",
    wearebar: "A comfortable and stylish shoe for everyday wear.",
    weareglobal: "A comfortable and stylish shoe for everyday wear.",
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
    timberunlimted: "https://www.timberunlimited.co.nz/",
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
              <div className="w-1/2">
                <div className="pb-6">{parse(description)}</div>
                {links && (
                  <a className="button" target="_blank" href={links}>
                    <span>View project</span>
                  </a>
                )}
              </div>

              <div className="relative w-1/2">
                <div className="sticky top-[112px] p-2 bg-white">
                  {video && (
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

                    // <video
                    //   className="aspect-[640/370] w-full object-cover"
                    //   autoPlay
                    //   loop
                    // >
                    //   <source src={video} type="video/mp4" />
                    //   Your browser does not support the video tag.
                    // </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Curve>
    </>
  );
}
