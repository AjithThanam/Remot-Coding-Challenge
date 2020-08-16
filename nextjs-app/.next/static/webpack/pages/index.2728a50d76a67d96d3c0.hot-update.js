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
var resetView = function resetView() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({});

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJmZXRjaFRydW1wVHdlZXRzIiwiZGlzcGF0Y2giLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIm1vZGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIktleSIsImtleSIsInJlc3BvbnNlIiwidHdlZXRBcnIiLCJ0d2VldERhdGVBcnIiLCJpIiwiZGF0YSIsImxlbmd0aCIsInRleHQiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRlcyIsImZldGNoSGlsbGFyeVR3ZWV0cyIsInJlc2V0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBO0FBQUEsZ01BQU0saUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWEMsNENBQUssQ0FBQztBQUNyQkMsc0JBQU0sRUFBRSxLQURhO0FBRXJCQyxtQkFBRyxFQUFFLHdKQUZnQjtBQUdyQkMsb0JBQUksRUFBRSxTQUhlO0FBSXJCQyx1QkFBTyxFQUFFO0FBQ0xDLCtCQUFhLEVBQUVDLHNDQUFHLENBQUNDLEdBRGQ7QUFFTCxpREFBK0I7QUFGMUI7QUFKWSxlQUFELENBRE07O0FBQUE7QUFDNUJDLHNCQUQ0QjtBQVc5QkMsc0JBWDhCLEdBV25CLEVBWG1CO0FBWTlCQywwQkFaOEIsR0FZZixFQVplOztBQWNsQyxtQkFBU0MsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxJQUFULENBQWNDLE1BQWxDLEVBQTBDRixDQUFDLEVBQTNDLEVBQThDO0FBQzFDRix3QkFBUSxDQUFDRSxDQUFELENBQVIsR0FBY0gsUUFBUSxDQUFDSSxJQUFULENBQWNELENBQWQsRUFBaUJHLElBQS9CO0FBQ0FKLDRCQUFZLENBQUNDLENBQUQsQ0FBWixHQUFrQkgsUUFBUSxDQUFDSSxJQUFULENBQWNELENBQWQsRUFBaUJJLFVBQWpCLENBQTRCQyxTQUE1QixDQUFzQyxDQUF0QyxFQUF5Q1IsUUFBUSxDQUFDSSxJQUFULENBQWNELENBQWQsRUFBaUJJLFVBQWpCLENBQTRCRSxPQUE1QixDQUFvQyxHQUFwQyxDQUF6QyxDQUFsQjtBQUNIOztBQUVEbEIsc0JBQVEsQ0FBQztBQUNMbUIsb0JBQUksRUFBRUMsbURBREQ7QUFFTEMsdUJBQU8sRUFBRVgsUUFGSjtBQUdMWSxxQkFBSyxFQUFDWDtBQUhELGVBQUQsQ0FBUjs7QUFuQmtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QjtBQTBCQSxJQUFNWSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUE7QUFBQSxpTUFBTSxrQkFBTXZCLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYkMsNENBQUssQ0FBQztBQUNyQkMsc0JBQU0sRUFBRSxLQURhO0FBRXJCQyxtQkFBRyxFQUFFLHVKQUZnQjtBQUdyQkMsb0JBQUksRUFBRSxTQUhlO0FBSXJCQyx1QkFBTyxFQUFFO0FBQ0xDLCtCQUFhLEVBQUVDLHNDQUFHLENBQUNDLEdBRGQ7QUFFTCxpREFBK0I7QUFGMUI7QUFKWSxlQUFELENBRFE7O0FBQUE7QUFDOUJDLHNCQUQ4QjtBQVdoQ0Msc0JBWGdDLEdBV3JCLEVBWHFCO0FBWWhDQywwQkFaZ0MsR0FZakIsRUFaaUI7O0FBY3BDLG1CQUFTQyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBY0MsTUFBbEMsRUFBMENGLENBQUMsRUFBM0MsRUFBOEM7QUFDMUNGLHdCQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjSCxRQUFRLENBQUNJLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkcsSUFBL0I7QUFDQUosNEJBQVksQ0FBQ0MsQ0FBRCxDQUFaLEdBQWtCSCxRQUFRLENBQUNJLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkksVUFBakIsQ0FBNEJDLFNBQTVCLENBQXNDLENBQXRDLEVBQXlDUixRQUFRLENBQUNJLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkksVUFBakIsQ0FBNEJFLE9BQTVCLENBQW9DLEdBQXBDLENBQXpDLENBQWxCO0FBQ0g7O0FBRURsQixzQkFBUSxDQUFDO0FBQ0xtQixvQkFBSSxFQUFFQyxxREFERDtBQUVMQyx1QkFBTyxFQUFDWCxRQUZIO0FBR0xZLHFCQUFLLEVBQUNYO0FBSEQsZUFBRCxDQUFSOztBQW5Cb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBMkJBLElBQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUE7QUFBQSxpTUFBTSxrQkFBTXhCLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQkEsc0JBQVEsQ0FBQyxFQUFELENBQVI7O0FBRDJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNzI4YTUwZDc2YTY3ZDk2ZDNjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBLZXkgZnJvbSAnLi4vLi4va2V5Lmpzb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRydW1wVHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsIFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvc3RhdHVzZXMvdXNlcl90aW1lbGluZS5qc29uP3NjcmVlbl9uYW1lPXJlYWxEb25hbGRUcnVtcCZjb3VudD02JmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuICAgIGxldCB0d2VldERhdGVBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICAgICAgdHdlZXREYXRlQXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LnN1YnN0cmluZygwLCByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuaW5kZXhPZignKycpKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVFJVTVBfVFdFRVRTLFxyXG4gICAgICAgIHBheWxvYWQ6IHR3ZWV0QXJyLFxyXG4gICAgICAgIGRhdGVzOnR3ZWV0RGF0ZUFyclxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSGlsbGFyeVR3ZWV0cyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLCBcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VzZXJfdGltZWxpbmUuanNvbj9zY3JlZW5fbmFtZT1IaWxsYXJ5Q2xpbnRvbiZjb3VudD02JmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuICAgIGxldCB0d2VldERhdGVBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICAgICAgdHdlZXREYXRlQXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LnN1YnN0cmluZygwLCByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuaW5kZXhPZignKycpKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuSElMTEFSWV9UV0VFVFMsXHJcbiAgICAgICAgcGF5bG9hZDp0d2VldEFycixcclxuICAgICAgICBkYXRlczp0d2VldERhdGVBcnJcclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRWaWV3ID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgfSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=