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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selectedTab = ref[0], setSelectedTab = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.pathname === \"/summary\") {\n            setSelectedTab(1);\n        } else {\n            setSelectedTab(0);\n        }\n    }, [\n        router.pathname\n    ]);\n    var handleHomeClick = function() {\n        setSelectedTab(0);\n        router.push(\"/\");\n    };\n    var handleSummaryClick = function() {\n        setSelectedTab(1);\n        router.push(\"/summary\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\",\n            backgroundColor: \"#f0f4f8\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                style: {\n                    overflow: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                            value: selectedTab,\n                            indicatorColor: \"primary\",\n                            textColor: \"primary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: \"20px\",\n                                        height: \"20px\",\n                                        borderRadius: \"50%\",\n                                        border: \"2px solid \".concat(selectedTab === 0 ? \"#1976d2\" : \"#e0e0e0\"),\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\"\n                                    },\n                                    children: selectedTab === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"10px\",\n                                            height: \"10px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: \"#1976d2\"\n                                        }\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\",\n                                onClick: handleHomeClick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        flexGrow: 1,\n                        borderBottom: 1,\n                        borderColor: \"divider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                            value: selectedTab,\n                            indicatorColor: \"primary\",\n                            textColor: \"primary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: \"20px\",\n                                        height: \"20px\",\n                                        borderRadius: \"50%\",\n                                        border: \"2px solid \".concat(selectedTab === 1 ? \"#1976d2\" : \"#e0e0e0\"),\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\"\n                                    },\n                                    children: selectedTab === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"10px\",\n                                            height: \"10px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: \"#1976d2\"\n                                        }\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0),\n                                label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\",\n                                onClick: handleSummaryClick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\",\n                        overflow: \"hidden\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"sfK0sHHkKzFT3gDyfiFK4Ssuubc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07d0JBQUV1QixNQUFNLEVBQUUsUUFBUTt3QkFBRWhCLFFBQVEsRUFBRSxRQUFRO3FCQUFFOzhCQUUvRGpCLFFBQVE7Ozs7O3lCQUNIOzs7OztxQkFDSjs7Ozs7O2FBQ0ksQ0FDWjtDQUNIO0dBMUhLRCxNQUFNOztRQUNLRCxrREFBUzs7O0FBRHBCQyxLQUFBQSxNQUFNO0FBNEhaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xheW91dC50c3g/MjVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFBhcGVyLCBCb3gsIFRhYnMsIFRhYiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IExheW91dDogUmVhY3QuRkM8TGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnL3N1bW1hcnknKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFiKDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUYWIoMCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVIb21lQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhYigwKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VtbWFyeUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUYWIoMSk7XHJcbiAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBtYXhXaWR0aD0nbGcnXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ3J0bCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YwZjRmOCcsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT0nZmxleCdcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2VlbidcclxuICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9J2ZsZXgnIGFsaWduSXRlbXM9J2NlbnRlcicgc3R5bGU9e3sgZmxleFNocmluazogMCB9fT5cclxuICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRhYn1cclxuICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgIHRleHRDb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGAycHggc29saWQgJHtzZWxlY3RlZFRhYiA9PT0gMCA/ICcjMTk3NmQyJyA6ICcjZTBlMGUwJ31gLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxOTc2ZDInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi16LXnteV15Mg16jXkNep15lcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUhvbWVDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGZsZXhHcm93PXsxfSBib3JkZXJCb3R0b209ezF9IGJvcmRlckNvbG9yPSdkaXZpZGVyJyAvPlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT0nZmxleCcgYWxpZ25JdGVtcz0nY2VudGVyJyBzdHlsZT17eyBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgdGV4dENvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3NlbGVjdGVkVGFiID09PSAxID8gJyMxOTc2ZDInIDogJyNlMGUwZTAnfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVGFiID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE5NzZkMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCLXodeZ15vXldedXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdW1tYXJ5Q2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IG1hcmdpbj17Mn0+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICBlbGV2YXRpb249ezN9XHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIG1hcmdpbjogJzIwcHggMCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUGFwZXIiLCJCb3giLCJUYWJzIiwiVGFiIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwicGF0aG5hbWUiLCJoYW5kbGVIb21lQ2xpY2siLCJwdXNoIiwiaGFuZGxlU3VtbWFyeUNsaWNrIiwibWF4V2lkdGgiLCJzdHlsZSIsInBhZGRpbmciLCJkaXJlY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3ZlcmZsb3ciLCJmbGV4U2hyaW5rIiwidmFsdWUiLCJpbmRpY2F0b3JDb2xvciIsInRleHRDb2xvciIsImljb24iLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImxhYmVsIiwib25DbGljayIsImZsZXhHcm93IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW4iLCJlbGV2YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});