/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/aboutus/aboutus.js":
/*!***********************************!*\
  !*** ./src/js/aboutus/aboutus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openAboutUs: () => (/* binding */ openAboutUs)
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEdPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMvQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040RDtBQUNsQjtBQUNBO0FBQ1M7OztBQUduRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFQUFnQjtBQUNoQix1REFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksdURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGdFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL2Fib3V0dXMvYWJvdXR1cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9qcy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2pzL3dlYnNpdGUvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG9wZW5BYm91dFVzKCkge1xuXG4gICAgY29uc3QgbWFpbkFua2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG5cbiAgICAvLyBjcmVhdGUgYWJvdXR1cyBwYWdlIGNvbnRhaW5lclxuICAgIGNvbnN0IGFib3V0VXNQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGFib3V0VXNQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXR1cy1wYWdlXCIpXG5cbiAgICBtYWluQW5rZXIuYXBwZW5kQ2hpbGQoYWJvdXRVc1BhZ2UpXG5cbiAgICAvLyBjcmVhdGUgaGVhZGluZ1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKVxuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJJVEFMWSBzaW5jZSAxNzg3XCJcblxuICAgIGFib3V0VXNQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAvLyBjcmVhdGUgdGV4dFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKVxuICAgIHRleHQuaW5uZXJIVE1MID0gXCI8YnI+IERlbGl6aW9zbyBHdXN0bywgdGhvdWdoIGEgbmV3IGFkZGl0aW9uIHRvIHRoZSBjdWxpbmFyeSBzY2VuZSwgaGFzIGEgcmljaCBhbmQgZmFzY2luYXRpbmcgaGlzdG9yeSB0aGF0IHNwYW5zIGJhY2sgc2V2ZXJhbCBkZWNhZGVzLiBGb3VuZGVkIGJ5IHRoZSB2aXNpb25hcnkgcmVzdGF1cmF0ZXVyLCBHaW92YW5uaSBSb3NzaSwgaW4gMTk4NSwgdGhlIHJlc3RhdXJhbnQgd2FzIGEgaHVtYmxlIHRyYXR0b3JpYSB0dWNrZWQgYXdheSBpbiBhIHNtYWxsIHZpbGxhZ2UgaW4gdGhlIGhlYXJ0IG9mIEl0YWx5LiBXaXRoIGFuIHVud2F2ZXJpbmcgcGFzc2lvbiBmb3Igc2hvd2Nhc2luZyBhdXRoZW50aWMgSXRhbGlhbiBmbGF2b3JzLCBHaW92YW5uaSBhbmQgaGlzIGZhbWlseSBwb3VyZWQgdGhlaXIgaGVhcnQgYW5kIHNvdWwgaW50byBjcmVhdGluZyBhIGRpbmluZyBleHBlcmllbmNlIHRoYXQgY2VsZWJyYXRlZCB0aGUgdHJhZGl0aW9ucyBhbmQgaGVyaXRhZ2Ugb2YgSXRhbGlhbiBjdWlzaW5lLjxicj48YnI+T3ZlciB0aGUgeWVhcnMsIERlbGl6aW9zbyBHdXN0byBnYXJuZXJlZCBhIGxveWFsIGZvbGxvd2luZyBhbmQgZ2FpbmVkIHJlY29nbml0aW9uIGZvciBpdHMgZXhjZXB0aW9uYWwgY3VsaW5hcnkgb2ZmZXJpbmdzLiBXb3JkIG9mIG1vdXRoIHNwcmVhZCwgYXR0cmFjdGluZyB2aXNpdG9ycyBmcm9tIG5lYXIgYW5kIGZhciB3aG8gd2VyZSBlYWdlciB0byB0YXN0ZSB0aGUgcmVzdGF1cmFudCdzIHJlbm93bmVkIGRpc2hlcy4gV2l0aCBlYWNoIHBhc3NpbmcgeWVhciwgdGhlIHJlc3RhdXJhbnQgZmxvdXJpc2hlZCwgZXhwYW5kaW5nIGl0cyBtZW51IGFuZCBlbmhhbmNpbmcgaXRzIGFtYmlhbmNlIHRvIGFjY29tbW9kYXRlIHRoZSBncm93aW5nIGRlbWFuZCBmb3IgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gRGVsaXppb3NvIEd1c3RvIHNvb24gYmVjYW1lIGEgY2hlcmlzaGVkIGRlc3RpbmF0aW9uLCBrbm93biBmb3IgaXRzIHdhcm0gaG9zcGl0YWxpdHksIGltcGVjY2FibGUgc2VydmljZSwgYW5kLCBhYm92ZSBhbGwsIGl0cyBjb21taXRtZW50IHRvIHNlcnZpbmcgdGhlIG1vc3QgZGVsZWN0YWJsZSBJdGFsaWFuIGZhcmUuPGJyPjxicj5Ub2RheSwgRGVsaXppb3NvIEd1c3RvIHN0YW5kcyBhcyBhIHRlc3RhbWVudCB0byB0aGUgcGVyc2V2ZXJhbmNlIGFuZCBkZWRpY2F0aW9uIG9mIHRoZSBSb3NzaSBmYW1pbHkuIFBhc3NlZCBkb3duIHRocm91Z2ggZ2VuZXJhdGlvbnMsIHRoZSByZXN0YXVyYW50IGNvbnRpbnVlcyB0byBob25vciBpdHMgcm9vdHMgd2hpbGUgZW1icmFjaW5nIGlubm92YXRpb24gaW4gdGhlIGN1bGluYXJ5IHdvcmxkLiBFdmVyeSBkaXNoIHRoYXQgbGVhdmVzIHRoZSBraXRjaGVuIHJlZmxlY3RzIHRoZSByZXN0YXVyYW50J3MgdW53YXZlcmluZyBjb21taXRtZW50IHRvIHVzaW5nIG9ubHkgdGhlIGZpbmVzdCBpbmdyZWRpZW50cyBzb3VyY2VkIGZyb20gSXRhbHkgYW5kIHByZXBhcmVkIHdpdGggbG92ZSBhbmQgZXhwZXJ0aXNlLiBXaGV0aGVyIGl0J3MgdGhlIGhvbWVtYWRlIHBhc3RhLCB0aGUgYXJvbWF0aWMgcmlzb3R0bywgb3IgdGhlIGF1dGhlbnRpYyB3b29kLWZpcmVkIHBpenphcywgZWFjaCBiaXRlIGF0IERlbGl6aW9zbyBHdXN0byB0YWtlcyBkaW5lcnMgb24gYSB0YW50YWxpemluZyBqb3VybmV5IHRocm91Z2ggdGhlIGZsYXZvcnMgYW5kIHRyYWRpdGlvbnMgb2YgSXRhbHksIGNyZWF0aW5nIG1lbW9yaWVzIHRoYXQgd2lsbCBsYXN0IGEgbGlmZXRpbWUuXCJcblxuICAgIGFib3V0VXNQYWdlLmFwcGVuZENoaWxkKHRleHQpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5Ib21lKCkge1xuICAgIFxuICAgIGNvbnN0IG1haW5BbmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG4gICAgLy8gY3JlYXRlIGhvbWUgcGFnZSBjb250YWluZXJcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtcGFnZVwiKVxuXG4gICAgbWFpbkFua2VyLmFwcGVuZENoaWxkKGhvbWVQYWdlKVxuXG4gICAgLy8gY3JlYXRlIGhlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIilcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiRGVsaXppb3NvIEd1c3RvIC08YnI+QXV0aGVudGljIEl0YWxpYW4gQ3Vpc2luZTxicj48YnI+XCJcblxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpXG5cbiAgICAvLyBjcmVhdGUgdGV4dFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKVxuICAgIHRleHQuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIERlbGl6aW9zbyBHdXN0bywgd2hlcmUgb3VyIHBhc3Npb24gZm9yIGZvb2QgbWVldHMgSXRhbGlhbiB0cmFkaXRpb24uIEluZHVsZ2UgaW4gb3VyIGNhcmVmdWxseSBjcmFmdGVkIGRpc2hlcywgcHJlcGFyZWQgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzIHNvdXJjZWQgZnJvbSBJdGFseS4gSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSBhcyB5b3Ugc2F2b3IgdGhlIHRydWUgdGFzdGUgb2YgSXRhbHkuIEJ1b24gYXBwZXRpdG8hXCJcblxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHRleHQpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIFxuICAgIGNvbnN0IG1haW5BbmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG4gICAgLy8gY3JlYXRlIGhlYWRpbmdcbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtZW51SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKVxuICAgIG1lbnVIZWFkaW5nLmlubmVySFRNTCA9IFwiT3VyIE1lbnVcIlxuICAgIG1haW5Bbmtlci5hcHBlbmRDaGlsZChtZW51SGVhZGluZylcblxuICAgIC8vIGNyZWF0ZSBtZW51IHBhZ2UgY29udGFpbmVyXG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudVBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LXBhZ2VcIilcblxuICAgIG1haW5Bbmtlci5hcHBlbmRDaGlsZChtZW51UGFnZSlcblxuICAgIC8vIGNyZWF0ZSBtZW51IGNvbnRhaW5lcnNcbiAgICBjb25zdCBjb250YWluZXJUVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJUVC5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyVFQpXG5cbiAgICBjb25zdCBjb250YWluZXJGRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJGRi5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyRkYpXG5cbiAgICBjb25zdCBjb250YWluZXJISCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJISC5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVySEgpXG5cbiAgICBjb25zdCBjb250YWluZXJPTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJPTy5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyT08pXG5cbiAgICBjb25zdCBjb250YWluZXJTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJTUy5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyU1MpXG5cbiAgICBjb25zdCBjb250YWluZXJWViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXJWVi5jbGFzc0xpc3QuYWRkKFwicGl6emEtY29udGFpbmVyXCIpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY29udGFpbmVyVlYpXG5cbiAgICAvL2FkZCBpbWFnZXNcbiAgICBjb25zdCBpY29uVFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgaWNvblRULnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9hc3NldHMvcGl6emFfYmFjb24ucG5nXCIpXG4gICAgY29udGFpbmVyVFQuYXBwZW5kQ2hpbGQoaWNvblRUKVxuICAgIFxuICAgIGNvbnN0IGljb25GRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uRkYuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2Fzc2V0cy9waXp6YV9mdW5naGkucG5nXCIpXG4gICAgY29udGFpbmVyRkYuYXBwZW5kQ2hpbGQoaWNvbkZGKVxuICAgIFxuICAgIGNvbnN0IGljb25ISCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uSEguc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2Fzc2V0cy9waXp6YV9oYXdhaWkucG5nXCIpXG4gICAgY29udGFpbmVySEguYXBwZW5kQ2hpbGQoaWNvbkhIKVxuICAgIFxuICAgIGNvbnN0IGljb25PTyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpY29uT08uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2Fzc2V0cy9waXp6YV9vbGl2ZS5wbmdcIilcbiAgICBjb250YWluZXJPTy5hcHBlbmRDaGlsZChpY29uT08pXG4gICAgXG4gICAgY29uc3QgaWNvblNTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25TUy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvYXNzZXRzL3BpenphX3NhbGFtaS5wbmdcIilcbiAgICBjb250YWluZXJTUy5hcHBlbmRDaGlsZChpY29uU1MpXG4gICAgXG4gICAgY29uc3QgaWNvblZWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGljb25WVi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvYXNzZXRzL3BpenphX3ZlZ2dpZS5wbmdcIilcbiAgICBjb250YWluZXJWVi5hcHBlbmRDaGlsZChpY29uVlYpXG5cbiAgICAvL2FkZCB0aXRsZVxuICAgIGNvbnN0IHRleHRUVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0VFQuY2xhc3NMaXN0LmFkZChcInBpenphLXRleHRcIilcbiAgICB0ZXh0VFQuaW5uZXJIVE1MID0gXCJUYWxlbnRlZCBUb21hdG9cIlxuICAgIGNvbnRhaW5lclRULmFwcGVuZENoaWxkKHRleHRUVClcblxuICAgIGNvbnN0IHRleHRGRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0RkYuY2xhc3NMaXN0LmFkZChcInBpenphLXRleHRcIilcbiAgICB0ZXh0RkYuaW5uZXJIVE1MID0gXCJGYW50YXN0aWMgRnVuZ2hpXCJcbiAgICBjb250YWluZXJGRi5hcHBlbmRDaGlsZCh0ZXh0RkYpXG5cbiAgICBjb25zdCB0ZXh0SEggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dEhILmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10ZXh0XCIpXG4gICAgdGV4dEhILmlubmVySFRNTCA9IFwiSGF3YWlpbiBIYXdhaVwiXG4gICAgY29udGFpbmVySEguYXBwZW5kQ2hpbGQodGV4dEhIKVxuXG4gICAgY29uc3QgdGV4dE9PID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRleHRPTy5jbGFzc0xpc3QuYWRkKFwicGl6emEtdGV4dFwiKVxuICAgIHRleHRPTy5pbm5lckhUTUwgPSBcIk93ZXNvbWUgT2xpdmVcIlxuICAgIGNvbnRhaW5lck9PLmFwcGVuZENoaWxkKHRleHRPTylcblxuICAgIGNvbnN0IHRleHRTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0ZXh0U1MuY2xhc3NMaXN0LmFkZChcInBpenphLXRleHRcIilcbiAgICB0ZXh0U1MuaW5uZXJIVE1MID0gXCJPd2Vzb21lIE9saXZlXCJcbiAgICBjb250YWluZXJTUy5hcHBlbmRDaGlsZCh0ZXh0U1MpXG5cbiAgICBjb25zdCB0ZXh0VlYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGV4dFZWLmNsYXNzTGlzdC5hZGQoXCJwaXp6YS10ZXh0XCIpXG4gICAgdGV4dFZWLmlubmVySFRNTCA9IFwiVmVnZ2V0YXJpYW4gVmVnZ2llXCJcbiAgICBjb250YWluZXJWVi5hcHBlbmRDaGlsZCh0ZXh0VlYpXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5XZWJzaXRlRnJhbWUoKSB7XG4gICAgXG4gICAgY29uc3QgYW5rZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAvLyBjcmVhdGUgYmFzaWMgbGF5b3V0XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpXG5cbiAgICBhbmtlci5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpXG5cbiAgICAvLyBjcmVhdGUgaGVhZGVyIGNoaWxkIGVsZW1lbnRzXG4gICAgY29uc3QgdGFwSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFwTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCB0YXBBQm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgdGFwSG9tZS5jbGFzc0xpc3QuYWRkKFwidGFwXCIsIFwiYWN0aXZlXCIpIC8vaW5pdGlhdGUgbWVudSB0YXAgd2l0aCBhY3RpdmUgY2xhc3Mg4oCTPiB1bmRlcmxpbmVkXG4gICAgdGFwSG9tZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhcC1ob21lXCIpXG4gICAgdGFwTWVudS5jbGFzc0xpc3QuYWRkKFwidGFwXCIpXG4gICAgdGFwTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhcC1tZW51XCIpXG4gICAgdGFwQUJvdXRVcy5jbGFzc0xpc3QuYWRkKFwidGFwXCIpXG4gICAgdGFwQUJvdXRVcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhcC1hYm91dHVzXCIpXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFwSG9tZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFwTWVudSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFwQUJvdXRVcylcblxuICAgIHRhcEhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCJcbiAgICB0YXBNZW51LmlubmVySFRNTCA9IFwiTWVudVwiXG4gICAgdGFwQUJvdXRVcy5pbm5lckhUTUwgPSBcIkFib3V0IFVzXCJcblxuICAgIC8vIGNyZWF0ZSBmb290ZXIgY2hpbGQgZWxlbWVudHNcbiAgICBjb25zdCBmb290ZXJUZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgZm9vdGVyTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBmb290ZXJBZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGVsKVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJNYWlsKVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJBZHJlc3MpXG5cbiAgICBmb290ZXJUZWwuaW5uZXJIVE1MID0gXCJUZWwuOiArNDkgKDApIDE3NTc0NjAwMVwiXG4gICAgZm9vdGVyTWFpbC5pbm5lckhUTUwgPSBcIk1haWw6IHZlcnkuaXRhbGlhbkByZXN0YXVyYW50LmNpYW9cIlxuICAgIGZvb3RlckFkcmVzcy5pbm5lckhUTUwgPSBcIlBpYXp6YSBkaSBGYWNjaXN0IDEyLCA2ODg5NCBNaWxhblwiXG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgb3BlbldlYnNpdGVGcmFtZSB9IGZyb20gJy4uL2pzL3dlYnNpdGUvd2Vic2l0ZS5qcyc7XG5pbXBvcnQgeyBvcGVuSG9tZSB9IGZyb20gJy4vaG9tZS9ob21lLmpzJztcbmltcG9ydCB7IG9wZW5NZW51IH0gZnJvbSAnLi9tZW51L21lbnUuanMnO1xuaW1wb3J0IHsgb3BlbkFib3V0VXMgfSBmcm9tICcuL2Fib3V0dXMvYWJvdXR1cy5qcyc7XG5cblxuZnVuY3Rpb24gcmVtb3ZlTWFpbigpIHtcbiAgICBcbiAgICBsZXQgbWFpbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluPipcIik7XG4gICAgbWFpbkVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpXG59XG5cbm9wZW5XZWJzaXRlRnJhbWUoKTtcbm9wZW5Ib21lKCk7XG5cbi8vIGluaXRpYXRlIHF1ZXJ5IHNlbGVjdG9ycyBhZnRlciBvcGVuV2Vic2l0ZUZyYW1lIGlzIHJ1biB0byBhdm9pZCAnbnVsbCBlcnJvcidcbmNvbnN0IHRhcEhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhcC1ob21lXCIpO1xuY29uc3QgdGFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFwLW1lbnVcIik7XG5jb25zdCB0YXBBYm91dFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXAtYWJvdXR1c1wiKTtcblxudGFwSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBvcGVuSG9tZSgpO1xuICAgIHRhcEhvbWUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcEFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufSlcblxudGFwTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBvcGVuTWVudSgpO1xuICAgIHRhcEhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIHRhcEFib3V0VXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufSlcblxudGFwQWJvdXRVcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBvcGVuQWJvdXRVcygpO1xuICAgIHRhcEhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIHRhcEFib3V0VXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=