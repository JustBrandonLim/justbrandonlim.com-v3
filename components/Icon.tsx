import { NextPage } from "next";

interface Props {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const Icon: NextPage<Props> = (props) => {
  return (
    <a className="w-6 h-6 fill-slate-300 hover:fill-sky-500" href={props.href} aria-label={props.ariaLabel} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Icon;
