var main =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/test/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/test/components.tsx":
/*!*************************************!*\
  !*** ./plugins/test/components.tsx ***!
  \*************************************/
/*! exports provided: Comp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comp\", function() { return Comp; });\nconst Comp = (props) => {\n    return React.createElement(\"div\", null, \"THIS IS A COMP\");\n};\n\n\n//# sourceURL=webpack://main/./plugins/test/components.tsx?");

/***/ }),

/***/ "./plugins/test/main.tsx":
/*!*******************************!*\
  !*** ./plugins/test/main.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./plugins/test/components.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst Wrapper = styled.div `\n    color: ${(p) => p.theme.colors.text};\n`;\nconst Frame = styled.iframe `\n    border: none;\n    width: 100%;\n    height: 100%;\n`;\nconst Comp = (props) => {\n    return (React.createElement(Box, { p: 4, flexDirection: \"column\" },\n        React.createElement(Wrapper, null, \"This is a test\"),\n        React.createElement(Box, { my: 4 },\n            React.createElement(Input, { width: 500, height: 200, isMultiLine: true, value: JSON.stringify(rootStore.configStore.values, null, 2) }))));\n};\nconst HeaderComp = (props) => {\n    return (React.createElement(\"div\", null,\n        React.createElement(Button, { isSmall: true, isSubtle: true },\n            React.createElement(icons.padlock, { width: 24, height: 24 }))));\n};\nconst FrameComp = (props) => {\n    const uuid = 'test';\n    React.useEffect(() => {\n        const frame = document.getElementById(uuid);\n        if (frame) {\n            const cd = frame.contentDocument;\n            cd.open();\n            cd.write('<div id=\"main\"></div>');\n            cd.close();\n            ReactDOM.render(React.createElement(_components__WEBPACK_IMPORTED_MODULE_0__[\"Comp\"], null), cd.getElementById('main'));\n        }\n    });\n    return (React.createElement(Frame, { id: uuid }));\n};\nfunction main(plugin, server) {\n    return __awaiter(this, void 0, void 0, function* () {\n        plugin.registerDeviceView('test', Comp, '24de946948c80ab2be5a32aa2cf8bae89d60d1e3');\n        //plugin.registerDeviceView('frame', FrameComp, '8d067ec9aa5a297adaf4cb661c45c9cef1f970d7');\n        plugin.registerAppHeaderItem('test', HeaderComp);\n    });\n}\n\n\n//# sourceURL=webpack://main/./plugins/test/main.tsx?");

/***/ })

/******/ })["default"];