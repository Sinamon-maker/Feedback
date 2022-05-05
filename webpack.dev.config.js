const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const config = {
  entry: ['@babel/polyfill', './client/main.jsx'],
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  target: 'web',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 3080,
    host: 'localhost',
    index: 'index.html',
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: [
      {
        context: ['/api', '/auth', '/socket.io'],
        target: `http://localhost:${process.env.PORT || 8090}`,
        secure: false,
        changeOrigin: true,
        ws: true
      }
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {test: /\.(woff|woff2|ttf|eot)$/,
      use:[{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype:'application/octet-stream'
        }
      }]
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
        test: /\.svg/,
        use:
          {
            loader: 'svg-url-loader',
options: {
          limit: 10000,
          },
        }
      },
    ],
  },
  plugins: [

    new MiniCSSExtractPlugin({
      filename: 'css/main.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/client/index.html`,
          to: 'index.html'
        },
        {
          from:`${__dirname}/client/Icons`,
          to:'Icons',
        },
          {
          from:`${__dirname}/client/Fonts`,
          to:'Fonts',
        },

          {
          from:`${__dirname}/client/images`,
          to:'Images',
        }
      ]
    })
  ]
}

module.exports = config