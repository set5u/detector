(self.webpackChunknuxt_app=self.webpackChunknuxt_app||[]).push([["176"],{1734:function(Yr,Nt,oe){(function(){"use strict";var ye;function l(n){var c=0;return function(){return c<n.length?{done:!1,value:n[c++]}:{done:!0}}}var xe=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,c,m){return n==Array.prototype||n==Object.prototype||(n[c]=m.value),n};function be(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof oe.g=="object"&&oe.g];for(var c=0;c<n.length;++c){var m=n[c];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var Te=be(this);function le(n,c){if(c)e:{var m=Te;n=n.split(".");for(var y=0;y<n.length-1;y++){var C=n[y];if(!(C in m))break e;m=m[C]}n=n[n.length-1],y=m[n],c=c(y),c!=y&&c!=null&&xe(m,n,{configurable:!0,writable:!0,value:c})}}le("Symbol",function(n){function c(b){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new m(y+(b||"")+"_"+C++,b)}function m(b,S){this.h=b,xe(this,"description",{configurable:!0,writable:!0,value:S})}if(n)return n;m.prototype.toString=function(){return this.h};var y="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",C=0;return c}),le("Symbol.iterator",function(n){if(n)return n;n=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),m=0;m<c.length;m++){var y=Te[c[m]];typeof y=="function"&&typeof y.prototype[n]!="function"&&xe(y.prototype,n,{configurable:!0,writable:!0,value:function(){return Le(l(this))}})}return n});function Le(n){return n={next:n},n[Symbol.iterator]=function(){return this},n}function Se(n){var c=typeof Symbol<"u"&&Symbol.iterator&&n[Symbol.iterator];return c?c.call(n):{next:l(n)}}function it(n){if(!(n instanceof Array)){n=Se(n);for(var c,m=[];!(c=n.next()).done;)m.push(c.value);n=m}return n}var st=typeof Object.assign=="function"?Object.assign:function(n,c){for(var m=1;m<arguments.length;m++){var y=arguments[m];if(y)for(var C in y)Object.prototype.hasOwnProperty.call(y,C)&&(n[C]=y[C])}return n};le("Object.assign",function(n){return n||st});var ae=typeof Object.create=="function"?Object.create:function(n){function c(){}return c.prototype=n,new c},fe;if(typeof Object.setPrototypeOf=="function")fe=Object.setPrototypeOf;else{var $e;e:{var ct={a:!0},K={};try{K.__proto__=ct,$e=K.a;break e}catch{}$e=!1}fe=$e?function(n,c){if(n.__proto__=c,n.__proto__!==c)throw new TypeError(n+" is not extensible");return n}:null}var O=fe;function Q(n,c){if(n.prototype=ae(c.prototype),n.prototype.constructor=n,O)O(n,c);else for(var m in c)if(m!="prototype")if(Object.defineProperties){var y=Object.getOwnPropertyDescriptor(c,m);y&&Object.defineProperty(n,m,y)}else n[m]=c[m];n.za=c.prototype}function T(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function we(n){if(n.m)throw new TypeError("Generator is already running");n.m=!0}T.prototype.u=function(n){this.i=n};function rt(n,c){n.l={ma:c,na:!0},n.h=n.s||n.v}T.prototype.return=function(n){this.l={return:n},this.h=this.v};function R(n,c,m){return n.h=m,{value:c}}function cr(n){this.h=new T,this.i=n}function hr(n,c){we(n.h);var m=n.h.j;return m?Gt(n,"return"in m?m.return:function(y){return{value:y,done:!0}},c,n.h.return):(n.h.return(c),ot(n))}function Gt(n,c,m,y){try{var C=c.call(n.h.j,m);if(!(C instanceof Object))throw new TypeError("Iterator result "+C+" is not an object");if(!C.done)return n.h.m=!1,C;var b=C.value}catch(S){return n.h.j=null,rt(n.h,S),ot(n)}return n.h.j=null,y.call(n.h,b),ot(n)}function ot(n){for(;n.h.h;)try{var c=n.i(n.h);if(c)return n.h.m=!1,{value:c.value,done:!1}}catch(m){n.h.i=void 0,rt(n.h,m)}if(n.h.m=!1,n.h.l){if(c=n.h.l,n.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function dr(n){this.next=function(c){return we(n.h),n.h.j?c=Gt(n,n.h.j.next,c,n.h.u):(n.h.u(c),c=ot(n)),c},this.throw=function(c){return we(n.h),n.h.j?c=Gt(n,n.h.j.throw,c,n.h.u):(rt(n.h,c),c=ot(n)),c},this.return=function(c){return hr(n,c)},this[Symbol.iterator]=function(){return this}}function pr(n){function c(y){return n.next(y)}function m(y){return n.throw(y)}return new Promise(function(y,C){function b(S){S.done?y(S.value):Promise.resolve(S.value).then(c,m).then(b,C)}b(n.next())})}function ke(n){return pr(new dr(new cr(n)))}le("Promise",function(n){function c(S){this.i=0,this.j=void 0,this.h=[],this.u=!1;var I=this.l();try{S(I.resolve,I.reject)}catch(N){I.reject(N)}}function m(){this.h=null}function y(S){return S instanceof c?S:new c(function(I){I(S)})}if(n)return n;m.prototype.i=function(S){if(this.h==null){this.h=[];var I=this;this.j(function(){I.m()})}this.h.push(S)};var C=Te.setTimeout;m.prototype.j=function(S){C(S,0)},m.prototype.m=function(){for(;this.h&&this.h.length;){var S=this.h;this.h=[];for(var I=0;I<S.length;++I){var N=S[I];S[I]=null;try{N()}catch(M){this.l(M)}}}this.h=null},m.prototype.l=function(S){this.j(function(){throw S})},c.prototype.l=function(){function S(M){return function(W){N||(N=!0,M.call(I,W))}}var I=this,N=!1;return{resolve:S(this.I),reject:S(this.m)}},c.prototype.I=function(S){if(S===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(S instanceof c)this.L(S);else{e:switch(typeof S){case"object":var I=S!=null;break e;case"function":I=!0;break e;default:I=!1}I?this.F(S):this.s(S)}},c.prototype.F=function(S){var I=void 0;try{I=S.then}catch(N){this.m(N);return}typeof I=="function"?this.M(I,S):this.s(S)},c.prototype.m=function(S){this.v(2,S)},c.prototype.s=function(S){this.v(1,S)},c.prototype.v=function(S,I){if(this.i!=0)throw Error("Cannot settle("+S+", "+I+"): Promise already settled in state"+this.i);this.i=S,this.j=I,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var S=this;C(function(){if(S.D()){var I=Te.console;typeof I<"u"&&I.error(S.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var S=Te.CustomEvent,I=Te.Event,N=Te.dispatchEvent;return typeof N>"u"?!0:(typeof S=="function"?S=new S("unhandledrejection",{cancelable:!0}):typeof I=="function"?S=new I("unhandledrejection",{cancelable:!0}):(S=Te.document.createEvent("CustomEvent"),S.initCustomEvent("unhandledrejection",!1,!0,S)),S.promise=this,S.reason=this.j,N(S))},c.prototype.H=function(){if(this.h!=null){for(var S=0;S<this.h.length;++S)b.i(this.h[S]);this.h=null}};var b=new m;return c.prototype.L=function(S){var I=this.l();S.T(I.resolve,I.reject)},c.prototype.M=function(S,I){var N=this.l();try{S.call(I,N.resolve,N.reject)}catch(M){N.reject(M)}},c.prototype.then=function(S,I){function N(q,G){return typeof q=="function"?function(ee){try{M(q(ee))}catch(re){W(re)}}:G}var M,W,J=new c(function(q,G){M=q,W=G});return this.T(N(S,M),N(I,W)),J},c.prototype.catch=function(S){return this.then(void 0,S)},c.prototype.T=function(S,I){function N(){switch(M.i){case 1:S(M.j);break;case 2:I(M.j);break;default:throw Error("Unexpected state: "+M.i)}}var M=this;this.h==null?b.i(N):this.h.push(N),this.u=!0},c.resolve=y,c.reject=function(S){return new c(function(I,N){N(S)})},c.race=function(S){return new c(function(I,N){for(var M=Se(S),W=M.next();!W.done;W=M.next())y(W.value).T(I,N)})},c.all=function(S){var I=Se(S),N=I.next();return N.done?y([]):new c(function(M,W){function J(ee){return function(re){q[ee]=re,G--,G==0&&M(q)}}var q=[],G=0;do q.push(void 0),G++,y(N.value).T(J(q.length-1),W),N=I.next();while(!N.done)})},c});function fr(n,c){n instanceof String&&(n+="");var m=0,y=!1,C={next:function(){if(!y&&m<n.length){var b=m++;return{value:c(b,n[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}le("Array.prototype.keys",function(n){return n||function(){return fr(this,function(c){return c})}}),le("Array.prototype.fill",function(n){return n||function(c,m,y){var C=this.length||0;for(0>m&&(m=Math.max(0,C+m)),(y==null||y>C)&&(y=C),y=Number(y),0>y&&(y=Math.max(0,C+y)),m=Number(m||0);m<y;m++)this[m]=c;return this}});function qe(n){return n||Array.prototype.fill}le("Int8Array.prototype.fill",qe),le("Uint8Array.prototype.fill",qe),le("Uint8ClampedArray.prototype.fill",qe),le("Int16Array.prototype.fill",qe),le("Uint16Array.prototype.fill",qe),le("Int32Array.prototype.fill",qe),le("Uint32Array.prototype.fill",qe),le("Float32Array.prototype.fill",qe),le("Float64Array.prototype.fill",qe),le("Object.is",function(n){return n||function(c,m){return c===m?c!==0||1/c===1/m:c!==c&&m!==m}}),le("Array.prototype.includes",function(n){return n||function(c,m){var y=this;y instanceof String&&(y=String(y));var C=y.length;for(m=m||0,0>m&&(m=Math.max(m+C,0));m<C;m++){var b=y[m];if(b===c||Object.is(b,c))return!0}return!1}}),le("String.prototype.includes",function(n){return n||function(c,m){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,m||0)!==-1}});var Ft=this||self;function Ie(n,c){n=n.split(".");var m=Ft;n[0]in m||typeof m.execScript>"u"||m.execScript("var "+n[0]);for(var y;n.length&&(y=n.shift());)n.length||c===void 0?m[y]&&m[y]!==Object.prototype[y]?m=m[y]:m=m[y]={}:m[y]=c}function wi(n){var c;e:{if((c=Ft.navigator)&&(c=c.userAgent))break e;c=""}return c.indexOf(n)!=-1}var mr=Array.prototype.map?function(n,c){return Array.prototype.map.call(n,c,void 0)}:function(n,c){for(var m=n.length,y=Array(m),C=typeof n=="string"?n.split(""):n,b=0;b<m;b++)b in C&&(y[b]=c.call(void 0,C[b],b,n));return y},jt={},_e=null;function qr(n){var c=n.length,m=3*c/4;m%3?m=Math.floor(m):"=.".indexOf(n[c-1])!=-1&&(m="=.".indexOf(n[c-2])!=-1?m-2:m-1);var y=new Uint8Array(m),C=0;return U(n,function(b){y[C++]=b}),C!==m?y.subarray(0,C):y}function U(n,c){function m(N){for(;y<n.length;){var M=n.charAt(y++),W=_e[M];if(W!=null)return W;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M)}return N}vi();for(var y=0;;){var C=m(-1),b=m(0),S=m(64),I=m(64);if(I===64&&C===-1)break;c(C<<2|b>>4),S!=64&&(c(b<<4&240|S>>2),I!=64&&c(S<<6&192|I))}}function vi(){if(!_e){_e={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var y=n.concat(c[m].split(""));jt[m]=y;for(var C=0;C<y.length;C++){var b=y[C];_e[b]===void 0&&(_e[b]=C)}}}}var $t=typeof Uint8Array<"u",Xt=!(wi("Trident")||wi("MSIE"))&&typeof Ft.btoa=="function";function V(n){if(!Xt){var c;c===void 0&&(c=0),vi(),c=jt[c];for(var m=Array(Math.floor(n.length/3)),y=c[64]||"",C=0,b=0;C<n.length-2;C+=3){var S=n[C],I=n[C+1],N=n[C+2],M=c[S>>2];S=c[(S&3)<<4|I>>4],I=c[(I&15)<<2|N>>6],N=c[N&63],m[b++]=M+S+I+N}switch(M=0,N=y,n.length-C){case 2:M=n[C+1],N=c[(M&15)<<2]||y;case 1:n=n[C],m[b]=c[n>>2]+c[(n&3)<<4|M>>4]+N+y}return m.join("")}for(c="";10240<n.length;)c+=String.fromCharCode.apply(null,n.subarray(0,10240)),n=n.subarray(10240);return c+=String.fromCharCode.apply(null,n),btoa(c)}var Kt=RegExp("[-_.]","g");function Ci(n){switch(n){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Yt(n){if(!Xt)return qr(n);Kt.test(n)&&(n=n.replace(Kt,Ci)),n=atob(n);for(var c=new Uint8Array(n.length),m=0;m<n.length;m++)c[m]=n.charCodeAt(m);return c}var Be;function qt(){return Be||(Be=new Uint8Array(0))}var mt={},ht=typeof Uint8Array.prototype.slice=="function",j=0,Re=0;function Si(n){var c=0>n;n=Math.abs(n);var m=n>>>0;n=Math.floor((n-m)/4294967296),c&&(m=Se(bi(m,n)),c=m.next().value,n=m.next().value,m=c),j=m>>>0,Re=n>>>0}var gr=typeof BigInt=="function";function bi(n,c){return c=~c,n?n=~n+1:c+=1,[n,c]}function ki(n,c){this.i=n>>>0,this.h=c>>>0}function Ii(n){if(!n)return Ri||(Ri=new ki(0,0));if(!/^-?\d+$/.test(n))return null;if(16>n.length)Si(Number(n));else if(gr)n=BigInt(n),j=Number(n&BigInt(4294967295))>>>0,Re=Number(n>>BigInt(32)&BigInt(4294967295));else{var c=+(n[0]==="-");Re=j=0;for(var m=n.length,y=c,C=(m-c)%6+c;C<=m;y=C,C+=6)y=Number(n.slice(y,C)),Re*=1e6,j=1e6*j+y,4294967296<=j&&(Re+=j/4294967296|0,j%=4294967296);c&&(c=Se(bi(j,Re)),n=c.next().value,c=c.next().value,j=n,Re=c)}return new ki(j,Re)}var Ri;function Pi(n,c){return Error("Invalid wire type: "+n+" (at position "+c+")")}function Qt(){return Error("Failed to read varint, encoding is invalid.")}function Di(n,c){return Error("Tried to read past the end of the data "+c+" > "+n)}function at(){throw Error("Invalid UTF8")}function Ai(n,c){return c=String.fromCharCode.apply(null,c),n==null?c:n+c}var Tt=void 0,Zt,yr=typeof TextDecoder<"u",Ni,xr=typeof TextEncoder<"u",Fi;function $i(n){if(n!==mt)throw Error("illegal external caller")}function gt(n,c){if($i(c),this.V=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}function Jt(){return Fi||(Fi=new gt(null,mt))}function Ti(n){$i(mt);var c=n.V;return c=c==null||$t&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?Yt(c):null,c==null?c:n.V=c}function wr(n){if(typeof n=="string")return{buffer:Yt(n),C:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),C:!1};if(n.constructor===Uint8Array)return{buffer:n,C:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),C:!1};if(n.constructor===gt)return{buffer:Ti(n)||qt(),C:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function zi(n,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,ei(this,n,c)}function ei(n,c,m){m=m===void 0?{}:m,n.S=m.S===void 0?!1:m.S,c&&(c=wr(c),n.i=c.buffer,n.m=c.C,n.l=0,n.j=n.i.length,n.h=n.l)}zi.prototype.reset=function(){this.h=this.l};function ut(n,c){if(n.h=c,c>n.j)throw Di(n.j,c)}function yt(n){var c=n.i,m=n.h,y=c[m++],C=y&127;if(y&128&&(y=c[m++],C|=(y&127)<<7,y&128&&(y=c[m++],C|=(y&127)<<14,y&128&&(y=c[m++],C|=(y&127)<<21,y&128&&(y=c[m++],C|=y<<28,y&128&&c[m++]&128&&c[m++]&128&&c[m++]&128&&c[m++]&128&&c[m++]&128)))))throw Qt();return ut(n,m),C}function Ei(n,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var m=n.h,y=m+c;if(y>n.j)throw Di(c,n.j-m);return n.h=y,m}var Mi=[];function xt(){this.h=[]}xt.prototype.length=function(){return this.h.length},xt.prototype.end=function(){var n=this.h;return this.h=[],n};function _(n,c,m){for(;0<m||127<c;)n.h.push(c&127|128),c=(c>>>7|m<<25)>>>0,m>>>=7;n.h.push(c)}function lt(n,c){for(;127<c;)n.h.push(c&127|128),c>>>=7;n.h.push(c)}function ti(n,c){if(Mi.length){var m=Mi.pop();ei(m,n,c),n=m}else n=new zi(n,c);this.h=n,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}ti.prototype.setOptions=function(n){n=n===void 0?{}:n,this.ca=n.ca===void 0?!1:n.ca},ti.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Li(n){var c=n.h;if(c.h==c.j)return!1;n.j=n.h.h;var m=yt(n.h)>>>0;if(c=m>>>3,m&=7,!(0<=m&&5>=m))throw Pi(m,n.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+n.j+")");return n.l=c,n.i=m,!0}function zt(n){switch(n.i){case 0:if(n.i!=0)zt(n);else e:{n=n.h;for(var c=n.h,m=c+10,y=n.i;c<m;)if((y[c++]&128)===0){ut(n,c);break e}throw Qt()}break;case 1:n=n.h,ut(n,n.h+8);break;case 2:n.i!=2?zt(n):(c=yt(n.h)>>>0,n=n.h,ut(n,n.h+c));break;case 5:n=n.h,ut(n,n.h+4);break;case 3:c=n.l;do{if(!Li(n))throw Error("Unmatched start-group tag: stream EOF");if(n.i==4){if(n.l!=c)throw Error("Unmatched end-group tag");break}zt(n)}while(!0);break;default:throw Pi(n.i,n.j)}}var ii=[];function Qr(){this.j=[],this.i=0,this.h=new xt}function wt(n,c){c.length!==0&&(n.j.push(c),n.i+=c.length)}function vr(n,c){if(c=c.R){wt(n,n.h.end());for(var m=0;m<c.length;m++)wt(n,Ti(c[m])||qt())}}var Qe=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function dt(n,c){return Qe?n[Qe]|=c:n.A!==void 0?n.A|=c:(Object.defineProperties(n,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function _i(n,c){Qe?n[Qe]&&(n[Qe]&=~c):n.A!==void 0&&(n.A&=~c)}function ve(n){var c;return Qe?c=n[Qe]:c=n.A,c??0}function He(n,c){Qe?n[Qe]=c:n.A!==void 0?n.A=c:Object.defineProperties(n,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function ri(n){return dt(n,1),n}function Cr(n,c){He(c,(n|0)&-51)}function Et(n,c){He(c,(n|18)&-41)}var oi={};function Mt(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}var vt,Bi=[];He(Bi,23),vt=Object.freeze(Bi);function ni(n){if(ve(n.o)&2)throw Error("Cannot mutate an immutable Message")}function si(n){var c=n.length;(c=c?n[c-1]:void 0)&&Mt(c)?c.g=1:(c={},n.push((c.g=1,c)))}function Oi(n){var c=n.i+n.G;return n.B||(n.B=n.o[c]={})}function Oe(n,c){return c===-1?null:c>=n.i?n.B?n.B[c]:void 0:n.o[c+n.G]}function Ge(n,c,m,y){ni(n),Ct(n,c,m,y)}function Ct(n,c,m,y){n.j&&(n.j=void 0),c>=n.i||y?Oi(n)[c]=m:(n.o[c+n.G]=m,(n=n.B)&&c in n&&delete n[c])}function ai(n,c,m,y){var C=Oe(n,c);Array.isArray(C)||(C=vt);var b=ve(C);if(b&1||ri(C),y)b&2||dt(C,2),m&1||Object.freeze(C);else{y=!(m&2);var S=b&2;m&1||!S?y&&b&16&&!S&&_i(C,16):(C=ri(Array.prototype.slice.call(C)),Ct(n,c,C))}return C}function ui(n,c){var m=Oe(n,c),y=m==null?m:typeof m=="number"||m==="NaN"||m==="Infinity"||m==="-Infinity"?Number(m):void 0;return y!=null&&y!==m&&Ct(n,c,y),y}function Ui(n,c,m,y,C){n.h||(n.h={});var b=n.h[m],S=ai(n,m,3,C);if(!b){var I=S;b=[];var N=!!(ve(n.o)&16);S=!!(ve(I)&2);var M=I;!C&&S&&(I=Array.prototype.slice.call(I));for(var W=S,J=0;J<I.length;J++){var q=I[J],G=c,ee=!1;if(ee=ee===void 0?!1:ee,q=Array.isArray(q)?new G(q):ee?new G:void 0,q!==void 0){G=q.o;var re=ee=ve(G);S&&(re|=2),N&&(re|=16),re!=ee&&He(G,re),G=re,W=W||!!(2&G),b.push(q)}}return n.h[m]=b,N=ve(I),c=N|33,c=W?c&-9:c|8,N!=c&&(W=I,Object.isFrozen(W)&&(W=Array.prototype.slice.call(W)),He(W,c),I=W),M!==I&&Ct(n,m,I),(C||y&&S)&&dt(b,2),y&&Object.freeze(b),b}return C||(C=Object.isFrozen(b),y&&!C?Object.freeze(b):!y&&C&&(b=Array.prototype.slice.call(b),n.h[m]=b)),b}function li(n,c,m){var y=!!(ve(n.o)&2);if(c=Ui(n,c,m,y,y),n=ai(n,m,3,y),!(y||ve(n)&8)){for(y=0;y<c.length;y++){if(m=c[y],ve(m.o)&2){var C=Xi(m,!1);C.j=m}else C=m;m!==C&&(c[y]=C,n[y]=C.o)}dt(n,8)}return c}function je(n,c,m){if(m!=null&&typeof m!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof m+": "+m);Ge(n,c,m)}function Wi(n,c,m,y,C){ni(n);var b=Ui(n,m,c,!1,!1);return m=y??new m,n=ai(n,c,2,!1),C!=null?(b.splice(C,0,m),n.splice(C,0,m.o)):(b.push(m),n.push(m.o)),m.C()&&_i(n,8),m}function Lt(n,c){return n??c}function Ze(n,c,m){return m=m===void 0?0:m,Lt(ui(n,c),m)}var _t;function Sr(n){switch(typeof n){case"number":return isFinite(n)?n:String(n);case"object":if(n)if(Array.isArray(n)){if((ve(n)&128)!==0)return n=Array.prototype.slice.call(n),si(n),n}else{if($t&&n!=null&&n instanceof Uint8Array)return V(n);if(n instanceof gt){var c=n.V;return c==null?"":typeof c=="string"?c:n.V=V(c)}}}return n}function Vi(n,c,m,y){if(n!=null){if(Array.isArray(n))n=ci(n,c,m,y!==void 0);else if(Mt(n)){var C={},b;for(b in n)C[b]=Vi(n[b],c,m,y);n=C}else n=c(n,y);return n}}function ci(n,c,m,y){var C=ve(n);y=y?!!(C&16):void 0,n=Array.prototype.slice.call(n);for(var b=0;b<n.length;b++)n[b]=Vi(n[b],c,m,y);return m(C,n),n}function br(n){return n.ja===oi?n.toJSON():Sr(n)}function kr(n,c){n&128&&si(c)}function Hi(n,c,m){if(m=m===void 0?Et:m,n!=null){if($t&&n instanceof Uint8Array)return n.length?new gt(new Uint8Array(n),mt):Jt();if(Array.isArray(n)){var y=ve(n);return y&2?n:c&&!(y&32)&&(y&16||y===0)?(He(n,y|2),n):(n=ci(n,Hi,y&4?Et:m,!0),c=ve(n),c&4&&c&2&&Object.freeze(n),n)}return n.ja===oi?ji(n):n}}function Gi(n,c,m,y,C,b,S){if(n=n.h&&n.h[m]){if(y=ve(n),y&2?y=n:(b=mr(n,ji),Et(y,b),Object.freeze(b),y=b),ni(c),S=y==null?vt:ri([]),y!=null){for(b=!!y.length,n=0;n<y.length;n++){var I=y[n];b=b&&!(ve(I.o)&2),S[n]=I.o}b=(b?8:0)|1,n=ve(S),(n&b)!==b&&(Object.isFrozen(S)&&(S=Array.prototype.slice.call(S)),He(S,n|b)),c.h||(c.h={}),c.h[m]=y}else c.h&&(c.h[m]=void 0);Ct(c,m,S,C)}else Ge(c,m,Hi(y,b,S),C)}function ji(n){return ve(n.o)&2||(n=Xi(n,!0),dt(n.o,2)),n}function Xi(n,c){var m=n.o,y=[];dt(y,16);var C=n.constructor.h;if(C&&y.push(C),C=n.B,C){y.length=m.length,y.fill(void 0,y.length,m.length);var b={};y[y.length-1]=b}(ve(m)&128)!==0&&si(y),c=c||n.C()?Et:Cr,b=n.constructor,_t=y,y=new b(y),_t=void 0,n.R&&(y.R=n.R.slice()),b=!!(ve(m)&16);for(var S=C?m.length-1:m.length,I=0;I<S;I++)Gi(n,y,I-n.G,m[I],!1,b,c);if(C)for(var N in C)Gi(n,y,+N,C[N],!0,b,c);return y}function Fe(n,c,m){n==null&&(n=_t),_t=void 0;var y=this.constructor.i||0,C=0<y,b=this.constructor.h,S=!1;if(n==null){n=b?[b]:[];var I=48,N=!0;C&&(y=0,I|=128),He(n,I)}else{if(!Array.isArray(n)||b&&b!==n[0])throw Error();var M=I=dt(n,0);if((N=(16&M)!==0)&&((S=(32&M)!==0)||(M|=32)),C){if(128&M)y=0;else if(0<n.length){var W=n[n.length-1];if(Mt(W)&&"g"in W){y=0,M|=128,delete W.g;var J=!0,q;for(q in W){J=!1;break}J&&n.pop()}}}else if(128&M)throw Error();I!==M&&He(n,M)}this.G=(b?0:-1)-y,this.h=void 0,this.o=n;e:{if(b=this.o.length,y=b-1,b&&(b=this.o[y],Mt(b))){this.B=b,this.i=y-this.G;break e}c!==void 0&&-1<c?(this.i=Math.max(c,y+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!C&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(m){c=N&&!S&&!0,C=this.i;var G;for(N=0;N<m.length;N++)S=m[N],S<C?(S+=this.G,(y=n[S])?nt(y,c):n[S]=vt):(G||(G=Oi(this)),(y=G[S])?nt(y,c):G[S]=vt)}}Fe.prototype.toJSON=function(){return ci(this.o,br,kr)},Fe.prototype.C=function(){return!!(ve(this.o)&2)};function nt(n,c){if(Array.isArray(n)){var m=ve(n),y=1;!c||m&2||(y|=16),(m&y)!==y&&He(n,m|y)}}Fe.prototype.ja=oi,Fe.prototype.toString=function(){return this.o.toString()};function Xe(n,c,m){if(m){var y={},C;for(C in m){var b=m[C],S=b.ra;S||(y.J=b.xa||b.oa.W,b.ia?(y.aa=bt(b.ia),S=function(I){return function(N,M,W){return I.J(N,M,W,I.aa)}}(y)):b.ka?(y.Z=Ki(b.da.P,b.ka),S=function(I){return function(N,M,W){return I.J(N,M,W,I.Z)}}(y)):S=y.J,b.ra=S),S(c,n,b.da),y={J:y.J,aa:y.aa,Z:y.Z}}}vr(c,n)}var Ke=Symbol();function hi(n,c,m){return n[Ke]||(n[Ke]=function(y,C){return c(y,C,m)})}function Bt(n){var c=n[Ke];if(!c){var m=X(n);c=function(y,C){return Yi(y,C,m)},n[Ke]=c}return c}function Ir(n){var c=n.ia;if(c)return Bt(c);if(c=n.wa)return hi(n.da.P,c,n.ka)}function Rr(n){var c=Ir(n),m=n.da,y=n.oa.U;return c?function(C,b){return y(C,b,m,c)}:function(C,b){return y(C,b,m)}}function St(n,c){var m=n[c];return typeof m=="function"&&m.length===0&&(m=m(),n[c]=m),Array.isArray(m)&&(It in m||kt in m||0<m.length&&typeof m[0]=="function")?m:void 0}function di(n,c,m,y,C,b){c.P=n[0];var S=1;if(n.length>S&&typeof n[S]!="number"){var I=n[S++];m(c,I)}for(;S<n.length;){m=n[S++];for(var N=S+1;N<n.length&&typeof n[N]!="number";)N++;switch(I=n[S++],N-=S,N){case 0:y(c,m,I);break;case 1:(N=St(n,S))?(S++,C(c,m,I,N)):y(c,m,I,n[S++]);break;case 2:N=S++,N=St(n,N),C(c,m,I,N,n[S++]);break;case 3:b(c,m,I,n[S++],n[S++],n[S++]);break;case 4:b(c,m,I,n[S++],n[S++],n[S++],n[S++]);break;default:throw Error("unexpected number of binary field arguments: "+N)}}return c}var Ot=Symbol();function bt(n){var c=n[Ot];if(!c){var m=pi(n);c=function(y,C){return Rt(y,C,m)},n[Ot]=c}return c}function Ki(n,c){var m=n[Ot];return m||(m=function(y,C){return Xe(y,C,c)},n[Ot]=m),m}var kt=Symbol();function Pr(n,c){n.push(c)}function Dr(n,c,m){n.push(c,m.W)}function Ar(n,c,m,y){var C=bt(y),b=pi(y).P,S=m.W;n.push(c,function(I,N,M){return S(I,N,M,b,C)})}function Nr(n,c,m,y,C,b){var S=Ki(y,b),I=m.W;n.push(c,function(N,M,W){return I(N,M,W,y,S)})}function pi(n){var c=n[kt];return c||(c=di(n,n[kt]=[],Pr,Dr,Ar,Nr),It in n&&kt in n&&(n.length=0),c)}var It=Symbol();function Fr(n,c){n[0]=c}function $r(n,c,m,y){var C=m.U;n[c]=y?function(b,S,I){return C(b,S,I,y)}:C}function Pe(n,c,m,y,C){var b=m.U,S=Bt(y),I=X(y).P;n[c]=function(N,M,W){return b(N,M,W,I,S,C)}}function Tr(n,c,m,y,C,b,S){var I=m.U,N=hi(y,C,b);n[c]=function(M,W,J){return I(M,W,J,y,N,S)}}function X(n){var c=n[It];return c||(c=di(n,n[It]={},Fr,$r,Pe,Tr),It in n&&kt in n&&(n.length=0),c)}function Yi(n,c,m){for(;Li(c)&&c.i!=4;){var y=c.l,C=m[y];if(!C){var b=m[0];b&&(b=b[y])&&(C=m[y]=Rr(b))}if(!C||!C(c,n,y)){C=c,y=n,b=C.j,zt(C);var S=C;if(!S.ca){if(C=S.h.h-b,S.h.h=b,S=S.h,C==0)C=Jt();else{if(b=Ei(S,C),S.S&&S.m)C=S.i.subarray(b,b+C);else{S=S.i;var I=b;C=b+C,C=I===C?qt():ht?S.slice(I,C):new Uint8Array(S.subarray(I,C))}C=C.length==0?Jt():new gt(C,mt)}(b=y.R)?b.push(C):y.R=[C]}}}return n}function Rt(n,c,m){for(var y=m.length,C=y%2==1,b=C?1:0;b<y;b+=2)(0,m[b+1])(c,n,m[b]);Xe(n,c,C?m[0]:void 0)}function Pt(n,c){return{U:n,W:c}}var Ue=Pt(function(n,c,m){if(n.i!==5)return!1;n=n.h;var y=n.i,C=n.h,b=y[C],S=y[C+1],I=y[C+2];return y=y[C+3],ut(n,n.h+4),S=(b<<0|S<<8|I<<16|y<<24)>>>0,n=2*(S>>31)+1,b=S>>>23&255,S&=8388607,Ge(c,m,b==255?S?NaN:1/0*n:b==0?n*Math.pow(2,-149)*S:n*Math.pow(2,b-150)*(S+Math.pow(2,23))),!0},function(n,c,m){if(c=ui(c,m),c!=null){lt(n.h,8*m+5),n=n.h;var y=+c;y===0?0<1/y?j=Re=0:(Re=0,j=2147483648):isNaN(y)?(Re=0,j=2147483647):(y=(m=0>y?-2147483648:0)?-y:y,34028234663852886e22<y?(Re=0,j=(m|2139095040)>>>0):11754943508222875e-54>y?(y=Math.round(y/Math.pow(2,-149)),Re=0,j=(m|y)>>>0):(c=Math.floor(Math.log(y)/Math.LN2),y*=Math.pow(2,-c),y=Math.round(8388608*y),16777216<=y&&++c,Re=0,j=(m|c+127<<23|y&8388607)>>>0)),m=j,n.h.push(m>>>0&255),n.h.push(m>>>8&255),n.h.push(m>>>16&255),n.h.push(m>>>24&255)}}),qi=Pt(function(n,c,m){if(n.i!==0)return!1;var y=n.h,C=0,b=n=0,S=y.i,I=y.h;do{var N=S[I++];C|=(N&127)<<b,b+=7}while(32>b&&N&128);for(32<b&&(n|=(N&127)>>4),b=3;32>b&&N&128;b+=7)N=S[I++],n|=(N&127)<<b;if(ut(y,I),128>N)y=C>>>0,N=n>>>0,(n=N&2147483648)&&(y=~y+1>>>0,N=~N>>>0,y==0&&(N=N+1>>>0)),y=4294967296*N+(y>>>0);else throw Qt();return Ge(c,m,n?-y:y),!0},function(n,c,m){c=Oe(c,m),c!=null&&(typeof c=="string"&&Ii(c),c!=null&&(lt(n.h,8*m),typeof c=="number"?(n=n.h,Si(c),_(n,j,Re)):(m=Ii(c),_(n.h,m.i,m.h))))}),Ut=Pt(function(n,c,m){return n.i!==0?!1:(Ge(c,m,yt(n.h)),!0)},function(n,c,m){if(c=Oe(c,m),c!=null&&c!=null)if(lt(n.h,8*m),n=n.h,m=c,0<=m)lt(n,m);else{for(c=0;9>c;c++)n.h.push(m&127|128),m>>=7;n.h.push(1)}}),De=Pt(function(n,c,m){if(n.i!==2)return!1;var y=yt(n.h)>>>0;n=n.h;var C=Ei(n,y);if(n=n.i,yr){var b=n,S;(S=Zt)||(S=Zt=new TextDecoder("utf-8",{fatal:!0})),n=C+y,b=C===0&&n===b.length?b:b.subarray(C,n);try{var I=S.decode(b)}catch(J){if(Tt===void 0){try{S.decode(new Uint8Array([128]))}catch{}try{S.decode(new Uint8Array([97])),Tt=!0}catch{Tt=!1}}throw!Tt&&(Zt=void 0),J}}else{I=C,y=I+y,C=[];for(var N=null,M,W;I<y;)M=n[I++],128>M?C.push(M):224>M?I>=y?at():(W=n[I++],194>M||(W&192)!==128?(I--,at()):C.push((M&31)<<6|W&63)):240>M?I>=y-1?at():(W=n[I++],(W&192)!==128||M===224&&160>W||M===237&&160<=W||((b=n[I++])&192)!==128?(I--,at()):C.push((M&15)<<12|(W&63)<<6|b&63)):244>=M?I>=y-2?at():(W=n[I++],(W&192)!==128||(M<<28)+(W-144)>>30!==0||((b=n[I++])&192)!==128||((S=n[I++])&192)!==128?(I--,at()):(M=(M&7)<<18|(W&63)<<12|(b&63)<<6|S&63,M-=65536,C.push((M>>10&1023)+55296,(M&1023)+56320))):at(),8192<=C.length&&(N=Ai(N,C),C.length=0);I=Ai(N,C)}return Ge(c,m,I),!0},function(n,c,m){if(c=Oe(c,m),c!=null){var y=!1;if(y=y===void 0?!1:y,xr){if(y&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(Ni||(Ni=new TextEncoder)).encode(c)}else{for(var C=0,b=new Uint8Array(3*c.length),S=0;S<c.length;S++){var I=c.charCodeAt(S);if(128>I)b[C++]=I;else{if(2048>I)b[C++]=I>>6|192;else{if(55296<=I&&57343>=I){if(56319>=I&&S<c.length){var N=c.charCodeAt(++S);if(56320<=N&&57343>=N){I=1024*(I-55296)+N-56320+65536,b[C++]=I>>18|240,b[C++]=I>>12&63|128,b[C++]=I>>6&63|128,b[C++]=I&63|128;continue}else S--}if(y)throw Error("Found an unpaired surrogate");I=65533}b[C++]=I>>12|224,b[C++]=I>>6&63|128}b[C++]=I&63|128}}c=C===b.length?b:b.subarray(0,C)}lt(n.h,8*m+2),lt(n.h,c.length),wt(n,n.h.end()),wt(n,c)}}),Qi=Pt(function(n,c,m,y,C){if(n.i!==2)return!1;c=Wi(c,m,y),m=n.h.j,y=yt(n.h)>>>0;var b=n.h.h+y,S=b-m;if(0>=S&&(n.h.j=b,C(c,n,void 0,void 0,void 0),S=b-n.h.h),S)throw Error("Message parsing ended unexpectedly. Expected to read "+(y+" bytes, instead read "+(y-S)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return n.h.h=b,n.h.j=m,!0},function(n,c,m,y,C){if(c=li(c,y,m),c!=null)for(y=0;y<c.length;y++){var b=n;lt(b.h,8*m+2);var S=b.h.end();wt(b,S),S.push(b.i),b=S,C(c[y],n),S=n;var I=b.pop();for(I=S.i+S.h.length()-I;127<I;)b.push(I&127|128),I>>>=7,S.i++;b.push(I),S.i++}});function Je(n){return function(c,m){e:{if(ii.length){var y=ii.pop();y.setOptions(m),ei(y.h,c,m),c=y}else c=new ti(c,m);try{var C=X(n),b=Yi(new C.P,c,C);break e}finally{C=c.h,C.i=null,C.m=!1,C.l=0,C.j=0,C.h=0,C.S=!1,c.l=-1,c.i=-1,100>ii.length&&ii.push(c)}b=void 0}return b}}function fi(n){return function(){var c=new Qr;Rt(this,c,pi(n)),wt(c,c.h.end());for(var m=new Uint8Array(c.i),y=c.j,C=y.length,b=0,S=0;S<C;S++){var I=y[S];m.set(I,b),b+=I.length}return c.j=[m],m}}function We(n){Fe.call(this,n)}Q(We,Fe);var ne=[We,1,Ut,2,Ue,3,De,4,De];We.prototype.l=fi(ne);function Ce(n){Fe.call(this,n,-1,zr)}Q(Ce,Fe),Ce.prototype.addClassification=function(n,c){return Wi(this,1,We,n,c),this};var zr=[1],Er=Je([Ce,1,Qi,ne]);function Dt(n){Fe.call(this,n)}Q(Dt,Fe);var Zi=[Dt,1,Ue,2,Ue,3,Ue,4,Ue,5,Ue];Dt.prototype.l=fi(Zi);function Ji(n){Fe.call(this,n,-1,Mr)}Q(Ji,Fe);var Mr=[1],Lr=Je([Ji,1,Qi,Zi]);function Wt(n){Fe.call(this,n)}Q(Wt,Fe);var er=[Wt,1,Ue,2,Ue,3,Ue,4,Ue,5,Ue,6,qi],Zr=Je(er);Wt.prototype.l=fi(er);function tr(n,c,m){if(m=n.createShader(m===0?n.VERTEX_SHADER:n.FRAGMENT_SHADER),n.shaderSource(m,c),n.compileShader(m),!n.getShaderParameter(m,n.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+n.getShaderInfoLog(m));return m}function _r(n){return li(n,We,1).map(function(c){var m=Oe(c,1);return{index:m??0,qa:Ze(c,2),label:Oe(c,3)!=null?Lt(Oe(c,3),""):void 0,displayName:Oe(c,4)!=null?Lt(Oe(c,4),""):void 0}})}function Br(n){return{x:Ze(n,1),y:Ze(n,2),z:Ze(n,3),visibility:ui(n,4)!=null?Ze(n,4):void 0}}function mi(n){return li(Lr(n),Dt,1).map(Br)}function gi(n,c){this.i=n,this.h=c,this.m=0}function ir(n,c,m){return Or(n,c),typeof n.h.canvas.transferToImageBitmap=="function"?Promise.resolve(n.h.canvas.transferToImageBitmap()):m?Promise.resolve(n.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(n.h.canvas):(n.j===void 0&&(n.j=document.createElement("canvas")),new Promise(function(y){n.j.height=n.h.canvas.height,n.j.width=n.h.canvas.width,n.j.getContext("2d",{}).drawImage(n.h.canvas,0,0,n.h.canvas.width,n.h.canvas.height),y(n.j)}))}function Or(n,c){var m=n.h;if(n.s===void 0){var y=tr(m,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),C=tr(m,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),b=m.createProgram();if(m.attachShader(b,y),m.attachShader(b,C),m.linkProgram(b),!m.getProgramParameter(b,m.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+m.getProgramInfoLog(b));y=n.s=b,m.useProgram(y),C=m.getUniformLocation(y,"sampler0"),n.l={O:m.getAttribLocation(y,"aVertex"),N:m.getAttribLocation(y,"aTex"),ya:C},n.v=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,n.v),m.enableVertexAttribArray(n.l.O),m.vertexAttribPointer(n.l.O,2,m.FLOAT,!1,0,0),m.bufferData(m.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,null),n.u=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,n.u),m.enableVertexAttribArray(n.l.N),m.vertexAttribPointer(n.l.N,2,m.FLOAT,!1,0,0),m.bufferData(m.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),m.STATIC_DRAW),m.bindBuffer(m.ARRAY_BUFFER,null),m.uniform1i(C,0)}y=n.l,m.useProgram(n.s),m.canvas.width=c.width,m.canvas.height=c.height,m.viewport(0,0,c.width,c.height),m.activeTexture(m.TEXTURE0),n.i.bindTexture2d(c.glName),m.enableVertexAttribArray(y.O),m.bindBuffer(m.ARRAY_BUFFER,n.v),m.vertexAttribPointer(y.O,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(y.N),m.bindBuffer(m.ARRAY_BUFFER,n.u),m.vertexAttribPointer(y.N,2,m.FLOAT,!1,0,0),m.bindFramebuffer(m.DRAW_FRAMEBUFFER?m.DRAW_FRAMEBUFFER:m.FRAMEBUFFER,null),m.clearColor(0,0,0,0),m.clear(m.COLOR_BUFFER_BIT),m.colorMask(!0,!0,!0,!0),m.drawArrays(m.TRIANGLE_FAN,0,4),m.disableVertexAttribArray(y.O),m.disableVertexAttribArray(y.N),m.bindBuffer(m.ARRAY_BUFFER,null),n.i.bindTexture2d(0)}function ao(n){this.h=n}var uo=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function lo(n,c){return c+n}function Jr(n,c){window[n]=c}function co(n){var c=document.createElement("script");return c.setAttribute("src",n),c.setAttribute("crossorigin","anonymous"),new Promise(function(m){c.addEventListener("load",function(){m()},!1),c.addEventListener("error",function(){m()},!1),document.body.appendChild(c)})}function ho(){return ke(function(n){switch(n.h){case 1:return n.s=2,R(n,WebAssembly.instantiate(uo),4);case 4:n.h=3,n.s=0;break;case 2:return n.s=0,n.l=null,n.return(!1);case 3:return n.return(!0)}})}function Ur(n){if(this.h=n,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=n&&n.locateFile||lo,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,n.options){c=Se(Object.keys(n.options));for(var m=c.next();!m.done;m=c.next()){m=m.value;var y=n.options[m].default;y!==void 0&&(this.l[m]=typeof y=="function"?y():y)}}}ye=Ur.prototype,ye.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function po(n){var c,m,y,C,b,S,I,N,M,W,J;return ke(function(q){switch(q.h){case 1:return n.ga?(c=n.h.files===void 0?[]:typeof n.h.files=="function"?n.h.files(n.l):n.h.files,R(q,ho(),2)):q.return();case 2:if(m=q.i,typeof window=="object")return Jr("createMediapipeSolutionsWasm",{locateFile:n.locateFile}),Jr("createMediapipeSolutionsPackedAssets",{locateFile:n.locateFile}),S=c.filter(function(G){return G.data!==void 0}),I=c.filter(function(G){return G.data===void 0}),N=Promise.all(S.map(function(G){var ee=rr(n,G.url);if(G.path!==void 0){var re=G.path;ee=ee.then(function(me){return n.overrideFile(re,me),Promise.resolve(me)})}return ee})),M=Promise.all(I.map(function(G){return G.simd===void 0||G.simd&&m||!G.simd&&!m?co(n.locateFile(G.url,n.ha)):Promise.resolve()})).then(function(){var G,ee,re;return ke(function(me){if(me.h==1)return G=window.createMediapipeSolutionsWasm,ee=window.createMediapipeSolutionsPackedAssets,re=n,R(me,G(ee),2);re.i=me.i,me.h=0})}),W=function(){return ke(function(G){return n.h.graph&&n.h.graph.url?G=R(G,rr(n,n.h.graph.url),0):(G.h=0,G=void 0),G})}(),R(q,Promise.all([M,N,W]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return y=c.filter(function(G){return G.simd===void 0||G.simd&&m||!G.simd&&!m}).map(function(G){return n.locateFile(G.url,n.ha)}),importScripts.apply(null,it(y)),C=n,R(q,createMediapipeSolutionsWasm(Module),6);case 6:C.i=q.i,n.m=new OffscreenCanvas(1,1),n.i.canvas=n.m,b=n.i.GL.createContext(n.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),n.i.GL.makeContextCurrent(b),q.h=4;break;case 7:if(n.m=document.createElement("canvas"),J=n.m.getContext("webgl2",{}),!J&&(J=n.m.getContext("webgl",{}),!J))return alert("Failed to create WebGL canvas context when passing video frame."),q.return();n.K=J,n.i.canvas=n.m,n.i.createContext(n.m,!0,!0,{});case 4:n.j=new n.i.SolutionWasm,n.ga=!1,q.h=0}})}function fo(n){var c,m,y,C,b,S,I,N;return ke(function(M){if(M.h==1){if(n.h.graph&&n.h.graph.url&&n.fa===n.h.graph.url)return M.return();if(n.u=!0,!n.h.graph||!n.h.graph.url){M.h=2;return}return n.fa=n.h.graph.url,R(M,rr(n,n.h.graph.url),3)}for(M.h!=2&&(c=M.i,n.j.loadGraph(c)),m=Se(Object.keys(n.D)),y=m.next();!y.done;y=m.next())C=y.value,n.j.overrideFile(C,n.D[C]);if(n.D={},n.h.listeners)for(b=Se(n.h.listeners),S=b.next();!S.done;S=b.next())I=S.value,xo(n,I);N=n.l,n.l={},n.setOptions(N),M.h=0})}ye.reset=function(){var n=this;return ke(function(c){n.j&&(n.j.reset(),n.s={},n.v={}),c.h=0})},ye.setOptions=function(n,c){var m=this;if(c=c||this.h.options){for(var y=[],C=[],b={},S=Se(Object.keys(n)),I=S.next();!I.done;b={X:b.X,Y:b.Y},I=S.next())if(I=I.value,!(I in this.l&&this.l[I]===n[I])){this.l[I]=n[I];var N=c[I];N!==void 0&&(N.onChange&&(b.X=N.onChange,b.Y=n[I],y.push(function(M){return function(){var W;return ke(function(J){if(J.h==1)return R(J,M.X(M.Y),2);W=J.i,W===!0&&(m.u=!0),J.h=0})}}(b))),N.graphOptionXref&&(I=Object.assign({},{calculatorName:"",calculatorIndex:0},N.graphOptionXref,{valueNumber:N.type===1?n[I]:0,valueBoolean:N.type===0?n[I]:!1,valueString:N.type===2?n[I]:""}),C.push(I)))}(y.length!==0||C.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(C),this.F=(this.F===void 0?[]:this.F).concat(y))}};function mo(n){var c,m,y,C,b,S,I;return ke(function(N){switch(N.h){case 1:if(!n.u)return N.return();if(!n.F){N.h=2;break}c=Se(n.F),m=c.next();case 3:if(m.done){N.h=5;break}return y=m.value,R(N,y(),4);case 4:m=c.next(),N.h=3;break;case 5:n.F=void 0;case 2:if(n.H){for(C=new n.i.GraphOptionChangeRequestList,b=Se(n.H),S=b.next();!S.done;S=b.next())I=S.value,C.push_back(I);n.j.changeOptions(C),C.delete(),n.H=void 0}n.u=!1,N.h=0}})}ye.initialize=function(){var n=this;return ke(function(c){return c.h==1?R(c,po(n),2):c.h!=3?R(c,fo(n),3):R(c,mo(n),0)})};function rr(n,c){var m,y;return ke(function(C){return c in n.L?C.return(n.L[c]):(m=n.locateFile(c,""),y=fetch(m).then(function(b){return b.arrayBuffer()}),n.L[c]=y,C.return(y))})}ye.overrideFile=function(n,c){this.j?this.j.overrideFile(n,c):this.D[n]=c},ye.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},ye.send=function(n,c){var m=this,y,C,b,S,I,N,M,W,J;return ke(function(q){switch(q.h){case 1:return m.h.inputs?(y=1e3*(c??performance.now()),R(q,m.I,2)):q.return();case 2:return R(q,m.initialize(),3);case 3:for(C=new m.i.PacketDataList,b=Se(Object.keys(n)),S=b.next();!S.done;S=b.next())if(I=S.value,N=m.h.inputs[I]){e:{var G=n[I];switch(N.type){case"video":var ee=m.s[N.stream];if(ee||(ee=new gi(m.i,m.K),m.s[N.stream]=ee),ee.m===0&&(ee.m=ee.i.createTexture()),typeof HTMLVideoElement<"u"&&G instanceof HTMLVideoElement)var re=G.videoWidth,me=G.videoHeight;else typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(re=G.naturalWidth,me=G.naturalHeight):(re=G.width,me=G.height);me={glName:ee.m,width:re,height:me},re=ee.h,re.canvas.width=me.width,re.canvas.height=me.height,re.activeTexture(re.TEXTURE0),ee.i.bindTexture2d(ee.m),re.texImage2D(re.TEXTURE_2D,0,re.RGBA,re.RGBA,re.UNSIGNED_BYTE,G),ee.i.bindTexture2d(0),ee=me;break e;case"detections":for(ee=m.s[N.stream],ee||(ee=new ao(m.i),m.s[N.stream]=ee),ee.data||(ee.data=new ee.h.DetectionListData),ee.data.reset(G.length),me=0;me<G.length;++me){re=G[me];var ue=ee.data,Ae=ue.setBoundingBox,Ye=me,ze=re.la,se=new Wt;if(je(se,1,ze.sa),je(se,2,ze.ta),je(se,3,ze.height),je(se,4,ze.width),je(se,5,ze.rotation),Ge(se,6,ze.pa),ze=se.l(),Ae.call(ue,Ye,ze),re.ea)for(ue=0;ue<re.ea.length;++ue){se=re.ea[ue],Ae=ee.data,Ye=Ae.addNormalizedLandmark,ze=me,se=Object.assign({},se,{visibility:se.visibility?se.visibility:0});var Ne=new Dt;je(Ne,1,se.x),je(Ne,2,se.y),je(Ne,3,se.z),se.visibility&&je(Ne,4,se.visibility),se=Ne.l(),Ye.call(Ae,ze,se)}if(re.ba)for(ue=0;ue<re.ba.length;++ue)Ae=ee.data,Ye=Ae.addClassification,ze=me,se=re.ba[ue],Ne=new We,je(Ne,2,se.qa),se.index&&Ge(Ne,1,se.index),se.label&&Ge(Ne,3,se.label),se.displayName&&Ge(Ne,4,se.displayName),se=Ne.l(),Ye.call(Ae,ze,se)}ee=ee.data;break e;default:ee={}}}switch(M=ee,W=N.stream,N.type){case"video":C.pushTexture2d(Object.assign({},M,{stream:W,timestamp:y}));break;case"detections":J=M,J.stream=W,J.timestamp=y,C.pushDetectionList(J);break;default:throw Error("Unknown input config type: '"+N.type+"'")}}return m.j.send(C),R(q,m.I,4);case 4:C.delete(),q.h=0}})};function go(n,c,m){var y,C,b,S,I,N,M,W,J,q,G,ee,re,me;return ke(function(ue){switch(ue.h){case 1:if(!m)return ue.return(c);for(y={},C=0,b=Se(Object.keys(m)),S=b.next();!S.done;S=b.next())I=S.value,N=m[I],typeof N!="string"&&N.type==="texture"&&c[N.stream]!==void 0&&++C;1<C&&(n.M=!1),M=Se(Object.keys(m)),S=M.next();case 2:if(S.done){ue.h=4;break}if(W=S.value,J=m[W],typeof J=="string")return re=y,me=W,R(ue,yo(n,W,c[J]),14);if(q=c[J.stream],J.type==="detection_list"){if(q){for(var Ae=q.getRectList(),Ye=q.getLandmarksList(),ze=q.getClassificationsList(),se=[],Ne=0;Ne<Ae.size();++Ne){var pt=Zr(Ae.get(Ne)),wo=Ze(pt,1),vo=Ze(pt,2),io=Ze(pt,3),Co=Ze(pt,4),So=Ze(pt,5,0),or=void 0;or=or===void 0?0:or,pt={la:{sa:wo,ta:vo,height:io,width:Co,rotation:So,pa:Lt(Oe(pt,6),or)},ea:mi(Ye.get(Ne)),ba:_r(Er(ze.get(Ne)))},se.push(pt)}Ae=se}else Ae=[];y[W]=Ae,ue.h=7;break}if(J.type==="proto_list"){if(q){for(Ae=Array(q.size()),Ye=0;Ye<q.size();Ye++)Ae[Ye]=q.get(Ye);q.delete()}else Ae=[];y[W]=Ae,ue.h=7;break}if(q===void 0){ue.h=3;break}if(J.type==="float_list"){y[W]=q,ue.h=7;break}if(J.type==="proto"){y[W]=q,ue.h=7;break}if(J.type!=="texture")throw Error("Unknown output config type: '"+J.type+"'");return G=n.v[W],G||(G=new gi(n.i,n.K),n.v[W]=G),R(ue,ir(G,q,n.M),13);case 13:ee=ue.i,y[W]=ee;case 7:J.transform&&y[W]&&(y[W]=J.transform(y[W])),ue.h=3;break;case 14:re[me]=ue.i;case 3:S=M.next(),ue.h=2;break;case 4:return ue.return(y)}})}function yo(n,c,m){var y;return ke(function(C){return typeof m=="number"||m instanceof Uint8Array||m instanceof n.i.Uint8BlobList?C.return(m):m instanceof n.i.Texture2dDataOut?(y=n.v[c],y||(y=new gi(n.i,n.K),n.v[c]=y),C.return(ir(y,m,n.M))):C.return(void 0)})}function xo(n,c){for(var m=c.name||"$",y=[].concat(it(c.wants)),C=new n.i.StringList,b=Se(c.wants),S=b.next();!S.done;S=b.next())C.push_back(S.value);b=n.i.PacketListener.implement({onResults:function(I){for(var N={},M=0;M<c.wants.length;++M)N[y[M]]=I.get(M);var W=n.listeners[m];W&&(n.I=go(n,N,c.outs).then(function(J){J=W(J);for(var q=0;q<c.wants.length;++q){var G=N[y[q]];typeof G=="object"&&G.hasOwnProperty&&G.hasOwnProperty("delete")&&G.delete()}J&&(n.I=J)}))}}),n.j.attachMultiListener(C,b),C.delete()}ye.onResults=function(n,c){this.listeners[c||"$"]=n},Ie("Solution",Ur),Ie("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function eo(n){switch(n===void 0&&(n=0),n){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function to(n){var c=this;n=n||{},this.h=new Ur({locateFile:n.locateFile,files:function(m){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:eo(m.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:mi},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:mi},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(m){var y,C,b;return ke(function(S){return S.h==1?(y=eo(m),C="third_party/mediapipe/modules/pose_landmark/"+y,R(S,rr(c.h,y),2)):(b=S.i,c.h.overrideFile(C,b),S.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}ye=to.prototype,ye.reset=function(){this.h.reset()},ye.close=function(){return this.h.close(),Promise.resolve()},ye.onResults=function(n){this.h.onResults(n)},ye.initialize=function(){var n=this;return ke(function(c){return R(c,n.h.initialize(),0)})},ye.send=function(n,c){var m=this;return ke(function(y){return R(y,m.h.send(n,c),0)})},ye.setOptions=function(n){this.h.setOptions(n)},Ie("Pose",to),Ie("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),Ie("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),Ie("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),Ie("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),Ie("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),Ie("VERSION","0.5.1675469404")}).call(this)},5924:function(Yr,Nt,oe){"use strict";oe.d(Nt,{GBy:()=>R.GBy,VdP:()=>ae.VdP,lub:()=>fe.lu,XD2:()=>ae.XD2,h62:()=>ae.h62,y7R:()=>R.y7R,CAk:()=>R.CAk,Zz9:()=>R.Zz9,iD$:()=>ae.iD$,glt:()=>K.g,Oyi:()=>R.Oyi,dC7:()=>ae.dC7,hdR:()=>R.hdR,qi_:()=>R.qi_,eZ0:()=>R.eZ0,zvY:()=>R.zvY,XeE:()=>ae.XeE,cye:()=>R.cye,zws:()=>R.zws,J$2:()=>R.J$2,y3$:()=>fe.y3,HHK:()=>ae.HHK,RuY:()=>R.RuY,zbQ:()=>R.zbQ,esB:()=>it.es,OU7:()=>R.OU7,tPi:()=>ae.tPi,B90:()=>fe.B9,Qqt:()=>ae.Qqt,aJk:()=>R.aJk,Xze:()=>R.Xze,Jyw:()=>Te,ZbH:()=>R.ZbH,IHx:()=>ae.IHx,z4k:()=>st.z4,JLz:()=>rt.JL,SRH:()=>fe.SR,D5U:()=>Se,vtC:()=>R.vtC,avt:()=>R.avt,iHb:()=>R.iHb,luU:()=>ae.luU,kuN:()=>Le,d9v:()=>ae.d9v,Hmb:()=>R.Hmb,sEM:()=>R.sEM,usg:()=>R.usg,kU:()=>R.kU,hCO:()=>R.hCO,XLW:()=>R.XLW,dpD:()=>R.dpD,$g6:()=>R.$g6,qkr:()=>R.qkr,xJR:()=>R.xJR,qWM:()=>R.qWM,CnY:()=>fe.Cn,oT6:()=>R.oT6,bV0:()=>R.bV0,DlI:()=>R.DlI,T0n:()=>R.T0n,luS:()=>R.luS,XkS:()=>R.XkS,vFR:()=>R.vFR,Wap:()=>O,SX0:()=>R.SX0,dt4:()=>ae.dt4,zoF:()=>ae.zoF,$HU:()=>R.$HU,$w:()=>R.$w,Hhh:()=>R.Hhh,LTh:()=>ae.LTh,x8V:()=>st.x8,_JP:()=>R._JP,VGw:()=>R.VGw,Zuw:()=>rt.Zu,L8s:()=>R.L8s,xnO:()=>R.xnO,C2$:()=>Q,MIZ:()=>R.MIZ,q8u:()=>R.q8u,vwp:()=>R.vwp,L9e:()=>ae.L9e,wCN:()=>$e.wC,oFR:()=>R.oFR,GDt:()=>ye,Byc:()=>R.Byc,e7N:()=>R.e7N,O3z:()=>R.O3z,NEP:()=>R.NEP,pju:()=>ae.pju,RRF:()=>ae.RRF,Y0y:()=>R.Y0y,OV7:()=>R.OV7,FKq:()=>R.FKq,JhU:()=>R.JhU,NZg:()=>R.NZg,cWu:()=>R.cWu,mc4:()=>R.mc4,Xhn:()=>le,SpW:()=>R.SpW,lyA:()=>R.lyA,HZH:()=>R.HZH,UFq:()=>ae.UFq,Gcp:()=>R.Gcp,hGc:()=>R.hGc,_k9:()=>R._k9,ROF:()=>R.ROF,eEB:()=>R.eEB,i5y:()=>R.i5y,q1x:()=>R.q1x,c17:()=>R.c17,dDz:()=>R.dDz,knu:()=>ae.knu,YDk:()=>it.YD,kpP:()=>R.kpP,PYm:()=>R.PYm,p2w:()=>R.p2w,XLQ:()=>ae.XLQ,jqO:()=>fe.jq,jQs:()=>R.jQs,e6w:()=>R.e6w,qw7:()=>R.qw7,YoZ:()=>R.YoZ,oHH:()=>R.oHH,odF:()=>ae.odF,sHE:()=>R.sHE,o2y:()=>R.o2y,iWB:()=>R.iWB,q2K:()=>R.q2K,CQl:()=>R.CQl,w3H:()=>R.w3H,h8e:()=>R.h8e,RFZ:()=>R.RFZ,MZg:()=>R.MZg,iJz:()=>R.iJz,VfG:()=>R.VfG,QiL:()=>R.QiL,SIB:()=>R.SIB,iZT:()=>R.iZT,_Yw:()=>R._Yw,HEU:()=>R.HEU,Qg5:()=>R.Qg5,sJF:()=>R.sJF,gJX:()=>R.gJX,SYM:()=>R.SYM,yQU:()=>R.yQU,TR1:()=>R.TR1,Omj:()=>R.Omj,OR:()=>R.OR,W0H:()=>R.W0H,Vbg:()=>R.Vbg,Acj:()=>R.Acj,n9L:()=>R.n9L,BMI:()=>R.BMI,r7n:()=>R.r7n,ik2:()=>R.ik2,_V0:()=>R._V0,PhF:()=>R.PhF,jeX:()=>R.jeX,wYn:()=>R.wYn,bK0:()=>R.bK0,kuV:()=>R.kuV,vku:()=>ae.vku,io:()=>be,N_N:()=>fe.N_,lls:()=>ae.lls,MRv:()=>R.MRv,SbG:()=>R.SbG,iUl:()=>ae.iUl,xQA:()=>R.xQA,TQc:()=>R.TQc,we_:()=>R.we_,b9H:()=>R.b9H,_tC:()=>R._tC,o0g:()=>R.o0g,CQI:()=>fe.CQ,e07:()=>R.e07,QCc:()=>R.QCc,VcC:()=>R.VcC,IMb:()=>R.IMb,Vn9:()=>R.Vn9,jMg:()=>R.jMg,G3Y:()=>R.G3Y,a5O:()=>R.a5O,nr8:()=>R.nr8,yj2:()=>R.yj2,IKK:()=>R.IKK,uv1:()=>R.uv1,OAf:()=>R.OAf,nhH:()=>R.nhH,Qvg:()=>R.Qvg,wx7:()=>R.wx7,deh:()=>R.deh,x12:()=>R.x12,hiC:()=>ae.hiC,s1s:()=>R.s1s,NqF:()=>ae.NqF,YFo:()=>R.YFo,wm:()=>R.wm,BiW:()=>R.BiW,jQk:()=>R.jQk,ToN:()=>R.ToN,pe_:()=>R.pe_,Uyb:()=>R.Uyb,ekb:()=>R.ekb,Eh3:()=>R.Eh3,D2d:()=>R.D2d,p4S:()=>R.p4S,eBW:()=>R.eBW,J_u:()=>R.J_u,mm_:()=>R.mm_,M2y:()=>R.M2y,mTV:()=>R.mTV,BHj:()=>ae.BHj,f3b:()=>ae.f3b,wYB:()=>R.wYB,cie:()=>R.cie,mhS:()=>R.mhS,QRR:()=>R.QRR,ZjV:()=>R.ZjV,e0R:()=>R.e0R,sL$:()=>R.sL$,mKl:()=>R.mKl,Tr8:()=>R.Tr8,OBj:()=>ct.OB,wUP:()=>R.wUP,RQH:()=>R.RQH});var ye={};oe.r(ye),oe.d(ye,{nonMaxSuppressionV3Impl:()=>T.GP,nonMaxSuppressionV4Impl:()=>T.qP,nonMaxSuppressionV5Impl:()=>T.pA,whereImpl:()=>we.Z});var l=oe(7450),xe=oe(4642),be=oe(7884),Te=oe(6255),le=oe(4697),Le=oe(6130),Se=oe(2891),it=oe(1038),st=oe(6154),ae=oe(4337),fe=oe(4531),$e=oe(5042),ct=oe(6650),K=oe(290),O=oe(371),Q=oe(857),T=oe(8135),we=oe(9560);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rt=oe(3993),R=oe(4403);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(0,xe.V)()},4403:function(Yr,Nt,oe){"use strict";oe.d(Nt,{$HU:()=>ji,$g6:()=>gr,$w:()=>qt,Acj:()=>gt,BMI:()=>ve,BiW:()=>kr,Byc:()=>vi,CAk:()=>Mi,CQl:()=>br,D2d:()=>qi,DlI:()=>Vi,Eh3:()=>qe,FKq:()=>Fr,G3Y:()=>Mr,GBy:()=>$r,Gcp:()=>X,HEU:()=>ki,HZH:()=>Fe,Hhh:()=>Qe,Hmb:()=>Xe,IKK:()=>Le,IMb:()=>T,J$2:()=>yt,J_u:()=>wr,JhU:()=>K,L8s:()=>Tr,M2y:()=>st,MIZ:()=>Er,MRv:()=>It,MZg:()=>zt,NEP:()=>Pi,NZg:()=>Oi,O3z:()=>Yi,OAf:()=>Cr,OR:()=>Zt,OU7:()=>Et,OV7:()=>ri,Omj:()=>Ii,Oyi:()=>$e,PYm:()=>ti,PhF:()=>Ki,QCc:()=>ct,QRR:()=>V,Qg5:()=>Ti,QiL:()=>Wi,Qvg:()=>er,RFZ:()=>ot,ROF:()=>O,RQH:()=>Dr,RuY:()=>tr,SIB:()=>Ot,SX0:()=>bi,SYM:()=>ye,SbG:()=>Bt,SpW:()=>xe,T0n:()=>Kt,TQc:()=>Pe,TR1:()=>U,ToN:()=>Wt,Tr8:()=>Ce,Uyb:()=>Tt,VGw:()=>l,Vbg:()=>si,VcC:()=>Xt,VfG:()=>Li,Vn9:()=>j,W0H:()=>Ui,XLW:()=>we,XkS:()=>ne,Xze:()=>Te,Y0y:()=>Di,YFo:()=>Qt,YoZ:()=>_i,ZbH:()=>_,ZjV:()=>Ue,Zz9:()=>ke,_JP:()=>fi,_V0:()=>ir,_Yw:()=>Ke,_k9:()=>Q,_tC:()=>Ut,a5O:()=>pi,aJk:()=>it,avt:()=>zi,b9H:()=>mi,bK0:()=>De,bV0:()=>St,c17:()=>vt,cWu:()=>Zi,cie:()=>Ci,cye:()=>ui,dDz:()=>ci,deh:()=>Ai,dpD:()=>nt,e07:()=>Rr,e0R:()=>Qi,e6w:()=>Hi,e7N:()=>xt,eBW:()=>Br,eEB:()=>Gt,eZ0:()=>vr,ekb:()=>ht,gJX:()=>dr,h8e:()=>_r,hCO:()=>cr,hGc:()=>Re,hdR:()=>Ri,i5y:()=>Nr,iHb:()=>$t,iJz:()=>Jt,iWB:()=>ei,iZT:()=>$i,ik2:()=>_e,jMg:()=>fe,jQk:()=>Je,jQs:()=>ni,jeX:()=>yr,kU:()=>lt,kpP:()=>Lr,kuV:()=>Ge,luS:()=>Or,lyA:()=>Lt,mKl:()=>Ir,mTV:()=>He,mc4:()=>qr,mhS:()=>Ft,mm_:()=>be,n9L:()=>Dt,nhH:()=>Rt,nr8:()=>bt,o0g:()=>Sr,o2y:()=>jt,oFR:()=>kt,oHH:()=>Si,oT6:()=>le,p2w:()=>Pr,p4S:()=>mt,pe_:()=>_t,q1x:()=>Fi,q2K:()=>Mt,q8u:()=>Bi,qWM:()=>li,qi_:()=>xr,qkr:()=>Xi,qw7:()=>ae,r7n:()=>ut,s1s:()=>We,sEM:()=>zr,sHE:()=>Ni,sJF:()=>Se,sL$:()=>Yt,usg:()=>gi,uv1:()=>ai,vFR:()=>oi,vtC:()=>Ei,vwp:()=>at,w3H:()=>Pt,wUP:()=>Ie,wYB:()=>Ar,wYn:()=>Oe,we_:()=>je,wm:()=>wi,wx7:()=>Ji,x12:()=>mr,xJR:()=>Gi,xQA:()=>di,xnO:()=>pr,y7R:()=>Be,yQU:()=>Ct,yj2:()=>fr,zbQ:()=>hi,zvY:()=>R,zws:()=>rt});const ye="Abs",l="Acos",xe="Acosh",be="Add",Te="AddN",le="All",Le="Any",Se="ArgMax",it="ArgMin",st="Asin",ae="Asinh",fe="Atan",$e="Atanh",ct="Atan2",K="AvgPool",O="AvgPoolGrad",Q="AvgPool3D",T="AvgPool3DGrad",we="BatchMatMul",rt="BatchToSpaceND",R="Bincount",cr="BitwiseAnd",hr="BroadcastTo",Gt="BroadcastArgs",ot="Cast",dr="Ceil",pr="ClipByValue",ke="Complex",fr="ComplexAbs",qe="Concat",Ft="Conv2D",Ie="Conv2DBackpropFilter",wi="Conv2DBackpropInput",mr="Conv3D",jt="Conv3DBackpropFilterV2",_e="Conv3DBackpropInputV2",qr="Cos",U="Cosh",vi="Cumprod",$t="Cumsum",Xt="CropAndResize",V="DenseBincount",Kt="DepthToSpace",Ci="DepthwiseConv2dNative",Yt="DepthwiseConv2dNativeBackpropFilter",Be="DepthwiseConv2dNativeBackpropInput",qt="Diag",mt="Dilation2D",ht="Dilation2DBackpropInput",j="Dilation2DBackpropFilter",Re="Draw",Si="RealDiv",gr="Einsum",bi="Elu",ki="EluGrad",Ii="Erf",Ri="Equal",Pi="Exp",Qt="ExpandDims",Di="Expm1",at="FFT",Ai="Fill",Tt="FlipLeftRight",Zt="Floor",yr="FloorDiv",Ni="FusedBatchNorm",xr="GatherV2",Fi="GatherNd",$i="Greater",gt="GreaterEqual",Jt="Identity",Ti="IFFT",wr="Imag",zi="IsFinite",ei="IsInf",ut="IsNan",yt="LeakyRelu",Ei="Less",Mi="LessEqual",xt="LinSpace",_="Log",lt="Log1p",ti="LogicalAnd",Li="LogicalNot",zt="LogicalOr",ii="LogicalXor",Qr="LogSoftmax",wt="LowerBound",vr="LRN",Qe="LRNGrad",dt="MatrixBandPart",_i="Max",ve="Maximum",He="MaxPool",ri="MaxPoolGrad",Cr="MaxPool3D",Et="MaxPool3DGrad",oi="MaxPoolWithArgmax",Mt="Mean",vt="Min",Bi="Minimum",ni="MirrorPad",si="Mod",Oi="Multinomial",Oe="Multiply",Ge="Neg",Ct="NotEqual",ai="NonMaxSuppressionV3",ui="NonMaxSuppressionV4",Ui="NonMaxSuppressionV5",li="OnesLike",je="OneHot",Wi="Pack",Lt="PadV2",Ze="Pool",_t="Pow",Sr="Prelu",Vi="Prod",ci="RaggedGather",br="RaggedRange",kr="RaggedTensorToTensor",Hi="Range",Gi="Real",ji="Reciprocal",Xi="Relu",Fe="Reshape",nt="ResizeNearestNeighbor",Xe="ResizeNearestNeighborGrad",Ke="ResizeBilinear",hi="ResizeBilinearGrad",Bt="Relu6",Ir="Reverse",Rr="Round",St="Rsqrt",di="ScatterNd",Ot="TensorScatterUpdate",bt="SearchSorted",Ki="Select",kt="Selu",Pr="Slice",Dr="Sin",Ar="Sinh",Nr="Sign",pi="Sigmoid",It="Softplus",Fr="Sqrt",$r="Sum",Pe="SpaceToBatchND",Tr="SplitV",X="Softmax",Yi="SparseFillEmptyRows",Rt="SparseReshape",Pt="SparseSegmentMean",Ue="SparseSegmentSum",qi="SparseToDense",Ut="SquaredDifference",De="Square",Qi="StaticRegexReplace",Je="StridedSlice",fi="StringNGrams",We="StringSplit",ne="StringToHashBucketFast",Ce="Sub",zr="Tan",Er="Tanh",Dt="Tile",Zi="TopK",Ji="Transform",Mr="Transpose",Lr="Unique",Wt="Unpack",er="UnsortedSegmentSum",Zr="UpperBound",tr="ZerosLike",_r="Step",Br="FromPixels",mi="RotateWithOffset",gi="_FusedMatMul",ir="FusedConv2D",Or="FusedDepthwiseConv2D"},1038:function(Yr,Nt,oe){"use strict";oe.d(Nt,{FZ:()=>ae,Vi:()=>it,Vp:()=>st,YD:()=>Te,_w:()=>ct,es:()=>fe,t3:()=>$e});var ye=oe(2360),l=oe(9544),xe=oe(9024),be=oe(2891);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Te{constructor(O,Q,T){if(this.dtype=Q,this.shape=O.slice(),this.size=xe.NA(O),T!=null){const we=T.length;xe.hu(we===this.size,()=>`Length of values '${we}' does not match the size inferred by the shape '${this.size}'.`)}if(Q==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=T||xe.rQ(Q,this.size),this.strides=(0,xe.e3)(O)}set(O,...Q){Q.length===0&&(Q=[0]),xe.hu(Q.length===this.rank,()=>`The number of provided coordinates (${Q.length}) must match the rank (${this.rank})`);const T=this.locToIndex(Q);this.values[T]=O}get(...O){O.length===0&&(O=[0]);let Q=0;for(const we of O){if(we<0||we>=this.shape[Q]){const rt=`Requested out of range element at ${O}.   Buffer shape=${this.shape}`;throw new Error(rt)}Q++}let T=O[O.length-1];for(let we=0;we<O.length-1;++we)T+=this.strides[we]*O[we];return this.values[T]}locToIndex(O){if(this.rank===0)return 0;if(this.rank===1)return O[0];let Q=O[O.length-1];for(let T=0;T<O.length-1;++T)Q+=this.strides[T]*O[T];return Q}indexToLoc(O){if(this.rank===0)return[];if(this.rank===1)return[O];const Q=new Array(this.shape.length);for(let T=0;T<Q.length-1;++T)Q[T]=Math.floor(O/this.strides[T]),O-=Q[T]*this.strides[T];return Q[Q.length-1]=O,Q}get rank(){return this.shape.length}toTensor(){return le().makeTensor(this.values,this.shape,this.dtype)}}let le=null,Le=null,Se=null;function it(K){le=K}function st(K){Le=K}function ae(K){Se=K}class fe{constructor(O,Q,T,we){this.kept=!1,this.isDisposedInternal=!1,this.shape=O.slice(),this.dtype=Q||"float32",this.size=xe.NA(O),this.strides=(0,xe.e3)(O),this.dataId=T,this.id=we,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const O=await this.data();return Le.buffer(this.shape,this.dtype,O)}bufferSync(){return Le.buffer(this.shape,this.dtype,this.dataSync())}async array(){const O=await this.data();return(0,xe.GX)(this.shape,O,this.dtype==="complex64")}arraySync(){return(0,xe.GX)(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const O=le().read(this.dataId);if(this.dtype==="string"){const Q=await O;try{return Q.map(T=>be.decodeString(T))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return O}dataToGPU(O){return this.throwIfDisposed(),le().readToGPU(this.dataId,O)}dataSync(){this.throwIfDisposed();const O=le().readSync(this.dataId);if(this.dtype==="string")try{return O.map(Q=>be.decodeString(Q))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return O}async bytes(){this.throwIfDisposed();const O=await le().read(this.dataId);return this.dtype==="string"?O:new Uint8Array(O.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),le().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(O=!1){return Le.print(this,O)}clone(){return this.throwIfDisposed(),Le.clone(this)}toString(O=!1){const Q=this.dataSync();return(0,l.H)(Q,this.shape,this.dtype,O)}cast(O){return this.throwIfDisposed(),Le.cast(this,O)}variable(O=!0,Q,T){return this.throwIfDisposed(),le().makeVariable(this,O,Q,T)}}Object.defineProperty(fe,Symbol.hasInstance,{value:K=>!!K&&K.data!=null&&K.dataSync!=null&&K.throwIfDisposed!=null});function $e(){return(0,ye.R)("Tensor",()=>fe)}$e();class ct extends fe{constructor(O,Q,T,we){super(O.shape,O.dtype,O.dataId,we),this.trainable=Q,this.name=T}assign(O){if(O.dtype!==this.dtype)throw new Error(`dtype of the new value (${O.dtype}) and previous value (${this.dtype}) must match`);if(!xe.cO(O.shape,this.shape))throw new Error(`shape of the new value (${O.shape}) and previous value (${this.shape}) must match`);le().disposeTensor(this),this.dataId=O.dataId,le().incRef(this,null)}dispose(){le().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(ct,Symbol.hasInstance,{value:K=>K instanceof fe&&K.assign!=null&&K.assign instanceof Function})},4500:function(Yr,Nt,oe){"use strict";oe.d(Nt,{cH:()=>Vp,oV:()=>Me});var ye=oe(1734),l=oe(5924),xe=oe(8312);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const be=(0,l.OBj)();be.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",()=>15),be.registerFlag("WEBGPU_CPU_FORWARD",()=>!0),be.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",()=>-1),be.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",()=>!0),be.registerFlag("WEBGPU_USE_LOW_POWER_GPU",()=>!1),be.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e3),be.registerFlag("WEBGPU_USE_PROFILE_TOOL",()=>!1),be.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",()=>!0),be.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",()=>!1),be.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",()=>-1),be.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",()=>!1),be.registerFlag("WEBGPU_PRINT_SHADER",()=>""),be.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",()=>!1);/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Te{constructor(t){t&&(this.vendor=t.vendor,this.architecture=t.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return this.vendor==="intel"}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class le{constructor(t){this.device=t,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(t,e,r=!1,o=!0){let s;const a=Le(t,e);return o?(this.freeBuffers.has(a)||this.freeBuffers.set(a,[]),this.freeBuffers.get(a).length>0?(s=this.freeBuffers.get(a).pop(),this.numFreeBuffers--):(s=this.device.createBuffer({size:t,usage:e,mappedAtCreation:r}),this.numBytesAllocated+=t)):(s=this.device.createBuffer({size:t,usage:e,mappedAtCreation:r}),this.numBytesAllocated+=t),this.usedBuffers.has(a)||this.usedBuffers.set(a,[]),this.usedBuffers.get(a).push(s),this.numUsedBuffers++,this.numBytesUsed+=t,s}releaseBuffer(t,e=!0){if(this.freeBuffers.size===0)return;const r=t.size,o=t.usage,s=Le(r,o),a=this.usedBuffers.get(s),u=a.indexOf(t);if(u<0)throw new Error("Cannot find the buffer in buffer manager");a[u]=a[a.length-1],a.pop(),this.numUsedBuffers--,this.numBytesUsed-=r,e?(this.freeBuffers.get(s).push(t),this.numFreeBuffers++):(t.destroy(),this.numBytesAllocated-=r)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.usedBuffers.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function Le(i,t){return`${i}_${t}`}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Se{constructor(t){this.device=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(t,e,r,o){const s=st(r),a=t*e*s,u=it(t,e,r,o);if(this.freeTextures.has(u)||this.freeTextures.set(u,[]),this.usedTextures.has(u)||this.usedTextures.set(u,[]),this.numBytesUsed+=a,this.numUsedTextures++,this.freeTextures.get(u).length>0){this.numFreeTextures--;const d=this.freeTextures.get(u).shift();return this.usedTextures.get(u).push(d),d}this.numBytesAllocated+=a;const h=this.device.createTexture({size:[t,e],format:r,usage:o});return this.usedTextures.get(u).push(h),h}releaseTexture(t){if(this.freeTextures.size===0)return;const e=t.width,r=t.height,o=t.format,s=t.usage,a=it(e,r,o,s);this.freeTextures.has(a)||this.freeTextures.set(a,[]),this.freeTextures.get(a).push(t),this.numFreeTextures++,this.numUsedTextures--;const u=this.usedTextures.get(a),h=u.indexOf(t);if(h<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u.splice(h,1);const d=st(o),f=e*r*d;this.numBytesUsed-=f}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.usedTextures.forEach((t,e)=>{t.forEach(r=>{r.destroy()})}),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function it(i,t,e,r){return`${i}_${t}_${e}_${r}`}function st(i){if(i==="rgba8unorm")return 16;throw new Error(`${i} is not supported!`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ae(i,t){if(Math.max(...i)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const e=i.length,r="xyzwuv",o=i.map(a=>`${t}.${r[a]}`),s=new Array(e-1);s[e-2]=o[e-1];for(let a=e-3;a>=0;--a)s[a]=`(${s[a+1]} * ${o[a+1]})`;return s}const fe=(i,t,e)=>e==="int32"?`atomicAdd(${i}, bitcast<i32>(${t}));`:`
          {
            var oldValue = 0;
            loop {
              let newValueF32 = bitcast<f32>(oldValue) + (${t});
              let newValue = bitcast<i32>(newValueF32);
              let res = atomicCompareExchangeWeak(${i}, oldValue, newValue);
              if res.exchanged {
                break;
              }
              oldValue = res.old_value;
            }
          }`;/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var $e;(function(i){i[i.FROM_PIXELS=0]="FROM_PIXELS",i[i.DRAW=1]="DRAW"})($e||($e={}));const ct=(i,t,e,r,o)=>{const s={dtype:r.dtype,shape:r.shape},a=R(e,s,t),u=i.createShaderModule({code:a,label:t.constructor.name});let h=(0,l.OBj)().get("WEBGPU_PRINT_SHADER");if(h!==""){h=h.toLowerCase();const d=h.split(",");(h==="all"||d.some(f=>t.shaderKey.toLowerCase().includes(f)))&&(console.group(t.shaderKey),console.debug(a),console.groupEnd())}return o?i.createComputePipelineAsync({compute:{module:u,entryPoint:"_start"},label:t.constructor.name,layout:"auto"}):i.createComputePipeline({compute:{module:u,entryPoint:"_start"},label:t.constructor.name,layout:"auto"})},K=(i,t="f32")=>{switch(i){case 1:return`${t}`;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${i}-component ${t} is not supported.`)}};function O(i){if(i<=1)return"i32";if(i===2)return"vec2<i32>";if(i===3)return"vec3<i32>";if(i===4)return"vec4<i32>";if(i===5)return"vec5";if(i===6)return"vec6";throw Error(`GPU for rank ${i} is not yet supported`)}function Q(i){if(i===0)return"x";if(i===1)return"y";if(i===2)return"z";if(i===3)return"w";if(i===4)return"u";if(i===5)return"v";throw Error(`Index ${i} is not yet supported`)}function T(...i){let t;switch(i.length){case 0:t=`
        fn main()
      `;break;case 1:t=`
        fn main(${i[0]} : i32)
      `;break;default:throw Error("Unreachable")}return t}function we(i,t){let e;return e=`
     ${rt(t)}
      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,
                @builtin(global_invocation_id) GlobalId : vec3<u32>,
                @builtin(local_invocation_index) LocalIndex: u32,
                @builtin(workgroup_id) WorkgroupId : vec3<u32>,
                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {
        localId = LocalId;
        localIndex = LocalIndex;
        globalId = GlobalId;
        numWorkgroups = NumWorkgroups;
        workgroupId = WorkgroupId;
        ${i?"main(getGlobalIndex());":"main();"};
      }
    `,e}function rt(i){return`
  @compute @workgroup_size(${i.workgroupSize[0]}, ${i.workgroupSize[1]}, ${i.workgroupSize[2]})
`}function R(i,t,e){const r=[],o=e.workgroupSize[0]*e.workgroupSize[1]*e.workgroupSize[2];if(e.outputComponent=e.outputComponent?e.outputComponent:1,r.push(`

      var<private> localId: vec3<u32>;
      var<private> localIndex: u32;
      var<private> globalId: vec3<u32>;
      var<private> numWorkgroups: vec3<u32>;
      var<private> workgroupId: vec3<u32>;

      // Only used when the y/z dimension of workgroup size is 1.
      fn getGlobalIndex() -> i32 {
        ${Ft(e)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +
                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${o}u +
                localIndex);
        `}
      }
    `),e.pixelsOpType!=null){const w=e.pixelsOpType===$e.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${Ie(t.dtype,e.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${Ie(i[0].dtype,e.outputComponent)}>;`,v=t.shape.length===3?"vec2<i32>":"i32";r.push(`
        struct Uniform {
          outShapeStrides : ${v},
          size            : i32,
          numChannels     : i32,
          alpha           : f32,
        };

        ${w}
        @group(0) @binding(2) var<uniform> uniforms: Uniform;
      `);const k=jt(e);return[hr,r.join(`
`),ot(t.shape),e.getUserCode(),we(k,e)].join(`
`)}let s,a,u="struct Uniforms { NAN : f32, INFINITY : f32, ";e.variableNames.forEach((w,v)=>{const k=O(i[v].shape.length);u+=`${w.charAt(0).toLowerCase()+w.slice(1)}Shape : ${k}, `,s=i[v].shape.length-1,a=O(s),u+=`${w.charAt(0).toLowerCase()+w.slice(1)}ShapeStrides: ${a}, `});const h=O(t.shape.length);u+=`outShape : ${h}, `,s=t.shape.length-1,a=O(s),u+=`
         outShapeStrides: ${a}, `,e.size&&(u+="size : i32, "),e.uniforms&&(u+=e.uniforms),u+="};",u=mr(u),r.push(u),e.atomic?r.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;
    `):r.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<${Ie(t.dtype,e.outputComponent)}>;
    `),e.variableNames.forEach((w,v)=>{r.push(`
      @group(0) @binding(${1+v}) var<storage, read> ${w}: array<${e.variableComponents?Ie(i[v].dtype,e.variableComponents[v]):Ie(i[v].dtype,e.outputComponent)}>;
        `)}),u!==""&&r.push(`
      @group(0) @binding(${1+e.variableNames.length}) var<uniform> uniforms: Uniforms;
      `);const d=fr(t.shape,e.dispatchLayout),f=[hr,r.join(`
`)+Gt,ot(t.shape),d,qe(t.shape.length)];e.atomic||f.push(wi(t.shape,t.dtype,e.outputComponent)),e.variableNames.forEach((w,v)=>{f.push(`${ot(i[v].shape,w)}`)});const p=i.map((w,v)=>ke(w,t.shape,e.variableComponents?e.variableComponents[v]:e.outputComponent,e.dispatchLayout.x.length===t.shape.length)).join(`
`);f.push(p),f.push(e.getUserCode());const g=jt(e);return f.push(we(g,e)),f.join(`
`)}function cr(i,t,e){let r=i.shaderKey;if(i.pixelsOpType!=null)return r;const o=[],s=[];t.forEach(f=>{o.push(f.shape),s.push(f.dtype)}),o.push(e.shape),s.push(e.dtype);const a=t.map(f=>l.Wap.getBroadcastDims(f.shape,e.shape)),u=t.map(f=>l.D5U.arraysEqual(f.shape,e.shape)).join("_"),h=a.map(f=>f.join("_")).join(";"),d=Ft(i)?"flatDispatch":"";return r+="_"+(i.workgroupSize?i.workgroupSize.join(","):"")+o.map(f=>f.length).join(",")+s.join(",")+i.variableNames.join(",")+h+u+d,r}const hr=`
  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};
  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};

  // Checks whether coordinates lie within the bounds of the shape.
  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {
    return all(coord >= vec2<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {
    return all(coord >= vec3<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {
    return all(coord >= vec4<i32>(0)) && all(coord < shape);
  }

  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {
    return coord;
  }
  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {
    return dot(coords, vec2<i32>(shape.y, 1));
  }
  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {
    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));
  }
  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
    return dot(coords, vec4<i32>(
        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
  }
  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {
    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;
  }
  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {
    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;
  }

  // NaN defination in IEEE 754-1985 is :
  //   - sign = either 0 or 1.
  //   - biased exponent = all 1 bits.
  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).
  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
  fn isnan(val: f32) -> bool {
    let floatToUint: u32 = bitcast<u32>(val);
    return (floatToUint & 0x7fffffffu) > 0x7f800000u;
  }
  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {
    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);
    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);
  }
`,Gt=`
  fn isinf(val: f32) -> bool {
    return abs(val) == uniforms.INFINITY;
  }
`;function ot(i,t=""){const e=i.length,r=t!==""?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",o=t!==""?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(e<=1)return`fn ${r}(index : i32) -> i32 { return index; }`;const s=l.D5U.computeStrides(i),a=O(e),u=[];for(let d=0;d<e;d++)u.push(`d${d}`);if(s.length===1)return`    fn ${r}(index : i32) -> vec2<i32> {
      let d0 = index / uniforms.${o}; let d1 = index - d0 * uniforms.${o};
      return vec2<i32>(d0, d1);
    }`;let h;return h="var index2 = index;"+s.map((d,f)=>{const p=`let ${u[f]} = index2 / uniforms.${o}.${Q(f)}`,g=f===s.length-1?`let ${u[f+1]} = index2 - ${u[f]} * uniforms.${o}.${Q(f)}`:`index2 = index2 - ${u[f]} * uniforms.${o}.${Q(f)}`;return`${p}; ${g};`}).join(""),`
    fn ${r}(index : i32) -> ${a} {
      ${h}
      return ${a}(${u.join(",")});
    }
  `}function dr(i,t){const e=i.name,r=i.shape.length,o=O(r),s="get"+e.charAt(0).toUpperCase()+e.slice(1),a=["d0","d1","d2","d3","d4","d5"].slice(0,r),u=a.map(f=>`${f} : i32`).join(", ");if(r<1)return`
      fn ${s}() -> ${K(t)} {
        return ${K(t)}(${e}[0]);
      }
    `;const h=`uniforms.${e.charAt(0).toLowerCase()+e.slice(1)}Shape`;let d=`${r}D`;return r===0&&(d="1D"),`
    fn ${s}(${u}) -> ${K(t)} {
      return ${K(t)}(${e}[getIndexFromCoords${d}(${o}(${a.join(",")}),
        ${h})${t===1?"":` / ${t}`}]);
    }
   `}function pr(i,t,e,r){const o=i.name,s=o.charAt(0).toUpperCase()+o.slice(1),a="get"+s+"ByOutput",u=i.shape.length,h=t.length,d=O(h);if(l.D5U.arraysEqual(i.shape,t)&&r)return`
    fn ${a}Index(globalIndex : i32) -> ${K(e)} {
      return ${K(e)}(${o}[globalIndex]);
    }

    fn ${a}Coords(coords : ${d}) -> ${K(e)} {
      return ${K(e)}(${o}[${h>1?"getOutputIndexFromCoords(coords)":"coords"}${e===1?"":` / ${e}`}]);
    }
    `;const f=l.Wap.getBroadcastDims(i.shape,t),p=h-u;let g="";if(u===0)return`
    fn ${a}Index(globalIndex : i32) -> ${K(e)}{
      return get${s}();
    }

    fn ${a}Coords(coords : ${d}) -> ${K(e)}{
      return get${s}();
    }
  `;h<2&&f.length>=1?g="coords = 0;":g=f.map(k=>`coords.${Q(k+p)} = 0;`).join(`
`);let x="";if(h<2&&u>0)x="coords";else if(h>1){const k=O(u),P=i.shape.map((D,A)=>`coords.${Q(A+p)}`).join(", ");x=`${k}(${P})`}else x="coords";const w=`uniforms.${o.charAt(0).toLowerCase()+o.slice(1)}Shape`,v=`${u}D`;return`
  fn ${a}Index(globalIndex : i32) -> ${K(e)} {
    var coords = getCoordsFromIndex(globalIndex);
    ${g}
    return ${K(e)}(${o}[getIndexFromCoords${v}(${x}, ${w})${e===1?"":` / ${e}`}]);
  }

  fn ${a}Coords(coordsIn : ${d}) -> ${K(e)} {
    var coords = coordsIn;
    ${g}
    return ${K(e)}(${o}[getIndexFromCoords${v}(${x}, ${w})${e===1?"":` / ${e}`}]);
  }
`}function ke(i,t,e,r){let o=dr(i,e);return i.shape.length<=t.length&&(o+=pr(i,t,e,r)),o}function fr(i,t){const{x:e,y:r=[],z:o=[]}=t,s=i.length,a=e.length+r.length+o.length;if(a!==s)return"";if(e.length===s)return`fn getOutputCoords() -> ${O(s)}{
    let globalIndex = getGlobalIndex();
    return getCoordsFromIndex(globalIndex);
  }
  `;let u="";const h=[e,r,o];for(let g=0;g<h.length;g++){const x=h[g];if(x.length!==0)if(x.length===1)u+=`let d${x[0]} = i32(globalId[${g}]);`;else{const w=ae(x,"uniforms.outShape");u+=`var index${g} = i32(globalId[${g}]);`;for(let v=0;v<w.length;v++)u+=`let d${x[v]} = index${g} / ${w[v]};`,v===w.length-1?u+=`let d${x[v+1]} = index${g} - d${x[v]} * ${w[v]};`:u+=`index${g} = index${g} - d${x[v]} * ${w[v]};`}}const d=[];for(let g=0;g<a;g++)d.push(`d${g}`);const f=O(a);let p=`fn getOutputCoords() -> ${f} {
  ${u}
`;return d.length===0?p+=`return ${f}(0); }`:p+=`return ${f}(${d.join(",")}); }`,p}function qe(i){let t="";switch(i){case 0:case 1:t+=`
        fn getOutputIndexFromCoords(coords : i32) -> i32 {
          return coords;
        }
        `;break;case 2:t+=`
        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {
          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));
        }
        `;break;case 3:t+=`
        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {
          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));
        }
        `;break;case 4:t+=`
        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
          return dot(coords, vec4<i32>(
            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));
        }
        `;break;case 5:t+=`
        fn getOutputIndexFromCoords(coords : vec5) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u;
        }
        `;break;case 6:t+=`
        fn getOutputIndexFromCoords(coords : vec6) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u * uniforms.outShapeStrides.u +
              coords.v;
        }
        `;break;default:l.D5U.assert(!1,()=>`Unsupported ${i}D shape`);break}return t}function Ft(i){return i.dispatch[1]===1&&i.dispatch[2]===1}function Ie(i,t=1){if(i==="float32")return K(t,"f32");if(i==="int32"||i==="bool")return K(t,"i32");throw new Error(`type ${i} is not supported.`)}function wi(i,t,e){const r=i.length,o=Ie(t,e);let s=`fn setOutputAtIndex(flatIndex : i32, value : ${K(e)}) {
      result[flatIndex] = ${o}(value);
    }

    fn setOutputAtIndexI32(flatIndex : i32, value : ${K(e,"i32")}) {
      result[flatIndex] = ${o}(value);
    }
    `;if(r>=2){const a=["d0","d1","d2","d3","d4","d5"].slice(0,r),u=O(r);s+=`
      fn setOutputAtCoords(${a.map(h=>`${h} : i32`).join(", ")}, value : ${K(e)}) {
        let flatIndex = getOutputIndexFromCoords(${u}(${a.join(", ")}));
        setOutputAtIndex(flatIndex${e===1?"":` / ${e}`}, value);
      }
      fn setOutputAtCoordsI32(${a.map(h=>`${h} : i32`).join(", ")}, value : ${K(e,"i32")}) {
        let flatIndex = getOutputIndexFromCoords(${u}(${a.join(", ")}));
        setOutputAtIndexI32(flatIndex${e===1?"":` / ${e}`}, value);
      }
    `}return s}function mr(i){const t=/(\w+)\s*:\s*vec(5|6)/g;i=i.replace(t,r=>"@align(16) "+r);const e=/vec(5|6)\s*,\s*(\w+)/g;return i=i.replace(e,(r,o,s)=>`vec${o}, @align(16) ${s}`),i}function jt(i){return!(i.dispatchLayout.hasOwnProperty("y")&&i.dispatchLayout.y.length!==0||i.dispatchLayout.hasOwnProperty("z")&&i.dispatchLayout.z.length!==0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _e=i=>{let t=1;for(let e=0;e<i.length;e++)t*=i[e];return t};function qr(i,t){if(i.length!==t.length)throw new Error(`Cannot compute whether rank ${i.length} tiles fit evenly into rank ${t.length} shape - ranks must match.`);return t.every((e,r)=>e%i[r]===0)}function U(i,t,e=[1,1,1],r=[1,1,1]){const[o,s,a]=[Math.ceil(_e(i.x.map(u=>t[u]))/(e[0]*r[0])),i.y?Math.ceil(_e(i.y.map(u=>t[u]))/(e[1]*r[1])):1,i.z?Math.ceil(_e(i.z.map(u=>t[u]))/(e[2]*r[2])):1];return[o,s,a]}function vi(i,t,e,r=!1){const o=[8,8,1],s=[4,4,1];return r||(i<=8&&(s[1]=1),t<=16&&e<=16&&(o[0]=4)),{workgroupSize:o,elementsPerThread:s}}function $t(i,t,e=!1){if(e)return[8,8,1];const r=_e(i.x.map(s=>t[s])),o=_e(i.y.map(s=>t[s]));return r<=4?[4,16,1]:o<=4?[16,4,1]:[16,16,1]}function Xt(i,t,e=!1){if(e)return[4,4,1];const r=_e(i.x.map(s=>t[s])),o=_e(i.y.map(s=>t[s]));return r<=4?[1,2,1]:o<=4?[2,1,1]:[2,2,1]}function V(i){return{x:i.map((t,e)=>e)}}function Kt(i){if(i==="float32"||i==="int32"||i==="bool"||i==="string")return 4;if(i==="complex64")return 8;throw new Error(`Unknown dtype ${i}`)}function Ci(){return!!(typeof globalThis<"u"&&globalThis.navigator&&globalThis.navigator.gpu)}function Yt(i,t){Array.isArray(i)||(i=[i]),i.forEach(e=>{e!=null&&l.D5U.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGPU backend.`)})}var Be;(function(i){i[i.MatMulReduceProgram=0]="MatMulReduceProgram",i[i.MatMulSplitKProgram=1]="MatMulSplitKProgram",i[i.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",i[i.MatMulPackedProgram=3]="MatMulPackedProgram",i[i.MatMulMax=4]="MatMulMax"})(Be||(Be={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qt=(0,l.OBj)().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD"),mt=(i,t)=>{const e=i.limits.maxComputeWorkgroupsPerDimension,r=t.dispatchLayout,o=t.dispatch;if(o.every(a=>a<=e))return o;l.D5U.assert(o[0]>e&&r.y===void 0&&r.z===void 0,()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension.");let s=Math.ceil(Math.sqrt(o[0]));return s>e?(s=Math.ceil(Math.cbrt(o[0])),l.D5U.assert(s<=e,()=>"Total dispatch size exceeds WebGPU maximum."),[s,s,s]):[s,s,1]};class ht extends l.Zuw{nextDataId(){return ht.nextDataId++}constructor(t,e){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!Ci())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=t,this.queue=t.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new Te(e),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new le(this.device),this.textureManager=new Se(this.device),this.tensorMap=new l.JLz(this,(0,l.SRH)()),(0,l.OBj)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:t,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(t,e=!1){if(!this.tensorMap.has(t))return!0;const r=this.tensorMap.get(t);return e?r.refCount=0:r.refCount--,r.refCount>0?!1:(r.complexTensorInfos!=null&&(this.disposeData(r.complexTensorInfos.real.dataId),this.disposeData(r.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(t)?(this.tensorDataPendingDisposal.push(t),!0):(this.releaseResource(t),this.tensorMap.delete(t),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(t){const e=this.tensorMap.get(t);if(!(!e||!e.resource)){if(e.external){e.resource=null;return}e.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(e.resource):e.resource instanceof GPUTexture&&this.textureManager.releaseTexture(e.resource),e.resource=null}}refCount(t){return this.tensorMap.has(t)?this.tensorMap.get(t).refCount:0}incRef(t){const e=this.tensorMap.get(t);e.refCount++}decRef(t){if(this.tensorMap.has(t)){const e=this.tensorMap.get(t);e.refCount--}}write(t,e,r){if(r==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.tensorMap.set(o,{dtype:r,shape:e,values:t,refCount:1}),o}move(t,e,r,o,s){if(o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(t,{dtype:o,shape:r,values:e,refCount:s})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach(t=>{this.releaseResource(t),this.tensorMap.delete(t)}),this.uniformPendingDisposal.forEach(t=>this.bufferManager.releaseBuffer(t)),this.stagingPendingDisposal.forEach(t=>this.bufferManager.releaseBuffer(t,!1)),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let t;try{t=await Promise.all(Object.values(this.pipelineCache))}catch(e){throw new Error(e.message)}Object.keys(this.pipelineCache).map((e,r)=>{this.pipelineCache[e]=t[r]})}async getBufferData(t){if((0,l.OBj)().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const e=t.size,r=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,r,0,e),this.submitQueue(),await r.mapAsync(GPUMapMode.READ);const o=r.getMappedRange().slice(0);return r.unmap(),r!=null&&this.bufferManager.releaseBuffer(r),(0,l.OBj)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(l.D5U.assert(this.dummyContext!==void 0,()=>"Fail to get context for profiling tool"),this.dummyContext.getCurrentTexture()),o}convertAndCacheOnCPU(t,e){const r=this.tensorMap.get(t);return r.values=e,r.values}readSync(t){const e=this.tensorMap.get(t),{values:r,complexTensorInfos:o}=e;if(r!=null||e.dtype==="string")return r;if(e.dtype==="complex64"){const v=this.readSync(o.real.dataId),k=this.readSync(o.imag.dataId),P=l.D5U.convertBackendValuesAndArrayBuffer(l.Wap.mergeRealAndImagArrays(v,k).buffer,"float32");return this.convertAndCacheOnCPU(t,P),P}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const s=["opaque","premultiplied"],a=e.resource,u=a.size;l.D5U.assert(u%4===0,()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4.");const h=u/4,d=new ArrayBuffer(u),f=256,p=256,g=s.map(v=>new OffscreenCanvas(f,p)),x=new OffscreenCanvas(f,p);this.endComputePassEncoder(),g.map((v,k)=>{const P=v.getContext("webgpu");return P.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:s[k]}),P.getCurrentTexture()}).map((v,k)=>{const P=f*4,D=(B,L,H)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:a,bytesPerRow:P,offset:H},{texture:v},{width:B,height:L}),this.submitQueue();const Y=x.getContext("2d",{willReadFrequently:!0});Y.clearRect(0,0,B,L),Y.drawImage(g[k],0,0);const te=Y.getImageData(0,0,B,L).data,Z=s[k],ie=new Uint8ClampedArray(d,H,B*L*4);for(let de=0;de<ie.length;de+=4)if(Z==="premultiplied")ie[de+3]=te[de+3];else{const pe=te[de];ie[de]=te[de+2],ie[de+1]=te[de+1],ie[de+2]=pe}},A=Math.floor(h/(f*p));let F=f,$=p,z=0;for(let B=0;B<A;B++)D(F,$,z),z+=f*p*4;const E=h%(f*p);$=Math.floor(E/f),$>0&&(D(F,$,z),z+=$*(f*4)),F=E%f,F>0&&D(F,1,z)});const w=l.D5U.convertBackendValuesAndArrayBuffer(d,e.dtype);return this.convertAndCacheOnCPU(t,w),w}async read(t){if(!this.tensorMap.has(t))throw new Error(`Tensor ${t} was not registered!`);const e=this.tensorMap.get(t),{values:r}=e;if(r!=null)return r;let o;if(e.dtype==="complex64"){const s=await Promise.all([this.read(e.complexTensorInfos.real.dataId),this.read(e.complexTensorInfos.imag.dataId)]),a=s[0],u=s[1];o=l.Wap.mergeRealAndImagArrays(a,u)}else{const s=await this.getBufferData(e.resource);o=l.D5U.convertBackendValuesAndArrayBuffer(s,e.dtype)}return this.convertAndCacheOnCPU(t,o),o}copyBuffer(t){const e=t.size,r=t.usage,o=this.bufferManager.acquireBuffer(e,r);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,o,0,e),this.submitQueue(),o}createTensorFromGPUData(t,e,r){let o=t.buffer;if(r==="complex64")throw new Error("Cannot write to a complex64 dtype. ");const s={id:this.nextDataId()};this.tensorMap.set(s,{dtype:r,shape:e,values:null,refCount:1,external:t.zeroCopy});const a=this.tensorMap.get(s),u=Kt(a.dtype)*l.D5U.sizeFromShape(a.shape);if(t.buffer.size<u)throw new Error(`GPUBuffer size(${t.buffer.size}) is smaller than tensor size(${u})!`);if((t.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!==(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return t.zeroCopy!==!0&&(o=this.copyBuffer(o)),a.resource=o,(0,l.SRH)().makeTensorFromDataId(s,e,r,this)}readToGPU(t){const e=this.tensorMap.get(t),{values:r,dtype:o,shape:s,resource:a}=e;if(o==="complex64")throw new Error("Does not support reading buffer for complex64 dtype.");if(a==null)throw r!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=a,h=u.size,d=u.usage,f=this.bufferManager.acquireBuffer(h,d);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,f,0,h),this.submitQueue();const p=this.makeTensorInfo(s,o),g=(0,l.SRH)().makeTensorFromTensorInfo(p),x=this.tensorMap.get(p.dataId);return x.resource=f,{tensorRef:g,buffer:f}}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const r=e.map(o=>l.D5U.decodeString(o));return(0,l.f3b)(t.shape,t.dtype,r)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,l.f3b)(t.shape,t.dtype,e)}async time(t){!this.supportTimestampQuery&&!this.hasTimestampQueryWarned&&(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const e=this.activeTimers,r=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=r,o=!0):this.activeTimers.push(r),this.activeTimers=r,t();const s=l.D5U.flatten(this.activeTimers.map(d=>d.query)).filter(d=>d!=null),a=l.D5U.flatten(this.activeTimers.map(d=>d.name)).filter(d=>d!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},h=await Promise.all(s);return u.kernelMs=l.D5U.sum(h),u.getExtraProfileInfo=()=>h.map((d,f)=>({name:a[f],ms:d})).map(d=>`${d.name}: ${d.ms}`).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,u}makeTensorInfo(t,e,r){return e==="string"&&r!=null&&r.length>0&&l.D5U.isString(r[0])&&(r=r.map(s=>l.D5U.encodeString(s))),{dataId:this.write(r,t,e),shape:t,dtype:e}}tensorToBinding(t){if(!t)return null;const r=this.tensorMap.get(t.dataId).resource;return r instanceof GPUBuffer?{buffer:r}:r instanceof GPUTexture?r.createView():r}uploadToGPU(t){const e=this.tensorMap.get(t);if(e.resource!=null)return;const r=Kt(e.dtype)*l.D5U.sizeFromShape(e.shape);let o;const s=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(e.values){if(o=this.bufferManager.acquireBuffer(r,s,!0),o.mapState==="unmapped"){const a=this.bufferManager.acquireBuffer(r,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),u=a.getMappedRange();e.dtype==="int32"||e.dtype==="bool"?new Int32Array(u).set(e.values):new Float32Array(u).set(e.values),a.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,o,0,r),this.stagingPendingDisposal.push(a)}else{const a=o.getMappedRange();e.dtype==="int32"||e.dtype==="bool"?new Int32Array(a).set(e.values):new Float32Array(a).set(e.values),o.unmap()}e.values=null}else o=this.bufferManager.acquireBuffer(r,s);e.resource=o}makeUniforms(t){let e=0,r=0;const o=[];let s=1;t.forEach(h=>{h.data.length===0&&(h.data=[1]);let d;switch(h.data.length){case 1:d=4;break;case 2:d=8;break;case 3:d=16;break;case 4:d=16;break;case 5:d=16;break;case 6:d=16;break;default:l.D5U.assert(!1,()=>`Unsupported ${h.data.length}D shape`)}(r===5||r===6)&&(d=16),d>s&&(s=d),e=Math.ceil(e/d)*d,r=h.data.length,o.push(e),e+=h.data.length*4}),e=Math.ceil(e/s)*s;const a=new ArrayBuffer(e);t.forEach((h,d)=>{const f=o[d];h.type==="int32"?new Int32Array(a,f,h.data.length).set(h.data):h.type==="uint32"?new Uint32Array(a,f,h.data.length).set(h.data):new Float32Array(a,f,h.data.length).set(h.data)});const u=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(u,0,a,0,e),this.uniformPendingDisposal.push(u),{offset:0,size:e,buffer:u}}runWebGPUProgram(t,e,r,o,s){if(s||(s=this.makeTensorInfo(t.outputShape,r)),l.D5U.sizeFromShape(s.shape)===0)return this.tensorMap.get(s.dataId).values=l.D5U.getTypedArrayFromDType(s.dtype,0),s;this.uploadToGPU(s.dataId),t.dispatch=mt(this.device,t);const a=e.map((h,d)=>{if(h.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(h.dataId),{dtype:this.tensorMap.get(h.dataId).dtype,shape:h.shape,name:t.variableNames[d]}});t.shaderKey=cr(t,a,s);const u=(0,l.OBj)().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return t.shaderKey in this.pipelineCache||(this.pipelineCache[t.shaderKey]=ct(this.device,t,a,s,u)),t.pipeline=this.pipelineCache[t.shaderKey],u||this.recordAndSubmit(t,s,e,o),s}recordAndSubmit(t,e,r,o){if(t.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let s=[],a=[];const u="int32";if(t.pixelsOpType==null){s.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),a=r.concat(e).map(x=>x.shape);const g="int32";a.map(x=>{s.push({type:g,data:x});const w=l.D5U.computeStrides(x);s.push({type:g,data:w})})}else{const g=l.D5U.computeStrides(e.shape);s.push({type:u,data:g})}if(t.size){const g=l.D5U.sizeFromShape(t.outputShape);s.push({type:u,data:[t.outputComponent?g/t.outputComponent:g]})}o&&(s=[...s,...o]);const h=[this.tensorToBinding(e),...r.map(g=>this.tensorToBinding(g)),this.makeUniforms(s)];r.forEach(g=>{this.commandQueueOwnedIds.add(g.dataId)}),this.commandQueueOwnedIds.add(e.dataId);const d=this.device.createBindGroup({layout:t.pipeline.getBindGroupLayout(0),entries:h.map((g,x)=>({binding:x,resource:g}))}),f=this.activeTimers!=null;this.ensureCommandEncoderReady();const p={};f&&this.supportTimestampQuery?(this.endComputePassEncoder(),this.querySet==null&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),p.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(p)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(p)),this.computePassEncoder.setPipeline(t.pipeline),this.computePassEncoder.setBindGroup(0,d),this.computePassEncoder.dispatchWorkgroups(t.dispatch[0],t.dispatch[1],t.dispatch[2]),this.dispatchCountInPass++,(f||(0,l.OBj)().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||t.pixelsOpType===$e.DRAW)&&(this.endComputePassEncoder(),f?this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;this.queryResolveBuffer==null&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const t=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.querySetCount*8),this.submitQueue(),await t.mapAsync(GPUMapMode.READ);const e=new BigUint64Array(t.getMappedRange()),r=Number(e[1]-e[0])/1e6;return t.unmap(),this.bufferManager.releaseBuffer(t),r}shouldExecuteOnCPU(t,e=qt){return(0,l.OBj)().getBool("WEBGPU_CPU_FORWARD")&&t.every(r=>this.tensorMap.get(r.dataId).resource==null&&l.D5U.sizeFromShape(r.shape)<e)}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(this.querySet!=null&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}ht.nextDataId=0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Ci()&&(0,l.jqO)("webgpu",async()=>{const i={powerPreference:(0,l.OBj)().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},t=await navigator.gpu.requestAdapter(i),e={},r=[];t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("bgra8unorm-storage")&&r.push(["bgra8unorm-storage"]),e.requiredFeatures=r;const o=t.limits;e.requiredLimits={maxComputeWorkgroupStorageSize:o.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:o.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:o.maxStorageBufferBindingSize,maxBufferSize:o.maxBufferSize,maxComputeWorkgroupSizeX:o.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:o.maxComputeInvocationsPerWorkgroup};const s=await t.requestDevice(e),a="info"in t?t.info:"requestAdapterInfo"in t?await t.requestAdapterInfo():void 0;return new ht(s,a)},3);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var j;(function(i){i[i.ADD=0]="ADD",i[i.ATAN2=1]="ATAN2",i[i.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",i[i.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",i[i.DIV=4]="DIV",i[i.ELU_DER=5]="ELU_DER",i[i.EQUAL=6]="EQUAL",i[i.FLOOR_DIV=7]="FLOOR_DIV",i[i.GREATER=8]="GREATER",i[i.GREATER_EQUAL=9]="GREATER_EQUAL",i[i.LESS=10]="LESS",i[i.LESS_EQUAL=11]="LESS_EQUAL",i[i.LOGICAL_AND=12]="LOGICAL_AND",i[i.LOGICAL_OR=13]="LOGICAL_OR",i[i.MAX=14]="MAX",i[i.MIN=15]="MIN",i[i.MOD=16]="MOD",i[i.MUL=17]="MUL",i[i.NOT_EQUAL=18]="NOT_EQUAL",i[i.POW=19]="POW",i[i.PRELU=20]="PRELU",i[i.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",i[i.SUB=22]="SUB"})(j||(j={}));const Re="let resultTemp = a + b;",Si="let resultTemp = atan2(a, b);",gr="let resultTemp = areal * breal - aimag * bimag;",bi="let resultTemp = areal * bimag + aimag * breal;",ki="let resultTemp = a / b;",Ii="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",Ri=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a == b);
`,Pi=`
  let remainder =
      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));
  let quotient = (a - remainder) / b;
  let resultTemp =
      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));
`,Qt=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a > b);
`,Di=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a >= b);
`,at=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a < b);
`,Ai=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a <= b);
`,Tt="return f32(a >= 1.0 && b >= 1.0);",Zt=`return (vec4<f32>(a >= vec4<f32>(1.0)) *
  vec4<f32>(b >= vec4<f32>(1.0)));`,yr="return f32(a >= 1.0 || b >= 1.0);",Ni=`return min(vec4<f32>(a >= vec4<f32>(1.0)) +
  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));`,xr="let resultTemp = max(a, b);",Fi="let resultTemp = min(a, b);",$i=`
  let isNaN = b == 0.;
  var resultTemp = a % b;
  resultTemp = select((resultTemp + b) % b, resultTemp,
      (a < 0. && b < 0.) || (a >= 0. && b > 0.));
`,gt=`
  let isNaN = !vec4<bool>(b);
  var resultTemp = vec4<f32>(a % b);
  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {
    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];
  }
  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {
    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];
  }
  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {
    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];
  }
  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {
    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];
  }
`,Jt="let resultTemp = a * b;",Ti=`
  var resultTemp = f32(a != b);
  let valueForNaN = 1.0;
`,wr=`
  var resultTemp = vec4<f32>(a != b);
  let valueForNaN = 1.0;
`,zi=`
  let isNaN = a < 0.0 && floor(b) < b;
  if (b == 0.0) {
    return 1.0;
  }
  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),
      round(abs(b) % 2.0) != 1.0);
`,ei=`
  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);
  let isModRound1 = vec4<f32>(isModRound1Bool);
  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);
  var resultTemp = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  let isExpZero = b == vec4<f32>(0.0);
  if (isExpZero.r) {
    resultTemp.r = 1.0;
  }
  if (isExpZero.g) {
    resultTemp.g = 1.0;
  }
  if (isExpZero.b) {
    resultTemp.b = 1.0;
  }
  if (isExpZero.a) {
    resultTemp.a = 1.0;
  }
  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);
`,ut="if (a < 0.0) { return b * a; }  return a;",yt=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,Ei="let resultTemp = (a - b) * (a - b);",Mi="let resultTemp = a - b;";function xt(i,t){let e;do{switch(i){case j.ATAN2:e=Si;break;case j.MAX:e=xr;break;case j.MIN:e=Fi;break;case j.MOD:e=t?gt:$i;break;case j.NOT_EQUAL:e=t?wr:Ti;break;case j.POW:e=t?ei:zi;break;default:continue}let r,o,s;return t?(r="isnanVec4",o="vec4<f32>",s="vec4<bool>"):(r="isnan",o="f32",s="bool"),`
      let aIsNaN = ${r}(a);
      let aPostLegalization = select(a, ${o}(42), aIsNaN);
      let bIsNaN = ${r}(b);
      let bPostLegalization = select(b, ${o}(42), bIsNaN);
      let isNaN = false;
      let valueForNaN = uniforms.NAN;
      {
        let a = aPostLegalization;
        let b = bPostLegalization;
        ${e}
        return select(
            resultTemp, ${o}(valueForNaN),
            ${s}(isNaN) | aIsNaN | bIsNaN);
      }
    `}while(!1);switch(i){case j.ADD:e=Re;break;case j.COMPLEX_MULTIPLY_IMAG:e=bi;break;case j.COMPLEX_MULTIPLY_REAL:e=gr;break;case j.DIV:e=ki;break;case j.ELU_DER:e=Ii;break;case j.EQUAL:e=Ri;break;case j.FLOOR_DIV:e=Pi;break;case j.GREATER:e=Qt;break;case j.GREATER_EQUAL:e=Di;break;case j.LESS:e=at;break;case j.LESS_EQUAL:e=Ai;break;case j.LOGICAL_AND:return t?Zt:Tt;case j.LOGICAL_OR:return t?Ni:yr;case j.MUL:e=Jt;break;case j.PRELU:return t?yt:ut;case j.SQUARED_DIFFERENCE:e=Ei;break;case j.SUB:e=Mi;break;default:}return`
    ${e}
    return resultTemp;
  `}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var _;(function(i){i[i.ABS=0]="ABS",i[i.ACOS=1]="ACOS",i[i.ACOSH=2]="ACOSH",i[i.ASIN=3]="ASIN",i[i.ASINH=4]="ASINH",i[i.ATAN=5]="ATAN",i[i.ATANH=6]="ATANH",i[i.CEIL=7]="CEIL",i[i.COS=8]="COS",i[i.COSH=9]="COSH",i[i.ELU=10]="ELU",i[i.ERF=11]="ERF",i[i.EXP=12]="EXP",i[i.EXPM1=13]="EXPM1",i[i.FLOOR=14]="FLOOR",i[i.IS_FINITE=15]="IS_FINITE",i[i.IS_INF=16]="IS_INF",i[i.IS_NAN=17]="IS_NAN",i[i.LINEAR=18]="LINEAR",i[i.LOG=19]="LOG",i[i.LOG1P=20]="LOG1P",i[i.LOGICAL_NOT=21]="LOGICAL_NOT",i[i.NEG=22]="NEG",i[i.RELU=23]="RELU",i[i.RELU6=24]="RELU6",i[i.LEAKYRELU=25]="LEAKYRELU",i[i.RECIPROCAL=26]="RECIPROCAL",i[i.ROUND=27]="ROUND",i[i.RSQRT=28]="RSQRT",i[i.SELU=29]="SELU",i[i.SIGMOID=30]="SIGMOID",i[i.SIGN=31]="SIGN",i[i.SIN=32]="SIN",i[i.SINH=33]="SINH",i[i.SOFTPLUS=34]="SOFTPLUS",i[i.SQRT=35]="SQRT",i[i.SQUARE=36]="SQUARE",i[i.STEP=37]="STEP",i[i.TAN=38]="TAN",i[i.TANH=39]="TANH",i[i.TO_INT=40]="TO_INT"})(_||(_={}));const lt="return abs(a);",ti=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return acos(a);
`,Li=`
  if (a < 1.) {
    return uniforms.NAN;
  }
  return acosh(a);
`,zt=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return asin(a);
`,ii="return asinh(a);",Qr=`
  if (isnan(a)) {
    return uniforms.NAN;
  }
  return atan(a);
`,wt=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  if (a == 1.) {
    return uniforms.INFINITY;
  }
  if (a == -1.) {
    return -uniforms.INFINITY;
  }
  return atanh(a);
`,vr="return ceil(a);",Qe="return cos(a);",dt=`
  let e2x = exp(-a);
  return (e2x + 1.0 / e2x) / 2.0;
`,_i="return exp(a) - 1.0;",ve="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",He=`
  var resFloat = exp(a) - vec4<f32>(1.0);
  if (a.r >= 0.0) {
    resFloat.r = a.r;
  }
  if (a.g >= 0.0) {
    resFloat.g = a.g;
  }
  if (a.b >= 0.0) {
    resFloat.b = a.b;
  }
  if (a.a >= 0.0) {
    resFloat.a = a.a;
  }
  return resFloat;
`,ri=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  let p = ${l.Wap.ERF_P};
  let a1 = ${l.Wap.ERF_A1};
  let a2 = ${l.Wap.ERF_A2};
  let a3 = ${l.Wap.ERF_A3};
  let a4 = ${l.Wap.ERF_A4};
  let a5 = ${l.Wap.ERF_A5};

  let sign = sign(a);
  let absA = abs(a);
  let t = 1.0 / (1.0 + p * absA);
  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));
`,Cr="return exp(a);",Et="return floor(a);",oi="return f32(!isnan(a) && !isinf(a));",Mt="return f32(isinf(a));",vt="return f32(isnan(a));",Bi="return a;",ni=`if (a < 0.0) { return uniforms.NAN; }
  return log(a);`,si=`
  if (isnan(a)) { return a; }
  return log(1.0 + a);
`,Oi="return f32(!(a >= 1.0));",Oe="return -a;",Ge="if (a < 0.0) { return uniforms.alpha * a; } return a;",Ct=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,ai="return 1.0 / a;",ui="return select(a, 0.0, a < 0.0);",Ui="return clamp(a, 0.0, 6.0);",li="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",je=`
  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));
`,Wi="return round(a);",Lt="return inverseSqrt(a);",Ze=`
  if (a >= 0.0) {
    return ${l.Wap.SELU_SCALE} * a;
  } else {
    return ${l.Wap.SELU_SCALEALPHA} * (exp(a) - 1.0);
  }
`,_t="return 1.0 / (1.0 + exp(-1.0 * a));",Sr="return sign(a);",Vi="return sin(a);",ci=`
  let e2x = exp(a);
  return (e2x - 1.0 / e2x) / 2.0;
`,br=`
  let epsilon = 1.1920928955078125e-7;
  let threshold = log(epsilon) + 2.0;

  let too_large = a > -threshold;
  let too_small = a < threshold;
  let exp_a = exp(a);

  if (too_large) {
    return a;
  } else if (too_small) {
    return exp_a;
  } else {
    return log(exp_a + 1.0);
  }
`,kr="return sqrt(a);",Hi="return a * a;",Gi=`
  if (isnan(a)) {
    return a;
  }

  return select(uniforms.stepAlpha, 1.0, a > 0.0);
`,ji="return tan(a);",Xi=`
  let e2x = exp(-2.0 * abs(a));
  return sign(a) * (1.0 - e2x) / (1.0 + e2x);
`,Fe="return f32(i32((a)));";function nt(i,t){switch(i){case _.ABS:return lt;case _.ACOS:return ti;case _.ACOSH:return Li;case _.ASIN:return zt;case _.ASINH:return ii;case _.ATAN:return Qr;case _.ATANH:return wt;case _.COS:return Qe;case _.COSH:return dt;case _.CEIL:return vr;case _.ELU:return t?He:ve;case _.ERF:return ri;case _.EXP:return Cr;case _.EXPM1:return _i;case _.FLOOR:return Et;case _.IS_FINITE:return oi;case _.IS_INF:return Mt;case _.IS_NAN:return vt;case _.LINEAR:return Bi;case _.LOG:return ni;case _.LOG1P:return si;case _.LOGICAL_NOT:return Oi;case _.NEG:return Oe;case _.LEAKYRELU:return t?Ct:Ge;case _.RECIPROCAL:return ai;case _.RELU:return t?je:ui;case _.RELU6:return t?li:Ui;case _.ROUND:return Wi;case _.RSQRT:return Lt;case _.SELU:return Ze;case _.SIGMOID:return _t;case _.SIGN:return Sr;case _.SIN:return Vi;case _.SINH:return ci;case _.SOFTPLUS:return br;case _.SQRT:return kr;case _.SQUARE:return Hi;case _.STEP:return Gi;case _.TAN:return ji;case _.TANH:return Xi;case _.TO_INT:return Fe;default:throw new Error(`BinaryType ${i} is not implemented!`)}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xe(i,t=!1,e=!1,r=3){if(i===null)return"";let o="";if(i==="linear")o=nt(_.LINEAR);else if(i==="relu")o=nt(_.RELU,e);else if(i==="elu")o=nt(_.ELU,e);else if(i==="relu6")o=nt(_.RELU6,e);else if(i==="prelu")o=xt(j.PRELU,e);else if(i==="sigmoid")o=nt(_.SIGMOID,e);else if(i==="leakyrelu")o=nt(_.LEAKYRELU,e);else throw new Error(`Activation ${i} has not been implemented for the WebGPU backend.`);const a=K(e?4:1);let u="";return t?u=`
      fn activation(a : ${a}, coords : vec${r}<i32>) -> ${a} {
        let b = getPreluActivationWeightsByOutputCoords(coords);
        ${o}
      }`:u=`
      fn activation(a : ${a}, coords : vec${r}<i32>) -> ${a} {
        ${o}
      }`,u}function Ke(i,t){return`
      ${i?"value = value + getBiasByOutputCoords(coords);":""}
      ${t?"value = activation(value, coords);":""}
      `}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hi(i,t,e=!1,r=!1,o=!1,s=1){l.D5U.assert(i&&s===1||!i,()=>`transposeA ${i} is not compatible with component size ${s}`);const a=`
      ${i?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}

    `,u=t?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`
  fn mm_readA(batch: i32, row: i32, col: i32) -> ${K(s)} {
    var value = ${K(s)}(0.0);
    ${e&&o?a:`
    ${i?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}
    {
      ${a}
    }
    `}
    return value;
  }

  fn mm_readB(batch: i32, row: i32, col: i32) -> ${K(s)} {
    var value = ${K(s)}(0.0);
    ${u}
    return value;
  }
  `}function Bt(i,t,e,r,o=!1,s=!1,a=!1,u=1){return`
  ${hi(e,r,o,s,a,u)}
  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${K(u)}) {
    ${o&&s?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}
    {
      var value = valueIn;
      let coords = vec3<i32>(batch, row, col);
      ${Ke(i,t)}
      setOutputAtCoords(coords[0], coords[1], coords[2], value);
    }
  }
  `}const Ir=(i,t)=>i?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol * ${t});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRow + innerRow,
          kStart + inputCol * ${t});
        `,Rr=(i,t,e,r)=>{if(i)return`
      for (var k = 0; k < ${r}; k++) {
        let BCached0 = mm_Bsub[k][tileCol];
        let ACached0 = mm_Asub[k][localRow];
        for (var i = 0; i < ${e}; i++) {
          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);
        }
      }`;{let o="",s="";for(let a=0;a<t;a++)o+=`let BCached${a} = mm_Bsub[k * ${t} + ${a}][tileCol];`,s+=`acc[i] = fma(BCached${a}, vec4<f32>(ACached[${a}]), acc[i]);`;return`
      for (var k = 0; k < ${r/t}; k++) {
        ${o}
        for (var i = 0; i < ${e}; i++) {
          let ACached = mm_Asub[tileRow + i][k];
          ${s}
        }
      }`}};function St(i,t,e=!1,r=32,o=!1,s=32,a=!1){const u=t[1]*i[1],h=t[0]*i[0],d=e?u:r,f=e?r:u,p=d/t[0],g=r/t[1],x=i[1],w=i[0];return l.D5U.assert((e&&p===4&&i[1]===4||!e&&(p===3||p===4))&&d%t[0]===0&&r%t[1]===0&&i[0]===4,()=>`If transposeA ${e} is true, innerElementSize ${p} and workPerThread[1] ${i[1]} must be 4.
          Otherwise, innerElementSize ${p} must be 3 or 4.
      tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${r} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${i[0]} must be 4.`),`
  var<workgroup> mm_Asub : array<array<vec${p}<f32>, ${d/p}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${h/i[0]}>, ${r}>;

  ${T()} {
    let localRow = i32(localId.y);
    let tileRow = localRow * ${x};
    let tileCol = i32(localId.x);

    let globalRow = i32(globalId.y) * ${x};
    let globalCol = i32(globalId.x) * ${w};
    let batch = ${o?"0":"i32(globalId.z)"};
    let batchA = ${o||!a?"batch":"batch % uniforms.aShape[0]"};
    let batchB = ${o||!a?"batch":"batch % uniforms.bShape[0]"};
    let globalRowStart = i32(workgroupId.y) * ${u};

    let numTiles = ${o?`${Math.ceil(s/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

    var acc: array<vec4<f32>, ${x}>;

    // Loop over shared dimension.
    let tileRowB = localRow * ${g};
    for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < ${x}; innerRow++) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileCol;
            ${Ir(e,p)}
        }

        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < ${g}; innerRow++) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol;
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);
        }
        kStart = kStart + ${r};
        workgroupBarrier();

        // Compute acc values for a single thread.
        ${Rr(e,p,x,r)}
        workgroupBarrier();
    }

    for (var innerRow = 0; innerRow < ${x}; innerRow++) {
        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
    }
  }`}const di=i=>i?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol);
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRowStart + inputRow,
          kStart + inputCol);
        `,Ot=i=>i?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];";function bt(i,t,e=!1,r=32,o=!1,s=32,a=!1,u=!1){const h=i[1]*t[1],d=i[0]*t[0],f=e?h:r,p=e?r:h;l.D5U.assert(p%t[1]===0&&f%t[0]===0&&r%t[1]===0,()=>`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${r} must be divisible by workgroupSize[1]${t[1]}`);const g=p/t[1],x=f/t[0],w=r/t[1],v=i[1],k=i[0],P=a?`
      let localRow = i32(localId.y);
      let localCol = i32(localId.x);
      let globalRowStart = i32(workgroupId.y) * ${h};
      let globalColStart = i32(workgroupId.x) * ${d};

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
          for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
            ${di(e)}
          }
        }
        // Load one tile of B into local memory.
        for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${t[1]}) {
              for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
              kStart + inputRow,
              globalColStart + inputCol);
          }
        }
        kStart = kStart + ${r};
        workgroupBarrier();

        // Compute acc values for a single thread.
        var BCached : array<f32, ${k}>;
        for (var k = 0; k < ${r}; k++) {
          for (var inner = 0; inner < ${k}; inner++) {
            BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
          }
          for (var innerRow = 0; innerRow < ${v}; innerRow++) {
            let ACached = ${e?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
            for (var innerCol = 0; innerCol < ${k}; innerCol++) {
              acc[innerRow][innerCol] =
                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
            }
          }
        }
        workgroupBarrier();
      }
      for (var innerRow = 0; innerRow < ${v}; innerRow++) {
        let gRow = globalRowStart + localRow + innerRow * ${t[1]};
        for (var innerCol = 0; innerCol < ${k}; innerCol++) {
          let gCol = globalColStart + localCol + innerCol * ${t[0]};
          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
        }
      }
      `:`
  let tileRow = i32(localId.y) * ${v};
  let tileCol = i32(localId.x) * ${k};

  let globalRow = i32(globalId.y) * ${v};
  let globalCol = i32(globalId.x) * ${k};
  let globalRowStart = i32(workgroupId.y) * ${h};

  let tileRowA = i32(localId.y) * ${g};
  let tileColA = i32(localId.x) * ${x};
  let tileRowB = i32(localId.y) * ${w};
  // Loop over shared dimension.
  for (var t = 0; t < numTiles; t++) {
    // Load one tile of A into local memory.
    for (var innerRow = 0; innerRow < ${g}; innerRow++) {
      for (var innerCol = 0; innerCol < ${x}; innerCol++) {
        let inputRow = tileRowA + innerRow;
        let inputCol = tileColA + innerCol;
        ${di(e)}
      }
    }

    // Load one tile of B into local memory.
    for (var innerRow = 0; innerRow < ${w}; innerRow++) {
      for (var innerCol = 0; innerCol < ${k}; innerCol++) {
        let inputRow = tileRowB + innerRow;
        let inputCol = tileCol + innerCol;
        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
          kStart + inputRow,
          globalCol + innerCol);
      }
    }
    kStart = kStart + ${r};
    workgroupBarrier();

    // Compute acc values for a single thread.
    var BCached : array<f32, ${k}>;
    for (var k = 0; k < ${r}; k++) {
      for (var inner = 0; inner < ${k}; inner++) {
        BCached[inner] = mm_Bsub[k][tileCol + inner];
      }

      for (var innerRow = 0; innerRow < ${v}; innerRow++) {
        ${Ot(e)}
        for (var innerCol = 0; innerCol < ${k}; innerCol++) {
          acc[innerRow][innerCol] =
              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
        }
      }
    }

    workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < ${v}; innerRow++) {
    for (var innerCol = 0; innerCol < ${k}; innerCol++) {
      mm_write(batch, globalRow + innerRow, globalCol + innerCol,
          acc[innerRow][innerCol]);
    }
  }
  `;return`
    var<workgroup> mm_Asub : array<array<f32, ${f}>, ${p}>;
    var<workgroup> mm_Bsub : array<array<f32, ${d}>, ${r}>;

    ${T()} {
      let batch = ${o?"0":"i32(globalId.z)"};
      let batchA = ${o||!u?"batch":"batch % uniforms.aShape[0]"};
      let batchB = ${o||!u?"batch":"batch % uniforms.bShape[0]"};
      let numTiles = ${o?`${Math.ceil(s/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};
      var kStart = ${o?`i32(globalId.z) * ${s}`:"0"};

      var acc : array<array<f32, ${k}>, ${v}>;

      // Without this initialization strange values show up in acc.
      for (var innerRow = 0; innerRow < ${v}; innerRow++) {
        for (var innerCol = 0; innerCol < ${k}; innerCol++) {
          acc[innerRow][innerCol] = 0.0;
        }
      }
      ${P}
    }
  `}const Ki=i=>i?`
      mm_readA(batchA, colA, globalRow),
      mm_readA(batchA, colA + 1, globalRow),
      mm_readA(batchA, colA + 2, globalRow),
      mm_readA(batchA, colA + 3, globalRow)
  `:`
      mm_readA(batchA, globalRow, colA),
      mm_readA(batchA, globalRow, colA + 1),
      mm_readA(batchA, globalRow, colA + 2),
      mm_readA(batchA, globalRow, colA + 3)
  `;function kt(i,t=!1){l.D5U.assert(i[1]===1&&i[2]===1,()=>`A linear work group size is required. But got ${i}.`);const e=i[0]*4;return`
    var<workgroup> mm_Asub : array<vec4<f32>, ${i[0]}>;

    ${T()} {
      let tileCol = i32(localId.x);
      let globalCol = i32(globalId.x);
      let globalRow = i32(globalId.y);

      let numTiles = (uniforms.dimInner - 1) / ${e} + 1;
      let batch = i32(globalId.z);
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      // Without this initialization strange values show up in acc.
      var acc = 0.0;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        let colA = t * ${e} + tileCol * 4;
        mm_Asub[tileCol] = vec4<f32>(${Ki(t)});
        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < ${e/4}; k++) {
          let rowB = t * ${e} + k * 4;
          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),
                              mm_readB(batchB, rowB + 1, globalCol),
                              mm_readB(batchB, rowB + 2, globalCol),
                              mm_readB(batchB, rowB + 3, globalCol));

          let ACached = mm_Asub[k];
          acc = acc + dot(ACached, BCached);
        }

        workgroupBarrier();
      }

      mm_write(batch, globalRow, globalCol, acc);
    }
  `}class Pr{constructor(t,e,r=!1,o=!1,s=null,a=null,u=null,h=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0]};const d=r?t[1]:t[2];if(this.isVec4=(d%4===0&&!r||e[1]%4===0&&r)&&e[2]%4===0&&!o,this.outputComponent=this.isVec4?4:1,this.isVectorA=e[1]===1&&!r,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const g=vi(e[1],d,e[2],r);this.workgroupSize=g.workgroupSize,this.elementsPerThread=g.elementsPerThread}this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const f=s!=null,p=u!=null;f&&this.variableNames.push("bias"),p&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=h,this.transposeA=r,this.transposeB=o,this.addBias=f,this.activation=a,this.hasPreluActivationWeights=p,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(e[1],e[2],d),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${r}_${o}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(t,e,r){const o=this.workgroupSize[1]*this.elementsPerThread[1],s=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=this.workgroupSize[0]*4:this.tileInner=s;const a=t%o===0,u=e%s===0,h=r%this.tileInner===0;return[a,u,h]}getUserCode(){return`
      ${Xe(this.activation,this.hasPreluActivationWeights,this.isVec4)}
      ${Bt(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}
      ${this.isVec4?St(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?kt(this.workgroupSize,this.transposeA):bt(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dr(i){return`
    var<workgroup> sumValues : array<f32, ${i}>;
    ${T()} {
      let coords = getOutputCoords();
      let batch = coords[0];
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      let row = coords[1];
      let col = coords[2];
      var sum = 0.0;
      let Length = uniforms.dimInner;
      for (var k = i32(localId.x); k < Length; k = k + ${i}) {
        let dataA = mm_readA(batchA, row, k);
        let dataB = mm_readB(batchB, k, col);
        sum = sum + dataA * dataB;
      }
      sumValues[localId.x] = sum;
      workgroupBarrier();

      for(var currentSize = ${i/2}u; currentSize > 1u;
          currentSize = currentSize / 2u) {
        if (localId.x < currentSize)
        {
          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];
        }
        workgroupBarrier();
      }

      if (localId.x == 0u) {
        sum = sumValues[0] + sumValues[1];
        mm_write(batch, row, col, sum);
      }
    }
  `}class Ar{constructor(t,e=!1,r=!1,o=null,s=null,a=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize);const u=o!=null,h=a!=null;u&&this.variableNames.push("bias"),h&&this.variableNames.push("preluActivationWeights"),this.transposeA=e,this.transposeB=r,this.addBias=u,this.activation=s,this.hasPreluActivationWeights=h,this.shaderKey=`matMulReduce_${this.activation}_${e}_${r}`}getUserCode(){return`
      ${Xe(this.activation,this.hasPreluActivationWeights)}
      ${Bt(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${Dr(this.workgroupSize[0])}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nr(i){const t=i[1],e=i[0],r=t>e?t:e;return`
  var<workgroup> mm_Asub : array<array<f32, ${r}>, ${t}>;
  var<workgroup> mm_Bsub : array<array<f32, ${e}>, ${r}>;

  // If the output size is small for matrix multiplication, avoid to use vec4
  // and handle some elements per thread to optimally utilize the ALU.
  // Read data from global memory to registers firstly, then store them into
  // shared memory, so it is instruction-Level parallelism for arithmetic
  // operations and others handle IO operations between barrier api, makes ALU
  // and load/store units work simultaneously, could improves the performance.
  ${T()} {
    let tileRow = i32(localId.y);
    let tileCol = i32(localId.x);
    let globalRow = i32(globalId.y);
    let globalCol = i32(globalId.x);
    let batch = i32(globalId.z);
    let batchA = batch % uniforms.aShape[0];
    let batchB = batch % uniforms.bShape[0];

    // uniforms.dimInner should be greater than 0.
    let numTiles = (uniforms.dimInner - 1) / ${r} + 1;
    var acc = 0.0;

    var globalColA = tileCol;
    var globalRowB = 0;
    var regA = mm_readA(batchA, globalRow, globalColA);
    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
    globalColA = globalColA + ${r};
    globalRowB = globalRowB + ${r};

    for (var t = 0; t < numTiles; t = t + 1) {
      mm_Asub[tileRow][tileCol] = regA;
      mm_Bsub[2 * tileRow][tileCol] = regB0;
      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;

      workgroupBarrier();

      regA = mm_readA(batchA, globalRow, globalColA);
      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
      globalColA = globalColA + ${r};
      globalRowB = globalRowB + ${r};

      for (var k = 0; k < ${r}; k = k + 1) {
        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];
      }
      workgroupBarrier();
    }

    mm_write(batch, globalRow, globalCol, acc);
  }
  `}class pi{constructor(t,e,r,o=!1,s=!1,a=null,u=null,h=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=r,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(r[2]/this.workgroupSize[0]),Math.ceil(r[1]/this.workgroupSize[1]),r[0]];const d=a!=null;d&&this.variableNames.push("bias");const f=h!=null;f&&this.variableNames.push("preluActivationWeights"),this.transposeA=o,this.transposeB=s,this.addBias=d,this.activation=u,this.hasPreluActivationWeights=f,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${o}_${s}`}getUserCode(){return`
      ${Xe(this.activation,this.hasPreluActivationWeights)}
      ${Bt(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${Nr(this.workgroupSize)}
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class It{constructor(t,e,r=!1,o=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,l.D5U.assert(t[0]===1,()=>"MatMulSplitKProgram only supports batch = 1."),this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const s=(r&&this.outputShape[1]%4===0||!r&&e%4===0)&&this.outputShape[2]%4===0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=s?4:1,s||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=U(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],e],this.workgroupSize,this.elementsPerThread),this.transposeA=r,this.transposeB=o,this.shaderKey=`matMulSplitK_${r}_${o}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const t=this.outputComponent;return`
      ${hi(!1,this.transposeB,!1,!1,!1,t)}
      fn mm_write(batch: i32, row : i32, col : i32, value : ${K(t)}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
          let coords = vec3<i32>(batch, row, col);
          let flatIndex = getOutputIndexFromCoords(coords);
          // The problem is that we should initialize output to zero before using.
          // Otherwise, the original value will be added to the result.
          for (var i = 0; i < ${t}; i = i + 1) {
            ${fe("&result[flatIndex + i]",`${t>1?"value[i]":"value"}`,"float32")}
          }
        }
      }
      ${t===4?St(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):bt(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}
    `}}class Fr{constructor(t,e=null,r=null,o=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e!=null,this.hasPreluActivationWeights=o!=null,this.activation=r,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${r}`}getUserCode(){return`
    ${Xe(this.activation,this.hasPreluActivationWeights)}
    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        var value = getXByOutputIndex(index);
        ${Ke(this.addBias,this.activation)}
        setOutputAtIndex(index, value);
      }
    }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $r{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.size) {
        setOutputAtIndex(index, uniforms.value);
      }
    }
  `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pe(i){const{backend:t,attrs:e}=i,{shape:r,value:o}=e;let{dtype:s}=e;if(s=s||l.D5U.inferDtype(o),s==="string"){const a=l.D5U.getArrayFromDType(s,l.D5U.sizeFromShape(r));return a.fill(o),t.makeTensorInfo(r,s,a)}else{const a=new $r(r),u=[{type:"float32",data:[o]}];return t.runWebGPUProgram(a,[],s,u)}}const Tr={kernelName:l.deh,backendName:"webgpu",kernelFunc:Pe};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X(i){const{inputs:t,attrs:e}=i,{x:r}=t,{shape:o}=e,s=l.D5U.sizeFromShape(r.shape),a=l.D5U.inferFromImplicitShape(o,s),u=l.D5U.sizeFromShape(a);return l.D5U.assert(s===u,()=>`The new shape (${a}) has ${u} elements and the old shape (${r.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`),i.backend.incRef(r.dataId),{dataId:r.dataId,shape:a,dtype:r.dtype}}const Yi={kernelName:l.HZH,backendName:"webgpu",kernelFunc:X};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rt({a:i,b:t,transposeA:e,transposeB:r,backend:o,bias:s=null,preluActivationWeights:a=null,leakyreluAlpha:u=0,activation:h=null}){const d=i.shape.length,f=t.shape.length,p=e?i.shape[d-2]:i.shape[d-1],g=r?t.shape[f-1]:t.shape[f-2],x=e?i.shape[d-1]:i.shape[d-2],w=r?t.shape[f-2]:t.shape[f-1],v=i.shape.slice(0,-2),k=t.shape.slice(0,-2),P=l.D5U.sizeFromShape(v),D=l.D5U.sizeFromShape(k),F=l.Jyw.assertAndGetBroadcastShape(i.shape.slice(0,-2),t.shape.slice(0,-2)).concat([x,w]);l.D5U.assert(p===g,()=>`Error in matMul: inner shapes (${p}) and (${g}) of Tensors with shapes ${i.shape} and ${t.shape} and transposeA=${e} and transposeB=${r} must match.`);const $=e?[P,p,x]:[P,x,p],z=r?[D,w,g]:[D,g,w],E=X({inputs:{x:i},backend:o,attrs:{shape:$}}),B=X({inputs:{x:t},backend:o,attrs:{shape:z}}),L=[E,B],H=Math.max(P,D),Y=[E,B],te=[{type:"int32",data:[x]},{type:"int32",data:[w]},{type:"int32",data:[p]}];let Z,ie;const de=[H,x,w];let pe=(0,l.OBj)().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(pe<0){const et=(0,l.OBj)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),tt=et>0?et:o.thresholdToIncreaseWorkgroups,Ht=H*Math.ceil(x/32)*Math.ceil(w/32);Ht<=tt||x<=8&&Ht<=tt*2?H*x*w<=128?pe=Be.MatMulReduceProgram:H===1&&g>=2e3?pe=Be.MatMulSplitKProgram:pe=Be.MatMulSmallOutputSizeProgram:pe=Be.MatMulPackedProgram}switch(pe){case Be.MatMulReduceProgram:Z=new Ar(de,e,r,s,h,a);break;case Be.MatMulSplitKProgram:{if(ie=Pe({backend:o,attrs:{shape:de,value:0,dtype:i.dtype}}),Z=new It(de,g,e,r),s||h){ie=o.runWebGPUProgram(Z,Y,i.dtype,te,ie);const tt=new Fr(ie.shape,s,h,a);let Ht=null;const At=[ie];s&&At.push(s),a&&At.push(a),h==="leakyrelu"&&(Ht=[{type:"float32",data:[u]}],tt.uniforms+=" alpha : f32,");const hs=o.runWebGPUProgram(tt,At,ie.dtype,Ht);L.push(ie);const Hp=X({inputs:{x:hs},backend:o,attrs:{shape:F}});L.push(hs);for(const Gp of L)o.disposeData(Gp.dataId);return Hp}break}case Be.MatMulSmallOutputSizeProgram:Z=new pi($,z,de,e,r,s,h,a);break;case Be.MatMulPackedProgram:const et=o.adapterInfo.isIntel();Z=new Pr($,de,e,r,s,h,a,et);break;default:throw new Error(`Unsupported MatMulProgramType ${pe}.`)}s&&Y.push(s),a&&Y.push(a),h==="leakyrelu"&&(te.push({type:"float32",data:[u]}),Z.uniforms+=" alpha : f32,"),ie=o.runWebGPUProgram(Z,Y,i.dtype,te,ie);const Ve=X({inputs:{x:ie},backend:o,attrs:{shape:F}});L.push(ie);for(const et of L)o.disposeData(et.dataId);return Ve}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pt(i){const{inputs:t,backend:e,attrs:r}=i,{a:o,b:s,bias:a,preluActivationWeights:u}=t,{transposeA:h,transposeB:d,activation:f,leakyreluAlpha:p}=r;return Rt({a:o,b:s,transposeA:h,transposeB:d,backend:e,bias:a,preluActivationWeights:u,leakyreluAlpha:p,activation:f})}const Ue={kernelName:l.usg,backendName:"webgpu",kernelFunc:Pt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qi{constructor(t,e,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=l.Wap.assertAndGetBroadcastShape(e,r),this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${t}`,this.op=t}getUserCode(){return`
      fn binaryOpComplex(
          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {
        ${xt(this.op,!1)}
      }

      ${T("index")} {
        if(index < uniforms.size) {
          let areal = getARealByOutputIndex(index);
          let aimag = getAImagByOutputIndex(index);
          let breal = getBRealByOutputIndex(index);
          let bimag = getBImagByOutputIndex(index);
          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ut{constructor(t,e,r){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=l.Wap.assertAndGetBroadcastShape(e,r),this.dispatchLayout=V(this.outputShape),this.op=t,this.useSharedMemoryWithA=e.length<=1&&r.length>1&&e[0]<128,this.useSharedMemoryWithB=r.length<=1&&e.length>1&&r[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?r[0]:e[0],this.shaderKey=`binary_${t}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const o=e.length>0&&e[e.length-1]%4===0,s=r.length>0&&r[r.length-1]%4===0;o&&s?(this.outputComponent=4,this.variableComponents=[4,4]):o&&(l.D5U.isScalarShape(r)||r[r.length-1]===1)||s&&(l.D5U.isScalarShape(e)||e[e.length-1]===1)?(this.outputComponent=4,this.variableComponents=o?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${t}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let t;const e=this.outputComponent===4?"vec4<f32>":"f32",r=`
    fn binaryOperation(a : ${e}, b : ${e}) -> ${e} {
      ${xt(this.op,this.outputComponent===4)}
    };
    `;if(this.type==="shared"){const o=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",s=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);
          let b = sharedBuf[${o}];`:`let a = sharedBuf[${o}];
          let b = getBByOutputIndex(index);`;t=`
        ${r}
        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;
        ${T("index")} {
          // Fill in the shared memory buffer.
          let localIndex = i32(localId.x);
          if(localIndex < ${this.lastDimensionSize}) {
            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);
          }
          workgroupBarrier();

          if(index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            ${s}
            setOutputAtIndex(index, binaryOperation(a, b));
          }
        }
        `}else t=`
       ${r}
       ${T("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index * ${this.outputComponent});
           let a = ${e}(getAByOutputCoords(coords));
           let b = ${e}(getBByOutputCoords(coords));
           setOutputAtIndex(index, binaryOperation(a, b));
         }
       }
       `;return t}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function De(i){const{inputs:t}=i,{x:e}=t;return i.backend.incRef(e.dataId),{dataId:e.dataId,shape:e.shape,dtype:e.dtype}}const Qi={kernelName:l.iJz,backendName:"webgpu",kernelFunc:De};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Je(i){const{inputs:t,backend:e}=i,{real:r,imag:o}=t,s=e.makeTensorInfo(r.shape,"complex64"),a=e.tensorMap.get(s.dataId),u=De({inputs:{x:r},backend:e}),h=De({inputs:{x:o},backend:e});return a.complexTensorInfos={real:u,imag:h},s}const fi={kernelName:l.Zz9,backendName:"webgpu",kernelFunc:Je};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class We{constructor(t,e,r=""){this.variableNames=["A"],this.size=!0;const o=128;this.workgroupSize=[o,1,1],this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=e,r!==""&&(this.uniforms=r),this.shaderKey=`unary_${e}`}getUserCode(){return`
      fn unaryOperation(a : f32) -> f32 {
        ${nt(this.op,!1)}
      }
      ${T("index")} {
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          setOutputAtIndex(index, unaryOperation(a));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne({opType:i,cpuKernelImpl:t,dtype:e}){return({inputs:r,backend:o})=>{const{x:s}=r,a=o,u=e||s.dtype;if(a.shouldExecuteOnCPU([s])&&t!=null){const d=a.tensorMap.get(s.dataId),f=t(d.values,u);return a.makeTensorInfo(s.shape,u,f)}const h=new We(s.shape,i);return a.runWebGPUProgram(h,[s],u)}}function Ce({opType:i,cpuKernelImpl:t,supportsComplex:e=!1,dtype:r}){return({inputs:o,backend:s})=>{const{a,b:u}=o,h=s;if(e&&a.dtype==="complex64"){const p=h.tensorMap.get(a.dataId),g=h.tensorMap.get(u.dataId);let x,w;if(i!==j.MUL)[x,w]=[[p.complexTensorInfos.real,g.complexTensorInfos.real],[p.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(k=>{const[P,D]=k,A={dataId:P.dataId,dtype:P.dtype,shape:a.shape},F={dataId:D.dataId,dtype:D.dtype,shape:u.shape},$=new Ut(i,a.shape,u.shape);return h.runWebGPUProgram($,[A,F],(0,l.x8V)(P.dtype,D.dtype))});else{const k=new qi(j.COMPLEX_MULTIPLY_REAL,a.shape,u.shape),P=new qi(j.COMPLEX_MULTIPLY_IMAG,a.shape,u.shape),D=[{dataId:p.complexTensorInfos.real.dataId,dtype:p.complexTensorInfos.real.dtype,shape:a.shape},{dataId:p.complexTensorInfos.imag.dataId,dtype:p.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:g.complexTensorInfos.real.dataId,dtype:g.complexTensorInfos.real.dtype,shape:u.shape},{dataId:g.complexTensorInfos.imag.dataId,dtype:g.complexTensorInfos.imag.dtype,shape:u.shape}];x=h.runWebGPUProgram(k,D,"float32"),w=h.runWebGPUProgram(P,D,"float32")}const v=Je({inputs:{real:x,imag:w},backend:h});return h.disposeData(x.dataId),h.disposeData(w.dataId),v}const d=r||(0,l.x8V)(a.dtype,u.dtype);if((a.dtype==="string"||u.dtype==="string"||h.shouldExecuteOnCPU([a,u]))&&t!=null){const p=h.tensorMap.get(a.dataId).values,g=h.tensorMap.get(u.dataId).values,x=a.dtype==="string"?l.Wap.fromUint8ToStringArray(p):p,w=a.dtype==="string"?l.Wap.fromUint8ToStringArray(g):g,[v,k]=t(a.shape,u.shape,x,w,d);return h.makeTensorInfo(k,d,v)}const f=new Ut(i,a.shape,u.shape);return h.runWebGPUProgram(f,[a,u],d)}}var zr=oe(1172);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:Er,castImpl:Dt,ceilImpl:Zi,concatImpl:Ji,equalImpl:Mr,expImpl:Lr,expm1Impl:Wt,floorImpl:er,floorDivImpl:Zr,gatherNdImpl:tr,gatherV2Impl:_r,greaterEqualImpl:Br,greaterImpl:mi,lessEqualImpl:gi,lessImpl:ir,logImpl:Or,maxImpl:ao,maximumImpl:uo,minimumImpl:lo,multiplyImpl:Jr,negImpl:co,notEqualImpl:ho,prodImpl:Ur,rangeImpl:po,rsqrtImpl:fo,scatterImpl:mo,simpleAbsImpl:rr,sliceImpl:go,stridedSliceImpl:yo,stringNGramsImpl:xo,subImpl:eo,tileImpl:to,topKImpl:n,transposeImpl:c,uniqueImpl:m}=zr;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y=ne({opType:_.ABS,cpuKernelImpl:rr}),C={kernelName:l.SYM,backendName:"webgpu",kernelFunc:y};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b=ne({opType:_.ACOS}),S={kernelName:l.VGw,backendName:"webgpu",kernelFunc:b};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I=ne({opType:_.ACOSH}),N={kernelName:l.SpW,backendName:"webgpu",kernelFunc:I};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M=Ce({opType:j.ADD,cpuKernelImpl:Er,supportsComplex:!0}),W={kernelName:l.mm_,backendName:"webgpu",kernelFunc:M};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class J{constructor(t){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t[0],this.variableNames=t.map((e,r)=>`T${r}`),this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const t=[];this.variableNames.forEach(o=>{t.push(`let v${o} = get${o}ByOutputCoords(coords);`)});const e=this.variableNames.map(o=>`v${o}`).join(" + ");return`
      ${T("index")} {
        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            ${t.join(`
        `)}
            setOutputAtIndex(flatIndex, ${e});
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q(i){const{inputs:t,backend:e}=i,r=t;if(r.length===1)return De({inputs:{x:r[0]},backend:e});const o=r.map(u=>u.dtype).reduce((u,h)=>(0,l.x8V)(u,h)),s=r.map(u=>u.shape),a=new J(s);return e.runWebGPUProgram(a,r,o)}const G={kernelName:l.Xze,backendName:"webgpu",kernelFunc:q};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ee{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[16,16,1];const r=new Array(t.length);for(let o=0;o<r.length;o++)r[o]=t[e[o]];this.outputShape=r,this.dispatchLayout={x:[0],y:[1]},this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){l.D5U.assert(this.workgroupSize[0]===this.workgroupSize[1],()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`);const t=this.workgroupSize[0];return`
      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;
      ${T()} {
        var x = i32(workgroupId.x) * ${t} + i32(localId.x);
        var y = i32(workgroupId.y) * ${t} + i32(localId.y);
        let width = uniforms.outShape[0];
        let height = uniforms.outShape[1];
        if (x < width && y < height) {
          tile[localId.y][localId.x] = f32(A[y * width + x]);
        }
        workgroupBarrier();

        x = i32(workgroupId.y) * ${t} + i32(localId.x);
        y = i32(workgroupId.x) * ${t} + i32(localId.y);
        if (x < height && y < width) {
          setOutputAtIndex((y * height + x), tile[localId.x]
            [localId.y]);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class re{constructor(t,e){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const r=new Array(t.length);for(let o=0;o<r.length;o++)r[o]=t[e[o]];this.outputShape=r,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=e,this.shaderKey=`transpose_${e}`}getUserCode(){const t=O(this.outputShape.length),e=me(this.newDim);return`
      ${T("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(
              ${t}(${e}), uniforms.aShape)]);
          }
        }
      }
    `}}function me(i){const t=i.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=new Array(t);for(let r=0;r<i.length;r++)e[i[r]]=`coords.${Q(r)}`;return e.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ue(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{perm:s}=r,a=e,u=o.shape.length,h=new Array(u);for(let f=0;f<h.length;f++)h[f]=o.shape[s[f]];if(e.shouldExecuteOnCPU([o])){const p=a.tensorMap.get(o.dataId).values,g=c(p,o.shape,o.dtype,s,h);return e.makeTensorInfo(h,o.dtype,g)}if(o.shape.length===2&&l.D5U.arraysEqual(s,[1,0])){const f=new ee(o.shape,s);return a.runWebGPUProgram(f,[o],o.dtype)}const d=new re(o.shape,s);return a.runWebGPUProgram(d,[o],o.dtype)}const Ae={kernelName:l.G3Y,backendName:"webgpu",kernelFunc:ue};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ye{constructor(t,e,r){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[t.batchSize,t.inSize];const[o]=l.Wap.computeOutAndReduceShapes(this.inputShape,[1]);this.outputShape=o.length===0?[1]:o,t.inSize>=32768&&r>=512?this.workgroupSize=[512,1,1]:t.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=e,this.shaderKey=`reduce_${e}`}getUserCode(){let t="",e="0.0";const r=this.workgroupSize[0];this.reduceType==="min"||this.reduceType==="max"?(t=`
         if (isnan(candidate)) {
          bestValue = uniforms.NAN;
         } else if (!isnan(bestValue) && candidate ${this.reduceType==="min"?"<":">"} bestValue)
           {  bestValue = candidate; }`,e="f32(x[offset])"):this.reduceType==="sum"||this.reduceType==="mean"?t=" bestValue = bestValue + candidate; ":this.reduceType==="prod"?(t=" bestValue = bestValue * candidate; ",e="1.0"):this.reduceType==="all"?(t=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",e="1.0"):this.reduceType==="any"&&(t=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",e="0.0");const o=this.reduceType==="mean"?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`
       fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
       }

       ${`
         var<workgroup> xBestValues : array<f32, ${r}>;
       `}
       fn getOffset(outputIndex : i32) -> i32 {
         let outputCoords = getCoordsFromIndex(outputIndex);
         let offset = ${this.outputShape.length===1?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;
          return offset;
       }
       ${T("index")} {
         let outputIndex = index / ${r};
         let offset = getOffset(outputIndex);
         var bestValue = ${e};
         let Length = uniforms.reduceSize;
         let WorkPerThread = DIV_CEIL(u32(Length), ${r}u);
         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
             k = k + ${r}) {
           let candidate = f32(x[offset + k]);
           ${t}
         }
         xBestValues[localId.x] = bestValue;
         workgroupBarrier();

         var reduceSize = min(u32(Length), ${r}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            ${t}
            xBestValues[localId.x] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (localId.x == 0u && outputIndex < uniforms.size) {
          ${o}
        }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ze={mean:"float32",all:"bool",any:"bool"};function se(i,t,e,r,o){const s=i.shape.length,a=[],u=l.D5U.parseAxisParam(t,i.shape);let h=u;const d=l.Wap.getAxesPermutation(h,s);let f=i;d!=null&&(f=ue({inputs:{x:i},attrs:{perm:d},backend:o}),h=l.Wap.getInnerMostAxes(h.length,s),a.push(f)),l.Wap.assertAxesAreInnerMostDims(r,h,s);const[p,g]=l.Wap.computeOutAndReduceShapes(f.shape,h);let x=p;e&&(x=l.Wap.expandShapeToKeepDim(p,u));let w;if((r==="max"||r==="prod")&&o.shouldExecuteOnCPU([f])){const v=o.tensorMap.get(f.dataId).values;switch(r){case"max":const k=ao(v,l.D5U.sizeFromShape(g),x,i.dtype);w=o.makeTensorInfo(x,i.dtype,k);break;case"prod":const{outVals:P,outShape:D,outDtype:A}=Ur(f.shape,f.dtype,v,h);w=o.makeTensorInfo(D,A,P);break;default:throw new Error(`${r} CPU implementation is not yet supported.`)}}else{const v=l.D5U.sizeFromShape(g),P=l.D5U.sizeFromShape(f.shape)/v,D={windowSize:v,inSize:v,batchSize:P,outSize:1},A=ze[r]||(0,l.z4k)(i.dtype),F=[{type:"int32",data:[v]}],$=new Ye(D,r,o.device.limits.maxComputeWorkgroupSizeX),z=o.runWebGPUProgram($,[f],A,F);a.push(z),w=X({inputs:{x:z},attrs:{shape:x},backend:o})}return a.forEach(v=>o.disposeData(v.dataId)),w}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ne(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{keepDims:s,axis:a}=r;return se(o,a,s,"all",e)}const pt={kernelName:l.oT6,backendName:"webgpu",kernelFunc:Ne};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wo(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{keepDims:s,axis:a}=r;return se(o,a,s,"any",e)}const vo={kernelName:l.IKK,backendName:"webgpu",kernelFunc:wo};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class io{constructor(t,e,r){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const o=[e];this.op=r==="min"?"<":">";const[s,a]=l.Wap.computeOutAndReduceShapes(t,o);this.outputShape=s.length===0?[1]:s,this.dispatchLayout=V(this.outputShape),l.D5U.sizeFromShape(a)<32?(this.type="plain",this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=U(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=t,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const t=this.workgroupSize[0],e=()=>this.inputShape.length===1?"uniforms.xShape":`uniforms.xShape.${Q(this.inputShape.length-1)}`,r=()=>{let o="";if(this.outputShape.length===1)this.inputShape.length!==1&&(o+="outputCoords,");else for(let s=0;s<this.outputShape.length;s++)o+=`outputCoords.${Q(s)},`;return o};return this.type==="shared"?`
      fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
      }

      ${`
      var<workgroup> xBestIndices : array<i32, ${t}>;
      var<workgroup> xBestValues : array<f32, ${t}>;
    `}

      ${T("index")} {
        let outputIndex = index / ${t};
        let reduceLength = ${e()};

        var bestIndex = i32(localId.x);
        var bestValue = uniforms.infinityValue;
        let outputCoords = getCoordsFromIndex(outputIndex);
        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;
            k = k + ${t}) {
          let candidate = getX(${r()} k);
          if (!isnan(candidate) && candidate ${this.op} bestValue) {
            bestValue = candidate;
            bestIndex = k;
          }
        }
        xBestValues[localId.x] = bestValue;
        xBestIndices[localId.x] = bestIndex;
        workgroupBarrier();

        var reduceSize = min(u32(reduceLength), ${t}u);
        for (var currentSize = reduceSize / 2u; reduceSize > 1u;
            currentSize = reduceSize / 2u) {
          let interval = DIV_CEIL(reduceSize, 2u);
          if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              xBestValues[localId.x] = bestValue;
              xBestIndices[localId.x] = xBestIndices[localId.x + interval];
            }
          }
          reduceSize = interval;
          workgroupBarrier();
        }

        if (localId.x == 0u && outputIndex < uniforms.size) {
          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);
        }
      }
    `:`
      ${T("index")} {
        if (index < uniforms.size) {
          let outputCoords = getCoordsFromIndex(index);
          var bestIndex = 0;
          var bestValue = getX(${r()} 0);
          let reduceLength = ${e()};
          for (var i = 1; i < reduceLength; i++) {
            let candidate = getX(${r()} i);
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              bestIndex = i;
            }
          }
          setOutputAtIndexI32(index, bestIndex);
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Co(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s}=r;let a=l.D5U.parseAxisParam(s,o.shape);const u=l.Wap.getAxesPermutation(a,o.shape.length);let h=o;const d=[];u!=null&&(h=ue({inputs:{x:o},backend:e,attrs:{perm:u}}),d.push(h),a=l.Wap.getInnerMostAxes(a.length,h.shape.length)),l.Wap.assertAxesAreInnerMostDims("argMax",[a[0]],h.shape.length);const f=new io(h.shape,a[0],"max"),p=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],g=e.runWebGPUProgram(f,[h],"int32",p);return d.forEach(x=>e.disposeData(x.dataId)),g}const So={kernelName:l.sJF,backendName:"webgpu",kernelFunc:Co};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function or(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s}=r;let a=l.D5U.parseAxisParam(s,o.shape);const u=l.Wap.getAxesPermutation(a,o.shape.length);let h=o;const d=[];u!=null&&(h=ue({inputs:{x:o},backend:e,attrs:{perm:u}}),d.push(h),a=l.Wap.getInnerMostAxes(a.length,h.shape.length)),l.Wap.assertAxesAreInnerMostDims("argMin",[a[0]],h.shape.length);const f=new io(h.shape,a[0],"min"),p=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],g=e.runWebGPUProgram(f,[h],"int32",p);return d.forEach(x=>e.disposeData(x.dataId)),g}const ds={kernelName:l.aJk,backendName:"webgpu",kernelFunc:or};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ps=ne({opType:_.ASIN}),fs={kernelName:l.M2y,backendName:"webgpu",kernelFunc:ps};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ms=ne({opType:_.ASINH}),gs={kernelName:l.qw7,backendName:"webgpu",kernelFunc:ms};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys=ne({opType:_.ATAN}),xs={kernelName:l.jMg,backendName:"webgpu",kernelFunc:ys};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ws=Ce({opType:j.ATAN2}),vs={kernelName:l.QCc,backendName:"webgpu",kernelFunc:ws};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cs=ne({opType:_.ATANH}),Ss={kernelName:l.Oyi,backendName:"webgpu",kernelFunc:Cs};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bs{constructor(t){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];

          let xRCCorner = coords.yz * uniforms.strides;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          let value = getX(batch, xRCorner, xCCorner, d);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wr{constructor(t,e,r=!1,o=!1,s=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,e==="avg"&&r)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=r,this.flattenPositions=o,this.includeBatchIndex=s,this.shaderKey=`pool2D_${e}_${r}_${o}_${s}`}getUserCode(){let t;this.poolType==="avg"?t="resultValue = resultValue + value; count = count + 1.0;":this.computePositions?t=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};
      }`:t="resultValue = max(value, resultValue);";let e="resultValue";return this.poolType==="avg"&&(e="resultValue / max(count, 1.0)"),`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];
          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {
            let xR = xRCorner + wR;

            if (xR < 0 || xR >= uniforms.convDims.x) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {
              let xC = xCCorner + wC;
              if (xC < 0 || xC >= uniforms.convDims.y) {
                continue;
              }

              let value = getX(batch, xR, xC, d);
              ${t}
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}
        }
      }
    `}}class bo{constructor(t,e,r=!1,o=!1,s=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,e==="avg"&&r)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=r,this.flattenPositions=o,this.includeBatchIndex=s,this.shaderKey=`pool3D_${e}_${r}_${o}_${s}`}getUserCode(){let t;this.poolType==="avg"?t="resultValue += value; count += 1.0;":this.computePositions?t=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};
      }`:t="resultValue = max(value, resultValue);";let e="resultValue";return this.poolType==="avg"&&(e="resultValue / max(count, 1.0)"),`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords.x;
          let ch = coords.u;

          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
          let xDCorner = xCorner.x;
          let xRCorner = xCorner.y;
          let xCCorner = xCorner.z;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {
            let xD = xDCorner + wD;
            if (xD < 0 || xD >= uniforms.convDims.x) {
              continue;
            }

            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {
              let xR = xRCorner + wR;
              if (xR < 0 || xR >= uniforms.convDims.y) {
                continue;
              }

              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {
                let xC = xCCorner + wC;
                if (xC < 0 || xC >= uniforms.convDims.z) {
                  continue;
                }

                let value = getX(batch, xD, xR, xC, ch);
                ${t}
              }
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vo(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{reductionIndices:s,keepDims:a}=r;return se(o,s,a,"max",e)}const ks={kernelName:l.YoZ,backendName:"webgpu",kernelFunc:Vo};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ho(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{keepDims:s,axis:a}=r;return se(o,a,s,"mean",e)}const Is={kernelName:l.q2K,backendName:"webgpu",kernelFunc:Ho};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Go(i,t,e,r){if(t.filterWidth===1&&t.filterHeight===1&&l.D5U.arraysEqual(t.inShape,t.outShape))return De({inputs:{x:i},backend:r});if(t.filterWidth===t.inWidth&&t.filterHeight===t.inHeight&&t.batchSize===1&&t.padInfo.type==="VALID"){const a=i.shape.length,u=X({inputs:{x:i},backend:r,attrs:{shape:[i.shape[a-3]*i.shape[a-2],i.shape[a-1]]}});let h;e==="avg"?h=Ho({inputs:{x:u},backend:r,attrs:{axis:0,keepDims:!1}}):(l.D5U.assert(e==="max",()=>`Invalid pool type ${e}`),h=Vo({inputs:{x:u},backend:r,attrs:{reductionIndices:0,keepDims:!1}}));const d=X({inputs:{x:h},backend:r,attrs:{shape:t.outShape}});return r.disposeData(u.dataId),r.disposeData(h.dataId),d}let o;const s=[{type:"int32",data:[t.strideHeight,t.strideWidth]}];return t.filterHeight===1&&t.filterWidth===1?o=new bs(t):(e==="avg"?o=new Wr(t,"avg"):(l.D5U.assert(e==="max",()=>`Invalid pool type ${e}`),o=new Wr(t,"max")),s.push({type:"int32",data:[t.padInfo.top,t.padInfo.left]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]},{type:"int32",data:[t.inHeight,t.inWidth]},{type:"int32",data:[t.effectiveFilterHeight,t.effectiveFilterWidth]})),r.runWebGPUProgram(o,[i],i.dtype,s)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rs(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:s,strides:a,pad:u,dimRoundingMode:h}=r,f=l.Wap.computePool2DInfo(o.shape,s,a,1,u,h);return Go(o,f,"avg",e)}const Ps={kernelName:l.JhU,backendName:"webgpu",kernelFunc:Rs};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ds(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:s,strides:a,pad:u,dataFormat:h,dimRoundingMode:d}=r,f=[1,1,1],p=l.Wap.computePool3DInfo(o.shape,s,a,f,u,d,h),g=new bo(p,"avg"),x=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.front,p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.inDepth,p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]}];return e.runWebGPUProgram(g,[o],o.dtype,x)}const As={kernelName:l._k9,backendName:"webgpu",kernelFunc:Ds};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ns{constructor(t){this.variableNames=["dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);

            dotProd = dotProd + dyValue * uniforms.avgMultiplier;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class Fs{constructor(t){this.variableNames=["dy"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              dotProd += dyValue * uniforms.avgMultiplier;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $s(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:s}=t,a=s,{filterSize:u,strides:h,pad:d,dimRoundingMode:f}=r,p=l.Wap.computePool3DInfo(a.shape,u,h,1,d,f),g=new Fs(p),x=1/(p.filterDepth*p.filterHeight*p.filterWidth),w=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterDepth-1-p.padInfo.front,p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outDepth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"float32",data:[x]}];return e.runWebGPUProgram(g,[o],a.dtype,w)}const Ts={kernelName:l.IMb,backendName:"webgpu",kernelFunc:$s};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zs(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:s}=t,a=s;Yt([o,s],"avgPoolGrad");const{filterSize:u,strides:h,pad:d}=r,f=l.Wap.computePool2DInfo(a.shape,u,h,1,d),p=new Ns(f),g=1/(f.filterHeight*f.filterWidth),x=[{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.effectiveFilterHeight-1-f.padInfo.top,f.effectiveFilterWidth-1-f.padInfo.left]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]},{type:"int32",data:[f.effectiveFilterHeight,f.effectiveFilterWidth]},{type:"int32",data:[f.outHeight]},{type:"int32",data:[f.outWidth]},{type:"float32",data:[g]}];return e.runWebGPUProgram(p,[o],a.dtype,x)}const Es={kernelName:l.ROF,backendName:"webgpu",kernelFunc:zs};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ms(i){const{inputs:t,backend:e,attrs:r}=i,{a:o,b:s}=t,{transposeA:a,transposeB:u}=r;return Rt({a:o,b:s,transposeA:a,transposeB:u,backend:e})}const Ls={kernelName:l.XLW,backendName:"webgpu",kernelFunc:Ms};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _s{constructor(t,e){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.rank=e.length,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=t,this.uniforms=`start : ${O(t.length)}, `,this.shaderKey="slice"}getUserCode(){const t=O(this.rank),e=Bs(this.rank);let r;return this.start.length===1?r=this.outputShape.map((s,a)=>"sourceLoc = uniforms.start + coords;"):r=this.outputShape.map((s,a)=>`sourceLoc.${ko[a]} = uniforms.start.${Q(a)} + coords.${ko[a]};`),`
      ${T("index")} {
        if (index < uniforms.size) {
          var sourceLoc : ${t};
          let coords = getCoordsFromIndex(index);
          ${r.join(`
`)}
          setOutputAtIndex(index, getSource(${e}));
        }
      }
    `}}const ko=["x","y","z","w","u","v"];function Bs(i){if(i===1)return"sourceLoc";if(i<=6)return ko.slice(0,i).map(t=>`sourceLoc.${t}`).join(",");throw Error(`Slicing for rank ${i} is not yet supported`)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nr(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{begin:s,size:a}=r,[u,h]=l.kuN.parseSliceParams(o,s,a);if(l.kuN.assertParamsValid(o,u,h),e.shouldExecuteOnCPU([o])||o.dtype==="string"){const p=e.tensorMap.get(o.dataId),g=go(p.values,u,h,o.shape,o.dtype);return e.makeTensorInfo(h,o.dtype,g)}if(l.D5U.sizeFromShape(h)===0)return e.makeTensorInfo(h,o.dtype,[]);const d=new _s(u,h),f=[{type:"int32",data:u}];return e.runWebGPUProgram(d,[o],o.dtype,f)}const Os={kernelName:l.p2w,backendName:"webgpu",kernelFunc:nr};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Us=i=>{const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{blockShape:s,crops:a}=r;l.D5U.assert(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");const u=s.reduce((D,A)=>D*A),h=l.Wap.getReshaped(o.shape,s,u),d=l.Wap.getPermuted(h.length,s.length),f=l.Wap.getReshapedPermuted(o.shape,s,u),p=l.Wap.getSliceBeginCoords(a,s.length),g=l.Wap.getSliceSize(f,a,s.length),x=[],w=X({inputs:{x:o},backend:e,attrs:{shape:h}}),v=ue({inputs:{x:w},backend:e,attrs:{perm:d}}),k=X({inputs:{x:v},backend:e,attrs:{shape:f}}),P=nr({inputs:{x:k},backend:e,attrs:{begin:p,size:g}});return x.push(w),x.push(v),x.push(k),x.forEach(D=>e.disposeData(D.dataId)),P},Ws={kernelName:l.zws,backendName:"webgpu",kernelFunc:Us};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vs=`
  fn bincount_write(index: i32, value: f32) {
    ${fe("&result[index]","value","float32")}
  }
`,Hs=`
  fn bincount_write(index: i32, value: f32) {
    atomicStore(&result[index], bitcast<i32>(value));
  }
`;class jo{constructor(t,e,r=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=t,this.rank=t.length,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=r,r&&(this.atomic=!1),this.hasWeights=e,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`
    ${this.binaryOutput?Hs:Vs}
  ${T("index")} {
    ${this.rank===1?`if (index < uniforms.xShape) {
      let indexVal = i32(getX(index));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};
        bincount_write(indexVal, value);
      }
    }`:`let coord = getCoordsFromIndex(index);
    if (coordsInBounds2D(coord, uniforms.xShape)) {
      let indexVal = i32(getX(coord[0], coord[1]));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};
        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);
      }
    }`}
  }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gs(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,weights:s}=t,{size:a}=r,u=l.D5U.sizeFromShape(o.shape),d=l.D5U.sizeFromShape(s.shape)>0,f=[a],p=s.dtype,g=Pe({backend:e,attrs:{shape:f,value:0,dtype:p}}),x=new jo([u],d),w=[{type:"int32",data:[a]}],v=d?[o,s]:[o];return e.runWebGPUProgram(x,v,p,w,g)}const js={kernelName:l.zvY,backendName:"webgpu",kernelFunc:Gs};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xs{constructor(t){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`
  ${T("index")} {
    if (index < uniforms.size) {
      var s0 = 1.0;
      var s1 = 1.0;
      let indexS0 = index - uniforms.size + uniforms.s0Size;
      let indexS1 = index - uniforms.size + uniforms.s1Size;
      if (indexS0 >= 0) {
        s0 = getS0(indexS0);
      }
      if (indexS1 >= 0) {
        s1 = getS1(indexS1);
      }

      if (s0 == 1.0) {
        setOutputAtIndex(index, s1);
      } else if (s1 == 1.0) {
        setOutputAtIndex(index, s0);
      } else if (s0 != s1) {
        setOutputAtIndex(index, uniforms.NAN);
      } else {
        setOutputAtIndex(index, s0);
      }
    }
  }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ks(i){const{inputs:t,backend:e}=i,{s0:r,s1:o}=t;if(e.shouldExecuteOnCPU([r,o])){const f=e.tensorMap.get(r.dataId),p=e.tensorMap.get(o.dataId),g=f.values,x=p.values,w=l.Wap.assertAndGetBroadcastShape(Array.from(g),Array.from(x));return e.makeTensorInfo([w.length],"int32",Int32Array.from(w))}const s=l.D5U.sizeFromShape(r.shape),a=l.D5U.sizeFromShape(o.shape),u=Math.max(s,a),h=new Xs(u),d=[{type:"int32",data:[s]},{type:"int32",data:[a]}];return e.runWebGPUProgram(h,[r,o],"int32",d)}const Ys={kernelName:l.eEB,backendName:"webgpu",kernelFunc:Ks};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xo=Ce({opType:j.NOT_EQUAL,dtype:"bool",cpuKernelImpl:ho}),qs={kernelName:l.yQU,backendName:"webgpu",kernelFunc:Xo};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vr(i){const{inputs:t,backend:e}=i,{input:r}=t,o=e.tensorMap.get(r.dataId);return De({inputs:{x:o.complexTensorInfos.real},backend:e})}const Qs={kernelName:l.xJR,backendName:"webgpu",kernelFunc:Vr};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zs(i,t){const e=new We(i.shape,_.TO_INT),r=t.runWebGPUProgram(e,[i],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Io(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{dtype:s}=r;if(s==="complex64"){if(o.dtype==="complex64")return De({inputs:{x:o},backend:e});const a=l.lls(o.shape),u=Io({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),h=Je({inputs:{real:u,imag:a},backend:e});return a.dispose(),e.disposeData(u.dataId),h}if(o.dtype==="complex64"){const a=Vr({inputs:{input:o},backend:e}),u=Io({inputs:{x:a},backend:e,attrs:{dtype:s}});return e.disposeData(a.dataId),u}if(!l.D5U.hasEncodingLoss(o.dtype,s)){const a=De({inputs:{x:o},backend:e});return{dataId:a.dataId,shape:a.shape,dtype:s}}if(e.shouldExecuteOnCPU([o])){const a=e.tensorMap.get(o.dataId).values,[u,h,d]=Dt(a,o.shape,o.dtype,s);return e.makeTensorInfo(u,h,d)}if(s==="int32")return Zs(o,e);if(s==="bool"){const a=e.makeTensorInfo([],"bool",l.D5U.getTypedArrayFromDType("bool",1)),h=Xo({inputs:{a:o,b:a},backend:e});return e.disposeData(a.dataId),h}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${s}`)}const Js={kernelName:l.RFZ,backendName:"webgpu",kernelFunc:Io};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ea=ne({opType:_.CEIL,cpuKernelImpl:Zi}),ta={kernelName:l.gJX,backendName:"webgpu",kernelFunc:ea};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ia{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`
      ${T("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          var clampedValue = clamp(
              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));
          clampedValue = select(clampedValue, value, isnanVec4(value));
          setOutputAtIndex(index, clampedValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ra{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`
      ${T("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          if (isnan(value)) {
            setOutputAtIndex(index, value);
            return;
          }
          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oa(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{clipValueMin:s,clipValueMax:a}=r;let u;const h=[{type:"float32",data:[s]},{type:"float32",data:[a]}];return l.D5U.sizeFromShape(o.shape)%4===0?u=new ia(o.shape):u=new ra(o.shape),e.runWebGPUProgram(u,[o],o.dtype,h)}const na={kernelName:l.xnO,backendName:"webgpu",kernelFunc:oa};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sa{constructor(t){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.size) {
        let re = abs(getRealByOutputIndex(index));
        let im = abs(getImagByOutputIndex(index));
        let mx = max(re, im);

        // The length function in wgsl may be not underflow-safe on some GPUs.
        // So the safe solution is to ensure underflow-safety in all cases.
        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ko(i,t){return{dataId:t.dataId,dtype:t.dtype,shape:i.shape}}function aa(i){const{inputs:t,backend:e}=i,{x:r}=t,o=e.tensorMap.get(r.dataId),s=new sa(r.shape),a=[Ko(r,o.complexTensorInfos.real),Ko(r,o.complexTensorInfos.imag)];return e.runWebGPUProgram(s,a,a[0].dtype)}const ua={kernelName:l.yj2,backendName:"webgpu",kernelFunc:aa};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class la{constructor(t){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=l.Wap.computeOutShape(t,1),this.variableNames=t.map((e,r)=>`T${r}`),this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=t.length-1;for(let e=0;e<this.offsetLength;e++)this.uniforms+=`offset${e} : i32,`;this.shaderKey="concat"}getUserCode(){const t=[];if(this.offsetLength>0){t.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let s=1;s<this.offsetLength;s++)t.push(`else if (yC < uniforms.offset${[s]}){ setOutputAtCoords(coords.x, coords.y, getT${s}(yR, yC - uniforms.offset${s-1})); }`);const r=this.offsetLength,o=this.offsetLength-1;t.push(`else { setOutputAtCoords(coords.x, coords.y, getT${r}(yR, yC - uniforms.offset${o})); }`)}else t.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`
      ${T("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            let yR = coords.x;
            let yC = coords.y;

            ${t.join(`
        `)}
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro(i){const{inputs:t,backend:e}=i,{input:r}=t,o=e.tensorMap.get(r.dataId);return De({inputs:{x:o.complexTensorInfos.imag},backend:e})}const ca={kernelName:l.J_u,backendName:"webgpu",kernelFunc:ro};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hr(i,t,e){const r=i[0].dtype;if(r==="complex64"){const w=i.map(A=>Vr({inputs:{input:A},backend:e})),v=i.map(A=>ro({inputs:{input:A},backend:e})),k=Hr(w,t,e),P=Hr(v,t,e),D=Je({inputs:{real:k,imag:P},backend:e});return w.forEach(A=>e.disposeData(A.dataId)),v.forEach(A=>e.disposeData(A.dataId)),e.disposeData(k.dataId),e.disposeData(P.dataId),D}let o=e.shouldExecuteOnCPU(i);if(r==="string"&&(o=!0),o){const w=i.map($=>{const E=[-1,l.D5U.sizeFromShape($.shape.slice(t))];return X({inputs:{x:$},backend:e,attrs:{shape:E}})}),v=w.map($=>({vals:e.readSync($.dataId),shape:$.shape})),k=l.Wap.computeOutShape(w.map($=>$.shape),1),P=w[0].shape[0]===1,D=Ji(v,k,r,P),A=l.Wap.computeOutShape(i.map($=>$.shape),t),F=e.makeTensorInfo(A,r,D);return w.forEach($=>e.disposeData($.dataId)),F}const s=e.device.limits.maxStorageBuffersPerShaderStage-1;if(i.length>s){const w=[];for(let k=0;k<i.length;k+=s){const P=i.slice(k,k+s);w.push(Hr(P,t,e))}const v=Hr(w,t,e);for(const k of w)e.disposeData(k.dataId);return v}const{tensors2D:a,outShape:u}=ha(i,t,e),h=a.map(w=>w.shape),d=new la(h),f=[],p=new Array(h.length-1);if(p.length>0){p[0]=h[0][1],f.push({type:"int32",data:[p[0]]});for(let w=1;w<p.length;w++)p[w]=p[w-1]+h[w][1],f.push({type:"int32",data:[p[w]]})}const g=e.runWebGPUProgram(d,a,a[0].dtype,f);a.forEach(w=>e.disposeData(w.dataId));const x=X({inputs:{x:g},backend:e,attrs:{shape:u}});return e.disposeData(g.dataId),x}function ha(i,t,e){const r=l.Wap.computeOutShape(i.map(s=>s.shape),t);return{tensors2D:i.map(s=>X({inputs:{x:s},backend:e,attrs:{shape:[l.D5U.sizeFromShape(s.shape.slice(0,t)),l.D5U.sizeFromShape(s.shape.slice(t))]}})),outShape:r}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yo(i){const{inputs:t,backend:e,attrs:r}=i,{axis:o}=r,s=l.D5U.parseAxisParam(o,t[0].shape)[0],a=t.map(d=>d.shape);l.Wap.assertParamsConsistent(a,s);const u=l.Wap.computeOutShape(t.map(d=>d.shape),s);if(l.D5U.sizeFromShape(u)===0)return e.makeTensorInfo(u,t[0].dtype,[]);const h=t.filter(d=>l.D5U.sizeFromShape(d.shape)>0);return h.length===1?De({inputs:{x:h[0]},backend:e}):Hr(h,s,e)}const da={kernelName:l.Eh3,backendName:"webgpu",kernelFunc:Yo};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pa(i,t,e,r,o=!1,s=null,a=!1,u=4,h=4,d=4){const f=L=>{switch(L){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${L} is not supported.`)}},p=L=>{switch(L){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${L} is not supported.`)}},g=i?`
      let coord = vec4<i32>(batch, xRow, xCol, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, xRow, xCol);
      `,x=i?`
      let coords = vec4<i32>(
        batch,
        row / outWidth,
        row % outWidth,
        col);
      `:`
      let coords = vec4<i32>(
        batch,
        row,
        col / outWidth,
        col % outWidth);
      `,w=i?"uniforms.xShape[1]":"uniforms.xShape[2]",v=i?"uniforms.xShape[2]":"uniforms.xShape[3]",k=i?"row":"col",P=i?"col":"row",D=`
      let inChannels = uniforms.wShape[2];
      let outWidth = ${i?"uniforms.outShape[2]":"uniforms.outShape[3]"};
      let outRow = ${k} / outWidth;
      let outCol = ${k} % outWidth;

      let WRow = ${P} / (uniforms.filterDims[1] * inChannels);
      let WCol = ${P} / inChannels % uniforms.filterDims[1];
      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];
      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];
      let xCh = ${P} % inChannels;
      var resData = ${K(u)}(0.0);
      // The bounds checking is always needed since we use it to pad zero for
      // the 'same' padding type.
      if (xRow >= 0 && xRow < ${w} && xCol >= 0 && xCol < ${v}) {
        ${g}
        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);
        ${f(u)}
      }
      return resData;`,A=i?t&&r?`
      ${D}`:`
      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${D}
      }
      return ${K(u)}(0.0);`:r&&e?`
      ${D}`:`
      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {
        ${D}
      }
      return ${K(u)}(0.0);`,F=`${p(h)}`,$=K(d),z=K(i?u:h),E=K(i?h:u);return`
      ${Xe(s,a,d===4,4)}
      fn mm_readA(batch: i32, row : i32, col : i32) -> ${z} {
        ${i?A:F}
      }

      fn mm_readB(batch: i32, row : i32, col : i32) -> ${E} {
        ${i?F:A}
      }

      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${$}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)
        {
        var value = valueIn;
        let outWidth = ${i?"uniforms.outShape[2]":"uniforms.outShape[3]"};
        ${x}
        ${Ke(o,s)}
        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }`}class fa{constructor(t,e,r,o,s=!1,a=null,u=!1,h=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.outShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.isVec4=((t.inChannels%4===0||t.inChannels%3===0)&&this.isChannelsLast||t.outWidth%4===0&&!this.isChannelsLast)&&t.outChannels%4===0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=$t(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=Xt(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&t.inChannels%4!==0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),s&&(this.variableNames.push("bias"),this.variableComponents.push(4)),u&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],s&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=h,this.addBias=s,this.activation=a,this.hasPreluActivationWeights=u,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=e%this.tileAOuter===0,this.fitBOuter=r%this.tileBOuter===0,this.fitInner=o%this.tileInner===0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const t=this.isVec4?St(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):bt(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),e=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`
    ${pa(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,e[0],e[1],e[2])}
    ${t}
  `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ma{constructor(t,e=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=t.outShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e,this.activation=r,this.hasPreluActivationWeights=o,e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`
       ${Xe(this.activation,this.hasPreluActivationWeights,!1,4)}
       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{
         let coords = vec4<i32>(batch, row, col, chan);
         if (coordsInBounds4D(coords, uniforms.xShape)) {
           return  getX(batch, row, col, chan);
         } else {
          return 0.0;
         }
       }
       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{
         let coords = vec4<i32>(row, col, xChannel, outChannel);
         if(coordsInBounds4D(coords, uniforms.wShape)) {
           return getW(row, col, xChannel, outChannel);
          } else {
            return 0.0;
          }
       }
       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {
         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}
         if (coordsInBounds4D(coords, uniforms.outShape)) {
           var value = valueIn;
           ${Ke(this.addBias,this.activation)}
           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);
         }
       }
       ${T("index")} {
         let coords = getOutputCoords();
         let batch = coords[0];
         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}
         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}
         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}
         var acc : f32 = 0.0;
         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {
           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {
             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];
             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];
             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {
               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}
               let f = readFilt(row, col, xChannel, outChannel);
               acc = acc + v * f;
             }
           }
         }
         writeResult(batch, outRow, outCol, outChannel, acc);
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ga{constructor(t,e){this.variableNames=["x"],this.uniforms=`pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,
       inChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=e,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,r=this.isChannelsLast?"coords[1]":"coords[2]",o=this.isChannelsLast?"coords[2]":"coords[1]",s=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`
    ${T("index")} {
      let coords = getCoordsFromIndex(index);
      if(index < uniforms.size) {
        let batch = coords[0];
        let row = ${r};
        let col = ${o};
        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];
        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);
        var value = 0.0;
        if(xRow < uniforms.xShape[${t}] && xRow >= 0) {
          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -
              uniforms.pads[1];
          let xCol = offsetX + uniforms.dilations[1] * ((col %
              uniforms.itemsPerBlockRow) / uniforms.inChannels);
          let ch = col % uniforms.inChannels;
          if(xCol < uniforms.xShape[${e}] && xCol >= 0) {
            value = ${s};
          }
        }
        setOutputAtIndex(index, value);
      }
    }
   `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oo(i,t){const e=i.length;return e>=3?t?[...i.slice(0,-3),i[e-3]*i[e-2],i[e-1]]:[...i.slice(0,-3),i[e-3],i[e-2]*i[e-1]]:!t&&e===1&&i[0]>1?[i[0],1]:null}function ya({x:i,filter:t,convInfo:e,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:a=0,activation:u=null}){const h=e.dataFormat==="channelsLast",d=!h,f=!1,p=h&&e.filterHeight===e.inHeight&&e.filterWidth===e.inWidth&&e.padInfo.type==="VALID",g=[];let x,w;if(p){const P=e.inHeight*e.inWidth*e.inChannels;x=X({inputs:{x:i},backend:r,attrs:{shape:[1,e.batchSize,P]}}),w=X({inputs:{x:t},backend:r,attrs:{shape:[1,P,e.outChannels]}})}else x=X({inputs:{x:i},backend:r,attrs:{shape:h?[e.batchSize,e.inHeight*e.inWidth,e.inChannels]:[e.batchSize,e.inChannels,e.inHeight*e.inWidth]}}),w=X({inputs:{x:t},backend:r,attrs:{shape:[1,e.inChannels,e.outChannels]}});if(g.push(x),g.push(w),s!=null){const P=oo(s.shape,h);P!=null&&(s=X({inputs:{x:s},backend:r,attrs:{shape:P}}),g.push(s))}if(o!=null){const P=oo(o.shape,h);P!=null&&(o=X({inputs:{x:o},backend:r,attrs:{shape:P}}),g.push(o))}const v=Rt({a:h?x:w,b:h?w:x,transposeA:d,transposeB:f,backend:r,bias:o,activation:u,preluActivationWeights:s,leakyreluAlpha:a}),k=X({inputs:{x:v},backend:r,attrs:{shape:e.outShape}});g.push(v);for(const P of g)r.disposeData(P.dataId);return k}function xa({x:i,filter:t,convInfo:e,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:a=0,activation:u=null}){const{filterWidth:h,filterHeight:d,inChannels:f,strideWidth:p,strideHeight:g,padInfo:x,outWidth:w,outHeight:v,dilationWidth:k,dilationHeight:P,dataFormat:D}=e,A=D==="channelsLast",F=h*d*f,$=v*w,z=A?[e.batchSize,$,F]:[e.batchSize,F,$],E=new ga(z,A),B=[{type:"int32",data:[x.top,x.left]},{type:"int32",data:[g,p]},{type:"int32",data:[P,k]},{type:"int32",data:[w]},{type:"int32",data:[f*h]},{type:"int32",data:[f]}],L=r.runWebGPUProgram(E,[i],i.dtype,B),H=[];H.push(L);const Y=X({inputs:{x:t},backend:r,attrs:{shape:[1,F,-1]}});if(H.push(Y),s!=null){const pe=oo(s.shape,A);pe!=null&&(s=X({inputs:{x:s},backend:r,attrs:{shape:pe}}),H.push(s))}if(o!=null){const pe=oo(o.shape,A);pe!=null&&(o=X({inputs:{x:o},backend:r,attrs:{shape:pe}}),H.push(o))}const ie=Rt({a:A?L:Y,b:A?Y:L,transposeA:!A,transposeB:!1,backend:r,bias:o,activation:u,preluActivationWeights:s,leakyreluAlpha:a}),de=X({inputs:{x:ie},backend:r,attrs:{shape:e.outShape}});H.push(ie);for(const pe of H)r.disposeData(pe.dataId);return de}function qo({x:i,filter:t,convInfo:e,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:a=0,activation:u=null}){const h=o!=null,d=s!=null,f=e.dataFormat==="channelsLast",p=f&&e.filterHeight===e.inHeight&&e.filterWidth===e.inWidth&&e.padInfo.type==="VALID",g=(0,l.OBj)().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!g&&(p||e.filterHeight===1&&e.filterWidth===1&&e.dilationHeight===1&&e.dilationWidth===1&&e.strideHeight===1&&e.strideWidth===1&&(e.padInfo.type==="SAME"||e.padInfo.type==="VALID")))return ya({x:i,filter:t,convInfo:e,backend:r,bias:o,activation:u,preluActivationWeights:s,leakyreluAlpha:a});const x=(0,l.OBj)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),w=x>-1?x:r.thresholdToIncreaseWorkgroups,v=e.batchSize*Math.ceil(e.outHeight*e.outWidth/32)*Math.ceil(e.outChannels/32);if((0,l.OBj)().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||v<=w)return xa({x:i,filter:t,convInfo:e,backend:r,bias:o,preluActivationWeights:s,leakyreluAlpha:a,activation:u});let k;const P=[e.padInfo.top,e.padInfo.left],D=[{type:"int32",data:[e.filterHeight,e.filterWidth]},{type:"int32",data:[...P]},{type:"int32",data:[e.strideHeight,e.strideWidth]},{type:"int32",data:[e.dilationHeight,e.dilationWidth]}];if(g)k=new ma(e,h,u,d);else{const z=f?e.outHeight*e.outWidth:e.outChannels,E=f?e.outChannels:e.outHeight*e.outWidth,B=e.filterHeight*e.filterWidth*e.inChannels;D.push({type:"int32",data:[z]},{type:"int32",data:[E]},{type:"int32",data:[B]});const L=r.adapterInfo.isIntel();k=new fa(e,z,E,B,h,u,d,L)}const A=[],F=[i,t];h&&(!f&&o.shape.length===1&&(o=X({inputs:{x:o},backend:r,attrs:{shape:[o.shape[0],1,1]}}),A.push(o)),F.push(o)),d&&(!f&&s.shape.length===1&&(s=X({inputs:{x:s},backend:r,attrs:{shape:[s.shape[0],1,1]}}),A.push(s)),F.push(s)),u==="leakyrelu"&&(D.push({type:"float32",data:[a]}),k.uniforms+=" alpha : f32,");const $=r.runWebGPUProgram(k,F,i.dtype,D);for(const z of A)r.disposeData(z.dataId);return $}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wa(i){const{inputs:t,attrs:e,backend:r}=i,{x:o,filter:s}=t,{strides:a,pad:u,dataFormat:h,dilations:d,dimRoundingMode:f}=e,p=l.Wap.convertConv2DDataFormat(h),g=l.Wap.computeConv2DInfo(o.shape,s.shape,a,d,u,f,!1,p);return qo({x:o,filter:s,convInfo:g,backend:r})}const va={kernelName:l.mhS,backendName:"webgpu",kernelFunc:wa};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ca{constructor(t){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=t.inShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.isVec4=this.isChannelsLast&&t.outChannels%4===0&&t.inChannels%4===0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,r=this.isChannelsLast?3:1,o=`
    ${T()} {
      let batch = i32(globalId.z) / uniforms.outShape[1];
      let r = i32(globalId.z) % uniforms.outShape[1];
      let c = i32(globalId.y) * ${this.workPerThread};
      let d1 = i32(globalId.x) * 4;

      let dyCorner = vec2<i32>(r, c) - uniforms.pads;

      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
      // ? = to be determined. : = across all values in that axis.
      var dotProd: array<vec4<f32>, ${this.workPerThread}>;
      for (var i = 0; i < ${this.workPerThread}; i++) {
        dotProd[i] = vec4<f32>(0.0);
      }
      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);
        let wRPerm = uniforms.filterDims.x - 1 - wR;
        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||
            fract(dyR) > 0.0) {
          continue;
        }
        let idyR = i32(dyR);

        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);
          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);
          let wCPerm = uniforms.filterDims.y - 1 - wC;
          var bDyCVal = true;
          var bDyCVal2 = true;
          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
              fract(dyC) > 0.0) {
            bDyCVal = false;
          }
          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||
              fract(dyC2) > 0.0) {
            bDyCVal2 = false;
          }

          let idyC = i32(dyC);
          let idyC2 = i32(dyC2);
          if (bDyCVal && bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
              xValue = getDy(batch, idyR, idyC2, d2);
              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),
                                                  dot(xValue, wValue1),
                                                  dot(xValue, wValue2),
                                                  dot(xValue, wValue3));
            }
          } else if (bDyCVal) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
            }
          } else if (bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC2, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[1] = dotProd[1] + tmpval;
            }
          }
        }
      }

      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
        let coords = vec4<i32>(batch, r, c + i, d1);
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);
        }
      }
    }
    `;return this.isVec4?`
    ${o}
    `:`
    ${T("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[${r}];

        let dyCorner = vec2<i32>(coords[${t}], coords[${e}]) - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);
          let wRPerm = uniforms.filterDims.x - 1 - wR;
          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||
              wRPerm < 0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);
            let wCPerm = uniforms.filterDims.y - 1 - wC;
            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
                fract(dyC) > 0.0 || wCPerm < 0) {
              continue;
            }
            let idyC = i32(dyC);

            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {
              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};
              let wValue = getW(wRPerm, wCPerm, d1, d2);
              dotProd = dotProd + xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class Sa{constructor(t){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t.dataFormat==="channelsLast",this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`
    ${T("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let d2 = coords[3];

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b = b + 1) {
          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];
            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              if (${this.isChannelsLast}) {
                let dyValue = getDy(b, yR, yC, d2);
                let xValue = getX(b, xR, xC, d1);
                dotProd = dotProd + xValue * dyValue;
              } else {
                let dyValue = getDy(b, d2, yR, yC);
                let xValue = getX(b, d1, xR, xC);
                dotProd = dotProd + xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class ba{constructor(t){this.variableNames=["x","dy"],this.uniforms=`pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,
       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`
    ${T("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wF = coords.x;
        let wR = coords.y;
        let wC = coords.z;
        let d1 = coords.w;
        let d2 = coords.u;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yF = 0; yF < uniforms.outDepth; yF++) {
            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];
            if (xF < 0 || xF >= uniforms.inDepth) {
              continue;
            }

            for (var yR = 0; yR < uniforms.outHeight; yR++) {
              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];
              if (xR < 0 || xR >= uniforms.inHeight) {
                continue;
              }

              for (var yC = 0; yC < uniforms.outWidth; yC++) {
                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];
                if (xC < 0 || xC >= uniforms.inWidth) {
                  continue;
                }

                let dyValue = getDy(b, yF, yR, yC, d2);
                let xValue = getX(b, xF, xR, xC, d1);
                dotProd += xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class ka{constructor(t){this.variableNames=["dy","W"],this.uniforms=`filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`
    ${T("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let d1 = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyFCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);
          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {
            continue;
          }
          let idyF = i32(dyF);

          let wFPerm = uniforms.filterDims[0] - 1 - wF;

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            let wRPerm = uniforms.filterDims[1] - 1 - wR;

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let wCPerm = uniforms.filterDims[2] - 1 - wC;

              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {
                let xValue = getDy(batch, idyF, idyR, idyC, d2);
                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ia(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,dy:s}=t,{strides:a,pad:u,dataFormat:h,dimRoundingMode:d,filterShape:f}=r,p=l.Wap.convertConv2DDataFormat(h),g=l.Wap.computeConv2DInfo(o.shape,f,a,1,u,d,!1,p),x=new Sa(g),w=[{type:"int32",data:[g.padInfo.top,g.padInfo.left]},{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.batchSize]},{type:"int32",data:[g.outHeight]},{type:"int32",data:[g.outWidth]},{type:"int32",data:[g.inHeight]},{type:"int32",data:[g.inWidth]}];return e.runWebGPUProgram(x,[o,s],o.dtype,w)}const Ra={kernelName:l.wUP,backendName:"webgpu",kernelFunc:Ia};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pa(i=4){const t=s=>{switch(s){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];
            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];
            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];
            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];
            return vec4<f32>(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${s} is not supported.`)}},r=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${`
      let outRow = row / uniforms.outShape[2];
      let outCol = row % uniforms.outShape[2];

      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];
      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {
        return ${K(i)}(0.0);
      }
      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {
        return ${K(i)}(0.0);
      }
      let coord = vec4<i32>(
          batch,
          i32(xR),
          i32(xC),
          col % uniforms.outBackprop[3]);
      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${i}];`}
      }
      return ${K(i)}(0.0);`;return`
  fn mm_readA(batch: i32, row : i32, col : i32) -> ${K(i)} {
    ${r}
  }

  fn mm_readB(batch: i32, row : i32, col : i32) -> ${K(i)} {
    let coordX = uniforms.filterDims.x - 1 -
        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
    let coordY = uniforms.filterDims.y - 1 -
        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];
    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&
        coordX >= 0 && coordY >= 0) {
      let rowInner = row % uniforms.outBackprop[3];
      let coord = vec4<i32>(coordX, coordY, col, rowInner);
      ${t(i)}
    }
    return ${K(i)}(0.0);
  }

  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${K(i)}) {
    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${i}] = value;
    }
  }`}class Da{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.inShape,l.D5U.assert(t.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),this.isVec4=t.inChannels%4===0&&t.outChannels%4===0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=$t(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=Xt(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const t=this.isVec4?St(this.elementsPerThread,this.workgroupSize):bt(this.elementsPerThread,this.workgroupSize);return`
    ${Pa(this.isVec4?4:1)}
    ${t}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aa(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,filter:s}=t,{inputShape:a,strides:u,pad:h,dataFormat:d,dimRoundingMode:f}=r,p=l.Wap.convertConv2DDataFormat(d),g=l.Wap.computeConv2DInfo(a,s.shape,u,1,h,f,!1,p),x=[{type:"int32",data:[g.filterHeight,g.filterWidth]},{type:"int32",data:[g.filterHeight-1-g.padInfo.top,g.filterWidth-1-g.padInfo.left]},{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.batchSize,g.outHeight,g.outWidth,g.outChannels]}];let w;if((0,l.OBj)().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||g.dataFormat!=="channelsLast")w=new Ca(g);else{w=new Da(g);const v=g.inHeight*g.inWidth,k=g.inChannels,P=g.filterHeight*g.filterWidth*g.outChannels;x.push({type:"uint32",data:[v]},{type:"uint32",data:[k]},{type:"uint32",data:[P]})}return e.runWebGPUProgram(w,[o,s],"float32",x)}const Na={kernelName:l.wm,backendName:"webgpu",kernelFunc:Aa};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fa{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords.x;
        let d2 = coords.u;

        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
        let xFCorner = xFRCCorner.x;
        let xRCorner = xFRCCorner.y;
        let xCCorner = xFRCCorner.z;

        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;
        let inputDepthVec4Remainder = uniforms.xShape.u % 4;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let xF = xFCorner + wF * uniforms.dilations[0];
          if (xF < 0 || xF >= uniforms.xShape.y) {
            continue;
          }

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let xR = xRCorner + wR * uniforms.dilations[1];
            if (xR < 0 || xR >= uniforms.xShape.z) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let xC = xCCorner + wC * uniforms.dilations[2];
              if (xC < 0 || xC >= uniforms.xShape.w) {
                continue;
              }

              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {
                let xValues = vec4<f32>(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                let wValues = vec4<f32>(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (inputDepthVec4Remainder == 1) {
                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *
                  getW(wF, wR, wC, inputDepthNearestVec4, d2);
              } else if (inputDepthVec4Remainder == 2) {
                let xValues = vec2<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)
                );
                let wValues = vec2<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (inputDepthVec4Remainder == 3) {
                let xValues = vec3<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)
                );
                let wValues = vec3<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }`}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $a(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s}=t,{strides:a,pad:u,dilations:h}=r,d=l.Wap.computeConv3DInfo(o.shape,s.shape,a,h,u),f=[d.padInfo.front,d.padInfo.top,d.padInfo.left],p=[{type:"int32",data:[d.filterDepth,d.filterHeight,d.filterWidth]},{type:"int32",data:[...f]},{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationDepth,d.dilationHeight,d.dilationWidth]}],g=new Fa(d),x=(0,l.x8V)(o.dtype,s.dtype);return e.runWebGPUProgram(g,[o,s],x,p)}const Ta={kernelName:l.x12,backendName:"webgpu",kernelFunc:$a};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function za(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,dy:s}=t,{strides:a,pad:u,filterShape:h}=r,d=l.Wap.computeConv3DInfo(o.shape,h,a,1,u),f=new ba(d),p=[{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.batchSize]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.inDepth]},{type:"int32",data:[d.inHeight]},{type:"int32",data:[d.inWidth]}];return e.runWebGPUProgram(f,[o,s],s.dtype,p)}const Ea={kernelName:l.o2y,backendName:"webgpu",kernelFunc:za};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ma(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,filter:s}=t,{strides:a,pad:u,inputShape:h}=r,d=l.Wap.computeConv3DInfo(h,s.shape,a,1,u),f=new ka(d),p=[{type:"int32",data:[d.filterDepth,d.filterHeight,d.filterWidth]},{type:"int32",data:[d.filterDepth-1-d.padInfo.front,d.filterHeight-1-d.padInfo.top,d.filterWidth-1-d.padInfo.left]},{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.outChannels]}];return e.runWebGPUProgram(f,[o,s],o.dtype,p)}const La={kernelName:l.ik2,backendName:"webgpu",kernelFunc:Ma};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _a=ne({opType:_.COS}),Ba={kernelName:l.mc4,backendName:"webgpu",kernelFunc:_a};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oa=ne({opType:_.COSH}),Ua={kernelName:l.TR1,backendName:"webgpu",kernelFunc:Oa};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wa{constructor(t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[s]=e;this.outputShape=[s,r[0],r[1],t],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId=o==="bilinear"?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[t,e]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[r,o,s]=this.cropHeightBiggerThan1?[`(${t} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${t} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${t}`],[a,u,h]=this.cropWidthBiggerThan1?[`(${e} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${e} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${e}`];return`
    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let height_ratio = f32(${r});
        let width_ratio = f32(${a});
        let b = coords[0];
        let y = coords[1];
        let x = coords[2];
        let d = coords[3];
        // get box vals
        let y1 = getBoxes(b, 0);
        let x1 = getBoxes(b, 1);
        let y2 = getBoxes(b, 2);
        let x2 = getBoxes(b, 3);
        // get image in batch index
        let bInd = i32(round(getBoxInd(b)));
        if(bInd < 0 || bInd >= uniforms.outShape[0]) {
          return;
        }
        let height_scale = ${o};
        let width_scale = ${u};
        let in_y = ${s};
        if( in_y < 0.0 || in_y > ${t} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let in_x = ${h};
        if( in_x < 0.0 || in_x > ${e} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let sourceFracIndexCR = vec2<f32>(in_x,in_y);
        if(${this.methodId} == 1) {
          // Compute the four integer indices.
          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);
          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));
          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);
          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);
          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);
          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);
          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);
          let top = topLeft + (topRight - topLeft) * fracCR.x;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          let newValue = top + (bottom - top) * fracCR.y;
          setOutputAtIndex(index, newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          let sourceNearestCR = vec2<i32>(floor(
            sourceFracIndexCR + vec2<f32>(0.5,0.5)));
          let newValue = getImage(
            bInd, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutputAtIndex(index, newValue);
        }
      }
    }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Va=i=>{const{inputs:t,backend:e,attrs:r}=i,{image:o,boxes:s,boxInd:a}=t,{cropSize:u,method:h,extrapolationValue:d}=r,f=new Wa(o.shape[3],s.shape,u,h),p=[{type:"float32",data:[d]}];return e.runWebGPUProgram(f,[o,s,a],"float32",p)},Ha={kernelName:l.VcC,backendName:"webgpu",kernelFunc:Va};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Gr;(function(i){i.Prod="*",i.Sum="+"})(Gr||(Gr={}));class Qo{constructor(t,e,r,o){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=e,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=r,this.reverse=o,this.op=t,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const t=this.outputShape.length,e=this.op===Gr.Prod?"1.0":"0.0",r=this.exclusive?e:`getX(${Zo(t,"coords",this.op)})`,o=this.outputShape[this.outputShape.length-1];let s="",a="";return this.exclusive?(s=this.reverse?`end != ${o-1}`:"end != 0",a=this.reverse?"end + 1":"end - 1"):(s=this.reverse?`end + pow2 < ${o}`:"end >= pow2",a=this.reverse?"end + pow2":"end - pow2"),`
      ${T("index")} {
       if (index < uniforms.size) {
         var coords = getCoordsFromIndex(index);

         let end = ${Jo(t,"coords",this.op)};
         var val = ${r};
         let pow2 = i32(pow(2.0, uniforms.index));
         if (${s}) {
           let idx = ${a};
           ${Jo(t,"coords",this.op)} = idx;
           val ${this.op}= getX(${Zo(t,"coords",this.op)});
         }
         setOutputAtIndex(index, val);
       }
      }
    `}}function Zo(i,t,e){if(i===1)return`${t}`;if(i===2)return`${t}.x, ${t}.y`;if(i===3)return`${t}.x, ${t}.y, ${t}.z`;if(i===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${e} for rank ${i} is not yet supported`)}function Jo(i,t,e){if(i===1)return`${t}`;if(i===2)return`${t}.y`;if(i===3)return`${t}.z`;if(i===4)return`${t}.w`;throw Error(`Cumulative ${e} for rank ${i} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function en(i,t,e,r,o,s){const a=t.shape.length,u=l.Wap.getAxesPermutation([r],a);let h=t;u!=null&&(h=ue({inputs:{x:t},backend:e,attrs:{perm:u}}));const d=l.Wap.getInnerMostAxes(1,a)[0];if(d!==a-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);const f=h.shape[d];let p=De({inputs:{x:h},backend:e});for(let g=0;g<=Math.ceil(Math.log2(f))-1;g++){const x=new Qo(i,h.shape,!1,s),w=p,v=[{type:"float32",data:[g]}];p=e.runWebGPUProgram(x,[p],p.dtype,v),e.disposeData(w.dataId)}if(o){const g=new Qo(i,h.shape,o,s),x=p,w=[{type:"float32",data:[0]}];p=e.runWebGPUProgram(g,[p],p.dtype,w),e.disposeData(x.dataId)}if(u!=null){const g=l.Wap.getUndoAxesPermutation(u),x=ue({inputs:{x:p},backend:e,attrs:{perm:g}});return e.disposeData(p.dataId),e.disposeData(h.dataId),x}return p}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ga(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s,exclusive:a,reverse:u}=r;return en(Gr.Prod,o,e,s,a,u)}const ja={kernelName:l.Byc,backendName:"webgpu",kernelFunc:Ga};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xa(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s,exclusive:a,reverse:u}=r;return en(Gr.Sum,o,e,s,a,u)}const Ka={kernelName:l.iHb,backendName:"webgpu",kernelFunc:Xa};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ya(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,weights:s}=t,{size:a,binaryOutput:u}=r,h=o.shape.length===1,f=l.D5U.sizeFromShape(s.shape)>0,p=s.dtype,g=h?[o.shape[0]]:[o.shape[0],o.shape[1]],x=h?[a]:[o.shape[0],a],w=Pe({backend:e,attrs:{shape:x,value:0,dtype:p}}),v=new jo(g,f,u),k=[{type:"int32",data:[a]}],P=f?[o,s]:[o];return e.runWebGPUProgram(v,P,p,k,w)}const qa={kernelName:l.QRR,backendName:"webgpu",kernelFunc:Ya};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qa{constructor(t,e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${e}`,this.dataFormat=e}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let h = ${this.getHeightCoordString()};
          let w = ${this.getWidthCoordString()};
          let d = ${this.getDepthCoordString()};

          let in_h = h / uniforms.blockSize;
          let offset_h = h % uniforms.blockSize;
          let in_w = w / uniforms.blockSize;
          let offset_w = w % uniforms.blockSize;
          let offset_d = (offset_h * uniforms.blockSize + offset_w) *
            ${this.getOutputDepthSize()};
          let in_d = d + offset_d;

          let rlt = ${this.getInputSamplingString()};
          setOutputAtIndex(index, rlt);
        }
      }`}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Za(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{blockSize:s,dataFormat:a}=r,u=o.shape[0],h=a==="NHWC"?o.shape[1]:o.shape[2],d=a==="NHWC"?o.shape[2]:o.shape[3],f=a==="NHWC"?o.shape[3]:o.shape[1],p=h*s,g=d*s,x=f/(s*s),w=a==="NHWC"?[u,p,g,x]:[u,x,p,g],v=[{type:"int32",data:[s]}],k=new Qa(w,a);return e.runWebGPUProgram(k,[o],o.dtype,v)}const Ja={kernelName:l.T0n,backendName:"webgpu",kernelFunc:Za};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class eu{constructor(t,e,r,o=!1,s=null,a=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=t,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.addBias=o,this.activation=s,this.hasPreluActivation=a,this.filterHeight=e,this.filterWidth=r,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const t=this.filterWidth*this.filterHeight,e=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],r=this.workgroupSize[1]+this.filterHeight-1,o=this.workgroupSize[0]+this.filterWidth-1;return`
      ${Xe(this.activation,this.hasPreluActivation,!1,4)}

      var<workgroup> mm_Asub : array<array<f32, ${o}>, ${r}>;
      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;
      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {
        var value = 0.0;
        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])
        {
          value = getX(batch, channel, row, col);
        }
        return value;
      }

      ${T()} {
        let coords = getOutputCoords();
        let batch = coords[0];
        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;
        let channelMul = uniforms.wShape[3];
        let d1 = coords[1] / channelMul;
        let q = coords[1] % channelMul;

        let inputRowStart = xRCCorner.x;
        let inputColStart = xRCCorner.y;

        let localRow = i32(localId.y);
        let localCol = i32(localId.x);

        // Load one tile of X into local memory.
        for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${this.workgroupSize[1]}) {
          for (var inputCol = localCol; inputCol < ${o}; inputCol = inputCol + ${this.workgroupSize[0]}) {
            let rowOffset = inputRow - localRow;
            let colOffset = inputCol - localCol;
            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);
          }
        }

        // Load one tile of W into local memory.
        var wIndex = i32(localIndex);
        ${t<e?`if (wIndex < ${t})`:`for(; wIndex < ${t}; wIndex = wIndex + ${e})`}

        {
          let wRow = wIndex / ${this.filterWidth};
          let wCol = wIndex % ${this.filterWidth};
          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);
        }

        workgroupBarrier();

        var value = 0.0;
        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {
          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {
            let xVal = mm_Asub[localRow + wR][localCol + wC];
            let wVal = mm_Bsub[wR][wC];
            value = fma(xVal, wVal, value);
          }
        }
        ${Ke(this.addBias,this.activation)}
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tn{constructor(t,e=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=t.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const s=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=V(s),this.dispatch=U(this.dispatchLayout,s,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),l.D5U.assert(t.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=r,this.hasPreluActivation=o,this.shaderKey=`depthwiseVec4_${r}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const t=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,e=this.convInfo.strideHeight,r=this.convInfo.strideWidth;return`
      ${Xe(this.activation,this.hasPreluActivation,!0,4)}
      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {
        var value = vec4<f32>(0.0);
        if (col >=0 && col < uniforms.inDims[1]) {
          value = getX(batch, row, col, channel);
        }
        return value;
      }

      ${T("index")} {
        let width0 = uniforms.outShape[3] / ${this.outputComponent};
        let d1 = (index % width0) * ${this.outputComponent};
        var index1 = index / width0;
        let width1 = uniforms.virtualWidth / ${this.workPerThread};
        let c = (index1 % width1) * ${this.workPerThread};
        index1 = index1 / width1;
        let r = index1 % uniforms.outShape[1];
        let batch = index1 / uniforms.outShape[1];

        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${e}, ${r}) - uniforms.pads;

        let xRCorner = xRCCorner.x;
        let xCCorner = xRCCorner.y;
        var xVals : array<vec4<f32>, ${t}>;
        var dotProd : array<vec4<f32>, ${this.workPerThread}>;
        for (var i = 0; i < ${this.workPerThread}; i++) {
          dotProd[i] = vec4<f32>(0.0);
        }

        // Use constant instead of uniform can give better performance.
        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {
          let xR = xRCorner + wR;
          if (xR >=0 && xR < uniforms.inDims[0]) {
            for (var i = 0; i < ${t}; i++) {
              xVals[i] = readX(batch, xR, xCCorner + i, d1);
            }
            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {
              let wValue = getW(wR, wC, d1, 0);
              for (var i = 0; i < ${this.workPerThread}; i++) {
                dotProd[i] = fma(xVals[i * ${r} + wC], wValue, dotProd[i]);
              }
            }
          }
        }

        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let coords = vec4<i32>(batch, r, c + i, d1);
          if (coordsInBounds4D(coords, uniforms.outShape)) {
            var value = dotProd[i];
            ${Ke(this.addBias,this.activation)}
            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rn{constructor(t,e=!1,r=null,o=!1){this.variableNames=["x","W"],this.uniforms=`pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,
      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,`,this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t.dataFormat==="channelsLast",e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=r,this.hasPreluActivation=o,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`
      ${Xe(this.activation,this.hasPreluActivation,!1,4)}

      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let batch = coords[0];
          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;
          let d2 = coords[${this.isChannelsLast?3:1}];
          let channelMul = uniforms.wShape[3];
          let d1 = d2 / channelMul;
          let q = d2 % channelMul;

          let inputRowStart = xRCCorner.x;
          let inputColStart = xRCCorner.y;
          let inputRowEnd = inputRowStart + uniforms.filterHeight *
              uniforms.dilations[0];
          let inputColEnd = inputColStart + uniforms.filterWidth *
              uniforms.dilations[1];

          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get
          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all
          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.
          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.
          var value = 0.0;

          // Extract if checking out of for loop for performance.
          if (inputRowStart >= 0 && inputColStart >= 0 &&
            inputRowEnd < uniforms.inDims[0] &&
                inputColEnd < uniforms.inDims[1]) {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  let xVal = ${t};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            } else {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                if (xR < 0 || xR >= uniforms.inDims[0]) {
                  continue;
                }

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  if (xC < 0 || xC >= uniforms.inDims[1]) {
                    continue;
                  }

                  let xVal = ${t};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            }
            ${Ke(this.addBias,this.activation)}
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tu(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s}=t,{strides:a,pad:u,dataFormat:h,dilations:d,dimRoundingMode:f}=r,p=l.Wap.convertConv2DDataFormat(h);let g=d;g==null&&(g=[1,1]);const x=l.Wap.computeConv2DInfo(o.shape,s.shape,a,g,u,f,!0,p),w=[{type:"int32",data:[x.padInfo.top,x.padInfo.left]},{type:"int32",data:[x.inHeight,x.inWidth]}],v=x.dataFormat==="channelsLast";let k;return!v&&x.inHeight>16&&x.inWidth>16&&x.strideHeight===1&&x.strideWidth===1&&x.dilationWidth===1&&x.dilationHeight===1&&x.inChannels===x.outChannels?k=new eu(x.outShape,x.filterHeight,x.filterWidth):v&&x.outHeight>4&&x.outWidth>4&&x.strideWidth<=2&&x.inChannels===x.outChannels&&x.dilationHeight===1&&x.dilationWidth===1&&x.inChannels%4===0?(k=new tn(x),w.push({type:"int32",data:[k.virtualWidth]})):(k=new rn(x),w.push({type:"int32",data:[x.filterHeight]},{type:"int32",data:[x.filterWidth]},{type:"int32",data:[x.strideHeight,x.strideWidth]},{type:"int32",data:[x.dilationHeight,x.dilationWidth]})),e.runWebGPUProgram(k,[o,s],o.dtype,w)}const iu={kernelName:l.cie,backendName:"webgpu",kernelFunc:tu};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ru{constructor(t){this.variableNames=["x","dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,
      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let dm = coords[3];
        let d2 = d1 * uniforms.channelMul + dm;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yR = 0; yR < uniforms.outHeight; yR++) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];

            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC++) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              let dyValue = getDy(b, yR, yC, d2);
              let xValue = getX(b, xR, xC, d1);
              dotProd += xValue * dyValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class ou{constructor(t){this.variableNames=["dy","W"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[3];
        let dyCorner = coords.yz - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }

          let idyR = i32(dyR);
          let wRPerm = uniforms.filterDims[0] - 1 - wR;

          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }

            let idyC = i32(dyC);
            let wCPerm = uniforms.filterDims[1] - 1 - wC;

            for (var dm = 0; dm < uniforms.channelMul; dm++) {
              let d2 = d1 * uniforms.channelMul + dm;
              let xValue = getDy(batch, idyR, idyC, d2);
              let wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nu(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,dy:s}=t,{strides:a,dilations:u,pad:h,dimRoundingMode:d,filterShape:f}=r,p=l.Wap.computeConv2DInfo(o.shape,f,a,u,h,d,!0),g=new ru(p),x=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.inHeight]},{type:"int32",data:[p.inWidth]},{type:"int32",data:[p.batchSize]},{type:"int32",data:[p.outChannels/p.inChannels]}];return e.runWebGPUProgram(g,[o,s],"float32",x)}const su={kernelName:l.sL$,backendName:"webgpu",kernelFunc:nu};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function au(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,filter:s}=t,{strides:a,dilations:u,pad:h,dimRoundingMode:d,inputShape:f}=r,p=l.Wap.computeConv2DInfo(f,s.shape,a,u,h,d,!0),g=new ou(p),x=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.filterHeight-1-p.padInfo.top,p.filterWidth-1-p.padInfo.left]},{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.outChannels/p.inChannels]}];return e.runWebGPUProgram(g,[o,s],o.dtype,x)}const uu={kernelName:l.y7R,backendName:"webgpu",kernelFunc:au};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lu{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,t],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cu(i){const{inputs:t,backend:e}=i,{x:r}=t,o=[...r.shape,...r.shape],s=l.D5U.sizeFromShape(r.shape),a=X({inputs:{x:r},backend:e,attrs:{shape:[s]}}),u=new lu(s),h=e.runWebGPUProgram(u,[a],a.dtype),d=X({inputs:{x:h},backend:e,attrs:{shape:o}});return e.disposeData(a.dataId),e.disposeData(h.dataId),d}const hu={kernelName:l.$w,backendName:"webgpu",kernelFunc:cu};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class du{constructor(t){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`
       ${T("index")} {
         if (index < uniforms.size) {
           let neg_infinity = -3.4e38;
           let coords = getOutputCoords();
           let batch = coords.x;
           let d1 = coords.w;
           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;
           let hBeg = outTopLeftCorner.x;
           let wBeg = outTopLeftCorner.y;

           var curVal = neg_infinity;
           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {
             let hIn = hBeg + h * uniforms.dilations[0];

             if (hIn >= 0 && hIn < uniforms.xShape[1]) {
               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {
                 let wIn = wBeg + w * uniforms.dilations[1];

                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {
                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);
                   if (val > curVal) {
                     curVal = val;
                   }
                 }
               }
             }
           }

           setOutputAtIndex(index, curVal);
         }
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pu(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s}=t,{strides:a,pad:u,dilations:h}=r,d=l.Wap.computeDilation2DInfo(o.shape,s.shape,a,u,"NHWC",h),f=[d.padInfo.top,d.padInfo.left],p=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[...f]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]}],g=new du(d);return e.runWebGPUProgram(g,[o,s],o.dtype,p)}const fu={kernelName:l.p4S,backendName:"webgpu",kernelFunc:pu};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class mu{constructor(t,e){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.inShape,this.dispatchLayout=V(t.outShape),this.dispatch=U(this.dispatchLayout,t.outShape,this.workgroupSize),e!=="float32"&&e!=="int32")throw new Error(`Dilation2DBackpropInput only supports float32 and int32
          types, does not support ${e} type.`);this.type=e,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`
       ${T("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var xRMax = 0;
           var xCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     xRMax = xR;
                     xCMax = xC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.xShape[3] *
               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));
           let value = getDy(b, r, c, d);
           ${fe("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}class gu{constructor(t,e,r){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.filterShape,this.dispatchLayout=V(t.outShape),this.dispatch=U(this.dispatchLayout,t.outShape,this.workgroupSize),r!=="float32"&&r!=="int32")throw new Error(`Dilation2DBackpropFilter only supports float32 and int32
          types, does not support ${r} type.`);this.type=r,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`
       ${T("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var wRMax = 0;
           var wCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     wRMax = wR;
                     wCMax = wC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);
           let value = getDy(b, r, c, d);
           ${fe("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yu(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s,dy:a}=t,{strides:u,pad:h,dilations:d}=r,f=l.Wap.computeDilation2DInfo(o.shape,s.shape,u,h,"NHWC",d),p=s.dtype,g=new gu(f,s.shape,p),x=[{type:"int32",data:[f.filterHeight,f.filterWidth]},{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]},{type:"int32",data:[l.D5U.sizeFromShape(f.outShape)]}],w=Pe({backend:e,attrs:{shape:s.shape,value:0,dtype:p}});return e.runWebGPUProgram(g,[o,s,a],p,x,w)}const xu={kernelName:l.Vn9,backendName:"webgpu",kernelFunc:yu};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wu(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s,dy:a}=t,{strides:u,pad:h,dilations:d}=r,f=l.Wap.computeDilation2DInfo(o.shape,s.shape,u,h,"NHWC",d),p=o.dtype,g=new mu(f,p),x=[{type:"int32",data:[f.filterHeight,f.filterWidth]},{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]},{type:"int32",data:[l.D5U.sizeFromShape(f.outShape)]}],w=Pe({backend:e,attrs:{shape:f.inShape,value:0,dtype:p}});return e.runWebGPUProgram(g,[o,s,a],p,x,w)}const vu={kernelName:l.ekb,backendName:"webgpu",kernelFunc:wu};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cu{constructor(t,e,r){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=$e.DRAW,this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=e,this.textureFormat=r,this.shaderKey=`draw_${e}_${r}`}getUserCode(){let t;const e=this.type==="float32"?"value":"value / 255.0";return t=`
      if (uniforms.numChannels == 1) {
        rgba[0] = ${e};
        rgba[1] = ${e};
        rgba[2] = ${e};
      } else {
        rgba[d] = ${e};
      }`,`
       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;
       ${T("index")} {
         if (index < uniforms.size) {
           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);
           for (var d = 0; d < uniforms.numChannels; d = d + 1) {
             let value = f32(inBuf[index * uniforms.numChannels + d]);
             ${t}
           }
           rgba.x = rgba.x * rgba.w;
           rgba.y = rgba.y * rgba.w;
           rgba.z = rgba.z * rgba.w;
           let coords = getCoordsFromIndex(index);
           textureStore(outImage, vec2<i32>(coords.yx), rgba);
         }
       }
      `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Su(i){const{inputs:t,backend:e,attrs:r}=i,{image:o}=t,{canvas:s,options:a}=r,[u,h]=o.shape.slice(0,2),{imageOptions:d}=a||{},f=d?.alpha||1,p=e.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",g=[u,h],x=new Cu(g,o.dtype,p);s.width=h,s.height=u;const w="webgpu";let v=s.getContext(w),k;v||(k=new OffscreenCanvas(h,u),v=k.getContext(w));const P=o.shape.length===3?o.shape[2]:1;v.configure({device:e.device,format:p,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const D="int32",A=e.makeTensorInfo(g,D),F=e.tensorMap.get(A.dataId);F.resource=v.getCurrentTexture(),F.external=!0;const $=[{type:"uint32",data:[P]},{type:"float32",data:[f]}];if(e.runWebGPUProgram(x,[o],D,$,A),k){const z=s.getContext("2d");if(!z)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");z.drawImage(k,0,0)}return e.disposeData(A.dataId),o}const bu={kernelName:l.hGc,backendName:"webgpu",kernelFunc:Su};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const on=Ce({opType:j.MUL,cpuKernelImpl:Jr,supportsComplex:!0}),ku={kernelName:l.wYn,backendName:"webgpu",kernelFunc:on};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nn(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s,keepDims:a}=r;return se(o,s,a,"sum",e)}const Iu={kernelName:l.GBy,backendName:"webgpu",kernelFunc:nn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ru(i){const{inputs:t,backend:e,attrs:r}=i,{equation:o}=r,s=t,{allDims:a,summedDims:u,idDims:h}=l.Wap.decodeEinsumEquation(o,s.length);l.Wap.checkEinsumDimSizes(a.length,h,s);const{path:d,steps:f}=l.Wap.getEinsumComputePath(u,h),p=f.length;let g=null,x=a.length;const w=[];for(let v=0;v<p;++v){for(const k of f[v]){const{permutationIndices:P,expandDims:D}=l.Wap.getEinsumPermutation(x,h[k]);let A;l.Wap.isIdentityPermutation(P)?A=s[k]:(A=ue({inputs:{x:s[k]},backend:e,attrs:{perm:P}}),w.push(A));const F=A.shape.slice();for(let $=0;$<D.length;++$)F.splice(D[$],0,1);l.D5U.arraysEqual(A.shape,F)||(A=X({inputs:{x:A},backend:e,attrs:{shape:F}}),w.push(A)),g===null?g=A:(g=on({inputs:{a:A,b:g},backend:e}),w.push(g))}v<p-1&&(d[v]>=0&&(g=nn({inputs:{x:g},backend:e,attrs:{axis:d[v]-(a.length-x),keepDims:!1}}),w.push(g)),x--)}for(const v of w)v!==g&&e.disposeData(v.dataId);return g}const Pu={kernelName:l.$g6,backendName:"webgpu",kernelFunc:Ru};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Du=ne({opType:_.ELU}),Au={kernelName:l.SX0,backendName:"webgpu",kernelFunc:Du};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nu=i=>{const{inputs:t,backend:e}=i,{dy:r,y:o}=t,s=new Ut(j.ELU_DER,r.shape,o.shape);return e.runWebGPUProgram(s,[r,o],r.dtype)},Fu={kernelName:l.HEU,backendName:"webgpu",kernelFunc:Nu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $u=Ce({opType:j.EQUAL,dtype:"bool",cpuKernelImpl:Mr}),Tu={kernelName:l.hdR,backendName:"webgpu",kernelFunc:$u};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zu=ne({opType:_.ERF}),Eu={kernelName:l.Omj,backendName:"webgpu",kernelFunc:zu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mu=ne({opType:_.EXP,cpuKernelImpl:Lr,dtype:"float32"}),Lu={kernelName:l.NEP,backendName:"webgpu",kernelFunc:Mu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ro(i){const{inputs:t,attrs:e,backend:r}=i,{dim:o}=e,{input:s}=t,a=s.shape.length,u=s.shape.slice();let h=o;return o<0&&(l.D5U.assert(-(a+1)<=o,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),h=a+o+1),u.splice(h,0,1),X({inputs:{x:s},backend:r,attrs:{shape:u}})}const _u={kernelName:l.YFo,backendName:"webgpu",kernelFunc:Ro};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bu=ne({opType:_.EXPM1,cpuKernelImpl:Wt}),Ou={kernelName:l.Y0y,backendName:"webgpu",kernelFunc:Bu};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sn{constructor(t,e){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=t,this.shaderKey=`fft_${t}`}getUserCode(){return`
    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {
      ${this.component==="real"?"return real * expR - imag * expI;":"return real * expI + imag * expR;"}
    }

    fn mulMatDFT(batch: i32, index: i32) -> f32 {
      let indexRatio = f32(index) / f32(uniforms.realShape[1]);
      let exponentMultiplierTimesIndexRatio =
          uniforms.exponentMultiplier * indexRatio;

      var result = 0.0;

      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {
        // x = (-2|2 * PI / N) * index * i;
        let x = exponentMultiplierTimesIndexRatio * f32(i);
        let expR = cos(x);
        let expI = sin(x);
        let real = getReal(batch, i);
        let imag = getImag(batch, i);

        result = result +
            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;
      }

      return result;
    }

    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function an(i,t,e){const r=e.tensorMap.get(i.dataId),o=l.D5U.sizeFromShape(i.shape),s=i.shape[i.shape.length-1],a=o/s,u=[],h=X({inputs:{x:i},backend:e,attrs:{shape:[a,s]}});u.push(h);const d=h.shape,f=new sn("real",d),p=new sn("imag",d),g=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:d},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:d}],x=t?2*Math.PI:-2*Math.PI,w=t?d[1]:1,v=[{type:"float32",data:[x]},{type:"float32",data:[w]}],k=e.runWebGPUProgram(f,g,"float32",v);u.push(k);const P=e.runWebGPUProgram(p,g,"float32",v);u.push(P);const D=Je({inputs:{real:k,imag:P},backend:e});u.push(D);const A=X({inputs:{x:D},backend:e,attrs:{shape:i.shape}});return u.forEach(F=>e.disposeData(F.dataId)),A}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uu(i){const{inputs:t,backend:e}=i,{input:r}=t;return an(r,!1,e)}const Wu={kernelName:l.vwp,backendName:"webgpu",kernelFunc:Uu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Vu{constructor(t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let coordX = uniforms.xShape[2] - coords[2] - 1;
          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);
          setOutputAtIndex(index, outputValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hu={kernelName:l.Uyb,backendName:"webgpu",kernelFunc:({inputs:i,backend:t})=>{const{image:e}=i,r=t,o=new Vu(e.shape);return r.runWebGPUProgram(o,[e],e.dtype)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gu=ne({opType:_.FLOOR,cpuKernelImpl:er}),ju={kernelName:l.OR,backendName:"webgpu",kernelFunc:Gu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xu=Ce({opType:j.FLOOR_DIV,cpuKernelImpl:Zr,dtype:"int32"}),Ku={kernelName:l.jeX,backendName:"webgpu",kernelFunc:Xu};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yu{constructor(t,e,r=!1){this.pixelsOpType=$e.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[e,1,1]),this.importVideo=r,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const t=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)";return`
      @binding(1) @group(0) var src: ${this.importVideo?"texture_external":"texture_2d<f32>"};
      ${T("index")} {
        let flatIndex = index * uniforms.numChannels;
        if (flatIndex < uniforms.size) {
          let coords = getCoordsFromIndex(flatIndex);
          let values = ${t};
          for (var i = 0; i < uniforms.numChannels; i = i + 1) {
            result[flatIndex + i] = i32(floor(255.0 * values[i]));
          }
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qu={kernelName:l.eBW,backendName:"webgpu",kernelFunc:Qu};let sr,Po=(0,l.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function Qu(i){const{inputs:t,backend:e,attrs:r}=i;let{pixels:o}=t;const{numChannels:s}=r;if(o==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,u=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,h=typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas,d=typeof ImageBitmap<"u"&&o instanceof ImageBitmap,[f,p]=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],g=[p,f,s],x=(0,l.OBj)().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&a,w=a||u;if(d||h||w){let D;if(x)D=e.device.importExternalTexture({source:o});else{if(w){const Z=(0,l.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(sr==null||Z!==Po)&&(Po=Z,sr=document.createElement("canvas").getContext("2d",{willReadFrequently:Po})),sr.canvas.width=f,sr.canvas.height=p,sr.drawImage(o,0,0,f,p),o=sr.canvas}const H=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,te=e.textureManager.acquireTexture(g[1],g[0],"rgba8unorm",H);e.queue.copyExternalImageToTexture({source:o},{texture:te},[g[1],g[0]]),D=te}const A=l.D5U.sizeFromShape(g),F=l.D5U.computeStrides(g),$=new Yu(g,s,x),z=[{type:"uint32",data:[A]},{type:"uint32",data:[s]},{type:"uint32",data:[...F]}],E=e.makeTensorInfo([p,f],"int32"),B=e.tensorMap.get(E.dataId);B.resource=D;const L=e.runWebGPUProgram($,[E],"int32",z);return e.disposeData(E.dataId),L}const v=o.data;let k=v;if(s!=null&&s!==4){k=new Uint8Array(o.width*o.height*s);const D=v.length;let A=0;for(let F=0;F<D;F++)F%4<s&&(k[A++]=v[F])}const P=e.makeTensorInfo(g,"int32",new Int32Array(k));return e.uploadToGPU(P.dataId),P}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zu{constructor(t,e,r,o,s){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],l.Wap.assertAndGetBroadcastShape(t,e),l.Wap.assertAndGetBroadcastShape(t,r),this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),o!=null&&(l.Wap.assertAndGetBroadcastShape(t,o),this.variableNames.push("offset")),s!=null&&(l.Wap.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale")),this.offsetShape=o,this.scaleShape=s,this.shaderKey="batchNorm"}getUserCode(){let t="0.0";this.offsetShape!=null&&(t="getOffsetByOutputIndex(index)");let e="1.0";return this.scaleShape!=null&&(e="getScaleByOutputIndex(index)"),`
      ${T("index")} {
        if (index < uniforms.size)
        {
          let xValue = getXByOutputIndex(index);
          let meanValue = getMeanByOutputIndex(index);
          let varianValue = getVarianceByOutputIndex(index);
          let offsetValue = ${t};
          let scaleValue = ${e};
          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));
          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ju={kernelName:l.sHE,backendName:"webgpu",kernelFunc:({inputs:i,attrs:t,backend:e})=>{const{x:r,scale:o,offset:s,mean:a,variance:u}=i,{varianceEpsilon:h}=t,d=e,f=[r,a,u];let p=null;s!=null&&(p=s.shape,f.push(s));let g=null;o!=null&&(g=o.shape,f.push(o));const x=new Zu(r.shape,a.shape,u.shape,p,g),w=[{type:"float32",data:[h]}];return d.runWebGPUProgram(x,f,r.dtype,w)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function el(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s,bias:a,preluActivationWeights:u}=t,{strides:h,pad:d,dataFormat:f,dilations:p,dimRoundingMode:g,activation:x,leakyreluAlpha:w}=r,v=l.Wap.convertConv2DDataFormat(f),k=l.Wap.computeConv2DInfo(o.shape,s.shape,h,p,d,g,!1,v);return qo({x:o,filter:s,convInfo:k,backend:e,bias:a,preluActivationWeights:u,leakyreluAlpha:w,activation:x})}const tl={kernelName:l._V0,backendName:"webgpu",kernelFunc:el};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function il(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,filter:s,bias:a,preluActivationWeights:u}=t,{strides:h,pad:d,dilations:f,dimRoundingMode:p,activation:g,leakyreluAlpha:x}=r;let w=f;w==null&&(w=[1,1]),l.D5U.assert(l.Wap.eitherStridesOrDilationsAreOne(h,w),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${h} and dilations '${w}'`);const v=l.Wap.computeConv2DInfo(o.shape,s.shape,h,w,d,p,!0),k=[o,s],P=a!=null,D=u!=null;P&&k.push(a),D&&k.push(u);const A=[{type:"int32",data:[v.padInfo.top,v.padInfo.left]},{type:"int32",data:[v.inHeight,v.inWidth]}];let F;return v.outHeight>4&&v.outWidth>4&&v.strideWidth<=2&&v.inChannels===v.outChannels&&v.dilationHeight===1&&v.dilationWidth===1&&v.inChannels%4===0?(F=new tn(v,P,g,D),A.push({type:"int32",data:[F.virtualWidth]})):(F=new rn(v,P,g,D),A.push({type:"int32",data:[v.filterHeight]},{type:"int32",data:[v.filterWidth]},{type:"int32",data:[v.strideHeight,v.strideWidth]},{type:"int32",data:[v.dilationHeight,v.dilationWidth]})),g==="leakyrelu"&&(A.push({type:"float32",data:[x]}),F.uniforms+=" alpha : f32,"),e.runWebGPUProgram(F,k,"float32",A)}const rl={kernelName:l.luS,backendName:"webgpu",kernelFunc:il};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ol{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${t}`,this.sliceDim=t,this.uniforms=`sliceDim : i32, strides : ${O(t)},`}getUserCode(){let t;return this.sliceDim>1?t="uniforms.strides[j]":t="uniforms.strides",`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          var flattenIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexTemp = i32(round(getIndices(coords[0], j)));
            let strideNum = ${t};
            flattenIndex = flattenIndex + indexTemp * strideNum;
          }

          setOutputAtIndex(index, getA(flattenIndex, coords[1]));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nl(i){const{inputs:t,backend:e}=i,{params:r,indices:o}=t,s=o.shape,a=s[s.length-1],u=l.D5U.sizeFromShape(r.shape),[h,d,f,p]=l.Wap.prepareAndValidate(r,o),g=X({inputs:{x:o},backend:e,attrs:{shape:[d,a]}}),x=X({inputs:{x:r},backend:e,attrs:{shape:[l.D5U.sizeFromShape(r.shape)/f,f]}});if(e.shouldExecuteOnCPU([r,o])||r.dtype==="string"){const D=e.readSync(o.dataId),A=e.bufferSync(r),F=tr(D,A,r.dtype,d,a,f,p,r.shape,u);return e.makeTensorInfo(h,r.dtype,F.values)}const w=new ol(a,[d,f]),v=[{type:"int32",data:[a]},{type:"int32",data:p}],k=e.runWebGPUProgram(w,[x,g],x.dtype,v),P=X({inputs:{x:k},backend:e,attrs:{shape:h}});return e.disposeData(g.dataId),e.disposeData(x.dataId),e.disposeData(k.dataId),P}const sl={kernelName:l.q1x,backendName:"webgpu",kernelFunc:nl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class al{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.slice(),this.aShape=t,this.outputShape=e,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const t=ul(this.aShape);return`
      ${T("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let indexZ = i32(getIndices(resRC.x, resRC.z));
          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);
          setOutputAtIndex(index, inBounds * getA(${t}));
        }
      }
    `}}function ul(i){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],e=[];for(let r=0;r<i.length;r++)r===2?e.push("indexZ"):e.push(`${t[r]}`);return e.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function un(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,indices:s}=t,{axis:a,batchDims:u}=r,h=l.D5U.parseAxisParam(a,o.shape)[0],d=l.Wap.segment_util.collectGatherOpShapeInfo(o,s,h,u),f=l.D5U.sizeFromShape(s.shape),p=[],g=X({inputs:{x:o},backend:e,attrs:{shape:[d.batchSize,d.outerSize,d.dimSize,d.sliceSize]}}),x=X({inputs:{x:s},backend:e,attrs:{shape:[d.batchSize,f/d.batchSize]}});p.push(g),p.push(x);const w=[d.batchSize,d.outerSize,f/d.batchSize,d.sliceSize];if(e.shouldExecuteOnCPU([o,s])){const A=e.tensorMap.get(x.dataId).values,F=(0,l.f3b)(x.shape,x.dtype,A),z=e.tensorMap.get(g.dataId).values,E=(0,l.f3b)(g.shape,g.dtype,z),B=_r(E,F,w);return p.forEach(L=>e.disposeData(L.dataId)),e.makeTensorInfo(d.outputShape,B.dtype,B.values)}const v=new al(g.shape,w),k=e.runWebGPUProgram(v,[g,x],g.dtype);p.push(k);const P=X({inputs:{x:k},backend:e,attrs:{shape:d.outputShape}});return p.forEach(D=>e.disposeData(D.dataId)),P}const ll={kernelName:l.qi_,backendName:"webgpu",kernelFunc:un};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=Ce({opType:j.GREATER,cpuKernelImpl:mi,dtype:"bool"}),hl={kernelName:l.iZT,backendName:"webgpu",kernelFunc:cl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dl=Ce({opType:j.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:Br}),pl={kernelName:l.Acj,backendName:"webgpu",kernelFunc:dl};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fl(i){const{inputs:t,backend:e}=i,{input:r}=t;return an(r,!0,e)}const ml={kernelName:l.Qg5,backendName:"webgpu",kernelFunc:fl};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gl=ne({opType:_.IS_FINITE,dtype:"bool"}),yl={kernelName:l.avt,backendName:"webgpu",kernelFunc:gl};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xl=ne({opType:_.IS_INF,dtype:"bool"}),wl={kernelName:l.iWB,backendName:"webgpu",kernelFunc:xl};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vl=ne({opType:_.IS_NAN,dtype:"bool"}),Cl={kernelName:l.r7n,backendName:"webgpu",kernelFunc:vl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sl(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{alpha:s}=r,a=[{type:"float32",data:[s]}],u=new We(o.shape,_.LEAKYRELU,"alpha : f32,");return e.runWebGPUProgram(u,[o],"float32",a)}const bl={kernelName:l.J$2,backendName:"webgpu",kernelFunc:Sl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kl=Ce({opType:j.LESS,dtype:"bool",cpuKernelImpl:ir}),Il={kernelName:l.vtC,backendName:"webgpu",kernelFunc:kl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rl=Ce({opType:j.LESS_EQUAL,dtype:"bool",cpuKernelImpl:gi}),Pl={kernelName:l.CAk,backendName:"webgpu",kernelFunc:Rl};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Dl{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Al(i){const{backend:t,attrs:e}=i,{start:r,stop:o,num:s}=e,a=(o-r)/(s-1),u=new Dl(s),h=[{type:"float32",data:[r]},{type:"float32",data:[a]}];return t.runWebGPUProgram(u,[],"float32",h)}const Nl={kernelName:l.e7N,backendName:"webgpu",kernelFunc:Al};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fl=ne({opType:_.LOG,cpuKernelImpl:Or}),$l={kernelName:l.ZbH,backendName:"webgpu",kernelFunc:Fl};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl=ne({opType:_.LOG1P}),zl={kernelName:l.kU,backendName:"webgpu",kernelFunc:Tl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=Ce({opType:j.LOGICAL_AND,dtype:"bool"}),Ml={kernelName:l.PYm,backendName:"webgpu",kernelFunc:El};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ll=ne({opType:_.LOGICAL_NOT}),_l={kernelName:l.VfG,backendName:"webgpu",kernelFunc:Ll};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bl=Ce({opType:j.LOGICAL_OR}),Ol={kernelName:l.MZg,backendName:"webgpu",kernelFunc:Bl};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ln=`
  var powValue = 0.0;
  let basis = uniforms.bias + uniforms.alpha * sum;
  if (uniforms.beta == 0.5) {
    powValue = inverseSqrt(basis);
  } else if (uniforms.beta == 1.0) {
    powValue = 1.0 / basis;
  } else {
    powValue = exp(log(basis) * (-uniforms.beta));
  }
`;class Ul{constructor(t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];
        let d = coords[3];

        let x = getX(b, r, c, d);
        var sum = 0.0;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let idx = d + i;
          if (idx >= 0 && idx < uniforms.xShape[3]) {
            let z = getX(b, r, c, idx);
            sum = sum + z * z;
          }
        }
        ${ln}

        setOutputAtIndex(index, x * powValue);
      }
    }
  `}}class Wl{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,l.D5U.assert(e<=this.maxAllowRadius,()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${e}`),this.outputShape=t,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=U(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`
    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;
    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};
    const maxAllowRadius = ${this.maxAllowRadius};

    ${T()} {
      let localDepth = i32(localId.x);
      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;
      let xDepth = workgroupDepth + localDepth - maxAllowRadius;
      let b = i32(globalId.z) / uniforms.xShape[1];
      let r = i32(globalId.z) - b * uniforms.xShape[1];
      let c = i32(globalId.y);
      let d = workgroupDepth + localDepth;

      var x = 0.0;
      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {
        x = getX(b, r, c, xDepth);
      }
      lrnSub[localDepth] = x;
      workgroupBarrier();

      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {
        var sum = 0.0;
        let index = localDepth + maxAllowRadius;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let z = lrnSub[index + i];
          sum = sum + z * z;
        }
        ${ln}

        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);
      }
    } `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vl(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{depthRadius:s,bias:a,alpha:u,beta:h}=r;let d;s>16?d=new Ul(o.shape):d=new Wl(o.shape,s);const f=[{type:"int32",data:[s]},{type:"float32",data:[a]},{type:"float32",data:[u]},{type:"float32",data:[h]}];return e.runWebGPUProgram(d,[o],o.dtype,f)}const Hl={kernelName:l.eZ0,backendName:"webgpu",kernelFunc:Vl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gl{constructor(t){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];

        let MIN_DEPTH_BEGIN = 0;
        let MAX_DEPTH_END = uniforms.outShape[3];
        var result = 0.0;
        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {
          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);
          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);

          var norm = 0.0;
          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            } else {
              break;
            }
          }

          norm = uniforms.alpha * norm + uniforms.bias;

          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              var dyi = -2.0 * uniforms.alpha * uniforms.beta
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * uniforms.beta);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            } else {
              break;
            }
          }
        }

        setOutputAtIndex(index, result);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jl(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,y:s,dy:a}=t,{depthRadius:u,bias:h,alpha:d,beta:f}=r,p=new Gl(o.shape),g=[{type:"int32",data:[u]},{type:"float32",data:[h]},{type:"float32",data:[d]},{type:"float32",data:[f]}];return e.runWebGPUProgram(p,[o,s,a],o.dtype,g)}const Xl={kernelName:l.Hhh,backendName:"webgpu",kernelFunc:jl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kl=Ce({opType:j.MAX,cpuKernelImpl:uo}),Yl={kernelName:l.BMI,backendName:"webgpu",kernelFunc:Kl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ql(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:s,strides:a,pad:u,dimRoundingMode:h}=r,f=l.Wap.computePool2DInfo(o.shape,s,a,1,u,h);return Go(o,f,"max",e)}const Ql={kernelName:l.mTV,backendName:"webgpu",kernelFunc:ql};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zl(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{filterSize:s,strides:a,pad:u,dataFormat:h,dimRoundingMode:d}=r,f=[1,1,1],p=l.Wap.computePool3DInfo(o.shape,s,a,f,u,d,h),g=new bo(p,"max"),x=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.front,p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.inDepth,p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]}];return e.runWebGPUProgram(g,[o],o.dtype,x)}const Jl={kernelName:l.OAf,backendName:"webgpu",kernelFunc:Zl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ec{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);
            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            let curPosValue = wR * uniforms.filterDims[1] + wC;
            let mask = select(0.0, 1.0, maxPosValue == curPosValue);
            dotProd += dyValue * mask;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class tc{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`
      ${T("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;

        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;
              let mask = select(0.0, 1.0, maxPosValue == curPosValue);
              dotProd += dyValue * mask;
            }
          }
        }

        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ic(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:s}=t,a=s,{filterSize:u,strides:h,pad:d,dimRoundingMode:f}=r,p=[1,1,1],g=l.Wap.computePool3DInfo(a.shape,u,h,p,d,f),x=new bo(g,"max",!0);let w=[{type:"int32",data:[g.strideDepth,g.strideHeight,g.strideWidth]},{type:"int32",data:[g.padInfo.front,g.padInfo.top,g.padInfo.left]},{type:"int32",data:[g.inDepth,g.inHeight,g.inWidth]},{type:"int32",data:[g.effectiveFilterDepth,g.effectiveFilterHeight,g.effectiveFilterWidth]}];const v=e.runWebGPUProgram(x,[a],"int32",w),k=new tc(g);w=[{type:"int32",data:[g.strideDepth,g.strideHeight,g.strideWidth]},{type:"int32",data:[g.effectiveFilterDepth-1-g.padInfo.front,g.effectiveFilterHeight-1-g.padInfo.top,g.effectiveFilterWidth-1-g.padInfo.left]},{type:"int32",data:[g.effectiveFilterDepth,g.effectiveFilterHeight,g.effectiveFilterWidth]},{type:"int32",data:[g.outDepth]},{type:"int32",data:[g.outHeight]},{type:"int32",data:[g.outWidth]}];const P=e.runWebGPUProgram(k,[o,v],a.dtype,w);return e.disposeData(v.dataId),P}const rc={kernelName:l.OU7,backendName:"webgpu",kernelFunc:ic};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oc(i){const{inputs:t,backend:e,attrs:r}=i,{dy:o,input:s,output:a}=t,u=s;Yt([s,a],"maxPoolGrad");const{filterSize:h,strides:d,pad:f,dimRoundingMode:p}=r,g=l.Wap.computePool2DInfo(u.shape,h,d,1,f,p),x=new Wr(g,"max",!0);let w=[{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.padInfo.top,g.padInfo.left]},{type:"int32",data:[g.dilationHeight,g.dilationWidth]},{type:"int32",data:[g.inHeight,g.inWidth]},{type:"int32",data:[g.effectiveFilterHeight,g.effectiveFilterWidth]}];const v=e.runWebGPUProgram(x,[u],"int32",w),k=new ec(g);w=[{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.effectiveFilterHeight-1-g.padInfo.top,g.effectiveFilterWidth-1-g.padInfo.left]},{type:"int32",data:[g.dilationHeight,g.dilationWidth]},{type:"int32",data:[g.effectiveFilterHeight,g.effectiveFilterWidth]},{type:"int32",data:[g.outHeight]},{type:"int32",data:[g.outWidth]}];const P=e.runWebGPUProgram(k,[o,v],u.dtype,w);return e.disposeData(v.dataId),P}const nc={kernelName:l.OV7,backendName:"webgpu",kernelFunc:oc};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sc(i){const{inputs:t,backend:e,attrs:r}=i,{filterSize:o,strides:s,pad:a,includeBatchInIndex:u}=r,{x:h}=t;l.D5U.assert(h.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${h.shape.length}.`);const d=[1,1];l.D5U.assert(l.Wap.eitherStridesOrDilationsAreOne(s,d),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${d}'`);const f=l.Wap.computePool2DInfo(h.shape,o,s,d,a),p=[{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]},{type:"int32",data:[f.inHeight,f.inWidth]},{type:"int32",data:[f.effectiveFilterHeight,f.effectiveFilterWidth]}];let g=new Wr(f,"max",!1);const x=e.runWebGPUProgram(g,[h],h.dtype,p);g=new Wr(f,"max",!0,!0,u);const w=e.runWebGPUProgram(g,[h],"int32",p);return[x,w]}const ac={kernelName:l.vFR,backendName:"webgpu",kernelFunc:sc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uc(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s,keepDims:a}=r;return se(o,s,a,"min",e)}const lc={kernelName:l.c17,backendName:"webgpu",kernelFunc:uc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cc=Ce({opType:j.MIN,cpuKernelImpl:lo}),hc={kernelName:l.q8u,backendName:"webgpu",kernelFunc:cc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class dc{constructor(t,e,r){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map((o,s)=>o[0]+t[s]+o[1]),this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,e.map((o,s)=>{this.uniforms+=` pad${s} : vec2<i32>,`}),this.offset=r==="reflect"?0:1,this.shaderKey=`mirrorPad_${r}`}getUserCode(){const t=this.xShape.length,e=this.xShape.map((d,f)=>`uniforms.pad${f}[0]`).join(","),r=this.xShape.map((d,f)=>`uniforms.pad${f}[0] + uniforms.xShape${t>1?`[${f}]`:""}`).join(","),o=t===1?"start":"start[i]",s=t===1?"end":"end[i]",a=t===1?"outC":"outC[i]",u=O(t),h=t>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t):"coords";return`
      ${T("index")} {
        if (index < uniforms.size) {
          let start = ${u}(${e});
          let end = ${u}(${r});
          var outC = getCoordsFromIndex(index);
          for (var i = 0; i < ${t}; i = i + 1) {
            if (${a} < ${o}) {
              ${a} = ${o} * 2 - ${a} - ${this.offset};
            } else if(${a} >= ${s}) {
              ${a} = (${s} - 1) * 2 - ${a} + ${this.offset};
            }
          }
          let coords = outC - start;
          setOutputAtIndex(index, getX(${h}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pc={kernelName:l.jQs,backendName:"webgpu",kernelFunc:({inputs:i,attrs:t,backend:e})=>{const{x:r}=i,{paddings:o,mode:s}=t,a=e,u=o.map(f=>({type:"int32",data:[f[0],f[1]]})),h=new dc(r.shape,o,s);return a.runWebGPUProgram(h,[r],r.dtype,u)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fc=Ce({opType:j.MOD}),mc={kernelName:l.Vbg,backendName:"webgpu",kernelFunc:fc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gc{constructor(t,e){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`
    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {
      let HASHSCALE1 = 443.8975;
      let p = resultUV * seed;
      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);
      p3 = p3 + dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${T("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords[0];

        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),
            f32(coords[0]) / f32(uniforms.outShape[0]));
        let r = random(uniforms.seed, resUV);
        var cdf = 0.0;
        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {
          cdf = cdf + getProbs(batch, i);

          if (r < cdf) {
            setOutputAtIndexI32(index, i);
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yc{constructor(t){this.variableNames=["logits"],this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`
    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;
    var<workgroup> rowMaxShared : f32;
    var<workgroup> rowSumShared : f32;
    const blockSize = ${this.workgroupSize[0]};
    ${T("index")} {
      let row = index / blockSize;
      let tid = i32(localId.x);
      let cols = uniforms.outShape[1];

      var threadMax = -3.402823e+38f;
      for (var col = tid; col < cols; col += blockSize) {
        let value = getLogits(row, col);
        threadMax = max(threadMax, value);
      }
      if (tid < cols) {
        buf[tid] = threadMax;
      }
      workgroupBarrier();

      var reduceSize = min(cols, blockSize);
      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
        reduceSize = currSize + (reduceSize & 1);
        if (tid < currSize) {
          buf[tid] = max(buf[tid], buf[tid + reduceSize]);
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowMaxShared = buf[0];
      }
      workgroupBarrier();

      var threadSum = 0.0;
      for (var col = tid; col < cols; col += blockSize) {
        let subExp = exp(getLogits(row, col) - rowMaxShared);
        threadSum += subExp;
      }
      buf[tid] = threadSum;
      workgroupBarrier();

      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {
        if (tid < currSize) {
          buf[tid] = buf[tid] + buf[tid + currSize];
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowSumShared = buf[0];
      }
      workgroupBarrier();

      for (var col = tid; col < cols; col += blockSize) {
        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;
        setOutputAtCoords(row, col, value);
      }
  }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cn(i){const{inputs:t,backend:e,attrs:r}=i,{logits:o}=t,{dim:s}=r,a=X({inputs:{x:o},backend:e,attrs:{shape:[l.D5U.sizeFromShape(o.shape)/o.shape[s],o.shape[s]]}}),u=new yc(a.shape),h=e.runWebGPUProgram(u,[a],o.dtype),d=X({inputs:{x:h},backend:e,attrs:{shape:o.shape}});return e.disposeData(a.dataId),e.disposeData(h.dataId),d}const xc={kernelName:l.Gcp,backendName:"webgpu",kernelFunc:cn};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wc(i){const{inputs:t,backend:e,attrs:r}=i,{logits:o}=t,{numSamples:s,seed:a,normalized:u}=r,h=u?o:cn({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),d=h.shape[0],f=h.shape[1],p=new gc(d,s),g=[{type:"float32",data:[a]},{type:"int32",data:[f]}],x=e.runWebGPUProgram(p,[h],"int32",g);return u||e.disposeData(h.dataId),x}const vc={kernelName:l.NZg,backendName:"webgpu",kernelFunc:wc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cc(i){const{inputs:t,backend:e}=i,{x:r}=t;if(e.shouldExecuteOnCPU([r])){const s=e.tensorMap.get(r.dataId),[a,u]=co(s.values,r.shape,r.dtype);return e.makeTensorInfo(u,r.dtype,a)}const o=new We(r.shape,_.NEG);return e.runWebGPUProgram(o,[r],r.dtype)}const Sc={kernelName:l.kuV,backendName:"webgpu",kernelFunc:Cc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bc(i){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:r}=i,{boxes:o,scores:s}=t,{maxOutputSize:a,iouThreshold:u,scoreThreshold:h}=r,d=e.readSync(o.dataId),f=e.readSync(s.dataId),{selectedIndices:p}=l.GDt.nonMaxSuppressionV3Impl(d,f,a,u,h);return e.makeTensorInfo([p.length],"int32",new Int32Array(p))}const kc={kernelName:l.uv1,backendName:"webgpu",kernelFunc:bc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ic(i){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:r}=i,{boxes:o,scores:s}=t,{maxOutputSize:a,iouThreshold:u,scoreThreshold:h,softNmsSigma:d}=r,f=e.readSync(o.dataId),p=e.readSync(s.dataId),g=a,x=u,w=h,v=d,{selectedIndices:k,selectedScores:P}=l.GDt.nonMaxSuppressionV5Impl(f,p,g,x,w,v);return[e.makeTensorInfo([k.length],"int32",new Int32Array(k)),e.makeTensorInfo([P.length],"float32",new Float32Array(P))]}const Rc={kernelName:l.W0H,backendName:"webgpu",kernelFunc:Ic};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pc{constructor(t,e){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`
      ${T("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,
                                      f32(i32(round(getX(coords.x))) == coords.y)));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dc(i){const{inputs:t,backend:e,attrs:r}=i,{indices:o}=t,{dtype:s,depth:a,onValue:u,offValue:h}=r,d=l.D5U.sizeFromShape(o.shape),f=new Pc(d,a),p=X({inputs:{x:o},backend:e,attrs:{shape:[d]}}),g=[{type:"float32",data:[u]},{type:"float32",data:[h]}],x=e.runWebGPUProgram(f,[p],s,g);e.disposeData(p.dataId);const w=[...o.shape,a],v=X({inputs:{x},backend:e,attrs:{shape:w}});return e.disposeData(x.dataId),v}const Ac={kernelName:l.we_,backendName:"webgpu",kernelFunc:Dc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function no(i){const{inputs:t,backend:e}=i,{x:r}=t;if(r.dtype==="complex64"){const o=Vr({inputs:{input:r},backend:e}),s=no({inputs:{x:o},backend:e}),a=ro({inputs:{input:r},backend:e}),u=no({inputs:{x:a},backend:e}),h=Je({inputs:{real:s,imag:u},backend:e});return e.disposeData(o.dataId),e.disposeData(s.dataId),e.disposeData(a.dataId),e.disposeData(u.dataId),h}else return Pe({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype==="string"?"":0},backend:e})}const Nc={kernelName:l.RuY,backendName:"webgpu",kernelFunc:no};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hn(i){const{inputs:t,backend:e}=i,{x:r}=t;if(r.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(r.dtype==="complex64"){const o=Vr({inputs:{input:r},backend:e}),s=hn({inputs:{x:o},backend:e}),a=ro({inputs:{input:r},backend:e}),u=no({inputs:{x:a},backend:e}),h=Je({inputs:{real:s,imag:u},backend:e});return e.disposeData(o.dataId),e.disposeData(s.dataId),e.disposeData(a.dataId),e.disposeData(u.dataId),h}else return Pe({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:e})}const Fc={kernelName:l.qWM,backendName:"webgpu",kernelFunc:hn};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $c(i){const{inputs:t,backend:e,attrs:r}=i,{axis:o}=r;if(t.length===1)return Ro({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const s=t[0].shape,a=t[0].dtype;t.forEach(f=>{l.D5U.assertShapesMatch(s,f.shape,"All tensors passed to stack must have matching shapes"),l.D5U.assert(a===f.dtype,()=>"All tensors passed to stack must have matching dtypes")});const u=[],h=t.map(f=>{const p=Ro({inputs:{input:f},backend:e,attrs:{dim:o}});return u.push(p),p}),d=Yo({inputs:h,backend:e,attrs:{axis:o}});return u.forEach(f=>e.disposeData(f.dataId)),d}const Tc={kernelName:l.QiL,backendName:"webgpu",kernelFunc:$c};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dn(i,t=!1){const e=i.length,r=O(e),o=i.map((p,g)=>`uniforms.pad${g}[0]`).join(","),s=i.map((p,g)=>`uniforms.pad${g}[0] + uniforms.xShape${e>1?`[${g}]`:""}`).join(","),a=e>1?`${r}(${o})`:`${o}`,u=e>1?`${r}(${s})`:`${s}`,h=e>1?"any(paddedCoords < start)":"paddedCoords < start",d=e>1?"any(paddedCoords >= end)":"paddedCoords >= end",f=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`
        let start = ${a};
        let end = ${u};
        if (${h} || ${d}) {
          setOutputAtIndex(index, ${t?0:"uniforms.constantValue"});
        } else {
          let coords = paddedCoords - start;
          setOutputAtIndex(index, getX(${f}));
        }
  `}class zc{constructor(t,e){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map((r,o)=>r[0]+t[o]+r[1]),this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),e.map((r,o)=>{this.uniforms+=` pad${o} : vec2<i32>,`}),this.xShape=t,this.shaderKey="pad"}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let paddedCoords = getCoordsFromIndex(index);
          ${dn(this.xShape)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ec=i=>{const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{paddings:s,constantValue:a}=r;if(s.every(d=>l.D5U.arraysEqual(d,[0,0])))return De({inputs:{x:o},backend:e});if(l.D5U.sizeFromShape(o.shape)===0){const d=s.map((f,p)=>f[0]+o.shape[p]+f[1]);return Pe({backend:e,attrs:{shape:d,value:a,dtype:o.dtype}})}const u=[{type:"float32",data:[a]}];s.map(d=>u.push({type:"int32",data:[d[0],d[1]]}));const h=new zc(o.shape,s);return e.runWebGPUProgram(h,[o],o.dtype,u)},Mc={kernelName:l.lyA,backendName:"webgpu",kernelFunc:Ec};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lc=Ce({opType:j.POW}),_c={kernelName:l.pe_,backendName:"webgpu",kernelFunc:Lc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bc(i){const{inputs:t,backend:e}=i,{x:r,alpha:o}=t,s=new Ut(j.PRELU,r.shape,o.shape);return e.runWebGPUProgram(s,[r,o],"float32")}const Oc={kernelName:l.o0g,backendName:"webgpu",kernelFunc:Bc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uc(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{axis:s,keepDims:a}=r;return se(o,s,a,"prod",e)}const Wc={kernelName:l.DlI,backendName:"webgpu",kernelFunc:Uc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vc=i=>{const{backend:t,attrs:e}=i,{start:r,stop:o,step:s,dtype:a}=e,u=po(r,o,s,a);return t.makeTensorInfo([u.length],a,u)},Hc={kernelName:l.e6w,backendName:"webgpu",kernelFunc:Vc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gc=Ce({opType:j.DIV}),jc={kernelName:l.oHH,backendName:"webgpu",kernelFunc:Gc};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xc=ne({opType:_.RECIPROCAL}),Kc={kernelName:l.$HU,backendName:"webgpu",kernelFunc:Xc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yc=ne({opType:_.RELU}),qc={kernelName:l.qkr,backendName:"webgpu",kernelFunc:Yc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qc=ne({opType:_.RELU6}),Zc={kernelName:l.SbG,backendName:"webgpu",kernelFunc:Qc};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jc{constructor(t,e,r){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,r,t[3]],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC =
            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *
            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);

          // Compute the four integer indices.
          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);
          let sourceCeilRC = vec2<i32>(
            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));

          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);
          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);
          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);
          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);

          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);

          let top = topLeft + (topRight - topLeft) * fracRC.y;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
          let newValue = top + (bottom - top) * fracRC.x;

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eh(i){const{inputs:t,backend:e,attrs:r}=i,{images:o}=t,{alignCorners:s,size:a,halfPixelCenters:u}=r,[h,d]=a,f=s&&h>1?1:0,p=s&&d>1?1:0,x=[{type:"float32",data:[f,p]},{type:"float32",data:[u?.5:0]}],w=new Jc(o.shape,h,d);return e.runWebGPUProgram(w,[o],"float32",x)}const th={kernelName:l._Yw,backendName:"webgpu",kernelFunc:eh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ih{constructor(t,e){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,
       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeBilinearBackprop_${e}`}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let dxR = f32(dyR) * uniforms.heightScale;
              let topDxRIndex = i32(floor(dxR));
              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));
              let dxRLerp = dxR - f32(topDxRIndex);
              let inverseDxRLerp = 1.0 - dxRLerp;

              let dxC = f32(dyC) * uniforms.widthScale;
              let leftDxCIndex = i32(floor(dxC));
              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));
              let dxCLerp = dxC - f32(leftDxCIndex);
              let inverseDxCLerp = 1.0 - dxCLerp;

              if (r == topDxRIndex && c == leftDxCIndex) {
                // topLeft
                accumulator +=
                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
              }

              if (r == topDxRIndex && c == rightDxCIndex) {
                // topRight
                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
              }

              if (r == bottomDxRIndex && c == leftDxCIndex) {
                // bottomLeft
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
              }

              if (r == bottomDxRIndex && c == rightDxCIndex) {
                // bottomRight
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rh(i){const{inputs:t,backend:e,attrs:r}=i,{images:o,dy:s}=t,{alignCorners:a}=r,[,u,h]=o.shape,[,d,f]=s.shape,p=[a&&d>1?u-1:u,a&&f>1?h-1:h],g=[a&&d>1?d-1:d,a&&f>1?f-1:f],x=p[0]/g[0],w=p[1]/g[1],v=1/x,k=1/w,P=Math.ceil(v)*2+2,D=Math.ceil(k)*2+2,A=new ih(o.shape,a),F=[{type:"int32",data:p},{type:"int32",data:g},{type:"float32",data:[x]},{type:"float32",data:[w]},{type:"float32",data:[v]},{type:"float32",data:[k]},{type:"int32",data:[P]},{type:"int32",data:[D]}];return e.runWebGPUProgram(A,[s],s.dtype,F)}const oh={kernelName:l.zbQ,backendName:"webgpu",kernelFunc:rh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nh{constructor(t,e,r,o){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,r,t[3]],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=o,this.shaderKey=`resizeNearest_${o}`}getUserCode(){let t;return this.halfPixelCenters?t="max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":t="vec2<f32>(rc) * effectiveInputOverOutputRatioRC",`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC = ${t};

          // Compute the coordinators of nearest neighbor point.
          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));
          let sourceNearestRC = vec2<i32>(
            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));
          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sh(i){const{inputs:t,backend:e,attrs:r}=i,{images:o}=t,{alignCorners:s,halfPixelCenters:a,size:u}=r,[h,d]=u,f=s&&h>1?1:0,p=s&&d>1?1:0,x=[{type:"float32",data:[f,p]},{type:"float32",data:[s?.5:0]}],w=new nh(o.shape,h,d,a);return e.runWebGPUProgram(w,[o],o.dtype,x)}const ah={kernelName:l.dpD,backendName:"webgpu",kernelFunc:sh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class uh{constructor(t,e){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,
       winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeNearestNeigborBackprop_${e}`}getUserCode(){return`
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *
                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));

              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *
                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));

              let sourceNearestRow =
                  i32(min(f32(uniforms.outShape[1] - 1),
                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));

              let sourceNearestCol =
                  i32(min(f32(uniforms.outShape[2] - 1),
                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));

              if (r == sourceNearestRow && c == sourceNearestCol) {
                accumulator += getDy(b, dyR, dyC, d);
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lh(i){const{inputs:t,backend:e,attrs:r}=i,{images:o,dy:s}=t,{alignCorners:a}=r,[,u,h]=o.shape,[,d,f]=s.shape,p=[a&&d>1?u-1:u,a&&f>1?h-1:h],g=[a&&d>1?d-1:d,a&&f>1?f-1:f],x=p[0]/g[0],w=p[1]/g[1],v=1/x,k=1/w,P=Math.ceil(v)*2+2,D=Math.ceil(k)*2+2,A=new uh(o.shape,a),F=[{type:"int32",data:p},{type:"int32",data:g},{type:"float32",data:[v]},{type:"float32",data:[k]},{type:"int32",data:[P]},{type:"int32",data:[D]}];return e.runWebGPUProgram(A,[s],s.dtype,F)}const ch={kernelName:l.Hmb,backendName:"webgpu",kernelFunc:lh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class hh{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){return`
      
      // Using uniform variables as judging conditions, so the function has
      // coherent execution within all threads.
      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {
        var reverseCoords = coords;
        if (uniforms.axis[0] == 1) {
          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;
        }
        if (uniforms.axis[1] == 1) {
          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;
        }
        if (uniforms.axis[2] == 1) {
          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;
        }
        if (uniforms.axis[3] == 1) {
          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;
        }

        return reverseCoords;
      }
    
      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let reverseCoords = getReverseCoords(coords);
          setOutputAtIndex(index, getX(reverseCoords[0],
              reverseCoords[1], reverseCoords[2], reverseCoords[3]));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dh(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{dims:s}=r,a=o.shape.length;if(a===0)return De({inputs:{x:o},backend:e});const u=o.shape,h=[1,1,1,1];u.forEach((k,P)=>{const D=P+4-a;h[D]=k});const d=l.D5U.parseAxisParam(s,o.shape),f=[0,0,0,0];d.forEach(k=>{const P=k+4-a;f[P]=1});const p=[{type:"int32",data:f}],g=X({inputs:{x:o},backend:e,attrs:{shape:h}}),x=new hh(h),w=e.runWebGPUProgram(x,[g],g.dtype,p);e.disposeData(g.dataId);const v=X({inputs:{x:w},backend:e,attrs:{shape:u}});return e.disposeData(w.dataId),v}const ph={kernelName:l.mKl,backendName:"webgpu",kernelFunc:dh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fh{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`centerX : f32, centerY : f32, sinRadians : f32,
          cosRadians : f32,`,this.shaderKey="rotate",this.outputShape=t,typeof e=="number"?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`
        ${T("index")} {
          if (index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *
                uniforms.sinRadians;
            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *
                uniforms.cosRadians;
            let coordX = i32(round(coordXFloat + uniforms.centerX));
            let coordY = i32(round(coordYFloat + uniforms.centerY));
            ${this.fillSnippet}
            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&
                coordY < uniforms.xShape[1]) {
              outputValue = getX(coords[0], coordY, coordX, coords[3]);
            }
            setOutputAtIndex(index, outputValue);
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mh={kernelName:l.b9H,backendName:"webgpu",kernelFunc:({inputs:i,attrs:t,backend:e})=>{const{image:r}=i,{radians:o,fillValue:s,center:a}=t,u=e,h=new fh(r.shape,s),[d,f]=l.Wap.getImageCenter(a,r.shape[1],r.shape[2]),p=[{type:"float32",data:[d]},{type:"float32",data:[f]},{type:"float32",data:[Math.sin(o)]},{type:"float32",data:[Math.cos(o)]}];return typeof s=="number"?p.push({type:"float32",data:[Number.parseFloat(s.toFixed(2))]}):p.push({type:"float32",data:s}),u.runWebGPUProgram(h,[r],r.dtype,p)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gh=ne({opType:_.ROUND}),yh={kernelName:l.e07,backendName:"webgpu",kernelFunc:gh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xh=ne({opType:_.RSQRT,cpuKernelImpl:fo}),wh={kernelName:l.bV0,backendName:"webgpu",kernelFunc:xh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jr{constructor(t,e,r,o,s,a,u,h=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=a,this.type=u,this.sumDupeIndices=h,this.dispatchLayout=V(t),this.dispatch=U(this.dispatchLayout,t,this.workgroupSize),this.sliceDimGreaterThanOne=e>1,this.shaderKey=`scatter_${r}_${o}_${this.sliceDimGreaterThanOne}_${u}_${h}_${s.length}`;const d=O(s.length);this.uniforms=`sliceDim : i32, strides: ${d}, updatesSize: i32,`,this.updatesRank=o,this.indicesRank=r}getUserCode(){let t="";this.indicesRank===1?t="coords[0]":this.indicesRank===2&&(t="coords[0], j");const e=`getIndices(${t})`,r=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let o="",s="";this.dispatchLayout.x.length===1?(o="flattenedIndex",s=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {
        return index;
      }
      `):this.dispatchLayout.x.length===2&&(o="vec2<i32>(flattenedIndex, coords[1])",s=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {
        // N.B. |updates| could be a scalar tensor, conceptually representing a
        // 2D tensor with all values equal to that. By design, its size must be
        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|
        // gives the other.
        let sliceSize = uniforms.outShape[1];
        let d0 = index / sliceSize;
        let d1 = index - d0 * sliceSize;
        return vec2<i32>(d0, d1);
      }
      `);const u=`getUpdates(${Array.from({length:this.updatesRank},(d,f)=>`coords[${f}]`).join(", ")})`;return`
    ${s}
      ${T("index")} {
        if (index < uniforms.updatesSize) {
          let coords = getUpdatesCoordsFromFlatIndex(index);
          var flattenedIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexInside = i32(round(${e}));
            flattenedIndex = flattenedIndex + indexInside * ${r};
          }
          let updateValue =
              ${Ie(this.type)}(${u});
          let flatIndex = getOutputIndexFromCoords(${o});

          ${this.sumDupeIndices?fe("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}
        }
      }`}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vh(i){const{inputs:t,backend:e,attrs:r}=i,{indices:o,updates:s}=t,{shape:a}=r,{sliceRank:u,numUpdates:h,sliceSize:d,strides:f,outputSize:p}=l.Wap.calculateShapes(s,o,a),g=[p/d,d];if(p===0)return e.makeTensorInfo(a,o.dtype);const x=X({inputs:{x:o},backend:e,attrs:{shape:[h,u]}}),w=X({inputs:{x:s},backend:e,attrs:{shape:[h,d]}}),v=w.dtype,k=Pe({backend:e,attrs:{shape:g,value:0,dtype:v}}),P=l.D5U.sizeFromShape(w.shape),D=[{type:"int32",data:[u]},{type:"int32",data:f},{type:"int32",data:[P]}],A=new jr(w.shape,u,x.shape.length,w.shape.length,f,g,v),F=e.runWebGPUProgram(A,[w,x],v,D,k),$=X({inputs:{x:F},backend:e,attrs:{shape:a}});return e.disposeData(x.dataId),e.disposeData(w.dataId),e.disposeData(F.dataId),$}const Ch={kernelName:l.xQA,backendName:"webgpu",kernelFunc:vh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sh{constructor(t,e){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=e,this.shaderKey=`search_sorted_${e}`}getUserCode(){return`
      fn findBound(batch: i32, value: f32) -> i32 {
        var left = i32(0);
        var right = uniforms.numInputs;
        while (left < right) {
          var mid = (left + right) / 2;
          if (getSortedSequence(batch, mid) ${this.side==="left"?"<":"<="} value) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        return right;
      }

      ${T("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let value = getValuesByOutputIndex(index);
          setOutputAtIndexI32(index, findBound(coords[0], value));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bh(i){const{inputs:t,backend:e,attrs:r}=i,{sortedSequence:o,values:s}=t,{side:a}=r,u=new Sh([s.shape[0],s.shape[1]],a),h=[{type:"int32",data:[o.shape[1]]}];return e.runWebGPUProgram(u,[o,s],"int32",h)}const kh={kernelName:l.nr8,backendName:"webgpu",kernelFunc:bh};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ih{constructor(t,e,r){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=t,this.rank=r,this.shaderKey="select"}getUserCode(){let t,e;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(this.rank===1)e="resRC",t="resRC";else{const o=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[],a=[];for(let u=0;u<this.outputShape.length;u++)a.push(`${o[u]}`),u<this.cRank&&s.push(`${o[u]}`);t=s.join(),e=a.join()}return`
      ${T("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let cVal = getC(${t});
          if (cVal >= 1.0) {
            setOutputAtIndex(index, getA(${e}));
          } else {
            setOutputAtIndex(index, getB(${e}));
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rh(i){const{inputs:t,backend:e}=i,{condition:r,t:o,e:s}=t,a=new Ih(r.shape.length,o.shape,o.shape.length);return e.runWebGPUProgram(a,[r,o,s],(0,l.x8V)(o.dtype,s.dtype))}const Ph={kernelName:l.PhF,backendName:"webgpu",kernelFunc:Rh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dh=ne({opType:_.SELU}),Ah={kernelName:l.oFR,backendName:"webgpu",kernelFunc:Dh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nh=ne({opType:_.SIGMOID}),Fh={kernelName:l.a5O,backendName:"webgpu",kernelFunc:Nh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $h=ne({opType:_.SIGN}),Th={kernelName:l.i5y,backendName:"webgpu",kernelFunc:$h};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zh=ne({opType:_.SIN}),Eh={kernelName:l.RQH,backendName:"webgpu",kernelFunc:zh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mh=ne({opType:_.SINH}),Lh={kernelName:l.wYB,backendName:"webgpu",kernelFunc:Mh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _h=ne({opType:_.SOFTPLUS}),Bh={kernelName:l.MRv,backendName:"webgpu",kernelFunc:_h};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Oh{constructor(t,e,r,o,s,a){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const u=new Array(o.length);for(let h=0;h<u.length;h++)u[h]=o[s[h]];this.outputShape=u,this.newDim=s,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,this.paddedXShape=e,this.uniforms+=`reshapedPaddedXShape : ${O(o.length)}, paddedXShapeStrides : ${O(a)}, `,r.map((h,d)=>{this.uniforms+=` pad${d} : vec2<i32>,`}),this.shaderKey=`spaceToBatchND_${s}`}getUserCode(){const t=O(this.outputShape.length),e=me(this.newDim);return`
      ${ot(this.paddedXShape,"PaddedX")}
      ${T("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${t}(${e}), uniforms.reshapedPaddedXShape);
          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);
          ${dn(this.xShape,!0)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uh=i=>{const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{blockShape:s,paddings:a}=r;l.D5U.assert(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");const u=s.reduce((D,A)=>D*A),h=[[0,0]];h.push(...a);for(let D=1+s.length;D<o.shape.length;++D)h.push([0,0]);const d=h.map((D,A)=>D[0]+o.shape[A]+D[1]),f=l.Wap.getReshaped(d,s,u,!1),p=l.Wap.getPermuted(f.length,s.length,!1),g=l.Wap.getReshapedPermuted(d,s,u,!1),x=l.D5U.computeStrides(d),w=new Oh(o.shape,d,h,f,p,x.length),v=[{type:"int32",data:f},{type:"int32",data:x}];h.map(D=>v.push({type:"int32",data:[D[0],D[1]]}));const k=e.runWebGPUProgram(w,[o],o.dtype,v),P=X({inputs:{x:k},backend:e,attrs:{shape:g}});return e.disposeData(k.dataId),P},Wh={kernelName:l.TQc,backendName:"webgpu",kernelFunc:Uh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Vh{constructor(t,e,r){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.type=r,this.dispatchLayout=V([e]),this.dispatch=U(this.dispatchLayout,[e],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.sparseSize) {
        let indexInSegmentIds = index / uniforms.segmentSize;
        let indexInSegment = index % uniforms.segmentSize;
        let indexInInput = indices[indexInSegmentIds];
        let segmentId = segmentIds[indexInSegmentIds];

        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];
        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;
        ${fe("&result[outIndex]","value",this.type)}
      }
    }
  `}}class Hh{constructor(t,e){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[t],this.dispatchLayout=V(e),this.dispatch=U(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.segmentIdsShape) {
        let segmentId = segmentIds[index];
        ${fe("&result[segmentId]","1","int32")}
      }
    }
  `}}class Gh{constructor(t,e){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.type=e,this.dispatchLayout=V(t),this.dispatch=U(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.size) {
        let segmentId = index / uniforms.segmentSize;
        let count = sameSegmentIdCount[segmentId];
        if (count != 0) {
          ${this.type==="float32"?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pn(i,t,e,r=!1,o){const a=l.D5U.sizeFromShape(i.shape)/i.shape[0],u=i.dtype,h=l.D5U.sizeFromShape(t.shape),d=o.readSync(e.dataId),p=h>0?d[h-1]+1:0;let g;const x=i.shape.slice();x[0]=p;const w=h*a,v=Pe({backend:o,attrs:{shape:x,value:0,dtype:u}});g=new Vh(x,w,u);let k=[{type:"int32",data:[a]},{type:"int32",data:[w]}];const P=o.runWebGPUProgram(g,[i,t,e],u,k,v);if(r)return P;const D=Pe({backend:o,attrs:{shape:[p],value:0,dtype:"int32"}});g=new Hh(p,e.shape);const A=o.runWebGPUProgram(g,[e],"int32",null,D),F=Pe({backend:o,attrs:{shape:x,value:0,dtype:u}});g=new Gh(x,u),k=[{type:"int32",data:[a]}];const $=o.runWebGPUProgram(g,[P,A],u,k,F);return o.disposeData(P.dataId),o.disposeData(A.dataId),$}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jh(i){const{inputs:t,backend:e}=i,{data:r,indices:o,segmentIds:s}=t;return pn(r,o,s,!1,e)}const Xh={kernelName:l.w3H,backendName:"webgpu",kernelFunc:jh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kh(i){const{inputs:t,backend:e}=i,{data:r,indices:o,segmentIds:s}=t;return pn(r,o,s,!0,e)}const Yh={kernelName:l.ZjV,backendName:"webgpu",kernelFunc:Kh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qh{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const r=new Array(t.length);for(let o=0;o<r.length;o++)r[o]=t[o]*e[o];this.outputShape=r,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const t=Qh(this.rank,"uniforms.");return`
      ${T("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${t}));
        }
      }
    `}}function Qh(i,t=""){if(i>=5)throw Error(`Tile for rank ${i} is not yet supported`);if(i===1)return`(resRC % ${t}aShape)`;const e=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let o=0;o<i;o++)r.push(`(${e[o]} % ${t}aShape[${o}])`);return r.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Do(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{reps:s}=r;if(e.shouldExecuteOnCPU([o])||o.dtype==="string"||o.shape.length>=5){const h=e.readSync(o.dataId),d=o.dtype==="string"?h.map(g=>l.D5U.decodeString(g)):h,f=(0,l.f3b)(o.shape,o.dtype,d),p=to(f,s);return e.makeTensorInfo(p.shape,p.dtype,p.values)}const a=new qh(o.shape,s);return e.runWebGPUProgram(a,[o],o.dtype)}const Zh={kernelName:l.n9L,backendName:"webgpu",kernelFunc:Do};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(i){const{inputs:t,backend:e,attrs:r}=i,{sparseIndices:o,sparseValues:s,defaultValue:a}=t,{outputShape:u}=r,{sliceRank:h,numUpdates:d,sliceSize:f,strides:p,outputSize:g}=l.Wap.calculateShapes(s,o,u),x=!1;if(s.dtype==="string"){const B=e.bufferSync(o),L=e.bufferSync(s),H=l.D5U.decodeString(e.readSync(a.dataId)[0]),Y=mo(B,L,u,g,f,d,h,p,H,x);return e.makeTensorInfo(u,Y.dtype,Y.values)}const w=[g/f,f],v=X({inputs:{x:o},backend:e,attrs:{shape:[d,h]}}),k=s.shape.length?X({inputs:{x:s},backend:e,attrs:{shape:[d,f]}}):De({inputs:{x:s},backend:e}),P=k.dtype,D=e.makeTensorInfo([],P,l.D5U.makeZerosTypedArray(1,P)),A=X({inputs:{x:a},backend:e,attrs:{shape:Array(w.length).fill(1)}}),F=Do({inputs:{x:A},backend:e,attrs:{reps:w}}),$=l.D5U.sizeFromShape([d,f]),z=[{type:"int32",data:[h]},{type:"int32",data:p},{type:"int32",data:[$]}];switch(d){case 0:break;case 1:{const B=new jr([d,f],h,v.shape.length,k.shape.length,p,w,P,x);e.runWebGPUProgram(B,[k,v],P,z,F)}break;default:{const B=new jr([d,f],h,v.shape.length,D.shape.length,p,w,P,x);e.runWebGPUProgram(B,[D,v],P,z,F)}{const B=new jr([d,f],h,v.shape.length,k.shape.length,p,w,P);e.runWebGPUProgram(B,[k,v],P,z,F)}}const E=X({inputs:{x:F},backend:e,attrs:{shape:u}});return e.disposeData(v.dataId),e.disposeData(k.dataId),e.disposeData(A.dataId),e.disposeData(D.dataId),e.disposeData(F.dataId),E}const ed={kernelName:l.D2d,backendName:"webgpu",kernelFunc:Jh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{numOrSizeSplits:s,axis:a}=r,u=l.D5U.parseAxisParam(a,o.shape)[0],h=l.Wap.prepareSplitSize(o,s,u),d=o.shape.length,f=new Array(d).fill(0),p=o.shape.slice();return h.map(g=>{const x=[...p];x[u]=g;const w=nr({inputs:{x:o},backend:e,attrs:{begin:f,size:x}});return f[u]+=g,w})}const id={kernelName:l.L8s,backendName:"webgpu",kernelFunc:td};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rd=ne({opType:_.SQRT}),od={kernelName:l.FKq,backendName:"webgpu",kernelFunc:rd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nd={kernelName:l.bK0,backendName:"webgpu",kernelFunc:({inputs:i,backend:t})=>{const{x:e}=i,r=t,o=new We(e.shape,_.SQUARE);return r.runWebGPUProgram(o,[e],e.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sd=Ce({opType:j.SQUARED_DIFFERENCE}),ad={kernelName:l._tC,backendName:"webgpu",kernelFunc:sd};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud({inputs:i,attrs:t,backend:e}){const{x:r}=i,o=new We(r.shape,_.STEP,"stepAlpha : f32,"),s=[{type:"float32",data:[t.alpha]}];return e.runWebGPUProgram(o,[r],r.dtype,s)}const ld={kernelName:l.h8e,backendName:"webgpu",kernelFunc:ud};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cd{constructor(t){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const e=O(this.outputShape.length);this.uniforms=`begin : ${e},  strides : ${e}, `,this.shaderKey="stridedSlice"}getUserCode(){const t=this.outputShape.length;let e="";if(t===1)e="coords * uniforms.strides + uniforms.begin";else{let o=0;e=this.outputShape.map((s,a)=>(o++,this.outputShape.length===1?`coords * uniforms.strides[${a}] + uniforms.begin[${a}]`:`coords[${o-1}] * uniforms.strides[${a}] + uniforms.begin[${a}]`)).join(",")}return`
       ${T("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index);
           setOutputAtIndex(index, getX(${e}));
         }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hd(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{begin:s,end:a,strides:u,beginMask:h,endMask:d,ellipsisMask:f,newAxisMask:p,shrinkAxisMask:g}=r,{finalShapeSparse:x,finalShape:w,isIdentity:v,sliceDim0:k,isSimpleSlice:P,begin:D,end:A,strides:F}=l.kuN.sliceInfo(o.shape,s,a,u,h,d,f,p,g);let $;if(v)$=X({inputs:{x:o},backend:e,attrs:{shape:w}});else if(k||P){l.D5U.assert(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const z=l.kuN.computeOutShape(D,A,F),E=nr({inputs:{x:o},backend:e,attrs:{begin:D,size:z}});$=X({inputs:{x:E},backend:e,attrs:{shape:w}}),e.disposeData(E.dataId)}else if(e.shouldExecuteOnCPU([o])){const E=e.readSync(o.dataId),B=(0,l.f3b)(o.shape,o.dtype,E),L=yo(x,B,F,D);$=e.makeTensorInfo(w,o.dtype,L.values)}else{const E=new cd(x),B=[{type:"int32",data:D},{type:"int32",data:F}],L=e.runWebGPUProgram(E,[o],o.dtype,B);$=X({inputs:{x:L},backend:e,attrs:{shape:w}}),e.disposeData(L.dataId)}return $}const dd={kernelName:l.jQk,backendName:"webgpu",kernelFunc:hd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(i){const{inputs:t,backend:e,attrs:r}=i,{separator:o,nGramWidths:s,leftPad:a,rightPad:u,padWidth:h,preserveShortSequences:d}=r,{data:f,dataSplits:p}=t,g=e.readSync(f.dataId),x=e.readSync(p.dataId),[w,v]=xo(g,x,o,s,a,u,h,d);return[e.makeTensorInfo([w.length],"string",w),e.makeTensorInfo(p.shape,"int32",v)]}const fd={kernelName:l._JP,backendName:"webgpu",kernelFunc:pd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const md=Ce({opType:j.SUB,cpuKernelImpl:eo,supportsComplex:!0}),gd={kernelName:l.Tr8,backendName:"webgpu",kernelFunc:md};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yd=ne({opType:_.TAN}),xd={kernelName:l.sEM,backendName:"webgpu",kernelFunc:yd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wd=ne({opType:_.TANH}),vd={kernelName:l.MIZ,backendName:"webgpu",kernelFunc:wd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(i){const{inputs:t,backend:e,attrs:r}=i,{tensor:o,indices:s,updates:a}=t,{}=r,{sliceRank:u,numUpdates:h,sliceSize:d,strides:f,outputSize:p}=l.Wap.calculateShapes(a,s,o.shape),g=[p/d,d];if(p===0)return e.makeTensorInfo(o.shape,s.dtype);const x=[],w=X({inputs:{x:s},backend:e,attrs:{shape:[h,u]}});x.push(w);const v=X({inputs:{x:a},backend:e,attrs:{shape:[h,d]}});x.push(v);const k=X({inputs:{x:o},backend:e,attrs:{shape:g}});x.push(k);const P=Do({inputs:{x:k},backend:e,attrs:{reps:Array(g.length).fill(1)}}),D=new jr([h,d],u,w.shape.length,v.shape.length,f,g,o.dtype,!1),A=l.D5U.sizeFromShape([h,d]),F=[{type:"int32",data:[u]},{type:"int32",data:f},{type:"int32",data:[A]}],$=e.runWebGPUProgram(D,[v,w],k.dtype,F,P);x.push($);const z=X({inputs:{x:$},backend:e,attrs:{shape:o.shape}});return x.forEach(E=>e.disposeData(E.dataId)),z}const Sd={kernelName:l.SIB,backendName:"webgpu",kernelFunc:Cd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bd{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`inputSize : i32, firstPass : i32, negativeInf : f32,
        dir : i32, inc : i32,`,this.shaderKey="swap"}getUserCode(){return`
        ${T("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // We compare elements pair-wise within a group of size 2 * inc.
            // The comparing rule for each group alternates between ascending
            // and descending. Within each group, we compare each pair at
            // positions i and i+inc. To decide whether an element at position i
            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
            // inc, it is in the first half of the group, we denote it as x0,
            // otherwise we denote it as x1.
            // For example, as shown in the Bitonic top K paper referenced
            // above, Figure5(a) shows that element[1] is in the second half of
            // the group when group size is 2, but it is in the first half of
            // the group when group size is 4.
            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;
            var i = 0;
            if (isFirstInPair) {
              i = elemIdx;
            } else {
              i = elemIdx - uniforms.inc;
            }

            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }

            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.inc;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.inc));
            }

            var x0 = f32(0.0);
            var x1 = f32(0.0);
            if (i0 < uniforms.inputSize) {
              x0 = getX(batch, i0);
            } else {
              x0 = uniforms.negativeInf;
            }
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = uniforms.negativeInf;
            }

            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;
            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
            if (reverse == isGreater) {
              // Elements in opposite order of direction
              let iTemp = i0;
              i0 = i1;
              i1 = iTemp;
            }
            if (isFirstInPair) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}class kd{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`
        ${T("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // The output size is half of the previous size.
            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _
            // (k=4), we only need to output the indices at positions |, the
            // indices at positions _ can be thrown away, see Figure5(b) After
            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced
            // above.
            // For example, the paper shows we only need to output the orange
            // bars. The output sequence should look like this | | | | | | | |.
            // Because the sequence is halved, to map the output index back to
            // the previous sequence to find the corresponding value, we need
            // to double the index. When we double the index, we basically
            // interpolate a position, so 2i looks like
            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k
            // position of each 2k positions by - elemIdx % k. E.g. for output
            // at index 4,5,6,7, we want to get the corresponding element at
            // original index 8,9,10,11, for output at index 8,9,10,11,
            // we want to get the corresponding element at original index
            // 16,17,18,19, so on and so forth.

            var i = 0;
            if (elemIdx < uniforms.k) {
              i = elemIdx;
            } else {
              i = elemIdx * 2 - elemIdx % uniforms.k;
            }
            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }
            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.k;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.k));
            }

            let x0 = getX(batch, i0);
            var x1 = f32(0.0);
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = x0;
            }

            if (x0 >= x1) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ar(i,t){t!==null&&i.disposeData(t.dataId)}function fn(i){let t=1;for(;t<i;)t*=2;return t}function Id(i){const{inputs:t,backend:e,attrs:r}=i,{x:o}=t,{k:s,sorted:a}=r,u=o.shape,h=u[u.length-1];if(e.shouldExecuteOnCPU([o])){const $=e.readSync(o.dataId),[z,E]=n($,u,o.dtype,s,a);return[e.makeTensorInfo(z.shape,z.dtype,z.values),e.makeTensorInfo(E.shape,E.dtype,E.values)]}if(s===0)return u[u.length-1]=0,[e.makeTensorInfo(u,o.dtype,[]),e.makeTensorInfo(u,"int32",[])];if(h===1)return[o,Pe({attrs:{shape:u,dtype:"int32",value:0},backend:e})];const f=l.D5U.sizeFromShape(u)/h,p=X({inputs:{x:o},attrs:{shape:[f,h]},backend:e}),g=fn(s),x=fn(h);let w=null;const v=()=>w===null?[p,p]:[p,w],k=($,z,E)=>{const B=v(),L=new bd(E),Y=[{type:"int32",data:[h]},{type:"int32",data:[w===null?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[$]},{type:"int32",data:[z]}],te=w;w=e.runWebGPUProgram(L,B,"int32",Y),ar(e,te)};for(let $=1;$<g;$*=2){const z=$*2;for(let E=$;E>=1;E/=2)k(z,E,[f,x])}for(let $=x;$>g;$/=2){const z=v(),E=new kd([f,$/2]),L=[{type:"int32",data:[h]},{type:"int32",data:[w===null?1:0]},{type:"int32",data:[g]}],H=w;w=e.runWebGPUProgram(E,z,"int32",L),ar(e,H);const Y=g/2,te=Y*2;for(let Z=Y;Z>=1;Z/=2)k(te,Z,w.shape)}let P=w;w=nr({inputs:{x:w},backend:e,attrs:{begin:0,size:[f,s]}}),ar(e,P);let D=un({inputs:{x:p,indices:w},backend:e,attrs:{axis:1,batchDims:1}});ar(e,p);const A=u.slice(0,-1);A.push(s),P=w,w=X({inputs:{x:w},attrs:{shape:A},backend:e}),ar(e,P);const F=D;return D=X({inputs:{x:D},attrs:{shape:A},backend:e}),ar(e,F),[D,w]}const Rd={kernelName:l.cWu,backendName:"webgpu",kernelFunc:Id};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pd{constructor(t){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`
          fn mapCoord(outCoord : f32, len : f32) -> f32{
            var inCoord = outCoord;
            if(uniforms.fillModeId == 2) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  if (inCoord < sz2) {
                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +
                    inCoord;
                  }
                  if (inCoord < -len) {
                    inCoord = inCoord + sz2;
                  } else {
                    inCoord = -inCoord - 1.0;
                  }
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));
                  if (inCoord >= len) {
                    inCoord = sz2 - inCoord - 1.0;
                  }
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 3) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 4) {
              return clamp(outCoord, 0.0, len - 1.0);
            }
            return outCoord;
          }
          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,
            channel : i32) -> f32 {
            var outputValue : f32;
            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {
                outputValue = getImage(batch, coordY, coordX, channel);
            } else {
              outputValue = uniforms.fillValue;
            }
            return outputValue;
          }

          ${T("index")} {
            if (index < uniforms.size) {
              let coords = getCoordsFromIndex(index);
              var outputValue : f32;
              let batch = coords[0];
              let x = coords[2];
              let y = coords[1];
              let channel = coords[3];
              let xf = f32(x);
              let yf = f32(y);
              let a1 = getTransforms(batch, 0);
              let a2 = getTransforms(batch, 1);
              let a3 = getTransforms(batch, 2);
              let b1 = getTransforms(batch, 3);
              let b2 = getTransforms(batch, 4);
              let b3 = getTransforms(batch, 5);
              let c1 = getTransforms(batch, 6);
              let c2 = getTransforms(batch, 7);
              let projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = uniforms.fillValue;
              } else {
                let inX = (a1 * xf + a2 * yf + a3) / projection;
                let inY = (b1 * xf + b2 * yf + b3) / projection;
                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));
                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));

                if (uniforms.interpolationModeId == 1) {
                  let coordY = i32(round(mapY));
                  let coordX = i32(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  let yFloor = floor(mapY);
                  let xFloor = floor(mapX);
                  let yCeil = yFloor + 1.0;
                  let xCeil = xFloor + 1.0;
                  let valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);
                  let valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutputAtIndex(index, outputValue);
            }
          }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dd(i){const{inputs:t,backend:e,attrs:r}=i,{image:o,transforms:s}=t,{interpolation:a,fillMode:u,fillValue:h,outputShape:d}=r,[f,p,g,x]=o.shape,[w,v]=d??[p,g],k=[f,w,v,x],P=new Pd(k),D=a==="nearest"?1:2;let A;switch(u){case"constant":A=1;break;case"reflect":A=2;break;case"wrap":A=3;break;case"nearest":A=4;break;default:A=1;break}const F=[{type:"int32",data:[D]},{type:"int32",data:[A]},{type:"float32",data:[h]}];return e.runWebGPUProgram(P,[o,s],"float32",F)}const Ad={kernelName:l.wx7,backendName:"webgpu",kernelFunc:Dd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(i){const{inputs:t,backend:e,attrs:r}=i,{value:o}=t;let{axis:s}=r;s<0&&(s+=o.shape.length);const a=o,u=a.shape.length,h=o.shape[s],d=new Array(u-1);let f=0;for(let v=0;v<u;v++)v!==s&&(d[f++]=a.shape[v]);const p=[],g=new Array(u).fill(0),x=a.shape.slice();x[s]=1;const w=new Array(h);for(let v=0;v<w.length;v++){g[s]=v;const k=nr({inputs:{x:a},backend:e,attrs:{begin:g,size:x}}),P=X({inputs:{x:k},backend:e,attrs:{shape:d}});w[v]=P,p.push(k)}return p.forEach(v=>e.disposeData(v.dataId)),w}const Fd={kernelName:l.ToN,backendName:"webgpu",kernelFunc:Nd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $d{constructor(t,e,r){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.dispatchLayout=V(t),this.dispatch=U(this.dispatchLayout,t,this.workgroupSize),r!=="float32"&&r!=="int32")throw new Error(`UnsortedSegmentSum only supports float32 and int32
              types, does not support ${r} type.`);this.type=r,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`
    ${T("index")} {
      if (index < uniforms.xSize) {
        let coords = getXCoordsFromIndex(index);
        let b = coords[0];
        let inCol = coords[1];

        let segmentId = i32(getSegmentIds(inCol));
        if (segmentId >= 0) {
          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;
          let value = getX(b, inCol);

          ${fe("&result[flatIndex]","value",this.type)}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Td(i){const{inputs:t,backend:e,attrs:r}=i,{x:o,segmentIds:s}=t,{numSegments:a}=r,u=o.shape.length,h=[];let d=0;const f=l.Wap.getAxesPermutation([d],u);let p=o;f!=null&&(p=ue({inputs:{x:o},backend:e,attrs:{perm:f}}),h.push(p),d=l.Wap.getInnerMostAxes(1,u)[0]);const g=l.Wap.segment_util.computeOutShape(p.shape,d,a),x=l.D5U.sizeFromShape([p.shape[d]]),w=X({inputs:{x:p},backend:e,attrs:{shape:[-1,x]}});h.push(w);const v=o.dtype,k=[w.shape[0],a],P=Pe({backend:e,attrs:{shape:k,value:0,dtype:v}}),D=new $d(w.shape,k,v),A=[{type:"int32",data:[a]},{type:"int32",data:[l.D5U.sizeFromShape(w.shape)]}],F=e.runWebGPUProgram(D,[w,s],v,A,P),$=X({inputs:{x:F},backend:e,attrs:{shape:g}});h.push(F);let z=$;if(f!=null){h.push($);const E=l.Wap.getUndoAxesPermutation(f);z=ue({inputs:{x:z},backend:e,attrs:{perm:E}})}return h.forEach(E=>e.disposeData(E.dataId)),z}const zd={kernelName:l.Qvg,backendName:"webgpu",kernelFunc:Td};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ed=[Ue,C,S,N,W,G,pt,vo,So,ds,fs,gs,xs,vs,Ss,Ps,As,Ts,Es,Ls,Ws,js,Ys,Js,ta,na,fi,ua,da,va,Ra,Na,Ta,Ea,La,Ba,Ua,Ha,ja,Ka,qa,Ja,su,uu,iu,hu,fu,xu,vu,bu,Pu,Au,Fu,Tu,Eu,Lu,_u,Ou,Wu,Tr,Hu,qu,ju,Ku,Ju,tl,rl,sl,ll,hl,pl,Qi,ml,ca,yl,wl,Cl,bl,Il,Pl,Nl,zl,$l,Ml,_l,Ol,Hl,Xl,ks,Yl,Ql,nc,Jl,rc,ac,Is,lc,hc,pc,mc,vc,ku,Sc,kc,Rc,qs,Ac,Fc,Tc,Mc,_c,Oc,Wc,Hc,Qs,jc,Kc,qc,Zc,Yi,th,oh,ah,ch,ph,mh,yh,wh,Ch,kh,Ph,Ah,Fh,Th,Eh,Lh,Os,ld,dd,fd,xc,Bh,Wh,Xh,Yh,ed,id,od,nd,ad,gd,Iu,xd,vd,Sd,Zh,Rd,Ad,Ae,Fd,zd,Nc];for(const i of Ed)(0,l.wCN)(i);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var mn=function(i,t){return(mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])})(i,t)};function gn(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=i}mn(i,t),i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var ge=function(){return(ge=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=t[o]);return i}).apply(this,arguments)};function ce(i,t,e,r){return new(e||(e=Promise))(function(o,s){function a(d){try{h(r.next(d))}catch(f){s(f)}}function u(d){try{h(r.throw(d))}catch(f){s(f)}}function h(d){var f;d.done?o(d.value):(f=d.value,f instanceof e?f:new e(function(p){p(f)})).then(a,u)}h((r=r.apply(i,t||[])).next())})}function he(i,t){var e,r,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(h){return function(d){return function(f){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&f[0]?r.return:f[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,f[1])).done)return o;switch(r=0,o&&(f=[2&f[0],o.value]),f[0]){case 0:case 1:o=f;break;case 4:return a.label++,{value:f[1],done:!1};case 5:a.label++,r=f[1],f=[0];continue;case 7:f=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!((o=o.length>0&&o[o.length-1])||f[0]!==6&&f[0]!==2)){a=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){a.label=f[1];break}if(f[0]===6&&a.label<o[1]){a.label=o[1],o=f;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(f);break}o[2]&&a.ops.pop(),a.trys.pop();continue}f=t.call(i,a)}catch(p){f=[6,p],r=0}finally{e=o=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}([h,d])}}}function yi(i,t,e){if(e||arguments.length===2)for(var r,o=0,s=t.length;o<s;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return i.concat(r||Array.prototype.slice.call(t))}var ft=["nose","left_eye","right_eye","left_ear","right_ear","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle"],Xr=["nose","left_eye_inner","left_eye","left_eye_outer","right_eye_inner","right_eye","right_eye_outer","left_ear","right_ear","mouth_left","mouth_right","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_pinky","right_pinky","left_index","right_index","left_thumb","right_thumb","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle","left_heel","right_heel","left_foot_index","right_foot_index"],Md={left:[1,2,3,7,9,11,13,15,17,19,21,23,25,27,29,31],right:[4,5,6,8,10,12,14,16,18,20,22,24,26,28,30,32],middle:[0]},Ld={left:[1,3,5,7,9,11,13,15],right:[2,4,6,8,10,12,14,16],middle:[0]},_d=[[0,1],[0,2],[1,3],[2,4],[5,6],[5,7],[5,11],[6,8],[6,12],[7,9],[8,10],[11,12],[11,13],[12,14],[13,15],[14,16]],Bd=[[0,1],[0,4],[1,2],[2,3],[3,7],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[11,23],[12,14],[14,16],[12,24],[13,15],[15,17],[16,18],[16,20],[15,17],[15,19],[15,21],[16,22],[17,19],[18,20],[23,25],[23,24],[24,26],[25,27],[26,28],[27,29],[28,30],[27,31],[28,32],[29,31],[30,32]];function so(i){return i instanceof SVGAnimatedLength?i.baseVal.value:i}function yn(i){return ce(this,void 0,void 0,function(){var t,e;return he(this,function(r){switch(r.label){case 0:return t=document.createElement("canvas"),i instanceof l.esB?[4,l.Xhn.toPixels(i,t)]:[3,2];case 1:return r.sent(),[3,3];case 2:t.width=so(i.width),t.height=so(i.height),e=t.getContext("2d"),i instanceof ImageData?e.putImageData(i,0,0):e.drawImage(i,0,0),r.label=3;case 3:return[2,t]}})})}function xn(i){return ce(this,void 0,void 0,function(){var t,e,r,o,s,a;return he(this,function(u){switch(u.label){case 0:return i instanceof l.esB?(t=i.shape.slice(0,2),e=t[0],r=t[1],o=ImageData.bind,[4,l.Xhn.toPixels(i)]):[3,2];case 1:return[2,new(o.apply(ImageData,[void 0,u.sent(),r,e]))];case 2:return s=document.createElement("canvas"),a=s.getContext("2d"),s.width=so(i.width),s.height=so(i.height),a.drawImage(i,0,0),[2,a.getImageData(0,0,s.width,s.height)]}})})}function Od(i){return ce(this,void 0,void 0,function(){var t,e;return he(this,function(r){switch(r.label){case 0:return i instanceof SVGImageElement||i instanceof OffscreenCanvas?[4,yn(i)]:[3,2];case 1:return e=r.sent(),[3,3];case 2:e=i,r.label=3;case 3:return t=e,[2,l.Xhn.fromPixels(t,4)]}})})}function wn(i){if(i<0||i>=256)throw new Error("Mask value must be in range [0, 255] but got ".concat(i));if(!Number.isInteger(i))throw new Error("Mask value must be an integer but got ".concat(i))}var Kr={runtime:"mediapipe",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,modelType:"full"},Ud=function(){function i(t){this.mask=t}return i.prototype.toCanvasImageSource=function(){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,this.mask]})})},i.prototype.toImageData=function(){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,xn(this.mask)]})})},i.prototype.toTensor=function(){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,Od(this.mask)]})})},i.prototype.getUnderlyingType=function(){return"canvasimagesource"},i}();function Wd(i){return wn(i),"person"}var Vd=function(){function i(t){var e,r=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.poseSolution=new ye.Pose({locateFile:function(o,s){if(t.solutionPath){var a=t.solutionPath.replace(/\/+$/,"");return"".concat(a,"/").concat(o)}return"".concat(s,"/").concat(o)}}),t.modelType){case"lite":e=0;break;case"heavy":e=2;break;case"full":default:e=1}this.poseSolution.setOptions({modelComplexity:e,smoothLandmarks:t.enableSmoothing,enableSegmentation:t.enableSegmentation,smoothSegmentation:t.smoothSegmentation,selfieMode:this.selfieMode}),this.poseSolution.onResults(function(o){if(r.height=o.image.height,r.width=o.image.width,o.poseLandmarks==null)r.poses=[];else{var s=r.translateOutput(o.poseLandmarks,o.poseWorldLandmarks);o.segmentationMask&&(s.segmentation={maskValueToLabel:Wd,mask:new Ud(o.segmentationMask)}),r.poses=[s]}})}return i.prototype.translateOutput=function(t,e){var r=this,o={keypoints:t.map(function(s,a){return{x:s.x*r.width,y:s.y*r.height,z:s.z,score:s.visibility,name:Xr[a]}})};return e!=null&&(o.keypoints3D=e.map(function(s,a){return{x:s.x,y:s.y,z:s.z,score:s.visibility,name:Xr[a]}})),o},i.prototype.estimatePoses=function(t,e,r){return ce(this,void 0,void 0,function(){var o,s;return he(this,function(a){switch(a.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.poseSolution.setOptions({selfieMode:this.selfieMode})),t instanceof l.esB?(s=ImageData.bind,[4,l.Xhn.toPixels(t)]):[3,2];case 1:return o=new(s.apply(ImageData,[void 0,a.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:o=t,a.label=3;case 3:return t=o,[4,this.poseSolution.send({image:t},r)];case 4:return a.sent(),[2,this.poses]}})})},i.prototype.dispose=function(){this.poseSolution.close()},i.prototype.reset=function(){this.poseSolution.reset()},i.prototype.initialize=function(){return this.poseSolution.initialize()},i}();function Hd(i){return ce(this,void 0,void 0,function(){var t,e;return he(this,function(r){switch(r.label){case 0:return t=function(o){if(o==null)return ge({},Kr);var s=ge({},o);return s.runtime="mediapipe",s.enableSegmentation==null&&(s.enableSegmentation=Kr.enableSegmentation),s.enableSmoothing==null&&(s.enableSmoothing=Kr.enableSmoothing),s.smoothSegmentation==null&&(s.smoothSegmentation=Kr.smoothSegmentation),s.modelType==null&&(s.modelType=Kr.modelType),s}(i),[4,(e=new Vd(t)).initialize()];case 1:return r.sent(),[2,e]}})})}function ur(i){return i instanceof l.esB?{height:i.shape[0],width:i.shape[1]}:{height:i.height,width:i.width}}function vn(i){return i-2*Math.PI*Math.floor((i+Math.PI)/(2*Math.PI))}function Ao(i){return i instanceof l.esB?i:l.Xhn.fromPixels(i)}function Cn(i,t,e){return No(e,"inputResolution"),[1/e.width*i[0][0]*t.width,1/e.height*i[0][1]*t.width,i[0][3]*t.width,1/e.width*i[1][0]*t.height,1/e.height*i[1][1]*t.height,i[1][3]*t.height,0,0]}function No(i,t){l.D5U.assert(i.width!==0,function(){return"".concat(t," width cannot be 0.")}),l.D5U.assert(i.height!==0,function(){return"".concat(t," height cannot be 0.")})}function Fo(i,t,e){var r=e.rotationVectorStartKeypointIndex,o=e.rotationVectorEndKeypointIndex,s=i.locationData,a=s.relativeKeypoints[r].x*t.width,u=s.relativeKeypoints[r].y*t.height,h=s.relativeKeypoints[o].x*t.width,d=s.relativeKeypoints[o].y*t.height,f=2*Math.sqrt((h-a)*(h-a)+(d-u)*(d-u)),p=function(g,x,w){var v,k=g.locationData,P=w.rotationVectorStartKeypointIndex,D=w.rotationVectorEndKeypointIndex;v=w.rotationVectorTargetAngle?w.rotationVectorTargetAngle:Math.PI*w.rotationVectorTargetAngleDegree/180;var A=k.relativeKeypoints[P].x*x.width,F=k.relativeKeypoints[P].y*x.height,$=k.relativeKeypoints[D].x*x.width,z=k.relativeKeypoints[D].y*x.height;return vn(v-Math.atan2(-(z-F),$-A))}(i,t,e);return{xCenter:a/t.width,yCenter:u/t.height,width:f/t.width,height:f/t.height,rotation:p}}function Sn(i){if(i.length!==16)throw new Error("Array length must be 16 but got ".concat(i.length));return[[i[0],i[1],i[2],i[3]],[i[4],i[5],i[6],i[7]],[i[8],i[9],i[10],i[11]],[i[12],i[13],i[14],i[15]]]}function $o(i,t,e,r,o,s,a){return i[t][o]*(i[e][s]*i[r][a]-i[e][a]*i[r][s])}function Ee(i,t,e){var r=(t+1)%4,o=(t+2)%4,s=(t+3)%4,a=(e+1)%4,u=(e+2)%4,h=(e+3)%4;return $o(i,r,o,s,a,u,h)+$o(i,o,s,r,a,u,h)+$o(i,s,r,o,a,u,h)}function bn(i,t,e){e===void 0&&(e={ignoreRotation:!1});for(var r=[],o=0,s=i;o<s.length;o++){var a=s[o],u=a.x-.5,h=a.y-.5,d=e.ignoreRotation?0:t.rotation,f=Math.cos(d)*u-Math.sin(d)*h,p=Math.sin(d)*u+Math.cos(d)*h;f=f*t.width+t.xCenter,p=p*t.height+t.yCenter;var g=a.z*t.width,x=ge({},a);x.x=f,x.y=p,x.z=g,r.push(x)}return r}function kn(i,t){var e=function(r,o,s,a){var u=o-r,h=a-s;if(u===0)throw new Error("Original min and max are both ".concat(r,", range cannot be 0."));var d=h/u;return{scale:d,offset:s-r*d}}(0,255,t[0],t[1]);return(0,l.lub)(function(){return(0,l.IHx)((0,l.dC7)(i,e.scale),e.offset)})}function To(i,t,e){var r,o,s,a,u,h,d,f,p,g,x,w,v,k,P=t.outputTensorSize,D=t.keepAspectRatio,A=t.borderMode,F=t.outputTensorFloatRange,$=ur(i),z=function(L,H){return H?{xCenter:H.xCenter*L.width,yCenter:H.yCenter*L.height,width:H.width*L.width,height:H.height*L.height,rotation:H.rotation}:{xCenter:.5*L.width,yCenter:.5*L.height,width:L.width,height:L.height,rotation:0}}($,e),E=function(L,H,Y){if(Y===void 0&&(Y=!1),!Y)return{top:0,left:0,right:0,bottom:0};var te=H.height,Z=H.width;No(H,"targetSize"),No(L,"roi");var ie,de,pe=te/Z,Ve=L.height/L.width,et=0,tt=0;return pe>Ve?(ie=L.width,de=L.width*pe,tt=(1-Ve/pe)/2):(ie=L.height/pe,de=L.height,et=(1-pe/Ve)/2),L.width=ie,L.height=de,{top:tt,left:et,right:et,bottom:tt}}(z,P,D),B=(r=z,o=$.width,s=$.height,a=!1,u=r.width,h=r.height,d=a?-1:1,f=Math.cos(r.rotation),p=Math.sin(r.rotation),g=r.xCenter,x=r.yCenter,w=1/o,v=1/s,(k=new Array(16))[0]=u*f*d*w,k[1]=-h*p*w,k[2]=0,k[3]=(-.5*u*f*d+.5*h*p+g)*w,k[4]=u*p*d*v,k[5]=h*f*v,k[6]=0,k[7]=(-.5*h*f-.5*u*p*d+x)*v,k[8]=0,k[9]=0,k[10]=u*w,k[11]=0,k[12]=0,k[13]=0,k[14]=0,k[15]=1,Sn(k));return{imageTensor:(0,l.lub)(function(){var L=Ao(i),H=(0,l.odF)(Cn(B,$,P),[1,8]),Y=A==="zero"?"constant":"nearest",te=l.BHj.transform((0,l.dt4)((0,l.pju)(L,"float32")),H,"bilinear",Y,0,[P.height,P.width]);return F!=null?kn(te,F):te}),padding:E,transformationMatrix:B}}function In(i,t,e,r){return r===1?.5*(i+t):i+(t-i)*e/(r-1)}function Gd(i){return(0,l.lub)(function(){var t=function(o){return(0,l.lub)(function(){return[(0,l.tPi)(o,[0,0,0],[1,-1,1]),(0,l.tPi)(o,[0,0,1],[1,-1,-1])]})}(i),e=t[0],r=t[1];return{boxes:(0,l.L9e)(r),logits:(0,l.L9e)(e)}})}function Rn(i){return i!=null&&i.currentTime!=null}function Pn(i){for(var t={locationData:{relativeKeypoints:[]}},e=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,a=0;a<i.length;++a){var u=i[a];e=Math.min(e,u.x),r=Math.max(r,u.x),o=Math.min(o,u.y),s=Math.max(s,u.y),t.locationData.relativeKeypoints.push({x:u.x,y:u.y})}return t.locationData.relativeBoundingBox={xMin:e,yMin:o,xMax:r,yMax:s,width:r-e,height:s-o},t}function jd(i,t,e,r){return ce(this,void 0,void 0,function(){var o,s,a,u,h;return he(this,function(d){switch(d.label){case 0:return i.sort(function(f,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,f.score)}),o=(0,l.odF)(i.map(function(f){return[f.locationData.relativeBoundingBox.yMin,f.locationData.relativeBoundingBox.xMin,f.locationData.relativeBoundingBox.yMax,f.locationData.relativeBoundingBox.xMax]})),s=(0,l.RRF)(i.map(function(f){return f.score[0]})),[4,l.BHj.nonMaxSuppressionAsync(o,s,t,e)];case 1:return[4,(a=d.sent()).array()];case 2:return u=d.sent(),h=i.filter(function(f,p){return u.indexOf(p)>-1}),(0,l.B90)([o,s,a]),[2,h]}})})}function Dn(i,t){return i.map(function(e){var r=ge(ge({},e),{x:e.x*t.width,y:e.y*t.height});return e.z!=null&&(r.z=e.z*t.width),r})}function Xd(i,t,e){return ce(this,void 0,void 0,function(){var r,o,s,a,u,h,d,f,p,g,x,w,v,k,P,D,A,F,$,z,E,B,L,H;return he(this,function(Y){switch(Y.label){case 0:if(r=(0,l.L9e)(t,[0]),o=r.shape,s=o[0],a=o[1],u=o[2],i.length!==u)throw new Error("Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: "+"".concat(i.length,", heatmap length: ").concat(u));return h=[],[4,r.buffer()];case 1:for(d=Y.sent(),f=0;f<i.length;f++)if(p=i[f],g=ge({},p),h.push(g),x=Math.trunc(g.x*a),w=Math.trunc(g.y*s),!(x<0||x>=a||w<0||x>=s)){for(v=Math.trunc((e.kernelSize-1)/2),k=Math.max(0,x-v),P=Math.min(a,x+v+1),D=Math.max(0,w-v),A=Math.min(s,w+v+1),F=0,$=0,z=0,E=0,B=D;B<A;++B)for(L=k;L<P;++L)H=d.get(B,L,f),F+=H,E=Math.max(E,H),$+=L*H,z+=B*H;E>=e.minConfidenceToRefine&&F>0&&(g.x=$/a/F,g.y=z/s/F)}return r.dispose(),[2,h]}})})}function An(i,t){var e=t.left,r=t.top,o=t.left+t.right,s=t.top+t.bottom;return i.map(function(a){return ge(ge({},a),{x:(a.x-e)/(1-o),y:(a.y-r)/(1-s),z:a.z/(1-o)})})}function Kd(i,t,e){return(0,l.N_N)()==="webgl"?function(r,o,s){var a=s.combineWithPreviousRatio.toFixed(2),u={variableNames:["prevMask","newMask"],outputShape:r.shape,userCode:`
  void main() {
      ivec2 coords = getOutputCoords();
      int height = coords[0];
      int width = coords[1];

      float prevMaskValue = getPrevMask(height, width);
      float newMaskValue = getNewMask(height, width);

      /*
      * Assume p := newMaskValue
      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)
      * uncertainty alpha(p) =
      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the
      * uncertainty]
      *
      * The following polynomial approximates uncertainty alpha as a
      * function of (p + 0.5):
      */
      const float c1 = 5.68842;
      const float c2 = -0.748699;
      const float c3 = -57.8051;
      const float c4 = 291.309;
      const float c5 = -624.717;
      float t = newMaskValue - 0.5;
      float x = t * t;

      float uncertainty =
        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));

      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *
                             (uncertainty * `.concat(a,`);

      setOutput(outputValue);
    }
`)},h=(0,l.y3$)();return(0,l.lub)(function(){var d=h.compileAndRun(u,[r,o]);return(0,l.SRH)().makeTensorFromDataId(d.dataId,d.shape,d.dtype)})}(i,t,e):(0,l.lub)(function(){var r=(0,l.luU)(t,.5),o=(0,l.h62)(r),s=(0,l.luU)(1,(0,l.LTh)(1,(0,l.dC7)(o,(0,l.IHx)(5.68842,(0,l.dC7)(o,(0,l.IHx)(-.748699,(0,l.dC7)(o,(0,l.IHx)(-57.8051,(0,l.dC7)(o,(0,l.IHx)(291.309,(0,l.dC7)(o,-624.717)))))))))));return(0,l.IHx)(t,(0,l.dC7)((0,l.luU)(i,t),(0,l.dC7)(s,e.combineWithPreviousRatio)))})}function Yd(i,t,e){return ce(this,void 0,void 0,function(){var r,o,s,a,u;return he(this,function(h){switch(h.label){case 0:return r=i[0],o=i[1],s=function(d,f,p){return(0,l.lub)(function(){var g,x,w,v;p.reverseOutputOrder?(x=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+0],[-1,1])),g=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+1],[-1,1])),v=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+2],[-1,1])),w=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+3],[-1,1]))):(g=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+0],[-1,1])),x=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+1],[-1,1])),w=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+2],[-1,1])),v=(0,l.L9e)((0,l.tPi)(d,[0,p.boxCoordOffset+3],[-1,1]))),x=(0,l.IHx)((0,l.dC7)((0,l.hiC)(x,p.xScale),f.w),f.x),g=(0,l.IHx)((0,l.dC7)((0,l.hiC)(g,p.yScale),f.h),f.y),p.applyExponentialOnBoxSize?(w=(0,l.dC7)((0,l.Qqt)((0,l.hiC)(w,p.hScale)),f.h),v=(0,l.dC7)((0,l.Qqt)((0,l.hiC)(v,p.wScale)),f.w)):(w=(0,l.dC7)((0,l.hiC)(w,p.hScale),f.h),v=(0,l.dC7)((0,l.hiC)(v,p.wScale),f.h));var k=(0,l.luU)(g,(0,l.hiC)(w,2)),P=(0,l.luU)(x,(0,l.hiC)(v,2)),D=(0,l.IHx)(g,(0,l.hiC)(w,2)),A=(0,l.IHx)(x,(0,l.hiC)(v,2)),F=(0,l.zoF)([(0,l.XLQ)(k,[p.numBoxes,1]),(0,l.XLQ)(P,[p.numBoxes,1]),(0,l.XLQ)(D,[p.numBoxes,1]),(0,l.XLQ)(A,[p.numBoxes,1])],1);if(p.numKeypoints)for(var $=0;$<p.numKeypoints;++$){var z=p.keypointCoordOffset+$*p.numValuesPerKeypoint,E=void 0,B=void 0;p.reverseOutputOrder?(E=(0,l.L9e)((0,l.tPi)(d,[0,z],[-1,1])),B=(0,l.L9e)((0,l.tPi)(d,[0,z+1],[-1,1]))):(B=(0,l.L9e)((0,l.tPi)(d,[0,z],[-1,1])),E=(0,l.L9e)((0,l.tPi)(d,[0,z+1],[-1,1])));var L=(0,l.IHx)((0,l.dC7)((0,l.hiC)(E,p.xScale),f.w),f.x),H=(0,l.IHx)((0,l.dC7)((0,l.hiC)(B,p.yScale),f.h),f.y);F=(0,l.zoF)([F,(0,l.XLQ)(L,[p.numBoxes,1]),(0,l.XLQ)(H,[p.numBoxes,1])],1)}return F})}(o,t,e),a=(0,l.lub)(function(){var d=r;return e.sigmoidScore?(e.scoreClippingThresh!=null&&(d=(0,l.iUl)(r,-e.scoreClippingThresh,e.scoreClippingThresh)),d=(0,l.XD2)(d)):d}),[4,qd(s,a,e)];case 1:return u=h.sent(),(0,l.B90)([s,a]),[2,u]}})})}function qd(i,t,e){return ce(this,void 0,void 0,function(){var r,o,s,a,u,h,d,f,p,g,x,w;return he(this,function(v){switch(v.label){case 0:return r=[],[4,i.data()];case 1:return o=v.sent(),[4,t.data()];case 2:for(s=v.sent(),a=0;a<e.numBoxes;++a)if(!(e.minScoreThresh!=null&&s[a]<e.minScoreThresh||(u=a*e.numCoords,h=Qd(o[u+0],o[u+1],o[u+2],o[u+3],s[a],e.flipVertically,a),(d=h.locationData.relativeBoundingBox).width<0||d.height<0))){if(e.numKeypoints>0)for((f=h.locationData).relativeKeypoints=[],p=e.numKeypoints*e.numValuesPerKeypoint,g=0;g<p;g+=e.numValuesPerKeypoint)x=u+e.keypointCoordOffset+g,w={x:o[x+0],y:e.flipVertically?1-o[x+1]:o[x+1]},f.relativeKeypoints.push(w);r.push(h)}return[2,r]}})})}function Qd(i,t,e,r,o,s,a){return{score:[o],ind:a,locationData:{relativeBoundingBox:{xMin:t,yMin:s?1-e:i,xMax:r,yMax:s?1-i:e,width:r-t,height:e-i}}}}function Zd(i,t){return i==="none"?t:function(e){return 1/(1+Math.exp(-e))}(t)}function Nn(i,t,e,r){return ce(this,void 0,void 0,function(){var o,s,a,u,h,d,f,p;return he(this,function(g){switch(g.label){case 0:return e=e||t.flipHorizontally||!1,r=r||t.flipVertically||!1,o=i.size,s=o/t.numLandmarks,[4,i.data()];case 1:for(a=g.sent(),u=[],h=0;h<t.numLandmarks;++h)d=h*s,(p={x:0,y:0}).x=e?t.inputImageWidth-a[d]:a[d],s>1&&(p.y=r?t.inputImageHeight-a[d+1]:a[d+1]),s>2&&(p.z=a[d+2]),s>3&&(p.score=Zd(t.visibilityActivation,a[d+3])),u.push(p);for(f=0;f<u.length;++f)(p=u[f]).x=p.x/t.inputImageWidth,p.y=p.y/t.inputImageHeight,p.z=p.z/t.inputImageWidth/(t.normalizeZ||1);return[2,u]}})})}function Fn(i,t,e){var r=i.width,o=i.height,s=i.rotation;if(e.rotation==null&&e.rotationDegree==null||(s=function(f,p){return p.rotation!=null?f+=p.rotation:p.rotationDegree!=null&&(f+=Math.PI*p.rotationDegree/180),vn(f)}(s,e)),s===0)i.xCenter=i.xCenter+r*e.shiftX,i.yCenter=i.yCenter+o*e.shiftY;else{var a=(t.width*r*e.shiftX*Math.cos(s)-t.height*o*e.shiftY*Math.sin(s))/t.width,u=(t.width*r*e.shiftX*Math.sin(s)+t.height*o*e.shiftY*Math.cos(s))/t.height;i.xCenter=i.xCenter+a,i.yCenter=i.yCenter+u}if(e.squareLong){var h=Math.max(r*t.width,o*t.height);r=h/t.width,o=h/t.height}else if(e.squareShort){var d=Math.min(r*t.width,o*t.height);r=d/t.width,o=d/t.height}return i.width=r*e.scaleX,i.height=o*e.scaleY,i}function Jd(i,t){return i.map(function(e){var r=ge(ge({},e),{x:e.x/t.width,y:e.y/t.height});return e.z!=null&&(e.z=e.z/t.width),r})}var Vt=function(){function i(t){this.alpha=t,this.initialized=!1}return i.prototype.apply=function(t,e){var r;return this.initialized?r=e==null?this.storedValue+this.alpha*(t-this.storedValue):this.storedValue+this.alpha*e*Math.asinh((t-this.storedValue)/e):(r=t,this.initialized=!0),this.rawValue=t,this.storedValue=r,r},i.prototype.applyWithAlpha=function(t,e,r){return this.alpha=e,this.apply(t,r)},i.prototype.hasLastRawValue=function(){return this.initialized},i.prototype.lastRawValue=function(){return this.rawValue},i.prototype.reset=function(){this.initialized=!1},i}(),zo=function(){function i(t){this.frequency=t.frequency,this.minCutOff=t.minCutOff,this.beta=t.beta,this.thresholdCutOff=t.thresholdCutOff,this.thresholdBeta=t.thresholdBeta,this.derivateCutOff=t.derivateCutOff,this.x=new Vt(this.getAlpha(this.minCutOff)),this.dx=new Vt(this.getAlpha(this.derivateCutOff)),this.lastTimestamp=0}return i.prototype.apply=function(t,e,r){if(t==null)return t;var o=Math.trunc(e);if(this.lastTimestamp>=o)return t;this.lastTimestamp!==0&&o!==0&&(this.frequency=1/(1e-6*(o-this.lastTimestamp))),this.lastTimestamp=o;var s=this.x.hasLastRawValue()?(t-this.x.lastRawValue())*r*this.frequency:0,a=this.dx.applyWithAlpha(s,this.getAlpha(this.derivateCutOff)),u=this.minCutOff+this.beta*Math.abs(a),h=this.thresholdCutOff!=null?this.thresholdCutOff+this.thresholdBeta*Math.abs(a):null;return this.x.applyWithAlpha(t,this.getAlpha(u),h)},i.prototype.getAlpha=function(t){return 1/(1+this.frequency/(2*Math.PI*t))},i}(),Eo=function(){function i(t){this.config=t}return i.prototype.apply=function(t,e,r){var o=this;if(t==null)return this.reset(),null;this.initializeFiltersIfEmpty(t);var s=1;if(!this.config.disableValueScaling){if(r<this.config.minAllowedObjectScale)return yi([],t,!0);s=1/r}return t.map(function(a,u){var h=ge(ge({},a),{x:o.xFilters[u].apply(a.x,e,s),y:o.yFilters[u].apply(a.y,e,s)});return a.z!=null&&(h.z=o.zFilters[u].apply(a.z,e,s)),h})},i.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},i.prototype.initializeFiltersIfEmpty=function(t){var e=this;this.xFilters!=null&&this.xFilters.length===t.length||(this.xFilters=t.map(function(r){return new zo(e.config)}),this.yFilters=t.map(function(r){return new zo(e.config)}),this.zFilters=t.map(function(r){return new zo(e.config)}))},i}(),Mo=function(){function i(t){this.config=t,this.window=[],this.lowPassFilter=new Vt(1),this.lastValue=0,this.lastValueScale=1,this.lastTimestamp=-1}return i.prototype.apply=function(t,e,r){if(t==null)return t;var o,s=Math.trunc(e);if(this.lastTimestamp>=s)return t;if(this.lastTimestamp===-1)o=1;else{for(var a=t*r-this.lastValue*this.lastValueScale,u=s-this.lastTimestamp,h=a,d=u,f=(1+this.window.length)*(1e6/30),p=0,g=this.window;p<g.length;p++){var x=g[p];if(d+x.duration>f)break;h+=x.distance,d+=x.duration}var w=h/(1e-6*d);o=1-1/(1+this.config.velocityScale*Math.abs(w)),this.window.unshift({distance:a,duration:u}),this.window.length>this.config.windowSize&&this.window.pop()}return this.lastValue=t,this.lastValueScale=r,this.lastTimestamp=s,this.lowPassFilter.applyWithAlpha(t,o)},i}(),ep=function(){function i(t){this.config=t}return i.prototype.apply=function(t,e,r){var o=this;if(t==null)return this.reset(),null;var s=1;if(!this.config.disableValueScaling){if(r<this.config.minAllowedObjectScale)return yi([],t,!0);s=1/r}return this.initializeFiltersIfEmpty(t),t.map(function(a,u){var h=ge(ge({},a),{x:o.xFilters[u].apply(a.x,e,s),y:o.yFilters[u].apply(a.y,e,s)});return a.z!=null&&(h.z=o.zFilters[u].apply(a.z,e,s)),h})},i.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},i.prototype.initializeFiltersIfEmpty=function(t){var e=this;this.xFilters!=null&&this.xFilters.length===t.length||(this.xFilters=t.map(function(r){return new Mo(e.config)}),this.yFilters=t.map(function(r){return new Mo(e.config)}),this.zFilters=t.map(function(r){return new Mo(e.config)}))},i}(),Lo=function(){function i(t){if(t.velocityFilter!=null)this.keypointsFilter=new ep(t.velocityFilter);else{if(t.oneEuroFilter==null)throw new Error("Either configure velocityFilter or oneEuroFilter, but got "+"".concat(t,"."));this.keypointsFilter=new Eo(t.oneEuroFilter)}}return i.prototype.apply=function(t,e,r,o,s){if(o===void 0&&(o=!1),t==null)return this.keypointsFilter.reset(),null;var a=s!=null?function(d,f){return(d.width*f.width+d.height*f.height)/2}(s,r):1,u=o?Dn(t,r):t,h=this.keypointsFilter.apply(u,e,a);return o?Jd(h,r):h},i}(),$n=function(){function i(t){this.alpha=t.alpha}return i.prototype.apply=function(t){var e=this;if(t==null)return this.visibilityFilters=null,null;this.visibilityFilters!=null&&this.visibilityFilters.length===t.length||(this.visibilityFilters=t.map(function(u){return new Vt(e.alpha)}));for(var r=[],o=0;o<t.length;++o){var s=t[o],a=ge({},s);a.score=this.visibilityFilters[o].apply(s.score),r.push(a)}return r},i}(),tp={reduceBoxesInLowestlayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:5,minScale:.1484375,maxScale:.75,inputSizeHeight:224,inputSizeWidth:224,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,32,32,32],aspectRatios:[1],fixedAnchorSize:!0},lr={runtime:"tfjs",modelType:"full",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"},ip={maxPoses:1,flipHorizontal:!1},rp={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2254,numCoords:12,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:4,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:224,yScale:224,hScale:224,wScale:224,minScoreThresh:.5},op=.3,Tn={shiftX:0,shiftY:0,scaleX:1.25,scaleY:1.25,squareLong:!0},np={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},sp={outputTensorSize:{width:256,height:256},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},ap={numLandmarks:39,inputImageWidth:256,inputImageHeight:256,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},up={numLandmarks:39,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},lp={kernelSize:7,minConfidenceToRefine:.5},zn={alpha:.1},cp={oneEuroFilter:{frequency:30,minCutOff:.05,beta:80,derivateCutOff:1,minAllowedObjectScale:1e-6}},hp={oneEuroFilter:{frequency:30,minCutOff:.01,beta:10,derivateCutOff:1,minAllowedObjectScale:1e-6}},dp={oneEuroFilter:{frequency:30,minCutOff:.1,beta:40,derivateCutOff:1,minAllowedObjectScale:1e-6,disableValueScaling:!0}},pp={activation:"none"},fp={combineWithPreviousRatio:.7},mp=function(){function i(t){this.mask=t}return i.prototype.toCanvasImageSource=function(){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,yn(this.mask)]})})},i.prototype.toImageData=function(){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,xn(this.mask)]})})},i.prototype.toTensor=function(){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,this.mask]})})},i.prototype.getUnderlyingType=function(){return"tensor"},i}();function gp(i){return wn(i),"person"}var yp=function(){function i(t,e,r,o,s,a){this.detectorModel=t,this.landmarkModel=e,this.enableSmoothing=r,this.enableSegmentation=o,this.smoothSegmentation=s,this.modelType=a,this.regionOfInterest=null,this.prevFilteredSegmentationMask=null,this.anchors=function(p){p.reduceBoxesInLowestLayer==null&&(p.reduceBoxesInLowestLayer=!1),p.interpolatedScaleAspectRatio==null&&(p.interpolatedScaleAspectRatio=1),p.fixedAnchorSize==null&&(p.fixedAnchorSize=!1);for(var g=[],x=0;x<p.numLayers;){for(var w=[],v=[],k=[],P=[],D=x;D<p.strides.length&&p.strides[D]===p.strides[x];){var A=In(p.minScale,p.maxScale,D,p.strides.length);if(D===0&&p.reduceBoxesInLowestLayer)k.push(1),k.push(2),k.push(.5),P.push(.1),P.push(A),P.push(A);else{for(var F=0;F<p.aspectRatios.length;++F)k.push(p.aspectRatios[F]),P.push(A);if(p.interpolatedScaleAspectRatio>0){var $=D===p.strides.length-1?1:In(p.minScale,p.maxScale,D+1,p.strides.length);P.push(Math.sqrt(A*$)),k.push(p.interpolatedScaleAspectRatio)}}D++}for(var z=0;z<k.length;++z){var E=Math.sqrt(k[z]);w.push(P[z]/E),v.push(P[z]*E)}var B=0,L=0;if(p.featureMapHeight.length>0)B=p.featureMapHeight[x],L=p.featureMapWidth[x];else{var H=p.strides[x];B=Math.ceil(p.inputSizeHeight/H),L=Math.ceil(p.inputSizeWidth/H)}for(var Y=0;Y<B;++Y)for(var te=0;te<L;++te)for(var Z=0;Z<w.length;++Z){var ie={xCenter:(te+p.anchorOffsetX)/L,yCenter:(Y+p.anchorOffsetY)/B,width:0,height:0};p.fixedAnchorSize?(ie.width=1,ie.height=1):(ie.width=v[Z],ie.height=w[Z]),g.push(ie)}x=D}return g}(tp);var u=(0,l.RRF)(this.anchors.map(function(p){return p.width})),h=(0,l.RRF)(this.anchors.map(function(p){return p.height})),d=(0,l.RRF)(this.anchors.map(function(p){return p.xCenter})),f=(0,l.RRF)(this.anchors.map(function(p){return p.yCenter}));this.anchorTensor={x:d,y:f,w:u,h},this.prevFilteredSegmentationMask=this.enableSegmentation?(0,l.odF)([],[0,0]):null}return i.prototype.estimatePoses=function(t,e,r){return ce(this,void 0,void 0,function(){var o,s,a,u,h,d,f,p,g,x,w,v,k,P,D,A,F,$,z,E,B,L,H;return he(this,function(Y){switch(Y.label){case 0:return o=function(te){var Z;if((Z=te==null?ip:ge({},te)).maxPoses==null&&(Z.maxPoses=1),Z.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(Z.maxPoses,". Should be > 0."));if(Z.maxPoses>1)throw new Error("Multi-pose detection is not implemented yet. Please set maxPoses to 1.");return Z}(e),t==null?(this.reset(),[2,[]]):(this.maxPoses=o.maxPoses,this.timestamp=r!=null?1e3*r:Rn(t)?1e6*t.currentTime:null,s=ur(t),a=(0,l.lub)(function(){return(0,l.pju)(Ao(t),"float32")}),(u=this.regionOfInterest)!=null?[3,2]:[4,this.detectPose(a)]);case 1:if((h=Y.sent()).length===0)return this.reset(),a.dispose(),[2,[]];d=h[0],u=this.poseDetectionToRoi(d,s),Y.label=2;case 2:return[4,this.poseLandmarksByRoi(u,a)];case 3:return f=Y.sent(),a.dispose(),f==null?(this.reset(),[2,[]]):(p=f.landmarks,g=f.auxiliaryLandmarks,x=f.poseScore,w=f.worldLandmarks,v=f.segmentationMask,k=this.poseLandmarkFiltering(p,g,w,s),P=k.actualLandmarksFiltered,D=k.auxiliaryLandmarksFiltered,A=k.actualWorldLandmarksFiltered,F=this.poseLandmarksToRoi(D,s),this.regionOfInterest=F,$=this.smoothSegmentation&&v!=null?this.poseSegmentationFiltering(v):v,(z=P!=null?Dn(P,s):null)!=null&&z.forEach(function(te,Z){te.name=Xr[Z]}),(E=A)!=null&&E.forEach(function(te,Z){te.name=Xr[Z]}),B={score:x,keypoints:z,keypoints3D:E},$!==null&&(L=(0,l.lub)(function(){var te=(0,l.dt4)($,2),Z=(0,l.vku)(te,[[0,0],[0,0],[0,1]]);return(0,l.VdP)(Z,[[0,0],[0,0],[0,2]],"symmetric")}),this.smoothSegmentation||(0,l.B90)($),H={maskValueToLabel:gp,mask:new mp(L)},B.segmentation=H),[2,[B]])}})})},i.prototype.poseSegmentationFiltering=function(t){var e=this.prevFilteredSegmentationMask;return e.size===0?this.prevFilteredSegmentationMask=t:(this.prevFilteredSegmentationMask=Kd(e,t,fp),(0,l.B90)(t)),(0,l.B90)(e),this.prevFilteredSegmentationMask},i.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),(0,l.B90)([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h,this.prevFilteredSegmentationMask])},i.prototype.reset=function(){this.regionOfInterest=null,this.enableSegmentation&&((0,l.B90)(this.prevFilteredSegmentationMask),this.prevFilteredSegmentationMask=(0,l.odF)([],[0,0])),this.visibilitySmoothingFilterActual=null,this.visibilitySmoothingFilterAuxiliary=null,this.landmarksSmoothingFilterActual=null,this.landmarksSmoothingFilterAuxiliary=null},i.prototype.detectPose=function(t){return ce(this,void 0,void 0,function(){var e,r,o,s,a,u,h,d,f,p;return he(this,function(g){switch(g.label){case 0:return e=To(t,np),r=e.imageTensor,o=e.padding,s=this.detectorModel.predict(r),a=Gd(s),u=a.boxes,[4,Yd([h=a.logits,u],this.anchorTensor,rp)];case 1:return(d=g.sent()).length===0?((0,l.B90)([r,s,h,u]),[2,d]):[4,jd(d,this.maxPoses,op)];case 2:return f=g.sent(),p=function(x,w){x===void 0&&(x=[]);for(var v=w.left,k=w.top,P=w.left+w.right,D=w.top+w.bottom,A=0;A<x.length;A++){var F=x[A],$=F.locationData.relativeBoundingBox,z=($.xMin-v)/(1-P),E=($.yMin-k)/(1-D),B=$.width/(1-P),L=$.height/(1-D);$.xMin=z,$.yMin=E,$.width=B,$.height=L,$.xMax=z+B,$.yMax=E+L;var H=F.locationData.relativeKeypoints;H&&H.forEach(function(Y){var te=(Y.x-v)/(1-P),Z=(Y.y-k)/(1-D);Y.x=te,Y.y=Z})}return x}(f,o),(0,l.B90)([r,s,h,u]),[2,p]}})})},i.prototype.poseDetectionToRoi=function(t,e){return Fn(Fo(t,e,{rotationVectorEndKeypointIndex:1,rotationVectorStartKeypointIndex:0,rotationVectorTargetAngleDegree:90}),e,Tn)},i.prototype.poseLandmarksByRoi=function(t,e){return ce(this,void 0,void 0,function(){var r,o,s,a,u,h,d,f,p,g,x,w,v,k;return he(this,function(P){switch(P.label){case 0:if(r=ur(e),o=To(e,sp,t),s=o.imageTensor,a=o.padding,u=o.transformationMatrix,this.modelType!=="lite"&&this.modelType!=="full"&&this.modelType!=="heavy")throw new Error("Model type must be one of lite, full or heavy,"+"but got ".concat(this.modelType));return h=["ld_3d","output_poseflag","activation_heatmap","world_3d"],this.enableSegmentation&&h.push("activation_segmentation"),d=this.landmarkModel.execute(s,h),[4,this.tensorsToPoseLandmarksAndSegmentation(d)];case 1:return(f=P.sent())==null?((0,l.B90)(d),(0,l.B90)(s),[2,null]):(p=f.landmarks,g=f.auxiliaryLandmarks,x=f.poseScore,w=f.worldLandmarks,v=f.segmentationMask,[4,this.poseLandmarksAndSegmentationInverseProjection(r,t,a,u,p,g,w,v)]);case 2:return k=P.sent(),(0,l.B90)(d),(0,l.B90)(s),[2,ge({poseScore:x},k)]}})})},i.prototype.poseLandmarksAndSegmentationInverseProjection=function(t,e,r,o,s,a,u,h){return ce(this,void 0,void 0,function(){var d,f,p,g,x,w;return he(this,function(v){return d=An(s,r),f=An(a,r),p=bn(d,e),g=bn(f,e),x=function(k,P){for(var D=[],A=0,F=k;A<F.length;A++){var $=F[A],z=$.x,E=$.y,B=P.rotation,L=Math.cos(B)*z-Math.sin(B)*E,H=Math.sin(B)*z+Math.cos(B)*E,Y=ge({},$);Y.x=L,Y.y=H,D.push(Y)}return D}(u,e),w=null,this.enableSegmentation&&(w=(0,l.lub)(function(){var k=h.shape,P=k[0],D=k[1],A=function(z){var E=Sn(new Array(16).fill(0));E[0][0]=Ee(z,0,0),E[1][0]=-Ee(z,0,1),E[2][0]=Ee(z,0,2),E[3][0]=-Ee(z,0,3),E[0][2]=Ee(z,2,0),E[1][2]=-Ee(z,2,1),E[2][2]=Ee(z,2,2),E[3][2]=-Ee(z,2,3),E[0][1]=-Ee(z,1,0),E[1][1]=Ee(z,1,1),E[2][1]=-Ee(z,1,2),E[3][1]=Ee(z,1,3),E[0][3]=-Ee(z,3,0),E[1][3]=Ee(z,3,1),E[2][3]=-Ee(z,3,2),E[3][3]=Ee(z,3,3);for(var B=z[0][0]*E[0][0]+z[1][0]*E[0][1]+z[2][0]*E[0][2]+z[3][0]*E[0][3],L=0;L<E.length;L++)for(var H=0;H<E.length;H++)E[L][H]/=B;return E}(o),F=(0,l.odF)(Cn(A,{width:D,height:P},t),[1,8]),$=[1,P,D,1];return(0,l.L9e)(l.BHj.transform((0,l.XLQ)(h,$),F,"bilinear","constant",0,[t.height,t.width]),[0,3])}),(0,l.B90)(h)),[2,{landmarks:p,auxiliaryLandmarks:g,worldLandmarks:x,segmentationMask:w}]})})},i.prototype.tensorsToPoseLandmarksAndSegmentation=function(t){return ce(this,void 0,void 0,function(){var e,r,o,s,a,u,h,d,f,p,g,x,w;return he(this,function(v){switch(v.label){case 0:return e=t[0],r=t[1],o=t[2],s=t[3],a=this.enableSegmentation?t[4]:null,[4,r.data()];case 1:return(u=v.sent()[0])<.5?[2,null]:[4,Nn(e,ap)];case 2:return[4,Xd(v.sent(),o,lp)];case 3:return h=v.sent(),d=h.slice(0,33),f=h.slice(33,35),[4,Nn(s,up)];case 4:return p=v.sent(),g=p.slice(0,33),x=function(k,P,D){D===void 0&&(D=!0);for(var A=[],F=0;F<k.length;F++){var $=ge({},P[F]);D&&($.score=k[F].score),A.push($)}return A}(d,g,!0),w=this.enableSegmentation?function(k,P,D){return(0,l.lub)(function(){var A=(0,l.L9e)(k,[0]),F=A.shape[2];if(F===1){var $=A;switch(P.activation){case"none":break;case"sigmoid":$=(0,l.XD2)($);break;case"softmax":throw new Error("Softmax activation requires two channels.");default:throw new Error("Activation not supported (".concat(P.activation,")"))}var z=D?l.BHj.resizeBilinear($,[D.height,D.width]):$;return(0,l.L9e)(z,[2])}throw new Error("Unsupported number of tensor channels ".concat(F))})}(a,pp):null,[2,{landmarks:d,auxiliaryLandmarks:f,poseScore:u,worldLandmarks:x,segmentationMask:w}]}})})},i.prototype.poseLandmarksToRoi=function(t,e){return Fn(Fo(Pn(t),e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:90}),e,Tn)},i.prototype.poseLandmarkFiltering=function(t,e,r,o){var s,a,u;if(this.timestamp!=null&&this.enableSmoothing){var h=Fo(Pn(e),o,{rotationVectorEndKeypointIndex:0,rotationVectorStartKeypointIndex:1,rotationVectorTargetAngleDegree:90});this.visibilitySmoothingFilterActual==null&&(this.visibilitySmoothingFilterActual=new $n(zn)),s=this.visibilitySmoothingFilterActual.apply(t),this.visibilitySmoothingFilterAuxiliary==null&&(this.visibilitySmoothingFilterAuxiliary=new $n(zn)),a=this.visibilitySmoothingFilterAuxiliary.apply(e),u=this.visibilitySmoothingFilterActual.apply(r),this.landmarksSmoothingFilterActual==null&&(this.landmarksSmoothingFilterActual=new Lo(cp)),s=this.landmarksSmoothingFilterActual.apply(s,this.timestamp,o,!0,h),this.landmarksSmoothingFilterAuxiliary==null&&(this.landmarksSmoothingFilterAuxiliary=new Lo(hp)),a=this.landmarksSmoothingFilterAuxiliary.apply(a,this.timestamp,o,!0,h),this.worldLandmarksSmoothingFilterActual==null&&(this.worldLandmarksSmoothingFilterActual=new Lo(dp)),u=this.worldLandmarksSmoothingFilterActual.apply(r,this.timestamp)}else s=t,a=e,u=r;return{actualLandmarksFiltered:s,auxiliaryLandmarksFiltered:a,actualWorldLandmarksFiltered:u}},i}();function xp(i){return ce(this,void 0,void 0,function(){var t,e,r,o,s,a;return he(this,function(u){switch(u.label){case 0:return t=function(h){var d=ge({},h??lr);if(d.enableSmoothing==null&&(d.enableSmoothing=lr.enableSmoothing),d.enableSegmentation==null&&(d.enableSegmentation=lr.enableSegmentation),d.smoothSegmentation==null&&(d.smoothSegmentation=lr.smoothSegmentation),d.modelType==null&&(d.modelType=lr.modelType),d.detectorModelUrl==null&&(d.detectorModelUrl=lr.detectorModelUrl),d.landmarkModelUrl==null)switch(d.modelType){case"lite":d.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";break;case"heavy":d.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";break;case"full":default:d.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"}return d}(i),e=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([(0,xe.YL)(t.detectorModelUrl,{fromTFHub:e}),(0,xe.YL)(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return o=u.sent(),s=o[0],a=o[1],[2,new yp(s,a,t.enableSmoothing,t.enableSegmentation,t.smoothSegmentation,t.modelType)]}})})}var xi,Me,En=function(){function i(t){(function(e){if(e.maxTracks<1)throw new Error("Must specify 'maxTracks' to be at least 1, but "+"encountered ".concat(e.maxTracks));if(e.maxAge<=0)throw new Error("Must specify 'maxAge' to be positive, but "+"encountered ".concat(e.maxAge));if(e.keypointTrackerParams!==void 0){if(e.keypointTrackerParams.keypointConfidenceThreshold<0||e.keypointTrackerParams.keypointConfidenceThreshold>1)throw new Error("Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered "+"".concat(e.keypointTrackerParams.keypointConfidenceThreshold));if(e.keypointTrackerParams.minNumberOfKeypoints<1)throw new Error("Must specify 'minNumberOfKeypoints' to be at least 1, but "+"encountered ".concat(e.keypointTrackerParams.minNumberOfKeypoints));for(var r=0,o=e.keypointTrackerParams.keypointFalloff;r<o.length;r++){var s=o[r];if(s<=0)throw new Error("Must specify each keypoint falloff parameterto be positive "+"but encountered ".concat(s))}}})(t),this.tracks=[],this.maxTracks=t.maxTracks,this.maxAge=1e3*t.maxAge,this.minSimilarity=t.minSimilarity,this.nextID=1}return i.prototype.apply=function(t,e){this.filterOldTracks(e);var r=this.computeSimilarity(t);return this.assignTracks(t,r,e),this.updateTracks(e),t},i.prototype.getTracks=function(){return this.tracks.slice()},i.prototype.getTrackIDs=function(){return new Set(this.tracks.map(function(t){return t.id}))},i.prototype.filterOldTracks=function(t){var e=this;this.tracks=this.tracks.filter(function(r){return t-r.lastTimestamp<=e.maxAge})},i.prototype.assignTracks=function(t,e,r){for(var o=Array.from(Array(e[0].length).keys()),s=[],a=0,u=Array.from(Array(t.length).keys());a<u.length;a++){var h=u[a];if(o.length!==0){for(var d=-1,f=-1,p=0,g=o;p<g.length;p++){var x=g[p],w=e[h][x];w>=this.minSimilarity&&w>f&&(d=x,f=w)}if(d>=0){var v=this.tracks[d];v=Object.assign(v,this.createTrack(t[h],r,v.id)),t[h].id=v.id;var k=o.indexOf(d);o.splice(k,1)}else s.push(h)}else s.push(h)}for(var P=0,D=s;P<D.length;P++){h=D[P];var A=this.createTrack(t[h],r);this.tracks.push(A),t[h].id=A.id}},i.prototype.updateTracks=function(t){this.tracks.sort(function(e,r){return r.lastTimestamp-e.lastTimestamp}),this.tracks=this.tracks.slice(0,this.maxTracks)},i.prototype.createTrack=function(t,e,r){var o={id:r||this.nextTrackID(),lastTimestamp:e,keypoints:yi([],t.keypoints,!0).map(function(s){return ge({},s)})};return t.box!==void 0&&(o.box=ge({},t.box)),o},i.prototype.nextTrackID=function(){var t=this.nextID;return this.nextID+=1,t},i.prototype.remove=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.tracks=this.tracks.filter(function(r){return!t.includes(r.id)})},i.prototype.reset=function(){this.tracks=[]},i}(),wp=function(i){function t(e){return i.call(this,e)||this}return gn(t,i),t.prototype.computeSimilarity=function(e){var r=this;return e.length===0||this.tracks.length===0?[[]]:e.map(function(o){return r.tracks.map(function(s){return r.iou(o,s)})})},t.prototype.iou=function(e,r){var o=Math.max(e.box.xMin,r.box.xMin),s=Math.max(e.box.yMin,r.box.yMin),a=Math.min(e.box.xMax,r.box.xMax),u=Math.min(e.box.yMax,r.box.yMax);if(o>=a||s>=u)return 0;var h=(a-o)*(u-s);return h/(e.box.width*e.box.height+r.box.width*r.box.height-h)},t}(En),vp=function(i){function t(e){var r=i.call(this,e)||this;return r.keypointThreshold=e.keypointTrackerParams.keypointConfidenceThreshold,r.keypointFalloff=e.keypointTrackerParams.keypointFalloff,r.minNumKeyoints=e.keypointTrackerParams.minNumberOfKeypoints,r}return gn(t,i),t.prototype.computeSimilarity=function(e){if(e.length===0||this.tracks.length===0)return[[]];for(var r=[],o=0,s=e;o<s.length;o++){for(var a=s[o],u=[],h=0,d=this.tracks;h<d.length;h++){var f=d[h];u.push(this.oks(a,f))}r.push(u)}return r},t.prototype.oks=function(e,r){for(var o=this.area(r.keypoints)+1e-6,s=0,a=0,u=0;u<e.keypoints.length;++u){var h=e.keypoints[u],d=r.keypoints[u];if(!(h.score<this.keypointThreshold||d.score<this.keypointThreshold)){a+=1;var f=Math.pow(h.x-d.x,2)+Math.pow(h.y-d.y,2),p=2*this.keypointFalloff[u];s+=Math.exp(-1*f/(2*o*Math.pow(p,2)))}}return a<this.minNumKeyoints?0:s/a},t.prototype.area=function(e){var r=this,o=e.filter(function(h){return h.score>r.keypointThreshold}),s=Math.min.apply(Math,yi([1],o.map(function(h){return h.x}),!1)),a=Math.max.apply(Math,yi([0],o.map(function(h){return h.x}),!1)),u=Math.min.apply(Math,yi([1],o.map(function(h){return h.y}),!1));return(a-s)*(Math.max.apply(Math,yi([0],o.map(function(h){return h.y}),!1))-u)},t}(En);function Mn(i){switch(i){case Me.BlazePose:return Xr.reduce(function(t,e,r){return t[e]=r,t},{});case Me.PoseNet:case Me.MoveNet:return ft.reduce(function(t,e,r){return t[e]=r,t},{});default:throw new Error("Model ".concat(i," is not supported."))}}(function(i){i.Keypoint="keypoint",i.BoundingBox="boundingBox"})(xi||(xi={})),function(i){i.MoveNet="MoveNet",i.BlazePose="BlazePose",i.PoseNet="PoseNet"}(Me||(Me={}));var jp=Object.freeze({__proto__:null,getKeypointIndexBySide:function(i){switch(i){case Me.BlazePose:return Md;case Me.PoseNet:case Me.MoveNet:return Ld;default:throw new Error("Model ".concat(i," is not supported."))}},getAdjacentPairs:function(i){switch(i){case Me.BlazePose:return Bd;case Me.PoseNet:case Me.MoveNet:return _d;default:throw new Error("Model ".concat(i," is not supported."))}},getKeypointIndexByName:Mn}),Ln=["SinglePose.Lightning","SinglePose.Thunder","MultiPose.Lightning"],_n={modelType:"SinglePose.Lightning",enableSmoothing:!0},Bn={},On={frequency:30,minCutOff:2.5,beta:300,derivateCutOff:2.5,thresholdCutOff:.5,thresholdBeta:5,disableValueScaling:!0},_o={maxTracks:18,maxAge:1e3,minSimilarity:.2,keypointTrackerParams:{keypointConfidenceThreshold:.3,keypointFalloff:[.026,.025,.025,.035,.035,.079,.079,.072,.072,.062,.062,.107,.107,.087,.087,.089,.089],minNumberOfKeypoints:4}},Un={maxTracks:18,maxAge:1e3,minSimilarity:.15,trackerParams:{}};function Cp(i,t,e,r){for(var o={},s=0,a=ft;s<a.length;s++){var u=a[s];o[u]=[t[e[u]].y*r.height,t[e[u]].x*r.width]}if(function(D,A){return(D[A.left_hip].score>.2||D[A.right_hip].score>.2)&&(D[A.left_shoulder].score>.2||D[A.right_shoulder].score>.2)}(t,e)){var h=(o.left_hip[0]+o.right_hip[0])/2,d=(o.left_hip[1]+o.right_hip[1])/2,f=function(D,A,F,$,z){for(var E=["left_shoulder","right_shoulder","left_hip","right_hip"],B=0,L=0,H=0;H<E.length;H++)(de=Math.abs($-F[E[H]][0]))>B&&(B=de),(pe=Math.abs(z-F[E[H]][1]))>L&&(L=pe);for(var Y=0,te=0,Z=0,ie=Object.keys(F);Z<ie.length;Z++){var de,pe,Ve=ie[Z];D[A[Ve]].score<.2||((de=Math.abs($-F[Ve][0]))>Y&&(Y=de),(pe=Math.abs(z-F[Ve][1]))>te&&(te=pe))}return[B,L,Y,te]}(t,e,o,h,d),p=f[0],g=f[1],x=f[2],w=f[3],v=Math.max(1.9*g,1.9*p,1.2*x,1.2*w),k=[h-(v=Math.min(v,Math.max(d,r.width-d,h,r.height-h))),d-v];if(v>Math.max(r.width,r.height)/2)return Bo(i==null,r);var P=2*v;return{yMin:k[0]/r.height,xMin:k[1]/r.width,yMax:(k[0]+P)/r.height,xMax:(k[1]+P)/r.width,height:(k[0]+P)/r.height-k[0]/r.height,width:(k[1]+P)/r.width-k[1]/r.width}}return Bo(i==null,r)}function Bo(i,t){var e,r,o,s;return i?t.width>t.height?(e=1,r=t.height/t.width,o=0,s=(t.width/2-t.height/2)/t.width):(e=t.width/t.height,r=1,o=(t.height/2-t.width/2)/t.height,s=0):t.width>t.height?(e=t.width/t.height,r=1,o=(t.height/2-t.width/2)/t.height,s=0):(e=1,r=t.height/t.width,o=0,s=(t.width/2-t.height/2)/t.width),{yMin:o,xMin:s,yMax:o+e,xMax:s+r,height:e,width:r}}function Sp(i){var t,e=i==null?_n:ge({},i);if(e.modelType==null)e.modelType="SinglePose.Lightning";else if(Ln.indexOf(e.modelType)<0)throw new Error("Invalid architecture ".concat(e.modelType,". ")+"Should be one of ".concat(Ln));if(e.enableSmoothing==null&&(e.enableSmoothing=!0),e.minPoseScore!=null&&(e.minPoseScore<0||e.minPoseScore>1))throw new Error("minPoseScore should be between 0.0 and 1.0");if(e.multiPoseMaxDimension!=null&&(e.multiPoseMaxDimension%32!=0||e.multiPoseMaxDimension<32))throw new Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");if(e.modelType==="MultiPose.Lightning"&&e.enableTracking==null&&(e.enableTracking=!0),e.modelType==="MultiPose.Lightning"&&e.enableTracking===!0)if(e.trackerType==null&&(e.trackerType=xi.BoundingBox),e.trackerType===xi.Keypoint)e.trackerConfig!=null?e.trackerConfig=function(r){var o=Wn(_o,r);return o.keypointTrackerParams=ge({},_o.keypointTrackerParams),r.keypointTrackerParams!=null&&(r.keypointTrackerParams.keypointConfidenceThreshold!=null&&(o.keypointTrackerParams.keypointConfidenceThreshold=r.keypointTrackerParams.keypointConfidenceThreshold),r.keypointTrackerParams.keypointFalloff!=null&&(o.keypointTrackerParams.keypointFalloff=r.keypointTrackerParams.keypointFalloff),r.keypointTrackerParams.minNumberOfKeypoints!=null&&(o.keypointTrackerParams.minNumberOfKeypoints=r.keypointTrackerParams.minNumberOfKeypoints)),o}(e.trackerConfig):e.trackerConfig=_o;else{if(e.trackerType!==xi.BoundingBox)throw new Error("Tracker type not supported by MoveNet");e.trackerConfig!=null?e.trackerConfig=(t=e.trackerConfig,Wn(Un,t)):e.trackerConfig=Un}return e}function Wn(i,t){var e={maxTracks:i.maxTracks,maxAge:i.maxAge,minSimilarity:i.minSimilarity};return t.maxTracks!=null&&(e.maxTracks=t.maxTracks),t.maxAge!=null&&(e.maxAge=t.maxAge),t.minSimilarity!=null&&(e.minSimilarity=t.minSimilarity),e}var bp=function(){function i(t,e){this.moveNetModel=t,this.modelInputResolution={height:0,width:0},this.keypointIndexByName=Mn(Me.MoveNet),e.modelType==="SinglePose.Lightning"?(this.modelInputResolution.width=192,this.modelInputResolution.height=192):e.modelType==="SinglePose.Thunder"&&(this.modelInputResolution.width=256,this.modelInputResolution.height=256),this.multiPoseModel=e.modelType==="MultiPose.Lightning",this.multiPoseModel||(this.keypointFilter=new Eo(On),this.cropRegionFilterYMin=new Vt(.9),this.cropRegionFilterXMin=new Vt(.9),this.cropRegionFilterYMax=new Vt(.9),this.cropRegionFilterXMax=new Vt(.9)),this.enableSmoothing=e.enableSmoothing,e.minPoseScore?this.minPoseScore=e.minPoseScore:this.minPoseScore=.25,e.multiPoseMaxDimension?this.multiPoseMaxDimension=e.multiPoseMaxDimension:this.multiPoseMaxDimension=256,this.enableTracking=e.enableTracking,this.multiPoseModel&&this.enableTracking&&(e.trackerType===xi.Keypoint?this.tracker=new vp(e.trackerConfig):e.trackerType===xi.BoundingBox&&(this.tracker=new wp(e.trackerConfig)),this.enableSmoothing&&(this.keypointFilterMap=new Map))}return i.prototype.runSinglePersonPoseModel=function(t){return ce(this,void 0,void 0,function(){var e,r,o,s,a;return he(this,function(u){switch(u.label){case 0:if((e=this.moveNetModel.execute(t)).shape.length!==4||e.shape[0]!==1||e.shape[1]!==1||e.shape[2]!==17||e.shape[3]!==3)throw e.dispose(),new Error("Unexpected output shape from model: [".concat(e.shape,"]"));return(0,l.N_N)()==="webgpu"?[3,1]:(r=e.dataSync(),[3,3]);case 1:return[4,e.data()];case 2:r=u.sent(),u.label=3;case 3:for(e.dispose(),o={keypoints:[],score:0},s=0,a=0;a<17;++a)o.keypoints[a]={y:r[3*a],x:r[3*a+1],score:r[3*a+2]},o.keypoints[a].score>.2&&(++s,o.score+=o.keypoints[a].score);return s>0&&(o.score/=s),[2,o]}})})},i.prototype.runMultiPersonPoseModel=function(t){return ce(this,void 0,void 0,function(){var e,r,o,s,a,u,h,d;return he(this,function(f){switch(f.label){case 0:if((e=this.moveNetModel.execute(t)).shape.length!==3||e.shape[0]!==1||e.shape[2]!==56)throw e.dispose(),new Error("Unexpected output shape from model: [".concat(e.shape,"]"));return(0,l.N_N)()==="webgpu"?[3,1]:(r=e.dataSync(),[3,3]);case 1:return[4,e.data()];case 2:r=f.sent(),f.label=3;case 3:for(e.dispose(),o=[],s=r.length/56,a=0;a<s;++a)for(o[a]={keypoints:[]},u=56*a+51,o[a].box={yMin:r[u],xMin:r[u+1],yMax:r[u+2],xMax:r[u+3],width:r[u+3]-r[u+1],height:r[u+2]-r[u]},h=56*a+55,o[a].score=r[h],o[a].keypoints=[],d=0;d<17;++d)o[a].keypoints[d]={y:r[56*a+3*d],x:r[56*a+3*d+1],score:r[56*a+3*d+2]};return[2,o]}})})},i.prototype.estimatePoses=function(t,e,r){return e===void 0&&(e=Bn),ce(this,void 0,void 0,function(){var o,s,a,u,h,d;return he(this,function(f){switch(f.label){case 0:return e=function(p){return p==null?Bn:ge({},p)}(e),t==null?(this.reset(),[2,[]]):(r==null?Rn(t)&&(r=1e6*t.currentTime):r*=1e3,o=Ao(t),s=ur(o),a=(0,l.dt4)(o,0),t instanceof l.esB||o.dispose(),u=[],this.multiPoseModel?[3,2]:[4,this.estimateSinglePose(a,s,r)]);case 1:return u=f.sent(),[3,4];case 2:return[4,this.estimateMultiplePoses(a,s,r)];case 3:u=f.sent(),f.label=4;case 4:for(h=0;h<u.length;++h)for(d=0;d<u[h].keypoints.length;++d)u[h].keypoints[d].name=ft[d],u[h].keypoints[d].y*=s.height,u[h].keypoints[d].x*=s.width;return[2,u]}})})},i.prototype.estimateSinglePose=function(t,e,r){return ce(this,void 0,void 0,function(){var o,s,a,u,h=this;return he(this,function(d){switch(d.label){case 0:return this.cropRegion||(this.cropRegion=Bo(this.cropRegion==null,e)),o=(0,l.lub)(function(){var f=(0,l.odF)([[h.cropRegion.yMin,h.cropRegion.xMin,h.cropRegion.yMax,h.cropRegion.xMax]]),p=(0,l.lls)([1],"int32"),g=[h.modelInputResolution.height,h.modelInputResolution.width];return(0,l.pju)(l.BHj.cropAndResize(t,f,p,g,"bilinear",0),"int32")}),t.dispose(),[4,this.runSinglePersonPoseModel(o)];case 1:if(s=d.sent(),o.dispose(),s.score<this.minPoseScore)return this.reset(),[2,[]];for(a=0;a<s.keypoints.length;++a)s.keypoints[a].y=this.cropRegion.yMin+s.keypoints[a].y*this.cropRegion.height,s.keypoints[a].x=this.cropRegion.xMin+s.keypoints[a].x*this.cropRegion.width;return r!=null&&this.enableSmoothing&&(s.keypoints=this.keypointFilter.apply(s.keypoints,r,1)),u=Cp(this.cropRegion,s.keypoints,this.keypointIndexByName,e),this.cropRegion=this.filterCropRegion(u),[2,[s]]}})})},i.prototype.estimateMultiplePoses=function(t,e,r){return ce(this,void 0,void 0,function(){var o,s,a,u,h,d,f,p,g,x,w,v=this;return he(this,function(k){switch(k.label){case 0:return e.width>e.height?(s=this.multiPoseMaxDimension,a=Math.round(this.multiPoseMaxDimension*e.height/e.width),o=l.BHj.resizeBilinear(t,[a,s]),h=s,d=32*Math.ceil(a/32),u=(0,l.vku)(o,[[0,0],[0,d-a],[0,0],[0,0]])):(s=Math.round(this.multiPoseMaxDimension*e.width/e.height),a=this.multiPoseMaxDimension,o=l.BHj.resizeBilinear(t,[a,s]),h=32*Math.ceil(s/32),d=a,u=(0,l.vku)(o,[[0,0],[0,0],[0,h-s],[0,0]])),o.dispose(),t.dispose(),f=(0,l.pju)(u,"int32"),u.dispose(),[4,this.runMultiPersonPoseModel(f)];case 1:for(p=k.sent(),f.dispose(),p=p.filter(function(P){return P.score>=v.minPoseScore}),x=0;x<p.length;++x)for(g=0;g<p[x].keypoints.length;++g)p[x].keypoints[g].y*=d/a,p[x].keypoints[g].x*=h/s;if(this.enableTracking&&(this.tracker.apply(p,r),this.enableSmoothing)){for(x=0;x<p.length;++x)this.keypointFilterMap.has(p[x].id)||this.keypointFilterMap.set(p[x].id,new Eo(On)),p[x].keypoints=this.keypointFilterMap.get(p[x].id).apply(p[x].keypoints,r,1);w=this.tracker.getTrackIDs(),this.keypointFilterMap.forEach(function(P,D){w.has(D)||v.keypointFilterMap.delete(D)})}return[2,p]}})})},i.prototype.filterCropRegion=function(t){if(t){var e=this.cropRegionFilterYMin.apply(t.yMin),r=this.cropRegionFilterXMin.apply(t.xMin),o=this.cropRegionFilterYMax.apply(t.yMax),s=this.cropRegionFilterXMax.apply(t.xMax);return{yMin:e,xMin:r,yMax:o,xMax:s,height:o-e,width:s-r}}return this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset(),null},i.prototype.dispose=function(){this.moveNetModel.dispose()},i.prototype.reset=function(){this.cropRegion=null,this.resetFilters()},i.prototype.resetFilters=function(){this.keypointFilter.reset(),this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset()},i}();function kp(i){return i===void 0&&(i=_n),ce(this,void 0,void 0,function(){var t,e,r,o;return he(this,function(s){switch(s.label){case 0:return t=Sp(i),r=!0,t.modelUrl?(r=typeof t.modelUrl=="string"&&t.modelUrl.indexOf("https://tfhub.dev")>-1,[4,(0,xe.YL)(t.modelUrl,{fromTFHub:r})]):[3,2];case 1:return e=s.sent(),[3,4];case 2:return o=void 0,t.modelType==="SinglePose.Lightning"?o="https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4":t.modelType==="SinglePose.Thunder"?o="https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4":t.modelType==="MultiPose.Lightning"&&(o="https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"),[4,(0,xe.YL)(o,{fromTFHub:r})];case 3:e=s.sent(),s.label=4;case 4:return(0,l.N_N)()==="webgl"&&(0,l.OBj)().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",0),[2,new bp(e,t)]}})})}var Vn={architecture:"MobileNetV1",outputStride:16,multiplier:.75,inputResolution:{height:257,width:257}},Hn=["MobileNetV1","ResNet50"],Gn={MobileNetV1:[8,16],ResNet50:[16]},Ip=[8,16,32],jn={MobileNetV1:[.5,.75,1],ResNet50:[1]},Xn=[1,2,4],Kn={maxPoses:1,flipHorizontal:!1},Rp={maxPoses:5,flipHorizontal:!1,scoreThreshold:.5,nmsRadius:20},Pp=[-123.15,-115.9,-103.06];function Oo(i){return Math.floor(i/2)}var Dp=function(){function i(t,e){this.priorityQueue=new Array(t),this.numberOfElements=-1,this.getElementValue=e}return i.prototype.enqueue=function(t){this.priorityQueue[++this.numberOfElements]=t,this.swim(this.numberOfElements)},i.prototype.dequeue=function(){var t=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,t},i.prototype.empty=function(){return this.numberOfElements===-1},i.prototype.size=function(){return this.numberOfElements+1},i.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},i.prototype.max=function(){return this.priorityQueue[0]},i.prototype.swim=function(t){for(;t>0&&this.less(Oo(t),t);)this.exchange(t,Oo(t)),t=Oo(t)},i.prototype.sink=function(t){for(;2*t<=this.numberOfElements;){var e=2*t;if(e<this.numberOfElements&&this.less(e,e+1)&&e++,!this.less(t,e))break;this.exchange(t,e),t=e}},i.prototype.getValueAt=function(t){return this.getElementValue(this.priorityQueue[t])},i.prototype.less=function(t,e){return this.getValueAt(t)<this.getValueAt(e)},i.prototype.exchange=function(t,e){var r=this.priorityQueue[t];this.priorityQueue[t]=this.priorityQueue[e],this.priorityQueue[e]=r},i}();function Ap(i,t,e,r,o,s){for(var a=s.shape,u=a[0],h=a[1],d=!0,f=Math.max(e-o,0),p=Math.min(e+o+1,u),g=f;g<p;++g){for(var x=Math.max(r-o,0),w=Math.min(r+o+1,h),v=x;v<w;++v)if(s.get(g,v,i)>t){d=!1;break}if(!d)break}return d}function Np(i){return ce(this,void 0,void 0,function(){return he(this,function(t){return[2,Promise.all(i.map(function(e){return e.buffer()}))]})})}function Yn(i,t,e,r){return{y:r.get(i,t,e),x:r.get(i,t,e+17)}}function qn(i,t,e){var r=Yn(i.heatmapY,i.heatmapX,i.id,e),o=r.y,s=r.x;return{x:i.heatmapX*t+s,y:i.heatmapY*t+o}}function Qn(i,t,e,r){var o=e.x,s=e.y;return i.some(function(a){var u,h,d,f,p,g,x=a.keypoints;return u=s,h=o,d=x[r].y,f=x[r].x,(p=d-u)*p+(g=f-h)*g<=t})}var Zn=ft.reduce(function(i,t,e){return i[t]=e,i},{}),Jn=[["nose","left_eye"],["left_eye","left_ear"],["nose","right_eye"],["right_eye","right_ear"],["nose","left_shoulder"],["left_shoulder","left_elbow"],["left_elbow","left_wrist"],["left_shoulder","left_hip"],["left_hip","left_knee"],["left_knee","left_ankle"],["nose","right_shoulder"],["right_shoulder","right_elbow"],["right_elbow","right_wrist"],["right_shoulder","right_hip"],["right_hip","right_knee"],["right_knee","right_ankle"]].map(function(i){var t=i[0],e=i[1];return[Zn[t],Zn[e]]}),Uo=Jn.map(function(i){return i[1]}),es=Jn.map(function(i){return i[0]});function ts(i,t,e){return i<t?t:i>e?e:i}function Wo(i,t,e,r){return{y:ts(Math.round(i.y/t),0,e-1),x:ts(Math.round(i.x/t),0,r-1)}}function is(i,t){return{x:i.x+t.x,y:i.y+t.y}}function rs(i,t,e,r,o,s,a,u){u===void 0&&(u=2);for(var h=r.shape,d=h[0],f=h[1],p={y:t.y,x:t.x},g=is(p,function(D,A,F){var $=F.shape[2]/2;return{y:F.get(A.y,A.x,D),x:F.get(A.y,A.x,$+D)}}(i,Wo(p,s,d,f),a)),x=0;x<u;x++){var w=Wo(g,s,d,f),v=Yn(w.y,w.x,e,o);g=is({x:w.x*s,y:w.y*s},{x:v.x,y:v.y})}var k=Wo(g,s,d,f),P=r.get(k.y,k.x,e);return{y:g.y,x:g.x,name:ft[e],score:P}}function Fp(i,t,e,r,o,s){var a=t.shape[2],u=Uo.length,h=new Array(a),d=i.part,f=i.score,p=qn(d,r,e);h[d.id]={score:f,name:ft[d.id],y:p.y,x:p.x};for(var g=u-1;g>=0;--g){var x=Uo[g],w=es[g];h[x]&&!h[w]&&(h[w]=rs(g,h[x],w,t,e,r,s))}for(g=0;g<u;++g)x=es[g],w=Uo[g],h[x]&&!h[w]&&(h[w]=rs(g,h[x],w,t,e,r,o));return h}function $p(i,t,e){return e.reduce(function(r,o,s){var a=o.y,u=o.x,h=o.score;return Qn(i,t,{y:a,x:u},s)||(r+=h),r},0)/e.length}function Tp(i,t,e,r,o,s,a,u){return a===void 0&&(a=.5),u===void 0&&(u=20),ce(this,void 0,void 0,function(){var h,d,f,p,g,x,w,v,k,P,D,A;return he(this,function(F){switch(F.label){case 0:return[4,Np([i,t,e,r])];case 1:for(h=F.sent(),d=h[0],f=h[1],p=h[2],g=h[3],x=[],w=function($,z,E){for(var B=E.shape,L=B[0],H=B[1],Y=B[2],te=new Dp(L*H*Y,function(Ve){return Ve.score}),Z=0;Z<L;++Z)for(var ie=0;ie<H;++ie)for(var de=0;de<Y;++de){var pe=E.get(Z,ie,de);pe<$||Ap(de,pe,Z,ie,z,E)&&te.enqueue({score:pe,part:{heatmapY:Z,heatmapX:ie,id:de}})}return te}(a,1,d),v=u*u;x.length<s&&!w.empty();)k=w.dequeue(),P=qn(k.part,o,f),Qn(x,v,P,k.part.id)||(D=Fp(k,d,f,o,p,g),A=$p(x,v,D),x.push({keypoints:D,score:A}));return[2,x]}})})}function os(){for(var i,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];switch(t.length){case 0:i="fn main() ";break;case 1:i="fn main(".concat(t[0]," : i32)");break;default:throw Error("Unreachable")}return i}var zp=function(){function i(t){this.variableNames=["A","B"],this.size=!0,this.workgroupSize=[32,1,1],this.outputShape=[t[0],1],this.dispatchLayout=V(this.outputShape),this.dispatch=U(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="getpointsConfidenceOp"}return i.prototype.getUserCode=function(){return`
        `.concat(os("index"),` {
          if (index < uniforms.size) {
            let y = B[index * 2];
            let x = B[index * 2 + 1];
            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;
            result[index] = A[outIndex];
          }
        }
        `)},i}();function Ep(i,t){if((0,l.y3$)()instanceof ht)return function(e,r){var o=(0,l.y3$)(),s=new zp(r.shape),a=o.runWebGPUProgram(s,[e,r],"float32");return(0,l.SRH)().makeTensorFromTensorInfo(a)}(i,t);throw new Error("getPointsConfidenceWebGPU is not supported in this backend!")}var Mp=function(){function i(t){if(this.variableNames=["A","B"],this.size=!0,this.supportedLastDimension=2,t.length!==2||t[1]!==this.supportedLastDimension)throw new Error("GetOffsetVectorsProgram only supports shape of [x, ".concat(this.supportedLastDimension,"], but current shape is ").concat(t));this.workgroupSize=[32,1,1],this.outputShape=t;var e=[t[0],1];this.dispatchLayout=V(e),this.dispatch=U(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="GetOffsetVectors"}return i.prototype.getUserCode=function(){return`
    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {
      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;
      let outIndexX = outIndexY + uniforms.bShape.z;
      let outY = i32(B[outIndexY]);
      let outX = i32(B[outIndexX]);
      return vec2<i32>(outY, outX);
    }

    `.concat(os("index"),` {
      if (index < uniforms.size) {
        let indexY = index * `).concat(this.supportedLastDimension,`;
        let indexX = indexY + 1;
        let heatmapY = A[indexY];
        let heatmapX = A[indexX];
        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);
        result[indexY] = f32(out[0]);
        result[indexX] = f32(out[1]);
      }
    }
    `)},i}();function Lp(i,t){if((0,l.y3$)()instanceof ht)return function(e,r){var o=(0,l.y3$)(),s=new Mp(e.shape),a=o.runWebGPUProgram(s,[e,r],"float32");return(0,l.SRH)().makeTensorFromTensorInfo(a)}(i,t);throw new Error("getOffsetVectorsGPU is not supported in this backend!")}function ns(i){var t=i.shape,e=t[0],r=t[1],o=t[2];return(0,l.lub)(function(){var s,a,u=(0,l.XLQ)(i,[e*r,o]),h=(0,l.NqF)(u,0),d=(0,l.dt4)((0,l.hiC)(h,(0,l.iD$)(r,"int32")),1),f=(0,l.dt4)((s=h,a=r,(0,l.lub)(function(){var p=(0,l.hiC)(s,(0,l.iD$)(a,"int32"));return(0,l.luU)(s,(0,l.dC7)(p,(0,l.iD$)(a,"int32")))})),1);return(0,l.zoF)([d,f],1)})}function _p(i,t,e){return(0,l.lub)(function(){var r=function(o,s){for(var a=[],u=0;u<ft.length;u++){var h=o.get(u,0).valueOf(),d=o.get(u,1).valueOf(),f=Bp(h,d,u,s),p=f.x,g=f.y;a.push(g),a.push(p)}return(0,l.odF)(a,[ft.length,2])}(i,e);return(0,l.IHx)((0,l.pju)((0,l.dC7)(i.toTensor(),(0,l.iD$)(t,"int32")),"float32"),r)})}function Bp(i,t,e,r){return{y:r.get(i,t,e),x:r.get(i,t,e+ft.length)}}function Op(i,t,e){return ce(this,void 0,void 0,function(){var r,o,s,a,u,h,d,f,p,g;return he(this,function(x){switch(x.label){case 0:return r=0,o=ns(i),[4,Promise.all([i.buffer(),t.buffer(),o.buffer()])];case 1:return s=x.sent(),a=s[0],u=s[1],h=s[2],[4,(d=_p(h,e,u)).buffer()];case 2:return f=x.sent(),p=Array.from(function(w,v){for(var k=v.shape[0],P=new Float32Array(k),D=0;D<k;D++){var A=v.get(D,0),F=v.get(D,1);P[D]=w.get(A,F,D)}return P}(a,h)),g=p.map(function(w,v){return r+=w,{y:f.get(v,0),x:f.get(v,1),score:w,name:ft[v]}}),o.dispose(),d.dispose(),[2,{keypoints:g,score:r/g.length}]}})})}function Up(i,t,e){return ce(this,void 0,void 0,function(){var r,o,s;return he(this,function(a){return r=ns(i),o=function(u,h,d){return(0,l.lub)(function(){var f=Lp(u,d);return(0,l.IHx)((0,l.pju)((0,l.dC7)(u,(0,l.iD$)(h,"int32")),"float32"),f)})}(r,e,t),s=Ep(i,r),[2,[o,s]]})})}function ss(i,t){return(i-1)%t==0}var as="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",us="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";function ls(i,t){return function(e,r){return(e-1)%r==0}(i,t)?i:Math.floor(i/t)*t+1}var cs=function(){function i(t,e){this.posenetModel=t;var r=this.posenetModel.inputs[0].shape;l.D5U.assert(r[1]===-1&&r[2]===-1,function(){return"Input shape [".concat(r[1],", ").concat(r[2],"] ")+"must both be equal to or -1"});var o,s,a=(o=e.inputResolution,s=e.outputStride,{height:ls(o.height,s),width:ls(o.width,s)});(function(u){l.D5U.assert(Ip.indexOf(u)>=0,function(){return"outputStride of ".concat(u," is invalid. ")+"It must be either 8 or 16."})})(e.outputStride),function(u,h){l.D5U.assert(ss(u.height,h),function(){return"height of ".concat(u.height," is invalid for output stride ")+"".concat(h,".")}),l.D5U.assert(ss(u.width,h),function(){return"width of ".concat(u.width," is invalid for output stride ")+"".concat(h,".")})}(a,e.outputStride),this.inputResolution=a,this.outputStride=e.outputStride,this.architecture=e.architecture}return i.prototype.estimatePoses=function(t,e){return e===void 0&&(e=Kn),ce(this,void 0,void 0,function(){return he(this,function(r){return[2,this.estimatePosesGPU(t,e,!1)]})})},i.prototype.estimatePosesGPU=function(t,e,r){return e===void 0&&(e=Kn),r===void 0&&(r=!1),ce(this,void 0,void 0,function(){var o,s,a,u,h,d,f,p,g,x,w,v,k,P,D,A,F,$;return he(this,function(z){switch(z.label){case 0:return o=function(E){var B=E;if(B.maxPoses==null&&(B.maxPoses=1),B.maxPoses<=0)throw new Error("Invalid maxPoses ".concat(B.maxPoses,". Should be > 0."));if(B.maxPoses>1){if((B=ge(ge({},Rp),B)).scoreThreshold<0||B.scoreThreshold>1)throw new Error("Invalid scoreThreshold ".concat(B.scoreThreshold,". ")+"Should be in range [0.0, 1.0]");if(B.nmsRadius<=0)throw new Error("Invalid nmsRadius ".concat(B.nmsRadius,"."))}return B}(e),t==null?[2,r?[[],[]]:[]]:(this.maxPoses=o.maxPoses,s=To(t,{outputTensorSize:this.inputResolution,keepAspectRatio:!0,borderMode:"replicate"}),a=s.imageTensor,u=s.padding,h=this.architecture==="ResNet50"?(0,l.IHx)(a,Pp):kn(a,[-1,1]),d=this.posenetModel.predict(h),this.architecture==="ResNet50"?(f=(0,l.L9e)(d[2],[0]),p=(0,l.L9e)(d[3],[0]),g=(0,l.L9e)(d[0],[0]),x=(0,l.L9e)(d[1],[0])):(f=(0,l.L9e)(d[0],[0]),p=(0,l.L9e)(d[1],[0]),g=(0,l.L9e)(d[2],[0]),x=(0,l.L9e)(d[3],[0])),w=(0,l.XD2)(p),this.maxPoses!==1?[3,5]:r?[4,Up(w,f,this.outputStride)]:[3,2]);case 1:return k=z.sent(),D=k[0],P=k[1],v=[D,P],[3,4];case 2:return[4,Op(w,f,this.outputStride)];case 3:D=z.sent(),v=[D],z.label=4;case 4:return[3,7];case 5:if(r)throw new Error("GPU renderer only supports single pose!");return[4,Tp(w,f,g,x,this.outputStride,this.maxPoses,o.scoreThreshold,o.nmsRadius)];case 6:v=z.sent(),z.label=7;case 7:if(r){if(o.flipHorizontal===!0)throw new Error("flipHorizontal is not supported!");A=this.getCanvasInfo(ur(t),this.inputResolution,u)}else $=ur(t),F=function(E,B,L,H){var Y=B.height,te=B.width,Z=Y/(L.height*(1-H.top-H.bottom)),ie=te/(L.width*(1-H.left-H.right)),de=-H.top*L.height,pe=-H.left*L.width;if(ie===1&&Z===1&&de===0&&pe===0)return E;for(var Ve=0,et=E;Ve<et.length;Ve++)for(var tt=0,Ht=et[Ve].keypoints;tt<Ht.length;tt++){var At=Ht[tt];At.x=(At.x+pe)*ie,At.y=(At.y+de)*Z}return E}(v,$,this.inputResolution,u),o.flipHorizontal&&(F=function(E,B){for(var L=0,H=E;L<H.length;L++)for(var Y=0,te=H[L].keypoints;Y<te.length;Y++){var Z=te[Y];Z.x=B.width-1-Z.x}return E}(F,$));return a.dispose(),h.dispose(),(0,l.B90)(d),f.dispose(),p.dispose(),g.dispose(),x.dispose(),w.dispose(),[2,r?[v,A]:F]}})})},i.prototype.getCanvasInfo=function(t,e,r){var o=t.height,s=t.width,a=o/(e.height*(1-r.top-r.bottom)),u=s/(e.width*(1-r.left-r.right)),h=-r.top*e.height;return[-r.left*e.width,h,u,a,t.width,t.height]},i.prototype.dispose=function(){this.posenetModel.dispose()},i.prototype.reset=function(){},i}();function Wp(i){return i===void 0&&(i=Vn),ce(this,void 0,void 0,function(){var t,e,r,o,s;return he(this,function(a){switch(a.label){case 0:return(t=function(f){var p=f||Vn;if(p.architecture==null&&(p.architecture="MobileNetV1"),Hn.indexOf(p.architecture)<0)throw new Error("Invalid architecture ".concat(p.architecture,". ")+"Should be one of ".concat(Hn));if(p.inputResolution==null&&(p.inputResolution={height:257,width:257}),p.outputStride==null&&(p.outputStride=16),Gn[p.architecture].indexOf(p.outputStride)<0)throw new Error("Invalid outputStride ".concat(p.outputStride,". ")+"Should be one of ".concat(Gn[p.architecture]," ")+"for architecture ".concat(p.architecture,"."));if(p.multiplier==null&&(p.multiplier=1),jn[p.architecture].indexOf(p.multiplier)<0)throw new Error("Invalid multiplier ".concat(p.multiplier,". ")+"Should be one of ".concat(jn[p.architecture]," ")+"for architecture ".concat(p.architecture,"."));if(p.quantBytes==null&&(p.quantBytes=4),Xn.indexOf(p.quantBytes)<0)throw new Error("Invalid quantBytes ".concat(p.quantBytes,". ")+"Should be one of ".concat(Xn," ")+"for architecture ".concat(p.architecture,"."));if(p.architecture==="MobileNetV1"&&p.outputStride===32&&p.multiplier!==1)throw new Error("When using an output stride of 32, you must select 1 as the multiplier.");return p}(i)).architecture!=="ResNet50"?[3,2]:(u=t.outputStride,h=t.quantBytes,d="model-stride".concat(u,".json"),e=h===4?us+"float/"+d:us+"quant".concat(h,"/")+d,[4,(0,xe.YL)(t.modelUrl||e)]);case 1:return r=a.sent(),[2,new cs(r,t)];case 2:return o=function(f,p,g){var x={1:"100",.75:"075",.5:"050"},w="model-stride".concat(f,".json");return g===4?as+"float/".concat(x[p],"/")+w:as+"quant".concat(g,"/").concat(x[p],"/")+w}(t.outputStride,t.multiplier,t.quantBytes),[4,(0,xe.YL)(t.modelUrl||o)];case 3:return s=a.sent(),[2,new cs(s,t)]}var u,h,d})})}function Vp(i,t){return ce(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(i){case Me.PoseNet:return[2,Wp(t)];case Me.BlazePose:if(r=void 0,(e=t)!=null){if(e.runtime==="tfjs")return[2,xp(t)];if(e.runtime==="mediapipe")return[2,Hd(t)];r=e.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(r));case Me.MoveNet:return[2,kp(t)];default:throw new Error("".concat(i," is not a supported model name."))}})})}var Xp=null,Kp=null}}]);
