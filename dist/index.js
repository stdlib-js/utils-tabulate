"use strict";var f=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var o=f(function(x,n){
var m=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/utils-index-of/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist');function l(t){var r,u,i,a,s,e,v;if(!m(t))throw new TypeError(h('1XlAh',t));for(r=0,u=[],a=[],i=t.length,e=0;e<i;e++)s=t[e],r+=1,v=p(u,s),v===-1?(u.push(s),a.push([s,1,0])):a[v][1]+=1;for(i=a.length,e=0;e<i;e++)a[e][2]=a[e][1]/r;return a}n.exports=l
});var g=o();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
