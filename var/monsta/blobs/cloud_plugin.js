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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/cloud/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/cloud/components/CreateAccountDialog.tsx":
/*!**********************************************************!*\
  !*** ./plugins/cloud/components/CreateAccountDialog.tsx ***!
  \**********************************************************/
/*! exports provided: CreateAccountDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateAccountDialog\", function() { return CreateAccountDialog; });\nconst CreateAccountDialog = observer(props => {\n    const buttons = [\n        React.createElement(Button, { variant: \"primary\" },\n            React.createElement(Box, { mr: 2 }, _t('Create trial license')),\n            React.createElement(icons.rightChevron, { width: 16, height: 16 }))\n    ];\n    const leftButtons = [\n        React.createElement(Button, { variant: \"warning\" },\n            React.createElement(icons.keyMono, { width: 16, height: 16 }),\n            React.createElement(Box, { ml: 2 }, _t('Insert existing license key')))\n    ];\n    return (React.createElement(Dialog, { title: _t('Start Trial: Create Account'), isOpen: true, onClose: props.onClose, width: 900, height: 600, buttonBarRightEls: buttons, disableClose: true, buttonBarLeftEls: leftButtons },\n        React.createElement(Box, { flexDirection: \"row\" },\n            React.createElement(Box, { mr: 3 },\n                React.createElement(icons.monsta, { width: 128, height: 128 })),\n            React.createElement(Box, { flexDirection: \"column\" },\n                React.createElement(Box, { fontSize: 24, mb: 2, fontWeight: \"bold\" }, _t('We need two pieces of information to get you started with your 30 day trial license.')),\n                React.createElement(Box, { fontSize: 16, mb: 3, color: \"subtleText\" }, _t('If you already have a license key, click the amber \"Insert existing license key\" button at the bottom left.')),\n                React.createElement(Box, { fontSize: 24, mb: 1 },\n                    React.createElement(TextField, { width: 500, autoFocus: true, label: _t('Your email address') })),\n                React.createElement(Box, { mb: 4, fontWeight: \"bold\", color: \"subtleText\", width: 500 }, _t('Please supply a valid email address. This will be used for all communication from us.')),\n                React.createElement(Box, { fontSize: 24, mb: 1 },\n                    React.createElement(PasswordField, { width: 500, label: _t('A password for your Monsta Cloud account') })),\n                React.createElement(Box, { fontWeight: \"bold\", color: \"subtleText\", mb: 4, width: 500 }, _t('This is not the same as your Monsta password. This is a separate password to access your Monsta cloud account.')),\n                React.createElement(Box, { fontSize: 24, mb: 1 },\n                    React.createElement(PasswordField, { width: 500, label: _t('Confirm your password') }))))));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloud/components/CreateAccountDialog.tsx?");

/***/ }),

/***/ "./plugins/cloud/components/LicenseExpiredBox.tsx":
/*!********************************************************!*\
  !*** ./plugins/cloud/components/LicenseExpiredBox.tsx ***!
  \********************************************************/
/*! exports provided: LicenseExpiredBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LicenseExpiredBox\", function() { return LicenseExpiredBox; });\nconst Wrapper = styled.div `\n    position: fixed;\n    box-shadow: ${(p) => p.theme.shadows.popup};\n    background-color: ${p => p.theme.colors.background};\n    padding: 40px;\n    width: 1000px;\n    height: 400px;\n    top: 50%;\n    left: 50%;\n    margin-left: -500px;\n    margin-top: -200px;\n    z-index: 600;\n    border-radius: 2px;\n`;\nconst InfoBox = styled.div `\n    background-color: ${p => p.theme.colors.toolbarBackground};\n    border: 1px solid ${p => p.theme.colors.controlBorder};\n    // box-shadow: ${(p) => p.theme.shadows.card};\n    font-size: 18px;\n    padding: 30px;\n    border-radius: 2px;\n    display: flex;\n    flex-direction: column;\n`;\nconst Logo = styled.div `\n    filter: grayscale(100%);\n    margin-right: 50px;\n`;\nconst LicenseExpiredBox = observer(props => {\n    return (React.createElement(Wrapper, null,\n        React.createElement(Box, { flexDirection: \"row\" },\n            React.createElement(Logo, null,\n                React.createElement(icons.monsta, { width: 256, height: 256 })),\n            React.createElement(Box, { flexDirection: \"column\" },\n                React.createElement(Box, { fontSize: 32, mb: 4 }, _t('License Expired')),\n                React.createElement(InfoBox, null,\n                    React.createElement(Box, { mb: 3 }, _t('To extend your license, visit the Monsta online store:')),\n                    React.createElement(Box, { fontSize: 32 },\n                        React.createElement(\"a\", { target: \"_blank\", href: \"https://loja.monsta.com.br\" }, \"loja.monsta.com.br\")))))));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloud/components/LicenseExpiredBox.tsx?");

/***/ }),

/***/ "./plugins/cloud/main.tsx":
/*!********************************!*\
  !*** ./plugins/cloud/main.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _components_CreateAccountDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CreateAccountDialog */ \"./plugins/cloud/components/CreateAccountDialog.tsx\");\n/* harmony import */ var _components_LicenseExpiredBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LicenseExpiredBox */ \"./plugins/cloud/components/LicenseExpiredBox.tsx\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nvar CloudStatus;\n(function (CloudStatus) {\n    CloudStatus[CloudStatus[\"Unknown\"] = 0] = \"Unknown\";\n    CloudStatus[CloudStatus[\"Connected\"] = 1] = \"Connected\";\n    CloudStatus[CloudStatus[\"Disconnected\"] = 2] = \"Disconnected\";\n})(CloudStatus || (CloudStatus = {}));\nclass CloudStateStore {\n    constructor() {\n        this.cloudStatus = CloudStatus.Unknown;\n        this.details = {};\n    }\n    get statusColor() {\n        switch (CloudState.cloudStatus) {\n            case CloudStatus.Unknown:\n                return 'inactive';\n            case CloudStatus.Connected:\n                return '#00aa5e';\n            case CloudStatus.Disconnected:\n                return 'error';\n        }\n    }\n    get lastPing() {\n        if (this.details.last_ping) {\n            return moment.unix(this.details.last_ping);\n        }\n        else {\n            return null;\n        }\n    }\n    update(details) {\n        this.details = details;\n        if (details && details.success) {\n            this.cloudStatus = CloudStatus.Connected;\n        }\n        else {\n            this.cloudStatus = CloudStatus.Disconnected;\n        }\n    }\n}\n__decorate([\n    observable\n], CloudStateStore.prototype, \"cloudStatus\", void 0);\n__decorate([\n    observable\n], CloudStateStore.prototype, \"details\", void 0);\n__decorate([\n    computed\n], CloudStateStore.prototype, \"statusColor\", null);\n__decorate([\n    computed\n], CloudStateStore.prototype, \"lastPing\", null);\n__decorate([\n    action\n], CloudStateStore.prototype, \"update\", null);\nconst CloudState = new CloudStateStore();\nconst HeaderIcon = observer((props) => {\n    return (React.createElement(AnimatedElement, { isAnimating: CloudState.cloudStatus == CloudStatus.Disconnected },\n        React.createElement(Button, { isSmall: true, isSubtle: true, onClick: () => rootStore.appStore.setIsShowingAccountInfo(true) },\n            React.createElement(Box, { color: CloudState.statusColor },\n                React.createElement(icons.cloud, { width: 20, height: 20 })))));\n});\nconst KeyInfo = styled.div `\n    padding: 10px 0;\n    background-color: ${p => p.theme.colors.gridBackground};\n    margin-bottom: 20px;\n`;\nconst KeyInfoTitle = styled.div `\n    text-align: center;\n    font-size: 12px;\n    margin-bottom: 8px;\n`;\nconst Key = styled.div `\n    text-align: center;\n    letter-spacing: 2px;\n    font-family: Inconsolata, Consolas, Courier;\n    font-size: 24px;\n`;\nconst AccountInfo = styled.div `\n    margin-bottom: 40px;\n`;\nconst AccountName = styled.div `\n    font-size: 14px;\n    font-weight: bold;\n    margin-bottom: 20px\n`;\nconst CloudInfo = styled.div `\n    display: flex;\n    flex-direction: row;\n`;\nconst AboutAccountPage = observer((props) => {\n    const clientIdent = rootStore.configStore.cloudKey;\n    const [daysRemaining, setDaysRemaining] = React.useState(null);\n    const [expires, setExpires] = React.useState(null);\n    React.useEffect(() => {\n        server.system.getKey().then(key => {\n            const expires = moment(key.valid_until);\n            const daysRemaining = expires.diff(moment(), 'days');\n            setExpires(expires);\n            setDaysRemaining(daysRemaining);\n        });\n    }, []);\n    return (React.createElement(React.Fragment, null,\n        React.createElement(KeyInfo, null,\n            React.createElement(KeyInfoTitle, null, _t('Client identifier')),\n            React.createElement(Key, null, clientIdent)),\n        React.createElement(AccountInfo, null,\n            React.createElement(AccountName, null, CloudState.details.name),\n            React.createElement(Box, null, (daysRemaining != null && expires != null) &&\n                React.createElement(Box, null,\n                    _t('License valid until'),\n                    \":\\u00A0\",\n                    utils.formatDateTime(expires),\n                    \",\\u00A0\",\n                    daysRemaining,\n                    \"\\u00A0\",\n                    daysRemaining == 1 ? _t('day') : _t('days'),\n                    \"\\u00A0\",\n                    _t('remaining')))),\n        React.createElement(CloudInfo, null,\n            React.createElement(Box, { color: CloudState.statusColor, mr: 50 },\n                React.createElement(icons.cloud, { width: 64, height: 64 })),\n            React.createElement(Box, { flexDirection: \"column\" },\n                React.createElement(Box, { height: 30, fontWeight: \"bold\" },\n                    (CloudState.cloudStatus == CloudStatus.Unknown) &&\n                        _t('Waiting for cloud status...'),\n                    (CloudState.cloudStatus == CloudStatus.Connected) &&\n                        _t('Cloud is connected'),\n                    (CloudState.cloudStatus == CloudStatus.Disconnected) &&\n                        _t('Cloud is disconnected')),\n                React.createElement(Box, null,\n                    React.createElement(Box, { mr: 15 }, _t('Last ping at:')),\n                    React.createElement(Box, null, CloudState.lastPing &&\n                        CloudState.lastPing.format('DD/MM/YYYY HH:mm:ss')\n                        ||\n                            _t('Unknown'))),\n                (CloudState.cloudStatus == CloudStatus.Disconnected) &&\n                    React.createElement(Box, { mt: 20 },\n                        React.createElement(Box, { color: \"warning\", mr: 3 },\n                            React.createElement(icons.warning, { width: 32, height: 32 })),\n                        React.createElement(Box, null, _t('Monsta could not connect to the cloud. Verify that the Monsta server has Internet connectivity.')))))));\n});\nfunction main(plugin, server) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = observable({ showAccountDialog: false, showLicenseExpired: false });\n        plugin.registerAppHeaderItem('cloud', HeaderIcon);\n        plugin.registerDialogPage('cloud', 0, _t('License and account'), AboutAccountPage);\n        server.system.getKeyValid().then(valid => {\n            runInAction(() => data.showLicenseExpired = !valid);\n        }).catch(e => {\n            console.error(e);\n            runInAction(() => data.showLicenseExpired = true);\n        });\n        setTimeout(() => {\n            plugin.callFunc('get_cloud_status', []).then(ret => {\n                CloudState.update(ret);\n            });\n        }, 1000);\n        plugin.registerServerEventHandler('monsta.cloud.status_update', args => {\n            CloudState.update(args[0]);\n        });\n        plugin.registerServerEventHandler('kernel.key.status_change', args => {\n            const isValid = (args[0] && args[0].Key == 'Valid');\n            data.showLicenseExpired = !isValid;\n        });\n        plugin.registerRenderFunc(() => (React.createElement(React.Fragment, null,\n            data.showAccountDialog &&\n                React.createElement(_components_CreateAccountDialog__WEBPACK_IMPORTED_MODULE_0__[\"CreateAccountDialog\"], { onClose: () => data.showAccountDialog = false }),\n            data.showLicenseExpired &&\n                React.createElement(_components_LicenseExpiredBox__WEBPACK_IMPORTED_MODULE_1__[\"LicenseExpiredBox\"], null))));\n        if (!rootStore.configStore.get('ui.suppress_account_create_dialog')) {\n            // data.showAccountDialog = true;\n        }\n    });\n}\n\n\n//# sourceURL=webpack://main/./plugins/cloud/main.tsx?");

/***/ })

/******/ })["default"];