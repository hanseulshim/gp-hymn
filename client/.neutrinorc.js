module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'GP Hymn'
        }
      }
    ],
    '@neutrinojs/jest',
    'neutrino-middleware-style-loader',
    'neutrino-middleware-sass'
  ]
};
