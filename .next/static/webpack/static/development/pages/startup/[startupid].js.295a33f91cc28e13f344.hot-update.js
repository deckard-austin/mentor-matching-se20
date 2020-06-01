webpackHotUpdate("static\\development\\pages\\startup\\[startupid].js",{

/***/ "./pages/startup/[startupid].js":
/*!**************************************!*\
  !*** ./pages/startup/[startupid].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\decka\\Desktop\\SBC2020\\mentor-matching\\pages\\startup\\[startupid].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var MentorList = function MentorList() {
  _s();

  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var API_URL = "/api/mentors?startup=".concat(Router.query.startupid);

  var fetcher = function fetcher(API_URL) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(API_URL).then(function (r) {
      return r.json();
    });
  };

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(API_URL, fetcher),
      data = _useSWR.data,
      error = _useSWR.error,
      isValidating = _useSWR.isValidating,
      mutate = _useSWR.mutate;

  console.log({
    data: data
  }); // base('Mentors')
  //   .select({
  //     view: 'Mentors',
  //   })
  //   .firstPage(function (err, records) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     records.forEach(function (record) {
  //       console.log('Retrieved', record.get('Name'));
  //     });
  //   });
  // if (isValidating) return <div>Fetching data...</div>;
  // // If an error occured, show an error message
  // if (error) return <div>Failed to load.</div>;
  // // If there were no mentors found, show a message that says so
  // if (data.length === 0) return <div>No mentors found.</div>;
  // // Otherwise return a list of mentors and a button to manually refetch the mentors.
  // I know this is incorrectly mapping through, just trying to access the records from the API

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, data.map(function (mentor) {
    return __jsx("li", {
      key: mentor.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, mentor.fields[Name]);
  })), __jsx("button", {
    type: "button",
    onClick: mutate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Refresh Data")));
};

_s(MentorList, "Iszm042nTwWQKLA+oMIrdIctXMQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFydHVwL1tzdGFydHVwaWRdLmpzIl0sIm5hbWVzIjpbIk1lbnRvckxpc3QiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBUElfVVJMIiwicXVlcnkiLCJzdGFydHVwaWQiLCJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwibWVudG9yIiwiaWQiLCJmaWVsZHMiLCJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sa0NBQTJCRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsU0FBeEMsQ0FBYjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDSCxPQUFEO0FBQUEsV0FBYUkseURBQUssQ0FBQ0osT0FBRCxDQUFMLENBQWVLLElBQWYsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsSUFBRixFQUFQO0FBQUEsS0FBcEIsQ0FBYjtBQUFBLEdBQWhCOztBQUh1QixnQkFLdUJDLG1EQUFNLENBQUNSLE9BQUQsRUFBVUcsT0FBVixDQUw3QjtBQUFBLE1BS2ZNLElBTGUsV0FLZkEsSUFMZTtBQUFBLE1BS1RDLEtBTFMsV0FLVEEsS0FMUztBQUFBLE1BS0ZDLFlBTEUsV0FLRkEsWUFMRTtBQUFBLE1BS1lDLE1BTFosV0FLWUEsTUFMWjs7QUFNdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVMLFFBQUksRUFBSkE7QUFBRixHQUFaLEVBTnVCLENBUXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsTUFBRDtBQUFBLFdBQ1I7QUFBSSxTQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQkQsTUFBTSxDQUFDRSxNQUFQLENBQWNDLElBQWQsQ0FBckIsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBTUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUVQLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsQ0FERixDQURGO0FBY0QsQ0E1Q0Q7O0dBQU1mLFU7VUFDV0UscUQsRUFJK0JTLDJDOzs7S0FMMUNYLFU7QUE4Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdGFydHVwXFxbc3RhcnR1cGlkXS5qcy4yOTVhMzNmOTFjYzI4ZTEzZjM0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTWVudG9yTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBBUElfVVJMID0gYC9hcGkvbWVudG9ycz9zdGFydHVwPSR7Um91dGVyLnF1ZXJ5LnN0YXJ0dXBpZH1gO1xyXG4gIGNvbnN0IGZldGNoZXIgPSAoQVBJX1VSTCkgPT4gZmV0Y2goQVBJX1VSTCkudGhlbigocikgPT4gci5qc29uKCkpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcsIG11dGF0ZSB9ID0gdXNlU1dSKEFQSV9VUkwsIGZldGNoZXIpO1xyXG4gIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcclxuXHJcbiAgLy8gYmFzZSgnTWVudG9ycycpXHJcbiAgLy8gICAuc2VsZWN0KHtcclxuICAvLyAgICAgdmlldzogJ01lbnRvcnMnLFxyXG4gIC8vICAgfSlcclxuICAvLyAgIC5maXJzdFBhZ2UoZnVuY3Rpb24gKGVyciwgcmVjb3Jkcykge1xyXG4gIC8vICAgICBpZiAoZXJyKSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIC8vICAgICAgIHJldHVybjtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQnLCByZWNvcmQuZ2V0KCdOYW1lJykpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyBpZiAoaXNWYWxpZGF0aW5nKSByZXR1cm4gPGRpdj5GZXRjaGluZyBkYXRhLi4uPC9kaXY+O1xyXG4gIC8vIC8vIElmIGFuIGVycm9yIG9jY3VyZWQsIHNob3cgYW4gZXJyb3IgbWVzc2FnZVxyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQuPC9kaXY+O1xyXG4gIC8vIC8vIElmIHRoZXJlIHdlcmUgbm8gbWVudG9ycyBmb3VuZCwgc2hvdyBhIG1lc3NhZ2UgdGhhdCBzYXlzIHNvXHJcbiAgLy8gaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gPGRpdj5ObyBtZW50b3JzIGZvdW5kLjwvZGl2PjtcclxuICAvLyAvLyBPdGhlcndpc2UgcmV0dXJuIGEgbGlzdCBvZiBtZW50b3JzIGFuZCBhIGJ1dHRvbiB0byBtYW51YWxseSByZWZldGNoIHRoZSBtZW50b3JzLlxyXG5cclxuICAvLyBJIGtub3cgdGhpcyBpcyBpbmNvcnJlY3RseSBtYXBwaW5nIHRocm91Z2gsIGp1c3QgdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcmVjb3JkcyBmcm9tIHRoZSBBUElcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKG1lbnRvcikgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXttZW50b3IuaWR9PnttZW50b3IuZmllbGRzW05hbWVdfTwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXttdXRhdGV9PlxyXG4gICAgICAgICAgUmVmcmVzaCBEYXRhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnRvckxpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=