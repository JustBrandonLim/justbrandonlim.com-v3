import "../styles/globals.css";
import type { AppProps } from "next/app";
import BasicLayout from "@layouts/BasicLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
