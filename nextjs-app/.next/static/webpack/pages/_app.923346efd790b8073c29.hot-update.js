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
  info: "Pleases Select Who's Tweets You Would Like To See",
  selected: false
};
/**
 * Standard switch case to handle wich action has been fired off 
 * to send the proper data back to the component
 * 
 * Informations being sent off
 * tweets: action.payload -> Contains the array of tweets
 * dates: action.dates - > Contains the array of dates for the tweets
 * info: - > a string to be displayed to give a sense of what is being showed
 * Selected: -> a boolean that based on its value will determin what gets rendered on the page
 *               if true the tweets will be displayed, if false the page will be empty (i.e. for the reset)
 */

var tweetReducer = function tweetReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["TRUMP_TWEETS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tweets: action.payload,
        dates: action.dates,
        info: "You Are Currently Viewing Donald Trump's Tweets",
        selected: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["HILLARY_TWEETS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tweets: action.payload,
        dates: action.dates,
        info: "You Are Currently Viewing Hillary Clinton's Tweets",
        selected: true
      });

    /**
     * This doesnt contain any data since we dont want to display anything
     * we want the view to be cleared of the tweets if any 
     */

    case _types__WEBPACK_IMPORTED_MODULE_1__["RESET_TWEETS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        info: "View Cleared! Pleases Select Who's Tweets You Would Like To See",
        selected: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvdHdlZXRSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImluZm8iLCJzZWxlY3RlZCIsInR3ZWV0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwidHdlZXRzIiwicGF5bG9hZCIsImRhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2hCQyxNQUFJLEVBQUUsbURBRFU7QUFFaEJDLFVBQVEsRUFBRTtBQUZNLENBQXJCO0FBS0E7Ozs7Ozs7Ozs7OztBQVdPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkosWUFBeUI7QUFBQSxNQUFYSyxNQUFXOztBQUMxRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQyxtREFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlJLGNBQU0sRUFBRUgsTUFBTSxDQUFDSSxPQUZuQjtBQUdJQyxhQUFLLEVBQUVMLE1BQU0sQ0FBQ0ssS0FIbEI7QUFJSVQsWUFBSSxFQUFFLGlEQUpWO0FBS0lDLGdCQUFRLEVBQUU7QUFMZDs7QUFPSixTQUFLSyxxREFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlJLGNBQU0sRUFBRUgsTUFBTSxDQUFDSSxPQUZuQjtBQUdJQyxhQUFLLEVBQUVMLE1BQU0sQ0FBQ0ssS0FIbEI7QUFJSVQsWUFBSSxFQUFFLG9EQUpWO0FBS0lDLGdCQUFRLEVBQUU7QUFMZDs7QUFRSjs7Ozs7QUFJQSxTQUFLSyxtREFBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlILFlBQUksRUFBRSxpRUFGVjtBQUdJQyxnQkFBUSxFQUFFO0FBSGQ7O0FBS0o7QUFDSSxhQUFPRSxLQUFQO0FBN0JSO0FBK0JILENBaENNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTIzMzQ2ZWZkNzkwYjgwNzNjMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgIGluZm86IFwiUGxlYXNlcyBTZWxlY3QgV2hvJ3MgVHdlZXRzIFlvdSBXb3VsZCBMaWtlIFRvIFNlZVwiLFxyXG4gICAgIHNlbGVjdGVkOiBmYWxzZVxyXG59XHJcblxyXG4vKipcclxuICogU3RhbmRhcmQgc3dpdGNoIGNhc2UgdG8gaGFuZGxlIHdpY2ggYWN0aW9uIGhhcyBiZWVuIGZpcmVkIG9mZiBcclxuICogdG8gc2VuZCB0aGUgcHJvcGVyIGRhdGEgYmFjayB0byB0aGUgY29tcG9uZW50XHJcbiAqIFxyXG4gKiBJbmZvcm1hdGlvbnMgYmVpbmcgc2VudCBvZmZcclxuICogdHdlZXRzOiBhY3Rpb24ucGF5bG9hZCAtPiBDb250YWlucyB0aGUgYXJyYXkgb2YgdHdlZXRzXHJcbiAqIGRhdGVzOiBhY3Rpb24uZGF0ZXMgLSA+IENvbnRhaW5zIHRoZSBhcnJheSBvZiBkYXRlcyBmb3IgdGhlIHR3ZWV0c1xyXG4gKiBpbmZvOiAtID4gYSBzdHJpbmcgdG8gYmUgZGlzcGxheWVkIHRvIGdpdmUgYSBzZW5zZSBvZiB3aGF0IGlzIGJlaW5nIHNob3dlZFxyXG4gKiBTZWxlY3RlZDogLT4gYSBib29sZWFuIHRoYXQgYmFzZWQgb24gaXRzIHZhbHVlIHdpbGwgZGV0ZXJtaW4gd2hhdCBnZXRzIHJlbmRlcmVkIG9uIHRoZSBwYWdlXHJcbiAqICAgICAgICAgICAgICAgaWYgdHJ1ZSB0aGUgdHdlZXRzIHdpbGwgYmUgZGlzcGxheWVkLCBpZiBmYWxzZSB0aGUgcGFnZSB3aWxsIGJlIGVtcHR5IChpLmUuIGZvciB0aGUgcmVzZXQpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdHdlZXRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgdHlwZXMuVFJVTVBfVFdFRVRTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0d2VldHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZXM6IGFjdGlvbi5kYXRlcyxcclxuICAgICAgICAgICAgICAgIGluZm86IFwiWW91IEFyZSBDdXJyZW50bHkgVmlld2luZyBEb25hbGQgVHJ1bXAncyBUd2VldHNcIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIHR5cGVzLkhJTExBUllfVFdFRVRTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0d2VldHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZXM6IGFjdGlvbi5kYXRlcyxcclxuICAgICAgICAgICAgICAgIGluZm86IFwiWW91IEFyZSBDdXJyZW50bHkgVmlld2luZyBIaWxsYXJ5IENsaW50b24ncyBUd2VldHNcIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBkb2VzbnQgY29udGFpbiBhbnkgZGF0YSBzaW5jZSB3ZSBkb250IHdhbnQgdG8gZGlzcGxheSBhbnl0aGluZ1xyXG4gICAgICAgICAqIHdlIHdhbnQgdGhlIHZpZXcgdG8gYmUgY2xlYXJlZCBvZiB0aGUgdHdlZXRzIGlmIGFueSBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjYXNlIHR5cGVzLlJFU0VUX1RXRUVUUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaW5mbzogXCJWaWV3IENsZWFyZWQhIFBsZWFzZXMgU2VsZWN0IFdobydzIFR3ZWV0cyBZb3UgV291bGQgTGlrZSBUbyBTZWVcIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9