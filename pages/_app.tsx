import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const nunito = Nunito({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={`${nunito.variable} font-nunito`}>
      {getLayout(<Component {...pageProps} />)}
      <Toaster position="top-right" />
    </main>
  );
}
