// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=t,i=s,n=e;var o=function(t){var s,e,o,l,m,d,a;if(!r(t))throw new TypeError(n("invalid argument. First argument must be a collection. Value: `%s`.",t));for(s=0,e=[],l=[],o=t.length,d=0;d<o;d++)m=t[d],s+=1,-1===(a=i(e,m))?(e.push(m),l.push([m,1,0])):l[a][1]+=1;for(o=l.length,d=0;d<o;d++)l[d][2]=l[d][1]/s;return l};export{o as default};
//# sourceMappingURL=index.mjs.map
