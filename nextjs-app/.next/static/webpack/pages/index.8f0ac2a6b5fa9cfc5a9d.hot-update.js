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
      var response, tweetArr, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=3&include_entities=false',
                mode: 'no-cors',
                headers: {
                  Authorization: _key_json__WEBPACK_IMPORTED_MODULE_3__.key,
                  'Access-Control-Allow-Origin': '*'
                }
              });

            case 2:
              response = _context.sent;
              tweetArr = [];

              for (i = 0; i < response.data.length; i++) {
                tweetArr[i] = response.data[i].text;
              }

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__["TRUMP_TWEETS"],
                payload: tweetArr
              });

            case 6:
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
                url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=HillaryClinton&count=3&include_entities=false',
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
                tweetDateArr[i] = response.data[i].created_at;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbi5qcyJdLCJuYW1lcyI6WyJmZXRjaFRydW1wVHdlZXRzIiwiZGlzcGF0Y2giLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIm1vZGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIktleSIsImtleSIsInJlc3BvbnNlIiwidHdlZXRBcnIiLCJpIiwiZGF0YSIsImxlbmd0aCIsInRleHQiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZmV0Y2hIaWxsYXJ5VHdlZXRzIiwidHdlZXREYXRlQXJyIiwiY3JlYXRlZF9hdCIsImRhdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQTtBQUFBLGdNQUFNLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1hDLDRDQUFLLENBQUM7QUFDckJDLHNCQUFNLEVBQUUsS0FEYTtBQUVyQkMsbUJBQUcsRUFBRSx3SkFGZ0I7QUFHckJDLG9CQUFJLEVBQUUsU0FIZTtBQUlyQkMsdUJBQU8sRUFBRTtBQUNMQywrQkFBYSxFQUFFQyxzQ0FBRyxDQUFDQyxHQURkO0FBRUwsaURBQStCO0FBRjFCO0FBSlksZUFBRCxDQURNOztBQUFBO0FBQzVCQyxzQkFENEI7QUFXOUJDLHNCQVg4QixHQVduQixFQVhtQjs7QUFhbEMsbUJBQVNDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxNQUFsQyxFQUEwQ0YsQ0FBQyxFQUEzQyxFQUE4QztBQUMxQ0Qsd0JBQVEsQ0FBQ0MsQ0FBRCxDQUFSLEdBQWNGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLEVBQWlCRyxJQUEvQjtBQUNIOztBQUVEZCxzQkFBUSxDQUFDO0FBQ0xlLG9CQUFJLEVBQUVDLG1EQUREO0FBRUxDLHVCQUFPLEVBQUVQO0FBRkosZUFBRCxDQUFSOztBQWpCa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCO0FBdUJBLElBQU1RLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQTtBQUFBLGlNQUFNLGtCQUFNbEIsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNiQyw0Q0FBSyxDQUFDO0FBQ3JCQyxzQkFBTSxFQUFFLEtBRGE7QUFFckJDLG1CQUFHLEVBQUUsdUpBRmdCO0FBR3JCQyxvQkFBSSxFQUFFLFNBSGU7QUFJckJDLHVCQUFPLEVBQUU7QUFDTEMsK0JBQWEsRUFBRUMsc0NBQUcsQ0FBQ0MsR0FEZDtBQUVMLGlEQUErQjtBQUYxQjtBQUpZLGVBQUQsQ0FEUTs7QUFBQTtBQUM5QkMsc0JBRDhCO0FBV2hDQyxzQkFYZ0MsR0FXckIsRUFYcUI7QUFZaENTLDBCQVpnQyxHQVlqQixFQVppQjs7QUFjcEMsbUJBQVNSLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxNQUFsQyxFQUEwQ0YsQ0FBQyxFQUEzQyxFQUE4QztBQUMxQ0Qsd0JBQVEsQ0FBQ0MsQ0FBRCxDQUFSLEdBQWNGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLEVBQWlCRyxJQUEvQjtBQUNBSyw0QkFBWSxDQUFDUixDQUFELENBQVosR0FBa0JGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRCxDQUFkLEVBQWlCUyxVQUFuQztBQUNIOztBQUVEcEIsc0JBQVEsQ0FBQztBQUNMZSxvQkFBSSxFQUFFQyxxREFERDtBQUVMQyx1QkFBTyxFQUFDUCxRQUZIO0FBR0xXLHFCQUFLLEVBQUNGO0FBSEQsZUFBRCxDQUFSOztBQW5Cb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhmMGFjMmE2YjVmYTljZmM1YTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IEtleSBmcm9tICcuLi8uLi9rZXkuanNvbic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVHJ1bXBUd2VldHMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JywgXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMS9zdGF0dXNlcy91c2VyX3RpbWVsaW5lLmpzb24/c2NyZWVuX25hbWU9cmVhbERvbmFsZFRydW1wJmNvdW50PTMmaW5jbHVkZV9lbnRpdGllcz1mYWxzZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogS2V5LmtleSxcclxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIGxldCB0d2VldEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdHdlZXRBcnJbaV0gPSByZXNwb25zZS5kYXRhW2ldLnRleHRcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVFJVTVBfVFdFRVRTLFxyXG4gICAgICAgIHBheWxvYWQ6IHR3ZWV0QXJyXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hIaWxsYXJ5VHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsIFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvc3RhdHVzZXMvdXNlcl90aW1lbGluZS5qc29uP3NjcmVlbl9uYW1lPUhpbGxhcnlDbGludG9uJmNvdW50PTMmaW5jbHVkZV9lbnRpdGllcz1mYWxzZScsXHJcbiAgICAgICAgICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogS2V5LmtleSxcclxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIGxldCB0d2VldEFyciA9IFtdO1xyXG4gICAgbGV0IHR3ZWV0RGF0ZUFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdHdlZXRBcnJbaV0gPSByZXNwb25zZS5kYXRhW2ldLnRleHRcclxuICAgICAgICB0d2VldERhdGVBcnJbaV0gPSByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXRcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuSElMTEFSWV9UV0VFVFMsXHJcbiAgICAgICAgcGF5bG9hZDp0d2VldEFycixcclxuICAgICAgICBkYXRlczp0d2VldERhdGVBcnJcclxuXHJcbiAgICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=