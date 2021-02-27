import { Navbar } from "../components/Navbar";
import { HomeContainer } from "../components/HomeContainer";
import { ShareButton } from "../components/ShareButton";
import Head from "next/head";

import meta from '../data/meta';

export default function Home() {
  return(
    <div>
      <Head>
        <title>{meta.index.title}</title>
        <link rel="canonical" href="https://pokedollar.herokuapp.com" />
        <meta name="description" content={meta.index.description} />
        <meta name="google-site-verification" content={meta.index.google_verification} />
        <meta name="robots" />

        <meta property="og:image"         content={meta.index.og.image.url} />
        <meta property="og:image:type"    content={meta.index.og.image.type} />
        <meta property="og:image:width"   content={meta.index.og.image.width} />
        <meta property="og:image:height"  content={meta.index.og.image.height} />
        <meta property="og:image:alt"     content={meta.index.og.image.alt} />

        <meta property="og:description"   content={meta.index.og.description} />
        <meta property="og:url"           content={meta.index.og.url} />
        <meta property="og:type"          content={meta.index.og.type} />
        <meta property="og:title"         content={meta.index.og.title} />
        <meta property="og:locale"        content={meta.index.og.locale} />
        <meta property="og:site_name"     content={meta.index.og.site_name} />

        <meta name="twitter:description"  content={meta.index.twitter.description} />
        <meta name="twitter:title"        content={meta.index.twitter.title} />
        <meta name="twitter:image"        content={meta.index.twitter.image} />
        <meta name="twitter:card"         content={meta.index.twitter.card} />
        <meta name="twitter:site"         content={meta.index.twitter.author} />
        <meta name="twitter:creator"      content={meta.index.twitter.author} />
      </Head>

      <Navbar />
      <HomeContainer />
      <ShareButton />
    </div>
  );
}
