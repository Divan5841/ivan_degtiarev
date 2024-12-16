const path = require('path');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const packageJson = require('./package.json');

module.exports = (env_config) => {
  const dotenv = new Dotenv({
    path: path.resolve(__dirname, env_config.ENV_PATH),
  });

  const env = dotenv.getEnvs().env;

  const IS_PROD = env.MODE === 'production';
  const PATH = 'build';
  const PUBLIC_PATH = env.STATIC_PATH + '/';

  function getOptimization(is_prod) {
    if (is_prod) {
      return {
        minimizer: [new CssMinimizerPlugin(), '...'],
        moduleIds: 'deterministic',
        runtimeChunk: {
          name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
        },
        splitChunks: {
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              priority: 20,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'async',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    } else {
      return {};
    }
  }

  function getRules(is_prod) {
    const rules = [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
      },
      {
        test: /\.(zpt|png|svg|gif|glb|gltf|jpe?g|ogg|mp3|obj|fbx|wav|fnf|stl|mp4|hdr|webm|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/media/[name][ext]',
        },
      },
    ];

    if (is_prod) {
      rules.push({
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:6]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      });
    } else {
      rules.push({
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      });
    }

    return rules;
  }

  function getPlugins(is_prod) {
    const plugins = [
      dotenv,
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve(__dirname, 'src/index.html'),
      }),
    ];

    if (is_prod) {
      plugins.push(
        ...[
          new MiniCssExtractPlugin({
            filename: `css/${packageJson.version}/[name].[contenthash].css`,
            chunkFilename: `css/${packageJson.version}/[id].[contenthash].css`,
          }),
        ],
      );
    }

    return plugins;
  }

  return {
    mode: env.MODE,
    entry: path.resolve(__dirname, 'src/index.tsx'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname), 'node_modules'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
    output: {
      publicPath: PUBLIC_PATH,
      path: path.resolve(__dirname, PATH),
      filename: `js/${packageJson.version}/[name].[contenthash].js`,
      chunkFilename: `js/${packageJson.version}/[name].js`,
    },
    devtool: env.DEVTOOL === 'false' ? false : env.DEVTOOL,
    optimization: getOptimization(IS_PROD),
    module: {
      rules: getRules(IS_PROD),
    },
    plugins: getPlugins(IS_PROD),
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
