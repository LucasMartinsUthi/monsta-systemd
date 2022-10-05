var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"networkview_plugin": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpmain"] = window["webpackJsonpmain"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./plugins/networkview/main.tsx","bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/networkview/components/NetworkView.tsx":
/*!********************************************************!*\
  !*** ./plugins/networkview/components/NetworkView.tsx ***!
  \********************************************************/
/*! exports provided: NetworkView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NetworkView\", function() { return NetworkView; });\n/* harmony import */ var elkjs_lib_elk_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elkjs/lib/elk-api */ \"./node_modules/elkjs/lib/elk-api.js\");\n/* harmony import */ var elkjs_lib_elk_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elkjs_lib_elk_api__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n// import ReactFlow, {\n//     ReactFlowProvider,\n//     addEdge,\n//     removeElements,\n//     isNode,\n//     Position,\n//     Elements,\n// } from 'react-flow-renderer';\n// const dagre = require('dagre');\n\n\nconst elk = new elkjs_lib_elk_api__WEBPACK_IMPORTED_MODULE_0___default.a({\n    workerUrl: './elk-worker.min.js'\n});\nconst { ReactFlowProvider, addEdge, removeElements, isNode, Position, Background, Controls, MiniMap, } = RF;\nconst nodeWidth = 200;\nconst nodeHeight = 100;\nconst getLayoutedElements = (elements, direction = 'LR') => {\n    // const graph = {\n    //     id: \"root\",\n    //     layoutOptions: { 'elk.algorithm': 'layered' },\n    //     children: [\n    //       { id: \"n1\", width: 30, height: 30 },\n    //       { id: \"n2\", width: 30, height: 30 },\n    //       { id: \"n3\", width: 30, height: 30 }\n    //     ],\n    //     edges: [\n    //       { id: \"e1\", sources: [ \"n1\" ], targets: [ \"n2\" ] },\n    //       { id: \"e2\", sources: [ \"n1\" ], targets: [ \"n3\" ] }\n    //     ]\n    //   };\n    console.log(elk.knownLayoutAlgorithms());\n    const devices = rootStore.containerStore.devices.map(d => d.container);\n    const children = devices.map(d => ({\n        id: d.id,\n        width: nodeWidth,\n        height: nodeHeight,\n    }));\n    const edges = devices.filter(d => d.parents.length > 0).map(d => ({\n        id: `e${d.id}`,\n        targets: [d.id], sources: d.parents.filter(p => p.class == 'Device').map(p => p.id)\n    }));\n    const graph = {\n        id: 'root',\n        layoutOptions: { 'elk.algorithm': 'mrtree' },\n        children,\n        edges,\n    };\n    console.log(graph);\n    console.log('Calculating');\n    elk.layout(graph)\n        .then(console.log)\n        .catch(console.error);\n    return [];\n    // const dagreGraph = new dagre.graphlib.Graph();\n    // dagreGraph.setDefaultEdgeLabel(() => ({}));\n    // const isHorizontal = direction === 'LR';\n    // dagreGraph.setGraph({ rankdir: direction });\n    // elements.forEach((el) => {\n    //     if (isNode(el)) {\n    //         dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });\n    //     } else {\n    //         dagreGraph.setEdge(el.source, el.target);\n    //     }\n    // });\n    // dagre.layout(dagreGraph);\n    // return elements.map((el) => {\n    //     if (isNode(el)) {\n    //         const nodeWithPosition = dagreGraph.node(el.id);\n    //         el.targetPosition = isHorizontal ? Position.Left : Position.Top;\n    //         el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;\n    //         // unfortunately we need this little hack to pass a slighltiy different position\n    //         // to notify react flow about the change. More over we are shifting the dagre node position\n    //         // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).\n    //         el.position = {\n    //             x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,\n    //             y: nodeWithPosition.y - nodeHeight / 2,\n    //         };\n    //     }\n    //     return el;\n    // });\n};\nclass FlowStore {\n    constructor() {\n        this.elements = [];\n    }\n    buildLayout() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.elements.clear();\n            elk.knownLayoutAlgorithms().then(console.log);\n            console.log('Building layout');\n            const devices = rootStore.containerStore.devices.map(d => d.container);\n            const children = devices.map(d => ({\n                id: d.id,\n                width: nodeWidth,\n                height: nodeHeight,\n            }));\n            const edges = [];\n            devices.forEach(d => {\n                const parents = d.parents.filter(p => p.class == 'Device');\n                if (parents.length > 0) {\n                    edges.push({\n                        id: `e${d.id}`,\n                        sources: [d.id], targets: [parents[0].id]\n                    });\n                }\n            });\n            const graph = {\n                id: 'root',\n                layoutOptions: { 'elk.algorithm': 'layered' },\n                children,\n                edges,\n            };\n            const ret = yield elk.layout(graph);\n            Object(mobx__WEBPACK_IMPORTED_MODULE_1__[\"runInAction\"])(() => {\n                ret.children.forEach(c => {\n                    const container = rootStore.containerStore.get(c.id);\n                    this.elements.push({\n                        id: String(c.id),\n                        type: 'default',\n                        data: { label: container.props.name },\n                        position: { x: c.x, y: c.y },\n                        style: {\n                            border: '3px solid green',\n                        }\n                    });\n                    container.parents.forEach(p => {\n                        if (p.class == 'Device') {\n                            this.elements.push({\n                                id: `${container.id}-${p.id}`,\n                                target: String(container.id),\n                                source: String(p.id),\n                                arrowHeadType: 'arrowclosed',\n                                animated: true,\n                            });\n                        }\n                    });\n                });\n            });\n        });\n    }\n}\n__decorate([\n    observable\n], FlowStore.prototype, \"elements\", void 0);\nconst flowStore = new FlowStore();\nconst LayoutFlow = observer(() => {\n    React.useEffect(() => {\n        flowStore.buildLayout();\n    }, []);\n    return (React.createElement(\"div\", { className: \"layoutflow\", style: { width: '100%', height: '100%' } },\n        React.createElement(ReactFlowProvider, null,\n            React.createElement(ReactFlow, { elements: flowStore.elements },\n                React.createElement(Background\n                // color=\"#222\"\n                , { \n                    // color=\"#222\"\n                    variant: \"lines\", gap: 12, size: 1 }),\n                React.createElement(Controls, null),\n                React.createElement(MiniMap, null)))));\n});\nconst NetworkView = observer(props => {\n    return (React.createElement(LayoutFlow, null));\n});\n\n\n//# sourceURL=webpack://main/./plugins/networkview/components/NetworkView.tsx?");

/***/ }),

/***/ "./plugins/networkview/main.tsx":
/*!**************************************!*\
  !*** ./plugins/networkview/main.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _components_NetworkView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NetworkView */ \"./plugins/networkview/components/NetworkView.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nfunction main(plugin, server) {\n    return __awaiter(this, void 0, void 0, function* () {\n        plugin.registerDeviceView('networkview', _components_NetworkView__WEBPACK_IMPORTED_MODULE_0__[\"NetworkView\"], '24de946948c80ab2be5a32aa2cf8bae89d60d1e3');\n    });\n}\n\n\n//# sourceURL=webpack://main/./plugins/networkview/main.tsx?");

/***/ })

/******/ })["default"];