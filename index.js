// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,f,a,y;if(null==t)return r.call(t);e=t[i],y=i,n=null!=(a=t)&&o.call(a,y);try{t[i]=void 0}catch(n){return r.call(t)}return f=r.call(t),n?t[i]=e:delete t[i],f}:function(t){return r.call(t)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,u="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(a&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?u:function(){throw new Error("not implemented")};var c,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;c=function(){var t,n,r;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),r=n,t=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")};var U,b=c,m="function"==typeof Uint8Array,v="function"==typeof Uint8Array?Uint8Array:null,w="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var t,n,r;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,256,257]),r=n,t=(m&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?w:function(){throw new Error("not implemented")};var s,h=U,g="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),r=n,t=(g&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var F,E={uint16:s,uint8:h};(F=new E.uint16(1))[0]=4660;var T=!0==(52===new E.uint8(F.buffer)[0])?1:0,O=new b(1),x=new l(O.buffer);return function(t){return O[0]=t,x[T]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).getHighWord=n();
//# sourceMappingURL=index.js.map
