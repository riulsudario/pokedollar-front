module.exports = {
  async redirects() {
    return [
      {
        source: 'https://www.pokedollar.herokuapp.com',
        destination: 'https://pokedollar.herokuapp.com',
        permanent: true,
      },
    ]
  },
}
