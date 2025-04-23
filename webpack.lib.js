const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
   mode: "production",
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "slide-in.umd.js",
      library: {
         name: "SlideIn",
         type: "umd"
      },
      globalObject: "this",          // ensures UMD works in Node & browser
      clean: true
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [
               "style-loader", // Injects CSS into the DOM as a <style> tag
               "css-loader"    // Interprets @import and url() like import/require()
            ]
         }
      ]
   },
});
