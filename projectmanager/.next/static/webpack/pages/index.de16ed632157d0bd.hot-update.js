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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selectedTab = ref[0], setSelectedTab = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.pathname === \"/summary\") {\n            setSelectedTab(1);\n        } else {\n            setSelectedTab(0);\n        }\n    }, [\n        router.pathname\n    ]);\n    var handleHomeClick = function() {\n        setSelectedTab(0);\n        router.push(\"/\");\n    };\n    var handleSummaryClick = function() {\n        setSelectedTab(1);\n        router.push(\"/summary\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\",\n            backgroundColor: \"#f0f4f8\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                style: {\n                    overflow: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                            value: selectedTab,\n                            indicatorColor: \"primary\",\n                            textColor: \"primary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: \"20px\",\n                                        height: \"20px\",\n                                        borderRadius: \"50%\",\n                                        backgroundColor: selectedTab === 0 ? \"#1976d2\" : \"#e0e0e0\"\n                                    }\n                                }, void 0, false, void 0, void 0),\n                                onClick: handleHomeClick\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        flexGrow: 1,\n                        borderBottom: 1,\n                        borderColor: \"divider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"20px\",\n                                            height: \"20px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: selectedTab === 1 ? \"#1976d2\" : \"#e0e0e0\"\n                                        }\n                                    }, void 0, false, void 0, void 0),\n                                    onClick: handleSummaryClick\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: handleSummaryClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\",\n                        overflow: \"hidden\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"sfK0sHHkKzFT3gDyfiFK4Ssuubc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUc7d0NBQUNkLEtBQUssRUFBRTs0Q0FBRWUsS0FBSyxFQUFFLE1BQU07NENBQUVDLE1BQU0sRUFBRSxNQUFNOzRDQUFFQyxZQUFZLEVBQUUsS0FBSzs0Q0FBRWQsZUFBZSxFQUFFVixXQUFXLEtBQUssQ0FBQyxHQUFHLFNBQVMsR0FBRyxTQUFTO3lDQUFFO3FFQUFJO29DQUN4SXlCLE9BQU8sRUFBRXBCLGtCQUFrQjs7Ozs7eUNBQzNCOzs7OztxQ0FDRzswQ0FDUCw4REFBQ1gscURBQVU7Z0NBQUMrQixPQUFPLEVBQUVwQixrQkFBa0I7MENBQ3JDLDRFQUFDVCxxRUFBVzs7Ozt5Q0FBRzs7Ozs7cUNBQ0o7Ozs7Ozs2QkFDVDs7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDTCw4Q0FBRztnQkFBQ3NDLE1BQU0sRUFBRSxDQUFDOzBCQUNaLDRFQUFDdkMsZ0RBQUs7b0JBQUN3QyxTQUFTLEVBQUUsQ0FBQztvQkFBRXZCLEtBQUssRUFBRTt3QkFBRUMsT0FBTyxFQUFFLE1BQU07d0JBQUVxQixNQUFNLEVBQUUsUUFBUTt3QkFBRWQsUUFBUSxFQUFFLFFBQVE7cUJBQUU7OEJBQ2xGakIsUUFBUTs7Ozs7eUJBQ0g7Ozs7O3FCQUNKOzs7Ozs7YUFDSSxDQUNaO0NBQ0g7R0FyREtELE1BQU07O1FBQ0tGLGtEQUFTOzs7QUFEcEJFLEtBQUFBLE1BQU07QUF1RFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGF5b3V0LnRzeD8yNWRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUGFwZXIsIEJveCwgVGFicywgVGFiLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZSc7XHJcbmltcG9ydCBTdW1tYXJ5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N1bW1hcml6ZSc7XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IExheW91dDogUmVhY3QuRkM8TGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnL3N1bW1hcnknKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkVGFiKDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUYWIoMCk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVIb21lQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhYigwKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VtbWFyeUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUYWIoMSk7XHJcbiAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgcGFkZGluZzogJzAnLCBkaXJlY3Rpb246ICdydGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmNGY4JywgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17c2VsZWN0ZWRUYWJ9IGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiIHRleHRDb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGljb249ezxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgaGVpZ2h0OiAnMjBweCcsIGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRUYWIgPT09IDAgPyAnIzE5NzZkMicgOiAnI2UwZTBlMCcgfX0gLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlSG9tZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggZmxleEdyb3c9ezF9IGJvcmRlckJvdHRvbT17MX0gYm9yZGVyQ29sb3I9XCJkaXZpZGVyXCIgLz5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17c2VsZWN0ZWRUYWJ9IGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiIHRleHRDb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIGljb249ezxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgaGVpZ2h0OiAnMjBweCcsIGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRUYWIgPT09IDEgPyAnIzE5NzZkMicgOiAnI2UwZTBlMCcgfX0gLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VtbWFyeUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlU3VtbWFyeUNsaWNrfT5cclxuICAgICAgICAgICAgPFN1bW1hcnlJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IG1hcmdpbj17Mn0+XHJcbiAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnLCBtYXJnaW46ICcyMHB4IDAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIlBhcGVyIiwiQm94IiwiVGFicyIsIlRhYiIsIkljb25CdXR0b24iLCJ1c2VSb3V0ZXIiLCJTdW1tYXJ5SWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsInBhdGhuYW1lIiwiaGFuZGxlSG9tZUNsaWNrIiwicHVzaCIsImhhbmRsZVN1bW1hcnlDbGljayIsIm1heFdpZHRoIiwic3R5bGUiLCJwYWRkaW5nIiwiZGlyZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwiZmxleFNocmluayIsInZhbHVlIiwiaW5kaWNhdG9yQ29sb3IiLCJ0ZXh0Q29sb3IiLCJpY29uIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwiZmxleEdyb3ciLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIm1hcmdpbiIsImVsZXZhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});