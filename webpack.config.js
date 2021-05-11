const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin")
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    // 告诉webpack环境
    environment: {
      const: false, // 兼容ie8 不使用const
      arrowFunction: false // 兼容ie9不使用箭头函数
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
          loader: "babel-loader",
          options: {
            presets: [
              // 指定环境的插件
              ["@babel/preset-env",
                // 配置信息
                {
                  // 要兼容的目标浏览器
                  targets: {
                    "chrome": "58",
                    "ie": "11"
                  },
                  // 指定corejs的版本
                  "corejs": "3",
                  // 使用corejs的方式 "usage" 表示按需加载
                  "useBuiltIns": "usage"
                }
              ]
            ]
          }
        },
        "ts-loader"
      ],
      // 要排除的文件
      exclude: /node-modules/
    },{
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins:[
                [
                  "postcss-preset-env",
                  {
                    browsers: "last 2 versions"
                  }
                ]
              ]
            }
          }
        },
        "less-loader"
      ] 
    }]
  },
  // 配置Webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是一个自定义的title"
      template: "./src/index.html"
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}