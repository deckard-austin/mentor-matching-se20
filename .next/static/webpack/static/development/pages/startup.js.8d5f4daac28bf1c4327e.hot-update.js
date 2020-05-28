webpackHotUpdate("static\\development\\pages\\startup.js",{

/***/ "./pages/startup/index.js":
/*!********************************!*\
  !*** ./pages/startup/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\decka\\Desktop\\SBC2020\\mentor-matching\\pages\\startup\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var API_URL = '../api/mentors.js';

var fetcher = function fetcher(API_URL) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(API_URL).then(function (r) {
    return r.json();
  });
};

var MentorList = function MentorList() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(API_URL, fetcher),
      data = _useSWR.data,
      error = _useSWR.error,
      isValidating = _useSWR.isValidating,
      mutate = _useSWR.mutate;

  console.log({
    data: data
  }); // if (isValidating) return <div>Fetching data...</div>;
  // // If an error occured, show an error message
  // if (error) return <div>Failed to load.</div>;
  // // If there were no mentors found, show a message that says so
  // if (data.length === 0) return <div>No mentors found.</div>;
  // // Otherwise return a list of mentors and a button to manually refetch the mentors.

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.map(function (Mentor) {
    return __jsx("li", {
      key: mentor.MentorId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, mentor.fields[Name]);
  })), __jsx("button", {
    type: "button",
    onClick: mutate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Refresh Data")));
};

_s(MentorList, "VXm53AE3QEKvLhm+E3M9o/X+kNQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = MentorList;
/* harmony default export */ __webpack_exports__["default"] = (MentorList);

var _c;

$RefreshReg$(_c, "MentorList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFydHVwL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJNZW50b3JMaXN0IiwidXNlU1dSIiwiZGF0YSIsImVycm9yIiwiaXNWYWxpZGF0aW5nIiwibXV0YXRlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIk1lbnRvciIsIm1lbnRvciIsIk1lbnRvcklkIiwiZmllbGRzIiwiTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLG1CQUFoQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDRCxPQUFEO0FBQUEsU0FBYUUseURBQUssQ0FBQ0YsT0FBRCxDQUFMLENBQWVHLElBQWYsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsSUFBRixFQUFQO0FBQUEsR0FBcEIsQ0FBYjtBQUFBLENBQWhCOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxnQkFDdUJDLG1EQUFNLENBQUNQLE9BQUQsRUFBVUMsT0FBVixDQUQ3QjtBQUFBLE1BQ2ZPLElBRGUsV0FDZkEsSUFEZTtBQUFBLE1BQ1RDLEtBRFMsV0FDVEEsS0FEUztBQUFBLE1BQ0ZDLFlBREUsV0FDRkEsWUFERTtBQUFBLE1BQ1lDLE1BRFosV0FDWUEsTUFEWjs7QUFFdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVMLFFBQUksRUFBSkE7QUFBRixHQUFaLEVBRnVCLENBR3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxNQUFEO0FBQUEsV0FDUjtBQUFJLFNBQUcsRUFBRUMsTUFBTSxDQUFDQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJCRCxNQUFNLENBQUNFLE1BQVAsQ0FBY0MsSUFBZCxDQUEzQixDQURRO0FBQUEsR0FBVCxDQURILENBREYsRUFNRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRVIsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixDQURGLENBREY7QUFjRCxDQXZCRDs7R0FBTUwsVTtVQUMwQ0MsMkM7OztLQUQxQ0QsVTtBQXlCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHN0YXJ0dXAuanMuOGQ1ZjRkYWFjMjhiZjFjNDMyN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5jb25zdCBBUElfVVJMID0gJy4uL2FwaS9tZW50b3JzLmpzJztcclxuY29uc3QgZmV0Y2hlciA9IChBUElfVVJMKSA9PiBmZXRjaChBUElfVVJMKS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcblxyXG5jb25zdCBNZW50b3JMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzVmFsaWRhdGluZywgbXV0YXRlIH0gPSB1c2VTV1IoQVBJX1VSTCwgZmV0Y2hlcik7XHJcbiAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xyXG4gIC8vIGlmIChpc1ZhbGlkYXRpbmcpIHJldHVybiA8ZGl2PkZldGNoaW5nIGRhdGEuLi48L2Rpdj47XHJcbiAgLy8gLy8gSWYgYW4gZXJyb3Igb2NjdXJlZCwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXHJcbiAgLy8gaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZC48L2Rpdj47XHJcbiAgLy8gLy8gSWYgdGhlcmUgd2VyZSBubyBtZW50b3JzIGZvdW5kLCBzaG93IGEgbWVzc2FnZSB0aGF0IHNheXMgc29cclxuICAvLyBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiA8ZGl2Pk5vIG1lbnRvcnMgZm91bmQuPC9kaXY+O1xyXG4gIC8vIC8vIE90aGVyd2lzZSByZXR1cm4gYSBsaXN0IG9mIG1lbnRvcnMgYW5kIGEgYnV0dG9uIHRvIG1hbnVhbGx5IHJlZmV0Y2ggdGhlIG1lbnRvcnMuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2RhdGEubWFwKChNZW50b3IpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17bWVudG9yLk1lbnRvcklkfT57bWVudG9yLmZpZWxkc1tOYW1lXX08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17bXV0YXRlfT5cclxuICAgICAgICAgIFJlZnJlc2ggRGF0YVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW50b3JMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9