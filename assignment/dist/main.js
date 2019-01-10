/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-for-each */ \"./src/my-for-each.js\");\n\nvar test = new _my_for_each__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.write(\"<br><b>Input Array for Tesing myForeach [10, 20, 30]</b>\");\ndocument.write('<br><br><b>Tesing For Each </b>');\ntest.testMyForEach();\ndocument.write('<br><br><b>Tesing For Each and adding element in array while looping </b>');\ntest.testAddingElementWhileLooping();\ndocument.write('<br><br>Tesing For Each and updating element in array while looping</b>');\ntest.testChangingArrElementValueBeforeIterating();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVzdE15Rm9yRWFjaCBmcm9tIFwiLi9teS1mb3ItZWFjaFwiO1xuXG5jb25zdCB0ZXN0ID0gbmV3IFRlc3RNeUZvckVhY2goKTtcbmRvY3VtZW50LndyaXRlKGA8YnI+PGI+SW5wdXQgQXJyYXkgZm9yIFRlc2luZyBteUZvcmVhY2ggWzEwLCAyMCwgMzBdPC9iPmApO1xuZG9jdW1lbnQud3JpdGUoJzxicj48YnI+PGI+VGVzaW5nIEZvciBFYWNoIDwvYj4nKTtcbnRlc3QudGVzdE15Rm9yRWFjaCgpO1xuZG9jdW1lbnQud3JpdGUoJzxicj48YnI+PGI+VGVzaW5nIEZvciBFYWNoIGFuZCBhZGRpbmcgZWxlbWVudCBpbiBhcnJheSB3aGlsZSBsb29waW5nIDwvYj4nKTtcbnRlc3QudGVzdEFkZGluZ0VsZW1lbnRXaGlsZUxvb3BpbmcoKVxuZG9jdW1lbnQud3JpdGUoJzxicj48YnI+VGVzaW5nIEZvciBFYWNoIGFuZCB1cGRhdGluZyBlbGVtZW50IGluIGFycmF5IHdoaWxlIGxvb3Bpbmc8L2I+Jyk7XG50ZXN0LnRlc3RDaGFuZ2luZ0FyckVsZW1lbnRWYWx1ZUJlZm9yZUl0ZXJhdGluZygpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/my-for-each.js":
/*!****************************!*\
  !*** ./src/my-for-each.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Reference https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nif (!Array.prototype.myForEach) {\n  // callback is a function to execute on each iteration of array\n  // this has input array on which myForEach is called\n  Array.prototype.myForEach = function (callback) {\n    var T; // Check array is null throw error before proceeding\n\n    if (this == null) {\n      throw new TypeError('this is null or not defined');\n    }\n\n    var O = Object(this); // Initializing length Because of length calculation any addition while looping will be ignore\n\n    var len = O.length; // Checkinng callback is function, throw a TypeError exception. \n\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    } // If context was supplied, let T be context; else let\n    // T be undefined.\n\n\n    if (arguments.length > 1) {\n      T = arguments[1];\n    } // Using for loop iterate for each key in array and callback\n    // for (i = 0; i < len; i++) {\n    //     const keyValue = O[i];\n    //     callback.call(T, keyValue, i, O);\n    // }\n    // Below Solution using while loop\n\n\n    var k = 0;\n\n    while (k < len) {\n      var kValue = void 0;\n\n      if (k in O) {\n        kValue = O[k];\n        callback.call(T, kValue, k, O);\n      }\n\n      k++;\n    }\n  };\n}\n\nvar TestMyForEach =\n/*#__PURE__*/\nfunction () {\n  function TestMyForEach() {\n    _classCallCheck(this, TestMyForEach);\n  }\n\n  _createClass(TestMyForEach, [{\n    key: \"testMyForEach\",\n    value: function testMyForEach() {\n      [10, 20, 30].myForEach(function (value, index, arr) {\n        console.log(\"In callback function for value:\".concat(value, \", index:\").concat(index, \", array:\").concat(arr));\n        document.write(\"<br>In callback function for value:\".concat(value, \", index:\").concat(index, \", array:\").concat(arr));\n      });\n    }\n  }, {\n    key: \"testAddingElementWhileLooping\",\n    value: function testAddingElementWhileLooping() {\n      [10, 20, 30].myForEach(function (value, index, arr) {\n        if (value === 10) {\n          // Pushing the 50 to array this will not be iterated as we calculate length before looping\n          arr.push(50);\n        }\n\n        console.log(\"Testing element addition while looping value:\".concat(value, \", index:\").concat(index, \", array:\").concat(arr));\n        document.write(\"<br>Testing element addition while looping value:\".concat(value, \", index:\").concat(index, \", array:\").concat(arr));\n      });\n    }\n  }, {\n    key: \"testChangingArrElementValueBeforeIterating\",\n    value: function testChangingArrElementValueBeforeIterating() {\n      [10, 20, 30].myForEach(function (value, index, arr) {\n        if (value === 10) {\n          // Chaning element at index 2 before reaching to index will reflect in o/p\n          arr[2] = 50;\n        }\n\n        console.log(\"Chaning element before looping value:\".concat(value, \", index:\").concat(index, \", array:\").concat(arr));\n        document.write(\"<br>Chaning element before looping value:\".concat(value, \", index:\").concat(index, \", array:\").concat(arr));\n      });\n    }\n  }]);\n\n  return TestMyForEach;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestMyForEach);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbXktZm9yLWVhY2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbXktZm9yLWVhY2guanM/ZmE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWZlcmVuY2UgaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbmlmICghQXJyYXkucHJvdG90eXBlLm15Rm9yRWFjaCkge1xuICAgIC8vIGNhbGxiYWNrIGlzIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlYWNoIGl0ZXJhdGlvbiBvZiBhcnJheVxuICAgIC8vIHRoaXMgaGFzIGlucHV0IGFycmF5IG9uIHdoaWNoIG15Rm9yRWFjaCBpcyBjYWxsZWRcbiAgICBBcnJheS5wcm90b3R5cGUubXlGb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBUO1xuICAgICAgICAvLyBDaGVjayBhcnJheSBpcyBudWxsIHRocm93IGVycm9yIGJlZm9yZSBwcm9jZWVkaW5nXG4gICAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IE8gPSBPYmplY3QodGhpcyk7XG4gICAgICAgIC8vIEluaXRpYWxpemluZyBsZW5ndGggQmVjYXVzZSBvZiBsZW5ndGggY2FsY3VsYXRpb24gYW55IGFkZGl0aW9uIHdoaWxlIGxvb3Bpbmcgd2lsbCBiZSBpZ25vcmVcbiAgICAgICAgbGV0IGxlbiA9IE8ubGVuZ3RoO1xuXG4gICAgICAgIC8vIENoZWNraW5uZyBjYWxsYmFjayBpcyBmdW5jdGlvbiwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLiBcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGNvbnRleHQgd2FzIHN1cHBsaWVkLCBsZXQgVCBiZSBjb250ZXh0OyBlbHNlIGxldFxuICAgICAgICAvLyBUIGJlIHVuZGVmaW5lZC5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBUID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNpbmcgZm9yIGxvb3AgaXRlcmF0ZSBmb3IgZWFjaCBrZXkgaW4gYXJyYXkgYW5kIGNhbGxiYWNrXG4gICAgICAgIC8vIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyAgICAgY29uc3Qga2V5VmFsdWUgPSBPW2ldO1xuICAgICAgICAvLyAgICAgY2FsbGJhY2suY2FsbChULCBrZXlWYWx1ZSwgaSwgTyk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBCZWxvdyBTb2x1dGlvbiB1c2luZyB3aGlsZSBsb29wXG4gICAgICAgIGxldCBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIGxldCBrVmFsdWU7XG4gICAgICAgICAgICBpZiAoayBpbiBPKSB7XG4gICAgICAgICAgICAgICAga1ZhbHVlID0gT1trXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKFQsIGtWYWx1ZSwgaywgTyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrKys7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5jbGFzcyBUZXN0TXlGb3JFYWNoIHtcbiAgICB0ZXN0TXlGb3JFYWNoKCkge1xuICAgICAgICBbMTAsIDIwLCAzMF0ubXlGb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEluIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB2YWx1ZToke3ZhbHVlfSwgaW5kZXg6JHtpbmRleH0sIGFycmF5OiR7YXJyfWApO1xuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoYDxicj5JbiBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdmFsdWU6JHt2YWx1ZX0sIGluZGV4OiR7aW5kZXh9LCBhcnJheToke2Fycn1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGVzdEFkZGluZ0VsZW1lbnRXaGlsZUxvb3BpbmcoKSB7XG4gICAgICAgIFsxMCwgMjAsIDMwXS5teUZvckVhY2goKHZhbHVlLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gUHVzaGluZyB0aGUgNTAgdG8gYXJyYXkgdGhpcyB3aWxsIG5vdCBiZSBpdGVyYXRlZCBhcyB3ZSBjYWxjdWxhdGUgbGVuZ3RoIGJlZm9yZSBsb29waW5nXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFRlc3RpbmcgZWxlbWVudCBhZGRpdGlvbiB3aGlsZSBsb29waW5nIHZhbHVlOiR7dmFsdWV9LCBpbmRleDoke2luZGV4fSwgYXJyYXk6JHthcnJ9YCk7XG4gICAgICAgICAgICBkb2N1bWVudC53cml0ZShgPGJyPlRlc3RpbmcgZWxlbWVudCBhZGRpdGlvbiB3aGlsZSBsb29waW5nIHZhbHVlOiR7dmFsdWV9LCBpbmRleDoke2luZGV4fSwgYXJyYXk6JHthcnJ9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRlc3RDaGFuZ2luZ0FyckVsZW1lbnRWYWx1ZUJlZm9yZUl0ZXJhdGluZygpIHtcbiAgICAgICAgWzEwLCAyMCwgMzBdLm15Rm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyBDaGFuaW5nIGVsZW1lbnQgYXQgaW5kZXggMiBiZWZvcmUgcmVhY2hpbmcgdG8gaW5kZXggd2lsbCByZWZsZWN0IGluIG8vcFxuICAgICAgICAgICAgICAgIGFyclsyXSA9IDUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYENoYW5pbmcgZWxlbWVudCBiZWZvcmUgbG9vcGluZyB2YWx1ZToke3ZhbHVlfSwgaW5kZXg6JHtpbmRleH0sIGFycmF5OiR7YXJyfWApO1xuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoYDxicj5DaGFuaW5nIGVsZW1lbnQgYmVmb3JlIGxvb3BpbmcgdmFsdWU6JHt2YWx1ZX0sIGluZGV4OiR7aW5kZXh9LCBhcnJheToke2Fycn1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0TXlGb3JFYWNoOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/my-for-each.js\n");

/***/ })

/******/ });