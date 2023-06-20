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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addItem.js */ \"./src/modules/addItem.js\");\n/* harmony import */ var _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_addItem_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar todoList = [{\n  index: 2,\n  description: 'Booking my flight tomorrow',\n  completed: false\n}, {\n  index: 1,\n  description: 'Visiting my children school friday',\n  completed: false\n}, {\n  index: 3,\n  description: 'Going for groceries shopping',\n  completed: false\n}, {\n  index: 5,\n  description: 'Visiting the gym',\n  completed: false\n}, {\n  index: 4,\n  description: 'Visiting the the market',\n  completed: false\n}];\nvar sortTodoList = todoList.sort(function (index1, index2) {\n  if (index1.index > index2.index) {\n    return 1;\n  }\n  if (index1.index < index2.index) {\n    return -1;\n  }\n  return 0;\n});\nvar showTodo = function showTodo() {\n  var listContainer = document.querySelector('.list-items');\n  var placeholder = '';\n  _modules_addItem_js__WEBPACK_IMPORTED_MODULE_1___default()();\n  sortTodoList.forEach(function (todo) {\n    placeholder += \"\\n        <li>\\n            <div>\\n                <input type=\\\"checkbox\\\" class=\\\"checkbox\\\" name=\\\"checkbox\\\">\\n                <lable>\".concat(todo.description, \"</lable>\\n            </div>\\n            <i class=\\\"fas fa-ellipsis-v\\\"></i>\\n        </li>\\n        \");\n  });\n  listContainer.innerHTML = placeholder;\n};\nshowTodo();\n\n//# sourceURL=webpack://todo-list-with-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/addItem.js":
/*!********************************!*\
  !*** ./src/modules/addItem.js ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/frankodev/microverse-training/Todo-list-with-webpack/src/modules/addItem.js: Binding invalid left-hand side in function parameter list. (4:29)\\n\\n\\u001b[0m \\u001b[90m 2 |\\u001b[39m \\u001b[36mconst\\u001b[39m addItem \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m{\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m     \\u001b[36mconst\\u001b[39m button \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m'.add'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 |\\u001b[39m     button\\u001b[33m.\\u001b[39maddEventListener((\\u001b[32m'click'\\u001b[39m) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m                              \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 |\\u001b[39m         conslo\\u001b[33m.\\u001b[39mlog(\\u001b[32m'clicked'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 |\\u001b[39m     })\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 |\\u001b[39m }\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at instantiate (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:63:32)\\n    at constructor (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:358:12)\\n    at Parser.raise (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:3255:19)\\n    at Parser.checkLVal (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:7465:12)\\n    at Parser.checkParams (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11980:12)\\n    at Parser.<anonymous> (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11955:14)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:13202:23)\\n    at Parser.parseBlockBody (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:13178:10)\\n    at Parser.parseBlock (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:13166:10)\\n    at Parser.parseFunctionBody (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11947:24)\\n    at Parser.parseArrowExpression (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11922:10)\\n    at Parser.parseParenAndDistinguishExpression (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11525:12)\\n    at Parser.parseExprAtom (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11164:23)\\n    at Parser.parseExprSubscripts (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10890:23)\\n    at Parser.parseUpdate (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10873:21)\\n    at Parser.parseMaybeUnary (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10849:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10687:61)\\n    at Parser.parseExprOps (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10692:23)\\n    at Parser.parseMaybeConditional (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10669:23)\\n    at Parser.parseMaybeAssign (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10630:21)\\n    at /Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10600:39\\n    at Parser.allowInAnd (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:12280:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10600:17)\\n    at Parser.parseExprListItem (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:12032:18)\\n    at Parser.parseCallExpressionArguments (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11087:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10997:29)\\n    at Parser.parseSubscript (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10932:19)\\n    at Parser.parseSubscripts (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10903:19)\\n    at Parser.parseExprSubscripts (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10894:17)\\n    at Parser.parseUpdate (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10873:21)\\n    at Parser.parseMaybeUnary (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10849:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10687:61)\\n    at Parser.parseExprOps (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10692:23)\\n    at Parser.parseMaybeConditional (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10669:23)\\n    at Parser.parseMaybeAssign (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10630:21)\\n    at Parser.parseExpressionBase (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10584:23)\\n    at /Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10580:39\\n    at Parser.allowInAnd (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:12275:16)\\n    at Parser.parseExpression (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10580:17)\\n    at Parser.parseStatementContent (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:12733:23)\\n    at Parser.parseStatementLike (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:12584:17)\\n    at Parser.parseStatementListItem (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:12564:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:13185:61)\\n    at Parser.parseBlockBody (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:13178:10)\\n    at Parser.parseBlock (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:13166:10)\\n    at Parser.parseFunctionBody (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11947:24)\\n    at Parser.parseArrowExpression (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11922:10)\\n    at Parser.parseParenAndDistinguishExpression (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11525:12)\\n    at Parser.parseExprAtom (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:11164:23)\\n    at Parser.parseExprSubscripts (/Users/frankodev/microverse-training/Todo-list-with-webpack/node_modules/@babel/parser/lib/index.js:10890:23)\");\n\n//# sourceURL=webpack://todo-list-with-webpack/./src/modules/addItem.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  background-color: rgb(248, 248, 248);\n  font-family: 'Roboto', sans-serif;\n  color: #888;\n}\n\n.content {\n  width: 500px;\n  background-color: white;\n  margin: 0 auto;\n  box-shadow: 0 2px 8px 0 #888;\n}\n\n.list ul li {\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  border-bottom: 1.4px solid #ddd;\n  padding: 15px 20px 20px 15px;\n}\n\n.list ul {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 40px;\n  padding: 10px 20px 0 10px;\n  border-bottom: 1.4px solid #ddd;\n}\n\n.input {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10px;\n  padding-right: 2px;\n  border-bottom: 1.4px solid #ddd;\n}\n\n.input input {\n  width: 335px;\n  height: 45px;\n  border: none;\n  padding-left: 10px;\n  color: #888;\n  font-family: 'Roboto', serif;\n  font-size: larger;\n  font-weight: 300;\n}\n\n.input input::placeholder {\n  font-style: italic;\n  font-weight: 200;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton.clear {\n  width: 500px;\n  height: 30px;\n  padding-bottom: 30px;\n  padding-top: 15px;\n  text-align: center;\n  border: none;\n  font-family: 'Roboto', serif;\n  font-size: larger;\n  font-weight: 200;\n  cursor: pointer;\n}\n\ninput.checkbox {\n  width: 17px;\n  height: 17px;\n  position: relative;\n  top: 3px;\n  border: 33px solid black;\n}\n\nbutton.add {\n  background: none;\n  border: none;\n  height: 35px;\n  width: 56px;\n  cursor: pointer;\n}\n\ni.fa-solid.fa-arrow-turn-down {\n  transform: rotate(90deg);\n}\n\ni.fa-solid {\n  color: rgb(211, 211, 211);\n}\n\n.fas {\n  color: rgb(211, 211, 211);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-with-webpack/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-with-webpack/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-with-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;