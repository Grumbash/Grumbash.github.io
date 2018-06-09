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
  },
  devtool: "eval-sourcemap",
  module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
              ]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          }
        ]
    }
};
