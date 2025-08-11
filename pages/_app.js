import "@/styles/globals.css";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import { ThemeProvider } from "@/context/themeContext";
import { PortfolioProvider } from "@/contextApi/PortfolioContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID); // replace with your GA ID
  }, []);

  return (
    <ThemeProvider>
      <PortfolioProvider>
        <Component {...pageProps} />
      </PortfolioProvider>
    </ThemeProvider>
  );
}
