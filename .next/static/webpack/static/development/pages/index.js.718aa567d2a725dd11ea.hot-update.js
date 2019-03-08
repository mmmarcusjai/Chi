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
      return window.addEventListener('scroll', debounce(this.handleScroll, 0));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      return window.removeEventListener('scroll', debounce(this.handleScroll, 0));
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
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-460423305" + " " + "brand-logo navbar-brand text-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/logo.png",
        className: "jsx-460423305",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "460423305",
        __self: this
      }, ".chi-nav.jsx-460423305{background-repeat:no-repeat;background-size:100%;height:70px;background-position-y:25%;background-color:#bbbabab8;-webkit-transform:translateY(-1000px);-ms-transform:translateY(-1000px);transform:translateY(-1000px);-webkit-transition:.5s;transition:.5s;}.chi-nav.isScrolling.jsx-460423305{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}.chi-nav.jsx-460423305 .brand-logo.jsx-460423305{position:absolute;left:50%;}.chi-nav.jsx-460423305 .brand-logo.jsx-460423305 img.jsx-460423305{width:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjdXNjaGFuL0RvY3VtZW50cy9EZXYvY2hpL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDNEIsQUFHcUQsQUFVRixBQUlSLEFBS1IsVUFDZCxRQUxhLFNBQ2IsQ0FmeUIscUJBQ1QsWUFDYywwQkFDQyxHQU8vQix3QkFOa0Msc0dBQ2Ysc0NBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9tYXJjdXNjaGFuL0RvY3VtZW50cy9EZXYvY2hpL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuICAgIGxldCB0aW1lb3V0XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpLCB3YWl0KVxuICAgIH1cbn1cblxuY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzY3JvbGxQb3NpdGlvblk6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbmNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIDMyIGlzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlYm91bmNlXG4gICAgLy8gSSBwaWNrZWQgdGhpcyBiZWNhdXNlIGl0J3MgYXBwcm94IDIgZnJhbWVzIChpZTogMTYuNyAqIDIpXG4gICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMCkpXG59XG5cbmNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwsIDApKVxufVxuXG5oYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgLy8gKyBpcyB1bmFyeSBvcGVyYXRvciwgc2FtZSBhcyBOdW1iZXIoc2Nyb2xsUG9zaXRpb25ZKVxuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uWSA9ICt3aW5kb3cuc2Nyb2xsWTtcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbFBvc2l0aW9uWSB9KTtcbn1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gISEgY29lcmNlcyB2YWx1ZSB0byBiZSBhIEJvb2xlYW5cbiAgICAgICAgLy8gd2Ugd2FudCBpdCB0byBiZSB0cnVlIG9yIGZhbHNlICh0cnVlIGlmIHNjcm9sbFBvc2l0aW9uWSA+IDApXG4gICAgICAgIC8vIGl0IHdvcmtzIGJlY2F1c2Ugc2Nyb2xsUG9zaXRpb25ZID09PSAwIGlzIGZhbHN5XG4gICAgICAgIGNvbnN0IGlzU2Nyb2xsaW5nID0gISF0aGlzLnN0YXRlLnNjcm9sbFBvc2l0aW9uWVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9eyhpc1Njcm9sbGluZykgPyAnbmF2IGlzU2Nyb2xsaW5nIGNoaS1uYXYgbmF2YmFyIGZpeGVkLXRvcCcgOiAnbmF2IGNoaS1uYXYgbmF2YmFyIGZpeGVkLXRvcCd9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBuYXZiYXItYnJhbmQgdGV4dC11cHBlcmNhc2VcIj48aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIj48L2ltZz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5jaGktbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJhYmFiODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jaGktbmF2LmlzU2Nyb2xsaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNoaS1uYXYgLmJyYW5kLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNoaS1uYXYgLmJyYW5kLWxvZ28gaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdk1lbnUiXX0= */\n/*@ sourceURL=/Users/marcuschan/Documents/Dev/chi/components/navbar.js */"));
    }
  }]);

  return NavMenu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ })

})
//# sourceMappingURL=index.js.718aa567d2a725dd11ea.hot-update.js.map