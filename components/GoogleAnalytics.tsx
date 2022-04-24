import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import siteConfig from "../site.config";

const GoogleAnalytics: NextPage = () => {
  return (
    <Head>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=" + siteConfig.googleAnalyticsTag} />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${siteConfig.googleAnalyticsTag});
        `}
      </Script>
    </Head>
  );
};

export default GoogleAnalytics;
