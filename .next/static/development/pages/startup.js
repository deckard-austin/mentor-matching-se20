(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\startup.js"],{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fstartup&absolutePagePath=C%3A%5CUsers%5Cdecka%5CDesktop%5CSBC2020%5Cmentor-matching%5Cpages%5Cstartup%5Cindex.js!./":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fstartup&absolutePagePath=C%3A%5CUsers%5Cdecka%5CDesktop%5CSBC2020%5Cmentor-matching%5Cpages%5Cstartup%5Cindex.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/startup",
      function () {
        return __webpack_require__(/*! ./pages/startup/index.js */ "./pages/startup/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cache; });
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");


class Cache {
    constructor(initialData = {}) {
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    get(key) {
        const [_key] = this.serializeKey(key);
        return this.__cache.get(_key);
    }
    set(key, value, shouldNotify = true) {
        const [_key] = this.serializeKey(key);
        this.__cache.set(_key, value);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, value, false);
        this.notify();
    }
    keys() {
        return Array.from(this.__cache.keys());
    }
    has(key) {
        const [_key] = this.serializeKey(key);
        return this.__cache.has(_key);
    }
    clear(shouldNotify = true) {
        if (shouldNotify)
            this.__cache.forEach(key => Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false));
        this.__cache.clear();
        this.notify();
    }
    delete(key, shouldNotify = true) {
        const [_key] = this.serializeKey(key);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);
        this.__cache.delete(_key);
        this.notify();
    }
    // TODO: introduce namespace for the cache
    serializeKey(key) {
        let args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        const errorKey = key ? 'err@' + key : '';
        return [key, args, errorKey];
    }
    subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        let isSubscribed = true;
        this.__listeners.push(listener);
        return () => {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            const index = this.__listeners.indexOf(listener);
            if (index > -1) {
                this.__listeners[index] = this.__listeners[this.__listeners.length - 1];
                this.__listeners.length--;
            }
        };
    }
    // Notify Cache subscribers about a change in the cache
    notify() {
        for (let listener of this.__listeners) {
            listener();
        }
    }
}


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS, FOCUS_REVALIDATORS, CACHE_REVALIDATORS, MUTATION_TS, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES", function() { return CONCURRENT_PROMISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES_TS", function() { return CONCURRENT_PROMISES_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_REVALIDATORS", function() { return FOCUS_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_REVALIDATORS", function() { return CACHE_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION_TS", function() { return MUTATION_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/swr/node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");




// cache
const cache = new _cache__WEBPACK_IMPORTED_MODULE_3__["default"]();
// state managers
const CONCURRENT_PROMISES = {};
const CONCURRENT_PROMISES_TS = {};
const FOCUS_REVALIDATORS = {};
const CACHE_REVALIDATORS = {};
const MUTATION_TS = {};
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (config.errorRetryCount && opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    const count = Math.min(opts.retryCount || 0, 8);
    const timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
const slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
const defaultConfig = {
    // events
    onLoadingSlow: () => { },
    onSuccess: () => { },
    onError: () => { },
    onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a
};
// Focus revalidate
let eventsBinded = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
    const revalidate = () => {
        if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_2__["default"])())
            return;
        for (let key in FOCUS_REVALIDATORS) {
            if (FOCUS_REVALIDATORS[key][0])
                FOCUS_REVALIDATORS[key][0]();
        }
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
    // only bind the events once
    eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRPages, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-pages */ "./node_modules/swr/esm/use-swr-pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__["useSWRPages"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
// counter of the key
let counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    let key = 'arg';
    for (let i = 0; i < args.length; ++i) {
        let _hash;
        if (args[i] === null || typeof args[i] !== 'object') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-document-visible.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocumentVisible; });
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-online.js":
/*!************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-online.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOnline; });
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/throttle.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/libs/throttle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, interval) {
    let pending = false;
    return (...args) => {
        if (pending)
            return;
        pending = true;
        fn(...args);
        setTimeout(() => (pending = false), interval);
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-pages.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/use-swr-pages.js ***!
  \***********************************************/
/*! exports provided: useSWRPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return useSWRPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");


/*
The idea

A "Page" component renders the content of 1 API request, it accepts an offset (in this example it's from),
uses a SWR hook (useSWR(API + '?limit=' + limit + '&from=' + from)) and returns items (Projects).

The UI:
      +------------------------------------------+
      |   Projects                               |
+------------------------------------------------------+
|     |   +----------------+                     |     |
|     |                                          |     |
|     |   +------------+                         |     |
|     |                                          |     +--> 1 Page
|     |   +-----------------+                    |     |
|     |                                          |     |  /projects/list?limit=4
|     |   +---------+                            |     |
+------------------------------------------------------+
      |                                          |
      |   +------------+                         |     +  /projects/list?limit=4&from=123
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |   +---------+                            |     |
      |                                          |     |
      |   +--------------+                       |     +
      |                                          |
      |   +-------------------+                  |     +  /projects/list?limit=4&from=456
      |                                          |     |
      |   +------------+                         |     |
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |                                          |     +

The API
// (inside `render`)

function App () {
  const {
    pages,    // an array of each page component
    pageSWRs, // an array of SWRs of each page
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore
  } = useSWRPages(
    'project-page', // key of this page

    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(API + '?limit=10&from=' + offset) // request projects with offset
      )
      if (!data) return <Placeholder>
      return data.projects.map(project => <Card project={project} team={team}>)
    },
    // ========

    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    data => data && data.length >= 10 ? data[data.length - 1].createdAt : null,

    // (optional) outside deps of your Page component. in this case it's empty
    []
  )

  // ...

  if (isEmpty) return <EmptyProjectsPage/>

  return <div>
    {pages}
    {isReachingEnd
      ? null
      : <button loading={isLoadingMore} onClick={loadMore}>Load More</button>}
  </div>
}
*/
const pageCacheMap = new Map();
function useSWRPages(pageKey, pageFn, SWRToOffset, deps = []) {
    const pageCountKey = `_swr_page_count_` + pageKey;
    const pageOffsetKey = `_swr_page_offset_` + pageKey;
    const [pageCount, setPageCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountKey) || 1);
    const [pageOffsets, setPageOffsets] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageOffsetKey) || [null]);
    const [pageSWRs, setPageSWRs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
    const pageFnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(pageFn);
    const emptyPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // Page component (wraps `pageFn`)
    // for performance reason we need to memorize it
    const Page = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(props => {
        // render the page component
        const dataList = pageFnRef.current(props);
        // if dataList is [], we can assume this page is empty
        // TODO: this API is not stable
        if (dataList && !dataList.length) {
            emptyPageRef.current = true;
        }
        else {
            emptyPageRef.current = false;
        }
        return dataList;
    }, []);
    // Doesn't have a next page
    const isReachingEnd = pageOffsets[pageCount] === null;
    const isLoadingMore = pageCount === pageOffsets.length;
    const isEmpty = isReachingEnd && pageCount === 1 && emptyPageRef.current;
    const loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (isLoadingMore || isReachingEnd)
            return;
        setPageCount(c => {
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountKey, c + 1);
            return c + 1;
        });
    }, [isLoadingMore || isReachingEnd]);
    const _pageFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageFn, deps);
    pageFnRef.current = _pageFn;
    const pages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const getWithSWR = id => swr => {
            if (!pageSWRs[id] ||
                pageSWRs[id].data !== swr.data ||
                pageSWRs[id].error !== swr.error ||
                pageSWRs[id].revalidate !== swr.revalidate) {
                // hoist side effects: setPageSWRs and setPageOffsets -- https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
                setTimeout(() => {
                    setPageSWRs(swrs => {
                        const _swrs = [...swrs];
                        _swrs[id] = {
                            data: swr.data,
                            error: swr.error,
                            revalidate: swr.revalidate,
                            isValidating: swr.isValidating,
                            mutate: swr.mutate
                        };
                        return _swrs;
                    });
                    if (typeof swr.data !== 'undefined') {
                        // set next page's offset
                        const newPageOffset = SWRToOffset(swr, id);
                        if (pageOffsets[id + 1] !== newPageOffset) {
                            setPageOffsets(arr => {
                                const _arr = [...arr];
                                _arr[id + 1] = newPageOffset;
                                _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageOffsetKey, _arr);
                                return _arr;
                            });
                        }
                    }
                });
            }
            return swr;
        };
        // render each page
        const p = [];
        if (!pageCacheMap.has(pageKey)) {
            pageCacheMap.set(pageKey, []);
        }
        const pageCache = pageCacheMap.get(pageKey);
        for (let i = 0; i < pageCount; ++i) {
            if (!pageCache[i] ||
                pageCache[i].offset !== pageOffsets[i] ||
                pageCache[i].pageFn !== _pageFn) {
                // when props change or at init
                // render the page and cache it
                pageCache[i] = {
                    component: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, { key: `page-${pageOffsets[i]}-${i}`, offset: pageOffsets[i], withSWR: getWithSWR(i) })),
                    pageFn: _pageFn,
                    offset: pageOffsets[i]
                };
            }
            p.push(pageCache[i].component);
        }
        return p;
    }, [_pageFn, pageCount, pageSWRs, pageOffsets, pageKey]);
    return {
        pages,
        pageCount,
        pageSWRs,
        isLoadingMore,
        isReachingEnd,
        isEmpty,
        loadMore
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "./node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");






const IS_SERVER = typeof window === 'undefined';
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
const trigger = (_key, shouldRevalidate = true) => {
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    const [key, , keyErr] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    if (!key)
        return;
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        const currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        const currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](shouldRevalidate, currentData, currentError, i > 0);
        }
    }
};
const broadcastState = (key, data, error) => {
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error);
        }
    }
};
const mutate = async (_key, _data, shouldRevalidate = true) => {
    const [key] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    if (!key)
        return;
    // if there is no new data, call revalidate against the key
    if (typeof _data === 'undefined')
        return trigger(_key, shouldRevalidate);
    // update timestamp
    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
    let data, error;
    if (_data && typeof _data === 'function') {
        // `_data` is a function, call it passing current cache value
        try {
            data = await _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
        }
        catch (err) {
            error = err;
        }
    }
    else if (_data && typeof _data.then === 'function') {
        // `_data` is a promise
        try {
            data = await _data;
        }
        catch (err) {
            error = err;
        }
    }
    else {
        data = _data;
    }
    if (typeof data !== 'undefined') {
        // update cached data, avoid notifying from the cache
        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data, false);
    }
    // update existing SWR Hooks' state
    const updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (updaters) {
        for (let i = 0; i < updaters.length; ++i) {
            updaters[i](!!shouldRevalidate, data, error, i > 0);
        }
    }
    // throw error or return data to be used by caller of mutate
    if (error)
        throw error;
    return data;
};
function useSWR(...args) {
    let _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    const [key, fnArgs, keyErr] = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key);
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"]), config);
    if (typeof fn === 'undefined') {
        // use a global fetcher
        fn = config.fetcher;
    }
    const initialData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
    const initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    const stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    const stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: false
    });
    const rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
    let dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
        let shouldUpdateState = false;
        for (let k in payload) {
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    const unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    const boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((data, shouldRevalidate) => {
        return mutate(key, data, shouldRevalidate);
    }, [key]);
    // start a revalidation
    const revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (revalidateOpts = {}) => {
        if (!key || !fn)
            return false;
        if (unmountedRef.current)
            return false;
        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
        let loading = true;
        let shouldDeduping = typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] !== 'undefined' && revalidateOpts.dedupe;
        // start fetching
        try {
            dispatch({
                isValidating: true
            });
            let newData;
            let startAt;
            if (shouldDeduping) {
                // there's already an ongoing request,
                // this one needs to be deduplicated.
                startAt = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                newData = await _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            else {
                // if not deduping the request (hard revalidate) but
                // there're other ongoing request(s) at the same time,
                // we need to ignore the other result(s) to avoid
                // possible race conditions:
                // req1------------------>res1
                //      req2-------->res2
                // in that case, the second response should not be overridden
                // by the first one.
                if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                    // we can mark it as a mutation to ignore
                    // all requests which are fired before this one
                    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                }
                // if no cache being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                    setTimeout(() => {
                        if (loading)
                            config.onLoadingSlow(key, config);
                    }, config.loadingTimeout);
                }
                if (fnArgs !== null) {
                    _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(...fnArgs);
                }
                else {
                    _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(key);
                }
                _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key] = startAt = Date.now();
                newData = await _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                setTimeout(() => {
                    delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                    delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                }, config.dedupingInterval);
                // trigger the success event,
                // only do this for the original request.
                config.onSuccess(newData, key, config);
            }
            // if the revalidation happened earlier than the local mutation,
            // we have to ignore the result because it could override.
            // meanwhile, a new revalidation should be triggered by the mutation.
            if (_config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] && startAt <= _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key]) {
                dispatch({ isValidating: false });
                return false;
            }
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData, false);
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined, false);
            // new state for the reducer
            const newState = {
                isValidating: false
            };
            if (typeof stateRef.current.error !== 'undefined') {
                // we don't have an error
                newState.error = undefined;
            }
            if (!config.compare(stateRef.current.data, newData)) {
                // deep compare to avoid extra re-render
                // data changed
                newState.data = newData;
            }
            // merge the new state
            dispatch(newState);
            if (!shouldDeduping) {
                // also update other hooks
                broadcastState(key, newData, undefined);
            }
        }
        catch (err) {
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err, false);
            // get a new error
            // don't use deep equal for errors
            if (stateRef.current.error !== err) {
                // we keep the stale data
                dispatch({
                    isValidating: false,
                    error: err
                });
                if (!shouldDeduping) {
                    // also broadcast to update other hooks
                    broadcastState(key, undefined, err);
                }
            }
            // events and retry
            config.onError(err, key, config);
            if (config.shouldRetryOnError) {
                // when retrying, we always enable deduping
                const retryCount = (revalidateOpts.retryCount || 0) + 1;
                config.onErrorRetry(err, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount }));
            }
        }
        loading = false;
        return true;
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(() => {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        const currentHookData = stateRef.current.data;
        const latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key ||
            !config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
            keyRef.current = key;
        }
        // revalidate with deduping
        const softRevalidate = () => revalidate({ dedupe: true });
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined' &&
                !IS_SERVER &&
                window['requestIdleCallback']) {
                // delay revalidate if there's cache
                // to not block the rendering
                window['requestIdleCallback'](softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        // whenever the window gets focused, revalidate
        let onFocus;
        if (config.revalidateOnFocus) {
            // throttle: avoid being called twice from both listeners
            // and tabs being switched quickly
            onFocus = Object(_libs_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(softRevalidate, config.focusThrottleInterval);
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key] = [onFocus];
            }
            else {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key].push(onFocus);
            }
        }
        // register global cache update listener
        const onUpdate = (shouldRevalidate = true, updatedData, updatedError, dedupe = true) => {
            // update hook state
            const newState = {};
            let needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        // add updater to listeners
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key] = [onUpdate];
        }
        else {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key].push(onUpdate);
        }
        // set up reconnecting when the browser regains network connection
        let reconnect = null;
        if (!IS_SERVER && window.addEventListener && config.revalidateOnReconnect) {
            window.addEventListener('online', (reconnect = softRevalidate));
        }
        return () => {
            // cleanup
            dispatch = () => null;
            // mark it as unmounted
            unmountedRef.current = true;
            if (onFocus && _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                const revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key];
                const index = revalidators.indexOf(onFocus);
                if (index >= 0) {
                    // 10x faster than splice
                    // https://jsperf.com/array-remove-by-index
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
                const revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                const index = revalidators.indexOf(onUpdate);
                if (index >= 0) {
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (!IS_SERVER && window.removeEventListener && reconnect !== null) {
                window.removeEventListener('online', reconnect);
            }
        };
    }, [key, revalidate]);
    // set up polling
    useIsomorphicLayoutEffect(() => {
        let timer = null;
        const tick = async () => {
            if (!stateRef.current.error &&
                (config.refreshWhenHidden || Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__["default"])()) &&
                (config.refreshWhenOffline || Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_3__["default"])())) {
                // only revalidate when the page is visible
                // if API request errored, we stop polling in this round
                // and let the error retry function handle it
                await revalidate({ dedupe: true });
            }
            if (config.refreshInterval) {
                timer = setTimeout(tick, config.refreshInterval);
            }
        };
        if (config.refreshInterval) {
            timer = setTimeout(tick, config.refreshInterval);
        }
        return () => {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        let latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        let latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                // trigger revalidate immediately
                // to get the promise
                revalidate();
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] &&
                typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key].then === 'function') {
                // if it is a promise
                throw _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            // it's a value, return it directly (override)
            latestData = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    // define returned state
    // can be memorized since the state is a ref
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
        const state = { revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                }
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                }
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                }
            }
        });
        return state;
    }, [revalidate]);
}
const SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ }),

/***/ "./node_modules/swr/node_modules/fast-deep-equal/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/swr/node_modules/fast-deep-equal/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
  }, data.map(function (mentor) {
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

/***/ }),

/***/ 1:
/*!***************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fstartup&absolutePagePath=C%3A%5CUsers%5Cdecka%5CDesktop%5CSBC2020%5Cmentor-matching%5Cpages%5Cstartup%5Cindex.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fstartup&absolutePagePath=C%3A%5CUsers%5Cdecka%5CDesktop%5CSBC2020%5Cmentor-matching%5Cpages%5Cstartup%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fstartup&absolutePagePath=C%3A%5CUsers%5Cdecka%5CDesktop%5CSBC2020%5Cmentor-matching%5Cpages%5Cstartup%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9mZXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2NhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9saWJzL2hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vbGlicy9pcy1kb2N1bWVudC12aXNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2xpYnMvaXMtb25saW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2xpYnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vc3dyLWNvbmZpZy1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL3VzZS1zd3ItcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vdXNlLXN3ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dyL25vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0YXJ0dXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsImZldGNoZXIiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIk1lbnRvckxpc3QiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJpc1ZhbGlkYXRpbmciLCJtdXRhdGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwibWVudG9yIiwiTWVudG9ySWQiLCJmaWVsZHMiLCJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWEsa0RBQWtELHFCQUFxQjtBQUNwRixpQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBEQUErRTtBQUN0RztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQSxnSzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDSjtBQUNoQjtBQUNmLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVEQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsTUFBRDtBQUFBLFdBQ1I7QUFBSSxTQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyQkQsTUFBTSxDQUFDRSxNQUFQLENBQWNDLElBQWQsQ0FBM0IsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBTUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUVQLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkYsQ0FERixDQURGO0FBY0QsQ0F2QkQ7O0dBQU1MLFU7VUFDMENDLDJDOzs7S0FEMUNELFU7QUF5QlNBLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0EsMEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHN0YXJ0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjsvKiBnbG9iYWxzIHNlbGYgKi92YXIgZmV0Y2g9c2VsZi5mZXRjaC5iaW5kKHNlbGYpO21vZHVsZS5leHBvcnRzPWZldGNoO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3N0YXJ0dXBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxkZWNrYVxcXFxEZXNrdG9wXFxcXFNCQzIwMjBcXFxcbWVudG9yLW1hdGNoaW5nXFxcXHBhZ2VzXFxcXHN0YXJ0dXBcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnLi91c2Utc3dyJztcbmltcG9ydCBoYXNoIGZyb20gJy4vbGlicy9oYXNoJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0YSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX19jYWNoZSA9IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoaW5pdGlhbERhdGEpKTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IFtfa2V5XSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUuZ2V0KF9rZXkpO1xuICAgIH1cbiAgICBzZXQoa2V5LCB2YWx1ZSwgc2hvdWxkTm90aWZ5ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBbX2tleV0gPSB0aGlzLnNlcmlhbGl6ZUtleShrZXkpO1xuICAgICAgICB0aGlzLl9fY2FjaGUuc2V0KF9rZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeSlcbiAgICAgICAgICAgIG11dGF0ZShrZXksIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICAgIGtleXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX19jYWNoZS5rZXlzKCkpO1xuICAgIH1cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIGNvbnN0IFtfa2V5XSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUuaGFzKF9rZXkpO1xuICAgIH1cbiAgICBjbGVhcihzaG91bGROb3RpZnkgPSB0cnVlKSB7XG4gICAgICAgIGlmIChzaG91bGROb3RpZnkpXG4gICAgICAgICAgICB0aGlzLl9fY2FjaGUuZm9yRWFjaChrZXkgPT4gbXV0YXRlKGtleSwgbnVsbCwgZmFsc2UpKTtcbiAgICAgICAgdGhpcy5fX2NhY2hlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICAgIGRlbGV0ZShrZXksIHNob3VsZE5vdGlmeSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgW19rZXldID0gdGhpcy5zZXJpYWxpemVLZXkoa2V5KTtcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeSlcbiAgICAgICAgICAgIG11dGF0ZShrZXksIG51bGwsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fX2NhY2hlLmRlbGV0ZShfa2V5KTtcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gICAgLy8gVE9ETzogaW50cm9kdWNlIG5hbWVzcGFjZSBmb3IgdGhlIGNhY2hlXG4gICAgc2VyaWFsaXplS2V5KGtleSkge1xuICAgICAgICBsZXQgYXJncyA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGtleSA9IGtleSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGVuY2llcyBub3QgcmVhZHlcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICAvLyBhcmdzIGFycmF5XG4gICAgICAgICAgICBhcmdzID0ga2V5O1xuICAgICAgICAgICAga2V5ID0gaGFzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29udmVydCBudWxsIHRvICcnXG4gICAgICAgICAgICBrZXkgPSBTdHJpbmcoa2V5IHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlcnJvcktleSA9IGtleSA/ICdlcnJAJyArIGtleSA6ICcnO1xuICAgICAgICByZXR1cm4gW2tleSwgYXJncywgZXJyb3JLZXldO1xuICAgIH1cbiAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuZXJzW2luZGV4XSA9IHRoaXMuX19saXN0ZW5lcnNbdGhpcy5fX2xpc3RlbmVycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbGlzdGVuZXJzLmxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBOb3RpZnkgQ2FjaGUgc3Vic2NyaWJlcnMgYWJvdXQgYSBjaGFuZ2UgaW4gdGhlIGNhY2hlXG4gICAgbm90aWZ5KCkge1xuICAgICAgICBmb3IgKGxldCBsaXN0ZW5lciBvZiB0aGlzLl9fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IGlzRG9jdW1lbnRWaXNpYmxlIGZyb20gJy4vbGlicy9pcy1kb2N1bWVudC12aXNpYmxlJztcbmltcG9ydCBpc09ubGluZSBmcm9tICcuL2xpYnMvaXMtb25saW5lJztcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlJztcbi8vIGNhY2hlXG5jb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpO1xuLy8gc3RhdGUgbWFuYWdlcnNcbmNvbnN0IENPTkNVUlJFTlRfUFJPTUlTRVMgPSB7fTtcbmNvbnN0IENPTkNVUlJFTlRfUFJPTUlTRVNfVFMgPSB7fTtcbmNvbnN0IEZPQ1VTX1JFVkFMSURBVE9SUyA9IHt9O1xuY29uc3QgQ0FDSEVfUkVWQUxJREFUT1JTID0ge307XG5jb25zdCBNVVRBVElPTl9UUyA9IHt9O1xuLy8gZXJyb3IgcmV0cnlcbmZ1bmN0aW9uIG9uRXJyb3JSZXRyeShfLCBfXywgY29uZmlnLCByZXZhbGlkYXRlLCBvcHRzKSB7XG4gICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpKSB7XG4gICAgICAgIC8vIGlmIGl0J3MgaGlkZGVuLCBzdG9wXG4gICAgICAgIC8vIGl0IHdpbGwgYXV0byByZXZhbGlkYXRlIHdoZW4gZm9jdXNcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmVycm9yUmV0cnlDb3VudCAmJiBvcHRzLnJldHJ5Q291bnQgPiBjb25maWcuZXJyb3JSZXRyeUNvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXhwb25lbnRpYWwgYmFja29mZlxuICAgIGNvbnN0IGNvdW50ID0gTWF0aC5taW4ob3B0cy5yZXRyeUNvdW50IHx8IDAsIDgpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSB+figoTWF0aC5yYW5kb20oKSArIDAuNSkgKiAoMSA8PCBjb3VudCkpICogY29uZmlnLmVycm9yUmV0cnlJbnRlcnZhbDtcbiAgICBzZXRUaW1lb3V0KHJldmFsaWRhdGUsIHRpbWVvdXQsIG9wdHMpO1xufVxuLy8gY2xpZW50IHNpZGU6IG5lZWQgdG8gYWRqdXN0IHRoZSBjb25maWdcbi8vIGJhc2VkIG9uIHRoZSBicm93c2VyIHN0YXR1c1xuLy8gc2xvdyBjb25uZWN0aW9uICg8PSA3MEticHMpXG5jb25zdCBzbG93Q29ubmVjdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbmF2aWdhdG9yWydjb25uZWN0aW9uJ10gJiZcbiAgICBbJ3Nsb3ctMmcnLCAnMmcnXS5pbmRleE9mKG5hdmlnYXRvclsnY29ubmVjdGlvbiddLmVmZmVjdGl2ZVR5cGUpICE9PSAtMTtcbi8vIGNvbmZpZ1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAvLyBldmVudHNcbiAgICBvbkxvYWRpbmdTbG93OiAoKSA9PiB7IH0sXG4gICAgb25TdWNjZXNzOiAoKSA9PiB7IH0sXG4gICAgb25FcnJvcjogKCkgPT4geyB9LFxuICAgIG9uRXJyb3JSZXRyeSxcbiAgICBlcnJvclJldHJ5SW50ZXJ2YWw6IChzbG93Q29ubmVjdGlvbiA/IDEwIDogNSkgKiAxMDAwLFxuICAgIGZvY3VzVGhyb3R0bGVJbnRlcnZhbDogNSAqIDEwMDAsXG4gICAgZGVkdXBpbmdJbnRlcnZhbDogMiAqIDEwMDAsXG4gICAgbG9hZGluZ1RpbWVvdXQ6IChzbG93Q29ubmVjdGlvbiA/IDUgOiAzKSAqIDEwMDAsXG4gICAgcmVmcmVzaEludGVydmFsOiAwLFxuICAgIHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlLFxuICAgIHJldmFsaWRhdGVPblJlY29ubmVjdDogdHJ1ZSxcbiAgICByZWZyZXNoV2hlbkhpZGRlbjogZmFsc2UsXG4gICAgcmVmcmVzaFdoZW5PZmZsaW5lOiBmYWxzZSxcbiAgICBzaG91bGRSZXRyeU9uRXJyb3I6IHRydWUsXG4gICAgc3VzcGVuc2U6IGZhbHNlLFxuICAgIGNvbXBhcmU6IGRlZXBFcXVhbFxufTtcbi8vIEZvY3VzIHJldmFsaWRhdGVcbmxldCBldmVudHNCaW5kZWQgPSBmYWxzZTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAmJiAhZXZlbnRzQmluZGVkKSB7XG4gICAgY29uc3QgcmV2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpIHx8ICFpc09ubGluZSgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gRk9DVVNfUkVWQUxJREFUT1JTKSB7XG4gICAgICAgICAgICBpZiAoRk9DVVNfUkVWQUxJREFUT1JTW2tleV1bMF0pXG4gICAgICAgICAgICAgICAgRk9DVVNfUkVWQUxJREFUT1JTW2tleV1bMF0oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCByZXZhbGlkYXRlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgcmV2YWxpZGF0ZSwgZmFsc2UpO1xuICAgIC8vIG9ubHkgYmluZCB0aGUgZXZlbnRzIG9uY2VcbiAgICBldmVudHNCaW5kZWQgPSB0cnVlO1xufVxuZXhwb3J0IHsgQ09OQ1VSUkVOVF9QUk9NSVNFUywgQ09OQ1VSUkVOVF9QUk9NSVNFU19UUywgRk9DVVNfUkVWQUxJREFUT1JTLCBDQUNIRV9SRVZBTElEQVRPUlMsIE1VVEFUSU9OX1RTLCBjYWNoZSB9O1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdENvbmZpZztcbiIsImV4cG9ydCAqIGZyb20gJy4vdXNlLXN3cic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHVzZVNXUiB9IGZyb20gJy4vdXNlLXN3cic7XG5leHBvcnQgeyB1c2VTV1JQYWdlcyB9IGZyb20gJy4vdXNlLXN3ci1wYWdlcyc7XG5leHBvcnQgeyBjYWNoZSB9IGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCBkZWZhdWx0IHVzZVNXUjtcbiIsIi8vIHVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBvYmplY3QtPmtleSBtYXBwaW5nXG4vLyBzbyB0aGUgb2JqZWN0cyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4vLyBXZWFrTWFwIHVzZXMgYSBoYXNodGFibGUgdW5kZXIgdGhlIGhvb2QsIHNvIHRoZSBsb29rdXBcbi8vIGNvbXBsZXhpdHkgaXMgYWxtb3N0IE8oMSkuXG5jb25zdCB0YWJsZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBjb3VudGVyIG9mIHRoZSBrZXlcbmxldCBjb3VudGVyID0gMDtcbi8vIGhhc2hlcyBhbiBhcnJheSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIGEgc3RyaW5nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNoKGFyZ3MpIHtcbiAgICBpZiAoIWFyZ3MubGVuZ3RoKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgbGV0IGtleSA9ICdhcmcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQgX2hhc2g7XG4gICAgICAgIGlmIChhcmdzW2ldID09PSBudWxsIHx8IHR5cGVvZiBhcmdzW2ldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBjb25zaWRlciB0aGUgY2FzZSB0aGF0IGFyZ3NbaV0gaXMgYSBzdHJpbmc6XG4gICAgICAgICAgICAvLyBhcmdzW2ldICAgICAgICBfaGFzaFxuICAgICAgICAgICAgLy8gXCJ1bmRlZmluZWRcIiAtPiAnXCJ1bmRlZmluZWRcIidcbiAgICAgICAgICAgIC8vIHVuZGVmaW5lZCAgIC0+ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAvLyAxMjMgICAgICAgICAtPiAnMTIzJ1xuICAgICAgICAgICAgLy8gbnVsbCAgICAgICAgLT4gJ251bGwnXG4gICAgICAgICAgICAvLyBcIm51bGxcIiAgICAgIC0+ICdcIm51bGxcIidcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBfaGFzaCA9ICdcIicgKyBhcmdzW2ldICsgJ1wiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gU3RyaW5nKGFyZ3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0YWJsZS5oYXMoYXJnc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBfaGFzaCA9IGNvdW50ZXI7XG4gICAgICAgICAgICAgICAgdGFibGUuc2V0KGFyZ3NbaV0sIGNvdW50ZXIrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaGFzaCA9IHRhYmxlLmdldChhcmdzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXkgKz0gJ0AnICsgX2hhc2g7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RvY3VtZW50VmlzaWJsZSgpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSAnaGlkZGVuJztcbiAgICB9XG4gICAgLy8gYWx3YXlzIGFzc3VtZSBpdCdzIHZpc2libGVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm9uTGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gICAgfVxuICAgIC8vIGFsd2F5cyBhc3N1bWUgaXQncyBvbmxpbmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZuLCBpbnRlcnZhbCkge1xuICAgIGxldCBwZW5kaW5nID0gZmFsc2U7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmIChwZW5kaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHBlbmRpbmcgPSBmYWxzZSksIGludGVydmFsKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFNXUkNvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblNXUkNvbmZpZ0NvbnRleHQuZGlzcGxheU5hbWUgPSAnU1dSQ29uZmlnQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBTV1JDb25maWdDb250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2FjaGUgfSBmcm9tICcuL2NvbmZpZyc7XG4vKlxuVGhlIGlkZWFcblxuQSBcIlBhZ2VcIiBjb21wb25lbnQgcmVuZGVycyB0aGUgY29udGVudCBvZiAxIEFQSSByZXF1ZXN0LCBpdCBhY2NlcHRzIGFuIG9mZnNldCAoaW4gdGhpcyBleGFtcGxlIGl0J3MgZnJvbSksXG51c2VzIGEgU1dSIGhvb2sgKHVzZVNXUihBUEkgKyAnP2xpbWl0PScgKyBsaW1pdCArICcmZnJvbT0nICsgZnJvbSkpIGFuZCByZXR1cm5zIGl0ZW1zIChQcm9qZWN0cykuXG5cblRoZSBVSTpcbiAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICB8ICAgUHJvamVjdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbnwgICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG58ICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxufCAgICAgfCAgICstLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbnwgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICArLS0+IDEgUGFnZVxufCAgICAgfCAgICstLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbnwgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8ICAvcHJvamVjdHMvbGlzdD9saW1pdD00XG58ICAgICB8ICAgKy0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICB8ICAgKy0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgKyAgL3Byb2plY3RzL2xpc3Q/bGltaXQ9NCZmcm9tPTEyM1xuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4gICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICstLS0tLS0tLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4gICAgICB8ICAgKy0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgK1xuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICAgICB8ICAgICArICAvcHJvamVjdHMvbGlzdD9saW1pdD00JmZyb209NDU2XG4gICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICstLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8XG4gICAgICB8ICAgKy0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxuICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHxcbiAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICArXG5cblRoZSBBUElcbi8vIChpbnNpZGUgYHJlbmRlcmApXG5cbmZ1bmN0aW9uIEFwcCAoKSB7XG4gIGNvbnN0IHtcbiAgICBwYWdlcywgICAgLy8gYW4gYXJyYXkgb2YgZWFjaCBwYWdlIGNvbXBvbmVudFxuICAgIHBhZ2VTV1JzLCAvLyBhbiBhcnJheSBvZiBTV1JzIG9mIGVhY2ggcGFnZVxuICAgIGlzTG9hZGluZ01vcmUsXG4gICAgaXNSZWFjaGluZ0VuZCxcbiAgICBpc0VtcHR5LFxuICAgIGxvYWRNb3JlXG4gIH0gPSB1c2VTV1JQYWdlcyhcbiAgICAncHJvamVjdC1wYWdlJywgLy8ga2V5IG9mIHRoaXMgcGFnZVxuXG4gICAgLy8gPT09PT09PT0gdGhlIGFjdHVhbCBQYWdlIGNvbXBvbmVudCFcbiAgICAoeyBvZmZzZXQsIHdpdGhTV1IgfSkgPT4ge1xuICAgICAgLy8gcmVxdWlyZWQ6IHVzZSBgd2l0aFNXUmAgdG8gd3JhcCB5b3VyIG1haW4gU1dSIChzb3VyY2Ugb2YgeW91ciBwYWdpbmF0aW9uIEFQSSlcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2l0aFNXUihcbiAgICAgICAgdXNlU1dSKEFQSSArICc/bGltaXQ9MTAmZnJvbT0nICsgb2Zmc2V0KSAvLyByZXF1ZXN0IHByb2plY3RzIHdpdGggb2Zmc2V0XG4gICAgICApXG4gICAgICBpZiAoIWRhdGEpIHJldHVybiA8UGxhY2Vob2xkZXI+XG4gICAgICByZXR1cm4gZGF0YS5wcm9qZWN0cy5tYXAocHJvamVjdCA9PiA8Q2FyZCBwcm9qZWN0PXtwcm9qZWN0fSB0ZWFtPXt0ZWFtfT4pXG4gICAgfSxcbiAgICAvLyA9PT09PT09PVxuXG4gICAgLy8gYSBmdW5jdGlvbiBhY2NlcHRzIGEgU1dSJ3MgYGRhdGFgLCBhbmQgcmV0dXJucyB0aGUgb2Zmc2V0IG9mIHRoZSBuZXh0IHBhZ2UgKG9yIG51bGwpXG4gICAgZGF0YSA9PiBkYXRhICYmIGRhdGEubGVuZ3RoID49IDEwID8gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmNyZWF0ZWRBdCA6IG51bGwsXG5cbiAgICAvLyAob3B0aW9uYWwpIG91dHNpZGUgZGVwcyBvZiB5b3VyIFBhZ2UgY29tcG9uZW50LiBpbiB0aGlzIGNhc2UgaXQncyBlbXB0eVxuICAgIFtdXG4gIClcblxuICAvLyAuLi5cblxuICBpZiAoaXNFbXB0eSkgcmV0dXJuIDxFbXB0eVByb2plY3RzUGFnZS8+XG5cbiAgcmV0dXJuIDxkaXY+XG4gICAge3BhZ2VzfVxuICAgIHtpc1JlYWNoaW5nRW5kXG4gICAgICA/IG51bGxcbiAgICAgIDogPGJ1dHRvbiBsb2FkaW5nPXtpc0xvYWRpbmdNb3JlfSBvbkNsaWNrPXtsb2FkTW9yZX0+TG9hZCBNb3JlPC9idXR0b24+fVxuICA8L2Rpdj5cbn1cbiovXG5jb25zdCBwYWdlQ2FjaGVNYXAgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlU1dSUGFnZXMocGFnZUtleSwgcGFnZUZuLCBTV1JUb09mZnNldCwgZGVwcyA9IFtdKSB7XG4gICAgY29uc3QgcGFnZUNvdW50S2V5ID0gYF9zd3JfcGFnZV9jb3VudF9gICsgcGFnZUtleTtcbiAgICBjb25zdCBwYWdlT2Zmc2V0S2V5ID0gYF9zd3JfcGFnZV9vZmZzZXRfYCArIHBhZ2VLZXk7XG4gICAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IHVzZVN0YXRlKGNhY2hlLmdldChwYWdlQ291bnRLZXkpIHx8IDEpO1xuICAgIGNvbnN0IFtwYWdlT2Zmc2V0cywgc2V0UGFnZU9mZnNldHNdID0gdXNlU3RhdGUoY2FjaGUuZ2V0KHBhZ2VPZmZzZXRLZXkpIHx8IFtudWxsXSk7XG4gICAgY29uc3QgW3BhZ2VTV1JzLCBzZXRQYWdlU1dSc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgcGFnZUZuUmVmID0gdXNlUmVmKHBhZ2VGbik7XG4gICAgY29uc3QgZW1wdHlQYWdlUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICAvLyBQYWdlIGNvbXBvbmVudCAod3JhcHMgYHBhZ2VGbmApXG4gICAgLy8gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbiB3ZSBuZWVkIHRvIG1lbW9yaXplIGl0XG4gICAgY29uc3QgUGFnZSA9IHVzZUNhbGxiYWNrKHByb3BzID0+IHtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBwYWdlIGNvbXBvbmVudFxuICAgICAgICBjb25zdCBkYXRhTGlzdCA9IHBhZ2VGblJlZi5jdXJyZW50KHByb3BzKTtcbiAgICAgICAgLy8gaWYgZGF0YUxpc3QgaXMgW10sIHdlIGNhbiBhc3N1bWUgdGhpcyBwYWdlIGlzIGVtcHR5XG4gICAgICAgIC8vIFRPRE86IHRoaXMgQVBJIGlzIG5vdCBzdGFibGVcbiAgICAgICAgaWYgKGRhdGFMaXN0ICYmICFkYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVtcHR5UGFnZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVtcHR5UGFnZVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFMaXN0O1xuICAgIH0sIFtdKTtcbiAgICAvLyBEb2Vzbid0IGhhdmUgYSBuZXh0IHBhZ2VcbiAgICBjb25zdCBpc1JlYWNoaW5nRW5kID0gcGFnZU9mZnNldHNbcGFnZUNvdW50XSA9PT0gbnVsbDtcbiAgICBjb25zdCBpc0xvYWRpbmdNb3JlID0gcGFnZUNvdW50ID09PSBwYWdlT2Zmc2V0cy5sZW5ndGg7XG4gICAgY29uc3QgaXNFbXB0eSA9IGlzUmVhY2hpbmdFbmQgJiYgcGFnZUNvdW50ID09PSAxICYmIGVtcHR5UGFnZVJlZi5jdXJyZW50O1xuICAgIGNvbnN0IGxvYWRNb3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nTW9yZSB8fCBpc1JlYWNoaW5nRW5kKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZXRQYWdlQ291bnQoYyA9PiB7XG4gICAgICAgICAgICBjYWNoZS5zZXQocGFnZUNvdW50S2V5LCBjICsgMSk7XG4gICAgICAgICAgICByZXR1cm4gYyArIDE7XG4gICAgICAgIH0pO1xuICAgIH0sIFtpc0xvYWRpbmdNb3JlIHx8IGlzUmVhY2hpbmdFbmRdKTtcbiAgICBjb25zdCBfcGFnZUZuID0gdXNlQ2FsbGJhY2socGFnZUZuLCBkZXBzKTtcbiAgICBwYWdlRm5SZWYuY3VycmVudCA9IF9wYWdlRm47XG4gICAgY29uc3QgcGFnZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0V2l0aFNXUiA9IGlkID0+IHN3ciA9PiB7XG4gICAgICAgICAgICBpZiAoIXBhZ2VTV1JzW2lkXSB8fFxuICAgICAgICAgICAgICAgIHBhZ2VTV1JzW2lkXS5kYXRhICE9PSBzd3IuZGF0YSB8fFxuICAgICAgICAgICAgICAgIHBhZ2VTV1JzW2lkXS5lcnJvciAhPT0gc3dyLmVycm9yIHx8XG4gICAgICAgICAgICAgICAgcGFnZVNXUnNbaWRdLnJldmFsaWRhdGUgIT09IHN3ci5yZXZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gaG9pc3Qgc2lkZSBlZmZlY3RzOiBzZXRQYWdlU1dScyBhbmQgc2V0UGFnZU9mZnNldHMgLS0gaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMjAvMDIvMjYvcmVhY3QtdjE2LjEzLjAuaHRtbCN3YXJuaW5ncy1mb3Itc29tZS11cGRhdGVzLWR1cmluZy1yZW5kZXJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFnZVNXUnMoc3dycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfc3dycyA9IFsuLi5zd3JzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zd3JzW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzd3IuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogc3dyLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGU6IHN3ci5yZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogc3dyLmlzVmFsaWRhdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGU6IHN3ci5tdXRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3N3cnM7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN3ci5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IG5leHQgcGFnZSdzIG9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFnZU9mZnNldCA9IFNXUlRvT2Zmc2V0KHN3ciwgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VPZmZzZXRzW2lkICsgMV0gIT09IG5ld1BhZ2VPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlT2Zmc2V0cyhhcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfYXJyID0gWy4uLmFycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hcnJbaWQgKyAxXSA9IG5ld1BhZ2VPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChwYWdlT2Zmc2V0S2V5LCBfYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzd3I7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlbmRlciBlYWNoIHBhZ2VcbiAgICAgICAgY29uc3QgcCA9IFtdO1xuICAgICAgICBpZiAoIXBhZ2VDYWNoZU1hcC5oYXMocGFnZUtleSkpIHtcbiAgICAgICAgICAgIHBhZ2VDYWNoZU1hcC5zZXQocGFnZUtleSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VDYWNoZSA9IHBhZ2VDYWNoZU1hcC5nZXQocGFnZUtleSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZUNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGlmICghcGFnZUNhY2hlW2ldIHx8XG4gICAgICAgICAgICAgICAgcGFnZUNhY2hlW2ldLm9mZnNldCAhPT0gcGFnZU9mZnNldHNbaV0gfHxcbiAgICAgICAgICAgICAgICBwYWdlQ2FjaGVbaV0ucGFnZUZuICE9PSBfcGFnZUZuKSB7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBwcm9wcyBjaGFuZ2Ugb3IgYXQgaW5pdFxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgcGFnZSBhbmQgY2FjaGUgaXRcbiAgICAgICAgICAgICAgICBwYWdlQ2FjaGVbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwgeyBrZXk6IGBwYWdlLSR7cGFnZU9mZnNldHNbaV19LSR7aX1gLCBvZmZzZXQ6IHBhZ2VPZmZzZXRzW2ldLCB3aXRoU1dSOiBnZXRXaXRoU1dSKGkpIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUZuOiBfcGFnZUZuLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHBhZ2VPZmZzZXRzW2ldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAucHVzaChwYWdlQ2FjaGVbaV0uY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcDtcbiAgICB9LCBbX3BhZ2VGbiwgcGFnZUNvdW50LCBwYWdlU1dScywgcGFnZU9mZnNldHMsIHBhZ2VLZXldKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlcyxcbiAgICAgICAgcGFnZUNvdW50LFxuICAgICAgICBwYWdlU1dScyxcbiAgICAgICAgaXNMb2FkaW5nTW9yZSxcbiAgICAgICAgaXNSZWFjaGluZ0VuZCxcbiAgICAgICAgaXNFbXB0eSxcbiAgICAgICAgbG9hZE1vcmVcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRDb25maWcsIHsgQ0FDSEVfUkVWQUxJREFUT1JTLCBDT05DVVJSRU5UX1BST01JU0VTLCBDT05DVVJSRU5UX1BST01JU0VTX1RTLCBGT0NVU19SRVZBTElEQVRPUlMsIE1VVEFUSU9OX1RTLCBjYWNoZSB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBpc0RvY3VtZW50VmlzaWJsZSBmcm9tICcuL2xpYnMvaXMtZG9jdW1lbnQtdmlzaWJsZSc7XG5pbXBvcnQgaXNPbmxpbmUgZnJvbSAnLi9saWJzL2lzLW9ubGluZSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi9saWJzL3Rocm90dGxlJztcbmltcG9ydCBTV1JDb25maWdDb250ZXh0IGZyb20gJy4vc3dyLWNvbmZpZy1jb250ZXh0JztcbmNvbnN0IElTX1NFUlZFUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuXG5jb25zdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gSVNfU0VSVkVSID8gdXNlRWZmZWN0IDogdXNlTGF5b3V0RWZmZWN0O1xuY29uc3QgdHJpZ2dlciA9IChfa2V5LCBzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZSkgPT4ge1xuICAgIC8vIHdlIGFyZSBpZ25vcmluZyB0aGUgc2Vjb25kIGFyZ3VtZW50IHdoaWNoIGNvcnJlc3BvbmQgdG8gdGhlIGFyZ3VtZW50c1xuICAgIC8vIHRoZSBmZXRjaGVyIHdpbGwgcmVjZWl2ZSB3aGVuIGtleSBpcyBhbiBhcnJheVxuICAgIGNvbnN0IFtrZXksICwga2V5RXJyXSA9IGNhY2hlLnNlcmlhbGl6ZUtleShfa2V5KTtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHVwZGF0ZXJzID0gQ0FDSEVfUkVWQUxJREFUT1JTW2tleV07XG4gICAgaWYgKGtleSAmJiB1cGRhdGVycykge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGNhY2hlLmdldChrZXkpO1xuICAgICAgICBjb25zdCBjdXJyZW50RXJyb3IgPSBjYWNoZS5nZXQoa2V5RXJyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdXBkYXRlcnNbaV0oc2hvdWxkUmV2YWxpZGF0ZSwgY3VycmVudERhdGEsIGN1cnJlbnRFcnJvciwgaSA+IDApO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGJyb2FkY2FzdFN0YXRlID0gKGtleSwgZGF0YSwgZXJyb3IpID0+IHtcbiAgICBjb25zdCB1cGRhdGVycyA9IENBQ0hFX1JFVkFMSURBVE9SU1trZXldO1xuICAgIGlmIChrZXkgJiYgdXBkYXRlcnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdXBkYXRlcnNbaV0oZmFsc2UsIGRhdGEsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBtdXRhdGUgPSBhc3luYyAoX2tleSwgX2RhdGEsIHNob3VsZFJldmFsaWRhdGUgPSB0cnVlKSA9PiB7XG4gICAgY29uc3QgW2tleV0gPSBjYWNoZS5zZXJpYWxpemVLZXkoX2tleSk7XG4gICAgaWYgKCFrZXkpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBuZXcgZGF0YSwgY2FsbCByZXZhbGlkYXRlIGFnYWluc3QgdGhlIGtleVxuICAgIGlmICh0eXBlb2YgX2RhdGEgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm4gdHJpZ2dlcihfa2V5LCBzaG91bGRSZXZhbGlkYXRlKTtcbiAgICAvLyB1cGRhdGUgdGltZXN0YW1wXG4gICAgTVVUQVRJT05fVFNba2V5XSA9IERhdGUubm93KCkgLSAxO1xuICAgIGxldCBkYXRhLCBlcnJvcjtcbiAgICBpZiAoX2RhdGEgJiYgdHlwZW9mIF9kYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIGBfZGF0YWAgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCBwYXNzaW5nIGN1cnJlbnQgY2FjaGUgdmFsdWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCBfZGF0YShjYWNoZS5nZXQoa2V5KSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoX2RhdGEgJiYgdHlwZW9mIF9kYXRhLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gYF9kYXRhYCBpcyBhIHByb21pc2VcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBhd2FpdCBfZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZGF0YSA9IF9kYXRhO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBjYWNoZWQgZGF0YSwgYXZvaWQgbm90aWZ5aW5nIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIGNhY2hlLnNldChrZXksIGRhdGEsIGZhbHNlKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGV4aXN0aW5nIFNXUiBIb29rcycgc3RhdGVcbiAgICBjb25zdCB1cGRhdGVycyA9IENBQ0hFX1JFVkFMSURBVE9SU1trZXldO1xuICAgIGlmICh1cGRhdGVycykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB1cGRhdGVyc1tpXSghIXNob3VsZFJldmFsaWRhdGUsIGRhdGEsIGVycm9yLCBpID4gMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGEgdG8gYmUgdXNlZCBieSBjYWxsZXIgb2YgbXV0YXRlXG4gICAgaWYgKGVycm9yKVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICByZXR1cm4gZGF0YTtcbn07XG5mdW5jdGlvbiB1c2VTV1IoLi4uYXJncykge1xuICAgIGxldCBfa2V5LCBmbiwgY29uZmlnID0ge307XG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDEpIHtcbiAgICAgICAgX2tleSA9IGFyZ3NbMF07XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgZm4gPSBhcmdzWzFdO1xuICAgICAgICBjb25maWcgPSBhcmdzWzJdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmbiA9IGFyZ3NbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBhcmdzWzFdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdlIGFzc3VtZSBga2V5YCBhcyB0aGUgaWRlbnRpZmllciBvZiB0aGUgcmVxdWVzdFxuICAgIC8vIGBrZXlgIGNhbiBjaGFuZ2UgYnV0IGBmbmAgc2hvdWxkbid0XG4gICAgLy8gKGJlY2F1c2UgYHJldmFsaWRhdGVgIG9ubHkgZGVwZW5kcyBvbiBga2V5YClcbiAgICAvLyBga2V5RXJyYCBpcyB0aGUgY2FjaGUga2V5IGZvciBlcnJvciBvYmplY3RzXG4gICAgY29uc3QgW2tleSwgZm5BcmdzLCBrZXlFcnJdID0gY2FjaGUuc2VyaWFsaXplS2V5KF9rZXkpO1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIHVzZUNvbnRleHQoU1dSQ29uZmlnQ29udGV4dCksIGNvbmZpZyk7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gdXNlIGEgZ2xvYmFsIGZldGNoZXJcbiAgICAgICAgZm4gPSBjb25maWcuZmV0Y2hlcjtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbERhdGEgPSBjYWNoZS5nZXQoa2V5KSB8fCBjb25maWcuaW5pdGlhbERhdGE7XG4gICAgY29uc3QgaW5pdGlhbEVycm9yID0gY2FjaGUuZ2V0KGtleUVycik7XG4gICAgLy8gaWYgYSBzdGF0ZSBpcyBhY2Nlc3NlZCAoZGF0YSwgZXJyb3Igb3IgaXNWYWxpZGF0aW5nKSxcbiAgICAvLyB3ZSBhZGQgdGhlIHN0YXRlIHRvIGRlcGVuZGVuY2llcyBzbyBpZiB0aGUgc3RhdGUgaXNcbiAgICAvLyB1cGRhdGVkIGluIHRoZSBmdXR1cmUsIHdlIGNhbiB0cmlnZ2VyIGEgcmVyZW5kZXJcbiAgICBjb25zdCBzdGF0ZURlcGVuZGVuY2llcyA9IHVzZVJlZih7XG4gICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0ZVJlZiA9IHVzZVJlZih7XG4gICAgICAgIGRhdGE6IGluaXRpYWxEYXRhLFxuICAgICAgICBlcnJvcjogaW5pdGlhbEVycm9yLFxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgcmVyZW5kZXIgPSB1c2VTdGF0ZShudWxsKVsxXTtcbiAgICBsZXQgZGlzcGF0Y2ggPSB1c2VDYWxsYmFjayhwYXlsb2FkID0+IHtcbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZVN0YXRlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGsgaW4gcGF5bG9hZCkge1xuICAgICAgICAgICAgc3RhdGVSZWYuY3VycmVudFtrXSA9IHBheWxvYWRba107XG4gICAgICAgICAgICBpZiAoc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudFtrXSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlU3RhdGUgfHwgY29uZmlnLnN1c3BlbnNlKSB7XG4gICAgICAgICAgICByZXJlbmRlcih7fSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgLy8gZXJyb3IgcmVmIGluc2lkZSByZXZhbGlkYXRlIChpcyBsYXN0IHJlcXVlc3QgZXJyb3JlZD8pXG4gICAgY29uc3QgdW5tb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBrZXlSZWYgPSB1c2VSZWYoa2V5KTtcbiAgICBjb25zdCBib3VuZE11dGF0ZSA9IHVzZUNhbGxiYWNrKChkYXRhLCBzaG91bGRSZXZhbGlkYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBtdXRhdGUoa2V5LCBkYXRhLCBzaG91bGRSZXZhbGlkYXRlKTtcbiAgICB9LCBba2V5XSk7XG4gICAgLy8gc3RhcnQgYSByZXZhbGlkYXRpb25cbiAgICBjb25zdCByZXZhbGlkYXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHJldmFsaWRhdGVPcHRzID0ge30pID0+IHtcbiAgICAgICAgaWYgKCFrZXkgfHwgIWZuKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodW5tb3VudGVkUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldmFsaWRhdGVPcHRzID0gT2JqZWN0LmFzc2lnbih7IGRlZHVwZTogZmFsc2UgfSwgcmV2YWxpZGF0ZU9wdHMpO1xuICAgICAgICBsZXQgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxldCBzaG91bGREZWR1cGluZyA9IHR5cGVvZiBDT05DVVJSRU5UX1BST01JU0VTW2tleV0gIT09ICd1bmRlZmluZWQnICYmIHJldmFsaWRhdGVPcHRzLmRlZHVwZTtcbiAgICAgICAgLy8gc3RhcnQgZmV0Y2hpbmdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IG5ld0RhdGE7XG4gICAgICAgICAgICBsZXQgc3RhcnRBdDtcbiAgICAgICAgICAgIGlmIChzaG91bGREZWR1cGluZykge1xuICAgICAgICAgICAgICAgIC8vIHRoZXJlJ3MgYWxyZWFkeSBhbiBvbmdvaW5nIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBvbmUgbmVlZHMgdG8gYmUgZGVkdXBsaWNhdGVkLlxuICAgICAgICAgICAgICAgIHN0YXJ0QXQgPSBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV07XG4gICAgICAgICAgICAgICAgbmV3RGF0YSA9IGF3YWl0IENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBkZWR1cGluZyB0aGUgcmVxdWVzdCAoaGFyZCByZXZhbGlkYXRlKSBidXRcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSdyZSBvdGhlciBvbmdvaW5nIHJlcXVlc3QocykgYXQgdGhlIHNhbWUgdGltZSxcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGlnbm9yZSB0aGUgb3RoZXIgcmVzdWx0KHMpIHRvIGF2b2lkXG4gICAgICAgICAgICAgICAgLy8gcG9zc2libGUgcmFjZSBjb25kaXRpb25zOlxuICAgICAgICAgICAgICAgIC8vIHJlcTEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzMVxuICAgICAgICAgICAgICAgIC8vICAgICAgcmVxMi0tLS0tLS0tPnJlczJcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGF0IGNhc2UsIHRoZSBzZWNvbmQgcmVzcG9uc2Ugc2hvdWxkIG5vdCBiZSBvdmVycmlkZGVuXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIGZpcnN0IG9uZS5cbiAgICAgICAgICAgICAgICBpZiAoQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBtYXJrIGl0IGFzIGEgbXV0YXRpb24gdG8gaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbCByZXF1ZXN0cyB3aGljaCBhcmUgZmlyZWQgYmVmb3JlIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgICAgIE1VVEFUSU9OX1RTW2tleV0gPSBEYXRlLm5vdygpIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gY2FjaGUgYmVpbmcgcmVuZGVyZWQgY3VycmVudGx5IChpdCBzaG93cyBhIGJsYW5rIHBhZ2UpLFxuICAgICAgICAgICAgICAgIC8vIHdlIHRyaWdnZXIgdGhlIGxvYWRpbmcgc2xvdyBldmVudC5cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmxvYWRpbmdUaW1lb3V0ICYmICFjYWNoZS5nZXQoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vbkxvYWRpbmdTbG93KGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY29uZmlnLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZuQXJncyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBDT05DVVJSRU5UX1BST01JU0VTW2tleV0gPSBmbiguLi5mbkFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldID0gZm4oa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldID0gc3RhcnRBdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgbmV3RGF0YSA9IGF3YWl0IENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XTtcbiAgICAgICAgICAgICAgICB9LCBjb25maWcuZGVkdXBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlciB0aGUgc3VjY2VzcyBldmVudCxcbiAgICAgICAgICAgICAgICAvLyBvbmx5IGRvIHRoaXMgZm9yIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxuICAgICAgICAgICAgICAgIGNvbmZpZy5vblN1Y2Nlc3MobmV3RGF0YSwga2V5LCBjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdGhlIHJldmFsaWRhdGlvbiBoYXBwZW5lZCBlYXJsaWVyIHRoYW4gdGhlIGxvY2FsIG11dGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBpZ25vcmUgdGhlIHJlc3VsdCBiZWNhdXNlIGl0IGNvdWxkIG92ZXJyaWRlLlxuICAgICAgICAgICAgLy8gbWVhbndoaWxlLCBhIG5ldyByZXZhbGlkYXRpb24gc2hvdWxkIGJlIHRyaWdnZXJlZCBieSB0aGUgbXV0YXRpb24uXG4gICAgICAgICAgICBpZiAoTVVUQVRJT05fVFNba2V5XSAmJiBzdGFydEF0IDw9IE1VVEFUSU9OX1RTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IGlzVmFsaWRhdGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGUuc2V0KGtleSwgbmV3RGF0YSwgZmFsc2UpO1xuICAgICAgICAgICAgY2FjaGUuc2V0KGtleUVyciwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBuZXcgc3RhdGUgZm9yIHRoZSByZWR1Y2VyXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZVJlZi5jdXJyZW50LmVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IGhhdmUgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29uZmlnLmNvbXBhcmUoc3RhdGVSZWYuY3VycmVudC5kYXRhLCBuZXdEYXRhKSkge1xuICAgICAgICAgICAgICAgIC8vIGRlZXAgY29tcGFyZSB0byBhdm9pZCBleHRyYSByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAvLyBkYXRhIGNoYW5nZWRcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1lcmdlIHRoZSBuZXcgc3RhdGVcbiAgICAgICAgICAgIGRpc3BhdGNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGlmICghc2hvdWxkRGVkdXBpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBhbHNvIHVwZGF0ZSBvdGhlciBob29rc1xuICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlKGtleSwgbmV3RGF0YSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgZGVsZXRlIENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XTtcbiAgICAgICAgICAgIGNhY2hlLnNldChrZXlFcnIsIGVyciwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gZ2V0IGEgbmV3IGVycm9yXG4gICAgICAgICAgICAvLyBkb24ndCB1c2UgZGVlcCBlcXVhbCBmb3IgZXJyb3JzXG4gICAgICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudC5lcnJvciAhPT0gZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gd2Uga2VlcCB0aGUgc3RhbGUgZGF0YVxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghc2hvdWxkRGVkdXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxzbyBicm9hZGNhc3QgdG8gdXBkYXRlIG90aGVyIGhvb2tzXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlKGtleSwgdW5kZWZpbmVkLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV2ZW50cyBhbmQgcmV0cnlcbiAgICAgICAgICAgIGNvbmZpZy5vbkVycm9yKGVyciwga2V5LCBjb25maWcpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG91bGRSZXRyeU9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHJldHJ5aW5nLCB3ZSBhbHdheXMgZW5hYmxlIGRlZHVwaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlDb3VudCA9IChyZXZhbGlkYXRlT3B0cy5yZXRyeUNvdW50IHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICBjb25maWcub25FcnJvclJldHJ5KGVyciwga2V5LCBjb25maWcsIHJldmFsaWRhdGUsIE9iamVjdC5hc3NpZ24oeyBkZWR1cGU6IHRydWUgfSwgcmV2YWxpZGF0ZU9wdHMsIHsgcmV0cnlDb3VudCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCBba2V5XSk7XG4gICAgLy8gbW91bnRlZCAoY2xpZW50IHNpZGUgcmVuZGVyaW5nKVxuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWtleSlcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIC8vIGFmdGVyIGBrZXlgIHVwZGF0ZXMsIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBtb3VudGVkXG4gICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIC8vIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCAoaHlkcmF0ZWQpLFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgZGF0YSBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAvLyBhbmQgdHJpZ2dlciBhIHJldmFsaWRhdGlvblxuICAgICAgICBjb25zdCBjdXJyZW50SG9va0RhdGEgPSBzdGF0ZVJlZi5jdXJyZW50LmRhdGE7XG4gICAgICAgIGNvbnN0IGxhdGVzdEtleWVkRGF0YSA9IGNhY2hlLmdldChrZXkpIHx8IGNvbmZpZy5pbml0aWFsRGF0YTtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBpZiB0aGUga2V5IGNoYW5nZWQgKG5vdCB0aGUgaW5pdGFsIHJlbmRlcikgb3IgY2FjaGUgdXBkYXRlZFxuICAgICAgICBpZiAoa2V5UmVmLmN1cnJlbnQgIT09IGtleSB8fFxuICAgICAgICAgICAgIWNvbmZpZy5jb21wYXJlKGN1cnJlbnRIb29rRGF0YSwgbGF0ZXN0S2V5ZWREYXRhKSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyBkYXRhOiBsYXRlc3RLZXllZERhdGEgfSk7XG4gICAgICAgICAgICBrZXlSZWYuY3VycmVudCA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXZhbGlkYXRlIHdpdGggZGVkdXBpbmdcbiAgICAgICAgY29uc3Qgc29mdFJldmFsaWRhdGUgPSAoKSA9PiByZXZhbGlkYXRlKHsgZGVkdXBlOiB0cnVlIH0pO1xuICAgICAgICAvLyB0cmlnZ2VyIGEgcmV2YWxpZGF0aW9uXG4gICAgICAgIGlmIChjb25maWcucmV2YWxpZGF0ZU9uTW91bnQgfHxcbiAgICAgICAgICAgICghY29uZmlnLmluaXRpYWxEYXRhICYmIGNvbmZpZy5yZXZhbGlkYXRlT25Nb3VudCA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXRlc3RLZXllZERhdGEgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIUlTX1NFUlZFUiAmJlxuICAgICAgICAgICAgICAgIHdpbmRvd1sncmVxdWVzdElkbGVDYWxsYmFjayddKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVsYXkgcmV2YWxpZGF0ZSBpZiB0aGVyZSdzIGNhY2hlXG4gICAgICAgICAgICAgICAgLy8gdG8gbm90IGJsb2NrIHRoZSByZW5kZXJpbmdcbiAgICAgICAgICAgICAgICB3aW5kb3dbJ3JlcXVlc3RJZGxlQ2FsbGJhY2snXShzb2Z0UmV2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHdoZW5ldmVyIHRoZSB3aW5kb3cgZ2V0cyBmb2N1c2VkLCByZXZhbGlkYXRlXG4gICAgICAgIGxldCBvbkZvY3VzO1xuICAgICAgICBpZiAoY29uZmlnLnJldmFsaWRhdGVPbkZvY3VzKSB7XG4gICAgICAgICAgICAvLyB0aHJvdHRsZTogYXZvaWQgYmVpbmcgY2FsbGVkIHR3aWNlIGZyb20gYm90aCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIC8vIGFuZCB0YWJzIGJlaW5nIHN3aXRjaGVkIHF1aWNrbHlcbiAgICAgICAgICAgIG9uRm9jdXMgPSB0aHJvdHRsZShzb2Z0UmV2YWxpZGF0ZSwgY29uZmlnLmZvY3VzVGhyb3R0bGVJbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAoIUZPQ1VTX1JFVkFMSURBVE9SU1trZXldKSB7XG4gICAgICAgICAgICAgICAgRk9DVVNfUkVWQUxJREFUT1JTW2tleV0gPSBbb25Gb2N1c107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBGT0NVU19SRVZBTElEQVRPUlNba2V5XS5wdXNoKG9uRm9jdXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlZ2lzdGVyIGdsb2JhbCBjYWNoZSB1cGRhdGUgbGlzdGVuZXJcbiAgICAgICAgY29uc3Qgb25VcGRhdGUgPSAoc2hvdWxkUmV2YWxpZGF0ZSA9IHRydWUsIHVwZGF0ZWREYXRhLCB1cGRhdGVkRXJyb3IsIGRlZHVwZSA9IHRydWUpID0+IHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBob29rIHN0YXRlXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgbGV0IG5lZWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXBkYXRlZERhdGEgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWNvbmZpZy5jb21wYXJlKHN0YXRlUmVmLmN1cnJlbnQuZGF0YSwgdXBkYXRlZERhdGEpKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuZGF0YSA9IHVwZGF0ZWREYXRhO1xuICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWx3YXlzIHVwZGF0ZSBlcnJvclxuICAgICAgICAgICAgLy8gYmVjYXVzZSBpdCBjYW4gYmUgYHVuZGVmaW5lZGBcbiAgICAgICAgICAgIGlmIChzdGF0ZVJlZi5jdXJyZW50LmVycm9yICE9PSB1cGRhdGVkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5lcnJvciA9IHVwZGF0ZWRFcnJvcjtcbiAgICAgICAgICAgICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZWVkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobmV3U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVkdXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGFkZCB1cGRhdGVyIHRvIGxpc3RlbmVyc1xuICAgICAgICBpZiAoIUNBQ0hFX1JFVkFMSURBVE9SU1trZXldKSB7XG4gICAgICAgICAgICBDQUNIRV9SRVZBTElEQVRPUlNba2V5XSA9IFtvblVwZGF0ZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBDQUNIRV9SRVZBTElEQVRPUlNba2V5XS5wdXNoKG9uVXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgdXAgcmVjb25uZWN0aW5nIHdoZW4gdGhlIGJyb3dzZXIgcmVnYWlucyBuZXR3b3JrIGNvbm5lY3Rpb25cbiAgICAgICAgbGV0IHJlY29ubmVjdCA9IG51bGw7XG4gICAgICAgIGlmICghSVNfU0VSVkVSICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIGNvbmZpZy5yZXZhbGlkYXRlT25SZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCAocmVjb25uZWN0ID0gc29mdFJldmFsaWRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2xlYW51cFxuICAgICAgICAgICAgZGlzcGF0Y2ggPSAoKSA9PiBudWxsO1xuICAgICAgICAgICAgLy8gbWFyayBpdCBhcyB1bm1vdW50ZWRcbiAgICAgICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChvbkZvY3VzICYmIEZPQ1VTX1JFVkFMSURBVE9SU1trZXldKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV2YWxpZGF0b3JzID0gRk9DVVNfUkVWQUxJREFUT1JTW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSByZXZhbGlkYXRvcnMuaW5kZXhPZihvbkZvY3VzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAxMHggZmFzdGVyIHRoYW4gc3BsaWNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vanNwZXJmLmNvbS9hcnJheS1yZW1vdmUtYnktaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0b3JzW2luZGV4XSA9IHJldmFsaWRhdG9yc1tyZXZhbGlkYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdG9ycy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQ0FDSEVfUkVWQUxJREFUT1JTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZhbGlkYXRvcnMgPSBDQUNIRV9SRVZBTElEQVRPUlNba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHJldmFsaWRhdG9ycy5pbmRleE9mKG9uVXBkYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnNbaW5kZXhdID0gcmV2YWxpZGF0b3JzW3JldmFsaWRhdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0b3JzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghSVNfU0VSVkVSICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyICYmIHJlY29ubmVjdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvbmxpbmUnLCByZWNvbm5lY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtrZXksIHJldmFsaWRhdGVdKTtcbiAgICAvLyBzZXQgdXAgcG9sbGluZ1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgdGltZXIgPSBudWxsO1xuICAgICAgICBjb25zdCB0aWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdGF0ZVJlZi5jdXJyZW50LmVycm9yICYmXG4gICAgICAgICAgICAgICAgKGNvbmZpZy5yZWZyZXNoV2hlbkhpZGRlbiB8fCBpc0RvY3VtZW50VmlzaWJsZSgpKSAmJlxuICAgICAgICAgICAgICAgIChjb25maWcucmVmcmVzaFdoZW5PZmZsaW5lIHx8IGlzT25saW5lKCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSByZXZhbGlkYXRlIHdoZW4gdGhlIHBhZ2UgaXMgdmlzaWJsZVxuICAgICAgICAgICAgICAgIC8vIGlmIEFQSSByZXF1ZXN0IGVycm9yZWQsIHdlIHN0b3AgcG9sbGluZyBpbiB0aGlzIHJvdW5kXG4gICAgICAgICAgICAgICAgLy8gYW5kIGxldCB0aGUgZXJyb3IgcmV0cnkgZnVuY3Rpb24gaGFuZGxlIGl0XG4gICAgICAgICAgICAgICAgYXdhaXQgcmV2YWxpZGF0ZSh7IGRlZHVwZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcucmVmcmVzaEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpY2ssIGNvbmZpZy5yZWZyZXNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoY29uZmlnLnJlZnJlc2hJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpY2ssIGNvbmZpZy5yZWZyZXNoSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGltZXIpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIGNvbmZpZy5yZWZyZXNoSW50ZXJ2YWwsXG4gICAgICAgIGNvbmZpZy5yZWZyZXNoV2hlbkhpZGRlbixcbiAgICAgICAgY29uZmlnLnJlZnJlc2hXaGVuT2ZmbGluZSxcbiAgICAgICAgcmV2YWxpZGF0ZVxuICAgIF0pO1xuICAgIC8vIHN1c3BlbnNlXG4gICAgaWYgKGNvbmZpZy5zdXNwZW5zZSkge1xuICAgICAgICAvLyBpbiBzdXNwZW5zZSBtb2RlLCB3ZSBjYW4ndCByZXR1cm4gZW1wdHkgc3RhdGVcbiAgICAgICAgLy8gKGl0IHNob3VsZCBiZSBzdXNwZW5kZWQpXG4gICAgICAgIC8vIHRyeSB0byBnZXQgZGF0YSBhbmQgZXJyb3IgZnJvbSBjYWNoZVxuICAgICAgICBsZXQgbGF0ZXN0RGF0YSA9IGNhY2hlLmdldChrZXkpO1xuICAgICAgICBsZXQgbGF0ZXN0RXJyb3IgPSBjYWNoZS5nZXQoa2V5RXJyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBsYXRlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGxhdGVzdEVycm9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBzdGFydCB0aGUgcmVxdWVzdCBpZiBpdCBoYXNuJ3RcbiAgICAgICAgICAgIGlmICghQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldKSB7XG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlciByZXZhbGlkYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgLy8gdG8gZ2V0IHRoZSBwcm9taXNlXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBDT05DVVJSRU5UX1BST01JU0VTW2tleV0udGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGEgcHJvbWlzZVxuICAgICAgICAgICAgICAgIHRocm93IENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0J3MgYSB2YWx1ZSwgcmV0dXJuIGl0IGRpcmVjdGx5IChvdmVycmlkZSlcbiAgICAgICAgICAgIGxhdGVzdERhdGEgPSBDT05DVVJSRU5UX1BST01JU0VTW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBsYXRlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBsYXRlc3RFcnJvcikge1xuICAgICAgICAgICAgLy8gaW4gc3VzcGVuc2UgbW9kZSwgdGhyb3cgZXJyb3IgaWYgdGhlcmUncyBubyBjb250ZW50XG4gICAgICAgICAgICB0aHJvdyBsYXRlc3RFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gdGhlIGxhdGVzdCBkYXRhIC8gZXJyb3IgZnJvbSBjYWNoZVxuICAgICAgICAvLyBpbiBjYXNlIGBrZXlgIGhhcyBjaGFuZ2VkXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvcjogbGF0ZXN0RXJyb3IsXG4gICAgICAgICAgICBkYXRhOiBsYXRlc3REYXRhLFxuICAgICAgICAgICAgcmV2YWxpZGF0ZSxcbiAgICAgICAgICAgIG11dGF0ZTogYm91bmRNdXRhdGUsXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZGF0aW5nXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGRlZmluZSByZXR1cm5lZCBzdGF0ZVxuICAgIC8vIGNhbiBiZSBtZW1vcml6ZWQgc2luY2UgdGhlIHN0YXRlIGlzIGEgcmVmXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHsgcmV2YWxpZGF0ZSwgbXV0YXRlOiBib3VuZE11dGF0ZSB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdGF0ZSwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAvLyBga2V5YCBtaWdodCBiZSBjaGFuZ2VkIGluIHRoZSB1cGNvbWluZyBob29rIHJlLXJlbmRlcixcbiAgICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHN0YXRlIHdpbGwgc3RheVxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWF0Y2ggdGhlIGxhdGVzdCBrZXkgYW5kIGRhdGEgKGZhbGxiYWNrIHRvIGBpbml0aWFsRGF0YWApXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmN1cnJlbnQuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UmVmLmN1cnJlbnQgPT09IGtleSA/IHN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgOiBpbml0aWFsRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVEZXBlbmRlbmNpZXMuY3VycmVudC5kYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVJlZi5jdXJyZW50ID09PSBrZXkgPyBzdGF0ZVJlZi5jdXJyZW50LmRhdGEgOiBpbml0aWFsRGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmN1cnJlbnQuaXNWYWxpZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZGF0aW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LCBbcmV2YWxpZGF0ZV0pO1xufVxuY29uc3QgU1dSQ29uZmlnID0gU1dSQ29uZmlnQ29udGV4dC5Qcm92aWRlcjtcbmV4cG9ydCB7IHRyaWdnZXIsIG11dGF0ZSwgU1dSQ29uZmlnIH07XG5leHBvcnQgZGVmYXVsdCB1c2VTV1I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG52YXIgaGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIHZhciBhcnJBID0gaXNBcnJheShhKVxuICAgICAgLCBhcnJCID0gaXNBcnJheShiKVxuICAgICAgLCBpXG4gICAgICAsIGxlbmd0aFxuICAgICAgLCBrZXk7XG5cbiAgICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGVcbiAgICAgICwgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcblxuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgLCByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG5cbiAgICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuY29uc3QgQVBJX1VSTCA9ICcuLi9hcGkvbWVudG9ycy5qcyc7XHJcbmNvbnN0IGZldGNoZXIgPSAoQVBJX1VSTCkgPT4gZmV0Y2goQVBJX1VSTCkudGhlbigocikgPT4gci5qc29uKCkpO1xyXG5cclxuY29uc3QgTWVudG9yTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcsIG11dGF0ZSB9ID0gdXNlU1dSKEFQSV9VUkwsIGZldGNoZXIpO1xyXG4gIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcclxuICAvLyBpZiAoaXNWYWxpZGF0aW5nKSByZXR1cm4gPGRpdj5GZXRjaGluZyBkYXRhLi4uPC9kaXY+O1xyXG4gIC8vIC8vIElmIGFuIGVycm9yIG9jY3VyZWQsIHNob3cgYW4gZXJyb3IgbWVzc2FnZVxyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQuPC9kaXY+O1xyXG4gIC8vIC8vIElmIHRoZXJlIHdlcmUgbm8gbWVudG9ycyBmb3VuZCwgc2hvdyBhIG1lc3NhZ2UgdGhhdCBzYXlzIHNvXHJcbiAgLy8gaWYgKGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gPGRpdj5ObyBtZW50b3JzIGZvdW5kLjwvZGl2PjtcclxuICAvLyAvLyBPdGhlcndpc2UgcmV0dXJuIGEgbGlzdCBvZiBtZW50b3JzIGFuZCBhIGJ1dHRvbiB0byBtYW51YWxseSByZWZldGNoIHRoZSBtZW50b3JzLlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtkYXRhLm1hcCgobWVudG9yKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e21lbnRvci5NZW50b3JJZH0+e21lbnRvci5maWVsZHNbTmFtZV19PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e211dGF0ZX0+XHJcbiAgICAgICAgICBSZWZyZXNoIERhdGFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudG9yTGlzdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODU7Il0sInNvdXJjZVJvb3QiOiIifQ==