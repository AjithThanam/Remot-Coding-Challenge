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
  console.log("entered function");

  try {
    JSON.parse(str);
  } catch (e) {
    console.log("flase");
    return false;
  }

  console.log("true");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHdlZXRzIiwidHdlZXRKU09OIiwiY29uc29sZSIsImxvZyIsImlzSnNvbiIsIkpTT04iLCJwYXJzZSIsImZldGNoVHJ1bXBUd2VldHMiLCJmZXRjaEhpbGxhcnlUd2VldHMiLCJzdHIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGMkIscUJBR1JDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLEdBQU4sQ0FISDtBQUFBLE1BR25CQSxNQUhtQixnQkFHbkJBLE1BSG1COztBQUkzQixNQUFJQyxTQUFTLEdBQUc7QUFBRUQsVUFBTSxFQUFOQTtBQUFGLEdBQWhCO0FBRUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaOztBQUNBLE1BQUdDLE1BQU0sQ0FBQ0gsU0FBRCxDQUFULEVBQXFCO0FBQ2pCQSxhQUFTLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxTQUFTLENBQUNELE1BQXJCLENBQVo7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNIOztBQUVELFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1QLFFBQVEsQ0FBQ1csbUZBQWdCLEVBQWpCLENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLEVBSUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxRQUFRLENBQUNZLHFGQUFrQixFQUFuQixDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSixDQURKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUCxTQUFTLENBQUNELE1BRGYsQ0FUSixDQURKO0FBZ0JIOztHQTVCdUJMLEk7VUFFSEUsdUQsRUFDRUMsdUQ7OztLQUhDSCxJO0FBOEJqQixTQUFTUyxNQUFULENBQWdCSyxHQUFoQixFQUFvQjtBQUN2QlAsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7O0FBQ0EsTUFBSTtBQUNBRSxRQUFJLENBQUNDLEtBQUwsQ0FBV0csR0FBWDtBQUNILEdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDUlIsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLFdBQU8sS0FBUDtBQUNIOztBQUNERCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsU0FBTyxJQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA1YWIzYThkZTFjNDdkMzc5NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFRydW1wVHdlZXRzLCBmZXRjaEhpbGxhcnlUd2VldHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IHR3ZWV0cyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudHdlZXRzKTtcclxuICAgIGxldCB0d2VldEpTT04gPSB7IHR3ZWV0cyB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJiZWZvcmUgZW50ZXJpbmdcIilcclxuICAgIGlmKGlzSnNvbih0d2VldEpTT04pKXtcclxuICAgICAgICB0d2VldEpTT04gPSBKU09OLnBhcnNlKHR3ZWV0SlNPTi50d2VldHMpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbnRlcmVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaFRydW1wVHdlZXRzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hIaWxsYXJ5VHdlZXRzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0d2VldEpTT04udHdlZXRzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0pzb24oc3RyKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBmdW5jdGlvblwiKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmbGFzZVwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=