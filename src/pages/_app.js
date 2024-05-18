import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";
import Image from "next/image";
import { useEffect } from "react";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

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

const burns_font = localFont({
  src: "../../public/fonts/TWKBurns-Regular.woff2",
  variable: "--font-burns_font",
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

  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`main overflow-clip ${burns_font.variable} ${manrope.variable} ${items_font.variable}  ${mont_font.variable}  ${mont_reg_font.variable}`}
    >
      <header className="header pl-4 xl:pl-8 overflow-hidden bg-white w-full py-4 fixed z-50 flex justify-between border-b border-solid border-[#ecebe7]">
        <Link href="/">
          <Image
            className="w-[110px]"
            width="580"
            height="148"
            src="/images/logo-retina.png"
            alt="logo"
          />
        </Link>
      </header>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <footer className="px-4 flex justify-between xl:px-8 pt-4 pb-8">
        <p className="font-sans">&copy; BW82 {currentYear}</p>

        <p className="font-sans">
          <a
            className="transition-opacity duration-500 hover:opacity-20"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/benwalkereightytwo/"
          >
            linkedin
          </a>
        </p>
      </footer>
      <Analytics />
    </div>
  );
}
