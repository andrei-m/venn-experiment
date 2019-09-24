module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
  },
};
