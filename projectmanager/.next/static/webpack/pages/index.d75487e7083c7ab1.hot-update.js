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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Home */ \"./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Summarize */ \"./node_modules/@mui/icons-material/Summarize.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\"use client\";\n// Create a theme with background color\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n    palette: {\n        background: {\n            default: \"#f0f4f8\"\n        }\n    }\n});\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.pathname === \"/summary\" ? 1 : 0), selectedTab = ref[0], setSelectedTab = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (router.pathname === \"/\") {\n            setSelectedTab(0);\n        } else if (router.pathname === \"/summary\") {\n            setSelectedTab(1);\n        }\n    }, [\n        router.pathname\n    ]);\n    var handleTabChange = function(event, newValue) {\n        setSelectedTab(newValue);\n        if (newValue === 0) {\n            router.push(\"/\");\n        } else if (newValue === 1) {\n            router.push(\"/summary\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            maxWidth: \"lg\",\n            style: {\n                padding: \"0\",\n                direction: \"rtl\",\n                minHeight: \"100vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    alignItems: \"center\",\n                    style: {\n                        overflow: \"hidden\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            style: {\n                                flexShrink: 0\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                                    onClick: function() {\n                                        setSelectedTab(0);\n                                        router.push(\"/\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tabs, {\n                                    value: selectedTab === 0 ? 0 : null,\n                                    onChange: handleTabChange,\n                                    indicatorColor: \"primary\",\n                                    textColor: \"primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                        label: \"\\u05E2\\u05DE\\u05D5\\u05D3 \\u05E8\\u05D0\\u05E9\\u05D9\",\n                                        value: 0\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            flexGrow: 1,\n                            borderBottom: 1,\n                            borderColor: \"divider\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            style: {\n                                flexShrink: 0\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tabs, {\n                                    value: selectedTab === 1 ? 1 : null,\n                                    onChange: handleTabChange,\n                                    indicatorColor: \"primary\",\n                                    textColor: \"primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                        label: \"\\u05E1\\u05D9\\u05DB\\u05D5\\u05DD\",\n                                        value: 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                                    onClick: function() {\n                                        setSelectedTab(1);\n                                        router.push(\"/summary\");\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Summarize__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    margin: 2,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n                        elevation: 3,\n                        style: {\n                            padding: \"20px\",\n                            margin: \"20px 0\",\n                            overflow: \"hidden\"\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\omers\\\\Documents\\\\GitHub\\\\ProjectManager\\\\projectmanager\\\\src\\\\pages\\\\layout.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"MYwIWL1Yus+OZHl/MF+Now7PnTQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEJTLEtBQUFBLE1BQU07QUFxRFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGF5b3V0LnRzeD8yNWRkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUGFwZXIsIEJveCwgVGFicywgVGFiLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZSc7XHJcbmltcG9ydCBTdW1tYXJ5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N1bW1hcml6ZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgd2l0aCBiYWNrZ3JvdW5kIGNvbG9yXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmMGY0ZjgnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZShyb3V0ZXIucGF0aG5hbWUgPT09ICcvc3VtbWFyeScgPyAxIDogMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRUYWIoMCk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy9zdW1tYXJ5Jykge1xyXG4gICAgICBzZXRTZWxlY3RlZFRhYigxKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8e30+LCBuZXdWYWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRhYihuZXdWYWx1ZSk7XHJcbiAgICBpZiAobmV3VmFsdWUgPT09IDApIHtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT09IDEpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9zdW1tYXJ5Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN0eWxlPXt7IHBhZGRpbmc6ICcwJywgZGlyZWN0aW9uOiAncnRsJywgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHNldFNlbGVjdGVkVGFiKDApOyByb3V0ZXIucHVzaCgnLycpOyB9fT5cclxuICAgICAgICAgICAgICA8SG9tZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VGFicyB2YWx1ZT17c2VsZWN0ZWRUYWIgPT09IDAgPyAwIDogbnVsbH0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCIgdGV4dENvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCLXotee15XXkyDXqNeQ16nXmVwiIHZhbHVlPXswfSAvPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9IGJvcmRlckJvdHRvbT17MX0gYm9yZGVyQ29sb3I9XCJkaXZpZGVyXCIgLz5cclxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgZmxleFNocmluazogMCB9fT5cclxuICAgICAgICAgICAgPFRhYnMgdmFsdWU9e3NlbGVjdGVkVGFiID09PSAxID8gMSA6IG51bGx9IG9uQ2hhbmdlPXtoYW5kbGVUYWJDaGFuZ2V9IGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiIHRleHRDb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwi16HXmdeb15XXnVwiIHZhbHVlPXsxfSAvPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgc2V0U2VsZWN0ZWRUYWIoMSk7IHJvdXRlci5wdXNoKCcvc3VtbWFyeScpOyB9fT5cclxuICAgICAgICAgICAgICA8U3VtbWFyeUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBtYXJnaW49ezJ9PlxyXG4gICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnLCBtYXJnaW46ICcyMHB4IDAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFpbmVyIiwiUGFwZXIiLCJCb3giLCJUYWJzIiwiVGFiIiwiSWNvbkJ1dHRvbiIsInVzZVJvdXRlciIsIkhvbWVJY29uIiwiU3VtbWFyeUljb24iLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwicGF0aG5hbWUiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwiaGFuZGxlVGFiQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInB1c2giLCJtYXhXaWR0aCIsInN0eWxlIiwicGFkZGluZyIsImRpcmVjdGlvbiIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJvdmVyZmxvdyIsImZsZXhTaHJpbmsiLCJvbkNsaWNrIiwidmFsdWUiLCJvbkNoYW5nZSIsImluZGljYXRvckNvbG9yIiwidGV4dENvbG9yIiwibGFiZWwiLCJmbGV4R3JvdyIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwibWFyZ2luIiwiZWxldmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/layout.tsx\n");

/***/ })

});