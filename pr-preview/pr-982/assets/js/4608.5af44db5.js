"use strict";
(self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || []).push([[4608],{

/***/ 92081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ __name)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });




/***/ }),

/***/ 92227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ layouts_default)
/* harmony export */ });
/* harmony import */ var _chunks_mermaid_layout_elk_core_chunk_ZW26E7AF_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92081);


// src/layouts.ts
var loader = /* @__PURE__ */ (0,_chunks_mermaid_layout_elk_core_chunk_ZW26E7AF_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K)(async () => await Promise.all(/* import() */[__webpack_require__.e(451), __webpack_require__.e(6180)]).then(__webpack_require__.bind(__webpack_require__, 36180)), "loader");
var algos = ["elk.stress", "elk.force", "elk.mrtree", "elk.sporeOverlap"];
var layouts = [
  {
    name: "elk",
    loader,
    algorithm: "elk.layered"
  },
  ...algos.map((algo) => ({
    name: algo,
    loader,
    algorithm: algo
  }))
];
var layouts_default = layouts;



/***/ })

}]);