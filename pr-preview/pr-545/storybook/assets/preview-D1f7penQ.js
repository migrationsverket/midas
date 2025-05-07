import{j as U}from"./jsx-runtime-DtgEGaVE.js";import{R as O}from"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ce={smallest:{name:"Smallest",styles:{width:"320px",height:"568px"}},"x-small":{name:"X-small",styles:{width:"440px",height:"100%"}},small:{name:"Small",styles:{width:"767px",height:"100%"}},medium:{name:"Medium",styles:{width:"768px",height:"100%"}},large:{name:"Large",styles:{width:"1200px",height:"100%"}},xLarge:{name:"X-Large",styles:{width:"1440px",height:"100%"}}};var ge=Object.defineProperty,n=(e,t)=>ge(e,"name",{value:t,configurable:!0});function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(null,arguments)}n(b,"_extends");function K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n(K,"_assertThisInitialized");function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},y(e,t)}n(y,"_setPrototypeOf");function J(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,y(e,t)}n(J,"_inheritsLoose");function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(e)}n(P,"_getPrototypeOf");function Q(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}n(Q,"_isNativeFunction");function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($=n(function(){return!!e},"_isNativeReflectConstruct"))()}n($,"_isNativeReflectConstruct");function Z(e,t,r){if($())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var o=new(e.bind.apply(e,a));return r&&y(o,r.prototype),o}n(Z,"_construct");function I(e){var t=typeof Map=="function"?new Map:void 0;return I=n(function(r){if(r===null||!Q(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return Z(r,arguments,P(this).constructor)}return n(a,"Wrapper"),a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),y(a,r)},"_wrapNativeSuper"),I(e)}n(I,"_wrapNativeSuper");var he={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function W(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],o=[],s;for(s=1;s<t.length;s+=1)o.push(t[s]);return o.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}n(W,"format");var p=function(e){J(t,e);function t(r){for(var a,o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return a=e.call(this,W.apply(void 0,[he[r]].concat(s)))||this,K(a)}return n(t,"PolishedError"),t}(I(Error));function S(e){return Math.round(e*255)}n(S,"colorToInt");function ee(e,t,r){return S(e)+","+S(t)+","+S(r)}n(ee,"convertToInt");function v(e,t,r,a){if(a===void 0&&(a=ee),t===0)return a(r,r,r);var o=(e%360+360)%360/60,s=(1-Math.abs(2*r-1))*t,i=s*(1-Math.abs(o%2-1)),u=0,d=0,f=0;o>=0&&o<1?(u=s,d=i):o>=1&&o<2?(u=i,d=s):o>=2&&o<3?(d=s,f=i):o>=3&&o<4?(d=i,f=s):o>=4&&o<5?(u=i,f=s):o>=5&&o<6&&(u=s,f=i);var h=r-s/2,m=u+h,c=d+h,R=f+h;return a(m,c,R)}n(v,"hslToRgb");var Y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function te(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Y[t]?"#"+Y[t]:e}n(te,"nameToHex");var me=/^#[a-fA-F0-9]{6}$/,be=/^#[a-fA-F0-9]{8}$/,ye=/^#[a-fA-F0-9]{3}$/,ve=/^#[a-fA-F0-9]{4}$/,_=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Fe=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,we=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,xe=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function j(e){if(typeof e!="string")throw new p(3);var t=te(e);if(t.match(me))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(be)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ye))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ve)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var o=_.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var s=Fe.exec(t.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var i=we.exec(t);if(i){var u=parseInt(""+i[1],10),d=parseInt(""+i[2],10)/100,f=parseInt(""+i[3],10)/100,h="rgb("+v(u,d,f)+")",m=_.exec(h);if(!m)throw new p(4,t,h);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)}}var c=xe.exec(t.substring(0,50));if(c){var R=parseInt(""+c[1],10),fe=parseInt(""+c[2],10)/100,pe=parseInt(""+c[3],10)/100,G="rgb("+v(R,fe,pe)+")",x=_.exec(G);if(!x)throw new p(4,t,G);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new p(5)}n(j,"parseToRgb");function re(e){var t=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(t,r,a),s=Math.min(t,r,a),i=(o+s)/2;if(o===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u,d=o-s,f=i>.5?d/(2-o-s):d/(o+s);switch(o){case t:u=(r-a)/d+(r<a?6:0);break;case r:u=(a-t)/d+2;break;default:u=(t-r)/d+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:f,lightness:i,alpha:e.alpha}:{hue:u,saturation:f,lightness:i}}n(re,"rgbToHsl");function q(e){return re(j(e))}n(q,"parseToHsl");var ke=n(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),A=ke;function g(e){var t=e.toString(16);return t.length===1?"0"+t:t}n(g,"numberToHex");function C(e){return g(Math.round(e*255))}n(C,"colorToHex");function ae(e,t,r){return A("#"+C(e)+C(t)+C(r))}n(ae,"convertToHex");function F(e,t,r){return v(e,t,r,ae)}n(F,"hslToHex");function ne(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return F(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return F(e.hue,e.saturation,e.lightness);throw new p(1)}n(ne,"hsl");function oe(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?F(e,t,r):"rgba("+v(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?F(e.hue,e.saturation,e.lightness):"rgba("+v(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new p(2)}n(oe,"hsla");function T(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return A("#"+g(e)+g(t)+g(r));if(typeof e=="object"&&t===void 0&&r===void 0)return A("#"+g(e.red)+g(e.green)+g(e.blue));throw new p(6)}n(T,"rgb");function w(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var o=j(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?T(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?T(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new p(7)}n(w,"rgba");var Se=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Ce=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),Pe=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),Ie=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function L(e){if(typeof e!="object")throw new p(8);if(Ce(e))return w(e);if(Se(e))return T(e);if(Ie(e))return oe(e);if(Pe(e))return ne(e);throw new p(8)}n(L,"toColorString");function N(e,t,r){return n(function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):N(e,t,a)},"fn")}n(N,"curried");function E(e){return N(e,e.length,[])}n(E,"curry");function M(e,t,r){return Math.max(e,Math.min(t,r))}n(M,"guard");function se(e,t){if(t==="transparent")return t;var r=q(t);return L(b({},r,{lightness:M(0,1,r.lightness-parseFloat(e))}))}n(se,"darken");var Te=E(se),Be=Te;function ie(e,t){if(t==="transparent")return t;var r=q(t);return L(b({},r,{lightness:M(0,1,r.lightness+parseFloat(e))}))}n(ie,"lighten");var je=E(ie),Ee=je;function le(e,t){if(t==="transparent")return t;var r=j(t),a=typeof r.alpha=="number"?r.alpha:1,o=b({},r,{alpha:M(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return w(o)}n(le,"transparentize");var Me=E(le),Re=Me,l={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},V={app:"#F6F9FC",bar:l.lightest,content:l.lightest,preview:l.lightest,gridCellSize:10,hoverable:Re(.9,l.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},B={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Oe={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},_e=Oe,ze={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:V.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:V.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},X=ze,De=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:He}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:z}=De,Ae=n(e=>typeof e!="string"?(He.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),$e=n(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),qe=n((e,t)=>e==="darken"?w(`${Be(1,t)}`,.95):e==="lighten"?w(`${Ee(1,t)}`,.95):t,"applyPolished"),ue=n(e=>t=>{if(!Ae(t)||!$e(t))return t;try{return qe(e,t)}catch{return t}},"colorFactory");ue("lighten");ue("darken");var Le=n(()=>!z||!z.matchMedia?"light":z.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),D={light:X,dark:_e,normal:X},H=Le(),de=n((e={base:H},t)=>{let r={...D[H],...D[e.base]||{},...e,base:D[e.base]?e.base:H};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}},"create");const Ne=de({base:"light",brandImage:"./mig-logo.svg",brandTitle:"Midas - Migrationsverkets designsystem",brandUrl:"https://designsystem.migrationsverket.se",fontBase:'"Inter", sans-serif',colorPrimary:"#143c50",colorSecondary:"#143c50",appBorderRadius:0}),Ge=de({base:"dark",brandImage:"./mig-logo-white.svg",brandTitle:"Midas - Migrationsverkets designsystem",brandUrl:"https://designsystem.migrationsverket.se",fontBase:'"Inter", sans-serif',colorPrimary:"#eaf2f6",colorSecondary:"#143c50",appBorderRadius:0}),k=()=>!globalThis||!globalThis.matchMedia?"light":globalThis.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",Xe={parameters:{backgrounds:{default:k()==="dark"?"Dark":"Light",values:[{name:"Light",value:"white"},{name:"Dark",value:"#121212"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:k()==="dark"?Ge:Ne},viewport:{viewports:ce},options:{storySort:{method:"alphabetical",order:["Components",["Intro","*"],"*","Examples",["Intro","*"]]}},a11y:{test:"error",element:"#storybook-root"}},decorators:[(e,t)=>{var s;const r=((s=t==null?void 0:t.parameters)==null?void 0:s.rootElement)||"main",[a,o]=O.useState(k());return O.useEffect(()=>{var u;const i=(u=t.globals.backgrounds)==null?void 0:u.value;return o(i==="white"||i==="#121212"?i==="white"?"light":"dark":k())},[t.globals.backgrounds]),O.useEffect(()=>{const i=document.querySelector("body");i&&(i.style.colorScheme=a)},[a]),U.jsx(r,{style:{colorScheme:a,backgroundColor:a==="light"?"white":"#121212"},children:U.jsx(e,{})})}],tags:["autodocs"]};export{Xe as default};
