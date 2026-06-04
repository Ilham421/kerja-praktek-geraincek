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
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ilham_Documents_Kerja_Praktek_gerak_ncek_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/products/route.js */ \"(rsc)/./src/app/api/products/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ilham\\\\Documents\\\\Kerja Praktek\\\\gerak-ncek\\\\src\\\\app\\\\api\\\\products\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_ilham_Documents_Kerja_Praktek_gerak_ncek_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNpbGhhbSU1Q0RvY3VtZW50cyU1Q0tlcmphJTIwUHJha3RlayU1Q2dlcmFrLW5jZWslNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2lsaGFtJTVDRG9jdW1lbnRzJTVDS2VyamElMjBQcmFrdGVrJTVDZ2VyYWstbmNlayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGlsaGFtXFxcXERvY3VtZW50c1xcXFxLZXJqYSBQcmFrdGVrXFxcXGdlcmFrLW5jZWtcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZHVjdHNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2R1Y3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcaWxoYW1cXFxcRG9jdW1lbnRzXFxcXEtlcmphIFByYWt0ZWtcXFxcZ2VyYWstbmNla1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0c1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/products/route.js":
/*!***************************************!*\
  !*** ./src/app/api/products/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./src/app/lib/db.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function GET() {\n    try {\n        // Mengambil semua data produk, diurutkan dari yang terbaru\n        const [rows] = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SELECT * FROM products ORDER BY id DESC\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows || []);\n    } catch (error) {\n        console.error(\"[PRODUCTS_GET]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal mengambil data produk\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const data = await request.formData();\n        const file = data.get(\"file\");\n        let gambar_url = data.get(\"gambar_url\");\n        // Jika ada file yang diunggah, proses hashing nama file\n        if (file && typeof file !== \"string\") {\n            const bytes = await file.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const ext = path__WEBPACK_IMPORTED_MODULE_3___default().extname(file.name);\n            const hash = crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(16).toString(\"hex\");\n            const filename = `${hash}${ext}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            // Pastikan folder uploads ada\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir)(uploadDir, {\n                recursive: true\n            });\n            const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, filename);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(filePath, buffer);\n            // Simpan path relatif untuk DB\n            gambar_url = `/uploads/${filename}`;\n        }\n        const nama_barang = data.get(\"nama_barang\");\n        const kategori = data.get(\"kategori\");\n        const harga = data.get(\"harga\");\n        const stok_jumlah = data.get(\"stok_jumlah\");\n        const link_shopee = data.get(\"link_shopee\");\n        const [result] = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"INSERT INTO products (nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url) VALUES (?, ?, ?, ?, ?, ?)\", [\n            nama_barang,\n            kategori,\n            harga,\n            stok_jumlah,\n            link_shopee,\n            gambar_url\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id: result.insertId,\n            message: \"Produk berhasil ditambahkan\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_POST]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal menambahkan produk\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const data = await request.formData();\n        const id = data.get(\"id\");\n        const file = data.get(\"file\");\n        let gambar_url = data.get(\"gambar_url\");\n        // Proses file jika ada upload baru pada saat edit\n        if (file && typeof file !== \"string\") {\n            const bytes = await file.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const ext = path__WEBPACK_IMPORTED_MODULE_3___default().extname(file.name);\n            const hash = crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(16).toString(\"hex\");\n            const filename = `${hash}${ext}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir)(uploadDir, {\n                recursive: true\n            });\n            const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, filename);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(filePath, buffer);\n            gambar_url = `/uploads/${filename}`;\n        }\n        const nama_barang = data.get(\"nama_barang\");\n        const kategori = data.get(\"kategori\");\n        const harga = data.get(\"harga\");\n        const stok_jumlah = data.get(\"stok_jumlah\");\n        const link_shopee = data.get(\"link_shopee\");\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"UPDATE products SET nama_barang = ?, kategori = ?, harga = ?, stok_jumlah = ?, link_shopee = ?, gambar_url = ? WHERE id = ?\", [\n            nama_barang,\n            kategori,\n            harga,\n            stok_jumlah,\n            link_shopee,\n            gambar_url,\n            id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Produk berhasil diperbarui\"\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_PUT]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal memperbarui produk\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const { searchParams } = new URL(request.url);\n        const id = searchParams.get(\"id\");\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"DELETE FROM products WHERE id = ?\", [\n            id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Produk berhasil dihapus\"\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_DELETE]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal menghapus produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNUCxLQUFLSyxhQUFhL0IsR0FBRyxDQUFDO1FBRTVCLE1BQU1qQixtREFBRUEsQ0FBQ08sS0FBSyxDQUFDLHFDQUFxQztZQUFDb0M7U0FBRztRQUN4RCxPQUFPNUMscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFcUMsU0FBUztRQUEwQjtJQUNoRSxFQUFFLE9BQU9wQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJBO1FBQ25DLE9BQU9WLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM5RTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGlsaGFtXFxEb2N1bWVudHNcXEtlcmphIFByYWt0ZWtcXGdlcmFrLW5jZWtcXHNyY1xcYXBwXFxhcGlcXHByb2R1Y3RzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBkYiBmcm9tIFwiQC9hcHAvbGliL2RiXCI7XG5pbXBvcnQgeyB3cml0ZUZpbGUsIG1rZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgLy8gTWVuZ2FtYmlsIHNlbXVhIGRhdGEgcHJvZHVrLCBkaXVydXRrYW4gZGFyaSB5YW5nIHRlcmJhcnVcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBkYi5xdWVyeShcIlNFTEVDVCAqIEZST00gcHJvZHVjdHMgT1JERVIgQlkgaWQgREVTQ1wiKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocm93cyB8fCBbXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltQUk9EVUNUU19HRVRdXCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJHYWdhbCBtZW5nYW1iaWwgZGF0YSBwcm9kdWtcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGUgPSBkYXRhLmdldChcImZpbGVcIik7XG4gICAgbGV0IGdhbWJhcl91cmwgPSBkYXRhLmdldChcImdhbWJhcl91cmxcIik7XG5cbiAgICAvLyBKaWthIGFkYSBmaWxlIHlhbmcgZGl1bmdnYWgsIHByb3NlcyBoYXNoaW5nIG5hbWEgZmlsZVxuICAgIGlmIChmaWxlICYmIHR5cGVvZiBmaWxlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcblxuICAgICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUubmFtZSk7XG4gICAgICBjb25zdCBoYXNoID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7aGFzaH0ke2V4dH1gO1xuICAgICAgXG4gICAgICBjb25zdCB1cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwgXCJ1cGxvYWRzXCIpO1xuICAgICAgXG4gICAgICAvLyBQYXN0aWthbiBmb2xkZXIgdXBsb2FkcyBhZGFcbiAgICAgIGF3YWl0IG1rZGlyKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHVwbG9hZERpciwgZmlsZW5hbWUpO1xuICAgICAgYXdhaXQgd3JpdGVGaWxlKGZpbGVQYXRoLCBidWZmZXIpO1xuICAgICAgXG4gICAgICAvLyBTaW1wYW4gcGF0aCByZWxhdGlmIHVudHVrIERCXG4gICAgICBnYW1iYXJfdXJsID0gYC91cGxvYWRzLyR7ZmlsZW5hbWV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1hX2JhcmFuZyA9IGRhdGEuZ2V0KFwibmFtYV9iYXJhbmdcIik7XG4gICAgY29uc3Qga2F0ZWdvcmkgPSBkYXRhLmdldChcImthdGVnb3JpXCIpO1xuICAgIGNvbnN0IGhhcmdhID0gZGF0YS5nZXQoXCJoYXJnYVwiKTtcbiAgICBjb25zdCBzdG9rX2p1bWxhaCA9IGRhdGEuZ2V0KFwic3Rva19qdW1sYWhcIik7XG4gICAgY29uc3QgbGlua19zaG9wZWUgPSBkYXRhLmdldChcImxpbmtfc2hvcGVlXCIpO1xuXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBkYi5xdWVyeShcbiAgICAgIFwiSU5TRVJUIElOVE8gcHJvZHVjdHMgKG5hbWFfYmFyYW5nLCBrYXRlZ29yaSwgaGFyZ2EsIHN0b2tfanVtbGFoLCBsaW5rX3Nob3BlZSwgZ2FtYmFyX3VybCkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/KVwiLFxuICAgICAgW25hbWFfYmFyYW5nLCBrYXRlZ29yaSwgaGFyZ2EsIHN0b2tfanVtbGFoLCBsaW5rX3Nob3BlZSwgZ2FtYmFyX3VybF1cbiAgICApO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgaWQ6IHJlc3VsdC5pbnNlcnRJZCwgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGl0YW1iYWhrYW5cIiB9LCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUFJPRFVDVFNfUE9TVF1cIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkdhZ2FsIG1lbmFtYmFoa2FuIHByb2R1a1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zdCBpZCA9IGRhdGEuZ2V0KFwiaWRcIik7XG4gICAgY29uc3QgZmlsZSA9IGRhdGEuZ2V0KFwiZmlsZVwiKTtcbiAgICBsZXQgZ2FtYmFyX3VybCA9IGRhdGEuZ2V0KFwiZ2FtYmFyX3VybFwiKTtcblxuICAgIC8vIFByb3NlcyBmaWxlIGppa2EgYWRhIHVwbG9hZCBiYXJ1IHBhZGEgc2FhdCBlZGl0XG4gICAgaWYgKGZpbGUgJiYgdHlwZW9mIGZpbGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpO1xuICAgICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUubmFtZSk7XG4gICAgICBjb25zdCBoYXNoID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7aGFzaH0ke2V4dH1gO1xuICAgICAgXG4gICAgICBjb25zdCB1cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwgXCJ1cGxvYWRzXCIpO1xuICAgICAgYXdhaXQgbWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlbmFtZSk7XG4gICAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIGJ1ZmZlcik7XG4gICAgICBnYW1iYXJfdXJsID0gYC91cGxvYWRzLyR7ZmlsZW5hbWV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1hX2JhcmFuZyA9IGRhdGEuZ2V0KFwibmFtYV9iYXJhbmdcIik7XG4gICAgY29uc3Qga2F0ZWdvcmkgPSBkYXRhLmdldChcImthdGVnb3JpXCIpO1xuICAgIGNvbnN0IGhhcmdhID0gZGF0YS5nZXQoXCJoYXJnYVwiKTtcbiAgICBjb25zdCBzdG9rX2p1bWxhaCA9IGRhdGEuZ2V0KFwic3Rva19qdW1sYWhcIik7XG4gICAgY29uc3QgbGlua19zaG9wZWUgPSBkYXRhLmdldChcImxpbmtfc2hvcGVlXCIpO1xuXG4gICAgYXdhaXQgZGIucXVlcnkoXG4gICAgICBcIlVQREFURSBwcm9kdWN0cyBTRVQgbmFtYV9iYXJhbmcgPSA/LCBrYXRlZ29yaSA9ID8sIGhhcmdhID0gPywgc3Rva19qdW1sYWggPSA/LCBsaW5rX3Nob3BlZSA9ID8sIGdhbWJhcl91cmwgPSA/IFdIRVJFIGlkID0gP1wiLFxuICAgICAgW25hbWFfYmFyYW5nLCBrYXRlZ29yaSwgaGFyZ2EsIHN0b2tfanVtbGFoLCBsaW5rX3Nob3BlZSwgZ2FtYmFyX3VybCwgaWRdXG4gICAgKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiUHJvZHVrIGJlcmhhc2lsIGRpcGVyYmFydWlcIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BST0RVQ1RTX1BVVF1cIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkdhZ2FsIG1lbXBlcmJhcnVpIHByb2R1a1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xuXG4gICAgYXdhaXQgZGIucXVlcnkoXCJERUxFVEUgRlJPTSBwcm9kdWN0cyBXSEVSRSBpZCA9ID9cIiwgW2lkXSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGloYXB1c1wiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUFJPRFVDVFNfREVMRVRFXVwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiR2FnYWwgbWVuZ2hhcHVzIHByb2R1a1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsIndyaXRlRmlsZSIsIm1rZGlyIiwicGF0aCIsImNyeXB0byIsIkdFVCIsInJvd3MiLCJxdWVyeSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJQT1NUIiwicmVxdWVzdCIsImRhdGEiLCJmb3JtRGF0YSIsImZpbGUiLCJnZXQiLCJnYW1iYXJfdXJsIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJleHQiLCJleHRuYW1lIiwibmFtZSIsImhhc2giLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwiZmlsZW5hbWUiLCJ1cGxvYWREaXIiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInJlY3Vyc2l2ZSIsImZpbGVQYXRoIiwibmFtYV9iYXJhbmciLCJrYXRlZ29yaSIsImhhcmdhIiwic3Rva19qdW1sYWgiLCJsaW5rX3Nob3BlZSIsInJlc3VsdCIsImlkIiwiaW5zZXJ0SWQiLCJtZXNzYWdlIiwiUFVUIiwiREVMRVRFIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/db.js":
/*!***************************!*\
  !*** ./src/app/lib/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nconst db = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    port: process.env.DB_PORT || 23591,\n    ssl: {\n        rejectUnauthorized: false\n    },\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUVuQyxNQUFNQyxLQUFLRCxzREFBZ0IsQ0FBQztJQUMxQkcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO0lBQ3pCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU87SUFDekJDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssV0FBVztJQUNqQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxPQUFPO0lBQzdCQyxNQUFNVCxRQUFRQyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM3QkMsS0FBSztRQUNIQyxvQkFBb0I7SUFDdEI7SUFDQUMsb0JBQW9CO0lBQ3BCQyxpQkFBaUI7SUFDakJDLFlBQVk7QUFDZDtBQUVBLGlFQUFlbEIsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxpbGhhbVxcRG9jdW1lbnRzXFxLZXJqYSBQcmFrdGVrXFxnZXJhay1uY2VrXFxzcmNcXGFwcFxcbGliXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5jb25zdCBkYiA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JUIHx8IDIzNTkxLFxuICBzc2w6IHtcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gIH0sXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcbiAgY29ubmVjdGlvbkxpbWl0OiAxMCxcbiAgcXVldWVMaW1pdDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiOyJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBvcnQiLCJEQl9QT1JUIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/db.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:diagnostics_channel":
/*!*******************************************!*\
  !*** external "node:diagnostics_channel" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:diagnostics_channel");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/sql-escaper","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();