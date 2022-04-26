import { NextPage } from "next";
import Head from "next/head";
import siteConfig from "../site.config";

interface Props {
  title?: string;
  description?: string;
  url: string;
  keywords?: string;
  image?: string;
}

const SEO: NextPage<Props> = (props) => {
  const title = props.title ? props.title + " | " + siteConfig.title : siteConfig.title;
  const description = props.description ? props.description : siteConfig.description;
  const keywords = props.keywords ? props.keywords : siteConfig.keywords;
  const url = siteConfig.url + props.url;
  const image = props.image ? siteConfig.url + "images/" + props.image : siteConfig.url + "images/" + siteConfig.image;
  return (
    <Head>
      <title>{title}</title>
      <meta name="image" content={image} key="image" />
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />
      <link rel="canonical" href={url} key="canonical" />
      <meta name="robots" content="all" key="robots" />

      <meta property="og:site_name" content={siteConfig.title} key="ogSiteName" />
      <meta property="og:title" content={title} key="ogTitle" />
      <meta property="og:type" content="website" key="ogType" />
      <meta property="og:image" content={image} key="ogImage" />
      <meta property="og:url" content={url} key="ogUrl" />
      <meta property="og:description" content={description} key="ogDescription" />
    </Head>
  );
};

export default SEO;
