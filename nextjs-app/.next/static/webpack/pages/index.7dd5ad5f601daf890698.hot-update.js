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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/tweetAction */ "./redux/actions/tweetAction.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Home\\Desktop\\Remot\\Remot-Coding-Challenge\\nextjs-app\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var tweeter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state;
  }); //const { user } = useSelector(state => state.user)

  var tweetJSON = {
    tweeter: tweeter
  };
  console.log(tweeter.tweeter);

  if (isJson(tweetJSON)) {
    tweetJSON = JSON.parse(tweetJSON.tweeter);
  }

  return __jsx("div", {
    className: "jsx-2594527702" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2594527702",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-2594527702",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Tweet Fetcher"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__["fetchTrumpTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Show Trump's Tweets"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__["fetchHillaryTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Show Hillary's Tweets")), __jsx("div", {
    className: "jsx-2594527702",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, tweeter.tweeter.user), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2594527702",
    __self: this
  }, ".container.jsx-2594527702{margin:50px;}p.jsx-2594527702{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSG9tZVxcRGVza3RvcFxcUmVtb3RcXFJlbW90LUNvZGluZy1DaGFsbGVuZ2VcXG5leHRqcy1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3dCLEFBRzZCLEFBR0QsV0FDWCxDQUhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSG9tZVxcRGVza3RvcFxcUmVtb3RcXFJlbW90LUNvZGluZy1DaGFsbGVuZ2VcXG5leHRqcy1hcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFRydW1wVHdlZXRzLCBmZXRjaEhpbGxhcnlUd2VldHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0d2VldGVyICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKTtcclxuICAgIC8vY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgbGV0IHR3ZWV0SlNPTiA9IHsgdHdlZXRlcn1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0d2VldGVyLnR3ZWV0ZXIpXHJcbiAgICBpZihpc0pzb24odHdlZXRKU09OKSl7XHJcbiAgICAgICAgdHdlZXRKU09OID0gSlNPTi5wYXJzZSh0d2VldEpTT04udHdlZXRlcikgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5Ud2VldCBGZXRjaGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hUcnVtcFR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdyBUcnVtcCdzIFR3ZWV0c1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoSGlsbGFyeVR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdyBIaWxsYXJ5J3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLnVzZXJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNvbihzdHIpe1xyXG4gICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGZ1bmN0aW9uXCIpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZsYXNlXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Home\\\\Desktop\\\\Remot\\\\Remot-Coding-Challenge\\\\nextjs-app\\\\pages\\\\index.js */"));
}

_s(Home, "njzrAtE7cE7+sn/kTwnvtqnEKpc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInR3ZWV0SlNPTiIsImNvbnNvbGUiLCJsb2ciLCJpc0pzb24iLCJKU09OIiwicGFyc2UiLCJmZXRjaFRydW1wVHdlZXRzIiwiZmV0Y2hIaWxsYXJ5VHdlZXRzIiwidXNlciIsInN0ciIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBNUIsQ0FIMkIsQ0FJM0I7O0FBQ0EsTUFBSUMsU0FBUyxHQUFHO0FBQUVILFdBQU8sRUFBUEE7QUFBRixHQUFoQjtBQUVBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBTyxDQUFDQSxPQUFwQjs7QUFDQSxNQUFHTSxNQUFNLENBQUNILFNBQUQsQ0FBVCxFQUFxQjtBQUNqQkEsYUFBUyxHQUFHSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsU0FBUyxDQUFDSCxPQUFyQixDQUFaO0FBQ0g7O0FBRUQsU0FDSTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRixRQUFRLENBQUNXLG1GQUFnQixFQUFqQixDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSixFQUtJLE1BQUMsOERBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNWCxRQUFRLENBQUNZLHFGQUFrQixFQUFuQixDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFMSixDQURKLEVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tWLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQlcsSUFEckIsQ0FWSjtBQUFBO0FBQUE7QUFBQSxxd0ZBREo7QUEyQkg7O0dBdkN1QmQsSTtVQUVIRSx1RCxFQUNBRSx1RDs7O0tBSEdKLEk7QUF5Q2pCLFNBQVNTLE1BQVQsQ0FBZ0JNLEdBQWhCLEVBQW9CO0FBQ3ZCUixTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjs7QUFDQSxNQUFJO0FBQ0FFLFFBQUksQ0FBQ0MsS0FBTCxDQUFXSSxHQUFYO0FBQ0gsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNSVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxTQUFPLElBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZGQ1YWQ1ZjYwMWRhZjg5MDY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGZldGNoVHJ1bXBUd2VldHMsIGZldGNoSGlsbGFyeVR3ZWV0cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdHdlZXRBY3Rpb24nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHR3ZWV0ZXIgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUpO1xyXG4gICAgLy9jb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcbiAgICBsZXQgdHdlZXRKU09OID0geyB0d2VldGVyfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHR3ZWV0ZXIudHdlZXRlcilcclxuICAgIGlmKGlzSnNvbih0d2VldEpTT04pKXtcclxuICAgICAgICB0d2VldEpTT04gPSBKU09OLnBhcnNlKHR3ZWV0SlNPTi50d2VldGVyKSAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPlR3ZWV0IEZldGNoZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaFRydW1wVHdlZXRzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hIaWxsYXJ5VHdlZXRzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIudXNlcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uKHN0cil7XHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZnVuY3Rpb25cIilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmxhc2VcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9