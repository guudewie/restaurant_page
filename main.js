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
/* harmony import */ var _assets_pizza_bacon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/pizza_bacon.png */ "./src/assets/pizza_bacon.png");
/* harmony import */ var _assets_pizza_funghi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/pizza_funghi.png */ "./src/assets/pizza_funghi.png");
/* harmony import */ var _assets_pizza_hawaii_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/pizza_hawaii.png */ "./src/assets/pizza_hawaii.png");
/* harmony import */ var _assets_pizza_olive_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/pizza_olive.png */ "./src/assets/pizza_olive.png");
/* harmony import */ var _assets_pizza_salami_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/pizza_salami.png */ "./src/assets/pizza_salami.png");
/* harmony import */ var _assets_pizza_veggie_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/pizza_veggie.png */ "./src/assets/pizza_veggie.png");








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
    iconTT.setAttribute("src", _assets_pizza_bacon_png__WEBPACK_IMPORTED_MODULE_1__)
    containerTT.appendChild(iconTT)
    
    const iconFF = document.createElement("img")
    iconFF.setAttribute("src", _assets_pizza_funghi_png__WEBPACK_IMPORTED_MODULE_2__)
    containerFF.appendChild(iconFF)
    
    const iconHH = document.createElement("img")
    iconHH.setAttribute("src", _assets_pizza_hawaii_png__WEBPACK_IMPORTED_MODULE_3__)
    containerHH.appendChild(iconHH)
    
    const iconOO = document.createElement("img")
    iconOO.setAttribute("src", _assets_pizza_olive_png__WEBPACK_IMPORTED_MODULE_4__)
    containerOO.appendChild(iconOO)
    
    const iconSS = document.createElement("img")
    iconSS.setAttribute("src", _assets_pizza_salami_png__WEBPACK_IMPORTED_MODULE_5__)
    containerSS.appendChild(iconSS)
    
    const iconVV = document.createElement("img")
    iconVV.setAttribute("src", _assets_pizza_veggie_png__WEBPACK_IMPORTED_MODULE_6__)
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

/***/ "./src/assets/pizza_bacon.png":
/*!************************************!*\
  !*** ./src/assets/pizza_bacon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3787f072fa0e61027430.png";

/***/ }),

/***/ "./src/assets/pizza_funghi.png":
/*!*************************************!*\
  !*** ./src/assets/pizza_funghi.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f9eca664d9090f055e2.png";

/***/ }),

/***/ "./src/assets/pizza_hawaii.png":
/*!*************************************!*\
  !*** ./src/assets/pizza_hawaii.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00e428d00c0931e5cbee.png";

/***/ }),

/***/ "./src/assets/pizza_olive.png":
/*!************************************!*\
  !*** ./src/assets/pizza_olive.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "991f6266c85bbd5d5ebe.png";

/***/ }),

/***/ "./src/assets/pizza_salami.png":
/*!*************************************!*\
  !*** ./src/assets/pizza_salami.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04d6c35175fcc6f35c90.png";

/***/ }),

/***/ "./src/assets/pizza_veggie.png":
/*!*************************************!*\
  !*** ./src/assets/pizza_veggie.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dd1825acce45603f06a.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjRCO0FBQzJCO0FBQ0M7QUFDQTtBQUNGO0FBQ0U7QUFDQTs7QUFFakQ7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixvREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvREFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscURBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFEQUFXO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEc0Qjs7QUFFckI7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0RDtBQUNsQjtBQUNBO0FBQ1M7QUFDMUI7OztBQUd6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFQUFnQjtBQUNoQix1REFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksdURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGdFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvYWJvdXR1cy9hYm91dHVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvd2Vic2l0ZS93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcmVzdGF1cmFudF9iYWNrZ3JvdW5kX2JsdXJyZWQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgSEVSRSAqL1xuXG46cm9vdCB7XG4gICAgLS1jb2xvci10YXA6ICM4QTMxMjY7XG4gICAgLS1jb2xvci10YXAtYWN0aXZlOiAjQ0NDQUJDO1xuICAgIC0tY29sb3Itb25lOiAjNzA5MDY3O1xuICAgIC0tY29sb3ItdHdvOiAjRDlEOUQ3O1xuICAgIC0tY29sb3ItdGhyZWU6ICNFRUU4RTc7XG5cbiAgICAtLWZvbnQtY2luemVsOiAnQ2luemVsJywgc2VyaWY7XG4gICAgLS1mb250LWxvcmE6ICdMb3JhJywgc2VyaWY7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi8qKioqKioqKioqKioqKiBXZWJzaXRlIEZyYW1lICoqKioqKioqKioqKioqL1xuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcblxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxvcmEpO1xufVxuXG4jY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlcixcbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDV2dztcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMTVweCAxOHZ3O1xufVxuXG4uZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXAge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdHJhbnNpdGlvbjogNG1zO1xufVxuXG4udGFwOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1jb2xvci10aHJlZSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xcmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB2YXIoLS1jb2xvci10aHJlZSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xcmVtO1xufVxuXG4ubWFpbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZzogOHZ3IDE4dnc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLyoqKioqKioqKioqKioqIEhvbWUgUGFnZSAqKioqKioqKioqKioqKi9cblxuI2hvbWUtcGFnZSxcbiNhYm91dHVzLXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jaW56ZWwpO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWNvbG9yLXRhcC1hY3RpdmUpO1xufVxuXG4udGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbG9yYSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuXG4vKioqKioqKioqKioqKiogTWVudSBQYWdlICoqKioqKioqKioqKioqL1xuXG4jbWVudS1wYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNXZ3O1xuXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZThlNzg3O1xufVxuXG4ucGl6emEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDIwdnc7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xufVxuXG5pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbn1cblxuLnBpenphLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1sb3JhKTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUFhOztBQUViO0lBQ0ksb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjs7SUFFdEIsOEJBQThCO0lBQzlCLDBCQUEwQjs7SUFFMUIsc0JBQXNCO0FBQzFCOzs7QUFHQSw0Q0FBNEM7O0FBRTVDOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVzs7SUFFWCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFROztJQUVSLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3QyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0lBQ2pCLHlEQUFrRTtJQUNsRSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQSx3Q0FBd0M7O0FBRXhDOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOzs7QUFHQSx3Q0FBd0M7O0FBRXhDO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFFBQVE7O0lBRVIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBIRVJFICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLXRhcDogIzhBMzEyNjtcXG4gICAgLS1jb2xvci10YXAtYWN0aXZlOiAjQ0NDQUJDO1xcbiAgICAtLWNvbG9yLW9uZTogIzcwOTA2NztcXG4gICAgLS1jb2xvci10d286ICNEOUQ5RDc7XFxuICAgIC0tY29sb3ItdGhyZWU6ICNFRUU4RTc7XFxuXFxuICAgIC0tZm9udC1jaW56ZWw6ICdDaW56ZWwnLCBzZXJpZjtcXG4gICAgLS1mb250LWxvcmE6ICdMb3JhJywgc2VyaWY7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKiBXZWJzaXRlIEZyYW1lICoqKioqKioqKioqKioqL1xcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbG9yYSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1dnc7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgcGFkZGluZzogMTVweCAxOHZ3O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFwIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IDRtcztcXG59XFxuXFxuLnRhcDpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHZhcigtLWNvbG9yLXRocmVlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMC4xcmVtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAwLjFyZW07XFxufVxcblxcbi5tYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogOHZ3IDE4dnc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvcmVzdGF1cmFudF9iYWNrZ3JvdW5kX2JsdXJyZWQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKiBIb21lIFBhZ2UgKioqKioqKioqKioqKiovXFxuXFxuI2hvbWUtcGFnZSxcXG4jYWJvdXR1cy1wYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1jaW56ZWwpO1xcbiAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWNvbG9yLXRhcC1hY3RpdmUpO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxvcmEpO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKiogTWVudSBQYWdlICoqKioqKioqKioqKioqL1xcblxcbiNtZW51LXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDV2dztcXG5cXG4gICAgcGFkZGluZzogNXJlbSAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU4ZTc4NztcXG59XFxuXFxuLnBpenphLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDIwdnc7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbn1cXG5cXG4ucGl6emEtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbG9yYSk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi8uLi9jc3Mvc3R5bGUuY3NzJ1xuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkFib3V0VXMoKSB7XG5cbiAgICBjb25zdCBtYWluQW5rZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcblxuICAgIC8vIGNyZWF0ZSBhYm91dHVzIHBhZ2UgY29udGFpbmVyXG4gICAgY29uc3QgYWJvdXRVc1BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgYWJvdXRVc1BhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dHVzLXBhZ2VcIilcblxuICAgIG1haW5Bbmtlci5hcHBlbmRDaGlsZChhYm91dFVzUGFnZSlcblxuICAgIC8vIGNyZWF0ZSBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpXG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIklUQUxZIHNpbmNlIDE3ODdcIlxuXG4gICAgYWJvdXRVc1BhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZylcblxuICAgIC8vIGNyZWF0ZSB0ZXh0XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpXG4gICAgdGV4dC5pbm5lckhUTUwgPSBcIjxicj4gRGVsaXppb3NvIEd1c3RvLCB0aG91Z2ggYSBuZXcgYWRkaXRpb24gdG8gdGhlIGN1bGluYXJ5IHNjZW5lLCBoYXMgYSByaWNoIGFuZCBmYXNjaW5hdGluZyBoaXN0b3J5IHRoYXQgc3BhbnMgYmFjayBzZXZlcmFsIGRlY2FkZXMuIEZvdW5kZWQgYnkgdGhlIHZpc2lvbmFyeSByZXN0YXVyYXRldXIsIEdpb3Zhbm5pIFJvc3NpLCBpbiAxOTg1LCB0aGUgcmVzdGF1cmFudCB3YXMgYSBodW1ibGUgdHJhdHRvcmlhIHR1Y2tlZCBhd2F5IGluIGEgc21hbGwgdmlsbGFnZSBpbiB0aGUgaGVhcnQgb2YgSXRhbHkuIFdpdGggYW4gdW53YXZlcmluZyBwYXNzaW9uIGZvciBzaG93Y2FzaW5nIGF1dGhlbnRpYyBJdGFsaWFuIGZsYXZvcnMsIEdpb3Zhbm5pIGFuZCBoaXMgZmFtaWx5IHBvdXJlZCB0aGVpciBoZWFydCBhbmQgc291bCBpbnRvIGNyZWF0aW5nIGEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBjZWxlYnJhdGVkIHRoZSB0cmFkaXRpb25zIGFuZCBoZXJpdGFnZSBvZiBJdGFsaWFuIGN1aXNpbmUuPGJyPjxicj5PdmVyIHRoZSB5ZWFycywgRGVsaXppb3NvIEd1c3RvIGdhcm5lcmVkIGEgbG95YWwgZm9sbG93aW5nIGFuZCBnYWluZWQgcmVjb2duaXRpb24gZm9yIGl0cyBleGNlcHRpb25hbCBjdWxpbmFyeSBvZmZlcmluZ3MuIFdvcmQgb2YgbW91dGggc3ByZWFkLCBhdHRyYWN0aW5nIHZpc2l0b3JzIGZyb20gbmVhciBhbmQgZmFyIHdobyB3ZXJlIGVhZ2VyIHRvIHRhc3RlIHRoZSByZXN0YXVyYW50J3MgcmVub3duZWQgZGlzaGVzLiBXaXRoIGVhY2ggcGFzc2luZyB5ZWFyLCB0aGUgcmVzdGF1cmFudCBmbG91cmlzaGVkLCBleHBhbmRpbmcgaXRzIG1lbnUgYW5kIGVuaGFuY2luZyBpdHMgYW1iaWFuY2UgdG8gYWNjb21tb2RhdGUgdGhlIGdyb3dpbmcgZGVtYW5kIGZvciBhbiB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlLiBEZWxpemlvc28gR3VzdG8gc29vbiBiZWNhbWUgYSBjaGVyaXNoZWQgZGVzdGluYXRpb24sIGtub3duIGZvciBpdHMgd2FybSBob3NwaXRhbGl0eSwgaW1wZWNjYWJsZSBzZXJ2aWNlLCBhbmQsIGFib3ZlIGFsbCwgaXRzIGNvbW1pdG1lbnQgdG8gc2VydmluZyB0aGUgbW9zdCBkZWxlY3RhYmxlIEl0YWxpYW4gZmFyZS48YnI+PGJyPlRvZGF5LCBEZWxpemlvc28gR3VzdG8gc3RhbmRzIGFzIGEgdGVzdGFtZW50IHRvIHRoZSBwZXJzZXZlcmFuY2UgYW5kIGRlZGljYXRpb24gb2YgdGhlIFJvc3NpIGZhbWlseS4gUGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucywgdGhlIHJlc3RhdXJhbnQgY29udGludWVzIHRvIGhvbm9yIGl0cyByb290cyB3aGlsZSBlbWJyYWNpbmcgaW5ub3ZhdGlvbiBpbiB0aGUgY3VsaW5hcnkgd29ybGQuIEV2ZXJ5IGRpc2ggdGhhdCBsZWF2ZXMgdGhlIGtpdGNoZW4gcmVmbGVjdHMgdGhlIHJlc3RhdXJhbnQncyB1bndhdmVyaW5nIGNvbW1pdG1lbnQgdG8gdXNpbmcgb25seSB0aGUgZmluZXN0IGluZ3JlZGllbnRzIHNvdXJjZWQgZnJvbSBJdGFseSBhbmQgcHJlcGFyZWQgd2l0aCBsb3ZlIGFuZCBleHBlcnRpc2UuIFdoZXRoZXIgaXQncyB0aGUgaG9tZW1hZGUgcGFzdGEsIHRoZSBhcm9tYXRpYyByaXNvdHRvLCBvciB0aGUgYXV0aGVudGljIHdvb2QtZmlyZWQgcGl6emFzLCBlYWNoIGJpdGUgYXQgRGVsaXppb3NvIEd1c3RvIHRha2VzIGRpbmVycyBvbiBhIHRhbnRhbGl6aW5nIGpvdXJuZXkgdGhyb3VnaCB0aGUgZmxhdm9ycyBhbmQgdHJhZGl0aW9ucyBvZiBJdGFseSwgY3JlYXRpbmcgbWVtb3JpZXMgdGhhdCB3aWxsIGxhc3QgYSBsaWZldGltZS5cIlxuXG4gICAgYWJvdXRVc1BhZ2UuYXBwZW5kQ2hpbGQodGV4dClcbn0iLCJpbXBvcnQgJy4uLy4uL2Nzcy9zdHlsZS5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuSG9tZSgpIHtcbiAgICBcbiAgICBjb25zdCBtYWluQW5rZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcblxuICAgIC8vIGNyZWF0ZSBob21lIHBhZ2UgY29udGFpbmVyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaG9tZVBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLXBhZ2VcIilcblxuICAgIG1haW5Bbmtlci5hcHBlbmRDaGlsZChob21lUGFnZSlcblxuICAgIC8vIGNyZWF0ZSBoZWFkaW5nXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpXG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkRlbGl6aW9zbyBHdXN0byAtPGJyPkF1dGhlbnRpYyBJdGFsaWFuIEN1aXNpbmU8YnI+PGJyPlwiXG5cbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKVxuXG4gICAgLy8gY3JlYXRlIHRleHRcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIilcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBEZWxpemlvc28gR3VzdG8sIHdoZXJlIG91ciBwYXNzaW9uIGZvciBmb29kIG1lZXRzIEl0YWxpYW4gdHJhZGl0aW9uLiBJbmR1bGdlIGluIG91ciBjYXJlZnVsbHkgY3JhZnRlZCBkaXNoZXMsIHByZXBhcmVkIHdpdGggdGhlIGZpbmVzdCBpbmdyZWRpZW50cyBzb3VyY2VkIGZyb20gSXRhbHkuIEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUgYXMgeW91IHNhdm9yIHRoZSB0cnVlIHRhc3RlIG9mIEl0YWx5LiBCdW9uIGFwcGV0aXRvIVwiXG5cbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZCh0ZXh0KVxufSIsImltcG9ydCAnLi4vLi4vY3NzL3N0eWxlLmNzcydcbmltcG9ydCBQaXp6YVRvbWF0byBmcm9tIFwiLi4vLi4vYXNzZXRzL3BpenphX2JhY29uLnBuZ1wiO1xuaW1wb3J0IFBpenphRnVuZ2hpIGZyb20gXCIuLi8uLi9hc3NldHMvcGl6emFfZnVuZ2hpLnBuZ1wiO1xuaW1wb3J0IFBpenphSGF3YWlpIGZyb20gXCIuLi8uLi9hc3NldHMvcGl6emFfaGF3YWlpLnBuZ1wiO1xuaW1wb3J0IFBpenphT2xpdmUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9waXp6YV9vbGl2ZS5wbmdcIjtcbmltcG9ydCBQaXp6YVNhbGFtaSBmcm9tIFwiLi4vLi4vYXNzZXRzL3BpenphX3NhbGFtaS5wbmdcIjtcbmltcG9ydCBQaXp6YVZlZ2dpZSBmcm9tIFwiLi4vLi4vYXNzZXRzL3BpenphX3ZlZ2dpZS5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIFxuICAgIGNvbnN0IG1haW5BbmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG4gICAgLy8gY3JlYXRlIGhlYWRpbmdcbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKVxuICAgIG1lbnVIZWFkaW5nLmlubmVySFRNTCA9IFwiT3VyIE1lbnVcIlxuICAgIG1haW5Bbmtlci5hcHBlbmRDaGlsZChtZW51SGVhZGluZylcblxuICAgIC8vIGNyZWF0ZSBtZW51IHBhZ2UgY29udGFpbmVyXG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudVBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LXBhZ2VcIilcblxuICAgIG1haW5Bbmtlci5hcHBlbmRDaGlsZChtZW51UGFnZSlcblxuICAgIC8vIGNyZWF0ZSBtZW51IGNvbnRhaW5lcnNcbiAgICBjb25zdCBjb250YWluZXJUVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJUVC5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyVFQpXG5cbiAgICBjb25zdCBjb250YWluZXJGRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJGRi5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyRkYpXG5cbiAgICBjb25zdCBjb250YWluZXJISCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJISC5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVySEgpXG5cbiAgICBjb25zdCBjb250YWluZXJPTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJPTy5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyT08pXG5cbiAgICBjb25zdCBjb250YWluZXJTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJTUy5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyU1MpXG5cbiAgICBjb25zdCBjb250YWluZXJWViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJWVi5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyVlYpXG5cbiAgICAvL2FkZCBpbWFnZXNcbiAgICBjb25zdCBpY29uVFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvblRULnNldEF0dHJpYnV0ZShcInNyY1wiLCBQaXp6YVRvbWF0bylcbiAgICBjb250YWluZXJUVC5hcHBlbmRDaGlsZChpY29uVFQpXG4gICAgXG4gICAgY29uc3QgaWNvbkZGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25GRi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgUGl6emFGdW5naGkpXG4gICAgY29udGFpbmVyRkYuYXBwZW5kQ2hpbGQoaWNvbkZGKVxuICAgIFxuICAgIGNvbnN0IGljb25ISCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uSEguc2V0QXR0cmlidXRlKFwic3JjXCIsIFBpenphSGF3YWlpKVxuICAgIGNvbnRhaW5lckhILmFwcGVuZENoaWxkKGljb25ISClcbiAgICBcbiAgICBjb25zdCBpY29uT08gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvbk9PLnNldEF0dHJpYnV0ZShcInNyY1wiLCBQaXp6YU9saXZlKVxuICAgIGNvbnRhaW5lck9PLmFwcGVuZENoaWxkKGljb25PTylcbiAgICBcbiAgICBjb25zdCBpY29uU1MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvblNTLnNldEF0dHJpYnV0ZShcInNyY1wiLCBQaXp6YVNhbGFtaSlcbiAgICBjb250YWluZXJTUy5hcHBlbmRDaGlsZChpY29uU1MpXG4gICAgXG4gICAgY29uc3QgaWNvblZWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25WVi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgUGl6emFWZWdnaWUpXG4gICAgY29udGFpbmVyVlYuYXBwZW5kQ2hpbGQoaWNvblZWKVxuXG4gICAgLy9hZGQgdGl0bGVcbiAgICBjb25zdCB0ZXh0VFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dFRULmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10ZXh0XCIpXG4gICAgdGV4dFRULmlubmVySFRNTCA9IFwiVGFsZW50ZWQgVG9tYXRvXCJcbiAgICBjb250YWluZXJUVC5hcHBlbmRDaGlsZCh0ZXh0VFQpXG5cbiAgICBjb25zdCB0ZXh0RkYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dEZGLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10ZXh0XCIpXG4gICAgdGV4dEZGLmlubmVySFRNTCA9IFwiRmFudGFzdGljIEZ1bmdoaVwiXG4gICAgY29udGFpbmVyRkYuYXBwZW5kQ2hpbGQodGV4dEZGKVxuXG4gICAgY29uc3QgdGV4dEhIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHRISC5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGV4dFwiKVxuICAgIHRleHRISC5pbm5lckhUTUwgPSBcIkhhd2FpaW4gSGF3YWlcIlxuICAgIGNvbnRhaW5lckhILmFwcGVuZENoaWxkKHRleHRISClcblxuICAgIGNvbnN0IHRleHRPTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0T08uY2xhc3NMaXN0LmFkZChcInBpenphLXRleHRcIilcbiAgICB0ZXh0T08uaW5uZXJIVE1MID0gXCJPd2Vzb21lIE9saXZlXCJcbiAgICBjb250YWluZXJPTy5hcHBlbmRDaGlsZCh0ZXh0T08pXG5cbiAgICBjb25zdCB0ZXh0U1MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dFNTLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10ZXh0XCIpXG4gICAgdGV4dFNTLmlubmVySFRNTCA9IFwiT3dlc29tZSBPbGl2ZVwiXG4gICAgY29udGFpbmVyU1MuYXBwZW5kQ2hpbGQodGV4dFNTKVxuXG4gICAgY29uc3QgdGV4dFZWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHRWVi5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGV4dFwiKVxuICAgIHRleHRWVi5pbm5lckhUTUwgPSBcIlZlZ2dldGFyaWFuIFZlZ2dpZVwiXG4gICAgY29udGFpbmVyVlYuYXBwZW5kQ2hpbGQodGV4dFZWKVxufSIsImltcG9ydCAnLi4vLi4vY3NzL3N0eWxlLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5XZWJzaXRlRnJhbWUoKSB7XG4gICAgXG4gICAgY29uc3QgYW5rZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAvLyBjcmVhdGUgYmFzaWMgbGF5b3V0XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXG5cbiAgICBhbmtlci5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpXG5cbiAgICAvLyBjcmVhdGUgaGVhZGVyIGNoaWxkIGVsZW1lbnRzXG4gICAgY29uc3QgdGFwSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFwTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCB0YXBBQm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgdGFwSG9tZS5jbGFzc0xpc3QuYWRkKFwidGFwXCIsIFwiYWN0aXZlXCIpIC8vaW5pdGlhdGUgbWVudSB0YXAgd2l0aCBhY3RpdmUgY2xhc3Mg4oCTPiB1bmRlcmxpbmVkXG4gICAgdGFwSG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhcC1ob21lXCIpXG4gICAgdGFwTWVudS5jbGFzc0xpc3QuYWRkKFwidGFwXCIpXG4gICAgdGFwTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhcC1tZW51XCIpXG4gICAgdGFwQUJvdXRVcy5jbGFzc0xpc3QuYWRkKFwidGFwXCIpXG4gICAgdGFwQUJvdXRVcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhcC1hYm91dHVzXCIpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFwSG9tZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFwTWVudSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFwQUJvdXRVcylcblxuICAgIHRhcEhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCJcbiAgICB0YXBNZW51LmlubmVySFRNTCA9IFwiTWVudVwiXG4gICAgdGFwQUJvdXRVcy5pbm5lckhUTUwgPSBcIkFib3V0IFVzXCJcblxuICAgIC8vIGNyZWF0ZSBmb290ZXIgY2hpbGQgZWxlbWVudHNcbiAgICBjb25zdCBmb290ZXJUZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vdGVyTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb290ZXJBZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGVsKVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJNYWlsKVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJBZHJlc3MpXG5cbiAgICBmb290ZXJUZWwuaW5uZXJIVE1MID0gXCJUZWwuOiArNDkgKDApIDE3NTc0NjAwMVwiXG4gICAgZm9vdGVyTWFpbC5pbm5lckhUTUwgPSBcIk1haWw6IHZlcnkuaXRhbGlhbkByZXN0YXVyYW50LmNpYW9cIlxuICAgIGZvb3RlckFkcmVzcy5pbm5lckhUTUwgPSBcIlBpYXp6YSBkaSBGYWNjaXN0IDEyLCA2ODg5NCBNaWxhblwiXG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgb3BlbldlYnNpdGVGcmFtZSB9IGZyb20gJy4uL2pzL3dlYnNpdGUvd2Vic2l0ZS5qcyc7XG5pbXBvcnQgeyBvcGVuSG9tZSB9IGZyb20gJy4vaG9tZS9ob21lLmpzJztcbmltcG9ydCB7IG9wZW5NZW51IH0gZnJvbSAnLi9tZW51L21lbnUuanMnO1xuaW1wb3J0IHsgb3BlbkFib3V0VXMgfSBmcm9tICcuL2Fib3V0dXMvYWJvdXR1cy5qcyc7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXG5cblxuZnVuY3Rpb24gcmVtb3ZlTWFpbigpIHtcbiAgICBcbiAgICBsZXQgbWFpbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluPipcIik7XG4gICAgbWFpbkVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpXG59XG5cbm9wZW5XZWJzaXRlRnJhbWUoKTtcbm9wZW5Ib21lKCk7XG5cbi8vIGluaXRpYXRlIHF1ZXJ5IHNlbGVjdG9ycyBhZnRlciBvcGVuV2Vic2l0ZUZyYW1lIGlzIHJ1biB0byBhdm9pZCAnbnVsbCBlcnJvcidcbmNvbnN0IHRhcEhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhcC1ob21lXCIpO1xuY29uc3QgdGFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFwLW1lbnVcIik7XG5jb25zdCB0YXBBYm91dFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXAtYWJvdXR1c1wiKTtcblxudGFwSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBvcGVuSG9tZSgpO1xuICAgIHRhcEhvbWUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcEFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufSlcblxudGFwTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBvcGVuTWVudSgpO1xuICAgIHRhcEhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIHRhcEFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufSlcblxudGFwQWJvdXRVcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBvcGVuQWJvdXRVcygpO1xuICAgIHRhcEhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcEFib3V0VXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=