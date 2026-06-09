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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./src/app/lib/db.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function getAuth(request) {\n    const token = request.cookies.get(\"admin_token\")?.value;\n    if (!token) return null;\n    try {\n        const secret = new TextEncoder().encode(process.env.JWT_SECRET || \"rahasia-ncek-123\");\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_4__.jwtVerify)(token, secret);\n        return payload;\n    } catch (err) {\n        return null;\n    }\n}\n// ✅ GET: Ambil semua produk (publik)\nasync function GET() {\n    try {\n        const [rows] = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SELECT p.*, u.username as created_by_name FROM products p LEFT JOIN users u ON p.created_by = u.id ORDER BY p.id DESC\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows || []);\n    } catch (error) {\n        console.error(\"[PRODUCTS_GET]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal mengambil data produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ POST: Tambah produk (SuperAdmin only, dengan created_by)\nasync function POST(request) {\n    const auth = await getAuth(request);\n    if (!auth || auth.role !== \"superadmin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const formData = await request.formData();\n        const nama_barang = formData.get(\"nama_barang\");\n        const kategori = formData.get(\"kategori\");\n        const harga = formData.get(\"harga\");\n        const stok_jumlah = formData.get(\"stok_jumlah\");\n        const link_shopee = formData.get(\"link_shopee\") || null;\n        let gambar_url = formData.get(\"gambar_url\") || null;\n        const file = formData.get(\"file\");\n        // Validasi\n        if (!nama_barang || !kategori || !harga) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Data tidak lengkap\"\n            }, {\n                status: 400\n            });\n        }\n        // Upload file jika ada\n        if (file && file.size > 0) {\n            const buffer = Buffer.from(await file.arrayBuffer());\n            const fileName = `${Date.now()}-${file.name}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(uploadDir)) {\n                fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(uploadDir, {\n                    recursive: true\n                });\n            }\n            fs__WEBPACK_IMPORTED_MODULE_2___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, fileName), buffer);\n            gambar_url = `/uploads/${fileName}`;\n        }\n        // ✅ Insert dengan created_by (trigger akan auto-log)\n        const [result] = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"INSERT INTO products (nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)\", [\n            nama_barang,\n            kategori,\n            harga,\n            stok_jumlah || 0,\n            link_shopee,\n            gambar_url,\n            auth.id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id: result.insertId,\n            message: \"Produk berhasil ditambahkan\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_POST_ERROR]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal menambah produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ PUT: Update produk (SuperAdmin only, dengan session variable)\nasync function PUT(request) {\n    const auth = await getAuth(request);\n    if (!auth || auth.role !== \"superadmin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const formData = await request.formData();\n        const id = formData.get(\"id\");\n        const nama_barang = formData.get(\"nama_barang\");\n        const kategori = formData.get(\"kategori\");\n        const harga = formData.get(\"harga\");\n        const stok_jumlah = formData.get(\"stok_jumlah\");\n        const link_shopee = formData.get(\"link_shopee\") || null;\n        let gambar_url = formData.get(\"gambar_url\") || null;\n        const file = formData.get(\"file\");\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"ID produk diperlukan\"\n            }, {\n                status: 400\n            });\n        }\n        // ✅ SET session variable untuk trigger UPDATE\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SET @current_user_id = ?\", [\n            auth.id\n        ]);\n        // Upload file baru jika ada\n        if (file && file.size > 0) {\n            const buffer = Buffer.from(await file.arrayBuffer());\n            const fileName = `${Date.now()}-${file.name}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(uploadDir)) {\n                fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(uploadDir, {\n                    recursive: true\n                });\n            }\n            fs__WEBPACK_IMPORTED_MODULE_2___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, fileName), buffer);\n            gambar_url = `/uploads/${fileName}`;\n        }\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"UPDATE products SET nama_barang = ?, kategori = ?, harga = ?, stok_jumlah = ?, link_shopee = ?, gambar_url = ? WHERE id = ?\", [\n            nama_barang,\n            kategori,\n            harga,\n            stok_jumlah || 0,\n            link_shopee,\n            gambar_url,\n            id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Produk berhasil diperbarui\"\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_PUT_ERROR]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal update produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ DELETE: Hapus produk (dengan session variable untuk trigger)\nasync function DELETE(request) {\n    const auth = await getAuth(request);\n    if (!auth || auth.role !== \"superadmin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    const { searchParams } = new URL(request.url);\n    const id = searchParams.get(\"id\");\n    if (!id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"ID produk diperlukan\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // ✅ SET session variable untuk trigger DELETE\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SET @current_user_id = ?\", [\n            auth.id\n        ]);\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"DELETE FROM products WHERE id = ?\", [\n            id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Produk berhasil dihapus\"\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_DELETE_ERROR]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal menghapus produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLQyxJQUFJLEtBQUssY0FBYztRQUN2QyxPQUFPNUIscURBQVlBLENBQUNzQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFZLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQ2pFO0lBRUEsTUFBTSxFQUFFa0MsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSXRELFFBQVF1RCxHQUFHO0lBQzVDLE1BQU1QLEtBQUtLLGFBQWFsRCxHQUFHLENBQUM7SUFFNUIsSUFBSSxDQUFDNkMsSUFBSTtRQUNQLE9BQU90RCxxREFBWUEsQ0FBQ3NCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF1QixHQUNoQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7SUFFQSxJQUFJO1FBQ0YsOENBQThDO1FBQzlDLE1BQU14QixtREFBRUEsQ0FBQ29CLEtBQUssQ0FBQyw0QkFBNEI7WUFBQ00sS0FBSzJCLEVBQUU7U0FBQztRQUVwRCxNQUFNckQsbURBQUVBLENBQUNvQixLQUFLLENBQUMscUNBQXFDO1lBQUNpQztTQUFHO1FBQ3hELE9BQU90RCxxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFa0MsU0FBUztRQUEwQjtJQUNoRSxFQUFFLE9BQU9qQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU92QixxREFBWUEsQ0FBQ3NCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF5QixHQUNsQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxpbGhhbVxcRG9jdW1lbnRzXFxLZXJqYSBQcmFrdGVrXFxnZXJhay1uY2VrXFxzcmNcXGFwcFxcYXBpXFxwcm9kdWN0c1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgZGIgZnJvbSBcIkAvYXBwL2xpYi9kYlwiO1xuaW1wb3J0IHsgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF1dGgocmVxdWVzdCkge1xuICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJhZG1pbl90b2tlblwiKT8udmFsdWU7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IHNlY3JldCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShcbiAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJyYWhhc2lhLW5jZWstMTIzXCIsXG4gICAgKTtcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgc2VjcmV0KTtcbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8g4pyFIEdFVDogQW1iaWwgc2VtdWEgcHJvZHVrIChwdWJsaWspXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGRiLnF1ZXJ5KFxuICAgICAgXCJTRUxFQ1QgcC4qLCB1LnVzZXJuYW1lIGFzIGNyZWF0ZWRfYnlfbmFtZSBGUk9NIHByb2R1Y3RzIHAgTEVGVCBKT0lOIHVzZXJzIHUgT04gcC5jcmVhdGVkX2J5ID0gdS5pZCBPUkRFUiBCWSBwLmlkIERFU0NcIixcbiAgICApO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyb3dzIHx8IFtdKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BST0RVQ1RTX0dFVF1cIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiR2FnYWwgbWVuZ2FtYmlsIGRhdGEgcHJvZHVrXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfSxcbiAgICApO1xuICB9XG59XG5cbi8vIOKchSBQT1NUOiBUYW1iYWggcHJvZHVrIChTdXBlckFkbWluIG9ubHksIGRlbmdhbiBjcmVhdGVkX2J5KVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICBjb25zdCBhdXRoID0gYXdhaXQgZ2V0QXV0aChyZXF1ZXN0KTtcbiAgaWYgKCFhdXRoIHx8IGF1dGgucm9sZSAhPT0gXCJzdXBlcmFkbWluXCIpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGb3JiaWRkZW5cIiB9LCB7IHN0YXR1czogNDAzIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zdCBuYW1hX2JhcmFuZyA9IGZvcm1EYXRhLmdldChcIm5hbWFfYmFyYW5nXCIpO1xuICAgIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIik7XG4gICAgY29uc3QgaGFyZ2EgPSBmb3JtRGF0YS5nZXQoXCJoYXJnYVwiKTtcbiAgICBjb25zdCBzdG9rX2p1bWxhaCA9IGZvcm1EYXRhLmdldChcInN0b2tfanVtbGFoXCIpO1xuICAgIGNvbnN0IGxpbmtfc2hvcGVlID0gZm9ybURhdGEuZ2V0KFwibGlua19zaG9wZWVcIikgfHwgbnVsbDtcbiAgICBsZXQgZ2FtYmFyX3VybCA9IGZvcm1EYXRhLmdldChcImdhbWJhcl91cmxcIikgfHwgbnVsbDtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKTtcblxuICAgIC8vIFZhbGlkYXNpXG4gICAgaWYgKCFuYW1hX2JhcmFuZyB8fCAha2F0ZWdvcmkgfHwgIWhhcmdhKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiRGF0YSB0aWRhayBsZW5na2FwXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGxvYWQgZmlsZSBqaWthIGFkYVxuICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSk7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke0RhdGUubm93KCl9LSR7ZmlsZS5uYW1lfWA7XG4gICAgICBjb25zdCB1cGxvYWREaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwgXCJ1cGxvYWRzXCIpO1xuXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmModXBsb2FkRGlyKSkge1xuICAgICAgICBmcy5ta2RpclN5bmModXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlTmFtZSksIGJ1ZmZlcik7XG4gICAgICBnYW1iYXJfdXJsID0gYC91cGxvYWRzLyR7ZmlsZU5hbWV9YDtcbiAgICB9XG5cbiAgICAvLyDinIUgSW5zZXJ0IGRlbmdhbiBjcmVhdGVkX2J5ICh0cmlnZ2VyIGFrYW4gYXV0by1sb2cpXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBkYi5xdWVyeShcbiAgICAgIFwiSU5TRVJUIElOVE8gcHJvZHVjdHMgKG5hbWFfYmFyYW5nLCBrYXRlZ29yaSwgaGFyZ2EsIHN0b2tfanVtbGFoLCBsaW5rX3Nob3BlZSwgZ2FtYmFyX3VybCwgY3JlYXRlZF9ieSkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/LCA/KVwiLFxuICAgICAgW1xuICAgICAgICBuYW1hX2JhcmFuZyxcbiAgICAgICAga2F0ZWdvcmksXG4gICAgICAgIGhhcmdhLFxuICAgICAgICBzdG9rX2p1bWxhaCB8fCAwLFxuICAgICAgICBsaW5rX3Nob3BlZSxcbiAgICAgICAgZ2FtYmFyX3VybCxcbiAgICAgICAgYXV0aC5pZCxcbiAgICAgIF0sXG4gICAgKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgaWQ6IHJlc3VsdC5pbnNlcnRJZCxcbiAgICAgICAgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGl0YW1iYWhrYW5cIixcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogMjAxIH0sXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BST0RVQ1RTX1BPU1RfRVJST1JdXCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkdhZ2FsIG1lbmFtYmFoIHByb2R1a1wiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH0sXG4gICAgKTtcbiAgfVxufVxuXG4vLyDinIUgUFVUOiBVcGRhdGUgcHJvZHVrIChTdXBlckFkbWluIG9ubHksIGRlbmdhbiBzZXNzaW9uIHZhcmlhYmxlKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0KSB7XG4gIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKHJlcXVlc3QpO1xuICBpZiAoIWF1dGggfHwgYXV0aC5yb2xlICE9PSBcInN1cGVyYWRtaW5cIikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZvcmJpZGRlblwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IGlkID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XG4gICAgY29uc3QgbmFtYV9iYXJhbmcgPSBmb3JtRGF0YS5nZXQoXCJuYW1hX2JhcmFuZ1wiKTtcbiAgICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpO1xuICAgIGNvbnN0IGhhcmdhID0gZm9ybURhdGEuZ2V0KFwiaGFyZ2FcIik7XG4gICAgY29uc3Qgc3Rva19qdW1sYWggPSBmb3JtRGF0YS5nZXQoXCJzdG9rX2p1bWxhaFwiKTtcbiAgICBjb25zdCBsaW5rX3Nob3BlZSA9IGZvcm1EYXRhLmdldChcImxpbmtfc2hvcGVlXCIpIHx8IG51bGw7XG4gICAgbGV0IGdhbWJhcl91cmwgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJfdXJsXCIpIHx8IG51bGw7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIik7XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiSUQgcHJvZHVrIGRpcGVybHVrYW5cIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH0sXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIOKchSBTRVQgc2Vzc2lvbiB2YXJpYWJsZSB1bnR1ayB0cmlnZ2VyIFVQREFURVxuICAgIGF3YWl0IGRiLnF1ZXJ5KFwiU0VUIEBjdXJyZW50X3VzZXJfaWQgPSA/XCIsIFthdXRoLmlkXSk7XG5cbiAgICAvLyBVcGxvYWQgZmlsZSBiYXJ1IGppa2EgYWRhXG4gICAgaWYgKGZpbGUgJiYgZmlsZS5zaXplID4gMCkge1xuICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YDtcbiAgICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBcInVwbG9hZHNcIik7XG5cbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyh1cGxvYWREaXIpKSB7XG4gICAgICAgIGZzLm1rZGlyU3luYyh1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbih1cGxvYWREaXIsIGZpbGVOYW1lKSwgYnVmZmVyKTtcbiAgICAgIGdhbWJhcl91cmwgPSBgL3VwbG9hZHMvJHtmaWxlTmFtZX1gO1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnF1ZXJ5KFxuICAgICAgXCJVUERBVEUgcHJvZHVjdHMgU0VUIG5hbWFfYmFyYW5nID0gPywga2F0ZWdvcmkgPSA/LCBoYXJnYSA9ID8sIHN0b2tfanVtbGFoID0gPywgbGlua19zaG9wZWUgPSA/LCBnYW1iYXJfdXJsID0gPyBXSEVSRSBpZCA9ID9cIixcbiAgICAgIFtcbiAgICAgICAgbmFtYV9iYXJhbmcsXG4gICAgICAgIGthdGVnb3JpLFxuICAgICAgICBoYXJnYSxcbiAgICAgICAgc3Rva19qdW1sYWggfHwgMCxcbiAgICAgICAgbGlua19zaG9wZWUsXG4gICAgICAgIGdhbWJhcl91cmwsXG4gICAgICAgIGlkLFxuICAgICAgXSxcbiAgICApO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGlwZXJiYXJ1aVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUFJPRFVDVFNfUFVUX0VSUk9SXVwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiR2FnYWwgdXBkYXRlIHByb2R1a1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuLy8g4pyFIERFTEVURTogSGFwdXMgcHJvZHVrIChkZW5nYW4gc2Vzc2lvbiB2YXJpYWJsZSB1bnR1ayB0cmlnZ2VyKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0KSB7XG4gIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKHJlcXVlc3QpO1xuICBpZiAoIWF1dGggfHwgYXV0aC5yb2xlICE9PSBcInN1cGVyYWRtaW5cIikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZvcmJpZGRlblwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIklEIHByb2R1ayBkaXBlcmx1a2FuXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfSxcbiAgICApO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyDinIUgU0VUIHNlc3Npb24gdmFyaWFibGUgdW50dWsgdHJpZ2dlciBERUxFVEVcbiAgICBhd2FpdCBkYi5xdWVyeShcIlNFVCBAY3VycmVudF91c2VyX2lkID0gP1wiLCBbYXV0aC5pZF0pO1xuXG4gICAgYXdhaXQgZGIucXVlcnkoXCJERUxFVEUgRlJPTSBwcm9kdWN0cyBXSEVSRSBpZCA9ID9cIiwgW2lkXSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGloYXB1c1wiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUFJPRFVDVFNfREVMRVRFX0VSUk9SXVwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJHYWdhbCBtZW5naGFwdXMgcHJvZHVrXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfSxcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJqd3RWZXJpZnkiLCJmcyIsInBhdGgiLCJnZXRBdXRoIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInBheWxvYWQiLCJlcnIiLCJHRVQiLCJyb3dzIiwicXVlcnkiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUE9TVCIsImF1dGgiLCJyb2xlIiwiZm9ybURhdGEiLCJuYW1hX2JhcmFuZyIsImthdGVnb3JpIiwiaGFyZ2EiLCJzdG9rX2p1bWxhaCIsImxpbmtfc2hvcGVlIiwiZ2FtYmFyX3VybCIsImZpbGUiLCJzaXplIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwiZmlsZU5hbWUiLCJEYXRlIiwibm93IiwibmFtZSIsInVwbG9hZERpciIsImpvaW4iLCJjd2QiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwicmVjdXJzaXZlIiwid3JpdGVGaWxlU3luYyIsInJlc3VsdCIsImlkIiwiaW5zZXJ0SWQiLCJtZXNzYWdlIiwiUFVUIiwiREVMRVRFIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/route.js\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/sql-escaper","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cilham%5CDocuments%5CKerja%20Praktek%5Cgerak-ncek&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();