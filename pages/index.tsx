import type { NextPage } from "next";
import SEO from "@components/SEO";
import Image from "next/image";
import BrandonLim from "@images/brandon-lim.png";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <section className="container flex flex-col items-center justify-center max-w-3xl min-h-screen gap-5 p-5 text-center">
        <Image className="rounded-full" src={BrandonLim} alt="Brandon Lim" layout="fixed" width={200} height={200} quality={100} placeholder="blur" />
        <h1 className="text-6xl font-bold text-white">Hi, I&apos;m Brandon Lim.</h1>
        <h2 className="text-2xl">I&apos;m an aspiring software engineer based in Singapore.</h2>
      </section>
      <section id="about" className="container max-w-3xl p-5 text-center">
        <h1 className="mb-5 text-4xl font-bold text-white">About</h1>
        <div className="flex flex-col gap-5 text-lg">
          <p>Hello! My name is Brandon and I love everything about programming. My passion in programming started way back in 2011 at the age of 12 when I got my first computer.</p>
          <p>Today, I am the proud co-founder of Beeware, a software solutions start-up.</p>
          <p>My goal is to launch an online course in the near future to help beginners learn how to build their first webpage.</p>
        </div>
      </section>
      <section id="projects" className="container max-w-3xl p-5 text-center">
        <h1 className="mb-5 text-4xl font-bold text-white">Projects</h1>
        <p className="text-lg">Coming soon!</p>
      </section>
      <section id="contact" className="container max-w-3xl p-5 text-center">
        <h1 className="mb-5 text-4xl font-bold text-white">Contact</h1>
        <div className="flex flex-col items-center gap-5 text-lg">
          <p>I am always looking forward to making new connections, so feel free to drop a message!</p>
          <a className="px-5 py-3 text-white rounded-full w-max border-2 border-sky-500 hover:bg-sky-500/20 transition-colors duration-300" href="mailto:hello@justbrandonlim.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
            Say Hello
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
