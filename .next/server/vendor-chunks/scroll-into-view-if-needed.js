"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs":
/*!****************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.cjs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var t=__webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.cjs\");const o=t=>!1===t?{block:\"end\",inline:\"nearest\"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:\"start\",inline:\"nearest\"};module.exports=function(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>\"object\"==typeof t&&\"function\"==typeof t.behavior)(r))return r.behavior(t.compute(e,r));const l=\"boolean\"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:c}of t.compute(e,o(r))){const t=i-n.top+n.bottom,o=c-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}};//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5janMiLCJtYXBwaW5ncyI6IkFBQWEsTUFBTSxtQkFBTyxDQUFDLDhGQUEwQixFQUFFLG1CQUFtQiw2QkFBNkIscURBQXFELGdDQUFnQyw2QkFBNkIseUJBQXlCLFFBQVEsS0FBSyxnQkFBZ0IsRUFBRSxvQ0FBb0Msb0VBQW9FLFNBQVMsWUFBWSxhQUFhLG1DQUFtQyxPQUFPLGlLQUFpSyxLQUFLLCtGQUErRix1REFBdUQsVUFBVSxrQkFBa0Isc0JBQXNCLDRDQUE0QyxVQUFVLHdCQUF3QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1ibG9nLy4vbm9kZV9tb2R1bGVzL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkL2Rpc3QvaW5kZXguY2pzPzY1YmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9cmVxdWlyZShcImNvbXB1dGUtc2Nyb2xsLWludG8tdmlld1wiKTtjb25zdCBvPXQ9PiExPT09dD97YmxvY2s6XCJlbmRcIixpbmxpbmU6XCJuZWFyZXN0XCJ9Oih0PT50PT09T2JqZWN0KHQpJiYwIT09T2JqZWN0LmtleXModCkubGVuZ3RoKSh0KT90OntibG9jazpcInN0YXJ0XCIsaW5saW5lOlwibmVhcmVzdFwifTttb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlLHIpe2lmKCFlLmlzQ29ubmVjdGVkfHwhKHQ9PntsZXQgbz10O2Zvcig7byYmby5wYXJlbnROb2RlOyl7aWYoby5wYXJlbnROb2RlPT09ZG9jdW1lbnQpcmV0dXJuITA7bz1vLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P28ucGFyZW50Tm9kZS5ob3N0Om8ucGFyZW50Tm9kZX1yZXR1cm4hMX0pKGUpKXJldHVybjtjb25zdCBuPSh0PT57Y29uc3Qgbz13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KTtyZXR1cm57dG9wOnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5Ub3ApfHwwLHJpZ2h0OnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5SaWdodCl8fDAsYm90dG9tOnBhcnNlRmxvYXQoby5zY3JvbGxNYXJnaW5Cb3R0b20pfHwwLGxlZnQ6cGFyc2VGbG9hdChvLnNjcm9sbE1hcmdpbkxlZnQpfHwwfX0pKGUpO2lmKCh0PT5cIm9iamVjdFwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5iZWhhdmlvcikocikpcmV0dXJuIHIuYmVoYXZpb3IodC5jb21wdXRlKGUscikpO2NvbnN0IGw9XCJib29sZWFuXCI9PXR5cGVvZiByfHxudWxsPT1yP3ZvaWQgMDpyLmJlaGF2aW9yO2Zvcihjb25zdHtlbDphLHRvcDppLGxlZnQ6Y31vZiB0LmNvbXB1dGUoZSxvKHIpKSl7Y29uc3QgdD1pLW4udG9wK24uYm90dG9tLG89Yy1uLmxlZnQrbi5yaWdodDthLnNjcm9sbCh7dG9wOnQsbGVmdDpvLGJlaGF2aW9yOmx9KX19Oy8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.cjs\n");

/***/ })

};
;