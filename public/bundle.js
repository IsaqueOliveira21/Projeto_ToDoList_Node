/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst {\n  User\n} = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst app = express();\nconst PORT = process.env.PORT || 3000;\napp.use(express.static(path.join(__dirname, '../public')));\napp.get('/', (req, res) => {\n  res.sendFile(path.join(__dirname, 'views/index.html'));\n});\napp.get('/users', async (req, res) => {\n  const users = await User.findAll();\n  res.json(users);\n});\napp.listen(PORT, () => {\n  console.log(`Server is running on port ${PORT}`);\n});\n\n//# sourceURL=webpack://projeto_todolist_node/./src/app.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  Sequelize,\n  DataTypes\n} = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst config = (__webpack_require__(/*! ../../config/config.json */ \"./config/config.json\").development);\nconst sequelize = new Sequelize(config);\nconst User = sequelize.define('User', {\n  name: DataTypes.STRING,\n  email: DataTypes.STRING\n});\nsequelize.sync();\nmodule.exports = {\n  sequelize,\n  User\n};\n\n//# sourceURL=webpack://projeto_todolist_node/./src/models/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"development\":{\"dialect\":\"sqlite\",\"storage\":\"./database.sqlite\"}}');\n\n//# sourceURL=webpack://projeto_todolist_node/./config/config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;