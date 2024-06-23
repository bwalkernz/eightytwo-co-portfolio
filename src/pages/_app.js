import "@/styles/globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function App({ Component, pageProps, router }) {
  return (
    <div className={`main overflow-clip  ${manrope.variable}`}>
      <Component key={router.route} {...pageProps} />
    </div>
  );
}
