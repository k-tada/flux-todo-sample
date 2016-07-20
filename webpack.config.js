const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/js/app.js',
  output: {
    path: __dirname + '/www/js',
    publicPath: '/www/js',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www',
    port: 9090,
    inline: true
  },
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', [ 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss' ])
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', [ 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'less-loader' ])
    },
    {
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    }
    ]
  },
  postcss: [ autoprefixer({ browsers: [ 'last 2 versions'  ] }) ],
  plugins: [
    new ExtractTextPlugin('../assets/css/style.css', { allChunks: true })
  ]
}
