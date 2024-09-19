import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.tsx",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, {
            loader: "css-loader", 
            options: {
              modules: true,
              modules: {
                exportLocalsConvention: "camelCase", 
                localIdentName : "[path][name]__[local]--[hash:base64:5]" 
              }
            }
        }    
        , "sass-loader"], 
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          "style-loader",
          "css-loader", 
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: "errors-only",
    },
    hot: true,
  },
};