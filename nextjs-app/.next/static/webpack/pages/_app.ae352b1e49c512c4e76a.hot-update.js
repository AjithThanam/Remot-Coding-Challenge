webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/tweetReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/tweetReducer.js ***!
  \****************************************/
/*! exports provided: tweetReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweetReducer", function() { return tweetReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  tweets: ["Who's Tweets Would You Like To See"],
  user: "No User Selected"
};
var tweetReducer = function tweetReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["TRUMP_TWEETS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tweets: action.payload,
        user: "Donald Trump"
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["HILLARY_TWEETS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tweets: action.payload,
        user: "Hillary Clinton"
      });

    default:
      return state;
  }
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvdHdlZXRSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInR3ZWV0cyIsInVzZXIiLCJ0d2VldFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRSxDQUFDLG9DQUFELENBRFM7QUFFakJDLE1BQUksRUFBRTtBQUZXLENBQXJCO0FBS08sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSixZQUF5QjtBQUFBLE1BQVhLLE1BQVc7O0FBQzFELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLG1EQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUgsY0FBTSxFQUFFSSxNQUFNLENBQUNHLE9BRm5CO0FBR0lOLFlBQUksRUFBRTtBQUhWOztBQUtKLFNBQUtLLHFEQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUgsY0FBTSxFQUFFSSxNQUFNLENBQUNHLE9BRm5CO0FBR0lOLFlBQUksRUFBRTtBQUhWOztBQUtKO0FBQ0ksYUFBT0UsS0FBUDtBQWRSO0FBZ0JILENBakJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWUzNTJiMWU0OWM1MTJjNGU3NmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdHdlZXRzOiBbXCJXaG8ncyBUd2VldHMgV291bGQgWW91IExpa2UgVG8gU2VlXCJdLFxyXG4gICAgdXNlcjogXCJObyBVc2VyIFNlbGVjdGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHR3ZWV0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIHR5cGVzLlRSVU1QX1RXRUVUUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdHdlZXRzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIHVzZXI6IFwiRG9uYWxkIFRydW1wXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdHlwZXMuSElMTEFSWV9UV0VFVFM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHR3ZWV0czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBcIkhpbGxhcnkgQ2xpbnRvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=