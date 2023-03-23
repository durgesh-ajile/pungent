"use strict";
exports.id = 8180;
exports.ids = [8180];
exports.modules = {

/***/ 8180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class NavbarTwo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        id: "navbar",
        className: "navbar-area navbar-style-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("nav", {
          className: "navbar navbar-expand-md navbar-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "container-fluid",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                className: "navbar-brand",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                  src: "/images/Logo-Blue.jpg",
                  className: "black-logo",
                  alt: "logo",
                  style: {
                    width: "150px",
                    height: "100px"
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                  src: "/images/logo2.png",
                  className: "white-logo",
                  alt: "logo",
                  style: {
                    width: "150px",
                    height: "150px"
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              onClick: this.toggleNavbar,
              className: classTwo,
              type: "button",
              "data-toggle": "collapse",
              "data-target": "#navbarSupportedContent",
              "aria-controls": "navbarSupportedContent",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: "icon-bar top-bar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: "icon-bar middle-bar"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                className: "icon-bar bottom-bar"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: classOne,
              id: "navbarSupportedContent",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
                className: "navbar-nav",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: "/Home",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                      className: "nav-link",
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: "/services",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                      className: "nav-link",
                      children: "Services "
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: "/about",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                      className: "nav-link",
                      children: "About us"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    href: "/contact",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                      className: "nav-link",
                      children: "Contact Us"
                    })
                  })
                })]
              })
            })]
          })
        })
      })
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarTwo);

/***/ })

};
;