import type { NextPage } from "next";
import SEO from "@components/SEO";

const Blog: NextPage = () => {
  return (
    <>
      <SEO title="Blog" />
      <section className="container max-w-3xl min-h-screen p-5 text-center">
        <h1 className="mb-5 text-4xl font-bold text-white">Blog</h1>
        <p className="text-lg">Hi there, my website is currently still under development. I promise that the blog will be available soon!</p>
      </section>
    </>
  );
};

export default Blog;
