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

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nmodule.exports = {\n  dialect: 'sqlite',\n  storage: './database.sqlite',\n  define: {\n    timestamps: true,\n    underscored: true,\n    underscoredAll: true,\n    'createdAt': 'created_at',\n    // colocamos aqui manualmente para ele alterar a tabela pois o underscored tem um pequeno bug que nao reconhece essa coluna e a de baixo com o underscore\n    'updatedAt': 'updated_at'\n  }\n};\n\n//# sourceURL=webpack://projeto_todolist_node/./config/database.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ \"./src/database/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/user */ \"./src/routes/user.js\");\n\n\n\n\nclass App {\n  constructor() {\n    this.app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n    this.routes();\n  }\n  routes() {\n    this.app.use('/', _routes_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App().app);\n\n//# sourceURL=webpack://projeto_todolist_node/./src/app.js?");

/***/ }),

/***/ "./src/controllers/UserController.js":
/*!*******************************************!*\
  !*** ./src/controllers/UserController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./src/models/User.js\");\n\nclass UserController {\n  loginForm(req, res) {\n    res.render('index');\n  }\n  async login(req, res) {\n    const {\n      email = '',\n      password = ''\n    } = req.body;\n    console.log(email, password);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserController());\n\n//# sourceURL=webpack://projeto_todolist_node/./src/controllers/UserController.js?");

/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/database */ \"./config/database.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_database__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"./src/models/User.js\");\n\n\n\nconst models = [_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nconst connection = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize((_config_database__WEBPACK_IMPORTED_MODULE_1___default()));\nmodels.forEach(model => model.init(connection));\nmodels.forEach(model => model.associate && model.associate(connection.models));\n\n//# sourceURL=webpack://projeto_todolist_node/./src/database/index.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass User extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {\n  static init(sequelize) {\n    super.init({\n      name: {\n        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),\n        defaultValue: '',\n        validate: {\n          len: {\n            args: [3, 255],\n            msg: 'O nome precisa ter entre 3 e 255 caracteres'\n          }\n        }\n      },\n      email: {\n        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),\n        defaultValue: '',\n        unique: {\n          msg: 'Este email ja esta cadastrado no sistema'\n        },\n        validate: {\n          isEmail: {\n            msg: 'Email invalido'\n          }\n        }\n      },\n      password_hash: {\n        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().STRING),\n        defaultValue: ''\n      },\n      password: {\n        type: (sequelize__WEBPACK_IMPORTED_MODULE_0___default().VIRTUAL),\n        defaultValue: '',\n        validate: {\n          len: {\n            args: [5, 50],\n            msg: 'A senha precisa ter entre 5 e 50 caracteres'\n          }\n        }\n      }\n    }, {\n      sequelize\n    });\n    this.addHook('beforeSave', async user => {\n      if (user.password) {\n        user.password_hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(user.password, 8);\n      }\n    });\n    return this;\n  }\n  passwordValidate(password) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, this.password_hash);\n  }\n}\n\n//# sourceURL=webpack://projeto_todolist_node/./src/models/User.js?");

/***/ }),

/***/ "./src/routes/user.js":
/*!****************************!*\
  !*** ./src/routes/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_UserController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/UserController */ \"./src/controllers/UserController.js\");\n\n\nconst router = new express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/', _controllers_UserController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginForm);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://projeto_todolist_node/./src/routes/user.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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