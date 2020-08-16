webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, mainView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainView", function() { return mainView; });
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
  }, tweeter.tweeter.selected && tweeter.tweeter.tweets.map(function (tweet, index) {
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
        lineNumber: 34,
        columnNumber: 23
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, "Tweet #", index + 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 27
      }
    }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 27
      }
    }, tweeter.tweeter.dates[index])));
  }), "}"))));
}

_s(Home, "njzrAtE7cE7+sn/kTwnvtqnEKpc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});

_c = Home;
function mainView(obj) {
  if (obj.tweeter.selected) {
    {
      obj.tweeter.tweets.map(function (tweet, index) {
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
            lineNumber: 57,
            columnNumber: 15
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }
        }, "Tweet #", index + 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 19
          }
        }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 19
          }
        }, obj.tweeter.dates[index])));
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
        lineNumber: 71,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, obj.tweeter.info)));
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZvbnRTaXplIiwibWFyZ2luIiwiaW5mbyIsImZldGNoVHJ1bXBUd2VldHMiLCJmZXRjaEhpbGxhcnlUd2VldHMiLCJzZWxlY3RlZCIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaW5kZXgiLCJ3aWR0aCIsImRhdGVzIiwibWFpblZpZXciLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBNUI7QUFFQSxTQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFjRCxLQUFkLENBREYsRUFFRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0dLLEdBQUcsQ0FBQ2hCLE9BQUosQ0FBWWMsS0FBWixDQUFrQkYsS0FBbEIsQ0FESCxDQUZGLENBRkYsQ0FERjtBQVdELE9BWkE7QUFZRTtBQUNOLEdBZEQsTUFlSTtBQUNGLFdBQ0UsTUFBQyxvREFBRDtBQUFNLGVBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFLLE1BQWhDO0FBQWlDLFdBQUssRUFBRTtBQUFFUixjQUFNLEVBQUUsTUFBVjtBQUFrQlMsYUFBSyxFQUFDO0FBQXhCLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjRyxHQUFHLENBQUNoQixPQUFKLENBQVlLLElBQTFCLENBREYsQ0FERixDQURGO0FBT0Q7QUFDRiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MTEwYmE2YWE4MzZlNmQwNmMyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGZldGNoVHJ1bXBUd2VldHMsIGZldGNoSGlsbGFyeVR3ZWV0cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdHdlZXRBY3Rpb24nXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDYXJkLCBCdXR0b24sIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHR3ZWV0ZXIgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxKdW1ib3Ryb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX0+V2VsY29tZSBUbyBUaGUgVHdlZXQgRmV0Y2hlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW46IFwiIDAgMCAyMHB4IDBcIiB9fT57dHdlZXRlci50d2VldGVyLmluZm99PC9oNT5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyIGFjdGl2ZVwiIGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeSBhY3RpdmVcIiBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaEhpbGxhcnlUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICB7Lyoge21haW5WaWV3KHR3ZWV0ZXIpfSAqL31cclxuICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIuc2VsZWN0ZWQgJiZcclxuICAgICAgICAgICAgICAgICAgdHdlZXRlci50d2VldGVyLnR3ZWV0cy5tYXAoZnVuY3Rpb24odHdlZXQsIGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzbWwtY2FyZFwiIGJsb2NrIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIsIHdpZHRoOlwiMTAwJVwiIH19IGtleT17IGluZGV4IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Ud2VldCAjeyBpbmRleCArIDEgfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+eyB0d2VldCB9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLmRhdGVzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+IFxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFpblZpZXcob2JqKXtcclxuICAgICAgaWYob2JqLnR3ZWV0ZXIuc2VsZWN0ZWQpe1xyXG4gICAgICAgICAge29iai50d2VldGVyLnR3ZWV0cy5tYXAoZnVuY3Rpb24odHdlZXQsIGluZGV4KXtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNtbC1jYXJkXCIgYmxvY2sgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiwgd2lkdGg6XCIxMDAlXCIgfX0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Ud2VldCAjeyBpbmRleCArIDEgfTwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57IHR3ZWV0IH08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge29iai50d2VldGVyLmRhdGVzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNtbC1jYXJkXCIgYmxvY2sgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiwgd2lkdGg6XCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPENhcmQuVGl0bGU+eyBvYmoudHdlZXRlci5pbmZvIH08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=