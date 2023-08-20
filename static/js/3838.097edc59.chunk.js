"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[3838],{13838:function(e,r,t){t.r(r),t.d(r,{default:function(){return H}});var n,l=t(37762),i=t(74165),o=t(15861),a=t(93433),u=t(1413),s=t(15671),y=t(43144),f=t(11752),p=t(61120),c=t(60136),v=t(29388),d=t(27366),h=(t(59486),t(40281)),b=t(77178),m=t(97642),g=t(66978),S=t(94172),k=t(35995),Z=t(49861),_=t(25243),C=(t(63780),t(93169),t(38511)),w=t(69912),x=t(31201),E=t(78952),P=t(30651),I=t(6693),G=t(6061),O=t(29598),L=t(71684),F=t(56811),M=t(45948),j=t(97326),T=t(91505),N=t(46784),R=t(54472),Y=t(643),J=t(21857),A=t(53866),K=n=function(e){(0,c.Z)(t,e);var r=(0,v.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=r.call.apply(r,[this].concat(i))).description=null,e.fullExtent=null,e.id=null,e.networkLink=null,e.parent=null,e.sublayers=null,e.title=null,e.sourceJSON=null,e.layer=null,e.addHandles([(0,S.on)((function(){return e.sublayers}),"after-add",(function(r){var t=r.item;t.parent=(0,j.Z)(e),t.layer=e.layer}),S.Z_),(0,S.on)((function(){return e.sublayers}),"after-remove",(function(e){var r=e.item;r.layer=r.parent=null}),S.Z_),(0,S.YP)((function(){return e.sublayers}),(function(r,t){if(t){var n,i=(0,l.Z)(t);try{for(i.s();!(n=i.n()).done;){var o=n.value;o.layer=o.parent=null}}catch(y){i.e(y)}finally{i.f()}}if(r){var a,u=(0,l.Z)(r);try{for(u.s();!(a=u.n()).done;){var s=a.value;s.parent=(0,j.Z)(e),s.layer=e.layer}}catch(y){u.e(y)}finally{u.f()}}}),S.Z_),(0,S.YP)((function(){return e.layer}),(function(r){if(e.sublayers){var t,n=(0,l.Z)(e.sublayers);try{for(n.s();!(t=n.n()).done;){t.value.layer=r}}catch(i){n.e(i)}finally{n.f()}}}),S.Z_)]),e}return(0,y.Z)(t,[{key:"initialize",value:function(){var e=this;(0,S.N1)((function(){return e.networkLink})).then((function(){return(0,S.N1)((function(){return!0===e.visible}))})).then((function(){return e.load()}))}},{key:"load",value:function(e){var r,t,l=this;if(this.networkLink&&!this.networkLink.viewFormat){var i=null!=e?e.signal:null,o=this._fetchService(null!==(r=null===(t=this._get("networkLink"))||void 0===t?void 0:t.href)&&void 0!==r?r:"",i).then((function(e){var r,t=(0,J.lm)(e.sublayers);l.fullExtent=A.Z.fromJSON(t),l.sourceJSON=e;var i=(0,_.se)(h.Z.ofType(n),(0,J.j5)(n,e));l.sublayers?l.sublayers.addMany(i):l.sublayers=i,null!==(r=l.layer)&&void 0!==r&&r.emit("sublayer-update"),l.layer&&l.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(o),Promise.resolve(this)}}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,r){return!!r.visibility}},{key:"_fetchService",value:function(e,r){return(0,J.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((function(e){return(0,J.Cw)(e.data)}))}}]),t}(T.Z.EventedMixin((0,N.eC)(R.Z)));(0,d._)([(0,Z.Cb)()],K.prototype,"description",void 0),(0,d._)([(0,Z.Cb)({type:A.Z})],K.prototype,"fullExtent",void 0),(0,d._)([(0,Z.Cb)()],K.prototype,"id",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0,value:null})],K.prototype,"networkLink",void 0),(0,d._)([(0,Z.Cb)({json:{write:{allowNull:!0}}})],K.prototype,"parent",void 0),(0,d._)([(0,Z.Cb)({type:h.Z.ofType(n),json:{write:{allowNull:!0}}})],K.prototype,"sublayers",void 0),(0,d._)([(0,Z.Cb)({value:null,json:{read:{source:"name",reader:function(e){return(0,Y.Cb)(e)}}}})],K.prototype,"title",void 0),(0,d._)([(0,Z.Cb)({value:!0})],K.prototype,"visible",null),(0,d._)([(0,C.r)("visible",["visibility"])],K.prototype,"readVisible",null),(0,d._)([(0,Z.Cb)()],K.prototype,"sourceJSON",void 0),(0,d._)([(0,Z.Cb)()],K.prototype,"layer",void 0);var z=K=n=(0,d._)([(0,w.j)("esri.layers.support.KMLSublayer")],K),W=["kml","xml"],D=function(e){(0,c.Z)(t,e);var r=(0,v.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=r.call.apply(r,[this].concat(l)))._visibleFolders=[],e.allSublayers=new b.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=E.Z.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return(0,y.Z)(t,[{key:"initialize",value:function(){var e=this;this.addHandles([(0,S.YP)((function(){return e.sublayers}),(function(r,t){t&&t.forEach((function(e){e.parent=null,e.layer=null})),r&&r.forEach((function(r){r.parent=e,r.layer=e}))}),S.Z_),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))])}},{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,u.Z)({url:e},r):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,r){this._visibleFolders=r.visibleFolders}},{key:"readSublayers",value:function(e,r,t){return(0,J.j5)(z,r,t,this._visibleFolders)}},{key:"writeSublayers",value:function(e,r){for(var t=[],n=e.toArray();n.length;){var l=n[0];l.networkLink||(l.visible&&t.push(l.id),l.sublayers&&n.push.apply(n,(0,a.Z)(l.sublayers.toArray()))),n.shift()}r.visibleFolders=t}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,k.vt)(this.url,W)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,r=[];return e&&e.forEach((function e(t){t.visible&&(r.push(t),t.sublayers&&t.sublayers.forEach(e))})),r}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var r=this,t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(g.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"destroy",value:function(){(0,f.Z)((0,p.Z)(t.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var t,n,l=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){var e;return l.resourceInfo?{ssl:!1,data:l.resourceInfo}:(0,J.CS)(null!==(e=l.url)&&void 0!==e?e:"",l.outSpatialReference,l.refreshInterval,r)}));case 2:t=e.sent,(n=(0,J.Cw)(t.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"_recomputeFullExtent",value:function(){var e=null;null!=this.extent&&(e=this.extent.clone());return function r(t){if(t.sublayers){var n,i=(0,l.Z)(t.sublayers.items);try{for(i.s();!(n=i.n()).done;){var o=n.value;r(o),o.visible&&o.fullExtent&&(null!=e?e.union(o.fullExtent):e=o.fullExtent.clone())}}catch(a){i.e(a)}finally{i.f()}}}(this),e}}]),t}((0,I.h)((0,L.Q)((0,F.M)((0,G.q)((0,O.I)((0,m.R)(P.Z)))))));(0,d._)([(0,Z.Cb)({readOnly:!0})],D.prototype,"allSublayers",void 0),(0,d._)([(0,Z.Cb)({type:E.Z})],D.prototype,"outSpatialReference",void 0),(0,d._)([(0,Z.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"legendEnabled",void 0),(0,d._)([(0,Z.Cb)({type:["show","hide","hide-children"]})],D.prototype,"listMode",void 0),(0,d._)([(0,Z.Cb)({type:["KML"]})],D.prototype,"operationalLayerType",void 0),(0,d._)([(0,Z.Cb)({})],D.prototype,"resourceInfo",void 0),(0,d._)([(0,Z.Cb)({type:h.Z.ofType(z),json:{write:{ignoreOrigin:!0}}})],D.prototype,"sublayers",void 0),(0,d._)([(0,C.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],D.prototype,"readSublayersFromItemOrWebMap",null),(0,d._)([(0,C.r)("service","sublayers",["sublayers"])],D.prototype,"readSublayers",null),(0,d._)([(0,x.c)("sublayers")],D.prototype,"writeSublayers",null),(0,d._)([(0,Z.Cb)({readOnly:!0,json:{read:!1}})],D.prototype,"type",void 0),(0,d._)([(0,Z.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],D.prototype,"title",null),(0,d._)([(0,Z.Cb)(M.HQ)],D.prototype,"url",void 0),(0,d._)([(0,Z.Cb)({readOnly:!0})],D.prototype,"visibleSublayers",null),(0,d._)([(0,Z.Cb)({type:A.Z})],D.prototype,"extent",void 0),(0,d._)([(0,Z.Cb)()],D.prototype,"fullExtent",null);var H=D=(0,d._)([(0,w.j)("esri.layers.KMLLayer")],D)},21857:function(e,r,t){t.d(r,{CS:function(){return g},Cw:function(){return m},Yu:function(){return Z},j5:function(){return S},lm:function(){return C}});var n=t(74165),l=t(15861),i=t(37762),o=t(42265),a=t(19545),u=t(44055),s=t(76200),y=t(84652),f=t(35995),p=t(78952),c=t(41414),v=t(376),d=t(9014),h=t(49818),b={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function m(e){var r=e.folders||[],t=r.slice(),n=new Map,l=new Map,o=new Map,a=new Map,u=new Map,s={esriGeometryPoint:l,esriGeometryPolyline:o,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var r=(0,y.d9)(e);r.featureSet.features=[];var t=e.featureSet.geometryType;n.set(t,r);var i=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?k(l,i,e.featureSet.features):"esriGeometryPolyline"===t?k(o,i,e.featureSet.features):"esriGeometryPolygon"===t&&k(a,i,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){u.set(e.id,e)})),r.forEach((function(r){r.networkLinkIds.forEach((function(n){var l=function(e,r,t){var n=function(e,r){var t;return r.some((function(r){return r.id===e&&(t=r,!0)})),t}(e,t);return n&&(n.parentFolderId=r,n.networkLink=n),n}(n,r.id,e.networkLinks);l&&t.push(l)}))})),t.forEach((function(e){if(e.featureInfos){e.points=(0,y.d9)(n.get("esriGeometryPoint")),e.polylines=(0,y.d9)(n.get("esriGeometryPolyline")),e.polygons=(0,y.d9)(n.get("esriGeometryPolygon")),e.mapImages=[];var r,t=(0,i.Z)(e.featureInfos);try{for(t.s();!(r=t.n()).done;){var l=r.value;switch(l.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var o,a=s[l.type].get(l.id);a&&(null===(o=e[b[l.type]])||void 0===o||o.featureSet.features.push(a));break;case"GroundOverlay":var f=u.get(l.id);f&&e.mapImages.push(f)}}}catch(p){t.e(p)}finally{t.f()}e.fullExtent=C([e])}}));var f=C(t);return{folders:r,sublayers:t,extent:f}}function g(e,r,t,n){var l=a.id&&a.id.findCredential(e);e=(0,f.fl)(e,{token:l&&l.token});var i=o.Z.kmlServiceUrl;return(0,s.default)(i,{query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:n})}function S(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],l=[],i={},o=r.sublayers,a=r.folders.map((function(e){return e.id}));return o.forEach((function(r){var o=new e;if(t?o.read(r,t):o.read(r),n.length&&a.includes(o.id)&&(o.visible=n.includes(o.id)),i[r.id]=o,null!=r.parentFolderId&&-1!==r.parentFolderId){var u,s=i[r.parentFolderId];s.sublayers||(s.sublayers=[]),null===(u=s.sublayers)||void 0===u||u.unshift(o)}else l.unshift(o)})),l}function k(e,r,t){t.forEach((function(t){e.set(t.attributes[r],t)}))}function Z(e){return _.apply(this,arguments)}function _(){return(_=(0,l.Z)((0,n.Z)().mark((function e(r){var t,l,o,a,s,y,f,p,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=h.Z.fromJSON(r.featureSet).features,l=r.layerDefinition,o=(0,d.i)(l.drawingInfo.renderer),a=u.Z.fromJSON(r.popupInfo),s=[],y=(0,i.Z)(t),e.prev=2,y.s();case 4:if((f=y.n()).done){e.next=12;break}return p=f.value,e.next=8,o.getSymbolAsync(p);case 8:c=e.sent,p.symbol=c,p.popupTemplate=a,p.visible=!0,s.push(p);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),y.e(e.t0);case 17:return e.prev=17,y.f(),e.finish(17);case 20:return e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function C(e){var r,t=(0,c.Ue)(c.Gv),n=(0,c.Ue)(c.Gv),l=(0,i.Z)(e);try{for(l.s();!(r=l.n()).done;){var o=r.value;if(o.polygons&&o.polygons.featureSet&&o.polygons.featureSet.features){var a,u=(0,i.Z)(o.polygons.featureSet.features);try{for(u.s();!(a=u.n()).done;){var s=a.value;(0,v.Yg)(t,s.geometry),(0,c.TC)(n,t)}}catch(Z){u.e(Z)}finally{u.f()}}if(o.polylines&&o.polylines.featureSet&&o.polylines.featureSet.features){var y,f=(0,i.Z)(o.polylines.featureSet.features);try{for(f.s();!(y=f.n()).done;){var d=y.value;(0,v.Yg)(t,d.geometry),(0,c.TC)(n,t)}}catch(Z){f.e(Z)}finally{f.f()}}if(o.points&&o.points.featureSet&&o.points.featureSet.features){var h,b=(0,i.Z)(o.points.featureSet.features);try{for(b.s();!(h=b.n()).done;){var m=h.value;(0,v.Yg)(t,m.geometry),(0,c.TC)(n,t)}}catch(Z){b.e(Z)}finally{b.f()}}if(o.mapImages){var g,S=(0,i.Z)(o.mapImages);try{for(S.s();!(g=S.n()).done;){var k=g.value;(0,v.Yg)(t,k.extent),(0,c.TC)(n,t)}}catch(Z){S.e(Z)}finally{S.f()}}}}catch(Z){l.e(Z)}finally{l.f()}return(0,c.fS)(n,c.Gv)?void 0:{xmin:n[0],ymin:n[1],zmin:n[2],xmax:n[3],ymax:n[4],zmax:n[5],spatialReference:p.Z.WGS84}}}}]);
//# sourceMappingURL=3838.097edc59.chunk.js.map