import path from 'path';  
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';

export default () => ({
  entry: [
    path.join(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-0'
              ]
            }
          }
        ]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use:'url-loader' },
      { test: /\.(ttf|eot|svg|jpe?g|png|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        include: /flexboxgrid/
      },
      { test: /\.json$/, use: 'json-loader' }
    ]
  },
  node: {
    console: 'mock',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
});