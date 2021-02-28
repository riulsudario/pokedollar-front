import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render () {
    const schemaWebPage = {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "url": "https://pokedollar.herokuapp.com/",
      "potentialAction": {
        "@type": "ViewAction",
          "target": [
            "https://pokedollar.herokuapp.com/dollar",
            {
              "@type": "EntryPoint",
              "urlTemplate": "https://pokedollar.herokuapp.com/dollar",
              "contentType": "application/json+ld"
            },
          ]
        }
      }

      const schemaOrganization = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Pokédollar",
        "url": "https://pokedollar.herokuapp.com/",
        "logo": "https://pokedollar.herokuapp.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/riul.sudario/",
          "https://www.instagram.com/riulsudario/",
          "https://www.linkedin.com/in/riulsudario/"
        ],
        }

    return (
      <Html lang="pt-BR">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaWebPage)}} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schemaOrganization)}} />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3XWR84FKB"></script>
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G3XWR84FKB');`
          }} />

          <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
          <link rel="manifest" href="favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
