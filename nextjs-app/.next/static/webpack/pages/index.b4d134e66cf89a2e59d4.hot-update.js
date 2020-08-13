webpackHotUpdate_N_E("pages/index",{

/***/ "./keys.js":
/*!*****************!*\
  !*** ./keys.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {module.exports = {
  consumer_key: 'BdfY4cWodVVoUhKvJ96uCpFlL'
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keys */ "./keys.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keys__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Home\\Desktop\\Remot\\Remot-Coding-Challenge\\nextjs-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSP = true;
function Home(_ref) {
  var response = _ref.response;
  console.log('response', response[0].text);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, response[0].text), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 8
    }
  }, response[0].created_at));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4va2V5cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNvbnN1bWVyX2tleSIsIkhvbWUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiY3JlYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLG9EQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsY0FBWSxFQUFVO0FBRFQsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBbUJlLFNBQVNDLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUcsSUFBcEM7QUFFRixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1ILFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUcsSUFBbEIsQ0FERCxFQUVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSSxVQUFsQixDQUZILENBREY7QUFNRDtLQVR1QkwsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGQxMzRlNjZjZjg5YTJlNTlkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb25zdW1lcl9rZXk6ICAgICAgICAgJ0JkZlk0Y1dvZFZWb1VoS3ZKOTZ1Q3BGbEwnLFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEtleXMgZnJvbSAnLi4va2V5cydcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHRydW1wRW5kcG9pbnQgPSAnaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VzZXJfdGltZWxpbmUuanNvbj9zY3JlZW5fbmFtZT1yZWFsRG9uYWxkVHJ1bXAmY291bnQ9MSc7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJ1bXBFbmRwb2ludCx7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6J2JlYXJlciBBQUFBQUFBQUFBQUFBQUFBQUFBQUFKTWtHd0VBQUFBQU1WZ2ZESyUyRm9RaldGOTNpJTJCb0l3Ukg5cHJVejQlM0R4UTdVZGNCcEFKdVpLZGVwT083ZW1JZ3czRW82SzhPYmxIQkdsZE1GZ2w4b3F3NHJGaSdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzcG9uc2UgfSkge1xyXG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2VbMF0udGV4dClcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgIFx0PGRpdj57cmVzcG9uc2VbMF0udGV4dH08L2Rpdj5cclxuICAgICAgXHQ8ZGl2PntyZXNwb25zZVswXS5jcmVhdGVkX2F0fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9