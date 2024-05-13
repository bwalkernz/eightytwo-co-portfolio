"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { text, curve, translate } from "./anim";

const pathNames = {
  "/": "Home.",
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

const pathImages = {
  "/": "",
  "/timberunlimited": "/images/logo-timberunlimited.svg",
  "/canterburymuseum": "/images/logo-canterburymuseum.svg",
  "/tekaha": "/images/logo-tekaha.svg",
  "/platocreative": "/images/logo-platocreative.svg",
  "/christscollege": "/images/logo-christscollege.svg",
  "/turitv": "/images/logo-turitv.svg",
  "/tetahiyouth": "/images/logo-tetahiyouth.svg",
  "/nike": "/images/logo-nike-a.svg",
  "/queenstownparkhotel": "/images/logo-queenstownparkhotel.svg",
  "/russellscurtains": "/images/logo-russells.svg",
  "/traillite": "/images/logo-traillite.svg",
  "/tribe": "/images/logo-tribe.svg",
  "/wearebar": "/images/logo-wearebar.svg",
  "/weareglobal": "/images/logo-weareglobal.svg",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const router = useRouter();
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  console.log(pathname);

  return (
    <div className="page curve" style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route  font-serif  !z-50" {...anim(text)}>
        {pathNames[pathname]}
      </motion.p>
      <motion.img
        {...anim(text)}
        className="trans-img"
        src={pathImages[pathname]}
      />
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
