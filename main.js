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

/***/ "./src/js/aboutus/aboutus.js":
/*!***********************************!*\
  !*** ./src/js/aboutus/aboutus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openAboutUs: () => (/* binding */ openAboutUs)\n/* harmony export */ });\nfunction openAboutUs() {\n\n    const mainAnker = document.querySelector(\".main\")\n\n    // create aboutus page container\n    const aboutUsPage = document.createElement(\"div\")\n    aboutUsPage.setAttribute(\"id\", \"aboutus-page\")\n\n    mainAnker.appendChild(aboutUsPage)\n\n    // create heading\n    const heading = document.createElement(\"div\")\n    heading.classList.add(\"heading\")\n    heading.innerHTML = \"ITALY since 1787\"\n\n    aboutUsPage.appendChild(heading)\n\n    // create text\n    const text = document.createElement(\"div\")\n    text.classList.add(\"text\")\n    text.innerHTML = \"<br> Delizioso Gusto, though a new addition to the culinary scene, has a rich and fascinating history that spans back several decades. Founded by the visionary restaurateur, Giovanni Rossi, in 1985, the restaurant was a humble trattoria tucked away in a small village in the heart of Italy. With an unwavering passion for showcasing authentic Italian flavors, Giovanni and his family poured their heart and soul into creating a dining experience that celebrated the traditions and heritage of Italian cuisine.<br><br>Over the years, Delizioso Gusto garnered a loyal following and gained recognition for its exceptional culinary offerings. Word of mouth spread, attracting visitors from near and far who were eager to taste the restaurant's renowned dishes. With each passing year, the restaurant flourished, expanding its menu and enhancing its ambiance to accommodate the growing demand for an unforgettable dining experience. Delizioso Gusto soon became a cherished destination, known for its warm hospitality, impeccable service, and, above all, its commitment to serving the most delectable Italian fare.<br><br>Today, Delizioso Gusto stands as a testament to the perseverance and dedication of the Rossi family. Passed down through generations, the restaurant continues to honor its roots while embracing innovation in the culinary world. Every dish that leaves the kitchen reflects the restaurant's unwavering commitment to using only the finest ingredients sourced from Italy and prepared with love and expertise. Whether it's the homemade pasta, the aromatic risotto, or the authentic wood-fired pizzas, each bite at Delizioso Gusto takes diners on a tantalizing journey through the flavors and traditions of Italy, creating memories that will last a lifetime.\"\n\n    aboutUsPage.appendChild(text)\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/aboutus/aboutus.js?");

/***/ }),

/***/ "./src/js/home/home.js":
/*!*****************************!*\
  !*** ./src/js/home/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openHome: () => (/* binding */ openHome)\n/* harmony export */ });\nfunction openHome() {\n    \n    const mainAnker = document.querySelector(\".main\")\n\n    // create home page container\n    const homePage = document.createElement(\"div\")\n    homePage.setAttribute(\"id\", \"home-page\")\n\n    mainAnker.appendChild(homePage)\n\n    // create heading\n    const heading = document.createElement(\"div\")\n    heading.classList.add(\"heading\")\n    heading.innerHTML = \"Delizioso Gusto -<br>Authentic Italian Cuisine<br><br>\"\n\n    homePage.appendChild(heading)\n\n    // create text\n    const text = document.createElement(\"div\")\n    text.classList.add(\"text\")\n    text.innerHTML = \"Welcome to Delizioso Gusto, where our passion for food meets Italian tradition. Indulge in our carefully crafted dishes, prepared with the finest ingredients sourced from Italy. Immerse yourself in the warm and inviting atmosphere as you savor the true taste of Italy. Buon appetito!\"\n\n    homePage.appendChild(text)\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/home/home.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_website_website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/website/website.js */ \"./src/js/website/website.js\");\n/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.js */ \"./src/js/home/home.js\");\n/* harmony import */ var _aboutus_aboutus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus/aboutus.js */ \"./src/js/aboutus/aboutus.js\");\n\n\n\n\n\nwindow.addEventListener(\"load\", () => {\n    (0,_js_website_website_js__WEBPACK_IMPORTED_MODULE_0__.openWebsiteFrame)();\n    (0,_aboutus_aboutus_js__WEBPACK_IMPORTED_MODULE_2__.openAboutUs)();\n    (0,_home_home_js__WEBPACK_IMPORTED_MODULE_1__.openHome)()\n})\n\n// import openMenu() from menu\n// import openContact() from contact\n\n/*\n\n\nTAP-SWITCHING LOGIC\n\nmain.addeventlistener {\n    openMain()   \n}\n\nmenu.addeventlistener { \n    openMenu()   \n}\n\ncontact.addeventlistener {\n    openContact()   \n}\n\n\n*/\n\n//# sourceURL=webpack://restaurant_page/./src/js/index.js?");

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