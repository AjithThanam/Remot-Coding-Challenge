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
  }); //const { user } = useSelector(state => state.user)

  var tweetJSON = {
    tweeter: tweeter
  };
  console.log(tweeter.tweeter);

  if (isJson(tweetJSON)) {
    tweetJSON = JSON.parse(tweetJSON.tweeter);
  }

  return (// <div className="container">
    //     <div>
    //         <h1>Tweet Fetcher</h1>
    //         <Button variant="primary" onClick={() => dispatch(fetchTrumpTweets())}>
    //             Show Trump's Tweets
    //         </Button>
    //         <Button onClick={() => dispatch(fetchHillaryTweets())}>
    //             Show Hillary's Tweets
    //         </Button>
    //     </div>
    //     <div>
    //         {tweeter.tweeter.user}
    //     </div>
    //     <style jsx>{`
    //         .container {
    //         margin: 50px;
    //         }
    //         p {
    //         color: blue;
    //         }
    //     `}</style>
    // </div>
    __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      className: "md-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, "ReactJS with react-bootstrap"), __jsx("link", {
      rel: "icon",
      href: "/favicon-32x32.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "justify-content-md-between",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "sml-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "Documentation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, "Find in-depth information about Next.js features and API."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "btn-primary",
      href: "https://nextjs.org/docs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, "More \u2192"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "sml-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, "Learn"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, "Learn about Next.js in an interactive course with quizzes!"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "primary",
      href: "https://nextjs.org/learn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, "More \u2192")))))
  );
}

_s(Home, "njzrAtE7cE7+sn/kTwnvtqnEKpc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0d2VldGVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInR3ZWV0SlNPTiIsImNvbnNvbGUiLCJsb2ciLCJpc0pzb24iLCJKU09OIiwicGFyc2UiLCJzdHIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBRTNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUlDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUo7QUFBQSxHQUFOLENBQTVCLENBSDJCLENBSTNCOztBQUNBLE1BQUlDLFNBQVMsR0FBRztBQUFFSCxXQUFPLEVBQVBBO0FBQUYsR0FBaEI7QUFFQUksU0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQU8sQ0FBQ0EsT0FBcEI7O0FBQ0EsTUFBR00sTUFBTSxDQUFDSCxTQUFELENBQVQsRUFBcUI7QUFDakJBLGFBQVMsR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVdMLFNBQVMsQ0FBQ0gsT0FBckIsQ0FBWjtBQUNIOztBQUVELFNBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxVQUFDLHlEQUFEO0FBQVcsZUFBUyxFQUFDLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUZBLEVBR0E7QUFBTSxTQUFHLEVBQUMsTUFBVjtBQUFpQixVQUFJLEVBQUMsb0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIQSxFQUtJLE1BQUMsbURBQUQ7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsb0RBQUQ7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFGRixFQUtFLE1BQUMsc0RBQUQ7QUFBUSxlQUFTLEVBQUMsYUFBbEI7QUFBZ0MsVUFBSSxFQUFDLHlCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLENBREYsQ0FEQSxFQVlBLE1BQUMsb0RBQUQ7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUZGLEVBS0UsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBQyxTQUFoQjtBQUEwQixVQUFJLEVBQUMsMEJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsQ0FERixDQVpBLENBTEo7QUF6Qko7QUF5REg7O0dBckV1QkgsSTtVQUVIRSx1RCxFQUNBRSx1RDs7O0tBSEdKLEk7QUF1RWpCLFNBQVNTLE1BQVQsQ0FBZ0JHLEdBQWhCLEVBQW9CO0FBQ3ZCTCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjs7QUFDQSxNQUFJO0FBQ0FFLFFBQUksQ0FBQ0MsS0FBTCxDQUFXQyxHQUFYO0FBQ0gsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNSTixXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBQ0RELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxTQUFPLElBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lY2EwOTk4OTYwMWE5NWIwODc2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGZldGNoVHJ1bXBUd2VldHMsIGZldGNoSGlsbGFyeVR3ZWV0cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdHdlZXRBY3Rpb24nXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDYXJkLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB0d2VldGVyICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlKTtcclxuICAgIC8vY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxyXG4gICAgbGV0IHR3ZWV0SlNPTiA9IHsgdHdlZXRlcn1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0d2VldGVyLnR3ZWV0ZXIpXHJcbiAgICBpZihpc0pzb24odHdlZXRKU09OKSl7XHJcbiAgICAgICAgdHdlZXRKU09OID0gSlNPTi5wYXJzZSh0d2VldEpTT04udHdlZXRlcikgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAvLyAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgIDxoMT5Ud2VldCBGZXRjaGVyPC9oMT5cclxuICAgICAgICAvLyAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChmZXRjaFRydW1wVHdlZXRzKCkpfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICBTaG93IFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgLy8gICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAvLyAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hIaWxsYXJ5VHdlZXRzKCkpfT5cclxuICAgICAgICAvLyAgICAgICAgICAgICBTaG93IEhpbGxhcnkncyBUd2VldHNcclxuICAgICAgICAvLyAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIudXNlcn1cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLy8gICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAvLyAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHAge1xyXG4gICAgICAgIC8vICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtZC1jb250YWluZXJcIj5cclxuICAgICAgXHJcbiAgICAgICAgPHRpdGxlPlJlYWN0SlMgd2l0aCByZWFjdC1ib290c3RyYXA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic21sLWNhcmRcIj5cclxuICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RG9jdW1lbnRhdGlvbjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIEZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCI+XHJcbiAgICAgICAgICAgICAgICAgIE1vcmUgJnJhcnI7XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzbWwtY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5MZWFybjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIExlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyFcclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIj5cclxuICAgICAgICAgICAgICAgICAgTW9yZSAmcmFycjtcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uKHN0cil7XHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZnVuY3Rpb25cIilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmxhc2VcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcInRydWVcIilcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9