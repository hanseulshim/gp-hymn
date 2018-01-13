module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'gp-hymn'
        }
      }
    ],
    '@neutrinojs/jest',
    'neutrino-middleware-style-loader',
    'neutrino-middleware-sass'
  ]
};
