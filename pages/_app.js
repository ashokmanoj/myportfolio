// pages/_app.js
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import { PortfolioProvider } from "@/contextApi/PortfolioContext"; // named import


export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
    }
  }, []);

  return (
    <PortfolioProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem >
        <Component {...pageProps} />
      </ThemeProvider>
    </PortfolioProvider>
  );
}
