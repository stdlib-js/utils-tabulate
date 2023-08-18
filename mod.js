// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function r(r){return t(r)===r}function e(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&r(t.length)&&t.length>=0&&t.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty,i=Object.prototype,u=i.toString,l=i.__defineGetter__,a=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var p=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?o:function(t,r,e){var n,o,p,b;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(c.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,b="set"in e,o&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&l&&l.call(t,r,e.get),b&&a&&a.call(t,r,e.set),t};function b(t,r,e){p(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"number"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return s&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var h=v()?function(t){var r,e,n,o,i;if(null==t)return g.call(t);e=t[_],i=_,r=null!=(o=t)&&m.call(o,i);try{t[_]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[_]=e:delete t[_],n}:function(t){return g.call(t)},j=Number,d=j.prototype.toString;var O=v();function S(t){return"object"==typeof t&&(t instanceof j||(O?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function w(t){return y(t)||S(t)}function I(t){return t!=t}function T(t){return y(t)&&I(t)}function P(t){return S(t)&&I(t.valueOf())}function E(t){return T(t)||P(t)}function N(t){return"string"==typeof t}b(w,"isPrimitive",y),b(w,"isObject",S),b(E,"isPrimitive",T),b(E,"isObject",P);var V=String.prototype.valueOf;var A=v();function F(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object String]"===h(t)))}function k(t){return N(t)||F(t)}b(k,"isPrimitive",N),b(k,"isObject",F);var x=Number.POSITIVE_INFINITY,G=j.NEGATIVE_INFINITY;function C(t){return t<x&&t>G&&r(t)}function Y(t){return y(t)&&C(t)}function M(t){return S(t)&&C(t.valueOf())}function R(t){return Y(t)||M(t)}function U(t,r,n){var o,i;if(!e(t)&&!N(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(o=t.length))return-1;if(3===arguments.length){if(!Y(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=o)return-1;i=n}else(i=o+n)<0&&(i=0)}else i=0;if(E(r)){for(;i<o;i++)if(E(t[i]))return i}else for(;i<o;i++)if(t[i]===r)return i;return-1}function X(t){var r,n,o,i,u,l,a;if(!e(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("1XlAh,O3",t));for(r=0,n=[],i=[],o=t.length,l=0;l<o;l++)r+=1,-1===(a=U(n,u=t[l]))?(n.push(u),i.push([u,1,0])):i[a][1]+=1;for(o=i.length,l=0;l<o;l++)i[l][2]=i[l][1]/r;return i}b(R,"isPrimitive",Y),b(R,"isObject",M);export{X as default};
//# sourceMappingURL=mod.js.map
