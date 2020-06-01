webpackHotUpdate("static\\development\\pages\\mentor\\[mentor-id].js",{

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

  var handleChange = function handleChange(e) {
    setMentorChoice(_objectSpread(_objectSpread({}, mentorChoice), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(e) {
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
      handleChange: handleChange,
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
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW50b3IvW21lbnRvci1pZF0uanMiXSwibmFtZXMiOlsiU3RhcnR1cHNQYWdlIiwic3RhcnR1cHMiLCJTVEFSVFVQX0RBVEEiLCJ1c2VTdGF0ZSIsIkh1bWVuc2UiLCJtZW50b3JDaG9pY2UiLCJzZXRNZW50b3JDaG9pY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaWQiLCJvdGhlclByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQWpCOztBQUR5QixrQkFFZUMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFELENBRnZCO0FBQUEsTUFFbEJDLFlBRmtCO0FBQUEsTUFFSkMsZUFGSTs7QUFJekIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCRixtQkFBZSxpQ0FBTUQsWUFBTixxR0FBcUJHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUE5QixFQUFxQ0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQTlDLEdBQWY7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQsRUFBTztBQUMxQkEsS0FBQyxDQUFDSyxjQUFGO0FBQ0QsR0FGRDs7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVYsZ0JBQVksRUFBWkE7QUFBRixHQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBQyxFQURUO0FBRUUsWUFBUTtBQUFBLGtNQUFFLGlCQUFPRyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkEsaUJBQUMsQ0FBQ0ssY0FBRjs7QUFEUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHWixRQUFRLENBQUNlLEdBQVQsQ0FBYTtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9WLFlBQVAsU0FBT0EsWUFBUDtBQUFBLFFBQXdCVyxVQUF4Qjs7QUFBQSxXQUNaLE1BQUMsZ0VBQUQ7QUFBYSxTQUFHLEVBQUVEO0FBQWxCLE9BQTBCQyxVQUExQjtBQUFzQyxrQkFBWSxFQUFFWCxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQSxHQUFiLENBTEgsRUFRRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsQ0FERixDQURGO0FBY0QsQ0EzQkQ7O0dBQU1QLFk7O0tBQUFBLFk7QUE2QlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtZW50b3JcXFttZW50b3ItaWRdLmpzLmY3NjVjMzhjNjVlOThmN2FlNjJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCBTdGFydHVwTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0YXJ0dXAtbGlzdCc7XHJcbmltcG9ydCBTVEFSVFVQX0RBVEEgZnJvbSAnLi4vLi4vaGFyZC1kYXRhL3N0YXJ0dXAtZGF0YSc7XHJcblxyXG4vLyBUaGlzIHBhZ2UgbWFwcyB0aHJvdWdoIGVhY2ggc3RhcnR1cCwgdGhlIG1lbnRvcnMgd2lsbCBzdWJtaXQgdGhlIGZvcm0gd2hpY2ggY3JlYXRlcyB0aGVpclxyXG5jb25zdCBTdGFydHVwc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnR1cHMgPSBTVEFSVFVQX0RBVEE7XHJcbiAgY29uc3QgW21lbnRvckNob2ljZSwgc2V0TWVudG9yQ2hvaWNlXSA9IHVzZVN0YXRlKHsgSHVtZW5zZTogZmFsc2UgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRNZW50b3JDaG9pY2UoeyAuLi5tZW50b3JDaG9pY2UsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyh7IG1lbnRvckNob2ljZSB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0YXJ0dXBzLXBhZ2UnPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGFjdGlvbj0nJ1xyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtzdGFydHVwcy5tYXAoKHsgaWQsIGhhbmRsZUNoYW5nZSwgLi4ub3RoZXJQcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgICA8U3RhcnR1cExpc3Qga2V5PXtpZH0gey4uLm90aGVyUHJvcHN9IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TYXZlIENob2ljZXM8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0dXBzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==