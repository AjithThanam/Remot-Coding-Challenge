webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, isJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJson", function() { return isJson; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/tweetAction */ "./redux/actions/tweetAction.js");
var _jsxFileName = "C:\\Users\\Home\\Desktop\\Remot\\Remot-Coding-Challenge\\nextjs-app\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tweets;
  }),
      tweets = _useSelector.tweets;

  var tweetJSON = {
    tweets: tweets
  };
  console.log("before entering");

  if (isJson(tweetJSON)) {
    tweetJSON = JSON.parse(tweetJSON.tweets);
    console.log("entered");
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__["fetchTrumpTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Show Trump's Tweets"), __jsx("button", {
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__["fetchHillaryTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Show Hillary's Tweets")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, tweetJSON.tweets));
}

_s(Home, "wzQCol/mV+/IK17GbNo3SlMYJmI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHdlZXRzIiwidHdlZXRKU09OIiwiY29uc29sZSIsImxvZyIsImlzSnNvbiIsIkpTT04iLCJwYXJzZSIsImZldGNoVHJ1bXBUd2VldHMiLCJmZXRjaEhpbGxhcnlUd2VldHMiLCJzdHIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGMkIscUJBR1JDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLEdBQU4sQ0FISDtBQUFBLE1BR25CQSxNQUhtQixnQkFHbkJBLE1BSG1COztBQUkzQixNQUFJQyxTQUFTLEdBQUc7QUFBRUQsVUFBTSxFQUFOQTtBQUFGLEdBQWhCO0FBRUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaOztBQUNBLE1BQUdDLE1BQU0sQ0FBQ0gsU0FBRCxDQUFULEVBQXFCO0FBQ2pCQSxhQUFTLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxTQUFTLENBQUNELE1BQXJCLENBQVo7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNIOztBQUVELFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1QLFFBQVEsQ0FBQ1csbUZBQWdCLEVBQWpCLENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLEVBSUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxRQUFRLENBQUNZLHFGQUFrQixFQUFuQixDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSixDQURKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUCxTQUFTLENBQUNELE1BRGYsQ0FUSixDQURKO0FBZ0JIOztHQTVCdUJMLEk7VUFFSEUsdUQsRUFDRUMsdUQ7OztLQUhDSCxJO0FBOEJqQixTQUFTUyxNQUFULENBQWdCSyxHQUFoQixFQUFvQjtBQUN2QixNQUFJO0FBQ0FKLFFBQUksQ0FBQ0MsS0FBTCxDQUFXRyxHQUFYO0FBQ0gsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlZmRiNmIwOTNlNDg3ODNjYWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZmV0Y2hUcnVtcFR3ZWV0cywgZmV0Y2hIaWxsYXJ5VHdlZXRzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyB0d2VldHMgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnR3ZWV0cyk7XHJcbiAgICBsZXQgdHdlZXRKU09OID0geyB0d2VldHMgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIGVudGVyaW5nXCIpXHJcbiAgICBpZihpc0pzb24odHdlZXRKU09OKSl7XHJcbiAgICAgICAgdHdlZXRKU09OID0gSlNPTi5wYXJzZSh0d2VldEpTT04udHdlZXRzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hUcnVtcFR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdyBUcnVtcCdzIFR3ZWV0c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoSGlsbGFyeVR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdyBIaWxsYXJ5J3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dHdlZXRKU09OLnR3ZWV0c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uKHN0cil7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==