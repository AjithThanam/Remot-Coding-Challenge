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
              /**
              * So were are ultimetly sending off, the type
              * the array of tweets as well as a seperate array holding 
              * the dates of each of those tweets
              */


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
              /**
               * So were are ultimetly sending off, the type
               * the array of tweets as well as a seperate array holding 
               * the dates of each of those tweets
               */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJmZXRjaFRydW1wVHdlZXRzIiwiZGlzcGF0Y2giLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIm1vZGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIktleSIsImtleSIsInJlc3BvbnNlIiwidHdlZXRBcnIiLCJ0d2VldERhdGVBcnIiLCJpIiwiZGF0YSIsImxlbmd0aCIsInRleHQiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRlcyIsImZldGNoSGlsbGFyeVR3ZWV0cyIsInJlc2V0VmlldyIsIlJFU0VUX1RXRUVUUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBO0FBQUEsZ01BQU0saUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFPWEMsNENBQUssQ0FBQztBQUNyQkMsc0JBQU0sRUFBRSxLQURhO0FBRXJCQyxtQkFBRyxFQUFFLHdKQUZnQjtBQUdyQkMsb0JBQUksRUFBRSxTQUhlO0FBSXJCQyx1QkFBTyxFQUFFO0FBQ0xDLCtCQUFhLEVBQUVDLHNDQUFHLENBQUNDLEdBRGQ7QUFFTCxpREFBK0I7QUFGMUI7QUFKWSxlQUFELENBUE07O0FBQUE7QUFPNUJDLHNCQVA0Qjs7QUFpQmxDOzs7OztBQUtJQyxzQkF0QjhCLEdBc0JuQixFQXRCbUI7QUF1QjlCQywwQkF2QjhCLEdBdUJmLEVBdkJlOztBQXlCbEMsbUJBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxNQUFsQyxFQUEwQ0YsQ0FBQyxFQUEzQyxFQUE4QztBQUMxQ0Ysd0JBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCRyxJQUEvQjtBQUNBSiw0QkFBWSxDQUFDQyxDQUFELENBQVosR0FBa0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkMsU0FBNUIsQ0FBc0MsQ0FBdEMsRUFBeUNSLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkUsT0FBNUIsQ0FBb0MsR0FBcEMsQ0FBekMsQ0FBbEI7QUFDSDtBQUVBOzs7Ozs7O0FBS0RsQixzQkFBUSxDQUFDO0FBQ0xtQixvQkFBSSxFQUFFQyxtREFERDtBQUVMQyx1QkFBTyxFQUFFWCxRQUZKO0FBR0xZLHFCQUFLLEVBQUNYO0FBSEQsZUFBRCxDQUFSOztBQW5Da0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCO0FBMENBLElBQU1ZLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQTtBQUFBLGlNQUFNLGtCQUFNdkIsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVFiQyw0Q0FBSyxDQUFDO0FBQ3JCQyxzQkFBTSxFQUFFLEtBRGE7QUFFckJDLG1CQUFHLEVBQUUsdUpBRmdCO0FBR3JCQyxvQkFBSSxFQUFFLFNBSGU7QUFJckJDLHVCQUFPLEVBQUU7QUFDTEMsK0JBQWEsRUFBRUMsc0NBQUcsQ0FBQ0MsR0FEZDtBQUVMLGlEQUErQjtBQUYxQjtBQUpZLGVBQUQsQ0FSUTs7QUFBQTtBQVE5QkMsc0JBUjhCOztBQWtCcEM7Ozs7O0FBS0lDLHNCQXZCZ0MsR0F1QnJCLEVBdkJxQjtBQXdCaENDLDBCQXhCZ0MsR0F3QmpCLEVBeEJpQjs7QUEwQnBDLG1CQUFTQyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBY0MsTUFBbEMsRUFBMENGLENBQUMsRUFBM0MsRUFBOEM7QUFDMUNGLHdCQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjSCxRQUFRLENBQUNJLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkcsSUFBL0I7QUFDQUosNEJBQVksQ0FBQ0MsQ0FBRCxDQUFaLEdBQWtCSCxRQUFRLENBQUNJLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkksVUFBakIsQ0FBNEJDLFNBQTVCLENBQXNDLENBQXRDLEVBQXlDUixRQUFRLENBQUNJLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkksVUFBakIsQ0FBNEJFLE9BQTVCLENBQW9DLEdBQXBDLENBQXpDLENBQWxCO0FBQ0g7QUFFRDs7Ozs7OztBQUtBbEIsc0JBQVEsQ0FBQztBQUNMbUIsb0JBQUksRUFBRUMscURBREQ7QUFFTEMsdUJBQU8sRUFBQ1gsUUFGSDtBQUdMWSxxQkFBSyxFQUFDWDtBQUhELGVBQUQsQ0FBUjs7QUFwQ29DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQTRDUDs7Ozs7QUFJTyxJQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU0sVUFBQXhCLFFBQVEsRUFBSTtBQUN2Q0EsWUFBUSxDQUFDO0FBQ0xtQixVQUFJLEVBQUVDLG1EQUFrQks7QUFEbkIsS0FBRCxDQUFSO0FBR0gsR0FKd0I7QUFBQSxDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZWUzODcxYWVkMGM1ZDNiYTIzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBLZXkgZnJvbSAnLi4vLi4va2V5Lmpzb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRydW1wVHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHRVQgUkVRVUVTVCB0byB0aGUgdHdpdHRlciBBcGlcclxuICAgICAqIERvIHRvIHRoZSByZXF1ZXMgZ2V0dGluZyBibG9ja2VkIGJ5IENPUlMgSSBoYWQgdG8gYWQgdGhlIFxyXG4gICAgICogZm9sbG93aW5nIGxpbmsgYXMgYSBwcm94eSB0byBhY3R1YWxseSBwcm9jZXNzIHRoZSByZXF1ZXN0XHJcbiAgICAgKiBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cclxuICAgICAqL1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsIFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvc3RhdHVzZXMvdXNlcl90aW1lbGluZS5qc29uP3NjcmVlbl9uYW1lPXJlYWxEb25hbGRUcnVtcCZjb3VudD02JmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIHNuaXBwZXQgb2YgY29kZSBpcyB0byBmaWx0ZXIgdGhyb3VnaCB0aGUgdHdpdHRlciBhcGkgcmVzcG9uc2UgXHJcbiAgICAgKiBpIHBhY2thZ2VkIG9ubHkgdGhlIG5lY2Vzc2FyeSBpbmZvIHN1Y2ggYXMgdGhlIGFjdHVhbCB0d2VldHMgYW5kIHRoZSBkYXRlc1xyXG4gICAgICogcGFja2FnZWQgYm90aCBkYXRhIHNldHMgaW50byAyIGFycmF5c1xyXG4gICAgICovXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuICAgIGxldCB0d2VldERhdGVBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICAgICAgdHdlZXREYXRlQXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LnN1YnN0cmluZygwLCByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuaW5kZXhPZignKycpKTtcclxuICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgKiBTbyB3ZXJlIGFyZSB1bHRpbWV0bHkgc2VuZGluZyBvZmYsIHRoZSB0eXBlXHJcbiAgICAgKiB0aGUgYXJyYXkgb2YgdHdlZXRzIGFzIHdlbGwgYXMgYSBzZXBlcmF0ZSBhcnJheSBob2xkaW5nIFxyXG4gICAgICogdGhlIGRhdGVzIG9mIGVhY2ggb2YgdGhvc2UgdHdlZXRzXHJcbiAgICAgKi9cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5UUlVNUF9UV0VFVFMsXHJcbiAgICAgICAgcGF5bG9hZDogdHdlZXRBcnIsXHJcbiAgICAgICAgZGF0ZXM6dHdlZXREYXRlQXJyXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hIaWxsYXJ5VHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEdFVCBSRVFVRVNUIHRvIHRoZSB0d2l0dGVyIEFwaVxyXG4gICAgICogRG8gdG8gdGhlIHJlcXVlcyBnZXR0aW5nIGJsb2NrZWQgYnkgQ09SUyBJIGhhZCB0byBhZCB0aGUgXHJcbiAgICAgKiBmb2xsb3dpbmcgbGluayBhcyBhIHByb3h5IHRvIGFjdHVhbGx5IHByb2Nlc3MgdGhlIHJlcXVlc3RcclxuICAgICAqIGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1xyXG4gICAgICovXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JywgXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMS9zdGF0dXNlcy91c2VyX3RpbWVsaW5lLmpzb24/c2NyZWVuX25hbWU9SGlsbGFyeUNsaW50b24mY291bnQ9NiZpbmNsdWRlX2VudGl0aWVzPWZhbHNlJyxcclxuICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBLZXkua2V5LFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIHNuaXBwZXQgb2YgY29kZSBpcyB0byBmaWx0ZXIgdGhyb3VnaCB0aGUgdHdpdHRlciBhcGkgcmVzcG9uc2UgXHJcbiAgICAgKiBpIHBhY2thZ2VkIG9ubHkgdGhlIG5lY2Vzc2FyeSBpbmZvIHN1Y2ggYXMgdGhlIGFjdHVhbCB0d2VldHMgYW5kIHRoZSBkYXRlc1xyXG4gICAgICogcGFja2FnZWQgYm90aCBkYXRhIHNldHMgaW50byAyIGFycmF5c1xyXG4gICAgICovXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuICAgIGxldCB0d2VldERhdGVBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICAgICAgdHdlZXREYXRlQXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LnN1YnN0cmluZygwLCByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuaW5kZXhPZignKycpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvIHdlcmUgYXJlIHVsdGltZXRseSBzZW5kaW5nIG9mZiwgdGhlIHR5cGVcclxuICAgICAqIHRoZSBhcnJheSBvZiB0d2VldHMgYXMgd2VsbCBhcyBhIHNlcGVyYXRlIGFycmF5IGhvbGRpbmcgXHJcbiAgICAgKiB0aGUgZGF0ZXMgb2YgZWFjaCBvZiB0aG9zZSB0d2VldHNcclxuICAgICAqL1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkhJTExBUllfVFdFRVRTLFxyXG4gICAgICAgIHBheWxvYWQ6dHdlZXRBcnIsXHJcbiAgICAgICAgZGF0ZXM6dHdlZXREYXRlQXJyXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGVtcHR5IGRpc3BhdGNoIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSB2aWV3IGZyb20gdGhlIHR3ZWV0c1xyXG4gKiBBc3luY2ggaXMgbm90IG5lZWRlZCBhcyBpdCBubyBhcGkgY2FsbHMgYXJlIG1hZGVcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldFZpZXcgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuUkVTRVRfVFdFRVRTXHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==