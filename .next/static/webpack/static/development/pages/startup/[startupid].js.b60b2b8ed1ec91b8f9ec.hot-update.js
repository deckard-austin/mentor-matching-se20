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
  }); // if (isValidating) return <div>Fetching data...</div>;
  // // If an error occured, show an error message
  // if (error) return <div>Failed to load.</div>;
  // // If there were no mentors found, show a message that says so

  if (!data.length === 0) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 34
    }
  }, "No mentors found."); // // Otherwise return a list of mentors and a button to manually refetch the mentors.
  // I know this is incorrectly mapping through, just trying to access the records from the API

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, data.map(function (mentor) {
    return __jsx("li", {
      key: mentor.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, mentor.fields["Mentor Name"]);
  })), __jsx("button", {
    type: "button",
    onClick: mutate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGFydHVwL1tzdGFydHVwaWRdLmpzIl0sIm5hbWVzIjpbIk1lbnRvckxpc3QiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBUElfVVJMIiwicXVlcnkiLCJzdGFydHVwaWQiLCJmZXRjaGVyIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwibWVudG9yIiwiaWQiLCJmaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxrQ0FBMkJGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxTQUF4QyxDQUFiOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNILE9BQUQ7QUFBQSxXQUFhSSx5REFBSyxDQUFDSixPQUFELENBQUwsQ0FBZUssSUFBZixDQUFvQixVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxJQUFGLEVBQVA7QUFBQSxLQUFwQixDQUFiO0FBQUEsR0FBaEI7O0FBSHVCLGdCQUt1QkMsbURBQU0sQ0FBQ1IsT0FBRCxFQUFVRyxPQUFWLENBTDdCO0FBQUEsTUFLZk0sSUFMZSxXQUtmQSxJQUxlO0FBQUEsTUFLVEMsS0FMUyxXQUtUQSxLQUxTO0FBQUEsTUFLRkMsWUFMRSxXQUtGQSxZQUxFO0FBQUEsTUFLWUMsTUFMWixXQUtZQSxNQUxaOztBQU12QkMsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUwsUUFBSSxFQUFKQTtBQUFGLEdBQVosRUFOdUIsQ0FRdkI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSSxDQUFDQSxJQUFJLENBQUNNLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0IsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQLENBWkQsQ0FhdkI7QUFFQTs7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixJQUFJLENBQUNPLEdBQUwsQ0FBUyxVQUFDQyxNQUFEO0FBQUEsV0FDUjtBQUFJLFNBQUcsRUFBRUEsTUFBTSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCRCxNQUFNLENBQUNFLE1BQVAsZUFBckIsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBTUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUVQLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsQ0FERixDQURGO0FBY0QsQ0E5QkQ7O0dBQU1mLFU7VUFDV0UscUQsRUFJK0JTLDJDOzs7S0FMMUNYLFU7QUFnQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdGFydHVwXFxbc3RhcnR1cGlkXS5qcy5iNjBiMmI4ZWQxZWM5MWI4ZjllYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTWVudG9yTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBBUElfVVJMID0gYC9hcGkvbWVudG9ycz9zdGFydHVwPSR7Um91dGVyLnF1ZXJ5LnN0YXJ0dXBpZH1gO1xyXG4gIGNvbnN0IGZldGNoZXIgPSAoQVBJX1VSTCkgPT4gZmV0Y2goQVBJX1VSTCkudGhlbigocikgPT4gci5qc29uKCkpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcsIG11dGF0ZSB9ID0gdXNlU1dSKEFQSV9VUkwsIGZldGNoZXIpO1xyXG4gIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcclxuXHJcbiAgLy8gaWYgKGlzVmFsaWRhdGluZykgcmV0dXJuIDxkaXY+RmV0Y2hpbmcgZGF0YS4uLjwvZGl2PjtcclxuICAvLyAvLyBJZiBhbiBlcnJvciBvY2N1cmVkLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcclxuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkLjwvZGl2PjtcclxuICAvLyAvLyBJZiB0aGVyZSB3ZXJlIG5vIG1lbnRvcnMgZm91bmQsIHNob3cgYSBtZXNzYWdlIHRoYXQgc2F5cyBzb1xyXG4gIGlmICghZGF0YS5sZW5ndGggPT09IDApIHJldHVybiA8ZGl2Pk5vIG1lbnRvcnMgZm91bmQuPC9kaXY+O1xyXG4gIC8vIC8vIE90aGVyd2lzZSByZXR1cm4gYSBsaXN0IG9mIG1lbnRvcnMgYW5kIGEgYnV0dG9uIHRvIG1hbnVhbGx5IHJlZmV0Y2ggdGhlIG1lbnRvcnMuXHJcblxyXG4gIC8vIEkga25vdyB0aGlzIGlzIGluY29ycmVjdGx5IG1hcHBpbmcgdGhyb3VnaCwganVzdCB0cnlpbmcgdG8gYWNjZXNzIHRoZSByZWNvcmRzIGZyb20gdGhlIEFQSVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtkYXRhLm1hcCgobWVudG9yKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e21lbnRvci5pZH0+e21lbnRvci5maWVsZHNbYE1lbnRvciBOYW1lYF19PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e211dGF0ZX0+XHJcbiAgICAgICAgICBSZWZyZXNoIERhdGFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudG9yTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==