"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo",{

/***/ "./src/pages/todo/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/todo/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ todo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ \"./src/services/index.ts\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./src/pages/todo/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction todo() {\n    _s();\n    const [dataList, setDataList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_services__WEBPACK_IMPORTED_MODULE_1__.requestTasks)().then((dataList)=>{\n            setDataList(dataList);\n        }).catch((error)=>{\n            // Handle errors if needed\n            console.error(error);\n        });\n    }, []);\n    console.log(\"data \", dataList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: dataList.forEach((element)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: element.title\n                }, void 0, false, {\n                    fileName: \"/Users/patrickcruz/Desktop/CODES/randomUI/src/pages/todo/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 23\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/patrickcruz/Desktop/CODES/randomUI/src/pages/todo/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 19\n        }, this)\n    }, void 0, false);\n}\n_s(todo, \"Q8xkRfrPPyoly26OmJCucpuPJ7I=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0Q7QUFDRztBQUc3QixTQUFTSSxPQUFPOztJQUMzQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBUUgsK0NBQVFBLENBQUMsRUFBRTtJQUVoREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRix1REFBWUEsR0FDUE8sSUFBSSxDQUFDRixDQUFBQSxXQUFZO1lBQ2RDLFlBQVlEO1FBQ2hCLEdBQ0NHLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUztZQUNaLDBCQUEwQjtZQUMxQkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNsQjtJQUNSLEdBQUcsRUFBRTtJQUVMQyxRQUFRQyxHQUFHLENBQUUsU0FBUU47SUFDckIscUJBQ0k7a0JBQ1UsNEVBQUNPO1lBQUlDLFdBQVdaLHFFQUFnQjtzQkFDL0JJLFNBQVNVLE9BQU8sQ0FBQyxDQUFDQyxVQUFpQjs4QkFDaEMsOERBQUNDOzhCQUFHRCxRQUFRRSxLQUFLOzs7Ozs7WUFDckI7Ozs7Ozs7QUFNbEIsQ0FBQztHQTFCdUJkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2RvL2luZGV4LnRzeD9lYTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3RUYXNrcyB9IGZyb20gXCJAL3NlcnZpY2VzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvKCkge1xuICAgIGNvbnN0IFtkYXRhTGlzdCwgc2V0RGF0YUxpc3RdOiBhbnkgPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXF1ZXN0VGFza3MoKVxuICAgICAgICAgICAgLnRoZW4oZGF0YUxpc3QgPT4ge1xuICAgICAgICAgICAgICAgIHNldERhdGFMaXN0KGRhdGFMaXN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zb2xlLmxvZyhgZGF0YSBgLCBkYXRhTGlzdClcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAge2RhdGFMaXN0LmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIDxwPntlbGVtZW50LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiAiXSwibmFtZXMiOlsicmVxdWVzdFRhc2tzIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2RvIiwiZGF0YUxpc3QiLCJzZXREYXRhTGlzdCIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZvckVhY2giLCJlbGVtZW50IiwicCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todo/index.tsx\n"));

/***/ })

});