import { NextPage } from "next";
import Head from "next/head";
import siteConfig from "../site.config";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO: NextPage<Props> = (props) => {
  const title = props.title ? props.title + " | " + siteConfig.title : siteConfig.title;
  const description = props.description ? props.description : siteConfig.description;
  const keywords = props.keywords ? props.keywords : siteConfig.keywords;
  const ogImage = props.ogImage ? siteConfig.url + "images/" + props.ogImage : siteConfig.url + "images/" + siteConfig.ogImage;
  return (
    <Head>
      <title>{title}</title>
      <meta name="image" content={ogImage} />
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export default SEO;
