"use strict";var f=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var o=f(function(x,n){
var m=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/utils-index-of/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist');function l(t){var e,s,u,a,i,r,v;if(!m(t))throw new TypeError(h('1XlAh',t));for(e=0,s=[],a=[],u=t.length,r=0;r<u;r++)i=t[r],e+=1,v=p(s,i),v===-1?(s.push(i),a.push([i,1,0])):a[v][1]+=1;for(u=a.length,r=0;r<u;r++)a[r][2]=a[r][1]/e;return a}n.exports=l
});var g=o();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
