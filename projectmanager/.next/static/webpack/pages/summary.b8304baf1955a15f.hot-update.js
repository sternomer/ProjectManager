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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n\"use client\";\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname === \"/summary\" ? 1 : 0), selectedTab = ref[0], setSelectedTab = ref[1];\n    var handleTabChange = function(event, newValue) {\n        setSelectedTab(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        maxWidth: \"lg\",\n        style: {\n            padding: \"0\",\n            direction: \"rtl\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                elevation: 3,\n                style: {\n                    padding: \"20px\",\n                    margin: \"20px\",\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                                value: selectedTab,\n                                onChange: handleTabChange,\n                                indicatorColor: \"primary\",\n                                textColor: \"primary\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tab, {\n                                    label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                margin: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper, {\n                    elevation: 3,\n                    style: {\n                        padding: \"20px\",\n                        margin: \"20px 0\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                            variant: \"h6\",\n                            children: \"\\u05DB\\u05D5\\u05EA\\u05E8\\u05EA \\u05DE\\u05E9\\u05E0\\u05D9\\u05EA\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"VMNX7jo2g2mOEB3fAoV9sDBE3rY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFBhcGVyLCBCb3gsIFRhYnMsIFRhYiwgVHlwb2dyYXBoeSwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IExheW91dDogUmVhY3QuRkM8TGF5b3V0UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUocm91dGVyLnBhdGhuYW1lID09PSAnL3N1bW1hcnknID8gMSA6IDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHt9PiwgbmV3VmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUYWIobmV3VmFsdWUpO1xyXG4gICAgaWYgKG5ld1ZhbHVlID09PSAwKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlID09PSAxKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvc3VtbWFyeScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCcsIGRpcmVjdGlvbjogJ3J0bCcgfX0+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JywgbWFyZ2luOiAnMjBweCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLXotee15XXkyDXqNeQ16nXmVwiIC8+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRUYWJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX1cclxuICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIteh15nXm9eV151cIiAvPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgICAgPEJveCBtYXJnaW49ezJ9PlxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JywgbWFyZ2luOiAnMjBweCAwJyB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPteb15XXqteo16og157Xqdeg15nXqjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUGFwZXIiLCJCb3giLCJUYWJzIiwiVGFiIiwiVHlwb2dyYXBoeSIsIkRpdmlkZXIiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInBhdGhuYW1lIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsImhhbmRsZVRhYkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJwdXNoIiwibWF4V2lkdGgiLCJzdHlsZSIsInBhZGRpbmciLCJkaXJlY3Rpb24iLCJlbGV2YXRpb24iLCJtYXJnaW4iLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaW5kaWNhdG9yQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsYWJlbCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});