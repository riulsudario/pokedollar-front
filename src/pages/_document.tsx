import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render () {
    const description = 'Pokedollar, veja o valor do dólar representado por um Pokémon!';
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content={description} />
          <meta name="robots" content="all" />
          <meta name="keywords" content="pokemon, pokémon, pokedolar, pokedollar, pokédollar,
                                         dolar hoje, valor do dolar, pokedex, dolar, real,
                                         dolar em real, usd, brl, usd brl, cambio, cambio,
                                         dolar valor, dolar comercial, dolar turismo" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
