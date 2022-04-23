import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@images/logo.png";

const NavBar: NextPage = () => {
  const [mobileNavBarOpened, setMobileNavBarOpened] = React.useState(false);

  return (
    <nav className="container p-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <Image className="rounded-full" src={Logo} alt="Logo" layout="fixed" width={48} height={48} quality={100} />
          </a>
        </Link>
        <div className="text-white md:hidden">
          <button onClick={() => setMobileNavBarOpened(!mobileNavBarOpened)}>
            {mobileNavBarOpened ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:items-center md:flex md:font-bold md:text-white">
          <ul className="flex items-center gap-10">
            <li>
              <Link href="/">
                <a className="hover:text-sky-500">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a className="hover:text-sky-500">About</a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a className="hover:text-sky-500">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a className="hover:text-sky-500">Contact</a>
              </Link>
            </li>
          </ul>
          <span className="mx-10">&bull;</span>
          <ul className="flex items-center gap-10">
            <li>
              <Link href="/blog">
                <a className="hover:text-sky-500">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${mobileNavBarOpened ? "block" : "hidden"} bg-slate-800 absolute left-0 z-10 min-w-full md:hidden p-5`}>
        <ul className="flex flex-col items-center gap-10">
          <li>
            <Link href="/">
              <a className="hover:text-sky-500" onClick={() => setMobileNavBarOpened(false)}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className="hover:text-sky-500" onClick={() => setMobileNavBarOpened(!mobileNavBarOpened)}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a className="hover:text-sky-500" onClick={() => setMobileNavBarOpened(!mobileNavBarOpened)}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a className="hover:text-sky-500" onClick={() => setMobileNavBarOpened(!mobileNavBarOpened)}>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="hover:text-sky-500" onClick={() => setMobileNavBarOpened(!mobileNavBarOpened)}>
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
