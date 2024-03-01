// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function e(e){var o,i,n,d,l,m,h;if(!s(e))throw new TypeError(r("1XlAh",e));for(o=0,i=[],d=[],n=e.length,m=0;m<n;m++)l=e[m],o+=1,-1===(h=t(i,l))?(i.push(l),d.push([l,1,0])):d[h][1]+=1;for(n=d.length,m=0;m<n;m++)d[m][2]=d[m][1]/o;return d}export{e as default};
//# sourceMappingURL=index.mjs.map
