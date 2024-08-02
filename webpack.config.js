const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    filename: 'bundle.js', // output file
    path: path.resolve(__dirname, 'docs'), // output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/, // process HTML files
        use: ['html-loader'],
      },
      {
        test: /\.(js)$/, // process JS files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // source HTML file
      filename: 'index.html', // output HTML file
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 8000, // port to run the server
  },
  mode: 'development', // set the mode to development
};
