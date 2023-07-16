/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/restaurant_background_blurred.jpg */ "./src/assets/restaurant_background_blurred.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS HERE */

:root {
    --color-tap: #8A3126;
    --color-tap-active: #CCCABC;
    --color-one: #709067;
    --color-two: #D9D9D7;
    --color-three: #EEE8E7;

    --font-cinzel: 'Cinzel', serif;
    --font-lora: 'Lora', serif;

    box-sizing: border-box;
}


/************** Website Frame **************/

html,
body {
    height: 100%;
    padding: 0px;
    margin: 0px;

    font-family: var(--font-lora);
}

#content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header,
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;

    background-color: var(--color-one);
    color: var(--color-three);
    height: 80px;
    padding: 15px 18vw;
}

.footer {
    justify-content: space-between;
}

.tap {
    color: var(--color-three);
    font-size: 1.5rem;
    transition: 4ms;
}

.tap:hover {
    text-decoration: underline var(--color-three);
    text-decoration-thickness: 0.1rem;
}

.active {
    text-decoration: underline var(--color-three);
    text-decoration-thickness: 0.1rem;
}

.main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 8vw 18vw;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
}

/************** Home Page **************/

#home-page,
#aboutus-page {
    display: flex;
    flex-direction: column;
    
    height: 100%;
}

.heading {
    font-family: var(--font-cinzel);
    font-size: 2.6rem;
    font-weight: 500;
    text-shadow: 1px 1px 1px var(--color-tap-active);
}

.text {
    font-family: var(--font-lora);
    line-height: 1.5rem;
}


/************** Menu Page **************/

#menu-page {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5vw;

    padding: 5rem 1.5rem;
    background-color: #eee8e787;
}

.pizza-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    height: 20vw;
    transition: transform 1s;
}

img:hover {
    transform: rotate(20deg);
}

.pizza-text {
    font-size: 2rem;
    font-family: var(--font-lora);
}

`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;;IAEtB,8BAA8B;IAC9B,0BAA0B;;IAE1B,sBAAsB;AAC1B;;;AAGA,4CAA4C;;AAE5C;;IAEI,YAAY;IACZ,YAAY;IACZ,WAAW;;IAEX,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;;IAER,kCAAkC;IAClC,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,6CAA6C;IAC7C,iCAAiC;AACrC;;AAEA;IACI,6CAA6C;IAC7C,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,iBAAiB;IACjB,yDAAkE;IAClE,qBAAqB;IACrB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA,wCAAwC;;AAExC;;IAEI,aAAa;IACb,sBAAsB;;IAEtB,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,gBAAgB;IAChB,gDAAgD;AACpD;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;;AAGA,wCAAwC;;AAExC;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,QAAQ;;IAER,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC","sourcesContent":["/* CSS HERE */\n\n:root {\n    --color-tap: #8A3126;\n    --color-tap-active: #CCCABC;\n    --color-one: #709067;\n    --color-two: #D9D9D7;\n    --color-three: #EEE8E7;\n\n    --font-cinzel: 'Cinzel', serif;\n    --font-lora: 'Lora', serif;\n\n    box-sizing: border-box;\n}\n\n\n/************** Website Frame **************/\n\nhtml,\nbody {\n    height: 100%;\n    padding: 0px;\n    margin: 0px;\n\n    font-family: var(--font-lora);\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header,\n.footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5vw;\n\n    background-color: var(--color-one);\n    color: var(--color-three);\n    height: 80px;\n    padding: 15px 18vw;\n}\n\n.footer {\n    justify-content: space-between;\n}\n\n.tap {\n    color: var(--color-three);\n    font-size: 1.5rem;\n    transition: 4ms;\n}\n\n.tap:hover {\n    text-decoration: underline var(--color-three);\n    text-decoration-thickness: 0.1rem;\n}\n\n.active {\n    text-decoration: underline var(--color-three);\n    text-decoration-thickness: 0.1rem;\n}\n\n.main {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    padding: 8vw 18vw;\n    background-image: url(../assets/restaurant_background_blurred.jpg);\n    background-size: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n/************** Home Page **************/\n\n#home-page,\n#aboutus-page {\n    display: flex;\n    flex-direction: column;\n    \n    height: 100%;\n}\n\n.heading {\n    font-family: var(--font-cinzel);\n    font-size: 2.6rem;\n    font-weight: 500;\n    text-shadow: 1px 1px 1px var(--color-tap-active);\n}\n\n.text {\n    font-family: var(--font-lora);\n    line-height: 1.5rem;\n}\n\n\n/************** Menu Page **************/\n\n#menu-page {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 5vw;\n\n    padding: 5rem 1.5rem;\n    background-color: #eee8e787;\n}\n\n.pizza-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nimg {\n    height: 20vw;\n    transition: transform 1s;\n}\n\nimg:hover {\n    transform: rotate(20deg);\n}\n\n.pizza-text {\n    font-size: 2rem;\n    font-family: var(--font-lora);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/aboutus/aboutus.js":
/*!***********************************!*\
  !*** ./src/js/aboutus/aboutus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openAboutUs: () => (/* binding */ openAboutUs)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/style.css */ "./src/css/style.css");


function openAboutUs() {

    const mainAnker = document.querySelector(".main")

    // create aboutus page container
    const aboutUsPage = document.createElement("div")
    aboutUsPage.setAttribute("id", "aboutus-page")

    mainAnker.appendChild(aboutUsPage)

    // create heading
    const heading = document.createElement("div")
    heading.classList.add("heading")
    heading.innerHTML = "ITALY since 1787"

    aboutUsPage.appendChild(heading)

    // create text
    const text = document.createElement("div")
    text.classList.add("text")
    text.innerHTML = "<br> Delizioso Gusto, though a new addition to the culinary scene, has a rich and fascinating history that spans back several decades. Founded by the visionary restaurateur, Giovanni Rossi, in 1985, the restaurant was a humble trattoria tucked away in a small village in the heart of Italy. With an unwavering passion for showcasing authentic Italian flavors, Giovanni and his family poured their heart and soul into creating a dining experience that celebrated the traditions and heritage of Italian cuisine.<br><br>Over the years, Delizioso Gusto garnered a loyal following and gained recognition for its exceptional culinary offerings. Word of mouth spread, attracting visitors from near and far who were eager to taste the restaurant's renowned dishes. With each passing year, the restaurant flourished, expanding its menu and enhancing its ambiance to accommodate the growing demand for an unforgettable dining experience. Delizioso Gusto soon became a cherished destination, known for its warm hospitality, impeccable service, and, above all, its commitment to serving the most delectable Italian fare.<br><br>Today, Delizioso Gusto stands as a testament to the perseverance and dedication of the Rossi family. Passed down through generations, the restaurant continues to honor its roots while embracing innovation in the culinary world. Every dish that leaves the kitchen reflects the restaurant's unwavering commitment to using only the finest ingredients sourced from Italy and prepared with love and expertise. Whether it's the homemade pasta, the aromatic risotto, or the authentic wood-fired pizzas, each bite at Delizioso Gusto takes diners on a tantalizing journey through the flavors and traditions of Italy, creating memories that will last a lifetime."

    aboutUsPage.appendChild(text)
}

/***/ }),

/***/ "./src/js/home/home.js":
/*!*****************************!*\
  !*** ./src/js/home/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openHome: () => (/* binding */ openHome)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/style.css */ "./src/css/style.css");


function openHome() {
    
    const mainAnker = document.querySelector(".main")

    // create home page container
    const homePage = document.createElement("div")
    homePage.setAttribute("id", "home-page")

    mainAnker.appendChild(homePage)

    // create heading
    const heading = document.createElement("div")
    heading.classList.add("heading")
    heading.innerHTML = "Delizioso Gusto -<br>Authentic Italian Cuisine<br><br>"

    homePage.appendChild(heading)

    // create text
    const text = document.createElement("div")
    text.classList.add("text")
    text.innerHTML = "Welcome to Delizioso Gusto, where our passion for food meets Italian tradition. Indulge in our carefully crafted dishes, prepared with the finest ingredients sourced from Italy. Immerse yourself in the warm and inviting atmosphere as you savor the true taste of Italy. Buon appetito!"

    homePage.appendChild(text)
}

/***/ }),

/***/ "./src/js/menu/menu.js":
/*!*****************************!*\
  !*** ./src/js/menu/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openMenu: () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/style.css */ "./src/css/style.css");


function openMenu() {
    
    const mainAnker = document.querySelector(".main")

    // create heading
    const menuHeading = document.createElement("div")
    menuHeading.classList.add("heading")
    menuHeading.innerHTML = "Our Menu"
    mainAnker.appendChild(menuHeading)

    // create menu page container
    const menuPage = document.createElement("div")
    menuPage.setAttribute("id", "menu-page")

    mainAnker.appendChild(menuPage)

    // create menu containers
    const containerTT = document.createElement("div")
    containerTT.classList.add("pizza-container")
    menuPage.appendChild(containerTT)

    const containerFF = document.createElement("div")
    containerFF.classList.add("pizza-container")
    menuPage.appendChild(containerFF)

    const containerHH = document.createElement("div")
    containerHH.classList.add("pizza-container")
    menuPage.appendChild(containerHH)

    const containerOO = document.createElement("div")
    containerOO.classList.add("pizza-container")
    menuPage.appendChild(containerOO)

    const containerSS = document.createElement("div")
    containerSS.classList.add("pizza-container")
    menuPage.appendChild(containerSS)

    const containerVV = document.createElement("div")
    containerVV.classList.add("pizza-container")
    menuPage.appendChild(containerVV)

    //add images
    const iconTT = document.createElement("img")
    iconTT.setAttribute("src", "../src/assets/pizza_bacon.png")
    containerTT.appendChild(iconTT)
    
    const iconFF = document.createElement("img")
    iconFF.setAttribute("src", "../src/assets/pizza_funghi.png")
    containerFF.appendChild(iconFF)
    
    const iconHH = document.createElement("img")
    iconHH.setAttribute("src", "../src/assets/pizza_hawaii.png")
    containerHH.appendChild(iconHH)
    
    const iconOO = document.createElement("img")
    iconOO.setAttribute("src", "../src/assets/pizza_olive.png")
    containerOO.appendChild(iconOO)
    
    const iconSS = document.createElement("img")
    iconSS.setAttribute("src", "../src/assets/pizza_salami.png")
    containerSS.appendChild(iconSS)
    
    const iconVV = document.createElement("img")
    iconVV.setAttribute("src", "../src/assets/pizza_veggie.png")
    containerVV.appendChild(iconVV)

    //add title
    const textTT = document.createElement("div")
    textTT.classList.add("pizza-text")
    textTT.innerHTML = "Talented Tomato"
    containerTT.appendChild(textTT)

    const textFF = document.createElement("div")
    textFF.classList.add("pizza-text")
    textFF.innerHTML = "Fantastic Funghi"
    containerFF.appendChild(textFF)

    const textHH = document.createElement("div")
    textHH.classList.add("pizza-text")
    textHH.innerHTML = "Hawaiin Hawai"
    containerHH.appendChild(textHH)

    const textOO = document.createElement("div")
    textOO.classList.add("pizza-text")
    textOO.innerHTML = "Owesome Olive"
    containerOO.appendChild(textOO)

    const textSS = document.createElement("div")
    textSS.classList.add("pizza-text")
    textSS.innerHTML = "Owesome Olive"
    containerSS.appendChild(textSS)

    const textVV = document.createElement("div")
    textVV.classList.add("pizza-text")
    textVV.innerHTML = "Veggetarian Veggie"
    containerVV.appendChild(textVV)
}

/***/ }),

/***/ "./src/js/website/website.js":
/*!***********************************!*\
  !*** ./src/js/website/website.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openWebsiteFrame: () => (/* binding */ openWebsiteFrame)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/style.css */ "./src/css/style.css");


function openWebsiteFrame() {
    
    const anker = document.getElementById("content");

    // create basic layout
    const header = document.createElement("div")
    const main = document.createElement("div")
    const footer = document.createElement("div")
    
    header.classList.add("header")
    main.classList.add("main")
    footer.classList.add("footer")

    anker.append(header, main, footer)

    // create header child elements
    const tapHome = document.createElement("div");
    const tapMenu = document.createElement("div")
    const tapABoutUs = document.createElement("div")

    tapHome.classList.add("tap", "active") //initiate menu tap with active class –> underlined
    tapHome.setAttribute("id", "tap-home")
    tapMenu.classList.add("tap")
    tapMenu.setAttribute("id", "tap-menu")
    tapABoutUs.classList.add("tap")
    tapABoutUs.setAttribute("id", "tap-aboutus")

    header.appendChild(tapHome)
    header.appendChild(tapMenu)
    header.appendChild(tapABoutUs)

    tapHome.innerHTML = "Home"
    tapMenu.innerHTML = "Menu"
    tapABoutUs.innerHTML = "About Us"

    // create footer child elements
    const footerTel = document.createElement("div")
    const footerMail = document.createElement("div")
    const footerAdress = document.createElement("div")

    footer.appendChild(footerTel)
    footer.appendChild(footerMail)
    footer.appendChild(footerAdress)

    footerTel.innerHTML = "Tel.: +49 (0) 175746001"
    footerMail.innerHTML = "Mail: very.italian@restaurant.ciao"
    footerAdress.innerHTML = "Piazza di Faccist 12, 68894 Milan"
}



/***/ }),

/***/ "./src/assets/restaurant_background_blurred.jpg":
/*!******************************************************!*\
  !*** ./src/assets/restaurant_background_blurred.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d58ff8e03ae9c3716631.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_website_website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/website/website.js */ "./src/js/website/website.js");
/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.js */ "./src/js/home/home.js");
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.js */ "./src/js/menu/menu.js");
/* harmony import */ var _aboutus_aboutus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus/aboutus.js */ "./src/js/aboutus/aboutus.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");







function removeMain() {
    
    let mainElements = document.querySelectorAll(".main>*");
    mainElements.forEach((element) => element.remove())
}

(0,_js_website_website_js__WEBPACK_IMPORTED_MODULE_0__.openWebsiteFrame)();
(0,_home_home_js__WEBPACK_IMPORTED_MODULE_1__.openHome)();

// initiate query selectors after openWebsiteFrame is run to avoid 'null error'
const tapHome = document.querySelector("#tap-home");
const tapMenu = document.querySelector("#tap-menu");
const tapAboutUs = document.querySelector("#tap-aboutus");

tapHome.addEventListener("click", () => {
    removeMain();
    (0,_home_home_js__WEBPACK_IMPORTED_MODULE_1__.openHome)();
    tapHome.classList.toggle("active")
    tapMenu.classList.remove("active")
    tapAboutUs.classList.remove("active")
})

tapMenu.addEventListener("click", () => {
    removeMain();
    (0,_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__.openMenu)();
    tapHome.classList.remove("active")
    tapMenu.classList.toggle("active")
    tapAboutUs.classList.remove("active")
})

tapAboutUs.addEventListener("click", () => {
    removeMain();
    (0,_aboutus_aboutus_js__WEBPACK_IMPORTED_MODULE_3__.openAboutUs)();
    tapHome.classList.remove("active")
    tapMenu.classList.remove("active")
    tapAboutUs.classList.toggle("active")
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QjRCOztBQUVyQjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRzRCOztBQUVyQjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTREO0FBQ2xCO0FBQ0E7QUFDUztBQUMxQjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQWdCO0FBQ2hCLHVEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSx1REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksZ0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9hYm91dHVzL2Fib3V0dXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy93ZWJzaXRlL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9yZXN0YXVyYW50X2JhY2tncm91bmRfYmx1cnJlZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIENTUyBIRVJFICovXG5cbjpyb290IHtcbiAgICAtLWNvbG9yLXRhcDogIzhBMzEyNjtcbiAgICAtLWNvbG9yLXRhcC1hY3RpdmU6ICNDQ0NBQkM7XG4gICAgLS1jb2xvci1vbmU6ICM3MDkwNjc7XG4gICAgLS1jb2xvci10d286ICNEOUQ5RDc7XG4gICAgLS1jb2xvci10aHJlZTogI0VFRThFNztcblxuICAgIC0tZm9udC1jaW56ZWw6ICdDaW56ZWwnLCBzZXJpZjtcbiAgICAtLWZvbnQtbG9yYTogJ0xvcmEnLCBzZXJpZjtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLyoqKioqKioqKioqKioqIFdlYnNpdGUgRnJhbWUgKioqKioqKioqKioqKiovXG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbG9yYSk7XG59XG5cbiNjb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyLFxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXZ3O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE4dnc7XG59XG5cbi5mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhcCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiA0bXM7XG59XG5cbi50YXA6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHZhcigtLWNvbG9yLXRocmVlKTtcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XG59XG5cbi5hY3RpdmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHZhcigtLWNvbG9yLXRocmVlKTtcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XG59XG5cbi5tYWluIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiA4dncgMTh2dztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4vKioqKioqKioqKioqKiogSG9tZSBQYWdlICoqKioqKioqKioqKioqL1xuXG4jaG9tZS1wYWdlLFxuI2Fib3V0dXMtcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWNpbnplbCk7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0tY29sb3ItdGFwLWFjdGl2ZSk7XG59XG5cbi50ZXh0IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1sb3JhKTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG5cbi8qKioqKioqKioqKioqKiBNZW51IFBhZ2UgKioqKioqKioqKioqKiovXG5cbiNtZW51LXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA1dnc7XG5cbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlOGU3ODc7XG59XG5cbi5waXp6YS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogMjB2dztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG5cbmltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xufVxuXG4ucGl6emEtdGV4dCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxvcmEpO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7O0FBRWI7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCOztJQUV0Qiw4QkFBOEI7SUFDOUIsMEJBQTBCOztJQUUxQixzQkFBc0I7QUFDMUI7OztBQUdBLDRDQUE0Qzs7QUFFNUM7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXOztJQUVYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7O0lBRVIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixpQkFBaUI7SUFDakIseURBQWtFO0lBQ2xFLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBLHdDQUF3Qzs7QUFFeEM7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7OztBQUdBLHdDQUF3Qzs7QUFFeEM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsUUFBUTs7SUFFUixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIEhFUkUgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tY29sb3ItdGFwOiAjOEEzMTI2O1xcbiAgICAtLWNvbG9yLXRhcC1hY3RpdmU6ICNDQ0NBQkM7XFxuICAgIC0tY29sb3Itb25lOiAjNzA5MDY3O1xcbiAgICAtLWNvbG9yLXR3bzogI0Q5RDlENztcXG4gICAgLS1jb2xvci10aHJlZTogI0VFRThFNztcXG5cXG4gICAgLS1mb250LWNpbnplbDogJ0NpbnplbCcsIHNlcmlmO1xcbiAgICAtLWZvbnQtbG9yYTogJ0xvcmEnLCBzZXJpZjtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqIFdlYnNpdGUgRnJhbWUgKioqKioqKioqKioqKiovXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1sb3JhKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIsXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDV2dztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4IDE4dnc7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXAge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogNG1zO1xcbn1cXG5cXG4udGFwOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDAuMXJlbTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiA4dncgMTh2dztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9yZXN0YXVyYW50X2JhY2tncm91bmRfYmx1cnJlZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqIEhvbWUgUGFnZSAqKioqKioqKioqKioqKi9cXG5cXG4jaG9tZS1wYWdlLFxcbiNhYm91dHVzLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWNpbnplbCk7XFxuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0tY29sb3ItdGFwLWFjdGl2ZSk7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbG9yYSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKiBNZW51IFBhZ2UgKioqKioqKioqKioqKiovXFxuXFxuI21lbnUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNXZ3O1xcblxcbiAgICBwYWRkaW5nOiA1cmVtIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZThlNzg3O1xcbn1cXG5cXG4ucGl6emEtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMjB2dztcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxufVxcblxcbi5waXp6YS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1sb3JhKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uLy4uL2Nzcy9zdHlsZS5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQWJvdXRVcygpIHtcblxuICAgIGNvbnN0IG1haW5BbmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG4gICAgLy8gY3JlYXRlIGFib3V0dXMgcGFnZSBjb250YWluZXJcbiAgICBjb25zdCBhYm91dFVzUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBhYm91dFVzUGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0dXMtcGFnZVwiKVxuXG4gICAgbWFpbkFua2VyLmFwcGVuZENoaWxkKGFib3V0VXNQYWdlKVxuXG4gICAgLy8gY3JlYXRlIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIilcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSVRBTFkgc2luY2UgMTc4N1wiXG5cbiAgICBhYm91dFVzUGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKVxuXG4gICAgLy8gY3JlYXRlIHRleHRcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIilcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiPGJyPiBEZWxpemlvc28gR3VzdG8sIHRob3VnaCBhIG5ldyBhZGRpdGlvbiB0byB0aGUgY3VsaW5hcnkgc2NlbmUsIGhhcyBhIHJpY2ggYW5kIGZhc2NpbmF0aW5nIGhpc3RvcnkgdGhhdCBzcGFucyBiYWNrIHNldmVyYWwgZGVjYWRlcy4gRm91bmRlZCBieSB0aGUgdmlzaW9uYXJ5IHJlc3RhdXJhdGV1ciwgR2lvdmFubmkgUm9zc2ksIGluIDE5ODUsIHRoZSByZXN0YXVyYW50IHdhcyBhIGh1bWJsZSB0cmF0dG9yaWEgdHVja2VkIGF3YXkgaW4gYSBzbWFsbCB2aWxsYWdlIGluIHRoZSBoZWFydCBvZiBJdGFseS4gV2l0aCBhbiB1bndhdmVyaW5nIHBhc3Npb24gZm9yIHNob3djYXNpbmcgYXV0aGVudGljIEl0YWxpYW4gZmxhdm9ycywgR2lvdmFubmkgYW5kIGhpcyBmYW1pbHkgcG91cmVkIHRoZWlyIGhlYXJ0IGFuZCBzb3VsIGludG8gY3JlYXRpbmcgYSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGNlbGVicmF0ZWQgdGhlIHRyYWRpdGlvbnMgYW5kIGhlcml0YWdlIG9mIEl0YWxpYW4gY3Vpc2luZS48YnI+PGJyPk92ZXIgdGhlIHllYXJzLCBEZWxpemlvc28gR3VzdG8gZ2FybmVyZWQgYSBsb3lhbCBmb2xsb3dpbmcgYW5kIGdhaW5lZCByZWNvZ25pdGlvbiBmb3IgaXRzIGV4Y2VwdGlvbmFsIGN1bGluYXJ5IG9mZmVyaW5ncy4gV29yZCBvZiBtb3V0aCBzcHJlYWQsIGF0dHJhY3RpbmcgdmlzaXRvcnMgZnJvbSBuZWFyIGFuZCBmYXIgd2hvIHdlcmUgZWFnZXIgdG8gdGFzdGUgdGhlIHJlc3RhdXJhbnQncyByZW5vd25lZCBkaXNoZXMuIFdpdGggZWFjaCBwYXNzaW5nIHllYXIsIHRoZSByZXN0YXVyYW50IGZsb3VyaXNoZWQsIGV4cGFuZGluZyBpdHMgbWVudSBhbmQgZW5oYW5jaW5nIGl0cyBhbWJpYW5jZSB0byBhY2NvbW1vZGF0ZSB0aGUgZ3Jvd2luZyBkZW1hbmQgZm9yIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuIERlbGl6aW9zbyBHdXN0byBzb29uIGJlY2FtZSBhIGNoZXJpc2hlZCBkZXN0aW5hdGlvbiwga25vd24gZm9yIGl0cyB3YXJtIGhvc3BpdGFsaXR5LCBpbXBlY2NhYmxlIHNlcnZpY2UsIGFuZCwgYWJvdmUgYWxsLCBpdHMgY29tbWl0bWVudCB0byBzZXJ2aW5nIHRoZSBtb3N0IGRlbGVjdGFibGUgSXRhbGlhbiBmYXJlLjxicj48YnI+VG9kYXksIERlbGl6aW9zbyBHdXN0byBzdGFuZHMgYXMgYSB0ZXN0YW1lbnQgdG8gdGhlIHBlcnNldmVyYW5jZSBhbmQgZGVkaWNhdGlvbiBvZiB0aGUgUm9zc2kgZmFtaWx5LiBQYXNzZWQgZG93biB0aHJvdWdoIGdlbmVyYXRpb25zLCB0aGUgcmVzdGF1cmFudCBjb250aW51ZXMgdG8gaG9ub3IgaXRzIHJvb3RzIHdoaWxlIGVtYnJhY2luZyBpbm5vdmF0aW9uIGluIHRoZSBjdWxpbmFyeSB3b3JsZC4gRXZlcnkgZGlzaCB0aGF0IGxlYXZlcyB0aGUga2l0Y2hlbiByZWZsZWN0cyB0aGUgcmVzdGF1cmFudCdzIHVud2F2ZXJpbmcgY29tbWl0bWVudCB0byB1c2luZyBvbmx5IHRoZSBmaW5lc3QgaW5ncmVkaWVudHMgc291cmNlZCBmcm9tIEl0YWx5IGFuZCBwcmVwYXJlZCB3aXRoIGxvdmUgYW5kIGV4cGVydGlzZS4gV2hldGhlciBpdCdzIHRoZSBob21lbWFkZSBwYXN0YSwgdGhlIGFyb21hdGljIHJpc290dG8sIG9yIHRoZSBhdXRoZW50aWMgd29vZC1maXJlZCBwaXp6YXMsIGVhY2ggYml0ZSBhdCBEZWxpemlvc28gR3VzdG8gdGFrZXMgZGluZXJzIG9uIGEgdGFudGFsaXppbmcgam91cm5leSB0aHJvdWdoIHRoZSBmbGF2b3JzIGFuZCB0cmFkaXRpb25zIG9mIEl0YWx5LCBjcmVhdGluZyBtZW1vcmllcyB0aGF0IHdpbGwgbGFzdCBhIGxpZmV0aW1lLlwiXG5cbiAgICBhYm91dFVzUGFnZS5hcHBlbmRDaGlsZCh0ZXh0KVxufSIsImltcG9ydCAnLi4vLi4vY3NzL3N0eWxlLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Ib21lKCkge1xuICAgIFxuICAgIGNvbnN0IG1haW5BbmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG4gICAgLy8gY3JlYXRlIGhvbWUgcGFnZSBjb250YWluZXJcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtcGFnZVwiKVxuXG4gICAgbWFpbkFua2VyLmFwcGVuZENoaWxkKGhvbWVQYWdlKVxuXG4gICAgLy8gY3JlYXRlIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIilcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiRGVsaXppb3NvIEd1c3RvIC08YnI+QXV0aGVudGljIEl0YWxpYW4gQ3Vpc2luZTxicj48YnI+XCJcblxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAvLyBjcmVhdGUgdGV4dFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKVxuICAgIHRleHQuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIERlbGl6aW9zbyBHdXN0bywgd2hlcmUgb3VyIHBhc3Npb24gZm9yIGZvb2QgbWVldHMgSXRhbGlhbiB0cmFkaXRpb24uIEluZHVsZ2UgaW4gb3VyIGNhcmVmdWxseSBjcmFmdGVkIGRpc2hlcywgcHJlcGFyZWQgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzIHNvdXJjZWQgZnJvbSBJdGFseS4gSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSBhcyB5b3Ugc2F2b3IgdGhlIHRydWUgdGFzdGUgb2YgSXRhbHkuIEJ1b24gYXBwZXRpdG8hXCJcblxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHRleHQpXG59IiwiaW1wb3J0ICcuLi8uLi9jc3Mvc3R5bGUuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgXG4gICAgY29uc3QgbWFpbkFua2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG5cbiAgICAvLyBjcmVhdGUgaGVhZGluZ1xuICAgIGNvbnN0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1lbnVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpXG4gICAgbWVudUhlYWRpbmcuaW5uZXJIVE1MID0gXCJPdXIgTWVudVwiXG4gICAgbWFpbkFua2VyLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKVxuXG4gICAgLy8gY3JlYXRlIG1lbnUgcGFnZSBjb250YWluZXJcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51UGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtcGFnZVwiKVxuXG4gICAgbWFpbkFua2VyLmFwcGVuZENoaWxkKG1lbnVQYWdlKVxuXG4gICAgLy8gY3JlYXRlIG1lbnUgY29udGFpbmVyc1xuICAgIGNvbnN0IGNvbnRhaW5lclRUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lclRULmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1jb250YWluZXJcIilcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJUVClcblxuICAgIGNvbnN0IGNvbnRhaW5lckZGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lckZGLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1jb250YWluZXJcIilcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJGRilcblxuICAgIGNvbnN0IGNvbnRhaW5lckhIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lckhILmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1jb250YWluZXJcIilcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJISClcblxuICAgIGNvbnN0IGNvbnRhaW5lck9PID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lck9PLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1jb250YWluZXJcIilcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJPTylcblxuICAgIGNvbnN0IGNvbnRhaW5lclNTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lclNTLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1jb250YWluZXJcIilcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJTUylcblxuICAgIGNvbnN0IGNvbnRhaW5lclZWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRhaW5lclZWLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS1jb250YWluZXJcIilcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChjb250YWluZXJWVilcblxuICAgIC8vYWRkIGltYWdlc1xuICAgIGNvbnN0IGljb25UVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uVFQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2Fzc2V0cy9waXp6YV9iYWNvbi5wbmdcIilcbiAgICBjb250YWluZXJUVC5hcHBlbmRDaGlsZChpY29uVFQpXG4gICAgXG4gICAgY29uc3QgaWNvbkZGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25GRi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvYXNzZXRzL3BpenphX2Z1bmdoaS5wbmdcIilcbiAgICBjb250YWluZXJGRi5hcHBlbmRDaGlsZChpY29uRkYpXG4gICAgXG4gICAgY29uc3QgaWNvbkhIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25ISC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvYXNzZXRzL3BpenphX2hhd2FpaS5wbmdcIilcbiAgICBjb250YWluZXJISC5hcHBlbmRDaGlsZChpY29uSEgpXG4gICAgXG4gICAgY29uc3QgaWNvbk9PID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25PTy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvYXNzZXRzL3BpenphX29saXZlLnBuZ1wiKVxuICAgIGNvbnRhaW5lck9PLmFwcGVuZENoaWxkKGljb25PTylcbiAgICBcbiAgICBjb25zdCBpY29uU1MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvblNTLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9hc3NldHMvcGl6emFfc2FsYW1pLnBuZ1wiKVxuICAgIGNvbnRhaW5lclNTLmFwcGVuZENoaWxkKGljb25TUylcbiAgICBcbiAgICBjb25zdCBpY29uVlYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvblZWLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9hc3NldHMvcGl6emFfdmVnZ2llLnBuZ1wiKVxuICAgIGNvbnRhaW5lclZWLmFwcGVuZENoaWxkKGljb25WVilcblxuICAgIC8vYWRkIHRpdGxlXG4gICAgY29uc3QgdGV4dFRUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHRUVC5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGV4dFwiKVxuICAgIHRleHRUVC5pbm5lckhUTUwgPSBcIlRhbGVudGVkIFRvbWF0b1wiXG4gICAgY29udGFpbmVyVFQuYXBwZW5kQ2hpbGQodGV4dFRUKVxuXG4gICAgY29uc3QgdGV4dEZGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHRGRi5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGV4dFwiKVxuICAgIHRleHRGRi5pbm5lckhUTUwgPSBcIkZhbnRhc3RpYyBGdW5naGlcIlxuICAgIGNvbnRhaW5lckZGLmFwcGVuZENoaWxkKHRleHRGRilcblxuICAgIGNvbnN0IHRleHRISCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0SEguY2xhc3NMaXN0LmFkZChcInBpenphLXRleHRcIilcbiAgICB0ZXh0SEguaW5uZXJIVE1MID0gXCJIYXdhaWluIEhhd2FpXCJcbiAgICBjb250YWluZXJISC5hcHBlbmRDaGlsZCh0ZXh0SEgpXG5cbiAgICBjb25zdCB0ZXh0T08gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dE9PLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10ZXh0XCIpXG4gICAgdGV4dE9PLmlubmVySFRNTCA9IFwiT3dlc29tZSBPbGl2ZVwiXG4gICAgY29udGFpbmVyT08uYXBwZW5kQ2hpbGQodGV4dE9PKVxuXG4gICAgY29uc3QgdGV4dFNTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHRTUy5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGV4dFwiKVxuICAgIHRleHRTUy5pbm5lckhUTUwgPSBcIk93ZXNvbWUgT2xpdmVcIlxuICAgIGNvbnRhaW5lclNTLmFwcGVuZENoaWxkKHRleHRTUylcblxuICAgIGNvbnN0IHRleHRWViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0VlYuY2xhc3NMaXN0LmFkZChcInBpenphLXRleHRcIilcbiAgICB0ZXh0VlYuaW5uZXJIVE1MID0gXCJWZWdnZXRhcmlhbiBWZWdnaWVcIlxuICAgIGNvbnRhaW5lclZWLmFwcGVuZENoaWxkKHRleHRWVilcbn0iLCJpbXBvcnQgJy4uLy4uL2Nzcy9zdHlsZS5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuV2Vic2l0ZUZyYW1lKCkge1xuICAgIFxuICAgIGNvbnN0IGFua2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgLy8gY3JlYXRlIGJhc2ljIGxheW91dFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKVxuXG4gICAgYW5rZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKVxuXG4gICAgLy8gY3JlYXRlIGhlYWRlciBjaGlsZCBlbGVtZW50c1xuICAgIGNvbnN0IHRhcEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhcE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgdGFwQUJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIHRhcEhvbWUuY2xhc3NMaXN0LmFkZChcInRhcFwiLCBcImFjdGl2ZVwiKSAvL2luaXRpYXRlIG1lbnUgdGFwIHdpdGggYWN0aXZlIGNsYXNzIOKAkz4gdW5kZXJsaW5lZFxuICAgIHRhcEhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXAtaG9tZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LmFkZChcInRhcFwiKVxuICAgIHRhcE1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXAtbWVudVwiKVxuICAgIHRhcEFCb3V0VXMuY2xhc3NMaXN0LmFkZChcInRhcFwiKVxuICAgIHRhcEFCb3V0VXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXAtYWJvdXR1c1wiKVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhcEhvbWUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhcE1lbnUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhcEFCb3V0VXMpXG5cbiAgICB0YXBIb21lLmlubmVySFRNTCA9IFwiSG9tZVwiXG4gICAgdGFwTWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIlxuICAgIHRhcEFCb3V0VXMuaW5uZXJIVE1MID0gXCJBYm91dCBVc1wiXG5cbiAgICAvLyBjcmVhdGUgZm9vdGVyIGNoaWxkIGVsZW1lbnRzXG4gICAgY29uc3QgZm9vdGVyVGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGZvb3Rlck1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vdGVyQWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRlbClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTWFpbClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQWRyZXNzKVxuXG4gICAgZm9vdGVyVGVsLmlubmVySFRNTCA9IFwiVGVsLjogKzQ5ICgwKSAxNzU3NDYwMDFcIlxuICAgIGZvb3Rlck1haWwuaW5uZXJIVE1MID0gXCJNYWlsOiB2ZXJ5Lml0YWxpYW5AcmVzdGF1cmFudC5jaWFvXCJcbiAgICBmb290ZXJBZHJlc3MuaW5uZXJIVE1MID0gXCJQaWF6emEgZGkgRmFjY2lzdCAxMiwgNjg4OTQgTWlsYW5cIlxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IG9wZW5XZWJzaXRlRnJhbWUgfSBmcm9tICcuLi9qcy93ZWJzaXRlL3dlYnNpdGUuanMnO1xuaW1wb3J0IHsgb3BlbkhvbWUgfSBmcm9tICcuL2hvbWUvaG9tZS5qcyc7XG5pbXBvcnQgeyBvcGVuTWVudSB9IGZyb20gJy4vbWVudS9tZW51LmpzJztcbmltcG9ydCB7IG9wZW5BYm91dFVzIH0gZnJvbSAnLi9hYm91dHVzL2Fib3V0dXMuanMnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJ1xuXG5cbmZ1bmN0aW9uIHJlbW92ZU1haW4oKSB7XG4gICAgXG4gICAgbGV0IG1haW5FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbj4qXCIpO1xuICAgIG1haW5FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKVxufVxuXG5vcGVuV2Vic2l0ZUZyYW1lKCk7XG5vcGVuSG9tZSgpO1xuXG4vLyBpbml0aWF0ZSBxdWVyeSBzZWxlY3RvcnMgYWZ0ZXIgb3BlbldlYnNpdGVGcmFtZSBpcyBydW4gdG8gYXZvaWQgJ251bGwgZXJyb3InXG5jb25zdCB0YXBIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXAtaG9tZVwiKTtcbmNvbnN0IHRhcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhcC1tZW51XCIpO1xuY29uc3QgdGFwQWJvdXRVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFwLWFib3V0dXNcIik7XG5cbnRhcEhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgb3BlbkhvbWUoKTtcbiAgICB0YXBIb21lLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB0YXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB0YXBBYm91dFVzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn0pXG5cbnRhcE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgb3Blbk1lbnUoKTtcbiAgICB0YXBIb21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB0YXBNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB0YXBBYm91dFVzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn0pXG5cbnRhcEFib3V0VXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVNYWluKCk7XG4gICAgb3BlbkFib3V0VXMoKTtcbiAgICB0YXBIb21lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB0YXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB0YXBBYm91dFVzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9