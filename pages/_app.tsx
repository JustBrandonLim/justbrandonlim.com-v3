import "../styles/globals.css";
import type { AppProps } from "next/app";
import BasicLayout from "@layouts/BasicLayout";
import GoogleAnalytics from "@components/GoogleAnalytics";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </BasicLayout>
  );
}
