import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";
import Image from "next/image";
import { useEffect } from "react";
import localFont from "next/font/local";

const items_font = localFont({
  src: "../../public/fonts/Items-CondensedRegular.woff2",
  variable: "--font-items_font",
  weight: "400",
});
const mont_font = localFont({
  src: "../../public/fonts/mont_semibold-webfont.woff2",
  variable: "--font-mont_font",
  weight: "400",
});

const mont_reg_font = localFont({
  src: "../../public/fonts/Mont-Regular.woff2",
  variable: "--font-mont_reg_font",
  weight: "400",
});

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    });
  }, [router.events]);

  return (
    <div
      className={`main overflow-clip ${items_font.variable}  ${mont_font.variable}  ${mont_reg_font.variable}`}
    >
      <div className="header overflow-hidden bg-white w-full py-2 fixed z-50 flex justify-between border-b border-solid border-[#ecebe7]">
        <Link href="/">
          <Image
            className="w-[160px]"
            width="580"
            height="148"
            src="/images/logo-retina.png"
            alt="logo"
          />
        </Link>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
