webpackHotUpdate_N_E("pages/index",{

/***/ "./redux/actions/tweetAction.js":
/*!**************************************!*\
  !*** ./redux/actions/tweetAction.js ***!
  \**************************************/
/*! exports provided: fetchTrumpTweets, fetchHillaryTweets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTrumpTweets", function() { return fetchTrumpTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHillaryTweets", function() { return fetchHillaryTweets; });
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
      var response, stringResponse, tweetArr, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=1&include_entities=false',
                mode: 'no-cors',
                headers: {
                  Authorization: _key_json__WEBPACK_IMPORTED_MODULE_3__.key,
                  'Access-Control-Allow-Origin': '*'
                }
              });

            case 2:
              response = _context.sent;
              stringResponse = JSON.stringify(response.data);
              tweetArr = [];

              for (i = 0; i < response.data.length; i++) {
                tweetArr[i] = response.data[i].text;
              }

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["TRUMP_TWEETS"],
                payload: tweetArr
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
      var response, stringResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=HillaryClinton&count=1&include_entities=false',
                mode: 'no-cors',
                headers: {
                  Authorization: _key_json__WEBPACK_IMPORTED_MODULE_3__.key,
                  'Access-Control-Allow-Origin': '*'
                }
              });

            case 2:
              response = _context2.sent;
              stringResponse = JSON.stringify(response.data);
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["HILLARY_TWEETS"],
                payload: stringResponse
              });

            case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJmZXRjaFRydW1wVHdlZXRzIiwiZGlzcGF0Y2giLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIm1vZGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIktleSIsImtleSIsInJlc3BvbnNlIiwic3RyaW5nUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInR3ZWV0QXJyIiwiaSIsImxlbmd0aCIsInRleHQiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZmV0Y2hIaWxsYXJ5VHdlZXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTtBQUFBLGdNQUFNLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1hDLDRDQUFLLENBQUM7QUFDckJDLHNCQUFNLEVBQUUsS0FEYTtBQUVyQkMsbUJBQUcsRUFBRSx3SkFGZ0I7QUFHckJDLG9CQUFJLEVBQUUsU0FIZTtBQUlyQkMsdUJBQU8sRUFBRTtBQUNMQywrQkFBYSxFQUFFQyxzQ0FBRyxDQUFDQyxHQURkO0FBRUwsaURBQStCO0FBRjFCO0FBSlksZUFBRCxDQURNOztBQUFBO0FBQzVCQyxzQkFENEI7QUFXNUJDLDRCQVg0QixHQVdYQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsUUFBUSxDQUFDSSxJQUF4QixDQVhXO0FBWTlCQyxzQkFaOEIsR0FZbkIsRUFabUI7O0FBY2xDLG1CQUFTQyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixRQUFRLENBQUNJLElBQVQsQ0FBY0csTUFBbEMsRUFBMENELENBQUMsRUFBM0MsRUFBOEM7QUFDMUNELHdCQUFRLENBQUNDLENBQUQsQ0FBUixHQUFjTixRQUFRLENBQUNJLElBQVQsQ0FBY0UsQ0FBZCxFQUFpQkUsSUFBL0I7QUFDSDs7QUFFRGpCLHNCQUFRLENBQUM7QUFDTGtCLG9CQUFJLEVBQUVDLG1EQUREO0FBRUxDLHVCQUFPLEVBQUVOO0FBRkosZUFBRCxDQUFSOztBQWxCa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCO0FBd0JBLElBQU1PLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQTtBQUFBLGlNQUFNLGtCQUFNckIsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNiQyw0Q0FBSyxDQUFDO0FBQ3JCQyxzQkFBTSxFQUFFLEtBRGE7QUFFckJDLG1CQUFHLEVBQUUsdUpBRmdCO0FBR3JCQyxvQkFBSSxFQUFFLFNBSGU7QUFJckJDLHVCQUFPLEVBQUU7QUFDTEMsK0JBQWEsRUFBRUMsc0NBQUcsQ0FBQ0MsR0FEZDtBQUVMLGlEQUErQjtBQUYxQjtBQUpZLGVBQUQsQ0FEUTs7QUFBQTtBQUM5QkMsc0JBRDhCO0FBVzlCQyw0QkFYOEIsR0FXYkMsSUFBSSxDQUFDQyxTQUFMLENBQWVILFFBQVEsQ0FBQ0ksSUFBeEIsQ0FYYTtBQWFwQ2Isc0JBQVEsQ0FBQztBQUNMa0Isb0JBQUksRUFBRUMscURBREQ7QUFFTEMsdUJBQU8sRUFBQ1Y7QUFGSCxlQUFELENBQVI7O0FBYm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMDY2M2ZmOWNhNTExYjZlMjBiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBLZXkgZnJvbSAnLi4vLi4va2V5Lmpzb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRydW1wVHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsIFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvc3RhdHVzZXMvdXNlcl90aW1lbGluZS5qc29uP3NjcmVlbl9uYW1lPXJlYWxEb25hbGRUcnVtcCZjb3VudD0xJmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBzdHJpbmdSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlRSVU1QX1RXRUVUUyxcclxuICAgICAgICBwYXlsb2FkOiB0d2VldEFyclxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoSGlsbGFyeVR3ZWV0cyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLCBcclxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VzZXJfdGltZWxpbmUuanNvbj9zY3JlZW5fbmFtZT1IaWxsYXJ5Q2xpbnRvbiZjb3VudD0xJmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBzdHJpbmdSZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkhJTExBUllfVFdFRVRTLFxyXG4gICAgICAgIHBheWxvYWQ6c3RyaW5nUmVzcG9uc2VcclxuICAgIH0pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==