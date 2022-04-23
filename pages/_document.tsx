import { Html, Head, Main, NextScript } from "next/document";
import siteConfig from "../site.config";

export default function Document() {
  return (
    <Html lang={siteConfig.locale} className="scroll-smooth">
      <Head />
      <body className="bg-slate-900 text-slate-300 font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
