webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, mainView, isJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainView", function() { return mainView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJson", function() { return isJson; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions/tweetAction */ "./redux/actions/tweetAction.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Home\\Desktop\\Remot\\Remot-Coding-Challenge\\nextjs-app\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  var tweeter = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state;
  });
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "md-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "title",
    style: {
      fontSize: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, "Welcome To The Tweet Fetcher"), __jsx("h5", {
    style: {
      margin: " 0 0 20px 0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }, tweeter.tweeter.info), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "danger active",
    block: true,
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["fetchTrumpTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Show Trump's Tweets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary active",
    block: true,
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["fetchHillaryTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Show Hillary's Tweets"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, mainView()))));
}

_s(Home, "njzrAtE7cE7+sn/kTwnvtqnEKpc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});

_c = Home;
function mainView() {
  if (tweeter.tweeter.selected) {
    {
      tweeter.tweeter.tweets.map(function (tweet, index) {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          className: "sml-card",
          block: true,
          style: {
            margin: "10px",
            width: "100%"
          },
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }
        }, "Tweet #", index + 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 19
          }
        }, tweeter.tweeter.dates[index])));
      });
    }
  } else {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "sml-card",
      block: true,
      style: {
        margin: "10px",
        width: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 19
      }
    }, tweeter.tweeter.info)));
  }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZvbnRTaXplIiwibWFyZ2luIiwiaW5mbyIsImZldGNoVHJ1bXBUd2VldHMiLCJmZXRjaEhpbGxhcnlUd2VldHMiLCJtYWluVmlldyIsInNlbGVjdGVkIiwidHdlZXRzIiwibWFwIiwidHdlZXQiLCJpbmRleCIsIndpZHRoIiwiZGF0ZXMiLCJpc0pzb24iLCJzdHIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBNUI7QUFFQSxTQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxZ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SSxDQUFDQyxLQUFMLENBQVdKLEdBQVg7QUFDSCxHQUZELENBRUUsT0FBT0ssQ0FBUCxFQUFVO0FBQ1JKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxXQUFPLEtBQVA7QUFDSDs7QUFDREQsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLFNBQU8sSUFBUDtBQUNIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyYzEzY2RjMDg0M2VmMTA5ODUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZmV0Y2hUcnVtcFR3ZWV0cywgZmV0Y2hIaWxsYXJ5VHdlZXRzIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbidcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENhcmQsIEJ1dHRvbiwgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgdHdlZXRlciAgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEp1bWJvdHJvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjUwcHhcIiB9fT5XZWxjb21lIFRvIFRoZSBUd2VldCBGZXRjaGVyPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IG1hcmdpbjogXCIgMCAwIDIwcHggMFwiIH19Pnt0d2VldGVyLnR3ZWV0ZXIuaW5mb308L2g1PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXIgYWN0aXZlXCIgYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hUcnVtcFR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgVHJ1bXAncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5IGFjdGl2ZVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoSGlsbGFyeVR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgSGlsbGFyeSdzIFR3ZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIHttYWluVmlldygpfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPiBcclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1haW5WaWV3KCl7XHJcbiAgICAgIGlmKHR3ZWV0ZXIudHdlZXRlci5zZWxlY3RlZCl7XHJcbiAgICAgICAgICB7dHdlZXRlci50d2VldGVyLnR3ZWV0cy5tYXAoZnVuY3Rpb24odHdlZXQsIGluZGV4KXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNtbC1jYXJkXCIgYmxvY2sgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiwgd2lkdGg6XCIxMDAlXCIgfX0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Ud2VldCAjeyBpbmRleCArIDEgfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57IHR3ZWV0IH08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci5kYXRlc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzbWwtY2FyZFwiIGJsb2NrIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIsIHdpZHRoOlwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+eyB0d2VldGVyLnR3ZWV0ZXIuaW5mbyB9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSnNvbihzdHIpe1xyXG4gICAgY29uc29sZS5sb2coXCJlbnRlcmVkIGZ1bmN0aW9uXCIpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZsYXNlXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ0cnVlXCIpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==