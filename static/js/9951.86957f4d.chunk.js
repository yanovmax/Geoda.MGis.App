"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[9951],{71277:function(t,e,n){function l(t){return t=t||globalThis.location.hostname,u.some((function(e){var n;return null!=(null===(n=t)||void 0===n?void 0:n.match(e))}))}function a(t,e){return t&&(e=e||globalThis.location.hostname)?null!=e.match(r)||null!=e.match(o)?t.replace("static.arcgis.com","staticdev.arcgis.com"):null!=e.match(i)||null!=e.match(m)?t.replace("static.arcgis.com","staticqa.arcgis.com"):t:t}n.d(e,{XO:function(){return l},pJ:function(){return a}});var r=/^devext.arcgis.com$/,i=/^qaext.arcgis.com$/,o=/^[\w-]*\.mapsdevext.arcgis.com$/,m=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,i,/^jsapps.esri.com$/,o,m]},19951:function(t,e,n){n.r(e),n.d(e,{fetchSymbolFromStyle:function(){return b},getStyleItemFromStyle:function(){return g},resolveWebStyleSymbol:function(){return y}});var l=n(51508),a=n(71277),r=n(10064),i=n(92026),o=n(35995),m=n(7575),u=n(53283),s=n(42283),c=n(1472),f=n(38048),p=n(81854);function y(t,e,n,l){var a=t.name;return null==a?Promise.reject(new r.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?function(t,e,n){var l=f.wm.replaceAll(/\{SymbolName\}/gi,t),a=null!=e.portal?e.portal:m.Z.getDefault();return(0,f.EJ)(l,n).then((function(t){var e=(0,f.KV)(t.data);return(0,s.im)(e,{portal:a,url:(0,o.mN)((0,o.Yd)(l)),origin:"portal-item"})}))}(a,e,l):(0,f.n2)(t,e,l).then((function(t){return b((0,i.s3)(t),a,e,n,f.v9,l)}))}function g(t,e){return e.items.find((function(e){return e.name===t}))}function b(t,e,n,i,y,b){var d,h,v,w=n&&null!=n.portal?n.portal:m.Z.getDefault(),N={portal:w,url:(0,o.mN)(t.baseUrl),origin:"portal-item"},S=g(e,t.data);if(!S){var Z="The symbol name '".concat(e,"' could not be found");return Promise.reject(new r.Z("symbolstyleutils:symbol-name-not-found",Z,{symbolName:e}))}var $=(0,u.f)(y(S,i),N),J=null!==(d=null===(h=S.thumbnail)||void 0===h?void 0:h.href)&&void 0!==d?d:null,U=S.thumbnail&&S.thumbnail.imageData;(0,a.XO)()&&($=null!==(v=(0,a.pJ)($))&&void 0!==v?v:"",J=(0,a.pJ)(J));var k={portal:w,url:(0,o.mN)((0,o.Yd)($)),origin:"portal-item"};return(0,f.EJ)($,b).then((function(a){var r="cimRef"===i?(0,f.KV)(a.data):a.data,o=(0,s.im)(r,k);if(o&&(0,l.dU)(o)){if(J){var m=(0,u.f)(J,N);o.thumbnail=new p.p({url:m})}else U&&(o.thumbnail=new p.p({url:"data:image/png;base64,".concat(U)}));t.styleUrl?o.styleOrigin=new c.Z({portal:n.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(o.styleOrigin=new c.Z({portal:n.portal,styleName:t.styleName,name:e}))}return o}))}}}]);
//# sourceMappingURL=9951.86957f4d.chunk.js.map