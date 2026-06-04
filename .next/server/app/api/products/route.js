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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./src/app/lib/db.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function getAuth(request) {\n    const token = request.cookies.get(\"admin_token\")?.value;\n    if (!token) return null;\n    try {\n        const secret = new TextEncoder().encode(process.env.JWT_SECRET || \"rahasia-ncek-123\");\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_4__.jwtVerify)(token, secret);\n        return payload;\n    } catch (err) {\n        return null;\n    }\n}\n// ✅ GET: Ambil semua produk (publik)\nasync function GET() {\n    try {\n        const [rows] = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SELECT p.*, u.username as created_by_name FROM products p LEFT JOIN users u ON p.created_by = u.id ORDER BY p.id DESC\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows || []);\n    } catch (error) {\n        console.error(\"[PRODUCTS_GET]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal mengambil data produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ POST: Tambah produk (SuperAdmin only, dengan created_by)\nasync function POST(request) {\n    const auth = await getAuth(request);\n    if (!auth || auth.role !== 'superadmin') {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const formData = await request.formData();\n        const nama_barang = formData.get(\"nama_barang\");\n        const kategori = formData.get(\"kategori\");\n        const harga = formData.get(\"harga\");\n        const stok_jumlah = formData.get(\"stok_jumlah\");\n        const link_shopee = formData.get(\"link_shopee\") || null;\n        let gambar_url = formData.get(\"gambar_url\") || null;\n        const file = formData.get(\"file\");\n        // Validasi\n        if (!nama_barang || !kategori || !harga) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Data tidak lengkap\"\n            }, {\n                status: 400\n            });\n        }\n        // Upload file jika ada\n        if (file && file.size > 0) {\n            const buffer = Buffer.from(await file.arrayBuffer());\n            const fileName = `${Date.now()}-${file.name}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(uploadDir)) {\n                fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(uploadDir, {\n                    recursive: true\n                });\n            }\n            fs__WEBPACK_IMPORTED_MODULE_2___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, fileName), buffer);\n            gambar_url = `/uploads/${fileName}`;\n        }\n        // ✅ Insert dengan created_by (trigger akan auto-log)\n        const [result] = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"INSERT INTO products (nama_barang, kategori, harga, stok_jumlah, link_shopee, gambar_url, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)\", [\n            nama_barang,\n            kategori,\n            harga,\n            stok_jumlah || 0,\n            link_shopee,\n            gambar_url,\n            auth.id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id: result.insertId,\n            message: \"Produk berhasil ditambahkan\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_POST_ERROR]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal menambah produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ PUT: Update produk (SuperAdmin only, dengan session variable)\nasync function PUT(request) {\n    const auth = await getAuth(request);\n    if (!auth || auth.role !== 'superadmin') {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const formData = await request.formData();\n        const id = formData.get(\"id\");\n        const nama_barang = formData.get(\"nama_barang\");\n        const kategori = formData.get(\"kategori\");\n        const harga = formData.get(\"harga\");\n        const stok_jumlah = formData.get(\"stok_jumlah\");\n        const link_shopee = formData.get(\"link_shopee\") || null;\n        let gambar_url = formData.get(\"gambar_url\") || null;\n        const file = formData.get(\"file\");\n        if (!id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"ID produk diperlukan\"\n            }, {\n                status: 400\n            });\n        }\n        // ✅ SET session variable untuk trigger UPDATE\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SET @current_user_id = ?\", [\n            auth.id\n        ]);\n        // Upload file baru jika ada\n        if (file && file.size > 0) {\n            const buffer = Buffer.from(await file.arrayBuffer());\n            const fileName = `${Date.now()}-${file.name}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(uploadDir)) {\n                fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(uploadDir, {\n                    recursive: true\n                });\n            }\n            fs__WEBPACK_IMPORTED_MODULE_2___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, fileName), buffer);\n            gambar_url = `/uploads/${fileName}`;\n        }\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"UPDATE products SET nama_barang = ?, kategori = ?, harga = ?, stok_jumlah = ?, link_shopee = ?, gambar_url = ? WHERE id = ?\", [\n            nama_barang,\n            kategori,\n            harga,\n            stok_jumlah || 0,\n            link_shopee,\n            gambar_url,\n            id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Produk berhasil diperbarui\"\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_PUT_ERROR]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal update produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n// ✅ DELETE: Hapus produk (dengan session variable untuk trigger)\nasync function DELETE(request) {\n    const auth = await getAuth(request);\n    if (!auth || auth.role !== 'superadmin') {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Forbidden\"\n        }, {\n            status: 403\n        });\n    }\n    const { searchParams } = new URL(request.url);\n    const id = searchParams.get(\"id\");\n    if (!id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"ID produk diperlukan\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // ✅ SET session variable untuk trigger DELETE\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SET @current_user_id = ?\", [\n            auth.id\n        ]);\n        await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"DELETE FROM products WHERE id = ?\", [\n            id\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Produk berhasil dihapus\"\n        });\n    } catch (error) {\n        console.error(\"[PRODUCTS_DELETE_ERROR]\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Gagal menghapus produk\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksS0FBSyxjQUFjO1FBQ3ZDLE9BQU81QixxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQVksR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDakU7SUFFQSxNQUFNLEVBQUVrQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJdEQsUUFBUXVELEdBQUc7SUFDNUMsTUFBTVAsS0FBS0ssYUFBYWxELEdBQUcsQ0FBQztJQUU1QixJQUFJLENBQUM2QyxJQUFJO1FBQ1AsT0FBT3RELHFEQUFZQSxDQUFDc0IsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBdUIsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDNUU7SUFFQSxJQUFJO1FBQ0YsOENBQThDO1FBQzlDLE1BQU14QixtREFBRUEsQ0FBQ29CLEtBQUssQ0FBQyw0QkFBNEI7WUFBQ00sS0FBSzJCLEVBQUU7U0FBQztRQUVwRCxNQUFNckQsbURBQUVBLENBQUNvQixLQUFLLENBQUMscUNBQXFDO1lBQUNpQztTQUFHO1FBQ3hELE9BQU90RCxxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFa0MsU0FBUztRQUEwQjtJQUNoRSxFQUFFLE9BQU9qQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU92QixxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQzlFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaWxoYW1cXERvY3VtZW50c1xcS2VyamEgUHJha3Rla1xcZ2VyYWstbmNla1xcc3JjXFxhcHBcXGFwaVxccHJvZHVjdHNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGRiIGZyb20gXCJAL2FwcC9saWIvZGJcIjtcbmltcG9ydCB7IGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRBdXRoKHJlcXVlc3QpIHtcbiAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KFwiYWRtaW5fdG9rZW5cIik/LnZhbHVlO1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZWNyZXQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCBcInJhaGFzaWEtbmNlay0xMjNcIik7XG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIHNlY3JldCk7XG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIOKchSBHRVQ6IEFtYmlsIHNlbXVhIHByb2R1ayAocHVibGlrKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBkYi5xdWVyeShcbiAgICAgIFwiU0VMRUNUIHAuKiwgdS51c2VybmFtZSBhcyBjcmVhdGVkX2J5X25hbWUgRlJPTSBwcm9kdWN0cyBwIExFRlQgSk9JTiB1c2VycyB1IE9OIHAuY3JlYXRlZF9ieSA9IHUuaWQgT1JERVIgQlkgcC5pZCBERVNDXCJcbiAgICApO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyb3dzIHx8IFtdKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BST0RVQ1RTX0dFVF1cIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkdhZ2FsIG1lbmdhbWJpbCBkYXRhIHByb2R1a1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cblxuLy8g4pyFIFBPU1Q6IFRhbWJhaCBwcm9kdWsgKFN1cGVyQWRtaW4gb25seSwgZGVuZ2FuIGNyZWF0ZWRfYnkpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIGNvbnN0IGF1dGggPSBhd2FpdCBnZXRBdXRoKHJlcXVlc3QpO1xuICBpZiAoIWF1dGggfHwgYXV0aC5yb2xlICE9PSAnc3VwZXJhZG1pbicpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGb3JiaWRkZW5cIiB9LCB7IHN0YXR1czogNDAzIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgICBjb25zdCBuYW1hX2JhcmFuZyA9IGZvcm1EYXRhLmdldChcIm5hbWFfYmFyYW5nXCIpO1xuICAgIGNvbnN0IGthdGVnb3JpID0gZm9ybURhdGEuZ2V0KFwia2F0ZWdvcmlcIik7XG4gICAgY29uc3QgaGFyZ2EgPSBmb3JtRGF0YS5nZXQoXCJoYXJnYVwiKTtcbiAgICBjb25zdCBzdG9rX2p1bWxhaCA9IGZvcm1EYXRhLmdldChcInN0b2tfanVtbGFoXCIpO1xuICAgIGNvbnN0IGxpbmtfc2hvcGVlID0gZm9ybURhdGEuZ2V0KFwibGlua19zaG9wZWVcIikgfHwgbnVsbDtcbiAgICBsZXQgZ2FtYmFyX3VybCA9IGZvcm1EYXRhLmdldChcImdhbWJhcl91cmxcIikgfHwgbnVsbDtcbiAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KFwiZmlsZVwiKTtcblxuICAgIC8vIFZhbGlkYXNpXG4gICAgaWYgKCFuYW1hX2JhcmFuZyB8fCAha2F0ZWdvcmkgfHwgIWhhcmdhKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJEYXRhIHRpZGFrIGxlbmdrYXBcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIFVwbG9hZCBmaWxlIGppa2EgYWRhXG4gICAgaWYgKGZpbGUgJiYgZmlsZS5zaXplID4gMCkge1xuICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YDtcbiAgICAgIGNvbnN0IHVwbG9hZERpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInB1YmxpY1wiLCBcInVwbG9hZHNcIik7XG4gICAgICBcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyh1cGxvYWREaXIpKSB7XG4gICAgICAgIGZzLm1rZGlyU3luYyh1cGxvYWREaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbih1cGxvYWREaXIsIGZpbGVOYW1lKSwgYnVmZmVyKTtcbiAgICAgIGdhbWJhcl91cmwgPSBgL3VwbG9hZHMvJHtmaWxlTmFtZX1gO1xuICAgIH1cblxuICAgIC8vIOKchSBJbnNlcnQgZGVuZ2FuIGNyZWF0ZWRfYnkgKHRyaWdnZXIgYWthbiBhdXRvLWxvZylcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGRiLnF1ZXJ5KFxuICAgICAgXCJJTlNFUlQgSU5UTyBwcm9kdWN0cyAobmFtYV9iYXJhbmcsIGthdGVnb3JpLCBoYXJnYSwgc3Rva19qdW1sYWgsIGxpbmtfc2hvcGVlLCBnYW1iYXJfdXJsLCBjcmVhdGVkX2J5KSBWQUxVRVMgKD8sID8sID8sID8sID8sID8sID8pXCIsXG4gICAgICBbbmFtYV9iYXJhbmcsIGthdGVnb3JpLCBoYXJnYSwgc3Rva19qdW1sYWggfHwgMCwgbGlua19zaG9wZWUsIGdhbWJhcl91cmwsIGF1dGguaWRdXG4gICAgKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgaWQ6IHJlc3VsdC5pbnNlcnRJZCwgXG4gICAgICBtZXNzYWdlOiBcIlByb2R1ayBiZXJoYXNpbCBkaXRhbWJhaGthblwiIFxuICAgIH0sIHsgc3RhdHVzOiAyMDEgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW1BST0RVQ1RTX1BPU1RfRVJST1JdXCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJHYWdhbCBtZW5hbWJhaCBwcm9kdWtcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbi8vIOKchSBQVVQ6IFVwZGF0ZSBwcm9kdWsgKFN1cGVyQWRtaW4gb25seSwgZGVuZ2FuIHNlc3Npb24gdmFyaWFibGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3QpIHtcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgocmVxdWVzdCk7XG4gIGlmICghYXV0aCB8fCBhdXRoLnJvbGUgIT09ICdzdXBlcmFkbWluJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZvcmJpZGRlblwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IGlkID0gZm9ybURhdGEuZ2V0KFwiaWRcIik7XG4gICAgY29uc3QgbmFtYV9iYXJhbmcgPSBmb3JtRGF0YS5nZXQoXCJuYW1hX2JhcmFuZ1wiKTtcbiAgICBjb25zdCBrYXRlZ29yaSA9IGZvcm1EYXRhLmdldChcImthdGVnb3JpXCIpO1xuICAgIGNvbnN0IGhhcmdhID0gZm9ybURhdGEuZ2V0KFwiaGFyZ2FcIik7XG4gICAgY29uc3Qgc3Rva19qdW1sYWggPSBmb3JtRGF0YS5nZXQoXCJzdG9rX2p1bWxhaFwiKTtcbiAgICBjb25zdCBsaW5rX3Nob3BlZSA9IGZvcm1EYXRhLmdldChcImxpbmtfc2hvcGVlXCIpIHx8IG51bGw7XG4gICAgbGV0IGdhbWJhcl91cmwgPSBmb3JtRGF0YS5nZXQoXCJnYW1iYXJfdXJsXCIpIHx8IG51bGw7XG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImZpbGVcIik7XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJRCBwcm9kdWsgZGlwZXJsdWthblwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgLy8g4pyFIFNFVCBzZXNzaW9uIHZhcmlhYmxlIHVudHVrIHRyaWdnZXIgVVBEQVRFXG4gICAgYXdhaXQgZGIucXVlcnkoXCJTRVQgQGN1cnJlbnRfdXNlcl9pZCA9ID9cIiwgW2F1dGguaWRdKTtcblxuICAgIC8vIFVwbG9hZCBmaWxlIGJhcnUgamlrYSBhZGFcbiAgICBpZiAoZmlsZSAmJiBmaWxlLnNpemUgPiAwKSB7XG4gICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuICAgICAgY29uc3QgZmlsZU5hbWUgPSBgJHtEYXRlLm5vdygpfS0ke2ZpbGUubmFtZX1gO1xuICAgICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIFwidXBsb2Fkc1wiKTtcbiAgICAgIFxuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHVwbG9hZERpcikpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5qb2luKHVwbG9hZERpciwgZmlsZU5hbWUpLCBidWZmZXIpO1xuICAgICAgZ2FtYmFyX3VybCA9IGAvdXBsb2Fkcy8ke2ZpbGVOYW1lfWA7XG4gICAgfVxuXG4gICAgYXdhaXQgZGIucXVlcnkoXG4gICAgICBcIlVQREFURSBwcm9kdWN0cyBTRVQgbmFtYV9iYXJhbmcgPSA/LCBrYXRlZ29yaSA9ID8sIGhhcmdhID0gPywgc3Rva19qdW1sYWggPSA/LCBsaW5rX3Nob3BlZSA9ID8sIGdhbWJhcl91cmwgPSA/IFdIRVJFIGlkID0gP1wiLFxuICAgICAgW25hbWFfYmFyYW5nLCBrYXRlZ29yaSwgaGFyZ2EsIHN0b2tfanVtbGFoIHx8IDAsIGxpbmtfc2hvcGVlLCBnYW1iYXJfdXJsLCBpZF1cbiAgICApO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGlwZXJiYXJ1aVwiIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltQUk9EVUNUU19QVVRfRVJST1JdXCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJHYWdhbCB1cGRhdGUgcHJvZHVrXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG4vLyDinIUgREVMRVRFOiBIYXB1cyBwcm9kdWsgKGRlbmdhbiBzZXNzaW9uIHZhcmlhYmxlIHVudHVrIHRyaWdnZXIpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3QpIHtcbiAgY29uc3QgYXV0aCA9IGF3YWl0IGdldEF1dGgocmVxdWVzdCk7XG4gIGlmICghYXV0aCB8fCBhdXRoLnJvbGUgIT09ICdzdXBlcmFkbWluJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZvcmJpZGRlblwiIH0sIHsgc3RhdHVzOiA0MDMgfSk7XG4gIH1cblxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJRCBwcm9kdWsgZGlwZXJsdWthblwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIOKchSBTRVQgc2Vzc2lvbiB2YXJpYWJsZSB1bnR1ayB0cmlnZ2VyIERFTEVURVxuICAgIGF3YWl0IGRiLnF1ZXJ5KFwiU0VUIEBjdXJyZW50X3VzZXJfaWQgPSA/XCIsIFthdXRoLmlkXSk7XG4gICAgXG4gICAgYXdhaXQgZGIucXVlcnkoXCJERUxFVEUgRlJPTSBwcm9kdWN0cyBXSEVSRSBpZCA9ID9cIiwgW2lkXSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJQcm9kdWsgYmVyaGFzaWwgZGloYXB1c1wiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbUFJPRFVDVFNfREVMRVRFX0VSUk9SXVwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiR2FnYWwgbWVuZ2hhcHVzIHByb2R1a1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJqd3RWZXJpZnkiLCJmcyIsInBhdGgiLCJnZXRBdXRoIiwicmVxdWVzdCIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInBheWxvYWQiLCJlcnIiLCJHRVQiLCJyb3dzIiwicXVlcnkiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUE9TVCIsImF1dGgiLCJyb2xlIiwiZm9ybURhdGEiLCJuYW1hX2JhcmFuZyIsImthdGVnb3JpIiwiaGFyZ2EiLCJzdG9rX2p1bWxhaCIsImxpbmtfc2hvcGVlIiwiZ2FtYmFyX3VybCIsImZpbGUiLCJzaXplIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwiZmlsZU5hbWUiLCJEYXRlIiwibm93IiwibmFtZSIsInVwbG9hZERpciIsImpvaW4iLCJjd2QiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwicmVjdXJzaXZlIiwid3JpdGVGaWxlU3luYyIsInJlc3VsdCIsImlkIiwiaW5zZXJ0SWQiLCJtZXNzYWdlIiwiUFVUIiwiREVMRVRFIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/route.js\n");

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