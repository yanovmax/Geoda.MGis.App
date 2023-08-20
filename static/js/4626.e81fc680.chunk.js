"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[4626],{77095:function(e,t,r){r.d(t,{hN:function(){return I},P0:function(){return G},cW:function(){return k}});var n=r(74165),i=r(37762),a=r(15861),u=r(10064),l=r(34066),s=r(66504);var o=r(77981),c=r(92975);function f(e,t){return e?t?4:3:t?3:2}function p(e,t,r,n,i,a){var u=f(i,a),l=n.coords,s=n.lengths;if(!s)return!1;for(var o=0,c=0;o<s.length;o++,c+=u)if(!m(e,t,r,l[c],l[c+1]))return!1;return!0}function m(e,t,r,n,a){if(!e)return!1;var u,l=f(t,r),s=e.coords,o=e.lengths,c=!1,p=0,m=(0,i.Z)(o);try{for(m.s();!(u=m.n()).done;){var y=u.value;c=v(c,s,l,p,y,n,a),p+=y*l}}catch(h){m.e(h)}finally{m.f()}return c}function v(e,t,r,n,i,a,u){for(var l=e,s=n,o=n,c=n+i*r;o<c;o+=r){(s=o+r)===c&&(s=n);var f=t[o],p=t[o+1],m=t[s],v=t[s+1];(p<u&&v>=u||v<u&&p>=u)&&f+(u-p)/(v-p)*(m-f)<a&&(l=!l)}return l}var y=r(83406),h=r(80457),d=r(19995),R=r(31904),S="feature-store:unsupported-query",b={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},x={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function g(e){return null!=e&&!0===x.spatialRelationship[e]}function w(e){return null!=e&&!0===x.queryGeometry[(0,o.Ji)(e)]}function Z(e){return null!=e&&!0===x.layerGeometry[e]}function k(e,t,n,i,a){if((0,o.oU)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var u=(0,y.Uy)(new h.Z,t,!1,!1);return Promise.resolve((function(e){return function(e,t,r,n){return m(e,t,r,n.coords[0],n.coords[1])}(u,!1,!1,e)}))}if((0,o.oU)(t)&&"esriGeometryMultipoint"===n){var c=(0,y.Uy)(new h.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((function(e){return p(c,!1,!1,e,i,a)}))}if((0,o.YX)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((function(e){return(0,l.aV)(t,(0,R.Op)(n,i,a,e))}));if((0,o.YX)(t)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===e)return Promise.resolve((function(e){return(0,l.lQ)(t,(0,R.Op)(n,i,a,e))}));if((0,o.YX)(t)&&"esriSpatialRelIntersects"===e){var f=function(e){return"mesh"===e?s.h_:(0,s.IY)(e)}(n);return Promise.resolve((function(e){return f(t,(0,R.Op)(n,i,a,e))}))}return Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309)).then((function(r){var u=r[b[e]].bind(null,t.spatialReference,t);return function(e){return u((0,R.Op)(n,i,a,e))}}))}function G(e,t,r){return P.apply(this,arguments)}function P(){return P=(0,a.Z)((0,n.Z)().mark((function e(t,r,i){var a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.spatialRel,!(l=t.geometry)){e.next=11;break}if(g(a)){e.next=4;break}throw new u.Z(S,"Unsupported query spatial relationship",{query:t});case 4:if(!(0,c.JY)(l.spatialReference)||!(0,c.JY)(i)){e.next=11;break}if(w(l)){e.next=7;break}throw new u.Z(S,"Unsupported query geometry type",{query:t});case 7:if(Z(r)){e.next=9;break}throw new u.Z(S,"Unsupported layer geometry type",{query:t});case 9:if(!t.outSR){e.next=11;break}return e.abrupt("return",(0,d._W)(t.geometry&&t.geometry.spatialReference,t.outSR));case 11:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function I(e){if((0,o.YX)(e))return!0;if((0,o.oU)(e)){var t,r=(0,i.Z)(e.rings);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(5!==n.length)return!1;if(n[0][0]!==n[1][0]||n[0][0]!==n[4][0]||n[2][0]!==n[3][0]||n[0][1]!==n[3][1]||n[0][1]!==n[4][1]||n[1][1]!==n[2][1])return!1}}catch(a){r.e(a)}finally{r.f()}return!0}return!1}},20311:function(e,t,r){r.d(t,{R:function(){return a},y:function(){return l}});var n=r(74165),i=r(15861);function a(e,t){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,a,u,l,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(i=r.featureAdapter,a=t.startTimeField,u=t.endTimeField,l=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,!a||!u){e.next=9;break}return e.next=7,r.forEach((function(e){var t=i.getAttribute(e,a),r=i.getAttribute(e,u);null==t||isNaN(t)||(l=Math.min(l,t)),null==r||isNaN(r)||(s=Math.max(s,r))}));case 7:e.next=12;break;case 9:return o=a||u,e.next=12,r.forEach((function(e){var t=i.getAttribute(e,o);null==t||isNaN(t)||(l=Math.min(l,t),s=Math.max(s,t))}));case 12:return e.abrupt("return",{start:l,end:s});case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(e,t,r){if(!t||!e)return null;var n=e.startTimeField,i=e.endTimeField;if(!n&&!i)return null;var a=t.start,u=t.end;return null===a&&null===u?null:void 0===a&&void 0===u?function(){return!1}:n&&i?function(e,t,r,n,i){return null!=n&&null!=i?function(a){var u=e.getAttribute(a,t),l=e.getAttribute(a,r);return(null==u||u<=i)&&(null==l||l>=n)}:null!=n?function(t){var i=e.getAttribute(t,r);return null==i||i>=n}:null!=i?function(r){var n=e.getAttribute(r,t);return null==n||n<=i}:void 0}(r,n,i,a,u):function(e,t,r,n){return null!=r&&null!=n&&r===n?function(n){return e.getAttribute(n,t)===r}:null!=r&&null!=n?function(i){var a=e.getAttribute(i,t);return a>=r&&a<=n}:null!=r?function(n){return e.getAttribute(n,t)>=r}:null!=n?function(r){return e.getAttribute(r,t)<=n}:void 0}(r,n||i,a,u)}},31904:function(e,t,r){r.d(t,{EG:function(){return x},Op:function(){return g},S2:function(){return O},Up:function(){return w},j6:function(){return k},vF:function(){return h}});var n=r(74165),i=r(15861),a=r(43404),u=r(68860),l=r(52587),s=r(94446),o=r(77981),c=r(91340),f=r(92975),p=r(83406),m=r(80457),v=r(19995),y=new a.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),h=Object.freeze({}),d=new m.Z,R=new m.Z,S=new m.Z,b={esriGeometryPoint:p.fQ,esriGeometryPolyline:p.J6,esriGeometryPolygon:p.eG,esriGeometryMultipoint:p.Iv};function x(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(null==t)return null;var a=e.hasZ&&n,u=e.hasM&&i;if(r){var l=(0,p.Nh)(S,t,e.hasZ,e.hasM,"esriGeometryPoint",r,n,i);return(0,p.fQ)(l,a,u)}return(0,p.fQ)(t,a,u)}function g(e,t,r,n,i,a){var u,l,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,c=t&&s,f=r&&o,m=null!=n?"coords"in n?n:n.geometry:null;if(null==m)return null;if(i){var v,y,h=(0,p.zj)(R,m,t,r,e,i,s,o);return a&&(h=(0,p.Nh)(S,h,c,f,e,a)),null!==(v=null===(y=b[e])||void 0===y?void 0:y.call(b,h,c,f))&&void 0!==v?v:null}if(a){var x,g,w=(0,p.Nh)(S,m,t,r,e,a,s,o);return null!==(x=null===(g=b[e])||void 0===g?void 0:g.call(b,w,c,f))&&void 0!==x?x:null}return(0,p.hY)(d,m,t,r,s,o),null!==(u=null===(l=b[e])||void 0===l?void 0:l.call(b,d,c,f))&&void 0!==u?u:null}function w(e,t,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var a,u,l,s,o,c,f,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.outFields,u=t.orderByFields,l=t.groupByFieldsForStatistics,s=t.outStatistics,a)for(o=0;o<a.length;o++)a[o]=a[o].trim();if(u)for(c=0;c<u.length;c++)u[c]=u[c].trim();if(l)for(f=0;f<l.length;f++)l[f]=l[f].trim();if(s)for(p=0;p<s.length;p++)s[p].onStatisticField&&(s[p].onStatisticField=s[p].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),k(t,r,i)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r){return G.apply(this,arguments)}function G(){return(G=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var a,u,l,f,p,m,y,d,R;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(a=t.where,t.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||r&&r===a)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,N(t);case 7:if(u=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(l=t.geometry.spatialReference,(u=(0,s.aO)(u)).spatialReference=l),!u){e.next=27;break}return e.next=12,(0,v._W)(u.spatialReference,i);case 12:return u=I(u,i),e.next=15,(0,c.aX)((0,o.im)(u));case 15:if(null!=(p=e.sent[0])){e.next=18;break}throw h;case 18:return m="quantizationParameters"in t&&(null===(f=t.quantizationParameters)||void 0===f?void 0:f.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,y=m&&P(u,i)?{densificationStep:8*m}:void 0,d=p.toJSON(),e.next=23,(0,v.iV)(d,d.spatialReference,i,y);case 23:if(R=e.sent){e.next=26;break}throw h;case 26:R.spatialReference=i,t.geometry=R;case 27:return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){if(!e)return!1;var r=e.spatialReference;return((0,o.YX)(e)||(0,o.oU)(e)||(0,o.l9)(e))&&!(0,f.fS)(r,t)&&!(0,l.canProjectWithoutEngine)(r,t)}function I(e,t){var r=e.spatialReference;return P(e,t)&&(0,o.YX)(e)?{spatialReference:r,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}function N(e){return U.apply(this,arguments)}function U(){return(U=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,a,l,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.distance,i=t.units,a=t.geometry,null!=r&&!("vertexAttributes"in a)){e.next=3;break}return e.abrupt("return",a);case 3:if(l=a.spatialReference,s=i?y.fromJSON(i):(0,u.qE)(l),!l||!(0,f.sT)(l)&&!(0,f.sS)(l)){e.next=9;break}e.t0=a,e.next=12;break;case 9:return e.next=11,(0,v._W)(l,f.Zn).then((function(){return(0,v.iV)(a,f.Zn)}));case 11:e.t0=e.sent;case 12:return o=e.t0,e.next=15,A();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(o.spatialReference,o,r,s));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return M.apply(this,arguments)}function M(){return(M=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return e&&F in e?JSON.parse(JSON.stringify(e,_)):e}var F="_geVersion",_=function(e,t){return e!==F?t:void 0}}}]);
//# sourceMappingURL=4626.e81fc680.chunk.js.map