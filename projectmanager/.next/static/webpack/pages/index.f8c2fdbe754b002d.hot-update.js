"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/layout.tsx":
/*!******************************!*\
  !*** ./src/pages/layout.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\nvar _this = undefined;\n\n\n\n\n // Example icon\n // Example icon\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname === \"/summary\" ? 1 : 0), selectedTab = ref[0], setSelectedTab = ref[1];\n    var handleTabChange = function(event, newValue) {\n        setSelectedTab(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                elevation: 3,\n                style: {\n                    padding: \"20px\",\n                    margin: \"20px\",\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            minWidth: \"100px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                    onClick: function() {\n                                        setSelectedTab(0);\n                                        router.push(\"/\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\",\n                                    onClick: function() {\n                                        return router.push(\"/\");\n                                    },\n                                    selected: selectedTab === 0\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                            flexItem: true,\n                            orientation: \"horizontal\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            flexGrow: 1,\n                            borderBottom: 1,\n                            borderColor: \"divider\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                            flexItem: true,\n                            orientation: \"horizontal\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            minWidth: \"100px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\",\n                                    onClick: function() {\n                                        return router.push(\"/summary\");\n                                    },\n                                    selected: selectedTab === 1\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                    onClick: function() {\n                                        setSelectedTab(1);\n                                        router.push(\"/summary\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"VMNX7jo2g2mOEB3fAoV9sDBE3rY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQzs7Ozs7eUNBQUk7OENBQzFGLDhEQUFDVCxxREFBVTtvQ0FBQ3lCLE9BQU8sRUFBRSxXQUFNO3dDQUFFZixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQUNILE1BQU0sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUFFOzhDQUN4RSw0RUFBQ1YscUVBQVc7Ozs7NkNBQUc7Ozs7O3lDQUNKOzs7Ozs7aUNBQ1Q7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0E7MEJBQ1IsOERBQUNOLDhDQUFHO2dCQUFDc0IsTUFBTSxFQUFFLENBQUM7MEJBQ1osNEVBQUN2QixnREFBSztvQkFBQ3NCLFNBQVMsRUFBRSxDQUFDO29CQUFFSCxLQUFLLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxNQUFNO3dCQUFFRyxNQUFNLEVBQUUsUUFBUTtxQkFBRTs4QkFDOURkLFFBQVE7Ozs7O3lCQUNIOzs7OztxQkFDSjs7Ozs7O2FBQ0ksQ0FDWjtDQUNIO0dBekNLRCxNQUFNOztRQUNLSCxrREFBUzs7O0FBRHBCRyxLQUFBQSxNQUFNO0FBMkNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xheW91dC50c3g/MjVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBQYXBlciwgQm94LCBUYWJzLCBUYWIsIEljb25CdXR0b24sIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lJzsgLy8gRXhhbXBsZSBpY29uXHJcbmltcG9ydCBTdW1tYXJ5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N1bW1hcml6ZSc7IC8vIEV4YW1wbGUgaWNvblxyXG5cclxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSA9PT0gJy9zdW1tYXJ5JyA/IDEgOiAwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFiKG5ld1ZhbHVlKTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gMSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgcGFkZGluZzogJzAnLCBkaXJlY3Rpb246ICdydGwnIH19PlxyXG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIG1hcmdpbjogJzIwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1pbldpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZFRhYigwKTsgcm91dGVyLnB1c2goJy8nKTsgfX0+XHJcbiAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cItei157XldeTINeo15DXqdeZXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0gc2VsZWN0ZWQ9e3NlbGVjdGVkVGFiID09PSAwfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RGl2aWRlciBmbGV4SXRlbSBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiAvPlxyXG4gICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0gYm9yZGVyQm90dG9tPXsxfSBib3JkZXJDb2xvcj1cImRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgPERpdmlkZXIgZmxleEl0ZW0gb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgLz5cclxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbWluV2lkdGg9XCIxMDBweFwiPlxyXG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwi16HXmdeb15XXnVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvc3VtbWFyeScpfSBzZWxlY3RlZD17c2VsZWN0ZWRUYWIgPT09IDF9IC8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWRUYWIoMSk7IHJvdXRlci5wdXNoKCcvc3VtbWFyeScpOyB9fT5cclxuICAgICAgICAgICAgICA8U3VtbWFyeUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxCb3ggbWFyZ2luPXsyfT5cclxuICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIG1hcmdpbjogJzIwcHggMCcgfX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIlBhcGVyIiwiQm94IiwiVGFiIiwiSWNvbkJ1dHRvbiIsIkRpdmlkZXIiLCJ1c2VSb3V0ZXIiLCJIb21lSWNvbiIsIlN1bW1hcnlJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJwYXRobmFtZSIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJoYW5kbGVUYWJDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwicHVzaCIsIm1heFdpZHRoIiwic3R5bGUiLCJwYWRkaW5nIiwiZGlyZWN0aW9uIiwiZWxldmF0aW9uIiwibWFyZ2luIiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1pbldpZHRoIiwib25DbGljayIsImxhYmVsIiwic2VsZWN0ZWQiLCJmbGV4SXRlbSIsIm9yaWVudGF0aW9uIiwiZmxleEdyb3ciLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});