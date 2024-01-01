// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r){var i,n,o,l,m,d,h;if(!t(r))throw new TypeError(e("invalid argument. First argument must be a collection. Value: `%s`.",r));for(i=0,n=[],l=[],o=r.length,d=0;d<o;d++)m=r[d],i+=1,-1===(h=s(n,m))?(n.push(m),l.push([m,1,0])):l[h][1]+=1;for(o=l.length,d=0;d<o;d++)l[d][2]=l[d][1]/i;return l}export{r as default};
//# sourceMappingURL=index.mjs.map
