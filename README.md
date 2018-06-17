## Start React from scratch

1. Create necessary directory structure
`
    mkdir react-boilerplate
    cd react-boilerplate
    mkdir -p src/components src/styles
`
2. Run **`npm init -y`** to start on the directory created (add -y if you want to go with default values)
3. Run **`npm install webpack webpack-cli --save-dev`** install webpack cli
4. Install React **```npm install react react-dom --save```**
5. Install Babel for converting the jsx, ES6 to ES5 **`npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev`**
6. Create an index.js file inside root of the /src folder
7. Create a index.html file inside root of the /src folder
8. Crate **`webpack.config.js`** file under root
9. Add Webpack loaders **`npm install css-loader style-loader --save-dev`**
10. create a .babelrc file inside root of the project directory add following content
11. ```js```
    ```{ ```
      ```"presets": [ ```
       ``` "env", ```
        ```"react"```
      ```] ```
  ```}```
  

env: This preset is used to transpile the ES6/ES7/ES8 code to ES5.
react: This preset is used to transpile JSX code to ES5.

12. Install Html-webpack-plugin : **`npm install html-webpack-plugin --save-dev`**
13. Install Webpack-dev-server : For hot reload **`npm install webpack-dev-server --save-dev`**
14. Add this to package.json under script section **`"start": "webpack-dev-server --mode development --open --hot"`**
15. **`npm start`** voila you are done...
