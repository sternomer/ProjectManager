"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/summary",{

/***/ "./src/pages/layout.tsx":
/*!******************************!*\
  !*** ./src/pages/layout.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\nvar _this = undefined;\n\n\n\n\n // Example icon\n // Example icon\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), selectedTab = ref[0], setSelectedTab = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.pathname === \"/summary\") {\n            setSelectedTab(1);\n        } else {\n            setSelectedTab(0);\n        }\n    }, [\n        router.pathname\n    ]);\n    var handleTabChange = function(event, newValue) {\n        console.log(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\",\n            backgroundColor: \"#f0f4f8\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                style: {\n                    overflow: \"hidden\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: function() {\n                                    setSelectedTab(0);\n                                    router.push(\"/\");\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"20px\",\n                                            height: \"20px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: selectedTab === 0 ? \"#1976d2\" : \"#e0e0e0\"\n                                        }\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        flexGrow: 1,\n                        borderBottom: 1,\n                        borderColor: \"divider\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        style: {\n                            flexShrink: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                onClick: true,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            width: \"20px\",\n                                            height: \"20px\",\n                                            borderRadius: \"50%\",\n                                            backgroundColor: selectedTab === 1 ? \"#1976d2\" : \"#e0e0e0\"\n                                        }\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                onClick: function() {\n                                    setSelectedTab(1);\n                                    router.push(\"/summary\");\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\",\n                        overflow: \"hidden\"\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"sfK0sHHkKzFT3gDyfiFK4Ssuubc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEJHLEtBQUFBLE1BQU07QUFvRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGF5b3V0LnRzeD8yNWRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUGFwZXIsIEJveCwgVGFicywgVGFiLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZSc7IC8vIEV4YW1wbGUgaWNvblxyXG5pbXBvcnQgU3VtbWFyeUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TdW1tYXJpemUnOyAvLyBFeGFtcGxlIGljb25cclxuXHJcbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvc3VtbWFyeScpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUYWIoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYigwKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8e30+LCBuZXdWYWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICBcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gMCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gMSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgcGFkZGluZzogJzAnLCBkaXJlY3Rpb246ICdydGwnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmNGY4JywgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkVGFiKDApOyByb3V0ZXIucHVzaCgnLycpOyB9fT5cclxuICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17c2VsZWN0ZWRUYWJ9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiIHRleHRDb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPFRhYiBpY29uPXs8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjBweCcsIGhlaWdodDogJzIwcHgnLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkVGFiID09PSAwID8gJyMxOTc2ZDInIDogJyNlMGUwZTAnIH19IC8+fSAvPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggZmxleEdyb3c9ezF9IGJvcmRlckJvdHRvbT17MX0gYm9yZGVyQ29sb3I9XCJkaXZpZGVyXCIgLz5cclxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICA8VGFicyB2YWx1ZT17c2VsZWN0ZWRUYWJ9IG9uQ2xpY2sgb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCIgdGV4dENvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8VGFiIGljb249ezxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMHB4JywgaGVpZ2h0OiAnMjBweCcsIGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRUYWIgPT09IDEgPyAnIzE5NzZkMicgOiAnI2UwZTBlMCcgfX0gLz59IC8+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkVGFiKDEpOyByb3V0ZXIucHVzaCgnL3N1bW1hcnknKTsgfX0+XHJcbiAgICAgICAgICAgIDxTdW1tYXJ5SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBtYXJnaW49ezJ9PlxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JywgbWFyZ2luOiAnMjBweCAwJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJQYXBlciIsIkJveCIsIlRhYnMiLCJUYWIiLCJJY29uQnV0dG9uIiwidXNlUm91dGVyIiwiSG9tZUljb24iLCJTdW1tYXJ5SWNvbiIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsInBhdGhuYW1lIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwibWF4V2lkdGgiLCJzdHlsZSIsInBhZGRpbmciLCJkaXJlY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3ZlcmZsb3ciLCJmbGV4U2hyaW5rIiwib25DbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJpbmRpY2F0b3JDb2xvciIsInRleHRDb2xvciIsImljb24iLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW4iLCJlbGV2YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});