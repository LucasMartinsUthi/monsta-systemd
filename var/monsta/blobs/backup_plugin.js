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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/backup/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/backup/components/BackupDialog.tsx":
/*!****************************************************!*\
  !*** ./plugins/backup/components/BackupDialog.tsx ***!
  \****************************************************/
/*! exports provided: BackupDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackupDialog\", function() { return BackupDialog; });\nconst Rotate = styled.div `\n    @keyframes rotating {\n        from {\n            transform: rotateZ(0deg);\n        }\n        to {\n            transform: rotateZ(360deg);\n        }\n    }\n    \n    ${p => p.isAnimating ? 'animation: rotating 5s linear infinite;' : ''};\n`;\nconst BackupDialog = observer(props => {\n    const [isLoading, setLoading] = React.useState(true);\n    const [backups, setBackups] = React.useState([]);\n    const [selectedIdent, setSelectedIdent] = React.useState(null);\n    const [selectedSlot, setSelectedSlot] = React.useState(null);\n    const idents = backups.map(b => b.ident).filter(utils.uniq);\n    const identOpts = idents.map(ident => ({ label: ident, value: ident }));\n    const identBackups = backups.filter(b => b.ident == selectedIdent);\n    const selectedIdentOpt = identOpts.find(opt => opt.value == selectedIdent);\n    const selectedBackup = identBackups.find(b => b.slot == selectedSlot);\n    identOpts.splice(0, 0, { label: 'Monsta 5', value: rootStore.configStore.cloudKey });\n    React.useEffect(() => {\n        props.plugin.callFunc('get_backups', []).then(backupsArrays => {\n            setLoading(false);\n            const backups = backupsArrays.map(backup => ({\n                ident: backup[0],\n                slot: backup[1],\n                date: moment(backup[2]),\n            }));\n            setBackups(backups);\n        }).catch(e => {\n            setLoading(false);\n        });\n    }, []);\n    return (React.createElement(Dialog, { width: 700, height: 450, closeText: _t('Close'), isOpen: true, title: _t('Backup to the Cloud'), onClose: props.onClose },\n        React.createElement(Box, { flexDirection: \"row\" },\n            React.createElement(Box, { mr: 4, color: \"controlFocus\" },\n                React.createElement(icons.backup, { width: 96, height: 96 })),\n            React.createElement(Box, { flexDirection: \"column\" },\n                React.createElement(Box, { mb: 3, fontWeight: \"bold\", fontSize: 16 }, _t('Backups available')),\n                isLoading &&\n                    React.createElement(Box, { flexDirection: \"row\", alignItems: \"center\" },\n                        React.createElement(Rotate, { isAnimating: true },\n                            React.createElement(icons.sys, { width: 32, height: 32 })),\n                        React.createElement(Box, { ml: 3, fontWeight: \"bold\", color: \"subtleText\", fontSize: 16 }, _t('Loading backups from cloud')))\n                    ||\n                        React.createElement(Box, { flexDirection: \"row\" },\n                            React.createElement(Box, { mr: 2 },\n                                React.createElement(SelectField, { options: identOpts, width: 150, label: _t('Identifier'), value: selectedIdentOpt, onChange: opt => setSelectedIdent(opt.value) })),\n                            React.createElement(Box, { mr: 2 },\n                                React.createElement(SelectField, { options: identBackups, width: 200, label: _t('Backup'), value: selectedBackup, getOptionLabel: b => b.slot, getOptionValue: b => b.slot, onChange: b => setSelectedSlot(b.slot) })),\n                            React.createElement(Box, { alignItems: \"flex-end\" },\n                                React.createElement(Button, { variant: \"primary\", isDisabled:  true || false },\n                                    React.createElement(icons.backup, { width: 16, height: 16 }),\n                                    React.createElement(Box, { ml: 2 }, _t('Restore')))))))));\n});\n\n\n//# sourceURL=webpack://main/./plugins/backup/components/BackupDialog.tsx?");

/***/ }),

/***/ "./plugins/backup/main.tsx":
/*!*********************************!*\
  !*** ./plugins/backup/main.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _components_BackupDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/BackupDialog */ \"./plugins/backup/components/BackupDialog.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nfunction main(plugin, server) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = observable({ isDialogOpen: false });\n        const runBackup = () => {\n            data.isDialogOpen = true;\n        };\n        plugin.registerConfigItem('backup', _t('Backup to the Cloud'), _t('Backup to the Cloud'), icons.backup, runBackup);\n        plugin.registerRenderFunc(() => (data.isDialogOpen &&\n            React.createElement(_components_BackupDialog__WEBPACK_IMPORTED_MODULE_0__[\"BackupDialog\"], { plugin: plugin, onClose: () => data.isDialogOpen = false })));\n        plugin.registerStartAction(_t('Restore from a backup'), React.createElement(icons.backup, { width: 48, height: 48 }), runBackup);\n    });\n}\n\n\n//# sourceURL=webpack://main/./plugins/backup/main.tsx?");

/***/ })

/******/ })["default"];