webpackHotUpdate("static\\development\\pages\\mentor\\[mentor-id].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./pages/mentor/[mentor-id].js":
/*!*************************************!*\
  !*** ./pages/mentor/[mentor-id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_startup_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/startup-list */ "./components/startup-list.js");
/* harmony import */ var _hard_data_startup_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hard-data/startup-data */ "./hard-data/startup-data.js");






var _this = undefined,
    _jsxFileName = "C:\\Users\\decka\\Desktop\\SBC2020\\mentor-matching\\pages\\mentor\\[mentor-id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // This page maps through each startup, the mentors will submit the form which creates their

var StartupsPage = function StartupsPage() {
  _s();

  var startups = _hard_data_startup_data__WEBPACK_IMPORTED_MODULE_9__["default"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    Humense: false
  }),
      mentorChoice = _useState[0],
      setMentorChoice = _useState[1];

  handleChange = function handleChange(e) {
    setMentorChoice(_objectSpread(_objectSpread({}, mentorChoice), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, e.target.name, e.target.value)));
  };

  handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  console.log({
    mentorChoice: mentorChoice
  });
  return __jsx("div", {
    className: "startups-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "",
    onSubmit: /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, startups.map(function (_ref2) {
    var id = _ref2.id,
        handleChange = _ref2.handleChange,
        otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["id", "handleChange"]);

    return __jsx(_components_startup_list__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: id
    }, otherProps, {
      handleChange: _this.handleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }));
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Save Choices")));
};

_s(StartupsPage, "2FLluniT7WM6/tRiQmhylJ4w/90=");

_c = StartupsPage;
/* harmony default export */ __webpack_exports__["default"] = (StartupsPage);

var _c;

$RefreshReg$(_c, "StartupsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW50b3IvW21lbnRvci1pZF0uanMiXSwibmFtZXMiOlsiU3RhcnR1cHNQYWdlIiwic3RhcnR1cHMiLCJTVEFSVFVQX0RBVEEiLCJ1c2VTdGF0ZSIsIkh1bWVuc2UiLCJtZW50b3JDaG9pY2UiLCJzZXRNZW50b3JDaG9pY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaWQiLCJvdGhlclByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQWpCOztBQUR5QixrQkFFZUMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFELENBRnZCO0FBQUEsTUFFbEJDLFlBRmtCO0FBQUEsTUFFSkMsZUFGSTs7QUFJekJDLGNBQVksR0FBRyxzQkFBQ0MsQ0FBRCxFQUFPO0FBQ3BCRixtQkFBZSxpQ0FBTUQsWUFBTixxR0FBcUJHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUE5QixFQUFxQ0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQTlDLEdBQWY7QUFDRCxHQUZEOztBQUlBQyxjQUFZLEdBQUcsc0JBQUNKLENBQUQsRUFBTztBQUNwQkEsS0FBQyxDQUFDSyxjQUFGO0FBQ0QsR0FGRDs7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVYsZ0JBQVksRUFBWkE7QUFBRixHQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBQyxFQURUO0FBRUUsWUFBUTtBQUFBLGtNQUFFLGlCQUFPRyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkEsaUJBQUMsQ0FBQ0ssY0FBRjs7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHWixRQUFRLENBQUNlLEdBQVQsQ0FBYTtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9WLFlBQVAsU0FBT0EsWUFBUDtBQUFBLFFBQXdCVyxVQUF4Qjs7QUFBQSxXQUNaLE1BQUMsZ0VBQUQ7QUFDRSxTQUFHLEVBQUVEO0FBRFAsT0FFTUMsVUFGTjtBQUdFLGtCQUFZLEVBQUUsS0FBSSxDQUFDWCxZQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQSxHQUFiLENBTEgsRUFZRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkYsQ0FERixDQURGO0FBa0JELENBL0JEOztHQUFNUCxZOztLQUFBQSxZO0FBaUNTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWVudG9yXFxbbWVudG9yLWlkXS5qcy5jYWZkOTVlNmEwZjU2ZjU4NzI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgU3RhcnR1cExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdGFydHVwLWxpc3QnO1xyXG5pbXBvcnQgU1RBUlRVUF9EQVRBIGZyb20gJy4uLy4uL2hhcmQtZGF0YS9zdGFydHVwLWRhdGEnO1xyXG5cclxuLy8gVGhpcyBwYWdlIG1hcHMgdGhyb3VnaCBlYWNoIHN0YXJ0dXAsIHRoZSBtZW50b3JzIHdpbGwgc3VibWl0IHRoZSBmb3JtIHdoaWNoIGNyZWF0ZXMgdGhlaXJcclxuY29uc3QgU3RhcnR1cHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXJ0dXBzID0gU1RBUlRVUF9EQVRBO1xyXG4gIGNvbnN0IFttZW50b3JDaG9pY2UsIHNldE1lbnRvckNob2ljZV0gPSB1c2VTdGF0ZSh7IEh1bWVuc2U6IGZhbHNlIH0pO1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TWVudG9yQ2hvaWNlKHsgLi4ubWVudG9yQ2hvaWNlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coeyBtZW50b3JDaG9pY2UgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdzdGFydHVwcy1wYWdlJz5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBhY3Rpb249JydcclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9fT5cclxuICAgICAgICB7c3RhcnR1cHMubWFwKCh7IGlkLCBoYW5kbGVDaGFuZ2UsIC4uLm90aGVyUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgICAgPFN0YXJ0dXBMaXN0XHJcbiAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U2F2ZSBDaG9pY2VzPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydHVwc1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=