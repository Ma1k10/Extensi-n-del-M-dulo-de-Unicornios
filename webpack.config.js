const path = require('path');

module.exports = {
  entry: './src/index.js', // o './src/main.jsx' si usás JSX puro
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/' // importante para que funcione bien react-router-dom
  },
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'] // permite importar sin extensiones
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // para JS y JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, // para CSS
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // para imágenes
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Tu código que antes estaba en onBefore y onAfter
      return middlewares;
    }
  }
  
    }
