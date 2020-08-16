module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./key.json":
/*!******************!*\
  !*** ./key.json ***!
  \******************/
/*! exports provided: key, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"key\":\"bearer AAAAAAAAAAAAAAAAAAAAAJMkGwEAAAAAMVgfDK%2FoQjWF93i%2BoIwRH9prUz4%3DxQ7UdcBpAJuZKdepOO7emIgw3Eo6K8OblHBGldMFgl8oqw4rFi\"}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/actions/tweetAction */ "./redux/actions/tweetAction.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Home\\Desktop\\Remot\\Remot-Coding-Challenge\\nextjs-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function Home() {
  /**
   * useDitchpatch functions allows us to send of actions to be handled to retrieve the right state
   * useSelecter allows us to get a handle to the state to then use how we see fit
   */
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const tweeter = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state);
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
  }, "Welcome To The Tweet Fetcher!"), __jsx("h5", {
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
    onClick: () => dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["fetchTrumpTweets"])()),
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
    onClick: () => dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["fetchHillaryTweets"])()),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Show Hillary Clinton's Tweets"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary active",
    block: true,
    onClick: () => dispatch(Object(_redux_actions_tweetAction__WEBPACK_IMPORTED_MODULE_1__["resetView"])()),
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

/***/ }),

/***/ "./redux/actions/tweetAction.js":
/*!**************************************!*\
  !*** ./redux/actions/tweetAction.js ***!
  \**************************************/
/*! exports provided: fetchTrumpTweets, fetchHillaryTweets, resetView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTrumpTweets", function() { return fetchTrumpTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHillaryTweets", function() { return fetchHillaryTweets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetView", function() { return resetView; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _key_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../key.json */ "./key.json");
var _key_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../key.json */ "./key.json", 1);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const fetchTrumpTweets = () => async dispatch => {
  /**
   * GET REQUEST to the twitter Api
   * Do to the reques getting blocked by CORS I had to ad the 
   * following link as a proxy to actually process the request
   * https://cors-anywhere.herokuapp.com/
   */
  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=6&include_entities=false',
    mode: 'no-cors',
    headers: {
      Authorization: _key_json__WEBPACK_IMPORTED_MODULE_1__.key,
      'Access-Control-Allow-Origin': '*'
    }
  });
  /**
   * The following snippet of code is to filter through the twitter api response 
   * i packaged only the necessary info such as the actual tweets and the dates
   * packaged both data sets into 2 arrays
   */

  let tweetArr = [];
  let tweetDateArr = [];

  for (let i = 0; i < response.data.length; i++) {
    tweetArr[i] = response.data[i].text;
    tweetDateArr[i] = response.data[i].created_at.substring(0, response.data[i].created_at.indexOf('+'));
  }
  /**
  * So were are ultimetly sending off, the type
  * the array of tweets as well as a seperate array holding 
  * the dates of each of those tweets
  */


  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TRUMP_TWEETS"],
    payload: tweetArr,
    dates: tweetDateArr
  });
};
const fetchHillaryTweets = () => async dispatch => {
  /**
   * GET REQUEST to the twitter Api
   * Do to the reques getting blocked by CORS I had to ad the 
   * following link as a proxy to actually process the request
   * https://cors-anywhere.herokuapp.com/
   */
  const response = await axios__WEBPACK_IMPORTED_MODULE_2___default()({
    method: 'get',
    url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=HillaryClinton&count=6&include_entities=false',
    mode: 'no-cors',
    headers: {
      Authorization: _key_json__WEBPACK_IMPORTED_MODULE_1__.key,
      'Access-Control-Allow-Origin': '*'
    }
  });
  /**
   * The following snippet of code is to filter through the twitter api response 
   * i packaged only the necessary info such as the actual tweets and the dates
   * packaged both data sets into 2 arrays
   */

  let tweetArr = [];
  let tweetDateArr = [];

  for (let i = 0; i < response.data.length; i++) {
    tweetArr[i] = response.data[i].text;
    tweetDateArr[i] = response.data[i].created_at.substring(0, response.data[i].created_at.indexOf('+'));
  }
  /**
   * So were are ultimetly sending off, the type
   * the array of tweets as well as a seperate array holding 
   * the dates of each of those tweets
   */


  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HILLARY_TWEETS"],
    payload: tweetArr,
    dates: tweetDateArr
  });
};
/**
 * An empty dispatch function to clear the view from the tweets
 * Asynch is not needed as it no api calls are made
 */

const resetView = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RESET_TWEETS"]
  });
};

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: TRUMP_TWEETS, HILLARY_TWEETS, RESET_TWEETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUMP_TWEETS", function() { return TRUMP_TWEETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HILLARY_TWEETS", function() { return HILLARY_TWEETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_TWEETS", function() { return RESET_TWEETS; });
/**
 * The three different kinds of actions types that can arise
 */
const TRUMP_TWEETS = 'TRUMP_TWEETS';
const HILLARY_TWEETS = 'HILLARY_TWEETS';
const RESET_TWEETS = 'RESET_TWEETS';

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy90d2VldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInR3ZWV0ZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZm9udFNpemUiLCJtYXJnaW4iLCJpbmZvIiwiZm9udFdlaWdodCIsImZldGNoVHJ1bXBUd2VldHMiLCJmZXRjaEhpbGxhcnlUd2VldHMiLCJyZXNldFZpZXciLCJzZWxlY3RlZCIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaW5kZXgiLCJ3aWR0aCIsImRhdGVzIiwicmVzcG9uc2UiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIm1vZGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIktleSIsImtleSIsInR3ZWV0QXJyIiwidHdlZXREYXRlQXJyIiwiaSIsImRhdGEiLCJsZW5ndGgiLCJ0ZXh0IiwiY3JlYXRlZF9hdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiUkVTRVRfVFdFRVRTIiwiVFJVTVBfVFdFRVRTIiwiSElMTEFSWV9UV0VFVFMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7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QUFJQyxZQUFZLEdBQUcsRUFBbkI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxRQUFRLENBQUNZLElBQVQsQ0FBY0MsTUFBbEMsRUFBMENGLENBQUMsRUFBM0MsRUFBOEM7QUFDMUNGLFlBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNYLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCRyxJQUEvQjtBQUNBSixnQkFBWSxDQUFDQyxDQUFELENBQVosR0FBa0JYLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjRCxDQUFkLEVBQWlCSSxVQUFqQixDQUE0QkMsU0FBNUIsQ0FBc0MsQ0FBdEMsRUFBeUNoQixRQUFRLENBQUNZLElBQVQsQ0FBY0QsQ0FBZCxFQUFpQkksVUFBakIsQ0FBNEJFLE9BQTVCLENBQW9DLEdBQXBDLENBQXpDLENBQWxCO0FBQ0g7QUFFRDs7Ozs7OztBQUtBcEMsVUFBUSxDQUFDO0FBQ0xxQyxRQUFJLEVBQUVDLHFEQUREO0FBRUxDLFdBQU8sRUFBQ1gsUUFGSDtBQUdMVixTQUFLLEVBQUNXO0FBSEQsR0FBRCxDQUFSO0FBTUgsQ0ExQ007QUE0Q1A7Ozs7O0FBSU8sTUFBTWxCLFNBQVMsR0FBRyxNQUFNWCxRQUFRLElBQUk7QUFDdkNBLFVBQVEsQ0FBQztBQUNMcUMsUUFBSSxFQUFFQyxtREFBa0JFO0FBRG5CLEdBQUQsQ0FBUjtBQUdILENBSk0sQzs7Ozs7Ozs7Ozs7O0FDaEdQO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdPLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNRixZQUFZLEdBQUcsY0FBckIsQzs7Ozs7Ozs7Ozs7QUNMUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgZmV0Y2hUcnVtcFR3ZWV0cywgZmV0Y2hIaWxsYXJ5VHdlZXRzLCByZXNldFZpZXcgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3R3ZWV0QWN0aW9uJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ2FyZCwgQnV0dG9uLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgLyoqXHJcbiAgICogdXNlRGl0Y2hwYXRjaCBmdW5jdGlvbnMgYWxsb3dzIHVzIHRvIHNlbmQgb2YgYWN0aW9ucyB0byBiZSBoYW5kbGVkIHRvIHJldHJpZXZlIHRoZSByaWdodCBzdGF0ZVxyXG4gICAqIHVzZVNlbGVjdGVyIGFsbG93cyB1cyB0byBnZXQgYSBoYW5kbGUgdG8gdGhlIHN0YXRlIHRvIHRoZW4gdXNlIGhvdyB3ZSBzZWUgZml0XHJcbiAgICovXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHR3ZWV0ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1kLWNvbnRhaW5lclwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxKdW1ib3Ryb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI1MHB4XCIgfX0+V2VsY29tZSBUbyBUaGUgVHdlZXQgRmV0Y2hlciE8L2gxPlxyXG4gICAgICAgICAgICA8aDUgc3R5bGU9e3sgbWFyZ2luOiBcIiAwIDAgMjBweCAwXCIgfX0+e3R3ZWV0ZXIudHdlZXRlci5pbmZvfTwvaDU+XHJcblxyXG4gICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgIFRoZXNlIGFyZSB0aGUgYnV0dG9ucyB0aGF0IHdpbGwgYWxsb3cgdG8gZGlzcGF0Y2ggdGhlIGFjdGlvbnMgdG8gcmV0cmlldmUgZWl0aGVyXHJcbiAgICAgICAgICAgICAgICBwZXJzb25zIHR3ZWV0cywgb3IgdG8gY2xlYXIgdGhlIHZpZXcgZnJvbSBhbGwgdHdlZXRzXHJcbiAgICAgICAgICAgICovfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyIGFjdGl2ZVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19IGJsb2NrIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGZldGNoVHJ1bXBUd2VldHMoKSl9PlxyXG4gICAgICAgICAgICAgIFNob3cgRG9uYWxkIFRydW1wJ3MgVHdlZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnkgYWN0aXZlXCIgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0gYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZmV0Y2hIaWxsYXJ5VHdlZXRzKCkpfT5cclxuICAgICAgICAgICAgICBTaG93IEhpbGxhcnkgQ2xpbnRvbidzIFR3ZWV0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnkgYWN0aXZlXCIgYmxvY2sgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVzZXRWaWV3KCkpfT5cclxuICAgICAgICAgICAgICBDbGVhciBBbGwgVHdlZXRzIEZyb20gVmlld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUaGUgZm9sbG93aW5nIGNvbmRpdGlvbmFsIGxvZ2ljIHZlcmlmaWVzIGlmIGVpdGhlciB0aGUgVHJ1bXAgb3IgSGlsbGFyeVxyXG4gICAgICAgICAgICAgICAgYnV0b24gd2FzIHByZXNzZWQuIFxyXG4gICAgICAgICAgICAgICAgSWYgVHJ1ZSwgaXR0ZXJhdGUgdGhyb3VnaCB0aGUgYXJyYXkgb2YgdHdlZXRzIGFuZCBkaXNwbGF5IHRoZW0gb24gaW5kaXZpZHVhbCBjYXJkc1xyXG4gICAgICAgICAgICAgICAgRWxzZSwgRGlzcGxheSBub3RoaW5nXHJcbiAgICAgICAgICAgICovfVxyXG5cclxuICAgICAgICAgICAge3R3ZWV0ZXIudHdlZXRlci5zZWxlY3RlZCAmJlxyXG4gICAgICAgICAgICAgIHR3ZWV0ZXIudHdlZXRlci50d2VldHMubWFwKGZ1bmN0aW9uICh0d2VldCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGJvcmRlcj1cImRhcmtcIiBjbGFzc05hbWU9XCJzbWwtY2FyZFwiIGJsb2NrIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+VHdlZXQgI3tpbmRleCArIDF9PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3R3ZWV0fTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0d2VldGVyLnR3ZWV0ZXIuZGF0ZXNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBLZXkgZnJvbSAnLi4vLi4va2V5Lmpzb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRydW1wVHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHRVQgUkVRVUVTVCB0byB0aGUgdHdpdHRlciBBcGlcclxuICAgICAqIERvIHRvIHRoZSByZXF1ZXMgZ2V0dGluZyBibG9ja2VkIGJ5IENPUlMgSSBoYWQgdG8gYWQgdGhlIFxyXG4gICAgICogZm9sbG93aW5nIGxpbmsgYXMgYSBwcm94eSB0byBhY3R1YWxseSBwcm9jZXNzIHRoZSByZXF1ZXN0XHJcbiAgICAgKiBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9cclxuICAgICAqL1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsIFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvc3RhdHVzZXMvdXNlcl90aW1lbGluZS5qc29uP3NjcmVlbl9uYW1lPXJlYWxEb25hbGRUcnVtcCZjb3VudD02JmluY2x1ZGVfZW50aXRpZXM9ZmFsc2UnLFxyXG4gICAgICAgICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEtleS5rZXksXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIHNuaXBwZXQgb2YgY29kZSBpcyB0byBmaWx0ZXIgdGhyb3VnaCB0aGUgdHdpdHRlciBhcGkgcmVzcG9uc2UgXHJcbiAgICAgKiBpIHBhY2thZ2VkIG9ubHkgdGhlIG5lY2Vzc2FyeSBpbmZvIHN1Y2ggYXMgdGhlIGFjdHVhbCB0d2VldHMgYW5kIHRoZSBkYXRlc1xyXG4gICAgICogcGFja2FnZWQgYm90aCBkYXRhIHNldHMgaW50byAyIGFycmF5c1xyXG4gICAgICovXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuICAgIGxldCB0d2VldERhdGVBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICAgICAgdHdlZXREYXRlQXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LnN1YnN0cmluZygwLCByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuaW5kZXhPZignKycpKTtcclxuICAgIH1cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgKiBTbyB3ZXJlIGFyZSB1bHRpbWV0bHkgc2VuZGluZyBvZmYsIHRoZSB0eXBlXHJcbiAgICAgKiB0aGUgYXJyYXkgb2YgdHdlZXRzIGFzIHdlbGwgYXMgYSBzZXBlcmF0ZSBhcnJheSBob2xkaW5nIFxyXG4gICAgICogdGhlIGRhdGVzIG9mIGVhY2ggb2YgdGhvc2UgdHdlZXRzXHJcbiAgICAgKi9cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5UUlVNUF9UV0VFVFMsXHJcbiAgICAgICAgcGF5bG9hZDogdHdlZXRBcnIsXHJcbiAgICAgICAgZGF0ZXM6dHdlZXREYXRlQXJyXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hIaWxsYXJ5VHdlZXRzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEdFVCBSRVFVRVNUIHRvIHRoZSB0d2l0dGVyIEFwaVxyXG4gICAgICogRG8gdG8gdGhlIHJlcXVlcyBnZXR0aW5nIGJsb2NrZWQgYnkgQ09SUyBJIGhhZCB0byBhZCB0aGUgXHJcbiAgICAgKiBmb2xsb3dpbmcgbGluayBhcyBhIHByb3h5IHRvIGFjdHVhbGx5IHByb2Nlc3MgdGhlIHJlcXVlc3RcclxuICAgICAqIGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL1xyXG4gICAgICovXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JywgXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMS9zdGF0dXNlcy91c2VyX3RpbWVsaW5lLmpzb24/c2NyZWVuX25hbWU9SGlsbGFyeUNsaW50b24mY291bnQ9NiZpbmNsdWRlX2VudGl0aWVzPWZhbHNlJyxcclxuICAgICAgICAgICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBLZXkua2V5LFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIHNuaXBwZXQgb2YgY29kZSBpcyB0byBmaWx0ZXIgdGhyb3VnaCB0aGUgdHdpdHRlciBhcGkgcmVzcG9uc2UgXHJcbiAgICAgKiBpIHBhY2thZ2VkIG9ubHkgdGhlIG5lY2Vzc2FyeSBpbmZvIHN1Y2ggYXMgdGhlIGFjdHVhbCB0d2VldHMgYW5kIHRoZSBkYXRlc1xyXG4gICAgICogcGFja2FnZWQgYm90aCBkYXRhIHNldHMgaW50byAyIGFycmF5c1xyXG4gICAgICovXHJcbiAgICBsZXQgdHdlZXRBcnIgPSBbXTtcclxuICAgIGxldCB0d2VldERhdGVBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHR3ZWV0QXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS50ZXh0XHJcbiAgICAgICAgdHdlZXREYXRlQXJyW2ldID0gcmVzcG9uc2UuZGF0YVtpXS5jcmVhdGVkX2F0LnN1YnN0cmluZygwLCByZXNwb25zZS5kYXRhW2ldLmNyZWF0ZWRfYXQuaW5kZXhPZignKycpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvIHdlcmUgYXJlIHVsdGltZXRseSBzZW5kaW5nIG9mZiwgdGhlIHR5cGVcclxuICAgICAqIHRoZSBhcnJheSBvZiB0d2VldHMgYXMgd2VsbCBhcyBhIHNlcGVyYXRlIGFycmF5IGhvbGRpbmcgXHJcbiAgICAgKiB0aGUgZGF0ZXMgb2YgZWFjaCBvZiB0aG9zZSB0d2VldHNcclxuICAgICAqL1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkhJTExBUllfVFdFRVRTLFxyXG4gICAgICAgIHBheWxvYWQ6dHdlZXRBcnIsXHJcbiAgICAgICAgZGF0ZXM6dHdlZXREYXRlQXJyXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGVtcHR5IGRpc3BhdGNoIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSB2aWV3IGZyb20gdGhlIHR3ZWV0c1xyXG4gKiBBc3luY2ggaXMgbm90IG5lZWRlZCBhcyBpdCBubyBhcGkgY2FsbHMgYXJlIG1hZGVcclxuICovXHJcbmV4cG9ydCBjb25zdCByZXNldFZpZXcgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuUkVTRVRfVFdFRVRTXHJcbiAgICB9KVxyXG59IiwiLyoqXHJcbiAqIFRoZSB0aHJlZSBkaWZmZXJlbnQga2luZHMgb2YgYWN0aW9ucyB0eXBlcyB0aGF0IGNhbiBhcmlzZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRSVU1QX1RXRUVUUyA9ICdUUlVNUF9UV0VFVFMnO1xyXG5leHBvcnQgY29uc3QgSElMTEFSWV9UV0VFVFMgPSAnSElMTEFSWV9UV0VFVFMnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfVFdFRVRTID0gJ1JFU0VUX1RXRUVUUyc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9