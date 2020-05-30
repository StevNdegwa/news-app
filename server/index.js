/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server-src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/index.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nbody {\\n  font-family: \\\"Comic Sans Ms\\\",\\\"Century Gothic\\\";\\n  font-size: 16px; }\\n\\ndiv#root {\\n  display: grid;\\n  grid-column-gap: 0;\\n  grid-row-gap: 0;\\n  grid-template-columns: 10% 10% 10% 10% 5% 5% 5% 5% 10% 10% 10% 10%; }\\n\\n.news-app-icons {\\n  cursor: pointer; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/app/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./server-src/getnewshandler.js":
/*!**************************************!*\
  !*** ./server-src/getnewshandler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getNewsHandler; });\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction getNewsHandler(_x, _x2, _x3) {\n  return _getNewsHandler.apply(this, arguments);\n}\n\nfunction _getNewsHandler() {\n  _getNewsHandler = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(request, response, next) {\n    var category, news, to;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            category = request.params.category;\n\n            if (!category) {\n              _context.next = 25;\n              break;\n            }\n\n            _context.prev = 2;\n            _context.t0 = category;\n            _context.next = _context.t0 === \"topics\" ? 6 : 11;\n            break;\n\n          case 6:\n            to = request.query.to;\n            _context.next = 9;\n            return fetchTopics(to);\n\n          case 9:\n            news = _context.sent;\n            return _context.abrupt(\"break\", 14);\n\n          case 11:\n            _context.next = 13;\n            return fetchTopNews();\n\n          case 13:\n            news = _context.sent;\n\n          case 14:\n            console.log(\"------------------------------------------\");\n            console.log(news);\n            console.log(\"------------------------------------------\");\n            return _context.abrupt(\"return\", response.json(news));\n\n          case 20:\n            _context.prev = 20;\n            _context.t1 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", next(_context.t1));\n\n          case 23:\n            _context.next = 26;\n            break;\n\n          case 25:\n            return _context.abrupt(\"return\", response.json({\n              message: \"Invalid Request\"\n            }));\n\n          case 26:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 20]]);\n  }));\n  return _getNewsHandler.apply(this, arguments);\n}\n\nfunction fetchTopics(topic) {\n  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"https://gnews.io/api/v3/topics/\".concat(topic, \"?token=e44696b883dc0684501c463c4bf8c5a9\"), {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  });\n}\n\nfunction fetchTopNews() {\n  return cross_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"https://gnews.io/api/v3/top-news?token=e44696b883dc0684501c463c4bf8c5a9\", {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  });\n}\n\n//# sourceURL=webpack:///./server-src/getnewshandler.js?");

/***/ }),

/***/ "./server-src/globals.js":
/*!*******************************!*\
  !*** ./server-src/globals.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var domino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domino */ \"domino\");\n/* harmony import */ var domino__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(domino__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\nvar template = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(indexFile).toString();\nvar winObj = domino__WEBPACK_IMPORTED_MODULE_2___default.a.createWindow(template);\nglobal.window = winObj;\nglobal.document = winObj.document;\n\n//# sourceURL=webpack:///./server-src/globals.js?");

/***/ }),

/***/ "./server-src/index.js":
/*!*****************************!*\
  !*** ./server-src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _getnewshandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getnewshandler */ \"./server-src/getnewshandler.js\");\n/* harmony import */ var _mainHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainHandler */ \"./server-src/mainHandler.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()(\"combined\"));\napp.get(\"/news/articles/:category\", _getnewshandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.get(\"/\", _mainHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"build\"));\napp.use(function (error, request, response, next) {\n  console.error(error);\n  return response.status(500).json({\n    message: \"Currently Unavailable\"\n  });\n});\napp.listen(7000, function () {\n  console.log(\"Listening to port 7000\");\n});\n\n//# sourceURL=webpack:///./server-src/index.js?");

/***/ }),

/***/ "./server-src/mainHandler.js":
/*!***********************************!*\
  !*** ./server-src/mainHandler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mainHandler; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.js */ \"./server-src/globals.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_app_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/app/App */ \"./src/app/App.js\");\n\n\n\n\n\n\n\nfunction mainHandler(request, response, next) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ServerStyleSheet\"]();\n\n  try {\n    var content = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_app_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n    var html = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(indexFile, \"utf-8\");\n    html = html.replace(\"<ssrstyle></ssrstyle>\", sheet.getStyleTags());\n    html = html.replace(\"<div id=\\\"root\\\"></div>\", \"<div id=\\\"root\\\">\".concat(content, \"</div>\"));\n    return response.send(html);\n  } catch (error) {\n    return next(error);\n  } finally {\n    sheet.seal();\n  }\n}\n\n//# sourceURL=webpack:///./server-src/mainHandler.js?");

/***/ }),

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ \"react-icons\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./src/app/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ \"./src/app/components/Home/index.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/About */ \"./src/app/components/About/index.js\");\n/* harmony import */ var _components_ContactUs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ContactUs */ \"./src/app/components/ContactUs/index.js\");\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__[\"IconContext\"].Provider, {\n    value: {\n      className: \"news-app-icons\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/about\",\n    component: _components_About__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/contact-us\",\n    component: _components_ContactUs__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    component: _components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/app/App.js?");

/***/ }),

/***/ "./src/app/components/About/About.jsx":
/*!********************************************!*\
  !*** ./src/app/components/About/About.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/app/components/Header/index.js\");\n\n\nfunction About() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), \"About Page\");\n}\n\n//# sourceURL=webpack:///./src/app/components/About/About.jsx?");

/***/ }),

/***/ "./src/app/components/About/index.js":
/*!*******************************************!*\
  !*** ./src/app/components/About/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.jsx */ \"./src/app/components/About/About.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_About_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app/components/About/index.js?");

/***/ }),

/***/ "./src/app/components/ContactUs/ContactUs.jsx":
/*!****************************************************!*\
  !*** ./src/app/components/ContactUs/ContactUs.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactUs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/app/components/Header/index.js\");\n\n\nfunction ContactUs() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), \"Contact Us\");\n}\n\n//# sourceURL=webpack:///./src/app/components/ContactUs/ContactUs.jsx?");

/***/ }),

/***/ "./src/app/components/ContactUs/index.js":
/*!***********************************************!*\
  !*** ./src/app/components/ContactUs/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ContactUs_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.jsx */ \"./src/app/components/ContactUs/ContactUs.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ContactUs_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app/components/ContactUs/index.js?");

/***/ }),

/***/ "./src/app/components/Footer/Footer.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/Footer/Footer.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/app/components/Footer/styles.js\");\n\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"MyFooter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Copyright \\xA9 2020\"));\n}\n\n//# sourceURL=webpack:///./src/app/components/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/app/components/Footer/index.js":
/*!********************************************!*\
  !*** ./src/app/components/Footer/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.jsx */ \"./src/app/components/Footer/Footer.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Footer_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app/components/Footer/index.js?");

/***/ }),

/***/ "./src/app/components/Footer/styles.js":
/*!*********************************************!*\
  !*** ./src/app/components/Footer/styles.js ***!
  \*********************************************/
/*! exports provided: MyFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyFooter\", function() { return MyFooter; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar MyFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({\n  displayName: \"styles__MyFooter\",\n  componentId: \"sc-1dqukfb-0\"\n})([\"grid-column:1 /span 12;background-color:#424242;color:white;padding:0.5em;\"]);\n\n//# sourceURL=webpack:///./src/app/components/Footer/styles.js?");

/***/ }),

/***/ "./src/app/components/Header/Header.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/Header/Header.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/app/components/Header/styles.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar _require = __webpack_require__(/*! ../../data/countries.json */ \"./src/app/data/countries.json\"),\n    countries = _require.countries;\n\nfunction Header() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      nav = _React$useState2[0],\n      showNav = _React$useState2[1];\n\n  function submitSearch(evt) {\n    evt.preventDefault();\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"HControl\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    method: \"POST\",\n    onSubmit: submitSearch\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"SearchInput\"], {\n    placeholder: \"Search a Topic\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Search\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdSearch\"], {\n    size: \"2em\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"HControl\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", null, countries.map(function (c) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: c.key,\n      value: c.keys\n    }, c.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"HControl\"], {\n    onClick: function onClick() {\n      return showNav(function (n) {\n        return !n;\n      });\n    }\n  }, nav ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdClear\"], {\n    size: \"2em\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__[\"MdMenu\"], {\n    size: \"2em\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Ul\"], {\n    show: nav\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Li\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Li\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Li\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/contact-us\"\n  }, \"Contact Us\"))));\n}\n\n//# sourceURL=webpack:///./src/app/components/Header/Header.jsx?");

/***/ }),

/***/ "./src/app/components/Header/index.js":
/*!********************************************!*\
  !*** ./src/app/components/Header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.jsx */ \"./src/app/components/Header/Header.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Header_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app/components/Header/index.js?");

/***/ }),

/***/ "./src/app/components/Header/styles.js":
/*!*********************************************!*\
  !*** ./src/app/components/Header/styles.js ***!
  \*********************************************/
/*! exports provided: Search, SearchInput, Nav, HControl, Ul, Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Search\", function() { return Search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchInput\", function() { return SearchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HControl\", function() { return HControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ul\", function() { return Ul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Li\", function() { return Li; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled-comp */ \"./src/app/components/styled-comp.js\");\n\n\nvar Search = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"styles__Search\",\n  componentId: \"sbylq8-0\"\n})([\"background-color:transparent;border:none;\"]);\nvar SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({\n  displayName: \"styles__SearchInput\",\n  componentId: \"sbylq8-1\"\n})([\"border:none;outset:none;border-bottom:2px solid #212121;font-size:1.3em;padding:0.25em;width:200px;transition:width 1s;&:focus{width:600px;}\"]);\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_comp__WEBPACK_IMPORTED_MODULE_1__[\"Row\"]).withConfig({\n  displayName: \"styles__Nav\",\n  componentId: \"sbylq8-2\"\n})([\"height:50px;line-height:50px;\"]);\nvar HControl = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_comp__WEBPACK_IMPORTED_MODULE_1__[\"Control\"]).withConfig({\n  displayName: \"styles__HControl\",\n  componentId: \"sbylq8-3\"\n})([\"height:50px;\"]);\nvar Ul = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"styles__Ul\",\n  componentId: \"sbylq8-4\"\n})([\"grid-column:1 /span 12;list-style-type:none;width:100%;z-index:1000;background-color:rgba(255,255,255,0.8);margin-top:50px;position:absolute;display:\", \";transition:display 2s ease-in;\"], function (props) {\n  return props.show ? \"block\" : \"none\";\n});\nvar Li = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"styles__Li\",\n  componentId: \"sbylq8-5\"\n})([\"font-size:3em;font-weight:bold;text-align:center;width:100%;margin:0.5em 0;&>a{text-decoration:none;color:#212121;&:hover{color:#00c853;}}\"]);\n\n//# sourceURL=webpack:///./src/app/components/Header/styles.js?");

/***/ }),

/***/ "./src/app/components/Home/Home.jsx":
/*!******************************************!*\
  !*** ./src/app/components/Home/Home.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ \"react-icons/md\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ \"./src/app/components/Header/index.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ \"./src/app/components/Footer/index.js\");\n/* harmony import */ var _NewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsList */ \"./src/app/components/Home/NewsList/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ \"./src/app/components/Home/styles.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar _require = __webpack_require__(/*! ../../data/topics.json */ \"./src/app/data/topics.json\"),\n    list = _require.list;\n\nfunction Home() {\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(topicsReducer, []),\n      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),\n      topics = _React$useReducer2[0],\n      changeTopics = _React$useReducer2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      showList = _React$useState2[0],\n      setShowList = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(\"topnews\"),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      currTopic = _React$useState4[0],\n      setCurrTopic = _React$useState4[1];\n\n  var newslist = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();\n\n  function handleTopicClick(key) {\n    setCurrTopic(key);\n    newslist.current.updateArticles(key);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"Topics\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: \"flex\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"Topic\"], {\n    onClick: function onClick() {\n      return setShowList(function (l) {\n        return !l;\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__[\"MdAdd\"], {\n    size: \"1.5em\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"Topic\"], {\n    onClick: function onClick() {\n      return setCurrTopic(\"topnews\");\n    }\n  }, \"Top News\"), topics.map(function (t, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"Topic\"], {\n      key: idx,\n      onDoubleClick: function onDoubleClick() {\n        return changeTopics({\n          type: \"remove\",\n          topic: t.key\n        });\n      },\n      title: \"Double click to remove\",\n      onClick: function onClick() {\n        return handleTopicClick(t.key);\n      }\n    }, t.label);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"Content\"], null, showList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"SelectTopic\"], null, list.map(function (l) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__[\"TopicOption\"], {\n      key: l.key,\n      onClick: function onClick() {\n        changeTopics({\n          type: \"add\",\n          topic: l\n        });\n        setShowList(function (l) {\n          return !l;\n        });\n      }\n    }, l.label);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    topic: currTopic,\n    ref: newslist\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n\nfunction topicsReducer(state, action) {\n  switch (action.type) {\n    case \"add\":\n      if (!state.includes(action.topic)) {\n        return [].concat(_toConsumableArray(state), [action.topic]);\n      } else {\n        return state;\n      }\n\n    case \"remove\":\n      return state.filter(function (t) {\n        return t.key !== action.topic;\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/app/components/Home/Home.jsx?");

/***/ }),

/***/ "./src/app/components/Home/NewsList/NewsList.jsx":
/*!*******************************************************!*\
  !*** ./src/app/components/Home/NewsList/NewsList.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/app/components/Home/NewsList/styles.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n //const {articles} = require(\"../../../data/sample-resp.json\");\n\nvar NewsList = /*#__PURE__*/function (_React$Component) {\n  _inherits(NewsList, _React$Component);\n\n  var _super = _createSuper(NewsList);\n\n  function NewsList(props) {\n    var _this;\n\n    _classCallCheck(this, NewsList);\n\n    _this = _super.call(this, props);\n    _this.updateArticles = _this.updateArticles.bind(_assertThisInitialized(_this));\n    _this.state = {\n      articles: {},\n      loading: false\n    };\n    return _this;\n  }\n\n  _createClass(NewsList, [{\n    key: \"componentDidMount\",\n    value: function () {\n      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.updateArticles(this.props.topic);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function componentDidMount() {\n        return _componentDidMount.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: \"updateArticles\",\n    value: function () {\n      var _updateArticles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(topic) {\n        var article;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (!(!this.state.articles[topic] || !this.state.articles[topic].length === 0)) {\n                  _context2.next = 13;\n                  break;\n                }\n\n                //only fetch once\n                this.setState({\n                  loading: true\n                });\n                _context2.prev = 2;\n                _context2.next = 5;\n                return getNewsArticles(topic);\n\n              case 5:\n                article = _context2.sent;\n                this.setState(function (state, props) {\n                  return {\n                    articles: _objectSpread(_objectSpread({}, state.articles), {}, _defineProperty({}, props.topic, article)),\n                    loading: false\n                  };\n                });\n                _context2.next = 13;\n                break;\n\n              case 9:\n                _context2.prev = 9;\n                _context2.t0 = _context2[\"catch\"](2);\n                console.log(_context2.t0);\n                this.setState({\n                  loading: false\n                });\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[2, 9]]);\n      }));\n\n      function updateArticles(_x) {\n        return _updateArticles.apply(this, arguments);\n      }\n\n      return updateArticles;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          articles = _this$state.articles,\n          loading = _this$state.loading;\n      var topic = this.props.topic;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"List\"], null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Item\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"NewsLoader\"], {\n        size: \"50px\"\n      })), articles[topic] && articles[topic].map(function (article) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Item\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: article.url,\n          target: \"_blank\"\n        }, article.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, article.description)));\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"PSearches\"], null));\n    }\n  }]);\n\n  return NewsList;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nfunction getNewsArticles(_x2) {\n  return _getNewsArticles.apply(this, arguments);\n}\n\nfunction _getNewsArticles() {\n  _getNewsArticles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(topic) {\n    var url, body;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n\n            if (!topic || topic === \"topnews\") {\n              url = \"http://localhost:7000/news/articles/topnews\";\n            } else {\n              url = \"http://localhost:7000/news/articles/topics?to=\" + topic;\n            }\n\n            _context3.next = 4;\n            return cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {\n              method: \"GET\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              }\n            }).then(function (response) {\n              return response.json();\n            });\n\n          case 4:\n            body = _context3.sent;\n            return _context3.abrupt(\"return\", body.articles);\n\n          case 8:\n            _context3.prev = 8;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.log(_context3.t0);\n            return _context3.abrupt(\"return\", []);\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 8]]);\n  }));\n  return _getNewsArticles.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsList);\n\n//# sourceURL=webpack:///./src/app/components/Home/NewsList/NewsList.jsx?");

/***/ }),

/***/ "./src/app/components/Home/NewsList/index.js":
/*!***************************************************!*\
  !*** ./src/app/components/Home/NewsList/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewsList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsList.jsx */ \"./src/app/components/Home/NewsList/NewsList.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_NewsList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app/components/Home/NewsList/index.js?");

/***/ }),

/***/ "./src/app/components/Home/NewsList/styles.js":
/*!****************************************************!*\
  !*** ./src/app/components/Home/NewsList/styles.js ***!
  \****************************************************/
/*! exports provided: Ul, Li, List, Item, PSearches, NewsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ul\", function() { return Ul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Li\", function() { return Li; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PSearches\", function() { return PSearches; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsLoader\", function() { return NewsLoader; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-comp */ \"./src/app/components/styled-comp.js\");\n\n\nvar Ul = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"styles__Ul\",\n  componentId: \"kezrp5-0\"\n})([\"list-style-type:none;\"]);\nvar Li = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"styles__Li\",\n  componentId: \"kezrp5-1\"\n})([\"width:100%;\"]);\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Ul).withConfig({\n  displayName: \"styles__List\",\n  componentId: \"kezrp5-2\"\n})([\"grid-column:1 /span 9;border:1px solid black;\"]);\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Li).withConfig({\n  displayName: \"styles__Item\",\n  componentId: \"kezrp5-3\"\n})([\"padding:0.5em;&>article{&>h4>a{color:black;font-weight:600;cursor:help;&:hover{color:#00c853;}}}\"]);\nvar PSearches = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Ul).withConfig({\n  displayName: \"styles__PSearches\",\n  componentId: \"kezrp5-4\"\n})([\"grid-column:10 /span 3;border:1px solid black;\"]);\nvar NewsLoader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_comp__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"]).withConfig({\n  displayName: \"styles__NewsLoader\",\n  componentId: \"kezrp5-5\"\n})([\"grid-column-start:4\"]);\n\n//# sourceURL=webpack:///./src/app/components/Home/NewsList/styles.js?");

/***/ }),

/***/ "./src/app/components/Home/index.js":
/*!******************************************!*\
  !*** ./src/app/components/Home/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.jsx */ \"./src/app/components/Home/Home.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Home_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/app/components/Home/index.js?");

/***/ }),

/***/ "./src/app/components/Home/styles.js":
/*!*******************************************!*\
  !*** ./src/app/components/Home/styles.js ***!
  \*******************************************/
/*! exports provided: Topics, Topic, Content, SelectTopic, TopicOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Topics\", function() { return Topics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Topic\", function() { return Topic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectTopic\", function() { return SelectTopic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TopicOption\", function() { return TopicOption; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled-comp */ \"./src/app/components/styled-comp.js\");\n\n\nvar Topics = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_comp__WEBPACK_IMPORTED_MODULE_1__[\"Row\"]).withConfig({\n  displayName: \"styles__Topics\",\n  componentId: \"sc-10cflro-0\"\n})([\"height:60px;background-color:#424242;\"]);\nvar Topic = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_comp__WEBPACK_IMPORTED_MODULE_1__[\"Control\"]).withConfig({\n  displayName: \"styles__Topic\",\n  componentId: \"sc-10cflro-1\"\n})([\"grid-column:1 /span 12;height:60px;line-height:60px;min-width:60px;font-size:1.8em;font-weight:bold;color:white;text-align:center;cursor:pointer;&:hover{background-color:#00c853;border:1px outset #00c853;}\"]);\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styles__Content\",\n  componentId: \"sc-10cflro-2\"\n})([\"position:relative;display:grid;grid-column:1 /span 12;grid-template-columns:10% 10% 10% 10% 5% 5% 5% 5% 10% 10% 10% 10%;\"]);\nvar SelectTopic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"styles__SelectTopic\",\n  componentId: \"sc-10cflro-3\"\n})([\"list-style-type:none;min-width:150px;border:1px outset #424242;border-radius:0 0 5px 5px;margin:0 5px;position:absolute;z-index:500;background-color:white;\"]);\nvar TopicOption = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"styles__TopicOption\",\n  componentId: \"sc-10cflro-4\"\n})([\"height:40px;line-height:40px;padding:0 0.5em;cursor:pointer;&:hover{font-weight:600;}\"]);\n\n//# sourceURL=webpack:///./src/app/components/Home/styles.js?");

/***/ }),

/***/ "./src/app/components/styled-comp.js":
/*!*******************************************!*\
  !*** ./src/app/components/styled-comp.js ***!
  \*******************************************/
/*! exports provided: Row, Control, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Row\", function() { return Row; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Control\", function() { return Control; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loader\", function() { return Loader; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styled-comp__Row\",\n  componentId: \"sc-1rhgyim-0\"\n})([\"grid-column:1 /span 12;width:100%;display:flex;justify-content:space-between;padding:0 0.5em;\"]);\nvar Control = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styled-comp__Control\",\n  componentId: \"sc-1rhgyim-1\"\n})([\"display:flex;padding:0 0.5em;flex-direction:column;justify-content:center;align-items:center;\"]);\nvar loadAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"from{transform:rotate(0deg)}to{transform:rotate(360deg);}\"]);\nvar Loader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styled-comp__Loader\",\n  componentId: \"sc-1rhgyim-2\"\n})([\"width:\", \";height:\", \";border:3px solid #e1f5fe;border-top-color:#039be5;border-radius:50%;animation:\", \" 1s linear infinite;margin:\", \" auto;\"], function (props) {\n  return !!props.size ? props.size : \"30px\";\n}, function (props) {\n  return !!props.size ? props.size : \"30px\";\n}, loadAnim, function (props) {\n  return !!props.size ? props.size : \"30px\";\n});\n\n//# sourceURL=webpack:///./src/app/components/styled-comp.js?");

/***/ }),

/***/ "./src/app/data/countries.json":
/*!*************************************!*\
  !*** ./src/app/data/countries.json ***!
  \*************************************/
/*! exports provided: countries, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"countries\\\":[{\\\"key\\\":\\\"cn\\\",\\\"name\\\":\\\"China\\\"},{\\\"key\\\":\\\"in\\\",\\\"name\\\":\\\"India\\\"},{\\\"key\\\":\\\"il\\\",\\\"name\\\":\\\"Israel\\\"},{\\\"key\\\":\\\"jp\\\",\\\"name\\\":\\\"Japan\\\"},{\\\"key\\\":\\\"ke\\\",\\\"name\\\":\\\"Kenya\\\"},{\\\"key\\\":\\\"ng\\\",\\\"name\\\":\\\"Nigeria\\\"},{\\\"key\\\":\\\"za\\\",\\\"name\\\":\\\"South Africa\\\"},{\\\"key\\\":\\\"ug\\\",\\\"name\\\":\\\"Uganda\\\"},{\\\"key\\\":\\\"us\\\",\\\"name\\\":\\\"United States\\\"}]}\");\n\n//# sourceURL=webpack:///./src/app/data/countries.json?");

/***/ }),

/***/ "./src/app/data/topics.json":
/*!**********************************!*\
  !*** ./src/app/data/topics.json ***!
  \**********************************/
/*! exports provided: list, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"list\\\":[{\\\"key\\\":\\\"world\\\",\\\"label\\\":\\\"World\\\"},{\\\"key\\\":\\\"nation\\\",\\\"label\\\":\\\"Nation\\\"},{\\\"key\\\":\\\"business\\\",\\\"label\\\":\\\"Business\\\"},{\\\"key\\\":\\\"technology\\\",\\\"label\\\":\\\"Technology\\\"},{\\\"key\\\":\\\"entertainment\\\",\\\"label\\\":\\\"Entertainment\\\"},{\\\"key\\\":\\\"sports\\\",\\\"label\\\":\\\"Sports\\\"},{\\\"key\\\":\\\"science\\\",\\\"label\\\":\\\"Science\\\"},{\\\"key\\\":\\\"health\\\",\\\"label\\\":\\\"Health\\\"}]}\");\n\n//# sourceURL=webpack:///./src/app/data/topics.json?");

/***/ }),

/***/ "./src/app/index.scss":
/*!****************************!*\
  !*** ./src/app/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/app/index.scss?");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cross-fetch\");\n\n//# sourceURL=webpack:///external_%22cross-fetch%22?");

/***/ }),

/***/ "domino":
/*!*************************!*\
  !*** external "domino" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"domino\");\n\n//# sourceURL=webpack:///external_%22domino%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons\");\n\n//# sourceURL=webpack:///external_%22react-icons%22?");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/md\");\n\n//# sourceURL=webpack:///external_%22react-icons/md%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });