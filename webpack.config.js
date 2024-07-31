const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    filename: 'bundle.js', // output file
    path: path.resolve(__dirname, 'dist'), // output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js)$/, // process JS files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8000, // port to run the server
  },
  mode: 'development', // set the mode to development
};
