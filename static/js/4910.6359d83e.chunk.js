"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[4910],{80573:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(15671),i=n(43144),o=n(60136),a=n(29388),l=n(27366),s=n(7138),u=n(63780),p=n(11582),c=n(79056),f=n(46784),d=n(49861),y=(n(25243),n(93169),n(69912)),v=0,h=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).id="".concat(Date.now().toString(16),"-analysis-").concat(v++),i.title=null,i}return(0,i.Z)(n,[{key:"parent",get:function(){return this._get("parent")},set:function(e){var t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}},{key:"isEditable",get:function(){return this.requiredPropertiesForEditing.every(u.pC)}}]),n}((0,f.eC)((0,p.J)((0,c.IG)(s.Z))));(0,l._)([(0,d.Cb)({type:String,constructOnly:!0,clonable:!1})],h.prototype,"id",void 0),(0,l._)([(0,d.Cb)({type:String})],h.prototype,"title",void 0),(0,l._)([(0,d.Cb)({constructOnly:!0})],h.prototype,"type",void 0),(0,l._)([(0,d.Cb)({clonable:!1,value:null})],h.prototype,"parent",null),(0,l._)([(0,d.Cb)({readOnly:!0})],h.prototype,"isEditable",null),(0,l._)([(0,d.Cb)({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",void 0);var g=h=(0,l._)([(0,y.j)("esri.analysis.Analysis")],h)},96866:function(e,t,n){n.d(t,{B:function(){return v}});var r=n(74165),i=n(15861),o=n(1413),a=n(37762),l=n(80292),s=n(35995),u=n(71907),p=n(33397),c=n(25265),f=n(49861),d=n(22892),y=n(53283);function v(e){var t,n=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return function(t,r){var i,u=function(e,t,n){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,n){var r=(0,p.Oe)(t,n);return{type:String,read:function(e,t,n){var i=(0,y.r)(e,t,n);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer:function(t,i,a,u){if(!u||!u.resources)return"string"==typeof t?void(i[a]=(0,y.t)(t,u)):void(i[a]=t.write({},u));var p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),f=(0,y.t)(p,(0,o.Z)((0,o.Z)({},u),{},{verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),y.M.NO),v=r.type!==String&&(!(0,l.l)(this)||u&&u.origin&&this.originIdOf(n)>(0,c.M9)(u.origin)),m={object:this,propertyName:n,value:t,targetUrl:f,dest:i,targetPropertyName:a,context:u,params:e};u&&u.portalItem&&f&&!(0,s.YP)(f)?v?function(e){var t,n=e.context,r=e.targetUrl,i=e.params,a=e.value,l=e.dest,u=e.targetPropertyName;if(!n.portalItem)return;var p=n.portalItem.resourceFromPath(r),c=b(a,r,n),f=(0,d.B)(c),y=(0,s.Ml)(p.path),v=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;f===y?(n.resources&&g((0,o.Z)((0,o.Z)({},e),{},{resource:p,content:c,compress:v,updates:n.resources.toUpdate})),l[u]=r):h(e)}(m):function(e){var t=e.context,n=e.targetUrl,r=e.dest,i=e.targetPropertyName;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n),compress:!1}),r[i]=n)}(m):u&&u.portalItem&&(null==f||null!=(0,y.i)(f)||(0,s.jc)(f)||v)?h(m):i[a]=f}}}}(e,t,n);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":return{read:y.a.read,write:y.a.write}}}(e,t,r),v=(0,a.Z)(n);try{for(v.s();!(i=v.n()).done;){var m=i.value,Z=(0,f.CJ)(t,m,r);for(var _ in u)Z[_]=u[_]}}catch(w){v.e(w)}finally{v.f()}}}function h(e){var t,n,r,i=e.targetUrl,a=e.params,l=e.value,p=e.context,c=e.dest,f=e.targetPropertyName;if(p.portalItem){var v=(0,y.p)(i),h=null!==(t=null===v||void 0===v?void 0:v.filename)&&void 0!==t?t:(0,u.D)(),Z=null!==(n=null===a||void 0===a?void 0:a.prefix)&&void 0!==n?n:null===v||void 0===v?void 0:v.prefix,_=b(l,i,p),w=(0,s.v_)(Z,h),j="".concat(w,".").concat((0,d.B)(_)),I=p.portalItem.resourceFromPath(j);(0,s.jc)(i)&&p.resources&&p.resources.pendingOperations.push(function(e){return m.apply(this,arguments)}(i).then((function(e){I.path="".concat(w,".").concat((0,d.B)(e)),c[f]=I.itemRelativeUrl})).catch((function(){})));var x=null!==(r=null===a||void 0===a?void 0:a.compress)&&void 0!==r&&r;p.resources&&g((0,o.Z)((0,o.Z)({},e),{},{resource:I,content:_,compress:x,updates:p.resources.toAdd})),c[f]=I.itemRelativeUrl}}function g(e){var t=e.object,n=e.propertyName,r=e.updates,i=e.resource,o=e.content,a=e.compress;r.push({resource:i,content:o,compress:a,finish:function(e){!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(t,n,e)}})}function b(e,t,n){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(n))],{type:"application/json"})}function m(){return(m=(0,i.Z)((0,r.Z)().mark((function e(t){var i,o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(n,76200));case 2:return i=e.sent.default,e.next=5,i(t,{responseType:"blob"});case 5:return o=e.sent,a=o.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},80292:function(e,t,n){function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}n.d(t,{l:function(){return r}})},44910:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(74165),i=n(15861),o=n(15671),a=n(43144),l=n(60136),s=n(29388),u=n(27366),p=n(37762),c=n(80573);function f(e,t){return d(e)===d(t)}function d(e){if(null==e)return null;var t,n=null!=e.layer?e.layer.id:"";return null==(t=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid)?null:"o-".concat(n,"-").concat(t)}var y={json:{write:{writer:function(e,t){var n;null!=e&&null!=(null===(n=e.layer)||void 0===n?void 0:n.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};var v=n(7138),h=n(11582),g=n(46784),b=n(92026),m=n(49861),Z=(n(25243),n(63780),n(93169),n(69912)),_=n(96866),w=n(585),j=n(64575),I=function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).position=null,r.elevationInfo=null,r.feature=null,r}return(0,a.Z)(n,[{key:"equals",value:function(e){return(0,b._W)(this.position,e.position)&&(0,b._W)(this.elevationInfo,e.elevationInfo)&&f(this.feature,e.feature)}}]),n}((0,g.eC)((0,h.J)(v.Z)));(0,u._)([(0,m.Cb)({type:w.Z,json:{write:{isRequired:!0}}})],I.prototype,"position",void 0),(0,u._)([(0,m.Cb)({type:j.Z}),(0,_.B)()],I.prototype,"elevationInfo",void 0),(0,u._)([(0,m.Cb)(y)],I.prototype,"feature",void 0);var x=I=(0,u._)([(0,Z.j)("esri.analysis.LineOfSightAnalysisObserver")],I),C=function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).position=null,r.elevationInfo=null,r.feature=null,r}return(0,a.Z)(n,[{key:"equals",value:function(e){return(0,b._W)(this.position,e.position)&&(0,b._W)(this.elevationInfo,e.elevationInfo)&&f(this.feature,e.feature)}}]),n}((0,g.eC)(h.j));(0,u._)([(0,m.Cb)({type:w.Z}),(0,_.B)()],C.prototype,"position",void 0),(0,u._)([(0,m.Cb)({type:j.Z}),(0,_.B)()],C.prototype,"elevationInfo",void 0),(0,u._)([(0,m.Cb)(y)],C.prototype,"feature",void 0);var O=C=(0,u._)([(0,Z.j)("esri.analysis.LineOfSightAnalysisTarget")],C),k=n(40281),P=n(60354),R=n(94172),S=n(52587),E=n(41414);n(88152);function F(e){return e?z:L}function N(e,t){return function(e,t){return null!=t&&t.mode?t.mode:F(e).mode}(null!=e&&e.hasZ,t)}var z={mode:"absolute-height",offset:0},L={mode:"on-the-ground",offset:null};var U=k.Z.ofType(O),B=function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).type="line-of-sight",r.observer=null,r.extent=null,r}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles((0,R.YP)((function(){return e._computeExtent()}),(function(t){null!=t&&null!=t.pending||e._set("extent",null!=t?t.extent:null)}),R.tX))}},{key:"targets",get:function(){return this._get("targets")||new U},set:function(e){this._set("targets",(0,P.Z)(e,this.targets,U))}},{key:"spatialReference",get:function(){return null!=this.observer&&null!=this.observer.position?this.observer.position.spatialReference:null}},{key:"requiredPropertiesForEditing",get:function(){return[(0,b.yw)(this.observer,(function(e){return e.position}))]}},{key:"waitComputeExtent",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._computeExtent(),e.abrupt("return",null!=t?t.pending:Promise.resolve());case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_computeExtent",value:function(){var e=this.spatialReference;if(null==this.observer||null==this.observer.position||null==e)return null;var t,n=function(e){return"absolute-height"===N(e.position,e.elevationInfo)},r=this.observer.position,i=(0,E.al)(r.x,r.y,r.z,r.x,r.y,r.z),o=(0,p.Z)(this.targets);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(null!=a.position){var l=(0,S.projectOrLoad)(a.position,e);if(null!=l.pending)return{pending:l.pending,extent:null};if(null!=l.geometry){var s=l.geometry,u=s.x,c=s.y,f=s.z;(0,E.pp)(i,[u,c,f])}}}}catch(y){o.e(y)}finally{o.f()}var d=(0,E.HH)(i,e);return n(this.observer)&&this.targets.every(n)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}},{key:"clear",value:function(){this.observer=null,this.targets.removeAll()}}]),n}(c.Z);(0,u._)([(0,m.Cb)({type:["line-of-sight"]})],B.prototype,"type",void 0),(0,u._)([(0,m.Cb)({type:x,json:{read:!0,write:!0}})],B.prototype,"observer",void 0),(0,u._)([(0,m.Cb)({cast:P.R,type:U,nonNullable:!0,json:{read:!0,write:!0}})],B.prototype,"targets",null),(0,u._)([(0,m.Cb)({value:null,readOnly:!0})],B.prototype,"extent",void 0),(0,u._)([(0,m.Cb)({readOnly:!0})],B.prototype,"spatialReference",null),(0,u._)([(0,m.Cb)({readOnly:!0})],B.prototype,"requiredPropertiesForEditing",null);var q=B=(0,u._)([(0,Z.j)("esri.analysis.LineOfSightAnalysis")],B),A=n(97642),T=n(30651),J=n(6061),M=k.Z.ofType(O),H=function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;return(0,o.Z)(this,n),(r=t.call(this,e)).type="line-of-sight",r.operationalLayerType="LineOfSightLayer",r.analysis=new q,r.opacity=1,r}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;this.addHandles((0,R.YP)((function(){return e.analysis}),(function(t,n){null!=n&&n.parent===e&&(n.parent=null),null!=t&&(t.parent=e)}),R.tX))}},{key:"load",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"observer",get:function(){return(0,b.yw)(this.analysis,(function(e){return e.observer}))},set:function(e){(0,b.yw)(this.analysis,(function(t){return t.observer=e}))}},{key:"targets",get:function(){return null!=this.analysis?this.analysis.targets:new k.Z},set:function(e){var t;(0,P.Z)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}},{key:"fullExtent",get:function(){return null!=this.analysis?this.analysis.extent:null}},{key:"spatialReference",get:function(){return null!=this.analysis?this.analysis.spatialReference:null}},{key:"releaseAnalysis",value:function(e){this.analysis===e&&(this.analysis=new q)}}]),n}((0,J.q)((0,A.R)(T.Z)));(0,u._)([(0,m.Cb)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,u._)([(0,m.Cb)({type:["LineOfSightLayer"]})],H.prototype,"operationalLayerType",void 0),(0,u._)([(0,m.Cb)({type:x,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],H.prototype,"observer",null),(0,u._)([(0,m.Cb)({type:M,json:{read:!0,write:{ignoreOrigin:!0}}})],H.prototype,"targets",null),(0,u._)([(0,m.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],H.prototype,"analysis",void 0),(0,u._)([(0,m.Cb)({readOnly:!0})],H.prototype,"fullExtent",null),(0,u._)([(0,m.Cb)({readOnly:!0})],H.prototype,"spatialReference",null),(0,u._)([(0,m.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],H.prototype,"opacity",void 0),(0,u._)([(0,m.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0);var W=H=(0,u._)([(0,Z.j)("esri.layers.LineOfSightLayer")],H)},22892:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(35995);function i(e){return o[function(e){return e instanceof Blob?e.type:function(e){var t=(0,r.Ml)(e);return s[t]||a}(e.url)}(e)]||l}var o={},a="text/plain",l=o[a],s={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(var u in s)o[s[u]]=u}}]);
//# sourceMappingURL=4910.6359d83e.chunk.js.map