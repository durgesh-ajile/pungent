"use strict";
exports.id = 6786;
exports.ids = [6786];
exports.modules = {

/***/ 1670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



class PageBanner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      pageTitle,
      BGImage
    } = this.props;
    return (
      /*#__PURE__*/
      // <div className="page-title-area bg-one">
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: `page-title-area ${BGImage}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "d-table",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "d-table-cell",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
              className: "container",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
                children: pageTitle
              })
            })
          })
        })
      })
    );
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBanner);

/***/ }),

/***/ 3908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? 'https://trynext-react.envytheme.com' : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ })

};
;