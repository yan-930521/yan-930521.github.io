const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // 進入點
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 找到符合規則的檔案
        include: [path.resolve(__dirname, "./src/")], // 從指定資料夾尋找
        use: "ts-loader", // 使用特定 loader 解析、轉換檔案
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // import 時引入的檔案可自動嘗試匹配副檔名，原本是 import { funcA } from "func.ts"，現在可 import { funcA } from "func"
  },
  devtool: "eval-source-map", // 開發工具 source-map，程式錯誤時，在 F12 的 console 會指出哪裡出錯，若有 source-map，錯誤會指向 ts 檔
  output: {
    // 匯出點
    publicPath: "./dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
};