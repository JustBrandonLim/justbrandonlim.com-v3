import { NextPage } from "next";

interface Props {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const Icon: NextPage<Props> = (props) => {
  return (
    <a className="bg-sky-500 hover:bg-sky-400" href={props.href} aria-label={props.ariaLabel} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Icon;
