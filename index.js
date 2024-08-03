// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).enum2str=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&o.call(t,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l,f=n()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===f(t)}l=function(){return s(arguments)}();var p=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function y(t){return"number"==typeof t}function d(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function h(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+d(i):d(i)+t,n&&(t="-"+t)),t}var v=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function w(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!y(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=h(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=h(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===m.call(t.specifier)?m.call(r):v.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var j=Math.abs,_=String.prototype.toLowerCase,x=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":j(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=O.call(r,V,"$1e"),r=O.call(r,P,"e"),r=O.call(r,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=O.call(r,S,"e+0$1"),r=O.call(r,E,"e-0$1"),t.alternate&&(r=O.call(r,T,"$1."),r=O.call(r,k,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===x.call(t.specifier)?x.call(r):_.call(r)}function F(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var $=String.fromCharCode,C=Array.isArray;function N(t){return t!=t}function B(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function L(t){var e,r,n,i,o,a,u,c,l,f,s,p,g;if(!C(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(n=t[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+F(g):F(g)+f)),a+=n.arg||"",u+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function W(t){var e,r,n,i;for(r=[],i=0,n=R.exec(t);n;)(e=t.slice(i,R.lastIndex-n[0].length)).length&&r.push(e),r.push(G(n)),i=R.lastIndex,n=R.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function X(t){var e,r;if("string"!=typeof t)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[W(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return L.apply(null,e)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?b:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===Y.call(r))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(z.call(t,e)||D.call(t,e)?(n=t.__proto__,t.__proto__=M,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(t,e,r.get),a&&H&&H.call(t,e,r.set),t};var q=Z;function J(t,e,r){q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function K(t){return"string"==typeof t}var Q=String.prototype.valueOf;var tt=n();function et(t){return"object"==typeof t&&(t instanceof String||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function rt(t){return K(t)||et(t)}function nt(t){return"number"==typeof t}J(rt,"isPrimitive",K),J(rt,"isObject",et);var it=Number,ot=it.prototype.toString;var at=n();function ut(t){return"object"==typeof t&&(t instanceof it||(at?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function ct(t){return nt(t)||ut(t)}function lt(t){return t!=t}function ft(t){return nt(t)&&lt(t)}function st(t){return ut(t)&&lt(t.valueOf())}function pt(t){return ft(t)||st(t)}J(ct,"isPrimitive",nt),J(ct,"isObject",ut),J(pt,"isPrimitive",ft),J(pt,"isObject",st);var gt=Number.POSITIVE_INFINITY,bt=it.NEGATIVE_INFINITY,yt=Math.floor;function dt(t){return yt(t)===t}function ht(t){return t<gt&&t>bt&&dt(t)}function vt(t){return nt(t)&&ht(t)}function mt(t){return ut(t)&&ht(t.valueOf())}function wt(t){return vt(t)||mt(t)}J(wt,"isPrimitive",vt),J(wt,"isObject",mt);var jt=Object.prototype.propertyIsEnumerable;var _t=!jt.call("beep","0");function xt(t,e){var r;return null!=t&&(!(r=jt.call(t,e))&&_t&&rt(t)?!ft(e=+e)&&vt(e)&&e>=0&&e<t.length:r)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var St=p?s:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&dt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!xt(t,"callee")},Et=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}J(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Ot(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Tt));var kt=xt((function(){}),"prototype"),It=!xt({toString:null},"toString"),Pt=9007199254740991;function Vt(t,e,r){var n,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&dt(o.length)&&o.length>=0&&o.length<=Pt||K(t)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!vt(r))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(pt(e)){for(;i<n;i++)if(pt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}var At=/./;function Ft(t){return"boolean"==typeof t}var $t=Boolean,Ct=Boolean.prototype.toString;var Nt=n();function Bt(t){return"object"==typeof t&&(t instanceof $t||(Nt?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Lt(t){return Ft(t)||Bt(t)}J(Lt,"isPrimitive",Ft),J(Lt,"isObject",Bt);var Rt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Wt="object"==typeof global?global:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Ft(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Rt)return Rt;if(Gt)return Gt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function zt(t){var e,r,n,i;if(("Object"===(r=f(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Ht.exec(n.toString()))return e[1]}return Tt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}J(Ut,"REGEXP",Ht);var Dt="function"==typeof At||"object"==typeof Yt||"function"==typeof Mt?function(t){return zt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?zt(t).toLowerCase():e};function qt(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Kt))return!1;for(t in Kt)try{-1===Vt(Jt,t)&&a(Kt,t)&&null!==Kt[t]&&"object"===Dt(Kt[t])&&qt(Kt[t])}catch(t){return!0}return!1}(),te="undefined"!=typeof window;var ee,re=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ee=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return St(e)?t(Et.call(e)):t(e)}:t:function(t){var e,r,n,i,o,u,c;if(i=[],St(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Tt(t))return i;r=kt&&n}for(o in t)r&&"prototype"===o||!a(t,o)||i.push(String(o));if(It)for(e=function(t){if(!1===te&&!Qt)return qt(t);try{return qt(t)}catch(t){return!1}}(t),c=0;c<re.length;c++)u=re[c],e&&"constructor"===u||!a(t,u)||i.push(String(u));return i};var ne=ee;function ie(t){return"function"===Dt(t)}var oe,ae=Object,ue=Object.getPrototypeOf;oe=ie(Object.getPrototypeOf)?ue:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ce=oe;var le=Object.prototype;function fe(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(e=function(t){return null==t?null:(t=ae(t),ce(t))}(t),!e||!a(t,"constructor")&&a(e,"constructor")&&ie(e.constructor)&&"[object Function]"===f(e.constructor)&&a(e,"isPrototypeOf")&&ie(e.isPrototypeOf)&&(e===le||function(t){var e;for(e in t)if(!a(t,e))return!1;return!0}(t)))}var se={all:["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","bool","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],boolean:["bool"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]},pe=/_and_generic$/;function ge(){var t,e,r,n,i;return 0===arguments.length?se.all.slice():(r=!1,t=arguments[0],pe.test(t)&&(n=pe,i="","all"!==(t=t.replace(n,i))&&(r=!0)),e=(e=se[t])?e.slice():[],r&&e.length>0&&e.push("generic"),e)}function be(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ye(t,e,r){q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}J(ge,"enum",be),function(t,e){var r,n,i;for(r=ne(e),i=0;i<r.length;i++)ye(t,n=r[i],e[n])}(ge,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var de=function(t,e){var r,n,i,o,u,c,l,f=!0;if(!Tt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!fe(e))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",e));if(a(e,"duplicates")&&!Ft(f=e.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(n=(r=ne(t)).length,u={},f)for(l=0;l<n;l++)a(u,o=t[i=r[l]])?(c=u[o],Ot(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<n;l++)u[t[i=r[l]]]=i;return u}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});return function(t){var e=de[t];return"string"==typeof e?e:null}}));
//# sourceMappingURL=index.js.map