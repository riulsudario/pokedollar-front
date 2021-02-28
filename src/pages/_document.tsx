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
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
