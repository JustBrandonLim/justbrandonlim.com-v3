import { NextPage } from "next";
import NavBar from "@components/NavBar";

interface Props {
  children: React.ReactNode;
}

const BasicLayout: NextPage<Props> = (props) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{props.children}</main>
      <footer className="min-h-full"></footer>
    </>
  );
};

export default BasicLayout;
