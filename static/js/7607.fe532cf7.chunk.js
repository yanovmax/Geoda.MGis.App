"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[7607],{78084:function(e,t,r){r.d(t,{Z:function(){return h}});var a,s,i=r(15671),n=r(43144),o=r(93169),u=r(13005);(s=a||(a={}))[s.varint=0]="varint",s[s.fixed64=1]="fixed64",s[s.delimited=2]="delimited",s[s.fixed32=5]="fixed32",s[s.unknown=99]="unknown";var l=4294967296,c=new TextDecoder("utf-8"),f=(0,o.Z)("safari")||(0,o.Z)("ios")?6:(0,o.Z)("ff")?12:32,h=function(){function e(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t?t.byteLength:0;(0,i.Z)(this,e),this._tag=0,this._dataType=a.unknown,this._init(t,r,s,n)}return(0,n.Z)(e,[{key:"_init",value:function(e,t,r,a){this._data=e,this._dataView=t,this._pos=r,this._end=a}},{key:"asUnsafe",value:function(){return this}},{key:"clone",value:function(){return new e(this._data,this._dataView,this._pos,this._end)}},{key:"pos",value:function(){return this._pos}},{key:"move",value:function(e){this._pos=e}},{key:"nextTag",value:function(e){for(;;){if(this._pos===this._end)return!1;var t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}},{key:"next",value:function(){if(this._pos===this._end)return!1;var e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}},{key:"empty",value:function(){return this._pos>=this._end}},{key:"tag",value:function(){return this._tag}},{key:"getInt32",value:function(){return this._decodeVarint()}},{key:"getInt64",value:function(){return this._decodeVarint()}},{key:"getUInt32",value:function(){var e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}},{key:"getUInt64",value:function(){return this._decodeVarint()}},{key:"getSInt32",value:function(){var e=this.getUInt32();if(void 0!==e)return e>>>1^-(1&e)|0}},{key:"getSInt64",value:function(){return this._decodeSVarint()}},{key:"getBool",value:function(){var e=0!==this._data[this._pos];return this._skip(1),e}},{key:"getEnum",value:function(){return this._decodeVarint()}},{key:"getFixed64",value:function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*l;return this._skip(8),r}},{key:"getSFixed64",value:function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*l;return this._skip(8),r}},{key:"getDouble",value:function(){var e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}},{key:"getFixed32",value:function(){var e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}},{key:"getSFixed32",value:function(){var e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}},{key:"getFloat",value:function(){var e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}},{key:"getString",value:function(){var e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}},{key:"getBytes",value:function(){var e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}},{key:"getLength",value:function(){return this._getLengthUnsafe()}},{key:"processMessageWithArgs",value:function(e,t,r,a){var s=this.getMessage(),i=e(s,t,r,a);return s.release(),i}},{key:"processMessage",value:function(e){var t=this.getMessage(),r=e(t);return t.release(),r}},{key:"getMessage",value:function(){var t=this._getLength(),r=e.pool.acquire();return r._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),r}},{key:"release",value:function(){e.pool.release(this)}},{key:"dataType",value:function(){return this._dataType}},{key:"skip",value:function(){switch(this._dataType){case a.varint:this._decodeVarint();break;case a.fixed64:this._skip(8);break;case a.delimited:this._skip(this._getLength());break;case a.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}},{key:"skipLen",value:function(e){this._skip(e)}},{key:"_skip",value:function(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}},{key:"_decodeVarint",value:function(){var e=this._data,t=this._pos,r=0,a=0;if(this._end-t>=10)do{if(r|=127&(a=e[t++]),0==(128&a))break;if(r|=(127&(a=e[t++]))<<7,0==(128&a))break;if(r|=(127&(a=e[t++]))<<14,0==(128&a))break;if(r|=(127&(a=e[t++]))<<21,0==(128&a))break;if(r+=268435456*(127&(a=e[t++])),0==(128&a))break;if(r+=34359738368*(127&(a=e[t++])),0==(128&a))break;if(r+=4398046511104*(127&(a=e[t++])),0==(128&a))break;if(r+=562949953421312*(127&(a=e[t++])),0==(128&a))break;if(r+=72057594037927940*(127&(a=e[t++])),0==(128&a))break;if(r+=0x8000000000000000*(127&(a=e[t++])),0==(128&a))break;throw new Error("Varint too long!")}while(0);else{for(var s=1;t!==this._end&&0!=(128&(a=e[t]));)++t,r+=(127&a)*s,s*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=a*s}return this._pos=t,r}},{key:"_decodeSVarint",value:function(){var e=this._data,t=this._pos,r=0,a=0,s=1&e[t];if(this._end-t>=10)do{if(r|=127&(a=e[t++]),0==(128&a))break;if(r|=(127&(a=e[t++]))<<7,0==(128&a))break;if(r|=(127&(a=e[t++]))<<14,0==(128&a))break;if(r|=(127&(a=e[t++]))<<21,0==(128&a))break;if(r+=268435456*(127&(a=e[t++])),0==(128&a))break;if(r+=34359738368*(127&(a=e[t++])),0==(128&a))break;if(r+=4398046511104*(127&(a=e[t++])),0==(128&a))break;if(r+=562949953421312*(127&(a=e[t++])),0==(128&a))break;if(r+=72057594037927940*(127&(a=e[t++])),0==(128&a))break;if(r+=0x8000000000000000*(127&(a=e[t++])),0==(128&a))break;throw new Error("Varint too long!")}while(0);else{for(var i=1;t!==this._end&&0!=(128&(a=e[t]));)++t,r+=(127&a)*i,i*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=a*i}return this._pos=t,s?-(r+1)/2:r/2}},{key:"_getLength",value:function(){if(this._dataType!==a.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}},{key:"_getLengthUnsafe",value:function(){return this.getUInt32()}},{key:"_toString",value:function(e,t,r){if((r=Math.min(this._end,r))-t>f){var a=e.subarray(t,r);return c.decode(a)}for(var s="",i="",n=t;n<r;++n){var o=e[n];128&o?i+="%"+o.toString(16):(s+=decodeURIComponent(i)+String.fromCharCode(o),i="")}return i.length&&(s+=decodeURIComponent(i)),s}},{key:"_toBytes",value:function(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}]),e}();h.pool=new u.Z(h,void 0,(function(e){e._data=null,e._dataView=null}))},91347:function(e,t,r){r.d(t,{G$:function(){return w},K9:function(){return U},wn:function(){return _}});var a=r(10064),s=r(78084),i=r(80457),n=r(70436),o=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],u=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],l=["upperLeft","lowerLeft"];function c(e){return e>=o.length?null:o[e]}function f(e){return e>=u.length?null:u[e]}function h(e){return e>=l.length?null:l[e]}function d(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,r){for(var a=e.asUnsafe(),s=t.createPointGeometry(r);a.next();)if(3===a.tag())for(var i=a.getUInt32(),n=a.pos()+i,o=0;a.pos()<n;)t.addCoordinatePoint(s,a.getSInt64(),o++);else a.skip();return s}function g(e,t,r){for(var a=e.asUnsafe(),s=t.createGeometry(r),i=2+(r.hasZ?1:0)+(r.hasM?1:0);a.next();)switch(a.tag()){case 2:for(var n=a.getUInt32(),o=a.pos()+n,u=0;a.pos()<o;)t.addLength(s,a.getUInt32(),u++);break;case 3:var l=a.getUInt32(),c=a.pos()+l,f=0;for(t.allocateCoordinates(s);a.pos()<c;)t.addCoordinate(s,a.getSInt64(),f),++f===i&&(f=0);break;default:a.skip()}return s}function y(e){for(var t=e.asUnsafe(),r=new i.Z,a="esriGeometryPoint";t.next();)switch(t.tag()){case 2:for(var s=t.getUInt32(),o=t.pos()+s;t.pos()<o;)r.lengths.push(t.getUInt32());break;case 3:for(var u=t.getUInt32(),l=t.pos()+u;t.pos()<l;)r.coords.push(t.getSInt64());break;case 1:a=n.A[t.getEnum()];break;default:t.skip()}return{queryGeometry:r,queryGeometryType:a}}function k(e){for(var t=e.asUnsafe();t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function _(e){for(var t=e.asUnsafe(),r={type:c(0)};t.next();)switch(t.tag()){case 1:r.name=t.getString();break;case 2:r.type=c(t.getEnum());break;case 3:r.alias=t.getString();break;case 4:r.sqlType=f(t.getEnum());break;case 5:default:t.skip();break;case 6:r.defaultValue=t.getString()}return r}function v(e){for(var t={},r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t.name=r.getString();break;case 2:t.isSystemMaintained=r.getBool();break;default:r.skip()}return t}function b(e,t,r,a){for(var s=t.createFeature(r),i=0;e.next();)switch(e.tag()){case 1:var n=a[i++].name;s.attributes[n]=e.processMessage(k);break;case 2:s.geometry=e.processMessageWithArgs(g,t,r);break;case 4:s.centroid=e.processMessageWithArgs(p,t,r);break;default:e.skip()}return s}function m(e){for(var t=[1,1,1,1],r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function T(e){for(var t=[0,0,0,0],r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function w(e){for(var t={originPosition:h(0)},r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t.originPosition=h(r.getEnum());break;case 2:t.scale=r.processMessage(m);break;case 3:t.translate=r.processMessage(T);break;default:r.skip()}return t}function I(e){for(var t={},r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t.shapeAreaFieldName=r.getString();break;case 2:t.shapeLengthFieldName=r.getString();break;case 3:t.units=r.getString();break;default:r.skip()}return t}function F(e,t){for(var r=t.createSpatialReference();e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function q(e,t){var r=t.createFeatureResult(),a=e.asUnsafe();r.geometryType=d(t,0);for(var s=!1;a.next();)switch(a.tag()){case 1:r.objectIdFieldName=a.getString();break;case 3:r.globalIdFieldName=a.getString();break;case 4:r.geohashFieldName=a.getString();break;case 5:r.geometryProperties=a.processMessage(I);break;case 7:r.geometryType=d(t,a.getEnum());break;case 8:r.spatialReference=a.processMessageWithArgs(F,t);break;case 10:r.hasZ=a.getBool();break;case 11:r.hasM=a.getBool();break;case 12:r.transform=a.processMessage(w);break;case 9:var i=a.getBool();r.exceededTransferLimit=i;break;case 13:t.addField(r,a.processMessage(_));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,a.processMessageWithArgs(b,t,r,r.fields));break;case 2:r.uniqueIdField=a.processMessage(v);break;default:a.skip()}return t.finishFeatureResult(r),r}function S(e,t){for(var r={},a=null;e.next();)switch(e.tag()){case 4:a=e.processMessageWithArgs(y);break;case 1:r.featureResult=e.processMessageWithArgs(q,t);break;default:e.skip()}return null!=a&&r.featureResult&&t.addQueryGeometry(r,a),r}function U(e,t){try{for(var r=new s.Z(new Uint8Array(e),new DataView(e)),i={};r.next();)2===r.tag()?i.queryResult=r.processMessageWithArgs(S,t):r.skip();return i}catch(o){throw new a.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:o})}}},70436:function(e,t,r){r.d(t,{A:function(){return f},J:function(){return h}});var a=r(37762),s=r(15671),i=r(43144),n=r(68860),o=r(92975),u=r(3182),l=r(6908),c=r(80457),f=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],h=function(){function e(t){(0,s.Z)(this,e),this._options=t,this.geometryTypes=f,this._coordinatePtr=0,this._vertexDimension=0}return(0,i.Z)(e,[{key:"createFeatureResult",value:function(){return new l.Z}},{key:"prepareFeatures",value:function(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}},{key:"finishFeatureResult",value:function(e){if(e&&e.features&&e.hasZ&&this._options.sourceSpatialReference&&e.spatialReference&&!(0,o.fS)(e.spatialReference,this._options.sourceSpatialReference)&&!e.spatialReference.vcsWkid){var t=(0,n._R)(this._options.sourceSpatialReference)/(0,n._R)(e.spatialReference);if(1!==t){var r,s=(0,a.Z)(e.features);try{for(s.s();!(r=s.n()).done;){var i=r.value;if((0,u.S6)(i))for(var l=i.geometry.coords,c=2;c<l.length;c+=3)l[c]*=t}}catch(f){s.e(f)}finally{s.f()}}}}},{key:"addFeature",value:function(e,t){e.features.push(t)}},{key:"createFeature",value:function(){return new u.u_}},{key:"createSpatialReference",value:function(){return{wkid:0}}},{key:"createGeometry",value:function(){return new c.Z}},{key:"addField",value:function(e,t){e.fields.push(t)}},{key:"allocateCoordinates",value:function(e){e.coords.length=e.lengths.reduce((function(e,t){return e+t}),0)*this._vertexDimension,this._coordinatePtr=0}},{key:"addCoordinate",value:function(e,t){e.coords[this._coordinatePtr++]=t}},{key:"addCoordinatePoint",value:function(e,t){e.coords.push(t)}},{key:"addLength",value:function(e,t){e.lengths.push(t)}},{key:"addQueryGeometry",value:function(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}},{key:"createPointGeometry",value:function(){return new c.Z}}]),e}()},27607:function(e,t,r){r.d(t,{C:function(){return i}});var a=r(37762),s=r(91347);function i(e,t){var r=(0,s.K9)(e,t),i=r.queryResult.featureResult,n=r.queryResult.queryGeometry,o=r.queryResult.queryGeometryType;if(i&&i.features&&i.features.length&&i.objectIdFieldName){var u,l=i.objectIdFieldName,c=(0,a.Z)(i.features);try{for(c.s();!(u=c.n()).done;){var f=u.value;f.attributes&&(f.objectId=f.attributes[l])}}catch(h){c.e(h)}finally{c.f()}}return i&&(i.queryGeometry=n,i.queryGeometryType=o),i}}}]);
//# sourceMappingURL=7607.fe532cf7.chunk.js.map