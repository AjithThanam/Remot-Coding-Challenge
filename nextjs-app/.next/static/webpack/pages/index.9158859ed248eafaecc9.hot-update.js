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
    className: "text-center",
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
    className: "jsx-3108039959" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }
  }, "Welcome To The Tweet Fetcher"), __jsx("p", {
    className: "jsx-3108039959",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "jsx-3108039959",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, tweeter.tweeter.user)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "danger active",
    block: true,
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
    variant: "primary active",
    block: true,
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
      className: "sml-card",
      block: true,
      style: {
        margin: "15px 10px"
      },
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 23
      }
    }, "Tweet #", index + 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, tweeter.tweeter.dates[index])));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3108039959",
    __self: this
  }, ".container.jsx-3108039959{margin:50px;}.tweet.jsx-3108039959{margin:10px;}.title.jsx-3108039959{font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSG9tZVxcRGVza3RvcFxcUmVtb3RcXFJlbW90LUNvZGluZy1DaGFsbGVuZ2VcXG5leHRqcy1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGtCLEFBR3lCLEFBS2YsQUFJQSxZQVJDLEFBSUEsR0FJQSIsImZpbGUiOiJDOlxcVXNlcnNcXEhvbWVcXERlc2t0b3BcXFJlbW90XFxSZW1vdC1Db2RpbmctQ2hhbGxlbmdlXFxuZXh0anMtYXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZmV0Y2hUcnVtcFR3ZWV0cywgZmV0Y2hIaWxsYXJ5VHdlZXRzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbidcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENhcmQsIEJ1dHRvbiwgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdHdlZXRlciAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSk7XHJcbiAgICAvL2NvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcclxuICAgIC8vbGV0IHR3ZWV0SlNPTiA9IHsgdHdlZXRlcn1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0d2VldGVyLnR3ZWV0ZXIpXHJcbiAgICAvLyBpZihpc0pzb24odHdlZXRKU09OKSl7XHJcbiAgICAvLyAgICAgdHdlZXRKU09OID0gSlNPTi5wYXJzZSh0d2VldEpTT04udHdlZXRlcikgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEp1bWJvdHJvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPldlbGNvbWUgVG8gVGhlIFR3ZWV0IEZldGNoZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3R3ZWV0ZXIudHdlZXRlci51c2VyfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXIgYWN0aXZlXCIgYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hUcnVtcFR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgVHJ1bXAncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5IGFjdGl2ZVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoSGlsbGFyeVR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgSGlsbGFyeSdzIFR3ZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci50d2VldHMubWFwKGZ1bmN0aW9uKHR3ZWV0LCBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzbWwtY2FyZFwiIGJsb2NrIHN0eWxlPXt7IG1hcmdpbjogXCIxNXB4IDEwcHhcIiB9fSBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlR3ZWV0ICN7IGluZGV4ICsgMSB9PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnsgdHdlZXQgfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLmRhdGVzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50d2VldHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6NTBweFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgYH08L3N0eWxlPiBcclxuXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNvbihzdHIpe1xyXG4gICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGZ1bmN0aW9uXCIpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZsYXNlXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Home\\\\Desktop\\\\Remot\\\\Remot-Coding-Challenge\\\\nextjs-app\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmV0Y2hUcnVtcFR3ZWV0cyIsImZldGNoSGlsbGFyeVR3ZWV0cyIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaW5kZXgiLCJtYXJnaW4iLCJkYXRlcyIsImlzSnNvbiIsInN0ciIsIkpTT04iLCJwYXJzZSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBNUIsQ0FIMkIsQ0FJM0I7QUFDQTs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQU8sQ0FBQ0EsT0FBcEIsRUFQMkIsQ0FRM0I7QUFDQTtBQUNBOztBQUVBLFNBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxhQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBYyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsT0FBTyxDQUFDQSxPQUFSLENBQWdCSyxJQUFyQixDQURGLENBRkYsRUFLSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLGVBQWhCO0FBQWdDLFNBQUssTUFBckM7QUFBc0MsV0FBTyxFQUFFO0FBQUEsYUFBTVAsUUFBUSxDQUFDUSxtRkFBZ0IsRUFBakIsQ0FBZDtBQUFBLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosRUFRSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLGdCQUFoQjtBQUFpQyxTQUFLLE1BQXRDO0FBQXVDLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFFBQVEsQ0FBQ1MscUZBQWtCLEVBQW5CLENBQWQ7QUFBQSxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJKLENBREYsQ0FESixFQWVFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxPQUFPLENBQUNBLE9BQVIsQ0FBZ0JRLE1BQWhCLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUFzQjtBQUNoRCxXQUNFLE1BQUMsb0RBQUQ7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBMkIsV0FBSyxNQUFoQztBQUFpQyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFO0FBQVYsT0FBeEM7QUFBaUUsU0FBRyxFQUFHRCxLQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRCxDQUFNLE1BQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBc0JBLEtBQUssR0FBRyxDQUE5QixDQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBY0QsS0FBZCxDQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVixPQUFPLENBQUNBLE9BQVIsQ0FBZ0JhLEtBQWhCLENBQXNCRixLQUF0QixDQURILENBRkYsQ0FGRixDQURGO0FBV0QsR0FaQSxDQURILENBREYsQ0FmRixDQURGO0FBQUE7QUFBQTtBQUFBLHkwSUFESjtBQW9ESDs7R0FoRXVCZCxJO1VBRUhFLHVELEVBQ0FFLHVEOzs7S0FIR0osSTtBQWtFakIsU0FBU2lCLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQW9CO0FBQ3ZCWixTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjs7QUFDQSxNQUFJO0FBQ0FZLFFBQUksQ0FBQ0MsS0FBTCxDQUFXRixHQUFYO0FBQ0gsR0FGRCxDQUVFLE9BQU9HLENBQVAsRUFBVTtBQUNSZixXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxTQUFPLElBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTU4ODU5ZWQyNDhlYWZhZWNjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGZldGNoVHJ1bXBUd2VldHMsIGZldGNoSGlsbGFyeVR3ZWV0cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdHdlZXRBY3Rpb24nXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDYXJkLCBCdXR0b24sIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHR3ZWV0ZXIgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUpO1xyXG4gICAgLy9jb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXHJcbiAgICAvL2xldCB0d2VldEpTT04gPSB7IHR3ZWV0ZXJ9XHJcblxyXG4gICAgY29uc29sZS5sb2codHdlZXRlci50d2VldGVyKVxyXG4gICAgLy8gaWYoaXNKc29uKHR3ZWV0SlNPTikpe1xyXG4gICAgLy8gICAgIHR3ZWV0SlNPTiA9IEpTT04ucGFyc2UodHdlZXRKU09OLnR3ZWV0ZXIpICBcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxKdW1ib3Ryb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5XZWxjb21lIFRvIFRoZSBUd2VldCBGZXRjaGVyPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt0d2VldGVyLnR3ZWV0ZXIudXNlcn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyIGFjdGl2ZVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeSBhY3RpdmVcIiBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaEhpbGxhcnlUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIudHdlZXRzLm1hcChmdW5jdGlvbih0d2VldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic21sLWNhcmRcIiBibG9jayBzdHlsZT17eyBtYXJnaW46IFwiMTVweCAxMHB4XCIgfX0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Ud2VldCAjeyBpbmRleCArIDEgfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57IHR3ZWV0IH08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci5kYXRlc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudHdlZXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjUwcHhcclxuICAgICAgICAgIH1cclxuICAgICAgIGB9PC9zdHlsZT4gXHJcblxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0pzb24oc3RyKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlZCBmdW5jdGlvblwiKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmbGFzZVwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=