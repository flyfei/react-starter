const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mohamad Jahani',
      template: './src/index.html',
      inject: 'body'
    })
  ]
};
