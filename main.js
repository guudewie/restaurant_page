/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_website_website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/website/website.js */ \"./src/js/website/website.js\");\n/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.js */ \"./src/js/menu/menu.js\");\n\n//import { openHome } from './home/home.js';\n\n//import { openAboutUs } from './aboutus/aboutus.js';\n\n\nwindow.addEventListener(\"load\", () => {\n    (0,_js_website_website_js__WEBPACK_IMPORTED_MODULE_0__.openWebsiteFrame)();\n    (0,_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__.openMenu)();\n})\n\n// import openMenu() from menu\n// import openContact() from contact\n\n/*\n\n\nTAP-SWITCHING LOGIC\n\nmain.addeventlistener {\n    openMain()   \n}\n\nmenu.addeventlistener { \n    openMenu()   \n}\n\ncontact.addeventlistener {\n    openContact()   \n}\n\n\n*/\n\n//# sourceURL=webpack://restaurant_page/./src/js/index.js?");

/***/ }),

/***/ "./src/js/menu/menu.js":
/*!*****************************!*\
  !*** ./src/js/menu/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openMenu: () => (/* binding */ openMenu)\n/* harmony export */ });\nfunction openMenu() {\n    \n    const mainAnker = document.querySelector(\".main\")\n\n    // create menu page container\n    const menuPage = document.createElement(\"div\")\n    menuPage.setAttribute(\"id\", \"menu-page\")\n\n    mainAnker.appendChild(menuPage)\n\n    // create menu containers\n    const containerTT = document.createElement(\"div\")\n    containerTT.classList.add(\"pizza-container\")\n    menuPage.appendChild(containerTT)\n\n    const containerFF = document.createElement(\"div\")\n    containerFF.classList.add(\"pizza-container\")\n    menuPage.appendChild(containerFF)\n\n    const containerHH = document.createElement(\"div\")\n    containerHH.classList.add(\"pizza-container\")\n    menuPage.appendChild(containerHH)\n\n    const containerOO = document.createElement(\"div\")\n    containerOO.classList.add(\"pizza-container\")\n    menuPage.appendChild(containerOO)\n\n    const containerSS = document.createElement(\"div\")\n    containerSS.classList.add(\"pizza-container\")\n    menuPage.appendChild(containerSS)\n\n    const containerVV = document.createElement(\"div\")\n    containerVV.classList.add(\"pizza-container\")\n    menuPage.appendChild(containerVV)\n\n    //add images\n    const iconTT = document.createElement(\"img\")\n    iconTT.setAttribute(\"src\", \"../src/assets/pizza_bacon.png\")\n    containerTT.appendChild(iconTT)\n    \n    const iconFF = document.createElement(\"img\")\n    iconFF.setAttribute(\"src\", \"../src/assets/pizza_funghi.png\")\n    containerFF.appendChild(iconFF)\n    \n    const iconHH = document.createElement(\"img\")\n    iconHH.setAttribute(\"src\", \"../src/assets/pizza_hawaii.png\")\n    containerHH.appendChild(iconHH)\n    \n    const iconOO = document.createElement(\"img\")\n    iconOO.setAttribute(\"src\", \"../src/assets/pizza_olive.png\")\n    containerOO.appendChild(iconOO)\n    \n    const iconSS = document.createElement(\"img\")\n    iconSS.setAttribute(\"src\", \"../src/assets/pizza_salami.png\")\n    containerSS.appendChild(iconSS)\n    \n    const iconVV = document.createElement(\"img\")\n    iconVV.setAttribute(\"src\", \"../src/assets/pizza_veggie.png\")\n    containerVV.appendChild(iconVV)\n\n    //add title\n    const textTT = document.createElement(\"div\")\n    textTT.classList.add(\"pizza-text\")\n    textTT.innerHTML = \"Talented Tomato\"\n    containerTT.appendChild(textTT)\n\n    const textFF = document.createElement(\"div\")\n    textFF.classList.add(\"pizza-text\")\n    textFF.innerHTML = \"Fantastic Funghi\"\n    containerFF.appendChild(textFF)\n\n    const textHH = document.createElement(\"div\")\n    textHH.classList.add(\"pizza-text\")\n    textHH.innerHTML = \"Hawaiin Hawai\"\n    containerHH.appendChild(textHH)\n\n    const textOO = document.createElement(\"div\")\n    textOO.classList.add(\"pizza-text\")\n    textOO.innerHTML = \"Owesome Olive\"\n    containerOO.appendChild(textOO)\n\n    const textSS = document.createElement(\"div\")\n    textSS.classList.add(\"pizza-text\")\n    textSS.innerHTML = \"Owesome Olive\"\n    containerSS.appendChild(textSS)\n\n    const textVV = document.createElement(\"div\")\n    textVV.classList.add(\"pizza-text\")\n    textVV.innerHTML = \"Veggetarian Veggie\"\n    containerVV.appendChild(textVV)\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/menu/menu.js?");

/***/ }),

/***/ "./src/js/website/website.js":
/*!***********************************!*\
  !*** ./src/js/website/website.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openWebsiteFrame: () => (/* binding */ openWebsiteFrame)\n/* harmony export */ });\nfunction openWebsiteFrame() {\n    \n    const anker = document.getElementById(\"content\");\n\n    // create basic layout\n    const header = document.createElement(\"div\")\n    const main = document.createElement(\"div\")\n    const footer = document.createElement(\"div\")\n    \n    header.classList.add(\"header\")\n    main.classList.add(\"main\")\n    footer.classList.add(\"footer\")\n\n    anker.append(header, main, footer)\n\n    // create header child elements\n    const tapHome = document.createElement(\"div\")\n    const tapMenu = document.createElement(\"div\")\n    const tapABoutUs = document.createElement(\"div\")\n\n    tapHome.classList.add(\"tap\")\n    tapMenu.classList.add(\"tap\")\n    tapABoutUs.classList.add(\"tap\")\n\n    header.appendChild(tapHome)\n    header.appendChild(tapMenu)\n    header.appendChild(tapABoutUs)\n\n    tapHome.innerHTML = \"Home\"\n    tapMenu.innerHTML = \"Menu\"\n    tapABoutUs.innerHTML = \"About Us\"\n\n    // create footer child elements\n    const footerTel = document.createElement(\"div\")\n    const footerMail = document.createElement(\"div\")\n    const footerAdress = document.createElement(\"div\")\n\n    footer.appendChild(footerTel)\n    footer.appendChild(footerMail)\n    footer.appendChild(footerAdress)\n\n    footerTel.innerHTML = \"Tel.: +49 (0) 175746001\"\n    footerMail.innerHTML = \"Mail: very.italian@restaurant.ciao\"\n    footerAdress.innerHTML = \"Piazza di Faccist 12, 68894 Milan\"\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/website/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;