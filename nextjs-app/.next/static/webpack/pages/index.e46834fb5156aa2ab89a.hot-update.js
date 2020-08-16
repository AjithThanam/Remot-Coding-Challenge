webpackHotUpdate_N_E("pages/index",{

/***/ "./redux/actions/tweetAction.js":
/*!**************************************!*\
  !*** ./redux/actions/tweetAction.js ***!
  \**************************************/
/*! exports provided: fetchTrumpTweets, fetchHillaryTweets, resetView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTrumpTweets", function() { return fetchTrumpTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHillaryTweets", function() { return fetchHillaryTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetView", function() { return resetView; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _key_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../key.json */ "./key.json");
var _key_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../key.json */ "./key.json", 1);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





var fetchTrumpTweets = function fetchTrumpTweets() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var response, tweetArr, tweetDateArr, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=6&include_entities=false',
                mode: 'no-cors',
                headers: {
                  Authorization: _key_json__WEBPACK_IMPORTED_MODULE_3__.key,
                  'Access-Control-Allow-Origin': '*'
                }
              });

            case 2:
              response = _context.sent;

              /**
               * The following snippet of code is to filter through the twitter api response 
               * i packaged only the necessary info such as the actual tweets and the dates
               * packaged both data sets into 2 arrays
               */
              tweetArr = [];
              tweetDateArr = [];

              for (i = 0; i < response.data.length; i++) {
                tweetArr[i] = response.data[i].text;
                tweetDateArr[i] = response.data[i].created_at.substring(0, response.data[i].created_at.indexOf('+'));
              }

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["TRUMP_TWEETS"],
                payload: tweetArr,
                dates: tweetDateArr
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchHillaryTweets = function fetchHillaryTweets() {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var response, tweetArr, tweetDateArr, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=HillaryClinton&count=6&include_entities=false',
                mode: 'no-cors',
                headers: {
                  Authorization: _key_json__WEBPACK_IMPORTED_MODULE_3__.key,
                  'Access-Control-Allow-Origin': '*'
                }
              });

            case 2:
              response = _context2.sent;

              /**
               * The following snippet of code is to filter through the twitter api response 
               * i packaged only the necessary info such as the actual tweets and the dates
               * packaged both data sets into 2 arrays
               */
              tweetArr = [];
              tweetDateArr = [];

              for (i = 0; i < response.data.length; i++) {
                tweetArr[i] = response.data[i].text;
                tweetDateArr[i] = response.data[i].created_at.substring(0, response.data[i].created_at.indexOf('+'));
              }

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["HILLARY_TWEETS"],
                payload: tweetArr,
                dates: tweetDateArr
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
/**
 * An empty dispatch function to clear the view from the tweets
 * Asynch is not needed as it no api calls are made
 */

var resetView = function resetView() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["RESET_TWEETS"]
    });
  };
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJmZXRjaFRydW1wVHdlZXRzIiwiZGlzcGF0Y2giLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIm1vZGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIktleSIsImtleSIsInJlc3BvbnNlIiwidHdlZXRBcnIiLCJ0d2VldERhdGVBcnIiLCJpIiwiZGF0YSIsImxlbmd0aCIsInRleHQiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRlcyIsImZldGNoSGlsbGFyeVR3ZWV0cyIsInJlc2V0VmlldyIsIlJFU0VUX1RXRUVUUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBO0FBQUEsZ01BQU0saUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFPWEMsNENBQUssQ0FBQztBQUNyQkMsc0JBQU0sRUFBRSxLQURhO0FBRXJCQyxtQkFBRyxFQUFFLHdKQUZnQjtBQUdyQkMsb0JBQUksRUFBRSxTQUhlO0FBSXJCQyx1QkFBTyxFQUFFO0FBQ0xDLCtCQUFhLEVBQUVDLHNDQUFHLENBQUNDLEdBRGQ7QUFFTCxpREFBK0I7QUFGMUI7QUFKWSxlQUFELENBUE07O0FBQUE7QUFPNUJDLHNCQVA0Qjs7QUFpQmxDOzs7OztBQUtJQyxzQkF0QjhCLEdBc0JuQixFQXRCbUI7QUF1QjlCQywwQkF2QjhCLEdBdUJmLEVBdkJlOztBQXlCbEMsbUJBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxNQUFsQyxFQUEwQ0YsQ0FBQyxFQUEzQyxFQUE4QztBQUMxQ0Ysd0JBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCRyxJQUEvQjtBQUNBSiw0QkFBWSxDQUFDQyxDQUFELENBQVosR0FBa0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkMsU0FBNUIsQ0FBc0MsQ0FBdEMsRUFBeUNSLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkUsT0FBNUIsQ0FBb0MsR0FBcEMsQ0FBekMsQ0FBbEI7QUFDSDs7QUFFRGxCLHNCQUFRLENBQUM7QUFDTG1CLG9CQUFJLEVBQUVDLG1EQUREO0FBRUxDLHVCQUFPLEVBQUVYLFFBRko7QUFHTFkscUJBQUssRUFBQ1g7QUFIRCxlQUFELENBQVI7O0FBOUJrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekI7QUFxQ0EsSUFBTVksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBO0FBQUEsaU1BQU0sa0JBQU12QixRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUWJDLDRDQUFLLENBQUM7QUFDckJDLHNCQUFNLEVBQUUsS0FEYTtBQUVyQkMsbUJBQUcsRUFBRSx1SkFGZ0I7QUFHckJDLG9CQUFJLEVBQUUsU0FIZTtBQUlyQkMsdUJBQU8sRUFBRTtBQUNMQywrQkFBYSxFQUFFQyxzQ0FBRyxDQUFDQyxHQURkO0FBRUwsaURBQStCO0FBRjFCO0FBSlksZUFBRCxDQVJROztBQUFBO0FBUTlCQyxzQkFSOEI7O0FBa0JwQzs7Ozs7QUFLSUMsc0JBdkJnQyxHQXVCckIsRUF2QnFCO0FBd0JoQ0MsMEJBeEJnQyxHQXdCakIsRUF4QmlCOztBQTBCcEMsbUJBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxNQUFsQyxFQUEwQ0YsQ0FBQyxFQUEzQyxFQUE4QztBQUMxQ0Ysd0JBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCRyxJQUEvQjtBQUNBSiw0QkFBWSxDQUFDQyxDQUFELENBQVosR0FBa0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkMsU0FBNUIsQ0FBc0MsQ0FBdEMsRUFBeUNSLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkUsT0FBNUIsQ0FBb0MsR0FBcEMsQ0FBekMsQ0FBbEI7QUFDSDs7QUFFRGxCLHNCQUFRLENBQUM7QUFDTG1CLG9CQUFJLEVBQUVDLHFEQUREO0FBRUxDLHVCQUFPLEVBQUNYLFFBRkg7QUFHTFkscUJBQUssRUFBQ1g7QUFIRCxlQUFELENBQVI7O0FBL0JvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUF1Q1A7Ozs7O0FBSU8sSUFBTWEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNLFVBQUF4QixRQUFRLEVBQUk7QUFDdkNBLFlBQVEsQ0FBQztBQUNMbUIsVUFBSSxFQUFFQyxtREFBa0JLO0FBRG5CLEtBQUQsQ0FBUjtBQUdILEdBSndCO0FBQUEsQ0FBbEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ2ODM0ZmI1MTU2YWEyYWI4OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgS2V5IGZyb20gJy4uLy4uL2tleS5qc29uJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hUcnVtcFR3ZWV0cyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIC8qKlxyXG4gICAgICogR0VUIFJFUVVFU1QgdG8gdGhlIHR3aXR0ZXIgQXBpXHJcbiAgICAgKiBEbyB0byB0aGUgcmVxdWVzIGdldHRpbmcgYmxvY2tlZCBieSBDT1JTIEkgaGFkIHRvIGFkIHRoZSBcclxuICAgICAqIGZvbGxvd2luZyBsaW5rIGFzIGEgcHJveHkgdG8gYWN0dWFsbHkgcHJvY2VzcyB0aGUgcmVxdWVzdFxyXG4gICAgICogaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLCBcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VzZXJfdGltZWxpbmUuanNvbj9zY3JlZW5fbmFtZT1yZWFsRG9uYWxkVHJ1bXAmY291bnQ9NiZpbmNsdWRlX2VudGl0aWVzPWZhbHNlJyxcclxuICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBLZXkua2V5LFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZvbGxvd2luZyBzbmlwcGV0IG9mIGNvZGUgaXMgdG8gZmlsdGVyIHRocm91Z2ggdGhlIHR3aXR0ZXIgYXBpIHJlc3BvbnNlIFxyXG4gICAgICogaSBwYWNrYWdlZCBvbmx5IHRoZSBuZWNlc3NhcnkgaW5mbyBzdWNoIGFzIHRoZSBhY3R1YWwgdHdlZXRzIGFuZCB0aGUgZGF0ZXNcclxuICAgICAqIHBhY2thZ2VkIGJvdGggZGF0YSBzZXRzIGludG8gMiBhcnJheXNcclxuICAgICAqL1xyXG4gICAgbGV0IHR3ZWV0QXJyID0gW107XHJcbiAgICBsZXQgdHdlZXREYXRlQXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0d2VldEFycltpXSA9IHJlc3BvbnNlLmRhdGFbaV0udGV4dFxyXG4gICAgICAgIHR3ZWV0RGF0ZUFycltpXSA9IHJlc3BvbnNlLmRhdGFbaV0uY3JlYXRlZF9hdC5zdWJzdHJpbmcoMCwgcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LmluZGV4T2YoJysnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlRSVU1QX1RXRUVUUyxcclxuICAgICAgICBwYXlsb2FkOiB0d2VldEFycixcclxuICAgICAgICBkYXRlczp0d2VldERhdGVBcnJcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEhpbGxhcnlUd2VldHMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogR0VUIFJFUVVFU1QgdG8gdGhlIHR3aXR0ZXIgQXBpXHJcbiAgICAgKiBEbyB0byB0aGUgcmVxdWVzIGdldHRpbmcgYmxvY2tlZCBieSBDT1JTIEkgaGFkIHRvIGFkIHRoZSBcclxuICAgICAqIGZvbGxvd2luZyBsaW5rIGFzIGEgcHJveHkgdG8gYWN0dWFsbHkgcHJvY2VzcyB0aGUgcmVxdWVzdFxyXG4gICAgICogaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLCBcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VzZXJfdGltZWxpbmUuanNvbj9zY3JlZW5fbmFtZT1IaWxsYXJ5Q2xpbnRvbiZjb3VudD02JmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmb2xsb3dpbmcgc25pcHBldCBvZiBjb2RlIGlzIHRvIGZpbHRlciB0aHJvdWdoIHRoZSB0d2l0dGVyIGFwaSByZXNwb25zZSBcclxuICAgICAqIGkgcGFja2FnZWQgb25seSB0aGUgbmVjZXNzYXJ5IGluZm8gc3VjaCBhcyB0aGUgYWN0dWFsIHR3ZWV0cyBhbmQgdGhlIGRhdGVzXHJcbiAgICAgKiBwYWNrYWdlZCBib3RoIGRhdGEgc2V0cyBpbnRvIDIgYXJyYXlzXHJcbiAgICAgKi9cclxuICAgIGxldCB0d2VldEFyciA9IFtdO1xyXG4gICAgbGV0IHR3ZWV0RGF0ZUFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdHdlZXRBcnJbaV0gPSByZXNwb25zZS5kYXRhW2ldLnRleHRcclxuICAgICAgICB0d2VldERhdGVBcnJbaV0gPSByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuc3Vic3RyaW5nKDAsIHJlc3BvbnNlLmRhdGFbaV0uY3JlYXRlZF9hdC5pbmRleE9mKCcrJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5ISUxMQVJZX1RXRUVUUyxcclxuICAgICAgICBwYXlsb2FkOnR3ZWV0QXJyLFxyXG4gICAgICAgIGRhdGVzOnR3ZWV0RGF0ZUFyclxyXG5cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBkaXNwYXRjaCBmdW5jdGlvbiB0byBjbGVhciB0aGUgdmlldyBmcm9tIHRoZSB0d2VldHNcclxuICogQXN5bmNoIGlzIG5vdCBuZWVkZWQgYXMgaXQgbm8gYXBpIGNhbGxzIGFyZSBtYWRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVzZXRWaWV3ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlJFU0VUX1RXRUVUU1xyXG4gICAgfSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=