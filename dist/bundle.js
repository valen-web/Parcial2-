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

/***/ "./src/components/cats/cats.ts":
/*!*************************************!*\
  !*** ./src/components/cats/cats.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cats\": () => (/* binding */ cats),\n/* harmony export */   \"cats_propieties\": () => (/* binding */ cats_propieties)\n/* harmony export */ });\nvar cats_propieties;\n(function (cats_propieties) {\n    cats_propieties[\"fact\"] = \"fact\";\n    cats_propieties[\"img\"] = \"img\";\n})(cats_propieties || (cats_propieties = {}));\nclass cats extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            fact: null,\n            img: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            case cats_propieties.fact:\n                this.propieties.fact = newValue;\n                break;\n            case cats_propieties.img:\n                this.propieties.img = newValue;\n                break;\n            default:\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.propieties = {\n            fact: \"\",\n            img: \"\"\n        };\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <div>\r\n            <h1>\r\n            ${this.propieties.fact}\r\n            </h1>\r\n            <img src=\"${this.propieties.img}\" alt=\"\">\r\n            </div>\r\n            `;\n        }\n    }\n}\ncustomElements.define('cats-container', cats);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/cats/cats.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_cats_cats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cats/cats */ \"./src/components/cats/cats.ts\");\n/* harmony import */ var _services_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/apis */ \"./src/services/apis.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                const div = this.ownerDocument.createElement(\"div\");\n                const btn = this.ownerDocument.createElement(\"button\");\n                const data = yield (0,_services_apis__WEBPACK_IMPORTED_MODULE_1__.api_catas)();\n                div.appendChild(btn);\n                btn.textContent = \"change\";\n                btn.addEventListener(\"click\", () => {\n                    console.log(data);\n                    data.forEach((e) => {\n                        const card = this.ownerDocument.createElement(`cats-container`);\n                        card.setAttribute(_components_cats_cats__WEBPACK_IMPORTED_MODULE_0__.cats_propieties.fact, e.fact);\n                        div.appendChild(card);\n                    });\n                });\n                this.shadowRoot.appendChild(div);\n            }\n            // const something = this.ownerDocument.createElement('div');\n            // this.shadowRoot?.appendChild(something);\n        });\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/apis.ts":
/*!******************************!*\
  !*** ./src/services/apis.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api_catas\": () => (/* binding */ api_catas),\n/* harmony export */   \"img_catas\": () => (/* binding */ img_catas)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction api_catas() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://catfact.ninja/fact').then(res => res.json());\n            console.log(data.fact);\n            return data.fact;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\nfunction img_catas() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data_img = yield fetch('https://cataas.com/cat/says/')\n                .then(res => res.json());\n            return data_img;\n        }\n        catch (error) {\n            console.log(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/apis.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;