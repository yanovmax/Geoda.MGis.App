"use strict";(self.webpackChunkmgis_app=self.webpackChunkmgis_app||[]).push([[3806],{83806:function(n,e,r){r.r(e),r.d(e,{registerFunctions:function(){return P}});var t=r(37762),a=r(74165),u=r(15861),i=r(19545),c=r(47238),s=r(44715),o=r(95435),f=r(53866),l=r(32238),d=r(84178),p=r(77577),w=r(585),h=r(80885),v=r(29909),Z=r(77981),b=r(22564),m=r(62357),x=r(72741),y=r(93249),g=r(68860),k=r(7575);function L(n){return 0===i.i8.indexOf("4.")?h.Z.fromExtent(n):new h.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function I(n,e,r){if((0,s.C)(n,2,2,e,r),n[0]instanceof l.Z&&n[1]instanceof l.Z);else if(n[0]instanceof l.Z&&null===n[1]);else if(n[1]instanceof l.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new b.aV(e,b.rH.InvalidParameter,r)}function V(n,e){return H.apply(this,arguments)}function H(){return(H=(0,u.Z)((0,a.Z)().mark((function n(e,r){var u,i,c,f,l,p,w,h,Z,b,m;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("polygon"===e.type||"polyline"===e.type||"extent"===e.type){n.next=2;break}return n.abrupt("return",0);case 2:if(u=1,(e.spatialReference.vcsWkid||e.spatialReference.latestVcsWkid)&&(u=(0,o._R)(e.spatialReference)/(0,g.c9)(e.spatialReference)),i=0,"polyline"===e.type){c=(0,t.Z)(e.paths);try{for(c.s();!(f=c.n()).done;)for(l=f.value,p=1;p<l.length;p++)i+=(0,o.AW)(l[p],l[p-1],u)}catch(a){c.e(a)}finally{c.f()}}else if("polygon"===e.type){w=(0,t.Z)(e.rings);try{for(w.s();!(h=w.n()).done;){for(Z=h.value,b=1;b<Z.length;b++)i+=(0,o.AW)(Z[b],Z[b-1],u);(Z[0][0]!==Z[Z.length-1][0]||Z[0][1]!==Z[Z.length-1][1]||void 0!==Z[0][2]&&Z[0][2]!==Z[Z.length-1][2])&&(i+=(0,o.AW)(Z[0],Z[Z.length-1],u))}}catch(a){w.e(a)}finally{w.f()}}else"extent"===e.type&&(i+=2*(0,o.AW)([e.xmin,e.ymin,0],[e.xmax,e.ymin,0],u),i+=2*(0,o.AW)([e.xmin,e.ymin,0],[e.xmin,e.ymax,0],u),i*=2,i+=4*Math.abs((0,s.D)(e.zmax,0)*u-(0,s.D)(e.zmin,0)*u));return m=new v.Z({hasZ:!1,hasM:!1,spatialReference:e.spatialReference,paths:[[0,0],[0,i]]}),n.abrupt("return",(0,d.sz)(m,r));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(n){"async"===n.mode&&(n.functions.disjoint=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null===a[0]||null===a[1]||(0,d.ED)(a[0],a[1])}))},n.functions.intersects=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.kK)(a[0],a[1])}))},n.functions.touches=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.W4)(a[0],a[1])}))},n.functions.crosses=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.jU)(a[0],a[1])}))},n.functions.within=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.uh)(a[0],a[1])}))},n.functions.contains=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.r3)(a[0],a[1])}))},n.functions.overlaps=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null!==a[1]&&(0,d.Nm)(a[0],a[1])}))},n.functions.equals=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return(0,s.C)(a,2,2,e,r),a[0]===a[1]||(a[0]instanceof l.Z&&a[1]instanceof l.Z?(0,d.fS)(a[0],a[1]):!(!(0,s.k)(a[0])||!(0,s.k)(a[1]))&&a[0].equals(a[1]))}))},n.functions.relate=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,3,3,e,r),a[0]instanceof l.Z&&a[1]instanceof l.Z)return(0,d.LV)(a[0],a[1],(0,s.j)(a[2]));if(a[0]instanceof l.Z&&null===a[1])return!1;if(a[1]instanceof l.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new b.aV(e,b.rH.InvalidParameter,r)}))},n.functions.intersection=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null===a[0]||null===a[1]?null:(0,d.wf)(a[0],a[1])}))},n.functions.union=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){var u=[];if(0===(a=(0,s.L)(a)).length)throw new b.aV(e,b.rH.WrongNumberOfParameters,r);if(1===a.length)if((0,s.m)(a[0])){for(var i=(0,s.L)(a[0]),o=0;o<i.length;o++)if(null!==i[o]){if(!(i[o]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);u.push(i[o])}}else{if(!(0,s.o)(a[0])){if(a[0]instanceof l.Z)return(0,s.y)((0,c.r1)(a[0]),e.spatialReference);if(null===a[0])return null;throw new b.aV(e,b.rH.InvalidParameter,r)}for(var f=(0,s.L)(a[0].toArray()),p=0;p<f.length;p++)if(null!==f[p]){if(!(f[p]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);u.push(f[p])}}else for(var w=0;w<a.length;w++)if(null!==a[w]){if(!(a[w]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);u.push(a[w])}return 0===u.length?null:(0,d.G0)(u)}))},n.functions.difference=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null!==a[0]&&null===a[1]?(0,c.r1)(a[0]):null===a[0]?null:(0,d.e5)(a[0],a[1])}))},n.functions.symmetricdifference=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){return I(a=(0,s.L)(a),e,r),null===a[0]&&null===a[1]?null:null===a[0]?(0,c.r1)(a[1]):null===a[1]?(0,c.r1)(a[0]):(0,d.Sp)(a[0],a[1])}))},n.functions.clip=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,2,e,r),!(a[1]instanceof f.Z)&&null!==a[1])throw new b.aV(e,b.rH.InvalidParameter,r);if(null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return null===a[1]?null:(0,d.oq)(a[0],a[1])}))},n.functions.cut=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,2,e,r),!(a[1]instanceof v.Z)&&null!==a[1])throw new b.aV(e,b.rH.InvalidParameter,r);if(null===a[0])return[];if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return null===a[1]?[(0,c.r1)(a[0])]:(0,d.z7)(a[0],a[1])}))},n.functions.area=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.C)(i,1,2,e,r),null!==(i=(0,s.L)(i))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.r)(i[0])){n.next=9;break}return n.next=5,i[0].sumArea((0,c.EI)((0,s.D)(i[1],-1)),!1,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new b.aV(e,b.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,s.m)(i[0])&&!(0,s.o)(i[0])){n.next=12;break}return f=(0,s.N)(i[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.CJ)(f,(0,c.EI)((0,s.D)(i[1],-1))));case 12:if(i[0]instanceof l.Z){n.next=14;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.CJ)(i[0],(0,c.EI)((0,s.D)(i[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.areageodetic=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.C)(i,1,2,e,r),null!==(i=(0,s.L)(i))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.r)(i[0])){n.next=9;break}return n.next=5,i[0].sumArea((0,c.EI)((0,s.D)(i[1],-1)),!0,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new b.aV(e,b.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,s.m)(i[0])&&!(0,s.o)(i[0])){n.next=12;break}return f=(0,s.N)(i[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.Y4)(f,(0,c.EI)((0,s.D)(i[1],-1))));case 12:if(i[0]instanceof l.Z){n.next=14;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.Y4)(i[0],(0,c.EI)((0,s.D)(i[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.length=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.C)(i,1,2,e,r),null!==(i=(0,s.L)(i))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.r)(i[0])){n.next=9;break}return n.next=5,i[0].sumLength((0,c.Lz)((0,s.D)(i[1],-1)),!1,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new b.aV(e,b.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,s.m)(i[0])&&!(0,s.o)(i[0])){n.next=12;break}return f=(0,s.M)(i[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.sz)(f,(0,c.Lz)((0,s.D)(i[1],-1))));case 12:if(i[0]instanceof l.Z){n.next=14;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.sz)(i[0],(0,c.Lz)((0,s.D)(i[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.length3d=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if((0,s.C)(a,1,2,e,r),null===(a=(0,s.L)(a))[0])return 0;if((0,s.m)(a[0])||(0,s.o)(a[0])){var u=(0,s.M)(a[0],e.spatialReference);return null===u?0:!0===u.hasZ?V(u,(0,c.Lz)((0,s.D)(a[1],-1))):(0,d.sz)(u,(0,c.Lz)((0,s.D)(a[1],-1)))}if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return!0===a[0].hasZ?V(a[0],(0,c.Lz)((0,s.D)(a[1],-1))):(0,d.sz)(a[0],(0,c.Lz)((0,s.D)(a[1],-1)))}))},n.functions.lengthgeodetic=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var o,f;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.C)(i,1,2,e,r),null!==(i=(0,s.L)(i))[0]){n.next=2;break}return n.abrupt("return",0);case 2:if(!(0,s.r)(i[0])){n.next=9;break}return n.next=5,i[0].sumLength((0,c.Lz)((0,s.D)(i[1],-1)),!0,e.abortSignal);case 5:if(o=n.sent,!e.abortSignal.aborted){n.next=8;break}throw new b.aV(e,b.rH.Cancelled,r);case 8:return n.abrupt("return",o);case 9:if(!(0,s.m)(i[0])&&!(0,s.o)(i[0])){n.next=12;break}return f=(0,s.M)(i[0],e.spatialReference),n.abrupt("return",null===f?0:(0,d.kQ)(f,(0,c.Lz)((0,s.D)(i[1],-1))));case 12:if(i[0]instanceof l.Z){n.next=14;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 14:return n.abrupt("return",(0,d.kQ)(i[0],(0,c.Lz)((0,s.D)(i[1],-1))));case 15:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.distance=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){a=(0,s.L)(a),(0,s.C)(a,2,3,e,r);var u=a[0];((0,s.m)(a[0])||(0,s.o)(a[0]))&&(u=(0,s.O)(a[0],e.spatialReference));var i=a[1];if(((0,s.m)(a[1])||(0,s.o)(a[1]))&&(i=(0,s.O)(a[1],e.spatialReference)),!(u instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);if(!(i instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return(0,d.TE)(u,i,(0,c.Lz)((0,s.D)(a[2],-1)))}))},n.functions.distancegeodetic=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){a=(0,s.L)(a),(0,s.C)(a,2,3,e,r);var u=a[0],i=a[1];if(!(u instanceof w.Z))throw new b.aV(e,b.rH.InvalidParameter,r);if(!(i instanceof w.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var o=new v.Z({paths:[],spatialReference:u.spatialReference});return o.addPath([u,i]),(0,d.kQ)(o,(0,c.Lz)((0,s.D)(a[2],-1)))}))},n.functions.densify=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var u=(0,s.g)(a[1]);if(isNaN(u))throw new b.aV(e,b.rH.InvalidParameter,r);if(u<=0)throw new b.aV(e,b.rH.InvalidParameter,r);return a[0]instanceof h.Z||a[0]instanceof v.Z?(0,d.Cz)(a[0],u,(0,c.Lz)((0,s.D)(a[2],-1))):a[0]instanceof f.Z?(0,d.Cz)(L(a[0]),u,(0,c.Lz)((0,s.D)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var u=(0,s.g)(a[1]);if(isNaN(u))throw new b.aV(e,b.rH.InvalidParameter,r);if(u<=0)throw new b.aV(e,b.rH.InvalidParameter,r);return a[0]instanceof h.Z||a[0]instanceof v.Z?(0,d.j2)(a[0],u,(0,c.Lz)((0,s.D)(a[2],-1))):a[0]instanceof f.Z?(0,d.j2)(L(a[0]),u,(0,c.Lz)((0,s.D)(a[2],-1))):a[0]}))},n.functions.generalize=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,4,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var u=(0,s.g)(a[1]);if(isNaN(u))throw new b.aV(e,b.rH.InvalidParameter,r);return(0,d.D$)(a[0],u,(0,s.h)((0,s.D)(a[2],!0)),(0,c.Lz)((0,s.D)(a[3],-1)))}))},n.functions.buffer=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var u=(0,s.g)(a[1]);if(isNaN(u))throw new b.aV(e,b.rH.InvalidParameter,r);return 0===u?(0,c.r1)(a[0]):(0,d.f3)(a[0],u,(0,c.Lz)((0,s.D)(a[2],-1)))}))},n.functions.buffergeodetic=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,3,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var u=(0,s.g)(a[1]);if(isNaN(u))throw new b.aV(e,b.rH.InvalidParameter,r);return 0===u?(0,c.r1)(a[0]):(0,d.rd)(a[0],u,(0,c.Lz)((0,s.D)(a[2],-1)))}))},n.functions.offset=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,2,6,e,r),null===a[0])return null;if(!(a[0]instanceof h.Z||a[0]instanceof v.Z))throw new b.aV(e,b.rH.InvalidParameter,r);var u=(0,s.g)(a[1]);if(isNaN(u))throw new b.aV(e,b.rH.InvalidParameter,r);var i=(0,s.g)((0,s.D)(a[4],10));if(isNaN(i))throw new b.aV(e,b.rH.InvalidParameter,r);var o=(0,s.g)((0,s.D)(a[5],0));if(isNaN(o))throw new b.aV(e,b.rH.InvalidParameter,r);return(0,d.cv)(a[0],u,(0,c.Lz)((0,s.D)(a[2],-1)),(0,s.j)((0,s.D)(a[3],"round")).toLowerCase(),i,o)}))},n.functions.rotate=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){a=(0,s.L)(a),(0,s.C)(a,2,3,e,r);var u=a[0];if(null===u)return null;if(!(u instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);u instanceof f.Z&&(u=h.Z.fromExtent(u));var i=(0,s.g)(a[1]);if(isNaN(i))throw new b.aV(e,b.rH.InvalidParameter,r);var c=(0,s.D)(a[2],null);if(null===c)return(0,d.U1)(u,i);if(c instanceof w.Z)return(0,d.U1)(u,i,c);throw new b.aV(e,b.rH.InvalidParameter,r)}))},n.functions.centroid=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,1,1,e,r),null===a[0])return null;var u=a[0];if(((0,s.m)(a[0])||(0,s.o)(a[0]))&&(u=(0,s.O)(a[0],e.spatialReference)),null===u)return null;if(!(u instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return u instanceof w.Z?(0,s.y)((0,c.r1)(a[0]),e.spatialReference):u instanceof h.Z?u.centroid:u instanceof v.Z?(0,o.s9)(u):u instanceof p.Z?(0,o.Ay)(u):u instanceof f.Z?u.center:null}))},n.functions.multiparttosinglepart=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var o,m,x,y,g,k,L,I,V,H,P,A,D;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=(0,s.L)(i),(0,s.C)(i,1,1,e,r),o=[],null!==i[0]){n.next=4;break}return n.abrupt("return",null);case 4:if(i[0]instanceof l.Z){n.next=6;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 6:if(!(i[0]instanceof w.Z)){n.next=8;break}return n.abrupt("return",[(0,s.y)((0,c.r1)(i[0]),e.spatialReference)]);case 8:if(!(i[0]instanceof f.Z)){n.next=10;break}return n.abrupt("return",[(0,s.y)((0,c.r1)(i[0]),e.spatialReference)]);case 10:return n.next=12,(0,d.og)(i[0]);case 12:if(!((m=n.sent)instanceof h.Z)){n.next=30;break}for(x=[],y=[],g=0;g<m.rings.length;g++)m.isClockwise(m.rings[g])?(k=(0,Z.im)({rings:[m.rings[g]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()}),x.push(k)):y.push({ring:m.rings[g],pt:m.getPoint(g,0)});L=0;case 17:if(!(L<y.length)){n.next=29;break}I=0;case 19:if(!(I<x.length)){n.next=26;break}if(!x[I].contains(y[L].pt)){n.next=23;break}return x[I].addRing(y[L].ring),n.abrupt("break",26);case 23:I++,n.next=19;break;case 26:L++,n.next=17;break;case 29:return n.abrupt("return",x);case 30:if(!(m instanceof v.Z)){n.next=34;break}for(V=[],H=0;H<m.paths.length;H++)P=(0,Z.im)({paths:[m.paths[H]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()}),V.push(P);return n.abrupt("return",V);case 34:if(!(i[0]instanceof p.Z)){n.next=38;break}for(A=(0,s.y)((0,c.r1)(i[0]),e.spatialReference),D=0;D<A.points.length;D++)o.push(A.getPoint(D));return n.abrupt("return",o);case 38:return n.abrupt("return",null);case 39:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.issimple=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,1,1,e,r),null===a[0])return!0;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return(0,d.Gg)(a[0])}))},n.functions.simplify=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,1,1,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return(0,d.og)(a[0])}))},n.functions.convexhull=function(e,r){return n.standardFunctionAsync(e,r,(function(n,t,a){if(a=(0,s.L)(a),(0,s.C)(a,1,1,e,r),null===a[0])return null;if(!(a[0]instanceof l.Z))throw new b.aV(e,b.rH.InvalidParameter,r);return(0,d.JI)(a[0])}))},n.functions.getuser=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var c,o,f,l,d,p,w,h,v,Z,g,L,I,V,H,P,A;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,s.C)(i,0,2,e,r),c=(0,s.D)(i[1],""),o=!0===c,c=!0===c||!1===c?"":(0,s.j)(c),!(0===i.length||i[0]instanceof x.Z)){n.next=13;break}return f=null,f=e.services&&e.services.portal?e.services.portal:k.Z.getDefault(),i.length>0&&(f=(0,y._)(i[0],f)),n.next=7,(0,y.q)(f,c,o);case 7:if(!(l=n.sent)){n.next=12;break}for(d=JSON.parse(JSON.stringify(l)),p=0,w=["lastLogin","created","modified"];p<w.length;p++)void 0!==d[h=w[p]]&&null!==d[h]&&(d[h]=new Date(d[h]));return n.abrupt("return",m.Z.convertObjectToArcadeDictionary(d,(0,s.G)(e)));case 12:case 28:case 38:return n.abrupt("return",null);case 13:if(v=null,(0,s.r)(i[0])&&(v=i[0]),!v){n.next=39;break}if(o=!1,!c){n.next=17;break}return n.abrupt("return",null);case 17:return n.next=19,v.load();case 19:return n.next=21,v.getOwningSystemUrl();case 21:if(Z=n.sent){n.next=29;break}if(c){n.next=28;break}return n.next=26,v.getIdentityUser();case 26:return g=n.sent,n.abrupt("return",g?m.Z.convertObjectToArcadeDictionary({username:g},(0,s.G)(e)):null);case 29:return L=null,L=e.services&&e.services.portal?e.services.portal:k.Z.getDefault(),L=(0,y._)(new x.Z(Z),L),n.next=33,(0,y.q)(L,c,o);case 33:if(!(I=n.sent)){n.next=38;break}for(V=JSON.parse(JSON.stringify(I)),H=0,P=["lastLogin","created","modified"];H<P.length;H++)void 0!==V[A=P[H]]&&null!==V[A]&&(V[A]=new Date(V[A]));return n.abrupt("return",m.Z.convertObjectToArcadeDictionary(V,(0,s.G)(e)));case 39:throw new b.aV(e,b.rH.InvalidParameter,r);case 40:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())}),n.functions.nearestcoordinate=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=(0,s.L)(i),(0,s.C)(i,2,2,e,r),i[0]instanceof l.Z||null===i[0]){n.next=2;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 2:if(i[1]instanceof w.Z||null===i[1]){n.next=4;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 4:if(null!==i[0]&&null!==i[1]){n.next=6;break}return n.abrupt("return",null);case 6:return n.next=8,(0,d.FH)(i[0],i[1]);case 8:return c=n.sent,n.abrupt("return",null===c?null:m.Z.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance},(0,s.G)(e),!1,!0));case 10:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())},n.functions.nearestvertex=function(e,r){return n.standardFunctionAsync(e,r,function(){var n=(0,u.Z)((0,a.Z)().mark((function n(t,u,i){var c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=(0,s.L)(i),(0,s.C)(i,2,2,e,r),i[0]instanceof l.Z||null===i[0]){n.next=2;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 2:if(i[1]instanceof w.Z||null===i[1]){n.next=4;break}throw new b.aV(e,b.rH.InvalidParameter,r);case 4:if(null!==i[0]&&null!==i[1]){n.next=6;break}return n.abrupt("return",null);case 6:return n.next=8,(0,d._L)(i[0],i[1]);case 8:return c=n.sent,n.abrupt("return",null===c?null:m.Z.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance},(0,s.G)(e),!1,!0));case 10:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}())}}},93249:function(n,e,r){r.d(e,{_:function(){return o},q:function(){return f}});var t=r(74165),a=r(1413),u=r(15861),i=r(19545),c=r(76200),s=r(7575);function o(n,e){return null===n?e:new s.Z({url:n.field("url")})}function f(n,e,r){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,t.Z)().mark((function n(e,r,u){var s,o,f,l;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===i.id||void 0===i.id?void 0:i.id.findCredential(e.restUrl)){n.next=3;break}return n.abrupt("return",null);case 3:if("loaded"!==e.loadStatus||""!==r||!e.user||!e.user.sourceJSON||!1!==u){n.next=5;break}return n.abrupt("return",e.user.sourceJSON);case 5:if(""!==r){n.next=14;break}return n.next=8,(0,c.default)(e.restUrl+"/community/self",{responseType:"json",query:(0,a.Z)({f:"json"},!1===u?{}:{returnUserLicenseTypeExtensions:!0})});case 8:if(!(s=n.sent).data){n.next=13;break}if(!(o=s.data)||!o.username){n.next=13;break}return n.abrupt("return",o);case 13:case 20:return n.abrupt("return",null);case 14:return n.next=16,(0,c.default)(e.restUrl+"/community/users/"+r,{responseType:"json",query:{f:"json"}});case 16:if(!(f=n.sent).data){n.next=20;break}return l=f.data,n.abrupt("return",l.error?null:l);case 21:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}}}]);
//# sourceMappingURL=3806.0998fdf9.chunk.js.map