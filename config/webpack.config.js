/* eslint-env node */

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'app.js',

      /**
       * Necessary because our bundles are served from an origin (specified here) that's different
       * than the page origin.
       */
      publicPath: 'http://localhost:8080/'
    },
    devServer: {
      // Necessary for the cross-origin requests made as part of HMR.
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    module: {
      rules: [{
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              /**
               * Setting `modules: false` here is necessary for `react-hot-loader` per
               * https://github.com/gaearon/react-hot-loader/tree/master/docs#webpack-2
               */
              ['env', { modules: false }],
              'react'
            ]
          }
        }
      }]
    }
  };
};
