import type { NextPage } from "next";
import SEO from "@components/SEO";

const Custom404: NextPage = () => {
  return (
    <>
      <SEO />
      <section className="container max-w-3xl min-h-screen p-5 text-center">
        <h1 className="mb-5 text-4xl font-bold text-white">Page Not Found</h1>
        <p className="text-lg">Oops! Check back again at a later time?</p>
      </section>
    </>
  );
};

export default Custom404;
