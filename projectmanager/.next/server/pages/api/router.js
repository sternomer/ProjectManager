"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/router";
exports.ids = ["pages/api/router"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/router.ts":
/*!*********************************!*\
  !*** ./src/pages/api/router.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst path = __webpack_require__(/*! path */ \"path\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n    path: path.resolve(__dirname, \"../../config/.env\")\n});\nconst dbConfig = {\n    host: process.env.DB_HOST || \"localhost\",\n    user: process.env.DB_USER || \"root\",\n    password: process.env.DB_PASSWORD || \"123456\",\n    database: process.env.DB_NAME || \"mydb\",\n    port: Number(process.env.DB_PORT) || 3306\n};\nconsole.log(\"Environment Variables in router.js:\", process.env);\nconsole.log(\"Database configuration in router.js:\", dbConfig);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { projectType , projectName , budget , description , percentage , dates , displayName  } = req.body;\n        try {\n            console.log(\"Connecting to the database...\");\n            const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection(dbConfig);\n            console.log(\"Database connection established\");\n            const query = \"INSERT INTO projects (projectType, projectName, budget, description, percentage, dates, displayName) VALUES (?, ?, ?, ?, ?, ?, ?)\";\n            const [result] = await connection.execute(query, [\n                projectType,\n                projectName,\n                budget,\n                description,\n                percentage,\n                JSON.stringify(dates),\n                displayName\n            ]);\n            console.log(\"Data inserted successfully\", result);\n            res.status(200).json({\n                message: \"Form data saved successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error saving form data:\", error);\n            res.status(500).json({\n                error: \"Failed to save form data\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3JvdXRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDbUM7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFNLENBQUM7QUFDNUJBLG9EQUF3QixDQUFDO0lBQUVELElBQUksRUFBRUEsSUFBSSxDQUFDRyxPQUFPLENBQUNDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztDQUFFLENBQUMsQ0FBQztBQUVqRixNQUFNQyxRQUFRLEdBQUc7SUFDZkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxJQUFJLFdBQVc7SUFDeENDLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sSUFBSSxNQUFNO0lBQ25DQyxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxXQUFXLElBQUksUUFBUTtJQUM3Q0MsUUFBUSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sT0FBTyxJQUFJLE1BQU07SUFDdkNDLElBQUksRUFBRUMsTUFBTSxDQUFDVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsT0FBTyxDQUFDLElBQUksSUFBSTtDQUMxQztBQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRWIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQztBQUNoRVcsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0NBQXNDLEVBQUVmLFFBQVEsQ0FBQyxDQUFDO0FBRS9DLGVBQWVnQixPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDL0UsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsV0FBVyxHQUFFQyxXQUFXLEdBQUVDLE1BQU0sR0FBRUMsV0FBVyxHQUFFQyxVQUFVLEdBQUVDLEtBQUssR0FBRUMsV0FBVyxHQUFFLEdBQUdULEdBQUcsQ0FBQ1UsSUFBSTtRQUVsRyxJQUFJO1lBQ0ZiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDN0MsTUFBTWEsVUFBVSxHQUFHLE1BQU1sQyxzRUFBc0IsQ0FBQ00sUUFBUSxDQUFDO1lBQ3pEYyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRS9DLE1BQU1lLEtBQUssR0FBRyxtSUFBbUk7WUFDakosTUFBTSxDQUFDQyxNQUFNLENBQUMsR0FBRyxNQUFNSCxVQUFVLENBQUNJLE9BQU8sQ0FBQ0YsS0FBSyxFQUFFO2dCQUFDVixXQUFXO2dCQUFFQyxXQUFXO2dCQUFFQyxNQUFNO2dCQUFFQyxXQUFXO2dCQUFFQyxVQUFVO2dCQUFFUyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsS0FBSyxDQUFDO2dCQUFFQyxXQUFXO2FBQUMsQ0FBQztZQUNqSlosT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLEVBQUVnQixNQUFNLENBQUMsQ0FBQztZQUVsRGIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSw4QkFBOEI7YUFBRSxDQUFDLENBQUM7U0FDbkUsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDZHhCLE9BQU8sQ0FBQ3dCLEtBQUssQ0FBQyx5QkFBeUIsRUFBRUEsS0FBSyxDQUFDLENBQUM7WUFDaERwQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUUsS0FBSyxFQUFFLDBCQUEwQjthQUFFLENBQUMsQ0FBQztTQUM3RDtLQUNGLE1BQU07UUFDTHBCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLEtBQUssRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDdkQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RtYW5hZ2VyLy4vc3JjL3BhZ2VzL2FwaS9yb3V0ZXIudHM/Zjg5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKHsgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL2NvbmZpZy8uZW52JykgfSk7XHJcblxyXG5jb25zdCBkYkNvbmZpZyA9IHtcclxuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NUIHx8ICdsb2NhbGhvc3QnLFxyXG4gIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIgfHwgJ3Jvb3QnLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCAnMTIzNDU2JyxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSB8fCAnbXlkYicsXHJcbiAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkRCX1BPUlQpIHx8IDMzMDYsXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygnRW52aXJvbm1lbnQgVmFyaWFibGVzIGluIHJvdXRlci5qczonLCBwcm9jZXNzLmVudik7XHJcbmNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25maWd1cmF0aW9uIGluIHJvdXRlci5qczonLCBkYkNvbmZpZyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBwcm9qZWN0VHlwZSwgcHJvamVjdE5hbWUsIGJ1ZGdldCwgZGVzY3JpcHRpb24sIHBlcmNlbnRhZ2UsIGRhdGVzLCBkaXNwbGF5TmFtZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlLi4uJyk7XHJcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKGRiQ29uZmlnKTtcclxuICAgICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZXN0YWJsaXNoZWQnKTtcclxuXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gJ0lOU0VSVCBJTlRPIHByb2plY3RzIChwcm9qZWN0VHlwZSwgcHJvamVjdE5hbWUsIGJ1ZGdldCwgZGVzY3JpcHRpb24sIHBlcmNlbnRhZ2UsIGRhdGVzLCBkaXNwbGF5TmFtZSkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/LCA/KSc7XHJcbiAgICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKHF1ZXJ5LCBbcHJvamVjdFR5cGUsIHByb2plY3ROYW1lLCBidWRnZXQsIGRlc2NyaXB0aW9uLCBwZXJjZW50YWdlLCBKU09OLnN0cmluZ2lmeShkYXRlcyksIGRpc3BsYXlOYW1lXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhIGluc2VydGVkIHN1Y2Nlc3NmdWxseScsIHJlc3VsdCk7XHJcbiAgICAgIFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdGb3JtIGRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBmb3JtIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHNhdmUgZm9ybSBkYXRhJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsInBhdGgiLCJyZXF1aXJlIiwiY29uZmlnIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImRiQ29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9IT1NUIiwidXNlciIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwicG9ydCIsIk51bWJlciIsIkRCX1BPUlQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInByb2plY3RUeXBlIiwicHJvamVjdE5hbWUiLCJidWRnZXQiLCJkZXNjcmlwdGlvbiIsInBlcmNlbnRhZ2UiLCJkYXRlcyIsImRpc3BsYXlOYW1lIiwiYm9keSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwicXVlcnkiLCJyZXN1bHQiLCJleGVjdXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/router.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/router.ts"));
module.exports = __webpack_exports__;

})();