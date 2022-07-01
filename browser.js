// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=r,e=function(t){return o.call(t)},i=Object.prototype.hasOwnProperty,f=function(t,n){return null!=t&&i.call(t,n)},u="function"==typeof Symbol?Symbol.toStringTag:"",y=f,a=u,c=r,l=e,p=function(t){var n,r,o;if(null==t)return c.call(t);r=t[a],n=y(t,a);try{t[a]=void 0}catch(n){return c.call(t)}return o=c.call(t),n?t[a]=r:delete t[a],o},A=n&&"symbol"==typeof Symbol.toStringTag?p:l,d=A,U="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m=function(t){return U&&t instanceof Uint32Array||"[object Uint32Array]"===d(t)},w=b,s=function(){var t,n;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,4294967296,4294967297]),t=m(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},h="function"==typeof Uint32Array?Uint32Array:void 0,v=function(){throw new Error("not implemented")},g=s()?h:v,S=A,j="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,E=function(t){return j&&t instanceof Float64Array||"[object Float64Array]"===S(t)},T=F,O=function(){var t,n;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=E(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},x="function"==typeof Float64Array?Float64Array:void 0,N=function(){throw new Error("not implemented")},H=O()?x:N,P=A,W="function"==typeof Uint8Array,k="function"==typeof Uint8Array?Uint8Array:null,q=function(t){return W&&t instanceof Uint8Array||"[object Uint8Array]"===P(t)},z=k,B=function(){var t,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,256,257]),t=q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},C="function"==typeof Uint8Array?Uint8Array:void 0,D=function(){throw new Error("not implemented")},G=B()?C:D,I=A,J="function"==typeof Uint16Array,K="function"==typeof Uint16Array?Uint16Array:null,L=function(t){return J&&t instanceof Uint16Array||"[object Uint16Array]"===I(t)},M=K,Q=function(){var t,n;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=L(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},R="function"==typeof Uint16Array?Uint16Array:void 0,V=function(){throw new Error("not implemented")},X={uint16:Q()?R:V,uint8:G};(t=new X.uint16(1))[0]=4660;var Y=!0==(52===new X.uint8(t.buffer)[0])?1:0,Z=new H(1),$=new g(Z.buffer);return function(t){return Z[0]=t,$[Y]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).getHighWord=n();
//# sourceMappingURL=browser.js.map
