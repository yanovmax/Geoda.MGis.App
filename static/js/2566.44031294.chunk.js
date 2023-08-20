"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[2566],{34930:function(e,t,a){a.d(t,{Z:function(){return pe}});var n=a(74165),i=a(15861),r=a(15671),s=a(43144),o=a(60136),l=a(29388),u=a(27366),c=a(52639),d=a(7138),h=a(94172),f=a(49861),p=(a(25243),a(63780),a(93169),a(69912)),v=a(37762),m=a(17842);function y(e){return"constant"===e.kind?e.value[0]:e.values[e.values.length-1]}function _(e){var t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function g(e){if(!e.hasVisualVariables("size"))return{kind:"constant",value:[(0,m.F2)(e.trailWidth)]};var t,a=e.getVisualVariablesForType("size")[0],n=[],i=[];if(a.stops){var r,s=(0,v.Z)(a.stops);try{for(s.s();!(r=s.n()).done;){var o=r.value;n.push(o.value),i.push((0,m.F2)(o.size))}}catch(l){s.e(l)}finally{s.f()}t=a.stops.length}else n.push(a.minDataValue,a.maxDataValue),i.push((0,m.F2)(a.minSize),(0,m.F2)(a.maxSize)),t=2;return{kind:"ramp",stops:n,values:i,count:t}}function x(e){if(!e.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};var t,a=e.getVisualVariablesForType("opacity")[0],n=[],i=[],r=(0,v.Z)(a.stops);try{for(r.s();!(t=r.n()).done;){var s=t.value;n.push(s.value),i.push(s.opacity)}}catch(o){r.e(o)}finally{r.f()}return{kind:"ramp",stops:n,values:i,count:a.stops.length}}function w(e,t,a,n){switch(t){case"int":e.setUniform1iv(a,n);break;case"float":e.setUniform1fv(a,n);break;case"vec2":e.setUniform2fv(a,n);break;case"vec3":e.setUniform3fv(a,n);break;case"vec4":e.setUniform4fv(a,n)}}function k(e,t,a,n){"constant"===n.kind?w(e,a,"u_".concat(t),n.value):(w(e,"float","u_".concat(t,"_stops"),n.stops),w(e,a,"u_".concat(t,"_values"),n.values),e.setUniform1i("u_".concat(t,"_count"),n.count))}function b(e,t){return e===t||null!=e&&null!=t&&e.equals(t)}function S(e,t){if(!function(e,t){var a=!0;return(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=a&&e.collisions===t.collisions)&&e.density===t.density)&&e.interpolate===t.interpolate)&&e.lineCollisionWidth===t.lineCollisionWidth)&&e.lineSpacing===t.lineSpacing)&&e.maxTurnAngle===t.maxTurnAngle)&&e.minSpeedThreshold===t.minSpeedThreshold)&&e.segmentLength===t.segmentLength)&&e.smoothing===t.smoothing)&&e.velocityScale===t.velocityScale)&&e.verticesPerLine===t.verticesPerLine}(e.simulationSettings,t.simulationSettings))return!1;if(!b(e.timeExtent,t.timeExtent))return!1;var a=!0;return a=(a=(a=(a=(a=a&&e.loadImagery===t.loadImagery)&&e.createFlowMesh===t.createFlowMesh)&&e.color.kind===t.color.kind)&&e.opacity.kind===t.opacity.kind)&&e.size.kind===t.size.kind}var Z=a(66978),A=a(44070),D=a(8548),M=a(57808),R=a(52311),z=a(45412),F=a(61109),T=function(){function e(t){(0,r.Z)(this,e),this._params=t,this.animated=!1}return(0,s.Z)(e,[{key:"isCompatible",value:function(t){if(!(t instanceof e))return!1;if(!b(this._params.timeExtent,t._params.timeExtent))return!1;var a=!0;return a=(a=(a=a&&this._params.loadImagery===t._params.loadImagery)&&this._params.color.kind===t._params.color.kind)&&this._params.opacity.kind===t._params.opacity.kind}},{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,a){var i,r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.extent,r=t.size,(0,Z.k_)(a),e.next=4,this._params.loadImagery(i,r[0],r[1],this._params.timeExtent,a);case 4:return s=e.sent,e.abrupt("return",new U(s,{color:this._params.color,opacity:this._params.opacity}));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(e,t,a){var n=e.context,i=a.program;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(D.zi.ONE,D.zi.ONE_MINUS_SRC_ALPHA),n.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),n.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),k(i,"color","vec4",this._params.color),k(i,"opacity","float",this._params.opacity),n.bindVAO(a.vertexArray),n.drawArrays(D.MX.TRIANGLE_STRIP,0,4)}}]),e}(),P=new Map;P.set("a_position",0),P.set("a_texcoord",1);var I={geometry:[new F.G("a_position",2,D.g.UNSIGNED_SHORT,0,8),new F.G("a_texcoord",2,D.g.UNSIGNED_SHORT,4,8)]},C={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:P},U=function(){function e(t,a){(0,r.Z)(this,e),this._flowData=t,this._values=a}return(0,s.Z)(e,[{key:"attach",value:function(e){var t=e.context,a=this._flowData,n=a.width,i=a.height,r=A.f.createVertex(t,D.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,n,0,1,1,0,i,0,0,n,i,1,0])),s=new z.U(t,P,I,{geometry:r}),o=[];"ramp"===this._values.color.kind&&o.push("vvColor"),"ramp"===this._values.opacity.kind&&o.push("vvOpacity");for(var l=e.painter.materialManager.getProgram(C,o),u=1e6,c=-1e6,d=0;d<i;d++)for(var h=0;h<n;h++)if(0!==this._flowData.mask[d*n+h]){var f=this._flowData.data[2*(d*n+h)],p=this._flowData.data[2*(d*n+h)+1],v=Math.sqrt(f*f+p*p);u=Math.min(u,v),c=Math.max(c,v)}for(var m=new Uint8Array(4*n*i),y=0;y<i;y++)for(var _=0;_<n;_++)if(0!==this._flowData.mask[y*n+_]){var g=this._flowData.data[2*(y*n+_)],x=this._flowData.data[2*(y*n+_)+1],w=(Math.sqrt(g*g+x*x)-u)/(c-u);m[4*(y*n+_)]=255*w,m[4*(y*n+_)+1]=0,m[4*(y*n+_)+2]=0,m[4*(y*n+_)+3]=255}else m[4*(y*n+_)]=0,m[4*(y*n+_)+1]=0,m[4*(y*n+_)+2]=0,m[4*(y*n+_)+3]=0;var k=new R.X;k.internalFormat=D.VI.RGBA,k.wrapMode=D.e8.CLAMP_TO_EDGE,k.flipped=!0,k.width=n,k.height=i;var b=new M.x(t,k,m);this.vertexArray=s,this.program=l,this.texture=b,this.min=u,this.max=c,this._flowData=null}},{key:"detach",value:function(){this.vertexArray.dispose(),this.texture.dispose()}},{key:"ready",get:function(){return this.program.compiled}}]),e}(),E=function(){function e(t){(0,r.Z)(this,e),this._params=t}return(0,s.Z)(e,[{key:"animated",get:function(){return this._params.flowSpeed>0}},{key:"isCompatible",value:function(t){return t instanceof e&&S(this._params,t._params)}},{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,a){var i,r,s,o,l,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.extent,r=t.size,(0,Z.k_)(a),e.next=4,this._params.loadImagery(i,r[0],r[1],this._params.timeExtent,a);case 4:return s=e.sent,e.next=7,this._params.createFlowMesh("Particles",this._params.simulationSettings,s,a);case 7:return o=e.sent,l=o.vertexData,u=o.indexData,e.abrupt("return",new N(l,u,{color:this._params.color,opacity:this._params.opacity,size:this._params.size}));case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(e,t,a){var n=e.context,i=a.program;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(D.zi.ONE,D.zi.ONE_MINUS_SRC_ALPHA),n.useProgram(i),i.setUniform1f("u_time",t.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),k(i,"color","vec4",this._params.color),k(i,"opacity","float",this._params.opacity),k(i,"size","float",this._params.size),n.bindVAO(a.vertexArray),n.drawElements(D.MX.TRIANGLES,a.indexCount,D.g.UNSIGNED_INT,0)}}]),e}(),V=new Map;V.set("a_xyts0",0),V.set("a_xyts1",1),V.set("a_typeIdDurationSeed",2),V.set("a_extrudeInfo",3);var O={geometry:[new F.G("a_xyts0",4,D.g.FLOAT,0,64),new F.G("a_xyts1",4,D.g.FLOAT,16,64),new F.G("a_typeIdDurationSeed",4,D.g.FLOAT,32,64),new F.G("a_extrudeInfo",4,D.g.FLOAT,48,64)]},L={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:V},N=function(){function e(t,a,n){(0,r.Z)(this,e),this._vertexData=t,this._indexData=a,this._values=n}return(0,s.Z)(e,[{key:"attach",value:function(e){var t=e.context,a=A.f.createVertex(t,D.l1.STATIC_DRAW,this._vertexData),n=A.f.createIndex(t,D.l1.STATIC_DRAW,this._indexData),i=new z.U(t,V,O,{geometry:a},n),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");var s=e.painter.materialManager.getProgram(L,r);this.vertexArray=i,this.program=s,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}},{key:"detach",value:function(){this.vertexArray.dispose()}},{key:"ready",get:function(){return this.program.compiled}}]),e}(),G=function(){function e(t){(0,r.Z)(this,e),this._styles=t}return(0,s.Z)(e,[{key:"animated",get:function(){return this._styles.reduce((function(e,t){return e||t.animated}),!1)}},{key:"isCompatible",value:function(t){if(!(t instanceof e))return!1;if(this._styles.length!==t._styles.length)return!1;for(var a=this._styles.length,n=0;n<a;n++)if(!this._styles[n].isCompatible(t._styles[n]))return!1;return!0}},{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,a){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this._styles.map((function(e){return e.load(t,a)})));case 2:return i=e.sent,e.abrupt("return",new q(i));case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(e,t,a){for(var n=0;n<this._styles.length;n++)this._styles[n].render(e,t,a.resources[n])}}]),e}(),q=function(){function e(t){(0,r.Z)(this,e),this.resources=t}return(0,s.Z)(e,[{key:"attach",value:function(e){var t,a=(0,v.Z)(this.resources);try{for(a.s();!(t=a.n()).done;){t.value.attach(e)}}catch(n){a.e(n)}finally{a.f()}}},{key:"detach",value:function(){var e,t=(0,v.Z)(this.resources);try{for(t.s();!(e=t.n()).done;){e.value.detach()}}catch(a){t.e(a)}finally{t.f()}}},{key:"ready",get:function(){return this.resources.reduce((function(e,t){return e&&t.ready}),!0)}}]),e}(),W=function(){function e(t){(0,r.Z)(this,e),this._params=t}return(0,s.Z)(e,[{key:"animated",get:function(){return this._params.flowSpeed>0}},{key:"isCompatible",value:function(t){return t instanceof e&&S(this._params,t._params)}},{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,a){var i,r,s,o,l,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.extent,r=t.size,(0,Z.k_)(a),e.next=4,this._params.loadImagery(i,r[0],r[1],this._params.timeExtent,a);case 4:return s=e.sent,e.next=7,this._params.createFlowMesh("Streamlines",this._params.simulationSettings,s,a);case 7:return o=e.sent,l=o.vertexData,u=o.indexData,e.abrupt("return",new K(l,u,{color:this._params.color,opacity:this._params.opacity,size:this._params.size}));case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(e,t,a){var n=e.context,i=a.program;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(D.zi.ONE,D.zi.ONE_MINUS_SRC_ALPHA),n.useProgram(i),i.setUniform1f("u_time",t.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),k(i,"color","vec4",this._params.color),k(i,"opacity","float",this._params.opacity),k(i,"size","float",this._params.size),n.bindVAO(a.vertexArray),n.drawElements(D.MX.TRIANGLES,a.indexCount,D.g.UNSIGNED_INT,0)}}]),e}(),j=new Map;j.set("a_positionAndSide",0),j.set("a_timeInfo",1),j.set("a_extrude",2),j.set("a_speed",3);var H={geometry:[new F.G("a_positionAndSide",3,D.g.FLOAT,0,36),new F.G("a_timeInfo",3,D.g.FLOAT,12,36),new F.G("a_extrude",2,D.g.FLOAT,24,36),new F.G("a_speed",1,D.g.FLOAT,32,36)]},B={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:j},K=function(){function e(t,a,n){(0,r.Z)(this,e),this._vertexData=t,this._indexData=a,this._values=n}return(0,s.Z)(e,[{key:"attach",value:function(e){var t=e.context,a=A.f.createVertex(t,D.l1.STATIC_DRAW,this._vertexData),n=A.f.createIndex(t,D.l1.STATIC_DRAW,this._indexData),i=new z.U(t,j,H,{geometry:a},n),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");var s=e.painter.materialManager.getProgram(B,r);this.vertexArray=i,this.program=s,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}},{key:"detach",value:function(){this.vertexArray.dispose()}},{key:"ready",get:function(){return this.program.compiled}}]),e}();function X(e,t){var a=e.flowSpeed,n=e.trailLength,i=function(e){var t=y(g(e)),a=t,n=Math.max(t/2,5),i=Math.round((0,m.F2)(e.maxPathLength)/n)+1,r=e.density;return{smoothing:(0,m.F2)(e.smoothing),interpolate:!0,velocityScale:"flow-from"===e.flowRepresentation?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:n,maxTurnAngle:1,collisions:!0,lineCollisionWidth:a,lineSpacing:10,density:r}}(e),r=null,s={opacity:x(e),size:g(e)},o=function(e){if(!e.hasVisualVariables("color"))return{kind:"constant",value:_(e.color)};var t,a=e.getVisualVariablesForType("color")[0],n=[],i=[],r=(0,v.Z)(a.stops);try{for(r.s();!(t=r.n()).done;){var s=t.value;n.push(s.value),Array.prototype.push.apply(i,_(s.color))}}catch(o){r.e(o)}finally{r.f()}return{kind:"ramp",stops:n,values:i,count:a.stops.length}}(e);if("none"===e.background)s.color=o;else{"constant"===o.kind&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});var l={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};r=new T(l),s.color={kind:"constant",value:[.1,.1,.1,1]}}var u={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:n,flowSpeed:a,featheringSize:1,featheringOffset:.5,introFade:true,fadeToZero:true,decayRate:2.3,color:s.color,opacity:s.opacity,size:s.size},c="butt"===e.trailCap||y(g(e))<=4?new W(u):new E(u);return null!=r?new G([r,c]):c}var Y=a(55185),Q=a(93433),J=a(11752),$=a(61120),ee=a(23588),te=function(e){(0,o.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=t.apply(this,arguments))._visualState={time:0,dvsMat3:(0,ee.c)(),displayViewMat3:(0,ee.c)()},e}return(0,s.Z)(a,[{key:"dispose",value:function(){}},{key:"prepareState",value:function(e){var t=e.context;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(D.wb.EQUAL,0,255)}},{key:"draw",value:function(e,t){var a=e.requestRender,n=e.allowDelayedRender,i=t.displayData;if(null!=i&&("loaded"===i.state.name&&i.attach(e),"attached"===i.state.name)){var r=i.state.resources;!n||r.ready||null==a?(this._visualState.time=e.time/1e3,this._visualState.dvsMat3=t.transforms.dvs,this._visualState.displayViewMat3=e.state.displayViewMat3,i.flowStyle.render(e,this._visualState,r),i.flowStyle.animated&&null!=a&&a()):a()}}}]),a}(a(3886).Z),ae=a(80613),ne=function(e){(0,o.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=t.apply(this,arguments)).flowStyle=null,e}return(0,s.Z)(a,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"doRender",value:function(e){(0,J.Z)((0,$.Z)(a.prototype),"doRender",this).call(this,e)}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"flow",brushes:[te],target:function(){return t.children},drawPhase:ae.jx.MAP});return[].concat((0,Q.Z)((0,J.Z)((0,$.Z)(a.prototype),"prepareRenderPasses",this).call(this,e)),[n])}}]),a}(a(64510).Z),ie=(a(59486),a(32718)),re=a(16889),se=a(585),oe=function(){function e(t,a,n,i){(0,r.Z)(this,e),this.state={name:"created"},this.flowStyle=t,this.extent=a,this.size=n,this.pixelRatio=i}return(0,s.Z)(e,[{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,this.state={name:"loading",abortController:t},a={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.next=5,this.flowStyle.load(a,t.signal);case 5:i=e.sent,this.state={name:"loaded",resources:i};case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"attach",value:function(e){if("loaded"===this.state.name){var t=this.state.resources;t.attach(e),this.state={name:"attached",resources:t}}else ie.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.")}},{key:"detach",value:function(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}},{key:"update",value:function(e){return!!this.flowStyle.isCompatible(e.flowStyle)&&(!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0))}}]),e}(),le=a(22753),ue=function(e){(0,o.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=t.apply(this,arguments))._displayData=null,e}return(0,s.Z)(a,[{key:"displayData",get:function(){return this._displayData},set:function(e){this._displayData=e,this.requestRender()}},{key:"clear",value:function(){null!=this._displayData&&(this._displayData.detach(),this._displayData=null,this.requestRender())}},{key:"setTransform",value:function(e){var t=this.displayData;if(null!=t){var a=t.extent.xmin,n=t.extent.ymax,i=[0,0];e.toScreen(i,[a,n]);var r=(t.extent.xmax-t.extent.xmin)/t.size[0]/e.resolution,s=(0,re.Vl)(e.rotation),o=this.transforms.dvs;(0,le.k)(o,[-1,1,0]),(0,le.d)(o,o,[2/(e.size[0]*e.pixelRatio),-2/(e.size[1]*e.pixelRatio),1]),(0,le.h)(o,o,[i[0],i[1],0]),(0,le.r)(o,o,s),(0,le.d)(o,o,[r*e.pixelRatio,r*e.pixelRatio,1])}}},{key:"_createTransforms",value:function(){return{dvs:(0,ee.c)()}}}]),a}(a(87422).s),ce=a(53866),de=function(e){(0,o.Z)(a,e);var t=(0,l.Z)(a);function a(e){var n;return(0,r.Z)(this,a),(n=t.call(this,e))._flowDisplayObject=new ue,n._loading=null,n}return(0,s.Z)(a,[{key:"initialize",value:function(){this.flowContainer.addChild(this._flowDisplayObject)}},{key:"destroy",value:function(){this._clear(),this.flowContainer.removeAllChildren()}},{key:"updating",get:function(){return null!=this._loading}},{key:"update",value:function(e){var t=this,a=this.flowContainer.flowStyle;if(null!=a){var n=e.state,i=n.extent,r=n.rotation,s=n.resolution,o=n.pixelRatio,l=function(e,t){var a=new se.Z({x:(e.xmax+e.xmin)/2,y:(e.ymax+e.ymin)/2,spatialReference:e.spatialReference}),n=e.xmax-e.xmin,i=e.ymax-e.ymin,r=Math.abs(Math.cos((0,re.Vl)(t))),s=Math.abs(Math.sin((0,re.Vl)(t))),o=r*n+s*i,l=s*n+r*i,u=new ce.Z({xmin:a.x-o/2,ymin:a.y-l/2,xmax:a.x+o/2,ymax:a.y+l/2,spatialReference:e.spatialReference});return u.centerAt(a),u}(i,r);l.expand(1.15);var u=[Math.round((l.xmax-l.xmin)/s),Math.round((l.ymax-l.ymin)/s)],c=new oe(a,l,u,o);if(null!=this._loading){if(this._loading.update(c))return;this._loading.detach(),this._loading=null}null!=this._flowDisplayObject.displayData&&this._flowDisplayObject.displayData.update(c)||(c.load().then((function(){t._flowDisplayObject.clear(),t._flowDisplayObject.displayData=t._loading,t._loading=null}),(function(e){(0,Z.D_)(e)||(ie.Z.getLogger(t).error("A resource failed to load.",e),t._loading=null)})),this._loading=c)}else this._clear()}},{key:"_clear",value:function(){this._flowDisplayObject.clear(),null!=this._loading&&(this._loading.detach(),this._loading=null)}}]),a}(d.Z);(0,u._)([(0,f.Cb)()],de.prototype,"_loading",void 0),(0,u._)([(0,f.Cb)()],de.prototype,"flowContainer",void 0),(0,u._)([(0,f.Cb)()],de.prototype,"updating",null);var he=de=(0,u._)([(0,p.j)("esri.views.2d.engine.flow.FlowStrategy")],de);var fe=function(e){(0,o.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=t.apply(this,arguments))._loadImagery=function(t,a,n,i,r){return(0,Y.KK)(e.layer,t,a,n,i,r)},e._createFlowMesh=function(t,a,n,i){return e.layer.createFlowMesh({meshType:t,flowData:n,simulationSettings:a},{signal:i})},e.attached=!1,e.type="flow",e.timeExtent=null,e.redrawOrRefetch=(0,i.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._updateVisualization();case 1:case"end":return t.stop()}}),t)}))),e}return(0,s.Z)(a,[{key:"updating",get:function(){return!this.attached||this._strategy.updating}},{key:"attach",value:function(){var e=this,t=this.layer,a=function(){e._loadImagery=function(e,a,n,i,r){return(0,Y.KK)(t,e,a,n,i,r)},e._updateVisualization()};"multidimensionalDefinition"in t?this.addHandles((0,h.YP)((function(){return t.multidimensionalDefinition}),a)):this.addHandles([(0,h.YP)((function(){return t.mosaicRule}),a),(0,h.YP)((function(){return t.rasterFunction}),a),(0,h.YP)((function(){return t.definitionExpression}),a)]),this.container=new ne,this._strategy=new he({flowContainer:this.container}),this._updateVisualization()}},{key:"detach",value:function(){var e;this._strategy.destroy(),null!==(e=this.container)&&void 0!==e&&e.removeAllChildren(),this.container=null,this.removeHandles()}},{key:"update",value:function(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}},{key:"hitTest",value:function(e){return new c.Z({attributes:{},geometry:e.clone(),layer:this.layer})}},{key:"moveEnd",value:function(){}},{key:"doRefresh",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateVisualization",value:function(){var e=this.layer.renderer;if(null!=e&&"flow"===e.type){var t=X(e,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}}}]),a}(d.Z);(0,u._)([(0,f.Cb)()],fe.prototype,"_strategy",void 0),(0,u._)([(0,f.Cb)()],fe.prototype,"attached",void 0),(0,u._)([(0,f.Cb)()],fe.prototype,"container",void 0),(0,u._)([(0,f.Cb)()],fe.prototype,"layer",void 0),(0,u._)([(0,f.Cb)()],fe.prototype,"layerView",void 0),(0,u._)([(0,f.Cb)()],fe.prototype,"type",void 0),(0,u._)([(0,f.Cb)()],fe.prototype,"updating",null),(0,u._)([(0,f.Cb)()],fe.prototype,"timeExtent",void 0);var pe=fe=(0,u._)([(0,p.j)("esri.views.2d.engine.flow.FlowView2D")],fe)},57874:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(15671),i=a(43144),r=a(60136),s=a(29388),o=a(3886),l=a(8548),u=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),c=new Float32Array([0,92/255,230/255,1]),d={beaufort_ft:u,beaufort_m:u,beaufort_km:u,beaufort_mi:u,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:c,single_arrow:c,wind_speed:new Float32Array([0,0,0,1])},h=[0,20],f=function(e){(0,r.Z)(a,e);var t=(0,s.Z)(a);function a(){var e;return(0,n.Z)(this,a),(e=t.apply(this,arguments))._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}},e}return(0,i.Z)(a,[{key:"dispose",value:function(){}},{key:"prepareState",value:function(e){var t=e.context;t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(l.zi.ONE,l.zi.ONE_MINUS_SRC_ALPHA,l.zi.ONE,l.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp(l.xS.KEEP,l.xS.KEEP,l.xS.REPLACE)}},{key:"draw",value:function(e,t){if(null!=t.source&&0!==t.source.validPixelCount){var a=e.context,n=e.timeline;if(n.begin(this.name),a.setStencilFunction(l.wb.EQUAL,t.stencilRef,255),t.updateVectorFieldVAO(e),"scalar"===e.renderPass){var i=t.vaoData.scalar;i&&this._drawScalars(e,t,i.vao,i.elementCount)}else{var r=t.vaoData.magdir;r&&this._drawTriangles(e,t,r.vao,r.elementCount)}n.end(this.name)}}},{key:"_drawTriangles",value:function(e,t,a,n){var i=e.context,r=e.painter,s=e.requestRender,o=e.allowDelayedRender,u=t.symbolizerParameters,c=u.dataRange?["dataRange"]:[];"geographic"===u.rotationType&&c.push("rotationGeographic");var f=r.materialManager.getProgram(this._desc.magdir,c);if(!o||null==s||f.compiled){i.useProgram(f);var p=t.coordScale,v=t.opacity,m=t.transforms;f.setUniform2fv("u_coordScale",p),f.setUniform1f("u_opacity",v),f.setUniformMatrix3fv("u_dvsMat3",m.dvs);var y=u.style,_=u.dataRange,g=u.rotation,x=u.symbolPercentRange;f.setUniform4fv("u_colors",d[y]),f.setUniform2fv("u_dataRange",_||h),f.setUniform1f("u_rotation",g),f.setUniform2fv("u_symbolPercentRange",x);var w=this._getSymbolSize(e,t);f.setUniform2fv("u_symbolSize",w),i.bindVAO(a),i.drawElements(l.MX.TRIANGLES,n,l.g.UNSIGNED_INT,0)}else s()}},{key:"_drawScalars",value:function(e,t,a,n){var i=e.context,r=e.painter,s=e.requestRender,o=e.allowDelayedRender,u=t.symbolizerParameters,c=[];"wind_speed"===u.style?c.push("innerCircle"):u.dataRange&&c.push("dataRange"),"geographic"===u.rotationType&&c.push("rotationGeographic");var d=r.materialManager.getProgram(this._desc.scalar,c);if(!o||null==s||d.compiled){i.useProgram(d);var f=t.coordScale,p=t.opacity,v=t.transforms;d.setUniform2fv("u_coordScale",f),d.setUniform1f("u_opacity",p),d.setUniformMatrix3fv("u_dvsMat3",v.dvs);var m=u.dataRange,y=u.symbolPercentRange;d.setUniform2fv("u_dataRange",m||h),d.setUniform2fv("u_symbolPercentRange",y);var _=this._getSymbolSize(e,t);d.setUniform2fv("u_symbolSize",_),i.bindVAO(a),i.drawElements(l.MX.TRIANGLES,n,l.g.UNSIGNED_INT,0)}else s()}},{key:"_getSymbolSize",value:function(e,t){var a=t.key?Math.pow(2,e.displayLevel-t.key.level):t.resolution/e.state.resolution,n=t.symbolizerParameters.symbolTileSize;return[n/(Math.round((t.width-t.offset[0])/n)*n)/a,n/(Math.round((t.height-t.offset[1])/n)*n)/a]}}]),a}(o.Z)},60831:function(e,t,a){a.d(t,{F:function(){return y}});var n=a(29439),i=a(15671),r=a(43144),s=a(60136),o=a(29388),l=(a(93169),a(22753)),u=a(23588),c=a(15245),d=a(64145),h=a(87422),f=a(84319),p=a(44070),v=a(8548),m=a(45412),y=function(e){(0,s.Z)(a,e);var t=(0,o.Z)(a);function a(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,i.Z)(this,a),(e=t.call(this))._source=null,e._symbolizerParameters=null,e._vaoInvalidated=!0,e.coordScale=[1,1],e.height=null,e.key=null,e.offset=null,e.stencilRef=0,e.resolution=null,e.pixelRatio=1,e.x=0,e.y=0,e.rotation=0,e.rawPixelData=null,e.vaoData=null,e.width=null,e.source=n,e}return(0,r.Z)(a,[{key:"destroy",value:function(){var e,t;null!=this.vaoData&&(null!==(e=this.vaoData.magdir)&&void 0!==e&&e.vao.dispose(),null!==(t=this.vaoData.scalar)&&void 0!==t&&t.vao.dispose(),this.vaoData=null)}},{key:"symbolizerParameters",get:function(){return this._symbolizerParameters},set:function(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateVAO()}},{key:"invalidateVAO",value:function(){var e,t;this._vaoInvalidated||null==this.vaoData||(null!==(e=this.vaoData.magdir)&&void 0!==e&&e.vao.dispose(),null!==(t=this.vaoData.scalar)&&void 0!==t&&t.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}},{key:"updateVectorFieldVAO",value:function(e){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,null!=this.source&&null==this.vaoData)switch(this.symbolizerParameters.style){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":var t=(0,d.wF)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(e.context,t);this.vaoData={magdir:a};break;case"simple_scalar":var n=(0,d.K)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(e.context,n);this.vaoData={scalar:i};break;case"wind_speed":var r=(0,d.wF)(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(e.context,r),o=(0,d.K)(this.source,this.symbolizerParameters),l=this._createVectorFieldVAO(e.context,o);this.vaoData={magdir:s,scalar:l}}this.ready(),this.requestRender()}}},{key:"_createTransforms",value:function(){return{dvs:(0,u.c)()}}},{key:"setTransform",value:function(e){var t=(0,l.g)(this.transforms.dvs),a=e.toScreenNoRotation([0,0],[this.x,this.y]),i=(0,n.Z)(a,2),r=i[0],s=i[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,d=o*this.height,h=Math.PI*this.rotation/180;(0,l.h)(t,t,(0,c.f)(r,s)),(0,l.h)(t,t,(0,c.f)(u/2,d/2)),(0,l.r)(t,t,-h),(0,l.h)(t,t,(0,c.f)(-u/2,-d/2)),(0,l.l)(t,t,(0,c.f)(u,d)),(0,l.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"onAttach",value:function(){this.invalidateVAO()}},{key:"onDetach",value:function(){this.invalidateVAO()}},{key:"_createVectorFieldVAO",value:function(e,t){var a=t.vertexData,n=t.indexData,i=p.f.createVertex(e,v.l1.STATIC_DRAW,new Float32Array(a)),r=p.f.createIndex(e,v.l1.STATIC_DRAW,new Uint32Array(n)),s=(0,f.cM)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:v.g.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:v.g.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:v.g.FLOAT,normalized:!1}]});return{vao:new m.U(e,s.attributes,s.bufferLayouts,{geometry:i},r),elementCount:n.length}}}]),a}(h.s)},24405:function(e,t,a){a.d(t,{V5:function(){return u},e7:function(){return o}});var n=a(74165),i=a(93433),r=a(15861),s=a(37270);function o(e){return l.apply(this,arguments)}function l(){return l=(0,r.Z)((0,n.Z)().mark((function e(t){var a,r,o,l,u,c,d,h,f,p,v,m=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(o=m.length>1&&void 0!==m[1]?m[1]:t.popupTemplate)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,o.getRequiredFields(t.fieldsIndex);case 5:if(l=e.sent,u=o.lastEditInfoEnabled,c=t.objectIdField,d=t.typeIdField,h=t.globalIdField,f=t.relationships,!l.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!u){e.next=19;break}return e.next=16,(0,s.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return p=e.t0,v=(0,s.Q0)(t.fieldsIndex,[].concat((0,i.Z)(l),(0,i.Z)(p))),e.abrupt("return",(d&&v.push(d),v&&c&&null!==(a=t.fieldsIndex)&&void 0!==a&&a.has(c)&&!v.includes(c)&&v.push(c),v&&h&&null!==(r=t.fieldsIndex)&&void 0!==r&&r.has(h)&&!v.includes(h)&&v.push(h),f&&f.forEach((function(e){var a,n=e.keyField;v&&n&&(null===(a=t.fieldsIndex)||void 0===a?void 0:a.has(n))&&!v.includes(n)&&v.push(n)})),v));case 23:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=2566.44031294.chunk.js.map