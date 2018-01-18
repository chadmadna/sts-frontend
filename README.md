
VisualOps Frontend
=====================

Frontend code for CommitWorks' VisualOps application.

### Tools Used
* ReactJS
* OpenLayers
* PouchDB

### Setup

Install Yarn as the default package manager and Gulp as the build tool, then install the dependencies and start the server.

```
npm install -g yarn gulp
yarn install
yarn start
open http://localhost:3000
```

### Build

Building bundles the JavaScript code with `src/index.js` as the entry point along with `index.html` into the `build` directory. The Webpack configuration used for the build process is `webpack.config.build.js`.
```
yarn build
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This project includes React ESLint configuration. However, linting is automatically run for every change made on the source files while running `yarn start` and when building using `yarn build`. If the lint fails with lint errors, the compilation would exit with errors.

```
yarn lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Yarn](https://github.com/yarnpkg/yarn)
* [Gulp](https://github.com/gulpjs/gulp)
