(() => {
"use strict";
var __webpack_modules__ = ({});
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
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
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
  return "assets/js/" + ({"1022": "93fa90b4","1027": "8ac150c6","1028": "1555d329","1036": "e49d1ef9","1042": "7d405538","106": "17896441","1150": "85ecc983","1221": "621db11d","1234": "138e0e15","1256": "28a5ca9c","1269": "f3482596","1283": "f4085c03","1384": "e57043c1","1476": "e57c84ff","15": "e63d0d70","1540": "ad3eb7ea","1567": "425d95b8","1584": "a08ccef2","1603": "67e65cef","1668": "5e95c892","1670": "d8b810fa","1797": "7c2aac5e","1833": "814f3328","1882": "90252242","191": "36994c47","1932": "a3a1bb28","1970": "1ed902d3","2098": "9e9c7a31","2183": "bead4daf","2234": "1a423cf2","2284": "03dcfce2","2294": "294ee15e","2311": "10201c66","2394": "f8798d75","2536": "c0f8fa1c","2547": "daad1f51","2581": "90377f5b","2617": "fa74d00e","2886": "8b36fbe4","3056": "a7456010","3087": "3207f380","3149": "e8bd7304","3218": "0ba03688","3220": "acecf23e","325": "e531c33f","3292": "a341ea43","3420": "a45b4143","3423": "6f5f607c","3574": "03316779","3677": "946ac172","3699": "85455150","3747": "aba21aa0","3795": "ab8aadb0","390": "53fd12ab","3909": "e7835942","3920": "27e43eea","395": "d0314b07","40": "8fee352f","4022": "1133360a","4083": "98df859f","4116": "a803bb2b","4284": "8212ceed","4310": "1a63ac3d","434": "cdb1674e","4395": "a8bcee01","4426": "2d879dfb","4508": "94bff9ec","4559": "ac3f57b8","4701": "0743e332","4774": "5c5def13","4785": "543d8720","4809": "c20fed52","4853": "06847bd2","4900": "5bc86868","496": "fe862c7e","4968": "c8e05a9c","5005": "common","5006": "fd4f1768","5105": "97dcddd8","5142": "1c72337b","5210": "77553c88","5211": "9ab082d7","5276": "5b83bce8","5298": "b48b82b2","5343": "387b3dd2","5382": "b49c4893","5398": "d8fd19fa","545": "0e3ce4d3","5476": "e59ee3b6","5495": "93ee285b","5575": "a7bd4aaa","5579": "1838688e","5628": "42d05135","5630": "8f7c5456","5706": "dc931a14","5723": "635a62b0","5746": "ad6bf128","578": "82250443","5818": "52c6685a","5847": "1a4e3797","5874": "af10bb7a","6074": "ccc49370","6112": "7e6238c4","6131": "937095bd","614": "2b7d3fe7","6167": "93c8a9d2","6250": "0bed84c2","6302": "00518e81","6321": "afef3dfd","6361": "75f1d354","6374": "16e7db41","6407": "79d23d0f","6478": "2ab49a78","6525": "12a91cff","653": "f255bc04","6582": "d481a1b3","6615": "a76258bd","671": "c71430a2","6717": "a0763d24","6735": "de97d55b","6747": "861e2252","6785": "a94703ab","6803": "dec1a858","6814": "8e271ac5","7018": "ce8da724","7062": "b235458c","7089": "ea7cbe00","7195": "405a0f0e","7304": "1e883308","7325": "8469219d","7362": "2ed31cf8","7433": "924c4f2a","7496": "a6aa9e1f","7592": "1cc24fd5","76": "9b9ca316","766": "6875c492","7767": "e108b786","7799": "55843d4b","7811": "4033e3a4","7827": "25b68ecb","7859": "17114e42","7949": "635481bf","7969": "e500b8a4","7972": "0fd944e4","8034": "9bbb3cda","8058": "4b175b5f","8076": "86bd72be","8122": "d02fe441","8177": "3c9a9f60","8200": "b9ba9847","8274": "13c36bd0","8361": "b3ec44a9","8441": "98db018c","8451": "0ab4808b","8481": "96f78850","8522": "17d2afbc","8565": "e01a17d2","8582": "52a76f6a","8601": "bfe4c2f5","8655": "870a3819","8733": "a2cc83c2","8868": "6adf5a94","8908": "dd4f13ee","8911": "bfc94171","8926": "f9ae56e1","9008": "1d0b0786","9054": "2a9e8c26","9061": "484468af","9107": "a526d928","9199": "65198264","9270": "048ba928","9356": "1e0b4934","9385": "41e62c11","9452": "1df93b7f","9470": "aca3791a","9479": "564d7562","9591": "93f782fd","9593": "0fcdf09a","9660": "9e4087bc","9786": "01a85c17","9907": "64978638","9997": "3e79c5ba",}[chunkId] || chunkId) + "." + {"1012": "bd5be962","1022": "3cd8b04e","1027": "831d7f63","1028": "a57dc09a","1036": "82099acb","1042": "a44d348e","106": "29241962","1091": "7fcd5fb1","112": "c8f56c50","1134": "3bef6f97","1143": "51c05e5d","1150": "e208f989","1221": "a386ab0b","1234": "cf6afb49","1256": "cb484fc2","1269": "6734fa0a","1283": "f8623009","1384": "f9f62062","1465": "bf7b43d4","1476": "dd1563e2","1483": "db137127","15": "48e2269d","1540": "bcc381a1","156": "443a1ca6","1567": "4e71e100","1584": "c7bc3789","1603": "2c12204a","1668": "6caa2fa7","1670": "ee1d3119","1773": "1bb21bd7","1797": "576b03ec","1833": "b04fe5fd","1882": "9fb405fe","190": "5dd30039","191": "3e5e3442","1932": "e1326099","1970": "25a15549","199": "7df23e5e","2070": "735ca062","2085": "e2689fa6","2098": "2187a58d","2183": "20a569dc","2214": "c6eeb6e3","2234": "3636918c","2284": "4eef1ba6","2294": "0cb7c59f","2311": "8bbb86e0","2371": "310e2e9a","2394": "46d6dce7","2395": "203693be","2432": "b8bc8e5f","2536": "73d44d21","2547": "a8604942","2580": "4ba0cd6a","2581": "9111d59f","2617": "10d36d1a","2619": "9922e91f","2642": "fbc961fb","2654": "86c70003","2831": "65e8e85b","2853": "35579317","2886": "1795085d","2982": "c8b155ea","3009": "dc21a4fb","3013": "664f95b3","3017": "ab131bab","3056": "d340e9a1","3084": "5f60763d","3087": "752e12e8","3120": "1170ee02","3149": "88434fe6","3218": "f65d32be","3220": "fe5e7ba3","325": "e4f09f1b","3270": "086e0b02","3292": "d8ec9a99","3303": "1f7a2362","3310": "864bbb2c","3312": "6a6ecb85","3358": "5a0820bd","3373": "c2d13d66","3420": "2bd6e7a7","3423": "61fbd760","3516": "6897023a","3535": "1ec6f456","3574": "f1d91497","365": "6fb12f0d","3671": "87c7af44","3677": "4e47db01","3685": "9bed7dbb","3693": "e1695b70","3699": "dfb9d8c6","373": "c0801671","3747": "8bef4b4c","3795": "9b2a71a5","390": "41ae0764","3909": "27e28326","3920": "f84c07ca","3948": "2a312edf","395": "5b8097a4","3970": "f752bd9e","40": "e5ef5c6f","4022": "d80602c0","4037": "f2a36cab","404": "e3defcb1","408": "a853700c","4083": "753f6510","4116": "97696a37","4129": "2a01a58f","4184": "b726d279","4284": "fb82b2c7","4288": "ec005e1e","4310": "c393a72e","434": "406131cb","4392": "98dc9280","4395": "72340a1c","4426": "b317a3dc","4508": "b6f1bf85","4522": "f301bc5f","4559": "06e25540","4701": "ba770505","4774": "63140a94","4779": "74baa6dd","4785": "3efa6960","4809": "5ed05270","4853": "8b82a821","4900": "4b57a24d","4929": "8f6e567b","4932": "81d17eed","4936": "5b80d316","4950": "ee358c28","496": "9b336ee7","4968": "299f0e2b","5005": "02842efd","5006": "9155fb1f","5062": "f02b7e45","5082": "6a9159cd","5105": "89bedb91","5142": "50f98d9f","5155": "0a8eec52","5195": "dd6d3f09","5210": "7db1c7e9","5211": "b13420d7","5250": "8505ef39","5264": "7e478962","5276": "397804b2","529": "0ecb3ee5","5298": "2916f005","5314": "01b3a1cd","5343": "276f2cbb","5382": "41097ed7","5394": "8dd630a1","5398": "cd1a2384","5428": "0faec702","5430": "84dec5f7","545": "b27c05b9","5476": "a9dc04d3","549": "6426778f","5493": "d4829b0d","5495": "5f3f81a3","5575": "9df4e883","5579": "8a3d2367","5628": "2ad4682f","5630": "6dcdef13","5643": "01a2f70e","5654": "4683b240","5706": "cafa9e06","5723": "e3419e74","5746": "6eba5ea8","578": "1cdedb3a","5818": "0d64ec5c","5847": "81a66082","5863": "697dcce3","5874": "e018010f","5926": "a3d49a8b","5998": "81622b12","6014": "9f274b5c","6015": "f5747f35","6045": "e24b68e3","6074": "5ab8d901","6112": "2741c378","612": "35c2ba85","6131": "fc05e952","614": "118fa6e3","6153": "8f72b000","6167": "6b8c1d8d","6250": "60f09331","6261": "5367f29f","6302": "86303d4c","6321": "b5158695","6361": "c8768f42","6374": "bdc68531","6407": "8828c6a3","6426": "963714dc","6438": "d80e4ca4","6478": "fb0793a7","6520": "7c9a0670","6525": "33dcca84","653": "74de11ae","6582": "e2c6e26a","6615": "81c14f35","6632": "852ab27c","671": "c76122a5","6717": "1bdee9f7","6726": "d0dd1b97","6735": "c647bc99","6747": "0ba81e9b","6762": "cd87862b","6771": "0f2e0a79","6785": "ed126e57","6803": "5a02d7d8","6814": "d33b47dc","7018": "ef87830a","705": "f5694cf1","7057": "ab93a2f5","7062": "7a5ba4c9","7089": "87cbe819","718": "6dac9d47","7195": "156c294f","7304": "9ab853de","7305": "103884af","7325": "30707c11","7362": "cfd138f6","7433": "ec774a3d","7496": "d808aa96","7592": "0d0f984b","76": "ec75a7b1","766": "ea73219d","7749": "055e6d56","7759": "4252f4d3","7767": "f56bf62e","7799": "5674259f","7811": "6602ba91","7827": "8e3fe8ae","7859": "c1124329","7949": "1a00dc67","7969": "2d5c648d","7972": "626b2bb4","8034": "30a160c0","8058": "e0c98cd3","8076": "f8c40145","8077": "eb1eee7e","8122": "911c3ea7","8124": "12b68627","8177": "47ef0be7","8200": "5a6db7c4","8274": "a2599ded","8307": "caea0ce2","8361": "7a95cc62","8364": "395b5232","8402": "94675b90","8441": "14541ac7","8451": "6ea91fd3","8481": "b0544d50","8522": "6ac584ca","8534": "2c50c3a5","8565": "8f944b95","8582": "617f287d","8601": "226dfddc","8645": "60b32772","8655": "2b8fc7b4","8665": "ed3dc141","871": "29c1a753","8733": "8df2fa14","8868": "0f77b0c0","8908": "b17f3b61","8911": "9dfed0ab","8926": "82cef24d","8963": "4a781f6f","8979": "436b8f49","9008": "4841ad1a","9009": "c482a6a9","9010": "354bb23f","9054": "7d786fc8","9061": "96a1680f","9107": "34f3cd1c","9117": "981dc4b1","9199": "55e4c339","92": "2de9170d","9241": "e4ec4fd7","9270": "2a00d825","9356": "253d31d1","9385": "5bf23f1a","9452": "567f3b29","9464": "8c7dfda6","9470": "26d022a5","9479": "d4ba2e7d","9591": "799eb815","9593": "96d55771","9660": "31da2e5a","9678": "7d84e0c5","9686": "33e1c1c5","9786": "1c04fd26","9907": "f71ca4e2","9997": "a6b6d236",}[chunkId] + ".js"
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
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var uniqueName = "@midas-ds/source:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-rspack") == uniqueName + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');


script.timeout = 120;
if (__webpack_require__.nc) {
  script.setAttribute("nonce", __webpack_require__.nc);
}

script.setAttribute("data-rspack", uniqueName + key);



script.src = url;


	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
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
__webpack_require__.p = "/pr-preview/pr-1410/";
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.12")
})();
// ChunkAssetRuntimeModule
(() => {
// Docusaurus function to get chunk asset
__webpack_require__.gca = function(chunkId) { chunkId = {"17896441":"106","64978638":"9907","65198264":"9199","82250443":"578","85455150":"3699","90252242":"1882","e63d0d70":"15","8fee352f":"40","9b9ca316":"76","36994c47":"191","e531c33f":"325","53fd12ab":"390","d0314b07":"395","cdb1674e":"434","fe862c7e":"496","0e3ce4d3":"545","2b7d3fe7":"614","f255bc04":"653","c71430a2":"671","6875c492":"766","93fa90b4":"1022","8ac150c6":"1027","1555d329":"1028","e49d1ef9":"1036","7d405538":"1042","85ecc983":"1150","621db11d":"1221","138e0e15":"1234","28a5ca9c":"1256","f3482596":"1269","f4085c03":"1283","e57043c1":"1384","e57c84ff":"1476","ad3eb7ea":"1540","425d95b8":"1567","a08ccef2":"1584","67e65cef":"1603","5e95c892":"1668","d8b810fa":"1670","7c2aac5e":"1797","814f3328":"1833","a3a1bb28":"1932","1ed902d3":"1970","9e9c7a31":"2098","bead4daf":"2183","1a423cf2":"2234","03dcfce2":"2284","294ee15e":"2294","10201c66":"2311","f8798d75":"2394","c0f8fa1c":"2536","daad1f51":"2547","90377f5b":"2581","fa74d00e":"2617","8b36fbe4":"2886","a7456010":"3056","3207f380":"3087","e8bd7304":"3149","0ba03688":"3218","acecf23e":"3220","a341ea43":"3292","a45b4143":"3420","6f5f607c":"3423","03316779":"3574","946ac172":"3677","aba21aa0":"3747","ab8aadb0":"3795","e7835942":"3909","27e43eea":"3920","1133360a":"4022","98df859f":"4083","a803bb2b":"4116","8212ceed":"4284","1a63ac3d":"4310","a8bcee01":"4395","2d879dfb":"4426","94bff9ec":"4508","ac3f57b8":"4559","0743e332":"4701","5c5def13":"4774","543d8720":"4785","c20fed52":"4809","06847bd2":"4853","5bc86868":"4900","c8e05a9c":"4968","common":"5005","fd4f1768":"5006","97dcddd8":"5105","1c72337b":"5142","77553c88":"5210","9ab082d7":"5211","5b83bce8":"5276","b48b82b2":"5298","387b3dd2":"5343","b49c4893":"5382","d8fd19fa":"5398","e59ee3b6":"5476","93ee285b":"5495","a7bd4aaa":"5575","1838688e":"5579","42d05135":"5628","8f7c5456":"5630","dc931a14":"5706","635a62b0":"5723","ad6bf128":"5746","52c6685a":"5818","1a4e3797":"5847","af10bb7a":"5874","ccc49370":"6074","7e6238c4":"6112","937095bd":"6131","93c8a9d2":"6167","0bed84c2":"6250","00518e81":"6302","afef3dfd":"6321","75f1d354":"6361","16e7db41":"6374","79d23d0f":"6407","2ab49a78":"6478","12a91cff":"6525","d481a1b3":"6582","a76258bd":"6615","a0763d24":"6717","de97d55b":"6735","861e2252":"6747","a94703ab":"6785","dec1a858":"6803","8e271ac5":"6814","ce8da724":"7018","b235458c":"7062","ea7cbe00":"7089","405a0f0e":"7195","1e883308":"7304","8469219d":"7325","2ed31cf8":"7362","924c4f2a":"7433","a6aa9e1f":"7496","1cc24fd5":"7592","e108b786":"7767","55843d4b":"7799","4033e3a4":"7811","25b68ecb":"7827","17114e42":"7859","635481bf":"7949","e500b8a4":"7969","0fd944e4":"7972","9bbb3cda":"8034","4b175b5f":"8058","86bd72be":"8076","d02fe441":"8122","3c9a9f60":"8177","b9ba9847":"8200","13c36bd0":"8274","b3ec44a9":"8361","98db018c":"8441","0ab4808b":"8451","96f78850":"8481","17d2afbc":"8522","e01a17d2":"8565","52a76f6a":"8582","bfe4c2f5":"8601","870a3819":"8655","a2cc83c2":"8733","6adf5a94":"8868","dd4f13ee":"8908","bfc94171":"8911","f9ae56e1":"8926","1d0b0786":"9008","2a9e8c26":"9054","484468af":"9061","a526d928":"9107","048ba928":"9270","1e0b4934":"9356","41e62c11":"9385","1df93b7f":"9452","aca3791a":"9470","564d7562":"9479","93f782fd":"9591","0fcdf09a":"9593","9e4087bc":"9660","01a85c17":"9786","3e79c5ba":"9997"}[chunkId]||chunkId; return __webpack_require__.p + __webpack_require__.u(chunkId); };
})();
// webpack/runtime/jsonp_chunk_loading
(() => {
__webpack_require__.b = document.baseURI || self.location.href;

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"4014": 0,"9783": 0,};
      
        __webpack_require__.f.j = function (chunkId, promises) {
          // JSONP chunk loading for javascript
var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
	? installedChunks[chunkId]
	: undefined;
if (installedChunkData !== 0) {
	// 0 means "already installed".

	// a Promise means "currently loading".
	if (installedChunkData) {
		promises.push(installedChunkData[2]);
	} else {
		if (!/^(4014|9783)$/.test(chunkId)) {
			// setup Promise in chunk cache
			var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
			promises.push((installedChunkData[2] = promise));

			// start chunk loading
			var url = __webpack_require__.p + __webpack_require__.u(chunkId);
			// create error before stack unwound to get useful stacktrace later
			var error = new Error();
			var loadingEnded = function (event) {
				if (__webpack_require__.o(installedChunks, chunkId)) {
					installedChunkData = installedChunks[chunkId];
					if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
					if (installedChunkData) {
						var errorType =
							event && (event.type === 'load' ? 'missing' : event.type);
						var realSrc = event && event.target && event.target.src;
						error.message =
							'Loading chunk ' +
							chunkId +
							' failed.\n(' +
							errorType +
							': ' +
							realSrc +
							')';
						error.name = 'ChunkLoadError';
						error.type = errorType;
						error.request = realSrc;
						installedChunkData[1](error);
					}
				}
			};
			__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
		} else installedChunks[chunkId] = 0; 
	}
}

        }
        __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var __rspack_jsonp = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
	return __webpack_require__.O(result);
	
};

var chunkLoadingGlobal = self["webpackChunk_midas_ds_source"] = self["webpackChunk_midas_ds_source"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.12";
})();
})()
;