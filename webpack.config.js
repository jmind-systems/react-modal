const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/icons'),
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      utils: path.resolve(__dirname, 'src/utils/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      types: path.resolve(__dirname, 'src/types/'),
      components: path.resolve(__dirname, 'src/components/'),
      icons: path.resolve(__dirname, 'src/icons')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '@jmind.systems/react-modal',
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  optimization: {
    minimize: true
  },
  externals: {
    'aphrodite/no-important': {
      commonjs: 'aphrodite/no-important.js',
      commonjs2: 'aphrodite/no-important.js',
      amd: 'aphrodite/no-important.js'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './package.json', to: path.resolve(__dirname, 'dist') },
        { from: './README.md', to: path.resolve(__dirname, 'dist') }
      ]
    })
  ]
};
