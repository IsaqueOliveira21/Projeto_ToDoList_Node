const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/app.js',
  output: {
    filename: 'serverBundle.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }],
  },
  mode: 'development',
};
