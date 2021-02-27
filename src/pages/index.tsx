import { Navbar } from "../components/Navbar";
import { HomeContainer } from "../components/HomeContainer";
import { ShareButton } from "../components/ShareButton";
import Head from "next/head";
import Link from 'next/link';

import meta from '../data/meta';

export default function Home() {
  return(
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="google-site-verification" content={meta.google_verification} />
        <meta name="robots" />

        <meta property="og:image"         content={meta.og.image.url} />
        <meta property="og:image:type"    content={meta.og.image.type} />
        <meta property="og:image:width"   content={meta.og.image.width} />
        <meta property="og:image:height"  content={meta.og.image.height} />
        <meta property="og:image:alt"     content={meta.og.image.alt} />

        <meta property="og:description"   content={meta.og.description} />
        <meta property="og:url"           content={meta.og.url} />
        <meta property="og:type"          content={meta.og.type} />
        <meta property="og:title"         content={meta.og.title} />
        <meta property="og:locale"        content={meta.og.locale} />
        <meta property="og:site_name"     content={meta.og.site_name} />

        <meta name="twitter:description"  content={meta.twitter.description} />
        <meta name="twitter:title"        content={meta.twitter.title} />
        <meta name="twitter:image"        content={meta.twitter.image} />
        <meta name="twitter:card"         content={meta.twitter.card} />
        <meta name="twitter:site"         content={meta.twitter.author} />
        <meta name="twitter:creator"      content={meta.twitter.author} />
      </Head>

      <Navbar />
      <HomeContainer />
      <ShareButton />
      {/* <Link href="/dollar">
        <p>Dólar</p>
      </Link> */}
    </div>
  );
}
