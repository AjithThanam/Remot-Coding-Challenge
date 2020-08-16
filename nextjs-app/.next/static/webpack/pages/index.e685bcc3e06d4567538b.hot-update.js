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

  /**
   * useDitchpatch functions allows us to send of actions to be handled to retrieve the right state
   * useSelecter allows us to get a handle to the state to then use how we see fit
   */
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  var tweeter = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state;
  });
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "md-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "title",
    style: {
      fontSize: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Welcome To The Tweet Fetcher"), __jsx("h5", {
    style: {
      margin: " 0 0 20px 0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, tweeter.tweeter.info), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "danger active",
    style: {
      fontWeight: "bold"
    },
    block: true,
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["fetchTrumpTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Show Donald Trump's Tweets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary active",
    style: {
      fontWeight: "bold"
    },
    block: true,
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["fetchHillaryTweets"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Show Hillary Clinton's Tweets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary active",
    block: true,
    onClick: function onClick() {
      return dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["resetView"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Clear All Tweets From View"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "justify-content-md-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, tweeter.tweeter.selected && tweeter.tweeter.tweets.map(function (tweet, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      border: "dark",
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
        lineNumber: 52,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, "Tweet #", index + 1), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }, tweet), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZvbnRTaXplIiwibWFyZ2luIiwiaW5mbyIsImZvbnRXZWlnaHQiLCJmZXRjaFRydW1wVHdlZXRzIiwiZmV0Y2hIaWxsYXJ5VHdlZXRzIiwicmVzZXRWaWV3Iiwic2VsZWN0ZWQiLCJ0d2VldHMiLCJtYXAiLCJ0d2VldCIsImluZGV4Iiwid2lkdGgiLCJkYXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTdCOzs7O0FBSUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSjtBQUFBLEdBQU4sQ0FBM0I7QUFFQSxTQUNFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNKLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQkssSUFBdkQsQ0FGRixFQVNFLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsZUFBaEI7QUFBZ0MsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQUF2QztBQUErRCxTQUFLLE1BQXBFO0FBQXFFLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFFBQVEsQ0FBQ1MsbUZBQWdCLEVBQWpCLENBQWQ7QUFBQSxLQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVRGLEVBWUUsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxnQkFBaEI7QUFBaUMsU0FBSyxFQUFFO0FBQUVELGdCQUFVLEVBQUU7QUFBZCxLQUF4QztBQUFnRSxTQUFLLE1BQXJFO0FBQXNFLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFFBQVEsQ0FBQ1UscUZBQWtCLEVBQW5CLENBQWQ7QUFBQSxLQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQVpGLEVBZUUsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxrQkFBaEI7QUFBbUMsU0FBSyxNQUF4QztBQUF5QyxXQUFPLEVBQUU7QUFBQSxhQUFNVixRQUFRLENBQUNXLDRFQUFTLEVBQVYsQ0FBZDtBQUFBLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBZkYsQ0FERixDQURGLEVBc0JFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHVCxPQUFPLENBQUNBLE9BQVIsQ0FBZ0JVLFFBQWhCLElBQ0NWLE9BQU8sQ0FBQ0EsT0FBUixDQUFnQlcsTUFBaEIsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ2pELFdBQ0UsTUFBQyxvREFBRDtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGVBQVMsRUFBQyxVQUE5QjtBQUF5QyxXQUFLLE1BQTlDO0FBQStDLFdBQUssRUFBRTtBQUFFVixjQUFNLEVBQUUsTUFBVjtBQUFrQlcsYUFBSyxFQUFFO0FBQXpCLE9BQXREO0FBQXlGLFNBQUcsRUFBRUQsS0FBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXFCQSxLQUFLLEdBQUcsQ0FBN0IsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFELEtBQWIsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2IsT0FBTyxDQUFDQSxPQUFSLENBQWdCZ0IsS0FBaEIsQ0FBc0JGLEtBQXRCLENBREgsQ0FGRixDQUZGLENBREY7QUFXRCxHQVpELENBVEosQ0FERixDQXRCRixDQURGLENBREY7QUFvREQ7O0dBN0R1QmpCLEk7VUFNTEUsdUQsRUFDREUsdUQ7OztLQVBNSixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2ODViY2MzZTA2ZDQ1Njc1MzhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZmV0Y2hUcnVtcFR3ZWV0cywgZmV0Y2hIaWxsYXJ5VHdlZXRzLCByZXNldFZpZXcgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ2FyZCwgQnV0dG9uLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgLyoqXHJcbiAgICogdXNlRGl0Y2hwYXRjaCBmdW5jdGlvbnMgYWxsb3dzIHVzIHRvIHNlbmQgb2YgYWN0aW9ucyB0byBiZSBoYW5kbGVkIHRvIHJldHJpZXZlIHRoZSByaWdodCBzdGF0ZVxyXG4gICAqIHVzZVNlbGVjdGVyIGFsbG93cyB1cyB0byBnZXQgYSBoYW5kbGUgdG8gdGhlIHN0YXRlIHRvIHRoZW4gdXNlIGhvdyB3ZSBzZWUgZml0XHJcbiAgICovXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHR3ZWV0ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1kLWNvbnRhaW5lclwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxKdW1ib3Ryb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX0+V2VsY29tZSBUbyBUaGUgVHdlZXQgRmV0Y2hlcjwvaDE+XHJcbiAgICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW46IFwiIDAgMCAyMHB4IDBcIiB9fT57dHdlZXRlci50d2VldGVyLmluZm99PC9oNT5cclxuXHJcbiAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgVGhlc2UgYXJlIHRoZSBidXR0b25zIHRoYXQgd2lsbCBhbGxvdyB0byBkaXNwYXRjaCB0aGUgYWN0aW9ucyB0byByZXRyaWV2ZSBlaXRoZXJcclxuICAgICAgICAgICAgICAgIHBlcnNvbnMgdHdlZXRzLCBvciB0byBjbGVhciB0aGUgdmlldyBmcm9tIGFsbCB0d2VldHNcclxuICAgICAgICAgICAgKi99XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXIgYWN0aXZlXCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hUcnVtcFR3ZWV0cygpKX0+XHJcbiAgICAgICAgICAgICAgU2hvdyBEb25hbGQgVHJ1bXAncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeSBhY3RpdmVcIiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fSBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaEhpbGxhcnlUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgIFNob3cgSGlsbGFyeSBDbGludG9uJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeSBhY3RpdmVcIiBibG9jayBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChyZXNldFZpZXcoKSl9PlxyXG4gICAgICAgICAgICAgIENsZWFyIEFsbCBUd2VldHMgRnJvbSBWaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiPlxyXG5cclxuICAgICAgICAgICAgey8qIFRoZSBmb2xsb3dpbmcgY29uZGl0aW9uYWwgbG9naWMgdmVyaWZpZXMgaWYgZWl0aGVyIHRoZSBUcnVtcCBvciBIaWxsYXJ5XHJcbiAgICAgICAgICAgICAgICBidXRvbiB3YXMgcHJlc3NlZC4gXHJcbiAgICAgICAgICAgICAgICBJZiBUcnVlLCBpdHRlcmF0ZSB0aHJvdWdoIHRoZSBhcnJheSBvZiB0d2VldHMgYW5kIGRpc3BsYXkgdGhlbSBvbiBpbmRpdmlkdWFsIGNhcmRzXHJcbiAgICAgICAgICAgICAgICBFbHNlLCBEaXNwbGF5IG5vdGhpbmdcclxuICAgICAgICAgICAgKi99XHJcblxyXG4gICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLnNlbGVjdGVkICYmXHJcbiAgICAgICAgICAgICAgdHdlZXRlci50d2VldGVyLnR3ZWV0cy5tYXAoZnVuY3Rpb24gKHR3ZWV0LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPENhcmQgYm9yZGVyPVwiZGFya1wiIGNsYXNzTmFtZT1cInNtbC1jYXJkXCIgYmxvY2sgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Ud2VldCAje2luZGV4ICsgMX08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57dHdlZXR9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci5kYXRlc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9