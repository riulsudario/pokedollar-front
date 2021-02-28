import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render () {
    const schema = {
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

    return (
      <Html lang="pt-BR">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
