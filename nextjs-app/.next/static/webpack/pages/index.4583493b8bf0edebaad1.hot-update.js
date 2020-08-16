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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
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
  //let tweetJSON = { tweeter}

  console.log(tweeter.tweeter); // if(isJson(tweetJSON)){
  //     tweetJSON = JSON.parse(tweetJSON.tweeter)  
  // }

  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "md-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-3925120640",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, "Welcome To The Tweet Fetcher"), __jsx("p", {
    className: "jsx-3925120640",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  }, tweeter.tweeter.user), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary active block",
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__["fetchTrumpTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Show Trump's Tweets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary active block",
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_2__["fetchHillaryTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Show Hillary's Tweets"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "justify-content-md-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, tweeter.tweeter.tweets.map(function (tweet, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      className: "sml-card tweet",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 23
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, tweeter.tweeter.dates[index])));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3925120640",
    __self: this
  }, ".container.jsx-3925120640{margin:50px;}.container.jsx-3925120640{margin:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSG9tZVxcRGVza3RvcFxcUmVtb3RcXFJlbW90LUNvZGluZy1DaGFsbGVuZ2VcXG5leHRqcy1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGtCLEFBR3lCLEFBS2YsWUFKQyxBQUlBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSG9tZVxcRGVza3RvcFxcUmVtb3RcXFJlbW90LUNvZGluZy1DaGFsbGVuZ2VcXG5leHRqcy1hcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFRydW1wVHdlZXRzLCBmZXRjaEhpbGxhcnlUd2VldHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ2FyZCwgQnV0dG9uLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0d2VldGVyICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKTtcclxuICAgIC8vY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgLy9sZXQgdHdlZXRKU09OID0geyB0d2VldGVyfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHR3ZWV0ZXIudHdlZXRlcilcclxuICAgIC8vIGlmKGlzSnNvbih0d2VldEpTT04pKXtcclxuICAgIC8vICAgICB0d2VldEpTT04gPSBKU09OLnBhcnNlKHR3ZWV0SlNPTi50d2VldGVyKSAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1kLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgVG8gVGhlIFR3ZWV0IEZldGNoZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5IGFjdGl2ZSBibG9ja1wiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeSBhY3RpdmUgYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaEhpbGxhcnlUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIudHdlZXRzLm1hcChmdW5jdGlvbih0d2VldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic21sLWNhcmQgdHdlZXRcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+eyB0d2VldCB9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIuZGF0ZXNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBgfTwvc3R5bGU+IFxyXG5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uKHN0cil7XHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZnVuY3Rpb25cIilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmxhc2VcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Home\\\\Desktop\\\\Remot\\\\Remot-Coding-Challenge\\\\nextjs-app\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmV0Y2hUcnVtcFR3ZWV0cyIsImZldGNoSGlsbGFyeVR3ZWV0cyIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaW5kZXgiLCJkYXRlcyIsImlzSnNvbiIsInN0ciIsIkpTT04iLCJwYXJzZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBNUIsQ0FIMkIsQ0FJM0I7QUFDQTs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQU8sQ0FBQ0EsT0FBcEIsRUFQMkIsQ0FRM0I7QUFDQTtBQUNBOztBQUVBLFNBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxPQUFPLENBQUNBLE9BQVIsQ0FBZ0JLLElBRG5CLENBRkYsRUFLSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLHNCQUFoQjtBQUF1QyxXQUFPLEVBQUU7QUFBQSxhQUFNUCxRQUFRLENBQUNRLG1GQUFnQixFQUFqQixDQUFkO0FBQUEsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMSixFQVFJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsc0JBQWhCO0FBQXVDLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFFBQVEsQ0FBQ1MscUZBQWtCLEVBQW5CLENBQWQ7QUFBQSxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJKLENBREYsQ0FESixFQWVFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxPQUFPLENBQUNBLE9BQVIsQ0FBZ0JRLE1BQWhCLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUFzQjtBQUNoRCxXQUNFLE1BQUMsb0RBQUQ7QUFBTSxlQUFTLEVBQUMsZ0JBQWhCO0FBQWlDLFNBQUcsRUFBR0EsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNELEtBQWQsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsT0FBTyxDQUFDQSxPQUFSLENBQWdCWSxLQUFoQixDQUFzQkQsS0FBdEIsQ0FESCxDQUZGLENBREYsQ0FERjtBQVVELEdBWEEsQ0FESCxDQURGLENBZkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxtL0hBREo7QUErQ0g7O0dBM0R1QmQsSTtVQUVIRSx1RCxFQUNBRSx1RDs7O0tBSEdKLEk7QUE2RGpCLFNBQVNnQixNQUFULENBQWdCQyxHQUFoQixFQUFvQjtBQUN2QlgsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7O0FBQ0EsTUFBSTtBQUNBVyxRQUFJLENBQUNDLEtBQUwsQ0FBV0YsR0FBWDtBQUNILEdBRkQsQ0FFRSxPQUFPRyxDQUFQLEVBQVU7QUFDUmQsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLFdBQU8sS0FBUDtBQUNIOztBQUNERCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsU0FBTyxJQUFQO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDU4MzQ5M2I4YmYwZWRlYmFhZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFRydW1wVHdlZXRzLCBmZXRjaEhpbGxhcnlUd2VldHMgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ2FyZCwgQnV0dG9uLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0d2VldGVyICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKTtcclxuICAgIC8vY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgLy9sZXQgdHdlZXRKU09OID0geyB0d2VldGVyfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHR3ZWV0ZXIudHdlZXRlcilcclxuICAgIC8vIGlmKGlzSnNvbih0d2VldEpTT04pKXtcclxuICAgIC8vICAgICB0d2VldEpTT04gPSBKU09OLnBhcnNlKHR3ZWV0SlNPTi50d2VldGVyKSAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1kLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgVG8gVGhlIFR3ZWV0IEZldGNoZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5IGFjdGl2ZSBibG9ja1wiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeSBhY3RpdmUgYmxvY2tcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaEhpbGxhcnlUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIudHdlZXRzLm1hcChmdW5jdGlvbih0d2VldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic21sLWNhcmQgdHdlZXRcIiBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+eyB0d2VldCB9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIuZGF0ZXNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICBgfTwvc3R5bGU+IFxyXG5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uKHN0cil7XHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZnVuY3Rpb25cIilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmxhc2VcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9