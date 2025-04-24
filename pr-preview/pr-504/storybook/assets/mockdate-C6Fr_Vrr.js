import{g as k,c as D}from"./_commonjsHelpers-Cpj98o6Y.js";var y={exports:{}};(function(j,m){(function(c,i){i(m)})(D,function(c){/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,u){o.__proto__=u}||function(o,u){for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&(o[r]=u[r])},i(e,t)};function O(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");i(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var n=Date,l=null,a=function(e){O(t,e);function t(o,u,r,s,p,v,w){e.call(this);var f;switch(arguments.length){case 0:l!==null?f=new n(l.valueOf()):f=new n;break;case 1:f=new n(o);break;default:r=typeof r>"u"?1:r,s=s||0,p=p||0,v=v||0,w=w||0,f=new n(o,u,r,s,p,v,w);break}return f}return t}(n);a.prototype=n.prototype,a.UTC=n.UTC,a.now=function(){return new a().valueOf()},a.parse=function(e){return n.parse(e)},a.toString=function(){return n.toString()};function _(e){var t=new Date(e.valueOf());if(isNaN(t.getTime()))throw new TypeError("mockdate: The time set is an invalid date: "+e);Date=a,l=t.valueOf()}function d(){Date=n}var g={set:_,reset:d};c.default=g,c.reset=d,c.set=_,Object.defineProperty(c,"__esModule",{value:!0})})})(y,y.exports);var h=y.exports;const T=k(h);export{T as M};
