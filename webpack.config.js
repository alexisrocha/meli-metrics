module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: "bundle.js",
      path: __dirname + '/public'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    context: __dirname,
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
          'file-loader',
          ],
          },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: [
              "@babel/preset-react",
              "@babel/env"
            ]
          }
        }
      ]
    },
    devtool: 'source-map'
  }