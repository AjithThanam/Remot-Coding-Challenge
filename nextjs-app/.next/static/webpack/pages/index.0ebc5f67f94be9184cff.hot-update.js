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
      fontWeight: "bold"
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
      lineNumber: 23,
      columnNumber: 21
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
      lineNumber: 26,
      columnNumber: 21
    }
  }, "Clear All Tweets From View"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
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
      style: {
        fontWeight: "bold"
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImZvbnRTaXplIiwibWFyZ2luIiwiaW5mbyIsImZvbnRXZWlnaHQiLCJmZXRjaFRydW1wVHdlZXRzIiwiZmV0Y2hIaWxsYXJ5VHdlZXRzIiwicmVzZXRWaWV3Iiwic2VsZWN0ZWQiLCJ0d2VldHMiLCJtYXAiLCJ0d2VldCIsImluZGV4Iiwid2lkdGgiLCJkYXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUlDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUo7QUFBQSxHQUFOLENBQTVCO0FBRUEsU0FDSSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLGFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQXNCLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLEVBRUU7QUFBSSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDSixPQUFPLENBQUNBLE9BQVIsQ0FBZ0JLLElBQXZELENBRkYsRUFJSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLGVBQWhCO0FBQWdDLFNBQUssRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBdkM7QUFBK0QsU0FBSyxNQUFwRTtBQUFxRSxXQUFPLEVBQUU7QUFBQSxhQUFNUixRQUFRLENBQUNTLG1GQUFnQixFQUFqQixDQUFkO0FBQUEsS0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FKSixFQU9JLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsZ0JBQWhCO0FBQWlDLFNBQUssRUFBRTtBQUFFRCxnQkFBVSxFQUFFO0FBQWQsS0FBeEM7QUFBZ0UsU0FBSyxNQUFyRTtBQUFzRSxXQUFPLEVBQUU7QUFBQSxhQUFNUixRQUFRLENBQUNVLHFGQUFrQixFQUFuQixDQUFkO0FBQUEsS0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FQSixFQVVJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsa0JBQWhCO0FBQW1DLFNBQUssTUFBeEM7QUFBeUMsV0FBTyxFQUFFO0FBQUEsYUFBTVYsUUFBUSxDQUFDVyw0RUFBUyxFQUFWLENBQWQ7QUFBQSxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVZKLENBREYsQ0FESixFQWlCRyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsT0FBTyxDQUFDQSxPQUFSLENBQWdCVSxRQUFoQixJQUNDVixPQUFPLENBQUNBLE9BQVIsQ0FBZ0JXLE1BQWhCLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxLQUFULEVBQWdCQyxLQUFoQixFQUFzQjtBQUMvQyxXQUNFLE1BQUMsb0RBQUQ7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBMkIsV0FBSyxNQUFoQztBQUFpQyxXQUFLLEVBQUU7QUFBRVYsY0FBTSxFQUFFLE1BQVY7QUFBa0JXLGFBQUssRUFBQztBQUF4QixPQUF4QztBQUEwRSxTQUFHLEVBQUdELEtBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sTUFBTjtBQUFhLFdBQUssRUFBRTtBQUFFUixrQkFBVSxFQUFFO0FBQWQsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcURRLEtBQUssR0FBRyxDQUE3RCxDQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBY0QsS0FBZCxDQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHYixPQUFPLENBQUNBLE9BQVIsQ0FBZ0JnQixLQUFoQixDQUFzQkYsS0FBdEIsQ0FESCxDQUZGLENBRkYsQ0FERjtBQVdELEdBWkQsQ0FGSixDQURELENBakJILENBREYsQ0FESjtBQXdDSDs7R0E3Q3VCakIsSTtVQUVIRSx1RCxFQUNBRSx1RDs7O0tBSEdKLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGViYzVmNjdmOTRiZTkxODRjZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBmZXRjaFRydW1wVHdlZXRzLCBmZXRjaEhpbGxhcnlUd2VldHMsIHJlc2V0VmlldyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdHdlZXRBY3Rpb24nXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDYXJkLCBCdXR0b24sIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHR3ZWV0ZXIgID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxKdW1ib3Ryb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX0+V2VsY29tZSBUbyBUaGUgVHdlZXQgRmV0Y2hlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW46IFwiIDAgMCAyMHB4IDBcIiB9fT57dHdlZXRlci50d2VldGVyLmluZm99PC9oNT5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyIGFjdGl2ZVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19IGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IERvbmFsZCBUcnVtcCdzIFR3ZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnkgYWN0aXZlXCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hIaWxsYXJ5VHdlZXRzKCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBIaWxsYXJ5IENsaW50b24ncyBUd2VldHNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnkgYWN0aXZlXCIgYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVzZXRWaWV3KCkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xlYXIgQWxsIFR3ZWV0cyBGcm9tIFZpZXdcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICB7dHdlZXRlci50d2VldGVyLnNlbGVjdGVkICYmXHJcbiAgICAgICAgICAgICAgICAgIHR3ZWV0ZXIudHdlZXRlci50d2VldHMubWFwKGZ1bmN0aW9uKHR3ZWV0LCBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic21sLWNhcmRcIiBibG9jayBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiLCB3aWR0aDpcIjEwMCVcIiB9fSBrZXk9eyBpbmRleCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+VHdlZXQgI3sgaW5kZXggKyAxIH08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnsgdHdlZXQgfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci5kYXRlc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPiBcclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9