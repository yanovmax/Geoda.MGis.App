"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[8023],{28023:function(e,t,r){r.r(t),r.d(t,{execute:function(){return o}});var a,n=r(74165),s=r(1413),u=r(15861),i=r(10064);function o(e,t){var r=t.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",t.responseType=r;var o=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then(function(){var c=(0,u.Z)((0,n.Z)().mark((function u(c){var p,b,l,f,k,x,v;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c.data){n.next=23;break}if(!(c.data instanceof ArrayBuffer)){n.next=16;break}if("json"!==r&&"text"!==r&&"blob"!==r||(p=new Blob([c.data]),"json"!==r&&"text"!==r||(a||(a=new FileReaderSync),f=a.readAsText(p),"json"!==r))){n.next=14;break}n.prev=3,b=JSON.parse(f||null),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(3),x=(0,s.Z)((0,s.Z)({},n.t0),{},{url:e,requestOptions:t}),new i.Z("request:server",n.t0.message,x);case 11:if(!b.error){n.next=14;break}throw v=(0,s.Z)((0,s.Z)({},b.error),{},{url:e,requestOptions:t}),new i.Z("request:server",b.error.message,v);case 14:n.next=23;break;case 16:if(n.t1="native"===r,!n.t1){n.next=23;break}return c.data.signal=o,n.next=21,fetch(c.data.url,c.data);case 21:l=n.sent,c.httpStatus=l.status;case 23:n.t2=r,n.next="blob"===n.t2?26:"json"===n.t2?28:"native"===n.t2?30:"text"===n.t2?32:34;break;case 26:return k=p,n.abrupt("break",35);case 28:return k=b,n.abrupt("break",35);case 30:return k=l,n.abrupt("break",35);case 32:return k=f,n.abrupt("break",35);case 34:k=c.data;case 35:return n.abrupt("return",{data:k,httpStatus:c.httpStatus,requestOptions:t,ssl:c.ssl,url:e});case 36:case"end":return n.stop()}}),u,null,[[3,7]])})));return function(e){return c.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=8023.81a784b6.chunk.js.map