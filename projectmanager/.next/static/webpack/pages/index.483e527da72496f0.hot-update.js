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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\nvar _this = undefined;\n\n\n\n\n // Example icon\n // Example icon\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname === \"/summary\" ? 1 : 0), selectedTab = ref[0], setSelectedTab = ref[1];\n    var handleTabChange = function(event, newValue) {\n        setSelectedTab(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                elevation: 3,\n                style: {\n                    padding: \"20px\",\n                    margin: \"20px\",\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            minWidth: \"100px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                    onClick: function() {\n                                        setSelectedTab(0);\n                                        router.push(\"/\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                    value: selectedTab,\n                                    onChange: handleTabChange,\n                                    indicatorColor: \"primary\",\n                                    textColor: \"primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                        label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\",\n                                        component: \"a\",\n                                        href: \"/\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            flexGrow: 1,\n                            borderBottom: 1,\n                            borderColor: \"divider\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            minWidth: \"100px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                    value: selectedTab,\n                                    onChange: handleTabChange,\n                                    indicatorColor: \"primary\",\n                                    textColor: \"primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                        label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\",\n                                        component: \"a\",\n                                        href: \"/summary\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                    onClick: function() {\n                                        setSelectedTab(1);\n                                        router.push(\"/summary\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"VMNX7jo2g2mOEB3fAoV9sDBE3rY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsSUFBSSxFQUFDLFVBQVU7Ozs7OzZDQUFHOzs7Ozt5Q0FDOUM7OENBQ1AsOERBQUMvQixxREFBVTtvQ0FBQ3dCLE9BQU8sRUFBRSxXQUFNO3dDQUFFZixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQUNILE1BQU0sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUFFOzhDQUN4RSw0RUFBQ1YscUVBQVc7Ozs7NkNBQUc7Ozs7O3lDQUNKOzs7Ozs7aUNBQ1Q7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0E7MEJBQ1IsOERBQUNOLDhDQUFHO2dCQUFDc0IsTUFBTSxFQUFFLENBQUM7MEJBQ1osNEVBQUN2QixnREFBSztvQkFBQ3NCLFNBQVMsRUFBRSxDQUFDO29CQUFFSCxLQUFLLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxNQUFNO3dCQUFFRyxNQUFNLEVBQUUsUUFBUTtxQkFBRTs4QkFDOURkLFFBQVE7Ozs7O3lCQUNIOzs7OztxQkFDSjs7Ozs7O2FBQ0ksQ0FDWjtDQUNIO0dBM0NLRCxNQUFNOztRQUNLSCxrREFBUzs7O0FBRHBCRyxLQUFBQSxNQUFNO0FBNkNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xheW91dC50c3g/MjVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBQYXBlciwgQm94LCBUYWJzLCBUYWIsIEljb25CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lJzsgLy8gRXhhbXBsZSBpY29uXHJcbmltcG9ydCBTdW1tYXJ5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N1bW1hcml6ZSc7IC8vIEV4YW1wbGUgaWNvblxyXG5cclxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWIsIHNldFNlbGVjdGVkVGFiXSA9IHVzZVN0YXRlKHJvdXRlci5wYXRobmFtZSA9PT0gJy9zdW1tYXJ5JyA/IDEgOiAwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFiKG5ld1ZhbHVlKTtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gMSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgcGFkZGluZzogJzAnLCBkaXJlY3Rpb246ICdydGwnIH19PlxyXG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXszfSBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIG1hcmdpbjogJzIwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1pbldpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZFRhYigwKTsgcm91dGVyLnB1c2goJy8nKTsgfX0+XHJcbiAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFRhYnMgdmFsdWU9e3NlbGVjdGVkVGFifSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIiB0ZXh0Q29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cItei157XldeTINeo15DXqdeZXCIgY29tcG9uZW50PVwiYVwiIGhyZWY9XCIvXCIgLz5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBib3JkZXJCb3R0b209ezF9IGJvcmRlckNvbG9yPVwiZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1pbldpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgPFRhYnMgdmFsdWU9e3NlbGVjdGVkVGFifSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfSBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIiB0ZXh0Q29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIteh15nXm9eV151cIiBjb21wb25lbnQ9XCJhXCIgaHJlZj1cIi9zdW1tYXJ5XCIgLz5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkVGFiKDEpOyByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTsgfX0+XHJcbiAgICAgICAgICAgICAgPFN1bW1hcnlJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8Qm94IG1hcmdpbj17Mn0+XHJcbiAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnLCBtYXJnaW46ICcyMHB4IDAnIH19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJQYXBlciIsIkJveCIsIlRhYnMiLCJUYWIiLCJJY29uQnV0dG9uIiwidXNlUm91dGVyIiwiSG9tZUljb24iLCJTdW1tYXJ5SWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwicGF0aG5hbWUiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInB1c2giLCJtYXhXaWR0aCIsInN0eWxlIiwicGFkZGluZyIsImRpcmVjdGlvbiIsImVsZXZhdGlvbiIsIm1hcmdpbiIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsIm9uQ2xpY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaW5kaWNhdG9yQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsYWJlbCIsImNvbXBvbmVudCIsImhyZWYiLCJmbGV4R3JvdyIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});