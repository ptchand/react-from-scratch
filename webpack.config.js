/**
 * Created by cpt1 on 6/17/18.
 */
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader" //to load our JSX/JavaScript files
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
                //css-loader : to load and bundle all of the CSS files into one file
                //style-loader: will add all of the styles inside the style tag of the document
            }
        ]
    },

    //this plugin generates an HTML file, injects the script inside the HTML file and writes this file to dist/index.html
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};