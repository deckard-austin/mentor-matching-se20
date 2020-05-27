module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/startup-list.js":
/*!************************************!*\
  !*** ./components/startup-list.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\decka\\Desktop\\SBC2020\\mentor-matching\\components\\startup-list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// TODO: Connect Airtable API with this to bring in startups dynamically
// TODO: Add styling, startup logos, query params for each mentor/startup


const StartupList = ({
  name,
  description,
  location,
  handleChange
}) => __jsx("div", {
  className: "startup-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "each-startup",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("h1", {
  className: "startup-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, name), __jsx("p", {
  className: "startup-location",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, location, " "), __jsx("h3", {
  className: "startup-description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, description), __jsx("label", {
  htmlFor: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, "Yes"), __jsx("input", {
  type: "radio",
  value: "yes",
  name: "mentor-choice",
  onChange: handleChange,
  className: "mentor-choice",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("label", {
  htmlFor: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}, "No"), __jsx("input", {
  type: "radio",
  value: "no",
  name: "mentor-choice",
  onChange: handleChange,
  className: "mentor-choice",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (StartupList);

/***/ }),

/***/ "./hard-data/startup-data.js":
/*!***********************************!*\
  !*** ./hard-data/startup-data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const STARTUP_DATA = [{
  id: 1,
  name: 'Benchvote',
  description: ' A digital marketing campaign creation tool to help brands and teams engage with their fans, capture data and activate sponsors',
  location: 'Sydney, Australia'
}, {
  id: 2,
  name: 'BindiMaps',
  description: 'BindiMaps is an app for indoor navigation (so just like google maps, but indoors) that everyone can use, but is optimised for people with vision impairment',
  location: 'Sydney, Australia'
}, {
  id: 3,
  name: 'FlipTix ',
  description: 'Placeh Fans leave events early, and FlipTix sells brand new tickets for the remaining time to new fans.older',
  location: 'Newport Coast, United States'
}, {
  id: 4,
  name: 'Floteq',
  description: 'IoT solution company delivering solutions in food and beverage space',
  location: 'Melbourne, Australia'
}, {
  id: 5,
  name: 'Friends of Mr Ed ',
  description: 'Friends of Mr Ed is a SaaS company focused on radically improving racehorse ownership via a personalised and intuitive mobile app called ‘Fred’. Fred connects owners and their friends so they can share their racing passion. It is designed to not only demystify the ownership experience but also enhance it',
  location: 'Melbourne, Australia'
}, {
  id: 6,
  name: 'Globatalent',
  description: 'Globatalent is a sports platform where you can invest, trade and support your favourite clubs and sports idols. It’s like if you invest in the early age of Michael Jordan career, now you would be millionaire.',
  location: ' London, United Kingdom'
}, {
  id: 7,
  name: 'Humense',
  description: ' Immensely human realities, putting fans on the field of play across the white line, on-demand or live, by digitally 3D reconstructing players and ball photo real in VR and AR. We deploy on proven transactional platforms across web, mobile and AR VR eyewear',
  location: 'Sydney, Australia'
}, {
  id: 8,
  name: 'IntelliCUP',
  description: ' IntelliCUP is a patented IOT based quick, cashless beverage dispensing system that reduces waste, increases profitability and provides unprecedented levels of merchant and consumer data and enables marketers to talk to customers at point of consumption - the Uber of beverage dispensing',
  location: 'Port Louis, Mauritius'
}, {
  id: 9,
  name: 'SportsCube ',
  description: 'A two-sided marketplace for rights holders and sponsors that saves valuable time and money by streamlining their sponsorships',
  location: 'Melbourne, Australia'
}, {
  id: 10,
  name: 'Trendii ',
  description: 'AI powered fashion and product discovery',
  location: 'Brisbane, Australia'
}];
/* harmony default export */ __webpack_exports__["default"] = (STARTUP_DATA);

/***/ }),

/***/ "./pages/mentor/index.js":
/*!*******************************!*\
  !*** ./pages/mentor/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_startup_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/startup-list */ "./components/startup-list.js");
/* harmony import */ var _hard_data_startup_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hard-data/startup-data */ "./hard-data/startup-data.js");
var _jsxFileName = "C:\\Users\\decka\\Desktop\\SBC2020\\mentor-matching\\pages\\mentor\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // This page maps through each startup, the mentors will submit the form which creates their

class StartupsPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      this.setState({
        mentorChoice: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
    });

    this.state = {
      startups: _hard_data_startup_data__WEBPACK_IMPORTED_MODULE_4__["default"],
      mentorChoice: '',
      mentorChoices: [] // If using radio buttons, might need to store each selection in an array

    };
  }

  render() {
    const {
      startups,
      mentorChoice
    } = this.state;
    console.log({
      mentorChoice
    });
    return __jsx("div", {
      className: "startups-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx("form", {
      action: "",
      onSubmit: async e => {
        e.preventDefault();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, startups.map((_ref) => {
      let {
        id,
        handleChange
      } = _ref,
          otherProps = _objectWithoutProperties(_ref, ["id", "handleChange"]);

      return __jsx(_components_startup_list__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        key: id
      }, otherProps, {
        handleChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }));
    }), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, "Save Choices")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StartupsPage);

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/mentor/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\decka\Desktop\SBC2020\mentor-matching\pages\mentor\index.js */"./pages/mentor/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGFydHVwLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vaGFyZC1kYXRhL3N0YXJ0dXAtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW50b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJTdGFydHVwTGlzdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiU1RBUlRVUF9EQVRBIiwiaWQiLCJTdGFydHVwc1BhZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlIiwic2V0U3RhdGUiLCJtZW50b3JDaG9pY2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJzdGFydHVwcyIsIm1lbnRvckNob2ljZXMiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwib3RoZXJQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUNBLFdBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxZQUFNLEVBQUMsRUFEVDtBQUVFLGNBQVEsRUFBRSxNQUFPRixDQUFQLElBQWE7QUFDckJBLFNBQUMsQ0FBQ0ssY0FBRjtBQUNELE9BSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHRSxRQUFRLENBQUNLLEdBQVQsQ0FBYTtBQUFBLFVBQUM7QUFBRWxCLFVBQUY7QUFBTUY7QUFBTixPQUFEO0FBQUEsVUFBd0JxQixVQUF4Qjs7QUFBQSxhQUNaLE1BQUMsZ0VBQUQ7QUFDRSxXQUFHLEVBQUVuQjtBQURQLFNBRU1tQixVQUZOO0FBR0Usb0JBQVksRUFBRSxLQUFLckIsWUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURZO0FBQUEsS0FBYixDQUxILEVBWUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGLENBREYsQ0FERjtBQWtCRDs7QUF4Q3dDOztBQTJDNUJHLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtZW50b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCIvLyBUT0RPOiBDb25uZWN0IEFpcnRhYmxlIEFQSSB3aXRoIHRoaXMgdG8gYnJpbmcgaW4gc3RhcnR1cHMgZHluYW1pY2FsbHlcclxuLy8gVE9ETzogQWRkIHN0eWxpbmcsIHN0YXJ0dXAgbG9nb3MsIHF1ZXJ5IHBhcmFtcyBmb3IgZWFjaCBtZW50b3Ivc3RhcnR1cFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RhcnR1cExpc3QgPSAoeyBuYW1lLCBkZXNjcmlwdGlvbiwgbG9jYXRpb24sIGhhbmRsZUNoYW5nZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9J3N0YXJ0dXAtbGlzdCc+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZWFjaC1zdGFydHVwJz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0nc3RhcnR1cC1uYW1lJz57bmFtZX08L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3N0YXJ0dXAtbG9jYXRpb24nPntsb2NhdGlvbn0gPC9wPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPSdzdGFydHVwLWRlc2NyaXB0aW9uJz57ZGVzY3JpcHRpb259PC9oMz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9Jyc+WWVzPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT0ncmFkaW8nXHJcbiAgICAgICAgdmFsdWU9J3llcydcclxuICAgICAgICBuYW1lPSdtZW50b3ItY2hvaWNlJ1xyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdtZW50b3ItY2hvaWNlJ1xyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj0nJz5ObzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9J3JhZGlvJ1xyXG4gICAgICAgIHZhbHVlPSdubydcclxuICAgICAgICBuYW1lPSdtZW50b3ItY2hvaWNlJ1xyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdtZW50b3ItY2hvaWNlJ1xyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwTGlzdDtcclxuIiwiY29uc3QgU1RBUlRVUF9EQVRBID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0JlbmNodm90ZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJyBBIGRpZ2l0YWwgbWFya2V0aW5nIGNhbXBhaWduIGNyZWF0aW9uIHRvb2wgdG8gaGVscCBicmFuZHMgYW5kIHRlYW1zIGVuZ2FnZSB3aXRoIHRoZWlyIGZhbnMsIGNhcHR1cmUgZGF0YSBhbmQgYWN0aXZhdGUgc3BvbnNvcnMnLFxyXG4gICAgbG9jYXRpb246ICdTeWRuZXksIEF1c3RyYWxpYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICdCaW5kaU1hcHMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdCaW5kaU1hcHMgaXMgYW4gYXBwIGZvciBpbmRvb3IgbmF2aWdhdGlvbiAoc28ganVzdCBsaWtlIGdvb2dsZSBtYXBzLCBidXQgaW5kb29ycykgdGhhdCBldmVyeW9uZSBjYW4gdXNlLCBidXQgaXMgb3B0aW1pc2VkIGZvciBwZW9wbGUgd2l0aCB2aXNpb24gaW1wYWlybWVudCcsXHJcbiAgICBsb2NhdGlvbjogJ1N5ZG5leSwgQXVzdHJhbGlhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogJ0ZsaXBUaXggJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnUGxhY2VoIEZhbnMgbGVhdmUgZXZlbnRzIGVhcmx5LCBhbmQgRmxpcFRpeCBzZWxscyBicmFuZCBuZXcgdGlja2V0cyBmb3IgdGhlIHJlbWFpbmluZyB0aW1lIHRvIG5ldyBmYW5zLm9sZGVyJyxcclxuICAgIGxvY2F0aW9uOiAnTmV3cG9ydCBDb2FzdCwgVW5pdGVkIFN0YXRlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdGbG90ZXEnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdJb1Qgc29sdXRpb24gY29tcGFueSBkZWxpdmVyaW5nIHNvbHV0aW9ucyBpbiBmb29kIGFuZCBiZXZlcmFnZSBzcGFjZScsXHJcbiAgICBsb2NhdGlvbjogJ01lbGJvdXJuZSwgQXVzdHJhbGlhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0ZyaWVuZHMgb2YgTXIgRWQgJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRnJpZW5kcyBvZiBNciBFZCBpcyBhIFNhYVMgY29tcGFueSBmb2N1c2VkIG9uIHJhZGljYWxseSBpbXByb3ZpbmcgcmFjZWhvcnNlIG93bmVyc2hpcCB2aWEgYSBwZXJzb25hbGlzZWQgYW5kIGludHVpdGl2ZSBtb2JpbGUgYXBwIGNhbGxlZCDigJhGcmVk4oCZLiBGcmVkIGNvbm5lY3RzIG93bmVycyBhbmQgdGhlaXIgZnJpZW5kcyBzbyB0aGV5IGNhbiBzaGFyZSB0aGVpciByYWNpbmcgcGFzc2lvbi4gSXQgaXMgZGVzaWduZWQgdG8gbm90IG9ubHkgZGVteXN0aWZ5IHRoZSBvd25lcnNoaXAgZXhwZXJpZW5jZSBidXQgYWxzbyBlbmhhbmNlIGl0JyxcclxuICAgIGxvY2F0aW9uOiAnTWVsYm91cm5lLCBBdXN0cmFsaWEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiAnR2xvYmF0YWxlbnQnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHbG9iYXRhbGVudCBpcyBhIHNwb3J0cyBwbGF0Zm9ybSB3aGVyZSB5b3UgY2FuIGludmVzdCwgdHJhZGUgYW5kIHN1cHBvcnQgeW91ciBmYXZvdXJpdGUgY2x1YnMgYW5kIHNwb3J0cyBpZG9scy4gSXTigJlzIGxpa2UgaWYgeW91IGludmVzdCBpbiB0aGUgZWFybHkgYWdlIG9mIE1pY2hhZWwgSm9yZGFuIGNhcmVlciwgbm93IHlvdSB3b3VsZCBiZSBtaWxsaW9uYWlyZS4nLFxyXG4gICAgbG9jYXRpb246ICcgTG9uZG9uLCBVbml0ZWQgS2luZ2RvbScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIG5hbWU6ICdIdW1lbnNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnIEltbWVuc2VseSBodW1hbiByZWFsaXRpZXMsIHB1dHRpbmcgZmFucyBvbiB0aGUgZmllbGQgb2YgcGxheSBhY3Jvc3MgdGhlIHdoaXRlIGxpbmUsIG9uLWRlbWFuZCBvciBsaXZlLCBieSBkaWdpdGFsbHkgM0QgcmVjb25zdHJ1Y3RpbmcgcGxheWVycyBhbmQgYmFsbCBwaG90byByZWFsIGluIFZSIGFuZCBBUi4gV2UgZGVwbG95IG9uIHByb3ZlbiB0cmFuc2FjdGlvbmFsIHBsYXRmb3JtcyBhY3Jvc3Mgd2ViLCBtb2JpbGUgYW5kIEFSIFZSIGV5ZXdlYXInLFxyXG4gICAgbG9jYXRpb246ICdTeWRuZXksIEF1c3RyYWxpYScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIG5hbWU6ICdJbnRlbGxpQ1VQJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnIEludGVsbGlDVVAgaXMgYSBwYXRlbnRlZCBJT1QgYmFzZWQgcXVpY2ssIGNhc2hsZXNzIGJldmVyYWdlIGRpc3BlbnNpbmcgc3lzdGVtIHRoYXQgcmVkdWNlcyB3YXN0ZSwgaW5jcmVhc2VzIHByb2ZpdGFiaWxpdHkgYW5kIHByb3ZpZGVzIHVucHJlY2VkZW50ZWQgbGV2ZWxzIG9mIG1lcmNoYW50IGFuZCBjb25zdW1lciBkYXRhIGFuZCBlbmFibGVzIG1hcmtldGVycyB0byB0YWxrIHRvIGN1c3RvbWVycyBhdCBwb2ludCBvZiBjb25zdW1wdGlvbiAtIHRoZSBVYmVyIG9mIGJldmVyYWdlIGRpc3BlbnNpbmcnLFxyXG4gICAgbG9jYXRpb246ICdQb3J0IExvdWlzLCBNYXVyaXRpdXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBuYW1lOiAnU3BvcnRzQ3ViZSAnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdBIHR3by1zaWRlZCBtYXJrZXRwbGFjZSBmb3IgcmlnaHRzIGhvbGRlcnMgYW5kIHNwb25zb3JzIHRoYXQgc2F2ZXMgdmFsdWFibGUgdGltZSBhbmQgbW9uZXkgYnkgc3RyZWFtbGluaW5nIHRoZWlyIHNwb25zb3JzaGlwcycsXHJcbiAgICBsb2NhdGlvbjogJ01lbGJvdXJuZSwgQXVzdHJhbGlhJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMCxcclxuICAgIG5hbWU6ICdUcmVuZGlpICcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0FJIHBvd2VyZWQgZmFzaGlvbiBhbmQgcHJvZHVjdCBkaXNjb3ZlcnknLFxyXG4gICAgbG9jYXRpb246ICdCcmlzYmFuZSwgQXVzdHJhbGlhJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1RBUlRVUF9EQVRBO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgU3RhcnR1cExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdGFydHVwLWxpc3QnO1xyXG5pbXBvcnQgU1RBUlRVUF9EQVRBIGZyb20gJy4uLy4uL2hhcmQtZGF0YS9zdGFydHVwLWRhdGEnO1xyXG5cclxuLy8gVGhpcyBwYWdlIG1hcHMgdGhyb3VnaCBlYWNoIHN0YXJ0dXAsIHRoZSBtZW50b3JzIHdpbGwgc3VibWl0IHRoZSBmb3JtIHdoaWNoIGNyZWF0ZXMgdGhlaXJcclxuY2xhc3MgU3RhcnR1cHNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXJ0dXBzOiBTVEFSVFVQX0RBVEEsXHJcbiAgICAgIG1lbnRvckNob2ljZTogJycsXHJcbiAgICAgIG1lbnRvckNob2ljZXM6IFtdLCAvLyBJZiB1c2luZyByYWRpbyBidXR0b25zLCBtaWdodCBuZWVkIHRvIHN0b3JlIGVhY2ggc2VsZWN0aW9uIGluIGFuIGFycmF5XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW50b3JDaG9pY2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzdGFydHVwcywgbWVudG9yQ2hvaWNlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coeyBtZW50b3JDaG9pY2UgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhcnR1cHMtcGFnZSc+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIGFjdGlvbj0nJ1xyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge3N0YXJ0dXBzLm1hcCgoeyBpZCwgaGFuZGxlQ2hhbmdlLCAuLi5vdGhlclByb3BzIH0pID0+IChcclxuICAgICAgICAgICAgPFN0YXJ0dXBMaXN0XHJcbiAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2F2ZSBDaG9pY2VzPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwc1BhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==