"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[9887],{29887:function(e,t,a){a.r(t),a.d(t,{applyEdits:function(){return A},isFeatureIdentifierArrayWithGlobalId:function(){return Z},isFeatureIdentifierArrayWithObjectId:function(){return F},isFeatureIdentifierWithGlobalId:function(){return w},isFeatureIdentifierWithObjectId:function(){return v},uploadAssets:function(){return q}});var r=a(37762),n=a(1413),s=a(74165),i=a(15861),o=a(52639),u=a(40281),l=a(10064),d=a(84652),p=a(32718),c=a(66978),h=a(35995),f=a(91340),y=a(56601),m=a(18277),b=a(37933);function g(e){return e&&null!=e.applyEdits}function v(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function F(e){return e.every(v)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function Z(e){return e.every(w)}function A(e,t,a){return I.apply(this,arguments)}function I(){return I=(0,i.Z)((0,s.Z)().mark((function e(t,a,r){var n,i,o,u,l,p,h,f,m,b=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.length>3&&void 0!==b[3]?b[3]:{},(0,y.lQ)(t)&&t.url?i=(0,y.jF)(t.url,t.layerId,"original-and-current-features"===n.returnServiceEditsOption):((i=(0,c.hh)()).promise.then((function(e){(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length)&&t.emit("edits",e)})),o={result:i.promise},t.emit("apply-edits",o)),e.prev=2,e.next=5,k(t,a,r,n);case 5:return l=e.sent,p=l.results,h=l.edits,f=function(e){return e.filter((function(e){return!e.error})).map(d.d9)},m={edits:h,addedFeatures:f(p.addFeatureResults),updatedFeatures:f(p.updateFeatureResults),deletedFeatures:f(p.deleteFeatureResults),addedAttachments:f(p.addAttachmentResults),updatedAttachments:f(p.updateAttachmentResults),deletedAttachments:f(p.deleteAttachmentResults),exceededTransferLimit:!1},e.abrupt("return",(null!==(u=p.editedFeatureResults)&&void 0!==u&&u.length&&(m.editedFeatures=p.editedFeatureResults),i.resolve(m),p));case 13:throw e.prev=13,e.t0=e.catch(2),i.reject(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,13]])}))),I.apply(this,arguments)}function k(e,t,a,r){return S.apply(this,arguments)}function S(){return(S=(0,i.Z)((0,s.Z)().mark((function e(t,a,r,n){var i,o,u,d,p,c,h,f,y;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:if(g(a)){e.next=4;break}throw new l.Z("".concat(t.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:t});case 4:if((0,b.ln)(t)){e.next=6;break}throw new l.Z("".concat(t.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:t});case 6:return e.next=8,x(t,r,n);case 8:if(h=e.sent,f=h.edits,y=h.options,!(null!==(i=f.addFeatures)&&void 0!==i&&i.length||null!==(o=f.updateFeatures)&&void 0!==o&&o.length||null!==(u=f.deleteFeatures)&&void 0!==u&&u.length||null!==(d=f.addAttachments)&&void 0!==d&&d.length||null!==(p=f.updateAttachments)&&void 0!==p&&p.length||null!==(c=f.deleteAttachments)&&void 0!==c&&c.length)){e.next=19;break}return e.t1=f,e.next=15,a.applyEdits(f,y);case 15:e.t2=e.sent,e.t0={edits:e.t1,results:e.t2},e.next=20;break;case 19:e.t0={edits:f,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,a){return E.apply(this,arguments)}function E(){return(E=(0,i.Z)((0,s.Z)().mark((function e(t,a,r){var i,o,d,c,h,f,y;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a&&(a.addFeatures||a.updateFeatures||a.deleteFeatures),o=a&&(a.addAttachments||a.updateAttachments||a.deleteAttachments),d=null!=t.infoFor3D,a&&(i||o)){e.next=3;break}throw new l.Z("".concat(t.type,"-layer:missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");case 3:if((c=(0,b.S1)(t)).data.isVersioned||null===r||void 0===r||!r.gdbVersion){e.next=6;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");case 6:if(c.editing.supportsRollbackOnFailure||null===r||void 0===r||!r.rollbackOnFailureEnabled){e.next=8;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");case 8:if(c.editing.supportsGlobalId||null===r||void 0===r||!r.globalIdUsed){e.next=10;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");case 10:if(c.editing.supportsGlobalId||!o){e.next=12;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");case 12:if(null!==r&&void 0!==r&&r.globalIdUsed||!o){e.next=14;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");case 14:if(null!=(h=(0,n.Z)({},r)).rollbackOnFailureEnabled||c.editing.supportsRollbackOnFailure||(h.rollbackOnFailureEnabled=!0),h.rollbackOnFailureEnabled||"original-and-current-features"!==h.returnServiceEditsOption||(!1===h.rollbackOnFailureEnabled&&p.Z.getLogger("esri.layers.graphics.editingSupport").warn("".concat(t.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),h.rollbackOnFailureEnabled=!0),c.editing.supportsReturnServiceEditsInSourceSpatialReference||!h.returnServiceEditsInSourceSR){e.next=17;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");case 17:if(!h.returnServiceEditsInSourceSR||"original-and-current-features"===h.returnServiceEditsOption){e.next=19;break}throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");case 19:if((f=(0,n.Z)({},a)).addFeatures=a&&u.Z.isCollection(a.addFeatures)?a.addFeatures.toArray():f.addFeatures||[],f.updateFeatures=a&&u.Z.isCollection(a.updateFeatures)?a.updateFeatures.toArray():f.updateFeatures||[],f.deleteFeatures=a&&u.Z.isCollection(a.deleteFeatures)?a.deleteFeatures.toArray():f.deleteFeatures||[],!f.addFeatures.length||c.operations.supportsAdd){e.next=22;break}throw new l.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support adding features.");case 22:if(!f.updateFeatures.length||c.operations.supportsUpdate){e.next=24;break}throw new l.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support updating features.");case 24:if(!f.deleteFeatures.length||c.operations.supportsDelete){e.next=26;break}throw new l.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support deleting features.");case 26:if(f.addAttachments=f.addAttachments||[],f.updateAttachments=f.updateAttachments||[],f.deleteAttachments=f.deleteAttachments||[],f.addFeatures=f.addFeatures.map(T),f.updateFeatures=f.updateFeatures.map(T),f.addAssetFeatures=[],y=(null===r||void 0===r?void 0:r.globalIdUsed)||d,f.addFeatures.forEach((function(e){return L(e,t,y)})),f.updateFeatures.forEach((function(e){return j(e,t,y)})),f.deleteFeatures.forEach((function(e){return U(e,t,y)})),f.addAttachments.forEach((function(e){return G(e,t)})),f.updateAttachments.forEach((function(e){return G(e,t)})),e.t0=d,!e.t0){e.next=37;break}return e.next=37,C(f,t);case 37:return e.next=39,B(f);case 39:return e.t1=e.sent,e.t2=h,e.abrupt("return",{edits:e.t1,options:e.t2});case 42:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&null!=e.geometry){var r,n;if(e.geometry.hasZ&&!1===(null===(r=t.capabilities)||void 0===r?void 0:r.data.supportsZ))throw new l.Z("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(n=t.capabilities)||void 0===n?void 0:n.data.supportsM))throw new l.Z("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function O(e,t){var a;if("geometry"in e&&"mesh"===(null===(a=e.geometry)||void 0===a?void 0:a.type)&&e.geometry.vertexSpace.isGeoreferenced)throw new l.Z("".concat(t.type,"-layer:georeferenced-mesh-unsupported"),"Uploading georeferenced meshes to a layer is not supported.")}function L(e,t,a){R(e,t,a),O(e,t)}function U(e,t,a){R(e,t,a)}function j(e,t,a){R(e,t,a),O(e,t);var r=(0,b.S1)(t);if("geometry"in e&&null!=e.geometry&&(null===r||void 0===r||!r.editing.supportsGeometryUpdate))throw new l.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}function G(e,t){var a,r=e.feature,n=e.attachment;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(a=t.capabilities)||void 0===a||!a.editing.supportsUploadWithItemId)&&n.uploadId)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){var s=(0,h.sJ)(n.data);if(s&&!s.isBase64)throw new l.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function B(e){return W.apply(this,arguments)}function W(){return(W=(0,i.Z)((0,s.Z)().mark((function e(t){var a,r,n,i,o,u,l,d;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null!==(a=t.addFeatures)&&void 0!==a?a:[],i=null!==(r=t.updateFeatures)&&void 0!==r?r:[],o=n.concat(i).map((function(e){return e.geometry})),e.next=5,(0,f.aX)(o);case 5:return u=e.sent,l=n.length,d=i.length,e.abrupt("return",(u.slice(0,l).forEach((function(e,t){return n[t].geometry=e})),u.slice(l,l+d).forEach((function(e,t){return i[t].geometry=e})),t));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=new o.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function C(e,t){return D.apply(this,arguments)}function D(){return(D=(0,i.Z)((0,s.Z)().mark((function e(t,a){var n,i,o,u,d,p,c,h,f,y,b,g,v;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=a.infoFor3D){e.next=2;break}return e.abrupt("return");case 2:if(d=a.infoFor3D,(p=null!==(n=(0,m.S0)("model/gltf-binary",d.supportedFormats))&&void 0!==n?n:(0,m.Ow)("glb",d.supportedFormats))&&d.editFormats.includes(p)){e.next=5;break}throw new l.Z("".concat(a.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");case 5:null!==(i=t.addAssetFeatures)&&void 0!==i||(t.addAssetFeatures=[]),c=t.addAssetFeatures,h=(0,r.Z)(null!==(o=t.addFeatures)&&void 0!==o?o:[]);try{for(h.s();!(f=h.n()).done;)V(y=f.value)&&c.push(y)}catch(s){h.e(s)}finally{h.f()}b=(0,r.Z)(null!==(u=t.updateFeatures)&&void 0!==u?u:[]);try{for(b.s();!(g=b.n()).done;)V(v=g.value)&&c.push(v)}catch(s){b.e(s)}finally{b.f()}case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function q(e,t,a,r){if(!g(t))throw new l.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new l.Z("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}}}]);
//# sourceMappingURL=9887.896e6774.chunk.js.map