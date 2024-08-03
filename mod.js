// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;function r(r){return e(r)===r}var t=9007199254740991;function n(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=t}var i="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function o(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function s(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+c(i):c(i)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,w=/^(\d+)e/,m=/\.0$/,_=/\.0*e/,S=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,S,"$1e"),t=d.call(t,_,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,b,"e+0$1"),t=d.call(t,v,"e-0$1"),e.alternate&&(t=d.call(t,y,"$1."),t=d.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):g.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var k=String.fromCharCode,x=Array.isArray;function I(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,o,c,u,l,f,g,h,d;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)o+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,I(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!I(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-f.length)<0?f:f=h?f+j(d):j(d)+f)),o+=n.arg||"",c+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){var r,t;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var A=Object.prototype,C=A.toString,N=A.__defineGetter__,R=A.__defineSetter__,G=A.__lookupGetter__,Z=A.__lookupSetter__;var W=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=M()?function(e){var r,t,n,i,a;if(null==e)return Y.call(e);t=e[B],a=B,r=null!=(i=e)&&z.call(i,a);try{e[B]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[B]=t:delete e[B],n}:function(e){return Y.call(e)},H=Number,J=H.prototype.toString;var K=M();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function ee(e){return U(e)||Q(e)}function re(e){return e!=e}function te(e){return U(e)&&re(e)}function ne(e){return Q(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return"string"==typeof e}L(ee,"isPrimitive",U),L(ee,"isObject",Q),L(ie,"isPrimitive",te),L(ie,"isObject",ne);var oe=String.prototype.valueOf;var ce=M();function se(e){return"object"==typeof e&&(e instanceof String||(ce?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function ue(e){return ae(e)||se(e)}L(ue,"isPrimitive",ae),L(ue,"isObject",se);var le=Number.POSITIVE_INFINITY,pe=H.NEGATIVE_INFINITY;function fe(e){return e<le&&e>pe&&r(e)}function ge(e){return U(e)&&fe(e)}function he(e){return Q(e)&&fe(e.valueOf())}function de(e){return ge(e)||he(e)}function be(e,r,t){var i,a;if(!n(e)&&!ae(e))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(i=e.length))return-1;if(3===arguments.length){if(!ge(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else(a=i+t)<0&&(a=0)}else a=0;if(ie(r)){for(;a<i;a++)if(ie(e[a]))return a}else for(;a<i;a++)if(e[a]===r)return a;return-1}function ve(e){var r,t,i,a,o,c,s;if(!n(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1XlAh",e));for(r=0,t=[],a=[],i=e.length,c=0;c<i;c++)r+=1,-1===(s=be(t,o=e[c]))?(t.push(o),a.push([o,1,0])):a[s][1]+=1;for(i=a.length,c=0;c<i;c++)a[c][2]=a[c][1]/r;return a}L(de,"isPrimitive",ge),L(de,"isObject",he);export{ve as default};
//# sourceMappingURL=mod.js.map
