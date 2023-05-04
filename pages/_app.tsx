import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const nunito = Nunito({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.variable} font-nunito`}>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </main>
  );
}
