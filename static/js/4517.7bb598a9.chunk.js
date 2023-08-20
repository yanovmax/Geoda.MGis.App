"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[4517],{82582:function(e,t,r){r.d(t,{dp:function(){return o},yZ:function(){return a}});var n=r(68860),i=96;function a(e,t){var r=t||e.extent,a=e.width,o=(0,n.c9)(r&&r.spatialReference);return r&&a?r.width/a*o*n.hd*i:0}function o(e,t){return e/((0,n.c9)(t)*n.hd*i)}},87072:function(e,t,r){function n(e){var t,r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?a(e,t.floorInfo.floorField):null}function a(e,t){if(null===e||void 0===e||!e.length)return null;var r=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{c:function(){return n},f:function(){return i}})},58132:function(e,t,r){r.d(t,{FN:function(){return o},QV:function(){return a},ac:function(){return s}});var n=r(37762),i=r(25265);function a(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||(!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!u(e,t))}function o(e,t,r){return!!e.some((function(e){var t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r))||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE}))||!u(e,t)}function u(e,t){if(!e||!e.length||null==t)return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;var i,a=0,o=r.length,u=(0,n.Z)(e);try{for(u.s();!(i=u.n()).done;){for(var s=i.value.id;a<o&&r[a]!==s;)a++;if(a>=o)return!1}}catch(l){u.e(l)}finally{u.f()}return!0}function s(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}},83978:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(15671),i=r(43144),a=r(11752),o=r(61120),u=r(60136),s=r(29388),l=r(27366),c=(r(32718),r(25243),r(63780),r(93169),r(10064),r(69912)),f=r(80613),p=r(82022),d=r(8548),y=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"doRender",value:function(e){e.drawPhase===f.jx.HIGHLIGHT&&(0,a.Z)((0,o.Z)(r.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){if(this.attributeView.update(),this.children.some((function(e){return e.hasData}))){this.attributeView.bindTextures(e.context),(0,a.Z)((0,o.Z)(r.prototype),"renderChildren",this).call(this,e);var t=e.painter.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(d.lk.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}}}]),r}(p.Z),h=y=(0,l._)([(0,c.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],y)},84848:function(e,t,r){r.d(t,{VF:function(){return de},Uf:function(){return pe}});var n=r(1413),i=r(93433),a=r(29439),o=r(37762),u=r(74165),s=r(15861),l=r(15671),c=r(43144),f=r(60136),p=r(29388),d=r(27366),y=r(52639),h=r(7138),v=r(63780),m=r(40281),b=r(10064),g=r(42537),x=r(93169),w=r(77427),Z=r(66978),I=r(94172),k=r(68860),_=r(49861),S=r(25243),F=r(69912),C=r(53866),O=r(82582),R=r(37270),E=r(87072);function V(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function j(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var t=0,r=0,n=0;n<e.length;n++){var i=e[n].size;"number"==typeof i&&(t+=i,r++)}return t/r}(e.stops):t}function N(e,t){if(!t)return e;var r=t.filter((function(e){return"size"===e.type})).map((function(t){var r=t.maxSize,n=t.minSize;return(j(r,e)+j(n,e))/2})),n=0,i=r.length;if(0===i)return e;for(var a=0;a<i;a++)n+=r[a];var o=Math.floor(n/i);return Math.max(o,e)}function P(e){var t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;var n="visualVariables"in t?N(r,t.visualVariables):r;if("simple"===t.type)return V(n,t.symbol);if("unique-value"===t.type){var i,a=n;return null!==(i=t.uniqueValueInfos)&&void 0!==i&&i.forEach((function(e){a=V(a,e.symbol)})),a}if("class-breaks"===t.type){var o=n;return t.classBreakInfos.forEach((function(e){o=V(o,e.symbol)})),o}return"dot-density"===t.type||t.type,n}var G=r(76200),T=r(91340),M=r(23084),A=r(76672),L=r(77981),U=r(58132),H=function(e){return e.spatialReference.wkid||JSON.stringify(e.spatialReference)};function J(e,t){var r=e.toJSON(),n=r.dpi,i=r.gdbVersion,a=r.geometry,o=r.geometryPrecision,u=r.height,s=r.layerOption,l=r.mapExtent,c=r.maxAllowableOffset,f=r.returnFieldName,p=r.returnGeometry,d=r.returnUnformattedValues,y=r.returnZ,h=r.spatialReference,v=r.timeExtent,m=r.tolerance,b=r.width,g=q(e),x=g.dynamicLayers,w=g.layerDefs,Z=g.layerIds,I=t&&null!=t.geometry?t.geometry:null,k={geometryPrecision:o,maxAllowableOffset:c,returnFieldName:f,returnGeometry:p,returnUnformattedValues:d,returnZ:y,tolerance:m},_=I&&I.toJSON()||a;if(k.imageDisplay="".concat(b,",").concat(u,",").concat(n),i&&(k.gdbVersion=i),_&&(delete _.spatialReference,k.geometry=JSON.stringify(_),k.geometryType=(0,L.Ji)(_)),h?k.sr=h.wkid||JSON.stringify(h):_&&_.spatialReference?k.sr=H(_):l&&l.spatialReference&&(k.sr=H(l)),k.time=v?[v.start,v.end].join(","):null,l){var S=l.xmin,F=l.ymin,C=l.xmax,O=l.ymax;k.mapExtent="".concat(S,",").concat(F,",").concat(C,",").concat(O)}return w&&(k.layerDefs=w),x&&!w&&(k.dynamicLayers=x),k.layers="popup"===s?"visible":s,Z&&!x&&(k.layers+=":".concat(Z.join(","))),k}function q(e){var t,r=e.mapExtent,n=e.floors,i=e.width,a=e.sublayers,u=e.layerIds,s=e.layerOption,l=e.gdbVersion,c=null===a||void 0===a||null===(t=a.find((function(e){return null!=e.layer})))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,f="popup"===s,p={},d=(0,O.yZ)({extent:r,width:i,spatialReference:null===r||void 0===r?void 0:r.spatialReference}),y=[];if(null!==a&&void 0!==a&&a.forEach((function e(t){var r=0===d,n=0===t.minScale||d<=t.minScale,i=0===t.maxScale||d>=t.maxScale;if(t.visible&&(r||n&&i))if(t.sublayers)t.sublayers.forEach(e);else{if(!1===(null===u||void 0===u?void 0:u.includes(t.id))||f&&(!t.popupTemplate||!t.popupEnabled))return;y.unshift(t)}})),a&&!y.length)p.layerIds=[];else{var h=(0,U.FN)(y,c,l),v=y.map((function(e){var t=(0,E.f)(n,e);return e.toExportImageJSON(t)}));if(h)p.dynamicLayers=JSON.stringify(v);else{if(a){var m=y.map((function(e){return e.id}));u&&(m=m.filter((function(e){return u.includes(e)}))),p.layerIds=m}else(null===u||void 0===u?void 0:u.length)&&(p.layerIds=u);var b=function(e,t){var r=!(null===e||void 0===e||!e.length),n=t.filter((function(e){return null!=e.definitionExpression||r&&null!=e.floorInfo}));return n.length?n.map((function(t){var r=(0,E.f)(e,t),n=(0,A._)(r,t.definitionExpression);return{id:t.id,definitionExpression:null!==n&&void 0!==n?n:void 0}})):null}(n,y);if(null!=b&&b.length){var g,x={},w=(0,o.Z)(b);try{for(w.s();!(g=w.n()).done;){var Z=g.value;Z.definitionExpression&&(x[Z.id]=Z.definitionExpression)}}catch(I){w.e(I)}finally{w.f()}Object.keys(x).length&&(p.layerDefs=JSON.stringify(x))}}}return p}var Q,z=r(59486),B=r(62044),D=r(46784),K=r(78952),W=Q=function(e){(0,f.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,l.Z)(this,r),(n=t.call(this,e)).dpi=96,n.floors=null,n.gdbVersion=null,n.geometry=null,n.geometryPrecision=null,n.height=400,n.layerIds=null,n.layerOption="top",n.mapExtent=null,n.maxAllowableOffset=null,n.returnFieldName=!0,n.returnGeometry=!1,n.returnM=!1,n.returnUnformattedValues=!0,n.returnZ=!1,n.spatialReference=null,n.sublayers=null,n.timeExtent=null,n.tolerance=null,n.width=400,n}return(0,c.Z)(r,null,[{key:"from",value:function(e){return(0,S.TJ)(Q,e)}}]),r}(D.wq);(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],W.prototype,"dpi",void 0),(0,d._)([(0,_.Cb)()],W.prototype,"floors",void 0),(0,d._)([(0,_.Cb)({type:String,json:{write:!0}})],W.prototype,"gdbVersion",void 0),(0,d._)([(0,_.Cb)({types:z.qM,json:{read:L.im,write:!0}})],W.prototype,"geometry",void 0),(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],W.prototype,"geometryPrecision",void 0),(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],W.prototype,"height",void 0),(0,d._)([(0,_.Cb)({type:[Number],json:{write:!0}})],W.prototype,"layerIds",void 0),(0,d._)([(0,_.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],W.prototype,"layerOption",void 0),(0,d._)([(0,_.Cb)({type:C.Z,json:{write:!0}})],W.prototype,"mapExtent",void 0),(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],W.prototype,"maxAllowableOffset",void 0),(0,d._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],W.prototype,"returnFieldName",void 0),(0,d._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],W.prototype,"returnGeometry",void 0),(0,d._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],W.prototype,"returnM",void 0),(0,d._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],W.prototype,"returnUnformattedValues",void 0),(0,d._)([(0,_.Cb)({type:Boolean,json:{write:!0}})],W.prototype,"returnZ",void 0),(0,d._)([(0,_.Cb)({type:K.Z,json:{write:!0}})],W.prototype,"spatialReference",void 0),(0,d._)([(0,_.Cb)()],W.prototype,"sublayers",void 0),(0,d._)([(0,_.Cb)({type:B.Z,json:{write:!0}})],W.prototype,"timeExtent",void 0),(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],W.prototype,"tolerance",void 0),(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],W.prototype,"width",void 0);var X=W=Q=(0,d._)([(0,F.j)("esri.rest.support.IdentifyParameters")],W),Y=r(38511),$=r(31201),ee=r(27823),te=function(e){(0,f.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,l.Z)(this,r),(n=t.call(this,e)).displayFieldName=null,n.feature=null,n.layerId=null,n.layerName=null,n}return(0,c.Z)(r,[{key:"readFeature",value:function(e,t){return y.Z.fromJSON({attributes:(0,n.Z)({},t.attributes),geometry:(0,n.Z)({},t.geometry)})}},{key:"writeFeature",value:function(e,t){if(e){var r=e.attributes,i=e.geometry;r&&(t.attributes=(0,n.Z)({},r)),null!=i&&(t.geometry=i.toJSON(),t.geometryType=ee.P.toJSON(i.type))}}}]),r}(D.wq);(0,d._)([(0,_.Cb)({type:String,json:{write:!0}})],te.prototype,"displayFieldName",void 0),(0,d._)([(0,_.Cb)({type:y.Z})],te.prototype,"feature",void 0),(0,d._)([(0,Y.r)("feature",["attributes","geometry"])],te.prototype,"readFeature",null),(0,d._)([(0,$.c)("feature")],te.prototype,"writeFeature",null),(0,d._)([(0,_.Cb)({type:Number,json:{write:!0}})],te.prototype,"layerId",void 0),(0,d._)([(0,_.Cb)({type:String,json:{write:!0}})],te.prototype,"layerName",void 0);var re=te=(0,d._)([(0,F.j)("esri.rest.support.IdentifyResult")],te);function ne(e,t,r){return ie.apply(this,arguments)}function ie(){return ie=(0,s.Z)((0,u.Z)().mark((function e(t,r,i){var a,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(r=oe(r)).geometry?[r.geometry]:[],o=(0,M.en)(t),e.abrupt("return",(o.path+="/identify",(0,T.aX)(a).then((function(e){var t=J(r,{geometry:e&&e[0]}),a=(0,M.cv)((0,n.Z)((0,n.Z)({},o.query),{},{f:"json"},t)),u=(0,M.lA)(a,i);return(0,G.default)(o.path,u).then(ae).then((function(e){return ue(e,r.sublayers)}))}))));case 2:case"end":return e.stop()}}),e)}))),ie.apply(this,arguments)}function ae(e){var t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((function(e){return re.fromJSON(e)})),t}function oe(e){return X.from(e)}function ue(e,t){if(null===t||void 0===t||!t.length)return e;var r=new Map;t.forEach((function e(t){r.set(t.id,t),t.sublayers&&t.sublayers.forEach(e)}));var n,i=(0,o.Z)(e.results);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.feature.sourceLayer=r.get(a.layerId)}}catch(u){i.e(u)}finally{i.f()}return e}var se=r(819),le=r(16072),ce=r(24405),fe=null;function pe(e,t){return"tile"===t.type||"map-image"===t.type}var de=function(e){(0,f.Z)(n,e);var t=(0,p.Z)(n);function n(e){var r;return(0,l.Z)(this,n),(r=t.call(this,e))._featuresResolutions=new WeakMap,r.highlightGraphics=null,r.highlightGraphicUpdated=null,r.updateHighlightedFeatures=(0,Z.Ds)(function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.destroyed||r.updatingHandles.addPromise(r._updateHighlightedFeaturesGeometries(t).catch((function(){})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r}return(0,c.Z)(n,[{key:"initialize",value:function(){var e=this,t=function(t){e.updatingHandles.addPromise(e._updateHighlightedFeaturesSymbols(t).catch((function(){}))),e.updateHighlightedFeatures(e._highlightGeometriesResolution)};this.addHandles([(0,I.on)((function(){return e.highlightGraphics}),"change",(function(e){return t(e.added)}),{onListenerAdd:function(e){return t(e)}})])}},{key:"fetchPopupFeatures",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r){var n,i,a,o,s,l,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.layerView,o=a.layer,s=a.view.scale,t){e.next=3;break}throw new b.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:o});case 3:if((l=ye(o.sublayers,s,r)).length){e.next=6;break}return e.abrupt("return",[]);case 6:return e.next=8,ve(o,l);case 8:if(c=e.sent,(null===(n=null===(i=o.capabilities)||void 0===i||null===(i=i.operations)||void 0===i?void 0:i.supportsIdentify)||void 0===n||n)&&o.version>=10.5||c){e.next=11;break}throw new b.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:o});case 11:return e.abrupt("return",c?this._fetchPopupFeaturesUsingQueries(t,l,r):this._fetchPopupFeaturesUsingIdentify(t,l,r));case 12:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"clearHighlights",value:function(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}},{key:"highlight",value:function(e){var t,r=this.highlightGraphics;if(!r)return{remove:function(){}};var n=null;if(e instanceof y.Z?n=[e]:m.Z.isCollection(e)&&e.length>0?n=e.toArray():Array.isArray(e)&&e.length>0&&(n=e),!(n=null===(t=n)||void 0===t?void 0:t.filter(v.pC))||!n.length)return(0,g.kB)();var i,a=(0,o.Z)(n);try{for(a.s();!(i=a.n()).done;){var u=i.value,s=u.sourceLayer;null!=s&&"geometryType"in s&&"point"===s.geometryType&&(u.visible=!1)}}catch(l){a.e(l)}finally{a.f()}return r.addMany(n),{remove:function(){var e;r.removeMany(null!==(e=n)&&void 0!==e?e:[])}}}},{key:"_updateHighlightedFeaturesSymbols",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var n,i,a,l,c,f;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.layerView.view,i=this.highlightGraphics,a=this.highlightGraphicUpdated,!i||!a){e.next=18;break}l=(0,o.Z)(t),e.prev=3,f=(0,u.Z)().mark((function e(){var t,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.value,o=t.sourceLayer&&"renderer"in t.sourceLayer&&t.sourceLayer.renderer,t.sourceLayer&&"geometryType"in t.sourceLayer&&"point"===t.sourceLayer.geometryType&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(t).then(function(){var e=(0,s.Z)((0,u.Z)().mark((function e(s){var l,c,f;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s||(s=new le.Z),c=null,f="visualVariables"in o?null===(l=o.visualVariables)||void 0===l?void 0:l.find((function(e){return"size"===e.type})):void 0,e.t0=f,!e.t0){e.next=11;break}if(e.t1=fe,e.t1){e.next=10;break}return e.next=9,Promise.resolve().then(r.bind(r,56011));case 9:fe=e.sent.getSize;case 10:c=fe(f,t,{view:n.type,scale:n.scale,shape:"simple-marker"===s.type?s.style:null});case 11:c||(c="width"in s&&"height"in s&&null!=s.width&&null!=s.height?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(t)&&(t.symbol=new le.Z({style:"square",size:c,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),a(t,"symbol"),t.visible=!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})),l.s();case 6:if((c=l.n()).done){e.next=10;break}return e.delegateYield(f(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),l.e(e.t1);case 15:return e.prev=15,l.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[3,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_updateHighlightedFeaturesGeometries",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var r,n,s,l,c,f,p,d,y,h,v,m,b,g,x,Z,I,k,_,S,F;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layerView,n=r.layer,s=r.view,l=this.highlightGraphics,c=this.highlightGraphicUpdated,this._highlightGeometriesResolution=t,c&&null!==l&&void 0!==l&&l.length&&n.capabilities.operations.supportsQuery){e.next=3;break}return e.abrupt("return");case 3:f=this._getTargetResolution(t),p=new Map,d=(0,o.Z)(l);try{for(d.s();!(y=d.n()).done;)h=y.value,(!this._featuresResolutions.has(h)||this._featuresResolutions.get(h)>f)&&(v=h.sourceLayer,(0,w.s1)(p,v,(function(){return new Map})).set(h.getObjectId(),h))}catch(u){d.e(u)}finally{d.f()}return m=Array.from(p,(function(e){var t=(0,a.Z)(e,2),r=t[0],n=t[1],o=r.createQuery();return o.objectIds=(0,i.Z)(n.keys()),o.outFields=[r.objectIdField],o.returnGeometry=!0,o.maxAllowableOffset=f,o.outSpatialReference=s.spatialReference,r.queryFeatures(o)})),e.next=9,Promise.all(m);case 9:if(b=e.sent,!this.destroyed){g=(0,o.Z)(b);try{for(g.s();!(x=g.n()).done;){Z=x.value.features,I=(0,o.Z)(Z);try{for(I.s();!(k=I.n()).done;)_=k.value,S=_.sourceLayer,(F=p.get(S).get(_.getObjectId()))&&l.includes(F)&&(F.geometry=_.geometry,c(F,"geometry"),this._featuresResolutions.set(F,f))}catch(u){I.e(u)}finally{I.f()}}}catch(u){g.e(u)}finally{g.f()}}case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getTargetResolution",value:function(e){var t=e*(0,k.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}},{key:"_fetchPopupFeaturesUsingIdentify",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r,n){var i,a,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._createIdentifyParameters(t,r,n);case 2:if(null!=(i=e.sent)){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,ne(this.layerView.layer.parsedUrl,i);case 7:return a=e.sent,o=a.results,e.abrupt("return",o.map((function(e){return e.feature})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_createIdentifyParameters",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r,n){var i,a,o,s,l,c,f,p,d,y,h,v,m;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layerView,a=i.floors,o=i.layer,s=i.timeExtent,l=i.view,c=l.spatialReference,f=l.scale,p=null!=n?n.event:null,r.length){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,Promise.all(r.map((function(e){return e.sublayer.load().catch((function(){}))})));case 5:return d=Math.min((0,x.Z)("mapservice-popup-identify-max-tolerance"),o.allSublayers.reduce((function(e,t){return t.renderer?P({renderer:t.renderer,event:p}):e}),2)),y=this.createFetchPopupFeaturesQueryGeometry(t,d),h=(0,O.dp)(f,c),v=Math.round(y.width/h),m=new C.Z({xmin:y.center.x-h*v,ymin:y.center.y-h*v,xmax:y.center.x+h*v,ymax:y.center.y+h*v,spatialReference:y.spatialReference}),e.abrupt("return",new X({floors:a,gdbVersion:"gdbVersion"in o?o.gdbVersion:void 0,geometry:t,height:v,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:c,sublayers:o.sublayers,timeExtent:s,tolerance:d,width:v}));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_fetchPopupFeaturesUsingQueries",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t,r,n){var l,c,f,p,d,y=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.layerView,c=l.floors,f=l.timeExtent,p=null!=n?n.event:null,d=r.map(function(){var e=(0,s.Z)((0,u.Z)().mark((function e(r){var n,i,s,l,d,h,v,m,b,g,x,w,Z,I,k,_,S,F,C,O,V,j;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.sublayer,s=r.popupTemplate,e.next=3,i.load().catch((function(){}));case 3:if(!i.capabilities||i.capabilities.operations.supportsQuery){e.next=5;break}return e.abrupt("return",[]);case 5:return l=i.createQuery(),d=P({renderer:i.renderer,event:p}),h=y.createFetchPopupFeaturesQueryGeometry(t,d),v=new Set,e.next=11,Promise.all([(0,ce.e7)(i,s),null===(n=i.renderer)||void 0===n?void 0:n.collectRequiredFields(v,i.fieldsIndex)]);case 11:return m=e.sent,b=(0,a.Z)(m,1),g=b[0],(0,R.gd)(v,i.fieldsIndex,g),x=Array.from(v).sort(),l.geometry=h,l.outFields=x,l.timeExtent=f,c&&(w=c.clone(),null!=(Z=(0,E.f)(w,i))&&(l.where=l.where?"(".concat(l.where,") AND (").concat(Z,")"):Z)),I=y._getTargetResolution(h.width/d),e.next=20,he(s);case 20:return k=e.sent,(_="point"===i.geometryType||k&&k.arcadeUtils.hasGeometryOperations(s))||(l.maxAllowableOffset=I),e.next=25,i.queryFeatures(l);case 25:return S=e.sent,F=S.features,C=_?0:I,e.next=30,be(i,F);case 30:F=e.sent,O=(0,o.Z)(F);try{for(O.s();!(V=O.n()).done;)j=V.value,y._featuresResolutions.set(j,C)}catch(u){O.e(u)}finally{O.f()}return e.abrupt("return",F);case 34:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,(0,Z.as)(d);case 3:return e.abrupt("return",e.sent.reverse().reduce((function(e,t){return t.value?[].concat((0,i.Z)(e),(0,i.Z)(t.value)):e}),[]).filter(v.pC));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),n}(h.Z);function ye(e,t,r){var i,a=[];return(null!==(i=null===e||void 0===e?void 0:e.toArray())&&void 0!==i?i:[]).reverse().map((function e(i){var o=0===i.minScale||t<=i.minScale,u=0===i.maxScale||t>=i.maxScale;if(i.visible&&o&&u)if(i.sublayers)i.sublayers.forEach(e);else if(i.popupEnabled){var s=(0,ce.V5)(i,(0,n.Z)((0,n.Z)({},r),{},{defaultPopupTemplateEnabled:!1}));null!=s&&a.unshift({sublayer:i,popupTemplate:s})}})),a}function he(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((function(e){return"expression"===e.type}))?(0,se.LC)():Promise.resolve()}function ve(e,t){return me.apply(this,arguments)}function me(){return me=(0,s.Z)((0,u.Z)().mark((function e(t,r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(n=t.capabilities)||void 0===n||null===(n=n.operations)||void 0===n||!n.supportsQuery){e.next=2;break}return e.abrupt("return",!0);case 2:return e.prev=2,e.next=5,Promise.any(r.map((function(e){var t=e.sublayer;return t.load().then((function(){return t.capabilities.operations.supportsQuery}))})));case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])}))),me.apply(this,arguments)}function be(e,t){return ge.apply(this,arguments)}function ge(){return ge=(0,s.Z)((0,u.Z)().mark((function e(t,r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.renderer,e.t0=n&&"defaultSymbol"in n&&!n.defaultSymbol,!e.t0){e.next=11;break}if(!n.valueExpression){e.next=9;break}return e.next=6,Promise.all(r.map((function(e){return n.getSymbolAsync(e).then((function(t){return t?e:null}))}))).then((function(e){return e.filter((function(e){return null!=e}))}));case 6:e.t1=e.sent,e.next=10;break;case 9:e.t1=r.filter((function(e){return null!=n.getSymbol(e)}));case 10:r=e.t1;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)}))),ge.apply(this,arguments)}(0,d._)([(0,_.Cb)({constructOnly:!0})],de.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,d._)([(0,_.Cb)({constructOnly:!0})],de.prototype,"layerView",void 0),(0,d._)([(0,_.Cb)({constructOnly:!0})],de.prototype,"highlightGraphics",void 0),(0,d._)([(0,_.Cb)({constructOnly:!0})],de.prototype,"highlightGraphicUpdated",void 0),(0,d._)([(0,_.Cb)({constructOnly:!0})],de.prototype,"updatingHandles",void 0),de=(0,d._)([(0,F.j)("esri.views.layers.support.MapService")],de)},24405:function(e,t,r){r.d(t,{V5:function(){return l},e7:function(){return u}});var n=r(74165),i=r(93433),a=r(15861),o=r(37270);function u(e){return s.apply(this,arguments)}function s(){return s=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,u,s,l,c,f,p,d,y,h,v=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(u=v.length>1&&void 0!==v[1]?v[1]:t.popupTemplate)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,u.getRequiredFields(t.fieldsIndex);case 5:if(s=e.sent,l=u.lastEditInfoEnabled,c=t.objectIdField,f=t.typeIdField,p=t.globalIdField,d=t.relationships,!s.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!l){e.next=19;break}return e.next=16,(0,o.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return y=e.t0,h=(0,o.Q0)(t.fieldsIndex,[].concat((0,i.Z)(s),(0,i.Z)(y))),e.abrupt("return",(f&&h.push(f),h&&c&&null!==(r=t.fieldsIndex)&&void 0!==r&&r.has(c)&&!h.includes(c)&&h.push(c),h&&p&&null!==(a=t.fieldsIndex)&&void 0!==a&&a.has(p)&&!h.includes(p)&&h.push(p),d&&d.forEach((function(e){var r,n=e.keyField;h&&n&&(null===(r=t.fieldsIndex)||void 0===r?void 0:r.has(n))&&!h.includes(n)&&h.push(n)})),h));case 23:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},45008:function(e,t,r){r.d(t,{K:function(){return a}});r(59486);var n=r(68860),i=r(53866);function a(e,t,r){var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new i.Z,u=0;if("2d"===r.type)u=t*(null!==(a=r.resolution)&&void 0!==a?a:0);else if("3d"===r.type){var s=r.overlayPixelSizeInMapUnits(e),l=r.basemapSpatialReference;u=null==l||l.equals(r.spatialReference)?t*s:(0,n.c9)(l)/(0,n.c9)(r.spatialReference)}var c=e.x-u,f=e.y-u,p=e.x+u,d=e.y+u,y=r.spatialReference;return o.xmin=Math.min(c,p),o.ymin=Math.min(f,d),o.xmax=Math.max(c,p),o.ymax=Math.max(f,d),o.spatialReference=y,o}new i.Z}}]);
//# sourceMappingURL=4517.7bb598a9.chunk.js.map