"use strict";
exports.id = 6234;
exports.ids = [6234];
exports.modules = {

/***/ 6234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const OwlCarousel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4208, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4208)],
    modules: ["..\\components\\Common\\LatestNewsSlider.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i className='pe-7s-angle-left'></i>", "<i className='icofont-thin-double-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class LatestNewsSlider extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
      className: "blog-area ptb-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "section-title",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
            children: "Latest News"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          })]
        }), this.state.display ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(OwlCarousel, _objectSpread(_objectSpread({
          className: "blog-slides owl-carousel owl-theme"
        }, options), {}, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "single-blog-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-image",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/images/blog/blog1.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "post-tag",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "Technology"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-post-content",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "date",
                children: "Feb 15, 2020"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog-details",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "The Most Popular New top Business Apps"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: "read-more-btn",
                  children: ["Read More", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "icofont-thin-double-right"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "single-blog-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-image",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/images/blog/blog2.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "post-tag",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "Agency"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-post-content",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "date",
                children: "Feb 16, 2020"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog-details",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "The Best Marketing top use Management Tools"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: "read-more-btn",
                  children: ["Read More", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "icofont-thin-double-right"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "single-blog-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-image",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/images/blog/blog3.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "post-tag",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "IT Agency"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-post-content",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "date",
                children: "Feb 17, 2020"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog-details",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "3 WooCommerce Plugins to Boost Sales"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: "read-more-btn",
                  children: ["Read More", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "icofont-thin-double-right"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "single-blog-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-image",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/images/blog/blog4.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "post-tag",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "Development"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "blog-post-content",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "date",
                children: "Feb 18, 2020"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: "/blog-details",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    children: "Top 21 Must-Read Blogs For Creative Agencies"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/blog-details",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                  className: "read-more-btn",
                  children: ["Read More", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "icofont-thin-double-right"
                  })]
                })
              })]
            })]
          })]
        })) : '']
      })
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestNewsSlider);

/***/ })

};
;