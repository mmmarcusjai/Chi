webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _this = undefined,
    _jsxFileName = "/Users/marcuschan/Documents/Dev/chi/components/navbar.js";




var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(_this, args);
    }, wait);
  };
};

var NavMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavMenu, _React$Component);

  function NavMenu(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavMenu);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavMenu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2), "handleScroll", function () {
      // + is unary operator, same as Number(scrollPositionY)
      var scrollPositionY = +window.scrollY;
      return _this2.setState({
        scrollPositionY: scrollPositionY
      });
    });

    _this2.state = {
      scrollPositionY: 0
    };
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 32 is the number of milliseconds to debounce
      // I picked this because it's approx 2 frames (ie: 16.7 * 2)
      // return window.addEventListener('scroll', debounce(this.handleScroll, 0))
      return window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // return window.removeEventListener('scroll', debounce(this.handleScroll, 0))
      return window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      // !! coerces value to be a Boolean
      // we want it to be true or false (true if scrollPositionY > 0)
      // it works because scrollPositionY === 0 is falsy
      var isScrolling = !!this.state.scrollPositionY;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        className: "jsx-460423305" + " " + ((isScrolling ? 'nav isScrolling chi-nav navbar fixed-top' : 'nav chi-nav navbar fixed-top') || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-460423305" + " " + "brand-logo navbar-brand text-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/logo.png",
        className: "jsx-460423305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "460423305",
        __self: this
      }, ".chi-nav.jsx-460423305{background-repeat:no-repeat;background-size:100%;height:70px;background-position-y:25%;background-color:#bbbabab8;-webkit-transform:translateY(-1000px);-ms-transform:translateY(-1000px);transform:translateY(-1000px);-webkit-transition:.5s;transition:.5s;}.chi-nav.isScrolling.jsx-460423305{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.chi-nav.jsx-460423305 .brand-logo.jsx-460423305{position:absolute;left:50%;}.chi-nav.jsx-460423305 .brand-logo.jsx-460423305 img.jsx-460423305{width:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjdXNjaGFuL0RvY3VtZW50cy9EZXYvY2hpL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDNEIsQUFHcUQsQUFVRixBQUlSLEFBS1IsVUFDZCxRQUxhLFNBQ2IsQ0FmeUIscUJBQ1QsWUFDYywwQkFDQyxHQU8vQix3QkFOa0Msc0dBQ2Ysc0NBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9tYXJjdXNjaGFuL0RvY3VtZW50cy9EZXYvY2hpL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuICAgIGxldCB0aW1lb3V0XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLCB3YWl0KVxuICAgIH1cbn1cblxuY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzY3JvbGxQb3NpdGlvblk6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbmNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIDMyIGlzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlYm91bmNlXG4gICAgLy8gSSBwaWNrZWQgdGhpcyBiZWNhdXNlIGl0J3MgYXBwcm94IDIgZnJhbWVzIChpZTogMTYuNyAqIDIpXG4gICAgLy8gcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMCkpXG4gICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcbn1cblxuY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMCkpXG4gICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcbn1cblxuaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIC8vICsgaXMgdW5hcnkgb3BlcmF0b3IsIHNhbWUgYXMgTnVtYmVyKHNjcm9sbFBvc2l0aW9uWSlcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvblkgPSArd2luZG93LnNjcm9sbFk7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxQb3NpdGlvblkgfSk7XG59XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vICEhIGNvZXJjZXMgdmFsdWUgdG8gYmUgYSBCb29sZWFuXG4gICAgICAgIC8vIHdlIHdhbnQgaXQgdG8gYmUgdHJ1ZSBvciBmYWxzZSAodHJ1ZSBpZiBzY3JvbGxQb3NpdGlvblkgPiAwKVxuICAgICAgICAvLyBpdCB3b3JrcyBiZWNhdXNlIHNjcm9sbFBvc2l0aW9uWSA9PT0gMCBpcyBmYWxzeVxuICAgICAgICBjb25zdCBpc1Njcm9sbGluZyA9ICEhdGhpcy5zdGF0ZS5zY3JvbGxQb3NpdGlvbllcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXsoaXNTY3JvbGxpbmcpID8gJ25hdiBpc1Njcm9sbGluZyBjaGktbmF2IG5hdmJhciBmaXhlZC10b3AnIDogJ25hdiBjaGktbmF2IG5hdmJhciBmaXhlZC10b3AnfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gbmF2YmFyLWJyYW5kIHRleHQtdXBwZXJjYXNlXCI+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCI+PC9pbWc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY2hpLW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiYWJhYjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2hpLW5hdi5pc1Njcm9sbGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jaGktbmF2IC5icmFuZC1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jaGktbmF2IC5icmFuZC1sb2dvIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOYXZNZW51Il19 */\n/*@ sourceURL=/Users/marcuschan/Documents/Dev/chi/components/navbar.js */"));
    }
  }]);

  return NavMenu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ })

})
//# sourceMappingURL=index.js.6e1aec5478f54af2e043.hot-update.js.map