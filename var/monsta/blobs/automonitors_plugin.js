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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../src/components/ContainerPicker":
/*!**********************************!*\
  !*** external "ContainerPicker" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ContainerPicker;\n\n//# sourceURL=webpack:///external_%22ContainerPicker%22?");

/***/ }),

/***/ "../../../src/components/MonitorSummaryDialog":
/*!***************************************!*\
  !*** external "MonitorSummaryDialog" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = MonitorSummaryDialog;\n\n//# sourceURL=webpack:///external_%22MonitorSummaryDialog%22?");

/***/ }),

/***/ "../../../src/components/MultiInput":
/*!*****************************!*\
  !*** external "MultiInput" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = MultiInput;\n\n//# sourceURL=webpack:///external_%22MultiInput%22?");

/***/ }),

/***/ "../../../src/ref":
/*!**********************!*\
  !*** external "ref" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ref;\n\n//# sourceURL=webpack:///external_%22ref%22?");

/***/ }),

/***/ "../../src/icons":
/*!************************!*\
  !*** external "icons" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = icons;\n\n//# sourceURL=webpack:///external_%22icons%22?");

/***/ }),

/***/ "../../src/model":
/*!************************!*\
  !*** external "model" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = model;\n\n//# sourceURL=webpack:///external_%22model%22?");

/***/ }),

/***/ "../../src/server":
/*!*************************!*\
  !*** external "server" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = server;\n\n//# sourceURL=webpack:///external_%22server%22?");

/***/ }),

/***/ "../../src/stores":
/*!*************************!*\
  !*** external "stores" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = stores;\n\n//# sourceURL=webpack:///external_%22stores%22?");

/***/ }),

/***/ "../../src/utils":
/*!************************!*\
  !*** external "utils" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = utils;\n\n//# sourceURL=webpack:///external_%22utils%22?");

/***/ }),

/***/ "./components/AutoMonitorsDialog.tsx":
/*!*******************************************!*\
  !*** ./components/AutoMonitorsDialog.tsx ***!
  \*******************************************/
/*! exports provided: AutoMonitorsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoMonitorsDialog\", function() { return AutoMonitorsDialog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/icons */ \"../../src/icons\");\n/* harmony import */ var _src_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var icarus_src_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icarus/src/components/Button */ \"icarus/src/components/Button\");\n/* harmony import */ var icarus_src_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icarus_src_components_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var icarus_src_components_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icarus/src/components/Dialog */ \"icarus/src/components/Dialog\");\n/* harmony import */ var icarus_src_components_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icarus_src_components_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icarus/src/elements */ \"icarus/src/elements\");\n/* harmony import */ var icarus_src_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_MultiInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/MultiInput */ \"../../../src/components/MultiInput\");\n/* harmony import */ var _src_components_MultiInput__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_components_MultiInput__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var icarus_src_components_RangeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icarus/src/components/RangeInput */ \"icarus/src/components/RangeInput\");\n/* harmony import */ var icarus_src_components_RangeInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icarus_src_components_RangeInput__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var icarus_src_components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! icarus/src/components/Input */ \"icarus/src/components/Input\");\n/* harmony import */ var icarus_src_components_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(icarus_src_components_Input__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_components_ContainerPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/components/ContainerPicker */ \"../../../src/components/ContainerPicker\");\n/* harmony import */ var _src_components_ContainerPicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_components_ContainerPicker__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_ref__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/ref */ \"../../../src/ref\");\n/* harmony import */ var _src_ref__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_ref__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/model */ \"../../src/model\");\n/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_model__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react-lite */ \"mobx-react-lite\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/utils */ \"../../src/utils\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_utils__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var icarus_src_components_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! icarus/src/components/Select */ \"icarus/src/components/Select\");\n/* harmony import */ var icarus_src_components_Select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(icarus_src_components_Select__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _src_stores__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../src/stores */ \"../../src/stores\");\n/* harmony import */ var _src_stores__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_stores__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _src_components_MonitorSummaryDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../src/components/MonitorSummaryDialog */ \"../../../src/components/MonitorSummaryDialog\");\n/* harmony import */ var _src_components_MonitorSummaryDialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_components_MonitorSummaryDialog__WEBPACK_IMPORTED_MODULE_15__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst initCustomizedTemplate = (autoMonitor) => __awaiter(void 0, void 0, void 0, function* () {\n    let template = autoMonitor.props.template;\n    if (!template)\n        return;\n    let customizedTemplate = autoMonitor.props.customized_template;\n    if (template instanceof _src_ref__WEBPACK_IMPORTED_MODULE_9__[\"ContainerRef\"]) {\n        template = template.resolve();\n    }\n    if (customizedTemplate instanceof _src_ref__WEBPACK_IMPORTED_MODULE_9__[\"ContainerRef\"]) {\n        customizedTemplate = customizedTemplate.resolve();\n    }\n    if (!customizedTemplate) {\n        customizedTemplate = template.clone();\n        yield customizedTemplate.load();\n        customizedTemplate.executionTarget = new _src_model__WEBPACK_IMPORTED_MODULE_10__[\"ExecutionTarget\"](_src_model__WEBPACK_IMPORTED_MODULE_10__[\"ExecutionTargetType\"].None);\n        customizedTemplate.parents.clear();\n        customizedTemplate.metrics.forEach(m => m.id = 0);\n        customizedTemplate.id = 0;\n        customizedTemplate.class = 'Monitor';\n    }\n    else {\n        if (!customizedTemplate.isLoaded()) {\n            yield customizedTemplate.load();\n        }\n    }\n    return customizedTemplate;\n});\nconst AutoMonitorItem = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__[\"observer\"])(props => {\n    const periodOptions = [\n        { label: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Days'), value: 'days' },\n        { label: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Hours'), value: 'hours' },\n        { label: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Minutes'), value: 'minutes' },\n    ];\n    const selectedTimeUnit = periodOptions.filter(opt => opt.value == props.autoMonitor.props.retention_time_unit);\n    let timeUnitMultiplier = 1;\n    switch (props.autoMonitor.props.retention_time_unit) {\n        case 'minutes':\n            timeUnitMultiplier = 60;\n            break;\n        case 'hours':\n            timeUnitMultiplier = 3600;\n            break;\n        case 'days':\n            timeUnitMultiplier = 86400;\n            break;\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { flexDirection: \"row\" },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { mr: 2 },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_components_ContainerPicker__WEBPACK_IMPORTED_MODULE_8__[\"ContainerPicker\"], { width: 300, isDisabled: props.autoMonitor.props.customized_template, containers: props.templates, value: props.autoMonitor.props.template, onChange: template => {\n                    props.autoMonitor.props.template = template;\n                } })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { mr: 2 },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_components_Input__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], { width: 120, onChange: (e) => props.autoMonitor.props.instance_filter = e.target.value, value: props.autoMonitor.props.instance_filter })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { mr: 2 },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_components_RangeInput__WEBPACK_IMPORTED_MODULE_6__[\"RangeInput\"], { width: 150, min: 1, max: 120, value: props.autoMonitor.props.check_interval_secs || 1, onChange: val => {\n                    props.autoMonitor.props.check_interval_secs = val;\n                } })),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { mr: 2, flexDirection: \"row\" },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_components_Input__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], { width: 40, isNumber: true, onChange: (e) => props.autoMonitor.props.retention_time_secs = e.target.value * timeUnitMultiplier, value: props.autoMonitor.props.retention_time_secs / timeUnitMultiplier }),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { ml: 1 },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_components_Select__WEBPACK_IMPORTED_MODULE_13__[\"Select\"], { options: periodOptions, width: 100, onChange: (opt) => props.autoMonitor.props.retention_time_unit = opt.value, value: selectedTimeUnit }))),\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { width: 24, justifyContent: \"center\" },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { onClick: () => __awaiter(void 0, void 0, void 0, function* () { return props.onEditMonitor(yield initCustomizedTemplate(props.autoMonitor)); }), isSubtle: true, isSmall: true, isDisabled: !props.autoMonitor.props.template },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_icons__WEBPACK_IMPORTED_MODULE_1__[\"cog\"], { width: 16, height: 16 })))));\n});\nconst AutoMonitorsDialog = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__[\"observer\"])(props => {\n    const templates = props.templates\n        .filter(c => c.asTemplate() && c.asTemplate().parameters && c.asTemplate().parameters.find(p => p.name == 'exec.instance') != null)\n        .sort(Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"sortByFunc\"])(c => c.props.name));\n    const [editingMonitor, setEditingMonitor] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](null);\n    const [editingMonitorIdx, setEditingMonitorIdx] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](null);\n    react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](() => {\n        props.autoMonitors.forEach(monitor => {\n            if (monitor.props.customized_template instanceof _src_ref__WEBPACK_IMPORTED_MODULE_9__[\"ContainerRef\"]) {\n                monitor.props.customized_template.resolve();\n            }\n        });\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_components_Dialog__WEBPACK_IMPORTED_MODULE_3__[\"Dialog\"], { width: 900, height: 550, confirmText: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Confirm'), closeText: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Cancel'), isOpen: true, title: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Automatic Monitors'), onClose: props.onClose, onConfirm: () => props.onConfirm(props.autoMonitors) },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { mb: 1, pb: 1, borderBottom: \"1px solid\", borderColor: \"subtleBorder\" },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { width: 300, mr: 2 }, Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Template')),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { width: 120, mr: 2 }, Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Instance filter')),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { width: 150, mr: 2 }, Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Check interval')),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](icarus_src_elements__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], { width: 150, mr: 2 }, Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Remove monitors'))),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_components_MultiInput__WEBPACK_IMPORTED_MODULE_5__[\"MultiInput\"], { allowDeleteLast: true, newValueText: Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__[\"_t\"])('Add'), createNewValue: () => {\n                    const autoMonitor = new _src_model__WEBPACK_IMPORTED_MODULE_10__[\"Obj\"](_src_stores__WEBPACK_IMPORTED_MODULE_14__[\"rootStore\"].objectStore);\n                    autoMonitor.type = 'AutoMonitor';\n                    autoMonitor.props.device_id = props.device.id;\n                    autoMonitor.props.retention_time_secs = 604800;\n                    autoMonitor.props.retention_time_unit = 'days';\n                    return autoMonitor;\n                }, renderInput: idx => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](AutoMonitorItem, { templates: templates, autoMonitor: props.autoMonitors[idx], onEditMonitor: (monitor) => __awaiter(void 0, void 0, void 0, function* () {\n                        setEditingMonitor(monitor.toViewModel());\n                        setEditingMonitorIdx(idx);\n                    }) }), values: props.autoMonitors })),\n        editingMonitor &&\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_components_MonitorSummaryDialog__WEBPACK_IMPORTED_MODULE_15__[\"MonitorSummaryDialog\"], { monitor: editingMonitor.asMonitor(), onClose: () => setEditingMonitor(null), onConfirm: () => __awaiter(void 0, void 0, void 0, function* () {\n                    editingMonitor.commit();\n                    props.autoMonitors[editingMonitorIdx].props.customized_template = editingMonitor.model;\n                    setEditingMonitor(null);\n                }) })));\n});\n\n\n//# sourceURL=webpack:///./components/AutoMonitorsDialog.tsx?");

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/server */ \"../../src/server\");\n/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/icons */ \"../../src/icons\");\n/* harmony import */ var _src_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AutoMonitorsDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AutoMonitorsDialog */ \"./components/AutoMonitorsDialog.tsx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/model */ \"../../src/model\");\n/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_model__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores */ \"../../src/stores\");\n/* harmony import */ var _src_stores__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_stores__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/utils */ \"../../src/utils\");\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_utils__WEBPACK_IMPORTED_MODULE_7__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\nfunction handleAutoMonitorsClick(plugin, data, device) {\n    return __awaiter(this, void 0, void 0, function* () {\n        data.autoMonitors = [];\n        const autoMonitorsJs = yield _src_server__WEBPACK_IMPORTED_MODULE_1__[\"object\"].query('AutoMonitor', `props.device_id = ${device.id}`);\n        autoMonitorsJs.forEach(autoMonitorJs => {\n            const autoMonitor = new _src_model__WEBPACK_IMPORTED_MODULE_5__[\"Obj\"](plugin.store.rootStore.objectStore);\n            autoMonitor.updateFromJs(autoMonitorJs);\n            data.autoMonitors.push(autoMonitor);\n        });\n        const containersJs = yield _src_server__WEBPACK_IMPORTED_MODULE_1__[\"container\"].get(device.asDevice().templateGroups.map(g => g.id));\n        data.templates = [];\n        containersJs.forEach(containerJs => {\n            const container = new _src_model__WEBPACK_IMPORTED_MODULE_5__[\"Container\"](_src_stores__WEBPACK_IMPORTED_MODULE_6__[\"rootStore\"].containerStore);\n            container.updateFromJs(containerJs);\n            data.templates = data.templates.concat.apply(data.templates, container.children);\n        });\n        data.editingForDevice = device;\n    });\n}\nfunction main(plugin) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = Object(mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"])({\n            editingForDevice: null,\n            autoMonitors: [],\n            templates: [],\n        });\n        plugin.registerDeviceActionButton(Object(_src_utils__WEBPACK_IMPORTED_MODULE_7__[\"_t\"])('Automatic monitors'), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_src_icons__WEBPACK_IMPORTED_MODULE_2__[\"wand\"], { width: 18, height: 18 }), handleAutoMonitorsClick.bind(null, plugin, data));\n        const save = autoMonitors => {\n            autoMonitors.forEach((obj) => __awaiter(this, void 0, void 0, function* () {\n                const template = obj.props.customized_template;\n                if (template instanceof _src_model__WEBPACK_IMPORTED_MODULE_5__[\"Container\"]) {\n                    const id_map = yield _src_server__WEBPACK_IMPORTED_MODULE_1__[\"container\"].put(template, template.metrics);\n                    template.id = id_map[template.localId];\n                }\n                _src_server__WEBPACK_IMPORTED_MODULE_1__[\"object\"].put(obj);\n            }));\n        };\n        plugin.registerRenderFunc(() => (data.editingForDevice &&\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_AutoMonitorsDialog__WEBPACK_IMPORTED_MODULE_3__[\"AutoMonitorsDialog\"], { device: data.editingForDevice, autoMonitors: Object(mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"])(data.autoMonitors.slice()), templates: data.templates, onConfirm: autoMonitors => {\n                    data.autoMonitors.forEach(monitor => {\n                        if (!autoMonitors.find(am => am.id == monitor.id)) {\n                            console.log(`Deleting auto monitor ${monitor.id}`);\n                            plugin.callFunc('delete_auto_monitor', [monitor.id]);\n                        }\n                    });\n                    save(autoMonitors);\n                    data.editingForDevice = null;\n                }, onClose: () => data.editingForDevice = null })));\n    });\n}\n\n\n//# sourceURL=webpack:///./main.tsx?");

/***/ }),

/***/ "icarus/src/components/Button":
/*!*************************!*\
  !*** external "Button" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Button;\n\n//# sourceURL=webpack:///external_%22Button%22?");

/***/ }),

/***/ "icarus/src/components/Dialog":
/*!*************************!*\
  !*** external "Dialog" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Dialog;\n\n//# sourceURL=webpack:///external_%22Dialog%22?");

/***/ }),

/***/ "icarus/src/components/Input":
/*!************************!*\
  !*** external "Input" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Input;\n\n//# sourceURL=webpack:///external_%22Input%22?");

/***/ }),

/***/ "icarus/src/components/RangeInput":
/*!*****************************!*\
  !*** external "RangeInput" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = RangeInput;\n\n//# sourceURL=webpack:///external_%22RangeInput%22?");

/***/ }),

/***/ "icarus/src/components/Select":
/*!*************************!*\
  !*** external "Select" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Select;\n\n//# sourceURL=webpack:///external_%22Select%22?");

/***/ }),

/***/ "icarus/src/elements":
/*!***************************!*\
  !*** external "elements" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = elements;\n\n//# sourceURL=webpack:///external_%22elements%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = mobx;\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = mobx-react-lite;\n\n//# sourceURL=webpack:///external_%22mobx-react-lite%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ })

/******/ });