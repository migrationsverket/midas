(() => {
"use strict";
var __webpack_modules__ = ({
18592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  BH: () => (language),
  Ho: () => (fuzzyMatchingDistance),
  IH: () => (searchIndexUrl),
  sx: () => (removeDefaultStopWordFilter)
});
/* import */ var _home_runner_work_midas_midas_node_modules_lunr_lunr_js__rspack_import_0 = __webpack_require__(58291);
/* import */ var _home_runner_work_midas_midas_node_modules_lunr_lunr_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_midas_midas_node_modules_lunr_lunr_js__rspack_import_0);

__webpack_require__(12472)((_home_runner_work_midas_midas_node_modules_lunr_lunr_js__rspack_import_0_default()));
__webpack_require__(96233)((_home_runner_work_midas_midas_node_modules_lunr_lunr_js__rspack_import_0_default()));
const removeDefaultStopWordFilter = [];
const language = [
    "sv"
];
const searchIndexUrl = "search-index{dir}.json?_=6fac8b04";
const searchResultLimits = 8;
const fuzzyMatchingDistance = 1;


},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// the startup function
__webpack_require__.x = () => {
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["6225"], () => __webpack_require__(42653));
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
return __webpack_exports__
};

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
};
})();
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "assets/js/" + chunkId + "." + "0e28cb3a" + ".js"
}
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.miniCssF = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".css"
}
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.12")
})();
// webpack/runtime/startup_chunk_dependencies
(() => {
var next = __webpack_require__.x
__webpack_require__.x = () => {
  return __webpack_require__.e("6225").then(next);
}
})();
// ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
})();
// webpack/runtime/import_scripts_chunk_loading
(() => {
var installedChunks = {"1465": 1,};
// importScripts chunk loading
var installChunk = (data) => {
    var [chunkIds, moreModules, runtime] = data;
    for (var moduleId in moreModules) {
        if (__webpack_require__.o(moreModules, moduleId)) {
            __webpack_require__.m[moduleId] = moreModules[moduleId];
        }
    }
    if (runtime) runtime(__webpack_require__);
    while (chunkIds.length) installedChunks[chunkIds.pop()] = 1;
    parentChunkLoadingFunction(data);
};

__webpack_require__.f.i = (chunkId, promises) => {
    
    // "1" is the signal for "already loaded
    if (!installedChunks[chunkId]) {
        if (true) {
            
            importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
            
        }
    }
    
};

var chunkLoadingGlobal = self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || [];
var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
chunkLoadingGlobal.push = installChunk;
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.12";
})();
// run startup
var __webpack_exports__ = __webpack_require__.x();
})()
;