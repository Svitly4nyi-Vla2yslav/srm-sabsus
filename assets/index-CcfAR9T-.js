function aE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rp={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function oE(){if(Gv)return fl;Gv=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(i,r,o){var c=null;if(o!==void 0&&(c=""+o),r.key!==void 0&&(c=""+r.key),"key"in r){o={};for(var u in r)u!=="key"&&(o[u]=r[u])}else o=r;return r=o.ref,{$$typeof:t,type:i,key:c,ref:r!==void 0?r:null,props:o}}return fl.Fragment=e,fl.jsx=n,fl.jsxs=n,fl}var Yv;function lE(){return Yv||(Yv=1,Rp.exports=oE()),Rp.exports}var w=lE(),Lp={exports:{}},dl={},Dp={exports:{}},_p={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function cE(){return Xv||(Xv=1,function(t){function e(U,J){var ee=U.length;U.push(J);e:for(;0<ee;){var ae=ee-1>>>1,_=U[ae];if(0<r(_,J))U[ae]=J,U[ee]=_,ee=ae;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var J=U[0],ee=U.pop();if(ee!==J){U[0]=ee;e:for(var ae=0,_=U.length,Z=_>>>1;ae<Z;){var oe=2*(ae+1)-1,se=U[oe],ue=oe+1,de=U[ue];if(0>r(se,ee))ue<_&&0>r(de,se)?(U[ae]=de,U[ue]=ee,ae=ue):(U[ae]=se,U[oe]=ee,ae=oe);else if(ue<_&&0>r(de,ee))U[ae]=de,U[ue]=ee,ae=ue;else break e}}return J}function r(U,J){var ee=U.sortIndex-J.sortIndex;return ee!==0?ee:U.id-J.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,g=null,y=3,x=!1,b=!1,S=!1,C=!1,T=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function R(U){for(var J=n(h);J!==null;){if(J.callback===null)i(h);else if(J.startTime<=U)i(h),J.sortIndex=J.expirationTime,e(d,J);else break;J=n(h)}}function k(U){if(S=!1,R(U),!b)if(n(d)!==null)b=!0,P||(P=!0,z());else{var J=n(h);J!==null&&ce(k,J.startTime-U)}}var P=!1,L=-1,I=5,V=-1;function F(){return C?!0:!(t.unstable_now()-V<I)}function N(){if(C=!1,P){var U=t.unstable_now();V=U;var J=!0;try{e:{b=!1,S&&(S=!1,M(L),L=-1),x=!0;var ee=y;try{t:{for(R(U),g=n(d);g!==null&&!(g.expirationTime>U&&F());){var ae=g.callback;if(typeof ae=="function"){g.callback=null,y=g.priorityLevel;var _=ae(g.expirationTime<=U);if(U=t.unstable_now(),typeof _=="function"){g.callback=_,R(U),J=!0;break t}g===n(d)&&i(d),R(U)}else i(d);g=n(d)}if(g!==null)J=!0;else{var Z=n(h);Z!==null&&ce(k,Z.startTime-U),J=!1}}break e}finally{g=null,y=ee,x=!1}J=void 0}}finally{J?z():P=!1}}}var z;if(typeof A=="function")z=function(){A(N)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,$=te.port2;te.port1.onmessage=N,z=function(){$.postMessage(null)}}else z=function(){T(N,0)};function ce(U,J){L=T(function(){U(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_next=function(U){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var ee=y;y=J;try{return U()}finally{y=ee}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=y;y=U;try{return J()}finally{y=ee}},t.unstable_scheduleCallback=function(U,J,ee){var ae=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ae+ee:ae):ee=ae,U){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ee+_,U={id:p++,callback:J,priorityLevel:U,startTime:ee,expirationTime:_,sortIndex:-1},ee>ae?(U.sortIndex=ee,e(h,U),n(d)===null&&U===n(h)&&(S?(M(L),L=-1):S=!0,ce(k,ee-ae))):(U.sortIndex=_,e(d,U),b||x||(b=!0,P||(P=!0,z()))),U},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(U){var J=y;return function(){var ee=y;y=J;try{return U.apply(this,arguments)}finally{y=ee}}}}(_p)),_p}var Qv;function uE(){return Qv||(Qv=1,Dp.exports=cE()),Dp.exports}var zp={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function fE(){if(Zv)return Ae;Zv=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function y(_){return _===null||typeof _!="object"?null:(_=g&&_[g]||_["@@iterator"],typeof _=="function"?_:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function C(_,Z,oe){this.props=_,this.context=Z,this.refs=S,this.updater=oe||x}C.prototype.isReactComponent={},C.prototype.setState=function(_,Z){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,Z,"setState")},C.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function T(){}T.prototype=C.prototype;function M(_,Z,oe){this.props=_,this.context=Z,this.refs=S,this.updater=oe||x}var A=M.prototype=new T;A.constructor=M,b(A,C.prototype),A.isPureReactComponent=!0;var R=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function L(_,Z,oe,se,ue,de){return oe=de.ref,{$$typeof:t,type:_,key:Z,ref:oe!==void 0?oe:null,props:de}}function I(_,Z){return L(_.type,Z,void 0,void 0,void 0,_.props)}function V(_){return typeof _=="object"&&_!==null&&_.$$typeof===t}function F(_){var Z={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(oe){return Z[oe]})}var N=/\/+/g;function z(_,Z){return typeof _=="object"&&_!==null&&_.key!=null?F(""+_.key):Z.toString(36)}function te(){}function $(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(te,te):(_.status="pending",_.then(function(Z){_.status==="pending"&&(_.status="fulfilled",_.value=Z)},function(Z){_.status==="pending"&&(_.status="rejected",_.reason=Z)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function ce(_,Z,oe,se,ue){var de=typeof _;(de==="undefined"||de==="boolean")&&(_=null);var he=!1;if(_===null)he=!0;else switch(de){case"bigint":case"string":case"number":he=!0;break;case"object":switch(_.$$typeof){case t:case e:he=!0;break;case p:return he=_._init,ce(he(_._payload),Z,oe,se,ue)}}if(he)return ue=ue(_),he=se===""?"."+z(_,0):se,R(ue)?(oe="",he!=null&&(oe=he.replace(N,"$&/")+"/"),ce(ue,Z,oe,"",function(Ee){return Ee})):ue!=null&&(V(ue)&&(ue=I(ue,oe+(ue.key==null||_&&_.key===ue.key?"":(""+ue.key).replace(N,"$&/")+"/")+he)),Z.push(ue)),1;he=0;var we=se===""?".":se+":";if(R(_))for(var fe=0;fe<_.length;fe++)se=_[fe],de=we+z(se,fe),he+=ce(se,Z,oe,de,ue);else if(fe=y(_),typeof fe=="function")for(_=fe.call(_),fe=0;!(se=_.next()).done;)se=se.value,de=we+z(se,fe++),he+=ce(se,Z,oe,de,ue);else if(de==="object"){if(typeof _.then=="function")return ce($(_),Z,oe,se,ue);throw Z=String(_),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return he}function U(_,Z,oe){if(_==null)return _;var se=[],ue=0;return ce(_,se,"","",function(de){return Z.call(oe,de,ue++)}),se}function J(_){if(_._status===-1){var Z=_._result;Z=Z(),Z.then(function(oe){(_._status===0||_._status===-1)&&(_._status=1,_._result=oe)},function(oe){(_._status===0||_._status===-1)&&(_._status=2,_._result=oe)}),_._status===-1&&(_._status=0,_._result=Z)}if(_._status===1)return _._result.default;throw _._result}var ee=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function ae(){}return Ae.Children={map:U,forEach:function(_,Z,oe){U(_,function(){Z.apply(this,arguments)},oe)},count:function(_){var Z=0;return U(_,function(){Z++}),Z},toArray:function(_){return U(_,function(Z){return Z})||[]},only:function(_){if(!V(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},Ae.Component=C,Ae.Fragment=n,Ae.Profiler=r,Ae.PureComponent=M,Ae.StrictMode=i,Ae.Suspense=d,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(_){return k.H.useMemoCache(_)}},Ae.cache=function(_){return function(){return _.apply(null,arguments)}},Ae.cloneElement=function(_,Z,oe){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var se=b({},_.props),ue=_.key,de=void 0;if(Z!=null)for(he in Z.ref!==void 0&&(de=void 0),Z.key!==void 0&&(ue=""+Z.key),Z)!P.call(Z,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&Z.ref===void 0||(se[he]=Z[he]);var he=arguments.length-2;if(he===1)se.children=oe;else if(1<he){for(var we=Array(he),fe=0;fe<he;fe++)we[fe]=arguments[fe+2];se.children=we}return L(_.type,ue,void 0,void 0,de,se)},Ae.createContext=function(_){return _={$$typeof:c,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:o,_context:_},_},Ae.createElement=function(_,Z,oe){var se,ue={},de=null;if(Z!=null)for(se in Z.key!==void 0&&(de=""+Z.key),Z)P.call(Z,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ue[se]=Z[se]);var he=arguments.length-2;if(he===1)ue.children=oe;else if(1<he){for(var we=Array(he),fe=0;fe<he;fe++)we[fe]=arguments[fe+2];ue.children=we}if(_&&_.defaultProps)for(se in he=_.defaultProps,he)ue[se]===void 0&&(ue[se]=he[se]);return L(_,de,void 0,void 0,null,ue)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(_){return{$$typeof:u,render:_}},Ae.isValidElement=V,Ae.lazy=function(_){return{$$typeof:p,_payload:{_status:-1,_result:_},_init:J}},Ae.memo=function(_,Z){return{$$typeof:h,type:_,compare:Z===void 0?null:Z}},Ae.startTransition=function(_){var Z=k.T,oe={};k.T=oe;try{var se=_(),ue=k.S;ue!==null&&ue(oe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(ae,ee)}catch(de){ee(de)}finally{k.T=Z}},Ae.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},Ae.use=function(_){return k.H.use(_)},Ae.useActionState=function(_,Z,oe){return k.H.useActionState(_,Z,oe)},Ae.useCallback=function(_,Z){return k.H.useCallback(_,Z)},Ae.useContext=function(_){return k.H.useContext(_)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(_,Z){return k.H.useDeferredValue(_,Z)},Ae.useEffect=function(_,Z,oe){var se=k.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(_,Z)},Ae.useId=function(){return k.H.useId()},Ae.useImperativeHandle=function(_,Z,oe){return k.H.useImperativeHandle(_,Z,oe)},Ae.useInsertionEffect=function(_,Z){return k.H.useInsertionEffect(_,Z)},Ae.useLayoutEffect=function(_,Z){return k.H.useLayoutEffect(_,Z)},Ae.useMemo=function(_,Z){return k.H.useMemo(_,Z)},Ae.useOptimistic=function(_,Z){return k.H.useOptimistic(_,Z)},Ae.useReducer=function(_,Z,oe){return k.H.useReducer(_,Z,oe)},Ae.useRef=function(_){return k.H.useRef(_)},Ae.useState=function(_){return k.H.useState(_)},Ae.useSyncExternalStore=function(_,Z,oe){return k.H.useSyncExternalStore(_,Z,oe)},Ae.useTransition=function(){return k.H.useTransition()},Ae.version="19.1.0",Ae}var Kv;function Ss(){return Kv||(Kv=1,zp.exports=fE()),zp.exports}var jp={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function dE(){if(Wv)return en;Wv=1;var t=Ss();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)h+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(d,h,p){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:h,implementation:p}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,en.createPortal=function(d,h){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return o(d,h,null,p)},en.flushSync=function(d){var h=c.T,p=i.p;try{if(c.T=null,i.p=2,d)return d()}finally{c.T=h,i.p=p,i.d.f()}},en.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(d,h))},en.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},en.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var p=h.as,g=u(p,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;p==="style"?i.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:x}):p==="script"&&i.d.X(d,{crossOrigin:g,integrity:y,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},en.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var p=u(h.as,h.crossOrigin);i.d.M(d,{crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(d)},en.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var p=h.as,g=u(p,h.crossOrigin);i.d.L(d,p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},en.preloadModule=function(d,h){if(typeof d=="string")if(h){var p=u(h.as,h.crossOrigin);i.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(d)},en.requestFormReset=function(d){i.d.r(d)},en.unstable_batchedUpdates=function(d,h){return d(h)},en.useFormState=function(d,h,p){return c.H.useFormState(d,h,p)},en.useFormStatus=function(){return c.H.useHostTransitionStatus()},en.version="19.1.0",en}var $v;function Xm(){if($v)return jp.exports;$v=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),jp.exports=dE(),jp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function hE(){if(Jv)return dl;Jv=1;var t=uE(),e=Ss(),n=Xm();function i(s){var a="https://react.dev/errors/"+s;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function o(s){var a=s,l=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,(a.flags&4098)!==0&&(l=a.return),s=a.return;while(s)}return a.tag===3?l:null}function c(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function u(s){if(o(s)!==s)throw Error(i(188))}function d(s){var a=s.alternate;if(!a){if(a=o(s),a===null)throw Error(i(188));return a!==s?null:s}for(var l=s,f=a;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return u(m),s;if(v===f)return u(m),a;v=v.sibling}throw Error(i(188))}if(l.return!==f.return)l=m,f=v;else{for(var E=!1,O=m.child;O;){if(O===l){E=!0,l=m,f=v;break}if(O===f){E=!0,f=m,l=v;break}O=O.sibling}if(!E){for(O=v.child;O;){if(O===l){E=!0,l=v,f=m;break}if(O===f){E=!0,f=v,l=m;break}O=O.sibling}if(!E)throw Error(i(189))}}if(l.alternate!==f)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?s:a}function h(s){var a=s.tag;if(a===5||a===26||a===27||a===6)return s;for(s=s.child;s!==null;){if(a=h(s),a!==null)return a;s=s.sibling}return null}var p=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),A=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function z(s){return s===null||typeof s!="object"?null:(s=N&&s[N]||s["@@iterator"],typeof s=="function"?s:null)}var te=Symbol.for("react.client.reference");function $(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===te?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case b:return"Fragment";case C:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case P:return"SuspenseList";case V:return"Activity"}if(typeof s=="object")switch(s.$$typeof){case x:return"Portal";case A:return(s.displayName||"Context")+".Provider";case M:return(s._context.displayName||"Context")+".Consumer";case R:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case L:return a=s.displayName||null,a!==null?a:$(s.type)||"Memo";case I:a=s._payload,s=s._init;try{return $(s(a))}catch{}}return null}var ce=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ae=[],_=-1;function Z(s){return{current:s}}function oe(s){0>_||(s.current=ae[_],ae[_]=null,_--)}function se(s,a){_++,ae[_]=s.current,s.current=a}var ue=Z(null),de=Z(null),he=Z(null),we=Z(null);function fe(s,a){switch(se(he,a),se(de,s),se(ue,null),a.nodeType){case 9:case 11:s=(s=a.documentElement)&&(s=s.namespaceURI)?xv(s):0;break;default:if(s=a.tagName,a=a.namespaceURI)a=xv(a),s=bv(a,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}oe(ue),se(ue,s)}function Ee(){oe(ue),oe(de),oe(he)}function $e(s){s.memoizedState!==null&&se(we,s);var a=ue.current,l=bv(a,s.type);a!==l&&(se(de,s),se(ue,l))}function Je(s){de.current===s&&(oe(ue),oe(de)),we.current===s&&(oe(we),al._currentValue=ee)}var Be=Object.prototype.hasOwnProperty,Pe=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,wt=t.unstable_shouldYield,mn=t.unstable_requestPaint,St=t.unstable_now,Yr=t.unstable_getCurrentPriorityLevel,or=t.unstable_ImmediatePriority,fo=t.unstable_UserBlockingPriority,lr=t.unstable_NormalPriority,Sd=t.unstable_LowPriority,Xr=t.unstable_IdlePriority,cr=t.log,Es=t.unstable_setDisableYieldValue,Fn=null,Zt=null;function oi(s){if(typeof cr=="function"&&Es(s),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(Fn,s)}catch{}}var Kt=Math.clz32?Math.clz32:Qr,ho=Math.log,gc=Math.LN2;function Qr(s){return s>>>=0,s===0?32:31-(ho(s)/gc|0)|0}var Gi=256,gn=4194304;function yn(s){var a=s&42;if(a!==0)return a;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function Cs(s,a,l){var f=s.pendingLanes;if(f===0)return 0;var m=0,v=s.suspendedLanes,E=s.pingedLanes;s=s.warmLanes;var O=f&134217727;return O!==0?(f=O&~v,f!==0?m=yn(f):(E&=O,E!==0?m=yn(E):l||(l=O&~s,l!==0&&(m=yn(l))))):(O=f&~v,O!==0?m=yn(O):E!==0?m=yn(E):l||(l=f&~s,l!==0&&(m=yn(l)))),m===0?0:a!==0&&a!==m&&(a&v)===0&&(v=m&-m,l=a&-a,v>=l||v===32&&(l&4194048)!==0)?a:m}function Yi(s,a){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&a)===0}function Td(s,a){switch(s){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(){var s=Gi;return Gi<<=1,(Gi&4194048)===0&&(Gi=256),s}function fr(){var s=gn;return gn<<=1,(gn&62914560)===0&&(gn=4194304),s}function po(s){for(var a=[],l=0;31>l;l++)a.push(s);return a}function li(s,a){s.pendingLanes|=a,a!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function Ed(s,a,l,f,m,v){var E=s.pendingLanes;s.pendingLanes=l,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=l,s.entangledLanes&=l,s.errorRecoveryDisabledLanes&=l,s.shellSuspendCounter=0;var O=s.entanglements,B=s.expirationTimes,Q=s.hiddenUpdates;for(l=E&~l;0<l;){var ne=31-Kt(l),re=1<<ne;O[ne]=0,B[ne]=-1;var K=Q[ne];if(K!==null)for(Q[ne]=null,ne=0;ne<K.length;ne++){var W=K[ne];W!==null&&(W.lane&=-536870913)}l&=~re}f!==0&&yc(s,f,0),v!==0&&m===0&&s.tag!==0&&(s.suspendedLanes|=v&~(E&~a))}function yc(s,a,l){s.pendingLanes|=a,s.suspendedLanes&=~a;var f=31-Kt(a);s.entangledLanes|=a,s.entanglements[f]=s.entanglements[f]|1073741824|l&4194090}function gt(s,a){var l=s.entangledLanes|=a;for(s=s.entanglements;l;){var f=31-Kt(l),m=1<<f;m&a|s[f]&a&&(s[f]|=a),l&=~m}}function Ai(s){switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=128;break;case 268435456:s=134217728;break;default:s=0}return s}function mo(s){return s&=-s,2<s?8<s?(s&134217727)!==0?32:268435456:8:2}function go(){var s=J.p;return s!==0?s:(s=window.event,s===void 0?32:Iv(s.type))}function yo(s,a){var l=J.p;try{return J.p=s,a()}finally{J.p=l}}var ci=Math.random().toString(36).slice(2),Rt="__reactFiber$"+ci,Wt="__reactProps$"+ci,Ht="__reactContainer$"+ci,Mi="__reactEvents$"+ci,vc="__reactListeners$"+ci,xc="__reactHandles$"+ci,Zr="__reactResources$"+ci,As="__reactMarker$"+ci;function On(s){delete s[Rt],delete s[Wt],delete s[Mi],delete s[vc],delete s[xc]}function Xi(s){var a=s[Rt];if(a)return a;for(var l=s.parentNode;l;){if(a=l[Ht]||l[Rt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(s=Ev(s);s!==null;){if(l=s[Rt])return l;s=Ev(s)}return a}s=l,l=s.parentNode}return null}function Qi(s){if(s=s[Rt]||s[Ht]){var a=s.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return s}return null}function Ms(s){var a=s.tag;if(a===5||a===26||a===27||a===6)return s.stateNode;throw Error(i(33))}function Zi(s){var a=s[Zr];return a||(a=s[Zr]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Tt(s){s[As]=!0}var ge=new Set,q={};function le(s,a){pe(s,a),pe(s+"Capture",a)}function pe(s,a){for(q[s]=a,s=0;s<a.length;s++)ge.add(a[s])}var tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lt={},dt={};function $t(s){return Be.call(dt,s)?!0:Be.call(Lt,s)?!1:tt.test(s)?dt[s]=!0:(Lt[s]=!0,!1)}function vn(s,a,l){if($t(a))if(l===null)s.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":s.removeAttribute(a);return;case"boolean":var f=a.toLowerCase().slice(0,5);if(f!=="data-"&&f!=="aria-"){s.removeAttribute(a);return}}s.setAttribute(a,""+l)}}function Oi(s,a,l){if(l===null)s.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(a);return}s.setAttribute(a,""+l)}}function kn(s,a,l,f){if(f===null)s.removeAttribute(l);else{switch(typeof f){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(l);return}s.setAttributeNS(a,l,""+f)}}var Et,vo;function Ki(s){if(Et===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Et=a&&a[1]||"",vo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+s+vo}var Cd=!1;function Ad(s,a){if(!s||Cd)return"";Cd=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var f={DetermineComponentFrameRoot:function(){try{if(a){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(W){var K=W}Reflect.construct(s,[],re)}else{try{re.call()}catch(W){K=W}s.call(re.prototype)}}else{try{throw Error()}catch(W){K=W}(re=s())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(W){if(W&&K&&typeof W.stack=="string")return[W.stack,K.stack]}return[null,null]}};f.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(f.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(f.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var v=f.DetermineComponentFrameRoot(),E=v[0],O=v[1];if(E&&O){var B=E.split(`
`),Q=O.split(`
`);for(m=f=0;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;for(;m<Q.length&&!Q[m].includes("DetermineComponentFrameRoot");)m++;if(f===B.length||m===Q.length)for(f=B.length-1,m=Q.length-1;1<=f&&0<=m&&B[f]!==Q[m];)m--;for(;1<=f&&0<=m;f--,m--)if(B[f]!==Q[m]){if(f!==1||m!==1)do if(f--,m--,0>m||B[f]!==Q[m]){var ne=`
`+B[f].replace(" at new "," at ");return s.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",s.displayName)),ne}while(1<=f&&0<=m);break}}}finally{Cd=!1,Error.prepareStackTrace=l}return(l=s?s.displayName||s.name:"")?Ki(l):""}function eT(s){switch(s.tag){case 26:case 27:case 5:return Ki(s.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 15:return Ad(s.type,!1);case 11:return Ad(s.type.render,!1);case 1:return Ad(s.type,!0);case 31:return Ki("Activity");default:return""}}function h2(s){try{var a="";do a+=eT(s),s=s.return;while(s);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Gn(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function p2(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function tT(s){var a=p2(s)?"checked":"value",l=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),f=""+s[a];if(!s.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return m.call(this)},set:function(E){f=""+E,v.call(this,E)}}),Object.defineProperty(s,a,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function bc(s){s._valueTracker||(s._valueTracker=tT(s))}function m2(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var l=a.getValue(),f="";return s&&(f=p2(s)?s.checked?"true":"false":s.value),s=f,s!==l?(a.setValue(s),!0):!1}function wc(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var nT=/[\n"\\]/g;function Yn(s){return s.replace(nT,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Md(s,a,l,f,m,v,E,O){s.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?s.type=E:s.removeAttribute("type"),a!=null?E==="number"?(a===0&&s.value===""||s.value!=a)&&(s.value=""+Gn(a)):s.value!==""+Gn(a)&&(s.value=""+Gn(a)):E!=="submit"&&E!=="reset"||s.removeAttribute("value"),a!=null?Od(s,E,Gn(a)):l!=null?Od(s,E,Gn(l)):f!=null&&s.removeAttribute("value"),m==null&&v!=null&&(s.defaultChecked=!!v),m!=null&&(s.checked=m&&typeof m!="function"&&typeof m!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?s.name=""+Gn(O):s.removeAttribute("name")}function g2(s,a,l,f,m,v,E,O){if(v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(s.type=v),a!=null||l!=null){if(!(v!=="submit"&&v!=="reset"||a!=null))return;l=l!=null?""+Gn(l):"",a=a!=null?""+Gn(a):l,O||a===s.value||(s.value=a),s.defaultValue=a}f=f??m,f=typeof f!="function"&&typeof f!="symbol"&&!!f,s.checked=O?s.checked:!!f,s.defaultChecked=!!f,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(s.name=E)}function Od(s,a,l){a==="number"&&wc(s.ownerDocument)===s||s.defaultValue===""+l||(s.defaultValue=""+l)}function Kr(s,a,l,f){if(s=s.options,a){a={};for(var m=0;m<l.length;m++)a["$"+l[m]]=!0;for(l=0;l<s.length;l++)m=a.hasOwnProperty("$"+s[l].value),s[l].selected!==m&&(s[l].selected=m),m&&f&&(s[l].defaultSelected=!0)}else{for(l=""+Gn(l),a=null,m=0;m<s.length;m++){if(s[m].value===l){s[m].selected=!0,f&&(s[m].defaultSelected=!0);return}a!==null||s[m].disabled||(a=s[m])}a!==null&&(a.selected=!0)}}function y2(s,a,l){if(a!=null&&(a=""+Gn(a),a!==s.value&&(s.value=a),l==null)){s.defaultValue!==a&&(s.defaultValue=a);return}s.defaultValue=l!=null?""+Gn(l):""}function v2(s,a,l,f){if(a==null){if(f!=null){if(l!=null)throw Error(i(92));if(ce(f)){if(1<f.length)throw Error(i(93));f=f[0]}l=f}l==null&&(l=""),a=l}l=Gn(a),s.defaultValue=l,f=s.textContent,f===l&&f!==""&&f!==null&&(s.value=f)}function Wr(s,a){if(a){var l=s.firstChild;if(l&&l===s.lastChild&&l.nodeType===3){l.nodeValue=a;return}}s.textContent=a}var iT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function x2(s,a,l){var f=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?f?s.setProperty(a,""):a==="float"?s.cssFloat="":s[a]="":f?s.setProperty(a,l):typeof l!="number"||l===0||iT.has(a)?a==="float"?s.cssFloat=l:s[a]=(""+l).trim():s[a]=l+"px"}function b2(s,a,l){if(a!=null&&typeof a!="object")throw Error(i(62));if(s=s.style,l!=null){for(var f in l)!l.hasOwnProperty(f)||a!=null&&a.hasOwnProperty(f)||(f.indexOf("--")===0?s.setProperty(f,""):f==="float"?s.cssFloat="":s[f]="");for(var m in a)f=a[m],a.hasOwnProperty(m)&&l[m]!==f&&x2(s,m,f)}else for(var v in a)a.hasOwnProperty(v)&&x2(s,v,a[v])}function kd(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sc(s){return rT.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}var Rd=null;function Ld(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var $r=null,Jr=null;function w2(s){var a=Qi(s);if(a&&(s=a.stateNode)){var l=s[Wt]||null;e:switch(s=a.stateNode,a.type){case"input":if(Md(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=s;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Yn(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var f=l[a];if(f!==s&&f.form===s.form){var m=f[Wt]||null;if(!m)throw Error(i(90));Md(f,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(a=0;a<l.length;a++)f=l[a],f.form===s.form&&m2(f)}break e;case"textarea":y2(s,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Kr(s,!!l.multiple,a,!1)}}}var Dd=!1;function S2(s,a,l){if(Dd)return s(a,l);Dd=!0;try{var f=s(a);return f}finally{if(Dd=!1,($r!==null||Jr!==null)&&(ou(),$r&&(a=$r,s=Jr,Jr=$r=null,w2(a),s)))for(a=0;a<s.length;a++)w2(s[a])}}function xo(s,a){var l=s.stateNode;if(l===null)return null;var f=l[Wt]||null;if(f===null)return null;l=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(s=s.type,f=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!f;break e;default:s=!1}if(s)return null;if(l&&typeof l!="function")throw Error(i(231,a,typeof l));return l}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=!1;if(Wi)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){_d=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{_d=!1}var Os=null,zd=null,Tc=null;function T2(){if(Tc)return Tc;var s,a=zd,l=a.length,f,m="value"in Os?Os.value:Os.textContent,v=m.length;for(s=0;s<l&&a[s]===m[s];s++);var E=l-s;for(f=1;f<=E&&a[l-f]===m[v-f];f++);return Tc=m.slice(s,1<f?1-f:void 0)}function Ec(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function Cc(){return!0}function E2(){return!1}function xn(s){function a(l,f,m,v,E){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var O in s)s.hasOwnProperty(O)&&(l=s[O],this[O]=l?l(v):v[O]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Cc:E2,this.isPropagationStopped=E2,this}return p(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Cc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Cc)},persist:function(){},isPersistent:Cc}),a}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=xn(dr),wo=p({},dr,{view:0,detail:0}),aT=xn(wo),jd,Pd,So,Mc=p({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==So&&(So&&s.type==="mousemove"?(jd=s.screenX-So.screenX,Pd=s.screenY-So.screenY):Pd=jd=0,So=s),jd)},movementY:function(s){return"movementY"in s?s.movementY:Pd}}),C2=xn(Mc),oT=p({},Mc,{dataTransfer:0}),lT=xn(oT),cT=p({},wo,{relatedTarget:0}),Nd=xn(cT),uT=p({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),fT=xn(uT),dT=p({},dr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),hT=xn(dT),pT=p({},dr,{data:0}),A2=xn(pT),mT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vT(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=yT[s])?!!a[s]:!1}function Bd(){return vT}var xT=p({},wo,{key:function(s){if(s.key){var a=mT[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=Ec(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?gT[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(s){return s.type==="keypress"?Ec(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Ec(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),bT=xn(xT),wT=p({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M2=xn(wT),ST=p({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),TT=xn(ST),ET=p({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),CT=xn(ET),AT=p({},Mc,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),MT=xn(AT),OT=p({},dr,{newState:0,oldState:0}),kT=xn(OT),RT=[9,13,27,32],Id=Wi&&"CompositionEvent"in window,To=null;Wi&&"documentMode"in document&&(To=document.documentMode);var LT=Wi&&"TextEvent"in window&&!To,O2=Wi&&(!Id||To&&8<To&&11>=To),k2=" ",R2=!1;function L2(s,a){switch(s){case"keyup":return RT.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D2(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var ea=!1;function DT(s,a){switch(s){case"compositionend":return D2(a);case"keypress":return a.which!==32?null:(R2=!0,k2);case"textInput":return s=a.data,s===k2&&R2?null:s;default:return null}}function _T(s,a){if(ea)return s==="compositionend"||!Id&&L2(s,a)?(s=T2(),Tc=zd=Os=null,ea=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return O2&&a.locale!=="ko"?null:a.data;default:return null}}var zT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _2(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!zT[s.type]:a==="textarea"}function z2(s,a,l,f){$r?Jr?Jr.push(f):Jr=[f]:$r=f,a=hu(a,"onChange"),0<a.length&&(l=new Ac("onChange","change",null,l,f),s.push({event:l,listeners:a}))}var Eo=null,Co=null;function jT(s){pv(s,0)}function Oc(s){var a=Ms(s);if(m2(a))return s}function j2(s,a){if(s==="change")return a}var P2=!1;if(Wi){var Hd;if(Wi){var Vd="oninput"in document;if(!Vd){var N2=document.createElement("div");N2.setAttribute("oninput","return;"),Vd=typeof N2.oninput=="function"}Hd=Vd}else Hd=!1;P2=Hd&&(!document.documentMode||9<document.documentMode)}function B2(){Eo&&(Eo.detachEvent("onpropertychange",I2),Co=Eo=null)}function I2(s){if(s.propertyName==="value"&&Oc(Co)){var a=[];z2(a,Co,s,Ld(s)),S2(jT,a)}}function PT(s,a,l){s==="focusin"?(B2(),Eo=a,Co=l,Eo.attachEvent("onpropertychange",I2)):s==="focusout"&&B2()}function NT(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Oc(Co)}function BT(s,a){if(s==="click")return Oc(a)}function IT(s,a){if(s==="input"||s==="change")return Oc(a)}function HT(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var Rn=typeof Object.is=="function"?Object.is:HT;function Ao(s,a){if(Rn(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var l=Object.keys(s),f=Object.keys(a);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!Be.call(a,m)||!Rn(s[m],a[m]))return!1}return!0}function H2(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function V2(s,a){var l=H2(s);s=0;for(var f;l;){if(l.nodeType===3){if(f=s+l.textContent.length,s<=a&&f>=a)return{node:l,offset:a-s};s=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=H2(l)}}function U2(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?U2(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function q2(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var a=wc(s.document);a instanceof s.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)s=a.contentWindow;else break;a=wc(s.document)}return a}function Ud(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}var VT=Wi&&"documentMode"in document&&11>=document.documentMode,ta=null,qd=null,Mo=null,Fd=!1;function F2(s,a,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Fd||ta==null||ta!==wc(f)||(f=ta,"selectionStart"in f&&Ud(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Mo&&Ao(Mo,f)||(Mo=f,f=hu(qd,"onSelect"),0<f.length&&(a=new Ac("onSelect","select",null,a,l),s.push({event:a,listeners:f}),a.target=ta)))}function hr(s,a){var l={};return l[s.toLowerCase()]=a.toLowerCase(),l["Webkit"+s]="webkit"+a,l["Moz"+s]="moz"+a,l}var na={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Gd={},G2={};Wi&&(G2=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function pr(s){if(Gd[s])return Gd[s];if(!na[s])return s;var a=na[s],l;for(l in a)if(a.hasOwnProperty(l)&&l in G2)return Gd[s]=a[l];return s}var Y2=pr("animationend"),X2=pr("animationiteration"),Q2=pr("animationstart"),UT=pr("transitionrun"),qT=pr("transitionstart"),FT=pr("transitioncancel"),Z2=pr("transitionend"),K2=new Map,Yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yd.push("scrollEnd");function ui(s,a){K2.set(s,a),le(a,[s])}var W2=new WeakMap;function Xn(s,a){if(typeof s=="object"&&s!==null){var l=W2.get(s);return l!==void 0?l:(a={value:s,source:a,stack:h2(a)},W2.set(s,a),a)}return{value:s,source:a,stack:h2(a)}}var Qn=[],ia=0,Xd=0;function kc(){for(var s=ia,a=Xd=ia=0;a<s;){var l=Qn[a];Qn[a++]=null;var f=Qn[a];Qn[a++]=null;var m=Qn[a];Qn[a++]=null;var v=Qn[a];if(Qn[a++]=null,f!==null&&m!==null){var E=f.pending;E===null?m.next=m:(m.next=E.next,E.next=m),f.pending=m}v!==0&&$2(l,m,v)}}function Rc(s,a,l,f){Qn[ia++]=s,Qn[ia++]=a,Qn[ia++]=l,Qn[ia++]=f,Xd|=f,s.lanes|=f,s=s.alternate,s!==null&&(s.lanes|=f)}function Qd(s,a,l,f){return Rc(s,a,l,f),Lc(s)}function sa(s,a){return Rc(s,null,null,a),Lc(s)}function $2(s,a,l){s.lanes|=l;var f=s.alternate;f!==null&&(f.lanes|=l);for(var m=!1,v=s.return;v!==null;)v.childLanes|=l,f=v.alternate,f!==null&&(f.childLanes|=l),v.tag===22&&(s=v.stateNode,s===null||s._visibility&1||(m=!0)),s=v,v=v.return;return s.tag===3?(v=s.stateNode,m&&a!==null&&(m=31-Kt(l),s=v.hiddenUpdates,f=s[m],f===null?s[m]=[a]:f.push(a),a.lane=l|536870912),v):null}function Lc(s){if(50<$o)throw $o=0,ep=null,Error(i(185));for(var a=s.return;a!==null;)s=a,a=s.return;return s.tag===3?s.stateNode:null}var ra={};function GT(s,a,l,f){this.tag=s,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(s,a,l,f){return new GT(s,a,l,f)}function Zd(s){return s=s.prototype,!(!s||!s.isReactComponent)}function $i(s,a){var l=s.alternate;return l===null?(l=Ln(s.tag,a,s.key,s.mode),l.elementType=s.elementType,l.type=s.type,l.stateNode=s.stateNode,l.alternate=s,s.alternate=l):(l.pendingProps=a,l.type=s.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=s.flags&65011712,l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,a=s.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=s.sibling,l.index=s.index,l.ref=s.ref,l.refCleanup=s.refCleanup,l}function J2(s,a){s.flags&=65011714;var l=s.alternate;return l===null?(s.childLanes=0,s.lanes=a,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,a=l.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),s}function Dc(s,a,l,f,m,v){var E=0;if(f=s,typeof s=="function")Zd(s)&&(E=1);else if(typeof s=="string")E=X8(s,l,ue.current)?26:s==="html"||s==="head"||s==="body"?27:5;else e:switch(s){case V:return s=Ln(31,l,a,m),s.elementType=V,s.lanes=v,s;case b:return mr(l.children,m,v,a);case S:E=8,m|=24;break;case C:return s=Ln(12,l,a,m|2),s.elementType=C,s.lanes=v,s;case k:return s=Ln(13,l,a,m),s.elementType=k,s.lanes=v,s;case P:return s=Ln(19,l,a,m),s.elementType=P,s.lanes=v,s;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case T:case A:E=10;break e;case M:E=9;break e;case R:E=11;break e;case L:E=14;break e;case I:E=16,f=null;break e}E=29,l=Error(i(130,s===null?"null":typeof s,"")),f=null}return a=Ln(E,l,a,m),a.elementType=s,a.type=f,a.lanes=v,a}function mr(s,a,l,f){return s=Ln(7,s,f,a),s.lanes=l,s}function Kd(s,a,l){return s=Ln(6,s,null,a),s.lanes=l,s}function Wd(s,a,l){return a=Ln(4,s.children!==null?s.children:[],s.key,a),a.lanes=l,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}var aa=[],oa=0,_c=null,zc=0,Zn=[],Kn=0,gr=null,Ji=1,es="";function yr(s,a){aa[oa++]=zc,aa[oa++]=_c,_c=s,zc=a}function e1(s,a,l){Zn[Kn++]=Ji,Zn[Kn++]=es,Zn[Kn++]=gr,gr=s;var f=Ji;s=es;var m=32-Kt(f)-1;f&=~(1<<m),l+=1;var v=32-Kt(a)+m;if(30<v){var E=m-m%5;v=(f&(1<<E)-1).toString(32),f>>=E,m-=E,Ji=1<<32-Kt(a)+m|l<<m|f,es=v+s}else Ji=1<<v|l<<m|f,es=s}function $d(s){s.return!==null&&(yr(s,1),e1(s,1,0))}function Jd(s){for(;s===_c;)_c=aa[--oa],aa[oa]=null,zc=aa[--oa],aa[oa]=null;for(;s===gr;)gr=Zn[--Kn],Zn[Kn]=null,es=Zn[--Kn],Zn[Kn]=null,Ji=Zn[--Kn],Zn[Kn]=null}var on=null,ht=null,Ie=!1,vr=null,ki=!1,eh=Error(i(519));function xr(s){var a=Error(i(418,""));throw Ro(Xn(a,s)),eh}function t1(s){var a=s.stateNode,l=s.type,f=s.memoizedProps;switch(a[Rt]=s,a[Wt]=f,l){case"dialog":_e("cancel",a),_e("close",a);break;case"iframe":case"object":case"embed":_e("load",a);break;case"video":case"audio":for(l=0;l<el.length;l++)_e(el[l],a);break;case"source":_e("error",a);break;case"img":case"image":case"link":_e("error",a),_e("load",a);break;case"details":_e("toggle",a);break;case"input":_e("invalid",a),g2(a,f.value,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name,!0),bc(a);break;case"select":_e("invalid",a);break;case"textarea":_e("invalid",a),v2(a,f.value,f.defaultValue,f.children),bc(a)}l=f.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||f.suppressHydrationWarning===!0||vv(a.textContent,l)?(f.popover!=null&&(_e("beforetoggle",a),_e("toggle",a)),f.onScroll!=null&&_e("scroll",a),f.onScrollEnd!=null&&_e("scrollend",a),f.onClick!=null&&(a.onclick=pu),a=!0):a=!1,a||xr(s)}function n1(s){for(on=s.return;on;)switch(on.tag){case 5:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:on=on.return}}function Oo(s){if(s!==on)return!1;if(!Ie)return n1(s),Ie=!0,!1;var a=s.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=s.type,l=!(l!=="form"&&l!=="button")||gp(s.type,s.memoizedProps)),l=!l),l&&ht&&xr(s),n1(s),a===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8)if(l=s.data,l==="/$"){if(a===0){ht=di(s.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;s=s.nextSibling}ht=null}}else a===27?(a=ht,Fs(s.type)?(s=bp,bp=null,ht=s):ht=a):ht=on?di(s.stateNode.nextSibling):null;return!0}function ko(){ht=on=null,Ie=!1}function i1(){var s=vr;return s!==null&&(Sn===null?Sn=s:Sn.push.apply(Sn,s),vr=null),s}function Ro(s){vr===null?vr=[s]:vr.push(s)}var th=Z(null),br=null,ts=null;function ks(s,a,l){se(th,a._currentValue),a._currentValue=l}function ns(s){s._currentValue=th.current,oe(th)}function nh(s,a,l){for(;s!==null;){var f=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),s===l)break;s=s.return}}function ih(s,a,l,f){var m=s.child;for(m!==null&&(m.return=s);m!==null;){var v=m.dependencies;if(v!==null){var E=m.child;v=v.firstContext;e:for(;v!==null;){var O=v;v=m;for(var B=0;B<a.length;B++)if(O.context===a[B]){v.lanes|=l,O=v.alternate,O!==null&&(O.lanes|=l),nh(v.return,l,s),f||(E=null);break e}v=O.next}}else if(m.tag===18){if(E=m.return,E===null)throw Error(i(341));E.lanes|=l,v=E.alternate,v!==null&&(v.lanes|=l),nh(E,l,s),E=null}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===s){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}}function Lo(s,a,l,f){s=null;for(var m=a,v=!1;m!==null;){if(!v){if((m.flags&524288)!==0)v=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var E=m.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var O=m.type;Rn(m.pendingProps.value,E.value)||(s!==null?s.push(O):s=[O])}}else if(m===we.current){if(E=m.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(s!==null?s.push(al):s=[al])}m=m.return}s!==null&&ih(a,s,l,f),a.flags|=262144}function jc(s){for(s=s.firstContext;s!==null;){if(!Rn(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function wr(s){br=s,ts=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function Jt(s){return s1(br,s)}function Pc(s,a){return br===null&&wr(s),s1(s,a)}function s1(s,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},ts===null){if(s===null)throw Error(i(308));ts=a,s.dependencies={lanes:0,firstContext:a},s.flags|=524288}else ts=ts.next=a;return l}var YT=typeof AbortController<"u"?AbortController:function(){var s=[],a=this.signal={aborted:!1,addEventListener:function(l,f){s.push(f)}};this.abort=function(){a.aborted=!0,s.forEach(function(l){return l()})}},XT=t.unstable_scheduleCallback,QT=t.unstable_NormalPriority,Dt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new YT,data:new Map,refCount:0}}function Do(s){s.refCount--,s.refCount===0&&XT(QT,function(){s.controller.abort()})}var _o=null,rh=0,la=0,ca=null;function ZT(s,a){if(_o===null){var l=_o=[];rh=0,la=op(),ca={status:"pending",value:void 0,then:function(f){l.push(f)}}}return rh++,a.then(r1,r1),a}function r1(){if(--rh===0&&_o!==null){ca!==null&&(ca.status="fulfilled");var s=_o;_o=null,la=0,ca=null;for(var a=0;a<s.length;a++)(0,s[a])()}}function KT(s,a){var l=[],f={status:"pending",value:null,reason:null,then:function(m){l.push(m)}};return s.then(function(){f.status="fulfilled",f.value=a;for(var m=0;m<l.length;m++)(0,l[m])(a)},function(m){for(f.status="rejected",f.reason=m,m=0;m<l.length;m++)(0,l[m])(void 0)}),f}var a1=U.S;U.S=function(s,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&ZT(s,a),a1!==null&&a1(s,a)};var Sr=Z(null);function ah(){var s=Sr.current;return s!==null?s:nt.pooledCache}function Nc(s,a){a===null?se(Sr,Sr.current):se(Sr,a.pool)}function o1(){var s=ah();return s===null?null:{parent:Dt._currentValue,pool:s}}var zo=Error(i(460)),l1=Error(i(474)),Bc=Error(i(542)),oh={then:function(){}};function c1(s){return s=s.status,s==="fulfilled"||s==="rejected"}function Ic(){}function u1(s,a,l){switch(l=s[l],l===void 0?s.push(a):l!==a&&(a.then(Ic,Ic),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw s=a.reason,d1(s),s;default:if(typeof a.status=="string")a.then(Ic,Ic);else{if(s=nt,s!==null&&100<s.shellSuspendCounter)throw Error(i(482));s=a,s.status="pending",s.then(function(f){if(a.status==="pending"){var m=a;m.status="fulfilled",m.value=f}},function(f){if(a.status==="pending"){var m=a;m.status="rejected",m.reason=f}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw s=a.reason,d1(s),s}throw jo=a,zo}}var jo=null;function f1(){if(jo===null)throw Error(i(459));var s=jo;return jo=null,s}function d1(s){if(s===zo||s===Bc)throw Error(i(483))}var Rs=!1;function lh(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ch(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function Ls(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function Ds(s,a,l){var f=s.updateQueue;if(f===null)return null;if(f=f.shared,(Ge&2)!==0){var m=f.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),f.pending=a,a=Lc(s),$2(s,null,l),a}return Rc(s,f,a,l),Lc(s)}function Po(s,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var f=a.lanes;f&=s.pendingLanes,l|=f,a.lanes=l,gt(s,l)}}function uh(s,a){var l=s.updateQueue,f=s.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};v===null?m=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?m=v=a:v=v.next=a}else m=v=a;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:f.shared,callbacks:f.callbacks},s.updateQueue=l;return}s=l.lastBaseUpdate,s===null?l.firstBaseUpdate=a:s.next=a,l.lastBaseUpdate=a}var fh=!1;function No(){if(fh){var s=ca;if(s!==null)throw s}}function Bo(s,a,l,f){fh=!1;var m=s.updateQueue;Rs=!1;var v=m.firstBaseUpdate,E=m.lastBaseUpdate,O=m.shared.pending;if(O!==null){m.shared.pending=null;var B=O,Q=B.next;B.next=null,E===null?v=Q:E.next=Q,E=B;var ne=s.alternate;ne!==null&&(ne=ne.updateQueue,O=ne.lastBaseUpdate,O!==E&&(O===null?ne.firstBaseUpdate=Q:O.next=Q,ne.lastBaseUpdate=B))}if(v!==null){var re=m.baseState;E=0,ne=Q=B=null,O=v;do{var K=O.lane&-536870913,W=K!==O.lane;if(W?(je&K)===K:(f&K)===K){K!==0&&K===la&&(fh=!0),ne!==null&&(ne=ne.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var Se=s,ve=O;K=a;var We=l;switch(ve.tag){case 1:if(Se=ve.payload,typeof Se=="function"){re=Se.call(We,re,K);break e}re=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ve.payload,K=typeof Se=="function"?Se.call(We,re,K):Se,K==null)break e;re=p({},re,K);break e;case 2:Rs=!0}}K=O.callback,K!==null&&(s.flags|=64,W&&(s.flags|=8192),W=m.callbacks,W===null?m.callbacks=[K]:W.push(K))}else W={lane:K,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ne===null?(Q=ne=W,B=re):ne=ne.next=W,E|=K;if(O=O.next,O===null){if(O=m.shared.pending,O===null)break;W=O,O=W.next,W.next=null,m.lastBaseUpdate=W,m.shared.pending=null}}while(!0);ne===null&&(B=re),m.baseState=B,m.firstBaseUpdate=Q,m.lastBaseUpdate=ne,v===null&&(m.shared.lanes=0),Hs|=E,s.lanes=E,s.memoizedState=re}}function h1(s,a){if(typeof s!="function")throw Error(i(191,s));s.call(a)}function p1(s,a){var l=s.callbacks;if(l!==null)for(s.callbacks=null,s=0;s<l.length;s++)h1(l[s],a)}var ua=Z(null),Hc=Z(0);function m1(s,a){s=cs,se(Hc,s),se(ua,a),cs=s|a.baseLanes}function dh(){se(Hc,cs),se(ua,ua.current)}function hh(){cs=Hc.current,oe(ua),oe(Hc)}var _s=0,Re=null,Ze=null,Ct=null,Vc=!1,fa=!1,Tr=!1,Uc=0,Io=0,da=null,WT=0;function yt(){throw Error(i(321))}function ph(s,a){if(a===null)return!1;for(var l=0;l<a.length&&l<s.length;l++)if(!Rn(s[l],a[l]))return!1;return!0}function mh(s,a,l,f,m,v){return _s=v,Re=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=s===null||s.memoizedState===null?$1:J1,Tr=!1,v=l(f,m),Tr=!1,fa&&(v=y1(a,l,f,m)),g1(s),v}function g1(s){U.H=Qc;var a=Ze!==null&&Ze.next!==null;if(_s=0,Ct=Ze=Re=null,Vc=!1,Io=0,da=null,a)throw Error(i(300));s===null||zt||(s=s.dependencies,s!==null&&jc(s)&&(zt=!0))}function y1(s,a,l,f){Re=s;var m=0;do{if(fa&&(da=null),Io=0,fa=!1,25<=m)throw Error(i(301));if(m+=1,Ct=Ze=null,s.updateQueue!=null){var v=s.updateQueue;v.lastEffect=null,v.events=null,v.stores=null,v.memoCache!=null&&(v.memoCache.index=0)}U.H=s8,v=a(l,f)}while(fa);return v}function $T(){var s=U.H,a=s.useState()[0];return a=typeof a.then=="function"?Ho(a):a,s=s.useState()[0],(Ze!==null?Ze.memoizedState:null)!==s&&(Re.flags|=1024),a}function gh(){var s=Uc!==0;return Uc=0,s}function yh(s,a,l){a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~l}function vh(s){if(Vc){for(s=s.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Vc=!1}_s=0,Ct=Ze=Re=null,fa=!1,Io=Uc=0,da=null}function bn(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Re.memoizedState=Ct=s:Ct=Ct.next=s,Ct}function At(){if(Ze===null){var s=Re.alternate;s=s!==null?s.memoizedState:null}else s=Ze.next;var a=Ct===null?Re.memoizedState:Ct.next;if(a!==null)Ct=a,Ze=s;else{if(s===null)throw Re.alternate===null?Error(i(467)):Error(i(310));Ze=s,s={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Ct===null?Re.memoizedState=Ct=s:Ct=Ct.next=s}return Ct}function xh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(s){var a=Io;return Io+=1,da===null&&(da=[]),s=u1(da,s,a),a=Re,(Ct===null?a.memoizedState:Ct.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?$1:J1),s}function qc(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return Ho(s);if(s.$$typeof===A)return Jt(s)}throw Error(i(438,String(s)))}function bh(s){var a=null,l=Re.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var f=Re.alternate;f!==null&&(f=f.updateQueue,f!==null&&(f=f.memoCache,f!=null&&(a={data:f.data.map(function(m){return m.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=xh(),Re.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(s),f=0;f<s;f++)l[f]=F;return a.index++,l}function is(s,a){return typeof a=="function"?a(s):a}function Fc(s){var a=At();return wh(a,Ze,s)}function wh(s,a,l){var f=s.queue;if(f===null)throw Error(i(311));f.lastRenderedReducer=l;var m=s.baseQueue,v=f.pending;if(v!==null){if(m!==null){var E=m.next;m.next=v.next,v.next=E}a.baseQueue=m=v,f.pending=null}if(v=s.baseState,m===null)s.memoizedState=v;else{a=m.next;var O=E=null,B=null,Q=a,ne=!1;do{var re=Q.lane&-536870913;if(re!==Q.lane?(je&re)===re:(_s&re)===re){var K=Q.revertLane;if(K===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),re===la&&(ne=!0);else if((_s&K)===K){Q=Q.next,K===la&&(ne=!0);continue}else re={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(O=B=re,E=v):B=B.next=re,Re.lanes|=K,Hs|=K;re=Q.action,Tr&&l(v,re),v=Q.hasEagerState?Q.eagerState:l(v,re)}else K={lane:re,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(O=B=K,E=v):B=B.next=K,Re.lanes|=re,Hs|=re;Q=Q.next}while(Q!==null&&Q!==a);if(B===null?E=v:B.next=O,!Rn(v,s.memoizedState)&&(zt=!0,ne&&(l=ca,l!==null)))throw l;s.memoizedState=v,s.baseState=E,s.baseQueue=B,f.lastRenderedState=v}return m===null&&(f.lanes=0),[s.memoizedState,f.dispatch]}function Sh(s){var a=At(),l=a.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=s;var f=l.dispatch,m=l.pending,v=a.memoizedState;if(m!==null){l.pending=null;var E=m=m.next;do v=s(v,E.action),E=E.next;while(E!==m);Rn(v,a.memoizedState)||(zt=!0),a.memoizedState=v,a.baseQueue===null&&(a.baseState=v),l.lastRenderedState=v}return[v,f]}function v1(s,a,l){var f=Re,m=At(),v=Ie;if(v){if(l===void 0)throw Error(i(407));l=l()}else l=a();var E=!Rn((Ze||m).memoizedState,l);E&&(m.memoizedState=l,zt=!0),m=m.queue;var O=w1.bind(null,f,m,s);if(Vo(2048,8,O,[s]),m.getSnapshot!==a||E||Ct!==null&&Ct.memoizedState.tag&1){if(f.flags|=2048,ha(9,Gc(),b1.bind(null,f,m,l,a),null),nt===null)throw Error(i(349));v||(_s&124)!==0||x1(f,a,l)}return l}function x1(s,a,l){s.flags|=16384,s={getSnapshot:a,value:l},a=Re.updateQueue,a===null?(a=xh(),Re.updateQueue=a,a.stores=[s]):(l=a.stores,l===null?a.stores=[s]:l.push(s))}function b1(s,a,l,f){a.value=l,a.getSnapshot=f,S1(a)&&T1(s)}function w1(s,a,l){return l(function(){S1(a)&&T1(s)})}function S1(s){var a=s.getSnapshot;s=s.value;try{var l=a();return!Rn(s,l)}catch{return!0}}function T1(s){var a=sa(s,2);a!==null&&Pn(a,s,2)}function Th(s){var a=bn();if(typeof s=="function"){var l=s;if(s=l(),Tr){oi(!0);try{l()}finally{oi(!1)}}}return a.memoizedState=a.baseState=s,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:s},a}function E1(s,a,l,f){return s.baseState=l,wh(s,Ze,typeof f=="function"?f:is)}function JT(s,a,l,f,m){if(Xc(s))throw Error(i(485));if(s=a.action,s!==null){var v={payload:m,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){v.listeners.push(E)}};U.T!==null?l(!0):v.isTransition=!1,f(v),l=a.pending,l===null?(v.next=a.pending=v,C1(a,v)):(v.next=l.next,a.pending=l.next=v)}}function C1(s,a){var l=a.action,f=a.payload,m=s.state;if(a.isTransition){var v=U.T,E={};U.T=E;try{var O=l(m,f),B=U.S;B!==null&&B(E,O),A1(s,a,O)}catch(Q){Eh(s,a,Q)}finally{U.T=v}}else try{v=l(m,f),A1(s,a,v)}catch(Q){Eh(s,a,Q)}}function A1(s,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(f){M1(s,a,f)},function(f){return Eh(s,a,f)}):M1(s,a,l)}function M1(s,a,l){a.status="fulfilled",a.value=l,O1(a),s.state=l,a=s.pending,a!==null&&(l=a.next,l===a?s.pending=null:(l=l.next,a.next=l,C1(s,l)))}function Eh(s,a,l){var f=s.pending;if(s.pending=null,f!==null){f=f.next;do a.status="rejected",a.reason=l,O1(a),a=a.next;while(a!==f)}s.action=null}function O1(s){s=s.listeners;for(var a=0;a<s.length;a++)(0,s[a])()}function k1(s,a){return a}function R1(s,a){if(Ie){var l=nt.formState;if(l!==null){e:{var f=Re;if(Ie){if(ht){t:{for(var m=ht,v=ki;m.nodeType!==8;){if(!v){m=null;break t}if(m=di(m.nextSibling),m===null){m=null;break t}}v=m.data,m=v==="F!"||v==="F"?m:null}if(m){ht=di(m.nextSibling),f=m.data==="F!";break e}}xr(f)}f=!1}f&&(a=l[0])}}return l=bn(),l.memoizedState=l.baseState=a,f={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k1,lastRenderedState:a},l.queue=f,l=Z1.bind(null,Re,f),f.dispatch=l,f=Th(!1),v=kh.bind(null,Re,!1,f.queue),f=bn(),m={state:a,dispatch:null,action:s,pending:null},f.queue=m,l=JT.bind(null,Re,m,v,l),m.dispatch=l,f.memoizedState=s,[a,l,!1]}function L1(s){var a=At();return D1(a,Ze,s)}function D1(s,a,l){if(a=wh(s,a,k1)[0],s=Fc(is)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var f=Ho(a)}catch(E){throw E===zo?Bc:E}else f=a;a=At();var m=a.queue,v=m.dispatch;return l!==a.memoizedState&&(Re.flags|=2048,ha(9,Gc(),e8.bind(null,m,l),null)),[f,v,s]}function e8(s,a){s.action=a}function _1(s){var a=At(),l=Ze;if(l!==null)return D1(a,l,s);At(),a=a.memoizedState,l=At();var f=l.queue.dispatch;return l.memoizedState=s,[a,f,!1]}function ha(s,a,l,f){return s={tag:s,create:l,deps:f,inst:a,next:null},a=Re.updateQueue,a===null&&(a=xh(),Re.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=s.next=s:(f=l.next,l.next=s,s.next=f,a.lastEffect=s),s}function Gc(){return{destroy:void 0,resource:void 0}}function z1(){return At().memoizedState}function Yc(s,a,l,f){var m=bn();f=f===void 0?null:f,Re.flags|=s,m.memoizedState=ha(1|a,Gc(),l,f)}function Vo(s,a,l,f){var m=At();f=f===void 0?null:f;var v=m.memoizedState.inst;Ze!==null&&f!==null&&ph(f,Ze.memoizedState.deps)?m.memoizedState=ha(a,v,l,f):(Re.flags|=s,m.memoizedState=ha(1|a,v,l,f))}function j1(s,a){Yc(8390656,8,s,a)}function P1(s,a){Vo(2048,8,s,a)}function N1(s,a){return Vo(4,2,s,a)}function B1(s,a){return Vo(4,4,s,a)}function I1(s,a){if(typeof a=="function"){s=s();var l=a(s);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function H1(s,a,l){l=l!=null?l.concat([s]):null,Vo(4,4,I1.bind(null,a,s),l)}function Ch(){}function V1(s,a){var l=At();a=a===void 0?null:a;var f=l.memoizedState;return a!==null&&ph(a,f[1])?f[0]:(l.memoizedState=[s,a],s)}function U1(s,a){var l=At();a=a===void 0?null:a;var f=l.memoizedState;if(a!==null&&ph(a,f[1]))return f[0];if(f=s(),Tr){oi(!0);try{s()}finally{oi(!1)}}return l.memoizedState=[f,a],f}function Ah(s,a,l){return l===void 0||(_s&1073741824)!==0?s.memoizedState=a:(s.memoizedState=l,s=Gy(),Re.lanes|=s,Hs|=s,l)}function q1(s,a,l,f){return Rn(l,a)?l:ua.current!==null?(s=Ah(s,l,f),Rn(s,a)||(zt=!0),s):(_s&42)===0?(zt=!0,s.memoizedState=l):(s=Gy(),Re.lanes|=s,Hs|=s,a)}function F1(s,a,l,f,m){var v=J.p;J.p=v!==0&&8>v?v:8;var E=U.T,O={};U.T=O,kh(s,!1,a,l);try{var B=m(),Q=U.S;if(Q!==null&&Q(O,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ne=KT(B,f);Uo(s,a,ne,jn(s))}else Uo(s,a,f,jn(s))}catch(re){Uo(s,a,{then:function(){},status:"rejected",reason:re},jn())}finally{J.p=v,U.T=E}}function t8(){}function Mh(s,a,l,f){if(s.tag!==5)throw Error(i(476));var m=G1(s).queue;F1(s,m,a,ee,l===null?t8:function(){return Y1(s),l(f)})}function G1(s){var a=s.memoizedState;if(a!==null)return a;a={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:ee},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:l},next:null},s.memoizedState=a,s=s.alternate,s!==null&&(s.memoizedState=a),a}function Y1(s){var a=G1(s).next.queue;Uo(s,a,{},jn())}function Oh(){return Jt(al)}function X1(){return At().memoizedState}function Q1(){return At().memoizedState}function n8(s){for(var a=s.return;a!==null;){switch(a.tag){case 24:case 3:var l=jn();s=Ls(l);var f=Ds(a,s,l);f!==null&&(Pn(f,a,l),Po(f,a,l)),a={cache:sh()},s.payload=a;return}a=a.return}}function i8(s,a,l){var f=jn();l={lane:f,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Xc(s)?K1(a,l):(l=Qd(s,a,l,f),l!==null&&(Pn(l,s,f),W1(l,a,f)))}function Z1(s,a,l){var f=jn();Uo(s,a,l,f)}function Uo(s,a,l,f){var m={lane:f,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xc(s))K1(a,m);else{var v=s.alternate;if(s.lanes===0&&(v===null||v.lanes===0)&&(v=a.lastRenderedReducer,v!==null))try{var E=a.lastRenderedState,O=v(E,l);if(m.hasEagerState=!0,m.eagerState=O,Rn(O,E))return Rc(s,a,m,0),nt===null&&kc(),!1}catch{}finally{}if(l=Qd(s,a,m,f),l!==null)return Pn(l,s,f),W1(l,a,f),!0}return!1}function kh(s,a,l,f){if(f={lane:2,revertLane:op(),action:f,hasEagerState:!1,eagerState:null,next:null},Xc(s)){if(a)throw Error(i(479))}else a=Qd(s,l,f,2),a!==null&&Pn(a,s,2)}function Xc(s){var a=s.alternate;return s===Re||a!==null&&a===Re}function K1(s,a){fa=Vc=!0;var l=s.pending;l===null?a.next=a:(a.next=l.next,l.next=a),s.pending=a}function W1(s,a,l){if((l&4194048)!==0){var f=a.lanes;f&=s.pendingLanes,l|=f,a.lanes=l,gt(s,l)}}var Qc={readContext:Jt,use:qc,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt},$1={readContext:Jt,use:qc,useCallback:function(s,a){return bn().memoizedState=[s,a===void 0?null:a],s},useContext:Jt,useEffect:j1,useImperativeHandle:function(s,a,l){l=l!=null?l.concat([s]):null,Yc(4194308,4,I1.bind(null,a,s),l)},useLayoutEffect:function(s,a){return Yc(4194308,4,s,a)},useInsertionEffect:function(s,a){Yc(4,2,s,a)},useMemo:function(s,a){var l=bn();a=a===void 0?null:a;var f=s();if(Tr){oi(!0);try{s()}finally{oi(!1)}}return l.memoizedState=[f,a],f},useReducer:function(s,a,l){var f=bn();if(l!==void 0){var m=l(a);if(Tr){oi(!0);try{l(a)}finally{oi(!1)}}}else m=a;return f.memoizedState=f.baseState=m,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:m},f.queue=s,s=s.dispatch=i8.bind(null,Re,s),[f.memoizedState,s]},useRef:function(s){var a=bn();return s={current:s},a.memoizedState=s},useState:function(s){s=Th(s);var a=s.queue,l=Z1.bind(null,Re,a);return a.dispatch=l,[s.memoizedState,l]},useDebugValue:Ch,useDeferredValue:function(s,a){var l=bn();return Ah(l,s,a)},useTransition:function(){var s=Th(!1);return s=F1.bind(null,Re,s.queue,!0,!1),bn().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,a,l){var f=Re,m=bn();if(Ie){if(l===void 0)throw Error(i(407));l=l()}else{if(l=a(),nt===null)throw Error(i(349));(je&124)!==0||x1(f,a,l)}m.memoizedState=l;var v={value:l,getSnapshot:a};return m.queue=v,j1(w1.bind(null,f,v,s),[s]),f.flags|=2048,ha(9,Gc(),b1.bind(null,f,v,l,a),null),l},useId:function(){var s=bn(),a=nt.identifierPrefix;if(Ie){var l=es,f=Ji;l=(f&~(1<<32-Kt(f)-1)).toString(32)+l,a="«"+a+"R"+l,l=Uc++,0<l&&(a+="H"+l.toString(32)),a+="»"}else l=WT++,a="«"+a+"r"+l.toString(32)+"»";return s.memoizedState=a},useHostTransitionStatus:Oh,useFormState:R1,useActionState:R1,useOptimistic:function(s){var a=bn();a.memoizedState=a.baseState=s;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=kh.bind(null,Re,!0,l),l.dispatch=a,[s,a]},useMemoCache:bh,useCacheRefresh:function(){return bn().memoizedState=n8.bind(null,Re)}},J1={readContext:Jt,use:qc,useCallback:V1,useContext:Jt,useEffect:P1,useImperativeHandle:H1,useInsertionEffect:N1,useLayoutEffect:B1,useMemo:U1,useReducer:Fc,useRef:z1,useState:function(){return Fc(is)},useDebugValue:Ch,useDeferredValue:function(s,a){var l=At();return q1(l,Ze.memoizedState,s,a)},useTransition:function(){var s=Fc(is)[0],a=At().memoizedState;return[typeof s=="boolean"?s:Ho(s),a]},useSyncExternalStore:v1,useId:X1,useHostTransitionStatus:Oh,useFormState:L1,useActionState:L1,useOptimistic:function(s,a){var l=At();return E1(l,Ze,s,a)},useMemoCache:bh,useCacheRefresh:Q1},s8={readContext:Jt,use:qc,useCallback:V1,useContext:Jt,useEffect:P1,useImperativeHandle:H1,useInsertionEffect:N1,useLayoutEffect:B1,useMemo:U1,useReducer:Sh,useRef:z1,useState:function(){return Sh(is)},useDebugValue:Ch,useDeferredValue:function(s,a){var l=At();return Ze===null?Ah(l,s,a):q1(l,Ze.memoizedState,s,a)},useTransition:function(){var s=Sh(is)[0],a=At().memoizedState;return[typeof s=="boolean"?s:Ho(s),a]},useSyncExternalStore:v1,useId:X1,useHostTransitionStatus:Oh,useFormState:_1,useActionState:_1,useOptimistic:function(s,a){var l=At();return Ze!==null?E1(l,Ze,s,a):(l.baseState=s,[s,l.queue.dispatch])},useMemoCache:bh,useCacheRefresh:Q1},pa=null,qo=0;function Zc(s){var a=qo;return qo+=1,pa===null&&(pa=[]),u1(pa,s,a)}function Fo(s,a){a=a.props.ref,s.ref=a!==void 0?a:null}function Kc(s,a){throw a.$$typeof===g?Error(i(525)):(s=Object.prototype.toString.call(a),Error(i(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s)))}function ey(s){var a=s._init;return a(s._payload)}function ty(s){function a(G,H){if(s){var X=G.deletions;X===null?(G.deletions=[H],G.flags|=16):X.push(H)}}function l(G,H){if(!s)return null;for(;H!==null;)a(G,H),H=H.sibling;return null}function f(G){for(var H=new Map;G!==null;)G.key!==null?H.set(G.key,G):H.set(G.index,G),G=G.sibling;return H}function m(G,H){return G=$i(G,H),G.index=0,G.sibling=null,G}function v(G,H,X){return G.index=X,s?(X=G.alternate,X!==null?(X=X.index,X<H?(G.flags|=67108866,H):X):(G.flags|=67108866,H)):(G.flags|=1048576,H)}function E(G){return s&&G.alternate===null&&(G.flags|=67108866),G}function O(G,H,X,ie){return H===null||H.tag!==6?(H=Kd(X,G.mode,ie),H.return=G,H):(H=m(H,X),H.return=G,H)}function B(G,H,X,ie){var me=X.type;return me===b?ne(G,H,X.props.children,ie,X.key):H!==null&&(H.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===I&&ey(me)===H.type)?(H=m(H,X.props),Fo(H,X),H.return=G,H):(H=Dc(X.type,X.key,X.props,null,G.mode,ie),Fo(H,X),H.return=G,H)}function Q(G,H,X,ie){return H===null||H.tag!==4||H.stateNode.containerInfo!==X.containerInfo||H.stateNode.implementation!==X.implementation?(H=Wd(X,G.mode,ie),H.return=G,H):(H=m(H,X.children||[]),H.return=G,H)}function ne(G,H,X,ie,me){return H===null||H.tag!==7?(H=mr(X,G.mode,ie,me),H.return=G,H):(H=m(H,X),H.return=G,H)}function re(G,H,X){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Kd(""+H,G.mode,X),H.return=G,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case y:return X=Dc(H.type,H.key,H.props,null,G.mode,X),Fo(X,H),X.return=G,X;case x:return H=Wd(H,G.mode,X),H.return=G,H;case I:var ie=H._init;return H=ie(H._payload),re(G,H,X)}if(ce(H)||z(H))return H=mr(H,G.mode,X,null),H.return=G,H;if(typeof H.then=="function")return re(G,Zc(H),X);if(H.$$typeof===A)return re(G,Pc(G,H),X);Kc(G,H)}return null}function K(G,H,X,ie){var me=H!==null?H.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return me!==null?null:O(G,H,""+X,ie);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return X.key===me?B(G,H,X,ie):null;case x:return X.key===me?Q(G,H,X,ie):null;case I:return me=X._init,X=me(X._payload),K(G,H,X,ie)}if(ce(X)||z(X))return me!==null?null:ne(G,H,X,ie,null);if(typeof X.then=="function")return K(G,H,Zc(X),ie);if(X.$$typeof===A)return K(G,H,Pc(G,X),ie);Kc(G,X)}return null}function W(G,H,X,ie,me){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return G=G.get(X)||null,O(H,G,""+ie,me);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:return G=G.get(ie.key===null?X:ie.key)||null,B(H,G,ie,me);case x:return G=G.get(ie.key===null?X:ie.key)||null,Q(H,G,ie,me);case I:var Le=ie._init;return ie=Le(ie._payload),W(G,H,X,ie,me)}if(ce(ie)||z(ie))return G=G.get(X)||null,ne(H,G,ie,me,null);if(typeof ie.then=="function")return W(G,H,X,Zc(ie),me);if(ie.$$typeof===A)return W(G,H,X,Pc(H,ie),me);Kc(H,ie)}return null}function Se(G,H,X,ie){for(var me=null,Le=null,ye=H,be=H=0,Pt=null;ye!==null&&be<X.length;be++){ye.index>be?(Pt=ye,ye=null):Pt=ye.sibling;var Ne=K(G,ye,X[be],ie);if(Ne===null){ye===null&&(ye=Pt);break}s&&ye&&Ne.alternate===null&&a(G,ye),H=v(Ne,H,be),Le===null?me=Ne:Le.sibling=Ne,Le=Ne,ye=Pt}if(be===X.length)return l(G,ye),Ie&&yr(G,be),me;if(ye===null){for(;be<X.length;be++)ye=re(G,X[be],ie),ye!==null&&(H=v(ye,H,be),Le===null?me=ye:Le.sibling=ye,Le=ye);return Ie&&yr(G,be),me}for(ye=f(ye);be<X.length;be++)Pt=W(ye,G,be,X[be],ie),Pt!==null&&(s&&Pt.alternate!==null&&ye.delete(Pt.key===null?be:Pt.key),H=v(Pt,H,be),Le===null?me=Pt:Le.sibling=Pt,Le=Pt);return s&&ye.forEach(function(Zs){return a(G,Zs)}),Ie&&yr(G,be),me}function ve(G,H,X,ie){if(X==null)throw Error(i(151));for(var me=null,Le=null,ye=H,be=H=0,Pt=null,Ne=X.next();ye!==null&&!Ne.done;be++,Ne=X.next()){ye.index>be?(Pt=ye,ye=null):Pt=ye.sibling;var Zs=K(G,ye,Ne.value,ie);if(Zs===null){ye===null&&(ye=Pt);break}s&&ye&&Zs.alternate===null&&a(G,ye),H=v(Zs,H,be),Le===null?me=Zs:Le.sibling=Zs,Le=Zs,ye=Pt}if(Ne.done)return l(G,ye),Ie&&yr(G,be),me;if(ye===null){for(;!Ne.done;be++,Ne=X.next())Ne=re(G,Ne.value,ie),Ne!==null&&(H=v(Ne,H,be),Le===null?me=Ne:Le.sibling=Ne,Le=Ne);return Ie&&yr(G,be),me}for(ye=f(ye);!Ne.done;be++,Ne=X.next())Ne=W(ye,G,be,Ne.value,ie),Ne!==null&&(s&&Ne.alternate!==null&&ye.delete(Ne.key===null?be:Ne.key),H=v(Ne,H,be),Le===null?me=Ne:Le.sibling=Ne,Le=Ne);return s&&ye.forEach(function(rE){return a(G,rE)}),Ie&&yr(G,be),me}function We(G,H,X,ie){if(typeof X=="object"&&X!==null&&X.type===b&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case y:e:{for(var me=X.key;H!==null;){if(H.key===me){if(me=X.type,me===b){if(H.tag===7){l(G,H.sibling),ie=m(H,X.props.children),ie.return=G,G=ie;break e}}else if(H.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===I&&ey(me)===H.type){l(G,H.sibling),ie=m(H,X.props),Fo(ie,X),ie.return=G,G=ie;break e}l(G,H);break}else a(G,H);H=H.sibling}X.type===b?(ie=mr(X.props.children,G.mode,ie,X.key),ie.return=G,G=ie):(ie=Dc(X.type,X.key,X.props,null,G.mode,ie),Fo(ie,X),ie.return=G,G=ie)}return E(G);case x:e:{for(me=X.key;H!==null;){if(H.key===me)if(H.tag===4&&H.stateNode.containerInfo===X.containerInfo&&H.stateNode.implementation===X.implementation){l(G,H.sibling),ie=m(H,X.children||[]),ie.return=G,G=ie;break e}else{l(G,H);break}else a(G,H);H=H.sibling}ie=Wd(X,G.mode,ie),ie.return=G,G=ie}return E(G);case I:return me=X._init,X=me(X._payload),We(G,H,X,ie)}if(ce(X))return Se(G,H,X,ie);if(z(X)){if(me=z(X),typeof me!="function")throw Error(i(150));return X=me.call(X),ve(G,H,X,ie)}if(typeof X.then=="function")return We(G,H,Zc(X),ie);if(X.$$typeof===A)return We(G,H,Pc(G,X),ie);Kc(G,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,H!==null&&H.tag===6?(l(G,H.sibling),ie=m(H,X),ie.return=G,G=ie):(l(G,H),ie=Kd(X,G.mode,ie),ie.return=G,G=ie),E(G)):l(G,H)}return function(G,H,X,ie){try{qo=0;var me=We(G,H,X,ie);return pa=null,me}catch(ye){if(ye===zo||ye===Bc)throw ye;var Le=Ln(29,ye,null,G.mode);return Le.lanes=ie,Le.return=G,Le}finally{}}}var ma=ty(!0),ny=ty(!1),Wn=Z(null),Ri=null;function zs(s){var a=s.alternate;se(_t,_t.current&1),se(Wn,s),Ri===null&&(a===null||ua.current!==null||a.memoizedState!==null)&&(Ri=s)}function iy(s){if(s.tag===22){if(se(_t,_t.current),se(Wn,s),Ri===null){var a=s.alternate;a!==null&&a.memoizedState!==null&&(Ri=s)}}else js()}function js(){se(_t,_t.current),se(Wn,Wn.current)}function ss(s){oe(Wn),Ri===s&&(Ri=null),oe(_t)}var _t=Z(0);function Wc(s){for(var a=s;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||xp(l)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Rh(s,a,l,f){a=s.memoizedState,l=l(f,a),l=l==null?a:p({},a,l),s.memoizedState=l,s.lanes===0&&(s.updateQueue.baseState=l)}var Lh={enqueueSetState:function(s,a,l){s=s._reactInternals;var f=jn(),m=Ls(f);m.payload=a,l!=null&&(m.callback=l),a=Ds(s,m,f),a!==null&&(Pn(a,s,f),Po(a,s,f))},enqueueReplaceState:function(s,a,l){s=s._reactInternals;var f=jn(),m=Ls(f);m.tag=1,m.payload=a,l!=null&&(m.callback=l),a=Ds(s,m,f),a!==null&&(Pn(a,s,f),Po(a,s,f))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var l=jn(),f=Ls(l);f.tag=2,a!=null&&(f.callback=a),a=Ds(s,f,l),a!==null&&(Pn(a,s,l),Po(a,s,l))}};function sy(s,a,l,f,m,v,E){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(f,v,E):a.prototype&&a.prototype.isPureReactComponent?!Ao(l,f)||!Ao(m,v):!0}function ry(s,a,l,f){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,f),a.state!==s&&Lh.enqueueReplaceState(a,a.state,null)}function Er(s,a){var l=a;if("ref"in a){l={};for(var f in a)f!=="ref"&&(l[f]=a[f])}if(s=s.defaultProps){l===a&&(l=p({},l));for(var m in s)l[m]===void 0&&(l[m]=s[m])}return l}var $c=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function ay(s){$c(s)}function oy(s){console.error(s)}function ly(s){$c(s)}function Jc(s,a){try{var l=s.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(f){setTimeout(function(){throw f})}}function cy(s,a,l){try{var f=s.onCaughtError;f(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function Dh(s,a,l){return l=Ls(l),l.tag=3,l.payload={element:null},l.callback=function(){Jc(s,a)},l}function uy(s){return s=Ls(s),s.tag=3,s}function fy(s,a,l,f){var m=l.type.getDerivedStateFromError;if(typeof m=="function"){var v=f.value;s.payload=function(){return m(v)},s.callback=function(){cy(a,l,f)}}var E=l.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(s.callback=function(){cy(a,l,f),typeof m!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var O=f.stack;this.componentDidCatch(f.value,{componentStack:O!==null?O:""})})}function r8(s,a,l,f,m){if(l.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){if(a=l.alternate,a!==null&&Lo(a,l,m,!0),l=Wn.current,l!==null){switch(l.tag){case 13:return Ri===null?np():l.alternate===null&&pt===0&&(pt=3),l.flags&=-257,l.flags|=65536,l.lanes=m,f===oh?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([f]):a.add(f),sp(s,f,m)),!1;case 22:return l.flags|=65536,f===oh?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([f])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([f]):l.add(f)),sp(s,f,m)),!1}throw Error(i(435,l.tag))}return sp(s,f,m),np(),!1}if(Ie)return a=Wn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=m,f!==eh&&(s=Error(i(422),{cause:f}),Ro(Xn(s,l)))):(f!==eh&&(a=Error(i(423),{cause:f}),Ro(Xn(a,l))),s=s.current.alternate,s.flags|=65536,m&=-m,s.lanes|=m,f=Xn(f,l),m=Dh(s.stateNode,f,m),uh(s,m),pt!==4&&(pt=2)),!1;var v=Error(i(520),{cause:f});if(v=Xn(v,l),Wo===null?Wo=[v]:Wo.push(v),pt!==4&&(pt=2),a===null)return!0;f=Xn(f,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,s=m&-m,l.lanes|=s,s=Dh(l.stateNode,f,s),uh(l,s),!1;case 1:if(a=l.type,v=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vs===null||!Vs.has(v))))return l.flags|=65536,m&=-m,l.lanes|=m,m=uy(m),fy(m,s,l,f),uh(l,m),!1}l=l.return}while(l!==null);return!1}var dy=Error(i(461)),zt=!1;function Vt(s,a,l,f){a.child=s===null?ny(a,null,l,f):ma(a,s.child,l,f)}function hy(s,a,l,f,m){l=l.render;var v=a.ref;if("ref"in f){var E={};for(var O in f)O!=="ref"&&(E[O]=f[O])}else E=f;return wr(a),f=mh(s,a,l,E,v,m),O=gh(),s!==null&&!zt?(yh(s,a,m),rs(s,a,m)):(Ie&&O&&$d(a),a.flags|=1,Vt(s,a,f,m),a.child)}function py(s,a,l,f,m){if(s===null){var v=l.type;return typeof v=="function"&&!Zd(v)&&v.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=v,my(s,a,v,f,m)):(s=Dc(l.type,null,f,a,a.mode,m),s.ref=a.ref,s.return=a,a.child=s)}if(v=s.child,!Hh(s,m)){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ao,l(E,f)&&s.ref===a.ref)return rs(s,a,m)}return a.flags|=1,s=$i(v,f),s.ref=a.ref,s.return=a,a.child=s}function my(s,a,l,f,m){if(s!==null){var v=s.memoizedProps;if(Ao(v,f)&&s.ref===a.ref)if(zt=!1,a.pendingProps=f=v,Hh(s,m))(s.flags&131072)!==0&&(zt=!0);else return a.lanes=s.lanes,rs(s,a,m)}return _h(s,a,l,f,m)}function gy(s,a,l){var f=a.pendingProps,m=f.children,v=s!==null?s.memoizedState:null;if(f.mode==="hidden"){if((a.flags&128)!==0){if(f=v!==null?v.baseLanes|l:l,s!==null){for(m=a.child=s.child,v=0;m!==null;)v=v|m.lanes|m.childLanes,m=m.sibling;a.childLanes=v&~f}else a.childLanes=0,a.child=null;return yy(s,a,f,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},s!==null&&Nc(a,v!==null?v.cachePool:null),v!==null?m1(a,v):dh(),iy(a);else return a.lanes=a.childLanes=536870912,yy(s,a,v!==null?v.baseLanes|l:l,l)}else v!==null?(Nc(a,v.cachePool),m1(a,v),js(),a.memoizedState=null):(s!==null&&Nc(a,null),dh(),js());return Vt(s,a,m,l),a.child}function yy(s,a,l,f){var m=ah();return m=m===null?null:{parent:Dt._currentValue,pool:m},a.memoizedState={baseLanes:l,cachePool:m},s!==null&&Nc(a,null),dh(),iy(a),s!==null&&Lo(s,a,f,!0),null}function eu(s,a){var l=a.ref;if(l===null)s!==null&&s.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(s===null||s.ref!==l)&&(a.flags|=4194816)}}function _h(s,a,l,f,m){return wr(a),l=mh(s,a,l,f,void 0,m),f=gh(),s!==null&&!zt?(yh(s,a,m),rs(s,a,m)):(Ie&&f&&$d(a),a.flags|=1,Vt(s,a,l,m),a.child)}function vy(s,a,l,f,m,v){return wr(a),a.updateQueue=null,l=y1(a,f,l,m),g1(s),f=gh(),s!==null&&!zt?(yh(s,a,v),rs(s,a,v)):(Ie&&f&&$d(a),a.flags|=1,Vt(s,a,l,v),a.child)}function xy(s,a,l,f,m){if(wr(a),a.stateNode===null){var v=ra,E=l.contextType;typeof E=="object"&&E!==null&&(v=Jt(E)),v=new l(f,v),a.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,v.updater=Lh,a.stateNode=v,v._reactInternals=a,v=a.stateNode,v.props=f,v.state=a.memoizedState,v.refs={},lh(a),E=l.contextType,v.context=typeof E=="object"&&E!==null?Jt(E):ra,v.state=a.memoizedState,E=l.getDerivedStateFromProps,typeof E=="function"&&(Rh(a,l,E,f),v.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(E=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),E!==v.state&&Lh.enqueueReplaceState(v,v.state,null),Bo(a,f,v,m),No(),v.state=a.memoizedState),typeof v.componentDidMount=="function"&&(a.flags|=4194308),f=!0}else if(s===null){v=a.stateNode;var O=a.memoizedProps,B=Er(l,O);v.props=B;var Q=v.context,ne=l.contextType;E=ra,typeof ne=="object"&&ne!==null&&(E=Jt(ne));var re=l.getDerivedStateFromProps;ne=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function",O=a.pendingProps!==O,ne||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(O||Q!==E)&&ry(a,v,f,E),Rs=!1;var K=a.memoizedState;v.state=K,Bo(a,f,v,m),No(),Q=a.memoizedState,O||K!==Q||Rs?(typeof re=="function"&&(Rh(a,l,re,f),Q=a.memoizedState),(B=Rs||sy(a,l,B,f,K,Q,E))?(ne||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(a.flags|=4194308)):(typeof v.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=Q),v.props=f,v.state=Q,v.context=E,f=B):(typeof v.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{v=a.stateNode,ch(s,a),E=a.memoizedProps,ne=Er(l,E),v.props=ne,re=a.pendingProps,K=v.context,Q=l.contextType,B=ra,typeof Q=="object"&&Q!==null&&(B=Jt(Q)),O=l.getDerivedStateFromProps,(Q=typeof O=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(E!==re||K!==B)&&ry(a,v,f,B),Rs=!1,K=a.memoizedState,v.state=K,Bo(a,f,v,m),No();var W=a.memoizedState;E!==re||K!==W||Rs||s!==null&&s.dependencies!==null&&jc(s.dependencies)?(typeof O=="function"&&(Rh(a,l,O,f),W=a.memoizedState),(ne=Rs||sy(a,l,ne,f,K,W,B)||s!==null&&s.dependencies!==null&&jc(s.dependencies))?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(f,W,B),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(f,W,B)),typeof v.componentDidUpdate=="function"&&(a.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof v.componentDidUpdate!="function"||E===s.memoizedProps&&K===s.memoizedState||(a.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===s.memoizedProps&&K===s.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=W),v.props=f,v.state=W,v.context=B,f=ne):(typeof v.componentDidUpdate!="function"||E===s.memoizedProps&&K===s.memoizedState||(a.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||E===s.memoizedProps&&K===s.memoizedState||(a.flags|=1024),f=!1)}return v=f,eu(s,a),f=(a.flags&128)!==0,v||f?(v=a.stateNode,l=f&&typeof l.getDerivedStateFromError!="function"?null:v.render(),a.flags|=1,s!==null&&f?(a.child=ma(a,s.child,null,m),a.child=ma(a,null,l,m)):Vt(s,a,l,m),a.memoizedState=v.state,s=a.child):s=rs(s,a,m),s}function by(s,a,l,f){return ko(),a.flags|=256,Vt(s,a,l,f),a.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jh(s){return{baseLanes:s,cachePool:o1()}}function Ph(s,a,l){return s=s!==null?s.childLanes&~l:0,a&&(s|=$n),s}function wy(s,a,l){var f=a.pendingProps,m=!1,v=(a.flags&128)!==0,E;if((E=v)||(E=s!==null&&s.memoizedState===null?!1:(_t.current&2)!==0),E&&(m=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,s===null){if(Ie){if(m?zs(a):js(),Ie){var O=ht,B;if(B=O){e:{for(B=O,O=ki;B.nodeType!==8;){if(!O){O=null;break e}if(B=di(B.nextSibling),B===null){O=null;break e}}O=B}O!==null?(a.memoizedState={dehydrated:O,treeContext:gr!==null?{id:Ji,overflow:es}:null,retryLane:536870912,hydrationErrors:null},B=Ln(18,null,null,0),B.stateNode=O,B.return=a,a.child=B,on=a,ht=null,B=!0):B=!1}B||xr(a)}if(O=a.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return xp(O)?a.lanes=32:a.lanes=536870912,null;ss(a)}return O=f.children,f=f.fallback,m?(js(),m=a.mode,O=tu({mode:"hidden",children:O},m),f=mr(f,m,l,null),O.return=a,f.return=a,O.sibling=f,a.child=O,m=a.child,m.memoizedState=jh(l),m.childLanes=Ph(s,E,l),a.memoizedState=zh,f):(zs(a),Nh(a,O))}if(B=s.memoizedState,B!==null&&(O=B.dehydrated,O!==null)){if(v)a.flags&256?(zs(a),a.flags&=-257,a=Bh(s,a,l)):a.memoizedState!==null?(js(),a.child=s.child,a.flags|=128,a=null):(js(),m=f.fallback,O=a.mode,f=tu({mode:"visible",children:f.children},O),m=mr(m,O,l,null),m.flags|=2,f.return=a,m.return=a,f.sibling=m,a.child=f,ma(a,s.child,null,l),f=a.child,f.memoizedState=jh(l),f.childLanes=Ph(s,E,l),a.memoizedState=zh,a=m);else if(zs(a),xp(O)){if(E=O.nextSibling&&O.nextSibling.dataset,E)var Q=E.dgst;E=Q,f=Error(i(419)),f.stack="",f.digest=E,Ro({value:f,source:null,stack:null}),a=Bh(s,a,l)}else if(zt||Lo(s,a,l,!1),E=(l&s.childLanes)!==0,zt||E){if(E=nt,E!==null&&(f=l&-l,f=(f&42)!==0?1:Ai(f),f=(f&(E.suspendedLanes|l))!==0?0:f,f!==0&&f!==B.retryLane))throw B.retryLane=f,sa(s,f),Pn(E,s,f),dy;O.data==="$?"||np(),a=Bh(s,a,l)}else O.data==="$?"?(a.flags|=192,a.child=s.child,a=null):(s=B.treeContext,ht=di(O.nextSibling),on=a,Ie=!0,vr=null,ki=!1,s!==null&&(Zn[Kn++]=Ji,Zn[Kn++]=es,Zn[Kn++]=gr,Ji=s.id,es=s.overflow,gr=a),a=Nh(a,f.children),a.flags|=4096);return a}return m?(js(),m=f.fallback,O=a.mode,B=s.child,Q=B.sibling,f=$i(B,{mode:"hidden",children:f.children}),f.subtreeFlags=B.subtreeFlags&65011712,Q!==null?m=$i(Q,m):(m=mr(m,O,l,null),m.flags|=2),m.return=a,f.return=a,f.sibling=m,a.child=f,f=m,m=a.child,O=s.child.memoizedState,O===null?O=jh(l):(B=O.cachePool,B!==null?(Q=Dt._currentValue,B=B.parent!==Q?{parent:Q,pool:Q}:B):B=o1(),O={baseLanes:O.baseLanes|l,cachePool:B}),m.memoizedState=O,m.childLanes=Ph(s,E,l),a.memoizedState=zh,f):(zs(a),l=s.child,s=l.sibling,l=$i(l,{mode:"visible",children:f.children}),l.return=a,l.sibling=null,s!==null&&(E=a.deletions,E===null?(a.deletions=[s],a.flags|=16):E.push(s)),a.child=l,a.memoizedState=null,l)}function Nh(s,a){return a=tu({mode:"visible",children:a},s.mode),a.return=s,s.child=a}function tu(s,a){return s=Ln(22,s,null,a),s.lanes=0,s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},s}function Bh(s,a,l){return ma(a,s.child,null,l),s=Nh(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function Sy(s,a,l){s.lanes|=a;var f=s.alternate;f!==null&&(f.lanes|=a),nh(s.return,a,l)}function Ih(s,a,l,f,m){var v=s.memoizedState;v===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=m)}function Ty(s,a,l){var f=a.pendingProps,m=f.revealOrder,v=f.tail;if(Vt(s,a,f.children,l),f=_t.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Sy(s,l,a);else if(s.tag===19)Sy(s,l,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}f&=1}switch(se(_t,f),m){case"forwards":for(l=a.child,m=null;l!==null;)s=l.alternate,s!==null&&Wc(s)===null&&(m=l),l=l.sibling;l=m,l===null?(m=a.child,a.child=null):(m=l.sibling,l.sibling=null),Ih(a,!1,m,l,v);break;case"backwards":for(l=null,m=a.child,a.child=null;m!==null;){if(s=m.alternate,s!==null&&Wc(s)===null){a.child=m;break}s=m.sibling,m.sibling=l,l=m,m=s}Ih(a,!0,l,null,v);break;case"together":Ih(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function rs(s,a,l){if(s!==null&&(a.dependencies=s.dependencies),Hs|=a.lanes,(l&a.childLanes)===0)if(s!==null){if(Lo(s,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(s!==null&&a.child!==s.child)throw Error(i(153));if(a.child!==null){for(s=a.child,l=$i(s,s.pendingProps),a.child=l,l.return=a;s.sibling!==null;)s=s.sibling,l=l.sibling=$i(s,s.pendingProps),l.return=a;l.sibling=null}return a.child}function Hh(s,a){return(s.lanes&a)!==0?!0:(s=s.dependencies,!!(s!==null&&jc(s)))}function a8(s,a,l){switch(a.tag){case 3:fe(a,a.stateNode.containerInfo),ks(a,Dt,s.memoizedState.cache),ko();break;case 27:case 5:$e(a);break;case 4:fe(a,a.stateNode.containerInfo);break;case 10:ks(a,a.type,a.memoizedProps.value);break;case 13:var f=a.memoizedState;if(f!==null)return f.dehydrated!==null?(zs(a),a.flags|=128,null):(l&a.child.childLanes)!==0?wy(s,a,l):(zs(a),s=rs(s,a,l),s!==null?s.sibling:null);zs(a);break;case 19:var m=(s.flags&128)!==0;if(f=(l&a.childLanes)!==0,f||(Lo(s,a,l,!1),f=(l&a.childLanes)!==0),m){if(f)return Ty(s,a,l);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),se(_t,_t.current),f)break;return null;case 22:case 23:return a.lanes=0,gy(s,a,l);case 24:ks(a,Dt,s.memoizedState.cache)}return rs(s,a,l)}function Ey(s,a,l){if(s!==null)if(s.memoizedProps!==a.pendingProps)zt=!0;else{if(!Hh(s,l)&&(a.flags&128)===0)return zt=!1,a8(s,a,l);zt=(s.flags&131072)!==0}else zt=!1,Ie&&(a.flags&1048576)!==0&&e1(a,zc,a.index);switch(a.lanes=0,a.tag){case 16:e:{s=a.pendingProps;var f=a.elementType,m=f._init;if(f=m(f._payload),a.type=f,typeof f=="function")Zd(f)?(s=Er(f,s),a.tag=1,a=xy(null,a,f,s,l)):(a.tag=0,a=_h(null,a,f,s,l));else{if(f!=null){if(m=f.$$typeof,m===R){a.tag=11,a=hy(null,a,f,s,l);break e}else if(m===L){a.tag=14,a=py(null,a,f,s,l);break e}}throw a=$(f)||f,Error(i(306,a,""))}}return a;case 0:return _h(s,a,a.type,a.pendingProps,l);case 1:return f=a.type,m=Er(f,a.pendingProps),xy(s,a,f,m,l);case 3:e:{if(fe(a,a.stateNode.containerInfo),s===null)throw Error(i(387));f=a.pendingProps;var v=a.memoizedState;m=v.element,ch(s,a),Bo(a,f,null,l);var E=a.memoizedState;if(f=E.cache,ks(a,Dt,f),f!==v.cache&&ih(a,[Dt],l,!0),No(),f=E.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=v,a.memoizedState=v,a.flags&256){a=by(s,a,f,l);break e}else if(f!==m){m=Xn(Error(i(424)),a),Ro(m),a=by(s,a,f,l);break e}else{switch(s=a.stateNode.containerInfo,s.nodeType){case 9:s=s.body;break;default:s=s.nodeName==="HTML"?s.ownerDocument.body:s}for(ht=di(s.firstChild),on=a,Ie=!0,vr=null,ki=!0,l=ny(a,null,f,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(ko(),f===m){a=rs(s,a,l);break e}Vt(s,a,f,l)}a=a.child}return a;case 26:return eu(s,a),s===null?(l=Ov(a.type,null,a.pendingProps,null))?a.memoizedState=l:Ie||(l=a.type,s=a.pendingProps,f=mu(he.current).createElement(l),f[Rt]=a,f[Wt]=s,qt(f,l,s),Tt(f),a.stateNode=f):a.memoizedState=Ov(a.type,s.memoizedProps,a.pendingProps,s.memoizedState),null;case 27:return $e(a),s===null&&Ie&&(f=a.stateNode=Cv(a.type,a.pendingProps,he.current),on=a,ki=!0,m=ht,Fs(a.type)?(bp=m,ht=di(f.firstChild)):ht=m),Vt(s,a,a.pendingProps.children,l),eu(s,a),s===null&&(a.flags|=4194304),a.child;case 5:return s===null&&Ie&&((m=f=ht)&&(f=z8(f,a.type,a.pendingProps,ki),f!==null?(a.stateNode=f,on=a,ht=di(f.firstChild),ki=!1,m=!0):m=!1),m||xr(a)),$e(a),m=a.type,v=a.pendingProps,E=s!==null?s.memoizedProps:null,f=v.children,gp(m,v)?f=null:E!==null&&gp(m,E)&&(a.flags|=32),a.memoizedState!==null&&(m=mh(s,a,$T,null,null,l),al._currentValue=m),eu(s,a),Vt(s,a,f,l),a.child;case 6:return s===null&&Ie&&((s=l=ht)&&(l=j8(l,a.pendingProps,ki),l!==null?(a.stateNode=l,on=a,ht=null,s=!0):s=!1),s||xr(a)),null;case 13:return wy(s,a,l);case 4:return fe(a,a.stateNode.containerInfo),f=a.pendingProps,s===null?a.child=ma(a,null,f,l):Vt(s,a,f,l),a.child;case 11:return hy(s,a,a.type,a.pendingProps,l);case 7:return Vt(s,a,a.pendingProps,l),a.child;case 8:return Vt(s,a,a.pendingProps.children,l),a.child;case 12:return Vt(s,a,a.pendingProps.children,l),a.child;case 10:return f=a.pendingProps,ks(a,a.type,f.value),Vt(s,a,f.children,l),a.child;case 9:return m=a.type._context,f=a.pendingProps.children,wr(a),m=Jt(m),f=f(m),a.flags|=1,Vt(s,a,f,l),a.child;case 14:return py(s,a,a.type,a.pendingProps,l);case 15:return my(s,a,a.type,a.pendingProps,l);case 19:return Ty(s,a,l);case 31:return f=a.pendingProps,l=a.mode,f={mode:f.mode,children:f.children},s===null?(l=tu(f,l),l.ref=a.ref,a.child=l,l.return=a,a=l):(l=$i(s.child,f),l.ref=a.ref,a.child=l,l.return=a,a=l),a;case 22:return gy(s,a,l);case 24:return wr(a),f=Jt(Dt),s===null?(m=ah(),m===null&&(m=nt,v=sh(),m.pooledCache=v,v.refCount++,v!==null&&(m.pooledCacheLanes|=l),m=v),a.memoizedState={parent:f,cache:m},lh(a),ks(a,Dt,m)):((s.lanes&l)!==0&&(ch(s,a),Bo(a,null,null,l),No()),m=s.memoizedState,v=a.memoizedState,m.parent!==f?(m={parent:f,cache:f},a.memoizedState=m,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=m),ks(a,Dt,f)):(f=v.cache,ks(a,Dt,f),f!==m.cache&&ih(a,[Dt],l,!0))),Vt(s,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function as(s){s.flags|=4}function Cy(s,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)s.flags&=-16777217;else if(s.flags|=16777216,!_v(a)){if(a=Wn.current,a!==null&&((je&4194048)===je?Ri!==null:(je&62914560)!==je&&(je&536870912)===0||a!==Ri))throw jo=oh,l1;s.flags|=8192}}function nu(s,a){a!==null&&(s.flags|=4),s.flags&16384&&(a=s.tag!==22?fr():536870912,s.lanes|=a,xa|=a)}function Go(s,a){if(!Ie)switch(s.tailMode){case"hidden":a=s.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?s.tail=null:l.sibling=null;break;case"collapsed":l=s.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:f.sibling=null}}function lt(s){var a=s.alternate!==null&&s.alternate.child===s.child,l=0,f=0;if(a)for(var m=s.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&65011712,f|=m.flags&65011712,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=f,s.childLanes=l,a}function o8(s,a,l){var f=a.pendingProps;switch(Jd(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(a),null;case 1:return lt(a),null;case 3:return l=a.stateNode,f=null,s!==null&&(f=s.memoizedState.cache),a.memoizedState.cache!==f&&(a.flags|=2048),ns(Dt),Ee(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(s===null||s.child===null)&&(Oo(a)?as(a):s===null||s.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,i1())),lt(a),null;case 26:return l=a.memoizedState,s===null?(as(a),l!==null?(lt(a),Cy(a,l)):(lt(a),a.flags&=-16777217)):l?l!==s.memoizedState?(as(a),lt(a),Cy(a,l)):(lt(a),a.flags&=-16777217):(s.memoizedProps!==f&&as(a),lt(a),a.flags&=-16777217),null;case 27:Je(a),l=he.current;var m=a.type;if(s!==null&&a.stateNode!=null)s.memoizedProps!==f&&as(a);else{if(!f){if(a.stateNode===null)throw Error(i(166));return lt(a),null}s=ue.current,Oo(a)?t1(a):(s=Cv(m,f,l),a.stateNode=s,as(a))}return lt(a),null;case 5:if(Je(a),l=a.type,s!==null&&a.stateNode!=null)s.memoizedProps!==f&&as(a);else{if(!f){if(a.stateNode===null)throw Error(i(166));return lt(a),null}if(s=ue.current,Oo(a))t1(a);else{switch(m=mu(he.current),s){case 1:s=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=m.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof f.is=="string"?m.createElement("select",{is:f.is}):m.createElement("select"),f.multiple?s.multiple=!0:f.size&&(s.size=f.size);break;default:s=typeof f.is=="string"?m.createElement(l,{is:f.is}):m.createElement(l)}}s[Rt]=a,s[Wt]=f;e:for(m=a.child;m!==null;){if(m.tag===5||m.tag===6)s.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===a)break e;for(;m.sibling===null;){if(m.return===null||m.return===a)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}a.stateNode=s;e:switch(qt(s,l,f),l){case"button":case"input":case"select":case"textarea":s=!!f.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&as(a)}}return lt(a),a.flags&=-16777217,null;case 6:if(s&&a.stateNode!=null)s.memoizedProps!==f&&as(a);else{if(typeof f!="string"&&a.stateNode===null)throw Error(i(166));if(s=he.current,Oo(a)){if(s=a.stateNode,l=a.memoizedProps,f=null,m=on,m!==null)switch(m.tag){case 27:case 5:f=m.memoizedProps}s[Rt]=a,s=!!(s.nodeValue===l||f!==null&&f.suppressHydrationWarning===!0||vv(s.nodeValue,l)),s||xr(a)}else s=mu(s).createTextNode(f),s[Rt]=a,a.stateNode=s}return lt(a),null;case 13:if(f=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(m=Oo(a),f!==null&&f.dehydrated!==null){if(s===null){if(!m)throw Error(i(318));if(m=a.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[Rt]=a}else ko(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;lt(a),m=!1}else m=i1(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=m),m=!0;if(!m)return a.flags&256?(ss(a),a):(ss(a),null)}if(ss(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=f!==null,s=s!==null&&s.memoizedState!==null,l){f=a.child,m=null,f.alternate!==null&&f.alternate.memoizedState!==null&&f.alternate.memoizedState.cachePool!==null&&(m=f.alternate.memoizedState.cachePool.pool);var v=null;f.memoizedState!==null&&f.memoizedState.cachePool!==null&&(v=f.memoizedState.cachePool.pool),v!==m&&(f.flags|=2048)}return l!==s&&l&&(a.child.flags|=8192),nu(a,a.updateQueue),lt(a),null;case 4:return Ee(),s===null&&fp(a.stateNode.containerInfo),lt(a),null;case 10:return ns(a.type),lt(a),null;case 19:if(oe(_t),m=a.memoizedState,m===null)return lt(a),null;if(f=(a.flags&128)!==0,v=m.rendering,v===null)if(f)Go(m,!1);else{if(pt!==0||s!==null&&(s.flags&128)!==0)for(s=a.child;s!==null;){if(v=Wc(s),v!==null){for(a.flags|=128,Go(m,!1),s=v.updateQueue,a.updateQueue=s,nu(a,s),a.subtreeFlags=0,s=l,l=a.child;l!==null;)J2(l,s),l=l.sibling;return se(_t,_t.current&1|2),a.child}s=s.sibling}m.tail!==null&&St()>ru&&(a.flags|=128,f=!0,Go(m,!1),a.lanes=4194304)}else{if(!f)if(s=Wc(v),s!==null){if(a.flags|=128,f=!0,s=s.updateQueue,a.updateQueue=s,nu(a,s),Go(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ie)return lt(a),null}else 2*St()-m.renderingStartTime>ru&&l!==536870912&&(a.flags|=128,f=!0,Go(m,!1),a.lanes=4194304);m.isBackwards?(v.sibling=a.child,a.child=v):(s=m.last,s!==null?s.sibling=v:a.child=v,m.last=v)}return m.tail!==null?(a=m.tail,m.rendering=a,m.tail=a.sibling,m.renderingStartTime=St(),a.sibling=null,s=_t.current,se(_t,f?s&1|2:s&1),a):(lt(a),null);case 22:case 23:return ss(a),hh(),f=a.memoizedState!==null,s!==null?s.memoizedState!==null!==f&&(a.flags|=8192):f&&(a.flags|=8192),f?(l&536870912)!==0&&(a.flags&128)===0&&(lt(a),a.subtreeFlags&6&&(a.flags|=8192)):lt(a),l=a.updateQueue,l!==null&&nu(a,l.retryQueue),l=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),f=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(f=a.memoizedState.cachePool.pool),f!==l&&(a.flags|=2048),s!==null&&oe(Sr),null;case 24:return l=null,s!==null&&(l=s.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ns(Dt),lt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function l8(s,a){switch(Jd(a),a.tag){case 1:return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return ns(Dt),Ee(),s=a.flags,(s&65536)!==0&&(s&128)===0?(a.flags=s&-65537|128,a):null;case 26:case 27:case 5:return Je(a),null;case 13:if(ss(a),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(i(340));ko()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return oe(_t),null;case 4:return Ee(),null;case 10:return ns(a.type),null;case 22:case 23:return ss(a),hh(),s!==null&&oe(Sr),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 24:return ns(Dt),null;case 25:return null;default:return null}}function Ay(s,a){switch(Jd(a),a.tag){case 3:ns(Dt),Ee();break;case 26:case 27:case 5:Je(a);break;case 4:Ee();break;case 13:ss(a);break;case 19:oe(_t);break;case 10:ns(a.type);break;case 22:case 23:ss(a),hh(),s!==null&&oe(Sr);break;case 24:ns(Dt)}}function Yo(s,a){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&s)===s){f=void 0;var v=l.create,E=l.inst;f=v(),E.destroy=f}l=l.next}while(l!==m)}}catch(O){et(a,a.return,O)}}function Ps(s,a,l){try{var f=a.updateQueue,m=f!==null?f.lastEffect:null;if(m!==null){var v=m.next;f=v;do{if((f.tag&s)===s){var E=f.inst,O=E.destroy;if(O!==void 0){E.destroy=void 0,m=a;var B=l,Q=O;try{Q()}catch(ne){et(m,B,ne)}}}f=f.next}while(f!==v)}}catch(ne){et(a,a.return,ne)}}function My(s){var a=s.updateQueue;if(a!==null){var l=s.stateNode;try{p1(a,l)}catch(f){et(s,s.return,f)}}}function Oy(s,a,l){l.props=Er(s.type,s.memoizedProps),l.state=s.memoizedState;try{l.componentWillUnmount()}catch(f){et(s,a,f)}}function Xo(s,a){try{var l=s.ref;if(l!==null){switch(s.tag){case 26:case 27:case 5:var f=s.stateNode;break;case 30:f=s.stateNode;break;default:f=s.stateNode}typeof l=="function"?s.refCleanup=l(f):l.current=f}}catch(m){et(s,a,m)}}function Li(s,a){var l=s.ref,f=s.refCleanup;if(l!==null)if(typeof f=="function")try{f()}catch(m){et(s,a,m)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(m){et(s,a,m)}else l.current=null}function ky(s){var a=s.type,l=s.memoizedProps,f=s.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&f.focus();break e;case"img":l.src?f.src=l.src:l.srcSet&&(f.srcset=l.srcSet)}}catch(m){et(s,s.return,m)}}function Vh(s,a,l){try{var f=s.stateNode;k8(f,s.type,l,a),f[Wt]=a}catch(m){et(s,s.return,m)}}function Ry(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27&&Fs(s.type)||s.tag===4}function Uh(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Ry(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.tag===27&&Fs(s.type)||s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function qh(s,a,l){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(s,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(s),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=pu));else if(f!==4&&(f===27&&Fs(s.type)&&(l=s.stateNode,a=null),s=s.child,s!==null))for(qh(s,a,l),s=s.sibling;s!==null;)qh(s,a,l),s=s.sibling}function iu(s,a,l){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?l.insertBefore(s,a):l.appendChild(s);else if(f!==4&&(f===27&&Fs(s.type)&&(l=s.stateNode),s=s.child,s!==null))for(iu(s,a,l),s=s.sibling;s!==null;)iu(s,a,l),s=s.sibling}function Ly(s){var a=s.stateNode,l=s.memoizedProps;try{for(var f=s.type,m=a.attributes;m.length;)a.removeAttributeNode(m[0]);qt(a,f,l),a[Rt]=s,a[Wt]=l}catch(v){et(s,s.return,v)}}var os=!1,vt=!1,Fh=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,jt=null;function c8(s,a){if(s=s.containerInfo,pp=wu,s=q2(s),Ud(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else e:{l=(l=s.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,O=-1,B=-1,Q=0,ne=0,re=s,K=null;t:for(;;){for(var W;re!==l||m!==0&&re.nodeType!==3||(O=E+m),re!==v||f!==0&&re.nodeType!==3||(B=E+f),re.nodeType===3&&(E+=re.nodeValue.length),(W=re.firstChild)!==null;)K=re,re=W;for(;;){if(re===s)break t;if(K===l&&++Q===m&&(O=E),K===v&&++ne===f&&(B=E),(W=re.nextSibling)!==null)break;re=K,K=re.parentNode}re=W}l=O===-1||B===-1?null:{start:O,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(mp={focusedElem:s,selectionRange:l},wu=!1,jt=a;jt!==null;)if(a=jt,s=a.child,(a.subtreeFlags&1024)!==0&&s!==null)s.return=a,jt=s;else for(;jt!==null;){switch(a=jt,v=a.alternate,s=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((s&1024)!==0&&v!==null){s=void 0,l=a,m=v.memoizedProps,v=v.memoizedState,f=l.stateNode;try{var Se=Er(l.type,m,l.elementType===l.type);s=f.getSnapshotBeforeUpdate(Se,v),f.__reactInternalSnapshotBeforeUpdate=s}catch(ve){et(l,l.return,ve)}}break;case 3:if((s&1024)!==0){if(s=a.stateNode.containerInfo,l=s.nodeType,l===9)vp(s);else if(l===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":vp(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((s&1024)!==0)throw Error(i(163))}if(s=a.sibling,s!==null){s.return=a.return,jt=s;break}jt=a.return}}function _y(s,a,l){var f=l.flags;switch(l.tag){case 0:case 11:case 15:Ns(s,l),f&4&&Yo(5,l);break;case 1:if(Ns(s,l),f&4)if(s=l.stateNode,a===null)try{s.componentDidMount()}catch(E){et(l,l.return,E)}else{var m=Er(l.type,a.memoizedProps);a=a.memoizedState;try{s.componentDidUpdate(m,a,s.__reactInternalSnapshotBeforeUpdate)}catch(E){et(l,l.return,E)}}f&64&&My(l),f&512&&Xo(l,l.return);break;case 3:if(Ns(s,l),f&64&&(s=l.updateQueue,s!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{p1(s,a)}catch(E){et(l,l.return,E)}}break;case 27:a===null&&f&4&&Ly(l);case 26:case 5:Ns(s,l),a===null&&f&4&&ky(l),f&512&&Xo(l,l.return);break;case 12:Ns(s,l);break;case 13:Ns(s,l),f&4&&Py(s,l),f&64&&(s=l.memoizedState,s!==null&&(s=s.dehydrated,s!==null&&(l=v8.bind(null,l),P8(s,l))));break;case 22:if(f=l.memoizedState!==null||os,!f){a=a!==null&&a.memoizedState!==null||vt,m=os;var v=vt;os=f,(vt=a)&&!v?Bs(s,l,(l.subtreeFlags&8772)!==0):Ns(s,l),os=m,vt=v}break;case 30:break;default:Ns(s,l)}}function zy(s){var a=s.alternate;a!==null&&(s.alternate=null,zy(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&On(a)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var rt=null,wn=!1;function ls(s,a,l){for(l=l.child;l!==null;)jy(s,a,l),l=l.sibling}function jy(s,a,l){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Fn,l)}catch{}switch(l.tag){case 26:vt||Li(l,a),ls(s,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:vt||Li(l,a);var f=rt,m=wn;Fs(l.type)&&(rt=l.stateNode,wn=!1),ls(s,a,l),nl(l.stateNode),rt=f,wn=m;break;case 5:vt||Li(l,a);case 6:if(f=rt,m=wn,rt=null,ls(s,a,l),rt=f,wn=m,rt!==null)if(wn)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(l.stateNode)}catch(v){et(l,a,v)}else try{rt.removeChild(l.stateNode)}catch(v){et(l,a,v)}break;case 18:rt!==null&&(wn?(s=rt,Tv(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,l.stateNode),ul(s)):Tv(rt,l.stateNode));break;case 4:f=rt,m=wn,rt=l.stateNode.containerInfo,wn=!0,ls(s,a,l),rt=f,wn=m;break;case 0:case 11:case 14:case 15:vt||Ps(2,l,a),vt||Ps(4,l,a),ls(s,a,l);break;case 1:vt||(Li(l,a),f=l.stateNode,typeof f.componentWillUnmount=="function"&&Oy(l,a,f)),ls(s,a,l);break;case 21:ls(s,a,l);break;case 22:vt=(f=vt)||l.memoizedState!==null,ls(s,a,l),vt=f;break;default:ls(s,a,l)}}function Py(s,a){if(a.memoizedState===null&&(s=a.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{ul(s)}catch(l){et(a,a.return,l)}}function u8(s){switch(s.tag){case 13:case 19:var a=s.stateNode;return a===null&&(a=s.stateNode=new Dy),a;case 22:return s=s.stateNode,a=s._retryCache,a===null&&(a=s._retryCache=new Dy),a;default:throw Error(i(435,s.tag))}}function Gh(s,a){var l=u8(s);a.forEach(function(f){var m=x8.bind(null,s,f);l.has(f)||(l.add(f),f.then(m,m))})}function Dn(s,a){var l=a.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f],v=s,E=a,O=E;e:for(;O!==null;){switch(O.tag){case 27:if(Fs(O.type)){rt=O.stateNode,wn=!1;break e}break;case 5:rt=O.stateNode,wn=!1;break e;case 3:case 4:rt=O.stateNode.containerInfo,wn=!0;break e}O=O.return}if(rt===null)throw Error(i(160));jy(v,E,m),rt=null,wn=!1,v=m.alternate,v!==null&&(v.return=null),m.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Ny(a,s),a=a.sibling}var fi=null;function Ny(s,a){var l=s.alternate,f=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:Dn(a,s),_n(s),f&4&&(Ps(3,s,s.return),Yo(3,s),Ps(5,s,s.return));break;case 1:Dn(a,s),_n(s),f&512&&(vt||l===null||Li(l,l.return)),f&64&&os&&(s=s.updateQueue,s!==null&&(f=s.callbacks,f!==null&&(l=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=l===null?f:l.concat(f))));break;case 26:var m=fi;if(Dn(a,s),_n(s),f&512&&(vt||l===null||Li(l,l.return)),f&4){var v=l!==null?l.memoizedState:null;if(f=s.memoizedState,l===null)if(f===null)if(s.stateNode===null){e:{f=s.type,l=s.memoizedProps,m=m.ownerDocument||m;t:switch(f){case"title":v=m.getElementsByTagName("title")[0],(!v||v[As]||v[Rt]||v.namespaceURI==="http://www.w3.org/2000/svg"||v.hasAttribute("itemprop"))&&(v=m.createElement(f),m.head.insertBefore(v,m.querySelector("head > title"))),qt(v,f,l),v[Rt]=s,Tt(v),f=v;break e;case"link":var E=Lv("link","href",m).get(f+(l.href||""));if(E){for(var O=0;O<E.length;O++)if(v=E[O],v.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&v.getAttribute("rel")===(l.rel==null?null:l.rel)&&v.getAttribute("title")===(l.title==null?null:l.title)&&v.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){E.splice(O,1);break t}}v=m.createElement(f),qt(v,f,l),m.head.appendChild(v);break;case"meta":if(E=Lv("meta","content",m).get(f+(l.content||""))){for(O=0;O<E.length;O++)if(v=E[O],v.getAttribute("content")===(l.content==null?null:""+l.content)&&v.getAttribute("name")===(l.name==null?null:l.name)&&v.getAttribute("property")===(l.property==null?null:l.property)&&v.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&v.getAttribute("charset")===(l.charSet==null?null:l.charSet)){E.splice(O,1);break t}}v=m.createElement(f),qt(v,f,l),m.head.appendChild(v);break;default:throw Error(i(468,f))}v[Rt]=s,Tt(v),f=v}s.stateNode=f}else Dv(m,s.type,s.stateNode);else s.stateNode=Rv(m,f,s.memoizedProps);else v!==f?(v===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):v.count--,f===null?Dv(m,s.type,s.stateNode):Rv(m,f,s.memoizedProps)):f===null&&s.stateNode!==null&&Vh(s,s.memoizedProps,l.memoizedProps)}break;case 27:Dn(a,s),_n(s),f&512&&(vt||l===null||Li(l,l.return)),l!==null&&f&4&&Vh(s,s.memoizedProps,l.memoizedProps);break;case 5:if(Dn(a,s),_n(s),f&512&&(vt||l===null||Li(l,l.return)),s.flags&32){m=s.stateNode;try{Wr(m,"")}catch(W){et(s,s.return,W)}}f&4&&s.stateNode!=null&&(m=s.memoizedProps,Vh(s,m,l!==null?l.memoizedProps:m)),f&1024&&(Fh=!0);break;case 6:if(Dn(a,s),_n(s),f&4){if(s.stateNode===null)throw Error(i(162));f=s.memoizedProps,l=s.stateNode;try{l.nodeValue=f}catch(W){et(s,s.return,W)}}break;case 3:if(vu=null,m=fi,fi=gu(a.containerInfo),Dn(a,s),fi=m,_n(s),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ul(a.containerInfo)}catch(W){et(s,s.return,W)}Fh&&(Fh=!1,By(s));break;case 4:f=fi,fi=gu(s.stateNode.containerInfo),Dn(a,s),_n(s),fi=f;break;case 12:Dn(a,s),_n(s);break;case 13:Dn(a,s),_n(s),s.child.flags&8192&&s.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Wh=St()),f&4&&(f=s.updateQueue,f!==null&&(s.updateQueue=null,Gh(s,f)));break;case 22:m=s.memoizedState!==null;var B=l!==null&&l.memoizedState!==null,Q=os,ne=vt;if(os=Q||m,vt=ne||B,Dn(a,s),vt=ne,os=Q,_n(s),f&8192)e:for(a=s.stateNode,a._visibility=m?a._visibility&-2:a._visibility|1,m&&(l===null||B||os||vt||Cr(s)),l=null,a=s;;){if(a.tag===5||a.tag===26){if(l===null){B=l=a;try{if(v=B.stateNode,m)E=v.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{O=B.stateNode;var re=B.memoizedProps.style,K=re!=null&&re.hasOwnProperty("display")?re.display:null;O.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(W){et(B,B.return,W)}}}else if(a.tag===6){if(l===null){B=a;try{B.stateNode.nodeValue=m?"":B.memoizedProps}catch(W){et(B,B.return,W)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===s)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break e;for(;a.sibling===null;){if(a.return===null||a.return===s)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}f&4&&(f=s.updateQueue,f!==null&&(l=f.retryQueue,l!==null&&(f.retryQueue=null,Gh(s,l))));break;case 19:Dn(a,s),_n(s),f&4&&(f=s.updateQueue,f!==null&&(s.updateQueue=null,Gh(s,f)));break;case 30:break;case 21:break;default:Dn(a,s),_n(s)}}function _n(s){var a=s.flags;if(a&2){try{for(var l,f=s.return;f!==null;){if(Ry(f)){l=f;break}f=f.return}if(l==null)throw Error(i(160));switch(l.tag){case 27:var m=l.stateNode,v=Uh(s);iu(s,v,m);break;case 5:var E=l.stateNode;l.flags&32&&(Wr(E,""),l.flags&=-33);var O=Uh(s);iu(s,O,E);break;case 3:case 4:var B=l.stateNode.containerInfo,Q=Uh(s);qh(s,Q,B);break;default:throw Error(i(161))}}catch(ne){et(s,s.return,ne)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function By(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var a=s;By(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),s=s.sibling}}function Ns(s,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)_y(s,a.alternate,a),a=a.sibling}function Cr(s){for(s=s.child;s!==null;){var a=s;switch(a.tag){case 0:case 11:case 14:case 15:Ps(4,a,a.return),Cr(a);break;case 1:Li(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Oy(a,a.return,l),Cr(a);break;case 27:nl(a.stateNode);case 26:case 5:Li(a,a.return),Cr(a);break;case 22:a.memoizedState===null&&Cr(a);break;case 30:Cr(a);break;default:Cr(a)}s=s.sibling}}function Bs(s,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var f=a.alternate,m=s,v=a,E=v.flags;switch(v.tag){case 0:case 11:case 15:Bs(m,v,l),Yo(4,v);break;case 1:if(Bs(m,v,l),f=v,m=f.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(Q){et(f,f.return,Q)}if(f=v,m=f.updateQueue,m!==null){var O=f.stateNode;try{var B=m.shared.hiddenCallbacks;if(B!==null)for(m.shared.hiddenCallbacks=null,m=0;m<B.length;m++)h1(B[m],O)}catch(Q){et(f,f.return,Q)}}l&&E&64&&My(v),Xo(v,v.return);break;case 27:Ly(v);case 26:case 5:Bs(m,v,l),l&&f===null&&E&4&&ky(v),Xo(v,v.return);break;case 12:Bs(m,v,l);break;case 13:Bs(m,v,l),l&&E&4&&Py(m,v);break;case 22:v.memoizedState===null&&Bs(m,v,l),Xo(v,v.return);break;case 30:break;default:Bs(m,v,l)}a=a.sibling}}function Yh(s,a){var l=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(s!=null&&s.refCount++,l!=null&&Do(l))}function Xh(s,a){s=null,a.alternate!==null&&(s=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==s&&(a.refCount++,s!=null&&Do(s))}function Di(s,a,l,f){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Iy(s,a,l,f),a=a.sibling}function Iy(s,a,l,f){var m=a.flags;switch(a.tag){case 0:case 11:case 15:Di(s,a,l,f),m&2048&&Yo(9,a);break;case 1:Di(s,a,l,f);break;case 3:Di(s,a,l,f),m&2048&&(s=null,a.alternate!==null&&(s=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==s&&(a.refCount++,s!=null&&Do(s)));break;case 12:if(m&2048){Di(s,a,l,f),s=a.stateNode;try{var v=a.memoizedProps,E=v.id,O=v.onPostCommit;typeof O=="function"&&O(E,a.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(B){et(a,a.return,B)}}else Di(s,a,l,f);break;case 13:Di(s,a,l,f);break;case 23:break;case 22:v=a.stateNode,E=a.alternate,a.memoizedState!==null?v._visibility&2?Di(s,a,l,f):Qo(s,a):v._visibility&2?Di(s,a,l,f):(v._visibility|=2,ga(s,a,l,f,(a.subtreeFlags&10256)!==0)),m&2048&&Yh(E,a);break;case 24:Di(s,a,l,f),m&2048&&Xh(a.alternate,a);break;default:Di(s,a,l,f)}}function ga(s,a,l,f,m){for(m=m&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var v=s,E=a,O=l,B=f,Q=E.flags;switch(E.tag){case 0:case 11:case 15:ga(v,E,O,B,m),Yo(8,E);break;case 23:break;case 22:var ne=E.stateNode;E.memoizedState!==null?ne._visibility&2?ga(v,E,O,B,m):Qo(v,E):(ne._visibility|=2,ga(v,E,O,B,m)),m&&Q&2048&&Yh(E.alternate,E);break;case 24:ga(v,E,O,B,m),m&&Q&2048&&Xh(E.alternate,E);break;default:ga(v,E,O,B,m)}a=a.sibling}}function Qo(s,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=s,f=a,m=f.flags;switch(f.tag){case 22:Qo(l,f),m&2048&&Yh(f.alternate,f);break;case 24:Qo(l,f),m&2048&&Xh(f.alternate,f);break;default:Qo(l,f)}a=a.sibling}}var Zo=8192;function ya(s){if(s.subtreeFlags&Zo)for(s=s.child;s!==null;)Hy(s),s=s.sibling}function Hy(s){switch(s.tag){case 26:ya(s),s.flags&Zo&&s.memoizedState!==null&&Z8(fi,s.memoizedState,s.memoizedProps);break;case 5:ya(s);break;case 3:case 4:var a=fi;fi=gu(s.stateNode.containerInfo),ya(s),fi=a;break;case 22:s.memoizedState===null&&(a=s.alternate,a!==null&&a.memoizedState!==null?(a=Zo,Zo=16777216,ya(s),Zo=a):ya(s));break;default:ya(s)}}function Vy(s){var a=s.alternate;if(a!==null&&(s=a.child,s!==null)){a.child=null;do a=s.sibling,s.sibling=null,s=a;while(s!==null)}}function Ko(s){var a=s.deletions;if((s.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];jt=f,qy(f,s)}Vy(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Uy(s),s=s.sibling}function Uy(s){switch(s.tag){case 0:case 11:case 15:Ko(s),s.flags&2048&&Ps(9,s,s.return);break;case 3:Ko(s);break;case 12:Ko(s);break;case 22:var a=s.stateNode;s.memoizedState!==null&&a._visibility&2&&(s.return===null||s.return.tag!==13)?(a._visibility&=-3,su(s)):Ko(s);break;default:Ko(s)}}function su(s){var a=s.deletions;if((s.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];jt=f,qy(f,s)}Vy(s)}for(s=s.child;s!==null;){switch(a=s,a.tag){case 0:case 11:case 15:Ps(8,a,a.return),su(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,su(a));break;default:su(a)}s=s.sibling}}function qy(s,a){for(;jt!==null;){var l=jt;switch(l.tag){case 0:case 11:case 15:Ps(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var f=l.memoizedState.cachePool.pool;f!=null&&f.refCount++}break;case 24:Do(l.memoizedState.cache)}if(f=l.child,f!==null)f.return=l,jt=f;else e:for(l=s;jt!==null;){f=jt;var m=f.sibling,v=f.return;if(zy(f),f===l){jt=null;break e}if(m!==null){m.return=v,jt=m;break e}jt=v}}}var f8={getCacheForType:function(s){var a=Jt(Dt),l=a.data.get(s);return l===void 0&&(l=s(),a.data.set(s,l)),l}},d8=typeof WeakMap=="function"?WeakMap:Map,Ge=0,nt=null,De=null,je=0,Ye=0,zn=null,Is=!1,va=!1,Qh=!1,cs=0,pt=0,Hs=0,Ar=0,Zh=0,$n=0,xa=0,Wo=null,Sn=null,Kh=!1,Wh=0,ru=1/0,au=null,Vs=null,Ut=0,Us=null,ba=null,wa=0,$h=0,Jh=null,Fy=null,$o=0,ep=null;function jn(){if((Ge&2)!==0&&je!==0)return je&-je;if(U.T!==null){var s=la;return s!==0?s:op()}return go()}function Gy(){$n===0&&($n=(je&536870912)===0||Ie?ur():536870912);var s=Wn.current;return s!==null&&(s.flags|=32),$n}function Pn(s,a,l){(s===nt&&(Ye===2||Ye===9)||s.cancelPendingCommit!==null)&&(Sa(s,0),qs(s,je,$n,!1)),li(s,l),((Ge&2)===0||s!==nt)&&(s===nt&&((Ge&2)===0&&(Ar|=l),pt===4&&qs(s,je,$n,!1)),_i(s))}function Yy(s,a,l){if((Ge&6)!==0)throw Error(i(327));var f=!l&&(a&124)===0&&(a&s.expiredLanes)===0||Yi(s,a),m=f?m8(s,a):ip(s,a,!0),v=f;do{if(m===0){va&&!f&&qs(s,a,0,!1);break}else{if(l=s.current.alternate,v&&!h8(l)){m=ip(s,a,!1),v=!1;continue}if(m===2){if(v=a,s.errorRecoveryDisabledLanes&v)var E=0;else E=s.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var O=s;m=Wo;var B=O.current.memoizedState.isDehydrated;if(B&&(Sa(O,E).flags|=256),E=ip(O,E,!1),E!==2){if(Qh&&!B){O.errorRecoveryDisabledLanes|=v,Ar|=v,m=4;break e}v=Sn,Sn=m,v!==null&&(Sn===null?Sn=v:Sn.push.apply(Sn,v))}m=E}if(v=!1,m!==2)continue}}if(m===1){Sa(s,0),qs(s,a,0,!0);break}e:{switch(f=s,v=m,v){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:qs(f,a,$n,!Is);break e;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(m=Wh+300-St(),10<m)){if(qs(f,a,$n,!Is),Cs(f,0,!0)!==0)break e;f.timeoutHandle=wv(Xy.bind(null,f,l,Sn,au,Kh,a,$n,Ar,xa,Is,v,2,-0,0),m);break e}Xy(f,l,Sn,au,Kh,a,$n,Ar,xa,Is,v,0,-0,0)}}break}while(!0);_i(s)}function Xy(s,a,l,f,m,v,E,O,B,Q,ne,re,K,W){if(s.timeoutHandle=-1,re=a.subtreeFlags,(re&8192||(re&16785408)===16785408)&&(rl={stylesheets:null,count:0,unsuspend:Q8},Hy(a),re=K8(),re!==null)){s.cancelPendingCommit=re(ev.bind(null,s,a,v,l,f,m,E,O,B,ne,1,K,W)),qs(s,v,E,!Q);return}ev(s,a,v,l,f,m,E,O,B)}function h8(s){for(var a=s;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var f=0;f<l.length;f++){var m=l[f],v=m.getSnapshot;m=m.value;try{if(!Rn(v(),m))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function qs(s,a,l,f){a&=~Zh,a&=~Ar,s.suspendedLanes|=a,s.pingedLanes&=~a,f&&(s.warmLanes|=a),f=s.expirationTimes;for(var m=a;0<m;){var v=31-Kt(m),E=1<<v;f[v]=-1,m&=~E}l!==0&&yc(s,l,a)}function ou(){return(Ge&6)===0?(Jo(0),!1):!0}function tp(){if(De!==null){if(Ye===0)var s=De.return;else s=De,ts=br=null,vh(s),pa=null,qo=0,s=De;for(;s!==null;)Ay(s.alternate,s),s=s.return;De=null}}function Sa(s,a){var l=s.timeoutHandle;l!==-1&&(s.timeoutHandle=-1,L8(l)),l=s.cancelPendingCommit,l!==null&&(s.cancelPendingCommit=null,l()),tp(),nt=s,De=l=$i(s.current,null),je=a,Ye=0,zn=null,Is=!1,va=Yi(s,a),Qh=!1,xa=$n=Zh=Ar=Hs=pt=0,Sn=Wo=null,Kh=!1,(a&8)!==0&&(a|=a&32);var f=s.entangledLanes;if(f!==0)for(s=s.entanglements,f&=a;0<f;){var m=31-Kt(f),v=1<<m;a|=s[m],f&=~v}return cs=a,kc(),l}function Qy(s,a){Re=null,U.H=Qc,a===zo||a===Bc?(a=f1(),Ye=3):a===l1?(a=f1(),Ye=4):Ye=a===dy?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,zn=a,De===null&&(pt=1,Jc(s,Xn(a,s.current)))}function Zy(){var s=U.H;return U.H=Qc,s===null?Qc:s}function Ky(){var s=U.A;return U.A=f8,s}function np(){pt=4,Is||(je&4194048)!==je&&Wn.current!==null||(va=!0),(Hs&134217727)===0&&(Ar&134217727)===0||nt===null||qs(nt,je,$n,!1)}function ip(s,a,l){var f=Ge;Ge|=2;var m=Zy(),v=Ky();(nt!==s||je!==a)&&(au=null,Sa(s,a)),a=!1;var E=pt;e:do try{if(Ye!==0&&De!==null){var O=De,B=zn;switch(Ye){case 8:tp(),E=6;break e;case 3:case 2:case 9:case 6:Wn.current===null&&(a=!0);var Q=Ye;if(Ye=0,zn=null,Ta(s,O,B,Q),l&&va){E=0;break e}break;default:Q=Ye,Ye=0,zn=null,Ta(s,O,B,Q)}}p8(),E=pt;break}catch(ne){Qy(s,ne)}while(!0);return a&&s.shellSuspendCounter++,ts=br=null,Ge=f,U.H=m,U.A=v,De===null&&(nt=null,je=0,kc()),E}function p8(){for(;De!==null;)Wy(De)}function m8(s,a){var l=Ge;Ge|=2;var f=Zy(),m=Ky();nt!==s||je!==a?(au=null,ru=St()+500,Sa(s,a)):va=Yi(s,a);e:do try{if(Ye!==0&&De!==null){a=De;var v=zn;t:switch(Ye){case 1:Ye=0,zn=null,Ta(s,a,v,1);break;case 2:case 9:if(c1(v)){Ye=0,zn=null,$y(a);break}a=function(){Ye!==2&&Ye!==9||nt!==s||(Ye=7),_i(s)},v.then(a,a);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:c1(v)?(Ye=0,zn=null,$y(a)):(Ye=0,zn=null,Ta(s,a,v,7));break;case 5:var E=null;switch(De.tag){case 26:E=De.memoizedState;case 5:case 27:var O=De;if(!E||_v(E)){Ye=0,zn=null;var B=O.sibling;if(B!==null)De=B;else{var Q=O.return;Q!==null?(De=Q,lu(Q)):De=null}break t}}Ye=0,zn=null,Ta(s,a,v,5);break;case 6:Ye=0,zn=null,Ta(s,a,v,6);break;case 8:tp(),pt=6;break e;default:throw Error(i(462))}}g8();break}catch(ne){Qy(s,ne)}while(!0);return ts=br=null,U.H=f,U.A=m,Ge=l,De!==null?0:(nt=null,je=0,kc(),pt)}function g8(){for(;De!==null&&!wt();)Wy(De)}function Wy(s){var a=Ey(s.alternate,s,cs);s.memoizedProps=s.pendingProps,a===null?lu(s):De=a}function $y(s){var a=s,l=a.alternate;switch(a.tag){case 15:case 0:a=vy(l,a,a.pendingProps,a.type,void 0,je);break;case 11:a=vy(l,a,a.pendingProps,a.type.render,a.ref,je);break;case 5:vh(a);default:Ay(l,a),a=De=J2(a,cs),a=Ey(l,a,cs)}s.memoizedProps=s.pendingProps,a===null?lu(s):De=a}function Ta(s,a,l,f){ts=br=null,vh(a),pa=null,qo=0;var m=a.return;try{if(r8(s,m,a,l,je)){pt=1,Jc(s,Xn(l,s.current)),De=null;return}}catch(v){if(m!==null)throw De=m,v;pt=1,Jc(s,Xn(l,s.current)),De=null;return}a.flags&32768?(Ie||f===1?s=!0:va||(je&536870912)!==0?s=!1:(Is=s=!0,(f===2||f===9||f===3||f===6)&&(f=Wn.current,f!==null&&f.tag===13&&(f.flags|=16384))),Jy(a,s)):lu(a)}function lu(s){var a=s;do{if((a.flags&32768)!==0){Jy(a,Is);return}s=a.return;var l=o8(a.alternate,a,cs);if(l!==null){De=l;return}if(a=a.sibling,a!==null){De=a;return}De=a=s}while(a!==null);pt===0&&(pt=5)}function Jy(s,a){do{var l=l8(s.alternate,s);if(l!==null){l.flags&=32767,De=l;return}if(l=s.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(s=s.sibling,s!==null)){De=s;return}De=s=l}while(s!==null);pt=6,De=null}function ev(s,a,l,f,m,v,E,O,B){s.cancelPendingCommit=null;do cu();while(Ut!==0);if((Ge&6)!==0)throw Error(i(327));if(a!==null){if(a===s.current)throw Error(i(177));if(v=a.lanes|a.childLanes,v|=Xd,Ed(s,l,v,E,O,B),s===nt&&(De=nt=null,je=0),ba=a,Us=s,wa=l,$h=v,Jh=m,Fy=f,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(s.callbackNode=null,s.callbackPriority=0,b8(lr,function(){return rv(),null})):(s.callbackNode=null,s.callbackPriority=0),f=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||f){f=U.T,U.T=null,m=J.p,J.p=2,E=Ge,Ge|=4;try{c8(s,a,l)}finally{Ge=E,J.p=m,U.T=f}}Ut=1,tv(),nv(),iv()}}function tv(){if(Ut===1){Ut=0;var s=Us,a=ba,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=U.T,U.T=null;var f=J.p;J.p=2;var m=Ge;Ge|=4;try{Ny(a,s);var v=mp,E=q2(s.containerInfo),O=v.focusedElem,B=v.selectionRange;if(E!==O&&O&&O.ownerDocument&&U2(O.ownerDocument.documentElement,O)){if(B!==null&&Ud(O)){var Q=B.start,ne=B.end;if(ne===void 0&&(ne=Q),"selectionStart"in O)O.selectionStart=Q,O.selectionEnd=Math.min(ne,O.value.length);else{var re=O.ownerDocument||document,K=re&&re.defaultView||window;if(K.getSelection){var W=K.getSelection(),Se=O.textContent.length,ve=Math.min(B.start,Se),We=B.end===void 0?ve:Math.min(B.end,Se);!W.extend&&ve>We&&(E=We,We=ve,ve=E);var G=V2(O,ve),H=V2(O,We);if(G&&H&&(W.rangeCount!==1||W.anchorNode!==G.node||W.anchorOffset!==G.offset||W.focusNode!==H.node||W.focusOffset!==H.offset)){var X=re.createRange();X.setStart(G.node,G.offset),W.removeAllRanges(),ve>We?(W.addRange(X),W.extend(H.node,H.offset)):(X.setEnd(H.node,H.offset),W.addRange(X))}}}}for(re=[],W=O;W=W.parentNode;)W.nodeType===1&&re.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<re.length;O++){var ie=re[O];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}wu=!!pp,mp=pp=null}finally{Ge=m,J.p=f,U.T=l}}s.current=a,Ut=2}}function nv(){if(Ut===2){Ut=0;var s=Us,a=ba,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=U.T,U.T=null;var f=J.p;J.p=2;var m=Ge;Ge|=4;try{_y(s,a.alternate,a)}finally{Ge=m,J.p=f,U.T=l}}Ut=3}}function iv(){if(Ut===4||Ut===3){Ut=0,mn();var s=Us,a=ba,l=wa,f=Fy;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ut=5:(Ut=0,ba=Us=null,sv(s,s.pendingLanes));var m=s.pendingLanes;if(m===0&&(Vs=null),mo(l),a=a.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Fn,a,void 0,(a.current.flags&128)===128)}catch{}if(f!==null){a=U.T,m=J.p,J.p=2,U.T=null;try{for(var v=s.onRecoverableError,E=0;E<f.length;E++){var O=f[E];v(O.value,{componentStack:O.stack})}}finally{U.T=a,J.p=m}}(wa&3)!==0&&cu(),_i(s),m=s.pendingLanes,(l&4194090)!==0&&(m&42)!==0?s===ep?$o++:($o=0,ep=s):$o=0,Jo(0)}}function sv(s,a){(s.pooledCacheLanes&=a)===0&&(a=s.pooledCache,a!=null&&(s.pooledCache=null,Do(a)))}function cu(s){return tv(),nv(),iv(),rv()}function rv(){if(Ut!==5)return!1;var s=Us,a=$h;$h=0;var l=mo(wa),f=U.T,m=J.p;try{J.p=32>l?32:l,U.T=null,l=Jh,Jh=null;var v=Us,E=wa;if(Ut=0,ba=Us=null,wa=0,(Ge&6)!==0)throw Error(i(331));var O=Ge;if(Ge|=4,Uy(v.current),Iy(v,v.current,E,l),Ge=O,Jo(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Fn,v)}catch{}return!0}finally{J.p=m,U.T=f,sv(s,a)}}function av(s,a,l){a=Xn(l,a),a=Dh(s.stateNode,a,2),s=Ds(s,a,2),s!==null&&(li(s,2),_i(s))}function et(s,a,l){if(s.tag===3)av(s,s,l);else for(;a!==null;){if(a.tag===3){av(a,s,l);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Vs===null||!Vs.has(f))){s=Xn(l,s),l=uy(2),f=Ds(a,l,2),f!==null&&(fy(l,f,a,s),li(f,2),_i(f));break}}a=a.return}}function sp(s,a,l){var f=s.pingCache;if(f===null){f=s.pingCache=new d8;var m=new Set;f.set(a,m)}else m=f.get(a),m===void 0&&(m=new Set,f.set(a,m));m.has(l)||(Qh=!0,m.add(l),s=y8.bind(null,s,a,l),a.then(s,s))}function y8(s,a,l){var f=s.pingCache;f!==null&&f.delete(a),s.pingedLanes|=s.suspendedLanes&l,s.warmLanes&=~l,nt===s&&(je&l)===l&&(pt===4||pt===3&&(je&62914560)===je&&300>St()-Wh?(Ge&2)===0&&Sa(s,0):Zh|=l,xa===je&&(xa=0)),_i(s)}function ov(s,a){a===0&&(a=fr()),s=sa(s,a),s!==null&&(li(s,a),_i(s))}function v8(s){var a=s.memoizedState,l=0;a!==null&&(l=a.retryLane),ov(s,l)}function x8(s,a){var l=0;switch(s.tag){case 13:var f=s.stateNode,m=s.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=s.stateNode;break;case 22:f=s.stateNode._retryCache;break;default:throw Error(i(314))}f!==null&&f.delete(a),ov(s,l)}function b8(s,a){return Pe(s,a)}var uu=null,Ea=null,rp=!1,fu=!1,ap=!1,Mr=0;function _i(s){s!==Ea&&s.next===null&&(Ea===null?uu=Ea=s:Ea=Ea.next=s),fu=!0,rp||(rp=!0,S8())}function Jo(s,a){if(!ap&&fu){ap=!0;do for(var l=!1,f=uu;f!==null;){if(s!==0){var m=f.pendingLanes;if(m===0)var v=0;else{var E=f.suspendedLanes,O=f.pingedLanes;v=(1<<31-Kt(42|s)+1)-1,v&=m&~(E&~O),v=v&201326741?v&201326741|1:v?v|2:0}v!==0&&(l=!0,fv(f,v))}else v=je,v=Cs(f,f===nt?v:0,f.cancelPendingCommit!==null||f.timeoutHandle!==-1),(v&3)===0||Yi(f,v)||(l=!0,fv(f,v));f=f.next}while(l);ap=!1}}function w8(){lv()}function lv(){fu=rp=!1;var s=0;Mr!==0&&(R8()&&(s=Mr),Mr=0);for(var a=St(),l=null,f=uu;f!==null;){var m=f.next,v=cv(f,a);v===0?(f.next=null,l===null?uu=m:l.next=m,m===null&&(Ea=l)):(l=f,(s!==0||(v&3)!==0)&&(fu=!0)),f=m}Jo(s)}function cv(s,a){for(var l=s.suspendedLanes,f=s.pingedLanes,m=s.expirationTimes,v=s.pendingLanes&-62914561;0<v;){var E=31-Kt(v),O=1<<E,B=m[E];B===-1?((O&l)===0||(O&f)!==0)&&(m[E]=Td(O,a)):B<=a&&(s.expiredLanes|=O),v&=~O}if(a=nt,l=je,l=Cs(s,s===a?l:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),f=s.callbackNode,l===0||s===a&&(Ye===2||Ye===9)||s.cancelPendingCommit!==null)return f!==null&&f!==null&&Me(f),s.callbackNode=null,s.callbackPriority=0;if((l&3)===0||Yi(s,l)){if(a=l&-l,a===s.callbackPriority)return a;switch(f!==null&&Me(f),mo(l)){case 2:case 8:l=fo;break;case 32:l=lr;break;case 268435456:l=Xr;break;default:l=lr}return f=uv.bind(null,s),l=Pe(l,f),s.callbackPriority=a,s.callbackNode=l,a}return f!==null&&f!==null&&Me(f),s.callbackPriority=2,s.callbackNode=null,2}function uv(s,a){if(Ut!==0&&Ut!==5)return s.callbackNode=null,s.callbackPriority=0,null;var l=s.callbackNode;if(cu()&&s.callbackNode!==l)return null;var f=je;return f=Cs(s,s===nt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),f===0?null:(Yy(s,f,a),cv(s,St()),s.callbackNode!=null&&s.callbackNode===l?uv.bind(null,s):null)}function fv(s,a){if(cu())return null;Yy(s,a,!0)}function S8(){D8(function(){(Ge&6)!==0?Pe(or,w8):lv()})}function op(){return Mr===0&&(Mr=ur()),Mr}function dv(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:Sc(""+s)}function hv(s,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,s.id&&l.setAttribute("form",s.id),a.parentNode.insertBefore(l,a),s=new FormData(s),l.parentNode.removeChild(l),s}function T8(s,a,l,f,m){if(a==="submit"&&l&&l.stateNode===m){var v=dv((m[Wt]||null).action),E=f.submitter;E&&(a=(a=E[Wt]||null)?dv(a.formAction):E.getAttribute("formAction"),a!==null&&(v=a,E=null));var O=new Ac("action","action",null,f,m);s.push({event:O,listeners:[{instance:null,listener:function(){if(f.defaultPrevented){if(Mr!==0){var B=E?hv(m,E):new FormData(m);Mh(l,{pending:!0,data:B,method:m.method,action:v},null,B)}}else typeof v=="function"&&(O.preventDefault(),B=E?hv(m,E):new FormData(m),Mh(l,{pending:!0,data:B,method:m.method,action:v},v,B))},currentTarget:m}]})}}for(var lp=0;lp<Yd.length;lp++){var cp=Yd[lp],E8=cp.toLowerCase(),C8=cp[0].toUpperCase()+cp.slice(1);ui(E8,"on"+C8)}ui(Y2,"onAnimationEnd"),ui(X2,"onAnimationIteration"),ui(Q2,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(UT,"onTransitionRun"),ui(qT,"onTransitionStart"),ui(FT,"onTransitionCancel"),ui(Z2,"onTransitionEnd"),pe("onMouseEnter",["mouseout","mouseover"]),pe("onMouseLeave",["mouseout","mouseover"]),pe("onPointerEnter",["pointerout","pointerover"]),pe("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function pv(s,a){a=(a&4)!==0;for(var l=0;l<s.length;l++){var f=s[l],m=f.event;f=f.listeners;e:{var v=void 0;if(a)for(var E=f.length-1;0<=E;E--){var O=f[E],B=O.instance,Q=O.currentTarget;if(O=O.listener,B!==v&&m.isPropagationStopped())break e;v=O,m.currentTarget=Q;try{v(m)}catch(ne){$c(ne)}m.currentTarget=null,v=B}else for(E=0;E<f.length;E++){if(O=f[E],B=O.instance,Q=O.currentTarget,O=O.listener,B!==v&&m.isPropagationStopped())break e;v=O,m.currentTarget=Q;try{v(m)}catch(ne){$c(ne)}m.currentTarget=null,v=B}}}}function _e(s,a){var l=a[Mi];l===void 0&&(l=a[Mi]=new Set);var f=s+"__bubble";l.has(f)||(mv(a,s,2,!1),l.add(f))}function up(s,a,l){var f=0;a&&(f|=4),mv(l,s,f,a)}var du="_reactListening"+Math.random().toString(36).slice(2);function fp(s){if(!s[du]){s[du]=!0,ge.forEach(function(l){l!=="selectionchange"&&(A8.has(l)||up(l,!1,s),up(l,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[du]||(a[du]=!0,up("selectionchange",!1,a))}}function mv(s,a,l,f){switch(Iv(a)){case 2:var m=J8;break;case 8:m=eE;break;default:m=Cp}l=m.bind(null,a,l,s),m=void 0,!_d||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),f?m!==void 0?s.addEventListener(a,l,{capture:!0,passive:m}):s.addEventListener(a,l,!0):m!==void 0?s.addEventListener(a,l,{passive:m}):s.addEventListener(a,l,!1)}function dp(s,a,l,f,m){var v=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var O=f.stateNode.containerInfo;if(O===m)break;if(E===4)for(E=f.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===m)return;E=E.return}for(;O!==null;){if(E=Xi(O),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){f=v=E;continue e}O=O.parentNode}}f=f.return}S2(function(){var Q=v,ne=Ld(l),re=[];e:{var K=K2.get(s);if(K!==void 0){var W=Ac,Se=s;switch(s){case"keypress":if(Ec(l)===0)break e;case"keydown":case"keyup":W=bT;break;case"focusin":Se="focus",W=Nd;break;case"focusout":Se="blur",W=Nd;break;case"beforeblur":case"afterblur":W=Nd;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=C2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=lT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=TT;break;case Y2:case X2:case Q2:W=fT;break;case Z2:W=CT;break;case"scroll":case"scrollend":W=aT;break;case"wheel":W=MT;break;case"copy":case"cut":case"paste":W=hT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=M2;break;case"toggle":case"beforetoggle":W=kT}var ve=(a&4)!==0,We=!ve&&(s==="scroll"||s==="scrollend"),G=ve?K!==null?K+"Capture":null:K;ve=[];for(var H=Q,X;H!==null;){var ie=H;if(X=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||X===null||G===null||(ie=xo(H,G),ie!=null&&ve.push(tl(H,ie,X))),We)break;H=H.return}0<ve.length&&(K=new W(K,Se,null,l,ne),re.push({event:K,listeners:ve}))}}if((a&7)===0){e:{if(K=s==="mouseover"||s==="pointerover",W=s==="mouseout"||s==="pointerout",K&&l!==Rd&&(Se=l.relatedTarget||l.fromElement)&&(Xi(Se)||Se[Ht]))break e;if((W||K)&&(K=ne.window===ne?ne:(K=ne.ownerDocument)?K.defaultView||K.parentWindow:window,W?(Se=l.relatedTarget||l.toElement,W=Q,Se=Se?Xi(Se):null,Se!==null&&(We=o(Se),ve=Se.tag,Se!==We||ve!==5&&ve!==27&&ve!==6)&&(Se=null)):(W=null,Se=Q),W!==Se)){if(ve=C2,ie="onMouseLeave",G="onMouseEnter",H="mouse",(s==="pointerout"||s==="pointerover")&&(ve=M2,ie="onPointerLeave",G="onPointerEnter",H="pointer"),We=W==null?K:Ms(W),X=Se==null?K:Ms(Se),K=new ve(ie,H+"leave",W,l,ne),K.target=We,K.relatedTarget=X,ie=null,Xi(ne)===Q&&(ve=new ve(G,H+"enter",Se,l,ne),ve.target=X,ve.relatedTarget=We,ie=ve),We=ie,W&&Se)t:{for(ve=W,G=Se,H=0,X=ve;X;X=Ca(X))H++;for(X=0,ie=G;ie;ie=Ca(ie))X++;for(;0<H-X;)ve=Ca(ve),H--;for(;0<X-H;)G=Ca(G),X--;for(;H--;){if(ve===G||G!==null&&ve===G.alternate)break t;ve=Ca(ve),G=Ca(G)}ve=null}else ve=null;W!==null&&gv(re,K,W,ve,!1),Se!==null&&We!==null&&gv(re,We,Se,ve,!0)}}e:{if(K=Q?Ms(Q):window,W=K.nodeName&&K.nodeName.toLowerCase(),W==="select"||W==="input"&&K.type==="file")var me=j2;else if(_2(K))if(P2)me=IT;else{me=NT;var Le=PT}else W=K.nodeName,!W||W.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Q&&kd(Q.elementType)&&(me=j2):me=BT;if(me&&(me=me(s,Q))){z2(re,me,l,ne);break e}Le&&Le(s,K,Q),s==="focusout"&&Q&&K.type==="number"&&Q.memoizedProps.value!=null&&Od(K,"number",K.value)}switch(Le=Q?Ms(Q):window,s){case"focusin":(_2(Le)||Le.contentEditable==="true")&&(ta=Le,qd=Q,Mo=null);break;case"focusout":Mo=qd=ta=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,F2(re,l,ne);break;case"selectionchange":if(VT)break;case"keydown":case"keyup":F2(re,l,ne)}var ye;if(Id)e:{switch(s){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ea?L2(s,l)&&(be="onCompositionEnd"):s==="keydown"&&l.keyCode===229&&(be="onCompositionStart");be&&(O2&&l.locale!=="ko"&&(ea||be!=="onCompositionStart"?be==="onCompositionEnd"&&ea&&(ye=T2()):(Os=ne,zd="value"in Os?Os.value:Os.textContent,ea=!0)),Le=hu(Q,be),0<Le.length&&(be=new A2(be,s,null,l,ne),re.push({event:be,listeners:Le}),ye?be.data=ye:(ye=D2(l),ye!==null&&(be.data=ye)))),(ye=LT?DT(s,l):_T(s,l))&&(be=hu(Q,"onBeforeInput"),0<be.length&&(Le=new A2("onBeforeInput","beforeinput",null,l,ne),re.push({event:Le,listeners:be}),Le.data=ye)),T8(re,s,Q,l,ne)}pv(re,a)})}function tl(s,a,l){return{instance:s,listener:a,currentTarget:l}}function hu(s,a){for(var l=a+"Capture",f=[];s!==null;){var m=s,v=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||v===null||(m=xo(s,l),m!=null&&f.unshift(tl(s,m,v)),m=xo(s,a),m!=null&&f.push(tl(s,m,v))),s.tag===3)return f;s=s.return}return[]}function Ca(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function gv(s,a,l,f,m){for(var v=a._reactName,E=[];l!==null&&l!==f;){var O=l,B=O.alternate,Q=O.stateNode;if(O=O.tag,B!==null&&B===f)break;O!==5&&O!==26&&O!==27||Q===null||(B=Q,m?(Q=xo(l,v),Q!=null&&E.unshift(tl(l,Q,B))):m||(Q=xo(l,v),Q!=null&&E.push(tl(l,Q,B)))),l=l.return}E.length!==0&&s.push({event:a,listeners:E})}var M8=/\r\n?/g,O8=/\u0000|\uFFFD/g;function yv(s){return(typeof s=="string"?s:""+s).replace(M8,`
`).replace(O8,"")}function vv(s,a){return a=yv(a),yv(s)===a}function pu(){}function Ke(s,a,l,f,m,v){switch(l){case"children":typeof f=="string"?a==="body"||a==="textarea"&&f===""||Wr(s,f):(typeof f=="number"||typeof f=="bigint")&&a!=="body"&&Wr(s,""+f);break;case"className":Oi(s,"class",f);break;case"tabIndex":Oi(s,"tabindex",f);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(s,l,f);break;case"style":b2(s,f,v);break;case"data":if(a!=="object"){Oi(s,"data",f);break}case"src":case"href":if(f===""&&(a!=="a"||l!=="href")){s.removeAttribute(l);break}if(f==null||typeof f=="function"||typeof f=="symbol"||typeof f=="boolean"){s.removeAttribute(l);break}f=Sc(""+f),s.setAttribute(l,f);break;case"action":case"formAction":if(typeof f=="function"){s.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof v=="function"&&(l==="formAction"?(a!=="input"&&Ke(s,a,"name",m.name,m,null),Ke(s,a,"formEncType",m.formEncType,m,null),Ke(s,a,"formMethod",m.formMethod,m,null),Ke(s,a,"formTarget",m.formTarget,m,null)):(Ke(s,a,"encType",m.encType,m,null),Ke(s,a,"method",m.method,m,null),Ke(s,a,"target",m.target,m,null)));if(f==null||typeof f=="symbol"||typeof f=="boolean"){s.removeAttribute(l);break}f=Sc(""+f),s.setAttribute(l,f);break;case"onClick":f!=null&&(s.onclick=pu);break;case"onScroll":f!=null&&_e("scroll",s);break;case"onScrollEnd":f!=null&&_e("scrollend",s);break;case"dangerouslySetInnerHTML":if(f!=null){if(typeof f!="object"||!("__html"in f))throw Error(i(61));if(l=f.__html,l!=null){if(m.children!=null)throw Error(i(60));s.innerHTML=l}}break;case"multiple":s.multiple=f&&typeof f!="function"&&typeof f!="symbol";break;case"muted":s.muted=f&&typeof f!="function"&&typeof f!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(f==null||typeof f=="function"||typeof f=="boolean"||typeof f=="symbol"){s.removeAttribute("xlink:href");break}l=Sc(""+f),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":f!=null&&typeof f!="function"&&typeof f!="symbol"?s.setAttribute(l,""+f):s.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":f&&typeof f!="function"&&typeof f!="symbol"?s.setAttribute(l,""):s.removeAttribute(l);break;case"capture":case"download":f===!0?s.setAttribute(l,""):f!==!1&&f!=null&&typeof f!="function"&&typeof f!="symbol"?s.setAttribute(l,f):s.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":f!=null&&typeof f!="function"&&typeof f!="symbol"&&!isNaN(f)&&1<=f?s.setAttribute(l,f):s.removeAttribute(l);break;case"rowSpan":case"start":f==null||typeof f=="function"||typeof f=="symbol"||isNaN(f)?s.removeAttribute(l):s.setAttribute(l,f);break;case"popover":_e("beforetoggle",s),_e("toggle",s),vn(s,"popover",f);break;case"xlinkActuate":kn(s,"http://www.w3.org/1999/xlink","xlink:actuate",f);break;case"xlinkArcrole":kn(s,"http://www.w3.org/1999/xlink","xlink:arcrole",f);break;case"xlinkRole":kn(s,"http://www.w3.org/1999/xlink","xlink:role",f);break;case"xlinkShow":kn(s,"http://www.w3.org/1999/xlink","xlink:show",f);break;case"xlinkTitle":kn(s,"http://www.w3.org/1999/xlink","xlink:title",f);break;case"xlinkType":kn(s,"http://www.w3.org/1999/xlink","xlink:type",f);break;case"xmlBase":kn(s,"http://www.w3.org/XML/1998/namespace","xml:base",f);break;case"xmlLang":kn(s,"http://www.w3.org/XML/1998/namespace","xml:lang",f);break;case"xmlSpace":kn(s,"http://www.w3.org/XML/1998/namespace","xml:space",f);break;case"is":vn(s,"is",f);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=sT.get(l)||l,vn(s,l,f))}}function hp(s,a,l,f,m,v){switch(l){case"style":b2(s,f,v);break;case"dangerouslySetInnerHTML":if(f!=null){if(typeof f!="object"||!("__html"in f))throw Error(i(61));if(l=f.__html,l!=null){if(m.children!=null)throw Error(i(60));s.innerHTML=l}}break;case"children":typeof f=="string"?Wr(s,f):(typeof f=="number"||typeof f=="bigint")&&Wr(s,""+f);break;case"onScroll":f!=null&&_e("scroll",s);break;case"onScrollEnd":f!=null&&_e("scrollend",s);break;case"onClick":f!=null&&(s.onclick=pu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!q.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(m=l.endsWith("Capture"),a=l.slice(2,m?l.length-7:void 0),v=s[Wt]||null,v=v!=null?v[l]:null,typeof v=="function"&&s.removeEventListener(a,v,m),typeof f=="function")){typeof v!="function"&&v!==null&&(l in s?s[l]=null:s.hasAttribute(l)&&s.removeAttribute(l)),s.addEventListener(a,f,m);break e}l in s?s[l]=f:f===!0?s.setAttribute(l,""):vn(s,l,f)}}}function qt(s,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",s),_e("load",s);var f=!1,m=!1,v;for(v in l)if(l.hasOwnProperty(v)){var E=l[v];if(E!=null)switch(v){case"src":f=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ke(s,a,v,E,l,null)}}m&&Ke(s,a,"srcSet",l.srcSet,l,null),f&&Ke(s,a,"src",l.src,l,null);return;case"input":_e("invalid",s);var O=v=E=m=null,B=null,Q=null;for(f in l)if(l.hasOwnProperty(f)){var ne=l[f];if(ne!=null)switch(f){case"name":m=ne;break;case"type":E=ne;break;case"checked":B=ne;break;case"defaultChecked":Q=ne;break;case"value":v=ne;break;case"defaultValue":O=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,a));break;default:Ke(s,a,f,ne,l,null)}}g2(s,v,O,B,Q,E,m,!1),bc(s);return;case"select":_e("invalid",s),f=E=v=null;for(m in l)if(l.hasOwnProperty(m)&&(O=l[m],O!=null))switch(m){case"value":v=O;break;case"defaultValue":E=O;break;case"multiple":f=O;default:Ke(s,a,m,O,l,null)}a=v,l=E,s.multiple=!!f,a!=null?Kr(s,!!f,a,!1):l!=null&&Kr(s,!!f,l,!0);return;case"textarea":_e("invalid",s),v=m=f=null;for(E in l)if(l.hasOwnProperty(E)&&(O=l[E],O!=null))switch(E){case"value":f=O;break;case"defaultValue":m=O;break;case"children":v=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(91));break;default:Ke(s,a,E,O,l,null)}v2(s,f,m,v),bc(s);return;case"option":for(B in l)if(l.hasOwnProperty(B)&&(f=l[B],f!=null))switch(B){case"selected":s.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Ke(s,a,B,f,l,null)}return;case"dialog":_e("beforetoggle",s),_e("toggle",s),_e("cancel",s),_e("close",s);break;case"iframe":case"object":_e("load",s);break;case"video":case"audio":for(f=0;f<el.length;f++)_e(el[f],s);break;case"image":_e("error",s),_e("load",s);break;case"details":_e("toggle",s);break;case"embed":case"source":case"link":_e("error",s),_e("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in l)if(l.hasOwnProperty(Q)&&(f=l[Q],f!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ke(s,a,Q,f,l,null)}return;default:if(kd(a)){for(ne in l)l.hasOwnProperty(ne)&&(f=l[ne],f!==void 0&&hp(s,a,ne,f,l,void 0));return}}for(O in l)l.hasOwnProperty(O)&&(f=l[O],f!=null&&Ke(s,a,O,f,l,null))}function k8(s,a,l,f){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,v=null,E=null,O=null,B=null,Q=null,ne=null;for(W in l){var re=l[W];if(l.hasOwnProperty(W)&&re!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":B=re;default:f.hasOwnProperty(W)||Ke(s,a,W,null,f,re)}}for(var K in f){var W=f[K];if(re=l[K],f.hasOwnProperty(K)&&(W!=null||re!=null))switch(K){case"type":v=W;break;case"name":m=W;break;case"checked":Q=W;break;case"defaultChecked":ne=W;break;case"value":E=W;break;case"defaultValue":O=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,a));break;default:W!==re&&Ke(s,a,K,W,f,re)}}Md(s,E,O,B,Q,ne,v,m);return;case"select":W=E=O=K=null;for(v in l)if(B=l[v],l.hasOwnProperty(v)&&B!=null)switch(v){case"value":break;case"multiple":W=B;default:f.hasOwnProperty(v)||Ke(s,a,v,null,f,B)}for(m in f)if(v=f[m],B=l[m],f.hasOwnProperty(m)&&(v!=null||B!=null))switch(m){case"value":K=v;break;case"defaultValue":O=v;break;case"multiple":E=v;default:v!==B&&Ke(s,a,m,v,f,B)}a=O,l=E,f=W,K!=null?Kr(s,!!l,K,!1):!!f!=!!l&&(a!=null?Kr(s,!!l,a,!0):Kr(s,!!l,l?[]:"",!1));return;case"textarea":W=K=null;for(O in l)if(m=l[O],l.hasOwnProperty(O)&&m!=null&&!f.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Ke(s,a,O,null,f,m)}for(E in f)if(m=f[E],v=l[E],f.hasOwnProperty(E)&&(m!=null||v!=null))switch(E){case"value":K=m;break;case"defaultValue":W=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:m!==v&&Ke(s,a,E,m,f,v)}y2(s,K,W);return;case"option":for(var Se in l)if(K=l[Se],l.hasOwnProperty(Se)&&K!=null&&!f.hasOwnProperty(Se))switch(Se){case"selected":s.selected=!1;break;default:Ke(s,a,Se,null,f,K)}for(B in f)if(K=f[B],W=l[B],f.hasOwnProperty(B)&&K!==W&&(K!=null||W!=null))switch(B){case"selected":s.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Ke(s,a,B,K,f,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in l)K=l[ve],l.hasOwnProperty(ve)&&K!=null&&!f.hasOwnProperty(ve)&&Ke(s,a,ve,null,f,K);for(Q in f)if(K=f[Q],W=l[Q],f.hasOwnProperty(Q)&&K!==W&&(K!=null||W!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,a));break;default:Ke(s,a,Q,K,f,W)}return;default:if(kd(a)){for(var We in l)K=l[We],l.hasOwnProperty(We)&&K!==void 0&&!f.hasOwnProperty(We)&&hp(s,a,We,void 0,f,K);for(ne in f)K=f[ne],W=l[ne],!f.hasOwnProperty(ne)||K===W||K===void 0&&W===void 0||hp(s,a,ne,K,f,W);return}}for(var G in l)K=l[G],l.hasOwnProperty(G)&&K!=null&&!f.hasOwnProperty(G)&&Ke(s,a,G,null,f,K);for(re in f)K=f[re],W=l[re],!f.hasOwnProperty(re)||K===W||K==null&&W==null||Ke(s,a,re,K,f,W)}var pp=null,mp=null;function mu(s){return s.nodeType===9?s:s.ownerDocument}function xv(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bv(s,a){if(s===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&a==="foreignObject"?0:s}function gp(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var yp=null;function R8(){var s=window.event;return s&&s.type==="popstate"?s===yp?!1:(yp=s,!0):(yp=null,!1)}var wv=typeof setTimeout=="function"?setTimeout:void 0,L8=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,D8=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(s){return Sv.resolve(null).then(s).catch(_8)}:wv;function _8(s){setTimeout(function(){throw s})}function Fs(s){return s==="head"}function Tv(s,a){var l=a,f=0,m=0;do{var v=l.nextSibling;if(s.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(0<f&&8>f){l=f;var E=s.ownerDocument;if(l&1&&nl(E.documentElement),l&2&&nl(E.body),l&4)for(l=E.head,nl(l),E=l.firstChild;E;){var O=E.nextSibling,B=E.nodeName;E[As]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||l.removeChild(E),E=O}}if(m===0){s.removeChild(v),ul(a);return}m--}else l==="$"||l==="$?"||l==="$!"?m++:f=l.charCodeAt(0)-48;else f=0;l=v}while(l);ul(a)}function vp(s){var a=s.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vp(l),On(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}s.removeChild(l)}}function z8(s,a,l,f){for(;s.nodeType===1;){var m=l;if(s.nodeName.toLowerCase()!==a.toLowerCase()){if(!f&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(f){if(!s[As])switch(a){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(v=s.getAttribute("rel"),v==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(v!==m.rel||s.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||s.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||s.getAttribute("title")!==(m.title==null?null:m.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(v=s.getAttribute("src"),(v!==(m.src==null?null:m.src)||s.getAttribute("type")!==(m.type==null?null:m.type)||s.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&v&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(a==="input"&&s.type==="hidden"){var v=m.name==null?null:""+m.name;if(m.type==="hidden"&&s.getAttribute("name")===v)return s}else return s;if(s=di(s.nextSibling),s===null)break}return null}function j8(s,a,l){if(a==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!l||(s=di(s.nextSibling),s===null))return null;return s}function xp(s){return s.data==="$!"||s.data==="$?"&&s.ownerDocument.readyState==="complete"}function P8(s,a){var l=s.ownerDocument;if(s.data!=="$?"||l.readyState==="complete")a();else{var f=function(){a(),l.removeEventListener("DOMContentLoaded",f)};l.addEventListener("DOMContentLoaded",f),s._reactRetry=f}}function di(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return s}var bp=null;function Ev(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var l=s.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return s;a--}else l==="/$"&&a++}s=s.previousSibling}return null}function Cv(s,a,l){switch(a=mu(l),s){case"html":if(s=a.documentElement,!s)throw Error(i(452));return s;case"head":if(s=a.head,!s)throw Error(i(453));return s;case"body":if(s=a.body,!s)throw Error(i(454));return s;default:throw Error(i(451))}}function nl(s){for(var a=s.attributes;a.length;)s.removeAttributeNode(a[0]);On(s)}var Jn=new Map,Av=new Set;function gu(s){return typeof s.getRootNode=="function"?s.getRootNode():s.nodeType===9?s:s.ownerDocument}var us=J.d;J.d={f:N8,r:B8,D:I8,C:H8,L:V8,m:U8,X:F8,S:q8,M:G8};function N8(){var s=us.f(),a=ou();return s||a}function B8(s){var a=Qi(s);a!==null&&a.tag===5&&a.type==="form"?Y1(a):us.r(s)}var Aa=typeof document>"u"?null:document;function Mv(s,a,l){var f=Aa;if(f&&typeof a=="string"&&a){var m=Yn(a);m='link[rel="'+s+'"][href="'+m+'"]',typeof l=="string"&&(m+='[crossorigin="'+l+'"]'),Av.has(m)||(Av.add(m),s={rel:s,crossOrigin:l,href:a},f.querySelector(m)===null&&(a=f.createElement("link"),qt(a,"link",s),Tt(a),f.head.appendChild(a)))}}function I8(s){us.D(s),Mv("dns-prefetch",s,null)}function H8(s,a){us.C(s,a),Mv("preconnect",s,a)}function V8(s,a,l){us.L(s,a,l);var f=Aa;if(f&&s&&a){var m='link[rel="preload"][as="'+Yn(a)+'"]';a==="image"&&l&&l.imageSrcSet?(m+='[imagesrcset="'+Yn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(m+='[imagesizes="'+Yn(l.imageSizes)+'"]')):m+='[href="'+Yn(s)+'"]';var v=m;switch(a){case"style":v=Ma(s);break;case"script":v=Oa(s)}Jn.has(v)||(s=p({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:s,as:a},l),Jn.set(v,s),f.querySelector(m)!==null||a==="style"&&f.querySelector(il(v))||a==="script"&&f.querySelector(sl(v))||(a=f.createElement("link"),qt(a,"link",s),Tt(a),f.head.appendChild(a)))}}function U8(s,a){us.m(s,a);var l=Aa;if(l&&s){var f=a&&typeof a.as=="string"?a.as:"script",m='link[rel="modulepreload"][as="'+Yn(f)+'"][href="'+Yn(s)+'"]',v=m;switch(f){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":v=Oa(s)}if(!Jn.has(v)&&(s=p({rel:"modulepreload",href:s},a),Jn.set(v,s),l.querySelector(m)===null)){switch(f){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(sl(v)))return}f=l.createElement("link"),qt(f,"link",s),Tt(f),l.head.appendChild(f)}}}function q8(s,a,l){us.S(s,a,l);var f=Aa;if(f&&s){var m=Zi(f).hoistableStyles,v=Ma(s);a=a||"default";var E=m.get(v);if(!E){var O={loading:0,preload:null};if(E=f.querySelector(il(v)))O.loading=5;else{s=p({rel:"stylesheet",href:s,"data-precedence":a},l),(l=Jn.get(v))&&wp(s,l);var B=E=f.createElement("link");Tt(B),qt(B,"link",s),B._p=new Promise(function(Q,ne){B.onload=Q,B.onerror=ne}),B.addEventListener("load",function(){O.loading|=1}),B.addEventListener("error",function(){O.loading|=2}),O.loading|=4,yu(E,a,f)}E={type:"stylesheet",instance:E,count:1,state:O},m.set(v,E)}}}function F8(s,a){us.X(s,a);var l=Aa;if(l&&s){var f=Zi(l).hoistableScripts,m=Oa(s),v=f.get(m);v||(v=l.querySelector(sl(m)),v||(s=p({src:s,async:!0},a),(a=Jn.get(m))&&Sp(s,a),v=l.createElement("script"),Tt(v),qt(v,"link",s),l.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},f.set(m,v))}}function G8(s,a){us.M(s,a);var l=Aa;if(l&&s){var f=Zi(l).hoistableScripts,m=Oa(s),v=f.get(m);v||(v=l.querySelector(sl(m)),v||(s=p({src:s,async:!0,type:"module"},a),(a=Jn.get(m))&&Sp(s,a),v=l.createElement("script"),Tt(v),qt(v,"link",s),l.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},f.set(m,v))}}function Ov(s,a,l,f){var m=(m=he.current)?gu(m):null;if(!m)throw Error(i(446));switch(s){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Ma(l.href),l=Zi(m).hoistableStyles,f=l.get(a),f||(f={type:"style",instance:null,count:0,state:null},l.set(a,f)),f):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){s=Ma(l.href);var v=Zi(m).hoistableStyles,E=v.get(s);if(E||(m=m.ownerDocument||m,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},v.set(s,E),(v=m.querySelector(il(s)))&&!v._p&&(E.instance=v,E.state.loading=5),Jn.has(s)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Jn.set(s,l),v||Y8(m,s,l,E.state))),a&&f===null)throw Error(i(528,""));return E}if(a&&f!==null)throw Error(i(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Oa(l),l=Zi(m).hoistableScripts,f=l.get(a),f||(f={type:"script",instance:null,count:0,state:null},l.set(a,f)),f):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,s))}}function Ma(s){return'href="'+Yn(s)+'"'}function il(s){return'link[rel="stylesheet"]['+s+"]"}function kv(s){return p({},s,{"data-precedence":s.precedence,precedence:null})}function Y8(s,a,l,f){s.querySelector('link[rel="preload"][as="style"]['+a+"]")?f.loading=1:(a=s.createElement("link"),f.preload=a,a.addEventListener("load",function(){return f.loading|=1}),a.addEventListener("error",function(){return f.loading|=2}),qt(a,"link",l),Tt(a),s.head.appendChild(a))}function Oa(s){return'[src="'+Yn(s)+'"]'}function sl(s){return"script[async]"+s}function Rv(s,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var f=s.querySelector('style[data-href~="'+Yn(l.href)+'"]');if(f)return a.instance=f,Tt(f),f;var m=p({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return f=(s.ownerDocument||s).createElement("style"),Tt(f),qt(f,"style",m),yu(f,l.precedence,s),a.instance=f;case"stylesheet":m=Ma(l.href);var v=s.querySelector(il(m));if(v)return a.state.loading|=4,a.instance=v,Tt(v),v;f=kv(l),(m=Jn.get(m))&&wp(f,m),v=(s.ownerDocument||s).createElement("link"),Tt(v);var E=v;return E._p=new Promise(function(O,B){E.onload=O,E.onerror=B}),qt(v,"link",f),a.state.loading|=4,yu(v,l.precedence,s),a.instance=v;case"script":return v=Oa(l.src),(m=s.querySelector(sl(v)))?(a.instance=m,Tt(m),m):(f=l,(m=Jn.get(v))&&(f=p({},l),Sp(f,m)),s=s.ownerDocument||s,m=s.createElement("script"),Tt(m),qt(m,"link",f),s.head.appendChild(m),a.instance=m);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(f=a.instance,a.state.loading|=4,yu(f,l.precedence,s));return a.instance}function yu(s,a,l){for(var f=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=f.length?f[f.length-1]:null,v=m,E=0;E<f.length;E++){var O=f[E];if(O.dataset.precedence===a)v=O;else if(v!==m)break}v?v.parentNode.insertBefore(s,v.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(s,a.firstChild))}function wp(s,a){s.crossOrigin==null&&(s.crossOrigin=a.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=a.referrerPolicy),s.title==null&&(s.title=a.title)}function Sp(s,a){s.crossOrigin==null&&(s.crossOrigin=a.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=a.referrerPolicy),s.integrity==null&&(s.integrity=a.integrity)}var vu=null;function Lv(s,a,l){if(vu===null){var f=new Map,m=vu=new Map;m.set(l,f)}else m=vu,f=m.get(l),f||(f=new Map,m.set(l,f));if(f.has(s))return f;for(f.set(s,null),l=l.getElementsByTagName(s),m=0;m<l.length;m++){var v=l[m];if(!(v[As]||v[Rt]||s==="link"&&v.getAttribute("rel")==="stylesheet")&&v.namespaceURI!=="http://www.w3.org/2000/svg"){var E=v.getAttribute(a)||"";E=s+E;var O=f.get(E);O?O.push(v):f.set(E,[v])}}return f}function Dv(s,a,l){s=s.ownerDocument||s,s.head.insertBefore(l,a==="title"?s.querySelector("head > title"):null)}function X8(s,a,l){if(l===1||a.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return s=a.disabled,typeof a.precedence=="string"&&s==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function _v(s){return!(s.type==="stylesheet"&&(s.state.loading&3)===0)}var rl=null;function Q8(){}function Z8(s,a,l){if(rl===null)throw Error(i(475));var f=rl;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var m=Ma(l.href),v=s.querySelector(il(m));if(v){s=v._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(f.count++,f=xu.bind(f),s.then(f,f)),a.state.loading|=4,a.instance=v,Tt(v);return}v=s.ownerDocument||s,l=kv(l),(m=Jn.get(m))&&wp(l,m),v=v.createElement("link"),Tt(v);var E=v;E._p=new Promise(function(O,B){E.onload=O,E.onerror=B}),qt(v,"link",l),a.instance=v}f.stylesheets===null&&(f.stylesheets=new Map),f.stylesheets.set(a,s),(s=a.state.preload)&&(a.state.loading&3)===0&&(f.count++,a=xu.bind(f),s.addEventListener("load",a),s.addEventListener("error",a))}}function K8(){if(rl===null)throw Error(i(475));var s=rl;return s.stylesheets&&s.count===0&&Tp(s,s.stylesheets),0<s.count?function(a){var l=setTimeout(function(){if(s.stylesheets&&Tp(s,s.stylesheets),s.unsuspend){var f=s.unsuspend;s.unsuspend=null,f()}},6e4);return s.unsuspend=a,function(){s.unsuspend=null,clearTimeout(l)}}:null}function xu(){if(this.count--,this.count===0){if(this.stylesheets)Tp(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var bu=null;function Tp(s,a){s.stylesheets=null,s.unsuspend!==null&&(s.count++,bu=new Map,a.forEach(W8,s),bu=null,xu.call(s))}function W8(s,a){if(!(a.state.loading&4)){var l=bu.get(s);if(l)var f=l.get(null);else{l=new Map,bu.set(s,l);for(var m=s.querySelectorAll("link[data-precedence],style[data-precedence]"),v=0;v<m.length;v++){var E=m[v];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(l.set(E.dataset.precedence,E),f=E)}f&&l.set(null,f)}m=a.instance,E=m.getAttribute("data-precedence"),v=l.get(E)||f,v===f&&l.set(null,m),l.set(E,m),this.count++,f=xu.bind(this),m.addEventListener("load",f),m.addEventListener("error",f),v?v.parentNode.insertBefore(m,v.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(m,s.firstChild)),a.state.loading|=4}}var al={$$typeof:A,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function $8(s,a,l,f,m,v,E,O){this.tag=1,this.containerInfo=s,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.hiddenUpdates=po(null),this.identifierPrefix=f,this.onUncaughtError=m,this.onCaughtError=v,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function zv(s,a,l,f,m,v,E,O,B,Q,ne,re){return s=new $8(s,a,l,E,O,B,Q,re),a=1,v===!0&&(a|=24),v=Ln(3,null,null,a),s.current=v,v.stateNode=s,a=sh(),a.refCount++,s.pooledCache=a,a.refCount++,v.memoizedState={element:f,isDehydrated:l,cache:a},lh(v),s}function jv(s){return s?(s=ra,s):ra}function Pv(s,a,l,f,m,v){m=jv(m),f.context===null?f.context=m:f.pendingContext=m,f=Ls(a),f.payload={element:l},v=v===void 0?null:v,v!==null&&(f.callback=v),l=Ds(s,f,a),l!==null&&(Pn(l,s,a),Po(l,s,a))}function Nv(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var l=s.retryLane;s.retryLane=l!==0&&l<a?l:a}}function Ep(s,a){Nv(s,a),(s=s.alternate)&&Nv(s,a)}function Bv(s){if(s.tag===13){var a=sa(s,67108864);a!==null&&Pn(a,s,67108864),Ep(s,67108864)}}var wu=!0;function J8(s,a,l,f){var m=U.T;U.T=null;var v=J.p;try{J.p=2,Cp(s,a,l,f)}finally{J.p=v,U.T=m}}function eE(s,a,l,f){var m=U.T;U.T=null;var v=J.p;try{J.p=8,Cp(s,a,l,f)}finally{J.p=v,U.T=m}}function Cp(s,a,l,f){if(wu){var m=Ap(f);if(m===null)dp(s,a,f,Su,l),Hv(s,f);else if(nE(m,s,a,l,f))f.stopPropagation();else if(Hv(s,f),a&4&&-1<tE.indexOf(s)){for(;m!==null;){var v=Qi(m);if(v!==null)switch(v.tag){case 3:if(v=v.stateNode,v.current.memoizedState.isDehydrated){var E=yn(v.pendingLanes);if(E!==0){var O=v;for(O.pendingLanes|=2,O.entangledLanes|=2;E;){var B=1<<31-Kt(E);O.entanglements[1]|=B,E&=~B}_i(v),(Ge&6)===0&&(ru=St()+500,Jo(0))}}break;case 13:O=sa(v,2),O!==null&&Pn(O,v,2),ou(),Ep(v,2)}if(v=Ap(f),v===null&&dp(s,a,f,Su,l),v===m)break;m=v}m!==null&&f.stopPropagation()}else dp(s,a,f,null,l)}}function Ap(s){return s=Ld(s),Mp(s)}var Su=null;function Mp(s){if(Su=null,s=Xi(s),s!==null){var a=o(s);if(a===null)s=null;else{var l=a.tag;if(l===13){if(s=c(a),s!==null)return s;s=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null)}}return Su=s,null}function Iv(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yr()){case or:return 2;case fo:return 8;case lr:case Sd:return 32;case Xr:return 268435456;default:return 32}default:return 32}}var Op=!1,Gs=null,Ys=null,Xs=null,ol=new Map,ll=new Map,Qs=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hv(s,a){switch(s){case"focusin":case"focusout":Gs=null;break;case"dragenter":case"dragleave":Ys=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":ol.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(a.pointerId)}}function cl(s,a,l,f,m,v){return s===null||s.nativeEvent!==v?(s={blockedOn:a,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[m]},a!==null&&(a=Qi(a),a!==null&&Bv(a)),s):(s.eventSystemFlags|=f,a=s.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),s)}function nE(s,a,l,f,m){switch(a){case"focusin":return Gs=cl(Gs,s,a,l,f,m),!0;case"dragenter":return Ys=cl(Ys,s,a,l,f,m),!0;case"mouseover":return Xs=cl(Xs,s,a,l,f,m),!0;case"pointerover":var v=m.pointerId;return ol.set(v,cl(ol.get(v)||null,s,a,l,f,m)),!0;case"gotpointercapture":return v=m.pointerId,ll.set(v,cl(ll.get(v)||null,s,a,l,f,m)),!0}return!1}function Vv(s){var a=Xi(s.target);if(a!==null){var l=o(a);if(l!==null){if(a=l.tag,a===13){if(a=c(l),a!==null){s.blockedOn=a,yo(s.priority,function(){if(l.tag===13){var f=jn();f=Ai(f);var m=sa(l,f);m!==null&&Pn(m,l,f),Ep(l,f)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){s.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Tu(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var l=Ap(s.nativeEvent);if(l===null){l=s.nativeEvent;var f=new l.constructor(l.type,l);Rd=f,l.target.dispatchEvent(f),Rd=null}else return a=Qi(l),a!==null&&Bv(a),s.blockedOn=l,!1;a.shift()}return!0}function Uv(s,a,l){Tu(s)&&l.delete(a)}function iE(){Op=!1,Gs!==null&&Tu(Gs)&&(Gs=null),Ys!==null&&Tu(Ys)&&(Ys=null),Xs!==null&&Tu(Xs)&&(Xs=null),ol.forEach(Uv),ll.forEach(Uv)}function Eu(s,a){s.blockedOn===a&&(s.blockedOn=null,Op||(Op=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,iE)))}var Cu=null;function qv(s){Cu!==s&&(Cu=s,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Cu===s&&(Cu=null);for(var a=0;a<s.length;a+=3){var l=s[a],f=s[a+1],m=s[a+2];if(typeof f!="function"){if(Mp(f||l)===null)continue;break}var v=Qi(l);v!==null&&(s.splice(a,3),a-=3,Mh(v,{pending:!0,data:m,method:l.method,action:f},f,m))}}))}function ul(s){function a(B){return Eu(B,s)}Gs!==null&&Eu(Gs,s),Ys!==null&&Eu(Ys,s),Xs!==null&&Eu(Xs,s),ol.forEach(a),ll.forEach(a);for(var l=0;l<Qs.length;l++){var f=Qs[l];f.blockedOn===s&&(f.blockedOn=null)}for(;0<Qs.length&&(l=Qs[0],l.blockedOn===null);)Vv(l),l.blockedOn===null&&Qs.shift();if(l=(s.ownerDocument||s).$$reactFormReplay,l!=null)for(f=0;f<l.length;f+=3){var m=l[f],v=l[f+1],E=m[Wt]||null;if(typeof v=="function")E||qv(l);else if(E){var O=null;if(v&&v.hasAttribute("formAction")){if(m=v,E=v[Wt]||null)O=E.formAction;else if(Mp(m)!==null)continue}else O=E.action;typeof O=="function"?l[f+1]=O:(l.splice(f,3),f-=3),qv(l)}}}function kp(s){this._internalRoot=s}Au.prototype.render=kp.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(i(409));var l=a.current,f=jn();Pv(l,f,s,a,null,null)},Au.prototype.unmount=kp.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;Pv(s.current,2,null,s,null,null),ou(),a[Ht]=null}};function Au(s){this._internalRoot=s}Au.prototype.unstable_scheduleHydration=function(s){if(s){var a=go();s={blockedOn:null,target:s,priority:a};for(var l=0;l<Qs.length&&a!==0&&a<Qs[l].priority;l++);Qs.splice(l,0,s),l===0&&Vv(s)}};var Fv=e.version;if(Fv!=="19.1.0")throw Error(i(527,Fv,"19.1.0"));J.findDOMNode=function(s){var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(i(188)):(s=Object.keys(s).join(","),Error(i(268,s)));return s=d(a),s=s!==null?h(s):null,s=s===null?null:s.stateNode,s};var sE={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Fn=Mu.inject(sE),Zt=Mu}catch{}}return dl.createRoot=function(s,a){if(!r(s))throw Error(i(299));var l=!1,f="",m=ay,v=oy,E=ly,O=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks)),a=zv(s,1,!1,null,null,l,f,m,v,E,O,null),s[Ht]=a.current,fp(s),new kp(a)},dl.hydrateRoot=function(s,a,l){if(!r(s))throw Error(i(299));var f=!1,m="",v=ay,E=oy,O=ly,B=null,Q=null;return l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onUncaughtError!==void 0&&(v=l.onUncaughtError),l.onCaughtError!==void 0&&(E=l.onCaughtError),l.onRecoverableError!==void 0&&(O=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(B=l.unstable_transitionCallbacks),l.formState!==void 0&&(Q=l.formState)),a=zv(s,1,!0,a,l??null,f,m,v,E,O,B,Q),a.context=jv(null),l=a.current,f=jn(),f=Ai(f),m=Ls(f),m.callback=null,Ds(l,m,f),l=f,a.current.lanes=l,li(a,l),_i(a),s[Ht]=a.current,fp(s),new Au(a)},dl.version="19.1.0",dl}var ex;function pE(){if(ex)return Lp.exports;ex=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Lp.exports=hE(),Lp.exports}var mE=pE();const gE=rc(mE);var D=Ss();const Qe=rc(D),tx=aE({__proto__:null,default:Qe},[D]);var hl={},nx;function yE(){if(nx)return hl;nx=1,Object.defineProperty(hl,"__esModule",{value:!0}),hl.parse=c,hl.serialize=h;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,r=Object.prototype.toString,o=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function c(y,x){const b=new o,S=y.length;if(S<2)return b;const C=(x==null?void 0:x.decode)||p;let T=0;do{const M=y.indexOf("=",T);if(M===-1)break;const A=y.indexOf(";",T),R=A===-1?S:A;if(M>R){T=y.lastIndexOf(";",M-1)+1;continue}const k=u(y,T,M),P=d(y,M,k),L=y.slice(k,P);if(b[L]===void 0){let I=u(y,M+1,R),V=d(y,R,I);const F=C(y.slice(I,V));b[L]=F}T=R+1}while(T<S);return b}function u(y,x,b){do{const S=y.charCodeAt(x);if(S!==32&&S!==9)return x}while(++x<b);return b}function d(y,x,b){for(;x>b;){const S=y.charCodeAt(--x);if(S!==32&&S!==9)return x+1}return b}function h(y,x,b){const S=(b==null?void 0:b.encode)||encodeURIComponent;if(!t.test(y))throw new TypeError(`argument name is invalid: ${y}`);const C=S(x);if(!e.test(C))throw new TypeError(`argument val is invalid: ${x}`);let T=y+"="+C;if(!b)return T;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);T+="; Max-Age="+b.maxAge}if(b.domain){if(!n.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);T+="; Domain="+b.domain}if(b.path){if(!i.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);T+="; Path="+b.path}if(b.expires){if(!g(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);T+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(T+="; HttpOnly"),b.secure&&(T+="; Secure"),b.partitioned&&(T+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return T}function p(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function g(y){return r.call(y)==="[object Date]"}return hl}yE();var ix="popstate";function vE(t={}){function e(i,r){let{pathname:o,search:c,hash:u}=i.location;return K0("",{pathname:o,search:c,hash:u},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Hl(r)}return bE(e,n,null,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xE(){return Math.random().toString(36).substring(2,10)}function sx(t,e){return{usr:t.state,key:t.key,idx:e}}function K0(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?no(e):e,state:n,key:e&&e.key||i||xE()}}function Hl({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function no(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function bE(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:o=!1}=i,c=r.history,u="POP",d=null,h=p();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function p(){return(c.state||{idx:null}).idx}function g(){u="POP";let C=p(),T=C==null?null:C-h;h=C,d&&d({action:u,location:S.location,delta:T})}function y(C,T){u="PUSH";let M=K0(S.location,C,T);h=p()+1;let A=sx(M,h),R=S.createHref(M);try{c.pushState(A,"",R)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(R)}o&&d&&d({action:u,location:S.location,delta:1})}function x(C,T){u="REPLACE";let M=K0(S.location,C,T);h=p();let A=sx(M,h),R=S.createHref(M);c.replaceState(A,"",R),o&&d&&d({action:u,location:S.location,delta:0})}function b(C){return wE(C)}let S={get action(){return u},get location(){return t(r,c)},listen(C){if(d)throw new Error("A history only accepts one active listener");return r.addEventListener(ix,g),d=C,()=>{r.removeEventListener(ix,g),d=null}},createHref(C){return e(r,C)},createURL:b,encodeLocation(C){let T=b(C);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:y,replace:x,go(C){return c.go(C)}};return S}function wE(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ot(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Hl(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function B5(t,e,n="/"){return SE(t,e,n,!1)}function SE(t,e,n,i){let r=typeof e=="string"?no(e):e,o=xs(r.pathname||"/",n);if(o==null)return null;let c=I5(t);TE(c);let u=null;for(let d=0;u==null&&d<c.length;++d){let h=zE(o);u=DE(c[d],h,i)}return u}function I5(t,e=[],n=[],i=""){let r=(o,c,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};d.relativePath.startsWith("/")&&(ot(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let h=ms([i,d.relativePath]),p=n.concat(d);o.children&&o.children.length>0&&(ot(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),I5(o.children,e,p,h)),!(o.path==null&&!o.index)&&e.push({path:h,score:RE(h,o.index),routesMeta:p})};return t.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))r(o,c);else for(let d of H5(o.path))r(o,c,d)}),e}function H5(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let c=H5(i.join("/")),u=[];return u.push(...c.map(d=>d===""?o:[o,d].join("/"))),r&&u.push(...c),u.map(d=>t.startsWith("/")&&d===""?"/":d)}function TE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var EE=/^:[\w-]+$/,CE=3,AE=2,ME=1,OE=10,kE=-2,rx=t=>t==="*";function RE(t,e){let n=t.split("/"),i=n.length;return n.some(rx)&&(i+=kE),e&&(i+=AE),n.filter(r=>!rx(r)).reduce((r,o)=>r+(EE.test(o)?CE:o===""?ME:OE),i)}function LE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function DE(t,e,n=!1){let{routesMeta:i}=t,r={},o="/",c=[];for(let u=0;u<i.length;++u){let d=i[u],h=u===i.length-1,p=o==="/"?e:e.slice(o.length)||"/",g=Mf({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),y=d.route;if(!g&&h&&n&&!i[i.length-1].route.index&&(g=Mf({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!g)return null;Object.assign(r,g.params),c.push({params:r,pathname:ms([o,g.pathname]),pathnameBase:BE(ms([o,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(o=ms([o,g.pathnameBase]))}return c}function Mf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=_E(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],c=o.replace(/(.)\/+$/,"$1"),u=r.slice(1);return{params:i.reduce((h,{paramName:p,isOptional:g},y)=>{if(p==="*"){let b=u[y]||"";c=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const x=u[y];return g&&!x?h[p]=void 0:h[p]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:c,pattern:t}}function _E(t,e=!1,n=!0){wi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,d)=>(i.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function zE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function xs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function jE(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?no(t):t;return{pathname:n?n.startsWith("/")?n:PE(n,e):e,search:IE(i),hash:HE(r)}}function PE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Pp(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qm(t){let e=NE(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Zm(t,e,n,i=!1){let r;typeof t=="string"?r=no(t):(r={...t},ot(!r.pathname||!r.pathname.includes("?"),Pp("?","pathname","search",r)),ot(!r.pathname||!r.pathname.includes("#"),Pp("#","pathname","hash",r)),ot(!r.search||!r.search.includes("#"),Pp("#","search","hash",r)));let o=t===""||r.pathname==="",c=o?"/":r.pathname,u;if(c==null)u=n;else{let g=e.length-1;if(!i&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),g-=1;r.pathname=y.join("/")}u=g>=0?e[g]:"/"}let d=jE(r,u),h=c&&c!=="/"&&c.endsWith("/"),p=(o||c===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}var ms=t=>t.join("/").replace(/\/\/+/g,"/"),BE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var V5=["POST","PUT","PATCH","DELETE"];new Set(V5);var UE=["GET",...V5];new Set(UE);var io=D.createContext(null);io.displayName="DataRouter";var Wf=D.createContext(null);Wf.displayName="DataRouterState";var U5=D.createContext({isTransitioning:!1});U5.displayName="ViewTransition";var qE=D.createContext(new Map);qE.displayName="Fetchers";var FE=D.createContext(null);FE.displayName="Await";var Ei=D.createContext(null);Ei.displayName="Navigation";var ac=D.createContext(null);ac.displayName="Location";var Ci=D.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName="Route";var Km=D.createContext(null);Km.displayName="RouteError";function GE(t,{relative:e}={}){ot(so(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=D.useContext(Ei),{hash:r,pathname:o,search:c}=oc(t,{relative:e}),u=o;return n!=="/"&&(u=o==="/"?n:ms([n,o])),i.createHref({pathname:u,search:c,hash:r})}function so(){return D.useContext(ac)!=null}function Ts(){return ot(so(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(ac).location}var q5="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function F5(t){D.useContext(Ei).static||D.useLayoutEffect(t)}function Wm(){let{isDataRoute:t}=D.useContext(Ci);return t?aC():YE()}function YE(){ot(so(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(io),{basename:e,navigator:n}=D.useContext(Ei),{matches:i}=D.useContext(Ci),{pathname:r}=Ts(),o=JSON.stringify(Qm(i)),c=D.useRef(!1);return F5(()=>{c.current=!0}),D.useCallback((d,h={})=>{if(wi(c.current,q5),!c.current)return;if(typeof d=="number"){n.go(d);return}let p=Zm(d,JSON.parse(o),r,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ms([e,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[e,n,o,r,t])}var XE=D.createContext(null);function QE(t){let e=D.useContext(Ci).outlet;return e&&D.createElement(XE.Provider,{value:t},e)}function oc(t,{relative:e}={}){let{matches:n}=D.useContext(Ci),{pathname:i}=Ts(),r=JSON.stringify(Qm(n));return D.useMemo(()=>Zm(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function ZE(t,e){return G5(t,e)}function G5(t,e,n,i){var T;ot(so(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=D.useContext(Ei),{matches:o}=D.useContext(Ci),c=o[o.length-1],u=c?c.params:{},d=c?c.pathname:"/",h=c?c.pathnameBase:"/",p=c&&c.route;{let M=p&&p.path||"";Y5(d,!p||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let g=Ts(),y;if(e){let M=typeof e=="string"?no(e):e;ot(h==="/"||((T=M.pathname)==null?void 0:T.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${M.pathname}" was given in the \`location\` prop.`),y=M}else y=g;let x=y.pathname||"/",b=x;if(h!=="/"){let M=h.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(M.length).join("/")}let S=B5(t,{pathname:b});wi(p||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),wi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=eC(S&&S.map(M=>Object.assign({},M,{params:Object.assign({},u,M.params),pathname:ms([h,r.encodeLocation?r.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?h:ms([h,r.encodeLocation?r.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),o,n,i);return e&&C?D.createElement(ac.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},C):C}function KE(){let t=rC(),e=VE(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:o},"ErrorBoundary")," or"," ",D.createElement("code",{style:o},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,c)}var WE=D.createElement(KE,null),$E=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?D.createElement(Ci.Provider,{value:this.props.routeContext},D.createElement(Km.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JE({routeContext:t,match:e,children:n}){let i=D.useContext(io);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(Ci.Provider,{value:t},n)}function eC(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,o=n==null?void 0:n.errors;if(o!=null){let d=r.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);ot(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),r=r.slice(0,Math.min(r.length,d+1))}let c=!1,u=-1;if(n)for(let d=0;d<r.length;d++){let h=r[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:g}=n,y=h.route.loader&&!p.hasOwnProperty(h.route.id)&&(!g||g[h.route.id]===void 0);if(h.route.lazy||y){c=!0,u>=0?r=r.slice(0,u+1):r=[r[0]];break}}}return r.reduceRight((d,h,p)=>{let g,y=!1,x=null,b=null;n&&(g=o&&h.route.id?o[h.route.id]:void 0,x=h.route.errorElement||WE,c&&(u<0&&p===0?(Y5("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):u===p&&(y=!0,b=h.route.hydrateFallbackElement||null)));let S=e.concat(r.slice(0,p+1)),C=()=>{let T;return g?T=x:y?T=b:h.route.Component?T=D.createElement(h.route.Component,null):h.route.element?T=h.route.element:T=d,D.createElement(JE,{match:h,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:T})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?D.createElement($E,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):C()},null)}function $m(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tC(t){let e=D.useContext(io);return ot(e,$m(t)),e}function nC(t){let e=D.useContext(Wf);return ot(e,$m(t)),e}function iC(t){let e=D.useContext(Ci);return ot(e,$m(t)),e}function Jm(t){let e=iC(t),n=e.matches[e.matches.length-1];return ot(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function sC(){return Jm("useRouteId")}function rC(){var i;let t=D.useContext(Km),e=nC("useRouteError"),n=Jm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function aC(){let{router:t}=tC("useNavigate"),e=Jm("useNavigate"),n=D.useRef(!1);return F5(()=>{n.current=!0}),D.useCallback(async(r,o={})=>{wi(n.current,q5),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...o}))},[t,e])}var ax={};function Y5(t,e,n){!e&&!ax[t]&&(ax[t]=!0,wi(!1,n))}D.memo(oC);function oC({routes:t,future:e,state:n}){return G5(t,void 0,n,e)}function lC({to:t,replace:e,state:n,relative:i}){ot(so(),"<Navigate> may be used only in the context of a <Router> component.");let{static:r}=D.useContext(Ei);wi(!r,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=D.useContext(Ci),{pathname:c}=Ts(),u=Wm(),d=Zm(t,Qm(o),c,i==="path"),h=JSON.stringify(d);return D.useEffect(()=>{u(JSON.parse(h),{replace:e,state:n,relative:i})},[u,h,i,e,n]),null}function cC(t){return QE(t.context)}function Ft(t){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uC({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:o=!1}){ot(!so(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:c,navigator:r,static:o,future:{}}),[c,r,o]);typeof n=="string"&&(n=no(n));let{pathname:d="/",search:h="",hash:p="",state:g=null,key:y="default"}=n,x=D.useMemo(()=>{let b=xs(d,c);return b==null?null:{location:{pathname:b,search:h,hash:p,state:g,key:y},navigationType:i}},[c,d,h,p,g,y,i]);return wi(x!=null,`<Router basename="${c}"> is not able to match the URL "${d}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:D.createElement(Ei.Provider,{value:u},D.createElement(ac.Provider,{children:e,value:x}))}function fC({children:t,location:e}){return ZE(W0(t),e)}function W0(t,e=[]){let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let o=[...e,r];if(i.type===D.Fragment){n.push.apply(n,W0(i.props.children,o));return}ot(i.type===Ft,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=W0(i.props.children,o)),n.push(c)}),n}var of="get",lf="application/x-www-form-urlencoded";function $f(t){return t!=null&&typeof t.tagName=="string"}function dC(t){return $f(t)&&t.tagName.toLowerCase()==="button"}function hC(t){return $f(t)&&t.tagName.toLowerCase()==="form"}function pC(t){return $f(t)&&t.tagName.toLowerCase()==="input"}function mC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function gC(t,e){return t.button===0&&(!e||e==="_self")&&!mC(t)}var ku=null;function yC(){if(ku===null)try{new FormData(document.createElement("form"),0),ku=!1}catch{ku=!0}return ku}var vC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Np(t){return t!=null&&!vC.has(t)?(wi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lf}"`),null):t}function xC(t,e){let n,i,r,o,c;if(hC(t)){let u=t.getAttribute("action");i=u?xs(u,e):null,n=t.getAttribute("method")||of,r=Np(t.getAttribute("enctype"))||lf,o=new FormData(t)}else if(dC(t)||pC(t)&&(t.type==="submit"||t.type==="image")){let u=t.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=t.getAttribute("formaction")||u.getAttribute("action");if(i=d?xs(d,e):null,n=t.getAttribute("formmethod")||u.getAttribute("method")||of,r=Np(t.getAttribute("formenctype"))||Np(u.getAttribute("enctype"))||lf,o=new FormData(u,t),!yC()){let{name:h,type:p,value:g}=t;if(p==="image"){let y=h?`${h}.`:"";o.append(`${y}x`,"0"),o.append(`${y}y`,"0")}else h&&o.append(h,g)}}else{if($f(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=of,i=null,r=lf,c=t}return o&&r==="text/plain"&&(c=o,o=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:o,body:c}}function eg(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function bC(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wC(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function SC(t,e,n){let i=await Promise.all(t.map(async r=>{let o=e.routes[r.route.id];if(o){let c=await bC(o,n);return c.links?c.links():[]}return[]}));return AC(i.flat(1).filter(wC).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function ox(t,e,n,i,r,o){let c=(d,h)=>n[h]?d.route.id!==n[h].route.id:!0,u=(d,h)=>{var p;return n[h].pathname!==d.pathname||((p=n[h].route.path)==null?void 0:p.endsWith("*"))&&n[h].params["*"]!==d.params["*"]};return o==="assets"?e.filter((d,h)=>c(d,h)||u(d,h)):o==="data"?e.filter((d,h)=>{var g;let p=i.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(c(d,h)||u(d,h))return!0;if(d.route.shouldRevalidate){let y=d.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(t,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function TC(t,e,{includeHydrateFallback:n}={}){return EC(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1))}function EC(t){return[...new Set(t)]}function CC(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function AC(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let o=JSON.stringify(CC(r));return n.has(o)||(n.add(o),i.push({key:o,link:r})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var MC=new Set([100,101,204,205]);function OC(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&xs(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function X5(){let t=D.useContext(io);return eg(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function kC(){let t=D.useContext(Wf);return eg(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var tg=D.createContext(void 0);tg.displayName="FrameworkContext";function Q5(){let t=D.useContext(tg);return eg(t,"You must render this element inside a <HydratedRouter> element"),t}function RC(t,e){let n=D.useContext(tg),[i,r]=D.useState(!1),[o,c]=D.useState(!1),{onFocus:u,onBlur:d,onMouseEnter:h,onMouseLeave:p,onTouchStart:g}=e,y=D.useRef(null);D.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let S=T=>{T.forEach(M=>{c(M.isIntersecting)})},C=new IntersectionObserver(S,{threshold:.5});return y.current&&C.observe(y.current),()=>{C.disconnect()}}},[t]),D.useEffect(()=>{if(i){let S=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(S)}}},[i]);let x=()=>{r(!0)},b=()=>{r(!1),c(!1)};return n?t!=="intent"?[o,y,{}]:[o,y,{onFocus:pl(u,x),onBlur:pl(d,b),onMouseEnter:pl(h,x),onMouseLeave:pl(p,b),onTouchStart:pl(g,x)}]:[!1,y,{}]}function pl(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function LC({page:t,...e}){let{router:n}=X5(),i=D.useMemo(()=>B5(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?D.createElement(_C,{page:t,matches:i,...e}):null}function DC(t){let{manifest:e,routeModules:n}=Q5(),[i,r]=D.useState([]);return D.useEffect(()=>{let o=!1;return SC(t,e,n).then(c=>{o||r(c)}),()=>{o=!0}},[t,e,n]),i}function _C({page:t,matches:e,...n}){let i=Ts(),{manifest:r,routeModules:o}=Q5(),{basename:c}=X5(),{loaderData:u,matches:d}=kC(),h=D.useMemo(()=>ox(t,e,d,r,i,"data"),[t,e,d,r,i]),p=D.useMemo(()=>ox(t,e,d,r,i,"assets"),[t,e,d,r,i]),g=D.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let b=new Set,S=!1;if(e.forEach(T=>{var A;let M=r.routes[T.route.id];!M||!M.hasLoader||(!h.some(R=>R.route.id===T.route.id)&&T.route.id in u&&((A=o[T.route.id])!=null&&A.shouldRevalidate)||M.hasClientLoader?S=!0:b.add(T.route.id))}),b.size===0)return[];let C=OC(t,c);return S&&b.size>0&&C.searchParams.set("_routes",e.filter(T=>b.has(T.route.id)).map(T=>T.route.id).join(",")),[C.pathname+C.search]},[c,u,i,r,h,e,t,o]),y=D.useMemo(()=>TC(p,r),[p,r]),x=DC(p);return D.createElement(D.Fragment,null,g.map(b=>D.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),y.map(b=>D.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),x.map(({key:b,link:S})=>D.createElement("link",{key:b,...S})))}function zC(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Z5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z5&&(window.__reactRouterVersion="7.6.3")}catch{}function jC({basename:t,children:e,window:n}){let i=D.useRef();i.current==null&&(i.current=vE({window:n,v5Compat:!0}));let r=i.current,[o,c]=D.useState({action:r.action,location:r.location}),u=D.useCallback(d=>{D.startTransition(()=>c(d))},[c]);return D.useLayoutEffect(()=>r.listen(u),[r,u]),D.createElement(uC,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:r})}var K5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W5=D.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:o,replace:c,state:u,target:d,to:h,preventScrollReset:p,viewTransition:g,...y},x){let{basename:b}=D.useContext(Ei),S=typeof h=="string"&&K5.test(h),C,T=!1;if(typeof h=="string"&&S&&(C=h,Z5))try{let V=new URL(window.location.href),F=h.startsWith("//")?new URL(V.protocol+h):new URL(h),N=xs(F.pathname,b);F.origin===V.origin&&N!=null?h=N+F.search+F.hash:T=!0}catch{wi(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=GE(h,{relative:r}),[A,R,k]=RC(i,y),P=BC(h,{replace:c,state:u,target:d,preventScrollReset:p,relative:r,viewTransition:g});function L(V){e&&e(V),V.defaultPrevented||P(V)}let I=D.createElement("a",{...y,...k,href:C||M,onClick:T||o?e:L,ref:zC(x,R),target:d,"data-discover":!S&&n==="render"?"true":void 0});return A&&!S?D.createElement(D.Fragment,null,I,D.createElement(LC,{page:M})):I});W5.displayName="Link";var ng=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:o,to:c,viewTransition:u,children:d,...h},p){let g=oc(c,{relative:h.relative}),y=Ts(),x=D.useContext(Wf),{navigator:b,basename:S}=D.useContext(Ei),C=x!=null&&qC(g)&&u===!0,T=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,M=y.pathname,A=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(M=M.toLowerCase(),A=A?A.toLowerCase():null,T=T.toLowerCase()),A&&S&&(A=xs(A,S)||A);const R=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let k=M===T||!r&&M.startsWith(T)&&M.charAt(R)==="/",P=A!=null&&(A===T||!r&&A.startsWith(T)&&A.charAt(T.length)==="/"),L={isActive:k,isPending:P,isTransitioning:C},I=k?e:void 0,V;typeof i=="function"?V=i(L):V=[i,k?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let F=typeof o=="function"?o(L):o;return D.createElement(W5,{...h,"aria-current":I,className:V,ref:p,style:F,to:c,viewTransition:u},typeof d=="function"?d(L):d)});ng.displayName="NavLink";var PC=D.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:o,method:c=of,action:u,onSubmit:d,relative:h,preventScrollReset:p,viewTransition:g,...y},x)=>{let b=VC(),S=UC(u,{relative:h}),C=c.toLowerCase()==="get"?"get":"post",T=typeof u=="string"&&K5.test(u),M=A=>{if(d&&d(A),A.defaultPrevented)return;A.preventDefault();let R=A.nativeEvent.submitter,k=(R==null?void 0:R.getAttribute("formmethod"))||c;b(R||A.currentTarget,{fetcherKey:e,method:k,navigate:n,replace:r,state:o,relative:h,preventScrollReset:p,viewTransition:g})};return D.createElement("form",{ref:x,method:C,action:S,onSubmit:i?d:M,...y,"data-discover":!T&&t==="render"?"true":void 0})});PC.displayName="Form";function NC(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $5(t){let e=D.useContext(io);return ot(e,NC(t)),e}function BC(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:o,viewTransition:c}={}){let u=Wm(),d=Ts(),h=oc(t,{relative:o});return D.useCallback(p=>{if(gC(p,e)){p.preventDefault();let g=n!==void 0?n:Hl(d)===Hl(h);u(t,{replace:g,state:i,preventScrollReset:r,relative:o,viewTransition:c})}},[d,u,h,n,i,e,t,r,o,c])}var IC=0,HC=()=>`__${String(++IC)}__`;function VC(){let{router:t}=$5("useSubmit"),{basename:e}=D.useContext(Ei),n=sC();return D.useCallback(async(i,r={})=>{let{action:o,method:c,encType:u,formData:d,body:h}=xC(i,e);if(r.navigate===!1){let p=r.fetcherKey||HC();await t.fetch(p,n,r.action||o,{preventScrollReset:r.preventScrollReset,formData:d,body:h,formMethod:r.method||c,formEncType:r.encType||u,flushSync:r.flushSync})}else await t.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:d,body:h,formMethod:r.method||c,formEncType:r.encType||u,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function UC(t,{relative:e}={}){let{basename:n}=D.useContext(Ei),i=D.useContext(Ci);ot(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),o={...oc(t||".",{relative:e})},c=Ts();if(t==null){o.search=c.search;let u=new URLSearchParams(o.search),d=u.getAll("index");if(d.some(p=>p==="")){u.delete("index"),d.filter(g=>g).forEach(g=>u.append("index",g));let p=u.toString();o.search=p?`?${p}`:""}}return(!t||t===".")&&r.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:ms([n,o.pathname])),Hl(o)}function qC(t,e={}){let n=D.useContext(U5);ot(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=$5("useViewTransitionState"),r=oc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=xs(n.currentLocation.pathname,i)||n.currentLocation.pathname,c=xs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Mf(r.pathname,c)!=null||Mf(r.pathname,o)!=null}[...MC];function FC(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function GC(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var YC=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(GC(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=FC(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),tn="-ms-",Of="-moz-",He="-webkit-",J5="comm",ig="rule",sg="decl",XC="@import",e3="@keyframes",QC="@layer",ZC=Math.abs,Jf=String.fromCharCode,KC=Object.assign;function WC(t,e){return Yt(t,0)^45?(((e<<2^Yt(t,0))<<2^Yt(t,1))<<2^Yt(t,2))<<2^Yt(t,3):0}function t3(t){return t.trim()}function $C(t,e){return(t=e.exec(t))?t[0]:t}function Ve(t,e,n){return t.replace(e,n)}function $0(t,e){return t.indexOf(e)}function Yt(t,e){return t.charCodeAt(e)|0}function Vl(t,e,n){return t.slice(e,n)}function zi(t){return t.length}function rg(t){return t.length}function Ru(t,e){return e.push(t),t}function JC(t,e){return t.map(e).join("")}var ed=1,Ga=1,n3=0,Mn=0,Ot=0,ro="";function td(t,e,n,i,r,o,c){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:ed,column:Ga,length:c,return:""}}function ml(t,e){return KC(td("",null,null,"",null,null,0),t,{length:-t.length},e)}function e7(){return Ot}function t7(){return Ot=Mn>0?Yt(ro,--Mn):0,Ga--,Ot===10&&(Ga=1,ed--),Ot}function Vn(){return Ot=Mn<n3?Yt(ro,Mn++):0,Ga++,Ot===10&&(Ga=1,ed++),Ot}function Ii(){return Yt(ro,Mn)}function cf(){return Mn}function lc(t,e){return Vl(ro,t,e)}function Ul(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i3(t){return ed=Ga=1,n3=zi(ro=t),Mn=0,[]}function s3(t){return ro="",t}function uf(t){return t3(lc(Mn-1,J0(t===91?t+2:t===40?t+1:t)))}function n7(t){for(;(Ot=Ii())&&Ot<33;)Vn();return Ul(t)>2||Ul(Ot)>3?"":" "}function i7(t,e){for(;--e&&Vn()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return lc(t,cf()+(e<6&&Ii()==32&&Vn()==32))}function J0(t){for(;Vn();)switch(Ot){case t:return Mn;case 34:case 39:t!==34&&t!==39&&J0(Ot);break;case 40:t===41&&J0(t);break;case 92:Vn();break}return Mn}function s7(t,e){for(;Vn()&&t+Ot!==57;)if(t+Ot===84&&Ii()===47)break;return"/*"+lc(e,Mn-1)+"*"+Jf(t===47?t:Vn())}function r7(t){for(;!Ul(Ii());)Vn();return lc(t,Mn)}function a7(t){return s3(ff("",null,null,null,[""],t=i3(t),0,[0],t))}function ff(t,e,n,i,r,o,c,u,d){for(var h=0,p=0,g=c,y=0,x=0,b=0,S=1,C=1,T=1,M=0,A="",R=r,k=o,P=i,L=A;C;)switch(b=M,M=Vn()){case 40:if(b!=108&&Yt(L,g-1)==58){$0(L+=Ve(uf(M),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:L+=uf(M);break;case 9:case 10:case 13:case 32:L+=n7(b);break;case 92:L+=i7(cf()-1,7);continue;case 47:switch(Ii()){case 42:case 47:Ru(o7(s7(Vn(),cf()),e,n),d);break;default:L+="/"}break;case 123*S:u[h++]=zi(L)*T;case 125*S:case 59:case 0:switch(M){case 0:case 125:C=0;case 59+p:T==-1&&(L=Ve(L,/\f/g,"")),x>0&&zi(L)-g&&Ru(x>32?cx(L+";",i,n,g-1):cx(Ve(L," ","")+";",i,n,g-2),d);break;case 59:L+=";";default:if(Ru(P=lx(L,e,n,h,p,r,u,A,R=[],k=[],g),o),M===123)if(p===0)ff(L,e,P,P,R,o,g,u,k);else switch(y===99&&Yt(L,3)===110?100:y){case 100:case 108:case 109:case 115:ff(t,P,P,i&&Ru(lx(t,P,P,0,0,r,u,A,r,R=[],g),k),r,k,g,u,i?R:k);break;default:ff(L,P,P,P,[""],k,0,u,k)}}h=p=x=0,S=T=1,A=L="",g=c;break;case 58:g=1+zi(L),x=b;default:if(S<1){if(M==123)--S;else if(M==125&&S++==0&&t7()==125)continue}switch(L+=Jf(M),M*S){case 38:T=p>0?1:(L+="\f",-1);break;case 44:u[h++]=(zi(L)-1)*T,T=1;break;case 64:Ii()===45&&(L+=uf(Vn())),y=Ii(),p=g=zi(A=L+=r7(cf())),M++;break;case 45:b===45&&zi(L)==2&&(S=0)}}return o}function lx(t,e,n,i,r,o,c,u,d,h,p){for(var g=r-1,y=r===0?o:[""],x=rg(y),b=0,S=0,C=0;b<i;++b)for(var T=0,M=Vl(t,g+1,g=ZC(S=c[b])),A=t;T<x;++T)(A=t3(S>0?y[T]+" "+M:Ve(M,/&\f/g,y[T])))&&(d[C++]=A);return td(t,e,n,r===0?ig:u,d,h,p)}function o7(t,e,n){return td(t,e,n,J5,Jf(e7()),Vl(t,2,-2),0)}function cx(t,e,n,i){return td(t,e,n,sg,Vl(t,0,i),Vl(t,i+1,-1),i)}function qa(t,e){for(var n="",i=rg(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function l7(t,e,n,i){switch(t.type){case QC:if(t.children.length)break;case XC:case sg:return t.return=t.return||t.value;case J5:return"";case e3:return t.return=t.value+"{"+qa(t.children,i)+"}";case ig:t.value=t.props.join(",")}return zi(n=qa(t.children,i))?t.return=t.value+"{"+n+"}":""}function c7(t){var e=rg(t);return function(n,i,r,o){for(var c="",u=0;u<e;u++)c+=t[u](n,i,r,o)||"";return c}}function u7(t){return function(e){e.root||(e=e.return)&&t(e)}}function f7(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var d7=function(e,n,i){for(var r=0,o=0;r=o,o=Ii(),r===38&&o===12&&(n[i]=1),!Ul(o);)Vn();return lc(e,Mn)},h7=function(e,n){var i=-1,r=44;do switch(Ul(r)){case 0:r===38&&Ii()===12&&(n[i]=1),e[i]+=d7(Mn-1,n,i);break;case 2:e[i]+=uf(r);break;case 4:if(r===44){e[++i]=Ii()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Jf(r)}while(r=Vn());return e},p7=function(e,n){return s3(h7(i3(e),n))},ux=new WeakMap,m7=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!ux.get(i))&&!r){ux.set(e,!0);for(var o=[],c=p7(n,o),u=i.props,d=0,h=0;d<c.length;d++)for(var p=0;p<u.length;p++,h++)e.props[h]=o[d]?c[d].replace(/&\f/g,u[p]):u[p]+" "+c[d]}}},g7=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function r3(t,e){switch(WC(t,e)){case 5103:return He+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return He+t+Of+t+tn+t+t;case 6828:case 4268:return He+t+tn+t+t;case 6165:return He+t+tn+"flex-"+t+t;case 5187:return He+t+Ve(t,/(\w+).+(:[^]+)/,He+"box-$1$2"+tn+"flex-$1$2")+t;case 5443:return He+t+tn+"flex-item-"+Ve(t,/flex-|-self/,"")+t;case 4675:return He+t+tn+"flex-line-pack"+Ve(t,/align-content|flex-|-self/,"")+t;case 5548:return He+t+tn+Ve(t,"shrink","negative")+t;case 5292:return He+t+tn+Ve(t,"basis","preferred-size")+t;case 6060:return He+"box-"+Ve(t,"-grow","")+He+t+tn+Ve(t,"grow","positive")+t;case 4554:return He+Ve(t,/([^-])(transform)/g,"$1"+He+"$2")+t;case 6187:return Ve(Ve(Ve(t,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),t,"")+t;case 5495:case 3959:return Ve(t,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return Ve(Ve(t,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+tn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+t+t;case 4095:case 3583:case 4068:case 2532:return Ve(t,/(.+)-inline(.+)/,He+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zi(t)-1-e>6)switch(Yt(t,e+1)){case 109:if(Yt(t,e+4)!==45)break;case 102:return Ve(t,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+Of+(Yt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~$0(t,"stretch")?r3(Ve(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Yt(t,e+1)!==115)break;case 6444:switch(Yt(t,zi(t)-3-(~$0(t,"!important")&&10))){case 107:return Ve(t,":",":"+He)+t;case 101:return Ve(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+He+(Yt(t,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+tn+"$2box$3")+t}break;case 5936:switch(Yt(t,e+11)){case 114:return He+t+tn+Ve(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return He+t+tn+Ve(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return He+t+tn+Ve(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return He+t+tn+t+t}return t}var y7=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case sg:e.return=r3(e.value,e.length);break;case e3:return qa([ml(e,{value:Ve(e.value,"@","@"+He)})],r);case ig:if(e.length)return JC(e.props,function(o){switch($C(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return qa([ml(e,{props:[Ve(o,/:(read-\w+)/,":"+Of+"$1")]})],r);case"::placeholder":return qa([ml(e,{props:[Ve(o,/:(plac\w+)/,":"+He+"input-$1")]}),ml(e,{props:[Ve(o,/:(plac\w+)/,":"+Of+"$1")]}),ml(e,{props:[Ve(o,/:(plac\w+)/,tn+"input-$1")]})],r)}return""})}},v7=[y7],x7=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(S){var C=S.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var r=e.stylisPlugins||v7,o={},c,u=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var C=S.getAttribute("data-emotion").split(" "),T=1;T<C.length;T++)o[C[T]]=!0;u.push(S)});var d,h=[m7,g7];{var p,g=[l7,u7(function(S){p.insert(S)})],y=c7(h.concat(r,g)),x=function(C){return qa(a7(C),y)};d=function(C,T,M,A){p=M,x(C?C+"{"+T.styles+"}":T.styles),A&&(b.inserted[T.name]=!0)}}var b={key:n,sheet:new YC({key:n,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:d};return b.sheet.hydrate(u),b};function Ol(){return Ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ol.apply(null,arguments)}var Bp={exports:{}},qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function b7(){if(fx)return qe;fx=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,r=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,g=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,x=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,S=t?Symbol.for("react.block"):60121,C=t?Symbol.for("react.fundamental"):60117,T=t?Symbol.for("react.responder"):60118,M=t?Symbol.for("react.scope"):60119;function A(k){if(typeof k=="object"&&k!==null){var P=k.$$typeof;switch(P){case e:switch(k=k.type,k){case d:case h:case i:case o:case r:case g:return k;default:switch(k=k&&k.$$typeof,k){case u:case p:case b:case x:case c:return k;default:return P}}case n:return P}}}function R(k){return A(k)===h}return qe.AsyncMode=d,qe.ConcurrentMode=h,qe.ContextConsumer=u,qe.ContextProvider=c,qe.Element=e,qe.ForwardRef=p,qe.Fragment=i,qe.Lazy=b,qe.Memo=x,qe.Portal=n,qe.Profiler=o,qe.StrictMode=r,qe.Suspense=g,qe.isAsyncMode=function(k){return R(k)||A(k)===d},qe.isConcurrentMode=R,qe.isContextConsumer=function(k){return A(k)===u},qe.isContextProvider=function(k){return A(k)===c},qe.isElement=function(k){return typeof k=="object"&&k!==null&&k.$$typeof===e},qe.isForwardRef=function(k){return A(k)===p},qe.isFragment=function(k){return A(k)===i},qe.isLazy=function(k){return A(k)===b},qe.isMemo=function(k){return A(k)===x},qe.isPortal=function(k){return A(k)===n},qe.isProfiler=function(k){return A(k)===o},qe.isStrictMode=function(k){return A(k)===r},qe.isSuspense=function(k){return A(k)===g},qe.isValidElementType=function(k){return typeof k=="string"||typeof k=="function"||k===i||k===h||k===o||k===r||k===g||k===y||typeof k=="object"&&k!==null&&(k.$$typeof===b||k.$$typeof===x||k.$$typeof===c||k.$$typeof===u||k.$$typeof===p||k.$$typeof===C||k.$$typeof===T||k.$$typeof===M||k.$$typeof===S)},qe.typeOf=A,qe}var dx;function w7(){return dx||(dx=1,Bp.exports=b7()),Bp.exports}var Ip,hx;function S7(){if(hx)return Ip;hx=1;var t=w7(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]=i,o[t.Memo]=r;function c(b){return t.isMemo(b)?r:o[b.$$typeof]||e}var u=Object.defineProperty,d=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,y=Object.prototype;function x(b,S,C){if(typeof S!="string"){if(y){var T=g(S);T&&T!==y&&x(b,T,C)}var M=d(S);h&&(M=M.concat(h(S)));for(var A=c(b),R=c(S),k=0;k<M.length;++k){var P=M[k];if(!n[P]&&!(C&&C[P])&&!(R&&R[P])&&!(A&&A[P])){var L=p(S,P);try{u(b,P,L)}catch{}}}}return b}return Ip=x,Ip}S7();var T7=!0;function E7(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var a3=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||T7===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},o3=function(e,n,i){a3(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function C7(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var A7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M7=/[A-Z]|^ms/g,O7=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l3=function(e){return e.charCodeAt(1)===45},px=function(e){return e!=null&&typeof e!="boolean"},Hp=f7(function(t){return l3(t)?t:t.replace(M7,"-$&").toLowerCase()}),mx=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(O7,function(i,r,o){return ji={name:r,styles:o,next:ji},r})}return A7[e]!==1&&!l3(e)&&typeof n=="number"&&n!==0?n+"px":n};function ql(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return ji={name:r.name,styles:r.styles,next:ji},r.name;var o=n;if(o.styles!==void 0){var c=o.next;if(c!==void 0)for(;c!==void 0;)ji={name:c.name,styles:c.styles,next:ji},c=c.next;var u=o.styles+";";return u}return k7(t,e,n)}case"function":{if(t!==void 0){var d=ji,h=n(t);return ji=d,ql(t,e,h)}break}}var p=n;return p}function k7(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=ql(t,e,n[r])+";";else for(var o in n){var c=n[o];if(typeof c!="object"){var u=c;px(u)&&(i+=Hp(o)+":"+mx(o,u)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&e==null)for(var d=0;d<c.length;d++)px(c[d])&&(i+=Hp(o)+":"+mx(o,c[d])+";");else{var h=ql(t,e,c);switch(o){case"animation":case"animationName":{i+=Hp(o)+":"+h+";";break}default:i+=o+"{"+h+"}"}}}return i}var gx=/label:\s*([^\s;{]+)\s*(;|$)/g,ji;function ag(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";ji=void 0;var o=t[0];if(o==null||o.raw===void 0)i=!1,r+=ql(n,e,o);else{var c=o;r+=c[0]}for(var u=1;u<t.length;u++)if(r+=ql(n,e,t[u]),i){var d=o;r+=d[u]}gx.lastIndex=0;for(var h="",p;(p=gx.exec(r))!==null;)h+="-"+p[1];var g=C7(r)+h;return{name:g,styles:r,next:ji}}var R7=function(e){return e()},c3=tx.useInsertionEffect?tx.useInsertionEffect:!1,L7=c3||R7,yx=c3||D.useLayoutEffect,u3=D.createContext(typeof HTMLElement<"u"?x7({key:"css"}):null);u3.Provider;var f3=function(e){return D.forwardRef(function(n,i){var r=D.useContext(u3);return e(n,r,i)})},og=D.createContext({}),lg={}.hasOwnProperty,em="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D7=function(e,n){var i={};for(var r in n)lg.call(n,r)&&(i[r]=n[r]);return i[em]=e,i},_7=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return a3(n,i,r),L7(function(){return o3(n,i,r)}),null},z7=f3(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[em],o=[i],c="";typeof t.className=="string"?c=E7(e.registered,o,t.className):t.className!=null&&(c=t.className+" ");var u=ag(o,void 0,D.useContext(og));c+=e.key+"-"+u.name;var d={};for(var h in t)lg.call(t,h)&&h!=="css"&&h!==em&&(d[h]=t[h]);return d.className=c,n&&(d.ref=n),D.createElement(D.Fragment,null,D.createElement(_7,{cache:e,serialized:u,isStringTag:typeof r=="string"}),D.createElement(r,d))}),j7=z7,vx=function(e,n){var i=arguments;if(n==null||!lg.call(n,"css"))return D.createElement.apply(void 0,i);var r=i.length,o=new Array(r);o[0]=j7,o[1]=D7(e,n);for(var c=2;c<r;c++)o[c]=i[c];return D.createElement.apply(null,o)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(vx||(vx={}));var P7=f3(function(t,e){var n=t.styles,i=ag([n],void 0,D.useContext(og)),r=D.useRef();return yx(function(){var o=e.key+"-global",c=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),u=!1,d=document.querySelector('style[data-emotion="'+o+" "+i.name+'"]');return e.sheet.tags.length&&(c.before=e.sheet.tags[0]),d!==null&&(u=!0,d.setAttribute("data-emotion",o),c.hydrate([d])),r.current=[c,u],function(){c.flush()}},[e]),yx(function(){var o=r.current,c=o[0],u=o[1];if(u){o[1]=!1;return}if(i.next!==void 0&&o3(e,i.next,!0),c.tags.length){var d=c.tags[c.tags.length-1].nextElementSibling;c.before=d,c.flush()}e.insert("",i,c,!1)},[e,i.name]),null});function N7(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ag(e)}const B7="/assets/fa-regular-400-D1vz6WBx.ttf",I7="/assets/Helvetica-zhVn_y_h.ttf",H7="/assets/Helvetica-Bold-DbiQUL7g.ttf",V7="/assets/HelveticaNeueRoman-CSpBGpqm.otf",U7="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",q7="/assets/PlusJakartaSans_wght_-BZU_LQer.ttf",F7=N7`
  /* Font Awesome */
  @font-face {
    font-family: 'Font Awesome 5 Free';
    src: url(${B7}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Helvetica';
    src: url(${I7}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(${H7}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Helvetica Neue */
  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${V7}) format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${U7}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Plus Jakarta Sans */
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${q7}) format('truetype-variations');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro */
  @font-face {
    font-family: 'SF Pro';
    src: url('../src/assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.OTF') format('opentype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  :root {
    --black: #000;
    --purple-800: #1a1f37;
    --gray-500: #c4c4c4;
    --purple-400: #8082ff;
    --purple-500: #4c4eec;
    --white-50: rgba(255, 255, 255, 0.5);
    --white-75: rgba(255, 255, 255, 0.75);
    --white-80: rgba(255, 255, 255, 0.8);
    --white-60: rgba(255, 255, 255, 0.6);
    --white-25: rgba(255, 255, 255, 0.25);
    --white-70: rgba(255, 255, 255, 0.7);
    --white-6: rgba(255, 255, 255, 0.06);
    --white-24: rgba(255, 255, 255, 0.24);
    --white-30: rgba(255, 255, 255, 0.3);
    --white-100: #fff;
    
    /* Fonts */
    --font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    --second-family: "Plus Jakarta Display", -apple-system, BlinkMacSystemFont, sans-serif;
    --third-family: "Helvetica", -apple-system, BlinkMacSystemFont, sans-serif;
    --font3: "Font Awesome 5 Free", sans-serif;
    --font4: "Helvetica Neue", -apple-system, BlinkMacSystemFont, sans-serif;
    --font5: "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif;

    /* Додаткові змінні для узгодженості */
    --safe-area-inset-top: env(safe-area-inset-top, 0px);
    --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
    --safe-area-inset-left: env(safe-area-inset-left, 0px);
    --safe-area-inset-right: env(safe-area-inset-right, 0px);
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
    word-wrap: break-word;
    z-index: 1;
    
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: var(--font-family);
    background-color: #000;
    color: #fff;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* Фікс для мобільних браузерів */
    transition-duration: 300ms;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    padding: 
      env(safe-area-inset-top, 0px) 
      env(safe-area-inset-right, 0px) 
      env(safe-area-inset-bottom, 0px) 
      env(safe-area-inset-left, 0px);
  }
    
  body.modal-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: var(--second-family);
    color: #fff;
    text-size-adjust: 100%; /* Запобігає авто-масштабуванню тексту на iOS */
  }

  code {
    font-family: var(--second-family);
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #808080;
      transition: all 0.3s ease-in-out;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    -webkit-user-drag: none; /* Запобігає drag зображень на iOS */
  }

  button {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    appearance: none; /* Видаляє стандартні стилі для кнопок на iOS */
    background: transparent;
    border: 0;
    border-radius: 0;
    height: auto;
  }
  
  video {
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  ul, li {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%; /* Запобігає авто-масштабуванню тексту на iOS */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    height: -webkit-fill-available;
  }

  html, body {
    height: 100%;
    font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation; /* Покращує відгук на тач-події */
        width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    display: none;
  }

    body {
    position: relative;
  }

    main, .container, #root {
    overflow-x: hidden;
    width: 100%;
  }

  input, textarea, button {
  height: auto;
    font-size: 16px;
    font-family: inherit;
    border-radius: 0; /* Фікс для iOS */
    appearance: none; /* Видаляє стандартні стилі для інпутів на iOS */
  }

  /* Особливі фікси для iOS */
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="url"],
  textarea {
    -webkit-appearance: none;
  }

  /* Фікс для масштабування при фокусі на інпут на iOS */
  @media screen and (max-width: 767px) {
    input, textarea, select {
      font-size: 16px !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #000;
      color: #fff;
    }
  }

  @keyframes buttonAnimationOut {
    0% { background-position: center bottom; }
    99.99% { background-position: left bottom; }
    100% { background-position: right bottom; }
  }

  @keyframes move {
    from { transform: translateY(0%); }
    to { transform: translateY(-100%); }
  }

  /* Додаткові фікси для різних платформ */
  /* Фікс для висоти 100vh на мобільних пристроях */
  @supports (-webkit-touch-callout: none) {
    body {
      height: -webkit-fill-available;
    }
  }

  /* Фікс для Safari */
  _::-webkit-full-page-media, _:future, :root .safari_only {
    @supports (-webkit-touch-callout: none) {
      /* Специфічні стилі для Safari */
    }
  }




  
`,cg=D.createContext({});function ug(t){const e=D.useRef(null);return e.current===null&&(e.current=t()),e.current}const fg=typeof window<"u",d3=fg?D.useLayoutEffect:D.useEffect,nd=D.createContext(null);function dg(t,e){t.indexOf(e)===-1&&t.push(e)}function hg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const bs=(t,e,n)=>n>e?e:n<t?t:n;let pg=()=>{};const ws={},h3=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function p3(t){return typeof t=="object"&&t!==null}const m3=t=>/^0[^.\s]+$/u.test(t);function mg(t){let e;return()=>(e===void 0&&(e=t()),e)}const ii=t=>t,G7=(t,e)=>n=>e(t(n)),cc=(...t)=>t.reduce(G7),Fl=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class gg{constructor(){this.subscriptions=[]}add(e){return dg(this.subscriptions,e),()=>hg(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let o=0;o<r;o++){const c=this.subscriptions[o];c&&c(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hi=t=>t*1e3,Vi=t=>t/1e3;function g3(t,e){return e?t*(1e3/e):0}const y3=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Y7=1e-7,X7=12;function Q7(t,e,n,i,r){let o,c,u=0;do c=e+(n-e)/2,o=y3(c,i,r)-t,o>0?n=c:e=c;while(Math.abs(o)>Y7&&++u<X7);return c}function uc(t,e,n,i){if(t===e&&n===i)return ii;const r=o=>Q7(o,0,1,t,n);return o=>o===0||o===1?o:y3(r(o),e,i)}const v3=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,x3=t=>e=>1-t(1-e),b3=uc(.33,1.53,.69,.99),yg=x3(b3),w3=v3(yg),S3=t=>(t*=2)<1?.5*yg(t):.5*(2-Math.pow(2,-10*(t-1))),vg=t=>1-Math.sin(Math.acos(t)),T3=x3(vg),E3=v3(vg),Z7=uc(.42,0,1,1),K7=uc(0,0,.58,1),C3=uc(.42,0,.58,1),W7=t=>Array.isArray(t)&&typeof t[0]!="number",A3=t=>Array.isArray(t)&&typeof t[0]=="number",$7={linear:ii,easeIn:Z7,easeInOut:C3,easeOut:K7,circIn:vg,circInOut:E3,circOut:T3,backIn:yg,backInOut:w3,backOut:b3,anticipate:S3},J7=t=>typeof t=="string",xx=t=>{if(A3(t)){pg(t.length===4);const[e,n,i,r]=t;return uc(e,n,i,r)}else if(J7(t))return $7[t];return t},Lu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],bx={value:null};function eA(t,e){let n=new Set,i=new Set,r=!1,o=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1},d=0;function h(g){c.has(g)&&(p.schedule(g),t()),d++,g(u)}const p={schedule:(g,y=!1,x=!1)=>{const S=x&&r?n:i;return y&&c.add(g),S.has(g)||S.add(g),g},cancel:g=>{i.delete(g),c.delete(g)},process:g=>{if(u=g,r){o=!0;return}r=!0,[n,i]=[i,n],n.forEach(h),e&&bx.value&&bx.value.frameloop[e].push(d),d=0,n.clear(),r=!1,o&&(o=!1,p.process(g))}};return p}const tA=40;function M3(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,c=Lu.reduce((A,R)=>(A[R]=eA(o,e?R:void 0),A),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:g,preRender:y,render:x,postRender:b}=c,S=()=>{const A=ws.useManualTiming?r.timestamp:performance.now();n=!1,ws.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(A-r.timestamp,tA),1)),r.timestamp=A,r.isProcessing=!0,u.process(r),d.process(r),h.process(r),p.process(r),g.process(r),y.process(r),x.process(r),b.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(S))},C=()=>{n=!0,i=!0,r.isProcessing||t(S)};return{schedule:Lu.reduce((A,R)=>{const k=c[R];return A[R]=(P,L=!1,I=!1)=>(n||C(),k.schedule(P,L,I)),A},{}),cancel:A=>{for(let R=0;R<Lu.length;R++)c[Lu[R]].cancel(A)},state:r,steps:c}}const{schedule:ft,cancel:tr,state:Gt,steps:Vp}=M3(typeof requestAnimationFrame<"u"?requestAnimationFrame:ii,!0);let df;function nA(){df=void 0}const En={now:()=>(df===void 0&&En.set(Gt.isProcessing||ws.useManualTiming?Gt.timestamp:performance.now()),df),set:t=>{df=t,queueMicrotask(nA)}},O3=t=>e=>typeof e=="string"&&e.startsWith(t),xg=O3("--"),iA=O3("var(--"),bg=t=>iA(t)?sA.test(t.split("/*")[0].trim()):!1,sA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ao={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Gl={...ao,transform:t=>bs(0,1,t)},Du={...ao,default:1},kl=t=>Math.round(t*1e5)/1e5,wg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rA(t){return t==null}const aA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sg=(t,e)=>n=>!!(typeof n=="string"&&aA.test(n)&&n.startsWith(t)||e&&!rA(n)&&Object.prototype.hasOwnProperty.call(n,e)),k3=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,o,c,u]=i.match(wg);return{[t]:parseFloat(r),[e]:parseFloat(o),[n]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},oA=t=>bs(0,255,t),Up={...ao,transform:t=>Math.round(oA(t))},Lr={test:Sg("rgb","red"),parse:k3("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Up.transform(t)+", "+Up.transform(e)+", "+Up.transform(n)+", "+kl(Gl.transform(i))+")"};function lA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const tm={test:Sg("#"),parse:lA,transform:Lr.transform},fc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ks=fc("deg"),Ui=fc("%"),Te=fc("px"),cA=fc("vh"),uA=fc("vw"),wx={...Ui,parse:t=>Ui.parse(t)/100,transform:t=>Ui.transform(t*100)},ja={test:Sg("hsl","hue"),parse:k3("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ui.transform(kl(e))+", "+Ui.transform(kl(n))+", "+kl(Gl.transform(i))+")"},Mt={test:t=>Lr.test(t)||tm.test(t)||ja.test(t),parse:t=>Lr.test(t)?Lr.parse(t):ja.test(t)?ja.parse(t):tm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Lr.transform(t):ja.transform(t),getAnimatableNone:t=>{const e=Mt.parse(t);return e.alpha=0,Mt.transform(e)}},fA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(wg))==null?void 0:e.length)||0)+(((n=t.match(fA))==null?void 0:n.length)||0)>0}const R3="number",L3="color",hA="var",pA="var(",Sx="${}",mA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yl(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const u=e.replace(mA,d=>(Mt.test(d)?(i.color.push(o),r.push(L3),n.push(Mt.parse(d))):d.startsWith(pA)?(i.var.push(o),r.push(hA),n.push(d)):(i.number.push(o),r.push(R3),n.push(parseFloat(d))),++o,Sx)).split(Sx);return{values:n,split:u,indexes:i,types:r}}function D3(t){return Yl(t).values}function _3(t){const{split:e,types:n}=Yl(t),i=e.length;return r=>{let o="";for(let c=0;c<i;c++)if(o+=e[c],r[c]!==void 0){const u=n[c];u===R3?o+=kl(r[c]):u===L3?o+=Mt.transform(r[c]):o+=r[c]}return o}}const gA=t=>typeof t=="number"?0:Mt.test(t)?Mt.getAnimatableNone(t):t;function yA(t){const e=D3(t);return _3(t)(e.map(gA))}const nr={test:dA,parse:D3,createTransformer:_3,getAnimatableNone:yA};function qp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function vA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,o=0,c=0;if(!e)r=o=c=n;else{const u=n<.5?n*(1+e):n+e-n*e,d=2*n-u;r=qp(d,u,t+1/3),o=qp(d,u,t),c=qp(d,u,t-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(c*255),alpha:i}}function kf(t,e){return n=>n>0?e:t}const ut=(t,e,n)=>t+(e-t)*n,Fp=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},xA=[tm,Lr,ja],bA=t=>xA.find(e=>e.test(t));function Tx(t){const e=bA(t);if(!e)return!1;let n=e.parse(t);return e===ja&&(n=vA(n)),n}const Ex=(t,e)=>{const n=Tx(t),i=Tx(e);if(!n||!i)return kf(t,e);const r={...n};return o=>(r.red=Fp(n.red,i.red,o),r.green=Fp(n.green,i.green,o),r.blue=Fp(n.blue,i.blue,o),r.alpha=ut(n.alpha,i.alpha,o),Lr.transform(r))},nm=new Set(["none","hidden"]);function wA(t,e){return nm.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function SA(t,e){return n=>ut(t,e,n)}function Tg(t){return typeof t=="number"?SA:typeof t=="string"?bg(t)?kf:Mt.test(t)?Ex:CA:Array.isArray(t)?z3:typeof t=="object"?Mt.test(t)?Ex:TA:kf}function z3(t,e){const n=[...t],i=n.length,r=t.map((o,c)=>Tg(o)(o,e[c]));return o=>{for(let c=0;c<i;c++)n[c]=r[c](o);return n}}function TA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Tg(t[r])(t[r],e[r]));return r=>{for(const o in i)n[o]=i[o](r);return n}}function EA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],c=t.indexes[o][i[o]],u=t.values[c]??0;n[r]=u,i[o]++}return n}const CA=(t,e)=>{const n=nr.createTransformer(e),i=Yl(t),r=Yl(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?nm.has(t)&&!r.values.length||nm.has(e)&&!i.values.length?wA(t,e):cc(z3(EA(i,r),r.values),n):kf(t,e)};function j3(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ut(t,e,n):Tg(t)(t,e)}const AA=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ft.update(e,n),stop:()=>tr(e),now:()=>Gt.isProcessing?Gt.timestamp:En.now()}},P3=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let o=0;o<r;o++)i+=Math.round(t(o/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Rf=2e4;function Eg(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Rf;)e+=n,i=t.next(e);return e>=Rf?1/0:e}function MA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Eg(i),Rf);return{type:"keyframes",ease:o=>i.next(r*o).value/e,duration:Vi(r)}}const OA=5;function N3(t,e,n){const i=Math.max(e-OA,0);return g3(n-t(i),e-i)}const mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gp=.001;function kA({duration:t=mt.duration,bounce:e=mt.bounce,velocity:n=mt.velocity,mass:i=mt.mass}){let r,o,c=1-e;c=bs(mt.minDamping,mt.maxDamping,c),t=bs(mt.minDuration,mt.maxDuration,Vi(t)),c<1?(r=h=>{const p=h*c,g=p*t,y=p-n,x=im(h,c),b=Math.exp(-g);return Gp-y/x*b},o=h=>{const g=h*c*t,y=g*n+n,x=Math.pow(c,2)*Math.pow(h,2)*t,b=Math.exp(-g),S=im(Math.pow(h,2),c);return(-r(h)+Gp>0?-1:1)*((y-x)*b)/S}):(r=h=>{const p=Math.exp(-h*t),g=(h-n)*t+1;return-Gp+p*g},o=h=>{const p=Math.exp(-h*t),g=(n-h)*(t*t);return p*g});const u=5/t,d=LA(r,o,u);if(t=Hi(t),isNaN(d))return{stiffness:mt.stiffness,damping:mt.damping,duration:t};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:t}}}const RA=12;function LA(t,e,n){let i=n;for(let r=1;r<RA;r++)i=i-t(i)/e(i);return i}function im(t,e){return t*Math.sqrt(1-e*e)}const DA=["duration","bounce"],_A=["stiffness","damping","mass"];function Cx(t,e){return e.some(n=>t[n]!==void 0)}function zA(t){let e={velocity:mt.velocity,stiffness:mt.stiffness,damping:mt.damping,mass:mt.mass,isResolvedFromDuration:!1,...t};if(!Cx(t,_A)&&Cx(t,DA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,o=2*bs(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:mt.mass,stiffness:r,damping:o}}else{const n=kA(t);e={...e,...n,mass:mt.mass},e.isResolvedFromDuration=!0}return e}function Lf(t=mt.visualDuration,e=mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],u={done:!1,value:o},{stiffness:d,damping:h,mass:p,duration:g,velocity:y,isResolvedFromDuration:x}=zA({...n,velocity:-Vi(n.velocity||0)}),b=y||0,S=h/(2*Math.sqrt(d*p)),C=c-o,T=Vi(Math.sqrt(d/p)),M=Math.abs(C)<5;i||(i=M?mt.restSpeed.granular:mt.restSpeed.default),r||(r=M?mt.restDelta.granular:mt.restDelta.default);let A;if(S<1){const k=im(T,S);A=P=>{const L=Math.exp(-S*T*P);return c-L*((b+S*T*C)/k*Math.sin(k*P)+C*Math.cos(k*P))}}else if(S===1)A=k=>c-Math.exp(-T*k)*(C+(b+T*C)*k);else{const k=T*Math.sqrt(S*S-1);A=P=>{const L=Math.exp(-S*T*P),I=Math.min(k*P,300);return c-L*((b+S*T*C)*Math.sinh(I)+k*C*Math.cosh(I))/k}}const R={calculatedDuration:x&&g||null,next:k=>{const P=A(k);if(x)u.done=k>=g;else{let L=k===0?b:0;S<1&&(L=k===0?Hi(b):N3(A,k,P));const I=Math.abs(L)<=i,V=Math.abs(c-P)<=r;u.done=I&&V}return u.value=u.done?c:P,u},toString:()=>{const k=Math.min(Eg(R),Rf),P=P3(L=>R.next(k*L).value,k,30);return k+"ms "+P},toTransition:()=>{}};return R}Lf.applyToOptions=t=>{const e=MA(t,100,Lf);return t.ease=e.ease,t.duration=Hi(e.duration),t.type="keyframes",t};function sm({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const g=t[0],y={done:!1,value:g},x=I=>u!==void 0&&I<u||d!==void 0&&I>d,b=I=>u===void 0?d:d===void 0||Math.abs(u-I)<Math.abs(d-I)?u:d;let S=n*e;const C=g+S,T=c===void 0?C:c(C);T!==C&&(S=T-g);const M=I=>-S*Math.exp(-I/i),A=I=>T+M(I),R=I=>{const V=M(I),F=A(I);y.done=Math.abs(V)<=h,y.value=y.done?T:F};let k,P;const L=I=>{x(y.value)&&(k=I,P=Lf({keyframes:[y.value,b(y.value)],velocity:N3(A,I,y.value),damping:r,stiffness:o,restDelta:h,restSpeed:p}))};return L(0),{calculatedDuration:null,next:I=>{let V=!1;return!P&&k===void 0&&(V=!0,R(I),L(I)),k!==void 0&&I>=k?P.next(I-k):(!V&&R(I),y)}}}function jA(t,e,n){const i=[],r=n||ws.mix||j3,o=t.length-1;for(let c=0;c<o;c++){let u=r(t[c],t[c+1]);if(e){const d=Array.isArray(e)?e[c]||ii:e;u=cc(d,u)}i.push(u)}return i}function PA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const o=t.length;if(pg(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const c=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const u=jA(e,i,r),d=u.length,h=p=>{if(c&&p<t[0])return e[0];let g=0;if(d>1)for(;g<t.length-2&&!(p<t[g+1]);g++);const y=Fl(t[g],t[g+1],p);return u[g](y)};return n?p=>h(bs(t[0],t[o-1],p)):h}function NA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Fl(0,e,i);t.push(ut(n,1,r))}}function BA(t){const e=[0];return NA(e,t.length-1),e}function IA(t,e){return t.map(n=>n*e)}function HA(t,e){return t.map(()=>e||C3).splice(0,t.length-1)}function Rl({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=W7(i)?i.map(xx):xx(i),o={done:!1,value:e[0]},c=IA(n&&n.length===e.length?n:BA(e),t),u=PA(c,e,{ease:Array.isArray(r)?r:HA(e,r)});return{calculatedDuration:t,next:d=>(o.value=u(d),o.done=d>=t,o)}}const VA=t=>t!==null;function Cg(t,{repeat:e,repeatType:n="loop"},i,r=1){const o=t.filter(VA),u=r<0||e&&n!=="loop"&&e%2===1?0:o.length-1;return!u||i===void 0?o[u]:i}const UA={decay:sm,inertia:sm,tween:Rl,keyframes:Rl,spring:Lf};function B3(t){typeof t.type=="string"&&(t.type=UA[t.type])}class Ag{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const qA=t=>t/100;class Mg extends Ag{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==En.now()&&this.tick(En.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;B3(e);const{type:n=Rl,repeat:i=0,repeatDelay:r=0,repeatType:o,velocity:c=0}=e;let{keyframes:u}=e;const d=n||Rl;d!==Rl&&typeof u[0]!="number"&&(this.mixKeyframes=cc(qA,j3(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});o==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Eg(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=h}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:o,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return i.next(0);const{delay:h=0,keyframes:p,repeat:g,repeatType:y,repeatDelay:x,type:b,onUpdate:S,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const T=this.currentTime-h*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?T<0:T>r;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let A=this.currentTime,R=i;if(g){const I=Math.min(this.currentTime,r)/u;let V=Math.floor(I),F=I%1;!F&&I>=1&&(F=1),F===1&&V--,V=Math.min(V,g+1),!!(V%2)&&(y==="reverse"?(F=1-F,x&&(F-=x/u)):y==="mirror"&&(R=c)),A=bs(0,1,F)*u}const k=M?{done:!1,value:p[0]}:R.next(A);o&&(k.value=o(k.value));let{done:P}=k;!M&&d!==null&&(P=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const L=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return L&&b!==sm&&(k.value=Cg(p,this.options,C,this.speed)),S&&S(k.value),L&&this.finish(),k}then(e,n){return this.finished.then(e,n)}get duration(){return Vi(this.calculatedDuration)}get time(){return Vi(this.currentTime)}set time(e){var n;e=Hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(En.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Vi(this.currentTime))}play(){var r,o;if(this.isStopped)return;const{driver:e=AA,startTime:n}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(o=(r=this.options).onPlay)==null||o.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(En.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function FA(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Dr=t=>t*180/Math.PI,rm=t=>{const e=Dr(Math.atan2(t[1],t[0]));return am(e)},GA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:rm,rotateZ:rm,skewX:t=>Dr(Math.atan(t[1])),skewY:t=>Dr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},am=t=>(t=t%360,t<0&&(t+=360),t),Ax=rm,Mx=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ox=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),YA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Mx,scaleY:Ox,scale:t=>(Mx(t)+Ox(t))/2,rotateX:t=>am(Dr(Math.atan2(t[6],t[5]))),rotateY:t=>am(Dr(Math.atan2(-t[2],t[0]))),rotateZ:Ax,rotate:Ax,skewX:t=>Dr(Math.atan(t[4])),skewY:t=>Dr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function om(t){return t.includes("scale")?1:0}function lm(t,e){if(!t||t==="none")return om(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=YA,r=n;else{const u=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=GA,r=u}if(!r)return om(e);const o=i[e],c=r[1].split(",").map(QA);return typeof o=="function"?o(c):c[o]}const XA=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return lm(n,e)};function QA(t){return parseFloat(t.trim())}const oo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],lo=new Set(oo),kx=t=>t===ao||t===Te,ZA=new Set(["x","y","z"]),KA=oo.filter(t=>!ZA.has(t));function WA(t){const e=[];return KA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const zr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>lm(e,"x"),y:(t,{transform:e})=>lm(e,"y")};zr.translateX=zr.x;zr.translateY=zr.y;const jr=new Set;let cm=!1,um=!1,fm=!1;function I3(){if(um){const t=Array.from(jr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=WA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([o,c])=>{var u;(u=i.getValue(o))==null||u.set(c)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}um=!1,cm=!1,jr.forEach(t=>t.complete(fm)),jr.clear()}function H3(){jr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(um=!0)})}function $A(){fm=!0,H3(),I3(),fm=!1}class Og{constructor(e,n,i,r,o,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=o,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(jr.add(this),cm||(cm=!0,ft.read(H3),ft.resolveKeyframes(I3))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const o=r==null?void 0:r.get(),c=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const u=i.readValue(n,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),r&&o===void 0&&r.set(e[0])}FA(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),jr.delete(this)}cancel(){this.state==="scheduled"&&(jr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const JA=t=>t.startsWith("--");function e9(t,e,n){JA(e)?t.style.setProperty(e,n):t.style[e]=n}const t9=mg(()=>window.ScrollTimeline!==void 0),n9={};function i9(t,e){const n=mg(t);return()=>n9[e]??n()}const V3=i9(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Al=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Rx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Al([0,.65,.55,1]),circOut:Al([.55,0,1,.45]),backIn:Al([.31,.01,.66,-.59]),backOut:Al([.33,1.53,.69,.99])};function U3(t,e){if(t)return typeof t=="function"?V3()?P3(t,e):"ease-out":A3(t)?Al(t):Array.isArray(t)?t.map(n=>U3(n,e)||Rx.easeOut):Rx[t]}function s9(t,e,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:n};d&&(p.offset=d);const g=U3(u,r);Array.isArray(g)&&(p.easing=g);const y={delay:i,duration:r,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:o+1,direction:c==="reverse"?"alternate":"normal"};return h&&(y.pseudoElement=h),t.animate(p,y)}function q3(t){return typeof t=="function"&&"applyToOptions"in t}function r9({type:t,...e}){return q3(t)&&V3()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class a9 extends Ag{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:o,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!o,this.allowFlatten=c,this.options=e,pg(typeof e.type!="string");const h=r9(e);this.animation=s9(n,i,r,h,o),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const p=Cg(r,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(p):e9(n,i,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Vi(Number(e))}get time(){return Vi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Hi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&t9()?(this.animation.timeline=e,ii):n(this)}}const F3={anticipate:S3,backInOut:w3,circInOut:E3};function o9(t){return t in F3}function l9(t){typeof t.ease=="string"&&o9(t.ease)&&(t.ease=F3[t.ease])}const Lx=10;class c9 extends a9{constructor(e){l9(e),B3(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:o,...c}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const u=new Mg({...c,autoplay:!1}),d=Hi(this.finishedTime??this.time);n.setWithVelocity(u.sample(d-Lx).value,u.sample(d).value,Lx),u.stop()}}const Dx=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(nr.test(t)||t==="0")&&!t.startsWith("url("));function u9(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function f9(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],c=Dx(r,e),u=Dx(o,e);return!c||!u?!1:u9(t)||(n==="spring"||q3(n))&&i}function kg(t){return p3(t)&&"offsetHeight"in t}const d9=new Set(["opacity","clipPath","filter","transform"]),h9=mg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function p9(t){var h;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:o,type:c}=t;if(!kg((h=e==null?void 0:e.owner)==null?void 0:h.current))return!1;const{onUpdate:u,transformTemplate:d}=e.owner.getProps();return h9()&&n&&d9.has(n)&&(n!=="transform"||!d)&&!u&&!i&&r!=="mirror"&&o!==0&&c!=="inertia"}const m9=40;class g9 extends Ag{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...g}){var b;super(),this.stop=()=>{var S,C;this._animation&&(this._animation.stop(),(S=this.stopTimeline)==null||S.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=En.now();const y={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:o,repeatType:c,name:d,motionValue:h,element:p,...g},x=(p==null?void 0:p.KeyframeResolver)||Og;this.keyframeResolver=new x(u,(S,C,T)=>this.onKeyframesResolved(S,C,y,!T),d,h,p),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:o,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=i;this.resolvedAt=En.now(),f9(e,o,c,u)||((ws.instantAnimations||!d)&&(p==null||p(Cg(e,i,n))),e[0]=e[e.length-1],i.duration=0,i.repeat=0);const y={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>m9?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},x=!h&&p9(y)?new c9({...y,element:y.motionValue.owner.current}):new Mg(y);x.finished.then(()=>this.notifyFinished()).catch(ii),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),$A()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const y9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function v9(t){const e=y9.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function G3(t,e,n=1){const[i,r]=v9(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const c=o.trim();return h3(c)?parseFloat(c):c}return bg(r)?G3(r,e,n+1):r}function Rg(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const Y3=new Set(["width","height","top","left","right","bottom",...oo]),x9={test:t=>t==="auto",parse:t=>t},X3=t=>e=>e.test(t),Q3=[ao,Te,Ui,Ks,uA,cA,x9],_x=t=>Q3.find(X3(t));function b9(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||m3(t):!0}const w9=new Set(["brightness","contrast","saturate","opacity"]);function S9(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(wg)||[];if(!i)return t;const r=n.replace(i,"");let o=w9.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+r+")"}const T9=/\b([a-z-]*)\(.*?\)/gu,dm={...nr,getAnimatableNone:t=>{const e=t.match(T9);return e?e.map(S9).join(" "):t}},zx={...ao,transform:Math.round},E9={rotate:Ks,rotateX:Ks,rotateY:Ks,rotateZ:Ks,scale:Du,scaleX:Du,scaleY:Du,scaleZ:Du,skew:Ks,skewX:Ks,skewY:Ks,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:Gl,originX:wx,originY:wx,originZ:Te},Lg={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,radius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,backgroundPositionX:Te,backgroundPositionY:Te,...E9,zIndex:zx,fillOpacity:Gl,strokeOpacity:Gl,numOctaves:zx},C9={...Lg,color:Mt,backgroundColor:Mt,outlineColor:Mt,fill:Mt,stroke:Mt,borderColor:Mt,borderTopColor:Mt,borderRightColor:Mt,borderBottomColor:Mt,borderLeftColor:Mt,filter:dm,WebkitFilter:dm},Z3=t=>C9[t];function K3(t,e){let n=Z3(t);return n!==dm&&(n=nr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const A9=new Set(["auto","none","0"]);function M9(t,e,n){let i=0,r;for(;i<t.length&&!r;){const o=t[i];typeof o=="string"&&!A9.has(o)&&Yl(o).values.length&&(r=t[i]),i++}if(r&&n)for(const o of e)t[o]=K3(n,r)}class O9 extends Og{constructor(e,n,i,r,o){super(e,n,i,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),bg(h))){const p=G3(h,n.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Y3.has(i)||e.length!==2)return;const[r,o]=e,c=_x(r),u=_x(o);if(c!==u)if(kx(c)&&kx(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else zr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||b9(e[r]))&&i.push(r);i.length&&M9(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var u;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const o=i.length-1,c=i[o];i[o]=zr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function k9(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const W3=(t,e)=>e&&typeof t=="number"?e.transform(t):t,jx=30,R9=t=>!isNaN(parseFloat(t));class L9{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{var c,u;const o=En.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty();r&&((u=this.events.renderRequest)==null||u.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=En.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=R9(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new gg);const i=this.events[e].add(n);return e==="change"?()=>{i(),ft.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=En.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>jx)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,jx);return g3(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ya(t,e){return new L9(t,e)}const{schedule:Dg}=M3(queueMicrotask,!1),pi={x:!1,y:!1};function $3(){return pi.x||pi.y}function D9(t){return t==="x"||t==="y"?pi[t]?null:(pi[t]=!0,()=>{pi[t]=!1}):pi.x||pi.y?null:(pi.x=pi.y=!0,()=>{pi.x=pi.y=!1})}function J3(t,e){const n=k9(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Px(t){return!(t.pointerType==="touch"||$3())}function _9(t,e,n={}){const[i,r,o]=J3(t,n),c=u=>{if(!Px(u))return;const{target:d}=u,h=e(d,u);if(typeof h!="function"||!d)return;const p=g=>{Px(g)&&(h(g),d.removeEventListener("pointerleave",p))};d.addEventListener("pointerleave",p,r)};return i.forEach(u=>{u.addEventListener("pointerenter",c,r)}),o}const e4=(t,e)=>e?t===e?!0:e4(t,e.parentElement):!1,_g=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,z9=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function j9(t){return z9.has(t.tagName)||t.tabIndex!==-1}const hf=new WeakSet;function Nx(t){return e=>{e.key==="Enter"&&t(e)}}function Yp(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const P9=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Nx(()=>{if(hf.has(n))return;Yp(n,"down");const r=Nx(()=>{Yp(n,"up")}),o=()=>Yp(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",o,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Bx(t){return _g(t)&&!$3()}function N9(t,e,n={}){const[i,r,o]=J3(t,n),c=u=>{const d=u.currentTarget;if(!Bx(u))return;hf.add(d);const h=e(d,u),p=(x,b)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",y),hf.has(d)&&hf.delete(d),Bx(x)&&typeof h=="function"&&h(x,{success:b})},g=x=>{p(x,d===window||d===document||n.useGlobalTarget||e4(d,x.target))},y=x=>{p(x,!1)};window.addEventListener("pointerup",g,r),window.addEventListener("pointercancel",y,r)};return i.forEach(u=>{(n.useGlobalTarget?window:u).addEventListener("pointerdown",c,r),kg(u)&&(u.addEventListener("focus",h=>P9(h,r)),!j9(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),o}function t4(t){return p3(t)&&"ownerSVGElement"in t}function B9(t){return t4(t)&&t.tagName==="svg"}const nn=t=>!!(t&&t.getVelocity),I9=[...Q3,Mt,nr],H9=t=>I9.find(X3(t)),zg=D.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class V9 extends D.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=n.offsetParent,r=kg(i)&&i.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=r-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function U9({children:t,isPresent:e,anchorX:n,root:i}){const r=D.useId(),o=D.useRef(null),c=D.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=D.useContext(zg);return D.useInsertionEffect(()=>{const{width:d,height:h,top:p,left:g,right:y}=c.current;if(e||!o.current||!d||!h)return;const x=n==="left"?`left: ${g}`:`right: ${y}`;o.current.dataset.motionPopId=r;const b=document.createElement("style");u&&(b.nonce=u);const S=i??document.head;return S.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{S.removeChild(b),S.contains(b)&&S.removeChild(b)}},[e]),w.jsx(V9,{isPresent:e,childRef:o,sizeRef:c,children:D.cloneElement(t,{ref:o})})}const q9=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:o,mode:c,anchorX:u,root:d})=>{const h=ug(F9),p=D.useId();let g=!0,y=D.useMemo(()=>(g=!1,{id:p,initial:e,isPresent:n,custom:r,onExitComplete:x=>{h.set(x,!0);for(const b of h.values())if(!b)return;i&&i()},register:x=>(h.set(x,!1),()=>h.delete(x))}),[n,h,i]);return o&&g&&(y={...y}),D.useMemo(()=>{h.forEach((x,b)=>h.set(b,!1))},[n]),D.useEffect(()=>{!n&&!h.size&&i&&i()},[n]),c==="popLayout"&&(t=w.jsx(U9,{isPresent:n,anchorX:u,root:d,children:t})),w.jsx(nd.Provider,{value:y,children:t})};function F9(){return new Map}function n4(t=!0){const e=D.useContext(nd);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,o=D.useId();D.useEffect(()=>{if(t)return r(o)},[t]);const c=D.useCallback(()=>t&&i&&i(o),[o,i,t]);return!n&&i?[!1,c]:[!0]}const _u=t=>t.key||"";function Ix(t){const e=[];return D.Children.forEach(t,n=>{D.isValidElement(n)&&e.push(n)}),e}const i4=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:o="sync",propagate:c=!1,anchorX:u="left",root:d})=>{const[h,p]=n4(c),g=D.useMemo(()=>Ix(t),[t]),y=c&&!h?[]:g.map(_u),x=D.useRef(!0),b=D.useRef(g),S=ug(()=>new Map),[C,T]=D.useState(g),[M,A]=D.useState(g);d3(()=>{x.current=!1,b.current=g;for(let P=0;P<M.length;P++){const L=_u(M[P]);y.includes(L)?S.delete(L):S.get(L)!==!0&&S.set(L,!1)}},[M,y.length,y.join("-")]);const R=[];if(g!==C){let P=[...g];for(let L=0;L<M.length;L++){const I=M[L],V=_u(I);y.includes(V)||(P.splice(L,0,I),R.push(I))}return o==="wait"&&R.length&&(P=R),A(Ix(P)),T(g),null}const{forceRender:k}=D.useContext(cg);return w.jsx(w.Fragment,{children:M.map(P=>{const L=_u(P),I=c&&!h?!1:g===M||y.includes(L),V=()=>{if(S.has(L))S.set(L,!0);else return;let F=!0;S.forEach(N=>{N||(F=!1)}),F&&(k==null||k(),A(b.current),c&&(p==null||p()),i&&i())};return w.jsx(q9,{isPresent:I,initial:!x.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:o,root:d,onExitComplete:I?void 0:V,anchorX:u,children:P},L)})})},s4=D.createContext({strict:!1}),Hx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xa={};for(const t in Hx)Xa[t]={isEnabled:e=>Hx[t].some(n=>!!e[n])};function G9(t){for(const e in t)Xa[e]={...Xa[e],...t[e]}}const Y9=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Df(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Y9.has(t)}let r4=t=>!Df(t);function X9(t){typeof t=="function"&&(r4=e=>e.startsWith("on")?!Df(e):t(e))}try{X9(require("@emotion/is-prop-valid").default)}catch{}function Q9(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(r4(r)||n===!0&&Df(r)||!e&&!Df(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Z9(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const id=D.createContext({});function sd(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Xl(t){return typeof t=="string"||Array.isArray(t)}const jg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pg=["initial",...jg];function rd(t){return sd(t.animate)||Pg.some(e=>Xl(t[e]))}function a4(t){return!!(rd(t)||t.variants)}function K9(t,e){if(rd(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Xl(n)?n:void 0,animate:Xl(i)?i:void 0}}return t.inherit!==!1?e:{}}function W9(t){const{initial:e,animate:n}=K9(t,D.useContext(id));return D.useMemo(()=>({initial:e,animate:n}),[Vx(e),Vx(n)])}function Vx(t){return Array.isArray(t)?t.join(" "):t}const $9=Symbol.for("motionComponentSymbol");function Pa(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function J9(t,e,n){return D.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Pa(n)&&(n.current=i))},[e])}const Ng=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),eM="framerAppearId",o4="data-"+Ng(eM),l4=D.createContext({});function tM(t,e,n,i,r){var S,C;const{visualElement:o}=D.useContext(id),c=D.useContext(s4),u=D.useContext(nd),d=D.useContext(zg).reducedMotion,h=D.useRef(null);i=i||c.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=h.current,g=D.useContext(l4);p&&!p.projection&&r&&(p.type==="html"||p.type==="svg")&&nM(h.current,n,r,g);const y=D.useRef(!1);D.useInsertionEffect(()=>{p&&y.current&&p.update(n,u)});const x=n[o4],b=D.useRef(!!x&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,x))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,x)));return d3(()=>{p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Dg.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),D.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,x)}),b.current=!1))}),p}function nM(t,e,n,i){const{layoutId:r,layout:o,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:c4(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!c||u&&Pa(u),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:i,crossfade:p,layoutScroll:d,layoutRoot:h})}function c4(t){if(t)return t.options.allowProjection!==!1?t.projection:c4(t.parent)}function iM({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&G9(t);function o(u,d){let h;const p={...D.useContext(zg),...u,layoutId:sM(u)},{isStatic:g}=p,y=W9(u),x=i(u,g);if(!g&&fg){rM();const b=aM(p);h=b.MeasureLayout,y.visualElement=tM(r,x,p,e,b.ProjectionNode)}return w.jsxs(id.Provider,{value:y,children:[h&&y.visualElement?w.jsx(h,{visualElement:y.visualElement,...p}):null,n(r,u,J9(x,y.visualElement,d),x,g,y.visualElement)]})}o.displayName=`motion.${typeof r=="string"?r:`create(${r.displayName??r.name??""})`}`;const c=D.forwardRef(o);return c[$9]=r,c}function sM({layoutId:t}){const e=D.useContext(cg).id;return e&&t!==void 0?e+"-"+t:t}function rM(t,e){D.useContext(s4).strict}function aM(t){const{drag:e,layout:n}=Xa;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Ql={};function oM(t){for(const e in t)Ql[e]=t[e],xg(e)&&(Ql[e].isCSSVariable=!0)}function u4(t,{layout:e,layoutId:n}){return lo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ql[t]||t==="opacity")}const lM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cM=oo.length;function uM(t,e,n){let i="",r=!0;for(let o=0;o<cM;o++){const c=oo[o],u=t[c];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(c.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||n){const h=W3(u,Lg[c]);if(!d){r=!1;const p=lM[c]||c;i+=`${p}(${h}) `}n&&(e[c]=h)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Bg(t,e,n){const{style:i,vars:r,transformOrigin:o}=t;let c=!1,u=!1;for(const d in e){const h=e[d];if(lo.has(d)){c=!0;continue}else if(xg(d)){r[d]=h;continue}else{const p=W3(h,Lg[d]);d.startsWith("origin")?(u=!0,o[d]=p):i[d]=p}}if(e.transform||(c||n?i.transform=uM(e,t.transform,n):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=o;i.transformOrigin=`${d} ${h} ${p}`}}const Ig=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function f4(t,e,n){for(const i in e)!nn(e[i])&&!u4(i,n)&&(t[i]=e[i])}function fM({transformTemplate:t},e){return D.useMemo(()=>{const n=Ig();return Bg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function dM(t,e){const n=t.style||{},i={};return f4(i,n,t),Object.assign(i,fM(t,e)),i}function hM(t,e){const n={},i=dM(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const pM={offset:"stroke-dashoffset",array:"stroke-dasharray"},mM={offset:"strokeDashoffset",array:"strokeDasharray"};function gM(t,e,n=1,i=0,r=!0){t.pathLength=1;const o=r?pM:mM;t[o.offset]=Te.transform(-i);const c=Te.transform(e),u=Te.transform(n);t[o.array]=`${c} ${u}`}function d4(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:c=0,...u},d,h,p){if(Bg(t,u,h),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:y}=t;g.transform&&(y.transform=g.transform,delete g.transform),(y.transform||g.transformOrigin)&&(y.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),y.transform&&(y.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete g.transformBox),e!==void 0&&(g.x=e),n!==void 0&&(g.y=n),i!==void 0&&(g.scale=i),r!==void 0&&gM(g,r,o,c,!1)}const h4=()=>({...Ig(),attrs:{}}),p4=t=>typeof t=="string"&&t.toLowerCase()==="svg";function yM(t,e,n,i){const r=D.useMemo(()=>{const o=h4();return d4(o,e,p4(i),t.transformTemplate,t.style),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};f4(o,t.style,t),r.style={...o,...r.style}}return r}const vM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hg(t){return typeof t!="string"||t.includes("-")?!1:!!(vM.indexOf(t)>-1||/[A-Z]/u.test(t))}function xM(t=!1){return(n,i,r,{latestValues:o},c)=>{const d=(Hg(n)?yM:hM)(i,o,c,n),h=Q9(i,typeof n=="string",t),p=n!==D.Fragment?{...h,...d,ref:r}:{},{children:g}=i,y=D.useMemo(()=>nn(g)?g.get():g,[g]);return D.createElement(n,{...p,children:y})}}function Ux(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Vg(t,e,n,i){if(typeof e=="function"){const[r,o]=Ux(i);e=e(n!==void 0?n:t.custom,r,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,o]=Ux(i);e=e(n!==void 0?n:t.custom,r,o)}return e}function pf(t){return nn(t)?t.get():t}function bM({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:wM(n,i,r,t),renderState:e()}}const m4=t=>(e,n)=>{const i=D.useContext(id),r=D.useContext(nd),o=()=>bM(t,e,i,r);return n?o():ug(o)};function wM(t,e,n,i){const r={},o=i(t,{});for(const y in o)r[y]=pf(o[y]);let{initial:c,animate:u}=t;const d=rd(t),h=a4(t);e&&h&&!d&&t.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=n?n.initial===!1:!1;p=p||c===!1;const g=p?u:c;if(g&&typeof g!="boolean"&&!sd(g)){const y=Array.isArray(g)?g:[g];for(let x=0;x<y.length;x++){const b=Vg(t,y[x]);if(b){const{transitionEnd:S,transition:C,...T}=b;for(const M in T){let A=T[M];if(Array.isArray(A)){const R=p?A.length-1:0;A=A[R]}A!==null&&(r[M]=A)}for(const M in S)r[M]=S[M]}}}return r}function Ug(t,e,n){var o;const{style:i}=t,r={};for(const c in i)(nn(i[c])||e.style&&nn(e.style[c])||u4(c,t)||((o=n==null?void 0:n.getValue(c))==null?void 0:o.liveStyle)!==void 0)&&(r[c]=i[c]);return r}const SM={useVisualState:m4({scrapeMotionValuesFromProps:Ug,createRenderState:Ig})};function g4(t,e,n){const i=Ug(t,e,n);for(const r in t)if(nn(t[r])||nn(e[r])){const o=oo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[o]=t[r]}return i}const TM={useVisualState:m4({scrapeMotionValuesFromProps:g4,createRenderState:h4})};function EM(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const c={...Hg(i)?TM:SM,preloadedFeatures:t,useRender:xM(r),createVisualElement:e,Component:i};return iM(c)}}function Zl(t,e,n){const i=t.getProps();return Vg(i,e,n!==void 0?n:i.custom,t)}const hm=t=>Array.isArray(t);function CM(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ya(n))}function AM(t){return hm(t)?t[t.length-1]||0:t}function MM(t,e){const n=Zl(t,e);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const c in o){const u=AM(o[c]);CM(t,c,u)}}function OM(t){return!!(nn(t)&&t.add)}function pm(t,e){const n=t.getValue("willChange");if(OM(n))return n.add(e);if(!n&&ws.WillChange){const i=new ws.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function y4(t){return t.props[o4]}const kM=t=>t!==null;function RM(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(kM),o=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[o]}const LM={type:"spring",stiffness:500,damping:25,restSpeed:10},DM=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_M={type:"keyframes",duration:.8},zM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},jM=(t,{keyframes:e})=>e.length>2?_M:lo.has(t)?t.startsWith("scale")?DM(e[1]):LM:zM;function PM({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:c,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const qg=(t,e,n,i={},r,o)=>c=>{const u=Rg(i,t)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-Hi(d);const p={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:y=>{e.set(y),u.onUpdate&&u.onUpdate(y)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:t,motionValue:e,element:o?void 0:r};PM(u)||Object.assign(p,jM(t,p)),p.duration&&(p.duration=Hi(p.duration)),p.repeatDelay&&(p.repeatDelay=Hi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),(ws.instantAnimations||ws.skipAnimations)&&(g=!0,p.duration=0,p.delay=0),p.allowFlatten=!u.type&&!u.ease,g&&!o&&e.get()!==void 0){const y=RM(p.keyframes,u);if(y!==void 0){ft.update(()=>{p.onUpdate(y),p.onComplete()});return}}return u.isSync?new Mg(p):new g9(p)};function NM({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function v4(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:c,...u}=e;i&&(o=i);const d=[],h=r&&t.animationState&&t.animationState.getState()[r];for(const p in u){const g=t.getValue(p,t.latestValues[p]??null),y=u[p];if(y===void 0||h&&NM(h,p))continue;const x={delay:n,...Rg(o||{},p)},b=g.get();if(b!==void 0&&!g.isAnimating&&!Array.isArray(y)&&y===b&&!x.velocity)continue;let S=!1;if(window.MotionHandoffAnimation){const T=y4(t);if(T){const M=window.MotionHandoffAnimation(T,p,ft);M!==null&&(x.startTime=M,S=!0)}}pm(t,p),g.start(qg(p,g,y,t.shouldReduceMotion&&Y3.has(p)?{type:!1}:x,t,S));const C=g.animation;C&&d.push(C)}return c&&Promise.all(d).then(()=>{ft.update(()=>{c&&MM(t,c)})}),d}function mm(t,e,n={}){var d;const i=Zl(t,e,n.type==="exit"?(d=t.presenceContext)==null?void 0:d.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(v4(t,i,n)):()=>Promise.resolve(),c=t.variantChildren&&t.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:y}=r;return BM(t,e,p+h,g,y,n)}:()=>Promise.resolve(),{when:u}=r;if(u){const[h,p]=u==="beforeChildren"?[o,c]:[c,o];return h().then(()=>p())}else return Promise.all([o(),c(n.delay)])}function BM(t,e,n=0,i=0,r=1,o){const c=[],u=(t.variantChildren.size-1)*i,d=r===1?(h=0)=>h*i:(h=0)=>u-h*i;return Array.from(t.variantChildren).sort(IM).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(mm(h,e,{...o,delay:n+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function IM(t,e){return t.sortNodePosition(e)}function HM(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(o=>mm(t,o,n));i=Promise.all(r)}else if(typeof e=="string")i=mm(t,e,n);else{const r=typeof e=="function"?Zl(t,e,n.custom):e;i=Promise.all(v4(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function x4(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const VM=Pg.length;function b4(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?b4(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<VM;n++){const i=Pg[n],r=t.props[i];(Xl(r)||r===!1)&&(e[i]=r)}return e}const UM=[...jg].reverse(),qM=jg.length;function FM(t){return e=>Promise.all(e.map(({animation:n,options:i})=>HM(t,n,i)))}function GM(t){let e=FM(t),n=qx(),i=!0;const r=d=>(h,p)=>{var y;const g=Zl(t,p,d==="exit"?(y=t.presenceContext)==null?void 0:y.custom:void 0);if(g){const{transition:x,transitionEnd:b,...S}=g;h={...h,...S,...b}}return h};function o(d){e=d(t)}function c(d){const{props:h}=t,p=b4(t.parent)||{},g=[],y=new Set;let x={},b=1/0;for(let C=0;C<qM;C++){const T=UM[C],M=n[T],A=h[T]!==void 0?h[T]:p[T],R=Xl(A),k=T===d?M.isActive:null;k===!1&&(b=C);let P=A===p[T]&&A!==h[T]&&R;if(P&&i&&t.manuallyAnimateOnMount&&(P=!1),M.protectedKeys={...x},!M.isActive&&k===null||!A&&!M.prevProp||sd(A)||typeof A=="boolean")continue;const L=YM(M.prevProp,A);let I=L||T===d&&M.isActive&&!P&&R||C>b&&R,V=!1;const F=Array.isArray(A)?A:[A];let N=F.reduce(r(T),{});k===!1&&(N={});const{prevResolvedValues:z={}}=M,te={...z,...N},$=J=>{I=!0,y.has(J)&&(V=!0,y.delete(J)),M.needsAnimating[J]=!0;const ee=t.getValue(J);ee&&(ee.liveStyle=!1)};for(const J in te){const ee=N[J],ae=z[J];if(x.hasOwnProperty(J))continue;let _=!1;hm(ee)&&hm(ae)?_=!x4(ee,ae):_=ee!==ae,_?ee!=null?$(J):y.add(J):ee!==void 0&&y.has(J)?$(J):M.protectedKeys[J]=!0}M.prevProp=A,M.prevResolvedValues=N,M.isActive&&(x={...x,...N}),i&&t.blockInitialAnimation&&(I=!1),I&&(!(P&&L)||V)&&g.push(...F.map(J=>({animation:J,options:{type:T}})))}if(y.size){const C={};if(typeof h.initial!="boolean"){const T=Zl(t,Array.isArray(h.initial)?h.initial[0]:h.initial);T&&T.transition&&(C.transition=T.transition)}y.forEach(T=>{const M=t.getBaseTarget(T),A=t.getValue(T);A&&(A.liveStyle=!0),C[T]=M??null}),g.push({animation:C})}let S=!!g.length;return i&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(g):Promise.resolve()}function u(d,h){var g;if(n[d].isActive===h)return Promise.resolve();(g=t.variantChildren)==null||g.forEach(y=>{var x;return(x=y.animationState)==null?void 0:x.setActive(d,h)}),n[d].isActive=h;const p=c(d);for(const y in n)n[y].protectedKeys={};return p}return{animateChanges:c,setActive:u,setAnimateFunction:o,getState:()=>n,reset:()=>{n=qx(),i=!0}}}function YM(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!x4(e,t):!1}function Or(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qx(){return{animate:Or(!0),whileInView:Or(),whileHover:Or(),whileTap:Or(),whileDrag:Or(),whileFocus:Or(),exit:Or()}}class rr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class XM extends rr{constructor(e){super(e),e.animationState||(e.animationState=GM(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();sd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let QM=0;class ZM extends rr{constructor(){super(...arguments),this.id=QM++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const KM={animation:{Feature:XM},exit:{Feature:ZM}};function Kl(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function dc(t){return{point:{x:t.pageX,y:t.pageY}}}const WM=t=>e=>_g(e)&&t(e,dc(e));function Ll(t,e,n,i){return Kl(t,e,WM(n),i)}function w4({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function $M({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function JM(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}const S4=1e-4,eO=1-S4,tO=1+S4,T4=.01,nO=0-T4,iO=0+T4;function un(t){return t.max-t.min}function sO(t,e,n){return Math.abs(t-e)<=n}function Fx(t,e,n,i=.5){t.origin=i,t.originPoint=ut(e.min,e.max,t.origin),t.scale=un(n)/un(e),t.translate=ut(n.min,n.max,t.origin)-t.originPoint,(t.scale>=eO&&t.scale<=tO||isNaN(t.scale))&&(t.scale=1),(t.translate>=nO&&t.translate<=iO||isNaN(t.translate))&&(t.translate=0)}function Dl(t,e,n,i){Fx(t.x,e.x,n.x,i?i.originX:void 0),Fx(t.y,e.y,n.y,i?i.originY:void 0)}function Gx(t,e,n){t.min=n.min+e.min,t.max=t.min+un(e)}function rO(t,e,n){Gx(t.x,e.x,n.x),Gx(t.y,e.y,n.y)}function Yx(t,e,n){t.min=e.min-n.min,t.max=t.min+un(e)}function _l(t,e,n){Yx(t.x,e.x,n.x),Yx(t.y,e.y,n.y)}const Xx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Na=()=>({x:Xx(),y:Xx()}),Qx=()=>({min:0,max:0}),xt=()=>({x:Qx(),y:Qx()});function ni(t){return[t("x"),t("y")]}function Xp(t){return t===void 0||t===1}function gm({scale:t,scaleX:e,scaleY:n}){return!Xp(t)||!Xp(e)||!Xp(n)}function Rr(t){return gm(t)||E4(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function E4(t){return Zx(t.x)||Zx(t.y)}function Zx(t){return t&&t!=="0%"}function _f(t,e,n){const i=t-n,r=e*i;return n+r}function Kx(t,e,n,i,r){return r!==void 0&&(t=_f(t,r,i)),_f(t,n,i)+e}function ym(t,e=0,n=1,i,r){t.min=Kx(t.min,e,n,i,r),t.max=Kx(t.max,e,n,i,r)}function C4(t,{x:e,y:n}){ym(t.x,e.translate,e.scale,e.originPoint),ym(t.y,n.translate,n.scale,n.originPoint)}const Wx=.999999999999,$x=1.0000000000001;function aO(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let o,c;for(let u=0;u<r;u++){o=n[u],c=o.projectionDelta;const{visualElement:d}=o.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Ia(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,C4(t,c)),i&&Rr(o.latestValues)&&Ia(t,o.latestValues))}e.x<$x&&e.x>Wx&&(e.x=1),e.y<$x&&e.y>Wx&&(e.y=1)}function Ba(t,e){t.min=t.min+e,t.max=t.max+e}function Jx(t,e,n,i,r=.5){const o=ut(t.min,t.max,r);ym(t,e,n,o,i)}function Ia(t,e){Jx(t.x,e.x,e.scaleX,e.scale,e.originX),Jx(t.y,e.y,e.scaleY,e.scale,e.originY)}function A4(t,e){return w4(JM(t.getBoundingClientRect(),e))}function oO(t,e,n){const i=A4(t,n),{scroll:r}=e;return r&&(Ba(i.x,r.offset.x),Ba(i.y,r.offset.y)),i}const M4=({current:t})=>t?t.ownerDocument.defaultView:null,eb=(t,e)=>Math.abs(t-e);function lO(t,e){const n=eb(t.x,e.x),i=eb(t.y,e.y);return Math.sqrt(n**2+i**2)}class O4{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Zp(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,x=lO(g.offset,{x:0,y:0})>=3;if(!y&&!x)return;const{point:b}=g,{timestamp:S}=Gt;this.history.push({...b,timestamp:S});const{onStart:C,onMove:T}=this.handlers;y||(C&&C(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,g)},this.handlePointerMove=(g,y)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Qp(y,this.transformPagePoint),ft.update(this.updatePoint,!0)},this.handlePointerUp=(g,y)=>{this.end();const{onEnd:x,onSessionEnd:b,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Zp(g.type==="pointercancel"?this.lastMoveEventInfo:Qp(y,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,C),b&&b(g,C)},!_g(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const c=dc(e),u=Qp(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=Gt;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=n;p&&p(e,Zp(u,this.history)),this.removeListeners=cc(Ll(this.contextWindow,"pointermove",this.handlePointerMove),Ll(this.contextWindow,"pointerup",this.handlePointerUp),Ll(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tr(this.updatePoint)}}function Qp(t,e){return e?{point:e(t.point)}:t}function tb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Zp({point:t},e){return{point:t,delta:tb(t,k4(e)),offset:tb(t,cO(e)),velocity:uO(e,.1)}}function cO(t){return t[0]}function k4(t){return t[t.length-1]}function uO(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=k4(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Hi(e)));)n--;if(!i)return{x:0,y:0};const o=Vi(r.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const c={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function fO(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ut(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ut(n,t,i.max):Math.min(t,n)),t}function nb(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function dO(t,{top:e,left:n,bottom:i,right:r}){return{x:nb(t.x,n,r),y:nb(t.y,e,i)}}function ib(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function hO(t,e){return{x:ib(t.x,e.x),y:ib(t.y,e.y)}}function pO(t,e){let n=.5;const i=un(t),r=un(e);return r>i?n=Fl(e.min,e.max-i,t.min):i>r&&(n=Fl(t.min,t.max-r,e.min)),bs(0,1,n)}function mO(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const vm=.35;function gO(t=vm){return t===!1?t=0:t===!0&&(t=vm),{x:sb(t,"left","right"),y:sb(t,"top","bottom")}}function sb(t,e,n){return{min:rb(t,e),max:rb(t,n)}}function rb(t,e){return typeof t=="number"?t:t[e]||0}const yO=new WeakMap;class vO{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(dc(p).point)},o=(p,g)=>{const{drag:y,dragPropagation:x,onDragStart:b}=this.getProps();if(y&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=D9(y),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ni(C=>{let T=this.getAxisMotionValue(C).get()||0;if(Ui.test(T)){const{projection:M}=this.visualElement;if(M&&M.layout){const A=M.layout.layoutBox[C];A&&(T=un(A)*(parseFloat(T)/100))}}this.originPoint[C]=T}),b&&ft.postRender(()=>b(p,g)),pm(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},c=(p,g)=>{const{dragPropagation:y,dragDirectionLock:x,onDirectionLock:b,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:C}=g;if(x&&this.currentDirection===null){this.currentDirection=xO(C),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",g.point,C),this.updateAxis("y",g.point,C),this.visualElement.render(),S&&S(p,g)},u=(p,g)=>this.stop(p,g),d=()=>ni(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)==null?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new O4(e,{onSessionStart:r,onStart:o,onMove:c,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:M4(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&ft.postRender(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!zu(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=fO(c,this.constraints[e],this.elastic[e])),o.set(c)}resolveConstraints(){var o;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,r=this.constraints;e&&Pa(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=dO(i.layoutBox,e):this.constraints=!1,this.elastic=gO(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ni(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=mO(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Pa(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=oO(i,r.root,this.visualElement.getTransformPagePoint());let c=hO(r.layout.layoutBox,o);if(n){const u=n($M(c));this.hasMutatedConstraints=!!u,u&&(c=w4(u))}return c}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:o,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=ni(p=>{if(!zu(p,n,this.currentDirection))return;let g=d&&d[p]||{};c&&(g={min:0,max:0});const y=r?200:1e6,x=r?40:1e7,b={type:"inertia",velocity:i?e[p]:0,bounceStiffness:y,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...o,...g};return this.startAxisValueAnimation(p,b)});return Promise.all(h).then(u)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return pm(this.visualElement,e),i.start(qg(e,i,0,n,this.visualElement,!1))}stopAnimation(){ni(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ni(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ni(n=>{const{drag:i}=this.getProps();if(!zu(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(n);if(r&&r.layout){const{min:c,max:u}=r.layout.layoutBox[n];o.set(e[n]-ut(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Pa(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ni(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();r[c]=pO({min:d,max:d},this.constraints[c])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),ni(c=>{if(!zu(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(ut(d,h,r[c]))})}addListeners(){if(!this.visualElement.current)return;yO.set(this.visualElement,this);const e=this.visualElement.current,n=Ll(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();Pa(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ft.read(i);const c=Kl(window,"resize",()=>this.scalePositionWithinConstraints()),u=r.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ni(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())});return()=>{c(),n(),o(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:c=vm,dragMomentum:u=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:o,dragElastic:c,dragMomentum:u}}}function zu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function xO(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class bO extends rr{constructor(e){super(e),this.removeGroupControls=ii,this.removeListeners=ii,this.controls=new vO(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ii}unmount(){this.removeGroupControls(),this.removeListeners()}}const ab=t=>(e,n)=>{t&&ft.postRender(()=>t(e,n))};class wO extends rr{constructor(){super(...arguments),this.removePointerDownListener=ii}onPointerDown(e){this.session=new O4(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:M4(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:ab(e),onStart:ab(n),onMove:i,onEnd:(o,c)=>{delete this.session,r&&ft.postRender(()=>r(o,c))}}}mount(){this.removePointerDownListener=Ll(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const mf={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ob(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const gl={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=ob(t,e.target.x),i=ob(t,e.target.y);return`${n}% ${i}%`}},SO={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=nr.parse(t);if(r.length>5)return i;const o=nr.createTransformer(t),c=typeof r[0]!="number"?1:0,u=n.x.scale*e.x,d=n.y.scale*e.y;r[0+c]/=u,r[1+c]/=d;const h=ut(u,d,.5);return typeof r[2+c]=="number"&&(r[2+c]/=h),typeof r[3+c]=="number"&&(r[3+c]/=h),o(r)}};class TO extends D.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:o}=e;oM(EO),o&&(n.group&&n.group.add(o),i&&i.register&&r&&i.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),mf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:o}=this.props,{projection:c}=i;return c&&(c.isPresent=o,r||e.layoutDependency!==n||n===void 0||e.isPresent!==o?c.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?c.promote():c.relegate()||ft.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Dg.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function R4(t){const[e,n]=n4(),i=D.useContext(cg);return w.jsx(TO,{...t,layoutGroup:i,switchLayoutGroup:D.useContext(l4),isPresent:e,safeToRemove:n})}const EO={borderRadius:{...gl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gl,borderTopRightRadius:gl,borderBottomLeftRadius:gl,borderBottomRightRadius:gl,boxShadow:SO};function CO(t,e,n){const i=nn(t)?t:Ya(t);return i.start(qg("",i,e,n)),i.animation}const AO=(t,e)=>t.depth-e.depth;class MO{constructor(){this.children=[],this.isDirty=!1}add(e){dg(this.children,e),this.isDirty=!0}remove(e){hg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(AO),this.isDirty=!1,this.children.forEach(e)}}function OO(t,e){const n=En.now(),i=({timestamp:r})=>{const o=r-n;o>=e&&(tr(i),t(o-e))};return ft.setup(i,!0),()=>tr(i)}const L4=["TopLeft","TopRight","BottomLeft","BottomRight"],kO=L4.length,lb=t=>typeof t=="string"?parseFloat(t):t,cb=t=>typeof t=="number"||Te.test(t);function RO(t,e,n,i,r,o){r?(t.opacity=ut(0,n.opacity??1,LO(i)),t.opacityExit=ut(e.opacity??1,0,DO(i))):o&&(t.opacity=ut(e.opacity??1,n.opacity??1,i));for(let c=0;c<kO;c++){const u=`border${L4[c]}Radius`;let d=ub(e,u),h=ub(n,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||cb(d)===cb(h)?(t[u]=Math.max(ut(lb(d),lb(h),i),0),(Ui.test(h)||Ui.test(d))&&(t[u]+="%")):t[u]=h}(e.rotate||n.rotate)&&(t.rotate=ut(e.rotate||0,n.rotate||0,i))}function ub(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const LO=D4(0,.5,T3),DO=D4(.5,.95,ii);function D4(t,e,n){return i=>i<t?0:i>e?1:n(Fl(t,e,i))}function fb(t,e){t.min=e.min,t.max=e.max}function ei(t,e){fb(t.x,e.x),fb(t.y,e.y)}function db(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function hb(t,e,n,i,r){return t-=e,t=_f(t,1/n,i),r!==void 0&&(t=_f(t,1/r,i)),t}function _O(t,e=0,n=1,i=.5,r,o=t,c=t){if(Ui.test(e)&&(e=parseFloat(e),e=ut(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=ut(o.min,o.max,i);t===o&&(u-=e),t.min=hb(t.min,e,n,u,r),t.max=hb(t.max,e,n,u,r)}function pb(t,e,[n,i,r],o,c){_O(t,e[n],e[i],e[r],e.scale,o,c)}const zO=["x","scaleX","originX"],jO=["y","scaleY","originY"];function mb(t,e,n,i){pb(t.x,e,zO,n?n.x:void 0,i?i.x:void 0),pb(t.y,e,jO,n?n.y:void 0,i?i.y:void 0)}function gb(t){return t.translate===0&&t.scale===1}function _4(t){return gb(t.x)&&gb(t.y)}function yb(t,e){return t.min===e.min&&t.max===e.max}function PO(t,e){return yb(t.x,e.x)&&yb(t.y,e.y)}function vb(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function z4(t,e){return vb(t.x,e.x)&&vb(t.y,e.y)}function xb(t){return un(t.x)/un(t.y)}function bb(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class NO{constructor(){this.members=[]}add(e){dg(this.members,e),e.scheduleRender()}remove(e){if(hg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1){i=o;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function BO(t,e,n){let i="";const r=t.x.translate/e.x,o=t.y.translate/e.y,c=(n==null?void 0:n.z)||0;if((r||o||c)&&(i=`translate3d(${r}px, ${o}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:y,skewX:x,skewY:b}=n;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),g&&(i+=`rotateX(${g}deg) `),y&&(i+=`rotateY(${y}deg) `),x&&(i+=`skewX(${x}deg) `),b&&(i+=`skewY(${b}deg) `)}const u=t.x.scale*e.x,d=t.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const Kp=["","X","Y","Z"],IO={visibility:"hidden"},HO=1e3;let VO=0;function Wp(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function j4(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=y4(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ft,!(r||o))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&j4(i)}function P4({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(c={},u=e==null?void 0:e()){this.id=VO++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FO),this.nodes.forEach(QO),this.nodes.forEach(ZO),this.nodes.forEach(GO)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new MO)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new gg),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=t4(c)&&!B9(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),t){let p;const g=()=>this.root.updateBlockedByResize=!1;t(c,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=OO(g,250),mf.hasAnimatedSinceResize&&(mf.hasAnimatedSinceResize=!1,this.nodes.forEach(Tb))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:y,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||ek,{onLayoutAnimationStart:S,onLayoutAnimationComplete:C}=h.getProps(),T=!this.targetLayout||!z4(this.targetLayout,x),M=!g&&y;if(this.options.layoutRoot||this.resumeFrom||M||g&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...Rg(b,"layout"),onPlay:S,onComplete:C};(h.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(p,M)}else g||Tb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),tr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KO),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&j4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(wb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sb);return}this.isUpdating||this.nodes.forEach(Sb),this.animationCommitId=this.animationId,this.isUpdating=!1,this.nodes.forEach(XO),this.nodes.forEach(UO),this.nodes.forEach(qO),this.clearAllSnapshots();const u=En.now();Gt.delta=bs(0,1e3/60,u-Gt.timestamp),Gt.timestamp=u,Gt.isProcessing=!0,Vp.update.process(Gt),Vp.preRender.process(Gt),Vp.render.process(Gt),Gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Dg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(YO),this.sharedNodes.forEach(WO)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!un(this.snapshot.measuredBox.x)&&!un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=xt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!r)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!_4(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Rr(this.latestValues)||p)&&(r(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),tk(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return xt();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(nk))){const{scroll:p}=this.root;p&&(Ba(u.x,p.offset.x),Ba(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=xt();if(ei(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:y}=p;p!==this.root&&g&&y.layoutScroll&&(g.wasRoot&&ei(u,c),Ba(u.x,g.offset.x),Ba(u.y,g.offset.y))}return u}applyTransform(c,u=!1){const d=xt();ei(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Ia(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Rr(p.latestValues)&&Ia(d,p.latestValues)}return Rr(this.latestValues)&&Ia(d,this.latestValues),d}removeTransform(c){const u=xt();ei(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Rr(h.latestValues))continue;gm(h.latestValues)&&h.updateSnapshot();const p=xt(),g=h.measurePageBox();ei(p,g),mb(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Rr(this.latestValues)&&mb(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var y;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:g}=this.options;if(!(!this.layout||!(p||g))){if(this.resolvedRelativeTargetAt=Gt.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xt(),this.relativeTargetOrigin=xt(),_l(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),ei(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=xt(),this.targetWithTransforms=xt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rO(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ei(this.target,this.layout.layoutBox),C4(this.target,this.targetDelta)):ei(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xt(),this.relativeTargetOrigin=xt(),_l(this.relativeTargetOrigin,this.target,x.target),ei(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||gm(this.parent.latestValues)||E4(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Gt.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;ei(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,y=this.treeScale.y;aO(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=xt());const{target:x}=c;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(db(this.prevProjectionDelta.x,this.projectionDelta.x),db(this.prevProjectionDelta.y,this.projectionDelta.y)),Dl(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==y||!bb(this.projectionDelta.x,this.prevProjectionDelta.x)||!bb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Na(),this.projectionDelta=Na(),this.projectionDeltaWithTransform=Na()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=Na();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=xt(),x=d?d.source:void 0,b=this.layout?this.layout.source:void 0,S=x!==b,C=this.getStack(),T=!C||C.members.length<=1,M=!!(S&&!T&&this.options.crossfade===!0&&!this.path.some(JO));this.animationProgress=0;let A;this.mixTargetDelta=R=>{const k=R/1e3;Eb(g.x,c.x,k),Eb(g.y,c.y,k),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_l(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$O(this.relativeTarget,this.relativeTargetOrigin,y,k),A&&PO(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=xt()),ei(A,this.relativeTarget)),S&&(this.animationValues=p,RO(p,h,this.latestValues,k,M,T)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(tr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ft.update(()=>{mf.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ya(0)),this.currentAnimation=CO(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(HO),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&N4(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||xt();const g=un(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+g;const y=un(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+y}ei(u,d),Ia(u,p),Dl(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new NO),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Wp("z",c,h,this.animationValues);for(let p=0;p<Kp.length;p++)Wp(`rotate${Kp[p]}`,c,h,this.animationValues),Wp(`skew${Kp[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return IO;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=pf(c==null?void 0:c.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=pf(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Rr(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=BO(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:g,y}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,h.animationValues?u.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Ql){if(p[x]===void 0)continue;const{correct:b,applyTo:S,isCSSVariable:C}=Ql[x],T=u.transform==="none"?p[x]:b(p[x],h);if(S){const M=S.length;for(let A=0;A<M;A++)u[S[A]]=T}else C?this.options.visualElement.renderState.vars[x]=T:u[x]=T}return this.options.layoutId&&(u.pointerEvents=h===this?pf(c==null?void 0:c.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(wb),this.root.sharedNodes.clear()}}}function UO(t){t.updateLayout()}function qO(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:o}=t.options,c=e.source!==t.layout.source;o==="size"?ni(g=>{const y=c?e.measuredBox[g]:e.layoutBox[g],x=un(y);y.min=i[g].min,y.max=y.min+x}):N4(o,e.layoutBox,i)&&ni(g=>{const y=c?e.measuredBox[g]:e.layoutBox[g],x=un(i[g]);y.max=y.min+x,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[g].max=t.relativeTarget[g].min+x)});const u=Na();Dl(u,i,e.layoutBox);const d=Na();c?Dl(d,t.applyTransform(r,!0),e.measuredBox):Dl(d,i,e.layoutBox);const h=!_4(u);let p=!1;if(!t.resumeFrom){const g=t.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:y,layout:x}=g;if(y&&x){const b=xt();_l(b,e.layoutBox,y.layoutBox);const S=xt();_l(S,i,x.layoutBox),z4(b,S)||(p=!0),g.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=b,t.relativeParent=g)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function FO(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function GO(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function YO(t){t.clearSnapshot()}function wb(t){t.clearMeasurements()}function Sb(t){t.isLayoutDirty=!1}function XO(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Tb(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function QO(t){t.resolveTargetDelta()}function ZO(t){t.calcProjection()}function KO(t){t.resetSkewAndRotation()}function WO(t){t.removeLeadSnapshot()}function Eb(t,e,n){t.translate=ut(e.translate,0,n),t.scale=ut(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Cb(t,e,n,i){t.min=ut(e.min,n.min,i),t.max=ut(e.max,n.max,i)}function $O(t,e,n,i){Cb(t.x,e.x,n.x,i),Cb(t.y,e.y,n.y,i)}function JO(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ek={duration:.45,ease:[.4,0,.1,1]},Ab=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Mb=Ab("applewebkit/")&&!Ab("chrome/")?Math.round:ii;function Ob(t){t.min=Mb(t.min),t.max=Mb(t.max)}function tk(t){Ob(t.x),Ob(t.y)}function N4(t,e,n){return t==="position"||t==="preserve-aspect"&&!sO(xb(e),xb(n),.2)}function nk(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const ik=P4({attachResizeListener:(t,e)=>Kl(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$p={current:void 0},B4=P4({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!$p.current){const t=new ik({});t.mount(window),t.setOptions({layoutScroll:!0}),$p.current=t}return $p.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),sk={pan:{Feature:wO},drag:{Feature:bO,ProjectionNode:B4,MeasureLayout:R4}};function kb(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,o=i[r];o&&ft.postRender(()=>o(e,dc(e)))}class rk extends rr{mount(){const{current:e}=this.node;e&&(this.unmount=_9(e,(n,i)=>(kb(this.node,i,"Start"),r=>kb(this.node,r,"End"))))}unmount(){}}class ak extends rr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cc(Kl(this.node.current,"focus",()=>this.onFocus()),Kl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Rb(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),o=i[r];o&&ft.postRender(()=>o(e,dc(e)))}class ok extends rr{mount(){const{current:e}=this.node;e&&(this.unmount=N9(e,(n,i)=>(Rb(this.node,i,"Start"),(r,{success:o})=>Rb(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const xm=new WeakMap,Jp=new WeakMap,lk=t=>{const e=xm.get(t.target);e&&e(t)},ck=t=>{t.forEach(lk)};function uk({root:t,...e}){const n=t||document;Jp.has(n)||Jp.set(n,{});const i=Jp.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(ck,{root:t,...e})),i[r]}function fk(t,e,n){const i=uk(e);return xm.set(t,n),i.observe(t),()=>{xm.delete(t),i.unobserve(t)}}const dk={some:0,all:1};class hk extends rr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:o}=e,c={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:dk[r]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,o&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),y=h?p:g;y&&y(d)};return fk(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(pk(e,n))&&this.startObserver()}unmount(){}}function pk({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const mk={inView:{Feature:hk},tap:{Feature:ok},focus:{Feature:ak},hover:{Feature:rk}},gk={layout:{ProjectionNode:B4,MeasureLayout:R4}},bm={current:null},I4={current:!1};function yk(){if(I4.current=!0,!!fg)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>bm.current=t.matches;t.addListener(e),e()}else bm.current=!1}const vk=new WeakMap;function xk(t,e,n){for(const i in e){const r=e[i],o=n[i];if(nn(r))t.addValue(i,r);else if(nn(o))t.addValue(i,Ya(r,{owner:t}));else if(o!==r)if(t.hasValue(i)){const c=t.getValue(i);c.liveStyle===!0?c.jump(r):c.hasAnimated||c.set(r)}else{const c=t.getStaticValue(i);t.addValue(i,Ya(c!==void 0?c:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Lb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bk{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:o,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Og,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=En.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,ft.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=c;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=u,this.blockInitialAnimation=!!o,this.isControllingVariants=rd(n),this.isVariantNode=a4(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...g}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in g){const x=g[y];d[y]!==void 0&&nn(x)&&x.set(d[y],!1)}}mount(e){this.current=e,vk.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),I4.current||yk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),tr(this.notifyUpdate),tr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=lo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&ft.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Xa){const n=Xa[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Lb.length;i++){const r=Lb[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o="on"+r,c=e[o];c&&(this.propEventSubscriptions[r]=this.on(r,c))}this.prevMotionValues=xk(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ya(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(h3(i)||m3(i))?i=parseFloat(i):!H9(i)&&nr.test(n)&&(i=K3(e,n)),this.setBaseTarget(e,nn(i)?i.get():i)),nn(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var o;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const c=Vg(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);c&&(i=c[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!nn(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new gg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class H4 extends bk{constructor(){super(...arguments),this.KeyframeResolver=O9}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;nn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function V4(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}function wk(t){return window.getComputedStyle(t)}class Sk extends H4{constructor(){super(...arguments),this.type="html",this.renderInstance=V4}readValueFromInstance(e,n){var i;if(lo.has(n))return(i=this.projection)!=null&&i.isProjecting?om(n):XA(e,n);{const r=wk(e),o=(xg(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:n}){return A4(e,n)}build(e,n,i){Bg(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Ug(e,n,i)}}const U4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Tk(t,e,n,i){V4(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(U4.has(r)?r:Ng(r),e.attrs[r])}class Ek extends H4{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=xt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(lo.has(n)){const i=Z3(n);return i&&i.default||0}return n=U4.has(n)?n:Ng(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return g4(e,n,i)}build(e,n,i){d4(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){Tk(e,n,i,r)}mount(e){this.isSVGTag=p4(e.tagName),super.mount(e)}}const Ck=(t,e)=>Hg(t)?new Ek(e):new Sk(e,{allowProjection:t!==D.Fragment}),Ak=EM({...KM,...mk,...sk,...gk},Ck),Y=Z9(Ak);var Cn=function(){return Cn=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Cn.apply(this,arguments)};function Wl(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var it="-ms-",zl="-moz-",Fe="-webkit-",q4="comm",ad="rule",Fg="decl",Mk="@import",F4="@keyframes",Ok="@layer",G4=Math.abs,Gg=String.fromCharCode,wm=Object.assign;function kk(t,e){return Nt(t,0)^45?(((e<<2^Nt(t,0))<<2^Nt(t,1))<<2^Nt(t,2))<<2^Nt(t,3):0}function Y4(t){return t.trim()}function ps(t,e){return(t=e.exec(t))?t[0]:t}function Oe(t,e,n){return t.replace(e,n)}function gf(t,e,n){return t.indexOf(e,n)}function Nt(t,e){return t.charCodeAt(e)|0}function Qa(t,e,n){return t.slice(e,n)}function Pi(t){return t.length}function X4(t){return t.length}function Ml(t,e){return e.push(t),t}function Rk(t,e){return t.map(e).join("")}function Db(t,e){return t.filter(function(n){return!ps(n,e)})}var od=1,Za=1,Q4=0,si=0,kt=0,co="";function ld(t,e,n,i,r,o,c,u){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:od,column:Za,length:c,return:"",siblings:u}}function Ws(t,e){return wm(ld("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ka(t){for(;t.root;)t=Ws(t.root,{children:[t]});Ml(t,t.siblings)}function Lk(){return kt}function Dk(){return kt=si>0?Nt(co,--si):0,Za--,kt===10&&(Za=1,od--),kt}function gi(){return kt=si<Q4?Nt(co,si++):0,Za++,kt===10&&(Za=1,od++),kt}function Pr(){return Nt(co,si)}function yf(){return si}function cd(t,e){return Qa(co,t,e)}function Sm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _k(t){return od=Za=1,Q4=Pi(co=t),si=0,[]}function zk(t){return co="",t}function e0(t){return Y4(cd(si-1,Tm(t===91?t+2:t===40?t+1:t)))}function jk(t){for(;(kt=Pr())&&kt<33;)gi();return Sm(t)>2||Sm(kt)>3?"":" "}function Pk(t,e){for(;--e&&gi()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return cd(t,yf()+(e<6&&Pr()==32&&gi()==32))}function Tm(t){for(;gi();)switch(kt){case t:return si;case 34:case 39:t!==34&&t!==39&&Tm(kt);break;case 40:t===41&&Tm(t);break;case 92:gi();break}return si}function Nk(t,e){for(;gi()&&t+kt!==57;)if(t+kt===84&&Pr()===47)break;return"/*"+cd(e,si-1)+"*"+Gg(t===47?t:gi())}function Bk(t){for(;!Sm(Pr());)gi();return cd(t,si)}function Ik(t){return zk(vf("",null,null,null,[""],t=_k(t),0,[0],t))}function vf(t,e,n,i,r,o,c,u,d){for(var h=0,p=0,g=c,y=0,x=0,b=0,S=1,C=1,T=1,M=0,A="",R=r,k=o,P=i,L=A;C;)switch(b=M,M=gi()){case 40:if(b!=108&&Nt(L,g-1)==58){gf(L+=Oe(e0(M),"&","&\f"),"&\f",G4(h?u[h-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:L+=e0(M);break;case 9:case 10:case 13:case 32:L+=jk(b);break;case 92:L+=Pk(yf()-1,7);continue;case 47:switch(Pr()){case 42:case 47:Ml(Hk(Nk(gi(),yf()),e,n,d),d);break;default:L+="/"}break;case 123*S:u[h++]=Pi(L)*T;case 125*S:case 59:case 0:switch(M){case 0:case 125:C=0;case 59+p:T==-1&&(L=Oe(L,/\f/g,"")),x>0&&Pi(L)-g&&Ml(x>32?zb(L+";",i,n,g-1,d):zb(Oe(L," ","")+";",i,n,g-2,d),d);break;case 59:L+=";";default:if(Ml(P=_b(L,e,n,h,p,r,u,A,R=[],k=[],g,o),o),M===123)if(p===0)vf(L,e,P,P,R,o,g,u,k);else switch(y===99&&Nt(L,3)===110?100:y){case 100:case 108:case 109:case 115:vf(t,P,P,i&&Ml(_b(t,P,P,0,0,r,u,A,r,R=[],g,k),k),r,k,g,u,i?R:k);break;default:vf(L,P,P,P,[""],k,0,u,k)}}h=p=x=0,S=T=1,A=L="",g=c;break;case 58:g=1+Pi(L),x=b;default:if(S<1){if(M==123)--S;else if(M==125&&S++==0&&Dk()==125)continue}switch(L+=Gg(M),M*S){case 38:T=p>0?1:(L+="\f",-1);break;case 44:u[h++]=(Pi(L)-1)*T,T=1;break;case 64:Pr()===45&&(L+=e0(gi())),y=Pr(),p=g=Pi(A=L+=Bk(yf())),M++;break;case 45:b===45&&Pi(L)==2&&(S=0)}}return o}function _b(t,e,n,i,r,o,c,u,d,h,p,g){for(var y=r-1,x=r===0?o:[""],b=X4(x),S=0,C=0,T=0;S<i;++S)for(var M=0,A=Qa(t,y+1,y=G4(C=c[S])),R=t;M<b;++M)(R=Y4(C>0?x[M]+" "+A:Oe(A,/&\f/g,x[M])))&&(d[T++]=R);return ld(t,e,n,r===0?ad:u,d,h,p,g)}function Hk(t,e,n,i){return ld(t,e,n,q4,Gg(Lk()),Qa(t,2,-2),0,i)}function zb(t,e,n,i,r){return ld(t,e,n,Fg,Qa(t,0,i),Qa(t,i+1,-1),i,r)}function Z4(t,e,n){switch(kk(t,e)){case 5103:return Fe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+t+t;case 4789:return zl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+t+zl+t+it+t+t;case 5936:switch(Nt(t,e+11)){case 114:return Fe+t+it+Oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Fe+t+it+Oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Fe+t+it+Oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Fe+t+it+t+t;case 6165:return Fe+t+it+"flex-"+t+t;case 5187:return Fe+t+Oe(t,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+it+"flex-$1$2")+t;case 5443:return Fe+t+it+"flex-item-"+Oe(t,/flex-|-self/g,"")+(ps(t,/flex-|baseline/)?"":it+"grid-row-"+Oe(t,/flex-|-self/g,""))+t;case 4675:return Fe+t+it+"flex-line-pack"+Oe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Fe+t+it+Oe(t,"shrink","negative")+t;case 5292:return Fe+t+it+Oe(t,"basis","preferred-size")+t;case 6060:return Fe+"box-"+Oe(t,"-grow","")+Fe+t+it+Oe(t,"grow","positive")+t;case 4554:return Fe+Oe(t,/([^-])(transform)/g,"$1"+Fe+"$2")+t;case 6187:return Oe(Oe(Oe(t,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),t,"")+t;case 5495:case 3959:return Oe(t,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Oe(Oe(t,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+t+t;case 4200:if(!ps(t,/flex-|baseline/))return it+"grid-column-align"+Qa(t,e)+t;break;case 2592:case 3360:return it+Oe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,ps(i.props,/grid-\w+-end/)})?~gf(t+(n=n[e].value),"span",0)?t:it+Oe(t,"-start","")+t+it+"grid-row-span:"+(~gf(n,"span",0)?ps(n,/\d+/):+ps(n,/\d+/)-+ps(t,/\d+/))+";":it+Oe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return ps(i.props,/grid-\w+-start/)})?t:it+Oe(Oe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Oe(t,/(.+)-inline(.+)/,Fe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pi(t)-1-e>6)switch(Nt(t,e+1)){case 109:if(Nt(t,e+4)!==45)break;case 102:return Oe(t,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+zl+(Nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~gf(t,"stretch",0)?Z4(Oe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Oe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,c,u,d,h){return it+r+":"+o+h+(c?it+r+"-span:"+(u?d:+d-+o)+h:"")+t});case 4949:if(Nt(t,e+6)===121)return Oe(t,":",":"+Fe)+t;break;case 6444:switch(Nt(t,Nt(t,14)===45?18:11)){case 120:return Oe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(Nt(t,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+it+"$2box$3")+t;case 100:return Oe(t,":",":"+it)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(t,"scroll-","scroll-snap-")+t}return t}function zf(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function Vk(t,e,n,i){switch(t.type){case Ok:if(t.children.length)break;case Mk:case Fg:return t.return=t.return||t.value;case q4:return"";case F4:return t.return=t.value+"{"+zf(t.children,i)+"}";case ad:if(!Pi(t.value=t.props.join(",")))return""}return Pi(n=zf(t.children,i))?t.return=t.value+"{"+n+"}":""}function Uk(t){var e=X4(t);return function(n,i,r,o){for(var c="",u=0;u<e;u++)c+=t[u](n,i,r,o)||"";return c}}function qk(t){return function(e){e.root||(e=e.return)&&t(e)}}function Fk(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case Fg:t.return=Z4(t.value,t.length,n);return;case F4:return zf([Ws(t,{value:Oe(t.value,"@","@"+Fe)})],i);case ad:if(t.length)return Rk(n=t.props,function(r){switch(ps(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ka(Ws(t,{props:[Oe(r,/:(read-\w+)/,":"+zl+"$1")]})),ka(Ws(t,{props:[r]})),wm(t,{props:Db(n,i)});break;case"::placeholder":ka(Ws(t,{props:[Oe(r,/:(plac\w+)/,":"+Fe+"input-$1")]})),ka(Ws(t,{props:[Oe(r,/:(plac\w+)/,":"+zl+"$1")]})),ka(Ws(t,{props:[Oe(r,/:(plac\w+)/,it+"input-$1")]})),ka(Ws(t,{props:[r]})),wm(t,{props:Db(n,i)});break}return""})}}var Gk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bn={},Ka=typeof process<"u"&&Bn!==void 0&&(Bn.REACT_APP_SC_ATTR||Bn.SC_ATTR)||"data-styled",K4="active",W4="data-styled-version",ud="6.1.19",Yg=`/*!sc*/
`,jf=typeof window<"u"&&typeof document<"u",Yk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bn!==void 0&&Bn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bn.REACT_APP_SC_DISABLE_SPEEDY!==""?Bn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bn!==void 0&&Bn.SC_DISABLE_SPEEDY!==void 0&&Bn.SC_DISABLE_SPEEDY!==""&&Bn.SC_DISABLE_SPEEDY!=="false"&&Bn.SC_DISABLE_SPEEDY),fd=Object.freeze([]),Wa=Object.freeze({});function Xk(t,e,n){return n===void 0&&(n=Wa),t.theme!==n.theme&&t.theme||e||n.theme}var $4=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zk=/(^-|-$)/g;function jb(t){return t.replace(Qk,"-").replace(Zk,"")}var Kk=/(a)(d)/gi,ju=52,Pb=function(t){return String.fromCharCode(t+(t>25?39:97))};function Em(t){var e,n="";for(e=Math.abs(t);e>ju;e=e/ju|0)n=Pb(e%ju)+n;return(Pb(e%ju)+n).replace(Kk,"$1-$2")}var t0,J4=5381,Ha=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},eS=function(t){return Ha(J4,t)};function tS(t){return Em(eS(t)>>>0)}function Wk(t){return t.displayName||t.name||"Component"}function n0(t){return typeof t=="string"&&!0}var nS=typeof Symbol=="function"&&Symbol.for,iS=nS?Symbol.for("react.memo"):60115,$k=nS?Symbol.for("react.forward_ref"):60112,Jk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tR=((t0={})[$k]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},t0[iS]=sS,t0);function Nb(t){return("type"in(e=t)&&e.type.$$typeof)===iS?sS:"$$typeof"in t?tR[t.$$typeof]:Jk;var e}var nR=Object.defineProperty,iR=Object.getOwnPropertyNames,Bb=Object.getOwnPropertySymbols,sR=Object.getOwnPropertyDescriptor,rR=Object.getPrototypeOf,Ib=Object.prototype;function rS(t,e,n){if(typeof e!="string"){if(Ib){var i=rR(e);i&&i!==Ib&&rS(t,i,n)}var r=iR(e);Bb&&(r=r.concat(Bb(e)));for(var o=Nb(t),c=Nb(e),u=0;u<r.length;++u){var d=r[u];if(!(d in eR||n&&n[d]||c&&d in c||o&&d in o)){var h=sR(e,d);try{nR(t,d,h)}catch{}}}}return t}function $a(t){return typeof t=="function"}function Xg(t){return typeof t=="object"&&"styledComponentId"in t}function _r(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Cm(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function $l(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Am(t,e,n){if(n===void 0&&(n=!1),!n&&!$l(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Am(t[i],e[i]);else if($l(e))for(var i in e)t[i]=Am(t[i],e[i]);return t}function Qg(t,e){Object.defineProperty(t,"toString",{value:e})}function hc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var aR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw hc(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var c=r;c<o;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(e+1),d=(c=0,n.length);c<d;c++)this.tag.insertRule(u,n[c])&&(this.groupSizes[e]++,u++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,c=r;c<o;c++)n+="".concat(this.tag.getRule(c)).concat(Yg);return n},t}(),xf=new Map,Pf=new Map,bf=1,Pu=function(t){if(xf.has(t))return xf.get(t);for(;Pf.has(bf);)bf++;var e=bf++;return xf.set(t,e),Pf.set(e,t),e},oR=function(t,e){bf=e+1,xf.set(t,e),Pf.set(e,t)},lR="style[".concat(Ka,"][").concat(W4,'="').concat(ud,'"]'),cR=new RegExp("^".concat(Ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uR=function(t,e,n){for(var i,r=n.split(","),o=0,c=r.length;o<c;o++)(i=r[o])&&t.registerName(e,i)},fR=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Yg),r=[],o=0,c=i.length;o<c;o++){var u=i[o].trim();if(u){var d=u.match(cR);if(d){var h=0|parseInt(d[1],10),p=d[2];h!==0&&(oR(p,h),uR(t,p,d[3]),t.getTag().insertRules(h,r)),r.length=0}else r.push(u)}}},Hb=function(t){for(var e=document.querySelectorAll(lR),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(Ka)!==K4&&(fR(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function dR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aS=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(u){var d=Array.from(u.querySelectorAll("style[".concat(Ka,"]")));return d[d.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(Ka,K4),i.setAttribute(W4,ud);var c=dR();return c&&i.setAttribute("nonce",c),n.insertBefore(i,o),i},hR=function(){function t(e){this.element=aS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var c=i[r];if(c.ownerNode===n)return c}throw hc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),pR=function(){function t(e){this.element=aS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),mR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Vb=jf,gR={isServer:!jf,useCSSOMInjection:!Yk},oS=function(){function t(e,n,i){e===void 0&&(e=Wa),n===void 0&&(n={});var r=this;this.options=Cn(Cn({},gR),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&jf&&Vb&&(Vb=!1,Hb(this)),Qg(this,function(){return function(o){for(var c=o.getTag(),u=c.length,d="",h=function(g){var y=function(T){return Pf.get(T)}(g);if(y===void 0)return"continue";var x=o.names.get(y),b=c.getGroup(g);if(x===void 0||!x.size||b.length===0)return"continue";var S="".concat(Ka,".g").concat(g,'[id="').concat(y,'"]'),C="";x!==void 0&&x.forEach(function(T){T.length>0&&(C+="".concat(T,","))}),d+="".concat(b).concat(S,'{content:"').concat(C,'"}').concat(Yg)},p=0;p<u;p++)h(p);return d}(r)})}return t.registerId=function(e){return Pu(e)},t.prototype.rehydrate=function(){!this.server&&jf&&Hb(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Cn(Cn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new mR(r):i?new hR(r):new pR(r)}(this.options),new aR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Pu(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Pu(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),yR=/&/g,vR=/^\s*\/\/.*$/gm;function lS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lS(n.children,e)),n})}function xR(t){var e,n,i,r=Wa,o=r.options,c=o===void 0?Wa:o,u=r.plugins,d=u===void 0?fd:u,h=function(y,x,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(e):y},p=d.slice();p.push(function(y){y.type===ad&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(yR,n).replace(i,h))}),c.prefix&&p.push(Fk),p.push(Vk);var g=function(y,x,b,S){x===void 0&&(x=""),b===void 0&&(b=""),S===void 0&&(S="&"),e=S,n=x,i=new RegExp("\\".concat(n,"\\b"),"g");var C=y.replace(vR,""),T=Ik(b||x?"".concat(b," ").concat(x," { ").concat(C," }"):C);c.namespace&&(T=lS(T,c.namespace));var M=[];return zf(T,Uk(p.concat(qk(function(A){return M.push(A)})))),M};return g.hash=d.length?d.reduce(function(y,x){return x.name||hc(15),Ha(y,x.name)},J4).toString():"",g}var bR=new oS,Mm=xR(),cS=Qe.createContext({shouldForwardProp:void 0,styleSheet:bR,stylis:Mm});cS.Consumer;Qe.createContext(void 0);function Ub(){return D.useContext(cS)}var uS=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Mm);var c=i.name+o.hash;r.hasNameForId(i.id,c)||r.insertRules(i.id,c,o(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Qg(this,function(){throw hc(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Mm),this.name+e.hash},t}(),wR=function(t){return t>="A"&&t<="Z"};function qb(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;wR(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var fS=function(t){return t==null||t===!1||t===""},dS=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!fS(o)&&(Array.isArray(o)&&o.isCss||$a(o)?i.push("".concat(qb(r),":"),o,";"):$l(o)?i.push.apply(i,Wl(Wl(["".concat(r," {")],dS(o),!1),["}"],!1)):i.push("".concat(qb(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Gk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Nr(t,e,n,i){if(fS(t))return[];if(Xg(t))return[".".concat(t.styledComponentId)];if($a(t)){if(!$a(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return Nr(r,e,n,i)}var o;return t instanceof uS?n?(t.inject(n,i),[t.getName(i)]):[t]:$l(t)?dS(t):Array.isArray(t)?Array.prototype.concat.apply(fd,t.map(function(c){return Nr(c,e,n,i)})):[t.toString()]}function SR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if($a(n)&&!Xg(n))return!1}return!0}var TR=eS(ud),ER=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&SR(e),this.componentId=n,this.baseHash=Ha(TR,n),this.baseStyle=i,oS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=_r(r,this.staticRulesId);else{var o=Cm(Nr(this.rules,e,n,i)),c=Em(Ha(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,c)){var u=i(o,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,u)}r=_r(r,c),this.staticRulesId=c}else{for(var d=Ha(this.baseHash,i.hash),h="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")h+=g;else if(g){var y=Cm(Nr(g,e,n,i));d=Ha(d,y+p),h+=y}}if(h){var x=Em(d>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,i(h,".".concat(x),void 0,this.componentId)),r=_r(r,x)}}return r},t}(),hS=Qe.createContext(void 0);hS.Consumer;var i0={};function CR(t,e,n){var i=Xg(t),r=t,o=!n0(t),c=e.attrs,u=c===void 0?fd:c,d=e.componentId,h=d===void 0?function(R,k){var P=typeof R!="string"?"sc":jb(R);i0[P]=(i0[P]||0)+1;var L="".concat(P,"-").concat(tS(ud+P+i0[P]));return k?"".concat(k,"-").concat(L):L}(e.displayName,e.parentComponentId):d,p=e.displayName,g=p===void 0?function(R){return n0(R)?"styled.".concat(R):"Styled(".concat(Wk(R),")")}(t):p,y=e.displayName&&e.componentId?"".concat(jb(e.displayName),"-").concat(e.componentId):e.componentId||h,x=i&&r.attrs?r.attrs.concat(u).filter(Boolean):u,b=e.shouldForwardProp;if(i&&r.shouldForwardProp){var S=r.shouldForwardProp;if(e.shouldForwardProp){var C=e.shouldForwardProp;b=function(R,k){return S(R,k)&&C(R,k)}}else b=S}var T=new ER(n,y,i?r.componentStyle:void 0);function M(R,k){return function(P,L,I){var V=P.attrs,F=P.componentStyle,N=P.defaultProps,z=P.foldedComponentIds,te=P.styledComponentId,$=P.target,ce=Qe.useContext(hS),U=Ub(),J=P.shouldForwardProp||U.shouldForwardProp,ee=Xk(L,ce,N)||Wa,ae=function(de,he,we){for(var fe,Ee=Cn(Cn({},he),{className:void 0,theme:we}),$e=0;$e<de.length;$e+=1){var Je=$a(fe=de[$e])?fe(Ee):fe;for(var Be in Je)Ee[Be]=Be==="className"?_r(Ee[Be],Je[Be]):Be==="style"?Cn(Cn({},Ee[Be]),Je[Be]):Je[Be]}return he.className&&(Ee.className=_r(Ee.className,he.className)),Ee}(V,L,ee),_=ae.as||$,Z={};for(var oe in ae)ae[oe]===void 0||oe[0]==="$"||oe==="as"||oe==="theme"&&ae.theme===ee||(oe==="forwardedAs"?Z.as=ae.forwardedAs:J&&!J(oe,_)||(Z[oe]=ae[oe]));var se=function(de,he){var we=Ub(),fe=de.generateAndInjectStyles(he,we.styleSheet,we.stylis);return fe}(F,ae),ue=_r(z,te);return se&&(ue+=" "+se),ae.className&&(ue+=" "+ae.className),Z[n0(_)&&!$4.has(_)?"class":"className"]=ue,I&&(Z.ref=I),D.createElement(_,Z)}(A,R,k)}M.displayName=g;var A=Qe.forwardRef(M);return A.attrs=x,A.componentStyle=T,A.displayName=g,A.shouldForwardProp=b,A.foldedComponentIds=i?_r(r.foldedComponentIds,r.styledComponentId):"",A.styledComponentId=y,A.target=i?r.target:t,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=i?function(k){for(var P=[],L=1;L<arguments.length;L++)P[L-1]=arguments[L];for(var I=0,V=P;I<V.length;I++)Am(k,V[I],!0);return k}({},r.defaultProps,R):R}}),Qg(A,function(){return".".concat(A.styledComponentId)}),o&&rS(A,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Fb(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Gb=function(t){return Object.assign(t,{isCss:!0})};function jl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if($a(t)||$l(t))return Gb(Nr(Fb(fd,Wl([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Nr(i):Gb(Nr(Fb(i,e)))}function Om(t,e,n){if(n===void 0&&(n=Wa),!e)throw hc(1,e);var i=function(r){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return t(e,n,jl.apply(void 0,Wl([r],o,!1)))};return i.attrs=function(r){return Om(t,e,Cn(Cn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Om(t,e,Cn(Cn({},n),r))},i}var pS=function(t){return Om(CR,t)},j=pS;$4.forEach(function(t){j[t]=pS(t)});function uo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=Cm(jl.apply(void 0,Wl([t],e,!1))),r=tS(i);return new uS(r,i)}const AR=j.div`
  position: relative;
  cursor: pointer;
   color: #808080;
      font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
text-align: center;
display: flex;
     &:hover,
    &.active {
    color: var(--purple-400);
    }
`,MR=j.img`

`,OR=j.div`
  position: absolute;
 right: -112px;
    top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.98);
  padding: 10px 0;
  min-width: 250px;
  z-index: 1000;
backdrop-filter: blur(168px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 186%) , rgb(0, 0, 0);

`,kr=j.div`
  padding: 8px 20px;
  transition: background-color 0.2s;

  &:hover {
  color: var(--purple-400);
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    display: block;
  }
`,kR=j.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(16px);
  padding: 1rem ;
  position: fixed;
  top: 0;
  left: 0;
 width: 100%;
 
  margin: 0 auto;
  transition: all 0.3s ease;
  z-index: 99;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 768px;
  }
    @media screen and (min-width: 1440px){
    width: 100%;
margin: 0 auto;
}

  &:hover,
  &:focus,
  &.active {
  
    transition: all 0.4s ease-in-out;
  }
`,RR=j.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;
`,LR=j.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    width: auto;

    div{
    display: flex;
    }
  }
`,DR=j.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 24px;
    padding: 12px 20px;
    width: auto;
    height: 42px;
    backdrop-filter: blur(16px);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.03), 
                0 2px 4px -2px rgba(0, 0, 0, 0.08), 
                inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
                inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%), 
                rgba(255, 255, 255, 0.03);
display: flex;
align-items: baseline;
  }
`,_R=j(ng)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d1ff;
  text-decoration: none;
  z-index: 10;
  img {
 width: 142px;
height: auto;
  overflov: hidden;

  
  &:hover,
  &:focus,
  &.active {
    color: #00ffe7;
    fill: #00ffe7;
  }
    }
`,yl=j.li`
color:rgb(49, 46, 46);

  a {
    text-decoration: none;
   color: #808080;
   font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
text-align: center;
    transition: color 0.3s ease;

    &:hover,
    &.active {
    color: var(--purple-400);
    }
  }
`,hi=j(ng)`
  text-decoration: none;
font-family: var(--font-family);
font-weight: 500;
font-size: 56px;
line-height: 100%;
color: var(--white-50);
  transition: all 0.4s ease-in-out;
  position: relative;

    color: #808080;
  cursor: pointer;

  transition: all 0.4s ease-in-out;
  position: relative;

  &:hover {
     color: var(--purple-400);
  }

  &::bevore {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #808080;
    transition: width 0.3s ease-in-out;
  }

  &.active {
   color:rgb(255, 255, 255);
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
     color: var(--purple-400);
  }
`;var Nu={},Yb;function zR(){if(Yb)return Nu;Yb=1,Nu.match=o,Nu.parse=c;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,e=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,r=/(dpi|dpcm|dppx)?$/;function o(p,g){return c(p).some(function(y){var x=y.inverse,b=y.type==="all"||g.type===y.type;if(b&&x||!(b||x))return!1;var S=y.expressions.every(function(C){var T=C.feature,M=C.modifier,A=C.value,R=g[T];if(!R)return!1;switch(T){case"orientation":case"scan":return R.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=h(A),R=h(R);break;case"resolution":A=d(A),R=d(R);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=u(A),R=u(R);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,R=parseInt(R,10)||0;break}switch(M){case"min":return R>=A;case"max":return R<=A;default:return R===A}});return S&&!x||!S&&x})}function c(p){return p.split(",").map(function(g){g=g.trim();var y=g.match(t),x=y[1],b=y[2],S=y[3]||"",C={};return C.inverse=!!x&&x.toLowerCase()==="not",C.type=b?b.toLowerCase():"all",S=S.match(/\([^\)]+\)/g)||[],C.expressions=S.map(function(T){var M=T.match(e),A=M[1].toLowerCase().match(n);return{modifier:A[1],feature:A[2],value:M[2]}}),C})}function u(p){var g=Number(p),y;return g||(y=p.match(/^(\d+)\s*\/\s*(\d+)$/),g=y[1]/y[2]),g}function d(p){var g=parseFloat(p),y=String(p).match(r)[1];switch(y){case"dpcm":return g/2.54;case"dppx":return g*96;default:return g}}function h(p){var g=parseFloat(p),y=String(p).match(i)[1];switch(y){case"em":return g*16;case"rem":return g*16;case"cm":return g*96/2.54;case"mm":return g*96/2.54/10;case"in":return g*96;case"pt":return g*72;case"pc":return g*72/12;default:return g}}return Nu}var s0,Xb;function jR(){if(Xb)return s0;Xb=1;var t=zR().match,e=typeof window<"u"?window.matchMedia:null;function n(r,o,c){var u=this,d;e&&!c&&(d=e.call(window,r)),d?(this.matches=d.matches,this.media=d.media,d.addListener(g)):(this.matches=t(r,o),this.media=r),this.addListener=h,this.removeListener=p,this.dispose=y;function h(x){d&&d.addListener(x)}function p(x){d&&d.removeListener(x)}function g(x){u.matches=x.matches,u.media=x.media}function y(){d&&d.removeListener(g)}}function i(r,o,c){return new n(r,o,c)}return s0=i,s0}var PR=jR();const NR=rc(PR);var BR=/[A-Z]/g,IR=/^ms-/,r0={};function HR(t){return"-"+t.toLowerCase()}function mS(t){if(r0.hasOwnProperty(t))return r0[t];var e=t.replace(BR,HR);return r0[t]=IR.test(e)?"-"+e:e}function VR(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=Object.keys(t),i=Object.keys(e),r=n.length;if(i.length!==r)return!1;for(let o=0;o<r;o++){const c=n[o];if(t[c]!==e[c]||!Object.prototype.hasOwnProperty.call(e,c))return!1}return!0}var a0={exports:{}},o0,Qb;function UR(){if(Qb)return o0;Qb=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return o0=t,o0}var l0,Zb;function qR(){if(Zb)return l0;Zb=1;var t=UR();function e(){}function n(){}return n.resetWarningCache=e,l0=function(){function i(c,u,d,h,p,g){if(g!==t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}i.isRequired=i;function r(){return i}var o={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},l0}var Kb;function pc(){return Kb||(Kb=1,a0.exports=qR()()),a0.exports}var FR=pc();const Ue=rc(FR),cn=Ue.oneOfType([Ue.string,Ue.number]),gS={all:Ue.bool,grid:Ue.bool,aural:Ue.bool,braille:Ue.bool,handheld:Ue.bool,print:Ue.bool,projection:Ue.bool,screen:Ue.bool,tty:Ue.bool,tv:Ue.bool,embossed:Ue.bool},GR={orientation:Ue.oneOf(["portrait","landscape"]),scan:Ue.oneOf(["progressive","interlace"]),aspectRatio:Ue.string,deviceAspectRatio:Ue.string,height:cn,deviceHeight:cn,width:cn,deviceWidth:cn,color:Ue.bool,colorIndex:Ue.bool,monochrome:Ue.bool,resolution:cn,type:Object.keys(gS)},{type:uF,...YR}=GR,XR={minAspectRatio:Ue.string,maxAspectRatio:Ue.string,minDeviceAspectRatio:Ue.string,maxDeviceAspectRatio:Ue.string,minHeight:cn,maxHeight:cn,minDeviceHeight:cn,maxDeviceHeight:cn,minWidth:cn,maxWidth:cn,minDeviceWidth:cn,maxDeviceWidth:cn,minColor:Ue.number,maxColor:Ue.number,minColorIndex:Ue.number,maxColorIndex:Ue.number,minMonochrome:Ue.number,maxMonochrome:Ue.number,minResolution:cn,maxResolution:cn,...YR},QR={...gS,...XR};var ZR={all:QR};const KR=t=>`not ${t}`,WR=(t,e)=>{const n=mS(t);return typeof e=="number"&&(e=`${e}px`),e===!0?n:e===!1?KR(n):`(${n}: ${e})`},$R=t=>t.join(" and "),JR=t=>{const e=[];return Object.keys(ZR.all).forEach(n=>{const i=t[n];i!=null&&e.push(WR(n,i))}),$R(e)},eL=D.createContext(void 0),tL=t=>t.query||JR(t),Wb=t=>t?Object.keys(t).reduce((n,i)=>(n[mS(i)]=t[i],n),{}):void 0,yS=()=>{const t=D.useRef(!1);return D.useEffect(()=>{t.current=!0},[]),t.current},nL=t=>{const e=D.useContext(eL),n=()=>Wb(t)||Wb(e),[i,r]=D.useState(n);return D.useEffect(()=>{const o=n();VR(i,o)||r(o)},[t,e]),i},iL=t=>{const e=()=>tL(t),[n,i]=D.useState(e);return D.useEffect(()=>{const r=e();n!==r&&i(r)},[t]),n},sL=(t,e)=>{const n=()=>NR(t,e||{},!!e),[i,r]=D.useState(n),o=yS();return D.useEffect(()=>{if(o){const c=n();return r(c),()=>{c&&c.dispose()}}},[t,e]),i},rL=t=>{const[e,n]=D.useState(t.matches);return D.useEffect(()=>{const i=r=>{n(r.matches)};return t.addListener(i),n(t.matches),()=>{t.removeListener(i)}},[t]),e},yi=(t,e,n)=>{const i=nL(e),r=iL(t);if(!r)throw new Error("Invalid or missing MediaQuery!");const o=sL(r,i),c=rL(o);return yS(),D.useEffect(()=>{},[c]),D.useEffect(()=>()=>{o&&o.dispose()},[]),c};var wf={exports:{}},aL=wf.exports,$b;function oL(){return $b||($b=1,function(t,e){(function(n,i){t.exports=i()})(aL,function(){return function(n){function i(o){if(r[o])return r[o].exports;var c=r[o]={exports:{},id:o,loaded:!1};return n[o].call(c.exports,c,c.exports,i),c.loaded=!0,c.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function o($){return $&&$.__esModule?$:{default:$}}var c=Object.assign||function($){for(var ce=1;ce<arguments.length;ce++){var U=arguments[ce];for(var J in U)Object.prototype.hasOwnProperty.call(U,J)&&($[J]=U[J])}return $},u=r(1),d=(o(u),r(6)),h=o(d),p=r(7),g=o(p),y=r(8),x=o(y),b=r(9),S=o(b),C=r(10),T=o(C),M=r(11),A=o(M),R=r(14),k=o(R),P=[],L=!1,I={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},V=function(){var $=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if($&&(L=!0),L)return P=(0,A.default)(P,I),(0,T.default)(P,I.once),P},F=function(){P=(0,k.default)(),V()},N=function(){P.forEach(function($,ce){$.node.removeAttribute("data-aos"),$.node.removeAttribute("data-aos-easing"),$.node.removeAttribute("data-aos-duration"),$.node.removeAttribute("data-aos-delay")})},z=function($){return $===!0||$==="mobile"&&S.default.mobile()||$==="phone"&&S.default.phone()||$==="tablet"&&S.default.tablet()||typeof $=="function"&&$()===!0},te=function($){I=c(I,$),P=(0,k.default)();var ce=document.all&&!window.atob;return z(I.disable)||ce?N():(I.disableMutationObserver||x.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),I.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",I.easing),document.querySelector("body").setAttribute("data-aos-duration",I.duration),document.querySelector("body").setAttribute("data-aos-delay",I.delay),I.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?V(!0):I.startEvent==="load"?window.addEventListener(I.startEvent,function(){V(!0)}):document.addEventListener(I.startEvent,function(){V(!0)}),window.addEventListener("resize",(0,g.default)(V,I.debounceDelay,!0)),window.addEventListener("orientationchange",(0,g.default)(V,I.debounceDelay,!0)),window.addEventListener("scroll",(0,h.default)(function(){(0,T.default)(P,I.once)},I.throttleDelay)),I.disableMutationObserver||x.default.ready("[data-aos]",F),P)};n.exports={init:te,refresh:V,refreshHard:F}},function(n,i){},,,,,function(n,i){(function(r){function o(z,te,$){function ce(Me){var wt=ue,mn=de;return ue=de=void 0,$e=Me,we=z.apply(mn,wt)}function U(Me){return $e=Me,fe=setTimeout(ae,te),Je?ce(Me):we}function J(Me){var wt=Me-Ee,mn=Me-$e,St=te-wt;return Be?F(St,he-mn):St}function ee(Me){var wt=Me-Ee,mn=Me-$e;return Ee===void 0||wt>=te||wt<0||Be&&mn>=he}function ae(){var Me=N();return ee(Me)?_(Me):void(fe=setTimeout(ae,J(Me)))}function _(Me){return fe=void 0,Pe&&ue?ce(Me):(ue=de=void 0,we)}function Z(){fe!==void 0&&clearTimeout(fe),$e=0,ue=Ee=de=fe=void 0}function oe(){return fe===void 0?we:_(N())}function se(){var Me=N(),wt=ee(Me);if(ue=arguments,de=this,Ee=Me,wt){if(fe===void 0)return U(Ee);if(Be)return fe=setTimeout(ae,te),ce(Ee)}return fe===void 0&&(fe=setTimeout(ae,te)),we}var ue,de,he,we,fe,Ee,$e=0,Je=!1,Be=!1,Pe=!0;if(typeof z!="function")throw new TypeError(y);return te=p(te)||0,u($)&&(Je=!!$.leading,Be="maxWait"in $,he=Be?V(p($.maxWait)||0,te):he,Pe="trailing"in $?!!$.trailing:Pe),se.cancel=Z,se.flush=oe,se}function c(z,te,$){var ce=!0,U=!0;if(typeof z!="function")throw new TypeError(y);return u($)&&(ce="leading"in $?!!$.leading:ce,U="trailing"in $?!!$.trailing:U),o(z,te,{leading:ce,maxWait:te,trailing:U})}function u(z){var te=typeof z>"u"?"undefined":g(z);return!!z&&(te=="object"||te=="function")}function d(z){return!!z&&(typeof z>"u"?"undefined":g(z))=="object"}function h(z){return(typeof z>"u"?"undefined":g(z))=="symbol"||d(z)&&I.call(z)==b}function p(z){if(typeof z=="number")return z;if(h(z))return x;if(u(z)){var te=typeof z.valueOf=="function"?z.valueOf():z;z=u(te)?te+"":te}if(typeof z!="string")return z===0?z:+z;z=z.replace(S,"");var $=T.test(z);return $||M.test(z)?A(z.slice(2),$?2:8):C.test(z)?x:+z}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},y="Expected a function",x=NaN,b="[object Symbol]",S=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,M=/^0o[0-7]+$/i,A=parseInt,R=(typeof r>"u"?"undefined":g(r))=="object"&&r&&r.Object===Object&&r,k=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,P=R||k||Function("return this")(),L=Object.prototype,I=L.toString,V=Math.max,F=Math.min,N=function(){return P.Date.now()};n.exports=c}).call(i,function(){return this}())},function(n,i){(function(r){function o(N,z,te){function $(Pe){var Me=se,wt=ue;return se=ue=void 0,Ee=Pe,he=N.apply(wt,Me)}function ce(Pe){return Ee=Pe,we=setTimeout(ee,z),$e?$(Pe):he}function U(Pe){var Me=Pe-fe,wt=Pe-Ee,mn=z-Me;return Je?V(mn,de-wt):mn}function J(Pe){var Me=Pe-fe,wt=Pe-Ee;return fe===void 0||Me>=z||Me<0||Je&&wt>=de}function ee(){var Pe=F();return J(Pe)?ae(Pe):void(we=setTimeout(ee,U(Pe)))}function ae(Pe){return we=void 0,Be&&se?$(Pe):(se=ue=void 0,he)}function _(){we!==void 0&&clearTimeout(we),Ee=0,se=fe=ue=we=void 0}function Z(){return we===void 0?he:ae(F())}function oe(){var Pe=F(),Me=J(Pe);if(se=arguments,ue=this,fe=Pe,Me){if(we===void 0)return ce(fe);if(Je)return we=setTimeout(ee,z),$(fe)}return we===void 0&&(we=setTimeout(ee,z)),he}var se,ue,de,he,we,fe,Ee=0,$e=!1,Je=!1,Be=!0;if(typeof N!="function")throw new TypeError(g);return z=h(z)||0,c(te)&&($e=!!te.leading,Je="maxWait"in te,de=Je?I(h(te.maxWait)||0,z):de,Be="trailing"in te?!!te.trailing:Be),oe.cancel=_,oe.flush=Z,oe}function c(N){var z=typeof N>"u"?"undefined":p(N);return!!N&&(z=="object"||z=="function")}function u(N){return!!N&&(typeof N>"u"?"undefined":p(N))=="object"}function d(N){return(typeof N>"u"?"undefined":p(N))=="symbol"||u(N)&&L.call(N)==x}function h(N){if(typeof N=="number")return N;if(d(N))return y;if(c(N)){var z=typeof N.valueOf=="function"?N.valueOf():N;N=c(z)?z+"":z}if(typeof N!="string")return N===0?N:+N;N=N.replace(b,"");var te=C.test(N);return te||T.test(N)?M(N.slice(2),te?2:8):S.test(N)?y:+N}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},g="Expected a function",y=NaN,x="[object Symbol]",b=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,T=/^0o[0-7]+$/i,M=parseInt,A=(typeof r>"u"?"undefined":p(r))=="object"&&r&&r.Object===Object&&r,R=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,k=A||R||Function("return this")(),P=Object.prototype,L=P.toString,I=Math.max,V=Math.min,F=function(){return k.Date.now()};n.exports=o}).call(i,function(){return this}())},function(n,i){function r(p){var g=void 0,y=void 0;for(g=0;g<p.length;g+=1)if(y=p[g],y.dataset&&y.dataset.aos||y.children&&r(y.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!o()}function u(p,g){var y=window.document,x=o(),b=new x(d);h=g,b.observe(y.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function d(p){p&&p.forEach(function(g){var y=Array.prototype.slice.call(g.addedNodes),x=Array.prototype.slice.call(g.removedNodes),b=y.concat(x);if(r(b))return h()})}Object.defineProperty(i,"__esModule",{value:!0});var h=function(){};i.default={isSupported:c,ready:u}},function(n,i){function r(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var c=function(){function y(x,b){for(var S=0;S<b.length;S++){var C=b[S];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(x,C.key,C)}}return function(x,b,S){return b&&y(x.prototype,b),S&&y(x,S),x}}(),u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=function(){function y(){r(this,y)}return c(y,[{key:"phone",value:function(){var x=o();return!(!u.test(x)&&!d.test(x.substr(0,4)))}},{key:"mobile",value:function(){var x=o();return!(!h.test(x)&&!p.test(x.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),y}();i.default=new g},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(c,u,d){var h=c.node.getAttribute("data-aos-once");u>c.position?c.node.classList.add("aos-animate"):typeof h<"u"&&(h==="false"||!d&&h!=="true")&&c.node.classList.remove("aos-animate")},o=function(c,u){var d=window.pageYOffset,h=window.innerHeight;c.forEach(function(p,g){r(p,h+d,u)})};i.default=o},function(n,i,r){function o(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(i,"__esModule",{value:!0});var c=r(12),u=o(c),d=function(h,p){return h.forEach(function(g,y){g.node.classList.add("aos-init"),g.position=(0,u.default)(g.node,p.offset)}),h};i.default=d},function(n,i,r){function o(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(i,"__esModule",{value:!0});var c=r(13),u=o(c),d=function(h,p){var g=0,y=0,x=window.innerHeight,b={offset:h.getAttribute("data-aos-offset"),anchor:h.getAttribute("data-aos-anchor"),anchorPlacement:h.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(y=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(h=document.querySelectorAll(b.anchor)[0]),g=(0,u.default)(h).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":g+=h.offsetHeight/2;break;case"bottom-bottom":g+=h.offsetHeight;break;case"top-center":g+=x/2;break;case"bottom-center":g+=x/2+h.offsetHeight;break;case"center-center":g+=x/2+h.offsetHeight/2;break;case"top-top":g+=x;break;case"bottom-top":g+=h.offsetHeight+x;break;case"center-top":g+=h.offsetHeight/2+x}return b.anchorPlacement||b.offset||isNaN(p)||(y=p),g+y};i.default=d},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o){for(var c=0,u=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)c+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),u+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:u,left:c}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(c){return{node:c}})};i.default=r}])})}(wf)),wf.exports}var lL=oL();const Jb=rc(lL),Zg="data:image/svg+xml,%3csvg%20width='142'%20height='20'%20viewBox='0%200%20142%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.9853%200.416314L17.735%200.416313L23.3877%209.62763H21.1187L16.6004%202.19579H14.647L18.8494%209.62763H12.087L6.43909%200.416314L8.7082%200.416314L13.2215%207.77694H15.3024L10.9853%200.416314Z'%20fill='white'/%3e%3cpath%20d='M8.70826%2015.8822L12.087%2010.3675H23.3877L22.2531%2012.2183H13.2216L12.0483%2014.0956L21.1185%2014.0689L17.7348%2019.5836H6.43909L7.57365%2017.7282H16.6002L17.7388%2015.8758L8.70826%2015.8822Z'%20fill='white'/%3e%3cpath%20d='M3.38373%2015.5119L0%209.99731L5.65284%200.786003L6.7874%202.63201L2.27407%209.99731L3.43012%2011.8823L7.92195%204.4875L11.3007%209.99742L5.65284%2019.2134L4.51831%2017.358L9.03159%209.99742L7.914%208.08984L3.38373%2015.5119Z'%20fill='white'/%3e%3cpath%20d='M37.17%207.91893C37.17%208.45507%2038.7516%208.52777%2040.7988%208.61864C44.4373%208.79141%2049.5506%209.02767%2049.541%2012.0903C49.541%2015.58%2045.2718%2016.4071%2040.6921%2016.4071C36.1221%2016.398%2032.3284%2015.88%2031.8433%2012.0903H37.17C37.7522%2013.0354%2039.1008%2013.2808%2040.6921%2013.2808C42.2737%2013.2808%2044.2142%2013.0354%2044.2142%2012.0903C44.2142%2011.5541%2042.6327%2011.4723%2040.5853%2011.3815C36.9469%2011.2088%2031.8335%2010.9724%2031.8433%207.91893C31.8433%204.42914%2036.1125%203.59301%2040.6921%203.59301C45.262%203.62027%2049.0557%204.102%2049.541%207.91893H44.2142C43.632%206.95558%2042.2833%206.7284%2040.6921%206.7284C39.1106%206.7284%2037.17%206.9465%2037.17%207.91893Z'%20fill='white'/%3e%3cpath%20d='M59.0498%207.44645L57.2548%2011.0545H60.835L59.0498%207.44645ZM49.0269%2016.1256L56.0225%203.91122H62.0672L69.0629%2016.1256H63.3383L62.3098%2014.0353H55.7799L54.7514%2016.1256H49.0269Z'%20fill='white'/%3e%3cpath%20d='M74.1463%2013.2174H80.9867C81.4233%2013.2174%2081.7823%2012.8085%2081.7823%2012.3995C81.7823%2011.9905%2081.4233%2011.5816%2080.9867%2011.5816H74.1463V13.2174ZM80.0359%206.8104H74.1463V8.45529H80.0359C80.4725%208.45529%2080.8315%208.03728%2080.8315%207.62836C80.8315%207.21933%2080.4725%206.8104%2080.0359%206.8104ZM84.0916%209.80938C85.566%2010.2548%2086.5557%2011.309%2086.5557%2012.8448C86.5853%2014.9805%2084.664%2016.1256%2082.4227%2016.1256H69.0618L69.0621%203.91128H81.4621C83.7228%203.90219%2085.6339%205.05637%2085.6054%207.18298C85.6054%208.35533%2085.0231%209.25507%2084.0916%209.80938Z'%20fill='white'/%3e%3cpath%20d='M92.4483%207.91893C92.4483%208.45507%2094.0304%208.52777%2096.0766%208.61864C99.7159%208.79141%20104.829%209.02767%20104.819%2012.0903C104.819%2015.58%20100.55%2016.4071%2095.9704%2016.4071C91.4006%2016.398%2087.607%2015.88%2087.122%2012.0903H92.4483C93.0308%2013.0354%2094.3796%2013.2808%2095.9704%2013.2808C97.5525%2013.2808%2099.4925%2013.0354%2099.4925%2012.0903C99.4925%2011.5541%2097.9105%2011.4723%2095.8631%2011.3815C92.225%2011.2088%2087.1121%2010.9724%2087.122%207.91893C87.122%204.42914%2091.3907%203.59301%2095.9704%203.59301C100.54%203.62027%20104.334%204.102%20104.819%207.91893H99.4925C98.9101%206.95558%2097.5612%206.7284%2095.9704%206.7284C94.3884%206.7284%2092.4483%206.9465%2092.4483%207.91893Z'%20fill='white'/%3e%3cpath%20d='M118.15%2010.1542V3.89251H123.244V10.4541C123.264%2015.0708%20119.227%2016.3976%20114.337%2016.4067C109.447%2016.3976%20105.41%2015.0708%20105.43%2010.4541V3.89251H110.515V10.1542C110.495%2012.1626%20112.251%2012.508%20114.337%2012.5353C116.414%2012.508%20118.18%2012.1626%20118.15%2010.1542Z'%20fill='white'/%3e%3cpath%20d='M129.629%207.91893C129.629%208.45507%20131.21%208.52777%20133.257%208.61864C136.895%208.79141%20142.009%209.02767%20141.999%2012.0903C141.999%2015.58%20137.731%2016.4071%20133.151%2016.4071C128.581%2016.398%20124.786%2015.88%20124.301%2012.0903H129.629C130.21%2013.0354%20131.559%2013.2808%20133.151%2013.2808C134.732%2013.2808%20136.673%2013.0354%20136.673%2012.0903C136.673%2011.5541%20135.091%2011.4723%20133.044%2011.3815C129.406%2011.2088%20124.292%2010.9724%20124.301%207.91893C124.301%204.42914%20128.571%203.59301%20133.151%203.59301C137.721%203.62027%20141.514%204.102%20141.999%207.91893H136.673C136.091%206.95558%20134.742%206.7284%20133.151%206.7284C131.569%206.7284%20129.629%206.9465%20129.629%207.91893Z'%20fill='white'/%3e%3c/svg%3e",cL=(t,e,n,i)=>{var o,c,u,d;const r=[n,{code:e,...i||{}}];if((c=(o=t==null?void 0:t.services)==null?void 0:o.logger)!=null&&c.forward)return t.services.logger.forward(r,"warn","react-i18next::",!0);Br(r[0])&&(r[0]=`react-i18next:: ${r[0]}`),(d=(u=t==null?void 0:t.services)==null?void 0:u.logger)!=null&&d.warn?t.services.logger.warn(...r):console!=null&&console.warn&&console.warn(...r)},ew={},km=(t,e,n,i)=>{Br(n)&&ew[n]||(Br(n)&&(ew[n]=new Date),cL(t,e,n,i))},vS=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Rm=(t,e,n)=>{t.loadNamespaces(e,vS(t,n))},tw=(t,e,n,i)=>{if(Br(n)&&(n=[n]),t.options.preload&&t.options.preload.indexOf(e)>-1)return Rm(t,n,i);n.forEach(r=>{t.options.ns.indexOf(r)<0&&t.options.ns.push(r)}),t.loadLanguages(e,vS(t,i))},uL=(t,e,n={})=>!e.languages||!e.languages.length?(km(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,r)=>{var o;if(((o=n.bindI18n)==null?void 0:o.indexOf("languageChanging"))>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,t))return!1}}),Br=t=>typeof t=="string",fL=t=>typeof t=="object"&&t!==null,dL=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,hL={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},pL=t=>hL[t],mL=t=>t.replace(dL,pL);let Lm={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:mL};const gL=(t={})=>{Lm={...Lm,...t}},yL=()=>Lm;let xS;const vL=t=>{xS=t},xL=()=>xS,bL={type:"3rdParty",init(t){gL(t.options.react),vL(t)}},wL=D.createContext();class SL{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const TL=(t,e)=>{const n=D.useRef();return D.useEffect(()=>{n.current=t},[t,e]),n.current},bS=(t,e,n,i)=>t.getFixedT(e,n,i),EL=(t,e,n,i)=>D.useCallback(bS(t,e,n,i),[t,e,n,i]),Qt=(t,e={})=>{var R,k,P,L;const{i18n:n}=e,{i18n:i,defaultNS:r}=D.useContext(wL)||{},o=n||i||xL();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new SL),!o){km(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const I=(F,N)=>Br(N)?N:fL(N)&&Br(N.defaultValue)?N.defaultValue:Array.isArray(F)?F[F.length-1]:F,V=[I,{},!1];return V.t=I,V.i18n={},V.ready=!1,V}(R=o.options.react)!=null&&R.wait&&km(o,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...yL(),...o.options.react,...e},{useSuspense:u,keyPrefix:d}=c;let h=r||((k=o.options)==null?void 0:k.defaultNS);h=Br(h)?[h]:h||["translation"],(L=(P=o.reportNamespaces).addUsedNamespaces)==null||L.call(P,h);const p=(o.isInitialized||o.initializedStoreOnce)&&h.every(I=>uL(I,o,c)),g=EL(o,e.lng||null,c.nsMode==="fallback"?h:h[0],d),y=()=>g,x=()=>bS(o,e.lng||null,c.nsMode==="fallback"?h:h[0],d),[b,S]=D.useState(y);let C=h.join();e.lng&&(C=`${e.lng}${C}`);const T=TL(C),M=D.useRef(!0);D.useEffect(()=>{const{bindI18n:I,bindI18nStore:V}=c;M.current=!0,!p&&!u&&(e.lng?tw(o,e.lng,h,()=>{M.current&&S(x)}):Rm(o,h,()=>{M.current&&S(x)})),p&&T&&T!==C&&M.current&&S(x);const F=()=>{M.current&&S(x)};return I&&(o==null||o.on(I,F)),V&&(o==null||o.store.on(V,F)),()=>{M.current=!1,o&&(I==null||I.split(" ").forEach(N=>o.off(N,F))),V&&o&&V.split(" ").forEach(N=>o.store.off(N,F))}},[o,C]),D.useEffect(()=>{M.current&&p&&S(y)},[o,d,p]);const A=[b,o,p];if(A.t=b,A.i18n=o,A.ready=p,p||!p&&!u)return A;throw new Promise(I=>{e.lng?tw(o,e.lng,h,()=>I()):Rm(o,h,()=>I())})},Dm=uo`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`,dd=uo`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`,gs=uo`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,CL=j.button`
z-index: 10;
  border-radius: 12px;
  width: 110px;
  height: 38px;
  position: relative;
  overflow: hidden;
  
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec, #6a6bff, #494bec, #3a3bc7);
  background-size: 300% 300%;
  animation: ${Dm} 2s infinite, ${gs} 6s ease infinite;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(73, 75, 236, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation: ${Dm} 2s infinite, ${gs} 3s ease infinite;
    background-size: 200% 200%;
  }
  
  &:active {
    animation: ${dd} 0.3s ease, ${gs} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%, -50%);
    transform-origin: 50% 50%;
  }
  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
`,AL=()=>{const{t}=Qt();return w.jsx("a",{href:"https://sabsus.app/registrcompany/web",target:"_blank",rel:"noopener noreferrer",children:w.jsx(CL,{children:t("hero.buttons.tryFree")})})},ML=j.div`
  position: relative;
  display: flex;
  z-index: 100;
  margin-right: 20px;

  @media (max-width: 743px) {
    margin-right: 10px;
  }
`,OL=j.button`
  border-radius: 12px;
  padding: 8px 8px;
  width: 70px;
  height: 36px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: var(--white-100);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 743px) {
    // min-width: 80px;
    font-size: 13px;
    padding: 6px 10px;
  }
`,kL=j(Y.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  min-width: 120px;
  background: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 11;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,RL=j(Y.li)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`,nw=j.span`
  font-size: 16px;
`,LL=()=>{const{t,i18n:e}=Qt(),[n,i]=D.useState(!1),r=[{code:"en",label:t("languageSwitcher.english"),flag:"🇬🇧"},{code:"es",label:t("languageSwitcher.spanish"),flag:"🇪🇸"},{code:"ru",label:t("languageSwitcher.russian"),flag:"🇷🇺"},{code:"uk",label:t("languageSwitcher.ukrainian"),flag:"🇺🇦"}],o=r.find(d=>d.code===e.language)||r[0],c=()=>i(d=>!d),u=async d=>{await e.changeLanguage(d),i(!1),window.location.reload()};return w.jsxs(ML,{children:[w.jsxs(OL,{onClick:c,"aria-label":"Change language",children:[w.jsx(nw,{children:"🌎"}),o.label,w.jsx("span",{children:"⌄"})]}),w.jsx(i4,{children:n&&w.jsx(kL,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:r.map(d=>w.jsxs(RL,{onClick:()=>u(d.code),whileHover:{scale:1.02},whileTap:{scale:.98},children:[w.jsx(nw,{children:d.flag}),d.label]},d.code))})})]})},DL="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%207L8%2011L12%207'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",_L=()=>{const[t,e]=D.useState(!1),[n,i]=D.useState(!1),{t:r}=Qt(),o=Wm(),c=h=>{h.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&o("/home")},u=()=>{i(!n)};D.useEffect(()=>{Jb.init({duration:3e3}),Jb.refresh();const h=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const d=yi({query:"(max-width: 1439px)"});return w.jsx(kR,{$isScrolled:t,children:w.jsxs(RR,{id:"header",children:[w.jsx(_R,{to:"/home",onClick:c,children:w.jsx("img",{src:Zg,alt:r("header.logoAlt")})}),!d&&w.jsxs(DR,{children:[w.jsx(yl,{children:w.jsx(hi,{to:"/home",children:r("header.nav.home")})}),w.jsx(yl,{style:{pointerEvents:"none",opacity:.5},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:u,children:w.jsxs(AR,{children:[r("header.nav.service")," ",w.jsx(MR,{src:DL,alt:"⬇️"}),n&&w.jsxs(OR,{children:[w.jsx(kr,{children:w.jsx(hi,{to:"/service/customer-experience",children:"Customer Experience Suite"})}),w.jsx(kr,{children:w.jsx(hi,{to:"/service/pos-staff-operations",children:"POS & Staff Operations"})}),w.jsx(kr,{children:w.jsx(hi,{to:"/service/kitchen-fulfillment",children:"Kitchen & Fulfillment"})}),w.jsx(kr,{children:w.jsx(hi,{to:"/service/inventory-warehousing",children:"Inventory & Warehousing"})}),w.jsx(kr,{children:w.jsx(hi,{to:"/service/analytics-management",children:"Analytics & Management"})}),w.jsx(kr,{children:w.jsx(hi,{to:"/service/marketing-customization",children:"Marketing & Customization"})}),w.jsx(kr,{children:w.jsx(hi,{to:"/service/integration-scaling",children:"Integration & Scaling"})})]})]})}),w.jsx(yl,{children:w.jsx(hi,{style:{pointerEvents:"none",opacity:.5},to:"/about",children:r("header.nav.about")})}),w.jsx(yl,{children:w.jsx(hi,{style:{pointerEvents:"none",opacity:.5},to:"/pricing",children:r("header.nav.pricing")})}),w.jsx(yl,{children:w.jsx(hi,{style:{pointerEvents:"none",opacity:.5},to:"/contact",children:r("header.nav.contacts")})})]}),w.jsx(LR,{children:w.jsxs("div",{style:{display:"flex"},children:[w.jsx(LL,{}),w.jsx(AL,{})]})})]})})};var at={},Bu={},Iu={},Hu={},c0,iw;function zL(){if(iw)return c0;iw=1;var t="Expected a function",e=NaN,n="[object Symbol]",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d=typeof Ou=="object"&&Ou&&Ou.Object===Object&&Ou,h=typeof self=="object"&&self&&self.Object===Object&&self,p=d||h||Function("return this")(),g=Object.prototype,y=g.toString,x=Math.max,b=Math.min,S=function(){return p.Date.now()};function C(P,L,I){var V,F,N,z,te,$,ce=0,U=!1,J=!1,ee=!0;if(typeof P!="function")throw new TypeError(t);L=k(L)||0,M(I)&&(U=!!I.leading,J="maxWait"in I,N=J?x(k(I.maxWait)||0,L):N,ee="trailing"in I?!!I.trailing:ee);function ae(fe){var Ee=V,$e=F;return V=F=void 0,ce=fe,z=P.apply($e,Ee),z}function _(fe){return ce=fe,te=setTimeout(se,L),U?ae(fe):z}function Z(fe){var Ee=fe-$,$e=fe-ce,Je=L-Ee;return J?b(Je,N-$e):Je}function oe(fe){var Ee=fe-$,$e=fe-ce;return $===void 0||Ee>=L||Ee<0||J&&$e>=N}function se(){var fe=S();if(oe(fe))return ue(fe);te=setTimeout(se,Z(fe))}function ue(fe){return te=void 0,ee&&V?ae(fe):(V=F=void 0,z)}function de(){te!==void 0&&clearTimeout(te),ce=0,V=$=F=te=void 0}function he(){return te===void 0?z:ue(S())}function we(){var fe=S(),Ee=oe(fe);if(V=arguments,F=this,$=fe,Ee){if(te===void 0)return _($);if(J)return te=setTimeout(se,L),ae($)}return te===void 0&&(te=setTimeout(se,L)),z}return we.cancel=de,we.flush=he,we}function T(P,L,I){var V=!0,F=!0;if(typeof P!="function")throw new TypeError(t);return M(I)&&(V="leading"in I?!!I.leading:V,F="trailing"in I?!!I.trailing:F),C(P,L,{leading:V,maxWait:L,trailing:F})}function M(P){var L=typeof P;return!!P&&(L=="object"||L=="function")}function A(P){return!!P&&typeof P=="object"}function R(P){return typeof P=="symbol"||A(P)&&y.call(P)==n}function k(P){if(typeof P=="number")return P;if(R(P))return e;if(M(P)){var L=typeof P.valueOf=="function"?P.valueOf():P;P=M(L)?L+"":L}if(typeof P!="string")return P===0?P:+P;P=P.replace(i,"");var I=o.test(P);return I||c.test(P)?u(P.slice(2),I?2:8):r.test(P)?e:+P}return c0=T,c0}var vl={},sw;function Kg(){if(sw)return vl;sw=1,Object.defineProperty(vl,"__esModule",{value:!0}),vl.addPassiveEventListener=function(n,i,r){var o=r.name;o||(o=i,console.warn("Listener must be a named function.")),t.has(i)||t.set(i,new Set);var c=t.get(i);if(!c.has(o)){var u=function(){var d=!1;try{var h=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("test",null,h)}catch{}return d}();n.addEventListener(i,r,u?{passive:!0}:!1),c.add(o)}},vl.removePassiveEventListener=function(n,i,r){n.removeEventListener(i,r),t.get(i).delete(r.name||i)};var t=new Map;return vl}var rw;function Wg(){if(rw)return Hu;rw=1,Object.defineProperty(Hu,"__esModule",{value:!0});var t=zL(),e=i(t),n=Kg();function i(c){return c&&c.__esModule?c:{default:c}}var r=function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(u,d)},o={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(u,d){if(u){var h=r(function(p){o.scrollHandler(u)},d);return o.scrollSpyContainers.push(u),(0,n.addPassiveEventListener)(u,"scroll",h),function(){(0,n.removePassiveEventListener)(u,"scroll",h),o.scrollSpyContainers.splice(o.scrollSpyContainers.indexOf(u),1)}}return function(){}},isMounted:function(u){return o.scrollSpyContainers.indexOf(u)!==-1},currentPositionX:function(u){if(u===document){var d=window.scrollY!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.scrollX:h?document.documentElement.scrollLeft:document.body.scrollLeft}else return u.scrollLeft},currentPositionY:function(u){if(u===document){var d=window.scrollX!==void 0,h=(document.compatMode||"")==="CSS1Compat";return d?window.scrollY:h?document.documentElement.scrollTop:document.body.scrollTop}else return u.scrollTop},scrollHandler:function(u){var d=o.scrollSpyContainers[o.scrollSpyContainers.indexOf(u)].spyCallbacks||[];d.forEach(function(h){return h(o.currentPositionX(u),o.currentPositionY(u))})},addStateHandler:function(u){o.spySetState.push(u)},addSpyHandler:function(u,d){var h=o.scrollSpyContainers[o.scrollSpyContainers.indexOf(d)];h.spyCallbacks||(h.spyCallbacks=[]),h.spyCallbacks.push(u)},updateStates:function(){o.spySetState.forEach(function(u){return u()})},unmount:function(u,d){o.scrollSpyContainers.forEach(function(h){return h.spyCallbacks&&h.spyCallbacks.length&&h.spyCallbacks.indexOf(d)>-1&&h.spyCallbacks.splice(h.spyCallbacks.indexOf(d),1)}),o.spySetState&&o.spySetState.length&&o.spySetState.indexOf(u)>-1&&o.spySetState.splice(o.spySetState.indexOf(u),1),document.removeEventListener("scroll",o.scrollHandler)},update:function(){return o.scrollSpyContainers.forEach(function(u){return o.scrollHandler(u)})}};return Hu.default=o,Hu}var Vu={},Uu={},aw;function hd(){if(aw)return Uu;aw=1,Object.defineProperty(Uu,"__esModule",{value:!0});var t=function(u,d){var h=u.indexOf("#")===0?u.substring(1):u,p=h?"#"+h:"",g=window&&window.location,y=p?g.pathname+g.search+p:g.pathname+g.search;d?history.pushState(history.state,"",y):history.replaceState(history.state,"",y)},e=function(){return window.location.hash.replace(/^#/,"")},n=function(u){return function(d){return u.contains?u!=d&&u.contains(d):!!(u.compareDocumentPosition(d)&16)}},i=function(u){return getComputedStyle(u).position!=="static"},r=function(u,d){for(var h=u.offsetTop,p=u.offsetParent;p&&!d(p);)h+=p.offsetTop,p=p.offsetParent;return{offsetTop:h,offsetParent:p}},o=function(u,d,h){if(h)return u===document?d.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(u).position!=="static"?d.offsetLeft:d.offsetLeft-u.offsetLeft;if(u===document)return d.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(i(u)){if(d.offsetParent!==u){var p=function(C){return C===u||C===document},g=r(d,p),y=g.offsetTop,x=g.offsetParent;if(x!==u)throw new Error("Seems containerElement is not an ancestor of the Element");return y}return d.offsetTop}if(d.offsetParent===u.offsetParent)return d.offsetTop-u.offsetTop;var b=function(C){return C===document};return r(d,b).offsetTop-r(u,b).offsetTop};return Uu.default={updateHash:t,getHash:e,filterElementInContainer:n,scrollOffset:o},Uu}var qu={},Fu={},ow;function jL(){return ow||(ow=1,Object.defineProperty(Fu,"__esModule",{value:!0}),Fu.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),Fu}var Gu={},lw;function PL(){if(lw)return Gu;lw=1,Object.defineProperty(Gu,"__esModule",{value:!0});var t=Kg(),e=["mousedown","wheel","touchmove","keydown"];return Gu.default={subscribe:function(i){return typeof document<"u"&&e.forEach(function(r){return(0,t.addPassiveEventListener)(document,r,i)})}},Gu}var Yu={},cw;function $g(){if(cw)return Yu;cw=1,Object.defineProperty(Yu,"__esModule",{value:!0});var t={registered:{},scrollEvent:{register:function(n,i){t.registered[n]=i},remove:function(n){t.registered[n]=null}}};return Yu.default=t,Yu}var uw;function wS(){if(uw)return qu;uw=1,Object.defineProperty(qu,"__esModule",{value:!0});var t=Object.assign||function(F){for(var N=1;N<arguments.length;N++){var z=arguments[N];for(var te in z)Object.prototype.hasOwnProperty.call(z,te)&&(F[te]=z[te])}return F},e=hd();d(e);var n=jL(),i=d(n),r=PL(),o=d(r),c=$g(),u=d(c);function d(F){return F&&F.__esModule?F:{default:F}}var h=function(N){return i.default[N.smooth]||i.default.defaultEasing},p=function(N){return typeof N=="function"?N:function(){return N}},g=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},y=function(){return g()||function(F,N,z){window.setTimeout(F,z||1e3/60,new Date().getTime())}}(),x=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},b=function(N){var z=N.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollLeft;var te=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return te?window.pageXOffset:$?document.documentElement.scrollLeft:document.body.scrollLeft},S=function(N){var z=N.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollTop;var te=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return te?window.pageYOffset:$?document.documentElement.scrollTop:document.body.scrollTop},C=function(N){var z=N.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollWidth-z.offsetWidth;var te=document.body,$=document.documentElement;return Math.max(te.scrollWidth,te.offsetWidth,$.clientWidth,$.scrollWidth,$.offsetWidth)},T=function(N){var z=N.data.containerElement;if(z&&z!==document&&z!==document.body)return z.scrollHeight-z.offsetHeight;var te=document.body,$=document.documentElement;return Math.max(te.scrollHeight,te.offsetHeight,$.clientHeight,$.scrollHeight,$.offsetHeight)},M=function F(N,z,te){var $=z.data;if(!z.ignoreCancelEvents&&$.cancel){u.default.registered.end&&u.default.registered.end($.to,$.target,$.currentPositionY);return}if($.delta=Math.round($.targetPosition-$.startPosition),$.start===null&&($.start=te),$.progress=te-$.start,$.percent=$.progress>=$.duration?1:N($.progress/$.duration),$.currentPosition=$.startPosition+Math.ceil($.delta*$.percent),$.containerElement&&$.containerElement!==document&&$.containerElement!==document.body?z.horizontal?$.containerElement.scrollLeft=$.currentPosition:$.containerElement.scrollTop=$.currentPosition:z.horizontal?window.scrollTo($.currentPosition,0):window.scrollTo(0,$.currentPosition),$.percent<1){var ce=F.bind(null,N,z);y.call(window,ce);return}u.default.registered.end&&u.default.registered.end($.to,$.target,$.currentPosition)},A=function(N){N.data.containerElement=N?N.containerId?document.getElementById(N.containerId):N.container&&N.container.nodeType?N.container:document:null},R=function(N,z,te,$){z.data=z.data||x(),window.clearTimeout(z.data.delayTimeout);var ce=function(){z.data.cancel=!0};if(o.default.subscribe(ce),A(z),z.data.start=null,z.data.cancel=!1,z.data.startPosition=z.horizontal?b(z):S(z),z.data.targetPosition=z.absolute?N:N+z.data.startPosition,z.data.startPosition===z.data.targetPosition){u.default.registered.end&&u.default.registered.end(z.data.to,z.data.target,z.data.currentPosition);return}z.data.delta=Math.round(z.data.targetPosition-z.data.startPosition),z.data.duration=p(z.duration)(z.data.delta),z.data.duration=isNaN(parseFloat(z.data.duration))?1e3:parseFloat(z.data.duration),z.data.to=te,z.data.target=$;var U=h(z),J=M.bind(null,U,z);if(z&&z.delay>0){z.data.delayTimeout=window.setTimeout(function(){u.default.registered.begin&&u.default.registered.begin(z.data.to,z.data.target),y.call(window,J)},z.delay);return}u.default.registered.begin&&u.default.registered.begin(z.data.to,z.data.target),y.call(window,J)},k=function(N){return N=t({},N),N.data=N.data||x(),N.absolute=!0,N},P=function(N){R(0,k(N))},L=function(N,z){R(N,k(z))},I=function(N){N=k(N),A(N),R(N.horizontal?C(N):T(N),N)},V=function(N,z){z=k(z),A(z);var te=z.horizontal?b(z):S(z);R(N+te,z)};return qu.default={animateTopScroll:R,getAnimationType:h,scrollToTop:P,scrollToBottom:I,scrollTo:L,scrollMore:V},qu}var fw;function pd(){if(fw)return Vu;fw=1,Object.defineProperty(Vu,"__esModule",{value:!0});var t=Object.assign||function(p){for(var g=1;g<arguments.length;g++){var y=arguments[g];for(var x in y)Object.prototype.hasOwnProperty.call(y,x)&&(p[x]=y[x])}return p},e=hd(),n=u(e),i=wS(),r=u(i),o=$g(),c=u(o);function u(p){return p&&p.__esModule?p:{default:p}}var d={},h=void 0;return Vu.default={unmount:function(){d={}},register:function(g,y){d[g]=y},unregister:function(g){delete d[g]},get:function(g){return d[g]||document.getElementById(g)||document.getElementsByName(g)[0]||document.getElementsByClassName(g)[0]},setActiveLink:function(g){return h=g},getActiveLink:function(){return h},scrollTo:function(g,y){var x=this.get(g);if(!x){console.warn("target Element not found");return}y=t({},y,{absolute:!1});var b=y.containerId,S=y.container,C=void 0;b?C=document.getElementById(b):S&&S.nodeType?C=S:C=document,y.absolute=!0;var T=y.horizontal,M=n.default.scrollOffset(C,x,T)+(y.offset||0);if(!y.smooth){c.default.registered.begin&&c.default.registered.begin(g,x),C===document?y.horizontal?window.scrollTo(M,0):window.scrollTo(0,M):C.scrollTop=M,c.default.registered.end&&c.default.registered.end(g,x);return}r.default.animateTopScroll(M,y,g,x)}},Vu}var Xu={},dw;function SS(){if(dw)return Xu;dw=1,Object.defineProperty(Xu,"__esModule",{value:!0}),Kg();var t=hd(),e=n(t);function n(r){return r&&r.__esModule?r:{default:r}}var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(o){this.scroller=o,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(o,c){this.containers[o]=c},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var o=this,c=this.getHash();c?window.setTimeout(function(){o.scrollTo(c,!0),o.initialized=!0},10):this.initialized=!0},scrollTo:function(o,c){var u=this.scroller,d=u.get(o);if(d&&(c||o!==u.getActiveLink())){var h=this.containers[o]||document;u.scrollTo(o,{container:h})}},getHash:function(){return e.default.getHash()},changeHash:function(o,c){this.isInitialized()&&e.default.getHash()!==o&&e.default.updateHash(o,c)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Xu.default=i,Xu}var hw;function Jg(){if(hw)return Iu;hw=1,Object.defineProperty(Iu,"__esModule",{value:!0});var t=Object.assign||function(T){for(var M=1;M<arguments.length;M++){var A=arguments[M];for(var R in A)Object.prototype.hasOwnProperty.call(A,R)&&(T[R]=A[R])}return T},e=function(){function T(M,A){for(var R=0;R<A.length;R++){var k=A[R];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(M,k.key,k)}}return function(M,A,R){return A&&T(M.prototype,A),R&&T(M,R),M}}(),n=Ss(),i=y(n),r=Wg(),o=y(r),c=pd(),u=y(c),d=pc(),h=y(d),p=SS(),g=y(p);function y(T){return T&&T.__esModule?T:{default:T}}function x(T,M){if(!(T instanceof M))throw new TypeError("Cannot call a class as a function")}function b(T,M){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:T}function S(T,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);T.prototype=Object.create(M&&M.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(T,M):T.__proto__=M)}var C={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,activeStyle:h.default.object,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};return Iu.default=function(T,M){var A=M||u.default,R=function(P){S(L,P);function L(I){x(this,L);var V=b(this,(L.__proto__||Object.getPrototypeOf(L)).call(this,I));return k.call(V),V.state={active:!1},V.beforeUnmountCallbacks=[],V}return e(L,[{key:"getScrollSpyContainer",value:function(){var V=this.props.containerId,F=this.props.container;return V&&!F?document.getElementById(V):F&&F.nodeType?F:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var V=this.getScrollSpyContainer();if(!o.default.isMounted(V)){var F=o.default.mount(V,this.props.spyThrottle);this.beforeUnmountCallbacks.push(F)}this.props.hashSpy&&(g.default.isMounted()||g.default.mount(A),g.default.mapContainer(this.props.to,V)),o.default.addSpyHandler(this.spyHandler,V),this.setState({container:V})}}},{key:"componentWillUnmount",value:function(){o.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(V){return V()})}},{key:"render",value:function(){var V="";this.state&&this.state.active?V=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():V=this.props.className;var F={};this.state&&this.state.active?F=t({},this.props.style,this.props.activeStyle):F=t({},this.props.style);var N=t({},this.props);for(var z in C)N.hasOwnProperty(z)&&delete N[z];return N.className=V,N.style=F,N.onClick=this.handleClick,i.default.createElement(T,N)}}]),L}(i.default.PureComponent),k=function(){var L=this;this.scrollTo=function(I,V){A.scrollTo(I,t({},L.state,V))},this.handleClick=function(I){L.props.onClick&&L.props.onClick(I),I.stopPropagation&&I.stopPropagation(),I.preventDefault&&I.preventDefault(),L.scrollTo(L.props.to,L.props)},this.spyHandler=function(I,V){var F=L.getScrollSpyContainer();if(!(g.default.isMounted()&&!g.default.isInitialized())){var N=L.props.horizontal,z=L.props.to,te=null,$=void 0,ce=void 0;if(N){var U=0,J=0,ee=0;if(F.getBoundingClientRect){var ae=F.getBoundingClientRect();ee=ae.left}if(!te||L.props.isDynamic){if(te=A.get(z),!te)return;var _=te.getBoundingClientRect();U=_.left-ee+I,J=U+_.width}var Z=I-L.props.offset;$=Z>=Math.floor(U)&&Z<Math.floor(J),ce=Z<Math.floor(U)||Z>=Math.floor(J)}else{var oe=0,se=0,ue=0;if(F.getBoundingClientRect){var de=F.getBoundingClientRect();ue=de.top}if(!te||L.props.isDynamic){if(te=A.get(z),!te)return;var he=te.getBoundingClientRect();oe=he.top-ue+V,se=oe+he.height}var we=V-L.props.offset;$=we>=Math.floor(oe)&&we<Math.floor(se),ce=we<Math.floor(oe)||we>=Math.floor(se)}var fe=A.getActiveLink();if(ce){if(z===fe&&A.setActiveLink(void 0),L.props.hashSpy&&g.default.getHash()===z){var Ee=L.props.saveHashHistory,$e=Ee===void 0?!1:Ee;g.default.changeHash("",$e)}L.props.spy&&L.state.active&&(L.setState({active:!1}),L.props.onSetInactive&&L.props.onSetInactive(z,te))}if($&&(fe!==z||L.state.active===!1)){A.setActiveLink(z);var Je=L.props.saveHashHistory,Be=Je===void 0?!1:Je;L.props.hashSpy&&g.default.changeHash(z,Be),L.props.spy&&(L.setState({active:!0}),L.props.onSetActive&&L.props.onSetActive(z,te))}}}};return R.propTypes=C,R.defaultProps={offset:0},R},Iu}var pw;function NL(){if(pw)return Bu;pw=1,Object.defineProperty(Bu,"__esModule",{value:!0});var t=Ss(),e=r(t),n=Jg(),i=r(n);function r(h){return h&&h.__esModule?h:{default:h}}function o(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function c(h,p){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:h}function u(h,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);h.prototype=Object.create(p&&p.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(h,p):h.__proto__=p)}var d=function(h){u(p,h);function p(){var g,y,x,b;o(this,p);for(var S=arguments.length,C=Array(S),T=0;T<S;T++)C[T]=arguments[T];return b=(y=(x=c(this,(g=p.__proto__||Object.getPrototypeOf(p)).call.apply(g,[this].concat(C))),x),x.render=function(){return e.default.createElement("a",x.props,x.props.children)},y),c(x,b)}return p}(e.default.Component);return Bu.default=(0,i.default)(d),Bu}var Qu={},mw;function BL(){if(mw)return Qu;mw=1,Object.defineProperty(Qu,"__esModule",{value:!0});var t=function(){function p(g,y){for(var x=0;x<y.length;x++){var b=y[x];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}return function(g,y,x){return y&&p(g.prototype,y),x&&p(g,x),g}}(),e=Ss(),n=o(e),i=Jg(),r=o(i);function o(p){return p&&p.__esModule?p:{default:p}}function c(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}function u(p,g){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:p}function d(p,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);p.prototype=Object.create(g&&g.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(p,g):p.__proto__=g)}var h=function(p){d(g,p);function g(){return c(this,g),u(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return t(g,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),g}(n.default.Component);return Qu.default=(0,r.default)(h),Qu}var Zu={},Ku={},gw;function TS(){if(gw)return Ku;gw=1,Object.defineProperty(Ku,"__esModule",{value:!0});var t=Object.assign||function(x){for(var b=1;b<arguments.length;b++){var S=arguments[b];for(var C in S)Object.prototype.hasOwnProperty.call(S,C)&&(x[C]=S[C])}return x},e=function(){function x(b,S){for(var C=0;C<S.length;C++){var T=S[C];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(b,T.key,T)}}return function(b,S,C){return S&&x(b.prototype,S),C&&x(b,C),b}}(),n=Ss(),i=h(n),r=Xm();h(r);var o=pd(),c=h(o),u=pc(),d=h(u);function h(x){return x&&x.__esModule?x:{default:x}}function p(x,b){if(!(x instanceof b))throw new TypeError("Cannot call a class as a function")}function g(x,b){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:x}function y(x,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);x.prototype=Object.create(b&&b.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(x,b):x.__proto__=b)}return Ku.default=function(x){var b=function(S){y(C,S);function C(T){p(this,C);var M=g(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,T));return M.childBindings={domNode:null},M}return e(C,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;c.default.unregister(this.props.name)}},{key:"registerElems",value:function(M){c.default.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(x,t({},this.props,{parentBindings:this.childBindings}))}}]),C}(i.default.Component);return b.propTypes={name:d.default.string,id:d.default.string},b},Ku}var yw;function IL(){if(yw)return Zu;yw=1,Object.defineProperty(Zu,"__esModule",{value:!0});var t=Object.assign||function(x){for(var b=1;b<arguments.length;b++){var S=arguments[b];for(var C in S)Object.prototype.hasOwnProperty.call(S,C)&&(x[C]=S[C])}return x},e=function(){function x(b,S){for(var C=0;C<S.length;C++){var T=S[C];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(b,T.key,T)}}return function(b,S,C){return S&&x(b.prototype,S),C&&x(b,C),b}}(),n=Ss(),i=d(n),r=TS(),o=d(r),c=pc(),u=d(c);function d(x){return x&&x.__esModule?x:{default:x}}function h(x,b){if(!(x instanceof b))throw new TypeError("Cannot call a class as a function")}function p(x,b){if(!x)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:x}function g(x,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);x.prototype=Object.create(b&&b.prototype,{constructor:{value:x,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(x,b):x.__proto__=b)}var y=function(x){g(b,x);function b(){return h(this,b),p(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return e(b,[{key:"render",value:function(){var C=this,T=t({},this.props);return delete T.name,T.parentBindings&&delete T.parentBindings,i.default.createElement("div",t({},T,{ref:function(A){C.props.parentBindings.domNode=A}}),this.props.children)}}]),b}(i.default.Component);return y.propTypes={name:u.default.string,id:u.default.string},Zu.default=(0,o.default)(y),Zu}var u0,vw;function HL(){if(vw)return u0;vw=1;var t=Object.assign||function(y){for(var x=1;x<arguments.length;x++){var b=arguments[x];for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&(y[S]=b[S])}return y},e=function(){function y(x,b){for(var S=0;S<b.length;S++){var C=b[S];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(x,C.key,C)}}return function(x,b,S){return b&&y(x.prototype,b),S&&y(x,S),x}}();function n(y,x){if(!(y instanceof x))throw new TypeError("Cannot call a class as a function")}function i(y,x){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:y}function r(y,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);y.prototype=Object.create(x&&x.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(y,x):y.__proto__=x)}var o=Ss();Xm(),hd();var c=Wg(),u=pd(),d=pc(),h=SS(),p={to:d.string.isRequired,containerId:d.string,container:d.object,activeClass:d.string,spy:d.bool,smooth:d.oneOfType([d.bool,d.string]),offset:d.number,delay:d.number,isDynamic:d.bool,onClick:d.func,duration:d.oneOfType([d.number,d.func]),absolute:d.bool,onSetActive:d.func,onSetInactive:d.func,ignoreCancelEvents:d.bool,hashSpy:d.bool,spyThrottle:d.number},g={Scroll:function(x,b){console.warn("Helpers.Scroll is deprecated since v1.7.0");var S=b||u,C=function(M){r(A,M);function A(R){n(this,A);var k=i(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,R));return T.call(k),k.state={active:!1},k}return e(A,[{key:"getScrollSpyContainer",value:function(){var k=this.props.containerId,P=this.props.container;return k?document.getElementById(k):P&&P.nodeType?P:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var k=this.getScrollSpyContainer();c.isMounted(k)||c.mount(k,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(S),h.mapContainer(this.props.to,k)),this.props.spy&&c.addStateHandler(this.stateHandler),c.addSpyHandler(this.spyHandler,k),this.setState({container:k})}}},{key:"componentWillUnmount",value:function(){c.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var k="";this.state&&this.state.active?k=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():k=this.props.className;var P=t({},this.props);for(var L in p)P.hasOwnProperty(L)&&delete P[L];return P.className=k,P.onClick=this.handleClick,o.createElement(x,P)}}]),A}(o.Component),T=function(){var A=this;this.scrollTo=function(R,k){S.scrollTo(R,t({},A.state,k))},this.handleClick=function(R){A.props.onClick&&A.props.onClick(R),R.stopPropagation&&R.stopPropagation(),R.preventDefault&&R.preventDefault(),A.scrollTo(A.props.to,A.props)},this.stateHandler=function(){S.getActiveLink()!==A.props.to&&(A.state!==null&&A.state.active&&A.props.onSetInactive&&A.props.onSetInactive(),A.setState({active:!1}))},this.spyHandler=function(R){var k=A.getScrollSpyContainer();if(!(h.isMounted()&&!h.isInitialized())){var P=A.props.to,L=null,I=0,V=0,F=0;if(k.getBoundingClientRect){var N=k.getBoundingClientRect();F=N.top}if(!L||A.props.isDynamic){if(L=S.get(P),!L)return;var z=L.getBoundingClientRect();I=z.top-F+R,V=I+z.height}var te=R-A.props.offset,$=te>=Math.floor(I)&&te<Math.floor(V),ce=te<Math.floor(I)||te>=Math.floor(V),U=S.getActiveLink();if(ce)return P===U&&S.setActiveLink(void 0),A.props.hashSpy&&h.getHash()===P&&h.changeHash(),A.props.spy&&A.state.active&&(A.setState({active:!1}),A.props.onSetInactive&&A.props.onSetInactive()),c.updateStates();if($&&U!==P)return S.setActiveLink(P),A.props.hashSpy&&h.changeHash(P),A.props.spy&&(A.setState({active:!0}),A.props.onSetActive&&A.props.onSetActive(P)),c.updateStates()}}};return C.propTypes=p,C.defaultProps={offset:0},C},Element:function(x){console.warn("Helpers.Element is deprecated since v1.7.0");var b=function(S){r(C,S);function C(T){n(this,C);var M=i(this,(C.__proto__||Object.getPrototypeOf(C)).call(this,T));return M.childBindings={domNode:null},M}return e(C,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(M){this.props.name!==M.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(M){u.register(M,this.childBindings.domNode)}},{key:"render",value:function(){return o.createElement(x,t({},this.props,{parentBindings:this.childBindings}))}}]),C}(o.Component);return b.propTypes={name:d.string,id:d.string},b}};return u0=g,u0}var xw;function VL(){if(xw)return at;xw=1,Object.defineProperty(at,"__esModule",{value:!0}),at.Helpers=at.ScrollElement=at.ScrollLink=at.animateScroll=at.scrollSpy=at.Events=at.scroller=at.Element=at.Button=at.Link=void 0;var t=NL(),e=R(t),n=BL(),i=R(n),r=IL(),o=R(r),c=pd(),u=R(c),d=$g(),h=R(d),p=Wg(),g=R(p),y=wS(),x=R(y),b=Jg(),S=R(b),C=TS(),T=R(C),M=HL(),A=R(M);function R(k){return k&&k.__esModule?k:{default:k}}return at.Link=e.default,at.Button=i.default,at.Element=o.default,at.scroller=u.default,at.Events=h.default,at.scrollSpy=g.default,at.animateScroll=x.default,at.ScrollLink=S.default,at.ScrollElement=T.default,at.Helpers=A.default,at.default={Link:e.default,Button:i.default,Element:o.default,scroller:u.default,Events:h.default,scrollSpy:g.default,animateScroll:x.default,ScrollLink:S.default,ScrollElement:T.default,Helpers:A.default},at}var Sf=VL();const e2=j.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  /* Тіні */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  iframe, canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
    position: relative;
    z-index: 1;
    object-fit: cover;
    pointer-events: auto;
  }

  /* Мобільні пристрої */
  @media screen and (max-width: 767px) {
    height: 100vh;
    z-index: -2; /* Поміщаємо під інші елементи */
    
    &::before,
    &::after {
      height: 50px;
    }

    iframe, canvas {
      pointer-events: none; /* Вимкнення клікабельності */
      z-index: -1; /* Нижчий z-index для iframe/canvas */
      opacity: 0.7; /* Додаткове затемнення для мобільних */
    }
  }
`,UL=j.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;

    /* Тіні */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

    @media screen and (max-width: 767px) {
    height: 100vh;
    z-index: -2; /* Поміщаємо під інші елементи */
    
    &::before,
    &::after {
      height: 50px;
    }
  }
`,t2=j.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 150px;
  }
`,ES=j.p`
display: flex;
justify-content: space-around;
border-radius: 24px;
    padding: 4px 1px 4px 14px;
    width: max-content;
height: auto;
align-items: center;


font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
    margin: 0 auto;
margin-bottom: 8px;
backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);;

@media screen and (min-width: 1440px) {


}
`,qL=j.span`
  border-radius: 25px;
  margin-left: 10px;
  padding: 4px;
  width: 22px;
  height: 22px;
  font-size: 13px;

  box-shadow:
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 0px 10px rgba(207, 121, 250, 0.5); /* ніжне фіолетове світіння */

  background: linear-gradient(
    315deg,
    rgba(232, 198, 247, 0.96) 7%,
    rgba(207, 121, 250, 0.54) 86%
  );
`,CS=j.h1`
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 86.41%, #6a82fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 36px;

  @media screen and (min-width: 1440px) {
    font-size: 72px;
    line-height: 112%;
    max-width: 835px;
  }
`,FL=j.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);

@media screen and (min-width: 1440px) {
width: 100%;
width: 835px;
font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 130%;
text-align: center;
color: var(--white-75);
margin-bottom: 36px;
}
`,GL=j.div`
  width: 100%;
  max-width: 830px;
  margin: 0 auto; // Це важливо для центрування
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  margin: 0 auto;
    padding: 0 16px;
     display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 36px;
  }
`;j.div`
  width: 100%;
  max-width: 343px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-bottom: 36px;
  }
`;j.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;j.img`
border-radius: 18px;
border: 1px solid var(--black);
width: 36px;
height: 36px;
margin-left: -20px;
`;j.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
`;const md=j.div`
margin: 0 auto;
width: 285px;
// height: 43px;
margin-top: 20px;
display: flex;
gap: 16px;
justify-content: center;

@media screen and (min-width: 1440px) {


}
`,gd=j.button`
z-index: 10;
  border-radius: 12px;
width: 100%;
  position: relative;
  overflow: hidden;

  margin-right: 12px;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec, #6a6bff, #494bec, #3a3bc7);
  background-size: 300% 300%;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(73, 75, 236, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation: ${Dm} 2s infinite, ${gs} 3s ease infinite;
    background-size: 200% 200%;
  }
  
  &:active {
    animation: ${dd} 0.3s ease, ${gs} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%, -50%);
    transform-origin: 50% 50%;
  }
  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
border-radius: 12px;
padding: 12px 12px;
width: 100%;
height: auto;
`,AS=uo`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`,yd=j.button`
z-index: 10;
  border-radius: 12px;
  width: 110px;
  position: relative;
  overflow: hidden;
  
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(180deg, rgb(255, 255, 255) 7%, rgba(255, 255, 255, 0) 86%), rgba(255, 255, 255, 0.03) ;
  background-size: 300% 300%;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(115, 115, 115, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation: ${AS} 2s infinite, ${gs} 3s ease infinite;
    background-size: 200% 200%;
  }
  
  &:active {
    animation: ${dd} 0.3s ease, ${gs} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  

  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
border: 1px solid #212121;
border-radius: 12px;
padding: 12px 12px;
width: 100%;

backdrop-filter: blur(168px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
`,YL=j.footer`

text-align: center;
  background: transparent;
color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
width: 100%;
margin: 0 auto;
// position: fixed;
bottom: 0; 
z-index: 1;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 auto;
  }`,XL=j.div`
   @media screen and (min-width: 768px) {
  display: flex;
 gap: 74px;
  }
    @media screen and (min-width: 1440px) {
         display: flex;
        flex-direction: row;
        align-items: stretch;
        gap: 30px;
        margin-right: 40px;
  }
  `,n2=j.p`
  padding: 0px auto 50px auto;
  width: 98%;
  height: 2px; /* Збільшуємо висоту для еліпса */
  margin: 0 auto;
background:  var(--white-24);
position: relative;
z-index: 10;
margin-bottom: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,QL=j.div`
  display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 24px 16px;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;

 @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
  }
  
@media screen and (min-width: 1440px){
display: flex;
  margin: 0 auto;
   padding: 50px 0px;
}
`,xl=j.div`
 display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
`,ZL=j.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d1ff;
  text-decoration: none;
  z-index: 10;
  img {
 width: 142px;
height: 19px;
  overflov: hidden;

  
  &:hover,
  &:focus,
  &.active {
    color: #00ffe7;
    fill: #00ffe7;
  }
  }

   @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  margin: 20px;
  }
`,Wu=j.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--white-100);
margin-bottom: 16px;
margin-top: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,Nn=j.a`
font-family: var(--font-family);
font-weight: 400;
font-size: 15px;
color: var(--white-50);
margin-bottom: 10px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,bw=j.div`
display: flex;
margin-bottom: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,KL=j.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
width: 100%;
flex-wrap: wrap;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,$u=j.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-50);
display: flex;
align-items: center;
gap: 7px;
margin-left: 7px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,ww=j.div`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: var(--white-50);
border: 1px solid  var(--white-50);
width: 1px;
    height: 1px;

     @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,WL=j.button`
z-index: 10;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: var(--white-100);
margin-bottom: 16px;
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(180deg, rgb(255, 255, 255) 7%, rgba(255, 255, 255, 0) 86%), rgba(255, 255, 255, 0.03) ;
  background-size: 300% 300%;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(115, 115, 115, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation: ${AS} 2s infinite, ${gs} 3s ease infinite;
    background-size: 200% 200%;
  }
  
  &:active {
    animation: ${dd} 0.3s ease, ${gs} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  

  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
border: 1px solid #212121;
border-radius: 12px;
padding: 8px 16px;
width: max-content;;
height: 34px;

backdrop-filter: blur(168px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,$L=j.div`
    flex-flow: wrap;
    align-items: flex-end;
    align-content: space-between;
    width: 100%;
    display: flex;
    justify-content: space-between;
 @media screen and (min-width: 768px) {
  flex-direction: row-reverse;
          margin: 0 20px;
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,JL=j.div`
display: flex;
gap: 12px;
flex-direction: row;
margin: 16px;

 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
;`,f0=j.a`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,d0=j.img`
 @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,eD=j.div`
  width: 100%;
 margin: 80px auto 80px auto;
background:rgba(0, 0, 0, 0.86);
// opacity: 0.2;/
  color: #fff;
  position: relative;
  padding: 16px;
overflow: visible;
height: auto;
      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
margin-top:15% ; 

}
`,h0=j.section`
  max-width: 800px;
  margin: 0 auto ;
  padding: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;j.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;const Xe=j.h2`
font-family: var(--font-family);
font-weight: 400;
font-size: 18px;
line-height: 130%;
color: var(--white-100);
display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 20px;
   

        @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`,Sw=j.p`
  padding: 0px auto 50px auto;
  width: 98%;
  height: 2px; 
  margin: 40px auto;
background:  var(--white-24);
position: relative;
z-index: 10;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
max-width: 1440px;

}
`,Ju=j.div`
 

  p {
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
color: var(--white-75);
margin-bottom: 10px;
  }

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;j.img`
  width: 56px;
  height: 56px;

      @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;const tD="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2233_8371)'%3e%3cpath%20d='M10%200C4.4772%200%200%204.4772%200%2010C0%2014.6896%203.2288%2018.6248%207.5844%2019.7056V13.056H5.5224V10H7.5844V8.6832C7.5844%205.2796%209.1248%203.702%2012.4664%203.702C13.1%203.702%2014.1932%203.8264%2014.6404%203.9504V6.7204C14.4044%206.6956%2013.9944%206.6832%2013.4852%206.6832C11.8456%206.6832%2011.212%207.3044%2011.212%208.9192V10H14.4784L13.9172%2013.056H11.212V19.9268C16.1636%2019.3288%2020.0004%2015.1128%2020.0004%2010C20%204.4772%2015.5228%200%2010%200Z'%20fill='white'%20fill-opacity='0.25'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2233_8371'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",nD="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0276%200C12.1526%200.003%2012.7236%200.009%2013.2166%200.023L13.4106%200.03C13.6346%200.038%2013.8556%200.0479999%2014.1226%200.0599999C15.1866%200.11%2015.9126%200.278%2016.5496%200.525C17.2096%200.779%2017.7656%201.123%2018.3216%201.678C18.8303%202.17773%2019.2238%202.78247%2019.4746%203.45C19.7216%204.087%2019.8896%204.813%2019.9396%205.878C19.9516%206.144%2019.9616%206.365%2019.9696%206.59L19.9756%206.784C19.9906%207.276%2019.9966%207.847%2019.9986%208.972L19.9996%209.718V11.028C20.002%2011.7574%2019.9944%2012.4868%2019.9766%2013.216L19.9706%2013.41C19.9626%2013.635%2019.9526%2013.856%2019.9406%2014.122C19.8906%2015.187%2019.7206%2015.912%2019.4746%2016.55C19.2238%2017.2175%2018.8303%2017.8223%2018.3216%2018.322C17.8219%2018.8307%2017.2171%2019.2242%2016.5496%2019.475C15.9126%2019.722%2015.1866%2019.89%2014.1226%2019.94L13.4106%2019.97L13.2166%2019.976C12.7236%2019.99%2012.1526%2019.997%2011.0276%2019.999L10.2816%2020H8.97259C8.24285%2020.0026%207.51312%2019.9949%206.78359%2019.977L6.58959%2019.971C6.3522%2019.962%206.11487%2019.9517%205.87759%2019.94C4.81359%2019.89%204.08759%2019.722%203.44959%2019.475C2.78242%2019.2241%202.17804%2018.8306%201.67859%2018.322C1.16954%2017.8224%200.775701%2017.2176%200.524592%2016.55C0.277592%2015.913%200.109592%2015.187%200.0595922%2014.122L0.0295922%2013.41L0.0245923%2013.216C0.00615837%2012.4868%20-0.00217586%2011.7574%20-0.000407766%2011.028V8.972C-0.00317566%208.2426%200.00415845%207.5132%200.0215923%206.784L0.0285923%206.59C0.0365923%206.365%200.0465923%206.144%200.0585922%205.878C0.108592%204.813%200.276592%204.088%200.523592%203.45C0.775287%202.7822%201.16982%202.17744%201.67959%201.678C2.17875%201.16955%202.78278%200.776074%203.44959%200.525C4.08759%200.278%204.81259%200.11%205.87759%200.0599999C6.14359%200.0479999%206.36559%200.038%206.58959%200.03L6.78359%200.0239999C7.51278%200.00623271%208.24219%20-0.0014347%208.97159%200.000999928L11.0276%200ZM9.99959%205C8.67351%205%207.40174%205.52678%206.46406%206.46447C5.52638%207.40215%204.99959%208.67392%204.99959%2010C4.99959%2011.3261%205.52638%2012.5979%206.46406%2013.5355C7.40174%2014.4732%208.67351%2015%209.99959%2015C11.3257%2015%2012.5974%2014.4732%2013.5351%2013.5355C14.4728%2012.5979%2014.9996%2011.3261%2014.9996%2010C14.9996%208.67392%2014.4728%207.40215%2013.5351%206.46447C12.5974%205.52678%2011.3257%205%209.99959%205ZM9.99959%207C10.3936%206.99993%2010.7837%207.07747%2011.1477%207.22817C11.5117%207.37887%2011.8424%207.5998%2012.1211%207.87833C12.3997%208.15686%2012.6207%208.48754%2012.7715%208.85149C12.9224%209.21544%2013%209.60553%2013.0001%209.9995C13.0002%2010.3935%2012.9226%2010.7836%2012.7719%2011.1476C12.6212%2011.5116%2012.4003%2011.8423%2012.1218%2012.121C11.8432%2012.3996%2011.5126%2012.6206%2011.1486%2012.7714C10.7847%2012.9223%2010.3946%2012.9999%2010.0006%2013C9.20494%2013%208.44188%2012.6839%207.87927%2012.1213C7.31666%2011.5587%207.00059%2010.7956%207.00059%2010C7.00059%209.20435%207.31666%208.44129%207.87927%207.87868C8.44188%207.31607%209.20494%207%2010.0006%207M15.2506%203.5C14.9191%203.5%2014.6011%203.6317%2014.3667%203.86612C14.1323%204.10054%2014.0006%204.41848%2014.0006%204.75C14.0006%205.08152%2014.1323%205.39946%2014.3667%205.63388C14.6011%205.8683%2014.9191%206%2015.2506%206C15.5821%206%2015.9001%205.8683%2016.1345%205.63388C16.3689%205.39946%2016.5006%205.08152%2016.5006%204.75C16.5006%204.41848%2016.3689%204.10054%2016.1345%203.86612C15.9001%203.6317%2015.5821%203.5%2015.2506%203.5Z'%20fill='white'%20fill-opacity='0.25'/%3e%3c/svg%3e",iD="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2233_8368)'%3e%3cpath%20d='M18.5186%200H1.47559C0.65918%200%20-0.000976562%200.644531%20-0.000976562%201.44141V18.5547C-0.000976562%2019.3516%200.65918%2020%201.47559%2020H18.5186C19.335%2020%2019.999%2019.3516%2019.999%2018.5586V1.44141C19.999%200.644531%2019.335%200%2018.5186%200ZM5.93262%2017.043H2.96387V7.49609H5.93262V17.043ZM4.44824%206.19531C3.49512%206.19531%202.72559%205.42578%202.72559%204.47656C2.72559%203.52734%203.49512%202.75781%204.44824%202.75781C5.39746%202.75781%206.16699%203.52734%206.16699%204.47656C6.16699%205.42188%205.39746%206.19531%204.44824%206.19531ZM17.042%2017.043H14.0771V12.4023C14.0771%2011.2969%2014.0576%209.87109%2012.5342%209.87109C10.9912%209.87109%2010.7568%2011.0781%2010.7568%2012.3242V17.043H7.7959V7.49609H10.6396V8.80078H10.6787C11.0732%208.05078%2012.042%207.25781%2013.4834%207.25781C16.4873%207.25781%2017.042%209.23438%2017.042%2011.8047V17.043Z'%20fill='white'%20fill-opacity='0.25'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2233_8368'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(-0.000976562)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:MS,setPrototypeOf:Tw,isFrozen:sD,getPrototypeOf:rD,getOwnPropertyDescriptor:aD}=Object;let{freeze:dn,seal:ri,create:OS}=Object,{apply:_m,construct:zm}=typeof Reflect<"u"&&Reflect;dn||(dn=function(e){return e});ri||(ri=function(e){return e});_m||(_m=function(e,n,i){return e.apply(n,i)});zm||(zm=function(e,n){return new e(...n)});const ef=hn(Array.prototype.forEach),oD=hn(Array.prototype.lastIndexOf),Ew=hn(Array.prototype.pop),bl=hn(Array.prototype.push),lD=hn(Array.prototype.splice),Tf=hn(String.prototype.toLowerCase),p0=hn(String.prototype.toString),Cw=hn(String.prototype.match),wl=hn(String.prototype.replace),cD=hn(String.prototype.indexOf),uD=hn(String.prototype.trim),mi=hn(Object.prototype.hasOwnProperty),ln=hn(RegExp.prototype.test),Sl=fD(TypeError);function hn(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return _m(t,e,i)}}function fD(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return zm(t,n)}}function ze(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tf;Tw&&Tw(t,null);let i=e.length;for(;i--;){let r=e[i];if(typeof r=="string"){const o=n(r);o!==r&&(sD(e)||(e[i]=o),r=o)}t[r]=!0}return t}function dD(t){for(let e=0;e<t.length;e++)mi(t,e)||(t[e]=null);return t}function ds(t){const e=OS(null);for(const[n,i]of MS(t))mi(t,n)&&(Array.isArray(i)?e[n]=dD(i):i&&typeof i=="object"&&i.constructor===Object?e[n]=ds(i):e[n]=i);return e}function Tl(t,e){for(;t!==null;){const i=aD(t,e);if(i){if(i.get)return hn(i.get);if(typeof i.value=="function")return hn(i.value)}t=rD(t)}function n(){return null}return n}const Aw=dn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),m0=dn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),g0=dn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),hD=dn(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),y0=dn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),pD=dn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Mw=dn(["#text"]),Ow=dn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),v0=dn(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),kw=dn(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),tf=dn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mD=ri(/\{\{[\w\W]*|[\w\W]*\}\}/gm),gD=ri(/<%[\w\W]*|[\w\W]*%>/gm),yD=ri(/\$\{[\w\W]*/gm),vD=ri(/^data-[\-\w.\u00B7-\uFFFF]+$/),xD=ri(/^aria-[\-\w]+$/),kS=ri(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),bD=ri(/^(?:\w+script|data):/i),wD=ri(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),RS=ri(/^html$/i),SD=ri(/^[a-z][.\w]*(-[.\w]+)+$/i);var Rw=Object.freeze({__proto__:null,ARIA_ATTR:xD,ATTR_WHITESPACE:wD,CUSTOM_ELEMENT:SD,DATA_ATTR:vD,DOCTYPE_NAME:RS,ERB_EXPR:gD,IS_ALLOWED_URI:kS,IS_SCRIPT_OR_DATA:bD,MUSTACHE_EXPR:mD,TMPLIT_EXPR:yD});const El={element:1,text:3,progressingInstruction:7,comment:8,document:9},TD=function(){return typeof window>"u"?null:window},ED=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(i=n.getAttribute(r));const o="dompurify"+(i?"#"+i:"");try{return e.createPolicy(o,{createHTML(c){return c},createScriptURL(c){return c}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Lw=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function LS(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:TD();const e=ge=>LS(ge);if(e.version="3.2.6",e.removed=[],!t||!t.document||t.document.nodeType!==El.document||!t.Element)return e.isSupported=!1,e;let{document:n}=t;const i=n,r=i.currentScript,{DocumentFragment:o,HTMLTemplateElement:c,Node:u,Element:d,NodeFilter:h,NamedNodeMap:p=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:g,DOMParser:y,trustedTypes:x}=t,b=d.prototype,S=Tl(b,"cloneNode"),C=Tl(b,"remove"),T=Tl(b,"nextSibling"),M=Tl(b,"childNodes"),A=Tl(b,"parentNode");if(typeof c=="function"){const ge=n.createElement("template");ge.content&&ge.content.ownerDocument&&(n=ge.content.ownerDocument)}let R,k="";const{implementation:P,createNodeIterator:L,createDocumentFragment:I,getElementsByTagName:V}=n,{importNode:F}=i;let N=Lw();e.isSupported=typeof MS=="function"&&typeof A=="function"&&P&&P.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:z,ERB_EXPR:te,TMPLIT_EXPR:$,DATA_ATTR:ce,ARIA_ATTR:U,IS_SCRIPT_OR_DATA:J,ATTR_WHITESPACE:ee,CUSTOM_ELEMENT:ae}=Rw;let{IS_ALLOWED_URI:_}=Rw,Z=null;const oe=ze({},[...Aw,...m0,...g0,...y0,...Mw]);let se=null;const ue=ze({},[...Ow,...v0,...kw,...tf]);let de=Object.seal(OS(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),he=null,we=null,fe=!0,Ee=!0,$e=!1,Je=!0,Be=!1,Pe=!0,Me=!1,wt=!1,mn=!1,St=!1,Yr=!1,or=!1,fo=!0,lr=!1;const Sd="user-content-";let Xr=!0,cr=!1,Es={},Fn=null;const Zt=ze({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let oi=null;const Kt=ze({},["audio","video","img","source","image","track"]);let ho=null;const gc=ze({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qr="http://www.w3.org/1998/Math/MathML",Gi="http://www.w3.org/2000/svg",gn="http://www.w3.org/1999/xhtml";let yn=gn,Cs=!1,Yi=null;const Td=ze({},[Qr,Gi,gn],p0);let ur=ze({},["mi","mo","mn","ms","mtext"]),fr=ze({},["annotation-xml"]);const po=ze({},["title","style","font","a","script"]);let li=null;const Ed=["application/xhtml+xml","text/html"],yc="text/html";let gt=null,Ai=null;const mo=n.createElement("form"),go=function(q){return q instanceof RegExp||q instanceof Function},yo=function(){let q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ai&&Ai===q)){if((!q||typeof q!="object")&&(q={}),q=ds(q),li=Ed.indexOf(q.PARSER_MEDIA_TYPE)===-1?yc:q.PARSER_MEDIA_TYPE,gt=li==="application/xhtml+xml"?p0:Tf,Z=mi(q,"ALLOWED_TAGS")?ze({},q.ALLOWED_TAGS,gt):oe,se=mi(q,"ALLOWED_ATTR")?ze({},q.ALLOWED_ATTR,gt):ue,Yi=mi(q,"ALLOWED_NAMESPACES")?ze({},q.ALLOWED_NAMESPACES,p0):Td,ho=mi(q,"ADD_URI_SAFE_ATTR")?ze(ds(gc),q.ADD_URI_SAFE_ATTR,gt):gc,oi=mi(q,"ADD_DATA_URI_TAGS")?ze(ds(Kt),q.ADD_DATA_URI_TAGS,gt):Kt,Fn=mi(q,"FORBID_CONTENTS")?ze({},q.FORBID_CONTENTS,gt):Zt,he=mi(q,"FORBID_TAGS")?ze({},q.FORBID_TAGS,gt):ds({}),we=mi(q,"FORBID_ATTR")?ze({},q.FORBID_ATTR,gt):ds({}),Es=mi(q,"USE_PROFILES")?q.USE_PROFILES:!1,fe=q.ALLOW_ARIA_ATTR!==!1,Ee=q.ALLOW_DATA_ATTR!==!1,$e=q.ALLOW_UNKNOWN_PROTOCOLS||!1,Je=q.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Be=q.SAFE_FOR_TEMPLATES||!1,Pe=q.SAFE_FOR_XML!==!1,Me=q.WHOLE_DOCUMENT||!1,St=q.RETURN_DOM||!1,Yr=q.RETURN_DOM_FRAGMENT||!1,or=q.RETURN_TRUSTED_TYPE||!1,mn=q.FORCE_BODY||!1,fo=q.SANITIZE_DOM!==!1,lr=q.SANITIZE_NAMED_PROPS||!1,Xr=q.KEEP_CONTENT!==!1,cr=q.IN_PLACE||!1,_=q.ALLOWED_URI_REGEXP||kS,yn=q.NAMESPACE||gn,ur=q.MATHML_TEXT_INTEGRATION_POINTS||ur,fr=q.HTML_INTEGRATION_POINTS||fr,de=q.CUSTOM_ELEMENT_HANDLING||{},q.CUSTOM_ELEMENT_HANDLING&&go(q.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(de.tagNameCheck=q.CUSTOM_ELEMENT_HANDLING.tagNameCheck),q.CUSTOM_ELEMENT_HANDLING&&go(q.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(de.attributeNameCheck=q.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),q.CUSTOM_ELEMENT_HANDLING&&typeof q.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(de.allowCustomizedBuiltInElements=q.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Be&&(Ee=!1),Yr&&(St=!0),Es&&(Z=ze({},Mw),se=[],Es.html===!0&&(ze(Z,Aw),ze(se,Ow)),Es.svg===!0&&(ze(Z,m0),ze(se,v0),ze(se,tf)),Es.svgFilters===!0&&(ze(Z,g0),ze(se,v0),ze(se,tf)),Es.mathMl===!0&&(ze(Z,y0),ze(se,kw),ze(se,tf))),q.ADD_TAGS&&(Z===oe&&(Z=ds(Z)),ze(Z,q.ADD_TAGS,gt)),q.ADD_ATTR&&(se===ue&&(se=ds(se)),ze(se,q.ADD_ATTR,gt)),q.ADD_URI_SAFE_ATTR&&ze(ho,q.ADD_URI_SAFE_ATTR,gt),q.FORBID_CONTENTS&&(Fn===Zt&&(Fn=ds(Fn)),ze(Fn,q.FORBID_CONTENTS,gt)),Xr&&(Z["#text"]=!0),Me&&ze(Z,["html","head","body"]),Z.table&&(ze(Z,["tbody"]),delete he.tbody),q.TRUSTED_TYPES_POLICY){if(typeof q.TRUSTED_TYPES_POLICY.createHTML!="function")throw Sl('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof q.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Sl('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=q.TRUSTED_TYPES_POLICY,k=R.createHTML("")}else R===void 0&&(R=ED(x,r)),R!==null&&typeof k=="string"&&(k=R.createHTML(""));dn&&dn(q),Ai=q}},ci=ze({},[...m0,...g0,...hD]),Rt=ze({},[...y0,...pD]),Wt=function(q){let le=A(q);(!le||!le.tagName)&&(le={namespaceURI:yn,tagName:"template"});const pe=Tf(q.tagName),tt=Tf(le.tagName);return Yi[q.namespaceURI]?q.namespaceURI===Gi?le.namespaceURI===gn?pe==="svg":le.namespaceURI===Qr?pe==="svg"&&(tt==="annotation-xml"||ur[tt]):!!ci[pe]:q.namespaceURI===Qr?le.namespaceURI===gn?pe==="math":le.namespaceURI===Gi?pe==="math"&&fr[tt]:!!Rt[pe]:q.namespaceURI===gn?le.namespaceURI===Gi&&!fr[tt]||le.namespaceURI===Qr&&!ur[tt]?!1:!Rt[pe]&&(po[pe]||!ci[pe]):!!(li==="application/xhtml+xml"&&Yi[q.namespaceURI]):!1},Ht=function(q){bl(e.removed,{element:q});try{A(q).removeChild(q)}catch{C(q)}},Mi=function(q,le){try{bl(e.removed,{attribute:le.getAttributeNode(q),from:le})}catch{bl(e.removed,{attribute:null,from:le})}if(le.removeAttribute(q),q==="is")if(St||Yr)try{Ht(le)}catch{}else try{le.setAttribute(q,"")}catch{}},vc=function(q){let le=null,pe=null;if(mn)q="<remove></remove>"+q;else{const dt=Cw(q,/^[\r\n\t ]+/);pe=dt&&dt[0]}li==="application/xhtml+xml"&&yn===gn&&(q='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+q+"</body></html>");const tt=R?R.createHTML(q):q;if(yn===gn)try{le=new y().parseFromString(tt,li)}catch{}if(!le||!le.documentElement){le=P.createDocument(yn,"template",null);try{le.documentElement.innerHTML=Cs?k:tt}catch{}}const Lt=le.body||le.documentElement;return q&&pe&&Lt.insertBefore(n.createTextNode(pe),Lt.childNodes[0]||null),yn===gn?V.call(le,Me?"html":"body")[0]:Me?le.documentElement:Lt},xc=function(q){return L.call(q.ownerDocument||q,q,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Zr=function(q){return q instanceof g&&(typeof q.nodeName!="string"||typeof q.textContent!="string"||typeof q.removeChild!="function"||!(q.attributes instanceof p)||typeof q.removeAttribute!="function"||typeof q.setAttribute!="function"||typeof q.namespaceURI!="string"||typeof q.insertBefore!="function"||typeof q.hasChildNodes!="function")},As=function(q){return typeof u=="function"&&q instanceof u};function On(ge,q,le){ef(ge,pe=>{pe.call(e,q,le,Ai)})}const Xi=function(q){let le=null;if(On(N.beforeSanitizeElements,q,null),Zr(q))return Ht(q),!0;const pe=gt(q.nodeName);if(On(N.uponSanitizeElement,q,{tagName:pe,allowedTags:Z}),Pe&&q.hasChildNodes()&&!As(q.firstElementChild)&&ln(/<[/\w!]/g,q.innerHTML)&&ln(/<[/\w!]/g,q.textContent)||q.nodeType===El.progressingInstruction||Pe&&q.nodeType===El.comment&&ln(/<[/\w]/g,q.data))return Ht(q),!0;if(!Z[pe]||he[pe]){if(!he[pe]&&Ms(pe)&&(de.tagNameCheck instanceof RegExp&&ln(de.tagNameCheck,pe)||de.tagNameCheck instanceof Function&&de.tagNameCheck(pe)))return!1;if(Xr&&!Fn[pe]){const tt=A(q)||q.parentNode,Lt=M(q)||q.childNodes;if(Lt&&tt){const dt=Lt.length;for(let $t=dt-1;$t>=0;--$t){const vn=S(Lt[$t],!0);vn.__removalCount=(q.__removalCount||0)+1,tt.insertBefore(vn,T(q))}}}return Ht(q),!0}return q instanceof d&&!Wt(q)||(pe==="noscript"||pe==="noembed"||pe==="noframes")&&ln(/<\/no(script|embed|frames)/i,q.innerHTML)?(Ht(q),!0):(Be&&q.nodeType===El.text&&(le=q.textContent,ef([z,te,$],tt=>{le=wl(le,tt," ")}),q.textContent!==le&&(bl(e.removed,{element:q.cloneNode()}),q.textContent=le)),On(N.afterSanitizeElements,q,null),!1)},Qi=function(q,le,pe){if(fo&&(le==="id"||le==="name")&&(pe in n||pe in mo))return!1;if(!(Ee&&!we[le]&&ln(ce,le))){if(!(fe&&ln(U,le))){if(!se[le]||we[le]){if(!(Ms(q)&&(de.tagNameCheck instanceof RegExp&&ln(de.tagNameCheck,q)||de.tagNameCheck instanceof Function&&de.tagNameCheck(q))&&(de.attributeNameCheck instanceof RegExp&&ln(de.attributeNameCheck,le)||de.attributeNameCheck instanceof Function&&de.attributeNameCheck(le))||le==="is"&&de.allowCustomizedBuiltInElements&&(de.tagNameCheck instanceof RegExp&&ln(de.tagNameCheck,pe)||de.tagNameCheck instanceof Function&&de.tagNameCheck(pe))))return!1}else if(!ho[le]){if(!ln(_,wl(pe,ee,""))){if(!((le==="src"||le==="xlink:href"||le==="href")&&q!=="script"&&cD(pe,"data:")===0&&oi[q])){if(!($e&&!ln(J,wl(pe,ee,"")))){if(pe)return!1}}}}}}return!0},Ms=function(q){return q!=="annotation-xml"&&Cw(q,ae)},Zi=function(q){On(N.beforeSanitizeAttributes,q,null);const{attributes:le}=q;if(!le||Zr(q))return;const pe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:se,forceKeepAttr:void 0};let tt=le.length;for(;tt--;){const Lt=le[tt],{name:dt,namespaceURI:$t,value:vn}=Lt,Oi=gt(dt),kn=vn;let Et=dt==="value"?kn:uD(kn);if(pe.attrName=Oi,pe.attrValue=Et,pe.keepAttr=!0,pe.forceKeepAttr=void 0,On(N.uponSanitizeAttribute,q,pe),Et=pe.attrValue,lr&&(Oi==="id"||Oi==="name")&&(Mi(dt,q),Et=Sd+Et),Pe&&ln(/((--!?|])>)|<\/(style|title)/i,Et)){Mi(dt,q);continue}if(pe.forceKeepAttr)continue;if(!pe.keepAttr){Mi(dt,q);continue}if(!Je&&ln(/\/>/i,Et)){Mi(dt,q);continue}Be&&ef([z,te,$],Ki=>{Et=wl(Et,Ki," ")});const vo=gt(q.nodeName);if(!Qi(vo,Oi,Et)){Mi(dt,q);continue}if(R&&typeof x=="object"&&typeof x.getAttributeType=="function"&&!$t)switch(x.getAttributeType(vo,Oi)){case"TrustedHTML":{Et=R.createHTML(Et);break}case"TrustedScriptURL":{Et=R.createScriptURL(Et);break}}if(Et!==kn)try{$t?q.setAttributeNS($t,dt,Et):q.setAttribute(dt,Et),Zr(q)?Ht(q):Ew(e.removed)}catch{Mi(dt,q)}}On(N.afterSanitizeAttributes,q,null)},Tt=function ge(q){let le=null;const pe=xc(q);for(On(N.beforeSanitizeShadowDOM,q,null);le=pe.nextNode();)On(N.uponSanitizeShadowNode,le,null),Xi(le),Zi(le),le.content instanceof o&&ge(le.content);On(N.afterSanitizeShadowDOM,q,null)};return e.sanitize=function(ge){let q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},le=null,pe=null,tt=null,Lt=null;if(Cs=!ge,Cs&&(ge="<!-->"),typeof ge!="string"&&!As(ge))if(typeof ge.toString=="function"){if(ge=ge.toString(),typeof ge!="string")throw Sl("dirty is not a string, aborting")}else throw Sl("toString is not a function");if(!e.isSupported)return ge;if(wt||yo(q),e.removed=[],typeof ge=="string"&&(cr=!1),cr){if(ge.nodeName){const vn=gt(ge.nodeName);if(!Z[vn]||he[vn])throw Sl("root node is forbidden and cannot be sanitized in-place")}}else if(ge instanceof u)le=vc("<!---->"),pe=le.ownerDocument.importNode(ge,!0),pe.nodeType===El.element&&pe.nodeName==="BODY"||pe.nodeName==="HTML"?le=pe:le.appendChild(pe);else{if(!St&&!Be&&!Me&&ge.indexOf("<")===-1)return R&&or?R.createHTML(ge):ge;if(le=vc(ge),!le)return St?null:or?k:""}le&&mn&&Ht(le.firstChild);const dt=xc(cr?ge:le);for(;tt=dt.nextNode();)Xi(tt),Zi(tt),tt.content instanceof o&&Tt(tt.content);if(cr)return ge;if(St){if(Yr)for(Lt=I.call(le.ownerDocument);le.firstChild;)Lt.appendChild(le.firstChild);else Lt=le;return(se.shadowroot||se.shadowrootmode)&&(Lt=F.call(i,Lt,!0)),Lt}let $t=Me?le.outerHTML:le.innerHTML;return Me&&Z["!doctype"]&&le.ownerDocument&&le.ownerDocument.doctype&&le.ownerDocument.doctype.name&&ln(RS,le.ownerDocument.doctype.name)&&($t="<!DOCTYPE "+le.ownerDocument.doctype.name+`>
`+$t),Be&&ef([z,te,$],vn=>{$t=wl($t,vn," ")}),R&&or?R.createHTML($t):$t},e.setConfig=function(){let ge=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};yo(ge),wt=!0},e.clearConfig=function(){Ai=null,wt=!1},e.isValidAttribute=function(ge,q,le){Ai||yo({});const pe=gt(ge),tt=gt(q);return Qi(pe,tt,le)},e.addHook=function(ge,q){typeof q=="function"&&bl(N[ge],q)},e.removeHook=function(ge,q){if(q!==void 0){const le=oD(N[ge],q);return le===-1?void 0:lD(N[ge],le,1)[0]}return Ew(N[ge])},e.removeHooks=function(ge){N[ge]=[]},e.removeAllHooks=function(){N=Lw()},e}var CD=LS();const AD=({activePolicy:t})=>{const{t:e}=Qt(),n=CD.sanitize(e("terms.content"));return D.useEffect(()=>{if(t){const i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth"})}},[t]),w.jsxs(eD,{children:[w.jsx(Sf.Element,{name:"privacy",className:"policy-section",children:w.jsxs(h0,{children:[w.jsx(Xe,{children:"USER AGREEMENT AND PRIVACY POLICY of the Sabsus Platform: 16 May 2025"}),w.jsxs(Ju,{children:[w.jsx("p",{children:"Welcome to the Sabsus Platform. This document constitutes a unified User Agreement and Privacy Policy applicable to the website, mobile application and other Sabsus services (together, the “Sabsus Platform” or “Service”). By using or registering on the Sabsus Platform, you (the “User,” “you”) agree to the terms of this Agreement and confirm that you have read our personal-data processing policy. If you do not agree with any provision, please do not use the Service."}),w.jsx("p",{children:"We recommend that you read the following terms carefully. The document sets out the rules for using the Sabsus Platform, the rights and obligations of Users, and the conditions for processing and protecting personal data in accordance with global requirements (GDPR, CCPA/CPRA, PIPEDA, UK GDPR, etc.), as well as regional clauses for different jurisdictions. This Agreement is written in Russian but is intended to apply to all users worldwide (in the relevant parts, taking regional specifics into account). If any local law conflicts with the provisions of this Agreement, the mandatory rules of your jurisdiction prevail to the extent of the conflict."})]})]})}),w.jsx(n2,{}),w.jsx(Sf.Element,{name:"cookie",className:"policy-section",children:w.jsxs(h0,{children:[w.jsx(Xe,{children:"1. Terms and Definitions"}),w.jsx(Xe,{children:"Sabsus Platform (or Service)"}),w.jsxs(Ju,{children:[w.jsx("p",{children:"The combination of software and hardware that powers the Sabsus website, mobile app and other digital tools designed for interaction between partner restaurants and their customers. The Platform allows Users to register, order restaurant goods and services, pay online, participate in loyalty programs, use gift cards, leave reviews, etc."}),w.jsx(Xe,{children:"Sabsus Company (or we/our)"}),w.jsx("p",{children:"The owner of the Sabsus Platform responsible for its operation. It is assumed to be a legal entity incorporated under the laws of the State of California, USA (e.g., Sabsus, Inc.), acting as the personal-data controller of Users"}),w.jsx(Xe,{children:"User (or you)"}),w.jsx("p",{children:"Any natural person who is a customer of restaurants and uses the Sabsus Platform to order goods/services, participate in loyalty programs, submit reviews and other interactions. The User must have reached the age allowing them to enter into legally binding agreements (normally 18 years) or use the Service with the consent of a legal guardian."}),w.jsx(Xe,{children:"Restaurant "}),w.jsx("p",{children:"A business entity or entrepreneur, partner of Sabsus, offering its goods and services (e.g., dishes, drinks, gift certificates) to Users through the Platform. Each purchase transaction via the Service is concluded between the User and the relevant Restaurant."}),w.jsx(Xe,{children:"Account"}),w.jsx("p",{children:"The User’s account on the Sabsus Platform created during registration and used to access the Service’s features. Registration requires providing current and accurate information (e.g., name, phone number, email address) and creating a strong password"}),w.jsx(Xe,{children:"Personal data"}),w.jsx("p",{children:"Any information relating to an identified or identifiable natural person. Such data may include: name, contact details, payment information, order data, reviews, as well as technical data about the device and network used to access the Service, and other information that directly or indirectly identifies the User. See examples at opentable.comopentable.com."}),w.jsx(Xe,{children:"Privacy Policy"}),w.jsx("p",{children:"The section of this document that describes how Sabsus collects, uses, discloses and protects Users’ Personal Data, and explains Users’ privacy rights and how to exercise them."}),w.jsx(Xe,{children:"Payment providers"}),w.jsx("p",{children:"Third-party electronic-payment services integrated with the Sabsus Platform. In particular, we use Stripe and PayPal to process payments. These providers may request and process a User’s financial data (e.g., card details) under their own rules and privacy policies"}),w.jsx(Xe,{children:"Bonus program"}),w.jsx("p",{children:"A loyalty program implemented through the Sabsus Platform under which the User may accumulate bonus points or receive other rewards for orders and certain actions, and redeem them for discounts or prizes under established terms."}),w.jsx(Xe,{children:"Gift card"}),w.jsx("p",{children:"A digital or physical certificate (voucher) granting the right to receive Restaurant goods/services for a specific amount or volume. Gift cards may be purchased or issued in promotions and are subject to special terms (see Section 5 below)."}),w.jsx(Xe,{children:" User Content"}),w.jsx("p",{children:"Materials that the User posts on the Sabsus Platform, including reviews, ratings, comments, photos and other content. The User retains rights to their Content but grants Sabsus a non-exclusive right to use, reproduce, publish and display such Content within the Service’s operation (see Section 7 for details)."}),w.jsx(Xe,{children:"Cookie"}),w.jsx("p",{children:"A small data fragment placed by the Service (or third parties on our behalf) on the User’s device when visiting the website. Cookies remember User actions and preferences (e.g., interface language, cart contents) and collect usage statistics to personalise the Service."}),w.jsx(Xe,{children:"Pixel (tracking pixel)"}),w.jsx("p",{children:"A snippet of code or invisible image on a webpage or email used to track User activity (e.g., page view or email open). Marketing and analytics services may use pixels on our Platform to gather information on User interaction with content."}),w.jsx(Xe,{children:"SDK"}),w.jsx("p",{children:"A set of development tools integrated into our mobile app and provided by third parties for additional functions. In particular, the Service may include Firebase SDK (Google Firebase platform) and Supabase SDK (Supabase platform) for authentication, data storage, analytics, push notifications, etc. These SDKs may automatically collect certain device data (e.g., identifiers, technical info) and use cookies or similar technologies."}),w.jsx(Xe,{children:"GDPR"}),w.jsx("p",{children:"Regulation (EU) 2016/679, the General Data Protection Regulation—see privacyaffairs.com."}),w.jsx(Xe,{children:"CCPA"}),w.jsx("p",{children:"California Consumer Privacy Act 2018, as amended (including CPRA 2020); see prioritypass.comprioritypass.com."}),w.jsx(Xe,{children:"PIPEDA"}),w.jsx("p",{children:"Canada’s Personal Information Protection and Electronic Documents Act; see myemail-api.constantcontact.com."}),w.jsx(Xe,{children:"UK GDPR"}),w.jsx("p",{children:"UK data-protection law equivalent to EU GDPR; see ico.org.uk."})]}),w.jsx(Sw,{}),w.jsxs(Ju,{children:[w.jsx(Xe,{children:"2. Account Registration"}),w.jsx(Xe,{children:"2.1 Creating an account."}),w.jsx("p",{children:"To access the main features of the Sabsus Platform (placing orders, receiving bonuses, etc.), you must create an account. During registration you must provide accurate and complete information, including at least your full name, valid email address and phone number, and set a strong password. Choosing a unique password and keeping it secret is recommended. Registering an account confirms your agreement with this User Agreement and Privacy Policy."}),w.jsx(Xe,{children:"2.2 User requirements."}),w.jsx("p",{children:"The Service is intended for persons aged 18 years or the age of majority in your country. Persons under 18 must not register or use the Platform for monetary transactions on their own. If you are under the age of majority, you may register and use the Service only under the supervision and with the consent of a parent or legal guardian. By registering, you confirm that you have the legal capacity to enter into a binding agreement, or that you act with the appropriate permission of a legal representative."})," ",w.jsx(Xe,{children:"2.3 One user – one account."}),w.jsx("p",{children:"Each User may have no more than one active account unless Sabsus permits otherwise. Accounts are personal: you may not transfer login credentials to others, nor sell, gift or otherwise dispose of the account. You are personally responsible for all actions performed under your account."})," ",w.jsx(Xe,{children:"2.4 Data accuracy."}),w.jsx("p",{children:"The User agrees to keep their registration and profile data up to date. If your address, phone number, payment details or other essential information changes, please update it in your account settings. Sabsus is not liable for negative consequences arising from the User providing inaccurate or outdated data (e.g., failure to receive an important notice, delivery issues)."})," ",w.jsx(Xe,{children:"2.5 Account security."}),w.jsx("p",{children:"You are responsible for keeping your password confidential and for restricting access to devices on which your account is logged in. If you suspect your password has been compromised or that there is unauthorised access to your account, change your password immediately and contact us. We may request additional information to verify your identity when restoring access or changing security settings."})," ",w.jsx(Xe,{children:"2.6 Completion of registration and electronic consent"}),w.jsx("p",{children:"By completing the registration process (e.g., clicking a “Register” button) and/or ticking a checkbox indicating consent to the terms, you give your electronic consent to enter into this Agreement. Electronic consent has the same legal force as a written signature under applicable law. You also agree to receive notifications and other information from Sabsus in electronic form (e.g., by email, push notifications, or within the Service interface)."})]})]})}),w.jsx(Sw,{}),w.jsx(Sf.Element,{name:"terms",className:"policy-section",children:w.jsxs(h0,{children:[w.jsx(Xe,{children:"3. Using the Service: General Terms"}),w.jsx(Xe,{children:"3.1 Provision of Sabsus Services."}),w.jsxs(Ju,{children:[w.jsx("h3",{children:e("policies.terms.title")}),e("policies.terms.content",{joinArrays:`

`}).split(`

`).map((i,r)=>w.jsx("p",{children:i},r))]}),w.jsx("div",{dangerouslySetInnerHTML:{__html:n}})]})})]})},MD=()=>{const{t}=Qt(),[e,n]=D.useState(!1),[i,r]=D.useState(null);D.useEffect(()=>{if(e&&i){const c=setTimeout(()=>{Sf.scroller.scrollTo(i,{duration:800,delay:0,smooth:"easeInOutQuart",offset:-100})},100);return()=>clearTimeout(c)}},[e,i]);const o=c=>{r(c),n(!0)};return w.jsxs(w.Fragment,{children:[w.jsx(YL,{children:w.jsxs(QL,{children:[w.jsx(xl,{children:w.jsx(ZL,{style:{marginBottom:16},children:w.jsx("img",{src:Zg,alt:"Logo"})})}),w.jsxs(XL,{children:[w.jsxs(xl,{children:[w.jsx(Wu,{children:t("footer.sections.home")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.benefits")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.service")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.prices")})]}),w.jsxs(xl,{children:[w.jsx(Wu,{children:t("footer.sections.product")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.customerExperience")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.posStaff")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.kitchen")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.inventory")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.analytics")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.marketing")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.integration")})]}),w.jsxs(xl,{children:[" ",w.jsx(Wu,{children:t("footer.sections.company")}),w.jsx(Nn,{href:"https://srm-sabsus.netlify.app/service/customer-experience",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.ourServices")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.aboutUs")}),w.jsx(Nn,{href:"#",target:"_blank",rel:"noopener noreferrer",children:t("footer.links.contactUs")})]})]}),w.jsxs($L,{children:[" ",w.jsxs(xl,{children:[w.jsx(Wu,{children:t("footer.sections.demo")}),w.jsx("a",{href:"https://sabsus.app/login/demo@sabsus.com/demo2025",target:"_blank",rel:"noopener noreferrer",children:w.jsx(WL,{children:t("footer.buttons.viewDemo")})})]}),w.jsxs(JL,{children:[w.jsx(f0,{href:"https://www.linkedin.com/in/aleksei-sabitov-507030245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",target:"_blank",rel:"noopener noreferrer",children:w.jsx(d0,{src:tD,alt:"🔗"})}),w.jsx(f0,{href:"https://www.instagram.com/sabsusapp",target:"_blank",rel:"noopener noreferrer",children:w.jsx(d0,{src:nD,alt:"🔗"})}),w.jsx(f0,{href:"https://www.facebook.com",children:w.jsx(d0,{src:iD,alt:"🔗"})})]})," "]}),w.jsx(n2,{}),w.jsxs(KL,{children:[w.jsxs(bw,{children:[w.jsxs($u,{onClick:()=>o("privacy"),children:[t("footer.legal.cookiePolicy")," ",w.jsx(ww,{})," "]}),w.jsxs($u,{onClick:()=>o("cookie"),children:[t("footer.legal.privacyStatement")," ",w.jsx(ww,{})," "]}),w.jsx($u,{onClick:()=>o("terms"),children:t("footer.legal.termsOfUse")})]}),w.jsx(bw,{children:w.jsx($u,{children:t("footer.legal.copyright")})})]})]})}),e&&w.jsx(AD,{activePolicy:i})]})},OD=()=>w.jsxs(w.Fragment,{children:[w.jsx(_L,{}),w.jsx(D.Suspense,{children:w.jsx(cC,{})}),w.jsx(MD,{})]}),kD=j.div`
  margin-top: 150px;
  margin: 0 auto;
  /* Фікс для Safari - запобігає зламу верстки при скролі */
  -webkit-overflow-scrolling: touch;

    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,RD=j.p`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
      width: max-content;
  height: 28px;
  display: flex;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  /* backdrop-filter може спричиняти проблеми з продуктивністю на iOS */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px); /* Підтримка для Safari */
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
  align-items: center;
  
  /* Запобігає "липкому" стану при натисканні на iOS */
  -webkit-tap-highlight-color: transparent;

    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,LD=j.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  /* Фікс для автоматичного масштабування тексту на iOS */
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 26px;
  }
`,DD=j.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  /* Покращує рендеринг шрифтів на iOS */
  -webkit-font-smoothing: antialiased;
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
   max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 26px;
  }
`,_D=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* Фікс для Safari - запобігає зламу flex-контейнера */
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  @media screen and (min-width: 768px) {
    /* Стилі для планшетів (якщо потрібно) */
  }
  
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto;
    gap: 20px;
    max-width: 1400px;
    margin: 0 auto;
    
    /* Перший ряд - 2 картки */
    & > :nth-child(1) {
      grid-column: 1;
      width: 151% ;
    }
    & > :nth-child(2) {
      grid-column: 2;
      width: 151% ;
       margin-left: 53%;
    }
    
    /* Другий ряд - 3 картки */
    & > :nth-child(3) {
      grid-column: 1;
      grid-row: 2;
    }
    & > :nth-child(4) {
      grid-column: 2;
      grid-row: 2;
    }
    & > :nth-child(5) {
      grid-column: 3;
      grid-row: 2;
    }
    
    /* Третій ряд - 2 картки */
    & > :nth-child(6) {
      grid-column: 1;
      grid-row: 3;
       width: 151% ;
    }
    & > :nth-child(7) {
      grid-column: 2;
      grid-row: 3;
        width: 151% ;
       margin-left: 53%;
    }
  }
`,zD=j.div`
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 16px;
  width: 343px;
  min-height: 332px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  /* backdrop-filter з підтримкою для Safari */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  
  /* Фікс для рендерингу тіней на iOS */
  transform: translateZ(0);

  @media screen and (min-width: 768px) {
    min-width: 343px;
    width: 100%;
    max-width: 740px;
    height: 388px; 
  }
  
  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 388px; 
    margin: 0;
  }
`,jD=j.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 8px;
  /* Покращує рендеринг тексту на Retina дисплеях */
  -webkit-font-smoothing: subpixel-antialiased;
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,PD=j.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-80);
  margin-bottom: 20px;
position: relative;
    z-index: 101;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  /* Запобігає "підскакуванню" тексту при завантаженні на iOS */
  -webkit-transform: translate3d(0,0,0);
    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,ND=j.img`
  width: 100%;
  height: 109px;
  margin: 15px auto 30px;
  border-radius: 12px;
  
  /* Оптимізовані стилі для фону */
  background: 
    rgba(255, 255, 255, 0.03),
    radial-gradient(156.48% 245.47% at 14.29% -16.72%, rgba(0, 0, 0, 0) 0%, #000 87.76%);
  
  /* Виправлення для iOS */
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  
  /* Оптимальне відображення зображення */
  object-fit: contain;
  object-position: center;
  
  /* Фікс для Retina-дисплеїв */
  @media (-webkit-min-device-pixel-ratio: 2) {
    image-rendering: crisp-edges;
  }
  
  /* Специфічні стилі для проблемних карток (3, 4, 7) */
  ${({src:t})=>t!=null&&t.includes("card3")||t!=null&&t.includes("card4")||t!=null&&t.includes("card7")?`
        object-fit: contain;
        overflow: visible;
        padding: 0;
        -webkit-transform: translateZ(0) scale(0.95);
        transform: translateZ(0) scale(0.95);
        
        @media (max-width: 767px) {
          height: auto;
          max-height: 109px;
        }
      `:""}

    @media screen and (min-width: 768px) {
  height: 212px;
  }
  
  @media screen and (min-width: 1440px) {
    height: 160px;
  }
`,BD=j.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  /* Фікс для Safari flex-wrap багу */
  -webkit-box-pack: start;

    @media screen and (min-width: 768px) {
  
  }
  
  @media screen and (min-width: 1440px) {
  
  }
`,ID=j.p`
  border-radius: 24px;
  padding: 4px 8px 4px 8px; /* Уніфіковані відступи */
  width: auto;
  gap: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: #ffffff; /* Використовуємо явний колір замість змінної для iOS */
  align-items: center;
  display: flex;
  height: 28px;
  position: relative; /* Для псевдоелементів */
  
  /* Оптимізований блюр для всіх браузерів */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  
  /* Виправлені тіні для iOS */
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  
  /* Покращений градієнт з фолбеками */
  background-color: rgba(30, 30, 30, 0.5); /* Фон для браузерів без підтримки backdrop-filter */
  
  @supports (backdrop-filter: blur(16px)) or (-webkit-backdrop-filter: blur(16px)) {
    background: 
      linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%),
      rgba(255, 255, 255, 0.03);
  }
  
  /* Виправлення для Safari */
  @supports (-webkit-touch-callout: none) {
    background-color: rgba(40, 40, 40, 0.7);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
  }
  
  /* Виправлення анімацій та інтерактивності */
  -webkit-transform: translateZ(0);
  -webkit-tap-highlight-color: transparent;
  transition: all 0.3s ease;
  
  /* Псевдоелемент для покращення відображення градієнта */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
    z-index: -1;
    opacity: 0.5;
  }
  
  /* Стан при наведенні */
  &:hover {
    background-color: rgba(50, 50, 50, 0.7);
    box-shadow: 
      inset 0 -8px 24px 0 rgba(255, 255, 255, 0.05), 
      inset 0 -5px 6px 0 rgba(255, 255, 255, 0.05), 
      0 8px 20px -8px rgba(0, 0, 0, 0.1), 
      0 4px 6px -2px rgba(0, 0, 0, 0.1);
  }
  
  /* Стан при натисканні */
  &:active {
    background-color: rgba(60, 60, 60, 0.7);
    transform: scale(0.98);
  }

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,Jl=j.img`
  border-radius: 25px;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  margin-left: 6px;

  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 4px 8px rgba(0, 0, 0, 0.08), 
    0 1px 2px rgba(0, 0, 0, 0.06);

  background: 
    linear-gradient(315deg, rgba(122, 121, 122, 0) 7%, rgba(172, 172, 172, 0) 86%) 
    rgba(255, 255, 255, 0.03);

  -webkit-transform: translateZ(0);
`,HD="/assets/card1-DKryc5qz.png",VD="/assets/card2-D2DHc8mE.png",DS="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_14721)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_14721'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_14721'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_14721'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC6FBMVEUAAACqqqqxsbGqqqqqqqqsrK2urq6oqKiFhYWrq6ugoKCvr6+srayFhYV+fn6np6mioqKen5+oqKisrKyqqqqrq6tlZWWpqamqqqoLCwsCAgIFBQYHBwcJCQkEBAQAAAANDQ1OTU1gYGD///9CQkJiYmMrKipbW1tdXV1mZmZQT1AxMTEPEA5M2mQcsftoaGhQUVAwLzCZmZntZV0oJygUFBQctf/7+/seHh5FRUUgICAZGBkJDhCWlpZM3mX/5V9RVFL/4F1OS0wcGxzfpehN1d3XTNCRkZFXV1ciISMXFhb/jgDc3NwUdKHSvaBQWlILIi0LFhgSIBQTExEdEgj29vZX0+xqamplZWVMwWDzZ18YNztDPBsQCwcYxvccsPfs7OyioqJL1GJMzWL43l1QZFQ8PDyPPTktKy0kJCRHIB4DCQxZ2fIbquwWhLeCgoJycnJwcHBIYWgNSmZNtV4OPFM6oUwKLDxfKicmJiZTJSMIGB8oGwkan93JyclHvce7u7vYwqQ6naQ7j5w9doV2dnaIemhNWV1OfFYgSE9MHUkMMUOikT1HQDeFOjUkDyMZDBi4aQIXyPrx8fHlqe4euuZUzOTcTtXT09NJy9MZmNK+jcVBs7mkpKSRbJYQZ46JiYmGhoZNplzu11pFwlpOjVkNP1hCvFdOblRPPVJOYFGunEKZiTo4ODhnXCkPIyRaUCMaOx9AJQXgfwHviAAZxfUisdkjr9UYkcjCRbwtmrisgLNDoLK2QbGvP6nTvqE4g5SKMoUsbHSPgW1sbGz3aWHyZ1/wZl7vZl5aRV5yaFi5qEebQz6ZQjxLRTuQgjcpazRyMi45NC0QHiBNRB06NBcyFxZ3RQPTdwEZxPUbp+jGk87Fk83CkMooo8Qtmrm+RLgXgbJBm6wUfazbxaeeOZrDr5WLM4YTW30lYGRNqFzjYVngYFlbI1jizFXeyVROaFN/czE4MisrEypSSSAzLhepYQLPdwEjG5luAAAAGXRSTlMApfb1XV1dFefHj10H9vbsnp6Fbm42/j49P+0obAAABeBJREFUWMPF2HVYE2EcB3C7u++tu0NqY7BNNl2hyAwMlLkhqKhYgB2IgmB3d3d3d3d3d3e3/ut7wzkT3lMf/T7s+T4/9tznud3d7m6X6cfkLJo7S7rJXTRnJobkLJTfQ0w3HvkLMUj58nTQCVy6EXQd8+TLECqeK54Tvk6a+u1/4nOVyhDKtk//7VL66lLsgl7vhvT7imQI5fD69oOpDNWkVOesBvcbglfmDKG830GcXU9jFziVivsDCNN8btcsD7LXqVNHRdug07WkrTJVq2bmaFutVr0cqE6XefPmneKwX4+aNWuqMT58/drVrfGYE2fPnt3RzAZJGxuvblrev3wXFfQpV7p06SYcN2NcpUqVFiNVhzJlylT1xnIgfzc0/WsoKEgmVL68BIU61wjjz5Age43qdFm4cOEpDml71aw5yQvhw1OnTt2qw1xI+/btI83sEN09dK/RxmaTySDNZqu1OqYbubrZbKfNCrkPGPzzZodw2gu7Xpy7ZUAY2x6FhYUlclgfazQaTRifGbB37xEzxoP79u27x4YxE+TBYdS1bdmyZW9bULJCrY70xHjAvd69dw6Hljtt2rSZ0ABhjhUa2jYgoGw7C9IpFAq1kUK9a9WqdQJatrWpW/dPoZ2/A+HwKY0bNw7jkMlDEaVYjtERukIPziBuV926dXuGs0HZJYjrmpiYmELbkJzcUoVx9eHDh78RMD47ePDgBtL7HowQRlLcjSANTmuE5UCQxgkAQj5DLlcWxEWvWLEqFSFVSJSXjwlhR7ekpFYCRnpvb2+DDAi9f1mxYoVhHDHGlCtXbhZCIw4GHnrWCmGjWqHwMSPEBmEEo+dS6KgKpJ1GEDpWPzAwsBvEIoW8DBDhfw6dn1uhQoWlDYEygkJlEIrbX79+YCuIQyLVai8rO4RUK5YtOxmNkLk/PSMuh+jCiLi403aETLGenloOsUMISqFFpHaN7maHpEWc5W7kalmQbeXKlRbao0aOHMkh1DolPDyFjg1TU1MdMiB4tk/Pnj33IPJ2x+bNt55DmNC9e/dN4QRdXLt27ehU5o0NSYPJlStX7mMhQ6pUqTLxIURhZQMCGi8gDUfXqFFj3RoI2SD0BQJOaLcLAl8g9JsQdEKJLoiwQ7a+06ZNe4zIyPvbt+8YQsiCTVOmtJO20cdLlz442NcIQovNZsO0hVGjRtEZ2VJSLHTEDoejIWSEfCUIEkKc9dNmh6SzGQLORojQdhruRr5sENG3z5p1ejAkjpNLlw6LJsRAr5OxAiF+UQq1UiDMEIiNod/6LAL/rjk9CywjxJN+6xXVAO4o3da0BExQNl9EeM+xFOql4lc1l86UFKLnIUVLCkk3WjpA2CD4K4j/AkFWKH5SREREGcxHv2jevPlrAJZHRUX5mgH0DQoKam9lhwj0E8UQugA6f+5ctJ0QbDCZzJAAe7xWa4CEHSI8DaANaBOpAXCNtFkhQIAzxN1psCuAFQJwaEJCQjgAqFVSUpIDAIOHQiFywBV2KLx7QEBAWGu+1dODhw6MAGAWvU7GGHn5UNr9UWu+G72c1T9OYBN6NJQLlQ/xXf8G5EModIXeQ96lHy2w/oH9cQAEUShCdEPEhw0CrRNmzpzZFfANT8fFjbjA836zqlbtoJcPucPTP14qZ8uG0sn/gfgMwwpxLeO9f51kgRECOFYZXLt2bY1SowweOHCghoaOwdLo4+sTqvQUABtkUtZ+Uq9evflKsdONDRs29hPFQXTsvEQUg+hv5V6+Sh0jpFMukn7TdtaE9GvUqNGYLaJyTnl/f/9BIcE96IE5tr+oJWxQshPyl6DL69d/D0W4INlrdPO3IZNySedmzZpJ22jj+PHjd4nifDrWeyUqp8fExEzyYtxGJRAXq6zdokULups0Azt16hSs0QTTcYlGowxVR0Z6aIwqFFWE4UFUNV7Q+Wm1Wj93voxaGm8Vb8pVkuHRWKQB8OkGWNV58jE8rCtcINQz3YQWKMz22K9Y7oJZ00nB3MV+4nwCSMVVVfRT0SwAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",UD="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_13786)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_13786'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_13786'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_13786'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC61BMVEUAAACWoqS5wcXL09arAAAJCQqoAACTe2uAkpyClqKFmqYAAACF1eC2wbsCAQEAAADNz82BAQCLAADLCQgAAAAAAAB5wssGBgbHw7O8EhEVAQEAAAB8CwuNrq8FAwN9jZeEqqrGwq8PAgJqt8qep6+KCQiVprIAAAB5io7i0oW5tJ20HRubpqW3tqpurr2y2M3SpYX1QzVms8SOAQHKxrFpt8qoBQSQ3OPrUUmh3drJw5e9vai2jn2sQDbCuZ9fobXOybasbGyN3eXwtaj/uQD/qwDnAAD/pQDtiQD5kwDzjgD/oQDeewD/vwD/vQDkAAD1sgDt48L/mAHpnwDSfQDkfQDcAQFlamaZYgAjIyXglQDXcwDOAAAtLS/UAAAoKCnHlAnadgAxMjPGAADr37+9AACyAADqCQfmDAohICEYGRpIS077NCb3lwCxtrV4en5UV1o4ODpaqr96h4ypmG2uQEIUExSGQgDLwqZwc3ZobG9iZWhbXWBgscRMmLLGvaTBuqFPUlU/QEMcHB327MvnrpdDRUiXVABQnrd/g4LJdCLyAwH3lgCIQQD/AgB+ztpRbXWdh2iWVABmuMhVpLzSx6xEjqpNfovDm0XidQDWbQD5AQBwwtHc0bSprauipqWIio08PD1dBATVcQDSbABqvc2bnaCgAQF2yNRpn6P7Khy6EBD+Fgm3AQHosJiQlJWDhYg7PT/1LRIlEBG2sZxak5xRiJQ3CQkXCAhDBgZ0AQHQZACXVQDKAACXAACL3eelp5b/opL/e2j/ali/jUDyUw7yFg3MmQvflADmJQBij5P/iXnFdCb3dwJKAQHk2rtqrLSTlYb/lIVifX6Gfmj+XUl/aEipeUCxfz/8oQHmRgH69tuTxsb/q5m8jYJLdIG3iD/+Sjf+QC2XZSfTJwJVnKy3lEupOz3DIB/+sQiQXAGPTwF+PgGXYADmWQCFQQClf1rJbh7/hxi0fRe3fRGmEBHvhxDChQvbkAEuqhzuAAAARHRSTlMADE77+/1fI7i3tQv+/r2h/v7+wEEX/Ove3HpkYSjYt/jZkHhsQD4s/vrkyaSEUfzy6OTgy8SmhHL57erm4cu6s5SOPxm1in8AAAbJSURBVFjDYhgFo2AUkA0Y1ZiIA2qM+A1SsdJkRgdzNQXQhQQ0rVXwG6Qz8XE4OriGKRT++KIOfp9xXfmSgAG+I3OOg8HnTi5GvAZxPHN18fNFAX4uLn4YQgElBAySn+Hiiwb8gABDyIWwQX4QpXgBdoMYAZzSPUgCYRzHca6lghOapEVQXCTKQJRoKqIQa+llieZWF204BD2HAxUETTvPwZcp6KYWdRJ0cBCXFCUIBVsMUtwb+z//e8EK8tGvyv1O5MNzILOqR06k/fTf/kKmnUOn02LZxCzba9ljqj5/QyuWQnGj3xcKxWKxYOhztuUgZmXL1m4/C4LYMkKtPO//uKLrB8TsGbrGWs18K3ByDZJF3v86nl7PbzruzUDM0W6szbKs+UXgZRaSOc6fPacLT6SdZ7/eSkBynkCJBCvzAJ3QNQNZWUM3p0LhMg56yH23rkF2IzzYE6klAkRGOQyQe0HI5BrUyzmMQDgViKo3HbLmDN30I1bhhHCFjGUgk2PQGaWVKjxAOAh0RpUOWdMFKagm8QKPN5XSwhDjGsRGwaCPFJTCAMFGqBGPx71eeGNkwj1OCK/45akK2R11yaeFEI4S/LMnqUgkRarCFXakSj7wSuGAK2nSUyCrORZ60CLQEAec6L15M6cm6eseIeagLkX1ECJjCCdqXFLlUR7NZO5koiG1TFK8yAeSyWQ3IALkoUqF7N+U0k1o01AAwPEVBL3s4Dx5EC8i4hi42w4qiNANKTwqGihtUxpLP0KwhDErenB0TNCwsB06aEKEuoKQpYO2g36EDZu5QujHsFg3Ciu2FLbD2FTQsy9NqOuaQ/YjebzAy5/HS9aDy/87n61WKxeBOOvsLYMh7bDHIovLmm6nZ3b6yyNDproh0/2dr68XVa/WPacYDy1dgqFrt3c8XOSlIsJ5+kM/pgzphaz63pwvdPHu/Bo0r1Em6tNac3rPYohbDV1F/Lp8q8HvRyehAQt9Qguhk6NvWgiYda0Gd58Y093RzTt/K7L5bAsAAEN7Tw2xdEM3PJOTFQDOZLSQRVcUXppTZzTG/a5sdztUMQUV1ZIacuuKRo+3FY3jaNQN2dUdcY8rMoAZvl4q7O8XpDbVC+3adbiZRkpZWqhJrVSDcdvtK9oZVRoAwM6WJJVKtUKhVoeb0kLxFYUdUgZ1LsqEVCtJW4qWIDMME1c//70OAgBFC7xQ9Pn9KaJVJyighUQxrmCUWwFHURbabV6gfBRLC4LAyqIoav8RAIiZplnHyMdMJlO97GAFWtvRz3K5/L7frw5L02ZvvprJVfNe+B7VKZeXriuh0WcbKEsj+XQASyZJLJDOA5pCUBT9824Yet6v6afZRDX7wuZ0uuayOS9L+5vDH2DI9HD0Agxv5GzhMIk5MTKctOUcNOJNJD4dzAw6ZNnNLI4lYyQZCydd2RGWOjyYeWAamhjni4BFc84wFsDxORy3YW+xDEoVCYLneWKAD3ZcMcwGV+IBZ4xMb1LmFD8+MXTlXy31rto4EIUBeAopjVn5EgcT26QImBRbBvIIadN5GdB4YIS8jATWqBHo0owEApF3sGUVUmWsxUUuYD/CPtOeOOBikbPVfqXmn/8cBNJ0Cp9IQdbUwm6api62SEqKx6efzZ6NHXWpdXwNcGX9a2c+Q8UlupzN9lOFw0Nm21JK22YJi3k1bTZ7LBLIuvZRnOA1K550XYciXTdnBYHbQvrlsvSlJNxlha7PmujGjpBkLaW/3TpCpgl1d4qx/yjaGxvzhVEuhF9+63SWvpCcuC8bQ2+wNw4ewVSIbNHpLPIochNG3zfm/hp9N0yl2hHMwjDbrpbLsg4jhllyMI0GpvluEZ5GwXa5WKy2fiQSQgplY1yjh8286lmUp0HgZHWe104QxJxY3bnZYK4UkBWhX+fbPM/8MKSUvlXK5hpNlKrX9Si34WFwFPopx163mjdQDgVkw+CH/yGAGwTzt15VPSB0cf/efeU4zkLxKXRczl+7B6VB1Ss8zCM/OhKR71Ns/e727icIocl4rFmYOJlMgS0cOPRuxheNxsNBgu06tI+iOsLYa4/HE/RpqGIqy0zGcSydrY0TdYjOaGkeDM2jFLKiztc4GfTRyd2NR1m4WtVOVpYRgYXu0DkjNaFxXjph6JSlhGy7hcBpJYu6Il8tV5nNqAcLnXWlqZzEzgr+BLmE7HGhk1Ybmtg6tVMXZqjtK3QWrA9Nri0iuWbYG4z+mnOrqgkmhHJL/bIH9DXVwoQxgi311HPSGmnqJ23UQl+CqTeqB9RBu9903L9ta9pt/wr9290Iou1h/9zIVqvp5Hz2f/gDrzNx1X0c3awAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",qD="/assets/Puzzle%20Piece-CSJDk1Or.svg",FD="/assets/Wrapped%20Gift-y76EkBmv.svg",GD="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_8690)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_8690'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_8690'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_8690'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAADAFBMVEUAAAD74cLxkjv0hDX1mj/0nEL917b6u3n5qFf3oj77r2j4njb3nDH8wIT92q39ypz3lCn3lzD2jiv9rF35oEL0mTz5pij7r0b+tnD8q1n9tm76pzL4lzv7xTL9zUX+uE/5ryL2nh/+sVn1oij+smPzlyb8sFP8rV7+woX+wDf7syP/3YX+xVn7qSP9zlD9v1v+nC/+r1j/x2f9v1n6uDT3oyT7jy/1oSP7rjn7tUf7rzr6nEv9unL7r1X6qEz6kzv+zlr/v0f3tSX7uTT+pS3/14P/sS/8sS7/ul77rzL8rFP4w0/+vV/0mR79uEj7plP/xWb4qjD/wlr7rzz7tFT+umD3lx77jj79rFv7pU/1qC77oE//u278jjX8sTnynCP4ojX1kSn8p1v6t27+0JT8y1f/xUn2rSb5xUL7tDT9wS79wkn8qSf/1Hn7wDr6sST4oh78piL7zU39sjr+yFj9rFH8oyv9vF3+rVj+yWz8kDX7szv+q1P+uEL/w1b+jTb5tTj3ozr9rVn9jz36xWD9p1f6okz7iy3/rFf/vmr6o0L9w2H8iTT+1n79rFn+tXX8v2X+1YT+rU371mL+0G37xjn+0W/82V382FH811r8wlb6uST+yWj/qVP+uS//tFf/vEX2qy73ukD/lDL9ljX+wDf+1n3/pzL/yVr5pz78nSP8nED5qSD+0m36sVT/oTH8mkf3tTH/u0f/nDT/wD70oiz8qmT/4Tz94Dv42zn/5D/73jr63Dn/4z796U7/3jz63jv840H83j//2T3+yzf+0TD+7XH96lz96lX+1Tj+vyf/4Tv+5l/+5Vb/4EL82DX+zC38yin/6o//5XP/41r/4lD+3Ub+0jz+xjf/tzP+6oX/2XD962v97GT+5mT/3mT/2WL97Fz/y1b/31T+2k7/sE785Er/4kn95Ub90UD/4zz62C//yC/9vi760yr8xSb7vCP/55f+5n3+6nz/6Gv+1EX+tif6rCL/4I/+4Xn/0Vv/1ln90lD+xj//zS7/tUWXt6Z2AAAAt3RSTlMAAgYDDgoEFAgiGCsYEAoHRTcnIRwWj0hDNTEwEv789PLJrHhvZj0mIf39+/n27uvn3t3a0LmnhnVvalRRUU0+/f38+vry7NfHv72wrquooqCempWRjYR+enRubGhgX1lXVEQ9G/r68fDt6ejo5ubk497d2tTU0c/Ny8vHxr+5trKompWRkYqJhYN/dGtdXVxKOy/++vj29vXz8u/u7u3o5NzX1tPRz8nGxsG0saegnpaLfHt1cGSfnQKkAAAFM0lEQVRYw82WVVRbQRCG40qQJFCguFtxKFAKdXd3d3d3d3d3dwukCYF4grtLcVqgtFi9vdA+lMhlt6fntPNwH3bu+c7u/LP/Dub/DuzfApH1/hLI2Al9w3qgW7abipommRLBOPjhwah5ih0ZDESxGYeaZwx0BKx1r92oedY6BzCQo/cgElrexKsjGMjk3AZdtPyU82PBQMHHlk1Dyx8o2QUG2pvtfhgtP6pkCx5I/UEFFvvRfhhWYgPUSOwbRZVDUKqNsynpZQayob2uxd/moAhs1uu7D0Aj6Tyb/z5NJL5+SKtwVJ9MDxPUhqZRj7R5css1KYXPF4nd7+8/bMoma7ifJh5VbmiNRKJN2bHOslNBflEclytQJFR2tly+JXiaOqijW1WhHbo9EOkBvuYJEgGfL5BIKuY+OKTRmAI7VRYOb7VE1MdzEhUCgUJi0ddYT4v6nzI+9cO1SsKNOZugUHw7vk2bVRD7FYg/rzbEtE4yUkokygEMrbKuTBblz6cDNFLbhYmJPbR7JN27tiy5exsAEPGeUtmboTUdckIal/whEAMQ7Wsahmq394DsWE7MhyEg13aii0uQ9rYd8LGMk/putQ4AyMCqnfYSUL2T47hxWUBFYi6eZ6o1Gehax+FG170bBOAkZtYraFolXfYuFgGVJXWfANBJ/nd1tXHWu2aV81+/jk5Jmjuh9e7e+UizaDpBS7OTYvmvORyOICX/ghG9NenGa3olCG0D1s7IlkZwuQgHIaVVZPY0CjVEZYUaN5sBnqRHITLINJajqfG44Rsuzfgck8rlcpENRUcjJFF6RmaPmw+fjtc3YLLNiDgSFo9VPYIT8tGbZhr8YtR2mz6rvLwuWnYuLEhJLYvjc7l8ThgSv1Bi58zMbt08Pa+u2ei/deS+EFbL4pJIzV9dsiGNZRIyeuByy85f64tS4zh8PoL5LQQiRcJbZUNjN881/iPH69NpFCyqiuyQYT6d8t+/jymNEoaFRb5sDh6v6RufYN718mZ7A0Mc4KRDHbN2+sek2tyI8ihhJALhhYeHvwyLElXN9LNnokLUtX9+5WhWlvRVRFRkZBMmPDJKaD6zvz4BAx30we7JtQhJiICaOIou1pOJfzTgEmxn5UlzkS0hnDc8sZURG3gTBLaKoc+KyZWXCxHOm0QrWyL4aZgdVNzIyEKGVIkXXp3YpT0FoiyhI7EqduSbJkfO9qa6xs8Qpr6Tt6qOJbbmEfLSyOq3VhOhhNq3kaj2xgjlEbzqGmsdKNDOazTV8vuJI+S8RJf2UBycv+cRtTemqlQe/7Yd3MnM7qg/A5O6pCGgRXQoEHNxQ5Ca284TyXg11oZQIH0rpdpTyV6R/irepT8FCjRCWenrpPqi+4llisYRUByHngnxGdtUxwCjjNz0RntgCJbCsvMxjw+TOA8wZpBatKRzXUU7fQCCLtlp6kG7Xf28p4slwlKhRNlj/ZDd4w4aO+n+5E3uGlOxiAkAIukyWFNG9znzpV6UFiuTlQvTv1qu2n7AhPZrwjWYHSuGEI3Qpu/JlJicHGlO3um+HWm/aUftWZTRH8ZdCYHueTlSad6SCYSW672LneFEwwedkslkS/RVlwd/6WqPgQrCplR5cYDa8p7C2QgcKuwtYheoX6pJbkuZkCCDBcW9CeqrHrfNIEE6vvWD8erTn9dmHCSIuMnCVkPp+uzAQAZ+qNskDXY3cCwGNkZ7GGhY3dMBGtRhJVXTaig0yMFG04xg6ggNYo3SpA+ZAQ0iOOA1GQQWGoQnYDH/KH4AT4/pyTh2s94AAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",YD="/assets/Laptop-BHBrFA-I.svg",XD="/assets/Credit%20Card-BYaCUoPT.svg",QD="/assets/OfficeWorkerLightSkinTone-CYMRvt7K.svg",ZD="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_8730)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_8730'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_8730'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_8730'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAb1BMVEXZ2dns7Ozk5OLh4d7e3tvb29rn5+bZ2dnZ2dnp6urr7OzZ2trZ2dnZ3Nzp7+/p6uoAAADZ2dnl5eTc29vk5OPn5+bq6uri4uDd3dtaWlrh4N7f3tx5eXgKCgocHBxeXV2srKxvb24XFxe9vbu9vLslJnuQAAAAEHRSTlPr6+vr6+vq4/mUk5GQGRoai2KSFQAAAUVJREFUWMPt1ttugzAMgOGsLdDjthgogWyj7fb+zzibDCOkIWbwBdL401CM6Kdc1rwc46fZxcdnc8ivCuUHE19Vik2cq6QKwXjj7yCEr/VWmEef9Z8jtAGVNopQ9ntAGzKgC9V8h9tu7r4JUqkPQQ6CchiC4PNN1Bf0oKIpww33x4egxx3wV/TB3UAZLrpC/S6qhoIjiIP6VVQf2nZDJoWygtsuEaq4QgoVFbdCf4I8J4c8tzW7bqhKGVRWntstEXLeO0/bTYAcRkADcV4KecctEYp0oGgelDqX4gpQyjkp5FJOF7J0Z6dClhZBPEyB7M8iyGJhlEPWtlRkDA7BkkOp5QxBLZWKIT5RgMKMl/knshonIkL1RCu0Qiv0jyHpP7ZB6FaXgurbAISSMNuHprdCK9RCiQ6UmNNew9mfzOWcmNkl58s3q1BjYWuX37MAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",KD="/assets/Shopping%20Cart-BfhegbxF.svg",WD="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_8744)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_8744'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_8744'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_8744'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABs1BMVEWqX1/b29sAAADf3t6qXV3g4ODd3d2wa2uuZ2e1dHSwaWnf3t6qYF+xbWyrYGC9gXzt1sSvamje39/EjIarYWGsYmGybGq0cW+3dXLf3t7lyLyqXV2tZGPEi4W9jIrz5ty+gn3EjYfatazgvrCxaWixbGq9gHq3dHG3dnK5e3mzdnTAgn/i2NjKl46uZmW5eXXd3t7WysrZzc3hwbTc3Nzb29uqXl6qXV2rYGDe3t6pW1uuaGjf39+rX1/TxsbW1tY4ODhPT0/Ux8euZ2dSUlKsYmKtZGShoaE1NTXPurqtZmYzMzPT09PR0dGwbW1TU1NLS0u3f39UVFRcXFyJiYnX0NCzc3NHR0fZ2NiycXGvampNTU1ERERBQUHWzMy4gYE6OjqcnJyva2tfX19ZWVk+Pj60d3ezdXWxb2+6hoa5hIRlZWU8PDza2dnGpaXOzs7DnZ22fHxubm5paWmfn5+1enpiYmK5ubmampq+j494eHhWVlbZ1dW+vr6vr6+Pj49sbGzJycnFxcW8i4u7ioqqqqrCmZl9fX3LsrLIqqqjo6PFoqK/k5ODg4NycnLQvr6kpKR0LcIbAAAANHRSTlP+/QCB/XyPi498i4L9jPhrB8uPQvPuuKuKfw7+5VExAWU8GBTSw6eagnhVTUkp8b2Qj3wbsqjXuQAABgtJREFUWMOMk/lPE0EUx59NtWpKDwtC5PC+o0Yt7w2zrEZx17SJS0rChvYHNmlMDxKPqv0BgxoDIV6J/7LvzS4sxS30051lBmY+vPlOB+5kxsbGMtErMzV7IX82c4BocNa0s0Jm7mKJe4Nk7sJpUJA1AMD9G6WrN+Ag6fCdlheD2fHiXCqfI5rGdMx0+gyctm1bGQBsuDb3+AGC9BJBHC9O3mFRbmZimnAPIhGBAmORNnOpcLE0mYNhGqmLxgqXp2bnLk9N0KCILbYdymbuXkylUlcnMdkDKLLc9VsFmVbIj4uJG0UiwZSFNwsp4fJMsgaNCKh4NSVcOK9RoEiUFY/NVUH2UspwpYj/e5joJ50vpAy3CA2xSNJlGeQj0bUEUSQzogspwxQNVGRzRiA52TgZzihNDAkpck2Uwv93nQZPDWwJWxjPS9H3zuPA4lgCEJV0TyKayuJgRiAl2cY2cXO2lC8ecfhomC7enr00mSNjiTOylYmaUHHLjWcRUAMQJYdkoHQuTcYjHx1tLTx9909And26md/748LOjjq8QVQdheQ1CV2fJXWXqNMkqrYwFNmiwsb6W117syF16PerHlQqsQgNrKuzqN7htTWFEFhEbV/rZtc2InM97FC0tqEjkR2LompcfrsKsepyRRai4wKqJYcHS/tbs5U6LILDIqfFAXQ9olaPVFBT2u8BWRsdrWoBRCI5fLSOEakqIvpVoiZvzasDSVXKt/gX9Sgjc2ZRRYczwv2C6k2OyOd5fZccnwOvt4EaLR6090RKSU1HbA1FFPQJ+12HvE1PO70mUW9baRm43UAZkW2LaEhFsWvJRXQbCp2Gg1BVMgBSDYdU09oPG0GBZNRb2zYV/V5vighjD1fUQmxtWHzYLe0EG4paO0u6udnXTq0fhY3ez5rW3up77a3/UJp040nFUZUKaka2ZUQ+Z9tpOWS1PI7FV1jvV7XV41NrRxXJV+hvq/N2LSDYnf/Z84PKWlerypOgxljR1ZBIodNmEa9jKyERNyG+tNhd31rd+u1wpLvSe74NqH5srQqBDkXuThegtmnp+qavq906oUB4QMSHj53tzb5cOEQv6NYsSdxrt9u+77u49zVyAVwX0OGglasw5KCI19tyg4E7ANJDMB3B9MMxciPEsMUa3BehmYTDiZckoQ0sGrOOY4mfBKryVPe4DQ+fJ/OEH4N0jucRnFsYjbI8ZX6SOQmnykcznzCe/48TJ+FceVTmI0miaHhFC4uM2chiAgsjixa//3r58tPXN+Xyu1+fXg5i/sD1jST6+vHF8vKLD0/Li19ec4/7Mt7j2ee18igZLb769vrFyspKJFphllfMWz4Mi0bZ2sK/1uqnNXEgDAM4i8fe9uZ36GEPM4eBASew0IE0EBohhRhIiDllgqClEaX1D4inlv3I+77xbYq2IU7oE2KScfj5jA5YvePnfzR6cM4Dja6CxCgNYHI9fztibLcZn+Vt7TjRquyG9kcngmNVwCtAl5H/nCiK7kQn5M39KPKnKV79BUGf24d5Wxz3WOeGnGW+788r+XgBwYGOvPMhWKgbCp3xTLLRNvTDxX3DUK1ZAcNFU4i1L20WZAcu2AkqECKi9kQaQp7OCrVBm73E62gxCScNRBz0xVGPXQGVpWBfIVqZWE4gVKh7QxIUT+Lne/qCaHm7AAc9ZgUVBFHQE5sYAoXsoDzOszNI7NYwBoUsIYMQGXXExuR5/iS5HfRschM0jWCy2P81eZJ5zBZK8oQgyjgxxqSS20LKIEQrw0KRMirwmC2UqUSdIMLeVJIkqeB9oClBWOjFR9lj/SHKUSulUsntIa00QPTbi5dQKU2FekN4Hl0qZA0FAK0/liariVbu1GP9ILeB+MpVWi0l7wO5n5CoYirUDv3uhjgr312tNRTq2+jBOxV6zbXGQj0hjVBdaI6FUsl7QdMaAobL18R1XdpD1lB5WKbp4ZFhKrhdVox3Qvw7SWLovfqWd0Ftob8/Rie/CmqrhQgpnVCLQsMIkWS9NE4uxwOV66A/v34iAN3e3AwGzTkYDuEFH+DxMjQ0PM2h0N3tfwRK6yPQabH+AAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e",$D="/assets/Cooking-D0q0Sqcz.svg",JD="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_11347)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_11347'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_11347'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_11347'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC7lBMVEUAAACIDgbyEAl1MS38HhexGhWoEwx2EA5paWomGxoVERGNjY6PXlwkHB39HRWhGhQgHx+pGxg1NjY7OzsmIiJzLCofFxgkGRkuLC1VVVdeX2AlICBZQ0x0GRrFs7P3dHDcQUEjHBuKJSAnJSUvMDE4O0BCREQrLCw6OzxrbnJVV1kmJyp8lLDEGhQ2NjavJSGTFA9yDglVVlfDMCv0Hhb8Ihv9Mit2MzD8PTaCg4SQFhDXKiRKS032MyyKFxGUqsY1PEf0GxOlsr2hs8T3NCqzGBDBJyLsIBv4HRbCMSloaGn6Ny33NCr7OC71Myn7OS/2NSv0MyjOFgzkJBvxLCLxMSaODAU0NDSvFg7/QDYtDAqnDwi0DQTTPznjOTKzIBjAIRgzDAvdUUvyLyS0FAz9Rj3/cm39OS//VUz/jIcrJidqX2awMzLoKiAyMjL/Vk21ODR0aXL/cGsvLi6Oen9+bnHD3/m/2/jfHxXI4/n/i4ZuYWXUSkTV7PpwYmTYIhnr+P3NREK71/jb5OckICDmJx3e8/zM5/rk8vihoap4a3LXS0XQR0PiIRfY8Pzd7/m31PbAzduMgobw+v7o9vv/jYg3NzgtLCzeJh0xHh3k9v3Q6/y81/Xi3uB7bXGYXVxkV1np5+nY3eCtvdrbxMjLsLOekZb1SD+YjpOdaWjsRDv4NSt2GhXP6Pji5unL3OfK1t6zw9ydmJ6pLi3T4ei6zOW1x+S5yd7S2d2ztLiRdHmEdXh4aGroPjbjMinD3vPE1ue/0eavxOOSiI2AYWpWSkxJR0joNy7XGQ+HDQfKzNKwur6/oaRub2/+Vk3/S0NBQkLyPzdtNTa4OTTUMispGhm6HRciCAdsCwZMCAWlrLSvp6qGUVi/JyCsHReWHRaiGhOaDwnEEAeqCwLc5+641OyziYqHaXnPUEzVQjusMC64GRSyDAS6wtCMo8DXurzcfIDrgHr/YFr/W1WeSUP3RDv+PTPuOjCMMy/KGxAXBTD1AAAAS3RSTlMAlAYirt7WJ/7rN38gEq7Yyd4M/rgnHPRf/HlwOicPBfvd0Uss0rmmlT0m/Pfu69jWz8K6uK6sp4yAeUlIOiru7uLg397XxcCyr1U6p3hNAAAFLklEQVRYw+3XZVwTYRzA8dkFooJSdnd3d8HGJszZhTm9qQx1JsYZ2ImYWKCAMWcHFiEgiiIgdne3vvP/PM+eu43jBnK+9PvZnd7tf7/djucFyP7LLfu2bm6tigm0cnNra/8XmVIujQtfvVpYCJ1t7JLjVJmarq5xjkFBGoGgIMc4V9fqVXPWqVo99jofEcaux1UrmqP7qR7nqNHo9Bu1Wdio12k0jter5eCeStVEt6PXsmnORQSc01gtpIIca2T/nKrURx3W2cm9SlGBKu5OzuxGuCdHl2xvqAbuFHG3F/uBVmL18KCcsrulovU1Op3W2V18wsVZq4MHVSWbkLtep9OzTqVs3LMTi2Zq2u5UqLERhdxszbiwaIZ+lujHoaE6vW3NlC2CZkrYfkj2JdCQrpbNBVsJh8pkF9KzbBGbodqVWFafg5C2jqaj7VA1HavNPqTVBj6vW9ZmqMululptlqEKeSn7Emmb7pzvUBbOiCrd+fkHbVqlMtyJCuZMu5bNm+U361nvbXrFERV75C9evDgcoo1XHMvfFAbS39ZrSt9t1rxlO9Rq0zX5i99ov9EcPz84EOWH4f9QX8d0aiOTle+lvjZ6BjHOwgZ4AbyHA3IGNmIGvDijk72blJfZNYiPTB6b2UR4gbHwujZx4jXY0DE6QzY8QiV7GRrYyewc+viM6S/JD3VAydIoxHh4jQGwy8TLGj/Aj6OTcl9zyMdD7iWXy72skePve81ueHiJkav5EAEXW/c8Pu+hPn6yLsnJHl+hIqF4X7mcpCiu+/NFIHUnFO4JTpJ7t55TGEhIJYeShyAGJy6H+/uvJaKTImBGAF+nDC5ZTpbPId7TwwIpIHBwOTxs393ExMT3gftMSRGR5G28kR0hj/RGoYIGGMgahO6a1ppMpsA7+06FQkhE5MICKLTCRijE/8yU6OhoU+DZMC4kpzseg0MGtahzIf5rz5729993akpYaJT4HFOgkMyu8sCRovrd40MvHtiYq2wnK98kdYSoV9wdnQlLeiU+l9rdTpavm3qUqAiLUOhe8TklfDV42ApPEYpzlqEIhdiYJ4ND3pYnlUolbGYoFL0jJibm9F0UUimtwTQMewISWiH8CKWnQgF7FAp0jYuNjT0TZkIheiHZU3xIATzNe5xAG1CdC098ZrwCjM+MoVEqbgwP4FGrkAKBKSskFHJygZkx6TKMiOBCKoL8C/PmTaX+FbuD+qZGbwF+nM7TkMqSwurg/ibOUP7jBLiQrxjm4X6zh4zokEq1kIR87t+8eXPSJHgJTXhzhHgzQdR9xhwKDtnG2UWdRIxG4xpLJ7DDxG7qXjBDQgHh64i52GZsEbISmT17C1gMpoOpyDQwH6zGYgK40Hq4fr3ZkiVLILEK4AiAzAHagRAtQYt4SUPBKVMy285Zamny0slZSKEh5vatARLcum1+RgYmI+HB0Fx78DAjeCEJqR8N7CfFI4aGbkQNkSDqhpqGfH0k8aUhJnWZlVkCy63MyySVfrXgkJ3UQWIBcRQ7RFxALiLHsOPYJXCPPuyA8Ll0XaN1Sdc1t7BnCxc2WY1b6crmQkt4q6jZxAGMX9bnAepspVbDyqZfLWWOtZkzZ+Idb/x42MSkcCFY2cNzDVY2F8p4nD4s19IfZdAQ0/fxQAkeJyz0RiGHeJ+o14MleB2lNpSEUMM+jFqhlELNBDiUg9ATg7dEht8OpeH3o6dP+kj0ZCT6/ahFwtN3gyR597Rvi/LwR3OjhL4SJTQqKwPtW+eRqHV72b/zB6dH7PNd6uwuAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e",e_="/assets/Alarm%20Clock-DD59pFfK.svg",t_="/assets/Open%20Book-BEOR4Ehx.svg",n_="/assets/card3-D5Hj3wXA.png",i_="/assets/card4-D9Ii8puw.png",s_="/assets/Package-5iNIs4eP.svg",r_="/assets/CardFileBox-B4wVLkF2.svg",a_="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_7652)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_7652'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_7652'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_7652'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC91BMVEUAAADjkomnqarXYVLGycqRkpnR2dbrsKjrr6iJio9hZWmssLuKjpi0tcNfYWZ8foPR2NSpqbBXW2GDhYtcXmRtb3W7sbFQU1hydHp4eoFzdXt7foRiZmt0eIBeYGefpLHTq6nrsKjopZ2kqLNkaG2YnKdbXmJgZGhTVluvsr7Vo6OYkJx/gITNhXqfpbE+QkWgZWXHXlPrrqa7w9mjNCaqNiiyOSmmNSe+PCzw9/WuNynu9fPGPi61urm3Oiu9wsDTTj7UV0jXYVLCPS3s8/Hhi4DUVETPQjDKQC7e5uLeeW3abF7RSjrnoJfPRjTo7+zMQS/LQzLj6+i7PSzx+fe5vbvKzs20uLbW3OOiqLDf5e3/USv/RSvW29yLj5bBxcS2u8Ktsruorrbq8e/b4d/fRBvl6/PO09rV2deGipD9eVD/aT6iPTDGytDL0c+WmqJ1eH9bWV3/YTfEyce8wcfei2H9hF3lSx/h6Obp2NTP1NHCxszHzsrfwbv9oXdgY2p5YF+rPzH/WzDrRC7QPiHb4OeeoKjWmIxoa3L8m2ttYWP8jWDTa1r7c0Dv7ern6+nQxsKcoqzEn5e6j4mAgonJg3X7gW75iVOxXFHUXE3aZTrhRS/rWijJztWyt7zqvrfaqqCRlJz/vJrgoZdwb3T4jnO+dWvtmGq/aVZaUVRsR0XNaETGUUPMUUKtST3ITDzIRDPtaDCwPS/iUSTvTCTYPxvbzsjozMbPpJrNlYn5tIeJamrQdWjbdGaNgla+X1LNXE1cTE36f0a7T0J8QTv4ajXYSDGTOS35SyjYRCbk4t67yq/8xaXkraXJrKDikoXFjn/WiH22g3ngjm7NbmFGS1F7ek6gWEf/VkPpeT4yNjrESDmLQDj2QzPfWzH5WSvt49/JurbQta7Csauik5j/sI71rHrbgHPmhXKdZF/LdFbZfFF6VUtQczpmcjXW4dPF07fduLKcuH+he2rkW1XuWlXwuaWlvI+rrY2niIqproKHoVxJUCB9WqrhAAAANHRSTlMABgarqi+qqqrupx0aEAnqqv66bFA4/fPp1cmij4ci6K2rqqZyPfHb1s/Jxb+qg+fYx6tgsFQc8gAABf1JREFUWMPN2GVUU2EYwHGcLaACYnd3UnOIDCYlgsoshMEAZeSYEg4cOFEGEtKp0iklIg2igDRISCh2d7cffN5Nj6jHbVeO8f/A4dNvz33v7n3fM5FfhRMXEx34Q6Ki4jgRDOHEpKUmTRg/ftzYsWNHjBgxlBf8N27hwglSUgPFcEIp0jMl544Zw2C4uXkm2NkFW1Bi6R4QPZZiEWxnl+DpOXb8BKmBAq2Bw5ZcvHjhgpsnELH0gG0mVGN7l6Pm5ltRhuY29lQPiwQ3xpxJovwd0fHAuNlRgNhmYkKlGgNjw3UO6uvr7+R20NzYgsGYIc5/oKEXPINjAwJAQc4xY3sEHTU3BAmor5a+id08Uf7QFDqdHkAP8NgG8SjeTN8o1FYbYwGQ+AIKhQIUMJAEUL0loLgLZUylUqfyX+5+/cOLPd1gqS0odA8JCXAAgstzsYFcXOyNj1FN4BM8gjjT+wmAlFWte9LOnEllMHi3P9gCRYG4f2Jjb71vTSq5u26wIEhtg4KcvEx1T2VlWhoCQWQcgvbtKy6+f/9+eEV6BnGt1hrhIFl5ma9Z82Kzc3L0FBQ11qtrKxNVEDREeEheXlZWduVKOTk5JSU9BVVVReTo9BlS+A8h1f9uoj8EDf53EJL6DEE5FaehCr0f75qAhxa3KELjGyTPTim8kcesq6tjsgqSLqn2guKn4vhDA66HVMjJAgOxk27QzMw0NfdsPKxLIujmhWRpIEgtwuduTN5IQdBmo9FBSeFsmCm8iWZoaAgSgkxJBDyJ1Q4PLbGUw6rbqDlIILR61apNm24GBgX576137gWRCATytfj4aKYfnmAqHLRl1abVu/fa2u59+6Le0Ezz6TPNPZqHTfEoMoQnkHSFh4yQZFv/8QUr+l3Hh7L2lqb6Z09JXIwA0B5MkDNr3YMnZaVlj59Yd3aUtYZw8oFBA5nCRCOFh/zjQ0O1Oj89efy4o6Ms5PXrV2u1okHCDPk3JyYm3vMJf/Qy5s290NCuy5dfqZQyyVwIyxoZcdqSEx0tQxNDE2+7Wlp1dRkYuBMj1vhhnqigrS3ZO8wScgx1tNrVtd3A4HIUUSWaTIDFxgBdb3NwSHb1CnNEWVrt2g+QgbsysZmEJ2C6/U0ODg53Goq8XL28HR19EcQdSW0tk4wNKoSBihqKiuJuA2VpxZNgJLg27NCdojtxDQ1xrr2hiHV4PCbo/MOHDslernFxcbe/m4i4hoARevCwOyzMy9UVXRmsEReqQRAJK3S8u/tsmLd3WNhXp6bGPUq5vJmAbY0CU45HdvuehXx9q3btR06ue9S5DGIjxsW+CdCJE1WgVFVdhWpykaOToZKPEVodcjwy8gR0BMrNzXVycopC0F0/vFDf7H6LrhvxHhE00hVATp50gnZAtbXqWeXPybzbnzdV0HbkE8iDdgcCdAUYUFCnTtWqZ2e1+CGIoMuKny5wX0tvHc17HxX4RALERaADBw5kX/JhgkOGV7cwe/96vfCg0QBttr1RQlQ+d662FgxIA5x85Fxr1CoV9hCRGcR91fpzfNS0dXTWa0DZ2ektaB58o0+E8Fu2DDsIQTSaP6ekPCMrKyu9vJ2TbwoMOVpNDdPenxm42dbZmWZoRst7HhMTw2IeJsAi48n5EdrYzkcgIQgk2B910f5IAgfPitDBfNBin/enAdRrpyX7xWSo/86x5nSTM3K+QHg/Vkk29vMRN3ZKoD+Nd2l+zMaSS4q/edCCZDNTQgoLCjgt7emqqn06sfHOfkpKPx39pvX5wN53SPHPQMv5Q2LLhIXmi/OHlmoLBzXPF+UPjevUEAa6VzgAJuLXpEPWeoKh0pDRK0T4N1kytWelIEglSQIGEpC0ZGpatQw/SLm8VWIGWiFBMw0bc6ay+leQ+ob0pFtTFsM8ghs+SnJMahqy5L+DIL2K8Je3psyYhfY04ahhc2czHj2q7Km2tkZYTk4OOzOzs7g4eOiCxcAIH27yqImSc2a7oZ8geCUk2I0YN0FqlpgI5oZPlh41c+LEYdwmTpo5SlpsuEgfwg2HcCJ/rc8oYPvHAwWECgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",_S="/assets/Chart%20Increasing-Dc97XcE1.svg",o_="/assets/Money%20Bag-NiNRycUS.svg",l_="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_8951)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_8951'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_8951'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_8951'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACtVBMVEUAAADfuYniv5Pv8/7w3cfVuJPguon3l0DlxJrozKvt1rr7+fpMYvj4o1Xs1Ljy2cHguorjv5Lguorjv5Liv5LkwZXjwJPjxJ3lyKXt2L7ivpDjv5LkwpfjwZbjwpfjwZfevpfkwpjjwZblxZ3ozavt1rvbuY3cuY3fvI/kwpjkw5nkxJzlxZ3myKPnzKn00a/3lz/Rr4XfuovWtInbuY74m0bjwJPjwJRLYPjkwpjiv5PiwJPiwJXauZDiwJX4plnlxZ3iwJXmxp/4p135rmvvxpz/AAA9VPjeuYvguorqr3LbuIv3mEHguorcu43ptHxPYfHnu4qChNL4olPXuJJQZfjKsKH5pVhWavjny6dkd/r5rmmAkvzguorhu4vgu4vfuYjhvIzhu4zfuonYtYfivIy/oHnQroPWsobRroPhu4rNrILEpHz3lj3PrYLSr4TKqYA4UfjJqH/JrJ3ivY/jsYZIWu/fuozzTUb2NzjMq4HmmXa3oajFpn7tqWT3Pj33lTr2OTnqrG34OzxCV/TbuYzUsYU9U/g+VPc7Uvf3lz/ZuIrXtIfoXFD2QD/4ljv4Nzg+U/TIp3/KqHvaZVXimlTfvI3ZtYnFpX29oXqZiZzcuozbtojduIbRsYbIpn7Bo3vcuIrHp4DLqX49U/TRrYDOq4DxlkL5lTn4NTZBVvZOXedcZttxc8u0m5PTspGxmY7gpX7WrHu8mnTKlXPBkW/eiWzMnmvOd1/acFvln1reaFbgYVPtVkvyREL5OTthaNJ9esCCfLeajK24o6eUh6Swm5+djJ2bip2aip2ij5vKrZeok5e3nIfjs4a/oobksYXbnXnImnbFl3TmrnPYqHO3lXLgq3HnjW/kqGrSh2rGmGjtqGPho2LjdmDgbFramFjuaVjhnFbqZVbfVUrlUkjzPTwYxCkmAAAAXXRSTlMA/W8CBXL6+nEgGgObWBIL98/0w7awpkpBFdq9oJKGgHFjWFMpDuPZyJp4aU5FPAf39O7nz8rIqpeVjox7dmxpZV5cUjIXBvX07+/r6unn1M+3mIuKhXxuYjQzJQ5ZDHroAAAFLElEQVRYw+2X9Z8SQRTATezu7u7u7u52d7ldThCU5c5YRbHBwkIF4zzv7O7u7u5u/TucnoVFRfEnP36Bx5t5876z7O5xdxn+El0z/Oc3GdUpD6ZT53rxeDo3qZ+N0LtdPKJ2ixjjm3TBc7ly5cqSBYTMv+HJPGg8p/6wfKB35JDmuTHNh4+OUVO5fc1+c3T0HFCm3ND+8ykLug3MDihfPiulfPlaHSsbPfmKypq2fr3Xu3jxYq93/XotKMv2a/PmL6Ak7Q0FtZDN6g5shCRvU/1erUgVgyhvdZuqWhFOGFSA4+KueYxdu/eNdbo3HXm/hPL5mK9xF4OoeFWbanW4XQi3w6r6bJb9V6bruW2xqePOnJ9LOX/uYd9ihk9WRPL6U92bPIhNbtWWokmSXVHMGxBmRREULT31yLm5Mylz574IlsobISrRWH166tRqwqfj4zwuh9MRgTv58ZmZSxEzZ8LwLrVajghRnaqHts+atYywY/vxTarPhz5rMgZ4VZv/4LQwDtp6VcocfqoLBZ+M17Hsg8eiael+39bNKzHbxtpCmhwMBuGFhXjBtdU0qUDOMFGOaqlvd8zi7Nj+epzL7QocuHVjHeLm9Tv3NzvQNeVYwSWpGn4r1W3kfP5mhp6XhxzulVd3r1ixZQt4rQBcuLsZXNTkQMCzBuMJBFzuRsX1npylEhMnRpCYKKfuSVrISEq6bE7Q0i0+JzlvLrfVZ0mXCuXQH1DDFIsBv2/f5CQ9e7fabKoj2ZO2FpPmcTlTLd3r6O/GBoFxRtIuTQ5jzwEwN+bw0ROrCKdPn3y1sUEx3TUrE/LbDFhCEyLYD44ycPjrcsrUqVO/HVtcowQTdcwvJ8iyJMkgyBIE5Qn2CERN83tOzNaz82OCqT0TtbH41LEIK3jgd4YVAxPnNlfasy87p+rYeXarvxwXbU4bEyNHT04J5+yj5MGZ6amuHrLEQiglJf3eg0kRpKRUq01/8MXEWEmIQqJYKC++GwuIfFamMTpytJFcMgcTyWQOJjLLjH080+UiF4FupIKRvEdtAYgokdFKBBeVaCrCMamJWEPHVAVzkVc4oJeK8hYSZRE88STIQIQPQw9ZgoOIIwrkO6lKKREio4gWkhFZh95IG9+Kd4h2KiosiNGhSokecXTsTUvg+6iwHawVf010kSRK5D6qV8TO5v4ASZJK4d+3WZoJBo9BKbFoLEuF82FRUTtRg5fBEcPBCkzENoIy44YSDKxu9ApF6mFRaUFCyyUE7mWfn5VgxDI2jQpA1CwLF9klyY4qeA2BDQQ2ZIv4WCiKRblqCHwpR2Am3sn1tCwIXJS5hQCGArOBHGVCmI9UWCLQMWguTURlBARvwymKeg3vRC8UBb2oJd4ARFpha0lO6hIesAJNauTColZkllc4ZOuf04J8+5cVjEg/bjZWyjBRnLQkonLxiloRUet4RWUzYGr+LVH2eEXlqEiJWlZiFrUmoloZUd8fe4SaRFQho0ERi4+XshNRB9PPOhXFWFRIJCMqqmiK5fQY1WaSZKxFRflxK9co5M38YyMXKaYKRFQpP2riIhzNcG+S4+OAXjpDPyQUdSCi2vnNZmBHBwIyQUHrYSN8kh40T8x4CyQB02ZTRSIqVhB4zHASiUCGjhvkSEA3hyJuNSPQqvw6ETQpuAKfCKiAgdjxLgpx8EVAVImI6hQM62XQlM9Hp2Bt+ldtD2PRaPuJqBgRjehjjouGdYmoRGGTKWMcVM/J/n+sVKFt20x/SoXKGf5xuv4lz3dt+bBRidJ7dgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",c_="/assets/Brain-sfxWN5d_.svg",u_="/assets/card5-BEkl4JO4.png",f_="/assets/card6-CUowhhrk.png",d_="/assets/Megaphone-BE75S7po.svg",h_="/assets/Framed%20Picture-B_-bEji7.svg",p_="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_4419)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_4419'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_4419'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_4419'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC+lBMVEUAAABJe0lpeGqwq65SnVJjc2P3+PihoqHCs7yQzKX19vXw8vHb29tle2kubEZkcWhfemCcoZ2A56fy8vJff2GKyKA2p1IkbEA4aEpPd1zOzs5ggGsyz0SQoJMz1DhEml+ysrL3+vhBbVLU1NRngm6kp6WJn46ZoJvr9e9Aok84wUk5zEUyrkmtsa+7vLzGx8bNzs2QkpHW1dVulHhZfGW/v79efGbo6eh3lX69wb6kpaRthXVshnOGm4lkdW5g2G482Ua5wrnY2dhEnFczmVVQlmBJm2TE5tE0dk0+iVykvq3r8e7MzMzY2dl+mYOws7De3t6ysrLh4eHQ0NAxxUlphXHExMQ11zww0DEwwz2np6c1uEni4+NYmnBakWZt3IrS7dva2tr2/PmdoZ9ikW2e1LOLr5hmqIBYkm9PdV5EcVbo6enn5+fl5eW7u7tYbmHX19Y9r0Z0i31XwWeBmYdhkGOmqKd+gH9Gq2Hw8PDDwsI5qUMcaDew3cCq2bskZzzu7u5rm31Mm22Gxp663Mav0rxYemKCv5mcwqmqrazCwsJgzHqI1ZZp24VofW5nvmtqim6cnJx+fn3h8eZ6o4qBgoF6t5HDxMR7oIixtrVlbGmSxJQ610We+MHCwsJkznFCpVmIvplJz12i1qVo5moAcygAdicAcCbK6tUAeicAfyXO69gBjyEAkhww1jQAiiADtBQBoBoLkCsAhCIFuhTG6dLB6c842TwCnB0BpBgTyhq45Mib1K8z2DYUmDIGcysYzR686cuy48Mm0isfzyQAlxsNxRcBrBVJ0FMxoVE82EIAiCKm3Lgq1S4SoCwLmCgJwBSr376h1rSFxZyBwph6vJI0tUAbgT4FhieW0aqG15hBrl83klUjlEgfpD0xzDoOejJoq35ap3ZZxm4siksGfitNtWhE2Eouo0kinEkjg0YMiC4dwC0VpysHrhuQ2qR3zIt54IFjxnxSoW05q1kzi08sfEZotH0+pFsfsDkTuyLH99Cl7bCX75xZNUcNAAAApXRSTlMABTYSChzgLAf+3t3KROpUKCD81RH+/vHm4tq4XUci/uzj4sCndFo5/v7+/v38+Pbz3dzc19PLx8W9sZmLiXBrRUH+/Pz7+u3i29XQsayqoaCNjHVuZFgtEv79/fv39PDv7evr6ung3NvYyre0qqmehIF+fHBvWlRRRCz+/fz7+PTz8+rm4uLh3tawq56Jf1lV+/r07N7d29vWwIZ3XenZz7u4qTzyAo7bAAAGKklEQVRYw6XWZVhTURgH8Lu5UQuY1BgTEMSmFERCCQssUkFABRFElBIVu7u7OzZiTpgwhhubA1FKJiWNktJ26/N47mDGN8/1/+l++j3nvvf83w3BEIIyjaB4NvA95OSPYIuyh41NtKkyDn3GMZnrfJ2xOYPsA1xHBlme9VJGIScnzNAIq+PmriEMRgjDVAtB/C5dYvpjhE4fNwo1syTPNgk5AA7lb0BAsIVoZcmwO29kTo71IZu49E/8FhZsAxkcx5Z81nyc93rPcfNxwGE6OePgZ+1JtnAlzdK0jd5vEbXeG5X8nJhMArTjTV5BCgoizfJMSLC3WIlKCMGZaQDtxJJXaGpuC9oWlUDRoHkByXOcC2LgDPvhVHyAQ9IkbXO1G6KhZXDUwyJqvokJzdnXD87B+ZBXaqqRSCRbo4DZG/yZ8fH2lrGm43wM/CBHNN8EOGokNdu1pkZGc1zifePm7Wd42TFGIHBxMYkCjtrJ4It4/FqbKyYX49ZMdjCysbf0wsE5s+doKqmpKZEOxeGJOBc7C4bHkZgYK3ObEBsa1EU8MGfWUCXg3IxbR8ThcMoe5ubnJ164EOo60kgZZnlEo46SklosBZwHwWkR8ZP2m5mFnrYKMLOCgGjRs22HopA3XgM4BAIRT1GfPNcq1CzgxIlJKv9+ET0GHM81R4loKY6uo6jPmzw54QDD3t500L87XnYrhi4BmXXo4MHDly8fPnzjYDxwKD5zNqioQFxo0z0zT44ESRysyGKQq9eu24ErBOPonQtOASmrnzq1oaGzs7Ox8UtPbuHYhTOHIDBZqzc+OCUxMWVLa0dtbUdS8r27d7LSH2SO3QHrLI+YgTqbP1R/zeb28AacQFhniLW13BEasouy0lPTeEWctPT7mYHTZw6H2/UT9AackiReCYcj43HSUu9nj56+D85R1jfelZKYksJ/x066Xc0Ti8UcAeoYhg+HaipN33g3ep6MZvbt2yxWEk/c0QucMVPDV0M5g4bRgQPSJEEd8MFK8p8/4uZPPQXpOND3yZ1KCbvfuStI7VsAnEkEKMeRHt7vvFA4eWmyxvyC7XCOyip6eGJGRmJi+W/n8aNc1NGCclbTzwVnAEi1Ch20wnmpA+kgw43Hz0AdEXDa2nUUztiFc2GdCLlT1gXOI8vt4f1yiHDFWK63i8/nZ2z5gL5XUZaAk/f4ae7LQFhnxICzuZ7NZoP5FMkEj58+LAycNlcDrhgT3HbzQXIMJVM+1beB+aT1AWf09ImQjj49TCqV8oXv2OL8N/lidHFgcWj61H1SoVAqbJawBE/vp5dw+h3DiXgErmDUvVKhlC9tkrBZHEGWoCQvK/1h5pgpsI4D9YwQnOfba3ChwebgiUvAQsTgOFKX5eTkCKVvelngwycrnFHjKQhcwajLNqNQuTgZLQaYcxomZzU1YktpaU6O9kDB5E72GJ3xxxC4YtDdw0oBpNrFZg84YCEWwjvG7mHFxaWlNa1sSdULcKFRh1s4duk8HFzB9NzCikFEoBi8/NHVmJ3lbjvLysqKRYZgPnnpfZx+59nSNXDOCGvqXpGorEw0HZ1PMkfuPMkEDgGyqLpnRGjeSdjyhQh+wB4BZ9ERAmTBdJfV1NSIapr/chYscoR3VFVrivmqVQoHLETU0YIsqm6Eqqrqq+8/8hslLBZw8uTONAdIx0HXXVsbQG8epsraWEnV/c7zacOIkAXTdd+pDaTXjQKOrC2pseULWKzZ0A5yjOq+s7xcW7uyAfzf4HXz+h58RZ0psA4t0m1vRUV5eWUrO6m7O1km4wjSUEdfA4HLkU07yisqKirrFYUXCHq43FHQjlZkV1fznw5YrMCZAOsgeOrngqrmSkOJ3CkCzgPUwSOwUdete99Q1QqctpLqAWcjcOChrXU6BQ0v0AtdJF+IT7gbrSkIfCi6n98XAAm8Fw8UHrODaNBb2wsKCjq7k+/2ZoHFwX22Rx3BEpWYTe11Ojo6HWL5Asp+pgccTKFQP75tr6ure9/7fw6i4rj1w+u3LS1vW55zM8F74bBCoPxbP36qra19Vdsyyho9D3Zpldumj9OampoWDcMj/xUc3jHS2DgyRp2A3VBQRDye+B/MT1/ERTchXRK2AAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e",m_="/assets/GlobeWithMeridians-DmbDLIXx.svg",g_="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='12'%20height='12'%20fill='url(%23pattern0_2100_9064)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_2100_9064'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_2100_9064'%20transform='scale(0.0138889)'/%3e%3c/pattern%3e%3cimage%20id='image0_2100_9064'%20width='72'%20height='72'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABp1BMVEUAAAD42rb50qT10KH41q7606X30aP2zp72z572z6H62bH30KDeybr506P40aL1z6Hx59v2zp340aGscFj40aH31Kn51qr106r85cuudV340aGXX0j52K/52bH52K/75Mj1zZz506Pzy5ykaFCdY0z2zp351Kb2z6D51aj30aKMXkv31Kr31q3727SKal764MGqgm3mwqr63bv64se2fGWpblWyd2D506T40aL506O2fWf40qO9hG+ialGpcFi/h3L1zp/1z5/206f20aWbZ0/20aO1fmeNW0b51qrBjHj306f20qe6iHLHlYL627b62LCnemSzhW/21q362bP31q/Tppb30KD40aD2zp350qL2z571zZz1zp340KH3z5/1zZv3z570zJz3z6D0zZ32zp/0y5v50aHyyZn1zZ760qPyy5zvx5ema1LvypzpxJngu472zZznwZPjvZDctIzYsIXRroTKmnq9iHC0fGKXeVufa0+eY0uTW0SCW0KIUz53SjXRpYTVqoPNoH7Fo3u/jnXEknO2lnKxkm65h2ith2SieFiHYUZ8WkBuKvTWAAAAVnRSTlMAC362a34v+Oq2a/gH9/i1A/Xq/t95cmsJ/vPpYk4pEP35+Pj48My/t7Z5W0Y8MjEtIxcM9/Py8O/r5uXk5OPg09CgoJualZGQh4WDc25iU0tJRTgyLl7evloAAAVYSURBVFjD7VZls9QwFF3c3d3d3d3d05CkfZu2j8Xd3f1Hc85NSgsMDHxhhhnObpKr555s90nrP/7jP/5lTFsyeWzPPj0FOPvArB1CbJpYwRJn7KlWE+OPzd8w48KFs2fTMjl79iyMr0irMy/Pn7vAXAPnzp6du6zBs3L/urM/A4kiU55iVhMKySFHa56p82f8nCdtKKStyhJHjSEDv/IsmXv295CqFCsvVTP2lWj4lNHp14FK/ZpI0ipP61BSEQ2evClJAQknrExz1byYbBXEynP5nM8JD68mPGPXJ2hP0wSq0YJUcr4gkzgletiUkkMWpqKbxXJWisaPmZiAqExJji1XMhEmgJZSCTtfEJCGXSXnUA3KhBCi8X3Ik2AwgkRZUhmFiKtUrjCAQqRTlKFeqmERQ0E0fKzw8FNRKmG5Ol+GPDaV8pp5Ii4QjETJTtREU0YmAeCJkvL8XIxVfm0bckRayZWRaNoCttdQSdOtRtR2+U06JTPygwa2po7+vlFkB/aYKlWdNJGhjuAj0VDUdyQkKiBVxI9ymIzNNPOGHIlLuxBBWoYKkzd5gkGK3HtVMeIdHSXPgQEuPUiIjHHGKIJM5xoT8TOVn7/oVVo/RG0UM6VKo0Y45uLMcSBypjT5+StXr14hUz08yUzKsRjSeKZKvgvmYqkUg5QFJf16t/r2N8YUV5+/vnfv7q0reU6KDAvIU2yB4ateWDmVeo3NaHwmJMpwNRA5d/XNhNmTJl2+//JKUUD9+TyMIlgezkx25UQnHUpRAUOpyLmLd0dNWrh06b7ZE14U3nZf1KlcPSIz1PXVs2D7AYNIpM2N+7MWDscvgd2X318quruDgqxmAo/hQTSPaGUqEyLnbo/asrwFHJ816qY7702aUnsNPCRd93HJht0YOVQgMrcvbxWiE2suX3PO61BlaibqMRLlamjSVo52VHTr4ajDvNreyw9vFM66TGCycKHMhbFZG0dbRAgNCjJtZUa4WlFc+vho45EVZw6sffzhYmGlrdaEanoKvG0GjCYRksZIHcNBkS2KO08erd62ecLjT9eKwhkDSbGKZG0RBzlBl/FGIWsIjdXWXocvpLX+4qvPz54+ffbkjvdOI828kKG9nZl2mxFyIqwt44YvY61GuTNaiLTrvlhce/fgwdubnU6n26HHoYGSwKG0UTiokJwOfLrNWawQZXDaQmScLXzhCjwvQjNDEdi4ay0KyCVNFdqMKoYAIYJVeHIVhXXakiiM4UUwHCGt6UcyzTnBCiywhAiGs4RzWrsiUGjs6MbhOt1GSABjNXNCJhvSiIiiqaNZzamOhrUGXj0KRqdDlxqQ9l8ZtEAqHImmLdCWUXhGeKTQuiCcXtGx0iCPSZ4F3ZCPIFFrSn/LKzlmydm8utPIuY6oNPSt9zCjYmu1OD4QDR4zgnIIFw/9FWSyogiGZHxdEueTj0StHgdHfNtLhGFGTM8QLiWObY5ykdGBCFh1iJoAFjURA96ynz1RVtXOJu7WkoiaxsxhQL4AAcbCsb6mZEbyNCIYoigMIhExeFz/6yQiRRhpMZy+ERYxbWCLKj0rwnjY/cZV//otGs1qNHdjo4me6/SFlXeMBJcueWHu6pYkKpnH37UKi3d0WRJ0YYXRQHcXdxc6NHbb6YDJ2QgxCixercLpedPJT2AeN8qjdNK4Lrb7bo/V5QgtdQUqu4Soxoo9IyiASw5HCZQiGj3burpo0qDJVxw8YnKrgVWL5s2ZHmsI0Vd5nnuV/MHcvqz1DVYuHrNz2LBexAAubMN6DcAxIEbh0OMZfb6H7To5vPU9Bo/v8ecY3PqP//iPv4QvNxD6hCZEhPsAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",y_="/assets/card7-rbWc8bjh.png",v_="/assets/Electric%20Plug-oZAfYuVq.svg",x_="/assets/Link-BGiMzZWf.svg",b_="/assets/Satellite%20Antenna-BZqZFG0m.svg",w_="/assets/dnk-C5a5_LEB.svg",S_="/assets/MobilePhoneOff-DHMMcsQr.svg",T_=()=>{const{t}=Qt(),e=t("allInOne",{returnObjects:!0}),n=[[DS,UD,FD,qD,GD],[XD,QD,ZD,KD,WD],[$D,JD,e_,t_],[s_,r_,a_],[_S,o_,c_,l_],[d_,h_,p_,m_,g_],[v_,x_,b_,w_,S_]],i=o=>{switch(o){case 0:return{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1}};case 1:return{initial:{x:100,opacity:0},whileInView:{x:0,opacity:1}};case 2:return{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1}};case 3:return{initial:{scale:.5,opacity:0},whileInView:{scale:1,opacity:1}};case 4:return{initial:{x:100,opacity:0},whileInView:{x:0,opacity:1}};case 5:return{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1}};case 6:return{initial:{x:100,opacity:0},whileInView:{x:0,opacity:1}};default:return{initial:{opacity:0},whileInView:{opacity:1}}}},r=[HD,VD,n_,i_,u_,f_,y_];return w.jsxs(kD,{children:[w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:[" ",w.jsxs(RD,{children:[e.mainText,w.jsx(Jl,{src:YD,alt:"Laptop"})]})]}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:w.jsx(LD,{children:e.mainTitle})}),w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:[" ",w.jsx(DD,{children:e.description})]}),w.jsx(_D,{children:e.cards.map((o,c)=>D.createElement(zD,{as:Y.div,...i(c),transition:{duration:.5,delay:c*.1},viewport:{once:!1,amount:.3},key:c},w.jsx(Y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:c*.15},viewport:{once:!1,amount:.3},children:w.jsx(jD,{children:o.title})}),w.jsx(Y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:c*.2},viewport:{once:!1,amount:.3},children:w.jsx(PD,{style:c===4?{marginBottom:240}:{},children:o.text})}),w.jsx(Y.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.4,delay:c*.25},viewport:{once:!1,amount:.3},children:w.jsx(ND,{src:r[c],alt:o.title,style:c===2?{border:"none",width:"100%",background:"transparent",overflow:"visible",backdropFilter:"none"}:c===4?{position:"absolute",top:"13%",left:"0",borderRadius:24,height:"84%",width:"100%",objectFit:"cover",overflow:"hidden"}:{}})}),w.jsx(Y.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:c*.3},viewport:{once:!1,amount:.3},children:w.jsx(BD,{children:o.buttons.map((u,d)=>w.jsxs(ID,{children:[u,w.jsx(Jl,{src:n[c][d],alt:u})]},d))})})))})]})},E_=j(Y.h2)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
`,C_=j(Y.div)`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  justify-items: column;
  flex-direction: row;
  gap: 4px;
  width: 343px;
  height: 117px;
  flex-wrap: wrap;
  align-content: space-between;
`,A_=j(Y.img)`
  width: 104px;
  height: 16px;
`,M_=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
`,O_=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
`,k_=j(Y.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 100%);
  z-index: 10;
  pointer-events: none;
`,R_=j(Y.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 100%);
  z-index: 10;
  pointer-events: none;
`,L_=j(Y.div)`
  display: flex;
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`,D_=j(Y.div)`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 80px 0;
  overflow: hidden;
  
  .swiper {
    width: 100%;
    padding: 0 10%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease;
  }
`,__=j(Y.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 20px;
  width: 311px;
  height: auto;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.03), 
              0 2px 4px -2px rgba(0, 0, 0, 0.08), 
              inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  margin: 0 auto;
  will-change: transform, box-shadow;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`,z_=j(Y.img)`
  width: 123px;
  height: 64px;
  margin-bottom: 16px;
  will-change: transform;
  object-fit: contain;
  object-position: center ;
`,j_=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 40px;
`,P_=j(Y.div)`
  display: flex;
  align-items: center;
  gap: 8px;
`,N_=j(Y.div)`
  will-change: transform;
`,B_=j(Y.img)`
  border-radius: 24px;
  width: 45px;
  height: 45px;
  will-change: transform;
  transition: transform 0.3s ease;
`,I_=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--white-100);
`,H_=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-50);
`,V_="data:image/svg+xml,%3csvg%20width='104'%20height='16'%20viewBox='0%200%20104%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200L9.79611%205.52786H15.6085L10.9062%208.94427L12.7023%2014.4721L8%2011.0557L3.29772%2014.4721L5.09383%208.94427L0.391548%205.52786H6.20389L8%200Z'%20fill='%23494BEC'/%3e%3cpath%20d='M28%200L29.7961%205.52786H35.6085L30.9062%208.94427L32.7023%2014.4721L28%2011.0557L23.2977%2014.4721L25.0938%208.94427L20.3915%205.52786H26.2039L28%200Z'%20fill='%23494BEC'/%3e%3cpath%20d='M48%200L49.7961%205.52786H55.6085L50.9062%208.94427L52.7023%2014.4721L48%2011.0557L43.2977%2014.4721L45.0938%208.94427L40.3915%205.52786H46.2039L48%200Z'%20fill='%23494BEC'/%3e%3cpath%20d='M68%200L69.7961%205.52786H75.6085L70.9062%208.94427L72.7023%2014.4721L68%2011.0557L63.2977%2014.4721L65.0938%208.94427L60.3915%205.52786H66.2039L68%200Z'%20fill='%23494BEC'/%3e%3cpath%20d='M88%200L89.7961%205.52786H95.6085L90.9062%208.94427L92.7023%2014.4721L88%2011.0557L83.2977%2014.4721L85.0938%208.94427L80.3915%205.52786H86.2039L88%200Z'%20fill='%23494BEC'/%3e%3c/svg%3e";function Dw(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function i2(t,e){t===void 0&&(t={}),e===void 0&&(e={});const n=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>n.indexOf(i)<0).forEach(i=>{typeof t[i]>"u"?t[i]=e[i]:Dw(e[i])&&Dw(t[i])&&Object.keys(e[i]).length>0&&i2(t[i],e[i])})}const zS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function qi(){const t=typeof document<"u"?document:{};return i2(t,zS),t}const U_={document:zS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function pn(){const t=typeof window<"u"?window:{};return i2(t,U_),t}function q_(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function F_(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function jS(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Nf(){return Date.now()}function G_(t){const e=pn();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Y_(t,e){e===void 0&&(e="x");const n=pn();let i,r,o;const c=G_(t);return n.WebKitCSSMatrix?(r=c.transform||c.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(u=>u.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(r==="none"?"":r)):(o=c.MozTransform||c.OTransform||c.MsTransform||c.msTransform||c.transform||c.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=o.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?r=o.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(n.WebKitCSSMatrix?r=o.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function nf(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function X_(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Hn(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const i=n<0||arguments.length<=n?void 0:arguments[n];if(i!=null&&!X_(i)){const r=Object.keys(Object(i)).filter(o=>e.indexOf(o)<0);for(let o=0,c=r.length;o<c;o+=1){const u=r[o],d=Object.getOwnPropertyDescriptor(i,u);d!==void 0&&d.enumerable&&(nf(t[u])&&nf(i[u])?i[u].__swiper__?t[u]=i[u]:Hn(t[u],i[u]):!nf(t[u])&&nf(i[u])?(t[u]={},i[u].__swiper__?t[u]=i[u]:Hn(t[u],i[u])):t[u]=i[u])}}}return t}function sf(t,e,n){t.style.setProperty(e,n)}function PS(t){let{swiper:e,targetPosition:n,side:i}=t;const r=pn(),o=-e.translate;let c=null,u;const d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const h=n>o?"next":"prev",p=(y,x)=>h==="next"&&y>=x||h==="prev"&&y<=x,g=()=>{u=new Date().getTime(),c===null&&(c=u);const y=Math.max(Math.min((u-c)/d,1),0),x=.5-Math.cos(y*Math.PI)/2;let b=o+x*(n-o);if(p(b,n)&&(b=n),e.wrapperEl.scrollTo({[i]:b}),p(b,n)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:b})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(g)};g()}function Ni(t,e){e===void 0&&(e="");const n=pn(),i=[...t.children];return n.HTMLSlotElement&&t instanceof HTMLSlotElement&&i.push(...t.assignedElements()),e?i.filter(r=>r.matches(e)):i}function Q_(t,e){const n=[e];for(;n.length>0;){const i=n.shift();if(t===i)return!0;n.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function Z_(t,e){const n=pn();let i=e.contains(t);return!i&&n.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(t),i||(i=Q_(t,e))),i}function Bf(t){try{console.warn(t);return}catch{}}function If(t,e){e===void 0&&(e=[]);const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:q_(e)),n}function K_(t,e){const n=[];for(;t.previousElementSibling;){const i=t.previousElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function W_(t,e){const n=[];for(;t.nextElementSibling;){const i=t.nextElementSibling;e?i.matches(e)&&n.push(i):n.push(i),t=i}return n}function $s(t,e){return pn().getComputedStyle(t,null).getPropertyValue(e)}function _w(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function $_(t,e){const n=[];let i=t.parentElement;for(;i;)n.push(i),i=i.parentElement;return n}function zw(t,e,n){const i=pn();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function fs(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function jw(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(e):t.innerHTML=e}function J_(t,e,n,i){return t.params.createElements&&Object.keys(i).forEach(r=>{if(!n[r]&&n.auto===!0){let o=Ni(t.el,`.${i[r]}`)[0];o||(o=If("div",i[r]),o.className=i[r],t.el.append(o)),n[r]=o,e[r]=o}}),n}function ez(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function o(b){let S;return b&&typeof b=="string"&&e.isElement&&(S=e.el.querySelector(b)||e.hostEl.querySelector(b),S)?S:(b&&(typeof b=="string"&&(S=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&S&&S.length>1&&e.el.querySelectorAll(b).length===1?S=e.el.querySelector(b):S&&S.length===1&&(S=S[0])),b&&!S?b:S)}function c(b,S){const C=e.params.navigation;b=fs(b),b.forEach(T=>{T&&(T.classList[S?"add":"remove"](...C.disabledClass.split(" ")),T.tagName==="BUTTON"&&(T.disabled=S),e.params.watchOverflow&&e.enabled&&T.classList[e.isLocked?"add":"remove"](C.lockClass))})}function u(){const{nextEl:b,prevEl:S}=e.navigation;if(e.params.loop){c(S,!1),c(b,!1);return}c(S,e.isBeginning&&!e.params.rewind),c(b,e.isEnd&&!e.params.rewind)}function d(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function h(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function p(){const b=e.params.navigation;if(e.params.navigation=J_(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let S=o(b.nextEl),C=o(b.prevEl);Object.assign(e.navigation,{nextEl:S,prevEl:C}),S=fs(S),C=fs(C);const T=(M,A)=>{M&&M.addEventListener("click",A==="next"?h:d),!e.enabled&&M&&M.classList.add(...b.lockClass.split(" "))};S.forEach(M=>T(M,"next")),C.forEach(M=>T(M,"prev"))}function g(){let{nextEl:b,prevEl:S}=e.navigation;b=fs(b),S=fs(S);const C=(T,M)=>{T.removeEventListener("click",M==="next"?h:d),T.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(T=>C(T,"next")),S.forEach(T=>C(T,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?x():(p(),u())}),i("toEdge fromEdge lock unlock",()=>{u()}),i("destroy",()=>{g()}),i("enable disable",()=>{let{nextEl:b,prevEl:S}=e.navigation;if(b=fs(b),S=fs(S),e.enabled){u();return}[...b,...S].filter(C=>!!C).forEach(C=>C.classList.add(e.params.navigation.lockClass))}),i("click",(b,S)=>{let{nextEl:C,prevEl:T}=e.navigation;C=fs(C),T=fs(T);const M=S.target;let A=T.includes(M)||C.includes(M);if(e.isElement&&!A){const R=S.path||S.composedPath&&S.composedPath();R&&(A=R.find(k=>C.includes(k)||T.includes(k)))}if(e.params.navigation.hideOnClick&&!A){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===M||e.pagination.el.contains(M)))return;let R;C.length?R=C[0].classList.contains(e.params.navigation.hiddenClass):T.length&&(R=T[0].classList.contains(e.params.navigation.hiddenClass)),r(R===!0?"navigationShow":"navigationHide"),[...C,...T].filter(k=>!!k).forEach(k=>k.classList.toggle(e.params.navigation.hiddenClass))}});const y=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),p(),u()},x=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(e.navigation,{enable:y,disable:x,update:u,init:p,destroy:g})}function Ir(t){let{swiper:e,extendParams:n,on:i,emit:r,params:o}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,u,d=o&&o.autoplay?o.autoplay.delay:3e3,h=o&&o.autoplay?o.autoplay.delay:3e3,p,g=new Date().getTime(),y,x,b,S,C,T,M;function A(ee){!e||e.destroyed||!e.wrapperEl||ee.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",A),!(M||ee.detail&&ee.detail.bySwiperTouchMove)&&F())}const R=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?y=!0:y&&(h=p,y=!1);const ee=e.autoplay.paused?p:g+h-new Date().getTime();e.autoplay.timeLeft=ee,r("autoplayTimeLeft",ee,ee/d),u=requestAnimationFrame(()=>{R()})},k=()=>{let ee;return e.virtual&&e.params.virtual.enabled?ee=e.slides.find(_=>_.classList.contains("swiper-slide-active")):ee=e.slides[e.activeIndex],ee?parseInt(ee.getAttribute("data-swiper-autoplay"),10):void 0},P=ee=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(u),R();let ae=typeof ee>"u"?e.params.autoplay.delay:ee;d=e.params.autoplay.delay,h=e.params.autoplay.delay;const _=k();!Number.isNaN(_)&&_>0&&typeof ee>"u"&&(ae=_,d=_,h=_),p=ae;const Z=e.params.speed,oe=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Z,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Z,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Z,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Z,!0,!0),r("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return ae>0?(clearTimeout(c),c=setTimeout(()=>{oe()},ae)):requestAnimationFrame(()=>{oe()}),ae},L=()=>{g=new Date().getTime(),e.autoplay.running=!0,P(),r("autoplayStart")},I=()=>{e.autoplay.running=!1,clearTimeout(c),cancelAnimationFrame(u),r("autoplayStop")},V=(ee,ae)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(c),ee||(T=!0);const _=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",A):F()};if(e.autoplay.paused=!0,ae){C&&(p=e.params.autoplay.delay),C=!1,_();return}p=(p||e.params.autoplay.delay)-(new Date().getTime()-g),!(e.isEnd&&p<0&&!e.params.loop)&&(p<0&&(p=0),_())},F=()=>{e.isEnd&&p<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),T?(T=!1,P(p)):P(),e.autoplay.paused=!1,r("autoplayResume"))},N=()=>{if(e.destroyed||!e.autoplay.running)return;const ee=qi();ee.visibilityState==="hidden"&&(T=!0,V(!0)),ee.visibilityState==="visible"&&F()},z=ee=>{ee.pointerType==="mouse"&&(T=!0,M=!0,!(e.animating||e.autoplay.paused)&&V(!0))},te=ee=>{ee.pointerType==="mouse"&&(M=!1,e.autoplay.paused&&F())},$=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",z),e.el.addEventListener("pointerleave",te))},ce=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",z),e.el.removeEventListener("pointerleave",te))},U=()=>{qi().addEventListener("visibilitychange",N)},J=()=>{qi().removeEventListener("visibilitychange",N)};i("init",()=>{e.params.autoplay.enabled&&($(),U(),L())}),i("destroy",()=>{ce(),J(),e.autoplay.running&&I()}),i("_freeModeStaticRelease",()=>{(b||T)&&F()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?I():V(!0,!0)}),i("beforeTransitionStart",(ee,ae,_)=>{e.destroyed||!e.autoplay.running||(_||!e.params.autoplay.disableOnInteraction?V(!0,!0):I())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){I();return}x=!0,b=!1,T=!1,S=setTimeout(()=>{T=!0,b=!0,V(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!x)){if(clearTimeout(S),clearTimeout(c),e.params.autoplay.disableOnInteraction){b=!1,x=!1;return}b&&e.params.cssMode&&F(),b=!1,x=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(C=!0)}),Object.assign(e.autoplay,{start:L,stop:I,pause:V,resume:F})}let x0;function tz(){const t=pn(),e=qi();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function NS(){return x0||(x0=tz()),x0}let b0;function nz(t){let{userAgent:e}=t===void 0?{}:t;const n=NS(),i=pn(),r=i.navigator.platform,o=e||i.navigator.userAgent,c={ios:!1,android:!1},u=i.screen.width,d=i.screen.height,h=o.match(/(Android);?[\s\/]+([\d.]+)?/);let p=o.match(/(iPad).*OS\s([\d_]+)/);const g=o.match(/(iPod)(.*OS\s([\d_]+))?/),y=!p&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),x=r==="Win32";let b=r==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!p&&b&&n.touch&&S.indexOf(`${u}x${d}`)>=0&&(p=o.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),b=!1),h&&!x&&(c.os="android",c.android=!0),(p||y||g)&&(c.os="ios",c.ios=!0),c}function BS(t){return t===void 0&&(t={}),b0||(b0=nz(t)),b0}let w0;function iz(){const t=pn(),e=BS();let n=!1;function i(){const u=t.navigator.userAgent.toLowerCase();return u.indexOf("safari")>=0&&u.indexOf("chrome")<0&&u.indexOf("android")<0}if(i()){const u=String(t.navigator.userAgent);if(u.includes("Version/")){const[d,h]=u.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));n=d<16||d===16&&h<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),o=i(),c=o||r&&e.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:c,isWebView:r}}function IS(){return w0||(w0=iz()),w0}function sz(t){let{swiper:e,on:n,emit:i}=t;const r=pn();let o=null,c=null;const u=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(o=new ResizeObserver(g=>{c=r.requestAnimationFrame(()=>{const{width:y,height:x}=e;let b=y,S=x;g.forEach(C=>{let{contentBoxSize:T,contentRect:M,target:A}=C;A&&A!==e.el||(b=M?M.width:(T[0]||T).inlineSize,S=M?M.height:(T[0]||T).blockSize)}),(b!==y||S!==x)&&u()})}),o.observe(e.el))},h=()=>{c&&r.cancelAnimationFrame(c),o&&o.unobserve&&e.el&&(o.unobserve(e.el),o=null)},p=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};n("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){d();return}r.addEventListener("resize",u),r.addEventListener("orientationchange",p)}),n("destroy",()=>{h(),r.removeEventListener("resize",u),r.removeEventListener("orientationchange",p)})}function rz(t){let{swiper:e,extendParams:n,on:i,emit:r}=t;const o=[],c=pn(),u=function(p,g){g===void 0&&(g={});const y=c.MutationObserver||c.WebkitMutationObserver,x=new y(b=>{if(e.__preventObserver__)return;if(b.length===1){r("observerUpdate",b[0]);return}const S=function(){r("observerUpdate",b[0])};c.requestAnimationFrame?c.requestAnimationFrame(S):c.setTimeout(S,0)});x.observe(p,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:e.isElement||(typeof g.childList>"u"?!0:g).childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),o.push(x)},d=()=>{if(e.params.observer){if(e.params.observeParents){const p=$_(e.hostEl);for(let g=0;g<p.length;g+=1)u(p[g])}u(e.hostEl,{childList:e.params.observeSlideChildren}),u(e.wrapperEl,{attributes:!1})}},h=()=>{o.forEach(p=>{p.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",d),i("destroy",h)}var az={on(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=n?"unshift":"push";return t.split(" ").forEach(o=>{i.eventsListeners[o]||(i.eventsListeners[o]=[]),i.eventsListeners[o][r](e)}),i},once(t,e,n){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(t,r),r.__emitterProxy&&delete r.__emitterProxy;for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];e.apply(i,c)}return r.__emitterProxy=e,i.on(t,r,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const i=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[i](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(i=>{typeof e>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((r,o)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&n.eventsListeners[i].splice(o,1)})}),n},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,n,i;for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return typeof o[0]=="string"||Array.isArray(o[0])?(e=o[0],n=o.slice(1,o.length),i=t):(e=o[0].events,n=o[0].data,i=o[0].context||t),n.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(d=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(h=>{h.apply(i,[d,...n])}),t.eventsListeners&&t.eventsListeners[d]&&t.eventsListeners[d].forEach(h=>{h.apply(i,n)})}),t}};function oz(){const t=this;let e,n;const i=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=i.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=i.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt($s(i,"padding-left")||0,10)-parseInt($s(i,"padding-right")||0,10),n=n-parseInt($s(i,"padding-top")||0,10)-parseInt($s(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function lz(){const t=this;function e(F,N){return parseFloat(F.getPropertyValue(t.getDirectionLabel(N))||0)}const n=t.params,{wrapperEl:i,slidesEl:r,size:o,rtlTranslate:c,wrongRTL:u}=t,d=t.virtual&&n.virtual.enabled,h=d?t.virtual.slides.length:t.slides.length,p=Ni(r,`.${t.params.slideClass}, swiper-slide`),g=d?t.virtual.slides.length:p.length;let y=[];const x=[],b=[];let S=n.slidesOffsetBefore;typeof S=="function"&&(S=n.slidesOffsetBefore.call(t));let C=n.slidesOffsetAfter;typeof C=="function"&&(C=n.slidesOffsetAfter.call(t));const T=t.snapGrid.length,M=t.slidesGrid.length;let A=n.spaceBetween,R=-S,k=0,P=0;if(typeof o>"u")return;typeof A=="string"&&A.indexOf("%")>=0?A=parseFloat(A.replace("%",""))/100*o:typeof A=="string"&&(A=parseFloat(A)),t.virtualSize=-A,p.forEach(F=>{c?F.style.marginLeft="":F.style.marginRight="",F.style.marginBottom="",F.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(sf(i,"--swiper-centered-offset-before",""),sf(i,"--swiper-centered-offset-after",""));const L=n.grid&&n.grid.rows>1&&t.grid;L?t.grid.initSlides(p):t.grid&&t.grid.unsetSlides();let I;const V=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(F=>typeof n.breakpoints[F].slidesPerView<"u").length>0;for(let F=0;F<g;F+=1){I=0;let N;if(p[F]&&(N=p[F]),L&&t.grid.updateSlide(F,N,p),!(p[F]&&$s(N,"display")==="none")){if(n.slidesPerView==="auto"){V&&(p[F].style[t.getDirectionLabel("width")]="");const z=getComputedStyle(N),te=N.style.transform,$=N.style.webkitTransform;if(te&&(N.style.transform="none"),$&&(N.style.webkitTransform="none"),n.roundLengths)I=t.isHorizontal()?zw(N,"width"):zw(N,"height");else{const ce=e(z,"width"),U=e(z,"padding-left"),J=e(z,"padding-right"),ee=e(z,"margin-left"),ae=e(z,"margin-right"),_=z.getPropertyValue("box-sizing");if(_&&_==="border-box")I=ce+ee+ae;else{const{clientWidth:Z,offsetWidth:oe}=N;I=ce+U+J+ee+ae+(oe-Z)}}te&&(N.style.transform=te),$&&(N.style.webkitTransform=$),n.roundLengths&&(I=Math.floor(I))}else I=(o-(n.slidesPerView-1)*A)/n.slidesPerView,n.roundLengths&&(I=Math.floor(I)),p[F]&&(p[F].style[t.getDirectionLabel("width")]=`${I}px`);p[F]&&(p[F].swiperSlideSize=I),b.push(I),n.centeredSlides?(R=R+I/2+k/2+A,k===0&&F!==0&&(R=R-o/2-A),F===0&&(R=R-o/2-A),Math.abs(R)<1/1e3&&(R=0),n.roundLengths&&(R=Math.floor(R)),P%n.slidesPerGroup===0&&y.push(R),x.push(R)):(n.roundLengths&&(R=Math.floor(R)),(P-Math.min(t.params.slidesPerGroupSkip,P))%t.params.slidesPerGroup===0&&y.push(R),x.push(R),R=R+I+A),t.virtualSize+=I+A,k=I,P+=1}}if(t.virtualSize=Math.max(t.virtualSize,o)+C,c&&u&&(n.effect==="slide"||n.effect==="coverflow")&&(i.style.width=`${t.virtualSize+A}px`),n.setWrapperSize&&(i.style[t.getDirectionLabel("width")]=`${t.virtualSize+A}px`),L&&t.grid.updateWrapperSize(I,y),!n.centeredSlides){const F=[];for(let N=0;N<y.length;N+=1){let z=y[N];n.roundLengths&&(z=Math.floor(z)),y[N]<=t.virtualSize-o&&F.push(z)}y=F,Math.floor(t.virtualSize-o)-Math.floor(y[y.length-1])>1&&y.push(t.virtualSize-o)}if(d&&n.loop){const F=b[0]+A;if(n.slidesPerGroup>1){const N=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/n.slidesPerGroup),z=F*n.slidesPerGroup;for(let te=0;te<N;te+=1)y.push(y[y.length-1]+z)}for(let N=0;N<t.virtual.slidesBefore+t.virtual.slidesAfter;N+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+F),x.push(x[x.length-1]+F),t.virtualSize+=F}if(y.length===0&&(y=[0]),A!==0){const F=t.isHorizontal()&&c?"marginLeft":t.getDirectionLabel("marginRight");p.filter((N,z)=>!n.cssMode||n.loop?!0:z!==p.length-1).forEach(N=>{N.style[F]=`${A}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let F=0;b.forEach(z=>{F+=z+(A||0)}),F-=A;const N=F>o?F-o:0;y=y.map(z=>z<=0?-S:z>N?N+C:z)}if(n.centerInsufficientSlides){let F=0;b.forEach(z=>{F+=z+(A||0)}),F-=A;const N=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(F+N<o){const z=(o-F-N)/2;y.forEach((te,$)=>{y[$]=te-z}),x.forEach((te,$)=>{x[$]=te+z})}}if(Object.assign(t,{slides:p,snapGrid:y,slidesGrid:x,slidesSizesGrid:b}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){sf(i,"--swiper-centered-offset-before",`${-y[0]}px`),sf(i,"--swiper-centered-offset-after",`${t.size/2-b[b.length-1]/2}px`);const F=-t.snapGrid[0],N=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(z=>z+F),t.slidesGrid=t.slidesGrid.map(z=>z+N)}if(g!==h&&t.emit("slidesLengthChange"),y.length!==T&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),x.length!==M&&t.emit("slidesGridLengthChange"),n.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!d&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const F=`${n.containerModifierClass}backface-hidden`,N=t.el.classList.contains(F);g<=n.maxBackfaceHiddenSlides?N||t.el.classList.add(F):N&&t.el.classList.remove(F)}}function cz(t){const e=this,n=[],i=e.virtual&&e.params.virtual.enabled;let r=0,o;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const c=u=>i?e.slides[e.getSlideIndexByData(u)]:e.slides[u];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(u=>{n.push(u)});else for(o=0;o<Math.ceil(e.params.slidesPerView);o+=1){const u=e.activeIndex+o;if(u>e.slides.length&&!i)break;n.push(c(u))}else n.push(c(e.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const u=n[o].offsetHeight;r=u>r?u:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function uz(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(t.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-n-t.cssOverflowAdjustment()}const Pw=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function fz(t){t===void 0&&(t=this&&this.translate||0);const e=this,n=e.params,{slides:i,rtlTranslate:r,snapGrid:o}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let c=-t;r&&(c=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let u=n.spaceBetween;typeof u=="string"&&u.indexOf("%")>=0?u=parseFloat(u.replace("%",""))/100*e.size:typeof u=="string"&&(u=parseFloat(u));for(let d=0;d<i.length;d+=1){const h=i[d];let p=h.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(p-=i[0].swiperSlideOffset);const g=(c+(n.centeredSlides?e.minTranslate():0)-p)/(h.swiperSlideSize+u),y=(c-o[0]+(n.centeredSlides?e.minTranslate():0)-p)/(h.swiperSlideSize+u),x=-(c-p),b=x+e.slidesSizesGrid[d],S=x>=0&&x<=e.size-e.slidesSizesGrid[d],C=x>=0&&x<e.size-1||b>1&&b<=e.size||x<=0&&b>=e.size;C&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(d)),Pw(h,C,n.slideVisibleClass),Pw(h,S,n.slideFullyVisibleClass),h.progress=r?-g:g,h.originalProgress=r?-y:y}}function dz(t){const e=this;if(typeof t>"u"){const p=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*p||0}const n=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:o,isEnd:c,progressLoop:u}=e;const d=o,h=c;if(i===0)r=0,o=!0,c=!0;else{r=(t-e.minTranslate())/i;const p=Math.abs(t-e.minTranslate())<1,g=Math.abs(t-e.maxTranslate())<1;o=p||r<=0,c=g||r>=1,p&&(r=0),g&&(r=1)}if(n.loop){const p=e.getSlideIndexByData(0),g=e.getSlideIndexByData(e.slides.length-1),y=e.slidesGrid[p],x=e.slidesGrid[g],b=e.slidesGrid[e.slidesGrid.length-1],S=Math.abs(t);S>=y?u=(S-y)/b:u=(S+b-x)/b,u>1&&(u-=1)}Object.assign(e,{progress:r,progressLoop:u,isBeginning:o,isEnd:c}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),o&&!d&&e.emit("reachBeginning toEdge"),c&&!h&&e.emit("reachEnd toEdge"),(d&&!o||h&&!c)&&e.emit("fromEdge"),e.emit("progress",r)}const S0=(t,e,n)=>{e&&!t.classList.contains(n)?t.classList.add(n):!e&&t.classList.contains(n)&&t.classList.remove(n)};function hz(){const t=this,{slides:e,params:n,slidesEl:i,activeIndex:r}=t,o=t.virtual&&n.virtual.enabled,c=t.grid&&n.grid&&n.grid.rows>1,u=g=>Ni(i,`.${n.slideClass}${g}, swiper-slide${g}`)[0];let d,h,p;if(o)if(n.loop){let g=r-t.virtual.slidesBefore;g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),d=u(`[data-swiper-slide-index="${g}"]`)}else d=u(`[data-swiper-slide-index="${r}"]`);else c?(d=e.find(g=>g.column===r),p=e.find(g=>g.column===r+1),h=e.find(g=>g.column===r-1)):d=e[r];d&&(c||(p=W_(d,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!p&&(p=e[0]),h=K_(d,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(g=>{S0(g,g===d,n.slideActiveClass),S0(g,g===p,n.slideNextClass),S0(g,g===h,n.slidePrevClass)}),t.emitSlidesClasses()}const Ef=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,i=e.closest(n());if(i){let r=i.querySelector(`.${t.params.lazyPreloaderClass}`);!r&&t.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},T0=(t,e)=>{if(!t.slides[e])return;const n=t.slides[e].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},jm=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const n=t.slides.length;if(!n||!e||e<0)return;e=Math.min(e,n);const i=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),r=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const c=r,u=[c-e];u.push(...Array.from({length:e}).map((d,h)=>c+i+h)),t.slides.forEach((d,h)=>{u.includes(d.column)&&T0(t,h)});return}const o=r+i-1;if(t.params.rewind||t.params.loop)for(let c=r-e;c<=o+e;c+=1){const u=(c%n+n)%n;(u<r||u>o)&&T0(t,u)}else for(let c=Math.max(r-e,0);c<=Math.min(o+e,n-1);c+=1)c!==r&&(c>o||c<r)&&T0(t,c)};function pz(t){const{slidesGrid:e,params:n}=t,i=t.rtlTranslate?t.translate:-t.translate;let r;for(let o=0;o<e.length;o+=1)typeof e[o+1]<"u"?i>=e[o]&&i<e[o+1]-(e[o+1]-e[o])/2?r=o:i>=e[o]&&i<e[o+1]&&(r=o+1):i>=e[o]&&(r=o);return n.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function mz(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:o,realIndex:c,snapIndex:u}=e;let d=t,h;const p=x=>{let b=x-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof d>"u"&&(d=pz(e)),i.indexOf(n)>=0)h=i.indexOf(n);else{const x=Math.min(r.slidesPerGroupSkip,d);h=x+Math.floor((d-x)/r.slidesPerGroup)}if(h>=i.length&&(h=i.length-1),d===o&&!e.params.loop){h!==u&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(d===o&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=p(d);return}const g=e.grid&&r.grid&&r.grid.rows>1;let y;if(e.virtual&&r.virtual.enabled&&r.loop)y=p(d);else if(g){const x=e.slides.find(S=>S.column===d);let b=parseInt(x.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(x),0)),y=Math.floor(b/r.grid.rows)}else if(e.slides[d]){const x=e.slides[d].getAttribute("data-swiper-slide-index");x?y=parseInt(x,10):y=d}else y=d;Object.assign(e,{previousSnapIndex:u,snapIndex:h,previousRealIndex:c,realIndex:y,previousIndex:o,activeIndex:d}),e.initialized&&jm(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(c!==y&&e.emit("realIndexChange"),e.emit("slideChange"))}function gz(t,e){const n=this,i=n.params;let r=t.closest(`.${i.slideClass}, swiper-slide`);!r&&n.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(u=>{!r&&u.matches&&u.matches(`.${i.slideClass}, swiper-slide`)&&(r=u)});let o=!1,c;if(r){for(let u=0;u<n.slides.length;u+=1)if(n.slides[u]===r){o=!0,c=u;break}}if(r&&o)n.clickedSlide=r,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=c;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}i.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var yz={updateSize:oz,updateSlides:lz,updateAutoHeight:cz,updateSlidesOffset:uz,updateSlidesProgress:fz,updateProgress:dz,updateSlidesClasses:hz,updateActiveIndex:mz,updateClickedSlide:gz};function vz(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:n,rtlTranslate:i,translate:r,wrapperEl:o}=e;if(n.virtualTranslate)return i?-r:r;if(n.cssMode)return r;let c=Y_(o,t);return c+=e.cssOverflowAdjustment(),i&&(c=-c),c||0}function xz(t,e){const n=this,{rtlTranslate:i,params:r,wrapperEl:o,progress:c}=n;let u=0,d=0;const h=0;n.isHorizontal()?u=i?-t:t:d=t,r.roundLengths&&(u=Math.floor(u),d=Math.floor(d)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?u:d,r.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-u:-d:r.virtualTranslate||(n.isHorizontal()?u-=n.cssOverflowAdjustment():d-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${u}px, ${d}px, ${h}px)`);let p;const g=n.maxTranslate()-n.minTranslate();g===0?p=0:p=(t-n.minTranslate())/g,p!==c&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function bz(){return-this.snapGrid[0]}function wz(){return-this.snapGrid[this.snapGrid.length-1]}function Sz(t,e,n,i,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),n===void 0&&(n=!0),i===void 0&&(i=!0);const o=this,{params:c,wrapperEl:u}=o;if(o.animating&&c.preventInteractionOnTransition)return!1;const d=o.minTranslate(),h=o.maxTranslate();let p;if(i&&t>d?p=d:i&&t<h?p=h:p=t,o.updateProgress(p),c.cssMode){const g=o.isHorizontal();if(e===0)u[g?"scrollLeft":"scrollTop"]=-p;else{if(!o.support.smoothScroll)return PS({swiper:o,targetPosition:-p,side:g?"left":"top"}),!0;u.scrollTo({[g?"left":"top"]:-p,behavior:"smooth"})}return!0}return e===0?(o.setTransition(0),o.setTranslate(p),n&&(o.emit("beforeTransitionStart",e,r),o.emit("transitionEnd"))):(o.setTransition(e),o.setTranslate(p),n&&(o.emit("beforeTransitionStart",e,r),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(y){!o||o.destroyed||y.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var Tz={getTranslate:vz,setTranslate:xz,minTranslate:bz,maxTranslate:wz,translateTo:Sz};function Ez(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`,n.wrapperEl.style.transitionDelay=t===0?"0ms":""),n.emit("setTransition",t,e)}function HS(t){let{swiper:e,runCallbacks:n,direction:i,step:r}=t;const{activeIndex:o,previousIndex:c}=e;let u=i;u||(o>c?u="next":o<c?u="prev":u="reset"),e.emit(`transition${r}`),n&&u==="reset"?e.emit(`slideResetTransition${r}`):n&&o!==c&&(e.emit(`slideChangeTransition${r}`),u==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function Cz(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),HS({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function Az(t,e){t===void 0&&(t=!0);const n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),HS({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var Mz={setTransition:Ez,transitionStart:Cz,transitionEnd:Az};function Oz(t,e,n,i,r){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const o=this;let c=t;c<0&&(c=0);const{params:u,snapGrid:d,slidesGrid:h,previousIndex:p,activeIndex:g,rtlTranslate:y,wrapperEl:x,enabled:b}=o;if(!b&&!i&&!r||o.destroyed||o.animating&&u.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=o.params.speed);const S=Math.min(o.params.slidesPerGroupSkip,c);let C=S+Math.floor((c-S)/o.params.slidesPerGroup);C>=d.length&&(C=d.length-1);const T=-d[C];if(u.normalizeSlideIndex)for(let L=0;L<h.length;L+=1){const I=-Math.floor(T*100),V=Math.floor(h[L]*100),F=Math.floor(h[L+1]*100);typeof h[L+1]<"u"?I>=V&&I<F-(F-V)/2?c=L:I>=V&&I<F&&(c=L+1):I>=V&&(c=L)}if(o.initialized&&c!==g&&(!o.allowSlideNext&&(y?T>o.translate&&T>o.minTranslate():T<o.translate&&T<o.minTranslate())||!o.allowSlidePrev&&T>o.translate&&T>o.maxTranslate()&&(g||0)!==c))return!1;c!==(p||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(T);let M;c>g?M="next":c<g?M="prev":M="reset";const A=o.virtual&&o.params.virtual.enabled;if(!(A&&r)&&(y&&-T===o.translate||!y&&T===o.translate))return o.updateActiveIndex(c),u.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),u.effect!=="slide"&&o.setTranslate(T),M!=="reset"&&(o.transitionStart(n,M),o.transitionEnd(n,M)),!1;if(u.cssMode){const L=o.isHorizontal(),I=y?T:-T;if(e===0)A&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),A&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{x[L?"scrollLeft":"scrollTop"]=I})):x[L?"scrollLeft":"scrollTop"]=I,A&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return PS({swiper:o,targetPosition:I,side:L?"left":"top"}),!0;x.scrollTo({[L?"left":"top"]:I,behavior:"smooth"})}return!0}const P=IS().isSafari;return A&&!r&&P&&o.isElement&&o.virtual.update(!1,!1,c),o.setTransition(e),o.setTranslate(T),o.updateActiveIndex(c),o.updateSlidesClasses(),o.emit("beforeTransitionStart",e,i),o.transitionStart(n,M),e===0?o.transitionEnd(n,M):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(I){!o||o.destroyed||I.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,M))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function kz(t,e,n,i){t===void 0&&(t=0),n===void 0&&(n=!0),typeof t=="string"&&(t=parseInt(t,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const o=r.grid&&r.params.grid&&r.params.grid.rows>1;let c=t;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)c=c+r.virtual.slidesBefore;else{let u;if(o){const y=c*r.params.grid.rows;u=r.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===y).column}else u=r.getSlideIndexByData(c);const d=o?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:h}=r.params;let p=r.params.slidesPerView;p==="auto"?p=r.slidesPerViewDynamic():(p=Math.ceil(parseFloat(r.params.slidesPerView,10)),h&&p%2===0&&(p=p+1));let g=d-u<p;if(h&&(g=g||u<Math.ceil(p/2)),i&&h&&r.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const y=h?u<r.activeIndex?"prev":"next":u-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?u+1:u-d+1,slideRealIndex:y==="next"?r.realIndex:void 0})}if(o){const y=c*r.params.grid.rows;c=r.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===y).column}else c=r.getSlideIndexByData(c)}return requestAnimationFrame(()=>{r.slideTo(c,e,n,i)}),r}function Rz(t,e,n){e===void 0&&(e=!0);const i=this,{enabled:r,params:o,animating:c}=i;if(!r||i.destroyed)return i;typeof t>"u"&&(t=i.params.speed);let u=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(u=Math.max(i.slidesPerViewDynamic("current",!0),1));const d=i.activeIndex<o.slidesPerGroupSkip?1:u,h=i.virtual&&o.virtual.enabled;if(o.loop){if(c&&!h&&o.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+d,t,e,n)}),!0}return o.rewind&&i.isEnd?i.slideTo(0,t,e,n):i.slideTo(i.activeIndex+d,t,e,n)}function Lz(t,e,n){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:o,slidesGrid:c,rtlTranslate:u,enabled:d,animating:h}=i;if(!d||i.destroyed)return i;typeof t>"u"&&(t=i.params.speed);const p=i.virtual&&r.virtual.enabled;if(r.loop){if(h&&!p&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const g=u?i.translate:-i.translate;function y(M){return M<0?-Math.floor(Math.abs(M)):Math.floor(M)}const x=y(g),b=o.map(M=>y(M)),S=r.freeMode&&r.freeMode.enabled;let C=o[b.indexOf(x)-1];if(typeof C>"u"&&(r.cssMode||S)){let M;o.forEach((A,R)=>{x>=A&&(M=R)}),typeof M<"u"&&(C=S?o[M]:o[M>0?M-1:M])}let T=0;if(typeof C<"u"&&(T=c.indexOf(C),T<0&&(T=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(T=T-i.slidesPerViewDynamic("previous",!0)+1,T=Math.max(T,0))),r.rewind&&i.isBeginning){const M=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(M,t,e,n)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(T,t,e,n)}),!0;return i.slideTo(T,t,e,n)}function Dz(t,e,n){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof t>"u"&&(t=i.params.speed),i.slideTo(i.activeIndex,t,e,n)}function _z(t,e,n,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);let o=r.activeIndex;const c=Math.min(r.params.slidesPerGroupSkip,o),u=c+Math.floor((o-c)/r.params.slidesPerGroup),d=r.rtlTranslate?r.translate:-r.translate;if(d>=r.snapGrid[u]){const h=r.snapGrid[u],p=r.snapGrid[u+1];d-h>(p-h)*i&&(o+=r.params.slidesPerGroup)}else{const h=r.snapGrid[u-1],p=r.snapGrid[u];d-h<=(p-h)*i&&(o-=r.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,r.slidesGrid.length-1),r.slideTo(o,t,e,n)}function zz(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:n}=t,i=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let r=t.getSlideIndexWhenGrid(t.clickedIndex),o;const c=t.isElement?"swiper-slide":`.${e.slideClass}`,u=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;o=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(o):r>(u?(t.slides.length-i)/2-(t.params.grid.rows-1):t.slides.length-i)?(t.loopFix(),r=t.getSlideIndex(Ni(n,`${c}[data-swiper-slide-index="${o}"]`)[0]),jS(()=>{t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}var jz={slideTo:Oz,slideToLoop:kz,slideNext:Rz,slidePrev:Lz,slideReset:Dz,slideToClosest:_z,slideToClickedSlide:zz};function Pz(t,e){const n=this,{params:i,slidesEl:r}=n;if(!i.loop||n.virtual&&n.params.virtual.enabled)return;const o=()=>{Ni(r,`.${i.slideClass}, swiper-slide`).forEach((x,b)=>{x.setAttribute("data-swiper-slide-index",b)})},c=()=>{const y=Ni(r,`.${i.slideBlankClass}`);y.forEach(x=>{x.remove()}),y.length>0&&(n.recalcSlides(),n.updateSlides())},u=n.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||u)&&c();const d=i.slidesPerGroup*(u?i.grid.rows:1),h=n.slides.length%d!==0,p=u&&n.slides.length%i.grid.rows!==0,g=y=>{for(let x=0;x<y;x+=1){const b=n.isElement?If("swiper-slide",[i.slideBlankClass]):If("div",[i.slideClass,i.slideBlankClass]);n.slidesEl.append(b)}};if(h){if(i.loopAddBlankSlides){const y=d-n.slides.length%d;g(y),n.recalcSlides(),n.updateSlides()}else Bf("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(p){if(i.loopAddBlankSlides){const y=i.grid.rows-n.slides.length%i.grid.rows;g(y),n.recalcSlides(),n.updateSlides()}else Bf("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();n.loopFix({slideRealIndex:t,direction:i.centeredSlides?void 0:"next",initial:e})}function Nz(t){let{slideRealIndex:e,slideTo:n=!0,direction:i,setTranslate:r,activeSlideIndex:o,initial:c,byController:u,byMousewheel:d}=t===void 0?{}:t;const h=this;if(!h.params.loop)return;h.emit("beforeLoopFix");const{slides:p,allowSlidePrev:g,allowSlideNext:y,slidesEl:x,params:b}=h,{centeredSlides:S,initialSlide:C}=b;if(h.allowSlidePrev=!0,h.allowSlideNext=!0,h.virtual&&b.virtual.enabled){n&&(!b.centeredSlides&&h.snapIndex===0?h.slideTo(h.virtual.slides.length,0,!1,!0):b.centeredSlides&&h.snapIndex<b.slidesPerView?h.slideTo(h.virtual.slides.length+h.snapIndex,0,!1,!0):h.snapIndex===h.snapGrid.length-1&&h.slideTo(h.virtual.slidesBefore,0,!1,!0)),h.allowSlidePrev=g,h.allowSlideNext=y,h.emit("loopFix");return}let T=b.slidesPerView;T==="auto"?T=h.slidesPerViewDynamic():(T=Math.ceil(parseFloat(b.slidesPerView,10)),S&&T%2===0&&(T=T+1));const M=b.slidesPerGroupAuto?T:b.slidesPerGroup;let A=S?Math.max(M,Math.ceil(T/2)):M;A%M!==0&&(A+=M-A%M),A+=b.loopAdditionalSlides,h.loopedSlides=A;const R=h.grid&&b.grid&&b.grid.rows>1;p.length<T+A||h.params.effect==="cards"&&p.length<T+A*2?Bf("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):R&&b.grid.fill==="row"&&Bf("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],P=[],L=R?Math.ceil(p.length/b.grid.rows):p.length,I=c&&L-C<T&&!S;let V=I?C:h.activeIndex;typeof o>"u"?o=h.getSlideIndex(p.find(U=>U.classList.contains(b.slideActiveClass))):V=o;const F=i==="next"||!i,N=i==="prev"||!i;let z=0,te=0;const ce=(R?p[o].column:o)+(S&&typeof r>"u"?-T/2+.5:0);if(ce<A){z=Math.max(A-ce,M);for(let U=0;U<A-ce;U+=1){const J=U-Math.floor(U/L)*L;if(R){const ee=L-J-1;for(let ae=p.length-1;ae>=0;ae-=1)p[ae].column===ee&&k.push(ae)}else k.push(L-J-1)}}else if(ce+T>L-A){te=Math.max(ce-(L-A*2),M),I&&(te=Math.max(te,T-L+C+1));for(let U=0;U<te;U+=1){const J=U-Math.floor(U/L)*L;R?p.forEach((ee,ae)=>{ee.column===J&&P.push(ae)}):P.push(J)}}if(h.__preventObserver__=!0,requestAnimationFrame(()=>{h.__preventObserver__=!1}),h.params.effect==="cards"&&p.length<T+A*2&&(P.includes(o)&&P.splice(P.indexOf(o),1),k.includes(o)&&k.splice(k.indexOf(o),1)),N&&k.forEach(U=>{p[U].swiperLoopMoveDOM=!0,x.prepend(p[U]),p[U].swiperLoopMoveDOM=!1}),F&&P.forEach(U=>{p[U].swiperLoopMoveDOM=!0,x.append(p[U]),p[U].swiperLoopMoveDOM=!1}),h.recalcSlides(),b.slidesPerView==="auto"?h.updateSlides():R&&(k.length>0&&N||P.length>0&&F)&&h.slides.forEach((U,J)=>{h.grid.updateSlide(J,U,h.slides)}),b.watchSlidesProgress&&h.updateSlidesOffset(),n){if(k.length>0&&N){if(typeof e>"u"){const U=h.slidesGrid[V],ee=h.slidesGrid[V+z]-U;d?h.setTranslate(h.translate-ee):(h.slideTo(V+Math.ceil(z),0,!1,!0),r&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-ee,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-ee))}else if(r){const U=R?k.length/b.grid.rows:k.length;h.slideTo(h.activeIndex+U,0,!1,!0),h.touchEventsData.currentTranslate=h.translate}}else if(P.length>0&&F)if(typeof e>"u"){const U=h.slidesGrid[V],ee=h.slidesGrid[V-te]-U;d?h.setTranslate(h.translate-ee):(h.slideTo(V-te,0,!1,!0),r&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-ee,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-ee))}else{const U=R?P.length/b.grid.rows:P.length;h.slideTo(h.activeIndex-U,0,!1,!0)}}if(h.allowSlidePrev=g,h.allowSlideNext=y,h.controller&&h.controller.control&&!u){const U={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:o,byController:!0};Array.isArray(h.controller.control)?h.controller.control.forEach(J=>{!J.destroyed&&J.params.loop&&J.loopFix({...U,slideTo:J.params.slidesPerView===b.slidesPerView?n:!1})}):h.controller.control instanceof h.constructor&&h.controller.control.params.loop&&h.controller.control.loopFix({...U,slideTo:h.controller.control.params.slidesPerView===b.slidesPerView?n:!1})}h.emit("loopFix")}function Bz(){const t=this,{params:e,slidesEl:n}=t;if(!e.loop||!n||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];t.slides.forEach(r=>{const o=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[o]=r}),t.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{n.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var Iz={loopCreate:Pz,loopFix:Nz,loopDestroy:Bz};function Hz(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Vz(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var Uz={setGrabCursor:Hz,unsetGrabCursor:Vz};function qz(t,e){e===void 0&&(e=this);function n(i){if(!i||i===qi()||i===pn())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(t);return!r&&!i.getRootNode?null:r||n(i.getRootNode().host)}return n(e)}function Nw(t,e,n){const i=pn(),{params:r}=t,o=r.edgeSwipeDetection,c=r.edgeSwipeThreshold;return o&&(n<=c||n>=i.innerWidth-c)?o==="prevent"?(e.preventDefault(),!0):!1:!0}function Fz(t){const e=this,n=qi();let i=t;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Nw(e,i,i.targetTouches[0].pageX);return}const{params:o,touches:c,enabled:u}=e;if(!u||!o.simulateTouch&&i.pointerType==="mouse"||e.animating&&o.preventInteractionOnTransition)return;!e.animating&&o.cssMode&&o.loop&&e.loopFix();let d=i.target;if(o.touchEventsTarget==="wrapper"&&!Z_(d,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const h=!!o.noSwipingClass&&o.noSwipingClass!=="",p=i.composedPath?i.composedPath():i.path;h&&i.target&&i.target.shadowRoot&&p&&(d=p[0]);const g=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,y=!!(i.target&&i.target.shadowRoot);if(o.noSwiping&&(y?qz(g,d):d.closest(g))){e.allowClick=!0;return}if(o.swipeHandler&&!d.closest(o.swipeHandler))return;c.currentX=i.pageX,c.currentY=i.pageY;const x=c.currentX,b=c.currentY;if(!Nw(e,i,x))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),c.startX=x,c.startY=b,r.touchStartTime=Nf(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,o.threshold>0&&(r.allowThresholdMove=!1);let S=!0;d.matches(r.focusableElements)&&(S=!1,d.nodeName==="SELECT"&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==d&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!d.matches(r.focusableElements))&&n.activeElement.blur();const C=S&&e.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||C)&&!d.isContentEditable&&i.preventDefault(),o.freeMode&&o.freeMode.enabled&&e.freeMode&&e.animating&&!o.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Gz(t){const e=qi(),n=this,i=n.touchEventsData,{params:r,touches:o,rtlTranslate:c,enabled:u}=n;if(!u||!r.simulateTouch&&t.pointerType==="mouse")return;let d=t;if(d.originalEvent&&(d=d.originalEvent),d.type==="pointermove"&&(i.touchId!==null||d.pointerId!==i.pointerId))return;let h;if(d.type==="touchmove"){if(h=[...d.changedTouches].find(k=>k.identifier===i.touchId),!h||h.identifier!==i.touchId)return}else h=d;if(!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",d);return}const p=h.pageX,g=h.pageY;if(d.preventedByNestedSwiper){o.startX=p,o.startY=g;return}if(!n.allowTouchMove){d.target.matches(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(o,{startX:p,startY:g,currentX:p,currentY:g}),i.touchStartTime=Nf());return}if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(g<o.startY&&n.translate<=n.maxTranslate()||g>o.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(c&&(p>o.startX&&-n.translate<=n.maxTranslate()||p<o.startX&&-n.translate>=n.minTranslate()))return;if(!c&&(p<o.startX&&n.translate<=n.maxTranslate()||p>o.startX&&n.translate>=n.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==d.target&&d.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&d.target===e.activeElement&&d.target.matches(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}i.allowTouchCallbacks&&n.emit("touchMove",d),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=p,o.currentY=g;const y=o.currentX-o.startX,x=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(y**2+x**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?i.isScrolling=!1:y*y+x*x>=25&&(k=Math.atan2(Math.abs(x),Math.abs(y))*180/Math.PI,i.isScrolling=n.isHorizontal()?k>r.touchAngle:90-k>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",d),typeof i.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(i.startMoving=!0),i.isScrolling||d.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&d.cancelable&&d.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&d.stopPropagation();let b=n.isHorizontal()?y:x,S=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;r.oneWayMovement&&(b=Math.abs(b)*(c?1:-1),S=Math.abs(S)*(c?1:-1)),o.diff=b,b*=r.touchRatio,c&&(b=-b,S=-S);const C=n.touchesDirection;n.swipeDirection=b>0?"prev":"next",n.touchesDirection=S>0?"prev":"next";const T=n.params.loop&&!r.cssMode,M=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!i.isMoved){if(T&&M&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(k)}i.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",d)}if(new Date().getTime(),r._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&C!==n.touchesDirection&&T&&M&&Math.abs(b)>=1){Object.assign(o,{startX:p,startY:g,currentX:p,currentY:g,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}n.emit("sliderMove",d),i.isMoved=!0,i.currentTranslate=b+i.startTranslate;let A=!0,R=r.resistanceRatio;if(r.touchReleaseOnEdges&&(R=0),b>0?(T&&M&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(r.slidesPerView!=="auto"&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(A=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+b)**R))):b<0&&(T&&M&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(r.slidesPerView!=="auto"&&n.slides.length-r.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(r.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(A=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-b)**R))),A&&(d.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(b)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,i.currentTranslate=i.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Yz(t){const e=this,n=e.touchEventsData;let i=t;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].find(k=>k.identifier===n.touchId),!r||r.identifier!==n.touchId)return}else{if(n.touchId!==null||i.pointerId!==n.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:c,touches:u,rtlTranslate:d,slidesGrid:h,enabled:p}=e;if(!p||!c.simulateTouch&&i.pointerType==="mouse")return;if(n.allowTouchCallbacks&&e.emit("touchEnd",i),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&c.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}c.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const g=Nf(),y=g-n.touchStartTime;if(e.allowClick){const k=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(k&&k[0]||i.target,k),e.emit("tap click",i),y<300&&g-n.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(n.lastClickTime=Nf(),jS(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||u.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let x;if(c.followFinger?x=d?e.translate:-e.translate:x=-n.currentTranslate,c.cssMode)return;if(c.freeMode&&c.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:x});return}const b=x>=-e.maxTranslate()&&!e.params.loop;let S=0,C=e.slidesSizesGrid[0];for(let k=0;k<h.length;k+=k<c.slidesPerGroupSkip?1:c.slidesPerGroup){const P=k<c.slidesPerGroupSkip-1?1:c.slidesPerGroup;typeof h[k+P]<"u"?(b||x>=h[k]&&x<h[k+P])&&(S=k,C=h[k+P]-h[k]):(b||x>=h[k])&&(S=k,C=h[h.length-1]-h[h.length-2])}let T=null,M=null;c.rewind&&(e.isBeginning?M=c.virtual&&c.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(T=0));const A=(x-h[S])/C,R=S<c.slidesPerGroupSkip-1?1:c.slidesPerGroup;if(y>c.longSwipesMs){if(!c.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(A>=c.longSwipesRatio?e.slideTo(c.rewind&&e.isEnd?T:S+R):e.slideTo(S)),e.swipeDirection==="prev"&&(A>1-c.longSwipesRatio?e.slideTo(S+R):M!==null&&A<0&&Math.abs(A)>c.longSwipesRatio?e.slideTo(M):e.slideTo(S))}else{if(!c.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(S+R):e.slideTo(S):(e.swipeDirection==="next"&&e.slideTo(T!==null?T:S+R),e.swipeDirection==="prev"&&e.slideTo(M!==null?M:S))}}function Bw(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:o}=t,c=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const u=c&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!u?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!c?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=r,t.allowSlideNext=i,t.params.watchOverflow&&o!==t.snapGrid&&t.checkOverflow()}function Xz(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Qz(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:i}=t;if(!i)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let r;const o=t.maxTranslate()-t.minTranslate();o===0?r=0:r=(t.translate-t.minTranslate())/o,r!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Zz(t){const e=this;Ef(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Kz(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const VS=(t,e)=>{const n=qi(),{params:i,el:r,wrapperEl:o,device:c}=t,u=!!i.nested,d=e==="on"?"addEventListener":"removeEventListener",h=e;!r||typeof r=="string"||(n[d]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:u}),r[d]("touchstart",t.onTouchStart,{passive:!1}),r[d]("pointerdown",t.onTouchStart,{passive:!1}),n[d]("touchmove",t.onTouchMove,{passive:!1,capture:u}),n[d]("pointermove",t.onTouchMove,{passive:!1,capture:u}),n[d]("touchend",t.onTouchEnd,{passive:!0}),n[d]("pointerup",t.onTouchEnd,{passive:!0}),n[d]("pointercancel",t.onTouchEnd,{passive:!0}),n[d]("touchcancel",t.onTouchEnd,{passive:!0}),n[d]("pointerout",t.onTouchEnd,{passive:!0}),n[d]("pointerleave",t.onTouchEnd,{passive:!0}),n[d]("contextmenu",t.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",t.onClick,!0),i.cssMode&&o[d]("scroll",t.onScroll),i.updateOnWindowResize?t[h](c.ios||c.android?"resize orientationchange observerUpdate":"resize observerUpdate",Bw,!0):t[h]("observerUpdate",Bw,!0),r[d]("load",t.onLoad,{capture:!0}))};function Wz(){const t=this,{params:e}=t;t.onTouchStart=Fz.bind(t),t.onTouchMove=Gz.bind(t),t.onTouchEnd=Yz.bind(t),t.onDocumentTouchStart=Kz.bind(t),e.cssMode&&(t.onScroll=Qz.bind(t)),t.onClick=Xz.bind(t),t.onLoad=Zz.bind(t),VS(t,"on")}function $z(){VS(this,"off")}var Jz={attachEvents:Wz,detachEvents:$z};const Iw=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function ej(){const t=this,{realIndex:e,initialized:n,params:i,el:r}=t,o=i.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const c=qi(),u=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",d=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?t.el:c.querySelector(i.breakpointsBase),h=t.getBreakpoint(o,u,d);if(!h||t.currentBreakpoint===h)return;const g=(h in o?o[h]:void 0)||t.originalParams,y=Iw(t,i),x=Iw(t,g),b=t.params.grabCursor,S=g.grabCursor,C=i.enabled;y&&!x?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),t.emitContainerClasses()):!y&&x&&(r.classList.add(`${i.containerModifierClass}grid`),(g.grid.fill&&g.grid.fill==="column"||!g.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),t.emitContainerClasses()),b&&!S?t.unsetGrabCursor():!b&&S&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof g[P]>"u")return;const L=i[P]&&i[P].enabled,I=g[P]&&g[P].enabled;L&&!I&&t[P].disable(),!L&&I&&t[P].enable()});const T=g.direction&&g.direction!==i.direction,M=i.loop&&(g.slidesPerView!==i.slidesPerView||T),A=i.loop;T&&n&&t.changeDirection(),Hn(t.params,g);const R=t.params.enabled,k=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),C&&!R?t.disable():!C&&R&&t.enable(),t.currentBreakpoint=h,t.emit("_beforeBreakpoint",g),n&&(M?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!A&&k?(t.loopCreate(e),t.updateSlides()):A&&!k&&t.loopDestroy()),t.emit("breakpoint",g)}function tj(t,e,n){if(e===void 0&&(e="window"),!t||e==="container"&&!n)return;let i=!1;const r=pn(),o=e==="window"?r.innerHeight:n.clientHeight,c=Object.keys(t).map(u=>{if(typeof u=="string"&&u.indexOf("@")===0){const d=parseFloat(u.substr(1));return{value:o*d,point:u}}return{value:u,point:u}});c.sort((u,d)=>parseInt(u.value,10)-parseInt(d.value,10));for(let u=0;u<c.length;u+=1){const{point:d,value:h}=c[u];e==="window"?r.matchMedia(`(min-width: ${h}px)`).matches&&(i=d):h<=n.clientWidth&&(i=d)}return i||"max"}var nj={setBreakpoint:ej,getBreakpoint:tj};function ij(t,e){const n=[];return t.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&n.push(e+r)}):typeof i=="string"&&n.push(e+i)}),n}function sj(){const t=this,{classNames:e,params:n,rtl:i,el:r,device:o}=t,c=ij(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...c),r.classList.add(...e),t.emitContainerClasses()}function rj(){const t=this,{el:e,classNames:n}=t;!e||typeof e=="string"||(e.classList.remove(...n),t.emitContainerClasses())}var aj={addClasses:sj,removeClasses:rj};function oj(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:i}=n;if(i){const r=t.slides.length-1,o=t.slidesGrid[r]+t.slidesSizesGrid[r]+i*2;t.isLocked=t.size>o}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var lj={checkOverflow:oj},Pm={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function cj(t,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],o=i[r];if(typeof o!="object"||o===null){Hn(e,i);return}if(t[r]===!0&&(t[r]={enabled:!0}),r==="navigation"&&t[r]&&t[r].enabled&&!t[r].prevEl&&!t[r].nextEl&&(t[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&t[r]&&t[r].enabled&&!t[r].el&&(t[r].auto=!0),!(r in t&&"enabled"in o)){Hn(e,i);return}typeof t[r]=="object"&&!("enabled"in t[r])&&(t[r].enabled=!0),t[r]||(t[r]={enabled:!1}),Hn(e,i)}}const E0={eventsEmitter:az,update:yz,translate:Tz,transition:Mz,slide:jz,loop:Iz,grabCursor:Uz,events:Jz,breakpoints:nj,checkOverflow:lj,classes:aj},C0={};let s2=class hs{constructor(){let e,n;for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?n=r[0]:[e,n]=r,n||(n={}),n=Hn({},n),e&&!n.el&&(n.el=e);const c=qi();if(n.el&&typeof n.el=="string"&&c.querySelectorAll(n.el).length>1){const p=[];return c.querySelectorAll(n.el).forEach(g=>{const y=Hn({},n,{el:g});p.push(new hs(y))}),p}const u=this;u.__swiper__=!0,u.support=NS(),u.device=BS({userAgent:n.userAgent}),u.browser=IS(),u.eventsListeners={},u.eventsAnyListeners=[],u.modules=[...u.__modules__],n.modules&&Array.isArray(n.modules)&&u.modules.push(...n.modules);const d={};u.modules.forEach(p=>{p({params:n,swiper:u,extendParams:cj(n,d),on:u.on.bind(u),once:u.once.bind(u),off:u.off.bind(u),emit:u.emit.bind(u)})});const h=Hn({},Pm,d);return u.params=Hn({},h,C0,n),u.originalParams=Hn({},u.params),u.passedParams=Hn({},n),u.params&&u.params.on&&Object.keys(u.params.on).forEach(p=>{u.on(p,u.params.on[p])}),u.params&&u.params.onAny&&u.onAny(u.params.onAny),Object.assign(u,{enabled:u.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return u.params.direction==="horizontal"},isVertical(){return u.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:u.params.allowSlideNext,allowSlidePrev:u.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:u.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:u.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),u.emit("_swiper"),u.params.init&&u.init(),u}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:n,params:i}=this,r=Ni(n,`.${i.slideClass}, swiper-slide`),o=_w(r[0]);return _w(e)-o}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:n,params:i}=e;e.slides=Ni(n,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),c=(i.maxTranslate()-r)*e+r;i.translateTo(c,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);n.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e,n){e===void 0&&(e="current"),n===void 0&&(n=!1);const i=this,{params:r,slides:o,slidesGrid:c,slidesSizesGrid:u,size:d,activeIndex:h}=i;let p=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let g=o[h]?Math.ceil(o[h].swiperSlideSize):0,y;for(let x=h+1;x<o.length;x+=1)o[x]&&!y&&(g+=Math.ceil(o[x].swiperSlideSize),p+=1,g>d&&(y=!0));for(let x=h-1;x>=0;x-=1)o[x]&&!y&&(g+=o[x].swiperSlideSize,p+=1,g>d&&(y=!0))}else if(e==="current")for(let g=h+1;g<o.length;g+=1)(n?c[g]+u[g]-c[h]<d:c[g]-c[h]<d)&&(p+=1);else for(let g=h-1;g>=0;g-=1)c[h]-c[g]<d&&(p+=1);return p}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(c=>{c.complete&&Ef(e,c)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const c=e.rtlTranslate?e.translate*-1:e.translate,u=Math.min(Math.max(c,e.maxTranslate()),e.minTranslate());e.setTranslate(u),e.updateActiveIndex(),e.updateSlidesClasses()}let o;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const c=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;o=e.slideTo(c.length-1,0,!1,!0)}else o=e.slideTo(e.activeIndex,0,!1,!0);o||r()}i.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n){n===void 0&&(n=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(o=>{e==="vertical"?o.style.width="":o.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let i=e||n.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=n,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const r=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let c=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Ni(i,r())[0];return!c&&n.params.createElements&&(c=If("div",n.params.wrapperClass),i.append(c),Ni(i,`.${n.params.slideClass}`).forEach(u=>{c.append(u)})),Object.assign(n,{el:i,wrapperEl:c,slidesEl:n.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:c,hostEl:n.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||$s(i,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||$s(i,"direction")==="rtl"),wrongRTL:$s(c,"display")==="-webkit-box"}),!0}init(e){const n=this;if(n.initialized||n.mount(e)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const r=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&r.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(o=>{o.complete?Ef(n,o):o.addEventListener("load",c=>{Ef(n,c.target)})}),jm(n),n.initialized=!0,jm(n),n.emit("init"),n.emit("afterInit"),n}destroy(e,n){e===void 0&&(e=!0),n===void 0&&(n=!0);const i=this,{params:r,el:o,wrapperEl:c,slides:u}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),n&&(i.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),c&&c.removeAttribute("style"),u&&u.length&&u.forEach(d=>{d.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),d.removeAttribute("style"),d.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(d=>{i.off(d)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),F_(i)),i.destroyed=!0),null}static extendDefaults(e){Hn(C0,e)}static get extendedDefaults(){return C0}static get defaults(){return Pm}static installModule(e){hs.prototype.__modules__||(hs.prototype.__modules__=[]);const n=hs.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>hs.installModule(n)),hs):(hs.installModule(e),hs)}};Object.keys(E0).forEach(t=>{Object.keys(E0[t]).forEach(e=>{s2.prototype[e]=E0[t][e]})});s2.use([sz,rz]);const US=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Hr(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Fa(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>n.indexOf(i)<0).forEach(i=>{typeof t[i]>"u"?t[i]=e[i]:Hr(e[i])&&Hr(t[i])&&Object.keys(e[i]).length>0?e[i].__swiper__?t[i]=e[i]:Fa(t[i],e[i]):t[i]=e[i]})}function qS(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function FS(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function GS(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function YS(t){t===void 0&&(t="");const e=t.split(" ").map(i=>i.trim()).filter(i=>!!i),n=[];return e.forEach(i=>{n.indexOf(i)<0&&n.push(i)}),n.join(" ")}function uj(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function fj(t){let{swiper:e,slides:n,passedParams:i,changedParams:r,nextEl:o,prevEl:c,scrollbarEl:u,paginationEl:d}=t;const h=r.filter(V=>V!=="children"&&V!=="direction"&&V!=="wrapperClass"),{params:p,pagination:g,navigation:y,scrollbar:x,virtual:b,thumbs:S}=e;let C,T,M,A,R,k,P,L;r.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&!i.thumbs.swiper.destroyed&&p.thumbs&&(!p.thumbs.swiper||p.thumbs.swiper.destroyed)&&(C=!0),r.includes("controller")&&i.controller&&i.controller.control&&p.controller&&!p.controller.control&&(T=!0),r.includes("pagination")&&i.pagination&&(i.pagination.el||d)&&(p.pagination||p.pagination===!1)&&g&&!g.el&&(M=!0),r.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||u)&&(p.scrollbar||p.scrollbar===!1)&&x&&!x.el&&(A=!0),r.includes("navigation")&&i.navigation&&(i.navigation.prevEl||c)&&(i.navigation.nextEl||o)&&(p.navigation||p.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(R=!0);const I=V=>{e[V]&&(e[V].destroy(),V==="navigation"?(e.isElement&&(e[V].prevEl.remove(),e[V].nextEl.remove()),p[V].prevEl=void 0,p[V].nextEl=void 0,e[V].prevEl=void 0,e[V].nextEl=void 0):(e.isElement&&e[V].el.remove(),p[V].el=void 0,e[V].el=void 0))};r.includes("loop")&&e.isElement&&(p.loop&&!i.loop?k=!0:!p.loop&&i.loop?P=!0:L=!0),h.forEach(V=>{if(Hr(p[V])&&Hr(i[V]))Object.assign(p[V],i[V]),(V==="navigation"||V==="pagination"||V==="scrollbar")&&"enabled"in i[V]&&!i[V].enabled&&I(V);else{const F=i[V];(F===!0||F===!1)&&(V==="navigation"||V==="pagination"||V==="scrollbar")?F===!1&&I(V):p[V]=i[V]}}),h.includes("controller")&&!T&&e.controller&&e.controller.control&&p.controller&&p.controller.control&&(e.controller.control=p.controller.control),r.includes("children")&&n&&b&&p.virtual.enabled?(b.slides=n,b.update(!0)):r.includes("virtual")&&b&&p.virtual.enabled&&(n&&(b.slides=n),b.update(!0)),r.includes("children")&&n&&p.loop&&(L=!0),C&&S.init()&&S.update(!0),T&&(e.controller.control=p.controller.control),M&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-pagination"),d.part.add("pagination"),e.el.appendChild(d)),d&&(p.pagination.el=d),g.init(),g.render(),g.update()),A&&(e.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-scrollbar"),u.part.add("scrollbar"),e.el.appendChild(u)),u&&(p.scrollbar.el=u),x.init(),x.updateSize(),x.setTranslate()),R&&(e.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),jw(o,e.hostEl.constructor.nextButtonSvg),o.part.add("button-next"),e.el.appendChild(o)),(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-button-prev"),jw(c,e.hostEl.constructor.prevButtonSvg),c.part.add("button-prev"),e.el.appendChild(c))),o&&(p.navigation.nextEl=o),c&&(p.navigation.prevEl=c),y.init(),y.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=i.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=i.allowSlidePrev),r.includes("direction")&&e.changeDirection(i.direction,!1),(k||L)&&e.loopDestroy(),(P||L)&&e.loopCreate(),e.update()}function dj(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const n={on:{}},i={},r={};Fa(n,Pm),n._emitClasses=!0,n.init=!1;const o={},c=US.map(d=>d.replace(/_/,"")),u=Object.assign({},t);return Object.keys(u).forEach(d=>{typeof t[d]>"u"||(c.indexOf(d)>=0?Hr(t[d])?(n[d]={},r[d]={},Fa(n[d],t[d]),Fa(r[d],t[d])):(n[d]=t[d],r[d]=t[d]):d.search(/on[A-Z]/)===0&&typeof t[d]=="function"?e?i[`${d[2].toLowerCase()}${d.substr(3)}`]=t[d]:n.on[`${d[2].toLowerCase()}${d.substr(3)}`]=t[d]:o[d]=t[d])}),["navigation","pagination","scrollbar"].forEach(d=>{n[d]===!0&&(n[d]={}),n[d]===!1&&delete n[d]}),{params:n,passedParams:r,rest:o,events:i}}function hj(t,e){let{el:n,nextEl:i,prevEl:r,paginationEl:o,scrollbarEl:c,swiper:u}=t;qS(e)&&i&&r&&(u.params.navigation.nextEl=i,u.originalParams.navigation.nextEl=i,u.params.navigation.prevEl=r,u.originalParams.navigation.prevEl=r),FS(e)&&o&&(u.params.pagination.el=o,u.originalParams.pagination.el=o),GS(e)&&c&&(u.params.scrollbar.el=c,u.originalParams.scrollbar.el=c),u.init(n)}function pj(t,e,n,i,r){const o=[];if(!e)return o;const c=d=>{o.indexOf(d)<0&&o.push(d)};if(n&&i){const d=i.map(r),h=n.map(r);d.join("")!==h.join("")&&c("children"),i.length!==n.length&&c("children")}return US.filter(d=>d[0]==="_").map(d=>d.replace(/_/,"")).forEach(d=>{if(d in t&&d in e)if(Hr(t[d])&&Hr(e[d])){const h=Object.keys(t[d]),p=Object.keys(e[d]);h.length!==p.length?c(d):(h.forEach(g=>{t[d][g]!==e[d][g]&&c(d)}),p.forEach(g=>{t[d][g]!==e[d][g]&&c(d)}))}else t[d]!==e[d]&&c(d)}),o}const mj=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.emit("_virtualUpdated"),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function Hf(){return Hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Hf.apply(this,arguments)}function XS(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function QS(t){const e=[];return Qe.Children.toArray(t).forEach(n=>{XS(n)?e.push(n):n.props&&n.props.children&&QS(n.props.children).forEach(i=>e.push(i))}),e}function gj(t){const e=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Qe.Children.toArray(t).forEach(i=>{if(XS(i))e.push(i);else if(i.props&&i.props.slot&&n[i.props.slot])n[i.props.slot].push(i);else if(i.props&&i.props.children){const r=QS(i.props.children);r.length>0?r.forEach(o=>e.push(o)):n["container-end"].push(i)}else n["container-end"].push(i)}),{slides:e,slots:n}}function yj(t,e,n){if(!n)return null;const i=p=>{let g=p;return p<0?g=e.length+p:g>=e.length&&(g=g-e.length),g},r=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:c}=n,u=t.params.loop?-e.length:0,d=t.params.loop?e.length*2:e.length,h=[];for(let p=u;p<d;p+=1)p>=o&&p<=c&&h.push(e[i(p)]);return h.map((p,g)=>Qe.cloneElement(p,{swiper:t,style:r,key:p.props.virtualIndex||p.key||`slide-${g}`}))}function Pl(t,e){return typeof window>"u"?D.useEffect(t,e):D.useLayoutEffect(t,e)}const Hw=D.createContext(null),vj=D.createContext(null),ir=D.forwardRef(function(t,e){let{className:n,tag:i="div",wrapperTag:r="div",children:o,onSwiper:c,...u}=t===void 0?{}:t,d=!1;const[h,p]=D.useState("swiper"),[g,y]=D.useState(null),[x,b]=D.useState(!1),S=D.useRef(!1),C=D.useRef(null),T=D.useRef(null),M=D.useRef(null),A=D.useRef(null),R=D.useRef(null),k=D.useRef(null),P=D.useRef(null),L=D.useRef(null),{params:I,passedParams:V,rest:F,events:N}=dj(u),{slides:z,slots:te}=gj(o),$=()=>{b(!x)};Object.assign(I.on,{_containerClasses(ae,_){p(_)}});const ce=()=>{Object.assign(I.on,N),d=!0;const ae={...I};if(delete ae.wrapperClass,T.current=new s2(ae),T.current.virtual&&T.current.params.virtual.enabled){T.current.virtual.slides=z;const _={cache:!1,slides:z,renderExternal:y,renderExternalUpdate:!1};Fa(T.current.params.virtual,_),Fa(T.current.originalParams.virtual,_)}};C.current||ce(),T.current&&T.current.on("_beforeBreakpoint",$);const U=()=>{d||!N||!T.current||Object.keys(N).forEach(ae=>{T.current.on(ae,N[ae])})},J=()=>{!N||!T.current||Object.keys(N).forEach(ae=>{T.current.off(ae,N[ae])})};D.useEffect(()=>()=>{T.current&&T.current.off("_beforeBreakpoint",$)}),D.useEffect(()=>{!S.current&&T.current&&(T.current.emitSlidesClasses(),S.current=!0)}),Pl(()=>{if(e&&(e.current=C.current),!!C.current)return T.current.destroyed&&ce(),hj({el:C.current,nextEl:R.current,prevEl:k.current,paginationEl:P.current,scrollbarEl:L.current,swiper:T.current},I),c&&!T.current.destroyed&&c(T.current),()=>{T.current&&!T.current.destroyed&&T.current.destroy(!0,!1)}},[]),Pl(()=>{U();const ae=pj(V,M.current,z,A.current,_=>_.key);return M.current=V,A.current=z,ae.length&&T.current&&!T.current.destroyed&&fj({swiper:T.current,slides:z,passedParams:V,changedParams:ae,nextEl:R.current,prevEl:k.current,scrollbarEl:L.current,paginationEl:P.current}),()=>{J()}}),Pl(()=>{mj(T.current)},[g]);function ee(){return I.virtual?yj(T.current,z,g):z.map((ae,_)=>Qe.cloneElement(ae,{swiper:T.current,swiperSlideIndex:_}))}return Qe.createElement(i,Hf({ref:C,className:YS(`${h}${n?` ${n}`:""}`)},F),Qe.createElement(vj.Provider,{value:T.current},te["container-start"],Qe.createElement(r,{className:uj(I.wrapperClass)},te["wrapper-start"],ee(),te["wrapper-end"]),qS(I)&&Qe.createElement(Qe.Fragment,null,Qe.createElement("div",{ref:k,className:"swiper-button-prev"}),Qe.createElement("div",{ref:R,className:"swiper-button-next"})),GS(I)&&Qe.createElement("div",{ref:L,className:"swiper-scrollbar"}),FS(I)&&Qe.createElement("div",{ref:P,className:"swiper-pagination"}),te["container-end"]))});ir.displayName="Swiper";const Vr=D.forwardRef(function(t,e){let{tag:n="div",children:i,className:r="",swiper:o,zoom:c,lazy:u,virtualIndex:d,swiperSlideIndex:h,...p}=t===void 0?{}:t;const g=D.useRef(null),[y,x]=D.useState("swiper-slide"),[b,S]=D.useState(!1);function C(R,k,P){k===g.current&&x(P)}Pl(()=>{if(typeof h<"u"&&(g.current.swiperSlideIndex=h),e&&(e.current=g.current),!(!g.current||!o)){if(o.destroyed){y!=="swiper-slide"&&x("swiper-slide");return}return o.on("_slideClass",C),()=>{o&&o.off("_slideClass",C)}}}),Pl(()=>{o&&g.current&&!o.destroyed&&x(o.getSlideClasses(g.current))},[o]);const T={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},M=()=>typeof i=="function"?i(T):i,A=()=>{S(!0)};return Qe.createElement(n,Hf({ref:g,className:YS(`${y}${r?` ${r}`:""}`),"data-swiper-slide-index":d,onLoad:A},p),c&&Qe.createElement(Hw.Provider,{value:T},Qe.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof c=="number"?c:void 0},M(),u&&!b&&Qe.createElement("div",{className:"swiper-lazy-preloader"}))),!c&&Qe.createElement(Hw.Provider,{value:T},M(),u&&!b&&Qe.createElement("div",{className:"swiper-lazy-preloader"})))});Vr.displayName="SwiperSlide";const ZS="/assets/banner2-ZGIS2MhF.svg",KS="/assets/banner3-B7141gQ0.svg",Nm="/assets/banner4-BC2MbK6f.svg",Bm="data:image/svg+xml,%3csvg%20width='260'%20height='80'%20viewBox='0%200%20260%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M107.512%2058.8879L115.758%200H126.026L120.581%2038.5844L115.835%2037.4176L138.706%2016.5695H152.319L134.272%2033.6058L146.718%2058.8879H135.672L124.937%2036.9508L130.538%2035.7062L115.835%2049.3974L119.958%2043.1741L117.78%2058.8879H107.512Z'%20fill='%23E4E1E1'/%3e%3cpath%20d='M61.4062%2058.8886L67.3184%2016.5702H76.8867L75.7976%2024.8939L75.1753%2023.1825C76.5237%2020.5894%2078.3647%2018.6965%2080.6985%2017.5037C83.0322%2016.259%2085.6252%2015.6367%2088.4776%2015.6367C91.693%2015.6367%2094.4156%2016.3887%2096.6457%2017.8927C98.9275%2019.3966%20100.587%2021.4451%20101.624%2024.0382C102.713%2026.5793%20103.025%2029.4576%20102.558%2032.673L98.9016%2058.8886H88.711L92.2116%2033.8399C92.5746%2031.1431%2092.0819%2028.9909%2090.7335%2027.3832C89.3852%2025.7755%2087.4663%2024.9717%2084.977%2024.9717C83.3174%2024.9717%2081.7616%2025.3606%2080.3095%2026.1385C78.9093%2026.8646%2077.7424%2027.9018%2076.8089%2029.2502C75.9273%2030.5986%2075.3309%2032.2062%2075.0197%2034.0732L71.5969%2058.8886H61.4062Z'%20fill='%23E4E1E1'/%3e%3cpath%20d='M41.6484%2058.888L47.5606%2016.5696H57.829L51.9169%2058.888H41.6484ZM48.1829%2011.8244L49.7387%200.933594H60.0072L58.5291%2011.8244H48.1829Z'%20fill='%23E4E1E1'/%3e%3cpath%20d='M0.265625%2058.888L8.35591%200.933594H18.9355L12.1677%2049.5531H36.9831L35.6606%2058.888H0.265625Z'%20fill='%23E4E1E1'/%3e%3cpath%20d='M153.266%2059L161.439%200H171.464L168.071%2024.9406L166.914%2023.2259C168.251%2020.6279%20170.076%2018.7314%20172.389%2017.5363C174.703%2016.2893%20177.273%2015.6658%20180.1%2015.6658C183.288%2015.6658%20185.986%2016.4192%20188.197%2017.926C190.459%2019.4328%20192.104%2021.4852%20193.132%2024.0832C194.212%2026.6292%20194.52%2029.513%20194.057%2032.7345L190.433%2059H180.332L183.725%2033.9036C184.136%2031.2017%20183.673%2029.0454%20182.337%2027.4346C181%2025.8239%20179.098%2025.0185%20176.63%2025.0185C174.985%2025.0185%20173.469%2025.4082%20172.081%2026.1876C170.693%2026.915%20169.536%2027.9542%20168.611%2029.3052C167.685%2030.6561%20167.069%2032.2668%20166.76%2034.1374L163.367%2059H153.266Z'%20fill='%23E4E1E1'%20fill-opacity='0.59'/%3e%3cpath%20d='M180.424%2080C177.082%2080%20174.28%2079.235%20172.017%2077.705C169.755%2076.1223%20168.135%2073.9329%20167.158%2071.1367C166.233%2068.3405%20166.027%2065.0695%20166.541%2061.3237L170.012%2036H180.193L176.722%2061.482C176.465%2063.2758%20176.594%2064.8585%20177.108%2066.2302C177.622%2067.6019%20178.47%2068.6571%20179.653%2069.3957C180.836%2070.1343%20182.25%2070.5036%20183.895%2070.5036C185.592%2070.5036%20187.109%2070.1343%20188.446%2069.3957C189.834%2068.6043%20190.991%2067.5228%20191.917%2066.1511C192.894%2064.7266%20193.485%2063.0911%20193.691%2061.2446L197.162%2036H207.266L201.404%2079.0504H191.84L192.919%2070.5827L193.614%2072.3237C192.328%2074.9616%20190.503%2076.9137%20188.137%2078.1799C185.824%2079.3933%20183.253%2080%20180.424%2080Z'%20fill='%23E4E1E1'%20fill-opacity='0.6'/%3e%3cpath%20d='M236.693%2060C233.395%2060%20230.406%2059.3758%20227.726%2058.1274C225.098%2056.827%20223.088%2055.0325%20221.697%2052.7438L223.011%2050.8713L221.928%2059.0637H212.266L220.46%200H230.664L227.262%2025.0455L224.479%2022.7828C226.129%2020.4941%20228.216%2018.7516%20230.741%2017.5553C233.318%2016.3069%20236.152%2015.6827%20239.244%2015.6827C243.161%2015.6827%20246.614%2016.619%20249.603%2018.4915C252.592%2020.3121%20254.937%2022.7828%20256.637%2025.9038C258.39%2029.0247%20259.266%2032.5358%20259.266%2036.4369C259.266%2039.6619%20258.673%2042.7048%20257.488%2045.5657C256.354%2048.4265%20254.756%2050.9493%20252.695%2053.1339C250.633%2055.2666%20248.237%2056.9571%20245.506%2058.2055C242.774%2059.4018%20239.837%2060%20236.693%2060ZM235.688%2050.6372C238.214%2050.6372%20240.455%2050.013%20242.414%2048.7646C244.372%2047.4642%20245.892%2045.7477%20246.975%2043.6151C248.108%2041.4824%20248.675%2039.1157%20248.675%2036.515C248.675%2034.2783%20248.211%2032.3017%20247.284%2030.5852C246.408%2028.8687%20245.171%2027.5163%20243.573%2026.528C241.976%2025.5397%20240.069%2025.0455%20237.853%2025.0455C235.379%2025.0455%20233.163%2025.6957%20231.205%2026.9961C229.298%2028.2445%20227.803%2029.935%20226.721%2032.0676C225.639%2034.2003%20225.098%2036.567%20225.098%2039.1677C225.098%2041.4044%20225.536%2043.407%20226.412%2045.1756C227.34%2046.8921%20228.602%2048.2445%20230.2%2049.2328C231.797%2050.169%20233.627%2050.6372%20235.688%2050.6372Z'%20fill='%23E4E1E1'/%3e%3c/svg%3e",Im="data:image/svg+xml,%3csvg%20width='257'%20height='106'%20viewBox='0%200%20257%20106'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2959_1741'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='257'%20height='106'%3e%3cpath%20d='M0.695312%200H256.24V106H0.695312V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2959_1741)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.3677%2047.6814C21.8604%2045.6444%2018.8422%2044.0601%2018.8422%2041.5704C18.8422%2039.4575%2020.5776%2038.2506%2023.6711%2038.2506C29.3294%2038.2506%2035.1383%2040.4387%2039.1371%2042.3999L41.4004%2028.4429C38.2318%2026.9339%2031.7433%2024.4442%2022.7657%2024.4442C16.4283%2024.4442%2011.1468%2026.1038%207.37495%2029.1972C3.45143%2032.4412%201.41442%2037.1189%201.41442%2042.7773C1.41442%2053.0376%207.67654%2057.4138%2017.8616%2061.1104C24.4253%2063.449%2026.6134%2065.1092%2026.6134%2067.6741C26.6134%2070.1638%2024.5006%2071.5971%2020.6529%2071.5971C15.8999%2071.5971%208.05395%2069.2585%202.92351%2066.2409L0.660156%2080.3489C5.03578%2082.8386%2013.1838%2085.4035%2021.6341%2085.4035C28.3483%2085.4035%2033.9314%2083.8192%2037.7038%2080.8016C41.9284%2077.4818%2044.1165%2072.5783%2044.1165%2066.2409C44.1165%2055.7536%2037.7038%2051.378%2027.3677%2047.6814ZM80.9621%2039.4575L83.2255%2025.5758H71.2767V8.72408L55.2114%2011.3677L52.8915%2025.5758L47.241%2026.4925L45.1259%2039.4575H52.8683V66.6935C52.8683%2073.7852%2054.679%2078.6893%2058.3756%2081.7069C61.469%2084.1966%2065.9199%2085.4035%2072.182%2085.4035C77.0103%2085.4035%2079.9526%2084.574%2081.9897%2084.0455V69.3337C80.858%2069.6359%2078.293%2070.1638%2076.5576%2070.1638C72.861%2070.1638%2071.2767%2068.2779%2071.2767%2063.9775V39.4575H80.9621ZM116.845%2024.765C111.564%2024.765%20107.339%2027.5376%20105.68%2032.517L104.548%2025.5758H88.1765V84.2718H106.887V46.1723C109.226%2043.3052%20112.545%2042.2686%20117.072%2042.2686C118.053%2042.2686%20119.109%2042.2686%20120.391%2042.4949V25.2177C119.109%2024.9161%20117.977%2024.765%20116.845%2024.765ZM134.349%2019.7664C139.781%2019.7664%20144.157%2015.3155%20144.157%209.88348C144.157%204.37562%20139.781%200%20134.349%200C128.841%200%20124.465%204.37562%20124.465%209.88348C124.465%2015.3155%20128.841%2019.7664%20134.349%2019.7664ZM124.918%2025.5758H143.704V84.2718H124.918V25.5758ZM196.94%2030.8568C193.62%2026.5564%20189.018%2024.4442%20183.133%2024.4442C177.701%2024.4442%20172.948%2026.7075%20168.497%2031.4606L167.516%2025.5758H151.069V106L169.779%20102.907V84.0455C172.646%2084.9508%20175.588%2085.4035%20178.229%2085.4035C182.907%2085.4035%20189.697%2084.1966%20194.978%2078.463C200.032%2072.9551%20202.598%2064.4302%20202.598%2053.1887C202.598%2043.23%20200.711%2035.6857%20196.94%2030.8568ZM181.398%2067.0704C179.889%2069.9375%20177.55%2071.4466%20174.834%2071.4466C172.948%2071.4466%20171.288%2071.0692%20169.779%2070.3149V42.3999C172.948%2039.0807%20175.815%2038.7033%20176.871%2038.7033C181.624%2038.7033%20183.963%2043.8337%20183.963%2053.8677C183.963%2059.6013%20183.133%2064.0528%20181.398%2067.0704ZM256.239%2054.3956C256.239%2045.0407%20254.202%2037.6469%20250.203%2032.4412C246.129%2027.1602%20240.018%2024.4442%20232.248%2024.4442C216.329%2024.4442%20206.446%2036.2136%20206.446%2055.0746C206.446%2065.6371%20209.086%2073.5589%20214.292%2078.6135C218.969%2083.1402%20225.684%2085.4035%20234.36%2085.4035C242.357%2085.4035%20249.751%2083.5176%20254.429%2080.4242L252.392%2067.5989C247.789%2070.0886%20242.433%2071.4466%20236.397%2071.4466C232.776%2071.4466%20230.286%2070.6918%20228.475%2069.1074C226.514%2067.4478%20225.382%2064.7318%20225.005%2060.8841H256.013C256.088%2059.9788%20256.239%2055.7537%20256.239%2054.3956ZM224.854%2049.4163C225.382%2041.0419%20227.645%2037.1189%20231.946%2037.1189C236.171%2037.1189%20238.359%2041.1177%20238.66%2049.4163H224.854Z'%20fill='%23E4E1E1'/%3e%3c/g%3e%3c/svg%3e",WS="/assets/banner7-BAr-EIfE.svg",$S="/assets/banner8-NfEv2uCG.svg",JS="/assets/userpartner-Cst85qlq.svg",e6="/assets/userpartner0-K6n5obvo.svg",t6="/assets/userpartner1-7MrB_o-D.svg",n6="/assets/userpartner2-BKapPsx-.svg",i6="/assets/userpartner3-DQjw2Gfd.svg",s6="/assets/userpartner4-QobLAyKL.svg",r6="/assets/userpartner5-Drr4dgRZ.svg",a6="/assets/userpartner6-CzLnMRNk.svg",o6="/assets/userpartner7-DXQNL7jA.svg",l6="/assets/userpartner8-CpNky4Ac.svg",xj=j(Y.div)`
  position: relative;
  overflow: hidden;
  width: 100vw;
`,bj=()=>{const{t}=Qt(),e=yi({query:"(max-width: 743px)"}),n=yi({query:"(min-width: 744px) and (max-width: 1023px)"}),i=yi({query:"(min-width: 1024px)"}),r=t("feedback",{returnObjects:!0}),o=r.testimonials.map((g,y)=>{const x=[ZS,KS,Nm,Bm,Im,WS,$S],b=[JS,e6,t6,n6,i6,s6,r6,a6,l6,o6];return{...g,id:y+1,icon:x[y%x.length],avatar:b[y%b.length]}}),c=e?1:n?2:i?4:5,u=o.length>c,d={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},p=g=>({initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:g*.1}});return w.jsxs(xj,{initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.2},children:[w.jsxs(L_,{as:Y.div,variants:d,children:[w.jsx(Y.div,{variants:h,children:w.jsx(E_,{children:r.title})}),w.jsx(C_,{as:Y.div,variants:d,children:r.ratings.map((g,y)=>w.jsxs(Y.div,{variants:h,...p(y),children:[w.jsx(M_,{children:g.value}),w.jsxs("div",{children:[w.jsx(A_,{src:V_,alt:"⭐"}),w.jsx(O_,{children:g.source})]})]},y))})]}),w.jsxs(D_,{as:Y.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!1,amount:.2},children:[w.jsx(k_,{}),w.jsx(ir,{loop:u,slidesPerView:c,spaceBetween:20,centeredSlides:!0,autoplay:{delay:0,disableOnInteraction:!1},speed:4e3,modules:[Ir],className:"mySwiper",children:o.map((g,y)=>w.jsx(Vr,{children:w.jsxs(__,{as:Y.div,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:y*.1},viewport:{once:!1,amount:.2},whileHover:{y:-5,boxShadow:"0 10px 20px rgba(0,0,0,0.1)"},children:[w.jsx(z_,{src:g.icon,alt:"Company logo"}),w.jsx(j_,{children:g.text}),w.jsxs(P_,{children:[w.jsx(N_,{children:w.jsx(B_,{src:g.avatar,alt:`${g.name} avatar`,as:Y.img,whileHover:{rotate:5,scale:1.05}})}),w.jsxs("div",{children:[w.jsx(I_,{children:g.name}),w.jsx(H_,{children:g.position})]})]})]})},g.id))}),w.jsx(R_,{})]})]})},wj="modulepreload",Sj=function(t){return"/"+t},Vw={},r2=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),d=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));r=c(n.map(h=>{if(h=Sj(h),h in Vw)return;Vw[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":wj,p||(y.as="script"),y.crossOrigin="",y.href=h,d&&y.setAttribute("nonce",d),document.head.appendChild(y),p)return new Promise((x,b)=>{y.addEventListener("load",x),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return r.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},Tj=j.div`
position: relative;
  width: 100vw;
  height: 100%;
  background-color: transparent; /* півпрозорий фон */
  
margin: 0px 0;
padding: 40px 0px;

.swiper-wrapper {
display: flex;
transition-timing-function: linear !important;
padding: 0px 0px;
margin: 0 auto;
  }

@media screen and (min-width: 744px){

}

@media screen and (min-width: 1440px){

}
`,Ej=j.a`
  display: flex;
  padding: 18px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 21.028px;
  backdrop-filter: blur(14.02px);
  box-shadow: 
    inset 0 -7px 21px 0 rgba(255, 255, 255, 0.03),
    inset 0 -4px 5px 0 rgba(255, 255, 255, 0.03),
    0 7px 14px -7px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  width: 350px;
 height: 198px;
 margin-top: 100px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: 
      inset 0 0 20px 0 rgba(191, 123, 246, 0.7),
      inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15),
      inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1),
      0 0 10px 6px rgba(191, 123, 246, 0.4),
      0 15px 30px -10px rgba(0, 0, 0, 0.25),
      0 5px 10px -5px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(191, 123, 246, 0.3);
  }
`,Cj=uo`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, -5px); /* Рух вправо-вверх */
  }
  100% {
    transform: translate(0, 0);
  }
`,Aj=j.img`
  width: 46px;
  height: 46px;
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  animation: ${Cj} 2s ease-in-out infinite;
  transition: transform 0.3s ease;

  &:hover {
    animation-play-state: paused; /* Пауза при наведенні */
    transform: translate(3px, -3px); /* Фіксуємо в кінцевій позиції */
  }
`,Mj=j.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 100%;
  position: relative;
`,Oj=j.p`
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 12.266px;
  font-weight: 400;
  line-height: 1.3em;
  width: 100%;
`,kj=j.p`
  font-family: 'Inter', sans-serif;
  font-size: 76.226px;
  font-weight: 500;
  line-height: 1em;
  background: linear-gradient(93deg, #FFF 0.99%, #F7F8FD 14.42%, #B6B8EE 29.08%, #6A82FC 38.92%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
`,Rj=j.div`
  position: absolute;
  left: 14px;
  top: 4px;
  width: 275px;
  height: 5px;
`,Lj=j.div`
  position: absolute;
  left: 2px;
  top: 2px;
  width: 119px;
  height: 5px;
`,Dj="data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_537_68234)'%3e%3cpath%20d='M1.3717%2045.4069L45.478%201.30054M45.478%201.30054H16.0738M45.478%201.30054V30.7048'%20stroke='white'%20stroke-opacity='0.5'%20stroke-width='1.75232'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_537_68234'%3e%3crect%20width='45.5604'%20height='45.5604'%20fill='white'%20transform='translate(0.402466%200.331238)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",_j=()=>{const{t}=Qt(),e=yi({query:"(max-width: 743px)"}),n=yi({query:"(min-width: 744px) and (max-width: 1439px)"}),i=yi({query:"(min-width: 1440px)"}),r=t("swipper.stats",{returnObjects:!0}),o=[...r,...r.slice(0,3)];D.useEffect(()=>{},[]);const c=e?1:n?2:4,u=o.length>c;return w.jsxs(Tj,{children:[w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:1,delay:.3},viewport:{once:!1,amount:.3},children:w.jsx(ir,{loop:u,slidesPerView:c,spaceBetween:1,autoplay:{delay:2e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[Ir],className:"mySwiper",style:{width:"100%"},children:o.map((d,h)=>w.jsx(Vr,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",padding:20},children:w.jsx(Y.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.8,delay:.1*h},viewport:{once:!1,amount:.3},children:w.jsxs(Ej,{children:[w.jsx(Y.div,{initial:{opacity:0,rotate:-45},whileInView:{opacity:1,rotate:0},transition:{duration:.7,delay:.2+.1*h},viewport:{once:!1,amount:.3},children:w.jsx(Aj,{src:Dj,alt:"↗️"})}),w.jsxs(Mj,{children:[w.jsx(Y.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3+.1*h},viewport:{once:!1,amount:.3},children:w.jsx(Oj,{children:d.description})}),w.jsx(Y.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.7,delay:.4+.1*h},viewport:{once:!1,amount:.3},children:w.jsx(kj,{children:d.value})})]}),w.jsx(Y.div,{initial:{scaleX:0},whileInView:{scaleX:1},transition:{duration:.6,delay:.5+.1*h},viewport:{once:!1,amount:.3},children:w.jsx(Rj,{})}),w.jsx(Y.div,{initial:{scaleX:0},whileInView:{scaleX:1},transition:{duration:.6,delay:.6+.1*h},viewport:{once:!1,amount:.3},children:w.jsx(Lj,{})})]})})},h))})}),e&&w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:1,delay:.7},viewport:{once:!1,amount:.3},children:w.jsx(ir,{loop:u,slidesPerView:c,spaceBetween:10,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[Ir],className:"mySwiper",style:{width:"100vh"}})})]})},zj="/assets/HeroSplayn-CixhLBD5.png",jj=typeof window<"u"?D.useLayoutEffect:D.useEffect;function c6(t,e){const n=Ol({},e);return Object.keys(t).forEach(i=>{if(i.toString().match(/^(components|slots)$/))n[i]=Ol({},t[i],n[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const r=t[i]||{},o=e[i];n[i]={},!o||!Object.keys(o)?n[i]=r:!r||!Object.keys(r)?n[i]=o:(n[i]=Ol({},o),Object.keys(r).forEach(c=>{n[i][c]=c6(r[c],o[c])}))}else n[i]===void 0&&(n[i]=t[i])}),n}function Pj(t){const{theme:e,name:n,props:i}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?i:c6(e.components[n].defaultProps,i)}function Nj(t){return Object.keys(t).length===0}function Bj(t=null){const e=D.useContext(og);return!e||Nj(e)?t:e}function Ij(t,e,n,i,r){const[o,c]=D.useState(()=>r&&n?n(t).matches:i?i(t).matches:e);return jj(()=>{let u=!0;if(!n)return;const d=n(t),h=()=>{u&&c(d.matches)};return h(),d.addListener(h),()=>{u=!1,d.removeListener(h)}},[t,n]),o}const u6=D.useSyncExternalStore;function Hj(t,e,n,i,r){const o=D.useCallback(()=>e,[e]),c=D.useMemo(()=>{if(r&&n)return()=>n(t).matches;if(i!==null){const{matches:p}=i(t);return()=>p}return o},[o,t,i,r,n]),[u,d]=D.useMemo(()=>{if(n===null)return[o,()=>()=>{}];const p=n(t);return[()=>p.matches,g=>(p.addListener(g),()=>{p.removeListener(g)})]},[o,n,t]);return u6(d,u,c)}function f6(t,e={}){const n=Bj(),i=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:o=i?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:u=!1}=Pj({name:"MuiUseMediaQuery",props:e,theme:n});let d=t;return d=d.replace(/^@media( ?)/m,""),(u6!==void 0?Hj:Ij)(d,r,o,c,u)}const Vj=D.lazy(()=>r2(()=>import("./react-spline-CLMTNUqx.js"),[])),Uw=()=>w.jsx(UL,{src:zj,alt:"3D Scene"}),Uj=()=>{const{t}=Qt(),e=f6("(max-width: 768px)");return w.jsxs(w.Fragment,{children:[w.jsxs(t2,{children:[w.jsx(e2,{children:e?w.jsx(Uw,{}):w.jsx(D.Suspense,{fallback:w.jsx(Uw,{}),children:w.jsx(Vj,{scene:"https://prod.spline.design/xDMwKEPv7aTOBHEg/scene.splinecode",style:{transition:"transform 0.5s ease-out",filter:"blur(0.5px)"}})})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},style:{position:"relative",zIndex:1,width:"100%"},children:w.jsxs(ES,{children:[t("hero.innovative")," ",w.jsx(qL,{children:" 🦄"})]})}),w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.3},viewport:{once:!1,amount:.3},children:[" ",w.jsx(CS,{children:t("hero.title")})]}),w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.9,delay:.5},viewport:{once:!1,amount:.3},children:[" ",w.jsx(FL,{children:t("hero.description")})]}),w.jsx(GL,{children:w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:1.5,delay:.9},viewport:{once:!1,amount:.3},children:[" ",w.jsxs(md,{children:[w.jsx("a",{href:"https://sabsus.app/registrcompany/web",target:"_blank",rel:"noopener noreferrer",children:w.jsx(gd,{children:t("hero.buttons.tryFree")})}),w.jsx("a",{href:"https://sabsus.app/login/demo@sabsus.com/demo2025",target:"_blank",rel:"noopener noreferrer",children:w.jsx(yd,{children:t("hero.buttons.viewDemo")})})]})]})})]}),w.jsx(_j,{})]})},qj=j(Y.div)`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(1px);
  padding: 60px 0px;
  overflow: visible;
  z-index: 6;
  will-change: transform, opacity;

  .swiper-wrapper {
    display: flex;
    transition-timing-function: linear !important;
    padding: 0px 0px;
    margin: 0px auto;
  }

  @media screen and (min-width: 744px) {
    width: 100vw;
  }

  @media screen and (min-width: 1440px) {
    gap: 0px;
  }
`;j(Y.a)`
  border: 0.61px solid #212121;
  border-radius: 29px;
  width: 132px;
  height: 62px;
  backdrop-filter: blur(9.684210777282715px);
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 15px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  will-change: transform, box-shadow;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
    border: 1px solid #212121;
    border-radius: 48px;
    padding: 20px 48px;
    width: 219px;
    height: 104px;
  }
`;const qw=j(Y.img)`
  margin: 5px 0;
  border: 0.61px solid #212121;
  border-radius: 29px;
  padding: 10px 29px;
  width: 132px;
  height: 62px;
  object-fit: contain; /* ⬅️ головне! */
  object-position: center;
  
  backdrop-filter: blur(9.68px);
  box-shadow: 
    0 5px 10px -5px rgba(0, 0, 0, 0.03),
    0 1px 2px -1px rgba(0, 0, 0, 0.08),
    inset 0 -5px 15px rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  z-index: 12;
  position: relative;
  will-change: transform, box-shadow;

  &:hover {
    box-shadow: 
      0 0 5px 4px #494BEC, 
      0 0 5px 0px #4F51ED, 
      inset 0 0 16px 8px #6567EF;
    background: rgba(255, 255, 255, 0.06);
    border-color: white;
  }

  &:active {
    transform: translateY(-2px);
  }

  @media screen and (min-width: 768px) {
    border: 1px solid #212121;
    border-radius: 48px;
    width: 219px;
    height: 104px;
  }
`;j(Y.div)`
  height: auto;
  width: 100%;
  padding: 0 auto;
  margin: 0 auto;
  will-change: transform;

  @media screen and (min-width: 1440px) {
    margin-right: 50px;
  }
`;const Fj=j(Y.div)`
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  will-change: transform;

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
`,Gj=j(Y.img)`
  border-radius: 100%;
  stroke-width: 1px;
  stroke: #212121;
  margin-left: 0px;
  margin-right: -15px;
  will-change: transform;
  transition: transform 0.3s ease;

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
`,Yj=j(Y.p)`
  display: flex;
  border: 1px solid #212121;
  border-radius: 48px;
 padding: 4px 14px;
 width: max-content;
  height: 36px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.03), 
              0 2px 4px -2px rgba(0, 0, 0, 0.08), 
              inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  align-items: center;
  justify-content: center;
  will-change: transform;
  transition: transform 0.3s ease;

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
`,Fw="/assets/banner-ADZkUS3T.svg",Xj="/assets/banner1-CbqUilFV.svg",Qj="/assets/userpartner9-D4v8GOUQ.svg",Zj="/assets/userpartner10-o2EWdo25.svg",Kj="/assets/userpartner11-gko08-hm.svg",Wj="/assets/userpartner12-D0qFTxT6.svg",$j="/assets/userpartner13-DU-A16vU.svg",Jj=[JS,e6,t6,n6,i6,s6,r6,a6,o6,l6,Qj,Zj,Kj,Wj,$j],A0=[{id:1,imageUrl:Nm,link:"#"},{id:2,imageUrl:Im,link:"#"},{id:3,imageUrl:ZS,link:"#"},{id:4,imageUrl:KS,link:"#"},{id:5,imageUrl:Nm,link:"#"},{id:6,imageUrl:Bm,link:"#"},{id:7,imageUrl:Im,link:"#"},{id:8,imageUrl:WS,link:"#"},{id:9,imageUrl:$S,link:"#"},{id:10,imageUrl:Fw,link:"#"},{id:11,imageUrl:Bm,link:"#"},{id:12,imageUrl:Xj,link:"#"},{id:13,imageUrl:Fw,link:"#"}],eP=()=>{const{t}=Qt(),e=yi({query:"(max-width: 743px)"}),n=yi({query:"(min-width: 744px) and (max-width: 1223px)"}),i=yi({query:"(min-width: 1224px)"}),r=e?2:n?3:6,o=A0.length>r,c=e?3:n?6:15,u=Jj.slice(0,c),d={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return w.jsxs(qj,{as:Y.div,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.2},variants:d,children:[w.jsx(Y.div,{variants:h,children:w.jsx(ir,{loop:o,slidesPerView:r,spaceBetween:10,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!1},speed:4e3,modules:[Ir],className:"mySwiper",children:A0.map(p=>w.jsx(Vr,{children:w.jsx("a",{href:p.link,target:"_blank",rel:"noopener noreferrer",children:w.jsx(qw,{as:Y.img,src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy",whileHover:{scale:1.05,boxShadow:"0 0 5px 4px #494BEC, 0 0 5px 0px #4F51ED, inset 0 0 16px 8px #6567EF"},transition:{type:"spring",stiffness:400,damping:10}})})},`right-${p.id}`))})}),w.jsx(Y.div,{variants:h,children:w.jsx(ir,{loop:o,slidesPerView:r,spaceBetween:10,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[Ir],className:"mySwiper reverse-swiper",children:[...A0].reverse().map(p=>w.jsx(Vr,{children:w.jsx("a",{href:p.link,target:"_blank",rel:"noopener noreferrer",children:w.jsx(qw,{as:Y.img,src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy",whileHover:{scale:1.05,boxShadow:"0 0 5px 4px #494BEC, 0 0 5px 0px #4F51ED, inset 0 0 16px 8px #6567EF"},transition:{type:"spring",stiffness:400,damping:10}})})},`left-${p.id}`))})}),w.jsxs(Fj,{as:Y.div,variants:d,children:[u.map((p,g)=>w.jsx(Gj,{as:Y.img,src:p,alt:`Partner ${g}`,loading:"lazy",variants:h,whileHover:{rotate:10,scale:1.1},transition:{type:"spring",stiffness:300,damping:10}},`partner-${g}`)),w.jsx(Yj,{as:Y.p,variants:h,whileHover:{scale:1.02},children:t("partnersBanner.trustedText")})]})]})},tP=j(Y.div)`
  margin: 0 auto;
  width: 100%;
  width: 343px;
  padding: 0 16px;
 @media screen and (min-width: 768px) {
  width: 710px;
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 1440px;
  }
`,nP=j(Y.p)`
  margin: 0 auto;
  border-radius: 24px;
    padding: 4px 1px 4px 14px;
    width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
              0 8px 16px -8px rgba(0, 0, 0, 0.03), 
              0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
  align-items: center;
  will-change: transform, opacity;
`,d6=j(Y.img)`
  border-radius: 25px;
  margin: 0 auto;
  margin-left: 5px;
  padding: 4px;
  width: 20px;
  font-size: 13px;
  overflow: visible;

  box-shadow: 
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.06); /* дуже легка зовнішня тінь */

  background: linear-gradient(
    315deg,
    rgba(122, 121, 122, 0.58) 7%,
    rgba(172, 172, 172, 0.22) 86%
  );

  -webkit-transform: translateZ(0);
  will-change: transform;
`,iP=j(Y.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  margin: 0 auto;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;
`,sP=j(Y.p)`
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;
`,rP=j(Y.div)`
  color: white;
  margin: 0 auto;
`,aP=j(Y.div)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 64px;
  backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 24px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  color: var(--white-100);
  position: relative;
  overflow: hidden;
  border: 1px solid #212121;
  padding: 8px;
  will-change: transform, opacity;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    width: calc(50% - 16px);
    background: white;
    border-radius: 16px;
    z-index: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: translateX(${({$isMonthly:t})=>t?"0":"calc(100% + 8px)"});
  }

  button {
    flex: 1;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(16px, 3vw, 20px);
    color: var(--white);
    cursor: pointer;
    white-space: normal;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border: none;
    background: transparent;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    word-break: break-word;
    hyphens: auto;
    min-width: 0;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    &.active {
      color: black;
      font-weight: 500;
    }
  }
`,oP=j(Y.div)`
  display: flex;
  margin: 0 auto;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    width: 656px;
  }
  
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`,lP=j(Y.div).withConfig({shouldForwardProp:t=>t!=="highlight"})`
  padding: 20px;
  margin: 0 auto;
  border-radius: 23px; /* Відповідає rx="23" з SVG */
  width: 100%;
  width: 343px;
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
  will-change: transform, box-shadow;

  /* Стилі для звичайних карток */
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  box-shadow: none;

  /* Стилі для підсвіченої картки (останньої) */
  ${({highlight:t})=>t&&jl`
      background: rgba(10, 10, 30, 0.5);
      border: 2px solid transparent;
      background-clip: padding-box;
      
      /* Градієнтна обводка (як у SVG) */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 23px;
        padding: 2px;
        background: linear-gradient(
          135deg,
          white 0%,
          #6567EF 30%,
          #4F51ED 50%,
          #E4E5FC 100%
        );
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: -1;
      }

      /* Тіні з розмиттям (як у filter0_f та filter1_f) */
      box-shadow:
        0 0 15px 5px rgba(101, 103, 239, 0.2),
        0 0 30px 10px rgba(101, 103, 239, 0.15),
        inset 0 0 20px 5px rgba(101, 103, 239, 0.3);
    `}

  &:hover {
    transform: translateY(-4px);
    
    ${({highlight:t})=>t?jl`
            box-shadow:
              0 0 25px 10px rgba(101, 103, 239, 0.3),
              0 0 40px 15px rgba(101, 103, 239, 0.25),
              inset 0 0 25px 8px rgba(101, 103, 239, 0.4);
            background: rgba(10, 10, 30, 0.6);
          `:jl`
            box-shadow: 
              0 4px 20px rgba(0, 0, 0, 0.15),
              0 2px 8px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.06);
          `}
  }

  &:active {
    transform: translateY(-2px);
  }

  @media screen and (min-width: 768px) {
    width: 656px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 440px;
  }
`,cP=j(Y.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  will-change: transform;
`,uP=j(Y.h3)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #494bec;
  will-change: transform;
`,fP=j(Y.span)`
 font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: rgba(146, 147, 240, 0.8);
    text-shadow: 0 0 8px rgba(101, 103, 239, 0.8);
    padding: 1px 5px;
    border-radius: 12.5px;
    border: 1px solid transparent;
    background: linear-gradient(rgba(10, 10, 30, 0.5), rgba(10, 10, 30, 0.5)) padding-box, linear-gradient(135deg, white 0%, #6567EF 30%, #4F51ED 50%, #E4E5FC 100%) border-box;
    box-shadow: 0 0 15px 5px rgba(101, 103, 239, 0.2), 0 0 30px 10px rgba(101, 103, 239, 0.15), inset 0 0 10px 2px rgba(101, 103, 239, 0.3);
    backdrop-filter: blur(4px);
    will-change: transform;
    position: absolute;
     left: 12%;
    bottom: 100%;
`,dP=j(Y.div).withConfig({shouldForwardProp:t=>t!=="$isSelected"})`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: var(--white-100);
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid var(--white-25);
  padding-bottom: 16px;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.3s ease;
  will-change: transform, background;

  ${({$isSelected:t})=>t&&`
      background: rgba(73, 75, 236, 0.1);
      border-radius: 8px;
      padding: 12px;
      border-bottom: 1px solid #494BEC;
    `}

  &:hover {
    background: rgba(73, 75, 236, 0.05);
  }
`,hP=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: var(--white-100);
  width: 50%;
  will-change: transform;
`,pP=j(Y.h4)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 130%;
  color: var(--white-100);
  display: flex;
  align-items: baseline;
  will-change: transform;
`,mP=j(Y.div)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--white-100);
  will-change: transform;
  position: relative;

`,gP=j(Y.button).withConfig({shouldForwardProp:t=>t!=="highlight"})`
  border-radius: 12px;
  padding: 12px 20px;
  width: 303px;
  height: 43px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: ${({highlight:t})=>t?"#E4E5FC":"var(--white-100)"};
  backdrop-filter: blur(16px);
  background: ${({highlight:t})=>t?"linear-gradient(180deg, rgb(72, 27, 179) 0%, rgba(255, 255, 255, 0.03) 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%)"};
  box-shadow: ${({highlight:t})=>t?"0 0 20px rgba(101, 103, 239, 0.5), inset 0 0 10px rgba(73, 75, 236, 0.4)":`inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
         inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
         0 8px 16px -8px rgba(0, 0, 0, 0.03),
         0 2px 4px -2px rgba(0, 0, 0, 0.08)`};
  ${({highlight:t})=>t&&`
    position: relative;
    z-index: 1;
    border: none;
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: 12px;
      padding: 1px;
      background: linear-gradient(90deg, #494BEC, #4F51ED, #6567EF, #E4E5FC);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
    }
  `}
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  will-change: transform, box-shadow, background;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({highlight:t})=>t?"0 0 30px rgba(101, 103, 239, 0.7), inset 0 0 15px rgba(73, 75, 236, 0.6)":"0 4px 12px rgba(0, 0, 0, 0.1), inset 0 -4px 8px rgba(255, 255, 255, 0.05)"};
    background: ${({highlight:t})=>t?"linear-gradient(180deg, rgb(82, 37, 189) 0%, rgba(255, 255, 255, 0.05) 100%)":"linear-gradient(180deg, rgba(255, 255, 255, 0.16) 7%, rgba(255, 255, 255, 0.02) 86%)"};
  }

  &:active {
    transform: translateY(0);
    transition-duration: 0.1s;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,yP=j(Y.p)`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 12px;
  will-change: transform;
`,vP=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-60);
  margin-bottom: 12px;
  display: flex;
  gap: 6px;
  align-items: baseline;
  will-change: transform;
`,xP=j(Y.img)`
  width: 13px;
  height: 13px;
  will-change: transform;
`,bP="/assets/Money%20Bag-DSKweVBs.svg",wP="data:image/svg+xml,%3csvg%20width='16'%20height='11'%20viewBox='0%200%2016%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.6667%201L5.50004%2010.1667L1.33337%206'%20fill='white'%20fill-opacity='0.6'/%3e%3cpath%20d='M14.6667%201L5.50004%2010.1667L1.33337%206'%20stroke='white'%20stroke-opacity='0.6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",SP=()=>{const{t}=Qt(),[e,n]=D.useState(!1),[i,r]=D.useState(null),o=t("pricePlan",{returnObjects:!0}),c=e?o.plans.monthly:o.plans.annually,u=(h,p)=>h===2?"https://sabsus.app/login/demo@sabsus.com/demo2025":"https://sabsus.app/registrcompany/web/"+(h===1?["whitestart","whitestandart","whitebusiness"]:["saasstart","saasstandart","saasbusiness"])[p],d=(h,p)=>{r({planIndex:h,tierIndex:p})};return w.jsxs(tP,{as:Y.div,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.2},children:[w.jsx(Y.div,{children:w.jsxs(nP,{children:[o.mainText," ",w.jsx(d6,{src:bP,alt:"💰"})]})}),w.jsx(Y.div,{children:w.jsx(iP,{children:o.title})}),w.jsx(Y.div,{children:w.jsx(sP,{children:o.description})}),w.jsxs(rP,{children:[w.jsxs(aP,{$isMonthly:e,children:[w.jsx("button",{onClick:()=>n(!0),className:e?"active":"",children:o.switch.monthly}),w.jsx("button",{onClick:()=>n(!1),className:e?"":"active",children:o.switch.annually})]}),w.jsx(oP,{children:c.map((h,p)=>w.jsxs(Y.div,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:400,damping:10},children:[w.jsxs(lP,{highlight:h.highlight,children:[w.jsx(cP,{children:w.jsx(uP,{children:h.title})}),h.tiers.map((g,y)=>w.jsxs(dP,{as:Y.div,onClick:()=>d(p,y),$isSelected:(i==null?void 0:i.planIndex)===p&&(i==null?void 0:i.tierIndex)===y,whileTap:{scale:.98},children:[w.jsx(hP,{children:g.name}),w.jsxs(pP,{children:[g.price," ",w.jsxs(mP,{children:[h.highlight?w.jsx("span",{style:{color:"transparent"},children:"/Month"}):"/Month",w.jsx(fP,{children:g.discount})]})]})]},y)),w.jsx("a",{href:u(p,(i==null?void 0:i.tierIndex)??0),target:"_blank",rel:"noopener noreferrer",children:w.jsx(gP,{as:Y.button,highlight:h.highlight||(i==null?void 0:i.planIndex)===p,whileHover:{y:-2},whileTap:{scale:.98},children:h.button})})]}),w.jsx(yP,{children:h.note}),h.noteList.map((g,y)=>w.jsxs(vP,{children:[w.jsx(xP,{src:wP,alt:"✔️"})," ",g]},y))]},p))})]})]})},TP=j.div`
  width: 343px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 88px;
  overflow: hidden; /* Запобігає артефактам анімації */
  
  @media screen and (min-width: 768px) {
    max-width: 768px;
    width: 100%;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    width: 100%;
  }
`,h6=j(Y.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
              0 8px 16px -8px rgba(0, 0, 0, 0.03), 
              0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
  align-items: center;
  will-change: transform, opacity; /* Оптимізація анімації */
  
  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
  
  @media screen and (min-width: 1440px) {
    /* Додаткові стилі для десктопів */
  }
`,p6=j(Y.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;
  
  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`,m6=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`,EP=j(Y.div)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 6px;
  position: relative;
  align-items: flex-start;
  justify-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  perspective: 1000px; /* Для 3D ефектів */
  
  @media screen and (min-width: 768px) {
    column-gap: 4px;
    max-width: 740px;
    justify-content: space-evenly;
    margin-top: 100px;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`,CP=j(Y.div)`
  border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
  width: 186px;
  height: 186px;
  min-height: 186px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  transform-origin: center left;
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    min-height: 176px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
    justify-content: space-around;
  }
`,AP=j(Y.div)`
  border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
  width: 186px;
  height: 186px;
  min-height: 186px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  transform-origin: center top;
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    min-height: 176px;
    margin-top: -20px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
    justify-content: space-around;
  }
`,MP=j(Y.div)`
  display: none;
  transform-origin: center right;
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  @media screen and (min-width: 768px) {
    border: 0.58px solid #212121;
    border-radius: 14px;
    padding: 11px;
    width: 176px;
    height: 176px;
    min-height: 176px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    backdrop-filter: blur(9.247057914733887px);
    box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
                0 1px 2px -1px rgba(0, 0, 0, 0.08), 
                inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
                inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
    background: rgba(255, 255, 255, 0.03);
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
    justify-content: space-around;
  }
`,M0=j(Y.img)`
  width: 115px;
  height: 60px;
  will-change: transform, opacity;
  
  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 104px;
  }
`,O0=j(Y.div)`
  width: 163px;
  height: 66px;
  will-change: transform, opacity;
`,k0=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 46px;
  line-height: 100%;
  color: var(--white-100);
  will-change: transform, opacity;
  
  @media screen and (min-width: 1440px) {
    font-size: 80px;
    width: max-content;
  }
`,R0=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  color: var(--white-60);
  will-change: transform, opacity;
     width: fit-content;
    height: max-content;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
            height: max-content;
        width: max-content;
  }
`,OP=j(Y.img)`
  border-radius: 14px;
  width: 151px;
  height: 186px;
  object-fit: cover;
  transform-origin: center;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    margin-top: -20px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`,kP=j(Y.img)`
  border-radius: 14px;
  width: 150px;
  height: 231px;
  transform-origin: bottom center;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`,RP=j(Y.img)`
  border-radius: 14px;
  width: 187px;
  height: 186px;
  margin-top: -45px;
  transform-origin: left top;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    margin-top: 0;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`,LP=j(Y.img)`
  border-radius: 14px;
  width: 150px;
  height: 142px;
  transform-origin: right bottom;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    margin-top: -40px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`,DP=j(Y.img)`
  position: absolute;
  z-index: 3;
  top: 10%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 203px;
  height: 429px;
  pointer-events: none;
  will-change: transform, opacity;
  
  @media screen and (min-width: 768px) {
    width: 152px;
    height: 322px;
            left: 40%;
        top: 0%;
  }
  
  @media screen and (min-width: 1440px) {
    width: 264px;
    height: 558px;
  }
`,_P=j(Y.img)`
  display: none;
  transform-origin: center;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    display: flex;
    border-radius: 14px;
    width: 176px;
    height: 176px;
    min-height: 176px;
    margin-top: -40px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`,zP="/assets/pizzario-CE4eYw8m.png",jP="/assets/image1(2)-CR2khMdP.png",PP="/assets/image2(10)-ODxwWa1j.png",NP="/assets/image3()-DpQnakDt.png",BP="/assets/image4-Buu_F2YF.png",IP="/assets/iPhone16ProMax-DxNyD3y5.png",HP="/assets/burbanBites-BbcglOAd.png",VP="/assets/image5-C0iakDsT.png",UP="/assets/sweetTreats-C9dqNr85.png",qP=()=>{const{t}=Qt(),e=t("results",{returnObjects:!0}),n={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},i={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},r=o=>{switch(o){case 0:return{initial:{x:-100,opacity:0},animate:{x:0,opacity:1}};case 1:return{initial:{x:100,opacity:0},animate:{x:0,opacity:1}};case 2:return{initial:{x:-100,opacity:0},animate:{x:0,opacity:1}};default:return{initial:{opacity:0},animate:{opacity:1}}}};return w.jsxs(TP,{children:[w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:w.jsxs(h6,{children:[e.mainText," ",w.jsx(Jl,{src:_S,alt:"💹"})]})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:w.jsx(p6,{children:e.mainTitle})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!1,amount:.3},children:w.jsx(m6,{children:e.description})}),w.jsxs(EP,{as:Y.div,variants:n,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.3},children:[w.jsx(DP,{as:Y.img,src:IP,alt:"Main Image",initial:{scale:.9,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.6},viewport:{once:!1,amount:.3}}),w.jsxs(CP,{as:Y.div,...r(0),transition:{duration:.5,delay:.3},viewport:{once:!1,amount:.3},children:[w.jsx(Y.div,{variants:i,children:w.jsx(M0,{src:zP,alt:"Icon"})}),w.jsx(Y.div,{variants:i,children:w.jsxs(O0,{children:[w.jsx(k0,{children:e.cards[0].title}),w.jsx(R0,{children:e.cards[0].text})]})})]}),w.jsx(OP,{as:Y.img,src:jP,alt:"Image 1",initial:{x:-50,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5,delay:.4},viewport:{once:!1,amount:.3}}),w.jsx(_P,{as:Y.img,src:VP,alt:"Image 5",initial:{x:50,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5,delay:.5},viewport:{once:!1,amount:.3}}),w.jsxs(MP,{as:Y.div,...r(1),transition:{duration:.5,delay:.6},viewport:{once:!1,amount:.3},children:[w.jsx(Y.div,{variants:i,children:w.jsx(M0,{src:UP,alt:"Icon"})}),w.jsx(Y.div,{variants:i,children:w.jsxs(O0,{children:[w.jsx(k0,{children:e.cards[2].title}),w.jsx(R0,{children:e.cards[2].text})]})})]}),w.jsx(kP,{as:Y.img,src:PP,alt:"Image 2",initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.5,delay:.7},viewport:{once:!0,amount:.3}}),w.jsxs(AP,{as:Y.div,...r(2),transition:{duration:.5,delay:.8},viewport:{once:!1,amount:.3},children:[w.jsx(Y.div,{variants:i,children:w.jsx(M0,{src:HP,alt:"Icon"})}),w.jsx(Y.div,{variants:i,children:w.jsxs(O0,{children:[w.jsx(k0,{children:e.cards[1].title}),w.jsx(R0,{children:e.cards[1].text})]})})]}),w.jsx(LP,{as:Y.img,src:BP,alt:"Image 4",initial:{scale:.8,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.5,delay:.9},viewport:{once:!1,amount:.3}}),w.jsx(RP,{as:Y.img,src:NP,alt:"Image 3",initial:{rotate:10,opacity:0},whileInView:{rotate:0,opacity:1},transition:{duration:.5,delay:1},viewport:{once:!1,amount:.3}})]})]})},FP=j.div`
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vh;
    height: 200vw;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      var(--purple-500) 0%,
      rgba(76, 78, 236, 0.1) 100%,
      transparent 100%
    );
    filter: blur(180px);
    z-index: -5000;
    opacity: 0.6;
    will-change: opacity;
  }

  @media screen and (min-width: 768px) {
    &::after {
      height: 100vh;
    }
  }
`,GP=j(Y.div)`
  position: relative;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 100px;
  margin-bottom: 154px;
  z-index: 1;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
`,YP=j(Y.h2)`
  width: 343px;
  height: auto;
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 40.91%, #6a82fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`,XP=j(Y.p)`
  width: 343px;
  height: 80px;
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-75);
  margin-bottom: 24px;
  will-change: transform, opacity;
`,QP=()=>{const{t}=Qt(),e="https://sabsus.app/login/demo@sabsus.com/demo2025",n="https://sabsus.app/registrcompany/web",i={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},r={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return w.jsxs(GP,{as:Y.div,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.2},variants:i,children:[w.jsx(YP,{as:Y.h2,variants:r,children:t("startSmall.title")}),w.jsx(XP,{as:Y.p,variants:r,children:t("startSmall.text")}),w.jsxs(md,{as:Y.div,variants:r,children:[w.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:w.jsx(gd,{as:Y.button,whileHover:{y:-2},whileTap:{scale:.98},children:t("startSmall.buttons.getStarted")})}),w.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:w.jsx(yd,{as:Y.button,whileHover:{y:-2},whileTap:{scale:.98},children:t("startSmall.buttons.viewDemo")})})]}),w.jsx(FP,{})]})},ZP=j.div`
 width: 100%;
margin: 0 auto;
margin-top: 50px;
`,KP=j.p`
display: flex;
align-items: center;
    justify-content: space-between;
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
height: 28px;
margin: 0 auto;
border-radius: 24px;
    padding: 4px 1px 4px 14px;
    width: max-content;
height: 28px;

backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
margin-bottom: 8px;
`,WP=j.img`
  border-radius: 25px;
  padding: 0px;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  font-size: 13px;

  box-shadow: 
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);

  background: linear-gradient(
    315deg,
    rgba(176, 253, 161, 0.68) 7%,
    rgb(142, 250, 121) 86%
  );

  -webkit-transform: translateZ(0);
`,$P=j.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
color: var(--white-100);
margin-bottom: 16px;
`,JP=j.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
margin-bottom: 56px;
`,eN="/assets/stars-01puzzle-B--0OZkg.svg",tN="data:image/svg+xml,%3csvg%20width='37'%20height='9'%20viewBox='0%200%2037%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_i_537_67380)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.43175%208.6052C6.73669%208.6052%208.6052%206.73669%208.6052%204.43175C8.6052%202.12682%206.73669%200.258301%204.43175%200.258301C2.12682%200.258301%200.258301%202.12682%200.258301%204.43175C0.258301%206.73669%202.12682%208.6052%204.43175%208.6052Z'%20fill='%23EE6A5F'/%3e%3c/g%3e%3cpath%20d='M4.43213%200.432129C6.64085%200.432332%208.43115%202.22336%208.43115%204.43213C8.43095%206.64072%206.64072%208.43095%204.43213%208.43115C2.22336%208.43115%200.432332%206.64085%200.432129%204.43213C0.432129%202.22323%202.22323%200.432129%204.43213%200.432129Z'%20stroke='%23CE5347'%20stroke-width='0.347788'/%3e%3cg%20filter='url(%23filter1_i_537_67380)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.3434%208.6052C20.6483%208.6052%2022.5168%206.73669%2022.5168%204.43175C22.5168%202.12682%2020.6483%200.258301%2018.3434%200.258301C16.0384%200.258301%2014.1699%202.12682%2014.1699%204.43175C14.1699%206.73669%2016.0384%208.6052%2018.3434%208.6052Z'%20fill='%23F5BD4F'/%3e%3c/g%3e%3cpath%20d='M18.3438%200.432129C20.5525%200.432332%2022.3428%202.22336%2022.3428%204.43213C22.3426%206.64072%2020.5523%208.43095%2018.3438%208.43115C16.135%208.43115%2014.344%206.64085%2014.3438%204.43213C14.3438%202.22323%2016.1349%200.432129%2018.3438%200.432129Z'%20stroke='%23D6A243'%20stroke-width='0.347788'/%3e%3cg%20filter='url(%23filter2_i_537_67380)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32.2548%208.6052C34.5597%208.6052%2036.4282%206.73669%2036.4282%204.43175C36.4282%202.12682%2034.5597%200.258301%2032.2548%200.258301C29.9498%200.258301%2028.0813%202.12682%2028.0813%204.43175C28.0813%206.73669%2029.9498%208.6052%2032.2548%208.6052Z'%20fill='%2361C454'/%3e%3c/g%3e%3cpath%20d='M32.2551%200.432129C34.4638%200.432332%2036.2542%202.22336%2036.2542%204.43213C36.2539%206.64072%2034.4637%208.43095%2032.2551%208.43115C30.0464%208.43115%2028.2553%206.64085%2028.2551%204.43213C28.2551%202.22323%2030.0462%200.432129%2032.2551%200.432129Z'%20stroke='%2358A942'%20stroke-width='0.347788'/%3e%3cdefs%3e%3cfilter%20id='filter0_i_537_67380'%20x='0.258301'%20y='0.258301'%20width='8.34692'%20height='8.34692'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='2.08673'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.92549%200%200%200%200%200.427451%200%200%200%200%200.384314%200%200%200%201%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_537_67380'/%3e%3c/filter%3e%3cfilter%20id='filter1_i_537_67380'%20x='14.1699'%20y='0.258301'%20width='8.34692'%20height='8.34692'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='2.08673'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.960784%200%200%200%200%200.768627%200%200%200%200%200.317647%200%200%200%201%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_537_67380'/%3e%3c/filter%3e%3cfilter%20id='filter2_i_537_67380'%20x='28.0813'%20y='0.258301'%20width='8.34692'%20height='8.34692'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='2.08673'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.407843%200%200%200%200%200.8%200%200%200%200%200.345098%200%200%200%201%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow_537_67380'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",nN="/assets/Frame%203479-DJkAWrN0.png",iN="/assets/Frame%203479-1-B4ukTjCX.png",sN="/assets/Frame%203479-2-CS203dq3.png",rN="/assets/Frame%203479-3-eAfR4eMP.png",aN="data:image/svg+xml,%3csvg%20width='81'%20height='21'%20viewBox='0%200%2081%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_537_67384)'%3e%3cpath%20d='M12.2274%2016.3261C15.4492%2016.3261%2018.1167%2013.6528%2018.1167%2010.4368C18.1167%207.21499%2015.4434%204.54749%2012.2217%204.54749C9.00564%204.54749%206.33813%207.21499%206.33813%2010.4368C6.33813%2013.6528%209.01141%2016.3261%2012.2274%2016.3261ZM12.2274%2015.3445C9.50219%2015.3445%207.32546%2013.162%207.32546%2010.4368C7.32546%207.71154%209.49641%205.52903%2012.2217%205.52903C14.9469%205.52903%2017.1294%207.71154%2017.1352%2010.4368C17.1409%2013.162%2014.9527%2015.3445%2012.2274%2015.3445ZM12.2274%207.49791C11.9792%207.49791%2011.7944%207.67689%2011.7944%207.93094V10.8179L11.8406%2012.0361L11.2632%2011.3433L10.5761%2010.6504C10.4953%2010.5754%2010.3914%2010.5234%2010.2701%2010.5234C10.0334%2010.5234%209.85439%2010.7081%209.85439%2010.9391C9.85439%2011.0604%209.88903%2011.1643%209.96409%2011.2393L11.8925%2013.162C12.008%2013.2775%2012.1062%2013.3237%2012.2274%2013.3237C12.3545%2013.3237%2012.4584%2013.2717%2012.5681%2013.162L14.4908%2011.2393C14.5658%2011.1643%2014.612%2011.0604%2014.612%2010.9391C14.612%2010.7081%2014.4273%2010.5234%2014.1905%2010.5234C14.0635%2010.5234%2013.9596%2010.5696%2013.8845%2010.6504L13.2032%2011.3433L12.6143%2012.0419L12.6605%2010.8179V7.93094C12.6605%207.67689%2012.4815%207.49791%2012.2274%207.49791Z'%20fill='%23999C9F'/%3e%3cpath%20d='M40.746%2012.0072C40.9943%2012.0072%2041.2022%2011.7993%2041.2022%2011.5568V5.62712L41.1675%204.76105L41.5602%205.17099L42.432%206.10635C42.5128%206.19873%2042.6341%206.24492%2042.7438%206.24492C42.9863%206.24492%2043.1653%206.0717%2043.1653%205.83498C43.1653%205.71373%2043.1191%205.62135%2043.0325%205.53474L41.0809%203.65248C40.9655%203.537%2040.8615%203.49658%2040.746%203.49658C40.6306%203.49658%2040.5266%203.537%2040.4112%203.65248L38.4596%205.53474C38.373%205.62135%2038.321%205.71373%2038.321%205.83498C38.321%206.0717%2038.5%206.24492%2038.7368%206.24492C38.8522%206.24492%2038.9735%206.19873%2039.0543%206.10635L39.9319%205.17099L40.3246%204.76105L40.2841%205.62712V11.5568C40.2841%2011.7993%2040.4978%2012.0072%2040.746%2012.0072ZM37.4319%2016.5281H44.0544C45.2612%2016.5281%2045.8674%2015.9276%2045.8674%2014.7382V8.97593C45.8674%207.78653%2045.2612%207.18605%2044.0544%207.18605H42.4435V8.11564H44.0371C44.6087%208.11564%2044.9378%208.42742%2044.9378%209.0279V14.6862C44.9378%2015.2867%2044.6087%2015.5985%2044.0371%2015.5985H37.4434C36.866%2015.5985%2036.5485%2015.2867%2036.5485%2014.6862V9.0279C36.5485%208.42742%2036.866%208.11564%2037.4434%208.11564H39.0428V7.18605H37.4319C36.2251%207.18605%2035.6189%207.78653%2035.6189%208.97593V14.7382C35.6189%2015.9276%2036.2251%2016.5281%2037.4319%2016.5281Z'%20fill='%23999C9F'/%3e%3cpath%20d='M64.9689%2013.8201H65.9562V14.7035C65.9562%2015.8929%2066.5567%2016.4934%2067.7692%2016.4934H73.5661C74.767%2016.4934%2075.3733%2015.8929%2075.3733%2014.7035V8.86038C75.3733%207.67097%2074.767%207.07049%2073.5661%207.07049H72.573V6.1871C72.573%204.99769%2071.9667%204.39722%2070.7658%204.39722H64.9689C63.7564%204.39722%2063.1559%204.99769%2063.1559%206.1871V12.0302C63.1559%2013.2196%2063.7564%2013.8201%2064.9689%2013.8201ZM64.9804%2012.8905C64.403%2012.8905%2064.0855%2012.5787%2064.0855%2011.9782V6.23906C64.0855%205.63859%2064.403%205.3268%2064.9804%205.3268H70.7485C71.3201%205.3268%2071.6434%205.63859%2071.6434%206.23906V7.07049H67.7692C66.5567%207.07049%2065.9562%207.6652%2065.9562%208.86038V12.8905H64.9804ZM67.7807%2015.5638C67.2091%2015.5638%2066.8858%2015.252%2066.8858%2014.6515V8.91234C66.8858%208.31187%2067.2091%208.00008%2067.7807%208.00008H73.5488C74.1204%208.00008%2074.4437%208.31187%2074.4437%208.91234V14.6515C74.4437%2015.252%2074.1204%2015.5638%2073.5488%2015.5638H67.7807Z'%20fill='%23999C9F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_537_67384'%3e%3crect%20width='79.9911'%20height='19.4761'%20fill='white'%20transform='translate(0.750488%200.693848)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",oN=j.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 40px;

    @media screen and (min-width: 768px) {
    border-top: 1px solid var(--white-60);
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: baseline;
    margin: 0 auto: 
    max-width: 740px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
max-width: 1130px;
margin: 0 auto;
  }
`,lN=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;

    @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {

  }
`,cN=j.div`
  position: relative;
  width: 127px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

    @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {

  }
`,Gw=j.div`
  display: flex;
  max-width: 127px;
  height: 28px;

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,rf=j.div`
  position: absolute;
  width: 127px;
  height: 28px;
  border-radius: 24px;
  display: flex;
  opacity: ${t=>t.opacity||0};

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,uN=j.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
   width: fit-content;
   gap: 6px;

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,fN=j.div`
  position: absolute;
  left: 80%;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;

  border-radius: 25px;
  padding: 4px;
  font-size: 13px;

  box-shadow:
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.08);

  background: linear-gradient(
      315deg,
      rgba(141, 136, 143, 0.58) 7%,
      rgba(79, 74, 82, 0.86)
    ),
    rgba(255, 255, 255, 0.03);

  -webkit-transform: translateZ(0);
`,dN=j.button`
  cursor: pointer;
  display: flex;
  padding: 4px 4px 4px 18px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 24px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 86%
    ),
    rgba(255, 255, 255, 0.03);
  box-shadow:
    0px 2px 4px -2px rgba(0, 0, 0, 0.08),
    0px 8px 16px -8px rgba(0, 0, 0, 0.03),
    0px -5px 6px 0px rgba(255, 255, 255, 0.03) inset,
    0px -8px 24px 0px rgba(255, 255, 255, 0.03) inset;
  width: 165px;
  height: 28px;
  border: none;
  outline: none;
  justify-content: space-between;
  position: relative; // Додаємо для псевдоелемента

  @media screen and (min-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 67px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      box-shadow: inset 0 0 20px 0 rgba(191, 123, 246, 0.7), inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1), 0 0 10px 6px rgba(191, 123, 246, 0.4), 0 15px 30px -10px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.2);
      background: linear-gradient(90deg, #BF7BF6 0%, #6A6BFF 100%);
      transition: width 0.3s ease;
    }

    &.active::after,
    &[aria-selected="true"]::after {
      width: 100%;
    }
  }

  @media screen and (min-width: 1440px) {
    &::after {
    // bottom: 67px;
    }
  }
`,hN=j.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2em;
 padding-right: 10px;
width: max-content;
 @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,pN=j.p`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.3em;
  text-align: center;
  width: 100%;

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,mN=j.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: var(--white-60);
  text-align: center;
  width: 100%;
@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,gN=j.div`
  background: rgba(245, 228, 228, 0.25);
  width: 34px;
  height: 1px;
  transform: rotate(90deg);

  @media screen and (min-width: 768px) {
width: 501px;
    height: 2px;
}

@media screen and (min-width: 1440px) {

}
`,yN=j.div`
margin: 0 auto;
  width: 343px;
  height: 545px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(11.129203796386719px);
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 28px ;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    box-shadow: inset 0 -100px 50px -30px rgba(0, 0, 0, 0.65);
    // backdrop-filter: blur(12px);
    z-index: 1;

    pointer-events: none;
  }

 @media screen and (min-width: 768px) {
max-width: 740px;
width: 100%;
margin: 0 auto;

}

@media screen and (min-width: 1440px) {
max-width: 1130px;
} 
`,vN=j.div`
  padding: 16px 22px;
  width: 100%;
  max-width: 343px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.35px solid rgba(33, 33, 33, 0.7); /* Прозорість для iOS */

  /* Оптимізовані стилі для iOS */
  -webkit-backdrop-filter: blur(11px); /* Префікс для Safari */
  backdrop-filter: blur(11px);
  
  /* Оптимізовані тіні для iOS */
  box-shadow:
    0 6px 11px -6px rgba(0, 0, 0, 0.03),
    0 1px 3px -1px rgba(0, 0, 0, 0.08),
    inset 0 -6px 17px 0 rgba(255, 255, 255, 0.03),
    inset 0 -3px 4px 0 rgba(255, 255, 255, 0.03);
  
  /* Оптимізований фон для iOS */
  background-color: rgba(255, 255, 255, 0.03);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  
  margin-bottom: 6px;

  /* Виправлення для Safari */
  @supports (-webkit-touch-callout: none) {
    background-color: rgba(0, 0, 0, 0.86); /* Фолбек для iOS */
    -webkit-backdrop-filter: saturate(180%) blur(11px);
  }

  @media screen and (min-width: 768px) {
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1130px;
    padding: 16px 32px;
  }
`,xN=j.img`
  width: 37px;
  height: 9px;

  @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,bN=j.div`
  width: 343px;
  height: 492px;
  display: flex;
  position: relative; /* Додаємо для позиціонування дочірніх елементів */
  overflow: hidden; /* Щоб обрізати картинку за межами контейнера */
  border-radius: 0 0 28px 0; /* Закруглення лише знизу */


 @media screen and (min-width: 768px) {
max-width: 740px;
width: 100%;
margin: 0 auto;

}

@media screen and (min-width: 1440px) {
max-width: 1130px;
} 
`,wN=j.div`
  position: absolute;
  top: 0; /* Фіксуємо зверху */
  left: -1%; /* Фіксуємо зліва */
  width: 100vh;
  height: 100%;
  background-image: url(${t=>t.$image});
  background-size: cover;
  background-position: start;
  background-repeat: no-repeat;

 @media screen and (min-width: 768px) {
max-width: 740px;
width: 100%;
margin: 0 auto;

}

@media screen and (min-width: 1440px) {
max-width: 1130px;
} 
`,SN=j.img`
  width: 82px;
  height: 11px;


`,TN=j.img`
  width: 79px;
  height: 19px;
  @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,EN=j.div`
  position: absolute;
  bottom: 0%;
  left: 0;
  right: 0;
  height: 74%;
  padding: 20px;
  backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(10px);
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.2) 100%);
  background: linear-gradient(360deg, #000 10%, rgba(0, 0, 0, 0.1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,CN=j.div`

`,AN=j.h3`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 12px;
 @media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,MN=j.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 20px;
@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1440px) {

}
`,ON=()=>{const[t,e]=D.useState(0),n=D.useRef(null),{t:i}=Qt(),o=i("featureSwiper.features",{returnObjects:!0}).map((d,h)=>({...d,icon:["🎆","👨‍💼","🤖","🔌"][h],smallIcon:["/Fireworks(1).png","/ManOfficeWorker(1).png","/Robot(1).png","/ElectricPlug(1).png"][h],image:[nN,iN,sN,rN][h],active:t===h})),c=d=>{e(d.activeIndex)},u=d=>{e(d),n.current&&n.current.slideTo(d)};return w.jsxs("div",{className:"flex flex-col items-center",children:[w.jsx(oN,{children:o.map((d,h)=>w.jsxs(Qe.Fragment,{children:[h!==0&&w.jsx(gN,{}),w.jsxs(lN,{onClick:()=>u(h),children:[w.jsxs(cN,{children:[w.jsxs(Gw,{children:[w.jsx(rf,{opacity:"0.06"}),w.jsx(rf,{})]}),w.jsxs(uN,{children:[w.jsx(fN,{children:w.jsx("p",{children:d.icon})}),w.jsx(dN,{className:d.active?"active":"","aria-selected":d.active,style:{boxShadow:d.active?"inset 0 0 20px 0 rgba(191, 123, 246, 0.7), inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1), 0 0 10px 6px rgba(191, 123, 246, 0.4), 0 15px 30px -10px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.2)":"none"},children:w.jsx(hN,{children:d.id})})]}),w.jsxs(Gw,{children:[w.jsx(rf,{opacity:"0.66"}),w.jsx(rf,{})]})]}),w.jsxs("div",{children:[w.jsx(pN,{children:d.title}),w.jsx(mN,{children:d.subtitle})]})]})]},d.id))}),w.jsx("div",{style:{width:"100%",margin:"40px auto"},children:w.jsx(ir,{onSwiper:d=>{n.current=d},spaceBetween:0,slidesPerView:1,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!1,modules:[Ir,ez],onSlideChange:c,initialSlide:t,children:o.map((d,h)=>w.jsx(Vr,{children:w.jsxs(yN,{children:[w.jsxs(vN,{children:[w.jsx(xN,{src:tN,alt:"Logo"}),w.jsx(SN,{src:Zg,alt:"Logo"}),w.jsx(TN,{src:aN,alt:"Tools"})]}),w.jsxs(bN,{children:[w.jsx(wN,{$image:d.image}),w.jsx(EN,{children:w.jsxs(CN,{children:[w.jsx(AN,{children:d.overlay.title}),w.jsx(MN,{children:d.overlay.text}),w.jsxs(md,{children:[w.jsx("a",{href:"https://sabsus.app/registrcompany/web",target:"_blank",rel:"noopener noreferrer",children:w.jsx(gd,{children:i("featureSwiper.buttons.tryFree")})})," ",w.jsx("a",{href:"https://sabsus.app/login/demo@sabsus.com/demo2025",target:"_blank",rel:"noopener noreferrer",children:w.jsx(yd,{children:i("featureSwiper.buttons.viewDemo")})})]})]})})]})]})},h))})})]})},kN=()=>{const{t}=Qt();return w.jsxs(ZP,{children:[w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:[" ",w.jsxs(KP,{children:[t("whyChoosePlatform.title")," ",w.jsx(WP,{src:eN,alt:"🎲"})]})]}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.3},viewport:{once:!1,amount:.3},children:w.jsx($P,{dangerouslySetInnerHTML:{__html:t("whyChoosePlatform.mainTitle")}})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.3},viewport:{once:!1,amount:.3},children:w.jsx(JP,{children:t("whyChoosePlatform.description")})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.9,delay:.5},viewport:{once:!1,amount:.3},children:w.jsx(ON,{})})]})},a2=j.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 80px; /* Відступи між компонентами */

  /* Мобільні пристрої (до 768px) */
  @media (max-width: 767px) {
    gap: 60px;
    padding: 0 12px;
  }

  /* Планшети (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  /* Невеликі десктопи (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  /* Середні десктопи (1280px - 1439px) */
  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  /* Великі десктопи (1440px і більше) */
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  /* Дуже великі екрани (1920px і більше) */
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`,L0=()=>w.jsx(w.Fragment,{children:w.jsxs(a2,{children:[w.jsx(Uj,{}),w.jsx(T_,{}),w.jsx(kN,{}),w.jsx(qP,{}),w.jsx(bj,{}),w.jsx(SP,{}),w.jsx(eP,{}),w.jsx(QP,{})]})}),RN=j.div`
margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 32px;
display: flex;
flex-direction: column;
margin-bottom: 10%;

@media screen and (min-width: 744px){
margin-bottom: 10%;

}

@media screen and (min-width: 1440px){

margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 0px;
display: flex;
flex-direction: column;
margin-bottom: 100px;
}
  `,LN=()=>w.jsx(RN,{}),DN=j.div`
margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 32px;
display: flex;
flex-direction: column;
margin-bottom: 10%;

@media screen and (min-width: 744px){
margin-bottom: 10%;

}

@media screen and (min-width: 1440px){

margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 0px;
display: flex;
flex-direction: column;
margin-bottom: 100px;
}
`,_N=j.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 32px;
line-height: 162%;
color: #fff;
`,zN=j.div`
display: flex;
gap: 20%;
 margin-top: 50px;
 margin-bottom: 50px;
@media screen and (min-width: 744px){
  gap: 50%;
}

@media screen and (min-width: 1440px){

display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 50%;
    margin-top: 50px;
    height: 30%;
}


`,jN=j.div`
display: flex;
flex-direction: column;
gap: 5px;
`,Yw=j.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 11px;
letter-spacing: -0.02em;
color: #808080;

@media screen and (min-width: 744px){
font-family: var(--second-family);
font-weight: 400;
font-size: 13px;
letter-spacing: -0.02em;
color: #808080;
margin-bottom: 30px;
}

@media screen and (min-width: 1440px){
font-size: 16px;
margin-bottom: 50px;

}
`;j.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;const PN=j.div`

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`;j.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;const NN=()=>w.jsxs(DN,{children:[w.jsx(_N,{children:"Let’s Talk"}),w.jsxs(zN,{children:[w.jsx(jN,{children:w.jsx(Yw,{children:"Contact"})}),w.jsx(PN,{children:w.jsx(Yw,{children:"Location"})})]})]}),BN=j.div`
margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 32px;
display: flex;
flex-direction: column;
margin-bottom: 0%;

@media screen and (min-width: 744px){
margin-bottom: 0%;

}

@media screen and (min-width: 1440px){

margin: 0 auto;
margin-top: 100px;
height: 100%;
max-width: 1440px;
    padding: 16px 0px;
display: flex;
flex-direction: column;
margin-bottom: 0px;
}

`;j.div`
display: flex;
gap: 10px;
  flex-direction: column;
 @media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 25vh;

}
`;j.div`
display: flex;
flex-direction: column;
gap: 50px;

@media screen and (min-width: 744px){

display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
margin-bottom: 150px;
}

@media screen and (min-width: 1440px){
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
margin-bottom: 50px;

}

`;j.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 12px;
letter-spacing: -0.02em;
color: #808080;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
font-size: 16px;

}


`;j.h2`
font-family: var(--font-family);
font-weight: 600;
font-size: 24px;
line-height: 162%;
color: #fff;

`;j.h3`
font-family: var(--font-family);
font-weight: 600;
font-size: 12px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 14px;

}

@media screen and (min-width: 1440px){
font-family: var(--font-family);
font-weight: 600;
font-size: 16px;
line-height: 162%;
color: #fff;

}
`;j.p`
 font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 14px;

}

@media screen and (min-width: 1440px){
font-size: 16px;

}

`;j.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 12px;
line-height: 162%;
color: #fff;

@media screen and (min-width: 744px){

margin-bottom: 30px;
}

@media screen and (min-width: 1440px){
font-size: 16px;
margin-bottom: 0px;

}

`;j.a`
font-family: var(--font-family);
font-weight: 600;
font-size: 14px;
line-height: 162%;
color: #fff;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){
font-size: 20px;

}
`;j.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
margin-bottom: 10%;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
    width: 100%;
    height: 100%;
margin-bottom: 5%;

}
`;j.p`
  padding: 0px auto 0px auto;
  width: 100%;
border: 1px solid #d9d9d9;
  margin: 0 auto;
background: #d9d9d9;

@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){
max-width: 1440px;

}
`;j.div`
display: flex;
flex-direction: column;
`;j.p`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 162%;
color: #fff;

span {
font-weight: 400;
color: #bfbfbf;
}
`;j.a`

font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
line-height: 162%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #fff;
`;j.div`
    display: flex;
    height: 100px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
@media screen and (min-width: 744px){
height: 200px;

}

@media screen and (min-width: 1440px){


}
`;j.h3`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
text-align: center;
color: #fff;

@media screen and (min-width: 744px){

font-size: 32px;
}

@media screen and (min-width: 1440px){


}
`;j.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 12px;
text-align: center;
color: #808080;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){


}
`;const IN=()=>w.jsx(BN,{}),Nl="generated",HN="pointerdown",VN="pointerup",Hm="pointerleave",UN="pointerout",Ur="pointermove",qN="touchstart",Xw="touchend",FN="touchmove",GN="touchcancel",YN="resize",XN="visibilitychange",ai="tsParticles - Error";class In{constructor(e,n,i){if(this._updateFromAngle=(r,o)=>{this.x=Math.cos(r)*o,this.y=Math.sin(r)*o},!xi(e)&&e){this.x=e.x,this.y=e.y;const r=e;this.z=r.z?r.z:0}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??0;else throw new Error(`${ai} Vector3d not initialized correctly`)}static get origin(){return In.create(0,0,0)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return In.create(e.x,e.y,e.z)}static create(e,n,i){return new In(e,n,i)}add(e){return In.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return In.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return In.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**2+this.y**2}mult(e){return In.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=0&&this.multTo(1/e)}rotate(e){return In.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),0)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:0}sub(e){return In.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class Bt extends In{constructor(e,n){super(e,n,0)}static get origin(){return Bt.create(0,0)}static clone(e){return Bt.create(e.x,e.y)}static create(e,n){return new Bt(e,n)}}let QN=Math.random;const Vm=new Map;function D0(t,e){Vm.get(t)||Vm.set(t,e)}function g6(t){return Vm.get(t)||(e=>e)}function st(){return Si(QN(),0,1-1e-16)}function Si(t,e,n){return Math.min(Math.max(t,e),n)}function _0(t,e,n,i){return Math.floor((t*n+e*i)/(n+i))}function An(t){const e=Js(t);let n=o2(t);return e===n&&(n=0),st()*(e-n)+n}function xe(t){return xi(t)?t:An(t)}function o2(t){return xi(t)?t:t.min}function Js(t){return xi(t)?t:t.max}function ke(t,e){if(t===e||e===void 0&&xi(t))return t;const n=o2(t),i=Js(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:ke(n,i)}function qr(t){const e=t.random,{enable:n,minimumValue:i}=er(e)?{enable:e,minimumValue:0}:e;return xe(n?ke(t.value,i):t.value)}function fn(t,e){const n=t.x-e.x,i=t.y-e.y;return{dx:n,dy:i,distance:Math.sqrt(n**2+i**2)}}function Un(t,e){return fn(t,e).distance}function ZN(t,e,n){if(xi(t))return t*Math.PI/180;switch(t){case"top":return-Math.PI/2;case"top-right":return-Math.PI/4;case"right":return 0;case"bottom-right":return Math.PI/4;case"bottom":return Math.PI/2;case"bottom-left":return 3*Math.PI/4;case"left":return Math.PI;case"top-left":return-3*Math.PI/4;case"inside":return Math.atan2(n.y-e.y,n.x-e.x);case"outside":return Math.atan2(e.y-n.y,e.x-n.x);default:return st()*Math.PI*2}}function KN(t){const e=Bt.origin;return e.length=1,e.angle=t,e}function Qw(t,e,n,i){return Bt.create(t.x*(n-i)/(n+i)+e.x*2*i/(n+i),t.y)}function WN(t){var e,n;return{x:((e=t.position)==null?void 0:e.x)??st()*t.size.width,y:((n=t.position)==null?void 0:n.y)??st()*t.size.height}}function y6(t){return t?t.endsWith("%")?parseFloat(t)/100:parseFloat(t):1}const $N={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function Fr(){return $N}function Zw(t){const e={bounced:!1},{pSide:n,pOtherSide:i,rectSide:r,rectOtherSide:o,velocity:c,factor:u}=t;return i.min<o.min||i.min>o.max||i.max<o.min||i.max>o.max||(n.max>=r.min&&n.max<=(r.max+r.min)/2&&c>0||n.min<=r.max&&n.min>(r.max+r.min)/2&&c<0)&&(e.velocity=c*-u,e.bounced=!0),e}function JN(t,e){const n=It(e,i=>t.matches(i));return qn(n)?n.some(i=>i):n}function Ja(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function eB(){return!Ja()&&typeof matchMedia<"u"}function v6(t){if(eB())return matchMedia(t)}function tB(t){if(!(Ja()||typeof MutationObserver>"u"))return new MutationObserver(t)}function bt(t,e){return t===e||qn(e)&&e.indexOf(t)>-1}async function nB(t,e){try{await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)}catch{}}function iB(t){return Math.floor(st()*t.length)}function vd(t,e,n=!0){return t[e!==void 0&&n?e%t.length:iB(t)]}function l2(t,e,n,i,r){return sB(mc(t,i??0),e,n,r)}function sB(t,e,n,i){let r=!0;return(!i||i==="bottom")&&(r=t.top<e.height+n.x),r&&(!i||i==="left")&&(r=t.right>n.x),r&&(!i||i==="right")&&(r=t.left<e.width+n.y),r&&(!i||i==="top")&&(r=t.bottom>n.y),r}function mc(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function sn(t,...e){for(const n of e){if(n==null)continue;if(!Va(n)){t=n;continue}const i=Array.isArray(n);i&&(Va(t)||!t||!Array.isArray(t))?t=[]:!i&&(Va(t)||!t||Array.isArray(t))&&(t={});for(const r in n){if(r==="__proto__")continue;const o=n,c=o[r],u=t;u[r]=Va(c)&&Array.isArray(c)?c.map(d=>sn(u[r],d)):sn(u[r],c)}}return t}function c2(t,e){return!!w6(e,n=>n.enable&&bt(t,n.mode))}function u2(t,e,n){It(e,i=>{const r=i.mode;i.enable&&bt(t,r)&&rB(i,n)})}function rB(t,e){const n=t.selectors;It(n,i=>{e(i,t)})}function x6(t,e){if(!(!e||!t))return w6(t,n=>JN(e,n.selectors))}function Um(t){return{position:t.getPosition(),radius:t.getRadius(),mass:t.getMass(),velocity:t.velocity,factor:Bt.create(qr(t.options.bounce.horizontal),qr(t.options.bounce.vertical))}}function b6(t,e){const{x:n,y:i}=t.velocity.sub(e.velocity),[r,o]=[t.position,e.position],{dx:c,dy:u}=fn(o,r);if(n*c+i*u<0)return;const d=-Math.atan2(u,c),h=t.mass,p=e.mass,g=t.velocity.rotate(d),y=e.velocity.rotate(d),x=Qw(g,y,h,p),b=Qw(y,g,h,p),S=x.rotate(-d),C=b.rotate(-d);t.velocity.x=S.x*t.factor.x,t.velocity.y=S.y*t.factor.y,e.velocity.x=C.x*e.factor.x,e.velocity.y=C.y*e.factor.y}function aB(t,e){const n=t.getPosition(),i=t.getRadius(),r=mc(n,i),o=Zw({pSide:{min:r.left,max:r.right},pOtherSide:{min:r.top,max:r.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:t.velocity.x,factor:qr(t.options.bounce.horizontal)});o.bounced&&(o.velocity!==void 0&&(t.velocity.x=o.velocity),o.position!==void 0&&(t.position.x=o.position));const c=Zw({pSide:{min:r.top,max:r.bottom},pOtherSide:{min:r.left,max:r.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:t.velocity.y,factor:qr(t.options.bounce.vertical)});c.bounced&&(c.velocity!==void 0&&(t.velocity.y=c.velocity),c.position!==void 0&&(t.position.y=c.position))}function It(t,e){return qn(t)?t.map((n,i)=>e(n,i)):e(t,0)}function ys(t,e,n){return qn(t)?vd(t,e,n):t}function w6(t,e){return qn(t)?t.find((n,i)=>e(n,i)):e(t,0)?t:void 0}function S6(t,e){const n=t.value,i=t.animation,r={delayTime:xe(i.delay)*1e3,enable:i.enable,value:xe(t.value)*e,max:Js(n)*e,min:o2(n)*e,loops:0,maxLoops:xe(i.count),time:0};if(i.enable){switch(r.decay=1-xe(i.decay),i.mode){case"increase":r.status="increasing";break;case"decrease":r.status="decreasing";break;case"random":r.status=st()>=.5?"increasing":"decreasing";break}const o=i.mode==="auto";switch(i.startValue){case"min":r.value=r.min,o&&(r.status="increasing");break;case"max":r.value=r.max,o&&(r.status="decreasing");break;case"random":default:r.value=An(r),o&&(r.status=st()>=.5?"increasing":"decreasing");break}}return r.initialValue=r.value,r}function oB(t,e){if(!(t.mode==="percent")){const{mode:r,...o}=t;return o}return"x"in t?{x:t.x/100*e.width,y:t.y/100*e.height}:{width:t.width/100*e.width,height:t.height/100*e.height}}function T6(t,e){return oB(t,e)}function er(t){return typeof t=="boolean"}function vi(t){return typeof t=="string"}function xi(t){return typeof t=="number"}function E6(t){return typeof t=="function"}function Va(t){return typeof t=="object"&&t!==null}function qn(t){return Array.isArray(t)}const Vf="random",Cf="mid",xd=new Map;function Kw(t){xd.set(t.key,t)}function z0(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function lB(t){for(const[,o]of xd)if(t.startsWith(o.stringPrefix))return o.parseString(t);const e=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,n=t.replace(e,(o,c,u,d,h)=>c+c+u+u+d+d+(h!==void 0?h+h:"")),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,r=i.exec(n);return r?{a:r[4]!==void 0?parseInt(r[4],16)/255:1,b:parseInt(r[3],16),g:parseInt(r[2],16),r:parseInt(r[1],16)}:void 0}function bi(t,e,n=!0){if(!t)return;const i=vi(t)?{value:t}:t;if(vi(i.value))return C6(i.value,e,n);if(qn(i.value))return bi({value:vd(i.value,e,n)});for(const[,r]of xd){const o=r.handleRangeColor(i);if(o)return o}}function C6(t,e,n=!0){if(!t)return;const i=vi(t)?{value:t}:t;if(vi(i.value))return i.value===Vf?M6():cB(i.value);if(qn(i.value))return C6({value:vd(i.value,e,n)});for(const[,r]of xd){const o=r.handleColor(i);if(o)return o}}function ec(t,e,n=!0){const i=bi(t,e,n);return i?A6(i):void 0}function A6(t){const e=t.r/255,n=t.g/255,i=t.b/255,r=Math.max(e,n,i),o=Math.min(e,n,i),c={h:0,l:(r+o)/2,s:0};return r!==o&&(c.s=c.l<.5?(r-o)/(r+o):(r-o)/(2-r-o),c.h=e===r?(n-i)/(r-o):c.h=n===r?2+(i-e)/(r-o):4+(e-n)/(r-o)),c.l*=100,c.s*=100,c.h*=60,c.h<0&&(c.h+=360),c.h>=360&&(c.h-=360),c}function cB(t){return lB(t)}function eo(t){const e={b:0,g:0,r:0},n={h:t.h/360,l:t.l/100,s:t.s/100};if(!n.s)e.r=e.g=e.b=n.l;else{const i=n.l<.5?n.l*(1+n.s):n.l+n.s-n.l*n.s,r=2*n.l-i;e.r=z0(r,i,n.h+1/3),e.g=z0(r,i,n.h),e.b=z0(r,i,n.h-1/3)}return e.r=Math.floor(e.r*255),e.g=Math.floor(e.g*255),e.b=Math.floor(e.b*255),e}function uB(t){const e=eo(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function M6(t){return{b:Math.floor(An(ke(0,256))),g:Math.floor(An(ke(0,256))),r:Math.floor(An(ke(0,256)))}}function vs(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`}function tc(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`}function f2(t,e,n,i){let r=t,o=e;return r.r===void 0&&(r=eo(t)),o.r===void 0&&(o=eo(e)),{b:_0(r.b,o.b,n,i),g:_0(r.g,o.g,n,i),r:_0(r.r,o.r,n,i)}}function qm(t,e,n){if(n===Vf)return M6();if(n===Cf){const i=t.getFillColor()??t.getStrokeColor(),r=(e==null?void 0:e.getFillColor())??(e==null?void 0:e.getStrokeColor());if(i&&r&&e)return f2(i,r,t.getRadius(),e.getRadius());{const o=i??r;if(o)return eo(o)}}else return n}function O6(t,e,n){const i=vi(t)?t:t.value;return i===Vf?n?bi({value:i}):e?Vf:Cf:i===Cf?Cf:bi({value:i})}function Ww(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function k6(t,e,n){const i={h:{enable:!1,value:t.h},s:{enable:!1,value:t.s},l:{enable:!1,value:t.l}};return e&&(j0(i.h,e.h,n),j0(i.s,e.s,n),j0(i.l,e.l,n)),i}function j0(t,e,n){t.enable=e.enable,t.enable?(t.velocity=xe(e.speed)/100*n,t.decay=1-xe(e.decay),t.status="increasing",t.loops=0,t.maxLoops=xe(e.count),t.time=0,t.delayTime=xe(e.delay)*1e3,e.sync||(t.velocity*=st(),t.value*=st()),t.initialValue=t.value):t.velocity=0}function Bl(t,e,n){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.closePath()}function fB(t,e,n,i){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.lineTo(i.x,i.y),t.closePath()}function dB(t,e,n){t.fillStyle=n??"rgba(0,0,0,0)",t.fillRect(0,0,e.width,e.height)}function hB(t,e,n,i){n&&(t.globalAlpha=i,t.drawImage(n,0,0,e.width,e.height),t.globalAlpha=1)}function P0(t,e){t.clearRect(0,0,e.width,e.height)}function pB(t){const{container:e,context:n,particle:i,delta:r,colorStyles:o,backgroundMask:c,composite:u,radius:d,opacity:h,shadow:p,transform:g}=t,y=i.getPosition(),x=i.rotation+(i.pathRotation?i.velocity.angle:0),b={sin:Math.sin(x),cos:Math.cos(x)},S={a:b.cos*(g.a??1),b:b.sin*(g.b??1),c:-b.sin*(g.c??1),d:b.cos*(g.d??1)};n.setTransform(S.a,S.b,S.c,S.d,y.x,y.y),n.beginPath(),c&&(n.globalCompositeOperation=u);const C=i.shadowColor;p.enable&&C&&(n.shadowBlur=p.blur,n.shadowColor=vs(C),n.shadowOffsetX=p.offset.x,n.shadowOffsetY=p.offset.y),o.fill&&(n.fillStyle=o.fill);const T=i.strokeWidth??0;n.lineWidth=T,o.stroke&&(n.strokeStyle=o.stroke),mB(e,n,i,d,h,r),T>0&&n.stroke(),i.close&&n.closePath(),i.fill&&n.fill(),gB(e,n,i,d,h,r),n.globalCompositeOperation="source-over",n.setTransform(1,0,0,1,0,0)}function mB(t,e,n,i,r,o){if(!n.shape)return;const c=t.drawers.get(n.shape);c&&c.draw(e,n,i,r,o,t.retina.pixelRatio)}function gB(t,e,n,i,r,o){if(!n.shape)return;const c=t.drawers.get(n.shape);!c||!c.afterEffect||c.afterEffect(e,n,i,r,o,t.retina.pixelRatio)}function yB(t,e,n){e.draw&&e.draw(t,n)}function vB(t,e,n,i){e.drawParticle&&e.drawParticle(t,n,i)}function xB(t,e,n){return{h:t.h,s:t.s,l:t.l+(e==="darken"?-1:1)*n}}function bB(t,e,n){const i=e[n];i!==void 0&&(t[n]=(t[n]??1)*i)}class wB{constructor(e){this.container=e,this._applyPostDrawUpdaters=n=>{for(const i of this._postDrawUpdaters)i.afterDraw&&i.afterDraw(n)},this._applyPreDrawUpdaters=(n,i,r,o,c,u)=>{for(const d of this._preDrawUpdaters){if(d.getColorStyles){const{fill:h,stroke:p}=d.getColorStyles(i,n,r,o);h&&(c.fill=h),p&&(c.stroke=p)}if(d.getTransformValues){const h=d.getTransformValues(i);for(const p in h)bB(u,h,p)}d.beforeDraw&&d.beforeDraw(i)}},this._applyResizePlugins=()=>{for(const n of this._resizePlugins)n.resize&&n.resize()},this._getPluginParticleColors=n=>{let i,r;for(const o of this._colorPlugins)if(!i&&o.particleFillColor&&(i=ec(o.particleFillColor(n))),!r&&o.particleStrokeColor&&(r=ec(o.particleStrokeColor(n))),i&&r)break;return[i,r]},this._initCover=()=>{const n=this.container.actualOptions,i=n.backgroundMask.cover,r=i.color,o=bi(r);if(o){const c={...o,a:i.opacity};this._coverColorStyle=vs(c,c.a)}},this._initStyle=()=>{const n=this.element,i=this.container.actualOptions;if(n){this._fullScreen?(this._originalStyle=sn({},n.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const r in i.style){if(!r||!i.style)continue;const o=i.style[r];o&&n.style.setProperty(r,o,"important")}}},this._initTrail=async()=>{const n=this.container.actualOptions,i=n.particles.move.trail,r=i.fill;if(i.enable)if(r.color){const o=bi(r.color);if(!o)return;const c=n.particles.move.trail;this._trailFill={color:{...o},opacity:1/c.length}}else await new Promise((o,c)=>{if(!r.image)return;const u=document.createElement("img");u.addEventListener("load",()=>{this._trailFill={image:u,opacity:1/i.length},o()}),u.addEventListener("error",d=>{c(d.error)}),u.src=r.image})},this._paintBase=n=>{this.draw(i=>dB(i,this.size,n))},this._paintImage=(n,i)=>{this.draw(r=>hB(r,this.size,n,i))},this._repairStyle=()=>{const n=this.element;n&&(this._safeMutationObserver(i=>i.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(i=>i.observe(n,{attributes:!0})))},this._resetOriginalStyle=()=>{const n=this.element,i=this._originalStyle;if(!(n&&i))return;const r=n.style;r.position=i.position,r.zIndex=i.zIndex,r.top=i.top,r.left=i.left,r.width=i.width,r.height=i.height},this._safeMutationObserver=n=>{this._mutationObserver&&n(this._mutationObserver)},this._setFullScreenStyle=()=>{const n=this.element;if(!n)return;const i="important",r=n.style;r.setProperty("position","fixed",i),r.setProperty("z-index",this.container.actualOptions.fullScreen.zIndex.toString(10),i),r.setProperty("top","0",i),r.setProperty("left","0",i),r.setProperty("width","100%",i),r.setProperty("height","100%",i)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,n=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():n.enable&&n.length>0&&i?i.color?this._paintBase(vs(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):this.draw(r=>{P0(r,this.size)})}destroy(){if(this.stop(),this._generated){const e=this.element;e&&e.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const n=this._context;if(n)return e(n)}drawParticle(e,n){if(e.spawning||e.destroyed)return;const i=e.getRadius();if(i<=0)return;const r=e.getFillColor(),o=e.getStrokeColor()??r;let[c,u]=this._getPluginParticleColors(e);c||(c=r),u||(u=o),!(!c&&!u)&&this.draw(d=>{var A;const h=this.container,p=h.actualOptions,g=e.options.zIndex,y=(1-e.zIndexFactor)**g.opacityRate,x=e.bubble.opacity??((A=e.opacity)==null?void 0:A.value)??1,b=e.strokeOpacity??x,S=x*y,C=b*y,T={},M={fill:c?tc(c,S):void 0};M.stroke=u?tc(u,C):M.fill,this._applyPreDrawUpdaters(d,e,i,S,M,T),pB({container:h,context:d,particle:e,delta:n,colorStyles:M,backgroundMask:p.backgroundMask.enable,composite:p.backgroundMask.composite,radius:i*(1-e.zIndexFactor)**g.sizeRate,opacity:S,shadow:e.options.shadow,transform:T}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,n,i){this.draw(r=>vB(r,e,n,i))}drawPlugin(e,n){this.draw(i=>yB(i,e,n))}async init(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=tB(e=>{for(const n of e)n.type==="attributes"&&n.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),this._initCover();try{await this._initTrail()}catch(e){Fr().error(e)}this.initBackground(),this._safeMutationObserver(e=>{this.element&&e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions,n=e.background,i=this.element;if(!i)return;const r=i.style;if(r){if(n.color){const o=bi(n.color);r.backgroundColor=o?vs(o,n.opacity):""}else r.backgroundColor="";r.backgroundImage=n.image||"",r.backgroundPosition=n.position||"",r.backgroundRepeat=n.repeat||"",r.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const[,e]of this.container.plugins)e.resize&&this._resizePlugins.push(e),(e.particleFillColor||e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles||e.getTransformValues||e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&Nl in e.dataset?e.dataset[Nl]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=sn({},this.element.style),this.size.height=e.offsetHeight,this.size.width=e.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver(n=>{this.element&&n.observe(this.element,{attributes:!0})}),this.container.retina.init(),this.initBackground()}paint(){const e=this.container.actualOptions;this.draw(n=>{e.backgroundMask.enable&&e.backgroundMask.cover?(P0(n,this.size),this._paintBase(this._coverColorStyle)):this._paintBase()})}resize(){if(!this.element)return!1;const e=this.container,n=e.retina.pixelRatio,i=e.canvas.size,r={width:this.element.offsetWidth*n,height:this.element.offsetHeight*n};if(r.height===i.height&&r.width===i.width&&r.height===this.element.height&&r.width===this.element.width)return!1;const o={...i};return this.element.width=i.width=this.element.offsetWidth*n,this.element.height=i.height=this.element.offsetHeight*n,this.container.started&&(this.resizeFactor={width:i.width/o.width,height:i.height/o.height}),!0}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>P0(e,this.size))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,n=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),n&&await e.refresh()}}function ti(t,e,n,i,r){if(i){let o={passive:!0};er(r)?o.capture=r:r!==void 0&&(o=r),t.addEventListener(e,n,o)}else{const o=r;t.removeEventListener(e,n,o)}}class SB{constructor(e){this.container=e,this._doMouseTouchClick=n=>{const i=this.container,r=i.actualOptions;if(this._canPush){const o=i.interactivity.mouse,c=o.position;if(!c)return;o.clickPosition={...c},o.clickTime=new Date().getTime();const u=r.interactivity.events.onClick;It(u.mode,d=>this.container.handleClickMode(d))}n.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),500)},this._handleThemeChange=n=>{const i=n,r=this.container,o=r.options,c=o.defaultThemes,u=i.matches?c.dark:c.light,d=o.themes.find(h=>h.name===u);d&&d.default.auto&&r.loadTheme(u)},this._handleVisibilityChange=()=>{const n=this.container,i=n.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document&&document.hidden?(n.pageHidden=!0,n.pause()):(n.pageHidden=!1,n.getAnimationStatus()?n.play(!0):n.draw(!0)))},this._handleWindowResize=async()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout),this._resizeTimeout=setTimeout(async()=>{const n=this.container.canvas;n&&await n.windowResize()},this.container.actualOptions.interactivity.events.resize.delay*1e3)},this._manageInteractivityListeners=(n,i)=>{const r=this._handlers,o=this.container,c=o.actualOptions,u=o.interactivity.element;if(!u)return;const d=u,h=o.canvas.element;h&&(h.style.pointerEvents=d===h?"initial":"none"),(c.interactivity.events.onHover.enable||c.interactivity.events.onClick.enable)&&(ti(u,Ur,r.mouseMove,i),ti(u,qN,r.touchStart,i),ti(u,FN,r.touchMove,i),c.interactivity.events.onClick.enable?(ti(u,Xw,r.touchEndClick,i),ti(u,VN,r.mouseUp,i),ti(u,HN,r.mouseDown,i)):ti(u,Xw,r.touchEnd,i),ti(u,n,r.mouseLeave,i),ti(u,GN,r.touchCancel,i))},this._manageListeners=n=>{const i=this._handlers,r=this.container,o=r.actualOptions,c=o.interactivity.detectsOn,u=r.canvas.element;let d=Hm;c==="window"?(r.interactivity.element=window,d=UN):c==="parent"&&u?r.interactivity.element=u.parentElement??u.parentNode:r.interactivity.element=u,this._manageMediaMatch(n),this._manageResize(n),this._manageInteractivityListeners(d,n),document&&ti(document,XN,i.visibilityChange,n,!1)},this._manageMediaMatch=n=>{const i=this._handlers,r=v6("(prefers-color-scheme: dark)");if(r){if(r.addEventListener!==void 0){ti(r,"change",i.themeChange,n);return}r.addListener!==void 0&&(n?r.addListener(i.oldThemeChange):r.removeListener(i.oldThemeChange))}},this._manageResize=n=>{const i=this._handlers,r=this.container;if(!r.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){ti(window,YN,i.resize,n);return}const c=r.canvas.element;this._resizeObserver&&!n?(c&&this._resizeObserver.unobserve(c),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&n&&c&&(this._resizeObserver=new ResizeObserver(async u=>{u.find(h=>h.target===c)&&await this._handleWindowResize()}),this._resizeObserver.observe(c))},this._mouseDown=()=>{const{interactivity:n}=this.container;if(!n)return;const{mouse:i}=n;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=n=>{const i=this.container,r=i.actualOptions,{mouse:o}=i.interactivity;o.inside=!0;let c=!1;const u=o.position;if(!(!u||!r.interactivity.events.onClick.enable)){for(const[,d]of i.plugins)if(d.clickPositionValid&&(c=d.clickPositionValid(u),c))break;c||this._doMouseTouchClick(n),o.clicking=!1}},this._mouseTouchFinish=()=>{const n=this.container.interactivity;if(!n)return;const i=n.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,n.status=Hm,i.inside=!1,i.clicking=!1},this._mouseTouchMove=n=>{const i=this.container,r=i.actualOptions,o=i.interactivity,c=i.canvas.element;if(!o||!o.element)return;o.mouse.inside=!0;let u;if(n.type.startsWith("pointer")){this._canPush=!0;const h=n;if(o.element===window){if(c){const p=c.getBoundingClientRect();u={x:h.clientX-p.left,y:h.clientY-p.top}}}else if(r.interactivity.detectsOn==="parent"){const p=h.target,g=h.currentTarget;if(p&&g&&c){const y=p.getBoundingClientRect(),x=g.getBoundingClientRect(),b=c.getBoundingClientRect();u={x:h.offsetX+2*y.left-(x.left+b.left),y:h.offsetY+2*y.top-(x.top+b.top)}}else u={x:h.offsetX??h.clientX,y:h.offsetY??h.clientY}}else h.target===c&&(u={x:h.offsetX??h.clientX,y:h.offsetY??h.clientY})}else if(this._canPush=n.type!=="touchmove",c){const h=n,p=h.touches[h.touches.length-1],g=c.getBoundingClientRect();u={x:p.clientX-(g.left??0),y:p.clientY-(g.top??0)}}const d=i.retina.pixelRatio;u&&(u.x*=d,u.y*=d),o.mouse.position=u,o.status=Ur},this._touchEnd=n=>{const i=n,r=Array.from(i.changedTouches);for(const o of r)this._touches.delete(o.identifier);this._mouseTouchFinish()},this._touchEndClick=n=>{const i=n,r=Array.from(i.changedTouches);for(const o of r)this._touches.delete(o.identifier);this._mouseTouchClick(n)},this._touchStart=n=>{const i=n,r=Array.from(i.changedTouches);for(const o of r)this._touches.set(o.identifier,performance.now());this._mouseTouchMove(n)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:n=>this._mouseTouchMove(n),mouseUp:n=>this._mouseTouchClick(n),touchStart:n=>this._touchStart(n),touchMove:n=>this._mouseTouchMove(n),touchEnd:n=>this._touchEnd(n),touchCancel:n=>this._touchEnd(n),touchEndClick:n=>this._touchEndClick(n),visibilityChange:()=>this._handleVisibilityChange(),themeChange:n=>this._handleThemeChange(n),oldThemeChange:n=>this._handleThemeChange(n),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}class Xt{constructor(){this.value=""}static create(e,n){const i=new Xt;return i.load(e),n!==void 0&&(vi(n)||qn(n)?i.load({value:n}):i.load(n)),i}load(e){(e==null?void 0:e.value)!==void 0&&(this.value=e.value)}}class TB{constructor(){this.color=new Xt,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=Xt.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}}class EB{constructor(){this.color=new Xt,this.color.value="#fff",this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=Xt.create(this.color,e.color)),e.opacity!==void 0&&(this.opacity=e.opacity))}}class CB{constructor(){this.composite="destination-out",this.cover=new EB,this.enable=!1}load(e){if(e){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){const n=e.cover,i=vi(e.cover)?{color:e.cover}:e.cover;this.cover.load(n.color!==void 0?n:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}}class AB{constructor(){this.enable=!0,this.zIndex=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}}class MB{constructor(){this.enable=!1,this.mode=[]}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}}class $w{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type="circle"}get el(){return this.elementId}set el(e){this.elementId=e}get elementId(){return this.ids}set elementId(e){this.ids=e}get ids(){return It(this.selectors,e=>e.replace("#",""))}set ids(e){this.selectors=It(e,n=>`#${n}`)}load(e){if(!e)return;const n=e.ids??e.elementId??e.el;n!==void 0&&(this.ids=n),e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type)}}class OB{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}}class kB{constructor(){this.enable=!1,this.mode=[],this.parallax=new OB}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class RB{constructor(){this.delay=.5,this.enable=!0}load(e){e!==void 0&&(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}}class LB{constructor(){this.onClick=new MB,this.onDiv=new $w,this.onHover=new kB,this.resize=new RB}get onclick(){return this.onClick}set onclick(e){this.onClick=e}get ondiv(){return this.onDiv}set ondiv(e){this.onDiv=e}get onhover(){return this.onHover}set onhover(e){this.onHover=e}load(e){if(!e)return;this.onClick.load(e.onClick??e.onclick);const n=e.onDiv??e.ondiv;n!==void 0&&(this.onDiv=It(n,i=>{const r=new $w;return r.load(i),r})),this.onHover.load(e.onHover??e.onhover),er(e.resize)?this.resize.enable=e.resize:this.resize.load(e.resize)}}class DB{constructor(e,n){this._engine=e,this._container=n}load(e){if(!e||!this._container)return;const n=this._engine.plugins.interactors.get(this._container);if(n)for(const i of n)i.loadModeOptions&&i.loadModeOptions(this,e)}}class R6{constructor(e,n){this.detectsOn="window",this.events=new LB,this.modes=new DB(e,n)}get detect_on(){return this.detectsOn}set detect_on(e){this.detectsOn=e}load(e){if(!e)return;const n=e.detectsOn??e.detect_on;n!==void 0&&(this.detectsOn=n),this.events.load(e.events),this.modes.load(e.modes)}}class _B{load(e){e&&(e.position&&(this.position={x:e.position.x??50,y:e.position.y??50,mode:e.position.mode??"percent"}),e.options&&(this.options=sn({},e.options)))}}class zB{constructor(){this.maxWidth=1/0,this.options={},this.mode="canvas"}load(e){e&&(e.maxWidth!==void 0&&(this.maxWidth=e.maxWidth),e.mode!==void 0&&(e.mode==="screen"?this.mode="screen":this.mode="canvas"),e.options!==void 0&&(this.options=sn({},e.options)))}}class jB{constructor(){this.auto=!1,this.mode="any",this.value=!1}load(e){e&&(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class PB{constructor(){this.name="",this.default=new jB}load(e){e&&(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=sn({},e.options)))}}class N0{constructor(){this.count=0,this.enable=!1,this.offset=0,this.speed=1,this.delay=0,this.decay=0,this.sync=!0}load(e){e&&(e.count!==void 0&&(this.count=ke(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(this.offset=ke(e.offset)),e.speed!==void 0&&(this.speed=ke(e.speed)),e.decay!==void 0&&(this.decay=ke(e.decay)),e.delay!==void 0&&(this.delay=ke(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class NB{constructor(){this.h=new N0,this.s=new N0,this.l=new N0}load(e){e&&(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class nc extends Xt{constructor(){super(),this.animation=new NB}static create(e,n){const i=new nc;return i.load(e),n!==void 0&&(vi(n)||qn(n)?i.load({value:n}):i.load(n)),i}load(e){if(super.load(e),!e)return;const n=e.animation;n!==void 0&&(n.enable!==void 0?this.animation.h.load(n):this.animation.load(e.animation))}}class BB{constructor(){this.speed=2}load(e){e&&e.speed!==void 0&&(this.speed=e.speed)}}class IB{constructor(){this.enable=!0,this.retries=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class HB{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(e.count!==void 0&&(this.count=ke(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=ke(e.speed)),e.decay!==void 0&&(this.decay=ke(e.decay)),e.delay!==void 0&&(this.delay=ke(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class L6 extends HB{constructor(){super(),this.mode="auto",this.startValue="random"}load(e){super.load(e),e&&(e.minimumValue!==void 0&&(this.minimumValue=e.minimumValue),e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class VB{constructor(){this.enable=!1,this.minimumValue=0}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.minimumValue!==void 0&&(this.minimumValue=e.minimumValue))}}class ar{constructor(){this.random=new VB,this.value=0}load(e){e&&(er(e.random)?this.random.enable=e.random:this.random.load(e.random),e.value!==void 0&&(this.value=ke(e.value,this.random.enable?this.random.minimumValue:void 0)))}}class Jw extends ar{constructor(){super(),this.random.minimumValue=.1,this.value=1}}class D6{constructor(){this.horizontal=new Jw,this.vertical=new Jw}load(e){e&&(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class UB{constructor(){this.absorb=new BB,this.bounce=new D6,this.enable=!1,this.maxSpeed=50,this.mode="bounce",this.overlap=new IB}load(e){e&&(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=ke(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class qB{constructor(){this.offset=0,this.value=90}load(e){e&&(e.offset!==void 0&&(this.offset=ke(e.offset)),e.value!==void 0&&(this.value=ke(e.value)))}}class FB{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}get rotateX(){return this.rotate.x}set rotateX(e){this.rotate.x=e}get rotateY(){return this.rotate.y}set rotateY(e){this.rotate.y=e}load(e){var r,o;if(!e)return;e.distance!==void 0&&(this.distance=ke(e.distance)),e.enable!==void 0&&(this.enable=e.enable);const n=((r=e.rotate)==null?void 0:r.x)??e.rotateX;n!==void 0&&(this.rotate.x=n);const i=((o=e.rotate)==null?void 0:o.y)??e.rotateY;i!==void 0&&(this.rotate.y=i)}}class GB{constructor(){this.x=50,this.y=50,this.mode="percent",this.radius=0}load(e){e&&(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class YB{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=ke(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=ke(e.maxSpeed)))}}class XB{constructor(){this.clamp=!0,this.delay=new ar,this.enable=!1,this.options={}}load(e){e&&(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=sn(this.options,e.options)))}}class QB{load(e){e&&(e.color!==void 0&&(this.color=Xt.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class ZB{constructor(){this.enable=!1,this.length=10,this.fill=new QB}get fillColor(){return this.fill.color}set fillColor(e){this.fill.load({color:e})}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),(e.fill!==void 0||e.fillColor!==void 0)&&this.fill.load(e.fill||{color:e.fillColor}),e.length!==void 0&&(this.length=e.length))}}class KB{constructor(){this.default="out"}load(e){e&&(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class WB{constructor(){this.acceleration=0,this.enable=!1}load(e){e&&(e.acceleration!==void 0&&(this.acceleration=ke(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=sn({},e.position)))}}class $B{constructor(){this.angle=new qB,this.attract=new FB,this.center=new GB,this.decay=0,this.distance={},this.direction="none",this.drift=0,this.enable=!1,this.gravity=new YB,this.path=new XB,this.outModes=new KB,this.random=!1,this.size=!1,this.speed=2,this.spin=new WB,this.straight=!1,this.trail=new ZB,this.vibrate=!1,this.warp=!1}get bounce(){return this.collisions}set bounce(e){this.collisions=e}get collisions(){return!1}set collisions(e){}get noise(){return this.path}set noise(e){this.path=e}get outMode(){return this.outModes.default}set outMode(e){this.outModes.default=e}get out_mode(){return this.outMode}set out_mode(e){this.outMode=e}load(e){if(!e)return;this.angle.load(xi(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=ke(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=xi(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=ke(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const n=e.outModes??e.outMode??e.out_mode;n!==void 0&&(Va(n)?this.outModes.load(n):this.outModes.load({default:n})),this.path.load(e.path??e.noise),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=ke(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class JB extends L6{constructor(){super(),this.destroy="none",this.speed=2}get opacity_min(){return this.minimumValue}set opacity_min(e){this.minimumValue=e}load(e){(e==null?void 0:e.opacity_min)!==void 0&&e.minimumValue===void 0&&(e.minimumValue=e.opacity_min),super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class eI extends ar{constructor(){super(),this.animation=new JB,this.random.minimumValue=.1,this.value=1}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(!e)return;super.load(e);const n=e.animation??e.anim;n!==void 0&&(this.animation.load(n),this.value=ke(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class tI{constructor(){this.enable=!1,this.width=1920,this.height=1080}get area(){return this.width}set area(e){this.width=e}get factor(){return this.height}set factor(e){this.height=e}get value_area(){return this.area}set value_area(e){this.area=e}load(e){if(!e)return;e.enable!==void 0&&(this.enable=e.enable);const n=e.width??e.area??e.value_area;n!==void 0&&(this.width=n);const i=e.height??e.factor;i!==void 0&&(this.height=i)}}class nI{constructor(){this.density=new tI,this.limit=0,this.value=0}get max(){return this.limit}set max(e){this.limit=e}load(e){if(!e)return;this.density.load(e.density);const n=e.limit??e.max;n!==void 0&&(this.limit=n),e.value!==void 0&&(this.value=e.value)}}class iI{constructor(){this.blur=0,this.color=new Xt,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){e&&(e.blur!==void 0&&(this.blur=e.blur),this.color=Xt.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}const B0="character",I0="char",H0="image",V0="images",U0="polygon",q0="star";class sI{constructor(){this.loadShape=(e,n,i,r)=>{if(!e)return;const o=qn(e),c=o?[]:{},u=o!==qn(this.options[n]),d=o!==qn(this.options[i]);u&&(this.options[n]=c),d&&r&&(this.options[i]=c),this.options[n]=sn(this.options[n]??c,e),(!this.options[i]||r)&&(this.options[i]=sn(this.options[i]??c,e))},this.close=!0,this.fill=!0,this.options={},this.type="circle"}get character(){return this.options[B0]??this.options[I0]}set character(e){this.options[I0]=this.options[B0]=e}get custom(){return this.options}set custom(e){this.options=e}get image(){return this.options[H0]??this.options[V0]}set image(e){this.options[V0]=this.options[H0]=e}get images(){return this.image}set images(e){this.image=e}get polygon(){return this.options[U0]??this.options[q0]}set polygon(e){this.options[q0]=this.options[U0]=e}get stroke(){return[]}set stroke(e){}load(e){if(!e)return;const n=e.options??e.custom;if(n!==void 0)for(const i in n){const r=n[i];r&&(this.options[i]=sn(this.options[i]??{},r))}this.loadShape(e.character,B0,I0,!0),this.loadShape(e.polygon,U0,q0,!1),this.loadShape(e.image??e.images,H0,V0,!0),e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class rI extends L6{constructor(){super(),this.destroy="none",this.speed=5}get size_min(){return this.minimumValue}set size_min(e){this.minimumValue=e}load(e){(e==null?void 0:e.size_min)!==void 0&&e.minimumValue===void 0&&(e.minimumValue=e.size_min),super.load(e),e&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class aI extends ar{constructor(){super(),this.animation=new rI,this.random.minimumValue=1,this.value=3}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(super.load(e),!e)return;const n=e.animation??e.anim;n!==void 0&&(this.animation.load(n),this.value=ke(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class e5{constructor(){this.width=0}load(e){e&&(e.color!==void 0&&(this.color=nc.create(this.color,e.color)),e.width!==void 0&&(this.width=ke(e.width)),e.opacity!==void 0&&(this.opacity=ke(e.opacity)))}}class oI extends ar{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),e&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class lI{constructor(e,n){this._engine=e,this._container=n,this.bounce=new D6,this.collisions=new UB,this.color=new nc,this.color.value="#fff",this.groups={},this.move=new $B,this.number=new nI,this.opacity=new eI,this.reduceDuplicates=!1,this.shadow=new iI,this.shape=new sI,this.size=new aI,this.stroke=new e5,this.zIndex=new oI}load(e){var r,o,c;if(!e)return;if(this.bounce.load(e.bounce),this.color.load(nc.create(this.color,e.color)),e.groups!==void 0)for(const u in e.groups){const d=e.groups[u];d!==void 0&&(this.groups[u]=sn(this.groups[u]??{},d))}this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex);const n=((r=e.move)==null?void 0:r.collisions)??((o=e.move)==null?void 0:o.bounce);n!==void 0&&(this.collisions.enable=n),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=sn({},e.interactivity));const i=e.stroke??((c=e.shape)==null?void 0:c.stroke);if(i&&(this.stroke=It(i,u=>{const d=new e5;return d.load(u),d})),this._container){const u=this._engine.plugins.updaters.get(this._container);if(u)for(const h of u)h.loadOptions&&h.loadOptions(this,e);const d=this._engine.plugins.interactors.get(this._container);if(d)for(const h of d)h.loadParticlesOptions&&h.loadParticlesOptions(this,e)}}}function _6(t,...e){for(const n of e)t.load(n)}function z6(t,e,...n){const i=new lI(t,e);return _6(i,...n),i}class cI{constructor(e,n){this._findDefaultTheme=i=>this.themes.find(r=>r.default.value&&r.default.mode===i)??this.themes.find(r=>r.default.value&&r.default.mode==="any"),this._importPreset=i=>{this.load(this._engine.plugins.getPreset(i))},this._engine=e,this._container=n,this.autoPlay=!0,this.background=new TB,this.backgroundMask=new CB,this.defaultThemes={},this.delay=0,this.fullScreen=new AB,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new R6(e,n),this.manualParticles=[],this.particles=z6(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}get backgroundMode(){return this.fullScreen}set backgroundMode(e){this.fullScreen.load(e)}get fps_limit(){return this.fpsLimit}set fps_limit(e){this.fpsLimit=e}get retina_detect(){return this.detectRetina}set retina_detect(e){this.detectRetina=e}load(e){var c,u;if(!e)return;e.preset!==void 0&&It(e.preset,d=>this._importPreset(d)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.delay!==void 0&&(this.delay=ke(e.delay));const n=e.detectRetina??e.retina_detect;n!==void 0&&(this.detectRetina=n),e.duration!==void 0&&(this.duration=ke(e.duration));const i=e.fpsLimit??e.fps_limit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);const r=e.fullScreen??e.backgroundMode;er(r)?this.fullScreen.enable=r:this.fullScreen.load(r),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(d=>{const h=new _B;return h.load(d),h})),this.particles.load(e.particles),this.style=sn(this.style,e.style),this._engine.plugins.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);const o=this._engine.plugins.interactors.get(this._container);if(o)for(const d of o)d.loadOptions&&d.loadOptions(this,e);if(e.responsive!==void 0)for(const d of e.responsive){const h=new zB;h.load(d),this.responsive.push(h)}if(this.responsive.sort((d,h)=>d.maxWidth-h.maxWidth),e.themes!==void 0)for(const d of e.themes){const h=this.themes.find(p=>p.name===d.name);if(h)h.load(d);else{const p=new PB;p.load(d),this.themes.push(p)}}this.defaultThemes.dark=(c=this._findDefaultTheme("dark"))==null?void 0:c.name,this.defaultThemes.light=(u=this._findDefaultTheme("light"))==null?void 0:u.name}setResponsive(e,n,i){this.load(i);const r=this.responsive.find(o=>o.mode==="screen"&&screen?o.maxWidth>screen.availWidth:o.maxWidth*n>e);return this.load(r==null?void 0:r.options),r==null?void 0:r.maxWidth}setTheme(e){if(e){const n=this.themes.find(i=>i.name===e);n&&this.load(n.options)}else{const n=v6("(prefers-color-scheme: dark)"),i=n&&n.matches,r=this._findDefaultTheme(i?"dark":"light");r&&this.load(r.options)}}}class uI{constructor(e,n){this.container=n,this._engine=e,this._interactors=e.plugins.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[]}async externalInteract(e){for(const n of this._externalInteractors)n.isEnabled()&&await n.interact(e)}handleClickMode(e){for(const n of this._externalInteractors)n.handleClickMode&&n.handleClickMode(e)}init(){this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case"external":this._externalInteractors.push(e);break;case"particles":this._particleInteractors.push(e);break}e.init()}}async particlesInteract(e,n){for(const i of this._externalInteractors)i.clear(e,n);for(const i of this._particleInteractors)i.isEnabled(e)&&await i.interact(e,n)}async reset(e){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(e);for(const n of this._particleInteractors)n.isEnabled(e)&&n.reset(e)}}const t5=t=>{if(!bt(t.outMode,t.checkModes))return;const e=t.radius*2;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)};class fI{constructor(e,n,i,r,o,c){this.container=i,this._calcPosition=(u,d,h,p=0)=>{for(const[,M]of u.plugins){const A=M.particlePosition!==void 0?M.particlePosition(d,this):void 0;if(A)return In.create(A.x,A.y,h)}const g=u.canvas.size,y=WN({size:g,position:d}),x=In.create(y.x,y.y,h),b=this.getRadius(),S=this.options.move.outModes,C=M=>{t5({outMode:M,checkModes:["bounce","bounce-horizontal"],coord:x.x,maxCoord:u.canvas.size.width,setCb:A=>x.x+=A,radius:b})},T=M=>{t5({outMode:M,checkModes:["bounce","bounce-vertical"],coord:x.y,maxCoord:u.canvas.size.height,setCb:A=>x.y+=A,radius:b})};return C(S.left??S.default),C(S.right??S.default),T(S.top??S.default),T(S.bottom??S.default),this._checkOverlap(x,p)?this._calcPosition(u,void 0,h,p+1):x},this._calculateVelocity=()=>{const u=KN(this.direction),d=u.copy(),h=this.options.move;if(h.direction==="inside"||h.direction==="outside")return d;const p=Math.PI/180*xe(h.angle.value),g=Math.PI/180*xe(h.angle.offset),y={left:g-p/2,right:g+p/2};return h.straight||(d.angle+=An(ke(y.left,y.right))),h.random&&typeof h.speed=="number"&&(d.length*=st()),d},this._checkOverlap=(u,d=0)=>{const h=this.options.collisions,p=this.getRadius();if(!h.enable)return!1;const g=h.overlap;if(g.enable)return!1;const y=g.retries;if(y>=0&&d>y)throw new Error(`${ai} particle is overlapping and can't be placed`);return!!this.container.particles.find(x=>Un(u,x.position)<p+x.getRadius())},this._getRollColor=u=>{if(!u||!this.roll||!this.backColor&&!this.roll.alter)return u;const d=this.roll.horizontal&&this.roll.vertical?2:1,h=this.roll.horizontal?Math.PI/2:0;return Math.floor(((this.roll.angle??0)+h)/(Math.PI/d))%2?this.backColor?this.backColor:this.roll.alter?xB(u,this.roll.alter.type,this.roll.alter.value):u:u},this._initPosition=u=>{const d=this.container,h=xe(this.options.zIndex.value);this.position=this._calcPosition(d,u,Si(h,0,d.zLayers)),this.initialPosition=this.position.copy();const p=d.canvas.size;switch(this.moveCenter={...T6(this.options.move.center,p),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=ZN(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside";break}this.offset=Bt.origin},this._loadShapeData=(u,d)=>{const h=u.options[this.shape];if(h)return sn({close:u.close,fill:u.fill},ys(h,this.id,d))},this._engine=e,this.init(n,r,o,c)}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,i=this.pathGenerator;for(const[,r]of n.plugins)r.particleDestroyed&&r.particleDestroyed(this,e);for(const r of n.particles.updaters)r.particleDestroyed&&r.particleDestroyed(this,e);i&&i.reset(this)}draw(e){const n=this.container;for(const[,i]of n.plugins)n.canvas.drawParticlePlugin(i,this,e);n.canvas.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??Ww(this.color))}getMass(){return this.getRadius()**2*Math.PI/2}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??Ww(this.strokeColor))}init(e,n,i,r){const o=this.container,c=this._engine;this.id=e,this.group=r,this.fill=!0,this.pathRotation=!1,this.close=!0,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const u=o.retina.pixelRatio,d=o.actualOptions,h=z6(this._engine,o,d.particles),p=h.shape.type,{reduceDuplicates:g}=h;this.shape=ys(p,this.id,g);const y=h.shape;if(i&&i.shape&&i.shape.type){const A=i.shape.type,R=ys(A,this.id,g);R&&(this.shape=R,y.load(i.shape))}this.shapeData=this._loadShapeData(y,g),h.load(i);const x=this.shapeData;x&&h.load(x.particles);const b=new R6(c,o);b.load(o.actualOptions.interactivity),b.load(h.interactivity),this.interactivity=b,this.fill=(x==null?void 0:x.fill)??h.shape.fill,this.close=(x==null?void 0:x.close)??h.shape.close,this.options=h;const S=this.options.move.path;this.pathDelay=qr(S.delay)*1e3,S.generator&&(this.pathGenerator=this._engine.plugins.getPathGenerator(S.generator),this.pathGenerator&&o.addPath(S.generator,this.pathGenerator)&&this.pathGenerator.init(o)),o.retina.initParticle(this),this.size=S6(this.options.size,u),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-xe(this.options.move.decay);const C=o.particles;C.needsSort=C.needsSort||C.lastZIndex<this.position.z,C.lastZIndex=this.position.z,this.zIndexFactor=this.position.z/o.zLayers,this.sides=24;let T=o.drawers.get(this.shape);T||(T=this._engine.plugins.getShapeDrawer(this.shape),T&&o.drawers.set(this.shape,T)),T&&T.loadShape&&T.loadShape(this);const M=T==null?void 0:T.getSidesCount;M&&(this.sides=M(this)),this.spawning=!1,this.shadowColor=bi(this.options.shadow.color);for(const A of o.particles.updaters)A.init(this);for(const A of o.particles.movers)A.init&&A.init(this);T&&T.particleInit&&T.particleInit(o,this);for(const[,A]of o.plugins)A.particleCreated&&A.particleCreated(this)}isInsideCanvas(){const e=this.getRadius(),n=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=n.height+e&&i.x<=n.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset&&e.reset(this)}}class dI{constructor(e,n){this.position=e,this.particle=n}}class j6{constructor(e,n){this.position={x:e,y:n}}}class Ti extends j6{constructor(e,n,i,r){super(e,n),this.size={height:r,width:i}}contains(e){const n=this.size.width,i=this.size.height,r=this.position;return e.x>=r.x&&e.x<=r.x+n&&e.y>=r.y&&e.y<=r.y+i}intersects(e){e instanceof rn&&e.intersects(this);const n=this.size.width,i=this.size.height,r=this.position,o=e.position,c=e instanceof Ti?e.size:{width:0,height:0},u=c.width,d=c.height;return o.x<r.x+n&&o.x+u>r.x&&o.y<r.y+i&&o.y+d>r.y}}class rn extends j6{constructor(e,n,i){super(e,n),this.radius=i}contains(e){return Un(e,this.position)<=this.radius}intersects(e){const n=this.position,i=e.position,r={x:Math.abs(i.x-n.x),y:Math.abs(i.y-n.y)},o=this.radius;if(e instanceof rn){const c=o+e.radius,u=Math.sqrt(r.x**2+r.y**2);return c>u}else if(e instanceof Ti){const{width:c,height:u}=e.size;return Math.pow(r.x-c,2)+Math.pow(r.y-u,2)<=o**2||r.x<=o+c&&r.y<=o+u||r.x<=c||r.y<=u}return!1}}class Uf{constructor(e,n){this.rectangle=e,this.capacity=n,this._subdivide=()=>{const{x:i,y:r}=this.rectangle.position,{width:o,height:c}=this.rectangle.size,{capacity:u}=this;for(let d=0;d<4;d++)this._subs.push(new Uf(new Ti(i+o/2*(d%2),r+c/2*(Math.round(d/2)-d%2),o/2,c/2),u));this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(e))):!1}query(e,n,i){const r=i||[];if(!e.intersects(this.rectangle))return[];for(const o of this._points)!e.contains(o.position)&&Un(e.position,o.position)>o.particle.getRadius()&&(!n||n(o.particle))||r.push(o.particle);if(this._divided)for(const o of this._subs)o.query(e,n,r);return r}queryCircle(e,n,i){return this.query(new rn(e.x,e.y,n),i)}queryRectangle(e,n,i){return this.query(new Ti(e.x,e.y,n.width,n.height),i)}}const n5=4,i5=t=>new Ti(-t.width/4,-t.height/4,t.width*3/2,t.height*3/2);let hI=class{constructor(e,n){this._applyDensity=(r,o,c)=>{var x;if(!((x=r.number.density)!=null&&x.enable))return;const u=r.number,d=this._initDensityFactor(u.density),h=u.value,p=u.limit>0?u.limit:h,g=Math.min(h,p)*d+o,y=Math.min(this.count,this.filter(b=>b.group===c).length);this.limit=u.limit*d,y<g?this.push(Math.abs(g-y),void 0,r,c):y>g&&this.removeQuantity(y-g,c)},this._initDensityFactor=r=>{const o=this._container;if(!o.canvas.element||!r.enable)return 1;const c=o.canvas.element,u=o.retina.pixelRatio;return c.width*c.height/(r.factor*u**2*r.area)},this._pushParticle=(r,o,c,u)=>{try{let d=this.pool.pop();d?d.init(this._nextId,r,o,c):d=new fI(this._engine,this._nextId,this._container,r,o,c);let h=!0;return u&&(h=u(d)),h?(this._array.push(d),this._zArray.push(d),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:d}}),d):void 0}catch(d){Fr().warning(`${ai} adding particle: ${d}`);return}},this._removeParticle=(r,o,c)=>{const u=this._array[r];if(!u||u.group!==o)return!1;u.destroy(c);const d=this._zArray.indexOf(u);return this._array.splice(r,1),this._zArray.splice(d,1),this.pool.push(u),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:u}}),!0},this._engine=e,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this.pool=[],this.limit=0,this.needsSort=!1,this.lastZIndex=0,this._interactionManager=new uI(e,n);const i=n.canvas.size;this.quadTree=new Uf(i5(i),n5),this.movers=this._engine.plugins.getMovers(n,!0),this.updaters=this._engine.plugins.getUpdaters(n,!0)}get count(){return this._array.length}addManualParticles(){const e=this._container,n=e.actualOptions;for(const i of n.manualParticles)this.addParticle(i.position?T6(i.position,e.canvas.size):void 0,i.options)}addParticle(e,n,i,r){const o=this._container,c=o.actualOptions,u=c.particles.number.limit;if(u>0){const d=this.count+1-u;d>0&&this.removeQuantity(d)}return this._pushParticle(e,n,i,r)}clear(){this._array=[],this._zArray=[]}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}async draw(e){const n=this._container;n.canvas.clear(),await this.update(e);for(const[,i]of n.plugins)n.canvas.drawPlugin(i,e);for(const i of this._zArray)i.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}handleClickMode(e){this._interactionManager.handleClickMode(e)}init(){var r;const e=this._container,n=e.actualOptions;this.lastZIndex=0,this.needsSort=!1;let i=!1;this.updaters=this._engine.plugins.getUpdaters(e,!0),this._interactionManager.init();for(const[,o]of e.plugins)if(o.particlesInitialization!==void 0&&(i=o.particlesInitialization()),i)break;this._interactionManager.init();for(const[,o]of e.pathGenerators)o.init(e);if(this.addManualParticles(),!i){for(const o in n.particles.groups){const c=n.particles.groups[o];for(let u=this.count,d=0;d<((r=c.number)==null?void 0:r.value)&&u<n.particles.number.value;u++,d++)this.addParticle(void 0,c,o)}for(let o=this.count;o<n.particles.number.value;o++)this.addParticle()}}push(e,n,i,r){this.pushing=!0;for(let o=0;o<e;o++)this.addParticle(n==null?void 0:n.position,i,r);this.pushing=!1}async redraw(){this.clear(),this.init(),await this.draw({value:0,factor:0})}remove(e,n,i){this.removeAt(this._array.indexOf(e),void 0,n,i)}removeAt(e,n=1,i,r){if(e<0||e>this.count)return;let o=0;for(let c=e;o<n&&c<this.count;c++)this._removeParticle(c--,i,r)&&o++}removeQuantity(e,n){this.removeAt(0,e,n)}setDensity(){const e=this._container.actualOptions,n=e.particles.groups;for(const i in n)this._applyDensity(n[i],0,i);this._applyDensity(e.particles,e.manualParticles.length)}async update(e){const n=this._container,i=new Set;this.quadTree=new Uf(i5(n.canvas.size),n5);for(const[,r]of n.pathGenerators)r.update();for(const[,r]of n.plugins)r.update&&r.update(e);for(const r of this._array){const o=n.canvas.resizeFactor;o&&!r.ignoresResizeRatio&&(r.position.x*=o.width,r.position.y*=o.height,r.initialPosition.x*=o.width,r.initialPosition.y*=o.height),r.ignoresResizeRatio=!1,await this._interactionManager.reset(r);for(const[,c]of this._container.plugins){if(r.destroyed)break;c.particleUpdate&&c.particleUpdate(r,e)}for(const c of this.movers)c.isEnabled(r)&&c.move(r,e);if(r.destroyed){i.add(r);continue}this.quadTree.insert(new dI(r.getPosition(),r))}if(i.size){const r=o=>!i.has(o);this._array=this.filter(r),this._zArray=this._zArray.filter(r),this.pool.push(...i)}await this._interactionManager.externalInteract(e);for(const r of this._array){for(const o of this.updaters)o.update(r,e);!r.destroyed&&!r.spawning&&await this._interactionManager.particlesInteract(r,e)}if(delete n.canvas.resizeFactor,this.needsSort){const r=this._zArray;r.sort((o,c)=>c.position.z-o.position.z||o.id-c.id),this.lastZIndex=r[r.length-1].position.z,this.needsSort=!1}}};class pI{constructor(e){this.container=e,this.pixelRatio=1,this.reduceFactor=1}init(){const e=this.container,n=e.actualOptions;this.pixelRatio=!n.detectRetina||Ja()?1:window.devicePixelRatio,this.reduceFactor=1;const i=this.pixelRatio;if(e.canvas.element){const c=e.canvas.element;e.canvas.size.width=c.offsetWidth*i,e.canvas.size.height=c.offsetHeight*i}const r=n.particles,o=r.move;this.attractDistance=xe(o.attract.distance)*i,this.maxSpeed=xe(o.gravity.maxSpeed)*i,this.sizeAnimationSpeed=xe(r.size.animation.speed)*i}initParticle(e){const n=e.options,i=this.pixelRatio,r=n.move,o=r.distance,c=e.retina;c.attractDistance=xe(r.attract.distance)*i,c.moveDrift=xe(r.drift)*i,c.moveSpeed=xe(r.speed)*i,c.sizeAnimationSpeed=xe(n.size.animation.speed)*i;const u=c.maxDistance;u.horizontal=o.horizontal!==void 0?o.horizontal*i:void 0,u.vertical=o.vertical!==void 0?o.vertical*i:void 0,c.maxSpeed=xe(r.gravity.maxSpeed)*i}}function ct(t){return t&&!t.destroyed}function mI(t,e=60,n=!1){return{value:t,factor:n?60/e:60*t/1e3}}function Ra(t,e,...n){const i=new cI(t,e);return _6(i,...n),i}const gI="default",s5={generate:t=>t.velocity,init:()=>{},update:()=>{},reset:()=>{}};class yI{constructor(e,n,i){this.id=n,this._intersectionManager=r=>{if(!(!ct(this)||!this.actualOptions.pauseOnOutsideViewport))for(const o of r)o.target===this.interactivity.element&&(o.isIntersecting?this.play:this.pause)()},this._nextFrame=async r=>{try{if(!this.smooth&&this.lastFrameTime!==void 0&&r<this.lastFrameTime+1e3/this.fpsLimit){this.draw(!1);return}this.lastFrameTime??(this.lastFrameTime=r);const o=mI(r-this.lastFrameTime,this.fpsLimit,this.smooth);if(this.addLifeTime(o.value),this.lastFrameTime=r,o.value>1e3){this.draw(!1);return}if(await this.particles.draw(o),!this.alive()){this.destroy();return}this.getAnimationStatus()&&this.draw(!1)}catch(o){Fr().error(`${ai} in animation loop`,o)}},this._engine=e,this.fpsLimit=120,this.smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this.lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new pI(this),this.canvas=new wB(this),this.particles=new hI(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.drawers=new Map,this._options=Ra(this._engine,this),this.actualOptions=Ra(this._engine,this),this._eventListeners=new SB(this),typeof IntersectionObserver<"u"&&IntersectionObserver&&(this._intersectionObserver=new IntersectionObserver(r=>this._intersectionManager(r))),this._engine.dispatchEvent("containerBuilt",{container:this})}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!ct(this))return;const n=this.interactivity.element;if(!n)return;const i=(g,y,x)=>{if(!ct(this))return;const b=this.retina.pixelRatio,S={x:y.x*b,y:y.y*b},C=this.particles.quadTree.queryCircle(S,x*b);e(g,C)},r=g=>{if(!ct(this))return;const y=g,x={x:y.offsetX||y.clientX,y:y.offsetY||y.clientY};i(g,x,1)},o=()=>{ct(this)&&(h=!0,p=!1)},c=()=>{ct(this)&&(p=!0)},u=g=>{if(ct(this)){if(h&&!p){const y=g;let x=y.touches[y.touches.length-1];if(!x&&(x=y.changedTouches[y.changedTouches.length-1],!x))return;const b=this.canvas.element,S=b?b.getBoundingClientRect():void 0,C={x:x.clientX-(S?S.left:0),y:x.clientY-(S?S.top:0)};i(g,C,Math.max(x.radiusX,x.radiusY))}h=!1,p=!1}},d=()=>{ct(this)&&(h=!1,p=!1)};let h=!1,p=!1;n.addEventListener("click",r),n.addEventListener("touchstart",o),n.addEventListener("touchmove",c),n.addEventListener("touchend",u),n.addEventListener("touchcancel",d)}addLifeTime(e){this._lifeTime+=e}addPath(e,n,i=!1){return!ct(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,n??s5),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!ct(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,i]of this.drawers)i.destroy&&i.destroy(this);for(const i of this.drawers.keys())this.drawers.delete(i);this._engine.plugins.destroy(this),this.destroyed=!0;const e=this._engine.dom(),n=e.findIndex(i=>i===this);n>=0&&e.splice(n,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(e){if(!ct(this))return;let n=e;this._drawAnimationFrame=requestAnimationFrame(async i=>{n&&(this.lastFrameTime=void 0,n=!1),await this._nextFrame(i)})}async export(e,n={}){for(const[,i]of this.plugins){if(!i.export)continue;const r=await i.export(e,n);if(r.supported)return r.blob}Fr().error(`${ai} - Export plugin with type ${e} not found`)}getAnimationStatus(){return!this._paused&&!this.pageHidden&&ct(this)}handleClickMode(e){if(ct(this)){this.particles.handleClickMode(e);for(const[,n]of this.plugins)n.handleClickMode&&n.handleClickMode(e)}}async init(){if(!ct(this))return;const e=this._engine.plugins.getSupportedShapes();for(const i of e){const r=this._engine.plugins.getShapeDrawer(i);r&&this.drawers.set(i,r)}this._options=Ra(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Ra(this._engine,this,this._options);const n=this._engine.plugins.getAvailablePlugins(this);for(const[i,r]of n)this.plugins.set(i,r);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=xe(this.actualOptions.duration)*1e3,this._delay=xe(this.actualOptions.delay)*1e3,this._lifeTime=0,this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this.smooth=this.actualOptions.smooth;for(const[,i]of this.drawers)i.init&&await i.init(this);for(const[,i]of this.plugins)i.init&&await i.init();this._engine.dispatchEvent("containerInit",{container:this}),this.particles.init(),this.particles.setDensity();for(const[,i]of this.plugins)i.particlesSetup&&i.particlesSetup();this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(e){ct(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(ct(this)&&(this._drawAnimationFrame!==void 0&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,e]of this.plugins)e.pause&&e.pause();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(e){if(!ct(this))return;const n=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),n)for(const[,i]of this.plugins)i.play&&i.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(n||!1)}async refresh(){if(ct(this))return this.stop(),this.start()}async reset(){if(ct(this))return this._initialSourceOptions=void 0,this._options=Ra(this._engine,this),this.actualOptions=Ra(this._engine,this,this._options),this.refresh()}setNoise(e,n,i){ct(this)&&this.setPath(e,n,i)}setPath(e,n,i){if(!e||!ct(this))return;const r={...s5};if(E6(e))r.generate=e,n&&(r.init=n),i&&(r.update=i);else{const o=r;r.generate=e.generate||o.generate,r.init=e.init||o.init,r.update=e.update||o.update}this.addPath(gI,r,!0)}async start(){!ct(this)||this.started||(await this.init(),this.started=!0,await new Promise(e=>{this._delayTimeout=setTimeout(async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,n]of this.plugins)n.start&&await n.start();this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),e()},this._delay)}))}stop(){if(!(!ct(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,e]of this.plugins)e.stop&&e.stop();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this.responsiveMaxWidth===e?!1:(this.responsiveMaxWidth=e,!0)}}class vI{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){const i=this._listeners.get(e);i&&i.forEach(r=>r(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const r=i.length,o=i.indexOf(n);o<0||(r===1?this._listeners.delete(e):i.splice(o,1))}}function F0(t,e,n,i=!1){let r=e.get(t);return(!r||i)&&(r=[...n.values()].map(o=>o(t)),e.set(t,r)),r}class xI{constructor(e){this._engine=e,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.drawers=new Map,this.pathGenerators=new Map}addInteractor(e,n){this._initializers.interactors.set(e,n)}addParticleMover(e,n){this._initializers.movers.set(e,n)}addParticleUpdater(e,n){this._initializers.updaters.set(e,n)}addPathGenerator(e,n){!this.getPathGenerator(e)&&this.pathGenerators.set(e,n)}addPlugin(e){!this.getPlugin(e.id)&&this.plugins.push(e)}addPreset(e,n,i=!1){(i||!this.getPreset(e))&&this.presets.set(e,n)}addShapeDrawer(e,n){It(e,i=>{!this.getShapeDrawer(i)&&this.drawers.set(i,n)})}destroy(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,i.getPlugin(e));return n}getInteractors(e,n=!1){return F0(e,this.interactors,this._initializers.interactors,n)}getMovers(e,n=!1){return F0(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.drawers.get(e)}getSupportedShapes(){return this.drawers.keys()}getUpdaters(e,n=!1){return F0(e,this.updaters,this._initializers.updaters,n)}loadOptions(e,n){for(const i of this.plugins)i.loadOptions(e,n)}loadParticlesOptions(e,n,...i){const r=this.updaters.get(e);if(r)for(const o of r)o.loadOptions&&o.loadOptions(n,...i)}}async function bI(t){const e=ys(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?n.json():(Fr().error(`${ai} ${n.status} while retrieving config file`),t.fallback)}function wI(t){return!t.id&&!t.element&&!t.url&&!t.options}function SI(t){return!wI(t)}class TI{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new vI,this._initialized=!1,this.plugins=new xI(this)}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get version(){return"2.12.0"}addConfig(e,n){vi(e)?n&&(n.name=e,this._configs.set(e,n)):this._configs.set(e.name??"default",e)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this.plugins.addInteractor(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this.plugins.addParticleMover(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this.plugins.addParticleUpdater(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.plugins.addPathGenerator(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.plugins.addPlugin(e),await this.refresh(n)}async addPreset(e,n,i=!1,r=!0){this.plugins.addPreset(e,n,i),await this.refresh(r)}async addShape(e,n,i,r,o,c=!0){let u,d=c,h,p,g;er(i)?(d=i,h=void 0):h=i,er(r)?(d=r,p=void 0):p=r,er(o)?(d=o,g=void 0):g=o,E6(n)?u={afterEffect:p,destroy:g,draw:n,init:h}:u=n,this.plugins.addShapeDrawer(e,u),await this.refresh(d)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this._domArray}domItem(e){const n=this.dom(),i=n[e];if(!i||i.destroyed){n.splice(e,1);return}return i}init(){this._initialized||(this._initialized=!0)}async load(e,n){return this.loadFromArray(e,n)}async loadFromArray(e,n,i){let r;return SI(e)?r=e:(r={},vi(e)?r.id=e:r.options=e,xi(n)?r.index=n:r.options=n??r.options,r.index=i??r.index),this._loadParams(r)}async loadJSON(e,n,i){let r,o;return xi(n)||n===void 0?r=e:(o=e,r=n),this._loadParams({id:o,url:r,index:i})}async refresh(e=!0){e&&this.dom().forEach(n=>n.refresh())}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}async set(e,n,i,r){const o={index:r};return vi(e)?o.id=e:o.element=e,n instanceof HTMLElement?o.element=n:o.options=n,xi(i)?o.index=i:o.options=i??o.options,this._loadParams(o)}async setJSON(e,n,i,r){const o={};return e instanceof HTMLElement?(o.element=e,o.url=n,o.index=i):(o.id=e,o.element=n,o.url=i,o.index=r),this._loadParams(o)}setOnClickHandler(e){const n=this.dom();if(!n.length)throw new Error(`${ai} can only set click handlers after calling tsParticles.load()`);for(const i of n)i.addClickHandler(e)}async _loadParams(e){const n=e.id??`tsparticles${Math.floor(st()*1e4)}`,{index:i,url:r}=e,o=r?await bI({fallback:e.options,url:r,index:i}):e.options;let c=e.element??document.getElementById(n);c||(c=document.createElement("div"),c.id=n,document.body.append(c));const u=ys(o,i),d=this.dom(),h=d.findIndex(y=>y.id===n);if(h>=0){const y=this.domItem(h);y&&!y.destroyed&&(y.destroy(),d.splice(h,1))}let p;if(c.tagName.toLowerCase()==="canvas")p=c,p.dataset[Nl]="false";else{const y=c.getElementsByTagName("canvas");y.length?(p=y[0],p.dataset[Nl]="false"):(p=document.createElement("canvas"),p.dataset[Nl]="true",c.appendChild(p))}p.style.width||(p.style.width="100%"),p.style.height||(p.style.height="100%");const g=new yI(this,n,u);return h>=0?d.splice(h,0,g):d.push(g),g.canvas.loadCanvas(p),await g.start(),g}}class EI{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return eo(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return eo({h:xe(i.h),l:xe(i.l),s:xe(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e);return i?uB({a:i.length>4?y6(i[5]):1,h:parseInt(i[1],10),l:parseInt(i[3],10),s:parseInt(i[2],10)}):void 0}}class CI{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:xe(i.r),g:xe(i.g),b:xe(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e);return i?{a:i.length>4?y6(i[5]):1,b:parseInt(i[3],10),g:parseInt(i[2],10),r:parseInt(i[1],10)}:void 0}}function AI(){const t=new CI,e=new EI;Kw(t),Kw(e);const n=new TI;return n.init(),n}class Fi{constructor(e){this.container=e,this.type="external"}}class d2{constructor(e){this.container=e,this.type="particles"}}const qf=AI();Ja()||(window.tsParticles=qf);const Ua=t=>typeof t=="object"&&t!==null;function Ff(t,e,n=()=>!1){if(!Ua(t)||!Ua(e))return t===e;const i=Object.keys(t).filter(o=>!n(o)),r=Object.keys(e).filter(o=>!n(o));if(i.length!==r.length)return!1;for(const o of i){const c=t[o],u=e[o];if(Ua(c)&&Ua(u)){if(c===e&&u===t)continue;if(!Ff(c,u,n))return!1}else if(Array.isArray(c)&&Array.isArray(u)){if(!P6(c,u,n))return!1}else if(c!==u)return!1}return!0}function P6(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++){const r=t[i],o=e[i];if(Array.isArray(r)&&Array.isArray(o)){if(!P6(r,o,n))return!1}else if(Ua(r)&&Ua(o)){if(!Ff(r,o,n))return!1}else if(r!==o)return!1}return!0}const N6="tsparticles";let B6=class I6 extends D.Component{constructor(e){super(e),this.state={init:!1,library:void 0}}destroy(){this.state.library&&(this.state.library.destroy(),this.setState({library:void 0}))}shouldComponentUpdate(e){const n=e.options??e.params,i=this.props.options??this.props.params;return e.url!==this.props.url||e.id!==this.props.id||e.canvasClassName!==this.props.canvasClassName||e.className!==this.props.className||e.height!==this.props.height||e.width!==this.props.width||!Ff(e.style,this.props.style)||e.init!==this.props.init||e.loaded!==this.props.loaded||!Ff(n,i,r=>r.startsWith("_"))}componentDidUpdate(){this.refresh()}forceUpdate(){this.refresh().then(()=>{super.forceUpdate()})}componentDidMount(){(async()=>(this.props.init&&await this.props.init(qf),this.setState({init:!0},async()=>{await this.loadParticles()})))()}componentWillUnmount(){this.destroy()}render(){const{width:e,height:n,className:i,canvasClassName:r,id:o}=this.props;return Qe.createElement("div",{className:i,id:o},Qe.createElement("canvas",{className:r,style:{...this.props.style,width:e,height:n}}))}async refresh(){this.destroy(),await this.loadParticles()}async loadParticles(){if(!this.state.init)return;const e=this.props.id??I6.defaultProps.id??N6,n=await qf.load({url:this.props.url,id:e,options:this.props.options??this.props.params});this.props.container&&(this.props.container.current=n),this.setState({library:n}),this.props.loaded&&await this.props.loaded(n)}};B6.defaultProps={width:"100%",height:"100%",options:{},style:{},url:void 0,id:N6};class Gf{static init(e){var o;const n=new Gf,i=e.selector;if(!i)throw new Error("No selector provided");const r=document.querySelector(i);if(!r)throw new Error("No element found for selector");return qf.set(i.replace(".","").replace("!",""),r,{fullScreen:{enable:!1},particles:{color:{value:e.color??"!000000"},links:{color:"random",distance:e.minDistance??120,enable:e.connectParticles??!1},move:{enable:!0,speed:e.speed??.5},number:{value:e.maxParticles??100},size:{value:{min:1,max:e.sizeVariations??3}}},responsive:(o=e.responsive)==null?void 0:o.map(c=>{var u,d,h,p,g;return{maxWidth:c.breakpoint,options:{particles:{color:{value:(u=c.options)==null?void 0:u.color},links:{distance:(d=c.options)==null?void 0:d.minDistance,enable:(h=c.options)==null?void 0:h.connectParticles},number:{value:e.maxParticles},move:{enable:!0,speed:(p=c.options)==null?void 0:p.speed},size:{value:(g=c.options)==null?void 0:g.sizeVariations}}}}})}).then(c=>{n._container=c}),n}destroy(){const e=this._container;e&&e.destroy()}pauseAnimation(){const e=this._container;e&&e.pause()}resumeAnimation(){const e=this._container;e&&e.play()}}const MI=t=>{const e=(i,r)=>t.load(i,r);e.load=(i,r,o)=>{t.loadJSON(i,r).then(c=>{c&&o(c)}).catch(()=>{o(void 0)})},e.setOnClickHandler=i=>{t.setOnClickHandler(i)};const n=t.dom();return{particlesJS:e,pJSDom:n}},OI=t=>{const{particlesJS:e,pJSDom:n}=MI(t);return window.particlesJS=e,window.pJSDom=n,window.Particles=Gf,{particlesJS:e,pJSDom:n,Particles:Gf}};function kI(t){const e=t.initialPosition,{dx:n,dy:i}=fn(e,t.position),r=Math.abs(n),o=Math.abs(i),{maxDistance:c}=t.retina,u=c.horizontal,d=c.vertical;if(!(!u&&!d)){if((u&&r>=u||d&&o>=d)&&!t.misplaced)t.misplaced=!!u&&r>u||!!d&&o>d,u&&(t.velocity.x=t.velocity.y/2-t.velocity.x),d&&(t.velocity.y=t.velocity.x/2-t.velocity.y);else if((!u||r<u)&&(!d||o<d)&&t.misplaced)t.misplaced=!1;else if(t.misplaced){const h=t.position,p=t.velocity;u&&(h.x<e.x&&p.x<0||h.x>e.x&&p.x>0)&&(p.x*=-st()),d&&(h.y<e.y&&p.y<0||h.y>e.y&&p.y>0)&&(p.y*=-st())}}}function RI(t,e,n,i,r,o){DI(t,o);const c=t.gravity,u=c!=null&&c.enable&&c.inverse?-1:1;r&&n&&(t.velocity.x+=r*o.factor/(60*n)),c!=null&&c.enable&&n&&(t.velocity.y+=u*(c.acceleration*o.factor)/(60*n));const d=t.moveDecay;t.velocity.multTo(d);const h=t.velocity.mult(n);c!=null&&c.enable&&i>0&&(!c.inverse&&h.y>=0&&h.y>=i||c.inverse&&h.y<=0&&h.y<=-i)&&(h.y=u*i,n&&(t.velocity.y=h.y/n));const p=t.options.zIndex,g=(1-t.zIndexFactor)**p.velocityRate;h.multTo(g);const{position:y}=t;y.addTo(h),e.vibrate&&(y.x+=Math.sin(y.x*Math.cos(y.y)),y.y+=Math.cos(y.y*Math.sin(y.x)))}function LI(t,e){const n=t.container;if(!t.spin)return;const i={x:t.spin.direction==="clockwise"?Math.cos:Math.sin,y:t.spin.direction==="clockwise"?Math.sin:Math.cos};t.position.x=t.spin.center.x+t.spin.radius*i.x(t.spin.angle),t.position.y=t.spin.center.y+t.spin.radius*i.y(t.spin.angle),t.spin.radius+=t.spin.acceleration;const r=Math.max(n.canvas.size.width,n.canvas.size.height);t.spin.radius>r/2?(t.spin.radius=r/2,t.spin.acceleration*=-1):t.spin.radius<0&&(t.spin.radius=0,t.spin.acceleration*=-1),t.spin.angle+=e/100*(1-t.spin.radius/r)}function DI(t,e){var c;const n=t.options,i=n.move.path;if(!i.enable)return;if(t.lastPathTime<=t.pathDelay){t.lastPathTime+=e.value;return}const o=(c=t.pathGenerator)==null?void 0:c.generate(t,e);o&&t.velocity.addTo(o),i.clamp&&(t.velocity.x=Si(t.velocity.x,-1,1),t.velocity.y=Si(t.velocity.y,-1,1)),t.lastPathTime-=t.pathDelay}function _I(t){return t.slow.inRange?t.slow.factor:1}const zI=2;class jI{constructor(){this._initSpin=e=>{const n=e.container,i=e.options,r=i.move.spin;if(!r.enable)return;const o=r.position??{x:50,y:50},c={x:o.x/100*n.canvas.size.width,y:o.y/100*n.canvas.size.height},u=e.getPosition(),d=Un(u,c),h=xe(r.acceleration);e.retina.spinAcceleration=h*n.retina.pixelRatio,e.spin={center:c,direction:e.velocity.x>=0?"clockwise":"counter-clockwise",angle:e.velocity.angle,radius:d,acceleration:e.retina.spinAcceleration}}}init(e){const n=e.options,i=n.move.gravity;e.gravity={enable:i.enable,acceleration:xe(i.acceleration),inverse:i.inverse},this._initSpin(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,n){var b,S;const i=e.options,r=i.move;if(!r.enable)return;const o=e.container,c=o.retina.pixelRatio,u=_I(e),d=((b=e.retina).moveSpeed??(b.moveSpeed=xe(r.speed)*c))*o.retina.reduceFactor,h=(S=e.retina).moveDrift??(S.moveDrift=xe(e.options.move.drift)*c),p=Js(i.size.value)*c,g=r.size?e.getRadius()/p:1,y=d*g*u*(n.factor||1)/zI,x=e.retina.maxSpeed??o.retina.maxSpeed;r.spin.enable?LI(e,y):RI(e,r,y,x,h,n),kI(e)}}async function PI(t,e=!0){await t.addMover("base",()=>new jI,e)}class NI{draw(e,n,i){n.circleRange||(n.circleRange={min:0,max:Math.PI*2});const r=n.circleRange;e.arc(0,0,i,r.min,r.max,!1)}getSidesCount(){return 12}particleInit(e,n){const i=n.shapeData,r=(i==null?void 0:i.angle)??{max:360,min:0};n.circleRange=Va(r)?{min:r.min*Math.PI/180,max:r.max*Math.PI/180}:{min:0,max:r*Math.PI/180}}}async function BI(t,e=!0){await t.addShape("circle",new NI,e)}function G0(t,e,n,i,r){if(!e||!n.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0)||(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=t.value),(e.delayTime??0)>0&&e.time<(e.delayTime??0)))return;const o=An(n.offset),c=(e.velocity??0)*t.factor+o*3.6,u=e.decay??1;!r||e.status==="increasing"?(e.value+=c,e.value>i&&(e.loops||(e.loops=0),e.loops++,r&&(e.status="decreasing",e.value-=e.value%i))):(e.value-=c,e.value<0&&(e.loops||(e.loops=0),e.loops++,e.status="increasing",e.value+=e.value)),e.velocity&&u!==1&&(e.velocity*=u),e.value>i&&(e.value%=i)}function II(t,e){const{h:n,s:i,l:r}=t.options.color.animation,{color:o}=t;if(!o)return;const{h:c,s:u,l:d}=o;c&&G0(e,c,n,360,!1),u&&G0(e,u,i,100,!0),d&&G0(e,d,r,100,!0)}class HI{constructor(e){this.container=e}init(e){const n=ec(e.options.color,e.id,e.options.reduceDuplicates);n&&(e.color=k6(n,e.options.color.animation,this.container.retina.reduceFactor))}isEnabled(e){const{h:n,s:i,l:r}=e.options.color.animation,{color:o}=e;return!e.destroyed&&!e.spawning&&((o==null?void 0:o.h.value)!==void 0&&n.enable||(o==null?void 0:o.s.value)!==void 0&&i.enable||(o==null?void 0:o.l.value)!==void 0&&r.enable)}update(e,n){II(e,n)}}async function VI(t,e=!0){await t.addParticleUpdater("color",n=>new HI(n),e)}function UI(t,e,n,i){switch(t.options.opacity.animation.destroy){case"max":e>=i&&t.destroy();break;case"min":e<=n&&t.destroy();break}}function qI(t,e){const n=t.opacity;if(t.destroyed||!(n!=null&&n.enable)||(n.maxLoops??0)>0&&(n.loops??0)>(n.maxLoops??0))return;const i=n.min,r=n.max,o=n.decay??1;if(n.time||(n.time=0),(n.delayTime??0)>0&&n.time<(n.delayTime??0)&&(n.time+=e.value),!((n.delayTime??0)>0&&n.time<(n.delayTime??0))){switch(n.status){case"increasing":n.value>=r?(n.status="decreasing",n.loops||(n.loops=0),n.loops++):n.value+=(n.velocity??0)*e.factor;break;case"decreasing":n.value<=i?(n.status="increasing",n.loops||(n.loops=0),n.loops++):n.value-=(n.velocity??0)*e.factor;break}n.velocity&&n.decay!==1&&(n.velocity*=o),UI(t,n.value,i,r),t.destroyed||(n.value=Si(n.value,i,r))}}class FI{constructor(e){this.container=e}init(e){const n=e.options.opacity;e.opacity=S6(n,1);const i=n.animation;i.enable&&(e.opacity.velocity=xe(i.speed)/100*this.container.retina.reduceFactor,i.sync||(e.opacity.velocity*=st()))}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.opacity&&e.opacity.enable&&((e.opacity.maxLoops??0)<=0||(e.opacity.maxLoops??0)>0&&(e.opacity.loops??0)<(e.opacity.maxLoops??0))}reset(e){e.opacity&&(e.opacity.time=0,e.opacity.loops=0)}update(e,n){this.isEnabled(e)&&qI(e,n)}}async function GI(t,e=!0){await t.addParticleUpdater("opacity",n=>new FI(n),e)}function YI(t){if(t.outMode!=="bounce"&&t.outMode!=="bounce-horizontal"&&t.outMode!=="bounceHorizontal"&&t.outMode!=="split"||t.direction!=="left"&&t.direction!=="right")return;t.bounds.right<0&&t.direction==="left"?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&t.direction==="right"&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const e=t.particle.velocity.x;let n=!1;if(t.direction==="right"&&t.bounds.right>=t.canvasSize.width&&e>0||t.direction==="left"&&t.bounds.left<=0&&e<0){const r=qr(t.particle.options.bounce.horizontal);t.particle.velocity.x*=-r,n=!0}if(!n)return;const i=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&t.direction==="right"?t.particle.position.x=t.canvasSize.width-i:t.bounds.left<=0&&t.direction==="left"&&(t.particle.position.x=i),t.outMode==="split"&&t.particle.destroy()}function XI(t){if(t.outMode!=="bounce"&&t.outMode!=="bounce-vertical"&&t.outMode!=="bounceVertical"&&t.outMode!=="split"||t.direction!=="bottom"&&t.direction!=="top")return;t.bounds.bottom<0&&t.direction==="top"?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&t.direction==="bottom"&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const e=t.particle.velocity.y;let n=!1;if(t.direction==="bottom"&&t.bounds.bottom>=t.canvasSize.height&&e>0||t.direction==="top"&&t.bounds.top<=0&&e<0){const r=qr(t.particle.options.bounce.vertical);t.particle.velocity.y*=-r,n=!0}if(!n)return;const i=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&t.direction==="bottom"?t.particle.position.y=t.canvasSize.height-i:t.bounds.top<=0&&t.direction==="top"&&(t.particle.position.y=i),t.outMode==="split"&&t.particle.destroy()}class QI{constructor(e){this.container=e,this.modes=["bounce","bounce-vertical","bounce-horizontal","bounceVertical","bounceHorizontal","split"]}update(e,n,i,r){if(!this.modes.includes(r))return;const o=this.container;let c=!1;for(const[,y]of o.plugins)if(y.particleBounce!==void 0&&(c=y.particleBounce(e,i,n)),c)break;if(c)return;const u=e.getPosition(),d=e.offset,h=e.getRadius(),p=mc(u,h),g=o.canvas.size;YI({particle:e,outMode:r,direction:n,bounds:p,canvasSize:g,offset:d,size:h}),XI({particle:e,outMode:r,direction:n,bounds:p,canvasSize:g,offset:d,size:h})}}class ZI{constructor(e){this.container=e,this.modes=["destroy"]}update(e,n,i,r){if(!this.modes.includes(r))return;const o=this.container;switch(e.outType){case"normal":case"outside":if(l2(e.position,o.canvas.size,Bt.origin,e.getRadius(),n))return;break;case"inside":{const{dx:c,dy:u}=fn(e.position,e.moveCenter),{x:d,y:h}=e.velocity;if(d<0&&c>e.moveCenter.radius||h<0&&u>e.moveCenter.radius||d>=0&&c<-e.moveCenter.radius||h>=0&&u<-e.moveCenter.radius)return;break}}o.particles.remove(e,void 0,!0)}}class KI{constructor(e){this.container=e,this.modes=["none"]}update(e,n,i,r){if(!this.modes.includes(r)||e.options.move.distance.horizontal&&(n==="left"||n==="right")||e.options.move.distance.vertical&&(n==="top"||n==="bottom"))return;const o=e.options.move.gravity,c=this.container,u=c.canvas.size,d=e.getRadius();if(o.enable){const h=e.position;(!o.inverse&&h.y>u.height+d&&n==="bottom"||o.inverse&&h.y<-d&&n==="top")&&c.particles.remove(e)}else{if(e.velocity.y>0&&e.position.y<=u.height+d||e.velocity.y<0&&e.position.y>=-d||e.velocity.x>0&&e.position.x<=u.width+d||e.velocity.x<0&&e.position.x>=-d)return;l2(e.position,c.canvas.size,Bt.origin,d,n)||c.particles.remove(e)}}}class WI{constructor(e){this.container=e,this.modes=["out"]}update(e,n,i,r){if(!this.modes.includes(r))return;const o=this.container;switch(e.outType){case"inside":{const{x:c,y:u}=e.velocity,d=Bt.origin;d.length=e.moveCenter.radius,d.angle=e.velocity.angle+Math.PI,d.addTo(Bt.create(e.moveCenter));const{dx:h,dy:p}=fn(e.position,d);if(c<=0&&h>=0||u<=0&&p>=0||c>=0&&h<=0||u>=0&&p<=0)return;e.position.x=Math.floor(An({min:0,max:o.canvas.size.width})),e.position.y=Math.floor(An({min:0,max:o.canvas.size.height}));const{dx:g,dy:y}=fn(e.position,e.moveCenter);e.direction=Math.atan2(-y,-g),e.velocity.angle=e.direction;break}default:{if(l2(e.position,o.canvas.size,Bt.origin,e.getRadius(),n))return;switch(e.outType){case"outside":{e.position.x=Math.floor(An({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.x,e.position.y=Math.floor(An({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.y;const{dx:c,dy:u}=fn(e.position,e.moveCenter);e.moveCenter.radius&&(e.direction=Math.atan2(u,c),e.velocity.angle=e.direction);break}case"normal":{const c=e.options.move.warp,u=o.canvas.size,d={bottom:u.height+e.getRadius()+e.offset.y,left:-e.getRadius()-e.offset.x,right:u.width+e.getRadius()+e.offset.x,top:-e.getRadius()-e.offset.y},h=e.getRadius(),p=mc(e.position,h);n==="right"&&p.left>u.width+e.offset.x?(e.position.x=d.left,e.initialPosition.x=e.position.x,c||(e.position.y=st()*u.height,e.initialPosition.y=e.position.y)):n==="left"&&p.right<-e.offset.x&&(e.position.x=d.right,e.initialPosition.x=e.position.x,c||(e.position.y=st()*u.height,e.initialPosition.y=e.position.y)),n==="bottom"&&p.top>u.height+e.offset.y?(c||(e.position.x=st()*u.width,e.initialPosition.x=e.position.x),e.position.y=d.top,e.initialPosition.y=e.position.y):n==="top"&&p.bottom<-e.offset.y&&(c||(e.position.x=st()*u.width,e.initialPosition.x=e.position.x),e.position.y=d.bottom,e.initialPosition.y=e.position.y);break}}break}}}}class $I{constructor(e){this.container=e,this._updateOutMode=(n,i,r,o)=>{for(const c of this.updaters)c.update(n,o,i,r)},this.updaters=[new QI(e),new ZI(e),new WI(e),new KI(e)]}init(){}isEnabled(e){return!e.destroyed&&!e.spawning}update(e,n){const i=e.options.move.outModes;this._updateOutMode(e,n,i.bottom??i.default,"bottom"),this._updateOutMode(e,n,i.left??i.default,"left"),this._updateOutMode(e,n,i.right??i.default,"right"),this._updateOutMode(e,n,i.top??i.default,"top")}}async function JI(t,e=!0){await t.addParticleUpdater("outModes",n=>new $I(n),e)}function eH(t,e,n,i){switch(t.options.size.animation.destroy){case"max":e>=i&&t.destroy();break;case"min":e<=n&&t.destroy();break}}function tH(t,e){const n=t.size;if(t.destroyed||!n||!n.enable||(n.maxLoops??0)>0&&(n.loops??0)>(n.maxLoops??0))return;const i=(n.velocity??0)*e.factor,r=n.min,o=n.max,c=n.decay??1;if(n.time||(n.time=0),(n.delayTime??0)>0&&n.time<(n.delayTime??0)&&(n.time+=e.value),!((n.delayTime??0)>0&&n.time<(n.delayTime??0))){switch(n.status){case"increasing":n.value>=o?(n.status="decreasing",n.loops||(n.loops=0),n.loops++):n.value+=i;break;case"decreasing":n.value<=r?(n.status="increasing",n.loops||(n.loops=0),n.loops++):n.value-=i}n.velocity&&c!==1&&(n.velocity*=c),eH(t,n.value,r,o),t.destroyed||(n.value=Si(n.value,r,o))}}class nH{init(e){const n=e.container,i=e.options.size,r=i.animation;r.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??n.retina.sizeAnimationSpeed)/100*n.retina.reduceFactor,r.sync||(e.size.velocity*=st()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??0)<=0||(e.size.maxLoops??0)>0&&(e.size.loops??0)<(e.size.maxLoops??0))}reset(e){e.size.loops=0}update(e,n){this.isEnabled(e)&&tH(e,n)}}async function iH(t,e=!0){await t.addParticleUpdater("size",()=>new nH,e)}async function sH(t,e=!0){await PI(t,!1),await BI(t,!1),await VI(t,!1),await GI(t,!1),await JI(t,!1),await iH(t,!1),await t.refresh(e)}async function rH(){D0("ease-in-quad",t=>t**2),D0("ease-out-quad",t=>1-(1-t)**2),D0("ease-in-out-quad",t=>t<.5?2*t**2:1-(-2*t+2)**2/2)}class aH{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}let oH=class extends Fi{constructor(e,n){super(n),this._clickAttract=()=>{const i=this.container;i.attract||(i.attract={particles:[]});const{attract:r}=i;if(r.finish||(r.count||(r.count=0),r.count++,r.count===i.particles.count&&(r.finish=!0)),r.clicking){const o=i.interactivity.mouse.clickPosition,c=i.retina.attractModeDistance;if(!c||c<0||!o)return;this._processAttract(o,c,new rn(o.x,o.y,c))}else r.clicking===!1&&(r.particles=[])},this._hoverAttract=()=>{const i=this.container,r=i.interactivity.mouse.position,o=i.retina.attractModeDistance;!o||o<0||!r||this._processAttract(r,o,new rn(r.x,r.y,o))},this._processAttract=(i,r,o)=>{const c=this.container,u=c.actualOptions.interactivity.modes.attract;if(!u)return;const d=c.particles.quadTree.query(o,h=>this.isEnabled(h));for(const h of d){const{dx:p,dy:g,distance:y}=fn(h.position,i),x=u.speed*u.factor,b=Si(g6(u.easing)(1-y/r)*x,0,u.maxSpeed),S=Bt.create(y===0?x:p/y*b,y===0?x:g/y*b);h.position.subFrom(S)}},this._engine=e,n.attract||(n.attract={particles:[]}),this.handleClickMode=i=>{const r=this.container.actualOptions,o=r.interactivity.modes.attract;if(!(!o||i!=="attract")){n.attract||(n.attract={particles:[]}),n.attract.clicking=!0,n.attract.count=0;for(const c of n.attract.particles)this.isEnabled(c)&&c.velocity.setTo(c.initialVelocity);n.attract.particles=[],n.attract.finish=!1,setTimeout(()=>{n.destroyed||(n.attract||(n.attract={particles:[]}),n.attract.clicking=!1)},o.duration*1e3)}}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.attract;n&&(e.retina.attractModeDistance=n.distance*e.retina.pixelRatio)}async interact(){const e=this.container,n=e.actualOptions,i=e.interactivity.status===Ur,r=n.interactivity.events,o=r.onHover.enable,c=r.onHover.mode,u=r.onClick.enable,d=r.onClick.mode;i&&o&&bt("attract",c)?this._hoverAttract():u&&bt("attract",d)&&this._clickAttract()}isEnabled(e){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((e==null?void 0:e.interactivity)??i.interactivity).events;if((!r.position||!o.onHover.enable)&&(!r.clickPosition||!o.onClick.enable))return!1;const c=o.onHover.mode,u=o.onClick.mode;return bt("attract",c)||bt("attract",u)}loadModeOptions(e,...n){e.attract||(e.attract=new aH);for(const i of n)e.attract.load(i==null?void 0:i.attract)}reset(){}};async function lH(t,e=!0){await t.addInteractor("externalAttract",n=>new oH(t,n),e)}class cH{constructor(){this.distance=200}load(e){e&&e.distance!==void 0&&(this.distance=e.distance)}}class uH extends Fi{constructor(e){super(e),this._processBounce=(n,i,r)=>{const o=this.container.particles.quadTree.query(r,c=>this.isEnabled(c));for(const c of o)r instanceof rn?b6(Um(c),{position:n,mass:i**2*Math.PI/2,velocity:Bt.origin,factor:Bt.origin}):r instanceof Ti&&aB(c,mc(n,i))},this._processMouseBounce=()=>{const n=this.container,i=n.retina.pixelRatio,r=10*i,o=n.interactivity.mouse.position,c=n.retina.bounceModeDistance;!c||c<0||!o||this._processBounce(o,c,new rn(o.x,o.y,c+r))},this._singleSelectorBounce=(n,i)=>{const r=this.container,o=document.querySelectorAll(n);o.length&&o.forEach(c=>{const u=c,d=r.retina.pixelRatio,h={x:(u.offsetLeft+u.offsetWidth/2)*d,y:(u.offsetTop+u.offsetHeight/2)*d},p=u.offsetWidth/2*d,g=10*d,y=i.type==="circle"?new rn(h.x,h.y,p+g):new Ti(u.offsetLeft*d-g,u.offsetTop*d-g,u.offsetWidth*d+g*2,u.offsetHeight*d+g*2);this._processBounce(h,p,y)})}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.bounce;n&&(e.retina.bounceModeDistance=n.distance*e.retina.pixelRatio)}async interact(){const e=this.container,n=e.actualOptions,i=n.interactivity.events,r=e.interactivity.status===Ur,o=i.onHover.enable,c=i.onHover.mode,u=i.onDiv;r&&o&&bt("bounce",c)?this._processMouseBounce():u2("bounce",u,(d,h)=>this._singleSelectorBounce(d,h))}isEnabled(e){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((e==null?void 0:e.interactivity)??i.interactivity).events,c=o.onDiv;return r.position&&o.onHover.enable&&bt("bounce",o.onHover.mode)||c2("bounce",c)}loadModeOptions(e,...n){e.bounce||(e.bounce=new cH);for(const i of n)e.bounce.load(i==null?void 0:i.bounce)}reset(){}}async function fH(t,e=!0){await t.addInteractor("externalBounce",n=>new uH(n),e)}class H6{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const n=qn(this.color)?void 0:this.color;this.color=It(e.color,i=>Xt.create(n,i))}e.size!==void 0&&(this.size=e.size)}}}class dH extends H6{constructor(){super(),this.selectors=[]}get ids(){return It(this.selectors,e=>e.replace("#",""))}set ids(e){this.selectors=It(e,n=>`#${n}`)}load(e){super.load(e),e&&(e.ids!==void 0&&(this.ids=e.ids),e.selectors!==void 0&&(this.selectors=e.selectors))}}class hH extends H6{load(e){super.load(e),e&&(this.divs=It(e.divs,n=>{const i=new dH;return i.load(n),i}))}}function r5(t,e,n,i){if(e>=n){const r=t+(e-n)*i;return Si(r,t,e)}else if(e<n){const r=t-(n-e)*i;return Si(r,e,t)}}class pH extends Fi{constructor(e){super(e),this._clickBubble=()=>{var h;const n=this.container,i=n.actualOptions,r=n.interactivity.mouse.clickPosition,o=i.interactivity.modes.bubble;if(!o||!r)return;n.bubble||(n.bubble={});const c=n.retina.bubbleModeDistance;if(!c||c<0)return;const u=n.particles.quadTree.queryCircle(r,c,p=>this.isEnabled(p)),{bubble:d}=n;for(const p of u){if(!d.clicking)continue;p.bubble.inRange=!d.durationEnd;const g=p.getPosition(),y=Un(g,r),x=(new Date().getTime()-(n.interactivity.mouse.clickTime||0))/1e3;x>o.duration&&(d.durationEnd=!0),x>o.duration*2&&(d.clicking=!1,d.durationEnd=!1);const b={bubbleObj:{optValue:n.retina.bubbleModeSize,value:p.bubble.radius},particlesObj:{optValue:Js(p.options.size.value)*n.retina.pixelRatio,value:p.size.value},type:"size"};this._process(p,y,x,b);const S={bubbleObj:{optValue:o.opacity,value:p.bubble.opacity},particlesObj:{optValue:Js(p.options.opacity.value),value:((h=p.opacity)==null?void 0:h.value)??1},type:"opacity"};this._process(p,y,x,S),!d.durationEnd&&y<=c?this._hoverBubbleColor(p,y):delete p.bubble.color}},this._hoverBubble=()=>{const n=this.container,i=n.interactivity.mouse.position,r=n.retina.bubbleModeDistance;if(!r||r<0||i===void 0)return;const o=n.particles.quadTree.queryCircle(i,r,c=>this.isEnabled(c));for(const c of o){c.bubble.inRange=!0;const u=c.getPosition(),d=Un(u,i),h=1-d/r;d<=r?h>=0&&n.interactivity.status===Ur&&(this._hoverBubbleSize(c,h),this._hoverBubbleOpacity(c,h),this._hoverBubbleColor(c,h)):this.reset(c),n.interactivity.status===Hm&&this.reset(c)}},this._hoverBubbleColor=(n,i,r)=>{const o=this.container.actualOptions,c=r??o.interactivity.modes.bubble;if(c){if(!n.bubble.finalColor){const u=c.color;if(!u)return;const d=ys(u);n.bubble.finalColor=ec(d)}if(n.bubble.finalColor)if(c.mix){n.bubble.color=void 0;const u=n.getFillColor();n.bubble.color=u?A6(f2(u,n.bubble.finalColor,1-i,i)):n.bubble.finalColor}else n.bubble.color=n.bubble.finalColor}},this._hoverBubbleOpacity=(n,i,r)=>{var g,y;const o=this.container,c=o.actualOptions,u=(r==null?void 0:r.opacity)??((g=c.interactivity.modes.bubble)==null?void 0:g.opacity);if(!u)return;const d=n.options.opacity.value,h=((y=n.opacity)==null?void 0:y.value)??1,p=r5(h,u,Js(d),i);p!==void 0&&(n.bubble.opacity=p)},this._hoverBubbleSize=(n,i,r)=>{const o=this.container,c=r!=null&&r.size?r.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(c===void 0)return;const u=Js(n.options.size.value)*o.retina.pixelRatio,d=n.size.value,h=r5(d,c,u,i);h!==void 0&&(n.bubble.radius=h)},this._process=(n,i,r,o)=>{const c=this.container,u=o.bubbleObj.optValue,d=c.actualOptions,h=d.interactivity.modes.bubble;if(!h||u===void 0)return;const p=h.duration,g=c.retina.bubbleModeDistance,y=o.particlesObj.optValue,x=o.bubbleObj.value,b=o.particlesObj.value||0,S=o.type;if(!(!g||g<0||u===y))if(c.bubble||(c.bubble={}),c.bubble.durationEnd)x&&(S==="size"&&delete n.bubble.radius,S==="opacity"&&delete n.bubble.opacity);else if(i<=g){if((x??b)!==u){const T=b-r*(b-u)/p;S==="size"&&(n.bubble.radius=T),S==="opacity"&&(n.bubble.opacity=T)}}else S==="size"&&delete n.bubble.radius,S==="opacity"&&delete n.bubble.opacity},this._singleSelectorHover=(n,i,r)=>{const o=this.container,c=document.querySelectorAll(i),u=o.actualOptions.interactivity.modes.bubble;!u||!c.length||c.forEach(d=>{const h=d,p=o.retina.pixelRatio,g={x:(h.offsetLeft+h.offsetWidth/2)*p,y:(h.offsetTop+h.offsetHeight/2)*p},y=h.offsetWidth/2*p,x=r.type==="circle"?new rn(g.x,g.y,y):new Ti(h.offsetLeft*p,h.offsetTop*p,h.offsetWidth*p,h.offsetHeight*p),b=o.particles.quadTree.query(x,S=>this.isEnabled(S));for(const S of b){if(!x.contains(S.getPosition()))continue;S.bubble.inRange=!0;const C=u.divs,T=x6(C,h);(!S.bubble.div||S.bubble.div!==h)&&(this.clear(S,n,!0),S.bubble.div=h),this._hoverBubbleSize(S,1,T),this._hoverBubbleOpacity(S,1,T),this._hoverBubbleColor(S,1,T)}})},e.bubble||(e.bubble={}),this.handleClickMode=n=>{n==="bubble"&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,n,i){e.bubble.inRange&&!i||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,n=e.actualOptions.interactivity.modes.bubble;n&&(e.retina.bubbleModeDistance=n.distance*e.retina.pixelRatio,n.size!==void 0&&(e.retina.bubbleModeSize=n.size*e.retina.pixelRatio))}async interact(e){const n=this.container.actualOptions,i=n.interactivity.events,r=i.onHover,o=i.onClick,c=r.enable,u=r.mode,d=o.enable,h=o.mode,p=i.onDiv;c&&bt("bubble",u)?this._hoverBubble():d&&bt("bubble",h)?this._clickBubble():u2("bubble",p,(g,y)=>this._singleSelectorHover(e,g,y))}isEnabled(e){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((e==null?void 0:e.interactivity)??i.interactivity).events,{onClick:c,onDiv:u,onHover:d}=o,h=c2("bubble",u);return h||d.enable&&r.position||c.enable&&r.clickPosition?bt("bubble",d.mode)||bt("bubble",c.mode)||h:!1}loadModeOptions(e,...n){e.bubble||(e.bubble=new hH);for(const i of n)e.bubble.load(i==null?void 0:i.bubble)}reset(e){e.bubble.inRange=!1}}async function mH(t,e=!0){await t.addInteractor("externalBubble",n=>new pH(n),e)}class gH{constructor(){this.opacity=.5}load(e){e&&e.opacity!==void 0&&(this.opacity=e.opacity)}}class yH{constructor(){this.distance=80,this.links=new gH,this.radius=60}get lineLinked(){return this.links}set lineLinked(e){this.links=e}get line_linked(){return this.links}set line_linked(e){this.links=e}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links??e.lineLinked??e.line_linked),e.radius!==void 0&&(this.radius=e.radius))}}function vH(t,e,n,i){const r=Math.floor(n.getRadius()/e.getRadius()),o=e.getFillColor(),c=n.getFillColor();if(!o||!c)return;const u=e.getPosition(),d=n.getPosition(),h=f2(o,c,e.getRadius(),n.getRadius()),p=t.createLinearGradient(u.x,u.y,d.x,d.y);return p.addColorStop(0,tc(o,i)),p.addColorStop(r>1?1:r,vs(h,i)),p.addColorStop(1,tc(c,i)),p}function xH(t,e,n,i,r){Bl(t,i,r),t.lineWidth=e,t.strokeStyle=n,t.stroke()}function bH(t,e,n,i){const r=t.actualOptions,o=r.interactivity.modes.connect;if(o)return vH(e,n,i,o.links.opacity)}function wH(t,e,n){t.canvas.draw(i=>{const r=bH(t,i,e,n);if(!r)return;const o=e.getPosition(),c=n.getPosition();xH(i,e.retina.linksWidth??0,r,o,c)})}let SH=class extends Fi{constructor(e){super(e)}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.connect;n&&(e.retina.connectModeDistance=n.distance*e.retina.pixelRatio,e.retina.connectModeRadius=n.radius*e.retina.pixelRatio)}async interact(){const e=this.container;if(e.actualOptions.interactivity.events.onHover.enable&&e.interactivity.status==="pointermove"){const i=e.interactivity.mouse.position;if(!e.retina.connectModeDistance||e.retina.connectModeDistance<0||!e.retina.connectModeRadius||e.retina.connectModeRadius<0||!i)return;const r=Math.abs(e.retina.connectModeRadius),o=e.particles.quadTree.queryCircle(i,r,u=>this.isEnabled(u));let c=0;for(const u of o){const d=u.getPosition();for(const h of o.slice(c+1)){const p=h.getPosition(),g=Math.abs(e.retina.connectModeDistance),y=Math.abs(d.x-p.x),x=Math.abs(d.y-p.y);y<g&&x<g&&wH(e,u,h)}++c}}}isEnabled(e){const n=this.container,i=n.interactivity.mouse,r=((e==null?void 0:e.interactivity)??n.actualOptions.interactivity).events;return r.onHover.enable&&i.position?bt("connect",r.onHover.mode):!1}loadModeOptions(e,...n){e.connect||(e.connect=new yH);for(const i of n)e.connect.load(i==null?void 0:i.connect)}reset(){}};async function TH(t,e=!0){await t.addInteractor("externalConnect",n=>new SH(n),e)}class EH{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(e){e&&(e.blink!==void 0&&(this.blink=e.blink),e.color!==void 0&&(this.color=Xt.create(this.color,e.color)),e.consent!==void 0&&(this.consent=e.consent),e.opacity!==void 0&&(this.opacity=e.opacity))}}class CH{constructor(){this.distance=100,this.links=new EH}get lineLinked(){return this.links}set lineLinked(e){this.links=e}get line_linked(){return this.links}set line_linked(e){this.links=e}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links??e.lineLinked??e.line_linked))}}function AH(t,e,n,i,r,o){Bl(t,n,i),t.strokeStyle=vs(r,o),t.lineWidth=e,t.stroke()}function MH(t,e,n,i,r){t.canvas.draw(o=>{const c=e.getPosition();AH(o,e.retina.linksWidth??0,c,r,n,i)})}class OH extends Fi{constructor(e){super(e)}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.grab;n&&(e.retina.grabModeDistance=n.distance*e.retina.pixelRatio)}async interact(){var u;const e=this.container,n=e.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||e.interactivity.status!==Ur)return;const r=e.interactivity.mouse.position;if(!r)return;const o=e.retina.grabModeDistance;if(!o||o<0)return;const c=e.particles.quadTree.queryCircle(r,o,d=>this.isEnabled(d));for(const d of c){const h=d.getPosition(),p=Un(h,r);if(p>o)continue;const g=i.modes.grab.links,y=g.opacity,x=y-p*y/o;if(x<=0)continue;const b=g.color??((u=d.options.links)==null?void 0:u.color);if(!e.particles.grabLineColor&&b){const C=i.modes.grab.links;e.particles.grabLineColor=O6(b,C.blink,C.consent)}const S=qm(d,void 0,e.particles.grabLineColor);S&&MH(e,d,S,x,r)}}isEnabled(e){const n=this.container,i=n.interactivity.mouse,r=((e==null?void 0:e.interactivity)??n.actualOptions.interactivity).events;return r.onHover.enable&&!!i.position&&bt("grab",r.onHover.mode)}loadModeOptions(e,...n){e.grab||(e.grab=new CH);for(const i of n)e.grab.load(i==null?void 0:i.grab)}reset(){}}async function kH(t,e=!0){await t.addInteractor("externalGrab",n=>new OH(n),e)}class RH extends Fi{constructor(e){super(e),this.handleClickMode=n=>{if(n!=="pause")return;const i=this.container;i.getAnimationStatus()?i.pause():i.play()}}clear(){}init(){}async interact(){}isEnabled(){return!0}reset(){}}async function LH(t,e=!0){await t.addInteractor("externalPause",n=>new RH(n),e)}class DH{constructor(){this.default=!0,this.groups=[],this.quantity=4}get particles_nb(){return this.quantity}set particles_nb(e){this.quantity=ke(e)}load(e){if(!e)return;e.default!==void 0&&(this.default=e.default),e.groups!==void 0&&(this.groups=e.groups.map(i=>i)),this.groups.length||(this.default=!0);const n=e.quantity??e.particles_nb;n!==void 0&&(this.quantity=ke(n))}}class _H extends Fi{constructor(e){super(e),this.handleClickMode=n=>{if(n!=="push")return;const i=this.container,r=i.actualOptions,o=r.interactivity.modes.push;if(!o)return;const c=xe(o.quantity);if(c<=0)return;const u=vd([void 0,...o.groups]),d=u!==void 0?i.actualOptions.particles.groups[u]:void 0;i.particles.push(c,i.interactivity.mouse,d,u)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.push||(e.push=new DH);for(const i of n)e.push.load(i==null?void 0:i.push)}reset(){}}async function zH(t,e=!0){await t.addInteractor("externalPush",n=>new _H(n),e)}class jH{constructor(){this.quantity=2}get particles_nb(){return this.quantity}set particles_nb(e){this.quantity=ke(e)}load(e){if(!e)return;const n=e.quantity??e.particles_nb;n!==void 0&&(this.quantity=ke(n))}}class PH extends Fi{constructor(e){super(e),this.handleClickMode=n=>{const i=this.container,r=i.actualOptions;if(!r.interactivity.modes.remove||n!=="remove")return;const o=xe(r.interactivity.modes.remove.quantity);i.particles.removeQuantity(o)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.remove||(e.remove=new jH);for(const i of n)e.remove.load(i==null?void 0:i.remove)}reset(){}}async function NH(t,e=!0){await t.addInteractor("externalRemove",n=>new PH(n),e)}class V6{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class BH extends V6{constructor(){super(),this.selectors=[]}get ids(){return It(this.selectors,e=>e.replace("#",""))}set ids(e){this.selectors=It(e,n=>`#${n}`)}load(e){super.load(e),e&&(e.ids!==void 0&&(this.ids=e.ids),e.selectors!==void 0&&(this.selectors=e.selectors))}}class IH extends V6{load(e){super.load(e),e&&(this.divs=It(e.divs,n=>{const i=new BH;return i.load(n),i}))}}class HH extends Fi{constructor(e,n){super(n),this._clickRepulse=()=>{const i=this.container,r=i.actualOptions.interactivity.modes.repulse;if(!r)return;const o=i.repulse||{particles:[]};if(o.finish||(o.count||(o.count=0),o.count++,o.count===i.particles.count&&(o.finish=!0)),o.clicking){const c=i.retina.repulseModeDistance;if(!c||c<0)return;const u=Math.pow(c/6,3),d=i.interactivity.mouse.clickPosition;if(d===void 0)return;const h=new rn(d.x,d.y,u),p=i.particles.quadTree.query(h,g=>this.isEnabled(g));for(const g of p){const{dx:y,dy:x,distance:b}=fn(d,g.position),S=b**2,C=r.speed,T=-u*C/S;if(S<=u){o.particles.push(g);const M=Bt.create(y,x);M.length=T,g.velocity.setTo(M)}}}else if(o.clicking===!1){for(const c of o.particles)c.velocity.setTo(c.initialVelocity);o.particles=[]}},this._hoverRepulse=()=>{const i=this.container,r=i.interactivity.mouse.position,o=i.retina.repulseModeDistance;!o||o<0||!r||this._processRepulse(r,o,new rn(r.x,r.y,o))},this._processRepulse=(i,r,o,c)=>{const u=this.container,d=u.particles.quadTree.query(o,p=>this.isEnabled(p)),h=u.actualOptions.interactivity.modes.repulse;if(h)for(const p of d){const{dx:g,dy:y,distance:x}=fn(p.position,i),b=((c==null?void 0:c.speed)??h.speed)*h.factor,S=Si(g6(h.easing)(1-x/r)*b,0,h.maxSpeed),C=Bt.create(x===0?b:g/x*S,x===0?b:y/x*S);p.position.addTo(C)}},this._singleSelectorRepulse=(i,r)=>{const o=this.container,c=o.actualOptions.interactivity.modes.repulse;if(!c)return;const u=document.querySelectorAll(i);u.length&&u.forEach(d=>{const h=d,p=o.retina.pixelRatio,g={x:(h.offsetLeft+h.offsetWidth/2)*p,y:(h.offsetTop+h.offsetHeight/2)*p},y=h.offsetWidth/2*p,x=r.type==="circle"?new rn(g.x,g.y,y):new Ti(h.offsetLeft*p,h.offsetTop*p,h.offsetWidth*p,h.offsetHeight*p),b=c.divs,S=x6(b,h);this._processRepulse(g,y,x,S)})},this._engine=e,n.repulse||(n.repulse={particles:[]}),this.handleClickMode=i=>{const r=this.container.actualOptions,o=r.interactivity.modes.repulse;if(!o||i!=="repulse")return;n.repulse||(n.repulse={particles:[]});const c=n.repulse;c.clicking=!0,c.count=0;for(const u of n.repulse.particles)this.isEnabled(u)&&u.velocity.setTo(u.initialVelocity);c.particles=[],c.finish=!1,setTimeout(()=>{n.destroyed||(c.clicking=!1)},o.duration*1e3)}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.repulse;n&&(e.retina.repulseModeDistance=n.distance*e.retina.pixelRatio)}async interact(){const e=this.container,n=e.actualOptions,i=e.interactivity.status===Ur,r=n.interactivity.events,o=r.onHover,c=o.enable,u=o.mode,d=r.onClick,h=d.enable,p=d.mode,g=r.onDiv;i&&c&&bt("repulse",u)?this._hoverRepulse():h&&bt("repulse",p)?this._clickRepulse():u2("repulse",g,(y,x)=>this._singleSelectorRepulse(y,x))}isEnabled(e){const n=this.container,i=n.actualOptions,r=n.interactivity.mouse,o=((e==null?void 0:e.interactivity)??i.interactivity).events,c=o.onDiv,u=o.onHover,d=o.onClick,h=c2("repulse",c);if(!(h||u.enable&&r.position||d.enable&&r.clickPosition))return!1;const p=u.mode,g=d.mode;return bt("repulse",p)||bt("repulse",g)||h}loadModeOptions(e,...n){e.repulse||(e.repulse=new IH);for(const i of n)e.repulse.load(i==null?void 0:i.repulse)}reset(){}}async function VH(t,e=!0){await t.addInteractor("externalRepulse",n=>new HH(t,n),e)}class UH{constructor(){this.factor=3,this.radius=200}load(e){e&&(e.factor!==void 0&&(this.factor=e.factor),e.radius!==void 0&&(this.radius=e.radius))}}class qH extends Fi{constructor(e){super(e)}clear(e,n,i){e.slow.inRange&&!i||(e.slow.factor=1)}init(){const e=this.container,n=e.actualOptions.interactivity.modes.slow;n&&(e.retina.slowModeRadius=n.radius*e.retina.pixelRatio)}async interact(){}isEnabled(e){const n=this.container,i=n.interactivity.mouse,r=((e==null?void 0:e.interactivity)??n.actualOptions.interactivity).events;return r.onHover.enable&&!!i.position&&bt("slow",r.onHover.mode)}loadModeOptions(e,...n){e.slow||(e.slow=new UH);for(const i of n)e.slow.load(i==null?void 0:i.slow)}reset(e){e.slow.inRange=!1;const n=this.container,i=n.actualOptions,r=n.interactivity.mouse.position,o=n.retina.slowModeRadius,c=i.interactivity.modes.slow;if(!c||!o||o<0||!r)return;const u=e.getPosition(),d=Un(r,u),h=d/o,p=c.factor,{slow:g}=e;d>o||(g.inRange=!0,g.factor=h/p)}}async function FH(t,e=!0){await t.addInteractor("externalSlow",n=>new qH(n),e)}const Y0=[0,4,2,1],a5=[8,8,4,2];class GH{constructor(e){this.pos=0,this.data=new Uint8ClampedArray(e)}getString(e){const n=this.data.slice(this.pos,this.pos+e);return this.pos+=n.length,n.reduce((i,r)=>i+String.fromCharCode(r),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let e="",n=0;do{n=this.data[this.pos++];for(let i=n;--i>=0;e+=String.fromCharCode(this.data[this.pos++]));}while(n!==0);return e}readSubBlocksBin(){let e=0,n=0;for(let r=0;(e=this.data[this.pos+r])!==0;r+=e+1)n+=e;const i=new Uint8Array(n);for(let r=0;(e=this.data[this.pos++])!==0;)for(let o=e;--o>=0;i[r++]=this.data[this.pos++]);return i}skipSubBlocks(){for(;this.data[this.pos]!==0;this.pos+=this.data[this.pos]+1);this.pos++}}function U6(t,e){const n=[];for(let i=0;i<e;i++)n.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return n}async function YH(t,e,n,i){switch(t.nextByte()){case 249:{const r=e.frames[n(!1)];t.pos++;const o=t.nextByte();r.GCreserved=(o&224)>>>5,r.disposalMethod=(o&28)>>>2,r.userInputDelayFlag=(o&2)===2;const c=(o&1)===1;r.delayTime=t.nextTwoBytes()*10;const u=t.nextByte();c&&i(u),t.pos++;break}case 255:{t.pos++;const r={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(r);break}case 254:{e.comments.push([n(!1),t.readSubBlocks()]);break}case 1:{if(e.globalColorTable.length===0)throw new EvalError("plain text extension without global color table");t.pos++,e.frames[n(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break}default:t.skipSubBlocks();break}}async function XH(t,e,n,i,r,o){const c=e.frames[i(!0)];c.left=t.nextTwoBytes(),c.top=t.nextTwoBytes(),c.width=t.nextTwoBytes(),c.height=t.nextTwoBytes();const u=t.nextByte(),d=(u&128)===128,h=(u&64)===64;c.sortFlag=(u&32)===32,c.reserved=(u&24)>>>3;const p=1<<(u&7)+1;d&&(c.localColorTable=U6(t,p));const g=T=>{const{r:M,g:A,b:R}=(d?c.localColorTable:e.globalColorTable)[T];return{r:M,g:A,b:R,a:T===r(null)?n?~~((M+A+R)/3):0:255}},y=(()=>{try{return new ImageData(c.width,c.height,{colorSpace:"srgb"})}catch(T){if(T instanceof DOMException&&T.name==="IndexSizeError")return null;throw T}})();if(y==null)throw new EvalError("GIF frame size is to large");const x=t.nextByte(),b=t.readSubBlocksBin(),S=1<<x,C=(T,M)=>{const A=T>>>3,R=T&7;return(b[A]+(b[A+1]<<8)+(b[A+2]<<16)&(1<<M)-1<<R)>>>R};if(h){for(let T=0,M=x+1,A=0,R=[[0]],k=0;k<4;k++)if(Y0[k]<c.height)for(let P=0,L=0;;){const I=T;if(T=C(A,M),A+=M+1,T===S){M=x+1,R.length=S+2;for(let V=0;V<R.length;V++)R[V]=V<S?[V]:[]}else{T>=R.length?R.push(R[I].concat(R[I][0])):I!==S&&R.push(R[I].concat(R[T][0]));for(let V=0;V<R[T].length;V++){const{r:F,g:N,b:z,a:te}=g(R[T][V]);y.data.set([F,N,z,te],Y0[k]*c.width+a5[k]*L+P%(c.width*4)),P+=4}R.length===1<<M&&M<12&&M++}if(P===c.width*4*(L+1)&&(L++,Y0[k]+a5[k]*L>=c.height))break}c.image=y,c.bitmap=await createImageBitmap(y)}else{for(let T=0,M=x+1,A=0,R=[[0]],k=-4;;){const P=T;if(T=C(A,M),A+=M,T===S){M=x+1,R.length=S+2;for(let L=0;L<R.length;L++)R[L]=L<S?[L]:[]}else{if(T===S+1)break;T>=R.length?R.push(R[P].concat(R[P][0])):P!==S&&R.push(R[P].concat(R[T][0]));for(let L=0;L<R[T].length;L++){const{r:I,g:V,b:F,a:N}=g(R[T][L]);y.data.set([I,V,F,N],k+=4)}R.length>=1<<M&&M<12&&M++}}c.image=y,c.bitmap=await createImageBitmap(y)}}async function QH(t,e,n,i,r,o){switch(t.nextByte()){case 59:return!0;case 44:await XH(t,e,n,i,r);break;case 33:await YH(t,e,i,r);break;default:throw new EvalError("undefined block found")}return!1}function ZH(t){for(const e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}async function KH(t,e,n){n||(n=!1);const i=await fetch(t);if(!i.ok&&i.status===404)throw new EvalError("file not found");const r=await i.arrayBuffer(),o={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},c=new GH(new Uint8ClampedArray(r));if(c.getString(6)!=="GIF89a")throw new Error("not a supported GIF file");o.width=c.nextTwoBytes(),o.height=c.nextTwoBytes();const u=c.nextByte(),d=(u&128)===128;o.colorRes=(u&112)>>>4,o.sortFlag=(u&8)===8;const h=1<<(u&7)+1,p=c.nextByte();o.pixelAspectRatio=c.nextByte(),o.pixelAspectRatio!==0&&(o.pixelAspectRatio=(o.pixelAspectRatio+15)/64),d&&(o.globalColorTable=U6(c,h));const g=(()=>{try{return new ImageData(o.width,o.height,{colorSpace:"srgb"})}catch(R){if(R instanceof DOMException&&R.name==="IndexSizeError")return null;throw R}})();if(g==null)throw new Error("GIF frame size is to large");const{r:y,g:x,b}=o.globalColorTable[p];g.data.set(d?[y,x,b,255]:[0,0,0,0]);for(let R=4;R<g.data.length;R*=2)g.data.copyWithin(R,0,R);o.backgroundImage=g;let S=-1,C=!0,T=-1;const M=R=>(R&&(C=!0),S),A=R=>(R!=null&&(T=R),T);try{do C&&(o.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),S++,T=-1,C=!1);while(!await QH(c,o,n,M,A,e));o.frames.length--;for(const R of o.frames){if(R.userInputDelayFlag&&R.delayTime===0){o.totalTime=1/0;break}o.totalTime+=R.delayTime}return o}catch(R){throw R instanceof EvalError?new Error(`error while parsing frame ${S} "${R.message}"`):R}}const WH=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function $H(t,e,n){const{svgData:i}=t;if(!i)return"";const r=tc(e,n);if(i.includes("fill"))return i.replace(WH,()=>r);const o=i.indexOf(">");return`${i.substring(0,o)} fill="${r}"${i.substring(o)}`}async function bd(t){return new Promise(e=>{t.loading=!0;const n=new Image;t.element=n,n.addEventListener("load",()=>{t.loading=!1,e()}),n.addEventListener("error",()=>{t.element=void 0,t.error=!0,t.loading=!1,Fr().error(`${ai} loading image: ${t.source}`),e()}),n.src=t.source})}async function JH(t){if(t.type!=="gif"){await bd(t);return}t.loading=!0;try{t.gifData=await KH(t.source),t.gifLoopCount=ZH(t.gifData)??0,t.gifLoopCount===0&&(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}async function eV(t){if(t.type!=="svg"){await bd(t);return}t.loading=!0;const e=await fetch(t.source);e.ok?t.svgData=await e.text():(Fr().error(`${ai} Image not found`),t.error=!0),t.loading=!1}function tV(t,e,n,i){var c;const r=$H(t,n,((c=i.opacity)==null?void 0:c.value)??1),o={color:n,gif:e.gif,data:{...t,svgData:r},loaded:!1,ratio:e.width/e.height,replaceColor:e.replaceColor??e.replace_color,source:e.src};return new Promise(u=>{const d=new Blob([r],{type:"image/svg+xml"}),h=URL||window.URL||window.webkitURL||window,p=h.createObjectURL(d),g=new Image;g.addEventListener("load",()=>{o.loaded=!0,o.element=g,u(o),h.revokeObjectURL(p)}),g.addEventListener("error",async()=>{h.revokeObjectURL(p);const y={...t,error:!1,loading:!0};await bd(y),o.loaded=!0,o.element=y.element,u(o)}),g.src=p})}class nV{constructor(e){this.loadImageShape=async n=>{if(!this._engine.loadImage)throw new Error(`${ai} image shape not initialized`);await this._engine.loadImage({gif:n.gif,name:n.name,replaceColor:n.replaceColor??n.replace_color??!1,src:n.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}draw(e,n,i,r,o){const c=n.image,u=c==null?void 0:c.element;if(c){if(e.globalAlpha=r,c.gif&&c.gifData){const d=new OffscreenCanvas(c.gifData.width,c.gifData.height),h=d.getContext("2d");if(!h)throw new Error("could not create offscreen canvas context");h.imageSmoothingQuality="low",h.imageSmoothingEnabled=!1,h.clearRect(0,0,d.width,d.height),n.gifLoopCount===void 0&&(n.gifLoopCount=c.gifLoopCount??0);let p=n.gifFrame??0;const g={x:-c.gifData.width*.5,y:-c.gifData.height*.5},y=c.gifData.frames[p];if(n.gifTime===void 0&&(n.gifTime=0),!y.bitmap)return;switch(e.scale(i/c.gifData.width,i/c.gifData.height),y.disposalMethod){case 4:case 5:case 6:case 7:case 0:h.drawImage(y.bitmap,y.left,y.top),e.drawImage(d,g.x,g.y),h.clearRect(0,0,d.width,d.height);break;case 1:h.drawImage(y.bitmap,y.left,y.top),e.drawImage(d,g.x,g.y);break;case 2:h.drawImage(y.bitmap,y.left,y.top),e.drawImage(d,g.x,g.y),h.clearRect(0,0,d.width,d.height),c.gifData.globalColorTable.length===0?h.putImageData(c.gifData.frames[0].image,g.x+y.left,g.y+y.top):h.putImageData(c.gifData.backgroundImage,g.x,g.y);break;case 3:{const x=h.getImageData(0,0,d.width,d.height);h.drawImage(y.bitmap,y.left,y.top),e.drawImage(d,g.x,g.y),h.clearRect(0,0,d.width,d.height),h.putImageData(x,0,0)}break}if(n.gifTime+=o.value,n.gifTime>y.delayTime){if(n.gifTime-=y.delayTime,++p>=c.gifData.frames.length){if(--n.gifLoopCount<=0)return;p=0,h.clearRect(0,0,d.width,d.height)}n.gifFrame=p}e.scale(c.gifData.width/i,c.gifData.height/i)}else if(u){const d=c.ratio,h={x:-i,y:-i};e.drawImage(u,h.x,h.y,i*2,i*2/d)}e.globalAlpha=1}}getSidesCount(){return 12}async init(e){const n=e.actualOptions;if(!(!n.preload||!this._engine.loadImage))for(const i of n.preload)await this._engine.loadImage(i)}loadShape(e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const n=e.shapeData;this._engine.images.find(r=>r.name===n.name||r.source===n.src)||this.loadImageShape(n).then(()=>{this.loadShape(e)})}particleInit(e,n){if(n.shape!=="image"&&n.shape!=="images")return;this._engine.images||(this._engine.images=[]);const i=this._engine.images,r=n.shapeData,o=n.getFillColor(),c=i.find(d=>d.name===r.name||d.source===r.src);if(!c)return;const u=r.replaceColor??r.replace_color??c.replaceColor;if(c.loading){setTimeout(()=>{this.particleInit(e,n)});return}(async()=>{let d;c.svgData&&o?d=await tV(c,r,o,n):d={color:o,data:c,element:c.element,gif:c.gif,gifData:c.gifData,gifLoopCount:c.gifLoopCount,loaded:!0,ratio:r.width&&r.height?r.width/r.height:c.ratio??1,replaceColor:u,source:r.src},d.ratio||(d.ratio=1);const h=r.fill??n.fill,p=r.close??n.close,g={image:d,fill:h,close:p};n.image=g.image,n.fill=g.fill,n.close=g.close})()}}class iV{constructor(){this.src="",this.gif=!1}load(e){e&&(e.gif!==void 0&&(this.gif=e.gif),e.height!==void 0&&(this.height=e.height),e.name!==void 0&&(this.name=e.name),e.replaceColor!==void 0&&(this.replaceColor=e.replaceColor),e.src!==void 0&&(this.src=e.src),e.width!==void 0&&(this.width=e.width))}}class sV{constructor(e){this.id="imagePreloader",this._engine=e}getPlugin(){return{}}loadOptions(e,n){if(!n||!n.preload)return;e.preload||(e.preload=[]);const i=e.preload;for(const r of n.preload){const o=i.find(c=>c.name===r.name||c.src===r.src);if(o)o.load(r);else{const c=new iV;c.load(r),i.push(c)}}}needsPlugin(){return!0}}function rV(t){t.loadImage||(t.loadImage=async e=>{if(!e.name&&!e.src)throw new Error(`${ai} no image source provided`);if(t.images||(t.images=[]),!t.images.find(n=>n.name===e.name||n.source===e.src))try{const n={gif:e.gif??!1,name:e.name??e.src,source:e.src,type:e.src.substring(e.src.length-3),error:!1,loading:!0,replaceColor:e.replaceColor,ratio:e.width&&e.height?e.width/e.height:void 0};t.images.push(n),await(e.gif?JH:e.replaceColor?eV:bd)(n)}catch{throw new Error(`${ai} ${e.name??e.src} not found`)}})}async function aV(t,e=!0){rV(t);const n=new sV(t);await t.addPlugin(n,e),await t.addShape(["image","images"],new nV(t),e)}class oV extends ar{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class lV extends ar{constructor(){super(),this.random.minimumValue=1e-4,this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class cV{constructor(){this.count=0,this.delay=new oV,this.duration=new lV}load(e){e&&(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class uV{constructor(e){this.container=e}init(e){const n=this.container,i=e.options,r=i.life;r&&(e.life={delay:n.retina.reduceFactor?xe(r.delay.value)*(r.delay.sync?1:st())/n.retina.reduceFactor*1e3:0,delayTime:0,duration:n.retina.reduceFactor?xe(r.duration.value)*(r.duration.sync?1:st())/n.retina.reduceFactor*1e3:0,time:0,count:r.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e,...n){e.life||(e.life=new cV);for(const i of n)e.life.load(i==null?void 0:i.life)}update(e,n){if(!this.isEnabled(e)||!e.life)return;const i=e.life;let r=!1;if(e.spawning)if(i.delayTime+=n.value,i.delayTime>=e.life.delay)r=!0,e.spawning=!1,i.delayTime=0,i.time=0;else return;if(i.duration===-1||e.spawning||(r?i.time=0:i.time+=n.value,i.time<i.duration))return;if(i.time=0,e.life.count>0&&e.life.count--,e.life.count===0){e.destroy();return}const o=this.container.canvas.size,c=ke(0,o.width),u=ke(0,o.width);e.position.x=An(c),e.position.y=An(u),e.spawning=!0,i.delayTime=0,i.time=0,e.reset();const d=e.options.life;d&&(i.delay=xe(d.delay.value)*1e3,i.duration=xe(d.duration.value)*1e3)}}async function fV(t,e=!0){await t.addParticleUpdater("life",n=>new uV(n),e)}class dV{draw(e,n,i){const r=n.shapeData;e.moveTo(-i/2,0),e.lineTo(i/2,0),e.lineCap=(r==null?void 0:r.cap)??"butt"}getSidesCount(){return 1}}async function hV(t,e=!0){await t.addShape("line",new dV,e)}class pV{init(){}isEnabled(e){return!Ja()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const n=e.container,i=n.actualOptions,r=i.interactivity.events.onHover.parallax;if(Ja()||!r.enable)return;const o=r.force,c=n.interactivity.mouse.position;if(!c)return;const u=n.canvas.size,d={x:u.width/2,y:u.height/2},h=r.smooth,p=e.getRadius()/o,g={x:(c.x-d.x)*p,y:(c.y-d.y)*p},{offset:y}=e;y.x+=(g.x-y.x)/h,y.y+=(g.y-y.y)/h}}async function mV(t,e=!0){await t.addMover("parallax",()=>new pV,e)}class gV extends d2{constructor(e){super(e)}clear(){}init(){}async interact(e){const n=this.container,i=e.retina.attractDistance??n.retina.attractDistance,r=e.getPosition(),o=n.particles.quadTree.queryCircle(r,i);for(const c of o){if(e===c||!c.options.move.attract.enable||c.destroyed||c.spawning)continue;const u=c.getPosition(),{dx:d,dy:h}=fn(r,u),p=e.options.move.attract.rotate,g=d/(p.x*1e3),y=h/(p.y*1e3),x=c.size.value/e.size.value,b=1/x;e.velocity.x-=g*x,e.velocity.y-=y*x,c.velocity.x+=g*b,c.velocity.y+=y*b}}isEnabled(e){return e.options.move.attract.enable}reset(){}}async function yV(t,e=!0){await t.addInteractor("particlesAttract",n=>new gV(n),e)}function o5(t,e,n,i,r,o){const c=Si(t.options.collisions.absorb.speed*r.factor/10,0,i);t.size.value+=c/2,n.size.value-=c,i<=o&&(n.size.value=0,n.destroy())}function vV(t,e,n,i){const r=t.getRadius(),o=e.getRadius();r===void 0&&o!==void 0?t.destroy():r!==void 0&&o===void 0?e.destroy():r!==void 0&&o!==void 0&&(r>=o?o5(t,r,e,o,n,i):o5(e,o,t,r,n,i))}const l5=t=>{t.collisionMaxSpeed===void 0&&(t.collisionMaxSpeed=xe(t.options.collisions.maxSpeed)),t.velocity.length>t.collisionMaxSpeed&&(t.velocity.length=t.collisionMaxSpeed)};function q6(t,e){b6(Um(t),Um(e)),l5(t),l5(e)}function xV(t,e){!t.unbreakable&&!e.unbreakable&&q6(t,e),t.getRadius()===void 0&&e.getRadius()!==void 0?t.destroy():t.getRadius()!==void 0&&e.getRadius()===void 0?e.destroy():t.getRadius()!==void 0&&e.getRadius()!==void 0&&(t.getRadius()>=e.getRadius()?e:t).destroy()}function bV(t,e,n,i){switch(t.options.collisions.mode){case"absorb":{vV(t,e,n,i);break}case"bounce":{q6(t,e);break}case"destroy":{xV(t,e);break}}}class wV extends d2{constructor(e){super(e)}clear(){}init(){}async interact(e,n){if(e.destroyed||e.spawning)return;const i=this.container,r=e.getPosition(),o=e.getRadius(),c=i.particles.quadTree.queryCircle(r,o*2);for(const u of c){if(e===u||!u.options.collisions.enable||e.options.collisions.mode!==u.options.collisions.mode||u.destroyed||u.spawning)continue;const d=u.getPosition(),h=u.getRadius();if(Math.abs(Math.round(r.z)-Math.round(d.z))>o+h)continue;const p=Un(r,d),g=o+h;p>g||bV(e,u,n,i.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}async function SV(t,e=!0){await t.addInteractor("particlesCollisions",n=>new wV(n),e)}class TV extends rn{constructor(e,n,i,r){super(e,n,i),this.canvasSize=r,this.canvasSize={...r}}contains(e){const{width:n,height:i}=this.canvasSize,{x:r,y:o}=e;return super.contains(e)||super.contains({x:r-n,y:o})||super.contains({x:r-n,y:o-i})||super.contains({x:r,y:o-i})}intersects(e){if(super.intersects(e))return!0;const n=e,i=e,r={x:e.position.x-this.canvasSize.width,y:e.position.y-this.canvasSize.height};if(i.radius!==void 0){const o=new rn(r.x,r.y,i.radius*2);return super.intersects(o)}else if(n.size!==void 0){const o=new Ti(r.x,r.y,n.size.width*2,n.size.height*2);return super.intersects(o)}return!1}}class EV{constructor(){this.blur=5,this.color=new Xt,this.color.value="#000",this.enable=!1}load(e){e&&(e.blur!==void 0&&(this.blur=e.blur),this.color=Xt.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable))}}class CV{constructor(){this.enable=!1,this.frequency=1}load(e){e&&(e.color!==void 0&&(this.color=Xt.create(this.color,e.color)),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity))}}class AV{constructor(){this.blink=!1,this.color=new Xt,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new EV,this.triangles=new CV,this.width=1,this.warp=!1}load(e){e&&(e.id!==void 0&&(this.id=e.id),e.blink!==void 0&&(this.blink=e.blink),this.color=Xt.create(this.color,e.color),e.consent!==void 0&&(this.consent=e.consent),e.distance!==void 0&&(this.distance=e.distance),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity),this.shadow.load(e.shadow),this.triangles.load(e.triangles),e.width!==void 0&&(this.width=e.width),e.warp!==void 0&&(this.warp=e.warp))}}function MV(t,e,n,i,r){const{dx:o,dy:c,distance:u}=fn(t,e);if(!r||u<=n)return u;const d={x:Math.abs(o),y:Math.abs(c)},h={x:Math.min(d.x,i.width-d.x),y:Math.min(d.y,i.height-d.y)};return Math.sqrt(h.x**2+h.y**2)}class OV extends d2{constructor(e){super(e),this._setColor=n=>{if(!n.options.links)return;const i=this.linkContainer,r=n.options.links;let o=r.id===void 0?i.particles.linksColor:i.particles.linksColors.get(r.id);if(o)return;const c=r.color;o=O6(c,r.blink,r.consent),r.id===void 0?i.particles.linksColor=o:i.particles.linksColors.set(r.id,o)},this.linkContainer=e}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}async interact(e){if(!e.options.links)return;e.links=[];const n=e.getPosition(),i=this.container,r=i.canvas.size;if(n.x<0||n.y<0||n.x>r.width||n.y>r.height)return;const o=e.options.links,c=o.opacity,u=e.retina.linksDistance??0,d=o.warp,h=d?new TV(n.x,n.y,u,r):new rn(n.x,n.y,u),p=i.particles.quadTree.query(h);for(const g of p){const y=g.options.links;if(e===g||!(y!=null&&y.enable)||o.id!==y.id||g.spawning||g.destroyed||!g.links||e.links.some(C=>C.destination===g)||g.links.some(C=>C.destination===e))continue;const x=g.getPosition();if(x.x<0||x.y<0||x.x>r.width||x.y>r.height)continue;const b=MV(n,x,u,r,d&&y.warp);if(b>u)continue;const S=(1-b/u)*c;this._setColor(e),e.links.push({destination:g,opacity:S})}}isEnabled(e){var n;return!!((n=e.options.links)!=null&&n.enable)}loadParticlesOptions(e,...n){e.links||(e.links=new AV);for(const i of n)e.links.load((i==null?void 0:i.links)??(i==null?void 0:i.lineLinked)??(i==null?void 0:i.line_linked))}reset(){}}async function kV(t,e=!0){await t.addInteractor("particlesLinks",n=>new OV(n),e)}function RV(t){let e=!1;const{begin:n,end:i,maxDistance:r,context:o,canvasSize:c,width:u,backgroundMask:d,colorLine:h,opacity:p,links:g}=t;if(Un(n,i)<=r)Bl(o,n,i),e=!0;else if(g.warp){let x,b;const S={x:i.x-c.width,y:i.y},C=fn(n,S);if(C.distance<=r){const T=n.y-C.dy/C.dx*n.x;x={x:0,y:T},b={x:c.width,y:T}}else{const T={x:i.x,y:i.y-c.height},M=fn(n,T);if(M.distance<=r){const R=-(n.y-M.dy/M.dx*n.x)/(M.dy/M.dx);x={x:R,y:0},b={x:R,y:c.height}}else{const A={x:i.x-c.width,y:i.y-c.height},R=fn(n,A);if(R.distance<=r){const k=n.y-R.dy/R.dx*n.x;x={x:-k/(R.dy/R.dx),y:k},b={x:x.x+c.width,y:x.y+c.height}}}}x&&b&&(Bl(o,n,x),Bl(o,i,b),e=!0)}if(!e)return;o.lineWidth=u,d.enable&&(o.globalCompositeOperation=d.composite),o.strokeStyle=vs(h,p);const{shadow:y}=g;if(y.enable){const x=bi(y.color);x&&(o.shadowBlur=y.blur,o.shadowColor=vs(x))}o.stroke()}function LV(t){const{context:e,pos1:n,pos2:i,pos3:r,backgroundMask:o,colorTriangle:c,opacityTriangle:u}=t;fB(e,n,i,r),o.enable&&(e.globalCompositeOperation=o.composite),e.fillStyle=vs(c,u),e.fill()}function DV(t){return t.sort((e,n)=>e-n),t.join("_")}function c5(t,e){const n=DV(t.map(r=>r.id));let i=e.get(n);return i===void 0&&(i=st(),e.set(n,i)),i}class _V{constructor(e){this.container=e,this._drawLinkLine=(n,i)=>{const r=n.options.links;if(!(r!=null&&r.enable))return;const o=this.container,c=o.actualOptions,u=i.destination,d=n.getPosition(),h=u.getPosition();let p=i.opacity;o.canvas.draw(g=>{var T;let y;const x=(T=n.options.twinkle)==null?void 0:T.lines;if(x!=null&&x.enable){const M=x.frequency,A=bi(x.color);st()<M&&A&&(y=A,p=xe(x.opacity))}if(!y){const M=r.id!==void 0?o.particles.linksColors.get(r.id):o.particles.linksColor;y=qm(n,u,M)}if(!y)return;const b=n.retina.linksWidth??0,S=n.retina.linksDistance??0,{backgroundMask:C}=c;RV({context:g,width:b,begin:d,end:h,maxDistance:S,canvasSize:o.canvas.size,links:r,backgroundMask:C,colorLine:y,opacity:p})})},this._drawLinkTriangle=(n,i,r)=>{const o=n.options.links;if(!(o!=null&&o.enable))return;const c=o.triangles;if(!c.enable)return;const u=this.container,d=u.actualOptions,h=i.destination,p=r.destination,g=c.opacity??(i.opacity+r.opacity)/2;g<=0||u.canvas.draw(y=>{const x=n.getPosition(),b=h.getPosition(),S=p.getPosition(),C=n.retina.linksDistance??0;if(Un(x,b)>C||Un(S,b)>C||Un(S,x)>C)return;let T=bi(c.color);if(!T){const M=o.id!==void 0?u.particles.linksColors.get(o.id):u.particles.linksColor;T=qm(n,h,M)}T&&LV({context:y,pos1:x,pos2:b,pos3:S,backgroundMask:d.backgroundMask,colorTriangle:T,opacityTriangle:g})})},this._drawTriangles=(n,i,r,o)=>{var d,h,p;const c=r.destination;if(!((d=n.links)!=null&&d.triangles.enable&&((h=c.options.links)!=null&&h.triangles.enable)))return;const u=(p=c.links)==null?void 0:p.filter(g=>{const y=this._getLinkFrequency(c,g.destination);return c.options.links&&y<=c.options.links.frequency&&o.findIndex(x=>x.destination===g.destination)>=0});if(u!=null&&u.length)for(const g of u){const y=g.destination;this._getTriangleFrequency(i,c,y)>n.links.triangles.frequency||this._drawLinkTriangle(i,r,g)}},this._getLinkFrequency=(n,i)=>c5([n,i],this._freqs.links),this._getTriangleFrequency=(n,i,r)=>c5([n,i,r],this._freqs.triangles),this._freqs={links:new Map,triangles:new Map}}drawParticle(e,n){const{links:i,options:r}=n;if(!i||i.length<=0)return;const o=i.filter(c=>r.links&&this._getLinkFrequency(n,c.destination)<=r.links.frequency);for(const c of o)this._drawTriangles(r,n,c,o),c.opacity>0&&(n.retina.linksWidth??0)>0&&this._drawLinkLine(n,c)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map}particleCreated(e){if(e.links=[],!e.options.links)return;const n=this.container.retina.pixelRatio,{retina:i}=e,{distance:r,width:o}=e.options.links;i.linksDistance=r*n,i.linksWidth=o*n}particleDestroyed(e){e.links=[]}}class zV{constructor(){this.id="links"}getPlugin(e){return new _V(e)}loadOptions(){}needsPlugin(){return!0}}async function jV(t,e=!0){const n=new zV;await t.addPlugin(n,e)}async function PV(t,e=!0){await kV(t,e),await jV(t,e)}class F6{draw(e,n,i){const r=this.getCenter(n,i),o=this.getSidesData(n,i),c=o.count.numerator*o.count.denominator,u=o.count.numerator/o.count.denominator,d=180*(u-2)/u,h=Math.PI-Math.PI*d/180;if(e){e.beginPath(),e.translate(r.x,r.y),e.moveTo(0,0);for(let p=0;p<c;p++)e.lineTo(o.length,0),e.translate(o.length,0),e.rotate(h)}}getSidesCount(e){const n=e.shapeData;return Math.round(xe((n==null?void 0:n.sides)??(n==null?void 0:n.nb_sides)??5))}}class NV extends F6{getCenter(e,n){return{x:-n/(e.sides/3.5),y:-n/(2.66/3.5)}}getSidesData(e,n){const i=e.sides;return{count:{denominator:1,numerator:i},length:n*2.66/(i/3)}}}class BV extends F6{getCenter(e,n){return{x:-n,y:n/1.66}}getSidesCount(){return 3}getSidesData(e,n){return{count:{denominator:2,numerator:3},length:n*2}}}async function IV(t,e=!0){await t.addShape("polygon",new NV,e)}async function HV(t,e=!0){await t.addShape("triangle",new BV,e)}async function VV(t,e=!0){await IV(t,e),await HV(t,e)}class UV{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(e){e&&(e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=ke(e.speed)),e.decay!==void 0&&(this.decay=ke(e.decay)),e.sync!==void 0&&(this.sync=e.sync))}}class qV extends ar{constructor(){super(),this.animation=new UV,this.direction="clockwise",this.path=!1,this.value=0}load(e){e&&(super.load(e),e.direction!==void 0&&(this.direction=e.direction),this.animation.load(e.animation),e.path!==void 0&&(this.path=e.path))}}function FV(t,e){const n=t.rotate,i=t.options.rotate;if(!n||!i)return;const r=i.animation,o=(n.velocity??0)*e.factor,c=2*Math.PI,u=n.decay??1;if(r.enable){switch(n.status){case"increasing":n.value+=o,n.value>c&&(n.value-=c);break;case"decreasing":default:n.value-=o,n.value<0&&(n.value+=c);break}n.velocity&&u!==1&&(n.velocity*=u)}}class GV{constructor(e){this.container=e}init(e){const n=e.options.rotate;if(!n)return;e.rotate={enable:n.animation.enable,value:xe(n.value)*Math.PI/180},e.pathRotation=n.path;let i=n.direction;switch(i==="random"&&(i=Math.floor(st()*2)>0?"counter-clockwise":"clockwise"),i){case"counter-clockwise":case"counterClockwise":e.rotate.status="decreasing";break;case"clockwise":e.rotate.status="increasing";break}const r=n.animation;r.enable&&(e.rotate.decay=1-xe(r.decay),e.rotate.velocity=xe(r.speed)/360*this.container.retina.reduceFactor,r.sync||(e.rotate.velocity*=st())),e.rotation=e.rotate.value}isEnabled(e){const n=e.options.rotate;return n?!e.destroyed&&!e.spawning&&n.animation.enable&&!n.path:!1}loadOptions(e,...n){e.rotate||(e.rotate=new qV);for(const i of n)e.rotate.load(i==null?void 0:i.rotate)}update(e,n){var i;this.isEnabled(e)&&(FV(e,n),e.rotation=((i=e.rotate)==null?void 0:i.value)??0)}}async function YV(t,e=!0){await t.addParticleUpdater("rotate",n=>new GV(n),e)}const XV=Math.sqrt(2);class QV{draw(e,n,i){const r=i/XV,o=r*2;e.rect(-r,-r,o,o)}getSidesCount(){return 4}}async function ZV(t,e=!0){await t.addShape(["edge","square"],new QV,e)}class KV{draw(e,n,i){const r=n.sides,o=n.starInset??2;e.moveTo(0,0-i);for(let c=0;c<r;c++)e.rotate(Math.PI/r),e.lineTo(0,0-i*o),e.rotate(Math.PI/r),e.lineTo(0,0-i)}getSidesCount(e){const n=e.shapeData;return Math.round(xe((n==null?void 0:n.sides)??(n==null?void 0:n.nb_sides)??5))}particleInit(e,n){const i=n.shapeData,r=xe((i==null?void 0:i.inset)??2);n.starInset=r}}async function WV(t,e=!0){await t.addShape("star",new KV,e)}function X0(t,e,n,i,r){if(!e||!n.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0)||(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=t.value),(e.delayTime??0)>0&&e.time<(e.delayTime??0)))return;const o=An(n.offset),c=(e.velocity??0)*t.factor+o*3.6,u=e.decay??1;!r||e.status==="increasing"?(e.value+=c,e.value>i&&(e.loops||(e.loops=0),e.loops++,r&&(e.status="decreasing",e.value-=e.value%i))):(e.value-=c,e.value<0&&(e.loops||(e.loops=0),e.loops++,e.status="increasing",e.value+=e.value)),e.velocity&&u!==1&&(e.velocity*=u),e.value>i&&(e.value%=i)}function $V(t,e){if(!t.strokeColor||!t.strokeAnimation)return;const{h:n,s:i,l:r}=t.strokeColor,{h:o,s:c,l:u}=t.strokeAnimation;n&&X0(e,n,o,360,!1),i&&X0(e,i,c,100,!0),r&&X0(e,r,u,100,!0)}class JV{constructor(e){this.container=e}init(e){var c;const n=this.container,i=e.options,r=ys(i.stroke,e.id,i.reduceDuplicates);e.strokeWidth=xe(r.width)*n.retina.pixelRatio,e.strokeOpacity=xe(r.opacity??1),e.strokeAnimation=(c=r.color)==null?void 0:c.animation;const o=ec(r.color)??e.getFillColor();o&&(e.strokeColor=k6(o,e.strokeAnimation,n.retina.reduceFactor))}isEnabled(e){const n=e.strokeAnimation,{strokeColor:i}=e;return!e.destroyed&&!e.spawning&&!!n&&((i==null?void 0:i.h.value)!==void 0&&i.h.enable||(i==null?void 0:i.s.value)!==void 0&&i.s.enable||(i==null?void 0:i.l.value)!==void 0&&i.l.enable)}update(e,n){this.isEnabled(e)&&$V(e,n)}}async function eU(t,e=!0){await t.addParticleUpdater("strokeColor",n=>new JV(n),e)}const Af=["text","character","char"];class tU{draw(e,n,i,r){const o=n.shapeData;if(o===void 0)return;const c=o.value;if(c===void 0)return;n.text===void 0&&(n.text=ys(c,n.randomIndexData));const u=n.text,d=o.style??"",h=o.weight??"400",p=Math.round(i)*2,g=o.font??"Verdana",y=n.fill,x=u.length*i/2;e.font=`${d} ${h} ${p}px "${g}"`;const b={x:-x,y:i/2};e.globalAlpha=r,y?e.fillText(u,b.x,b.y):e.strokeText(u,b.x,b.y),e.globalAlpha=1}getSidesCount(){return 12}async init(e){const n=e.actualOptions;if(Af.find(i=>bt(i,n.particles.shape.type))){const i=Af.map(o=>n.particles.shape.options[o]).find(o=>!!o),r=[];It(i,o=>{r.push(nB(o.font,o.weight))}),await Promise.all(r)}}particleInit(e,n){if(!n.shape||!Af.includes(n.shape))return;const i=n.shapeData;if(i===void 0)return;const r=i.value;r!==void 0&&(n.text=ys(r,n.randomIndexData))}}async function nU(t,e=!0){await t.addShape(Af,new tU,e)}async function iU(t,e=!0){OI(t),await mV(t,!1),await lH(t,!1),await fH(t,!1),await mH(t,!1),await TH(t,!1),await kH(t,!1),await LH(t,!1),await zH(t,!1),await NH(t,!1),await VH(t,!1),await FH(t,!1),await yV(t,!1),await SV(t,!1),await PV(t,!1),await rH(),await aV(t,!1),await hV(t,!1),await VV(t,!1),await ZV(t,!1),await WV(t,!1),await nU(t,!1),await fV(t,!1),await YV(t,!1),await eU(t,!1),await sH(t,e)}const sU=()=>{const t=D.useCallback(async e=>{await iU(e),e.addShape("four-point-star",new rU)},[]);return w.jsx(w.Fragment,{children:w.jsx(B6,{init:t,options:{background:{color:"#000"},particles:{number:{value:100},color:{value:"#1a1f37"},shape:{type:"four-point-star"},size:{value:{min:1,max:2},animation:{enable:!0,speed:2,minimumValue:2,sync:!1}},opacity:{value:{min:.3,max:1},animation:{enable:!0,speed:1.5,minimumValue:.3,sync:!1}},move:{enable:!0,speed:.05,direction:"none",random:!0,straight:!1,outModes:{default:"out"}}},detectRetina:!0}})})};class rU{draw(e,n,i){e.beginPath(),e.moveTo(0,-i),e.lineTo(i/2,0),e.lineTo(0,i),e.lineTo(-i/2,0),e.closePath(),e.fill()}getSidesCount(){return 4}}const u5="/assets/costomer-CaPtNmD-.png",aU=uo`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`,oU=j.div`
  perspective: 1900px;
  display: flex;
  justify-content: center;
`,lU=j.div`
  width: 100vh;
  height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  animation: ${aU} 15s linear infinite;
  backface-visibility: hidden;
`,cU=j.img`
  position: absolute;
  left: 17%;
  width: 70%;
  height: 70%;
  backface-visibility: hidden;
`,uU=j.img`
  position: absolute;
  left: 11%;
  width: 70%;
  height: 70%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`,fU=j.div`
  position: absolute;
  top: 127px;
`,dU=()=>{const{t}=Qt();return w.jsxs(t2,{style:{marginTop:450,marginBottom:400},children:[w.jsx(e2,{style:{display:"flex",justifyContent:"center"},children:w.jsx(oU,{children:w.jsxs(lU,{children:[w.jsx(cU,{src:u5}),w.jsx(uU,{src:u5})]})})}),w.jsxs(fU,{children:[w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},style:{position:"relative",zIndex:1,width:"100%"},children:w.jsxs(ES,{children:["Mobile UX ",w.jsx(d6,{src:DS,alt:"💰"})]})}),w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.3},viewport:{once:!1,amount:.3},children:[" ",w.jsx(CS,{children:"Create personalized customer journeys"})]}),w.jsxs(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:1.5,delay:.9},viewport:{once:!1,amount:.3},children:[" ",w.jsxs(md,{children:[w.jsx("a",{href:"https://sabsus.app/registrcompany/web",target:"_blank",rel:"noopener noreferrer",children:w.jsx(gd,{children:t("hero.buttons.tryFree")})}),w.jsx("a",{href:"https://sabsus.app/login/demo@sabsus.com/demo2025",target:"_blank",rel:"noopener noreferrer",children:w.jsx(yd,{children:t("hero.buttons.viewDemo")})})]})]})]})]})},hU="/assets/Dvd-BRVstBpY.svg",pU="/assets/key-COrsZ5fS.png",mU="/assets/key1-DTKSUhVV.png",gU="/assets/key2-Dk4BhJe9.png",yU="/assets/key3-7vFRfLE_.png",vU="/assets/key4-CVkze-On.png",xU="/assets/key5-DtmJhm8-.png",bU="/assets/key6-BbufmUi-.png",wU="/assets/key7-B4ctNb0f.png",SU=j(Y.div)`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .swiper {
    width: 100%;
    padding: 0 0%;
    margin: 0 auto;
  }

  .swiper-slide {
  margin: 0 auto;
    display: flex;
     width: 100% !important;
    justify-content: center;
    transition: transform 0.3s ease;
  }


`,TU=j(Y.div)`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
  }
`,f5=j.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 20px;
  width: 311px;
  height: 350px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08),
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  will-change: transform, box-shadow;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  gap: 10px;
  align-items: flex-start;

  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`,d5=j.img`
  filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.7));
  transition: filter 0.3s ease;
  
  &:hover {
    filter: drop-shadow(0 0 30px rgba(138, 43, 226, 1.7));
`,h5=j.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  color: var(--white-100);
`,p5=j.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--white-60);
`,EU=()=>{const t=yi({query:"(max-width: 767px)"}),e=o=>{switch(o){case 0:return{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1}};case 1:return{initial:{x:100,opacity:0},whileInView:{x:0,opacity:1}};case 2:return{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1}};case 3:return{initial:{scale:.5,opacity:0},whileInView:{scale:1,opacity:1}};case 4:return{initial:{x:100,opacity:0},whileInView:{x:0,opacity:1}};case 5:return{initial:{x:-100,opacity:0},whileInView:{x:0,opacity:1}};case 6:return{initial:{x:100,opacity:0},whileInView:{x:0,opacity:1}};default:return{initial:{opacity:0},whileInView:{opacity:1}}}},n=[{id:1,imageUrl:pU,title:"Branded Mobile App",text:"Get a custom app with your brand's logo and colors. Great for user engagement and repeat orders."},{id:2,imageUrl:mU,title:"Loyalty Programs",text:"Set up bonuses, cashback or discounts based on user activity.Build habits and retain your best."},{id:3,imageUrl:gU,title:"Smart Delivery Options",text:"Choose from delivery, pickup, or dine-in. Auto-location and saved addresses included."},{id:4,imageUrl:yU,title:"Push Notifications",text:"Send timely updates about orders, promos or new arrivals. Drive engagement and reduce no-shows."},{id:5,imageUrl:vU,title:"Order History & Repeats",text:"Let users reorder in seconds from their past purchases. Track preferences for experience."},{id:6,imageUrl:xU,title:"Table Reservations",text:"Book tables in advance with time slots and guest count. Reduce queues and optimize floor space."},{id:7,imageUrl:bU,title:"Customer Feedback",text:"Collect reviews and ratings per order.Show you listen, and build trust."},{id:8,imageUrl:wU,title:"Personal Account Area",text:"Manage orders, loyalty status, saved data, and preferences. A seamless all-in-one experience for users."}];return w.jsxs(SU,{as:Y.div,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.2},children:[t&&w.jsx(Y.div,{children:w.jsx(ir,{loop:!0,slidesPerView:1,spaceBetween:0,autoplay:{delay:1e3,disableOnInteraction:!1,reverseDirection:!1},speed:4e3,modules:[Ir],className:"mySwiper",children:n.map(o=>w.jsx(Vr,{children:w.jsxs(f5,{children:[w.jsx(d5,{src:o.imageUrl,alt:o.title}),w.jsx(h5,{children:o.title}),w.jsx(p5,{children:o.text})]})},o.id))})}),!t&&w.jsx(TU,{children:n.map((o,c)=>w.jsxs(f5,{as:Y.div,...e(c),transition:{duration:.5,delay:c*.1},viewport:{once:!1,amount:.3},children:[" ",w.jsxs(Y.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},transition:{duration:.4,delay:c*.25},viewport:{once:!1,amount:.3},children:[w.jsx(d5,{src:o.imageUrl,alt:o.title})," "]})," ",w.jsxs(Y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:c*.2},viewport:{once:!1,amount:.3},children:[w.jsx(h5,{children:o.title})," "]}),w.jsx(p5,{children:o.text})]},o.id))})]})},CU=j(Y.div)`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

`,AU=()=>w.jsxs(CU,{children:[w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:w.jsxs(h6,{children:["Key Capabilities ",w.jsx(Jl,{src:hU,alt:""})]})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:w.jsxs(p6,{children:[" ","Speed up orders, streamline every shift"]})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!1,amount:.3},children:w.jsx(m6,{children:"Instant processing, QR payments, team roles, shift tracking — designed for smooth in-store flow."})}),w.jsx(EU,{})]}),MU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgBfZFdKGRhGMffM+fYXXasNTtm7ZrGcjG22dXerKkJGSFxMVz5aMhHyg1R8pFEai5cUZJSJBJjpPE1CYW50JBmyCUXuBDThGaE0XHO3zkKIx//et7et/fX8/yf56HI+5IIwWflGDUSqSLh3HPgZN4DO4uLk/P0+jmr6q/UExpPXEur7FswcZjHxyoLSiBcOW//AIAL/qehffNVeHnDbputaeKihSo9DAPf9SXMVjMfG6cxiv+UeMxFSVM7wj/ELyiVe8blSy6zuZd32FbgYf2YsU2yhoIS/0NW6uSHvAsUgxtCoNDlc+q6KVSs32J/pw/Dlgm2rKoaMlmU8t5Bt/rzP7QEA0U0ptUSl6Zxhm/dusJuYgKiq0bYlNxCfIuM0Qowfe+5dOiT6Sg72LYk49Q5F+kRWSovIrRhRPc9k1fZRxnvtiP89GTfKU7t0ZIY8JX63FemmzRCY1EXuuakaBwGkdqHQTwTXCHHgOW27U8szqzywkXqi1voh3fJQ1pfwNm/SCROf8N/mIEze5ippZzEQUHBLf04GeDgSQ3/g7Tz9ZLuQT35Kr6H6pgkSwxtCNxLoO4AH2GwjKsZieIAAAAASUVORK5CYII=",OU="/assets/Frame%203577-background-Cg3NCZBA.png",kU="/assets/Frame%2035771-iphon-DVTv7mZA.png",RU="/assets/black%20titanium2-iphon-BiMZmQrx.png",LU="/assets/Lightpered-linie-BAbAbg-a.png",DU=j(Y.div)`
  display: flex;
  padding: 0 0px;
  max-width: 1400px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_U=j(Y.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  align-items: center;
  will-change: transform, opacity;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zU=j(Y.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
   max-width: 630px;
    width: 100%;
    margin: 0 auto 26px;
    display: flex;
text-align: start;
`,jU=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 630px;
    width: 100%;
    margin: 0 auto 26px;
    display: flex;
    text-align: start;
  }
`,PU=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    max-width: 630px;
    width: 100%;
    margin: 0 auto 26px;
    top: 80%;
    right: 64%;
    text-align: start;
  }
`,NU=j.div`
  margin-bottom: 374px;
  @media screen and (min-width: 768px) {
    margin-bottom: 700px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 609px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`,BU=j.div`
  position: absolute;
  top: 65%;
  left: 50%;
  width: 375px;
  height: 354px;
  transform: translate(-50%, -50%);
  overflow: visible;
  @media screen and (min-width: 768px) {
    top: 60%;
    width: 700px;
    height: 633px;
  }

  @media screen and (min-width: 1440px) {
    left: 70%;
    top: 50%;
    height: 660px;
  }
`,IU=j(Y.img)`
  position: absolute;
  bottom: 22%;
  left: 0;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
  // z-index: -123;
`,HU=j(Y.img)`
  position: absolute;
  top: 10%;
  left: 6%;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,VU=j(Y.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,UU=j(Y.img)`
  position: absolute;
  top: 9%;
  left: 16%;
  width: 77%;
  height: 77%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    left: 15%;
  }

  @media screen and (min-width: 1440px) {
  left: 16%;
  }
`,qU=j(Y.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0;
  border-radius: 50%;
  pointer-events: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,FU=()=>w.jsxs(DU,{children:[w.jsxs(NU,{children:[w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!1,amount:.3},children:w.jsxs(_U,{children:["Live Prep Insights",w.jsx(Jl,{src:MU,alt:"🚀"})]})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!1,amount:.3},children:w.jsx(zU,{children:"All-in-one engagement platform"})}),w.jsx(Y.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!1,amount:.3},children:w.jsx(jU,{children:"Unify every user-facing channel into one seamless experience. From mobile orders to loyalty rewards — everything is built to feel intuitive and fast."})})]}),w.jsxs(BU,{children:[w.jsx(VU,{src:OU,alt:"background lines",initial:{opacity:.8},animate:{opacity:1},transition:{duration:2,repeat:1/0,repeatType:"reverse"}}),w.jsx(IU,{src:kU,alt:"phone",initial:{y:-10},animate:{y:0},transition:{duration:3,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}}),w.jsx(HU,{src:RU,alt:"phone",initial:{y:0},animate:{y:-10},transition:{duration:3,repeat:1/0,repeatType:"reverse",ease:"easeInOut",delay:.5}}),w.jsx(UU,{src:LU,alt:"glowing lines",initial:{opacity:.5},animate:{opacity:1},transition:{duration:2,repeat:1/0,repeatType:"reverse"}}),w.jsx(qU,{initial:{scale:.8,opacity:0},animate:{scale:1.2,opacity:.3},transition:{duration:3,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}})]}),w.jsx(PU,{children:"Your brand, your flow. Customize touchpoints with full control over visuals, behavior, and engagement logic — all while delivering delight across the customer journey."})]}),GU="/assets/Videocassette-eJLk5PIc.svg",YU=j.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,XU=j(Y.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  align-items: center;
  will-change: transform, opacity; /* Оптимізація анімації */

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }

  @media screen and (min-width: 1440px) {
    /* Додаткові стилі для десктопів */
  }
`,QU=j(Y.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`,ZU=j(Y.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`,KU=j.img`
  border-radius: 25px;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  margin-left: 6px;

  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);

  background: linear-gradient(
      315deg,
      rgba(122, 121, 122, 0) 7%,
      rgba(172, 172, 172, 0) 86%
    )
    rgba(255, 255, 255, 0.03);

  -webkit-transform: translateZ(0);
`,WU=()=>w.jsxs(YU,{children:[w.jsxs(XU,{children:["Step-by-step guidance ",w.jsx(KU,{src:GU,alt:"⏺️"})]}),w.jsx(QU,{children:"Master your CRM in minutes"}),w.jsx(ZU,{children:"Watch a walkthrough of our CRM system — from setting up profiles to managing your pipeline. This guide shows how to maximize every feature."})]}),$U=()=>w.jsxs(a2,{children:[w.jsx(dU,{}),w.jsx(AU,{}),w.jsx(FU,{}),w.jsx(WU,{})]}),JU=()=>w.jsx("div",{children:"PosStaffOperations"}),eq=()=>w.jsx("div",{children:"KitchenFulfillment"}),tq=()=>w.jsx("div",{children:"InventoryWarehousing"}),nq=()=>w.jsx("div",{children:"AnalyticsManagement"}),iq="/assets/HeroMarketing-BLmUJ5Cs.png",sq=D.lazy(()=>r2(()=>import("./react-spline-CLMTNUqx.js"),[])),m5=()=>w.jsx("img",{src:iq,alt:"3D Scene",style:{width:"100%",height:"auto",filter:"blur(0.5px)"}}),rq=()=>{const t=f6("(max-width: 768px)");return w.jsx(t2,{style:{marginTop:370},children:w.jsx(e2,{children:t?w.jsx(m5,{}):w.jsx(D.Suspense,{fallback:w.jsx(m5,{}),children:w.jsx(sq,{scene:"https://prod.spline.design/xuwX0qwENokWyrTw/scene.splinecode",style:{width:"100%",transition:"transform 0.5s ease-out",filter:"blur(0.5px)",transform:"rotate(180deg)"}})})})})},aq=()=>w.jsx(a2,{children:w.jsx(rq,{})}),oq=()=>w.jsx("div",{children:"IntegrationScaling"}),lq=j.div`

display: flex;
    flex-direction: column;
margin: 0 auto;
margin-top: 70px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`,cq=j.div`
margin: 0 auto;
margin-top: 30px;
margin-bottom: 50px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`,uq=j.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 28px;
line-height: 162%;
color: #fff;
text-align: center;
@media screen and (min-width: 744px){
font-size: 48px;

}

@media screen and (min-width: 1440px){


}
`;j.div`
    margin: 0 auto;
    display: flex;
    gap: 8%;
    flex-direction: row;
    justify-content: center;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;j.a`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 13px;
  line-height: 162%;
   color: #808080;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    color:rgb(255, 255, 255);
  }

 

  

  &.active {
    color:rgb(255, 247, 247);
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
  }



  @media screen and (min-width: 744px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    // Можна додавати додаткові стилі для великих екранів
  }
`;j.div`
  cursor: pointer;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
  
  @media screen and (min-width: 744px) {
    height: 270px;
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${t=>t.$isVisible?1:0};
  z-index: 1;
  will-change: opacity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    opacity: ${t=>t.$isVisible?0:1};
    transition: opacity 0.6s ease-in-out;
    z-index: 1;
    pointer-events: none;
  }
`;j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${t=>t.$isVisible?1:0};
  z-index: 0;
  will-change: opacity;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;j.div`
  position: absolute;        // 👈 fixed — прив’язка до viewport
  top: 0;
  left: 0;
  width: 100vw;           // 👈 повна ширина екрана
  height: 100vh;          // 👈 повна висота екрана
  overflow: hidden;     /* 👈 або фіксована висота */
  z-index: 1000;     /* 👈 поверх усього */
  transition: opacity 0.3s ease-out;
  opacity: ${t=>t.$isVisible?1:0};
  z-index: 0;
  will-change: opacity;
  background-color: #000;

  video {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${t=>t.$isVisible?"47%":"100%"};
    background: ${t=>t.$isVisible?"linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%)":`url(${t.$imageUrl})`};
    background-size: cover;
    background-position: center;
    transition: all 0.6s ease-in-out;
    z-index: 1;
    pointer-events: none;
  }
`;j.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;
  opacity: ${t=>t.$isVisible?1:0};
  transition: opacity 0.4s ease-out;
  z-index: 2;
  will-change: opacity;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  
  @media screen and (min-width: 744px) {
    font-size: 22px;
  }
`;const fq=j.div`
margin-bottom: 50px;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;j.div`
height: 200px;
width: 100%;
@media screen and (min-width: 744px){
height: 270px
position: relative;

}

@media screen and (min-width: 1440px){
height: 400px;

}
`;j.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
@media screen and (min-width: 744px){


}

@media screen and (min-width: 1440px){


}
`;j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${t=>t.$src});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  z-index: 1;
`;j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  z-index: 0;
`;j.div`
    display: flex;
    height: 200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
@media screen and (min-width: 744px){
height: 400px;

}

@media screen and (min-width: 1440px){


}
`;j.h3`
font-family: var(--font-family);
font-weight: 600;
font-size: 18px;
text-align: center;
color: #fff;

@media screen and (min-width: 744px){

font-size: 32px;
}

@media screen and (min-width: 1440px){


}
`;j.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 12px;
text-align: center;
color: #808080;
@media screen and (min-width: 744px){
font-size: 16px;

}

@media screen and (min-width: 1440px){


}
`;j.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
margin: 0 auto;
height: 420px;
// padding: 46px 280px;
height: 200px;
width: 100%;
@media screen and (min-width: 744px){
height: 400px;

}

@media screen and (min-width: 1440px){
// padding: 146px 880px;

}
`;j.p`
font-family: var(--third-family);
font-weight: 600;
font-size: 24px;
color: #404040;
    text-align: center;
    line-height: 162%;
@media screen and (min-width: 744px){

font-size: 42px;
}

@media screen and (min-width: 1440px){
font-size: 64px;

}
`;const dq=()=>w.jsxs(lq,{children:[w.jsx(cq,{children:w.jsx(uq,{children:"WORK"})}),w.jsx(fq,{}),w.jsx(n2,{})]}),hq=j(Y.div)`
  width: 100%;
  top: 0;
  position: relative;
`,Tn=({children:t})=>(D.useEffect(()=>{window.scrollTo(0,0)},[]),w.jsx(hq,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0,y:-100},transition:{duration:.4,ease:[.22,1,.36,1]},children:t})),pq=()=>{const t=Ts();return D.useEffect(()=>{window.scrollTo(0,0)},[t.pathname]),w.jsxs(i4,{mode:"wait",children:[w.jsx(sU,{}),w.jsxs(fC,{location:t,children:[w.jsx(Ft,{path:"/",element:w.jsx(lC,{to:"/home"})}),w.jsxs(Ft,{path:"/",element:w.jsx(Y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:w.jsx(OD,{})}),children:[w.jsx(Ft,{index:!0,element:w.jsx(Tn,{children:w.jsx(L0,{})})}),w.jsx(Ft,{path:"/home",element:w.jsx(Tn,{children:w.jsx(L0,{})})}),w.jsx(Ft,{path:"/service",element:w.jsx(Tn,{children:w.jsx(dq,{})})}),w.jsx(Ft,{path:"/service/customer-experience",element:w.jsx(Tn,{children:w.jsx($U,{})})}),w.jsx(Ft,{path:"/service/pos-staff-operations",element:w.jsx(Tn,{children:w.jsx(JU,{})})}),w.jsx(Ft,{path:"/service/kitchen-fulfillment",element:w.jsx(Tn,{children:w.jsx(eq,{})})}),w.jsx(Ft,{path:"/service/inventory-warehousing",element:w.jsx(Tn,{children:w.jsx(tq,{})})}),w.jsx(Ft,{path:"/service/analytics-management",element:w.jsx(Tn,{children:w.jsx(nq,{})})}),w.jsx(Ft,{path:"/service/marketing-customization",element:w.jsx(Tn,{children:w.jsx(aq,{})})}),w.jsx(Ft,{path:"/service/integration-scaling",element:w.jsx(Tn,{children:w.jsx(oq,{})})}),w.jsx(Ft,{path:"/about",element:w.jsx(Tn,{children:w.jsx(LN,{})})}),w.jsx(Ft,{path:"/pricing",element:w.jsx(Tn,{children:w.jsx(IN,{})})}),w.jsx(Ft,{path:"/contact",element:w.jsx(Tn,{children:w.jsx(NN,{})})}),w.jsx(Ft,{path:"*",element:w.jsx(Tn,{children:w.jsx(L0,{})})})]})]},t.pathname)]})},Ce=t=>typeof t=="string",Cl=()=>{let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n},g5=t=>t==null?"":""+t,mq=(t,e,n)=>{t.forEach(i=>{e[i]&&(n[i]=e[i])})},gq=/###/g,y5=t=>t&&t.indexOf("###")>-1?t.replace(gq,"."):t,v5=t=>!t||Ce(t),Il=(t,e,n)=>{const i=Ce(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(v5(t))return{};const o=y5(i[r]);!t[o]&&n&&(t[o]=new n),Object.prototype.hasOwnProperty.call(t,o)?t=t[o]:t={},++r}return v5(t)?{}:{obj:t,k:y5(i[r])}},x5=(t,e,n)=>{const{obj:i,k:r}=Il(t,e,Object);if(i!==void 0||e.length===1){i[r]=n;return}let o=e[e.length-1],c=e.slice(0,e.length-1),u=Il(t,c,Object);for(;u.obj===void 0&&c.length;)o=`${c[c.length-1]}.${o}`,c=c.slice(0,c.length-1),u=Il(t,c,Object),u!=null&&u.obj&&typeof u.obj[`${u.k}.${o}`]<"u"&&(u.obj=void 0);u.obj[`${u.k}.${o}`]=n},yq=(t,e,n,i)=>{const{obj:r,k:o}=Il(t,e,Object);r[o]=r[o]||[],r[o].push(n)},Yf=(t,e)=>{const{obj:n,k:i}=Il(t,e);if(n&&Object.prototype.hasOwnProperty.call(n,i))return n[i]},vq=(t,e,n)=>{const i=Yf(t,n);return i!==void 0?i:Yf(e,n)},G6=(t,e,n)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?Ce(t[i])||t[i]instanceof String||Ce(e[i])||e[i]instanceof String?n&&(t[i]=e[i]):G6(t[i],e[i],n):t[i]=e[i]);return t},La=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var xq={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const bq=t=>Ce(t)?t.replace(/[&<>"'\/]/g,e=>xq[e]):t;class wq{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Sq=[" ",",","?","!",";"],Tq=new wq(20),Eq=(t,e,n)=>{e=e||"",n=n||"";const i=Sq.filter(c=>e.indexOf(c)<0&&n.indexOf(c)<0);if(i.length===0)return!0;const r=Tq.getRegExp(`(${i.map(c=>c==="?"?"\\?":c).join("|")})`);let o=!r.test(t);if(!o){const c=t.indexOf(n);c>0&&!r.test(t.substring(0,c))&&(o=!0)}return o},Fm=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const i=e.split(n);let r=t;for(let o=0;o<i.length;){if(!r||typeof r!="object")return;let c,u="";for(let d=o;d<i.length;++d)if(d!==o&&(u+=n),u+=i[d],c=r[u],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&d<i.length-1)continue;o+=d-o+1;break}r=c}return r},Xf=t=>t==null?void 0:t.replace("_","-"),Cq={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var n,i;(i=(n=console==null?void 0:console[t])==null?void 0:n.apply)==null||i.call(n,console,e)}};class Qf{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||Cq,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,i,r){return r&&!this.debug?null:(Ce(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Qf(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Qf(this.logger,e)}}var Bi=new Qf;class wd{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(n)||0;this.observers[i].set(n,r+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(c=>{let[u,d]=c;for(let h=0;h<d;h++)u(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(c=>{let[u,d]=c;for(let h=0;h<d;h++)u.apply(u,[e,...i])})}}class b5 extends wd{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,i){var h,p;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,c=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let u;e.indexOf(".")>-1?u=e.split("."):(u=[e,n],i&&(Array.isArray(i)?u.push(...i):Ce(i)&&o?u.push(...i.split(o)):u.push(i)));const d=Yf(this.data,u);return!d&&!n&&!i&&e.indexOf(".")>-1&&(e=u[0],n=u[1],i=u.slice(2).join(".")),d||!c||!Ce(i)?d:Fm((p=(h=this.data)==null?void 0:h[e])==null?void 0:p[n],i,o)}addResource(e,n,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let u=[e,n];i&&(u=u.concat(c?i.split(c):i)),e.indexOf(".")>-1&&(u=e.split("."),r=n,n=u[1]),this.addNamespaces(n),x5(this.data,u,r),o.silent||this.emit("added",e,n,i,r)}addResources(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in i)(Ce(i[o])||Array.isArray(i[o]))&&this.addResource(e,n,o,i[o],{silent:!0});r.silent||this.emit("added",e,n,i)}addResourceBundle(e,n,i,r,o){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},u=[e,n];e.indexOf(".")>-1&&(u=e.split("."),r=i,i=n,n=u[1]),this.addNamespaces(n);let d=Yf(this.data,u)||{};c.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?G6(d,i,o):d={...d,...i},x5(this.data,u,d),c.silent||this.emit("added",e,n,i)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(r=>n[r]&&Object.keys(n[r]).length>0)}toJSON(){return this.data}}var Y6={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,i,r){return t.forEach(o=>{var c;e=((c=this.processors[o])==null?void 0:c.process(e,n,i,r))??e}),e}};const w5={},S5=t=>!Ce(t)&&typeof t!="boolean"&&typeof t!="number";class Zf extends wd{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),mq(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Bi.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,n);return(i==null?void 0:i.res)!==void 0}extractFromKey(e,n){let i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let o=n.ns||this.options.defaultNS||[];const c=i&&e.indexOf(i)>-1,u=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Eq(e,i,r);if(c&&!u){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:Ce(o)?[o]:o};const h=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(h[0])>-1)&&(o=h.shift()),e=h.join(r)}return{key:e,namespaces:Ce(o)?[o]:o}}translate(e,n,i){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:c,namespaces:u}=this.extractFromKey(e[e.length-1],n),d=u[u.length-1],h=n.lng||this.language,p=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(p){const N=n.nsSeparator||this.options.nsSeparator;return r?{res:`${d}${N}${c}`,usedKey:c,exactUsedKey:c,usedLng:h,usedNS:d,usedParams:this.getUsedParamsDetails(n)}:`${d}${N}${c}`}return r?{res:c,usedKey:c,exactUsedKey:c,usedLng:h,usedNS:d,usedParams:this.getUsedParamsDetails(n)}:c}const g=this.resolve(e,n);let y=g==null?void 0:g.res;const x=(g==null?void 0:g.usedKey)||c,b=(g==null?void 0:g.exactUsedKey)||c,S=["[object Number]","[object Function]","[object RegExp]"],C=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,T=!this.i18nFormat||this.i18nFormat.handleAsObject,M=n.count!==void 0&&!Ce(n.count),A=Zf.hasDefaultValue(n),R=M?this.pluralResolver.getSuffix(h,n.count,n):"",k=n.ordinal&&M?this.pluralResolver.getSuffix(h,n.count,{ordinal:!1}):"",P=M&&!n.ordinal&&n.count===0,L=P&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${R}`]||n[`defaultValue${k}`]||n.defaultValue;let I=y;T&&!y&&A&&(I=L);const V=S5(I),F=Object.prototype.toString.apply(I);if(T&&I&&V&&S.indexOf(F)<0&&!(Ce(C)&&Array.isArray(I))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const N=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,I,{...n,ns:u}):`key '${c} (${this.language})' returned an object instead of string.`;return r?(g.res=N,g.usedParams=this.getUsedParamsDetails(n),g):N}if(o){const N=Array.isArray(I),z=N?[]:{},te=N?b:x;for(const $ in I)if(Object.prototype.hasOwnProperty.call(I,$)){const ce=`${te}${o}${$}`;A&&!y?z[$]=this.translate(ce,{...n,defaultValue:S5(L)?L[$]:void 0,joinArrays:!1,ns:u}):z[$]=this.translate(ce,{...n,joinArrays:!1,ns:u}),z[$]===ce&&(z[$]=I[$])}y=z}}else if(T&&Ce(C)&&Array.isArray(y))y=y.join(C),y&&(y=this.extendTranslation(y,e,n,i));else{let N=!1,z=!1;!this.isValidLookup(y)&&A&&(N=!0,y=L),this.isValidLookup(y)||(z=!0,y=c);const $=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&z?void 0:y,ce=A&&L!==y&&this.options.updateMissing;if(z||N||ce){if(this.logger.log(ce?"updateKey":"missingKey",h,d,c,ce?L:y),o){const ae=this.resolve(c,{...n,keySeparator:!1});ae&&ae.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let U=[];const J=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&J&&J[0])for(let ae=0;ae<J.length;ae++)U.push(J[ae]);else this.options.saveMissingTo==="all"?U=this.languageUtils.toResolveHierarchy(n.lng||this.language):U.push(n.lng||this.language);const ee=(ae,_,Z)=>{var se;const oe=A&&Z!==y?Z:$;this.options.missingKeyHandler?this.options.missingKeyHandler(ae,d,_,oe,ce,n):(se=this.backendConnector)!=null&&se.saveMissing&&this.backendConnector.saveMissing(ae,d,_,oe,ce,n),this.emit("missingKey",ae,d,_,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&M?U.forEach(ae=>{const _=this.pluralResolver.getSuffixes(ae,n);P&&n[`defaultValue${this.options.pluralSeparator}zero`]&&_.indexOf(`${this.options.pluralSeparator}zero`)<0&&_.push(`${this.options.pluralSeparator}zero`),_.forEach(Z=>{ee([ae],c+Z,n[`defaultValue${Z}`]||L)})}):ee(U,c,L))}y=this.extendTranslation(y,e,n,g,i),z&&y===c&&this.options.appendNamespaceToMissingKey&&(y=`${d}:${c}`),(z||N)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}:${c}`:c,N?y:void 0))}return r?(g.res=y,g.usedParams=this.getUsedParamsDetails(n),g):y}extendTranslation(e,n,i,r,o){var h,p;var c=this;if((h=this.i18nFormat)!=null&&h.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const g=Ce(e)&&(((p=i==null?void 0:i.interpolation)==null?void 0:p.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(g){const b=e.match(this.interpolator.nestingRegexp);y=b&&b.length}let x=i.replace&&!Ce(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(x={...this.options.interpolation.defaultVariables,...x}),e=this.interpolator.interpolate(e,x,i.lng||this.language||r.usedLng,i),g){const b=e.match(this.interpolator.nestingRegexp),S=b&&b.length;y<S&&(i.nest=!1)}!i.lng&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var b=arguments.length,S=new Array(b),C=0;C<b;C++)S[C]=arguments[C];return(o==null?void 0:o[0])===S[0]&&!i.context?(c.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${n[0]}`),null):c.translate(...S,n)},i)),i.interpolation&&this.interpolator.reset()}const u=i.postProcess||this.options.postProcess,d=Ce(u)?[u]:u;return e!=null&&(d!=null&&d.length)&&i.applyPostProcessor!==!1&&(e=Y6.handle(d,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,o,c,u;return Ce(e)&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(d,n),p=h.key;r=p;let g=h.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const y=n.count!==void 0&&!Ce(n.count),x=y&&!n.ordinal&&n.count===0,b=n.context!==void 0&&(Ce(n.context)||typeof n.context=="number")&&n.context!=="",S=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);g.forEach(C=>{var T,M;this.isValidLookup(i)||(u=C,!w5[`${S[0]}-${C}`]&&((T=this.utils)!=null&&T.hasLoadedNamespace)&&!((M=this.utils)!=null&&M.hasLoadedNamespace(u))&&(w5[`${S[0]}-${C}`]=!0,this.logger.warn(`key "${r}" for languages "${S.join(", ")}" won't get resolved as namespace "${u}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(A=>{var P;if(this.isValidLookup(i))return;c=A;const R=[p];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(R,p,A,C,n);else{let L;y&&(L=this.pluralResolver.getSuffix(A,n.count,n));const I=`${this.options.pluralSeparator}zero`,V=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(R.push(p+L),n.ordinal&&L.indexOf(V)===0&&R.push(p+L.replace(V,this.options.pluralSeparator)),x&&R.push(p+I)),b){const F=`${p}${this.options.contextSeparator}${n.context}`;R.push(F),y&&(R.push(F+L),n.ordinal&&L.indexOf(V)===0&&R.push(F+L.replace(V,this.options.pluralSeparator)),x&&R.push(F+I))}}let k;for(;k=R.pop();)this.isValidLookup(i)||(o=k,i=this.getResource(A,C,k,n))}))})}),{res:i,usedKey:r,exactUsedKey:o,usedLng:c,usedNS:u}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,i){var o;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(o=this.i18nFormat)!=null&&o.getResource?this.i18nFormat.getResource(e,n,i,r):this.resourceStore.getResource(e,n,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Ce(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const o of n)delete r[o]}return r}static hasDefaultValue(e){const n="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&n===i.substring(0,n.length)&&e[i]!==void 0)return!0;return!1}}class T5{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Bi.create("languageUtils")}getScriptPartFromCode(e){if(e=Xf(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=Xf(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(Ce(e)&&e.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(i=>{if(n)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(n=r)}),!n&&this.options.supportedLngs&&e.forEach(i=>{if(n)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return n=r;n=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&(o.indexOf("-")>0&&r.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===r||o.indexOf(r)===0&&r.length>1))return o})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),Ce(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let i=e[n];return i||(i=e[this.getScriptPartFromCode(n)]),i||(i=e[this.formatLanguageCode(n)]),i||(i=e[this.getLanguagePartFromCode(n)]),i||(i=e.default),i||[]}toResolveHierarchy(e,n){const i=this.getFallbackCodes(n||this.options.fallbackLng||[],e),r=[],o=c=>{c&&(this.isSupportedCode(c)?r.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return Ce(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):Ce(e)&&o(this.formatLanguageCode(e)),i.forEach(c=>{r.indexOf(c)<0&&o(this.formatLanguageCode(c))}),r}}const E5={zero:0,one:1,two:2,few:3,many:4,other:5},C5={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Aq{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Bi.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Xf(e==="dev"?"en":e),r=n.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let c;try{c=new Intl.PluralRules(i,{type:r})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),C5;if(!e.match(/-|_/))return C5;const d=this.languageUtils.getLanguagePartFromCode(e);c=this.getRule(d,n)}return this.pluralRulesCache[o]=c,c}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,n);return i||(i=this.getRule("dev",n)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${n}${r}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(e,n);return i||(i=this.getRule("dev",n)),i?i.resolvedOptions().pluralCategories.sort((r,o)=>E5[r]-E5[o]).map(r=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r}`):[]}getSuffix(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,i))}}const A5=function(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=vq(t,e,n);return!o&&r&&Ce(n)&&(o=Fm(t,n,i),o===void 0&&(o=Fm(e,n,i))),o},Q0=t=>t.replace(/\$/g,"$$$$");class Mq{constructor(){var n;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Bi.create("interpolator"),this.options=e,this.format=((n=e==null?void 0:e.interpolation)==null?void 0:n.format)||(i=>i),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:i,useRawValueToEscape:r,prefix:o,prefixEscaped:c,suffix:u,suffixEscaped:d,formatSeparator:h,unescapeSuffix:p,unescapePrefix:g,nestingPrefix:y,nestingPrefixEscaped:x,nestingSuffix:b,nestingSuffixEscaped:S,nestingOptionsSeparator:C,maxReplaces:T,alwaysFormat:M}=e.interpolation;this.escape=n!==void 0?n:bq,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=o?La(o):c||"{{",this.suffix=u?La(u):d||"}}",this.formatSeparator=h||",",this.unescapePrefix=p?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":p||"",this.nestingPrefix=y?La(y):x||La("$t("),this.nestingSuffix=b?La(b):S||La(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=T||1e3,this.alwaysFormat=M!==void 0?M:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,i)=>(n==null?void 0:n.source)===i?(n.lastIndex=0,n):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,i,r){var x;let o,c,u;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=b=>{if(b.indexOf(this.formatSeparator)<0){const M=A5(n,d,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(M,void 0,i,{...r,...n,interpolationkey:b}):M}const S=b.split(this.formatSeparator),C=S.shift().trim(),T=S.join(this.formatSeparator).trim();return this.format(A5(n,d,C,this.options.keySeparator,this.options.ignoreJSONStructure),T,i,{...r,...n,interpolationkey:C})};this.resetRegExp();const p=(r==null?void 0:r.missingInterpolationHandler)||this.options.missingInterpolationHandler,g=((x=r==null?void 0:r.interpolation)==null?void 0:x.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>Q0(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?Q0(this.escape(b)):Q0(b)}].forEach(b=>{for(u=0;o=b.regex.exec(e);){const S=o[1].trim();if(c=h(S),c===void 0)if(typeof p=="function"){const T=p(e,o,r);c=Ce(T)?T:""}else if(r&&Object.prototype.hasOwnProperty.call(r,S))c="";else if(g){c=o[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${e}`),c="";else!Ce(c)&&!this.useRawValueToEscape&&(c=g5(c));const C=b.safeValue(c);if(e=e.replace(o[0],C),g?(b.regex.lastIndex+=c.length,b.regex.lastIndex-=o[0].length):b.regex.lastIndex=0,u++,u>=this.maxReplaces)break}}),e}nest(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,o,c;const u=(d,h)=>{const p=this.nestingOptionsSeparator;if(d.indexOf(p)<0)return d;const g=d.split(new RegExp(`${p}[ ]*{`));let y=`{${g[1]}`;d=g[0],y=this.interpolate(y,c);const x=y.match(/'/g),b=y.match(/"/g);(((x==null?void 0:x.length)??0)%2===0&&!b||b.length%2!==0)&&(y=y.replace(/'/g,'"'));try{c=JSON.parse(y),h&&(c={...h,...c})}catch(S){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,S),`${d}${p}${y}`}return c.defaultValue&&c.defaultValue.indexOf(this.prefix)>-1&&delete c.defaultValue,d};for(;r=this.nestingRegexp.exec(e);){let d=[];c={...i},c=c.replace&&!Ce(c.replace)?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;let h=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const p=r[1].split(this.formatSeparator).map(g=>g.trim());r[1]=p.shift(),d=p,h=!0}if(o=n(u.call(this,r[1].trim(),c),c),o&&r[0]===e&&!Ce(o))return o;Ce(o)||(o=g5(o)),o||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),o=""),h&&(o=d.reduce((p,g)=>this.format(p,g,i.lng,{...i,interpolationkey:r[1].trim()}),o.trim())),e=e.replace(r[0],o),this.regexp.lastIndex=0}return e}}const Oq=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?n.currency||(n.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?n.range||(n.range=r.trim()):r.split(";").forEach(c=>{if(c){const[u,...d]=c.split(":"),h=d.join(":").trim().replace(/^'+|'+$/g,""),p=u.trim();n[p]||(n[p]=h),h==="false"&&(n[p]=!1),h==="true"&&(n[p]=!0),isNaN(h)||(n[p]=parseInt(h,10))}})}return{formatName:e,formatOptions:n}},Da=t=>{const e={};return(n,i,r)=>{let o=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(o={...o,[r.interpolationkey]:void 0});const c=i+JSON.stringify(o);let u=e[c];return u||(u=t(Xf(i),r),e[c]=u),u(n)}};class kq{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Bi.create("formatter"),this.options=e,this.formats={number:Da((n,i)=>{const r=new Intl.NumberFormat(n,{...i});return o=>r.format(o)}),currency:Da((n,i)=>{const r=new Intl.NumberFormat(n,{...i,style:"currency"});return o=>r.format(o)}),datetime:Da((n,i)=>{const r=new Intl.DateTimeFormat(n,{...i});return o=>r.format(o)}),relativetime:Da((n,i)=>{const r=new Intl.RelativeTimeFormat(n,{...i});return o=>r.format(o,i.range||"day")}),list:Da((n,i)=>{const r=new Intl.ListFormat(n,{...i});return o=>r.format(o)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Da(n)}format(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=n.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(u=>u.indexOf(")")>-1)){const u=o.findIndex(d=>d.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,u)].join(this.formatSeparator)}return o.reduce((u,d)=>{var g;const{formatName:h,formatOptions:p}=Oq(d);if(this.formats[h]){let y=u;try{const x=((g=r==null?void 0:r.formatParams)==null?void 0:g[r.interpolationkey])||{},b=x.locale||x.lng||r.locale||r.lng||i;y=this.formats[h](u,b,{...p,...r,...x})}catch(x){this.logger.warn(x)}return y}else this.logger.warn(`there was no format function for ${h}`);return u},e)}}const Rq=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Lq extends wd{constructor(e,n,i){var o,c;let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Bi.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],(c=(o=this.backend)==null?void 0:o.init)==null||c.call(o,i,r.backend,r)}queueLoad(e,n,i,r){const o={},c={},u={},d={};return e.forEach(h=>{let p=!0;n.forEach(g=>{const y=`${h}|${g}`;!i.reload&&this.store.hasResourceBundle(h,g)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?c[y]===void 0&&(c[y]=!0):(this.state[y]=1,p=!1,c[y]===void 0&&(c[y]=!0),o[y]===void 0&&(o[y]=!0),d[g]===void 0&&(d[g]=!0)))}),p||(u[h]=!0)}),(Object.keys(o).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(c),toLoadLanguages:Object.keys(u),toLoadNamespaces:Object.keys(d)}}loaded(e,n,i){const r=e.split("|"),o=r[0],c=r[1];n&&this.emit("failedLoading",o,c,n),!n&&i&&this.store.addResourceBundle(o,c,i,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&i&&(this.state[e]=0);const u={};this.queue.forEach(d=>{yq(d.loaded,[o],c),Rq(d,e),n&&d.errors.push(n),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(h=>{u[h]||(u[h]={});const p=d.loaded[h];p.length&&p.forEach(g=>{u[h][g]===void 0&&(u[h][g]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",u),this.queue=this.queue.filter(d=>!d.done)}read(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:i,tried:r,wait:o,callback:c});return}this.readingCalls++;const u=(h,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(h&&p&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,i,r+1,o*2,c)},o);return}c(h,p)},d=this.backend[i].bind(this.backend);if(d.length===2){try{const h=d(e,n);h&&typeof h.then=="function"?h.then(p=>u(null,p)).catch(u):u(null,h)}catch(h){u(h)}return}return d(e,n,u)}prepareLoading(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Ce(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Ce(n)&&(n=[n]);const o=this.queueLoad(e,n,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(c=>{this.loadOne(c)})}load(e,n,i){this.prepareLoading(e,n,{},i)}reload(e,n,i){this.prepareLoading(e,n,{reload:!0},i)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(c,u)=>{c&&this.logger.warn(`${n}loading namespace ${o} for language ${r} failed`,c),!c&&u&&this.logger.log(`${n}loaded namespace ${o} for language ${r}`,u),this.loaded(e,c,u)})}saveMissing(e,n,i,r,o){var d,h,p,g,y;let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(d=this.services)==null?void 0:d.utils)!=null&&h.hasLoadedNamespace&&!((g=(p=this.services)==null?void 0:p.utils)!=null&&g.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((y=this.backend)!=null&&y.create){const x={...c,isUpdate:o},b=this.backend.create.bind(this.backend);if(b.length<6)try{let S;b.length===5?S=b(e,n,i,r,x):S=b(e,n,i,r),S&&typeof S.then=="function"?S.then(C=>u(null,C)).catch(u):u(null,S)}catch(S){u(S)}else b(e,n,i,r,u,x)}!e||!e[0]||this.store.addResource(e[0],n,i,r)}}}const M5=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),Ce(t[1])&&(e.defaultValue=t[1]),Ce(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(i=>{e[i]=n[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),O5=t=>{var e,n;return Ce(t.ns)&&(t.ns=[t.ns]),Ce(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),Ce(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((n=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:n.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},af=()=>{},Dq=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class ic extends wd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=O5(e),this.services={},this.logger=Bi,this.modules={external:[]},Dq(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(i=n,n={}),n.defaultNS==null&&n.ns&&(Ce(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const r=M5();this.options={...r,...this.options,...O5(n)},this.options.interpolation={...r.interpolation,...this.options.interpolation},n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const o=p=>p?typeof p=="function"?new p:p:null;if(!this.options.isClone){this.modules.logger?Bi.init(o(this.modules.logger),this.options):Bi.init(null,this.options);let p;this.modules.formatter?p=this.modules.formatter:p=kq;const g=new T5(this.options);this.store=new b5(this.options.resources,this.options);const y=this.services;y.logger=Bi,y.resourceStore=this.store,y.languageUtils=g,y.pluralResolver=new Aq(g,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),p&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(y.formatter=o(p),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new Mq(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new Lq(o(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(x){for(var b=arguments.length,S=new Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];e.emit(x,...S)}),this.modules.languageDetector&&(y.languageDetector=o(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=o(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new Zf(this.services,this.options),this.translator.on("*",function(x){for(var b=arguments.length,S=new Array(b>1?b-1:0),C=1;C<b;C++)S[C-1]=arguments[C];e.emit(x,...S)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,i||(i=af),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(p=>{this[p]=function(){return e.store[p](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(p=>{this[p]=function(){return e.store[p](...arguments),e}});const d=Cl(),h=()=>{const p=(g,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(y),i(g,y)};if(this.languages&&!this.isInitialized)return p(null,this.t.bind(this));this.changeLanguage(this.options.lng,p)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),d}loadResources(e){var o,c;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:af;const r=Ce(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((r==null?void 0:r.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const u=[],d=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(g=>{g!=="cimode"&&u.indexOf(g)<0&&u.push(g)})};r?d(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p=>d(p)),(c=(o=this.options.preload)==null?void 0:o.forEach)==null||c.call(o,h=>d(h)),this.services.backendConnector.load(u,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(h)})}else i(null)}reloadResources(e,n,i){const r=Cl();return typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),i||(i=af),this.services.backendConnector.reload(e,n,o=>{r.resolve(),i(o)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Y6.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,n){var i=this;this.isLanguageChangingTo=e;const r=Cl();this.emit("languageChanging",e);const o=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},c=(d,h)=>{h?(o(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),n&&n(d,function(){return i.t(...arguments)})},u=d=>{var p,g;!e&&!d&&this.services.languageDetector&&(d=[]);const h=Ce(d)?d:this.services.languageUtils.getBestMatchFromCodes(d);h&&(this.language||o(h),this.translator.language||this.translator.changeLanguage(h),(g=(p=this.services.languageDetector)==null?void 0:p.cacheUserLanguage)==null||g.call(p,h)),this.loadResources(h,y=>{c(y,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?u(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(u):this.services.languageDetector.detect(u):u(e),r}getFixedT(e,n,i){var r=this;const o=function(c,u){let d;if(typeof u!="object"){for(var h=arguments.length,p=new Array(h>2?h-2:0),g=2;g<h;g++)p[g-2]=arguments[g];d=r.options.overloadTranslationOptionHandler([c,u].concat(p))}else d={...u};d.lng=d.lng||o.lng,d.lngs=d.lngs||o.lngs,d.ns=d.ns||o.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||i||o.keyPrefix);const y=r.options.keySeparator||".";let x;return d.keyPrefix&&Array.isArray(c)?x=c.map(b=>`${d.keyPrefix}${y}${b}`):x=d.keyPrefix?`${d.keyPrefix}${y}${c}`:c,r.t(x,d)};return Ce(e)?o.lng=e:o.lngs=e,o.ns=n,o.keyPrefix=i,o}t(){var r;for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(r=this.translator)==null?void 0:r.translate(...n)}exists(){var r;for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(r=this.translator)==null?void 0:r.exists(...n)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=n.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const c=(u,d)=>{const h=this.services.backendConnector.state[`${u}|${d}`];return h===-1||h===0||h===2};if(n.precheck){const u=n.precheck(this,c);if(u!==void 0)return u}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(i,e)&&(!r||c(o,e)))}loadNamespaces(e,n){const i=Cl();return this.options.ns?(Ce(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),n&&n(r)}),i):(n&&n(),Promise.resolve())}loadLanguages(e,n){const i=Cl();Ce(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter(c=>r.indexOf(c)<0&&this.services.languageUtils.isSupportedCode(c));return o.length?(this.options.preload=r.concat(o),this.loadResources(c=>{i.resolve(),n&&n(c)}),i):(n&&n(),Promise.resolve())}dir(e){var r,o;if(e||(e=this.resolvedLanguage||(((r=this.languages)==null?void 0:r.length)>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((o=this.services)==null?void 0:o.languageUtils)||new T5(M5());return n.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new ic(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:af;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new ic(r);if((e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(u=>{o[u]=this[u]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i){const u=Object.keys(this.store.data).reduce((d,h)=>(d[h]={...this.store.data[h]},Object.keys(d[h]).reduce((p,g)=>(p[g]={...d[h][g]},p),{})),{});o.store=new b5(u,r),o.services.resourceStore=o.store}return o.translator=new Zf(o.services,r),o.translator.on("*",function(u){for(var d=arguments.length,h=new Array(d>1?d-1:0),p=1;p<d;p++)h[p-1]=arguments[p];o.emit(u,...h)}),o.init(r,n),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const an=ic.createInstance();an.createInstance=ic.createInstance;an.createInstance;an.dir;an.init;an.loadResources;an.reloadResources;an.use;an.changeLanguage;an.getFixedT;an.t;an.exists;an.setDefaultNamespace;an.hasLoadedNamespace;an.loadNamespaces;an.loadLanguages;function Gm(t){"@babel/helpers - typeof";return Gm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gm(t)}function X6(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Gm(XMLHttpRequest))==="object"}function _q(t){return!!t&&typeof t.then=="function"}function zq(t){return _q(t)?t:Promise.resolve(t)}function k5(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function R5(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k5(Object(n),!0).forEach(function(i){jq(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k5(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function jq(t,e,n){return(e=Pq(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pq(t){var e=Nq(t,"string");return Gr(e)=="symbol"?e:e+""}function Nq(t,e){if(Gr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(Gr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Gr(t){"@babel/helpers - typeof";return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gr(t)}var sr=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?sr=global.fetch:typeof window<"u"&&window.fetch&&(sr=window.fetch);var sc;X6()&&(typeof global<"u"&&global.XMLHttpRequest?sc=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(sc=window.XMLHttpRequest));var Kf;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Kf=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Kf=window.ActiveXObject));typeof sr!="function"&&(sr=void 0);if(!sr&&!sc&&!Kf)try{r2(()=>import("./browser-ponyfill-ChFEseHm.js").then(t=>t.b),[]).then(function(t){sr=t.default}).catch(function(){})}catch{}var Ym=function(e,n){if(n&&Gr(n)==="object"){var i="";for(var r in n)i+="&"+encodeURIComponent(r)+"="+encodeURIComponent(n[r]);if(!i)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+i.slice(1)}return e},L5=function(e,n,i,r){var o=function(d){if(!d.ok)return i(d.statusText||"Error",{status:d.status});d.text().then(function(h){i(null,{status:d.status,data:h})}).catch(i)};if(r){var c=r(e,n);if(c instanceof Promise){c.then(o).catch(i);return}}typeof fetch=="function"?fetch(e,n).then(o).catch(i):sr(e,n).then(o).catch(i)},D5=!1,Bq=function(e,n,i,r){e.queryStringParams&&(n=Ym(n,e.queryStringParams));var o=R5({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(o["Content-Type"]="application/json");var c=typeof e.requestOptions=="function"?e.requestOptions(i):e.requestOptions,u=R5({method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:o},D5?{}:c),d=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{L5(n,u,r,d)}catch(h){if(!c||Object.keys(c).length===0||!h.message||h.message.indexOf("not implemented")<0)return r(h);try{Object.keys(c).forEach(function(p){delete u[p]}),L5(n,u,r,d),D5=!0}catch(p){r(p)}}},Iq=function(e,n,i,r){i&&Gr(i)==="object"&&(i=Ym("",i).slice(1)),e.queryStringParams&&(n=Ym(n,e.queryStringParams));try{var o=sc?new sc:new Kf("MSXML2.XMLHTTP.3.0");o.open(i?"POST":"GET",n,1),e.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!e.withCredentials,i&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var c=e.customHeaders;if(c=typeof c=="function"?c():c,c)for(var u in c)o.setRequestHeader(u,c[u]);o.onreadystatechange=function(){o.readyState>3&&r(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(i)}catch(d){console&&console.log(d)}},Hq=function(e,n,i,r){if(typeof i=="function"&&(r=i,i=void 0),r=r||function(){},sr&&n.indexOf("file:")!==0)return Bq(e,n,i,r);if(X6()||typeof ActiveXObject=="function")return Iq(e,n,i,r);r(new Error("No fetch and no xhr implementation found!"))};function to(t){"@babel/helpers - typeof";return to=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},to(t)}function _5(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Z0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_5(Object(n),!0).forEach(function(i){Q6(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_5(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Vq(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Uq(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Z6(i.key),i)}}function qq(t,e,n){return e&&Uq(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Q6(t,e,n){return(e=Z6(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z6(t){var e=Fq(t,"string");return to(e)=="symbol"?e:e+""}function Fq(t,e){if(to(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(to(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Gq=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,i,r){return Q6({},i,r||"")},parseLoadPayload:function(n,i){},request:Hq,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},K6=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Vq(this,t),this.services=e,this.options=n,this.allOptions=i,this.type="backend",this.init(e,n,i)}return qq(t,[{key:"init",value:function(n){var i=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=n,this.options=Z0(Z0(Z0({},Gq()),this.options||{}),r),this.allOptions=o,this.services&&this.options.reloadInterval){var c=setInterval(function(){return i.reload()},this.options.reloadInterval);to(c)==="object"&&typeof c.unref=="function"&&c.unref()}}},{key:"readMulti",value:function(n,i,r){this._readAny(n,n,i,i,r)}},{key:"read",value:function(n,i,r){this._readAny([n],n,[i],i,r)}},{key:"_readAny",value:function(n,i,r,o,c){var u=this,d=this.options.loadPath;typeof this.options.loadPath=="function"&&(d=this.options.loadPath(n,r)),d=zq(d),d.then(function(h){if(!h)return c(null,{});var p=u.services.interpolator.interpolate(h,{lng:n.join("+"),ns:r.join("+")});u.loadUrl(p,c,i,o)})}},{key:"loadUrl",value:function(n,i,r,o){var c=this,u=typeof r=="string"?[r]:r,d=typeof o=="string"?[o]:o,h=this.options.parseLoadPayload(u,d);this.options.request(this.options,n,h,function(p,g){if(g&&(g.status>=500&&g.status<600||!g.status))return i("failed loading "+n+"; status code: "+g.status,!0);if(g&&g.status>=400&&g.status<500)return i("failed loading "+n+"; status code: "+g.status,!1);if(!g&&p&&p.message){var y=p.message.toLowerCase(),x=["failed","fetch","network","load"].find(function(C){return y.indexOf(C)>-1});if(x)return i("failed loading "+n+": "+p.message,!0)}if(p)return i(p,!1);var b,S;try{typeof g.data=="string"?b=c.options.parse(g.data,r,o):b=g.data}catch{S="failed parsing "+n+" to json"}if(S)return i(S,!1);i(null,b)})}},{key:"create",value:function(n,i,r,o,c){var u=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var d=this.options.parsePayload(i,r,o),h=0,p=[],g=[];n.forEach(function(y){var x=u.options.addPath;typeof u.options.addPath=="function"&&(x=u.options.addPath(y,i));var b=u.services.interpolator.interpolate(x,{lng:y,ns:i});u.options.request(u.options,b,d,function(S,C){h+=1,p.push(S),g.push(C),h===n.length&&typeof c=="function"&&c(p,g)})})}}},{key:"reload",value:function(){var n=this,i=this.services,r=i.backendConnector,o=i.languageUtils,c=i.logger,u=r.language;if(!(u&&u.toLowerCase()==="cimode")){var d=[],h=function(g){var y=o.toResolveHierarchy(g);y.forEach(function(x){d.indexOf(x)<0&&d.push(x)})};h(u),this.allOptions.preload&&this.allOptions.preload.forEach(function(p){return h(p)}),d.forEach(function(p){n.allOptions.ns.forEach(function(g){r.read(p,g,"read",null,null,function(y,x){y&&c.warn("loading namespace ".concat(g," for language ").concat(p," failed"),y),!y&&x&&c.log("loaded namespace ".concat(g," for language ").concat(p),x),r.loaded("".concat(p,"|").concat(g),y,x)})})})}}}])}();K6.type="backend";const{slice:Yq,forEach:Xq}=[];function Qq(t){return Xq.call(Yq.call(arguments,1),e=>{if(e)for(const n in e)t[n]===void 0&&(t[n]=e[n])}),t}function Zq(t){return typeof t!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(t))}const z5=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Kq=function(t,e){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},r=encodeURIComponent(e);let o=`${t}=${r}`;if(i.maxAge>0){const c=i.maxAge-0;if(Number.isNaN(c))throw new Error("maxAge should be a Number");o+=`; Max-Age=${Math.floor(c)}`}if(i.domain){if(!z5.test(i.domain))throw new TypeError("option domain is invalid");o+=`; Domain=${i.domain}`}if(i.path){if(!z5.test(i.path))throw new TypeError("option path is invalid");o+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(o+="; Partitioned"),o},j5={create(t,e,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+n*60*1e3)),i&&(r.domain=i),document.cookie=Kq(t,e,r)},read(t){const e=`${t}=`,n=document.cookie.split(";");for(let i=0;i<n.length;i++){let r=n[i];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(t,e){this.create(t,"",-1,e)}};var Wq={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return j5.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:n,cookieMinutes:i,cookieDomain:r,cookieOptions:o}=e;n&&typeof document<"u"&&j5.create(n,t,i,r,o)}},$q={name:"querystring",lookup(t){var i;let{lookupQuerystring:e}=t,n;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const c=r.substring(1).split("&");for(let u=0;u<c.length;u++){const d=c[u].indexOf("=");d>0&&c[u].substring(0,d)===e&&(n=c[u].substring(d+1))}}return n}},Jq={name:"hash",lookup(t){var r;let{lookupHash:e,lookupFromHashIndex:n}=t,i;if(typeof window<"u"){const{hash:o}=window.location;if(o&&o.length>2){const c=o.substring(1);if(e){const u=c.split("&");for(let d=0;d<u.length;d++){const h=u[d].indexOf("=");h>0&&u[d].substring(0,h)===e&&(i=u[d].substring(h+1))}}if(i)return i;if(!i&&n>-1){const u=o.match(/\/([a-zA-Z-]*)/g);return Array.isArray(u)?(r=u[typeof n=="number"?n:0])==null?void 0:r.replace("/",""):void 0}}}return i}};let _a=null;const P5=()=>{if(_a!==null)return _a;try{if(_a=typeof window<"u"&&window.localStorage!==null,!_a)return!1;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{_a=!1}return _a};var eF={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&P5())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:n}=e;n&&P5()&&window.localStorage.setItem(n,t)}};let za=null;const N5=()=>{if(za!==null)return za;try{if(za=typeof window<"u"&&window.sessionStorage!==null,!za)return!1;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{za=!1}return za};var tF={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&N5())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:n}=e;n&&N5()&&window.sessionStorage.setItem(n,t)}},nF={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:i,language:r}=navigator;if(n)for(let o=0;o<n.length;o++)e.push(n[o]);i&&e.push(i),r&&e.push(r)}return e.length>0?e:void 0}},iF={name:"htmlTag",lookup(t){let{htmlTag:e}=t,n;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(n=i.getAttribute("lang")),n}},sF={name:"path",lookup(t){var r;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(r=n[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},rF={name:"subdomain",lookup(t){var r,o;let{lookupFromSubdomainIndex:e}=t;const n=typeof e=="number"?e+1:1,i=typeof window<"u"&&((o=(r=window.location)==null?void 0:r.hostname)==null?void 0:o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[n]}};let W6=!1;try{document.cookie,W6=!0}catch{}const $6=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];W6||$6.splice(1,1);const aF=()=>({order:$6,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t});class J6{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Qq(n,this.options||{},aF()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(Wq),this.addDetector($q),this.addDetector(eF),this.addDetector(tF),this.addDetector(nF),this.addDetector(iF),this.addDetector(sF),this.addDetector(rF),this.addDetector(Jq)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return e.forEach(i=>{if(this.detectors[i]){let r=this.detectors[i].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(n=n.concat(r))}}),n=n.filter(i=>i!=null&&!Zq(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}J6.type="languageDetector";an.use(K6).use(J6).use(bL).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const oF=D.createContext(void 0),lF=({children:t})=>{const{i18n:e}=Qt(),n=i=>{e.changeLanguage(i).then(()=>{window.location.reload()})};return w.jsx(oF.Provider,{value:{language:e.language,setLanguage:n},children:t})};gE.createRoot(document.getElementById("root")).render(w.jsxs(Qe.StrictMode,{children:[w.jsx(P7,{styles:F7}),w.jsx(jC,{basename:"/",children:w.jsx(lF,{children:w.jsx(pq,{})})})]}));export{r2 as _,Ou as c,rc as g,w as j,D as r};
