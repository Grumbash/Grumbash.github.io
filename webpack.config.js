const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script/main.js',
  output: {
    path: path.resolve(__dirname, './dist/script'),
    filename: 'bundle.js',
    publicPath: 'dist/script'
  },
  devServer: {
    overlay: true,
  }
};
