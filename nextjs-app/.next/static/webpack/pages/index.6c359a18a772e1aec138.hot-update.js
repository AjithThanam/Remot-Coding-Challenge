webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
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
    style: {
      fontStyle: "bold"
    },
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
  }, "Show Hillary's Tweets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary active",
    block: true,
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["resetView"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "Clear Tweets"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
        lineNumber: 36,
        columnNumber: 23
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, "Tweet #", index + 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 27
      }
    }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 27
      }
    }, tweeter.tweeter.dates[index])));
  })))));
}

_s(Home, "njzrAtE7cE7+sn/kTwnvtqnEKpc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZvbnRTaXplIiwibWFyZ2luIiwiaW5mbyIsImZvbnRTdHlsZSIsImZldGNoVHJ1bXBUd2VldHMiLCJmZXRjaEhpbGxhcnlUd2VldHMiLCJyZXNldFZpZXciLCJzZWxlY3RlZCIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaW5kZXgiLCJ3aWR0aCIsImRhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBSUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBNUI7QUFFQSxTQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNKLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQkssSUFBdkQsQ0FGRixFQUlJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsZUFBaEI7QUFBZ0MsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQXZDO0FBQThELFNBQUssTUFBbkU7QUFBb0UsV0FBTyxFQUFFO0FBQUEsYUFBTVIsUUFBUSxDQUFDUyxtRkFBZ0IsRUFBakIsQ0FBZDtBQUFBLEtBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkosRUFPSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLGdCQUFoQjtBQUFpQyxTQUFLLE1BQXRDO0FBQXVDLFdBQU8sRUFBRTtBQUFBLGFBQU1ULFFBQVEsQ0FBQ1UscUZBQWtCLEVBQW5CLENBQWQ7QUFBQSxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBKLEVBVUksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxrQkFBaEI7QUFBbUMsU0FBSyxNQUF4QztBQUF5QyxXQUFPLEVBQUU7QUFBQSxhQUFNVixRQUFRLENBQUNXLDRFQUFTLEVBQVYsQ0FBZDtBQUFBLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkosQ0FERixDQURKLEVBaUJHLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxPQUFPLENBQUNBLE9BQVIsQ0FBZ0JVLFFBQWhCLElBQ0NWLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQlcsTUFBaEIsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQVNDLEtBQVQsRUFBZ0JDLEtBQWhCLEVBQXNCO0FBQy9DLFdBQ0UsTUFBQyxvREFBRDtBQUFNLGVBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFLLE1BQWhDO0FBQWlDLFdBQUssRUFBRTtBQUFFVixjQUFNLEVBQUUsTUFBVjtBQUFrQlcsYUFBSyxFQUFDO0FBQXhCLE9BQXhDO0FBQTBFLFNBQUcsRUFBR0QsS0FBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXNCQSxLQUFLLEdBQUcsQ0FBOUIsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNELEtBQWQsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2IsT0FBTyxDQUFDQSxPQUFSLENBQWdCZ0IsS0FBaEIsQ0FBc0JGLEtBQXRCLENBREgsQ0FGRixDQUZGLENBREY7QUFXRCxHQVpELENBRkosQ0FERCxDQWpCSCxDQURGLENBREo7QUF3Q0g7O0dBN0N1QmpCLEk7VUFFSEUsdUQsRUFDQUUsdUQ7OztLQUhHSixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjMzU5YTE4YTc3MmUxYWVjMTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZmV0Y2hUcnVtcFR3ZWV0cywgZmV0Y2hIaWxsYXJ5VHdlZXRzLCByZXNldFZpZXcgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ2FyZCwgQnV0dG9uLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0d2VldGVyICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1kLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8SnVtYm90cm9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiNTBweFwiIH19PldlbGNvbWUgVG8gVGhlIFR3ZWV0IEZldGNoZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luOiBcIiAwIDAgMjBweCAwXCIgfX0+e3R3ZWV0ZXIudHdlZXRlci5pbmZvfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRhbmdlciBhY3RpdmVcIiBzdHlsZT17eyBmb250U3R5bGU6IFwiYm9sZFwiIH19IGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeSBhY3RpdmVcIiBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaEhpbGxhcnlUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnkgYWN0aXZlXCIgYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVzZXRWaWV3KCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xlYXIgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci5zZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICAgICAgICB0d2VldGVyLnR3ZWV0ZXIudHdlZXRzLm1hcChmdW5jdGlvbih0d2VldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNtbC1jYXJkXCIgYmxvY2sgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiwgd2lkdGg6XCIxMDAlXCIgfX0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlR3ZWV0ICN7IGluZGV4ICsgMSB9PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57IHR3ZWV0IH08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIuZGF0ZXNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj4gXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==