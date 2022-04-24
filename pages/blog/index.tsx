import type { NextPage } from "next";
import SEO from "@components/SEO";

const Blog: NextPage = () => {
  return (
    <>
      <SEO title="Blog" />
      <section className="container max-w-3xl min-h-screen p-5 text-center">
        <h1 className="mb-5 text-4xl font-bold text-white">Blog</h1>
        <div className="flex flex-col gap-5 text-lg">
          <p>Hello! My website is currently still in development.</p>
          <p>I promise to get the blog up as soon as possible!</p>
        </div>
      </section>
    </>
  );
};

export default Blog;
