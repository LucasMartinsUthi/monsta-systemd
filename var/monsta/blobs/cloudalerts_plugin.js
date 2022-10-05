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
/******/ 		"cloudalerts_plugin": 0
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
/******/ 	deferredModules.push(["./plugins/cloudalerts/main.tsx","bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/cloudalerts/components/AlertCenter.tsx":
/*!********************************************************!*\
  !*** ./plugins/cloudalerts/components/AlertCenter.tsx ***!
  \********************************************************/
/*! exports provided: AlertCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertCenter\", function() { return AlertCenter; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst Container = styled.div `\n    background-color: ${p => p.theme.colors.background};\n    margin: 20px;\n    box-shadow: ${(p) => p.theme.shadows.card};\n    width: 100%;\n`;\nconst Row = styled.tr `\n`;\nconst Col = styled.td `\n    min-width: 0;\n    white-space: nowrap; \n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 5px 10px;\n    border-bottom: 1px solid ${p => p.theme.colors.subtleBorder};\n`;\nfunction getStatusColor(status) {\n    switch (status) {\n        case 'AlertSent': return 'ok';\n        case 'AlertFailed':\n        case 'AlertNoCredit': return 'error';\n        case 'AlertQueued': return 'controlFocus';\n        default: return 'inactive';\n    }\n}\nfunction getStatusIcon(status) {\n    switch (status) {\n        case 'AlertSent':\n            return React.createElement(icons.check, { width: 16, height: 16 });\n        case 'AlertFailed':\n        case 'AlertNoCredit':\n            return React.createElement(icons.warning, { width: 16, height: 16 });\n        case 'AlertPending':\n            return React.createElement(icons.clockSolid, { width: 16, height: 16 });\n        case 'AlertQueued':\n            return React.createElement(icons.list, { width: 16, height: 16 });\n    }\n}\nconst StatusBox = styled.div `\n    display: flex;\n    font-size: 13px;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding: 4px;\n    border-radius: 2px;\n    color: white;\n    background-color: ${p => p.theme.colors[getStatusColor(p.status)]};\n`;\nfunction formatType(alert) {\n    if (alert.recipient && alert.recipient.startsWith('Telegram_')) {\n        return _t('Telegram');\n    }\n    else if (alert.alertType == 'SMSAlert') {\n        return _t('SMS');\n    }\n    else if (alert.alertType == 'EmailAlert') {\n        return _t('Email');\n    }\n    else {\n        return _t('Unknown');\n    }\n}\nfunction formatRecipient(recipient) {\n    if (recipient && recipient.startsWith('Telegram_')) {\n        return '';\n    }\n    else {\n        return recipient;\n    }\n}\nfunction formatStatus(status) {\n    switch (status) {\n        case 'AlertSent': return _t('Sent');\n        case 'AlertFailed': return _t('Failed');\n        case 'AlertNoCredit': return _t('No Credit');\n        case 'AlertPending': return _t('Pending');\n        case 'AlertQueued': return _t('Queued');\n    }\n}\nconst AlertCenter = observer(props => {\n    const [page, setpage] = React.useState(1);\n    const [alerts, setAlerts] = React.useState([]);\n    const loadAlerts = () => __awaiter(void 0, void 0, void 0, function* () {\n        const alerts = yield props.plugin.callFunc('get_alerts', [page]);\n        setAlerts(alerts);\n    });\n    React.useEffect(() => { loadAlerts(); }, [page]);\n    React.useEffect(() => {\n        let sub;\n        server.subscribe('cloud_alerts.status_update', loadAlerts).then(s => sub = s);\n        return () => {\n            try {\n                server.unsubscribe(sub);\n            }\n            catch (ex) {\n                console.error(ex);\n            }\n        };\n    }, []);\n    const alertRows = alerts.map(alert => (React.createElement(Row, { key: alert.uuid },\n        React.createElement(Col, { style: { width: 150 } },\n            React.createElement(StatusBox, { status: alert.status },\n                getStatusIcon(alert.status),\n                React.createElement(Box, { ml: 2 }, formatStatus(alert.status)))),\n        React.createElement(Col, { style: { width: 120 } }, formatType(alert)),\n        React.createElement(Col, { style: { width: 180 } }, utils.formatDateTime(alert.createdAt)),\n        React.createElement(Col, { style: { width: 230 } }, formatRecipient(alert.recipient)),\n        React.createElement(Col, null, alert.subject))));\n    return (React.createElement(Box, { bg: \"gridBackground\", flexGrow: 1 },\n        React.createElement(Container, null,\n            React.createElement(\"table\", { style: { width: '100%' }, cellSpacing: 0, cellPadding: 0 },\n                React.createElement(\"tbody\", null, alertRows)))));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/AlertCenter.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/AlertCreditIndicator.tsx":
/*!*****************************************************************!*\
  !*** ./plugins/cloudalerts/components/AlertCreditIndicator.tsx ***!
  \*****************************************************************/
/*! exports provided: AlertCreditsIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertCreditsIndicator\", function() { return AlertCreditsIndicator; });\nconst Wrapper = styled.div `\n    display: flex;\n    align-items: center;\n`;\nfunction colorForQuantity(p) {\n    if (p.qty == null || p.qty == 0)\n        return p.theme.colors.inactive;\n    if (p.qty <= 10)\n        return p.theme.colors.error;\n    if (p.qty <= 20)\n        return p.theme.colors.warning;\n    return p.theme.colors.ok;\n}\nconst SMSIndicator = styled.div `\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    background-color: ${colorForQuantity};\n    color: white;\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n    width: 80px;\n    height: 40px;\n    padding: 0 10px;\n`;\nconst EmailIndicator = styled.div `\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    background-color: ${colorForQuantity};\n    color: white;\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n    border-left: 1px solid white;\n    width: 80px;\n    height: 40px;\n    padding: 0 10px;\n`;\nconst AlertCreditsIndicator = (props) => {\n    const [status, setStatus] = React.useState({});\n    const handleUpdate = args => {\n        setStatus(args[0]);\n    };\n    React.useEffect(() => {\n        if (status.smsAlerts == 0) {\n            rootStore.appStore.addNotification({\n                ident: `${props.plugin.id}-sms`,\n                icon: React.createElement(icons.bell, { width: 24, height: 24 }),\n                color: \"warning\",\n                title: _t('You have no more email credits remaining.'),\n                text: _t('Without $typ credits, you will not be able to receive $typ alerts for your devices and monitors.').replace('$typ', _t('Email')),\n            });\n        }\n        if (status.emailAlerts == 0) {\n            rootStore.appStore.addNotification({\n                ident: `${props.plugin.id}-email`,\n                icon: React.createElement(icons.bell, { width: 24, height: 24 }),\n                color: \"warning\",\n                title: _t('You have no more SMS credits remaining.'),\n                text: _t('Without $typ credits, you will not be able to receive $typ alerts for your devices and monitors.').replace('$typ', 'SMS'),\n            });\n        }\n    }, [status]);\n    React.useEffect(() => {\n        const timeout = setTimeout(() => {\n            AlertCreditsIndicator.plugin.callFunc('get_cloud_status', []).then(ret => {\n                setStatus(ret || {});\n            });\n        }, 1000);\n        return () => clearTimeout(timeout);\n    }, []);\n    React.useEffect(() => {\n        let subscription;\n        server.subscribe('monsta.cloud.status_update', handleUpdate).then(sub => {\n            subscription = sub;\n        });\n        return () => server.unsubscribe(subscription);\n    }, []);\n    return (React.createElement(Wrapper, null,\n        React.createElement(SMSIndicator, { qty: status.smsAlerts },\n            React.createElement(icons.sms, { width: 20, height: 20 }),\n            React.createElement(Box, { ml: 2 }, formatNumber(status.smsAlerts, 0))),\n        React.createElement(EmailIndicator, { qty: status.emailAlerts },\n            React.createElement(icons.email, { width: 24, height: 24 }),\n            React.createElement(Box, { ml: 2 }, formatNumber(status.emailAlerts, 0)))));\n};\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/AlertCreditIndicator.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/AlertGroupDialog.tsx":
/*!*************************************************************!*\
  !*** ./plugins/cloudalerts/components/AlertGroupDialog.tsx ***!
  \*************************************************************/
/*! exports provided: AlertGroupDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertGroupDialog\", function() { return AlertGroupDialog; });\n/* harmony import */ var _PeriodSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeriodSelector */ \"./plugins/cloudalerts/components/PeriodSelector.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst TelegramLogo = __webpack_require__(/*! ../icons/telegram-logo.svg */ \"./plugins/cloudalerts/icons/telegram-logo.svg\").default;\nconst renderLabel = (label) => (React.createElement(Box, { alignItems: \"center\" },\n    React.createElement(icons.brazilFlag, { width: 32, height: 20 }),\n    React.createElement(Box, { ml: 2 }, label)));\nconst SMSInput = observer(props => {\n    const countryOpts = [{\n            label: renderLabel(_t('Brazil')),\n            value: '55',\n        }];\n    return (React.createElement(Box, { flexDirection: \"row\" },\n        React.createElement(Box, { mr: 2 },\n            React.createElement(TextField, { width: 140, label: _t('Name'), value: props.value.label, onChange: (e) => props.value.label = e.target.value })),\n        React.createElement(Box, { mr: 2 },\n            React.createElement(SelectField, { width: 140, label: _t('Country'), options: countryOpts, value: countryOpts[0] })),\n        React.createElement(Box, { mr: 2 },\n            React.createElement(TextField, { width: 250, label: _t('Phone number'), value: props.value.phoneNumber, onChange: (e) => props.value.phoneNumber = e.target.value }))));\n});\nconst AlertOptions = observer(props => {\n    const vals = props.group.props;\n    const type = props.alertType;\n    const alertOpts = [\n        { label: _t('Device only'), value: 'AlertForDevice' },\n        { label: _t('Monitors only'), value: 'AlertForMonitors' },\n        { label: _t('Device and Monitors'), value: 'AlertForDeviceAndMonitors' },\n    ];\n    const selectedOpt = alertOpts.find(opt => opt.value == vals[`${type}AlertFor`]);\n    return (React.createElement(Box, { mb: 3 },\n        React.createElement(Box, { mr: 3 },\n            React.createElement(Field, { label: _t('Alert on') },\n                React.createElement(Box, null,\n                    React.createElement(Checkbox, { label: _t('Warning'), isChecked: vals[`${type}AlertOnWarn`], onChange: (e) => vals[`${type}AlertOnWarn`] = e.target.checked }),\n                    React.createElement(Checkbox, { label: _t('Critical'), isChecked: vals[`${type}AlertOnCritical`], onChange: (e) => vals[`${type}AlertOnCritical`] = e.target.checked })))),\n        React.createElement(Box, null,\n            React.createElement(SelectField, { width: 200, isSmall: true, label: _t('Alert for'), options: alertOpts, value: selectedOpt, onChange: opt => vals[`${type}AlertFor`] = opt.value }))));\n});\nconst AlertGroupDialog = observer(props => {\n    const [telegramChats, setTelegramChats] = React.useState([]);\n    const [isTelegramLoadDone, setTelegramLoadDone] = React.useState(false);\n    const loadTelegramChats = () => __awaiter(void 0, void 0, void 0, function* () {\n        try {\n            const chats = yield props.plugin.callFunc('get_telegram_chats', [props.group.props.code]);\n            setTelegramChats(chats);\n        }\n        finally {\n            setTelegramLoadDone(true);\n        }\n    });\n    const deleteTelegramChat = (id) => __awaiter(void 0, void 0, void 0, function* () {\n        const ret = yield msgbox.confirm(2, _t('Confirm Delete'), _t('Confirm deletion?'));\n        if (ret.ok) {\n            setTelegramLoadDone(false);\n            yield props.plugin.callFunc('delete_telegram_chat', [id]);\n            loadTelegramChats();\n        }\n    });\n    React.useEffect(() => { if (props.plugin)\n        loadTelegramChats(); }, []);\n    const telegramUserRows = telegramChats.map(chat => (React.createElement(\"tr\", null,\n        React.createElement(\"td\", { style: { width: 32 } },\n            React.createElement(icons.user, { width: 16, height: 16 })),\n        React.createElement(\"td\", null, chat.username),\n        React.createElement(\"td\", { style: { width: 32 } },\n            React.createElement(Button, { isSubtle: true, isSmall: true, onClick: () => deleteTelegramChat(chat.id) },\n                React.createElement(icons.trash, { width: 16, height: 16 }))))));\n    return (React.createElement(PagedDialog, { isOpen: true, tabWidth: 160, width: 1000, height: 600, onClose: props.onClose, onConfirm: props.onConfirm, confirmText: _t('Save'), title: props.group.props.name },\n        React.createElement(Page, { title: _t('Details') },\n            React.createElement(TextField, { required: true, width: 500, label: _t('Group name'), value: props.group.props.name, onChange: (e) => props.group.props.name = e.target.value })),\n        React.createElement(Page, { title: _t('E-mail') },\n            React.createElement(AlertOptions, { alertType: \"email\", group: props.group }),\n            React.createElement(MultiInput, { newValueText: _t('Add'), allowDeleteLast: true, createNewValue: () => '', values: props.group.props.email, renderInput: idx => (React.createElement(Input, { value: props.group.props.email[idx], onChange: (e) => props.group.props.email[idx] = e.target.value })) })),\n        React.createElement(Page, { title: _t('SMS') },\n            React.createElement(AlertOptions, { alertType: \"sms\", group: props.group }),\n            React.createElement(MultiInput, { newValueText: _t('Add'), allowDeleteLast: true, createNewValue: () => ({ phoneNumber: '', countryCode: '55', name: '' }), values: props.group.props.sms, renderInput: idx => (React.createElement(SMSInput, { value: props.group.props.sms[idx] })) })),\n        React.createElement(Page, { title: _t('Telegram') },\n            React.createElement(Box, { flexDirection: \"row\", alignItems: \"center\" },\n                React.createElement(TelegramLogo, { width: 48, height: 48 }),\n                React.createElement(Box, { ml: 4, fontSize: 24 }, _t('Telegram'))),\n            React.createElement(Box, { mt: 4 },\n                _t('To enable alerts via your Telegram account, search for the bot named MonstaTecnologiaBot and send a message with the following code'),\n                \":\"),\n            React.createElement(Box, { mt: 3, fontWeight: \"bold\", fontSize: 24 },\n                props.cloudStatus ? props.cloudStatus.telegramCode : '',\n                props.group.props.code),\n            React.createElement(Box, { mt: 3 }, _t('Obs: Caracteres mai\\u00fasculos e min\\u00fasculos s\\u00e3o diferentes.')),\n            React.createElement(Box, { mt: 3 }, _t('Voc\\u00ea receber\\u00e1 uma notifica\\u00e7\\u00e3o de que sua ativa\\u00e7\\u00e3o foi efetuada.')),\n            props.plugin &&\n                React.createElement(React.Fragment, null,\n                    React.createElement(Box, { mt: 4, fontWeight: \"bold\", fontSize: 16 }, _t('Registered users:')),\n                    React.createElement(Box, { mt: 3 }, isTelegramLoadDone &&\n                        React.createElement(\"table\", { style: { width: '100%' } },\n                            React.createElement(\"tbody\", null, telegramUserRows))\n                        ||\n                            React.createElement(Box, { fontSize: 16, color: \"subtleText\" }, _t('Loading...'))))),\n        React.createElement(Page, { title: _t('Periods') },\n            React.createElement(_PeriodSelector__WEBPACK_IMPORTED_MODULE_0__[\"PeriodSelector\"], { periods: props.group.props.period }))));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/AlertGroupDialog.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/AlertGroupPicker.tsx":
/*!*************************************************************!*\
  !*** ./plugins/cloudalerts/components/AlertGroupPicker.tsx ***!
  \*************************************************************/
/*! exports provided: AlertGroupPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlertGroupPicker\", function() { return AlertGroupPicker; });\n/* harmony import */ var _AlertGroupDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertGroupDialog */ \"./plugins/cloudalerts/components/AlertGroupDialog.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst AlertGroupPicker = observer(props => {\n    const [creatingGroup, setCreatingGroup] = React.useState(null);\n    const [created, setCreated] = React.useState([]);\n    const objectStoreRef = React.useRef(new ObjectStore());\n    const objectStore = objectStoreRef.current;\n    const groupOpts = (props.groups.concat(created)).map(group => {\n        return { label: group.props.name, value: group };\n    });\n    let selected = null;\n    if (props.value)\n        selected = groupOpts.find(opt => opt.value.id == props.value.id);\n    const handleCreate = (name) => {\n        const newGroup = new model.Obj(objectStore);\n        newGroup.type = 'AlertGroup';\n        newGroup.props.name = name;\n        newGroup.props.period = utils.periodsArray(['SMSAlert', 'EmailAlert']);\n        newGroup.props.emailAlertOnWarn = true;\n        newGroup.props.emailAlertOnCritical = true;\n        newGroup.props.smsAlertOnWarn = true;\n        newGroup.props.smsAlertOnCritical = true;\n        newGroup.props.emailAlertFor = 'AlertForDeviceAndMonitors';\n        newGroup.props.smsAlertFor = 'AlertForDeviceAndMonitors';\n        newGroup.props.email = [];\n        newGroup.props.sms = [];\n        newGroup.props.code = utils.makeAlphaId(3);\n        setCreatingGroup(newGroup.toViewModel());\n    };\n    return (React.createElement(React.Fragment, null,\n        React.createElement(Select, { width: 500, isCreatable: true, onCreateOption: handleCreate, options: groupOpts, value: selected, onChange: opt => props.onChange(opt.value.asRef()) }),\n        creatingGroup &&\n            React.createElement(_AlertGroupDialog__WEBPACK_IMPORTED_MODULE_0__[\"AlertGroupDialog\"], { group: creatingGroup, onClose: () => setCreatingGroup(null), onConfirm: () => __awaiter(void 0, void 0, void 0, function* () {\n                    const id = yield server.object.put(creatingGroup);\n                    creatingGroup.id = id;\n                    creatingGroup.submit();\n                    created.push(creatingGroup.model);\n                    props.onChange(creatingGroup.asRef());\n                    setCreated(created);\n                    setCreatingGroup(null);\n                }) })));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/AlertGroupPicker.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/DeviceAlertPage.tsx":
/*!************************************************************!*\
  !*** ./plugins/cloudalerts/components/DeviceAlertPage.tsx ***!
  \************************************************************/
/*! exports provided: DeviceAlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeviceAlertPage\", function() { return DeviceAlertPage; });\n/* harmony import */ var _AlertGroupPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertGroupPicker */ \"./plugins/cloudalerts/components/AlertGroupPicker.tsx\");\n\nconst DeviceAlertPage = observer(props => {\n    const objectStoreRef = React.useRef(new ObjectStore(rootStore));\n    React.useEffect(() => {\n        objectStoreRef.current.loadType('AlertGroup');\n    }, []);\n    // TODO Check for no groups\n    const allGroups = objectStoreRef.current.getObjectsOfType('AlertGroup');\n    if (!props.device.container.props.alert_groups) {\n        props.device.container.props.alert_groups = [];\n    }\n    const deviceGroups = props.device.container.props.alert_groups;\n    return (React.createElement(Box, { flexDirection: \"column\" },\n        React.createElement(Box, { mb: 4 },\n            React.createElement(Checkbox, { label: _t('Mute cloud alerts'), isChecked: props.device.container.props['cloud_alerts.mute'], onChange: (e) => props.device.container.props['cloud_alerts.mute'] = e.target.checked })),\n        React.createElement(MultiInput, { width: 500, allowDeleteLast: true, newValueText: _t('Add a new alert group'), createNewValue: () => null, renderInput: idx => (React.createElement(_AlertGroupPicker__WEBPACK_IMPORTED_MODULE_0__[\"AlertGroupPicker\"], { groups: allGroups, value: deviceGroups[idx], onChange: ref => deviceGroups[idx] = ref })), values: deviceGroups })));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/DeviceAlertPage.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/MonitorAlertPage.tsx":
/*!*************************************************************!*\
  !*** ./plugins/cloudalerts/components/MonitorAlertPage.tsx ***!
  \*************************************************************/
/*! exports provided: MonitorAlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MonitorAlertPage\", function() { return MonitorAlertPage; });\n/* harmony import */ var _AlertGroupPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertGroupPicker */ \"./plugins/cloudalerts/components/AlertGroupPicker.tsx\");\n\nconst MonitorAlertPage = observer(props => {\n    const objectStoreRef = React.useRef(new ObjectStore(rootStore));\n    React.useEffect(() => {\n        objectStoreRef.current.loadType('AlertGroup');\n    }, []);\n    // TODO Check for no groups\n    const allGroups = objectStoreRef.current.getObjectsOfType('AlertGroup');\n    if (!props.monitor.container.props.alert_groups) {\n        props.monitor.container.props.alert_groups = [];\n    }\n    const monitorGroups = props.monitor.container.props.alert_groups;\n    return (React.createElement(Box, { flexDirection: \"column\" }, props.monitor.isUptime &&\n        React.createElement(Box, { bg: \"toolbarBackground\", color: \"subtleText\", fontSize: 18, p: 3 }, _t('Uptime alert groups are configured in the device.'))\n        ||\n            React.createElement(MultiInput, { width: 500, allowDeleteLast: true, newValueText: _t('Add a new alert group'), createNewValue: () => null, renderInput: idx => (React.createElement(_AlertGroupPicker__WEBPACK_IMPORTED_MODULE_0__[\"AlertGroupPicker\"], { groups: allGroups, value: monitorGroups[idx], onChange: ref => monitorGroups[idx] = ref })), values: monitorGroups })));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/MonitorAlertPage.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/PeriodMiniMap.tsx":
/*!**********************************************************!*\
  !*** ./plugins/cloudalerts/components/PeriodMiniMap.tsx ***!
  \**********************************************************/
/*! exports provided: PeriodMiniMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeriodMiniMap\", function() { return PeriodMiniMap; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./plugins/cloudalerts/utils.ts\");\n\nconst Wrapper = styled.div `\n    margin-top: 10px;\n`;\nconst PeriodBox = styled.div `\n    width: 7px;\n    height: 7px;\n    background-color: ${p => p.color};\n    margin: 0 1px 1px 0;\n    flex-grow: 0;\n    flex-shrink: 0;\n`;\nconst PeriodRow = styled.div `\n    display: flex;\n    flex-direction: row;\n`;\nconst PeriodMiniMap = observer(props => {\n    const rows = props.periods.map((hours, rowIdx) => {\n        const cols = hours.map((hour, hourIdx) => {\n            return (React.createElement(PeriodBox, { key: `${rowIdx}${hourIdx}`, color: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"colorFromActions\"])(hour) }));\n        });\n        return React.createElement(PeriodRow, null, cols);\n    });\n    return (React.createElement(Wrapper, null, rows));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/PeriodMiniMap.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/PeriodSelector.tsx":
/*!***********************************************************!*\
  !*** ./plugins/cloudalerts/components/PeriodSelector.tsx ***!
  \***********************************************************/
/*! exports provided: PeriodSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeriodSelector\", function() { return PeriodSelector; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./plugins/cloudalerts/utils.ts\");\n\nconst Wrapper = styled.div `\n    display: flex;\n    flex-direction: column;\n    position: relative;\n`;\nconst HourWrapper = styled.div `\n    border: 1px solid ${p => p.status == 'selected' ? p.theme.colors.controlFocus : 'transparent'};\n    margin: 1px;\n`;\nconst Hour = styled.div `\n    width: 24px;\n    height: 24px;\n    background-color: ${hourColor};\n    margin: 1px;\n    border: 1px solid: ${p => p.theme.dialogBackground};\n`;\nconst DayRow = styled.div `\n    display: flex;\n    flex-direction: row;\n`;\nconst DayTitle = styled.div `\n    display: flex;\n    align-items: center;\n    width: 35px;\n`;\nconst TitleRow = styled.div `\n    display: flex;\n    flex-direction: row;\n    border-bottom: 2px solid ${p => p.theme.colors.controlBorder};\n    margin-bottom: 5px;\n`;\nconst ColTitle = styled.div `\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: ${p => p.width ? p.width : 30}px;\n    height: 24px;\n`;\nconst InfoPanel = styled.div `\n    margin-top: 30px;\n    display: flex;\n    flex-direction: row;\n    padding: 10px;\n    background-color: ${p => p.theme.colors.toolbarBackground};\n    align-items: center;\n    font-size: 16px;\n    font-weight: bold;\n`;\nconst ButtonPanel = styled.div `\n    margin-top: 30px;\n    display: flex;\n    flex-direction: row;\n\n    * {\n        margin-right: 20px;\n    }\n`;\nfunction hourColor(p) {\n    if (p.status == 'highlight')\n        return p.theme.colors.inactive;\n    if (p.status == 'selected')\n        return '#e4e4e4';\n    if (p.theme.colors[p.color])\n        return p.theme.colors[p.color];\n    return p.color;\n}\nconst PeriodSelector = observer(props => {\n    const [containerRef, setContainerRef] = React.useState(null);\n    const [hasSelection, setHasSelection] = React.useState(false);\n    const status = React.useRef(null);\n    const periods = [];\n    const hourRefs = [];\n    const createStatus = status.current == null;\n    if (status.current == null)\n        status.current = observable([]);\n    const addHourRef = (ref, day, hour) => {\n        hourRefs.push(ref);\n        if (createStatus)\n            status.current.push({ day, hour, status: 'none' });\n    };\n    const setAction = React.useCallback((actions) => {\n        runInAction(() => {\n            status.current.forEach(status => {\n                if (status.status == 'selected') {\n                    props.periods[status.day][status.hour] = actions;\n                    status.status = 'none';\n                }\n            });\n            setHasSelection(false);\n        });\n    }, []);\n    let curIdx = 0;\n    for (let day = 0; day < 7; day++) {\n        const days = [];\n        for (let hour = 0; hour < 24; hour++) {\n            const stat = status.current[curIdx] ? status.current[curIdx].status : 'none';\n            const actions = props.periods[day][hour];\n            days.push(React.createElement(HourWrapper, { onClick: (curIdx => {\n                    if (status.current[curIdx]) {\n                        status.current[curIdx].status = 'selected';\n                    }\n                }).bind(null, curIdx), status: stat, key: `${day}-${hour}`, ref: ref => addHourRef(ref, day, hour) },\n                React.createElement(Hour, { status: stat, color: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"colorFromActions\"])(actions) })));\n            curIdx += 1;\n        }\n        periods.push(React.createElement(DayRow, { key: day },\n            React.createElement(DayTitle, null, day == 6 ? moment.weekdaysShort()[0] : moment.weekdaysShort()[day + 1]),\n            days));\n    }\n    const colTitles = [\n        React.createElement(ColTitle, { key: \"blank\", width: 35 },\n            React.createElement(Box, { fontSize: 12 }, _t('Hour')),\n            React.createElement(icons.rightChevron, { width: 16, height: 16 }))\n    ];\n    for (let i = 0; i < 24; i++) {\n        colTitles.push(React.createElement(ColTitle, { key: i }, String(i)));\n    }\n    return (React.createElement(React.Fragment, null,\n        React.createElement(Wrapper, { ref: setContainerRef },\n            React.createElement(TitleRow, null, colTitles),\n            periods,\n            containerRef &&\n                React.createElement(Selection, { style: { position: 'absolute' }, target: containerRef, elements: hourRefs, onHighlightChange: ary => {\n                        runInAction(() => {\n                            status.current.forEach(item => {\n                                if (item.status != 'selected')\n                                    item.status = 'none';\n                            });\n                            ary.forEach(idx => status.current[idx].status = 'highlight');\n                        });\n                    }, onSelectionChange: ary => {\n                        runInAction(() => {\n                            if (ary.length > 0)\n                                setHasSelection(true);\n                            status.current.forEach(item => {\n                                if (item.status != 'selected')\n                                    item.status = 'none';\n                            });\n                            ary.forEach(idx => status.current[idx].status = 'selected');\n                        });\n                    } })),\n        React.createElement(InfoPanel, null,\n            React.createElement(Box, { color: \"controlFocus\" }, hasSelection &&\n                React.createElement(icons.button, { width: 48, height: 48 })\n                ||\n                    React.createElement(icons.drag, { width: 48, height: 48 })),\n            React.createElement(Box, { ml: 4 }, hasSelection &&\n                _t('Now select an action below.')\n                ||\n                    _t('Drag or click above to select a time period.'))),\n        React.createElement(ButtonPanel, null,\n            React.createElement(Button, { isDisabled: !hasSelection, onClick: () => setAction([]) },\n                React.createElement(Hour, { color: \"#ccc\" }),\n                React.createElement(Box, { ml: 2 }, _t('Suppress'))),\n            React.createElement(Button, { isDisabled: !hasSelection, onClick: () => setAction(['EmailAlert']) },\n                React.createElement(Hour, { color: _utils__WEBPACK_IMPORTED_MODULE_0__[\"EMAIL_COLOR\"] }),\n                React.createElement(Box, { ml: 2 }, _t('E-mail'))),\n            React.createElement(Button, { isDisabled: !hasSelection, onClick: () => setAction(['SMSAlert']) },\n                React.createElement(Hour, { color: _utils__WEBPACK_IMPORTED_MODULE_0__[\"SMS_COLOR\"] }),\n                React.createElement(Box, { ml: 2 }, _t('SMS / Telegram'))),\n            React.createElement(Button, { isDisabled: !hasSelection, onClick: () => setAction(['EmailAlert', 'SMSAlert']) },\n                React.createElement(Hour, { color: _utils__WEBPACK_IMPORTED_MODULE_0__[\"BOTH_COLOR\"] }),\n                React.createElement(Box, { ml: 2 }, _t('Both'))))));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/PeriodSelector.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/components/TemplateDialog.tsx":
/*!***********************************************************!*\
  !*** ./plugins/cloudalerts/components/TemplateDialog.tsx ***!
  \***********************************************************/
/*! exports provided: TemplateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TemplateDialog\", function() { return TemplateDialog; });\nconst TemplateDialog = observer(props => {\n    return (React.createElement(Dialog, { isOpen: true, closeText: _t('Cancel'), confirmText: _t('Ok'), onClose: props.onClose, onConfirm: props.onConfirm, width: 700, height: 500, title: props.title },\n        props.template.props.identifier.indexOf('SMS') == -1 &&\n            React.createElement(Box, { mb: 3, width: \"100%\" },\n                React.createElement(TextField, { label: _t('Subject'), fullWidth: true, value: props.template.props.title, width: \"100%\", onChange: (e) => {\n                        runInAction(() => {\n                            props.template.props.title = e.target.value;\n                        });\n                    } })),\n        React.createElement(TextField, { label: _t('Body'), isMultiLine: true, height: 230, value: props.template.props.body, onChange: (e) => {\n                runInAction(() => {\n                    props.template.props.body = e.target.value;\n                });\n            } })));\n});\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/components/TemplateDialog.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/icons/telegram-logo.svg":
/*!*****************************************************!*\
  !*** ./plugins/cloudalerts/icons/telegram-logo.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  styles = {},\n  ...props\n}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", _extends({\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 240 240\"\n}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"circle\", {\n  cx: \"120\",\n  cy: \"120\",\n  r: \"120\",\n  fill: \"#0097cd\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n  fill: \"#c8daea\",\n  d: \"M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n  fill: \"#a9c9dd\",\n  d: \"M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n  fill: \"#fff\",\n  d: \"M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258\"\n})));\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/icons/telegram-logo.svg?");

/***/ }),

/***/ "./plugins/cloudalerts/main.tsx":
/*!**************************************!*\
  !*** ./plugins/cloudalerts/main.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _components_AlertGroupDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AlertGroupDialog */ \"./plugins/cloudalerts/components/AlertGroupDialog.tsx\");\n/* harmony import */ var _components_PeriodMiniMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PeriodMiniMap */ \"./plugins/cloudalerts/components/PeriodMiniMap.tsx\");\n/* harmony import */ var _components_AlertCreditIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AlertCreditIndicator */ \"./plugins/cloudalerts/components/AlertCreditIndicator.tsx\");\n/* harmony import */ var _components_DeviceAlertPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DeviceAlertPage */ \"./plugins/cloudalerts/components/DeviceAlertPage.tsx\");\n/* harmony import */ var _components_MonitorAlertPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MonitorAlertPage */ \"./plugins/cloudalerts/components/MonitorAlertPage.tsx\");\n/* harmony import */ var _components_AlertCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AlertCenter */ \"./plugins/cloudalerts/components/AlertCenter.tsx\");\n/* harmony import */ var _components_TemplateDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TemplateDialog */ \"./plugins/cloudalerts/components/TemplateDialog.tsx\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nconst ActionButtons = styled.div `\n    display: flex;\n    position: absolute;\n    right: 5px;\n    bottom: 5px;\n`;\nconst CardIcon = styled.div `\n    position: absolute;\n    left: -12px;\n    top: -12px;\n`;\nconst AlertsPage = observer((props) => {\n    const [editingGroup, setEditingGroup] = React.useState(null);\n    const [editingTemplate, setEditingTemplate] = React.useState(null);\n    const [cloudStatus, setCloudStatus] = React.useState(null);\n    const [view, setView] = React.useState('groups');\n    const objectStoreRef = React.useRef(new ObjectStore(rootStore));\n    const objectStore = objectStoreRef.current;\n    const groups = objectStore.getObjectsOfType('AlertGroup');\n    const templates = objectStore.getObjectsOfType('AlertTemplate');\n    groups.sort(sortByFunc(o => o.props.name));\n    React.useEffect(() => {\n        objectStore.loadType('AlertGroup');\n        objectStore.loadType('AlertTemplate');\n        props.plugin.callFunc('get_cloud_status', []).then(status => {\n            setCloudStatus(status);\n        });\n        objectStore.listenToEvents();\n        return () => {\n            objectStore.unlistenToEvents();\n        };\n    }, []);\n    const newGroup = React.useCallback(() => {\n        const newGroup = new model.Obj(objectStore);\n        newGroup.type = 'AlertGroup';\n        newGroup.props.name = _t('New group');\n        newGroup.props.period = utils.periodsArray(['SMSAlert', 'EmailAlert']);\n        newGroup.props.emailAlertOnWarn = true;\n        newGroup.props.emailAlertOnCritical = true;\n        newGroup.props.smsAlertOnWarn = true;\n        newGroup.props.smsAlertOnCritical = true;\n        newGroup.props.emailAlertFor = 'AlertForDeviceAndMonitors';\n        newGroup.props.smsAlertFor = 'AlertForDeviceAndMonitors';\n        newGroup.props.email = [];\n        newGroup.props.sms = [];\n        newGroup.props.code = utils.makeAlphaId(3);\n        setEditingGroup(newGroup.toViewModel());\n    }, [editingGroup]);\n    const deleteGroup = (group) => __awaiter(void 0, void 0, void 0, function* () {\n        const ret = yield msgbox.confirm(2, _t('Confirm Delete'), _t('Confirm deletion?'));\n        if (ret.ok) {\n            error.wrapErrorUI(server.object.del('AlertGroup', group.id));\n        }\n    });\n    const saveGroup = React.useCallback(() => {\n        editingGroup.submit();\n        server.object.put(editingGroup);\n        setEditingGroup(null);\n    }, [editingGroup]);\n    const saveTemplate = React.useCallback(() => {\n        editingTemplate.submit();\n        server.object.put(editingTemplate);\n        setEditingTemplate(null);\n    }, [editingTemplate]);\n    const actionButtons = (group) => (React.createElement(ActionButtons, null,\n        React.createElement(Button, { color: \"error\", mr: 3, isSmall: true, isSubtle: true, onClick: () => deleteGroup(group) },\n            React.createElement(icons.trash, { width: 16, height: 16 })),\n        React.createElement(Button, { isSmall: true, isSubtle: true, onClick: () => setEditingGroup(group.toViewModel()) },\n            React.createElement(icons.edit, { width: 16, height: 16 }))));\n    return (React.createElement(React.Fragment, null,\n        React.createElement(AppToolbar, null,\n            React.createElement(Box, { mr: 4 },\n                React.createElement(RadioGroup, { value: view, onChange: setView },\n                    React.createElement(RadioButton, { value: \"groups\" },\n                        React.createElement(icons.groups, { width: 16, height: 16 }),\n                        React.createElement(Box, { ml: 2 }, _t('Groups'))),\n                    React.createElement(RadioButton, { value: \"alertcenter\" },\n                        React.createElement(icons.bell, { width: 16, height: 16 }),\n                        React.createElement(Box, { ml: 2 }, _t('Alert Center'))))),\n            view == 'groups' &&\n                React.createElement(Button, { variant: \"primary\", onClick: newGroup },\n                    React.createElement(icons.add, { width: 16, height: 16 }),\n                    React.createElement(Box, { ml: 2 }, _t('New group')))),\n        React.createElement(Box, { flexDirection: \"column\", overflow: \"auto\", position: \"absolute\", top: 55, left: 0, bottom: 0, right: 0 }, view == 'groups' &&\n            React.createElement(React.Fragment, null,\n                React.createElement(VirtualGrid, { display: \"flex\", flexGrow: 1, itemWidth: 250, itemHeight: 170, items: groups, bg: \"gridBackground\", onClick: () => {\n                    } }, (group) => {\n                    return (React.createElement(Card, { title: group.props.name, width: 220, height: 140, mt: 30, ml: 30, adornments: actionButtons(group) },\n                        React.createElement(_components_PeriodMiniMap__WEBPACK_IMPORTED_MODULE_1__[\"PeriodMiniMap\"], { periods: group.props.period })));\n                }),\n                React.createElement(Box, { height: 5, bg: \"inactive\" }),\n                React.createElement(Box, { py: 3, px: \"30px\", fontSize: 24, borderBottom: \"1px solid\", borderBottomColor: \"inactive\" }, _t('Alert templates')),\n                React.createElement(VirtualGrid, { display: \"flex\", height: 300, itemWidth: 270, itemHeight: 170, items: templates, bg: \"gridBackground\", onClick: () => {\n                    } }, (group) => {\n                    return (React.createElement(Card, { title: _t(group.props.identifier), width: 240, height: 140, mt: 30, ml: 30, adornments: React.createElement(React.Fragment, null,\n                            React.createElement(CardIcon, null,\n                                React.createElement(icons.textDoc, { width: 24, height: 24 })),\n                            React.createElement(ActionButtons, null,\n                                React.createElement(Button, { isSmall: true, isSubtle: true, onClick: () => setEditingTemplate(group.toViewModel()) },\n                                    React.createElement(icons.edit, { width: 16, height: 16 })))) },\n                        React.createElement(Box, { fontSize: 12, my: 2, flexDirection: \"column\", overflow: \"hidden\" },\n                            group.props.body.substr(0, 100),\n                            \"...\")));\n                }))\n            ||\n                React.createElement(_components_AlertCenter__WEBPACK_IMPORTED_MODULE_5__[\"AlertCenter\"], { plugin: props.plugin })),\n        editingGroup &&\n            React.createElement(_components_AlertGroupDialog__WEBPACK_IMPORTED_MODULE_0__[\"AlertGroupDialog\"], { plugin: props.plugin, cloudStatus: cloudStatus, onClose: () => setEditingGroup(null), group: editingGroup, onConfirm: saveGroup }),\n        editingTemplate &&\n            React.createElement(_components_TemplateDialog__WEBPACK_IMPORTED_MODULE_6__[\"TemplateDialog\"], { template: editingTemplate, title: _t(editingTemplate.props.identifier), onClose: () => setEditingTemplate(null), onConfirm: saveTemplate })));\n});\nfunction dedupGroupsInObject(obj) {\n    let alertGroups = obj.props['alert_groups'];\n    if (alertGroups) {\n        alertGroups = alertGroups.filter(a => a != null);\n        alertGroups = alertGroups.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);\n        obj.props['alert_groups'] = alertGroups;\n    }\n}\nfunction main(plugin, server) {\n    return __awaiter(this, void 0, void 0, function* () {\n        plugin.registerView('alerts', _t('Alerts'), AlertsPage, 1, React.createElement(icons.bell, { width: 24, height: 24 }));\n        plugin.registerDialogPage('alerts', 1, _t('Alerts'), _components_DeviceAlertPage__WEBPACK_IMPORTED_MODULE_3__[\"DeviceAlertPage\"], dedupGroupsInObject);\n        plugin.registerDialogPage('alerts', 3, _t('Alerts'), _components_MonitorAlertPage__WEBPACK_IMPORTED_MODULE_4__[\"MonitorAlertPage\"], dedupGroupsInObject);\n        _components_AlertCreditIndicator__WEBPACK_IMPORTED_MODULE_2__[\"AlertCreditsIndicator\"].plugin = plugin;\n        plugin.registerAppHeaderItem('alert_credits', _components_AlertCreditIndicator__WEBPACK_IMPORTED_MODULE_2__[\"AlertCreditsIndicator\"], 0);\n        plugin.onFree = () => {\n            rootStore.appStore.clearNotificationsWithPrefix(plugin.id);\n        };\n    });\n}\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/main.tsx?");

/***/ }),

/***/ "./plugins/cloudalerts/utils.ts":
/*!**************************************!*\
  !*** ./plugins/cloudalerts/utils.ts ***!
  \**************************************/
/*! exports provided: EMAIL_COLOR, SMS_COLOR, BOTH_COLOR, colorFromActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMAIL_COLOR\", function() { return EMAIL_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SMS_COLOR\", function() { return SMS_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOTH_COLOR\", function() { return BOTH_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorFromActions\", function() { return colorFromActions; });\nconst EMAIL_COLOR = '#5392ff';\nconst SMS_COLOR = '#db7c00';\nconst BOTH_COLOR = '#00aa5e';\nfunction colorFromActions(actions) {\n    if (actions.includes('EmailAlert') && actions.includes('SMSAlert'))\n        return BOTH_COLOR;\n    if (actions.includes('EmailAlert'))\n        return EMAIL_COLOR;\n    if (actions.includes('SMSAlert'))\n        return SMS_COLOR;\n    return '#ccc';\n}\n\n\n//# sourceURL=webpack://main/./plugins/cloudalerts/utils.ts?");

/***/ })

/******/ })["default"];