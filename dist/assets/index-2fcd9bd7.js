(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var $a={},OE={get exports(){return $a},set exports(t){$a=t}},Dl={},H={},VE={get exports(){return H},set exports(t){H=t}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),LE=Symbol.for("react.portal"),ME=Symbol.for("react.fragment"),bE=Symbol.for("react.strict_mode"),FE=Symbol.for("react.profiler"),$E=Symbol.for("react.provider"),UE=Symbol.for("react.context"),jE=Symbol.for("react.forward_ref"),BE=Symbol.for("react.suspense"),zE=Symbol.for("react.memo"),HE=Symbol.for("react.lazy"),Vp=Symbol.iterator;function WE(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var Oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vy=Object.assign,Ly={};function Li(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Oy}Li.prototype.isReactComponent={};Li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function My(){}My.prototype=Li.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||Oy}var dd=hd.prototype=new My;dd.constructor=hd;Vy(dd,Li.prototype);dd.isPureReactComponent=!0;var Lp=Array.isArray,by=Object.prototype.hasOwnProperty,fd={current:null},Fy={key:!0,ref:!0,__self:!0,__source:!0};function $y(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)by.call(e,r)&&!Fy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Eo,type:t,key:s,ref:o,props:i,_owner:fd.current}}function qE(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function KE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KE(""+t.key):e.toString(36)}function va(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case LE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,Lp(i)?(n="",t!=null&&(n=t.replace(Mp,"$&/")+"/"),va(i,e,n,"",function(u){return u})):i!=null&&(pd(i)&&(i=qE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ou(s,a);o+=va(s,e,n,l,i)}else if(l=WE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ou(s,a++),o+=va(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(t,e,n){if(t==null)return t;var r=[],i=0;return va(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ze={current:null},wa={transition:null},QE={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:wa,ReactCurrentOwner:fd};q.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Li;q.Fragment=ME;q.Profiler=FE;q.PureComponent=hd;q.StrictMode=bE;q.Suspense=BE;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)by.call(e,l)&&!Fy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Eo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:UE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$E,_context:t},t.Consumer=t};q.createElement=$y;q.createFactory=function(t){var e=$y.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:jE,render:t}};q.isValidElement=pd;q.lazy=function(t){return{$$typeof:HE,_payload:{_status:-1,_result:t},_init:GE}};q.memo=function(t,e){return{$$typeof:zE,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Ze.current.useCallback(t,e)};q.useContext=function(t){return Ze.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Ze.current.useDeferredValue(t)};q.useEffect=function(t,e){return Ze.current.useEffect(t,e)};q.useId=function(){return Ze.current.useId()};q.useImperativeHandle=function(t,e,n){return Ze.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Ze.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Ze.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Ze.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Ze.current.useReducer(t,e,n)};q.useRef=function(t){return Ze.current.useRef(t)};q.useState=function(t){return Ze.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Ze.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Ze.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(VE);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=H,XE=Symbol.for("react.element"),JE=Symbol.for("react.fragment"),ZE=Object.prototype.hasOwnProperty,eI=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tI={key:!0,ref:!0,__self:!0,__source:!0};function Uy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZE.call(e,r)&&!tI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XE,type:t,key:s,ref:o,props:i,_owner:eI.current}}Dl.Fragment=JE;Dl.jsx=Uy;Dl.jsxs=Uy;(function(t){t.exports=Dl})(OE);const v=$a.jsx,F=$a.jsxs;var Lc={},Mc={},nI={get exports(){return Mc},set exports(t){Mc=t}},_t={},bc={},rI={get exports(){return bc},set exports(t){bc=t}},jy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var z=D.length;D.push(B);e:for(;0<z;){var fe=z-1>>>1,Te=D[fe];if(0<i(Te,B))D[fe]=B,D[z]=Te,z=fe;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],z=D.pop();if(z!==B){D[0]=z;e:for(var fe=0,Te=D.length,Wo=Te>>>1;fe<Wo;){var sr=2*(fe+1)-1,xu=D[sr],or=sr+1,qo=D[or];if(0>i(xu,z))or<Te&&0>i(qo,xu)?(D[fe]=qo,D[or]=z,fe=or):(D[fe]=xu,D[sr]=z,fe=sr);else if(or<Te&&0>i(qo,z))D[fe]=qo,D[or]=z,fe=or;else break e}}return B}function i(D,B){var z=D.sortIndex-B.sortIndex;return z!==0?z:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,_=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(D){if(y=!1,g(D),!_)if(n(l)!==null)_=!0,Nu(C);else{var B=n(u);B!==null&&Du(E,B.startTime-D)}}function C(D,B){_=!1,y&&(y=!1,p(x),x=-1),m=!0;var z=d;try{for(g(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!be());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,d=h.priorityLevel;var Te=fe(h.expirationTime<=B);B=t.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&r(l),g(B)}else r(l);h=n(l)}if(h!==null)var Wo=!0;else{var sr=n(u);sr!==null&&Du(E,sr.startTime-B),Wo=!1}return Wo}finally{h=null,d=z,m=!1}}var k=!1,I=null,x=-1,Q=5,L=-1;function be(){return!(t.unstable_now()-L<Q)}function Gi(){if(I!==null){var D=t.unstable_now();L=D;var B=!0;try{B=I(!0,D)}finally{B?Qi():(k=!1,I=null)}}else k=!1}var Qi;if(typeof f=="function")Qi=function(){f(Gi)};else if(typeof MessageChannel<"u"){var Op=new MessageChannel,xE=Op.port2;Op.port1.onmessage=Gi,Qi=function(){xE.postMessage(null)}}else Qi=function(){A(Gi,0)};function Nu(D){I=D,k||(k=!0,Qi())}function Du(D,B){x=A(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Nu(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var z=d;d=B;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return B()}finally{d=z}},t.unstable_scheduleCallback=function(D,B,z){var fe=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?fe+z:fe):z=fe,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=z+Te,D={id:c++,callback:B,priorityLevel:D,startTime:z,expirationTime:Te,sortIndex:-1},z>fe?(D.sortIndex=z,e(u,D),n(l)===null&&D===n(u)&&(y?(p(x),x=-1):y=!0,Du(E,z-fe))):(D.sortIndex=Te,e(l,D),_||m||(_=!0,Nu(C))),D},t.unstable_shouldYield=be,t.unstable_wrapCallback=function(D){var B=d;return function(){var z=d;d=B;try{return D.apply(this,arguments)}finally{d=z}}}})(jy);(function(t){t.exports=jy})(rI);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=H,mt=bc;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zy=new Set,Ls={};function Vr(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(Ls[t]=e,t=0;t<e.length;t++)zy.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=Object.prototype.hasOwnProperty,iI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Fp={};function sI(t){return Fc.call(Fp,t)?!0:Fc.call(bp,t)?!1:iI.test(t)?Fp[t]=!0:(bp[t]=!0,!1)}function oI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aI(t,e,n,r){if(e===null||typeof e>"u"||oI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new et(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Me[e]=new et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Me[e]=new et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Me[e]=new et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new et(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new et(t,1,!1,t.toLowerCase(),null,!0,!0)});function yd(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aI(e,n,i,r)&&(n=null),r||i===null?sI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),Kr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),$p=Symbol.iterator;function Yi(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,Vu;function as(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Lu=!1;function Mu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?as(t):""}function lI(t){switch(t.tag){case 5:return as(t.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gr:return"Fragment";case Kr:return"Portal";case $c:return"Profiler";case _d:return"StrictMode";case Uc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wy:return(t.displayName||"Context")+".Consumer";case Hy:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wd:return e=t.displayName||null,e!==null?e:Bc(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return Bc(t(e))}catch{}}return null}function uI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cI(t){var e=Ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=cI(t))}function Gy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qy(t,e){e=e.checked,e!=null&&yd(t,"checked",e,!1)}function Hc(t,e){Qy(t,e);var n=qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ls=Array.isArray;function ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(ls(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qn(n)}}function Yy(t,e){var n=qn(e.value),r=qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,Jy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hI=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(t){hI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_s[e]=_s[t]})});function Zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_s.hasOwnProperty(t)&&_s[t]?(""+e).trim():e+"px"}function e_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dI=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gc(t,e){if(e){if(dI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function Ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xc=null,li=null,ui=null;function Hp(t){if(t=So(t)){if(typeof Xc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Ml(e),Xc(t.stateNode,t.type,e))}}function t_(t){li?ui?ui.push(t):ui=[t]:li=t}function n_(){if(li){var t=li,e=ui;if(ui=li=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function r_(t,e){return t(e)}function i_(){}var bu=!1;function s_(t,e,n){if(bu)return t(e,n);bu=!0;try{return r_(t,e,n)}finally{bu=!1,(li!==null||ui!==null)&&(i_(),n_())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Jc=!1;if(pn)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Jc=!1}function fI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vs=!1,ja=null,Ba=!1,Zc=null,pI={onError:function(t){vs=!0,ja=t}};function mI(t,e,n,r,i,s,o,a,l){vs=!1,ja=null,fI.apply(pI,arguments)}function gI(t,e,n,r,i,s,o,a,l){if(mI.apply(this,arguments),vs){if(vs){var u=ja;vs=!1,ja=null}else throw Error(S(198));Ba||(Ba=!0,Zc=u)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wp(t){if(Lr(t)!==t)throw Error(S(188))}function yI(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wp(i),t;if(s===r)return Wp(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function a_(t){return t=yI(t),t!==null?l_(t):null}function l_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l_(t);if(e!==null)return e;t=t.sibling}return null}var u_=mt.unstable_scheduleCallback,qp=mt.unstable_cancelCallback,_I=mt.unstable_shouldYield,vI=mt.unstable_requestPaint,pe=mt.unstable_now,wI=mt.unstable_getCurrentPriorityLevel,Id=mt.unstable_ImmediatePriority,c_=mt.unstable_UserBlockingPriority,za=mt.unstable_NormalPriority,EI=mt.unstable_LowPriority,h_=mt.unstable_IdlePriority,xl=null,qt=null;function II(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:AI,TI=Math.log,SI=Math.LN2;function AI(t){return t>>>=0,t===0?32:31-(TI(t)/SI|0)|0}var Xo=64,Jo=4194304;function us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=us(a):(s&=o,s!==0&&(r=us(s)))}else o=n&~i,o!==0?r=us(o):s!==0&&(r=us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),i=1<<n,r|=t[n],e&=~i;return r}function RI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=RI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d_(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function kI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function f_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p_,Sd,m_,g_,y_,th=!1,Zo=[],Vn=null,Ln=null,Mn=null,Fs=new Map,$s=new Map,Cn=[],PI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(e.pointerId)}}function Ji(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=So(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NI(t,e,n,r,i){switch(e){case"focusin":return Vn=Ji(Vn,t,e,n,r,i),!0;case"dragenter":return Ln=Ji(Ln,t,e,n,r,i),!0;case"mouseover":return Mn=Ji(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fs.set(s,Ji(Fs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$s.set(s,Ji($s.get(s)||null,t,e,n,r,i)),!0}return!1}function __(t){var e=cr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=o_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){m_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return e=So(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Ea(t)&&n.delete(e)}function DI(){th=!1,Vn!==null&&Ea(Vn)&&(Vn=null),Ln!==null&&Ea(Ln)&&(Ln=null),Mn!==null&&Ea(Mn)&&(Mn=null),Fs.forEach(Gp),$s.forEach(Gp)}function Zi(t,e){t.blockedOn===e&&(t.blockedOn=null,th||(th=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,DI)))}function Us(t){function e(i){return Zi(i,t)}if(0<Zo.length){Zi(Zo[0],t);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vn!==null&&Zi(Vn,t),Ln!==null&&Zi(Ln,t),Mn!==null&&Zi(Mn,t),Fs.forEach(e),$s.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)__(n),n.blockedOn===null&&Cn.shift()}var ci=In.ReactCurrentBatchConfig,Wa=!0;function xI(t,e,n,r){var i=J,s=ci.transition;ci.transition=null;try{J=1,Ad(t,e,n,r)}finally{J=i,ci.transition=s}}function OI(t,e,n,r){var i=J,s=ci.transition;ci.transition=null;try{J=4,Ad(t,e,n,r)}finally{J=i,ci.transition=s}}function Ad(t,e,n,r){if(Wa){var i=nh(t,e,n,r);if(i===null)Gu(t,e,r,qa,n),Kp(t,r);else if(NI(i,t,e,n,r))r.stopPropagation();else if(Kp(t,r),e&4&&-1<PI.indexOf(t)){for(;i!==null;){var s=So(i);if(s!==null&&p_(s),s=nh(t,e,n,r),s===null&&Gu(t,e,r,qa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var qa=null;function nh(t,e,n,r){if(qa=null,t=Ed(r),t=cr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wI()){case Id:return 1;case c_:return 4;case za:case EI:return 16;case h_:return 536870912;default:return 16}default:return 16}}var Dn=null,Rd=null,Ia=null;function w_(){if(Ia)return Ia;var t,e=Rd,n=e.length,r,i="value"in Dn?Dn.value:Dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ia=i.slice(t,1<r?1-r:void 0)}function Ta(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function Qp(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:Qp,this.isPropagationStopped=Qp,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=vt(Mi),To=ue({},Mi,{view:0,detail:0}),VI=vt(To),$u,Uu,es,Ol=ue({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==es&&(es&&t.type==="mousemove"?($u=t.screenX-es.screenX,Uu=t.screenY-es.screenY):Uu=$u=0,es=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),Yp=vt(Ol),LI=ue({},Ol,{dataTransfer:0}),MI=vt(LI),bI=ue({},To,{relatedTarget:0}),ju=vt(bI),FI=ue({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),$I=vt(FI),UI=ue({},Mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jI=vt(UI),BI=ue({},Mi,{data:0}),Xp=vt(BI),zI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WI[t])?!!e[t]:!1}function kd(){return qI}var KI=ue({},To,{key:function(t){if(t.key){var e=zI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?Ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GI=vt(KI),QI=ue({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=vt(QI),YI=ue({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),XI=vt(YI),JI=ue({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZI=vt(JI),eT=ue({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tT=vt(eT),nT=[9,13,27,32],Pd=pn&&"CompositionEvent"in window,ws=null;pn&&"documentMode"in document&&(ws=document.documentMode);var rT=pn&&"TextEvent"in window&&!ws,E_=pn&&(!Pd||ws&&8<ws&&11>=ws),Zp=String.fromCharCode(32),em=!1;function I_(t,e){switch(t){case"keyup":return nT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function iT(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(em=!0,Zp);case"textInput":return t=e.data,t===Zp&&em?null:t;default:return null}}function sT(t,e){if(Qr)return t==="compositionend"||!Pd&&I_(t,e)?(t=w_(),Ia=Rd=Dn=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E_&&e.locale!=="ko"?null:e.data;default:return null}}var oT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oT[t.type]:e==="textarea"}function S_(t,e,n,r){t_(r),e=Ka(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Es=null,js=null;function aT(t){L_(t,0)}function Vl(t){var e=Jr(t);if(Gy(e))return t}function lT(t,e){if(t==="change")return e}var A_=!1;if(pn){var Bu;if(pn){var zu="oninput"in document;if(!zu){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),zu=typeof nm.oninput=="function"}Bu=zu}else Bu=!1;A_=Bu&&(!document.documentMode||9<document.documentMode)}function rm(){Es&&(Es.detachEvent("onpropertychange",R_),js=Es=null)}function R_(t){if(t.propertyName==="value"&&Vl(js)){var e=[];S_(e,js,t,Ed(t)),s_(aT,e)}}function uT(t,e,n){t==="focusin"?(rm(),Es=e,js=n,Es.attachEvent("onpropertychange",R_)):t==="focusout"&&rm()}function cT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(js)}function hT(t,e){if(t==="click")return Vl(e)}function dT(t,e){if(t==="input"||t==="change")return Vl(e)}function fT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:fT;function Bs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fc.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,e){var n=im(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=im(n)}}function C_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k_(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pT(t){var e=k_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C_(n.ownerDocument.documentElement,n)){if(r!==null&&Nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sm(n,s);var o=sm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mT=pn&&"documentMode"in document&&11>=document.documentMode,Yr=null,rh=null,Is=null,ih=!1;function om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ih||Yr==null||Yr!==Ua(r)||(r=Yr,"selectionStart"in r&&Nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Is&&Bs(Is,r)||(Is=r,r=Ka(rh,"onSelect"),0<r.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yr)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},Hu={},P_={};pn&&(P_=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Ll(t){if(Hu[t])return Hu[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P_)return Hu[t]=e[n];return t}var N_=Ll("animationend"),D_=Ll("animationiteration"),x_=Ll("animationstart"),O_=Ll("transitionend"),V_=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){V_.set(t,e),Vr(e,[t])}for(var Wu=0;Wu<am.length;Wu++){var qu=am[Wu],gT=qu.toLowerCase(),yT=qu[0].toUpperCase()+qu.slice(1);Xn(gT,"on"+yT)}Xn(N_,"onAnimationEnd");Xn(D_,"onAnimationIteration");Xn(x_,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(O_,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_T=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gI(r,e,void 0,t),t.currentTarget=null}function L_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lm(i,a,u),s=l}}}if(Ba)throw t=Zc,Ba=!1,Zc=null,t}function ne(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var r=t+"__bubble";n.has(r)||(M_(e,t,2,!1),n.add(r))}function Ku(t,e,n){var r=0;e&&(r|=4),M_(n,t,r,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function zs(t){if(!t[na]){t[na]=!0,zy.forEach(function(n){n!=="selectionchange"&&(_T.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,Ku("selectionchange",!1,e))}}function M_(t,e,n,r){switch(v_(e)){case 1:var i=xI;break;case 4:i=OI;break;default:i=Ad}n=i.bind(null,e,n,t),i=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s_(function(){var u=s,c=Ed(n),h=[];e:{var d=V_.get(t);if(d!==void 0){var m=Cd,_=t;switch(t){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":m=GI;break;case"focusin":_="focus",m=ju;break;case"focusout":_="blur",m=ju;break;case"beforeblur":case"afterblur":m=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=MI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=XI;break;case N_:case D_:case x_:m=$I;break;case O_:m=ZI;break;case"scroll":m=VI;break;case"wheel":m=tT;break;case"copy":case"cut":case"paste":m=jI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jp}var y=(e&4)!==0,A=!y&&t==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=bs(f,p),E!=null&&y.push(Hs(f,E,g)))),A)break;f=f.return}0<y.length&&(d=new m(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Yc&&(_=n.relatedTarget||n.fromElement)&&(cr(_)||_[mn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?cr(_):null,_!==null&&(A=Lr(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Yp,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jp,E="onPointerLeave",p="onPointerEnter",f="pointer"),A=m==null?d:Jr(m),g=_==null?d:Jr(_),d=new y(E,f+"leave",m,n,c),d.target=A,d.relatedTarget=g,E=null,cr(c)===u&&(y=new y(p,f+"enter",_,n,c),y.target=g,y.relatedTarget=A,E=y),A=E,m&&_)t:{for(y=m,p=_,f=0,g=y;g;g=Br(g))f++;for(g=0,E=p;E;E=Br(E))g++;for(;0<f-g;)y=Br(y),f--;for(;0<g-f;)p=Br(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Br(y),p=Br(p)}y=null}else y=null;m!==null&&um(h,d,m,y,!1),_!==null&&A!==null&&um(h,A,_,y,!0)}}e:{if(d=u?Jr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=lT;else if(tm(d))if(A_)C=dT;else{C=cT;var k=uT}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=hT);if(C&&(C=C(t,u))){S_(h,C,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Wc(d,"number",d.value)}switch(k=u?Jr(u):window,t){case"focusin":(tm(k)||k.contentEditable==="true")&&(Yr=k,rh=u,Is=null);break;case"focusout":Is=rh=Yr=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,om(h,n,c);break;case"selectionchange":if(mT)break;case"keydown":case"keyup":om(h,n,c)}var I;if(Pd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Qr?I_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(E_&&n.locale!=="ko"&&(Qr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Qr&&(I=w_()):(Dn=c,Rd="value"in Dn?Dn.value:Dn.textContent,Qr=!0)),k=Ka(u,x),0<k.length&&(x=new Xp(x,t,null,n,c),h.push({event:x,listeners:k}),I?x.data=I:(I=T_(n),I!==null&&(x.data=I)))),(I=rT?iT(t,n):sT(t,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(c=new Xp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=I))}L_(h,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(Hs(t,s,i)),s=bs(t,e),s!=null&&r.push(Hs(t,s,i))),t=t.return}return r}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bs(n,s),l!=null&&o.unshift(Hs(n,l,a))):i||(l=bs(n,s),l!=null&&o.push(Hs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vT=/\r\n?/g,wT=/\u0000|\uFFFD/g;function cm(t){return(typeof t=="string"?t:""+t).replace(vT,`
`).replace(wT,"")}function ra(t,e,n){if(e=cm(e),cm(t)!==e&&n)throw Error(S(425))}function Ga(){}var sh=null,oh=null;function ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,ET=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,IT=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(t){return hm.resolve(null).then(t).catch(TT)}:lh;function TT(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Us(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bi=Math.random().toString(36).slice(2),Bt="__reactFiber$"+bi,Ws="__reactProps$"+bi,mn="__reactContainer$"+bi,uh="__reactEvents$"+bi,ST="__reactListeners$"+bi,AT="__reactHandles$"+bi;function cr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dm(t);t!==null;){if(n=t[Bt])return n;t=dm(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Ml(t){return t[Ws]||null}var ch=[],Zr=-1;function Jn(t){return{current:t}}function se(t){0>Zr||(t.current=ch[Zr],ch[Zr]=null,Zr--)}function ee(t,e){Zr++,ch[Zr]=t.current,t.current=e}var Kn={},qe=Jn(Kn),it=Jn(!1),Er=Kn;function vi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function Qa(){se(it),se(qe)}function fm(t,e,n){if(qe.current!==Kn)throw Error(S(168));ee(qe,e),ee(it,n)}function b_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,uI(t)||"Unknown",i));return ue({},n,r)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,Er=qe.current,ee(qe,t),ee(it,it.current),!0}function pm(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=b_(t,e,Er),r.__reactInternalMemoizedMergedChildContext=t,se(it),se(qe),ee(qe,t)):se(it),ee(it,n)}var nn=null,bl=!1,Yu=!1;function F_(t){nn===null?nn=[t]:nn.push(t)}function RT(t){bl=!0,F_(t)}function Zn(){if(!Yu&&nn!==null){Yu=!0;var t=0,e=J;try{var n=nn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nn=null,bl=!1}catch(i){throw nn!==null&&(nn=nn.slice(t+1)),u_(Id,Zn),i}finally{J=e,Yu=!1}}return null}var ei=[],ti=0,Xa=null,Ja=0,wt=[],Et=0,Ir=null,on=1,an="";function ar(t,e){ei[ti++]=Ja,ei[ti++]=Xa,Xa=t,Ja=e}function $_(t,e,n){wt[Et++]=on,wt[Et++]=an,wt[Et++]=Ir,Ir=t;var r=on;t=an;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var s=32-xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,on=1<<32-xt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function Dd(t){t.return!==null&&(ar(t,1),$_(t,1,0))}function xd(t){for(;t===Xa;)Xa=ei[--ti],ei[ti]=null,Ja=ei[--ti],ei[ti]=null;for(;t===Ir;)Ir=wt[--Et],wt[Et]=null,an=wt[--Et],wt[Et]=null,on=wt[--Et],wt[Et]=null}var dt=null,ct=null,oe=!1,Dt=null;function U_(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dt=t,ct=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dt=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dt=t,ct=null,!0):!1;default:return!1}}function hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(oe){var e=ct;if(e){var n=e;if(!mm(t,e)){if(hh(t))throw Error(S(418));e=bn(n.nextSibling);var r=dt;e&&mm(t,e)?U_(r,n):(t.flags=t.flags&-4097|2,oe=!1,dt=t)}}else{if(hh(t))throw Error(S(418));t.flags=t.flags&-4097|2,oe=!1,dt=t}}}function gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dt=t}function ia(t){if(t!==dt)return!1;if(!oe)return gm(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ah(t.type,t.memoizedProps)),e&&(e=ct)){if(hh(t))throw j_(),Error(S(418));for(;e;)U_(t,e),e=bn(e.nextSibling)}if(gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=dt?bn(t.stateNode.nextSibling):null;return!0}function j_(){for(var t=ct;t;)t=bn(t.nextSibling)}function wi(){ct=dt=null,oe=!1}function Od(t){Dt===null?Dt=[t]:Dt.push(t)}var CT=In.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Za=Jn(null),el=null,ni=null,Vd=null;function Ld(){Vd=ni=el=null}function Md(t){var e=Za.current;se(Za),t._currentValue=e}function fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hi(t,e){el=t,Vd=ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(Vd!==t)if(t={context:t,memoizedValue:e,next:null},ni===null){if(el===null)throw Error(S(308));ni=t,el.dependencies={lanes:0,firstContext:t}}else ni=ni.next=t;return e}var hr=null;function bd(t){hr===null?hr=[t]:hr.push(t)}function B_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}function ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=ue({},h,d);break e;case 2:Rn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sr|=o,t.lanes=o,t.memoizedState=h}}function _m(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var H_=new By.Component().refs;function ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Un(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Ot(e,t,i,r),Sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Un(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Ot(e,t,i,r),Sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=Un(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fn(t,i,r),e!==null&&(Ot(e,t,r,n),Sa(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bs(n,r)||!Bs(i,s):!0}function W_(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=st(e)?Er:qe.current,r=e.contextTypes,s=(r=r!=null)?vi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function mh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=H_,Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=st(e)?Er:qe.current,i.context=vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ph(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===H_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function q_(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=jn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=rc(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var C=g.type;return C===Gr?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===An&&Em(C)===f.type)?(E=i(f,g.props),E.ref=ts(p,f,g),E.return=p,E):(E=Na(g.type,g.key,g.props,null,p.mode,E),E.ref=ts(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ic(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,C){return f===null||f.tag!==7?(f=_r(g,p.mode,E,C),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=rc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Go:return g=Na(f.type,f.key,f.props,null,p.mode,g),g.ref=ts(p,null,f),g.return=p,g;case Kr:return f=ic(f,p.mode,g),f.return=p,f;case An:var E=f._init;return h(p,E(f._payload),g)}if(ls(f)||Yi(f))return f=_r(f,p.mode,g,null),f.return=p,f;sa(p,f)}return null}function d(p,f,g,E){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:return g.key===C?l(p,f,g,E):null;case Kr:return g.key===C?u(p,f,g,E):null;case An:return C=g._init,d(p,f,C(g._payload),E)}if(ls(g)||Yi(g))return C!==null?null:c(p,f,g,E,null);sa(p,g)}return null}function m(p,f,g,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Go:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,C);case Kr:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,C);case An:var k=E._init;return m(p,f,g,k(E._payload),C)}if(ls(E)||Yi(E))return p=p.get(g)||null,c(f,p,E,C,null);sa(f,E)}return null}function _(p,f,g,E){for(var C=null,k=null,I=f,x=f=0,Q=null;I!==null&&x<g.length;x++){I.index>x?(Q=I,I=null):Q=I.sibling;var L=d(p,I,g[x],E);if(L===null){I===null&&(I=Q);break}t&&I&&L.alternate===null&&e(p,I),f=s(L,f,x),k===null?C=L:k.sibling=L,k=L,I=Q}if(x===g.length)return n(p,I),oe&&ar(p,x),C;if(I===null){for(;x<g.length;x++)I=h(p,g[x],E),I!==null&&(f=s(I,f,x),k===null?C=I:k.sibling=I,k=I);return oe&&ar(p,x),C}for(I=r(p,I);x<g.length;x++)Q=m(I,p,x,g[x],E),Q!==null&&(t&&Q.alternate!==null&&I.delete(Q.key===null?x:Q.key),f=s(Q,f,x),k===null?C=Q:k.sibling=Q,k=Q);return t&&I.forEach(function(be){return e(p,be)}),oe&&ar(p,x),C}function y(p,f,g,E){var C=Yi(g);if(typeof C!="function")throw Error(S(150));if(g=C.call(g),g==null)throw Error(S(151));for(var k=C=null,I=f,x=f=0,Q=null,L=g.next();I!==null&&!L.done;x++,L=g.next()){I.index>x?(Q=I,I=null):Q=I.sibling;var be=d(p,I,L.value,E);if(be===null){I===null&&(I=Q);break}t&&I&&be.alternate===null&&e(p,I),f=s(be,f,x),k===null?C=be:k.sibling=be,k=be,I=Q}if(L.done)return n(p,I),oe&&ar(p,x),C;if(I===null){for(;!L.done;x++,L=g.next())L=h(p,L.value,E),L!==null&&(f=s(L,f,x),k===null?C=L:k.sibling=L,k=L);return oe&&ar(p,x),C}for(I=r(p,I);!L.done;x++,L=g.next())L=m(I,p,x,L.value,E),L!==null&&(t&&L.alternate!==null&&I.delete(L.key===null?x:L.key),f=s(L,f,x),k===null?C=L:k.sibling=L,k=L);return t&&I.forEach(function(Gi){return e(p,Gi)}),oe&&ar(p,x),C}function A(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Gr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Go:e:{for(var C=g.key,k=f;k!==null;){if(k.key===C){if(C=g.type,C===Gr){if(k.tag===7){n(p,k.sibling),f=i(k,g.props.children),f.return=p,p=f;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===An&&Em(C)===k.type){n(p,k.sibling),f=i(k,g.props),f.ref=ts(p,k,g),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}g.type===Gr?(f=_r(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Na(g.type,g.key,g.props,null,p.mode,E),E.ref=ts(p,f,g),E.return=p,p=E)}return o(p);case Kr:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ic(g,p.mode,E),f.return=p,p=f}return o(p);case An:return k=g._init,A(p,f,k(g._payload),E)}if(ls(g))return _(p,f,g,E);if(Yi(g))return y(p,f,g,E);sa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=rc(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return A}var Ei=q_(!0),K_=q_(!1),Ao={},Kt=Jn(Ao),qs=Jn(Ao),Ks=Jn(Ao);function dr(t){if(t===Ao)throw Error(S(174));return t}function $d(t,e){switch(ee(Ks,e),ee(qs,t),ee(Kt,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}se(Kt),ee(Kt,e)}function Ii(){se(Kt),se(qs),se(Ks)}function G_(t){dr(Ks.current);var e=dr(Kt.current),n=Kc(e,t.type);e!==n&&(ee(qs,t),ee(Kt,n))}function Ud(t){qs.current===t&&(se(Kt),se(qs))}var ae=Jn(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function jd(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Aa=In.ReactCurrentDispatcher,Ju=In.ReactCurrentBatchConfig,Tr=0,le=null,ve=null,Ae=null,rl=!1,Ts=!1,Gs=0,kT=0;function Fe(){throw Error(S(321))}function Bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(Tr=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?xT:OT,t=n(r,i),Ts){s=0;do{if(Ts=!1,Gs=0,25<=s)throw Error(S(301));s+=1,Ae=ve=null,e.updateQueue=null,Aa.current=VT,t=n(r,i)}while(Ts)}if(Aa.current=il,e=ve!==null&&ve.next!==null,Tr=0,Ae=ve=le=null,rl=!1,e)throw Error(S(300));return t}function Hd(){var t=Gs!==0;return Gs=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?le.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Rt(){if(ve===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ae===null?le.memoizedState:Ae.next;if(e!==null)Ae=e,ve=t;else{if(t===null)throw Error(S(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ae===null?le.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function Qs(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Rt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,le.lanes|=c,Sr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Lt(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=Rt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Lt(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Q_(){}function Y_(t,e){var n=le,r=Rt(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,Wd(Z_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Ys(9,J_.bind(null,n,r,i,e),void 0,null),Re===null)throw Error(S(349));Tr&30||X_(n,e,i)}return i}function X_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J_(t,e,n,r){e.value=n,e.getSnapshot=r,ev(e)&&tv(t)}function Z_(t,e,n){return n(function(){ev(e)&&tv(t)})}function ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function tv(t){var e=gn(t,1);e!==null&&Ot(e,t,1,-1)}function Im(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:t},e.queue=t,t=t.dispatch=DT.bind(null,le,t),[e.memoizedState,t]}function Ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nv(){return Rt().memoizedState}function Ra(t,e,n,r){var i=jt();le.flags|=t,i.memoizedState=Ys(1|e,n,void 0,r===void 0?null:r)}function $l(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&Bd(r,o.deps)){i.memoizedState=Ys(e,n,s,r);return}}le.flags|=t,i.memoizedState=Ys(1|e,n,s,r)}function Tm(t,e){return Ra(8390656,8,t,e)}function Wd(t,e){return $l(2048,8,t,e)}function rv(t,e){return $l(4,2,t,e)}function iv(t,e){return $l(4,4,t,e)}function sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ov(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,sv.bind(null,e,t),n)}function qd(){}function av(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lv(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uv(t,e,n){return Tr&21?(Lt(n,e)||(n=d_(),le.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function PT(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Ju.transition;Ju.transition={};try{t(!1),e()}finally{J=n,Ju.transition=r}}function cv(){return Rt().memoizedState}function NT(t,e,n){var r=Un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))dv(e,n);else if(n=B_(t,e,n,r),n!==null){var i=Xe();Ot(n,t,r,i),fv(n,e,r)}}function DT(t,e,n){var r=Un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))dv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Lt(a,o)){var l=e.interleaved;l===null?(i.next=i,bd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B_(t,e,i,r),n!==null&&(i=Xe(),Ot(n,t,r,i),fv(n,e,r))}}function hv(t){var e=t.alternate;return t===le||e!==null&&e===le}function dv(t,e){Ts=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}var il={readContext:At,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},xT={readContext:At,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:Tm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NT.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:qd,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=PT.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=jt();if(oe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Re===null)throw Error(S(349));Tr&30||X_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tm(Z_.bind(null,r,s,t),[t]),r.flags|=2048,Ys(9,J_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jt(),e=Re.identifierPrefix;if(oe){var n=an,r=on;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OT={readContext:At,useCallback:av,useContext:At,useEffect:Wd,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:Zu,useRef:nv,useState:function(){return Zu(Qs)},useDebugValue:qd,useDeferredValue:function(t){var e=Rt();return uv(e,ve.memoizedState,t)},useTransition:function(){var t=Zu(Qs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:Q_,useSyncExternalStore:Y_,useId:cv,unstable_isNewReconciler:!1},VT={readContext:At,useCallback:av,useContext:At,useEffect:Wd,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:lv,useReducer:ec,useRef:nv,useState:function(){return ec(Qs)},useDebugValue:qd,useDeferredValue:function(t){var e=Rt();return ve===null?e.memoizedState=t:uv(e,ve.memoizedState,t)},useTransition:function(){var t=ec(Qs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:Q_,useSyncExternalStore:Y_,useId:cv,unstable_isNewReconciler:!1};function Ti(t,e){try{var n="",r=e;do n+=lI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LT=typeof WeakMap=="function"?WeakMap:Map;function pv(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,Rh=r),gh(t,e)},n}function mv(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gh(t,e),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QT.bind(null,t,e,n),e.then(t,t))}function Am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var MT=In.ReactCurrentOwner,rt=!1;function Qe(t,e,n,r){e.child=t===null?K_(e,null,n,r):Ei(e,t.child,n,r)}function Cm(t,e,n,r,i){n=n.render;var s=e.ref;return hi(e,i),r=zd(t,e,n,r,s,i),n=Hd(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(oe&&n&&Dd(e),e.flags|=1,Qe(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gv(t,e,s,r,i)):(t=Na(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=jn(s,r),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bs(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,yn(t,e,i)}return yh(t,e,n,r,i)}function yv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(ii,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(ii,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(ii,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(ii,ut),ut|=r;return Qe(t,e,i,n),e.child}function _v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yh(t,e,n,r,i){var s=st(n)?Er:qe.current;return s=vi(e,s),hi(e,i),n=zd(t,e,n,r,s,i),r=Hd(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(oe&&r&&Dd(e),e.flags|=1,Qe(t,e,n,i),e.child)}function Pm(t,e,n,r,i){if(st(n)){var s=!0;Ya(e)}else s=!1;if(hi(e,i),e.stateNode===null)Ca(t,e),W_(e,n,r),mh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=st(n)?Er:qe.current,u=vi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&wm(e,o,r,u),Rn=!1;var d=e.memoizedState;o.state=d,tl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||it.current||Rn?(typeof c=="function"&&(ph(e,n,c,r),l=e.memoizedState),(a=Rn||vm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=st(n)?Er:qe.current,l=vi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&wm(e,o,r,l),Rn=!1,d=e.memoizedState,o.state=d,tl(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||it.current||Rn?(typeof m=="function"&&(ph(e,n,m,r),_=e.memoizedState),(u=Rn||vm(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return _h(t,e,n,r,s,i)}function _h(t,e,n,r,i,s){_v(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pm(e,n,!1),yn(t,e,s);r=e.stateNode,MT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ei(e,t.child,null,s),e.child=Ei(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&pm(e,n,!0),e.child}function vv(t){var e=t.stateNode;e.pendingContext?fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(t,e.context,!1),$d(t,e.containerInfo)}function Nm(t,e,n,r,i){return wi(),Od(i),e.flags|=256,Qe(t,e,n,r),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function wv(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ae,i&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,r,0,null),t=_r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=vh,t):Kd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jn(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vh,r}return s=t.child,t=s.sibling,r=jn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kd(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,r){return r!==null&&Od(r),Ei(e,t.child,null,n),t=Kd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tc(Error(S(422))),oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Bl({mode:"visible",children:r.children},i,0,null),s=_r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ei(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=vh,s);if(!(e.mode&1))return oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=tc(s,r,void 0),oa(t,e,o,r)}if(a=(o&t.childLanes)!==0,rt||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Ot(r,t,i,-1))}return Zd(),r=tc(Error(S(421))),oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=bn(i.nextSibling),dt=e,oe=!0,Dt=null,t!==null&&(wt[Et++]=on,wt[Et++]=an,wt[Et++]=Ir,on=t.id,an=t.overflow,Ir=e),e=Kd(e,r.children),e.flags|=4096,e)}function Dm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fh(t.return,e,n)}function nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ev(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,n,e);else if(t.tag===19)Dm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=jn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FT(t,e,n){switch(e.tag){case 3:vv(e),wi();break;case 5:G_(e);break;case 1:st(e.type)&&Ya(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Za,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?wv(t,e,n):(ee(ae,ae.current&1),t=yn(t,e,n),t!==null?t.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ev(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,yv(t,e,n)}return yn(t,e,n)}var Iv,Eh,Tv,Sv;Iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eh=function(){};Tv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dr(Kt.current);var s=null;switch(n){case"input":i=zc(t,i),r=zc(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=qc(t,i),r=qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ga)}Gc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ls.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ls.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Sv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ns(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $T(t,e,n){var r=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return st(e.type)&&Qa(),$e(e),null;case 3:return r=e.stateNode,Ii(),se(it),se(qe),jd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(Ph(Dt),Dt=null))),Eh(t,e),$e(e),null;case 5:Ud(e);var i=dr(Ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Tv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return $e(e),null}if(t=dr(Kt.current),ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Ws]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)ne(cs[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Up(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Bp(r,s),ne("invalid",r)}Gc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(r.textContent,a,t),i=["children",""+a]):Ls.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Qo(r),jp(r,s,!0);break;case"textarea":Qo(r),zp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ga)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Bt]=e,t[Ws]=r,Iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)ne(cs[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":Up(t,r),i=zc(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Bp(t,r),i=qc(t,r),ne("invalid",t);break;default:i=r}Gc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?e_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ls.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&yd(t,s,l,o))}switch(n){case"input":Qo(t),jp(t,r,!1);break;case"textarea":Qo(t),zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=dr(Ks.current),dr(Kt.current),ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=dt,t!==null))switch(t.tag){case 3:ra(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return $e(e),null;case 13:if(se(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&ct!==null&&e.mode&1&&!(e.flags&128))j_(),wi(),e.flags|=98560,s=!1;else if(s=ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Bt]=e}else wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Dt!==null&&(Ph(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?we===0&&(we=3):Zd())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Ii(),Eh(t,e),t===null&&zs(e.stateNode.containerInfo),$e(e),null;case 10:return Md(e.type._context),$e(e),null;case 17:return st(e.type)&&Qa(),$e(e),null;case 19:if(se(ae),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ns(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Si&&(e.flags|=128,r=!0,ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return $e(e),null}else 2*pe()-s.renderingStartTime>Si&&n!==1073741824&&(e.flags|=128,r=!0,ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function UT(t,e){switch(xd(e),e.tag){case 1:return st(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ii(),se(it),se(qe),jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return Ii(),null;case 10:return Md(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var aa=!1,Be=!1,jT=typeof WeakSet=="function"?WeakSet:Set,N=null;function ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){he(t,e,r)}}var xm=!1;function BT(t,e){if(sh=Wa,t=k_(),Nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:t,selectionRange:n},Wa=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,A=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pt(e.type,y),A);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){he(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=xm,xm=!1,_}function Ss(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Av(t){var e=t.alternate;e!==null&&(t.alternate=null,Av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[Ws],delete e[uh],delete e[ST],delete e[AT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rv(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ga));else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}var Pe=null,Nt=!1;function Tn(t,e,n){for(n=n.child;n!==null;)Cv(t,e,n),n=n.sibling}function Cv(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Be||ri(n,e);case 6:var r=Pe,i=Nt;Pe=null,Tn(t,e,n),Pe=r,Nt=i,Pe!==null&&(Nt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Nt?(t=Pe,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Us(t)):Qu(Pe,n.stateNode));break;case 4:r=Pe,i=Nt,Pe=n.stateNode.containerInfo,Nt=!0,Tn(t,e,n),Pe=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}Tn(t,e,n);break;case 1:if(!Be&&(ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Tn(t,e,n),Be=r):Tn(t,e,n);break;default:Tn(t,e,n)}}function Vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jT),e.forEach(function(r){var i=XT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Nt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Nt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Nt=!0;break e}a=a.return}if(Pe===null)throw Error(S(160));Cv(s,o,i),Pe=null,Nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kv(e,t),e=e.sibling}function kv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),Ut(t),r&4){try{Ss(3,t,t.return),Ul(3,t)}catch(y){he(t,t.return,y)}try{Ss(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:kt(e,t),Ut(t),r&512&&n!==null&&ri(n,n.return);break;case 5:if(kt(e,t),Ut(t),r&512&&n!==null&&ri(n,n.return),t.flags&32){var i=t.stateNode;try{Ms(i,"")}catch(y){he(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qy(i,s),Qc(a,o);var u=Qc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?e_(i,h):c==="dangerouslySetInnerHTML"?Jy(i,h):c==="children"?Ms(i,h):yd(i,c,h,u)}switch(a){case"input":Hc(i,s);break;case"textarea":Yy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ai(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ai(i,!!s.multiple,s.defaultValue,!0):ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ws]=s}catch(y){he(t,t.return,y)}}break;case 6:if(kt(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){he(t,t.return,y)}}break;case 3:if(kt(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:kt(e,t),Ut(t);break;case 13:kt(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yd=pe())),r&4&&Vm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||c,kt(e,t),Be=u):kt(e,t),Ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(h=N=c;N!==null;){switch(d=N,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ss(4,d,d.return);break;case 1:ri(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:ri(d,d.return);break;case 22:if(d.memoizedState!==null){Mm(h);continue}}m!==null?(m.return=d,N=m):Mm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zy("display",o))}catch(y){he(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){he(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kt(e,t),Ut(t),r&4&&Vm(t);break;case 21:break;default:kt(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ms(i,""),r.flags&=-33);var s=Om(t);Ah(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Om(t);Sh(t,a,o);break;default:throw Error(S(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zT(t,e,n){N=t,Pv(t)}function Pv(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||aa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=aa;var u=Be;if(aa=o,(Be=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?bm(i):l!==null?(l.return=o,N=l):bm(i);for(;s!==null;)N=s,Pv(s),s=s.sibling;N=i,aa=a,Be=u}Lm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Lm(t)}}function Lm(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_m(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_m(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Us(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Be||e.flags&512&&Th(e)}catch(d){he(e,e.return,d)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Mm(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function bm(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){he(e,i,l)}}var s=e.return;try{Th(e)}catch(l){he(e,s,l)}break;case 5:var o=e.return;try{Th(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var HT=Math.ceil,sl=In.ReactCurrentDispatcher,Gd=In.ReactCurrentOwner,St=In.ReactCurrentBatchConfig,Y=0,Re=null,ye=null,Oe=0,ut=0,ii=Jn(0),we=0,Xs=null,Sr=0,jl=0,Qd=0,As=null,tt=null,Yd=0,Si=1/0,en=null,ol=!1,Rh=null,$n=null,la=!1,xn=null,al=0,Rs=0,Ch=null,ka=-1,Pa=0;function Xe(){return Y&6?pe():ka!==-1?ka:ka=pe()}function Un(t){return t.mode&1?Y&2&&Oe!==0?Oe&-Oe:CT.transition!==null?(Pa===0&&(Pa=d_()),Pa):(t=J,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function Ot(t,e,n,r){if(50<Rs)throw Rs=0,Ch=null,Error(S(185));Io(t,n,r),(!(Y&2)||t!==Re)&&(t===Re&&(!(Y&2)&&(jl|=n),we===4&&kn(t,Oe)),ot(t,r),n===1&&Y===0&&!(e.mode&1)&&(Si=pe()+500,bl&&Zn()))}function ot(t,e){var n=t.callbackNode;CI(t,e);var r=Ha(t,t===Re?Oe:0);if(r===0)n!==null&&qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qp(n),e===1)t.tag===0?RT(Fm.bind(null,t)):F_(Fm.bind(null,t)),IT(function(){!(Y&6)&&Zn()}),n=null;else{switch(f_(r)){case 1:n=Id;break;case 4:n=c_;break;case 16:n=za;break;case 536870912:n=h_;break;default:n=za}n=bv(n,Nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nv(t,e){if(ka=-1,Pa=0,Y&6)throw Error(S(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=Ha(t,t===Re?Oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var i=Y;Y|=2;var s=xv();(Re!==t||Oe!==e)&&(en=null,Si=pe()+500,yr(t,e));do try{KT();break}catch(a){Dv(t,a)}while(1);Ld(),sl.current=s,Y=i,ye!==null?e=0:(Re=null,Oe=0,e=we)}if(e!==0){if(e===2&&(i=eh(t),i!==0&&(r=i,e=kh(t,i))),e===1)throw n=Xs,yr(t,0),kn(t,r),ot(t,pe()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!WT(i)&&(e=ll(t,r),e===2&&(s=eh(t),s!==0&&(r=s,e=kh(t,s))),e===1))throw n=Xs,yr(t,0),kn(t,r),ot(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:lr(t,tt,en);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=Yd+500-pe(),10<e)){if(Ha(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lh(lr.bind(null,t,tt,en),e);break}lr(t,tt,en);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HT(r/1960))-r,10<r){t.timeoutHandle=lh(lr.bind(null,t,tt,en),r);break}lr(t,tt,en);break;case 5:lr(t,tt,en);break;default:throw Error(S(329))}}}return ot(t,pe()),t.callbackNode===n?Nv.bind(null,t):null}function kh(t,e){var n=As;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=tt,tt=n,e!==null&&Ph(e)),t}function Ph(t){tt===null?tt=t:tt.push.apply(tt,t)}function WT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Qd,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function Fm(t){if(Y&6)throw Error(S(327));di();var e=Ha(t,0);if(!(e&1))return ot(t,pe()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=eh(t);r!==0&&(e=r,n=kh(t,r))}if(n===1)throw n=Xs,yr(t,0),kn(t,e),ot(t,pe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,tt,en),ot(t,pe()),null}function Xd(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(Si=pe()+500,bl&&Zn())}}function Ar(t){xn!==null&&xn.tag===0&&!(Y&6)&&di();var e=Y;Y|=1;var n=St.transition,r=J;try{if(St.transition=null,J=1,t)return t()}finally{J=r,St.transition=n,Y=e,!(Y&6)&&Zn()}}function Jd(){ut=ii.current,se(ii)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ET(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(xd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Ii(),se(it),se(qe),jd();break;case 5:Ud(r);break;case 4:Ii();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Md(r.type._context);break;case 22:case 23:Jd()}n=n.return}if(Re=t,ye=t=jn(t.current,null),Oe=ut=e,we=0,Xs=null,Qd=jl=Sr=0,tt=As=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hr=null}return t}function Dv(t,e){do{var n=ye;try{if(Ld(),Aa.current=il,rl){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(Tr=0,Ae=ve=le=null,Ts=!1,Gs=0,Gd.current=null,n===null||n.return===null){we=1,Xs=e,ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Oe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Am(o);if(m!==null){m.flags&=-257,Rm(m,o,a,s,e),m.mode&1&&Sm(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Sm(s,u,e),Zd();break e}l=Error(S(426))}}else if(oe&&a.mode&1){var A=Am(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Rm(A,o,a,s,e),Od(Ti(l,a));break e}}s=l=Ti(l,a),we!==4&&(we=2),As===null?As=[s]:As.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=pv(s,l,e);ym(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($n===null||!$n.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=mv(s,a,e);ym(s,E);break e}}s=s.return}while(s!==null)}Vv(n)}catch(C){e=C,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function xv(){var t=sl.current;return sl.current=il,t===null?il:t}function Zd(){(we===0||we===3||we===2)&&(we=4),Re===null||!(Sr&268435455)&&!(jl&268435455)||kn(Re,Oe)}function ll(t,e){var n=Y;Y|=2;var r=xv();(Re!==t||Oe!==e)&&(en=null,yr(t,e));do try{qT();break}catch(i){Dv(t,i)}while(1);if(Ld(),Y=n,sl.current=r,ye!==null)throw Error(S(261));return Re=null,Oe=0,we}function qT(){for(;ye!==null;)Ov(ye)}function KT(){for(;ye!==null&&!_I();)Ov(ye)}function Ov(t){var e=Mv(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?Vv(t):ye=e,Gd.current=null}function Vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UT(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ye=null;return}}else if(n=$T(n,e,ut),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);we===0&&(we=5)}function lr(t,e,n){var r=J,i=St.transition;try{St.transition=null,J=1,GT(t,e,n,r)}finally{St.transition=i,J=r}return null}function GT(t,e,n,r){do di();while(xn!==null);if(Y&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kI(t,s),t===Re&&(ye=Re=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,bv(za,function(){return di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=J;J=1;var a=Y;Y|=4,Gd.current=null,BT(t,n),kv(n,t),pT(oh),Wa=!!sh,oh=sh=null,t.current=n,zT(n),vI(),Y=a,J=o,St.transition=s}else t.current=n;if(la&&(la=!1,xn=t,al=i),s=t.pendingLanes,s===0&&($n=null),II(n.stateNode),ot(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,t=Rh,Rh=null,t;return al&1&&t.tag!==0&&di(),s=t.pendingLanes,s&1?t===Ch?Rs++:(Rs=0,Ch=t):Rs=0,Zn(),null}function di(){if(xn!==null){var t=f_(al),e=St.transition,n=J;try{if(St.transition=null,J=16>t?16:t,xn===null)var r=!1;else{if(t=xn,xn=null,al=0,Y&6)throw Error(S(331));var i=Y;for(Y|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:Ss(8,c,s)}var h=c.child;if(h!==null)h.return=c,N=h;else for(;N!==null;){c=N;var d=c.sibling,m=c.return;if(Av(c),c===u){N=null;break}if(d!==null){d.return=m,N=d;break}N=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ss(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,N=p;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(C){he(a,a.return,C)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(Y=i,Zn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(xl,t)}catch{}r=!0}return r}finally{J=n,St.transition=e}}return!1}function $m(t,e,n){e=Ti(n,e),e=pv(t,e,1),t=Fn(t,e,1),e=Xe(),t!==null&&(Io(t,1,e),ot(t,e))}function he(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=Ti(n,t),t=mv(e,t,1),e=Fn(e,t,1),t=Xe(),e!==null&&(Io(e,1,t),ot(e,t));break}}e=e.return}}function QT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(Oe&n)===n&&(we===4||we===3&&(Oe&130023424)===Oe&&500>pe()-Yd?yr(t,0):Qd|=n),ot(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=Xe();t=gn(t,e),t!==null&&(Io(t,e,n),ot(t,n))}function YT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function XT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Lv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,FT(t,e,n);rt=!!(t.flags&131072)}else rt=!1,oe&&e.flags&1048576&&$_(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ca(t,e),t=e.pendingProps;var i=vi(e,qe.current);hi(e,n),i=zd(null,e,r,t,i,n);var s=Hd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(s=!0,Ya(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,mh(e,r,t,n),e=_h(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Dd(e),Qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZT(r),t=Pt(r,t),i){case 0:e=yh(null,e,r,t,n);break e;case 1:e=Pm(null,e,r,t,n);break e;case 11:e=Cm(null,e,r,t,n);break e;case 14:e=km(null,e,r,Pt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Pm(t,e,r,i,n);case 3:e:{if(vv(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z_(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ti(Error(S(423)),e),e=Nm(t,e,r,n,i);break e}else if(r!==i){i=Ti(Error(S(424)),e),e=Nm(t,e,r,n,i);break e}else for(ct=bn(e.stateNode.containerInfo.firstChild),dt=e,oe=!0,Dt=null,n=K_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),r===i){e=yn(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return G_(e),t===null&&dh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ah(r,i)?o=null:s!==null&&ah(r,s)&&(e.flags|=32),_v(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return wv(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ei(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Cm(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Za,r._currentValue),r._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===i.children&&!it.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hi(e,n),i=At(i),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),km(t,e,r,i,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Ca(t,e),e.tag=1,st(r)?(t=!0,Ya(e)):t=!1,hi(e,n),W_(e,r,i),mh(e,r,i,n),_h(null,e,r,!0,t,n);case 19:return Ev(t,e,n);case 22:return yv(t,e,n)}throw Error(S(156,e.tag))};function bv(t,e){return u_(t,e)}function JT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new JT(t,e,n,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZT(t){if(typeof t=="function")return ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===wd)return 14}return 2}function jn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gr:return _r(n.children,i,s,e);case _d:o=8,i|=8;break;case $c:return t=Tt(12,n,e,i|2),t.elementType=$c,t.lanes=s,t;case Uc:return t=Tt(13,n,e,i),t.elementType=Uc,t.lanes=s,t;case jc:return t=Tt(19,n,e,i),t.elementType=jc,t.lanes=s,t;case qy:return Bl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hy:o=10;break e;case Wy:o=9;break e;case vd:o=11;break e;case wd:o=14;break e;case An:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _r(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function Bl(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=qy,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(t,e,n,r,i,s,o,a,l){return t=new eS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function tS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fv(t){if(!t)return Kn;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(st(n))return b_(t,n,e)}return e}function $v(t,e,n,r,i,s,o,a,l){return t=tf(n,r,!0,t,i,s,o,a,l),t.context=Fv(null),n=t.current,r=Xe(),i=Un(n),s=hn(r,i),s.callback=e??null,Fn(n,s,i),t.current.lanes=i,Io(t,i,r),ot(t,r),t}function zl(t,e,n,r){var i=e.current,s=Xe(),o=Un(i);return n=Fv(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fn(i,e,o),t!==null&&(Ot(t,i,o,s),Sa(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function nS(){return null}var Uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function rf(t){this._internalRoot=t}Hl.prototype.render=rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));zl(t,e,null,null)};Hl.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){zl(null,t,null,null)}),e[mn]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=g_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&__(t)}};function sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jm(){}function rS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ul(o);s.call(u)}}var o=$v(e,r,t,0,null,!1,!1,"",jm);return t._reactRootContainer=o,t[mn]=o.current,zs(t.nodeType===8?t.parentNode:t),Ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ul(l);a.call(u)}}var l=tf(t,0,!1,null,null,!1,!1,"",jm);return t._reactRootContainer=l,t[mn]=l.current,zs(t.nodeType===8?t.parentNode:t),Ar(function(){zl(e,l,n,r)}),l}function ql(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ul(o);a.call(l)}}zl(e,o,t,i)}else o=rS(n,e,t,i,r);return ul(o)}p_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=us(e.pendingLanes);n!==0&&(Td(e,n|1),ot(e,pe()),!(Y&6)&&(Si=pe()+500,Zn()))}break;case 13:Ar(function(){var r=gn(t,1);if(r!==null){var i=Xe();Ot(r,t,1,i)}}),nf(t,1)}};Sd=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=Xe();Ot(e,t,134217728,n)}nf(t,134217728)}};m_=function(t){if(t.tag===13){var e=Un(t),n=gn(t,e);if(n!==null){var r=Xe();Ot(n,t,e,r)}nf(t,e)}};g_=function(){return J};y_=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Xc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ml(r);if(!i)throw Error(S(90));Gy(r),Hc(r,i)}}}break;case"textarea":Yy(t,n);break;case"select":e=n.value,e!=null&&ai(t,!!n.multiple,e,!1)}};r_=Xd;i_=Ar;var iS={usingClientEntryPoint:!1,Events:[So,Jr,Ml,t_,n_,Xd]},rs={findFiberByHostInstance:cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sS={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a_(t),t===null?null:t.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{xl=ua.inject(sS),qt=ua}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(e))throw Error(S(200));return tS(t,e,null,n)};_t.createRoot=function(t,e){if(!sf(t))throw Error(S(299));var n=!1,r="",i=Uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tf(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,zs(t.nodeType===8?t.parentNode:t),new rf(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=a_(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Ar(t)};_t.hydrate=function(t,e,n){if(!Wl(e))throw Error(S(200));return ql(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!sf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$v(e,null,t,1,n??null,i,!1,s,o),t[mn]=e.current,zs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hl(e)};_t.render=function(t,e,n){if(!Wl(e))throw Error(S(200));return ql(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(S(40));return t._reactRootContainer?(Ar(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};_t.unstable_batchedUpdates=Xd;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return ql(t,e,n,!1,r)};_t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=_t})(nI);var Bm=Mc;Lc.createRoot=Bm.createRoot,Lc.hydrateRoot=Bm.hydrateRoot;function jv({children:t,id:e}){return v("h1",{id:e&&e,className:"text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-white-900",children:t})}const oS="/images/herobg.png",Cs=({children:t,tip:e,position:n,className:r})=>{const[i,s]=H.useState(!1);return F("div",{className:"relative",children:[v("p",{className:`${i?"opacity-100 scale-100":"opacity-0 scale-50"} ${n?{"top-middle":"w-max max-w-[200px] bottom-[120%] left-1/2 -translate-x-1/2 ","bottom-middle":"w-max max-w-[200px] top-[120%] left-1/2 -translate-x-1/2 ",right:"w-max max-w-[200px] left-[120%] top-1/2 -translate-y-1/2 ",left:"w-max max-w-[200px] right-[120%] top-1/2 -translate-y-1/2 "}[n]:r} bg-slate-800 rounded-xl drop-shadow-lg absolute text-xs text-center px-4 py-2 z-10 duration-300 transition after:absolute after:w-2 after:h-2`,children:e}),v("div",{className:"w-fit h-fit",onMouseOver:()=>s(!0),onMouseLeave:()=>s(!1),children:t})]})},Bv=({tipPosition:t,iconDirection:e})=>v("div",{className:"flex flex-col",children:F("div",{className:`flex flex-${e||"row"} gap-4`,children:[v("div",{children:v(Cs,{tip:"Connect with me on LinkedIn",position:t,children:v("a",{href:"https://linkedin.com/in/windsor-sam",target:"blank",className:"bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full",children:v("svg",{className:"w-5 h-5 fill-current",role:"img",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:v("g",{children:v("path",{d:"M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"})})})})})}),v("div",{children:v(Cs,{tip:"See my projects on GitHub",position:t,children:v("a",{href:"https://github.com/windsywinds",target:"blank",className:"bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full",children:v("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:v("g",{fill:"none",children:v("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})})})})}),v("div",{children:v(Cs,{tip:"Check out my photography",position:t,children:v("a",{href:"https://instagram.com/windsywinds",target:"blank",className:"bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full",children:v("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"w-5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:v("g",{fill:"none",children:v("path",{d:"m 12 0 c -3.2565 0 -3.666 0.015 -4.9455 0.072 c -1.2795 0.06 -2.151 0.261 -2.9145 0.558 a 5.8755 5.8755 90 0 0 -2.1255 1.3845 a 5.8905 5.8905 90 0 0 -1.3845 2.1255 c -0.297 0.762 -0.4995 1.635 -0.558 2.91 c -0.057 1.2825 -0.072 1.6905 -0.072 4.9515 c 0 3.258 0.015 3.666 0.072 4.9455 c 0.06 1.278 0.261 2.1495 0.558 2.913 c 0.3075 0.789 0.717 1.458 1.3845 2.1255 c 0.666 0.6675 1.335 1.0785 2.124 1.3845 c 0.765 0.297 1.635 0.4995 2.913 0.558 c 1.281 0.057 1.689 0.072 4.9485 0.072 s 3.666 -0.015 4.947 -0.072 c 1.2765 -0.06 2.151 -0.261 2.9145 -0.558 a 5.874 5.874 90 0 0 2.124 -1.3845 c 0.6675 -0.6675 1.077 -1.3365 1.3845 -2.1255 c 0.2955 -0.7635 0.498 -1.635 0.558 -2.913 c 0.057 -1.2795 0.072 -1.6875 0.072 -4.947 s -0.015 -3.6675 -0.072 -4.9485 c -0.06 -1.2765 -0.2625 -2.1495 -0.558 -2.9115 a 5.889 5.889 90 0 0 -1.3845 -2.1255 a 5.8665 5.8665 90 0 0 -2.1255 -1.3845 c -0.765 -0.297 -1.638 -0.4995 -2.9145 -0.558 c -1.281 -0.057 -1.6875 -0.072 -4.9485 -0.072 h 0.0045 z m -1.0755 2.163 h 1.077 c 3.204 0 3.5835 0.0105 4.848 0.069 c 1.17 0.0525 1.806 0.249 2.229 0.4125 c 0.5595 0.2175 0.96 0.4785 1.38 0.8985 c 0.42 0.42 0.6795 0.819 0.897 1.38 c 0.165 0.4215 0.36 1.0575 0.4125 2.2275 c 0.0585 1.2645 0.0705 1.644 0.0705 4.8465 s -0.012 3.5835 -0.0705 4.848 c -0.0525 1.17 -0.249 1.8045 -0.4125 2.2275 a 3.705 3.705 0 0 1 -0.8985 1.3785 c -0.42 0.42 -0.819 0.6795 -1.38 0.897 c -0.42 0.165 -1.056 0.36 -2.2275 0.414 c -1.2645 0.057 -1.644 0.0705 -4.848 0.0705 s -3.585 -0.0135 -4.8495 -0.0705 c -1.17 -0.054 -1.8045 -0.249 -2.2275 -0.414 a 3.717 3.717 90 0 1 -1.38 -0.897 a 3.72 3.72 90 0 1 -0.9 -1.38 c -0.1635 -0.4215 -0.36 -1.0575 -0.4125 -2.2275 c -0.057 -1.2645 -0.069 -1.644 -0.069 -4.8495 c 0 -3.204 0.012 -3.582 0.069 -4.8465 c 0.054 -1.17 0.249 -1.806 0.414 -2.229 c 0.2175 -0.5595 0.4785 -0.96 0.8985 -1.38 c 0.42 -0.42 0.819 -0.6795 1.38 -0.897 c 0.423 -0.165 1.0575 -0.36 2.2275 -0.414 c 1.107 -0.051 1.536 -0.066 3.7725 -0.0675 v 0.003 z m 7.482 1.992 a 1.44 1.44 0 1 0 0 2.88 a 1.44 1.44 0 0 0 0 -2.88 z m -6.405 1.683 a 6.1635 6.1635 90 1 0 0 12.3255 a 6.1635 6.1635 90 0 0 0 -12.3255 z m 0 2.1615 a 4.0005 4.0005 90 1 1 0 8.001 a 4.0005 4.0005 90 0 1 0 -8.001 z",fill:"currentColor"})})})})})})]})}),aS=({scrollToContact:t,refHero:e})=>(H.useState(!1),H.useState(!1),H.useRef(null),H.useRef(null),F("div",{className:"",ref:e,children:[v("div",{className:"flex absolute",children:v("div",{className:"flex relative top-5 left-5 ",children:v(Bv,{iconDirection:"col",tipPosition:"right"})})}),F("div",{className:"h-screen bg-cover ms:bg-contain bg-no-repeat bg-center flex flex-col overflow-hidden  ",style:{backgroundImage:`url(${oS})`,height:"calc(100vh + 20px)"},children:[v("div",{className:"w-full h-full  flex flex-col items-center justify-center",children:F("div",{className:"flex flex-col pl-10 pb-8",children:[v("h1",{className:"text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold ",children:"Sam Windsor,"}),v("p",{className:"text-base md:text-xl pl-1 pr-1 mb-3 font-medium text-right ",children:"Web Developer."}),v("div",{className:"flex flex-row text-right items-center justify-end gap-3 pr-1",children:v(Cs,{tip:"Jump to Contact Form",position:"bottom-middle",children:v("button",{onClick:()=>t(),className:"flex items-center justify-center",children:v("svg",{className:"md:w-12 md:h-12 w-6 h-6 opacity-85",fill:"currentColor",viewBox:"0 0 24 24",strokeWidth:"0",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H10.2C10.7523 20 11.2 19.5523 11.2 19C11.2 18.4477 10.7523 18 10.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V12.1333C18 12.6856 18.4477 13.1333 19 13.1333C19.5523 13.1333 20 12.6856 20 12.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM18.2929 21.2929C17.9024 21.6834 17.9024 22.3166 18.2929 22.7071C18.6834 23.0976 19.3166 23.0976 19.7071 22.7071L22.7071 19.7071C23.0976 19.3166 23.0976 18.6834 22.7071 18.2929L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L19.5858 18H15C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H19.5858L18.2929 21.2929Z"})})})})})]})}),v("span",{className:"inline-block animate-bounce text-stone-700 text-sm pt-10",style:{animation:"bounce 2s infinite"},children:v("svg",{className:"w-10 h-10 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 13l-7 7-7-7m14-8l-7 7-7-7"})})})]})]}));function lS(){return v("div",{className:"intro",children:F("div",{className:"flex items-start justify-center flex-col text-left pt-20 pb-16 pl-10 pr-10",children:[F("p",{className:"text-sm mb-2 font-bold",children:["Hi! I'm Sam, a Developer, Photographer, and Snowboard coach. After hanging up my snowboard boots for a career change, I completed a Diploma in Web Development and Design to kickstart my learning and then went on to complete the Mission Ready Cloud and DevOps Developer program. ",v("br",{}),"I primarily work in React.js and other frontend Javascript frameworks, but have experience across a number of technology stacks, previously completing projects using Python, C#, and MySQL."]}),v("p",{className:"text-sm mb-2 font-bold pt-2",children:"In my spare time I enjoy getting out for hikes to take photos, (attempting to) surf, or working on my own personal web projects - My latest ongoing project is a PWA for whale and cetacean sightings utilising Google Firebase, and I'd love to make this a native mobile app one day."}),v("p",{className:"text-sm mb-6 font-bold pt-5",children:"I've included some projects I've worked on below and also a contact form to get in touch. I'd love to hear from you!"})]})})}function uS({title:t,imgURL:e,imgALT:n,slug:r,stack:i,demoURL:s,gitURL:o}){return F("div",{className:"flex flex-col border-2 border-slate-700 rounded-md overflow-hidden items-start justify-start ",children:[v("div",{className:"flex w-full overflow-hidden",children:v("img",{src:e,alt:n,className:"w-full h-full object-cover curser-pointer"})}),F("div",{className:"flex flex-col w-full h-2/3 items-start justify-between gap-2 pb-4 pt-2 px-4",children:[F("div",{className:"",children:[F("h2",{className:"text-lg md:text-xl mb-1 md:mb-2 font-semibold",children:[" ",t]}),F("h3",{className:"text-lg md:text-sm ",children:[" ",r]})]}),v("div",{className:"flex h-full gap-2 flex-row items-end",children:F("p",{className:"flex flex-wrap gap-2 flex-row items-end justify-start text-xs md:text-sm",children:[i==null?void 0:i.map(a=>v("span",{className:"inline-block px-2 py-1 font-semibold border-2 border-slate-500 rounded-md",children:a},a))," "]})}),F("div",{className:"flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm",children:[o&&F("a",{className:"flex flex-row gap-2 inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-[#196aa7] to-[#1e82cd] hover:from-[#1e87cd] hover:to-[#72caed] drop-shadow-md",target:"_blank",href:o,children:[v("p",{children:"GitHub"}),F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"14px",children:["Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.",v("path",{fill:"#ffffff",d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"})]})]}),s&&F("a",{className:"flex flex-row gap-2 inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-[#1e82cd] to-[#196aa7] hover:from-[#1e87cd] hover:to-[#72caed] drop-shadow-md",target:"_blank",href:s,children:[v("p",{children:"Live"}),F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"14px",children:["Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.",v("path",{fill:"#ffffff",d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"})]})]})]})]})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new hS;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dS=function(t){const e=zv(t);return Hv.encodeByteArray(e,!0)},cl=function(t){return dS(t).replace(/\./g,"")},Wv=function(t){try{return Hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=()=>fS().__FIREBASE_DEFAULTS__,mS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wv(t[1]);return e&&JSON.parse(e)},of=()=>{try{return pS()||mS()||gS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qv=t=>{var e,n;return(n=(e=of())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yS=t=>{const e=qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kv=()=>{var t;return(t=of())===null||t===void 0?void 0:t.config},Gv=t=>{var e;return(e=of())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Qv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ES(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IS(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yv(){try{return typeof indexedDB=="object"}catch{return!1}}function Xv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function TS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SS,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $t(i,a,r)}}function AS(t,e){return t.replace(RS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RS=/\{\$([^}]+)}/g;function CS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zm(s)&&zm(o)){if(!Js(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kS(t,e){const n=new PS(t,e);return n.subscribe.bind(n)}class PS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sc),i.error===void 0&&(i.error=sc),i.complete===void 0&&(i.complete=sc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1e3,xS=2,OS=4*60*60*1e3,VS=.5;function Hm(t,e=DS,n=xS){const r=e*Math.pow(n,t),i=Math.round(VS*r*(Math.random()-.5)*2);return Math.min(OS,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _S;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bS(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MS(t){return t===ur?void 0:t}function bS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const $S={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},US=K.INFO,jS={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},BS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=US,this._logHandler=BS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const zS=(t,e)=>e.some(n=>t instanceof n);let Wm,qm;function HS(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WS(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jv=new WeakMap,Nh=new WeakMap,Zv=new WeakMap,oc=new WeakMap,af=new WeakMap;function qS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jv.set(n,t)}).catch(()=>{}),af.set(e,t),e}function KS(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GS(t){Dh=t(Dh)}function QS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return Zv.set(r,e.sort?e.sort():[e]),dn(r)}:WS().includes(t)?function(...e){return t.apply(ac(this),e),dn(Jv.get(this))}:function(...e){return dn(t.apply(ac(this),e))}}function YS(t){return typeof t=="function"?QS(t):(t instanceof IDBTransaction&&KS(t),zS(t,HS())?new Proxy(t,Dh):t)}function dn(t){if(t instanceof IDBRequest)return qS(t);if(oc.has(t))return oc.get(t);const e=YS(t);return e!==t&&(oc.set(t,e),af.set(e,t)),e}const ac=t=>af.get(t);function lf(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=dn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function lc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),dn(n).then(()=>{})}const XS=["get","getKey","getAll","getAllKeys","count"],JS=["put","add","delete","clear"],uc=new Map;function Km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return uc.set(e,s),s}GS(t=>({...t,get:(e,n,r)=>Km(e,n)||t.get(e,n,r),has:(e,n)=>!!Km(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",Gm="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Kl("@firebase/app"),tA="@firebase/app-compat",nA="@firebase/analytics-compat",rA="@firebase/analytics",iA="@firebase/app-check-compat",sA="@firebase/app-check",oA="@firebase/auth",aA="@firebase/auth-compat",lA="@firebase/database",uA="@firebase/database-compat",cA="@firebase/functions",hA="@firebase/functions-compat",dA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",yA="@firebase/performance-compat",_A="@firebase/remote-config",vA="@firebase/remote-config-compat",wA="@firebase/storage",EA="@firebase/storage-compat",IA="@firebase/firestore",TA="@firebase/firestore-compat",SA="firebase",AA="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",RA={[xh]:"fire-core",[tA]:"fire-core-compat",[rA]:"fire-analytics",[nA]:"fire-analytics-compat",[sA]:"fire-app-check",[iA]:"fire-app-check-compat",[oA]:"fire-auth",[aA]:"fire-auth-compat",[lA]:"fire-rtdb",[uA]:"fire-rtdb-compat",[cA]:"fire-fn",[hA]:"fire-fn-compat",[dA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[yA]:"fire-perf-compat",[_A]:"fire-rc",[vA]:"fire-rc-compat",[wA]:"fire-gcs",[EA]:"fire-gcs-compat",[IA]:"fire-fst",[TA]:"fire-fst-compat","fire-js":"fire-js",[SA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map,Vh=new Map;function CA(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ct(t){const e=t.name;if(Vh.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of hl.values())CA(n,t);return!0}function Mr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new er("app","Firebase",kA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=AA;function e0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=Kv()),!n)throw Bn.create("no-options");const s=hl.get(i);if(s){if(Js(n,s.options)&&Js(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new FS(i);for(const l of Vh.values())o.addComponent(l);const a=new PA(n,r,o);return hl.set(i,a),a}function uf(t=Oh){const e=hl.get(t);if(!e&&t===Oh&&Kv())return e0();if(!e)throw Bn.create("no-app",{appName:t});return e}function at(t,e,n){var r;let i=(r=RA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}Ct(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="firebase-heartbeat-database",DA=1,Zs="firebase-heartbeat-store";let cc=null;function t0(){return cc||(cc=lf(NA,DA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),cc}async function xA(t){try{return await(await t0()).transaction(Zs).objectStore(Zs).get(n0(t))}catch(e){if(e instanceof $t)Rr.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function Qm(t,e){try{const r=(await t0()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,n0(t)),await r.done}catch(n){if(n instanceof $t)Rr.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function n0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1024,VA=30*24*60*60*1e3;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ym(),{heartbeatsToSend:r,unsentEntries:i}=MA(this._heartbeatsCache.heartbeats),s=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ym(){return new Date().toISOString().substring(0,10)}function MA(t,e=OA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yv()?Xv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){Ct(new gt("platform-logger",e=>new ZS(e),"PRIVATE")),Ct(new gt("heartbeat",e=>new LA(e),"PRIVATE")),at(xh,Gm,t),at(xh,Gm,"esm2017"),at("fire-js","")}FA("");var $A="firebase",UA="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at($A,UA,"app");const jA=(t,e)=>e.some(n=>t instanceof n);let Jm,Zm;function BA(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zA(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r0=new WeakMap,Lh=new WeakMap,i0=new WeakMap,hc=new WeakMap,cf=new WeakMap;function HA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&r0.set(n,t)}).catch(()=>{}),cf.set(e,t),e}function WA(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||i0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qA(t){Mh=t(Mh)}function KA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dc(this),e,...n);return i0.set(r,e.sort?e.sort():[e]),zn(r)}:zA().includes(t)?function(...e){return t.apply(dc(this),e),zn(r0.get(this))}:function(...e){return zn(t.apply(dc(this),e))}}function GA(t){return typeof t=="function"?KA(t):(t instanceof IDBTransaction&&WA(t),jA(t,BA())?new Proxy(t,Mh):t)}function zn(t){if(t instanceof IDBRequest)return HA(t);if(hc.has(t))return hc.get(t);const e=GA(t);return e!==t&&(hc.set(t,e),cf.set(e,t)),e}const dc=t=>cf.get(t);function QA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const YA=["get","getKey","getAll","getAllKeys","count"],XA=["put","add","delete","clear"],fc=new Map;function eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fc.set(e,s),s}qA(t=>({...t,get:(e,n,r)=>eg(e,n)||t.get(e,n,r),has:(e,n)=>!!eg(e,n)||t.has(e,n)}));const s0="@firebase/installations",hf="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=1e4,a0=`w:${hf}`,l0="FIS_v2",JA="https://firebaseinstallations.googleapis.com/v1",ZA=60*60*1e3,e2="installations",t2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Cr=new er(e2,t2,n2);function u0(t){return t instanceof $t&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0({projectId:t}){return`${JA}/projects/${t}/installations`}function h0(t){return{token:t.token,requestStatus:2,expiresIn:i2(t.expiresIn),creationTime:Date.now()}}async function d0(t,e){const r=(await e.json()).error;return Cr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function f0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function r2(t,{refreshToken:e}){const n=f0(t);return n.append("Authorization",s2(e)),n}async function p0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function i2(t){return Number(t.replace("s","000"))}function s2(t){return`${l0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=c0(t),i=f0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:l0,appId:t.appId,sdkVersion:a0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await p0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:h0(u.authToken)}}else throw await d0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=/^[cdef][\w-]{21}$/,bh="";function u2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=c2(t);return l2.test(n)?n:bh}catch{return bh}}function c2(t){return a2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;function y0(t,e){const n=Gl(t);_0(n,e),h2(n,e)}function _0(t,e){const n=g0.get(t);if(n)for(const r of n)r(e)}function h2(t,e){const n=d2();n&&n.postMessage({key:t,fid:e}),f2()}let fr=null;function d2(){return!fr&&"BroadcastChannel"in self&&(fr=new BroadcastChannel("[Firebase] FID Change"),fr.onmessage=t=>{_0(t.data.key,t.data.fid)}),fr}function f2(){g0.size===0&&fr&&(fr.close(),fr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="firebase-installations-database",m2=1,kr="firebase-installations-store";let pc=null;function df(){return pc||(pc=QA(p2,m2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kr)}}})),pc}async function dl(t,e){const n=Gl(t),i=(await df()).transaction(kr,"readwrite"),s=i.objectStore(kr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&y0(t,e.fid),e}async function v0(t){const e=Gl(t),r=(await df()).transaction(kr,"readwrite");await r.objectStore(kr).delete(e),await r.done}async function Ql(t,e){const n=Gl(t),i=(await df()).transaction(kr,"readwrite"),s=i.objectStore(kr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&y0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(t){let e;const n=await Ql(t.appConfig,r=>{const i=g2(r),s=y2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===bh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function g2(t){const e=t||{fid:u2(),registrationStatus:0};return w0(e)}function y2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Cr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:v2(t)}:{installationEntry:e}}async function _2(t,e){try{const n=await o2(t,e);return dl(t.appConfig,n)}catch(n){throw u0(n)&&n.customData.serverCode===409?await v0(t.appConfig):await dl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function v2(t){let e=await tg(t.appConfig);for(;e.registrationStatus===1;)await m0(100),e=await tg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ff(t);return r||n}return e}function tg(t){return Ql(t,e=>{if(!e)throw Cr.create("installation-not-found");return w0(e)})}function w0(t){return w2(t)?{fid:t.fid,registrationStatus:0}:t}function w2(t){return t.registrationStatus===1&&t.registrationTime+o0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2({appConfig:t,heartbeatServiceProvider:e},n){const r=I2(t,n),i=r2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:a0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await p0(()=>fetch(r,a));if(l.ok){const u=await l.json();return h0(u)}else throw await d0("Generate Auth Token",l)}function I2(t,{fid:e}){return`${c0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(t,e=!1){let n;const r=await Ql(t.appConfig,s=>{if(!E0(s))throw Cr.create("not-registered");const o=s.authToken;if(!e&&A2(o))return s;if(o.requestStatus===1)return n=T2(t,e),s;{if(!navigator.onLine)throw Cr.create("app-offline");const a=C2(s);return n=S2(t,a),a}});return n?await n:r.authToken}async function T2(t,e){let n=await ng(t.appConfig);for(;n.authToken.requestStatus===1;)await m0(100),n=await ng(t.appConfig);const r=n.authToken;return r.requestStatus===0?pf(t,e):r}function ng(t){return Ql(t,e=>{if(!E0(e))throw Cr.create("not-registered");const n=e.authToken;return k2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function S2(t,e){try{const n=await E2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await dl(t.appConfig,r),n}catch(n){if(u0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await v0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dl(t.appConfig,r)}throw n}}function E0(t){return t!==void 0&&t.registrationStatus===2}function A2(t){return t.requestStatus===2&&!R2(t)}function R2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZA}function C2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function k2(t){return t.requestStatus===1&&t.requestTime+o0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(t){const e=t,{installationEntry:n,registrationPromise:r}=await ff(e);return r?r.catch(console.error):pf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e=!1){const n=t;return await D2(n),(await pf(n,e)).token}async function D2(t){const{registrationPromise:e}=await ff(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t){if(!t||!t.options)throw mc("App Configuration");if(!t.name)throw mc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mc(t){return Cr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="installations",O2="installations-internal",V2=t=>{const e=t.getProvider("app").getImmediate(),n=x2(e),r=Mr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},L2=t=>{const e=t.getProvider("app").getImmediate(),n=Mr(e,I0).getImmediate();return{getId:()=>P2(n),getToken:i=>N2(n,i)}};function M2(){Ct(new gt(I0,V2,"PUBLIC")),Ct(new gt(O2,L2,"PRIVATE"))}M2();at(s0,hf);at(s0,hf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="analytics",b2="firebase_id",F2="origin",$2=60*1e3,U2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",mf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Kl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ft=new er("analytics","Analytics",j2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t){if(!t.startsWith(mf)){const e=ft.create("invalid-gtag-resource",{gtagURL:t});return lt.warn(e.message),""}return t}function T0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function z2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function H2(t,e){const n=z2("firebase-js-sdk-policy",{createScriptURL:B2}),r=document.createElement("script"),i=`${mf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function W2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function q2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await T0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){lt.error(a)}t("config",i,s)}async function K2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await T0(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){lt.error(s)}}function G2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await K2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await q2(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){lt.error(a)}}return i}function Q2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=G2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Y2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(mf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=30,J2=1e3;class Z2{constructor(e={},n=J2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const S0=new Z2;function eR(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tR(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:eR(r)},s=U2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function nR(t,e=S0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sR;return setTimeout(async()=>{a.abort()},n!==void 0?n:$2),A0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function A0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=S0){var s;const{appId:o,measurementId:a}=t;try{await rR(r,e)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await tR(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!iR(u)){if(i.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hm(n,i.intervalMillis,X2):Hm(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),lt.debug(`Calling attemptFetch again in ${c} millis`),A0(t,h,r,i)}}function rR(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iR(t){if(!(t instanceof $t)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oR(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(){if(Yv())try{await Xv()}catch(t){return lt.warn(ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lR(t,e,n,r,i,s,o){var a;const l=nR(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>lt.error(m)),e.push(l);const u=aR().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([l,u]);Y2(s)||H2(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[F2]="firebase",d.update=!0,h!=null&&(d[b2]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.app=e}_delete(){return delete ks[this.app.options.appId],Promise.resolve()}}let ks={},rg=[];const ig={};let gc="dataLayer",cR="gtag",sg,R0,og=!1;function hR(){const t=[];if(Qv()&&t.push("This is a browser extension environment."),TS()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ft.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function dR(t,e,n){hR();const r=t.options.appId;if(!r)throw ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ft.create("no-api-key");if(ks[r]!=null)throw ft.create("already-exists",{id:r});if(!og){W2(gc);const{wrappedGtag:s,gtagCore:o}=Q2(ks,rg,ig,gc,cR);R0=s,sg=o,og=!0}return ks[r]=lR(t,rg,ig,e,sg,gc,n),new uR(t)}function fR(t=uf()){t=Ie(t);const e=Mr(t,fl);return e.isInitialized()?e.getImmediate():pR(t)}function pR(t,e={}){const n=Mr(t,fl);if(n.isInitialized()){const i=n.getImmediate();if(Js(e,n.getOptions()))return i;throw ft.create("already-initialized")}return n.initialize({options:e})}function mR(t,e,n,r){t=Ie(t),oR(R0,ks[t.app.options.appId],e,n,r).catch(i=>lt.error(i))}const ag="@firebase/analytics",lg="0.10.0";function gR(){Ct(new gt(fl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dR(r,i,n)},"PUBLIC")),Ct(new gt("analytics-internal",t,"PRIVATE")),at(ag,lg),at(ag,lg,"esm2017");function t(e){try{const n=e.getProvider(fl).getImmediate();return{logEvent:(r,i,s)=>mR(n,r,i,s)}}catch(n){throw ft.create("interop-component-reg-failed",{reason:n})}}}gR();function gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function C0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yR=C0,k0=new er("auth","Firebase",C0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Kl("@firebase/auth");function _R(t,...e){pl.logLevel<=K.WARN&&pl.warn(`Auth (${Fi}): ${t}`,...e)}function Da(t,...e){pl.logLevel<=K.ERROR&&pl.error(`Auth (${Fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw yf(t,...e)}function Gt(t,...e){return yf(t,...e)}function vR(t,e,n){const r=Object.assign(Object.assign({},yR()),{[e]:n});return new er("auth","Firebase",r).create(e,{appName:t.name})}function yf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return k0.create(t,...e)}function M(t,e,...n){if(!t)throw yf(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function _n(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wR(){return ug()==="http:"||ug()==="https:"}function ug(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wR()||Qv()||"connection"in navigator)?navigator.onLine:!0}function IR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=wS()||ES()}get(){return ER()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Co(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return N0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),P0.fetch()(D0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function N0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TR),e);try{const i=new RR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ca(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ca(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ca(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ca(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vR(t,c,u);Mt(t,c)}}catch(i){if(i instanceof $t)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function Yl(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function D0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_f(t.config,i):`${t.config.apiScheme}://${i}`}function AR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),SR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ca(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function cg(t){return t!==void 0&&t.enterprise!==void 0}class CR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kR(t,e){return tr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function NR(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DR(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),i=vf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ps(yc(i.auth_time)),issuedAtTime:Ps(yc(i.iat)),expirationTime:Ps(yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wv(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xR(t){const e=vf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&OR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await eo(t,NR(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bR(s.providerUserInfo):[],a=MR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new x0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function LR(t){const e=Ie(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bR(t){return t.map(e=>{var{providerId:n}=e,r=gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e){const n=await N0(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $R(t,e){return tr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new x0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DR(this,e)}reload(){return LR(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await eo(this,PR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:C,providerData:k,stsTokenManager:I}=n;M(g&&I,e,"internal-error");const x=to.fromJSON(this.name,I);M(typeof g=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof C=="boolean",e,"internal-error"),Sn(m,e.name),Sn(_,e.name),Sn(y,e.name),Sn(A,e.name),Sn(p,e.name),Sn(f,e.name);const Q=new vr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:C,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:x,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(Q.providerData=k.map(L=>Object.assign({},L))),A&&(Q._redirectEventId=A),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ml(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function un(t){_n(t instanceof Function,"Expected a class definition");let e=hg.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O0.type="NONE";const dg=O0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fi(un(dg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(dg);const o=xa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=vr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F0(e))return"Blackberry";if($0(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||L0(e))&&!e.includes("edge/"))return"Chrome";if(b0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V0(t=Ke()){return/firefox\//i.test(t)}function wf(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L0(t=Ke()){return/crios\//i.test(t)}function M0(t=Ke()){return/iemobile/i.test(t)}function b0(t=Ke()){return/android/i.test(t)}function F0(t=Ke()){return/blackberry/i.test(t)}function $0(t=Ke()){return/webos/i.test(t)}function Xl(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UR(t=Ke()){var e;return Xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jR(){return IS()&&document.documentMode===10}function U0(t=Ke()){return Xl(t)||b0(t)||$0(t)||F0(t)||/windows phone/i.test(t)||M0(t)}function BR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e=[]){let n;switch(t){case"Browser":n=fg(Ke());break;case"Worker":n=`${fg(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e={}){return tr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=6;class qR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new zR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ie(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HR(this),n=new qR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $R(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_R(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $i(t){return Ie(t)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=kS(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function B0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GR().appendChild(r)})}function QR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const YR="https://www.google.com/recaptcha/enterprise.js?render=",XR="recaptcha-enterprise",JR="NO_RECAPTCHA";class ZR{constructor(e){this.type=XR,this.auth=$i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{kR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new CR(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(JR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}B0(YR+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function mg(t,e,n,r=!1){const i=new ZR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await mg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e){const n=Mr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Js(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function tC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function nC(t,e,n){const r=$i(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=z0(e),{host:o,port:a}=rC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iC()}function z0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rC(t){const e=z0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yg(o)}}}function yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function sC(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e){return Yl(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){return Yl(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function lC(t,e){return Yl(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new no(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new no(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gg(e,n,"signInWithPassword",oC);case"emailLink":return aC(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gg(e,r,"signUpPassword",sC);case"emailLink":return lC(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e){return Yl(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="http://localhost";class Pr extends Ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:uC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hC(t){const e=hs(ds(t)).link,n=e?hs(ds(e)).deep_link_id:null,r=hs(ds(t)).deep_link_id;return(r?hs(ds(r)).link:null)||r||n||e||t}class If{constructor(e){var n,r,i,s,o,a;const l=hs(ds(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=cC((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hC(e);try{return new If(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,n){return no._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=If.parseLink(n);return M(r,"argument-error"),no._fromEmailAndCode(e,r.code,r.tenantId)}}Ui.PROVIDER_ID="password";Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends H0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ko{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ko{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vr._fromIdTokenResponse(e,r,i),o=_g(r);return new Ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_g(r);return new Ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends $t{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gl(e,n,r,i)}}function W0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gl._fromErrorAndOperation(t,s,e,r):s})}async function dC(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await eo(t,W0(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=vf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e,n=!1){const r="signIn",i=await W0(t,r,e),s=await Ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function pC(t,e){return q0($i(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t){const e=$i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function gC(t,e,n){return pC(Ie(t),Ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mC(t),r})}function yC(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function _C(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function vC(t){return Ie(t).signOut()}const yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(){const t=Ke();return wf(t)||Xl(t)}const EC=1e3,IC=10;class G0 extends K0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wC()&&BR(),this.fallbackToPolling=U0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G0.type="LOCAL";const TC=G0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends K0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Q0.type="SESSION";const Y0=Q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Tf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function RC(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function CC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PC(){return X0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="firebaseLocalStorageDb",NC=1,_l="firebaseLocalStorage",Z0="fbase_key";class Po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([_l],e?"readwrite":"readonly").objectStore(_l)}function DC(){const t=indexedDB.deleteDatabase(J0);return new Po(t).toPromise()}function $h(){const t=indexedDB.open(J0,NC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_l,{keyPath:Z0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_l)?e(r):(r.close(),await DC(),e(await $h()))})})}async function vg(t,e,n){const r=Zl(t,!0).put({[Z0]:e,value:n});return new Po(r).toPromise()}async function xC(t,e){const n=Zl(t,!1).get(e),r=await new Po(n).toPromise();return r===void 0?null:r.value}function wg(t,e){const n=Zl(t,!0).delete(e);return new Po(n).toPromise()}const OC=800,VC=3;class ew{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(PC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CC(),!this.activeServiceWorker)return;this.sender=new AC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $h();return await vg(e,yl,"1"),await wg(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zl(i,!1).getAll();return new Po(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ew.type="LOCAL";const LC=ew;new Co(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e){return e?un(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bC(t){return q0(t.auth,new Sf(t),t.bypassAuthState)}function FC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),fC(n,new Sf(t),t.bypassAuthState)}async function $C(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),dC(n,new Sf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bC;case"linkViaPopup":case"linkViaRedirect":return $C;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:Mt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new Co(2e3,1e4);class si extends tw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UC.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="pendingRedirect",Oa=new Map;class BC extends tw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await zC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zC(t,e){const n=qC(e),r=WC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HC(t,e){Oa.set(t._key(),e)}function WC(t){return un(t._redirectPersistence)}function qC(t){return xa(jC,t.config.apiKey,t.name)}async function KC(t,e,n=!1){const r=$i(t),i=MC(r,e),o=await new BC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=10*60*1e3;class QC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZC=/^https?/;async function ek(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XC(t);for(const n of e)try{if(tk(n))return}catch{}Mt(t,"unauthorized-domain")}function tk(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZC.test(n))return!1;if(JC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new Co(3e4,6e4);function Ig(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rk(t){return new Promise((e,n)=>{var r,i,s;function o(){Ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ig(),n(Gt(t,"network-request-failed"))},timeout:nk.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const a=QR("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},B0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Va=null,e})}let Va=null;function ik(t){return Va=Va||rk(t),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new Co(5e3,15e3),ok="__/auth/iframe",ak="emulator/auth/iframe",lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ck(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_f(e,ak):`https://${t.config.authDomain}/${ok}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function hk(t){const e=await ik(t),n=Qt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{s(o)},sk.get());function l(){Qt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fk=500,pk=600,mk="_blank",gk="http://localhost";class Tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(t,e,n,r=fk,i=pk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ke().toLowerCase();n&&(a=L0(u)?mk:n),V0(u)&&(e=e||gk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(UR(u)&&a!=="_self")return _k(e||"",a),new Tg(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Tg(h)}function _k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="__/auth/handler",wk="emulator/auth/handler",Ek=encodeURIComponent("fac");async function Sg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof H0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ko){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Ek}=${encodeURIComponent(l)}`:"";return`${Ik(t)}?${Ro(a).slice(1)}${u}`}function Ik({config:t}){return t.emulator?_f(t,wk):`https://${t.authDomain}/${vk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="webStorageSupport";class Tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Y0,this._completeRedirectFn=KC,this._overrideRedirectResult=HC}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sg(e,n,r,Fh(),i);return yk(e,o,Tf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sg(e,n,r,Fh(),i);return RC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hk(e),r=new QC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_c];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ek(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U0()||wf()||Xl()}}const Sk=Tk;var Ag="@firebase/auth",Rg="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ck(t){Ct(new gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j0(t)},u=new KR(r,i,s,l);return tC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new gt("auth-internal",e=>{const n=$i(e.getProvider("auth").getImmediate());return(r=>new Ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Ag,Rg,Rk(t)),at(Ag,Rg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=5*60,Pk=Gv("authIdTokenMaxAge")||kk;let Cg=null;const Nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pk)return;const i=n==null?void 0:n.token;Cg!==i&&(Cg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dk(t=uf()){const e=Mr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eC(t,{popupRedirectResolver:Sk,persistence:[LC,TC,Y0]}),r=Gv("authTokenSyncURL");if(r){const s=Nk(r);_C(n,s,()=>s(n.currentUser)),yC(n,o=>s(o))}const i=qv("auth");return i&&nC(n,`http://${i}`),n}Ck("Browser");var xk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Af=Af||{},$=xk||self;function eu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function No(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ok(t){return Object.prototype.hasOwnProperty.call(t,vc)&&t[vc]||(t[vc]=++Vk)}var vc="closure_uid_"+(1e9*Math.random()>>>0),Vk=0;function Lk(t,e,n){return t.call.apply(t.bind,arguments)}function Mk(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=Lk:He=Mk,He.apply(null,arguments)}function ha(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function nr(){this.s=this.s,this.o=this.o}var bk=0;nr.prototype.s=!1;nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bk!=0)&&Ok(this)};nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(eu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Fk=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};$.addEventListener("test",n,e),$.removeEventListener("test",n,e)}catch{}return t}();function ro(t){return/^[\s\xa0]*$/.test(t)}function tu(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return tu().indexOf(t)!=-1}function Cf(t){return Cf[" "](t),t}Cf[" "]=function(){};function $k(t,e){var n=DP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Uk=zt("Opera"),Ri=zt("Trident")||zt("MSIE"),iw=zt("Edge"),Uh=iw||Ri,sw=zt("Gecko")&&!(tu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),jk=tu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function ow(){var t=$.document;return t?t.documentMode:void 0}var jh;e:{var wc="",Ec=function(){var t=tu();if(sw)return/rv:([^\);]+)(\)|;)/.exec(t);if(iw)return/Edge\/([\d\.]+)/.exec(t);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jk)return/WebKit\/(\S+)/.exec(t);if(Uk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ec&&(wc=Ec?Ec[1]:""),Ri){var Ic=ow();if(Ic!=null&&Ic>parseFloat(wc)){jh=String(Ic);break e}}jh=wc}var Bh;if($.document&&Ri){var Pg=ow();Bh=Pg||parseInt(jh,10)||void 0}else Bh=void 0;var Bk=Bh;function io(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sw){e:{try{Cf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&io.$.h.call(this)}}ke(io,We);var zk={2:"touch",3:"pen",4:"mouse"};io.prototype.h=function(){io.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Do="closure_listenable_"+(1e6*Math.random()|0),Hk=0;function Wk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++Hk,this.fa=this.ia=!1}function nu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function qk(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function aw(t){const e={};for(const n in t)e[n]=t[n];return e}const Ng="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ng.length;s++)n=Ng[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ru(t){this.src=t,this.g={},this.h=0}ru.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Wk(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function zh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=rw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Pf="closure_lm_"+(1e6*Math.random()|0),Tc={};function uw(t,e,n,r,i){if(r&&r.once)return hw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)uw(t,e[s],n,r,i);return null}return n=xf(n),t&&t[Do]?t.O(e,n,No(r)?!!r.capture:!!r,i):cw(t,e,n,!1,r,i)}function cw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=No(i)?!!i.capture:!!i,a=Df(t);if(a||(t[Pf]=a=new ru(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Kk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Fk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(fw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Kk(){function t(n){return e.call(t.src,t.listener,n)}const e=Gk;return t}function hw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hw(t,e[s],n,r,i);return null}return n=xf(n),t&&t[Do]?t.P(e,n,No(r)?!!r.capture:!!r,i):cw(t,e,n,!0,r,i)}function dw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dw(t,e[s],n,r,i);else r=No(r)?!!r.capture:!!r,n=xf(n),t&&t[Do]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hh(s,n,r,i),-1<n&&(nu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Df(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hh(e,n,r,i)),(n=-1<t?e[t]:null)&&Nf(n))}function Nf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Do])zh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Df(e))?(zh(n,t),n.h==0&&(n.src=null,e[Pf]=null)):nu(t)}}}function fw(t){return t in Tc?Tc[t]:Tc[t]="on"+t}function Gk(t,e){if(t.fa)t=!0;else{e=new io(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Nf(t),t=n.call(r,e)}return t}function Df(t){return t=t[Pf],t instanceof ru?t:null}var Sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xf(t){return typeof t=="function"?t:(t[Sc]||(t[Sc]=function(e){return t.handleEvent(e)}),t[Sc])}function Ce(){nr.call(this),this.i=new ru(this),this.S=this,this.J=null}ke(Ce,nr);Ce.prototype[Do]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){dw(this,t,e,n,r)};function Ve(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var i=e;e=new We(r,t),lw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=da(o,r,!0,e)&&i}if(o=e.g=t,i=da(o,r,!0,e)&&i,i=da(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=da(o,r,!1,e)&&i}Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nu(n[r]);delete t.g[e],t.h--}}this.J=null};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function da(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&zh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Of=$.JSON.stringify;class Qk{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Yk(){var t=Vf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Xk{constructor(){this.h=this.g=null}add(e,n){const r=pw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pw=new Qk(()=>new Jk,t=>t.reset());class Jk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zk(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function eP(t){$.setTimeout(()=>{throw t},0)}let so,oo=!1,Vf=new Xk,mw=()=>{const t=$.Promise.resolve(void 0);so=()=>{t.then(tP)}};var tP=()=>{for(var t;t=Yk();){try{t.h.call(t.g)}catch(n){eP(n)}var e=pw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1};function iu(t,e){Ce.call(this),this.h=t||1,this.g=e||$,this.j=He(this.qb,this),this.l=Date.now()}ke(iu,Ce);R=iu.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ve(this,"tick"),this.ga&&(Lf(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){iu.$.N.call(this),Lf(this),delete this.g};function Mf(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function gw(t){t.g=Mf(()=>{t.g=null,t.i&&(t.i=!1,gw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nP extends nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gw(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ao(t){nr.call(this),this.h=t,this.g={}}ke(ao,nr);var Dg=[];function yw(t,e,n,r){Array.isArray(n)||(n&&(Dg[0]=n.toString()),n=Dg);for(var i=0;i<n.length;i++){var s=uw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _w(t){kf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nf(e)},t),t.g={}}ao.prototype.N=function(){ao.$.N.call(this),_w(this)};ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function su(){this.g=!0}su.prototype.Ea=function(){this.g=!1};function rP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function iP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function oi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oP(t,n)+(r?" "+r:"")})}function sP(t,e){t.info(function(){return"TIMEOUT: "+e})}su.prototype.info=function(){};function oP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Of(n)}catch{return e}}var Fr={},xg=null;function ou(){return xg=xg||new Ce}Fr.Ta="serverreachability";function vw(t){We.call(this,Fr.Ta,t)}ke(vw,We);function lo(t){const e=ou();Ve(e,new vw(e))}Fr.STAT_EVENT="statevent";function ww(t,e){We.call(this,Fr.STAT_EVENT,t),this.stat=e}ke(ww,We);function Ye(t){const e=ou();Ve(e,new ww(e,t))}Fr.Ua="timingevent";function Ew(t,e){We.call(this,Fr.Ua,t),this.size=e}ke(Ew,We);function xo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var au={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Iw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function bf(){}bf.prototype.h=null;function Og(t){return t.h||(t.h=t.i())}function Tw(){}var Oo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ff(){We.call(this,"d")}ke(Ff,We);function $f(){We.call(this,"c")}ke($f,We);var Wh;function lu(){}ke(lu,bf);lu.prototype.g=function(){return new XMLHttpRequest};lu.prototype.i=function(){return{}};Wh=new lu;function Vo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ao(this),this.P=aP,t=Uh?125:void 0,this.V=new iu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Sw}function Sw(){this.i=null,this.g="",this.h=!1}var aP=45e3,Aw={},qh={};R=Vo.prototype;R.setTimeout=function(t){this.P=t};function Kh(t,e,n){t.L=1,t.A=cu(vn(e)),t.u=n,t.S=!0,Rw(t,null)}function Rw(t,e){t.G=Date.now(),Lo(t),t.B=vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Vw(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Sw,t.g=t1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new nP(He(t.Pa,t,t.g),t.O)),yw(t.U,t.g,"readystatechange",t.nb),e=t.I?aw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),lo(),rP(t.j,t.v,t.B,t.m,t.W,t.u)}R.nb=function(t){t=t.target;const e=this.M;e&&Ht(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=Ht(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Uh||this.g&&(this.h.h||this.g.ja()||bg(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?lo(3):lo(2)),uu(this);var n=this.g.da();this.ca=n;t:if(Cw(this)){var r=bg(this.g);t="";var i=r.length,s=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Ns(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,iP(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ro(a)){var u=a;break t}}u=null}if(n=u)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gh(this,n);else{this.i=!1,this.s=3,Ye(12),pr(this),Ns(this);break e}}this.S?(kw(this,c,o),Uh&&this.i&&c==3&&(yw(this.U,this.V,"tick",this.mb),this.V.start())):(oi(this.j,this.m,o,null),Gh(this,o)),c==4&&pr(this),this.i&&!this.J&&(c==4?Xw(this.l,this):(this.i=!1,Lo(this)))}else kP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),pr(this),Ns(this)}}}catch{}finally{}};function Cw(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function kw(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=lP(t,n),i==qh){e==4&&(t.s=4,Ye(14),r=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Aw){t.s=4,Ye(15),oi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else oi(t.j,t.m,i,null),Gh(t,i);Cw(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ye(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wf(e),e.M=!0,Ye(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),pr(t),Ns(t))}R.mb=function(){if(this.g){var t=Ht(this.g),e=this.g.ja();this.o<e.length&&(uu(this),kw(this,t,e),this.i&&t!=4&&Lo(this))}};function lP(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?qh:(n=Number(e.substring(n,r)),isNaN(n)?Aw:(r+=1,r+n>e.length?qh:(e=e.slice(r,r+n),t.o=r+n,e)))}R.cancel=function(){this.J=!0,pr(this)};function Lo(t){t.Y=Date.now()+t.P,Pw(t,t.P)}function Pw(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=xo(He(t.lb,t),e)}function uu(t){t.C&&($.clearTimeout(t.C),t.C=null)}R.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(sP(this.j,this.B),this.L!=2&&(lo(),Ye(17)),pr(this),this.s=2,Ns(this)):Pw(this,this.Y-t)};function Ns(t){t.l.H==0||t.J||Xw(t.l,t)}function pr(t){uu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lf(t.V),_w(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qh(n.i,t))){if(!t.K&&Qh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)El(n),pu(n);else break e;Hf(n),Ye(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xo(He(n.ib,n),6e3));if(1>=bw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else mr(n,11)}else if((t.K||n.g==t)&&El(n),!ro(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Uf(s,s.h),s.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,re(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=e1(r,r.J?r.pa:null,r.Y),o.K){Fw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(uu(a),Lo(a)),r.g=o}else Qw(r);0<n.j.length&&mu(n)}else u[0]!="stop"&&u[0]!="close"||mr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mr(n,7):zf(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}lo(4)}catch{}}function uP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(eu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function cP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(eu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Nw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(eu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cP(t),r=uP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Dw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wr){this.h=t.h,vl(this,t.j),this.s=t.s,this.g=t.g,wl(this,t.m),this.l=t.l;var e=t.i,n=new uo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vg(this,n),this.o=t.o}else t&&(e=String(t).match(Dw))?(this.h=!1,vl(this,e[1]||"",!0),this.s=fs(e[2]||""),this.g=fs(e[3]||"",!0),wl(this,e[4]),this.l=fs(e[5]||"",!0),Vg(this,e[6]||"",!0),this.o=fs(e[7]||"")):(this.h=!1,this.i=new uo(null,this.h))}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ps(e,Lg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ps(e,Lg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ps(n,n.charAt(0)=="/"?pP:fP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ps(n,gP)),t.join("")};function vn(t){return new wr(t)}function vl(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vg(t,e,n){e instanceof uo?(t.i=e,yP(t.i,t.h)):(n||(e=ps(e,mP)),t.i=new uo(e,t.h))}function re(t,e,n){t.i.set(e,n)}function cu(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Lg=/[#\/\?@]/g,fP=/[#\?:]/g,pP=/[#\?]/g,mP=/[#\?@]/g,gP=/#/g;function uo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rr(t){t.g||(t.g=new Map,t.h=0,t.i&&hP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=uo.prototype;R.add=function(t,e){rr(this),this.i=null,t=ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xw(t,e){rr(t),e=ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ow(t,e){return rr(t),e=ji(t,e),t.g.has(e)}R.forEach=function(t,e){rr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){rr(this);let e=[];if(typeof t=="string")Ow(this,t)&&(e=e.concat(this.g.get(ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return rr(this),this.i=null,t=ji(this,t),Ow(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Vw(t,e,n){xw(t,e),0<n.length&&(t.i=null,t.g.set(ji(t,e),Rf(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yP(t,e){e&&!t.j&&(rr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xw(this,r),Vw(this,i,n))},t)),t.j=e}var _P=class{constructor(t,e){this.g=t,this.map=e}};function Lw(t){this.l=t||vP,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vP=10;function Mw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bw(t){return t.h?1:t.g?t.g.size:0}function Qh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Uf(t,e){t.g?t.g.add(e):t.h=e}function Fw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lw.prototype.cancel=function(){if(this.i=$w(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $w(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Rf(t.i)}var wP=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function EP(){this.g=new wP}function IP(t,e,n){const r=n||"";try{Nw(t,function(i,s){let o=i;No(i)&&(o=Of(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function TP(t,e){const n=new su;if($.Image){const r=new Image;r.onload=ha(fa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ha(fa,n,r,"TestLoadImage: error",!1,e),r.onabort=ha(fa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ha(fa,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function hu(t){this.l=t.ec||null,this.j=t.ob||!1}ke(hu,bf);hu.prototype.g=function(){return new du(this.l,this.j)};hu.prototype.i=function(t){return function(){return t}}({});function du(t,e){Ce.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=jf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(du,Ce);var jf=0;R=du.prototype;R.open=function(t,e){if(this.readyState!=jf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,co(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=jf};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Uw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mo(this):co(this),this.readyState==3&&Uw(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,Mo(this))};R.Ya=function(t){this.g&&(this.response=t,Mo(this))};R.ka=function(){this.g&&Mo(this)};function Mo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,co(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var SP=$.JSON.parse;function de(t){Ce.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jw,this.L=this.M=!1}ke(de,Ce);var jw="",AP=/^https?$/i,RP=["POST","PUT"];R=de.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Wh.g(),this.C=this.u?Og(this.u):Og(Wh),this.g.onreadystatechange=He(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Mg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=rw(RP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hw(this),0<this.B&&((this.L=CP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.ua,this)):this.A=Mf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mg(this,s)}};function CP(t){return Ri&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Af<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function Mg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bw(t),fu(t)}function Bw(t){t.F||(t.F=!0,Ve(t,"complete"),Ve(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),fu(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fu(this,!0)),de.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?zw(this):this.kb())};R.kb=function(){zw(this)};function zw(t){if(t.h&&typeof Af<"u"&&(!t.C[1]||Ht(t)!=4||t.da()!=2)){if(t.v&&Ht(t)==4)Mf(t.La,0,t);else if(Ve(t,"readystatechange"),Ht(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Dw)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!AP.test(i?i.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var s=2<Ht(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Bw(t)}}finally{fu(t)}}}}function fu(t,e){if(t.g){Hw(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function Hw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function Ht(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),SP(e)}};function bg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kP(t){const e={};t=(t.g&&2<=Ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ro(t[r]))continue;var n=Zk(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}qk(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ww(t){let e="";return kf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ww(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qw(t){this.Ga=0,this.j=[],this.l=new su,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=is("baseRetryDelayMs",5e3,t),this.hb=is("retryDelaySeedMs",1e4,t),this.eb=is("forwardChannelMaxRetries",2,t),this.xa=is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Lw(t&&t.concurrentRequestLimit),this.Ja=new EP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=qw.prototype;R.ra=8;R.H=1;function zf(t){if(Kw(t),t.H==3){var e=t.W++,n=vn(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),bo(t,n),e=new Vo(t,t.l,e),e.L=2,e.A=cu(vn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.A,n=!0),n||(e.g=t1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Lo(e)}Zw(t)}function pu(t){t.g&&(Wf(t),t.g.cancel(),t.g=null)}function Kw(t){pu(t),t.u&&($.clearTimeout(t.u),t.u=null),El(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function mu(t){if(!Mw(t.i)&&!t.m){t.m=!0;var e=t.Na;so||mw(),oo||(so(),oo=!0),Vf.add(e,t),t.C=0}}function PP(t,e){return bw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=xo(He(t.Na,t,e),Jw(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Vo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=aw(s),lw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gw(this,i,e),n=vn(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),bo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ww(s)))+"&"+e:this.o&&Bf(n,this.o,s)),Uf(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,Kh(i,n,null)):Kh(i,n,e),this.H=2}}else this.H==3&&(t?Fg(this,t):this.j.length==0||Mw(this.i)||Fg(this))};function Fg(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),bo(t,r),t.o&&t.s&&Bf(r,t.o,t.s),n=new Vo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Gw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Uf(t.i,n),Kh(n,r,e)}function bo(t,e){t.na&&kf(t.na,function(n,r){re(e,r,n)}),t.h&&Nw({},function(n,r){re(e,r,n)})}function Gw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?He(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{IP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Qw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;so||mw(),oo||(so(),oo=!0),Vf.add(e,t),t.A=0}}function Hf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=xo(He(t.Ma,t),Jw(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,Yw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=xo(He(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ye(10),pu(this),Yw(this))};function Wf(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function Yw(t){t.g=new Vo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),bo(t,e),t.o&&t.s&&Bf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=cu(vn(e)),n.u=null,n.S=!0,Rw(n,t)}R.ib=function(){this.v!=null&&(this.v=null,pu(this),Hf(this),Ye(19))};function El(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function Xw(t,e){var n=null;if(t.g==e){El(t),Wf(t),t.g=null;var r=2}else if(Qh(t.i,e))n=e.F,Fw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=ou(),Ve(r,new Ew(r,n)),mu(t)}else Qw(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&PP(t,e)||r==2&&Hf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}}function Jw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function mr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=He(t.pb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||vl(n,"https"),cu(n)),TP(n.toString(),r)}else Ye(2);t.H=0,t.h&&t.h.za(e),Zw(t),Kw(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ye(2)):(this.l.info("Failed to ping google.com"),Ye(1))};function Zw(t){if(t.H=0,t.ma=[],t.h){const e=$w(t.i);(e.length!=0||t.j.length!=0)&&(kg(t.ma,e),kg(t.ma,t.j),t.i.i.length=0,Rf(t.j),t.j.length=0),t.h.ya()}}function e1(t,e,n){var r=n instanceof wr?vn(n):new wr(n);if(r.g!="")e&&(r.g=e+"."+r.g),wl(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wr(null);r&&vl(s,r),e&&(s.g=e),i&&wl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),bo(t,r),r}function t1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new de(new hu({ob:n})):new de(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function n1(){}R=n1.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Il(){if(Ri&&!(10<=Number(Bk)))throw Error("Environmental error: no available transport.")}Il.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Ce.call(this),this.g=new qw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ro(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ro(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bi(this)}ke(yt,Ce);yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ye(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=e1(t,null,t.Y),mu(t)};yt.prototype.close=function(){zf(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Of(t),t=n);e.j.push(new _P(e.fb++,t)),e.H==3&&mu(e)};yt.prototype.N=function(){this.g.h=null,delete this.j,zf(this.g),delete this.g,yt.$.N.call(this)};function r1(t){Ff.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(r1,Ff);function i1(){$f.call(this),this.status=1}ke(i1,$f);function Bi(t){this.g=t}ke(Bi,n1);Bi.prototype.Ba=function(){Ve(this.g,"a")};Bi.prototype.Aa=function(t){Ve(this.g,new r1(t))};Bi.prototype.za=function(t){Ve(this.g,new i1)};Bi.prototype.ya=function(){Ve(this.g,"b")};function NP(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ke(bt,NP);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ac(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ac(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ac(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ac(this,r),i=0;break}}this.h=i,this.i+=e};bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var DP={};function qf(t){return-128<=t&&128>t?$k(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Wt(t){if(isNaN(t)||!isFinite(t))return mi;if(0>t)return De(Wt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yh;return new Z(e,0)}function s1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return De(s1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(e,8)),r=mi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Wt(Math.pow(e,s)),r=r.R(s).add(Wt(o))):(r=r.R(n),r=r.add(Wt(o)))}return r}var Yh=4294967296,mi=qf(0),Xh=qf(1),$g=qf(16777216);R=Z.prototype;R.ea=function(){if(It(this))return-De(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yh+r)*e,e*=Yh}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(It(this))return"-"+De(this).toString(t);for(var e=Wt(Math.pow(t,6)),n=this,r="";;){var i=Sl(n,e).g;n=Tl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}R.X=function(t){return t=Tl(this,t),It(t)?-1:cn(t)?0:1};function De(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(Xh)}R.abs=function(){return It(this)?De(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Tl(t,e){return t.add(De(e))}R.R=function(t){if(cn(this)||cn(t))return mi;if(It(this))return It(t)?De(this).R(De(t)):De(De(this).R(t));if(It(t))return De(this.R(De(t)));if(0>this.X($g)&&0>t.X($g))return Wt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,pa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,pa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,pa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,pa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function pa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ss(t,e){this.g=t,this.h=e}function Sl(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new ss(mi,mi);if(It(t))return e=Sl(De(t),e),new ss(De(e.g),De(e.h));if(It(e))return e=Sl(t,De(e)),new ss(De(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xh,r=e;0>=r.X(t);)n=Ug(n),r=Ug(r);var i=zr(n,1),s=zr(r,1);for(r=zr(r,2),n=zr(n,2);!cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=zr(r,1),n=zr(n,1)}return e=Tl(t,i.R(e)),new ss(i,e)}for(i=mi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Wt(n),o=s.R(e);It(o)||0<o.X(t);)n-=r,s=Wt(n),o=s.R(e);cn(s)&&(s=Xh),i=i.add(s),t=Tl(t,o)}return new ss(i,t)}R.gb=function(t){return Sl(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function Ug(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function zr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}Il.prototype.createWebChannel=Il.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;au.NO_ERROR=0;au.TIMEOUT=8;au.HTTP_ERROR=6;Iw.COMPLETE="complete";Tw.EventType=Oo;Oo.OPEN="a";Oo.CLOSE="b";Oo.ERROR="c";Oo.MESSAGE="d";Ce.prototype.listen=Ce.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Wt;Z.fromString=s1;var xP=function(){return new Il},OP=function(){return ou()},Rc=au,VP=Iw,LP=Fr,jg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ma=Tw,MP=de,bP=bt,gi=Z;const Bg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Kl("@firebase/firestore");function os(){return Nr.logLevel}function O(t,...e){if(Nr.logLevel<=K.DEBUG){const n=e.map(Kf);Nr.debug(`Firestore (${zi}): ${t}`,...n)}}function wn(t,...e){if(Nr.logLevel<=K.ERROR){const n=e.map(Kf);Nr.error(`Firestore (${zi}): ${t}`,...n)}}function Ci(t,...e){if(Nr.logLevel<=K.WARN){const n=e.map(Kf);Nr.warn(`Firestore (${zi}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function te(t,e){t||b()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends $t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class $P{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UP{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new o1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new je(e)}}class jP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new jP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.R=n.token,new zP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new Ee(0,0))}static max(){return new U(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ho.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ho?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends ho{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const qP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends ho{construct(e,n,r){return new xe(e,n,r)}static isValidIdentifier(e){return qP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(n)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ie.fromString(e))}static fromName(e){return new V(ie.fromString(e).popFirst(5))}static empty(){return new V(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ie(e.slice()))}}function KP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Gn(i,V.empty(),e)}function GP(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(U.min(),V.empty(),-1)}static max(){return new Gn(U.max(),V.empty(),-1)}}function QP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==YP)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $o(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Gf._e=-1;function gu(t){return t==null}function Al(t){return t===0&&1/t==-1/0}function JP(t){return typeof t=="number"&&Number.isInteger(t)&&!Al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function l1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ne(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hg(this.data.getIterator())}getIteratorFrom(e){return new Hg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Hg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new ht([])}unionWith(e){let n=new Le(xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new u1("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const ZP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(te(!!t),typeof t=="string"){let e=0;const n=ZP.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yf(t){const e=t.mapValue.fields.__previous_value__;return Qf(e)?Yf(e):e}function fo(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qf(t)?4:tN(t)?9007199254740991:10:b()}function Jt(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qn(i.timestampValue),a=Qn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Dr(i.bytesValue).isEqual(Dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ge(i.doubleValue),a=ge(s.doubleValue);return o===a?Al(o)===Al(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(zg(o)!==zg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jt(o[l],a[l])))return!1;return!0}(t,e);default:return b()}}function mo(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ge(s.integerValue||s.doubleValue),l=ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Wg(t.timestampValue,e.timestampValue);case 4:return Wg(fo(t),fo(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Dr(s),l=Dr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(ge(s.latitude),ge(o.latitude));return a!==0?a:X(ge(s.longitude),ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Pi(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ya.mapValue&&o===ya.mapValue)return 0;if(s===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=X(l[h],c[h]);if(d!==0)return d;const m=Pi(a[l[h]],u[c[h]]);if(m!==0)return m}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw b()}}function Wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Qn(t),r=Qn(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function Ni(t){return Jh(t)}function Jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Jh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Jh(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function qg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zh(t){return!!t&&"integerValue"in t}function Xf(t){return!!t&&"arrayValue"in t}function Kg(t){return!!t&&"nullValue"in t}function Gg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function La(t){return!!t&&"mapValue"in t}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!La(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());La(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];La(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nt(Ds(this.value))}}function c1(t){const e=[];return $r(t.fields,(n,r)=>{const i=new xe([n]);if(La(r)){const s=c1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,U.min(),U.min(),U.min(),nt.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,U.min(),U.min(),nt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,U.min(),U.min(),nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function Qg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Pi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n="asc"){this.field=e,this.dir=n}}function nN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{}class _e extends h1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iN(e,n,r):n==="array-contains"?new aN(e,r):n==="in"?new lN(e,r):n==="not-in"?new uN(e,r):n==="array-contains-any"?new cN(e,r):new _e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sN(e,r):new oN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pi(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends h1{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ft(e,n)}matches(e){return d1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function d1(t){return t.op==="and"}function f1(t){return rN(t)&&d1(t)}function rN(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function ed(t){if(t instanceof _e)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(f1(t))return t.filters.map(e=>ed(e)).join(",");{const e=t.filters.map(n=>ed(n)).join(",");return`${t.op}(${e})`}}function p1(t,e){return t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.field.isEqual(i.field)&&Jt(r.value,i.value)}(t,e):t instanceof Ft?function(r,i){return i instanceof Ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&p1(o,i.filters[a]),!0):!1}(t,e):void b()}function m1(t){return t instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`}(t):t instanceof Ft?function(n){return n.op.toString()+" {"+n.getFilters().map(m1).join(" ,")+"}"}(t):"Filter"}class iN extends _e{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class sN extends _e{constructor(e,n){super(e,"in",n),this.keys=g1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oN extends _e{constructor(e,n){super(e,"not-in",n),this.keys=g1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class aN extends _e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xf(n)&&mo(n.arrayValue,this.value)}}class lN extends _e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mo(this.value.arrayValue,n)}}class uN extends _e{constructor(e,n){super(e,"not-in",n)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!mo(this.value.arrayValue,n)}}class cN extends _e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Xg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hN(t,e,n,r,i,s,o)}function Jf(t){const e=j(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ni(r)).join(",")),e.ce=n}return e.ce}function Zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yg(t.startAt,e.startAt)&&Yg(t.endAt,e.endAt)}function td(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function dN(t,e,n,r,i,s,o,a){return new Hi(t,e,n,r,i,s,o,a)}function ep(t){return new Hi(t)}function Jg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function y1(t){return t.collectionGroup!==null}function xs(t){const e=j(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Le(xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new go(s,r))}),n.has(xe.keyField().canonicalString())||e.le.push(new go(xe.keyField(),r))}return e.le}function Yt(t){const e=j(t);return e.he||(e.he=fN(e,xs(t))),e.he}function fN(t,e){if(t.limitType==="F")return Xg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new go(i.field,s)});const n=t.endAt?new Rl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rl(t.startAt.position,t.startAt.inclusive):null;return Xg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nd(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rd(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return Zf(Yt(t),Yt(e))&&t.limitType===e.limitType}function _1(t){return`${Jf(Yt(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>m1(i)).join(", ")}]`),gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ni(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ni(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function _u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Qg(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,xs(r),i)||r.endAt&&!function(o,a,l){const u=Qg(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,xs(r),i))}(t,e)}function pN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v1(t){return(e,n)=>{let r=!1;for(const i of xs(t)){const s=mN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mN(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Pi(l,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return l1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=new ce(V.comparator);function En(){return gN}const w1=new ce(V.comparator);function ms(...t){let e=w1;for(const n of t)e=e.insert(n.key,n);return e}function E1(t){let e=w1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return Os()}function I1(){return Os()}function Os(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yN=new ce(V.comparator),_N=new Le(V.comparator);function W(...t){let e=_N;for(const n of t)e=e.add(n);return e}const vN=new Le(X);function wN(){return vN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(e)?"-0":e}}function S1(t){return{integerValue:""+t}}function A1(t,e){return JP(e)?S1(e):T1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this._=void 0}}function EN(t,e,n){return t instanceof Cl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qf(s)&&(s=Yf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof yo?C1(t,e):t instanceof _o?k1(t,e):function(i,s){const o=R1(i,s),a=Zg(o)+Zg(i.Ie);return Zh(o)&&Zh(i.Ie)?S1(a):T1(i.serializer,a)}(t,e)}function IN(t,e,n){return t instanceof yo?C1(t,e):t instanceof _o?k1(t,e):n}function R1(t,e){return t instanceof vo?function(r){return Zh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cl extends vu{}class yo extends vu{constructor(e){super(),this.elements=e}}function C1(t,e){const n=P1(e);for(const r of t.elements)n.some(i=>Jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends vu{constructor(e){super(),this.elements=e}}function k1(t,e){let n=P1(e);for(const r of t.elements)n=n.filter(i=>!Jt(i,r));return{arrayValue:{values:n}}}class vo extends vu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Zg(t){return ge(t.integerValue||t.doubleValue)}function P1(t){return Xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n){this.field=e,this.transform=n}}function SN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yo&&i instanceof yo||r instanceof _o&&i instanceof _o?ki(r.elements,i.elements,Jt):r instanceof vo&&i instanceof vo?Jt(r.Ie,i.Ie):r instanceof Cl&&i instanceof Cl}(t.transform,e.transform)}class AN{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wu{}function N1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tp(t.key,Vt.none()):new Uo(t.key,t.data,Vt.none());{const n=t.data,r=nt.empty();let i=new Le(xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ir(t.key,r,new ht(i.toArray()),Vt.none())}}function RN(t,e,n){t instanceof Uo?function(i,s,o){const a=i.value.clone(),l=ty(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(i,s,o){if(!Ma(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ty(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(D1(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,r){return t instanceof Uo?function(s,o,a,l){if(!Ma(s.precondition,o))return a;const u=s.value.clone(),c=ny(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ir?function(s,o,a,l){if(!Ma(s.precondition,o))return a;const u=ny(s.fieldTransforms,l,o),c=o.data;return c.setAll(D1(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ma(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=R1(r.transform,i||null);s!=null&&(n===null&&(n=nt.empty()),n.set(r.field,s))}return n||null}function ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ki(r,i,(s,o)=>SN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ir extends wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function D1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ty(t,e,n){const r=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,IN(o,a,n[i]))}return r}function ny(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,EN(s,o,e))}return r}class tp extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kN extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=N1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,r)=>ey(n,r))&&ki(this.baseMutations,e.baseMutations,(n,r)=>ey(n,r))}}class np{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){te(e.mutations.length===r.length);let i=function(){return yN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new np(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,G;function xN(t){switch(t){default:return b();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function x1(t){if(t===void 0)return wn("GRPC error has no .code"),w.UNKNOWN;switch(t){case me.OK:return w.OK;case me.CANCELLED:return w.CANCELLED;case me.UNKNOWN:return w.UNKNOWN;case me.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case me.INTERNAL:return w.INTERNAL;case me.UNAVAILABLE:return w.UNAVAILABLE;case me.UNAUTHENTICATED:return w.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case me.NOT_FOUND:return w.NOT_FOUND;case me.ALREADY_EXISTS:return w.ALREADY_EXISTS;case me.PERMISSION_DENIED:return w.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case me.ABORTED:return w.ABORTED;case me.OUT_OF_RANGE:return w.OUT_OF_RANGE;case me.UNIMPLEMENTED:return w.UNIMPLEMENTED;case me.DATA_LOSS:return w.DATA_LOSS;default:return b()}}(G=me||(me={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new gi([4294967295,4294967295],0);function ry(t){const e=ON().encode(t),n=new bP;return n.update(e),new Uint8Array(n.digest())}function iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gi([n,r],0),new gi([i,s],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gs(`Invalid padding: ${n}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=gi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(gi.fromNumber(r)));return i.compare(VN)===1&&(i=new gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=ry(e),[r,i]=iy(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new rp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=ry(e),[r,i]=iy(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(U.min(),i,new ce(X),En(),W())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class O1{constructor(e,n){this.targetId=e,this.fe=n}}class V1{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sy{constructor(){this.ge=0,this.pe=ay(),this.ye=Ge.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=W(),n=W(),r=W();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new jo(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=ay()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,te(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class LN{constructor(e){this.Le=e,this.ke=new Map,this.qe=En(),this.Qe=oy(),this.Ke=new ce(X)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(td(s))if(r===0){const o=new V(s.path);this.We(n,o,ze.newNoDocument(o,U.min()))}else te(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Dr(r).toUint8Array()}catch(l){if(l instanceof u1)return Ci("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new rp(o,i,s)}catch(l){return Ci(l instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&td(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ze.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=W();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Eu(e,n,this.Ke,this.qe,r);return this.qe=En(),this.Qe=oy(),this.Ke=new ce(X),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new sy,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Le(X),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new sy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function oy(){return new ce(V.comparator)}function ay(){return new ce(V.comparator)}const MN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),FN=(()=>({and:"AND",or:"OR"}))();class $N{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function id(t,e){return t.useProto3Json||gu(e)?e:{value:e}}function kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UN(t,e){return kl(t,e.toTimestamp())}function Xt(t){return te(!!t),U.fromTimestamp(function(n){const r=Qn(n);return new Ee(r.seconds,r.nanos)}(t))}function ip(t,e){return function(r){return new ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function M1(t){const e=ie.fromString(t);return te(U1(e)),e}function sd(t,e){return ip(t.databaseId,e.path)}function Cc(t,e){const n=M1(e);if(n.get(1)!==t.databaseId.projectId)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(b1(n))}function od(t,e){return ip(t.databaseId,e)}function jN(t){const e=M1(t);return e.length===4?ie.emptyPath():b1(e)}function ad(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ly(t,e,n){return{name:sd(t,e),fields:n.value.mapValue.fields}}function BN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(te(c===void 0||typeof c=="string"),Ge.fromBase64String(c||"")):(te(c===void 0||c instanceof Uint8Array),Ge.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:x1(u.code);return new P(c,u.message||"")}(o);n=new V1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cc(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):U.min(),a=new nt({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ba(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cc(t,r.document),s=r.readTime?Xt(r.readTime):U.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cc(t,r.document),s=r.removedTargetIds||[];n=new ba([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new DN(i,s),a=r.targetId;n=new O1(a,o)}}return n}function zN(t,e){let n;if(e instanceof Uo)n={update:ly(t,e.key,e.value)};else if(e instanceof tp)n={delete:sd(t,e.key)};else if(e instanceof ir)n={update:ly(t,e.key,e.data),updateMask:JN(e.fieldMask)};else{if(!(e instanceof kN))return b();n={verify:sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _o)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:UN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function HN(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xt(i.updateTime):Xt(s);return o.isEqual(U.min())&&(o=Xt(s)),new AN(o,i.transformResults||[])}(n,e))):[]}function WN(t,e){return{documents:[od(t,e.path)]}}function qN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=od(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=od(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return $1(Ft.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Wr(h.field),direction:QN(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=id(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function KN(t){let e=jN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=F1(h);return d instanceof Ft&&f1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new go(qr(_.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,gu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Rl(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Rl(m,d)}(n.endAt)),dN(e,i,o,s,a,"F",l,u)}function GN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function F1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qr(n.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qr(n.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qr(n.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qr(n.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return _e.create(qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ft.create(n.compositeFilter.filters.map(r=>F1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function QN(t){return MN[t]}function YN(t){return bN[t]}function XN(t){return FN[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function qr(t){return xe.fromServerFormat(t.fieldPath)}function $1(t){return t instanceof _e?function(n){if(n.op==="=="){if(Gg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(Kg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(Kg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:YN(n.op),value:n.value}}}(t):t instanceof Ft?function(n){const r=n.getFilters().map(i=>$1(i));return r.length===1?r[0]:{compositeFilter:{op:XN(n.op),filters:r}}}(t):b()}function JN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,r,i,s=U.min(),o=U.min(),a=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.ut=e}}function eD(t){const e=KN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.on=new nD}addToCollectionParentIndex(e,n){return this.on.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Gn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class nD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Di(0)}static Nn(){return new Di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vs(r.mutation,i,ht.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ms();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=En();const o=Os(),a=function(){return Os()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ir)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Vs(c.mutation,u,c.mutation.getFieldMask(),Ee.now())):o.set(u.key,ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new iD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Os();let i=new ce((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ht.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=I1();c.forEach(d=>{if(!s.has(d)){const m=N1(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):y1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(gr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:E1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ms();return this.indexManager.getCollectionParents(e,s).next(a=>T.forEach(a,l=>{const u=function(h,d){return new Hi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ze.newInvalidDocument(c)))});let a=ms();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Vs(c.mutation,u,ht.empty(),Ee.now()),_u(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return T.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:eD(i.bundledQuery),readTime:Xt(i.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.overlays=new ce(V.comparator),this.lr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=gr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=gr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=gr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NN(n,r));let s=this.lr.get(n);s===void 0&&(s=W(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.hr=new Le(Se.Pr),this.Ir=new Le(Se.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Se(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Se(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new ie([])),r=new Se(n,e),i=new Se(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new ie([])),r=new Se(n,e),i=new Se(n,e+1);let s=W();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Se(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||X(e.gr,n.gr)}static Tr(e,n){return X(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Le(Se.Pr)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(X);return n.forEach(i=>{const s=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),T.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Se(new V(s),0);let a=new Le(X);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),T.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return T.forEach(n.mutations,i=>{const s=new Se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Se(n,0),i=this.yr.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.Cr=e,this.docs=function(){return new ce(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=En();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||QP(GP(c),r)<=0||(i.has(c.key)||_u(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}vr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cD(this)}getSize(e){return T.resolve(this.size)}}class cD extends rD{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.persistence=e,this.Fr=new Wi(n=>Jf(n),Zf),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Mr=0,this.Or=new sp,this.targetCount=0,this.Nr=Di.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),T.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Di(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.kn(n),T.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Gf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new hD(this),this.indexManager=new tD,this.remoteDocumentCache=function(i){return new uD(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new ZN(n),this.Kr=new oD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new lD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new fD(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return T.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class fD extends XP{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Gr=new sp,this.zr=null}static jr(e){return new op(e)}get Hr(){if(this.zr)return this.zr;throw b()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),T.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return T.or([()=>T.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ap(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pD;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(os()<=K.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),T.resolve()):(os()<=K.DEBUG&&O("QueryEngine","Query:",Hr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(os()<=K.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):T.resolve())}zi(e,n){if(Jg(n))return T.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rd(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,rd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Jg(n)||i.isEqual(U.min())?T.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?T.resolve(null):(os()<=K.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hr(n)),this.Xi(e,o,n,KP(i,-1)).next(a=>a))})}Yi(e,n){let r=new Le(v1(e));return n.forEach((i,s)=>{_u(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return os()<=K.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Gn.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ce(X),this.ns=new Wi(s=>Jf(s),Zf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sD(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function yD(t,e,n,r){return new gD(t,e,n,r)}async function j1(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function _D(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=T.resolve();return d.forEach(_=>{m=m.next(()=>c.getEntry(l,_)).next(y=>{const A=u.docVersions.get(_);te(A!==null),y.version.compareTo(A)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function B1(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function vD(t,e){const n=j(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Ge.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,A,p){return y.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=En(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(wD(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(U.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function wD(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=En();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function ED(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ID(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new On(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function ld(t,e,n){const r=j(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$o(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function uy(t,e,n){const r=j(t);let i=U.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=j(l),d=h.ns.get(c);return d!==void 0?T.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,Yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:W())).next(a=>(TD(r,pN(e),a),{documents:a,ls:s})))}function TD(t,e,n){let r=t.rs.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class cy{constructor(){this.activeTargetIds=wN()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SD{constructor(){this.eo=new cy,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function kc(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection";class kD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=kc(),l=this.So(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ci("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=RD[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=kc();return new Promise((o,a)=>{const l=new MP;l.setWithCredentials(!0),l.listenOnce(VP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Rc.NO_ERROR:const c=l.getResponseJson();O(Ue,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Rc.TIMEOUT:O(Ue,`RPC '${e}' ${s} timed out`),a(new P(w.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const h=l.getStatus();if(O(Ue,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(A){const p=A.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(p)>=0?p:w.UNKNOWN}(m.status);a(new P(_,m.message))}else a(new P(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(w.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{O(Ue,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);O(Ue,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=kc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xP(),a=OP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(Ue,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const _=new CD({co:A=>{m?O(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(d||(O(Ue,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),O(Ue,`RPC '${e}' stream ${i} sending:`,A),h.send(A))},lo:()=>h.close()}),y=(A,p,f)=>{A.listen(p,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,ma.EventType.OPEN,()=>{m||O(Ue,`RPC '${e}' stream ${i} transport opened.`)}),y(h,ma.EventType.CLOSE,()=>{m||(m=!0,O(Ue,`RPC '${e}' stream ${i} transport closed`),_.Ro())}),y(h,ma.EventType.ERROR,A=>{m||(m=!0,Ci(Ue,`RPC '${e}' stream ${i} transport errored:`,A),_.Ro(new P(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,ma.EventType.MESSAGE,A=>{var p;if(!m){const f=A.data[0];te(!!f);const g=f,E=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(E){O(Ue,`RPC '${e}' stream ${i} received error:`,E);const C=E.status;let k=function(Q){const L=me[Q];if(L!==void 0)return x1(L)}(C),I=E.message;k===void 0&&(k=w.INTERNAL,I="Unknown error status: "+C+" with message "+E.message),m=!0,_.Ro(new P(k,I)),h.close()}else O(Ue,`RPC '${e}' stream ${i} received:`,f),_.Vo(f)}}),y(a,LP.STAT_EVENT,A=>{A.stat===jg.PROXY?O(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===jg.NOPROXY&&O(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return new $N(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new z1(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new P(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PD extends H1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=BN(this.serializer,e),r=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?Xt(o.readTime):U.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=ad(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=td(l)?{documents:WN(s,l)}:{query:qN(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=L1(s,o.resumeToken);const u=id(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=kl(s,o.snapshotVersion.toTimestamp());const u=id(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=GN(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=ad(this.serializer),n.removeTarget=e,this.e_(n)}}class ND extends H1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=HN(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.I_(r,n)}return te(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ad(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zN(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(w.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(w.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class xD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(wn(n),this.f_=!1):O("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=j(l);u.C_.add(4),await Bo(u),u.M_.set("Unknown"),u.C_.delete(4),await Tu(u)}(this))})}),this.M_=new xD(r,i)}}async function Tu(t){if(Ur(t))for(const e of t.v_)await e(!0)}async function Bo(t){for(const e of t.v_)await e(!1)}function W1(t,e){const n=j(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),cp(n)?up(n):qi(n).Ho()&&lp(n,e))}function q1(t,e){const n=j(t),r=qi(n);n.D_.delete(e),r.Ho()&&K1(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Ur(n)&&n.M_.set("Unknown"))}function lp(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qi(t).u_(e)}function K1(t,e){t.x_.Oe(e),qi(t).c_(e)}function up(t){t.x_=new LN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),qi(t).start(),t.M_.g_()}function cp(t){return Ur(t)&&!qi(t).jo()&&t.D_.size>0}function Ur(t){return j(t).C_.size===0}function G1(t){t.x_=void 0}async function VD(t){t.D_.forEach((e,n)=>{lp(t,e)})}async function LD(t,e){G1(t),cp(t)?(t.M_.w_(e),up(t)):t.M_.set("Unknown")}async function MD(t,e,n){if(t.M_.set("Online"),e instanceof V1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof ba?t.x_.$e(e):e instanceof O1?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(U.min()))try{const r=await B1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),K1(s,l);const h=new On(c.target,l,u,c.sequenceNumber);lp(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!$o(e))throw e;t.C_.add(1),await Bo(t),t.M_.set("Offline"),n||(n=()=>B1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Tu(t)})}function Q1(t,e){return e().catch(n=>Pl(t,n,e))}async function Su(t){const e=j(t),n=Yn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;bD(e);)try{const i=await ED(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,FD(e,i)}catch(i){await Pl(e,i)}Y1(e)&&X1(e)}function bD(t){return Ur(t)&&t.b_.length<10}function FD(t,e){t.b_.push(e);const n=Yn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Y1(t){return Ur(t)&&!Yn(t).jo()&&t.b_.length>0}function X1(t){Yn(t).start()}async function $D(t){Yn(t).E_()}async function UD(t){const e=Yn(t);for(const n of t.b_)e.P_(n.mutations)}async function jD(t,e,n){const r=t.b_.shift(),i=np.from(r,e,n);await Q1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Su(t)}async function BD(t,e){e&&Yn(t).h_&&await async function(r,i){if(function(o){return xN(o)&&o!==w.ABORTED}(i.code)){const s=r.b_.shift();Yn(r).Yo(),await Q1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Su(r)}}(t,e),Y1(t)&&X1(t)}async function dy(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Ur(n);n.C_.add(3),await Bo(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Tu(n)}async function zD(t,e){const n=j(t);e?(n.C_.delete(2),await Tu(n)):e||(n.C_.add(2),await Bo(n),n.M_.set("Unknown"))}function qi(t){return t.O_||(t.O_=function(n,r,i){const s=j(n);return s.A_(),new PD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:VD.bind(null,t),Io:LD.bind(null,t),a_:MD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),cp(t)?up(t):t.M_.set("Unknown")):(await t.O_.stop(),G1(t))})),t.O_}function Yn(t){return t.N_||(t.N_=function(n,r,i){const s=j(n);return s.A_(),new ND(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:$D.bind(null,t),Io:BD.bind(null,t),T_:UD.bind(null,t),I_:jD.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Su(t)):(await t.N_.stop(),t.b_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(t,e){if(wn("AsyncQueue",`${e}: ${t}`),$o(t))return new P(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=ms(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.B_=new ce(V.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):b():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xi(e,n,yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.k_=void 0,this.listeners=[]}}class WD{constructor(){this.queries=new Wi(e=>_1(e),yu),this.onlineState="Unknown",this.q_=new Set}}async function J1(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new HD),i)try{s.k_=await n.onListen(r)}catch(o){const a=dp(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&fp(n)}async function Z1(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qD(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&fp(n)}function KD(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function fp(t){t.q_.forEach(e=>{e.next()})}class eE{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.key=e}}class nE{constructor(e){this.key=e}}class GD{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=W(),this.mutatedKeys=W(),this._a=v1(e),this.aa=new yi(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new fy,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=_u(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let A=!1;d&&m?d.data.isEqual(m.data)?_!==y&&(r.track({type:3,doc:m}),A=!0):this.ha(d,m)||(r.track({type:2,doc:m}),A=!0,(l&&this._a(m,l)>0||u&&this._a(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),A=!0):d&&!m&&(r.track({type:1,doc:d}),A=!0,(l||u)&&(a=!0)),A&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,h)=>function(m,_){const y=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return y(m)-y(_)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new xi(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new fy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=W(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new nE(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new tE(r))}),n}da(e){this.ia=e.ls,this.oa=W();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return xi.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class QD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YD{constructor(e){this.key=e,this.Ra=!1}}class XD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Wi(a=>_1(a),yu),this.fa=new Map,this.ga=new Set,this.pa=new ce(V.comparator),this.ya=new Map,this.wa=new sp,this.Sa={},this.ba=new Map,this.Da=Di.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function JD(t,e){const n=lx(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await ID(n.localStore,Yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ZD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&W1(n.remoteStore,o)}return i}async function ZD(t,e,n,r,i){t.va=(h,d,m)=>async function(y,A,p,f){let g=A.view.ca(p);g.Zi&&(g=await uy(y.localStore,A.query,!1).then(({documents:I})=>A.view.ca(I,g)));const E=f&&f.targetChanges.get(A.targetId),C=f&&f.targetMismatches.get(A.targetId)!=null,k=A.view.applyChanges(g,y.isPrimaryClient,E,C);return my(y,A.targetId,k.Ta),k.snapshot}(t,h,d,m);const s=await uy(t.localStore,e,!0),o=new GD(e,s.ls),a=o.ca(s.documents),l=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);my(t,n,u.Ta);const c=new QD(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function ex(t,e){const n=j(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!yu(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ld(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),q1(n.remoteStore,r.targetId),ud(n,r.targetId)}).catch(Fo)):(ud(n,r.targetId),await ld(n.localStore,r.targetId,!0))}async function tx(t,e,n){const r=ux(t);try{const i=await function(o,a){const l=j(o),u=Ee.now(),c=a.reduce((m,_)=>m.add(_.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=En(),y=W();return l.ss.getEntries(m,c).next(A=>{_=A,_.forEach((p,f)=>{f.isValidDocument()||(y=y.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(A=>{h=A;const p=[];for(const f of a){const g=CN(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new ir(f.key,g,c1(g.value.mapValue),Vt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(A=>{d=A;const p=A.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(m,A.batchId,p)})}).then(()=>({batchId:d.batchId,changes:E1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ce(X)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await zo(r,i.changes),await Su(r.remoteStore)}catch(i){const s=dp(i,"Failed to persist write");n.reject(s)}}async function rE(t,e){const n=j(t);try{const r=await vD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?te(o.Ra):i.removedDocuments.size>0&&(te(o.Ra),o.Ra=!1))}),await zo(n,r,e)}catch(r){await Fo(r)}}function py(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&fp(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nx(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new ce(V.comparator);o=o.insert(s,ze.newNoDocument(s,U.min()));const a=W().add(s),l=new Eu(U.min(),new Map,new ce(X),o,a);await rE(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),pp(r)}else await ld(r.localStore,e,!1).then(()=>ud(r,e,n)).catch(Fo)}async function rx(t,e){const n=j(t),r=e.batch.batchId;try{const i=await _D(n.localStore,e);sE(n,r,null),iE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await Fo(i)}}async function ix(t,e,n){const r=j(t);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(te(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);sE(r,e,n),iE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await Fo(i)}}function iE(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function sE(t,e,n){const r=j(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||oE(t,r)})}function oE(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(q1(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),pp(t))}function my(t,e,n){for(const r of n)r instanceof tE?(t.wa.addReference(r.key,e),sx(t,r)):r instanceof nE?(O("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||oE(t,r.key)):b()}function sx(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ga.add(r),pp(t))}function pp(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new V(ie.fromString(e)),r=t.Da.next();t.ya.set(r,new YD(n)),t.pa=t.pa.insert(n,r),W1(t.remoteStore,new On(Yt(ep(n.path)),r,"TargetPurposeLimboResolution",Gf._e))}}async function zo(t,e,n){const r=j(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=ap.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=j(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(u,d=>T.forEach(d.ki,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>T.forEach(d.qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!$o(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.ts.get(d),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);c.ts=c.ts.insert(d,y)}}}(r.localStore,s))}async function ox(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await j1(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new P(w.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r._s)}}function ax(t,e){const n=j(t),r=n.ya.get(e);if(r&&r.Ra)return W().add(r.key);{let i=W();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function lx(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ax.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nx.bind(null,e),e.Va.a_=qD.bind(null,e.eventManager),e.Va.Fa=KD.bind(null,e.eventManager),e}function ux(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ix.bind(null,e),e}class gy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yD(this.persistence,new mD,e.initialUser,this.serializer)}createPersistence(e){return new dD(op.jr,this.serializer)}createSharedClientState(e){return new SD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>py(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ox.bind(null,this.syncEngine),await zD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WD}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=function(s){return new kD(s)}(e.databaseInfo);return function(s,o,a,l){return new DD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new OD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>py(this.syncEngine,n,0),function(){return hy.D()?new hy:new AD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new XD(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=j(n);O("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Bo(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=a1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await j1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fx(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>dy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>dy(e.remoteStore,s)),t._onlineComponents=e}function dx(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dx(n))throw n;Ci("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new gy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Nc(t,new gy);return t._offlineComponents}async function lE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await yy(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await yy(t,new cx))),t._onlineComponents}function px(t){return lE(t).then(e=>e.syncEngine)}async function uE(t){const e=await lE(t),n=e.eventManager;return n.onListen=JD.bind(null,e.syncEngine),n.onUnlisten=ex.bind(null,e.syncEngine),n}function mx(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new aE({next:d=>{o.enqueueAndForget(()=>Z1(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new P(w.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new P(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new eE(ep(a.path),c,{includeMetadataChanges:!0,J_:!0});return J1(s,h)}(await uE(t),t.asyncQueue,e,n,r)),r.promise}function gx(t,e,n={}){const r=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new aE({next:d=>{o.enqueueAndForget(()=>Z1(s,h)),d.fromCache&&l.source==="server"?u.reject(new P(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new eE(a,c,{includeMetadataChanges:!0,J_:!0});return J1(s,h)}(await uE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e,n){if(!n)throw new P(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yx(t,e,n,r){if(e===!0&&r===!0)throw new P(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vy(t){if(!V.isDocumentKey(t))throw new P(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wy(t){if(V.isDocumentKey(t))throw new P(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Au(t);throw new P(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new P(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new P(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new P(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ey({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ey(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FP;switch(r.type){case"firstParty":return new BP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new P(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_y.get(n);r&&(O("ComponentProvider","Removing Datastore"),_y.delete(n),r.terminate())}(this),Promise.resolve()}}function _x(t,e,n,r={}){var i;const s=(t=Zt(t,Ru))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=je.MOCK_USER;else{a=vS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(u)}t._authCredentials=new $P(new o1(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jr(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}}class Hn extends jr{constructor(e,n,r){super(e,n,ep(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new V(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function dE(t,e,...n){if(t=Ie(t),hE("collection","path",e),t instanceof Ru){const r=ie.fromString(e,...n);return wy(r),new Hn(t,null,r)}{if(!(t instanceof Je||t instanceof Hn))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return wy(r),new Hn(t.firestore,null,r)}}function Oi(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=a1.newId()),hE("doc","path",e),t instanceof Ru){const r=ie.fromString(e,...n);return vy(r),new Je(t,null,new V(r))}{if(!(t instanceof Je||t instanceof Hn))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return vy(r),new Je(t.firestore,t instanceof Hn?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new z1(this,"async_queue_retry"),this.iu=()=>{const n=Pc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new fn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!$o(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=hp.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&b()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Ki extends Ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new vx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fE(this),this._firestoreClient.terminate()}}function wx(t,e){const n=typeof t=="object"?t:uf(),r=typeof t=="string"?t:e||"(default)",i=Mr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=yS("firestore");s&&_x(i,...s)}return i}function mp(t){return t._firestoreClient||fE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fE(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new eN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,cE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hx(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vi(Ge.fromBase64String(e))}catch(n){throw new P(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vi(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=/^__.*__$/;class Ix{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class pE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class yp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Nl(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(mE(this.Iu)&&Ex.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Tx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}pu(e,n,r,i=!1){return new yp({Iu:e,methodName:n,gu:r,path:xe.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _p(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new Tx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sx(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);vp("Data must be an object, but it was:",o,r);const a=gE(r,o);let l,u;if(s.merge)l=new ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=cd(e,h,n);if(!o.contains(d))throw new P(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_E(c,d)||c.push(d)}l=new ht(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Ix(new nt(a),l,u)}class Pu extends ku{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pu}}class Ax extends ku{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new vo(e.serializer,A1(e.serializer,this.wu));return new TN(e.path,n)}isEqual(e){return this===e}}function Rx(t,e,n,r){const i=t.pu(1,e,n);vp("Data must be an object, but it was:",i,r);const s=[],o=nt.empty();$r(r,(l,u)=>{const c=wp(e,l,n);u=Ie(u);const h=i.Ru(c);if(u instanceof Pu)s.push(c);else{const d=Ho(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ht(s);return new pE(o,a,i.fieldTransforms)}function Cx(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[cd(e,r,n)],l=[i];if(s.length%2!=0)throw new P(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(cd(e,s[d])),l.push(s[d+1]);const u=[],c=nt.empty();for(let d=a.length-1;d>=0;--d)if(!_E(u,a[d])){const m=a[d];let _=l[d];_=Ie(_);const y=o.Ru(m);if(_ instanceof Pu)u.push(m);else{const A=Ho(_,y);A!=null&&(u.push(m),c.set(m,A))}}const h=new ht(u);return new pE(c,h,o.fieldTransforms)}function kx(t,e,n,r=!1){return Ho(n,t.pu(r?4:3,e))}function Ho(t,e){if(yE(t=Ie(t)))return vp("Unsupported field value:",e,t),gE(t,e);if(t instanceof ku)return function(r,i){if(!mE(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ho(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:kl(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kl(i.serializer,s)}}if(r instanceof gp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vi)return{bytesValue:L1(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ip(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Au(r)}`)}(t,e)}function gE(t,e){const n={};return l1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=Ho(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof gp||t instanceof Vi||t instanceof Je||t instanceof ku)}function vp(t,e,n){if(!yE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Au(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function cd(t,e,n){if((e=Ie(e))instanceof Cu)return e._internalPath;if(typeof e=="string")return wp(t,e);throw Nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Px=new RegExp("[~\\*/\\[\\]]");function wp(t,e,n){if(e.search(Px)>=0)throw Nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cu(...e.split("."))._internalPath}catch{throw Nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(w.INVALID_ARGUMENT,a+t+l)}function _E(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nx extends vE{data(){return super.data()}}function Ep(t,e){return typeof e=="string"?wp(t,e):e instanceof Cu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ip{}class wE extends Ip{}function EE(t,e,...n){let r=[];e instanceof Ip&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Sp).length,a=s.filter(l=>l instanceof Tp).length;if(o>1||o>0&&a>0)throw new P(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Tp extends wE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tp(e,n,r)}_apply(e){const n=this._parse(e);return IE(e._query,n),new jr(e.firestore,e.converter,nd(e._query,n))}_parse(e){const n=_p(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new P(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ty(h,c);const m=[];for(const _ of h)m.push(Iy(l,s,_));d={arrayValue:{values:m}}}else d=Iy(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ty(h,c),d=kx(a,o,h,c==="in"||c==="not-in");return _e.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Sp extends Ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)IE(o,l),o=nd(o,l)}(e._query,n),new jr(e.firestore,e.converter,nd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ap extends wE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ap(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new P(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new P(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new go(s,o)}(e._query,this._field,this._direction);return new jr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Hi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function xx(t,e="asc"){const n=e,r=Ep("orderBy",t);return Ap._create(r,n)}function Iy(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new P(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!y1(e)&&n.indexOf("/")!==-1)throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!V.isDocumentKey(r))throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qg(t,new V(r))}if(n instanceof Je)return qg(t,n._key);throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Au(n)}.`)}function Ty(t,e){if(!Array.isArray(t)||t.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IE(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ox{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gp(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);te(U1(r));const i=new po(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TE extends vE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fa extends TE{data(e={}){return super.data(e)}}class Lx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Fa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Fa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Mx(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){t=Zt(t,Je);const e=Zt(t.firestore,Ki);return mx(mp(e),t._key).then(n=>$x(e,t,n))}class SE extends Ox{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,n)}}function AE(t){t=Zt(t,jr);const e=Zt(t.firestore,Ki),n=mp(e),r=new SE(e);return Dx(t._query),gx(n,t._query).then(i=>new Lx(e,r,t,i))}function bx(t,e,n){t=Zt(t,Je);const r=Zt(t.firestore,Ki),i=Vx(t.converter,e,n);return Rp(r,[Sx(_p(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vt.none())])}function Ay(t,e,n,...r){t=Zt(t,Je);const i=Zt(t.firestore,Ki),s=_p(i);let o;return o=typeof(e=Ie(e))=="string"||e instanceof Cu?Cx(s,"updateDoc",t._key,e,n,r):Rx(s,"updateDoc",t._key,e),Rp(i,[o.toMutation(t._key,Vt.exists(!0))])}function Fx(t){return Rp(Zt(t.firestore,Ki),[new tp(t._key,Vt.none())])}function Rp(t,e){return function(r,i){const s=new fn;return r.asyncQueue.enqueueAndForget(async()=>tx(await px(r),i,s)),s.promise}(mp(t),e)}function $x(t,e,n){const r=n.docs.get(e._key),i=new SE(t);return new TE(t,i,e._key,r,new ys(n.hasPendingWrites,n.fromCache),e.converter)}function Ry(t){return new Ax("increment",t)}(function(e,n=!0){(function(i){zi=i})(Fi),Ct(new gt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ki(new UP(r.getProvider("auth-internal")),new HP(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new P(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),at(Bg,"4.4.0",e),at(Bg,"4.4.0","esm2017")})();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="/firebase-messaging-sw.js",jx="/firebase-cloud-messaging-push-scope",RE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Bx="https://fcmregistrations.googleapis.com/v1",CE="google.c.a.c_id",zx="google.c.a.c_l",Hx="google.c.a.ts",Wx="google.c.a.e";var Cy;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Cy||(Cy={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var wo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(wo||(wo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qx(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="fcm_token_details_db",Kx=5,ky="fcm_token_object_Store";async function Gx(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Dc))return null;let e=null;return(await lf(Dc,Kx,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(ky))return;const l=o.objectStore(ky),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:tn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:tn(c.auth),p256dh:tn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:tn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:tn(c.auth),p256dh:tn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:tn(c.vapidKey)}}}}}})).close(),await lc(Dc),await lc("fcm_vapid_details_db"),await lc("undefined"),Qx(e)?e:null}function Qx(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="firebase-messaging-database",Xx=1,Or="firebase-messaging-store";let xc=null;function Cp(){return xc||(xc=lf(Yx,Xx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}})),xc}async function kE(t){const e=Pp(t),r=await(await Cp()).transaction(Or).objectStore(Or).get(e);if(r)return r;{const i=await Gx(t.appConfig.senderId);if(i)return await kp(t,i),i}}async function kp(t,e){const n=Pp(t),i=(await Cp()).transaction(Or,"readwrite");return await i.objectStore(Or).put(e,n),await i.done,e}async function Jx(t){const e=Pp(t),r=(await Cp()).transaction(Or,"readwrite");await r.objectStore(Or).delete(e),await r.done}function Pp({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new er("messaging","Messaging",Zx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e){const n=await Dp(t),r=NE(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Np(t.appConfig),i)).json()}catch(o){throw pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw pt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw pt.create("token-subscribe-no-token");return s.token}async function tO(t,e){const n=await Dp(t),r=NE(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Np(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw pt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw pt.create("token-update-no-token");return s.token}async function PE(t,e){const r={method:"DELETE",headers:await Dp(t)};try{const s=await(await fetch(`${Np(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Np({projectId:t}){return`${Bx}/projects/${t}/registrations`}async function Dp({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function NE({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==RE&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=7*24*60*60*1e3;async function rO(t){const e=await oO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:tn(e.getKey("auth")),p256dh:tn(e.getKey("p256dh"))},r=await kE(t.firebaseDependencies);if(r){if(aO(r.subscriptionOptions,n))return Date.now()>=r.createTime+nO?sO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await PE(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Py(t.firebaseDependencies,n)}else return Py(t.firebaseDependencies,n)}async function iO(t){const e=await kE(t.firebaseDependencies);e&&(await PE(t.firebaseDependencies,e.token),await Jx(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function sO(t,e){try{const n=await tO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await kp(t.firebaseDependencies,r),n}catch(n){throw await iO(t),n}}async function Py(t,e){const r={token:await eO(t,e),createTime:Date.now(),subscriptionOptions:e};return await kp(t,r),r.token}async function oO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qx(e)})}function aO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return lO(e,t),uO(e,t),cO(e,t),e}function lO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function uO(t,e){e.data&&(t.data=e.data)}function cO(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){return typeof t=="object"&&!!t&&CE in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */DE("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");DE("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function DE(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){if(!t||!t.options)throw Oc("App Configuration Object");if(!t.name)throw Oc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Oc(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Oc(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=dO(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pO(t){try{t.swRegistration=await navigator.serviceWorker.register(Ux,{scope:jx}),t.swRegistration.update().catch(()=>{})}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(t,e){if(!e&&!t.swRegistration&&await pO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=RE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await gO(t,e==null?void 0:e.vapidKey),await mO(t,e==null?void 0:e.serviceWorkerRegistration),rO(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e,n){const r=vO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[CE],message_name:n[zx],message_time:n[Hx],message_device_time:Math.floor(Date.now()/1e3)})}function vO(t){switch(t){case wo.NOTIFICATION_CLICKED:return"notification_open";case wo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===wo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Ny(n)):t.onMessageHandler.next(Ny(n)));const r=n.data;hO(r)&&r[Wx]==="1"&&await _O(t,n.messageType,r)}const Dy="@firebase/messaging",xy="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=t=>{const e=new fO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>wO(e,n)),e},IO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>yO(e,r)}};function TO(){Ct(new gt("messaging",EO,"PUBLIC")),Ct(new gt("messaging-internal",IO,"PRIVATE")),at(Dy,xy),at(Dy,xy,"esm2017")}TO();const SO="AIzaSyCyK1q3CFWJoS4uvN7XIIKda1VJPS5hmAA",AO="samwindsor-sw.firebaseapp.com",RO="samwindsor-sw",CO="samwindsor-sw.appspot.com",kO="1060770716594",PO="1:1060770716594:web:51e68889c8b33d62f0e2ab",NO="G-DRWVF6K6CF",DO={apiKey:SO,authDomain:AO,projectId:RO,storageBucket:CO,messagingSenderId:kO,appId:PO,measurementId:NO},xp=e0(DO);fR(xp);const Vc=Dk(xp);new sn;new rn;const Wn=wx(xp);function xO(){const[t,e]=H.useState([]);return H.useEffect(()=>{(async()=>{try{const r=dE(Wn,"projects"),i=EE(r,xx("order")),o=(await AE(i)).docs.map(a=>({id:a.id,...a.data()})).reverse();e(o)}catch(r){console.error(r)}})()},[]),F("div",{children:[v(jv,{children:"Projects"}),v("div",{className:"flex flex-col md:flex-row items-center justify-center ",children:v("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t==null?void 0:t.map(n=>v(uS,{imgURL:n.imgURL,imgALT:n.imgALT,title:n.title,slug:n.slug,stack:n.stack,demoURL:n.demoURL,gitURL:n.gitURL},n.id))})})]})}const OO=({refContact:t})=>{const[e,n]=H.useState(""),[r,i]=H.useState(!0),s=o=>{const a=o.target.value,l=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a);n(l?"":"Please enter a valid email address"),i(!l)};return v("div",{className:"flex flex-col mb-10 mx-auto pt-20",ref:t,children:v("div",{className:"flex justify-center items-center",children:F("form",{action:"https://getform.io/f/e2059994-fbac-4aba-b565-63d41527e0a8",method:"POST",className:"flex flex-col w-full md:w-7/12",children:[v(jv,{children:"Get in touch!"}),v("input",{type:"type",name:"name",placeholder:"Name",className:"p-2 bg-transparent border-2 rounded-md focus:outline-none",required:!0}),v("input",{type:"email",name:"email",placeholder:"Your@Email.com",className:`my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none ${e&&"border-red-500"}`,required:!0,onChange:s}),e&&v("p",{className:"text-red-500 mb-2",children:e}),v("textarea",{name:"message",placeholder:"Your Message",rows:"10",className:"mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none",required:!0}),v("button",{type:"submit",className:"text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-[#196aa7] to-[#1e82cd] drop-shadow-md hover:stroke-white",required:!0,disabled:r,children:"Send!"})]})})})},VO=({scrollToHero:t})=>F("div",{className:"py-5 text-center",children:[v("div",{className:"container max-w-screen-lg mx-auto",children:v("div",{children:v("div",{className:"flex flex-wrap justify-center gap-4",children:v(Bv,{iconDirection:"row",tipPosition:"top-middle"})})})}),F("div",{className:"flex flex-row pt-4 items-center justify-center",children:[F("p",{className:"pt-4 flex-grow flex-shrink text-center",children:["© ",new Date().getFullYear()," Sam Windsor. All rights reserved."]}),v("div",{className:"relative bottom-12 h-8  right-12 md:bottom-8 md:right-8",children:v(Cs,{tip:"Jump to top",position:"top-middle",children:v("button",{onClick:()=>t(),style:{animation:"bounce 2s infinite"},children:v("i",{className:"fa-solid fa-arrow-up opacity-20 text-xl"})})})})]})]}),LO=()=>{var s,o;const[t,e]=H.useState(null),[n,r]=H.useState(null),i=async()=>{try{const a=await Sy(Oi(Wn,"statistics","NewViewerCount"));a.exists()&&e(a.data());const l=await Sy(Oi(Wn,"statistics","RepeatViewerCount"));l.exists()&&r(l.data())}catch(a){console.error("Error fetching viewer counts:",a)}};return H.useEffect(()=>{i()},[]),v("div",{className:"flex flex-col w-full items-center gap-4",children:F("div",{className:"flex flex-row w-[95%] gap-6",children:[F("div",{className:"flex flex-col gap-2 bg-white border-4 drop-shadow-xl rounded-xl px-2 py-2",children:[v("h2",{className:"font-bold",children:"New Viewer Count"}),t&&F("div",{children:[F("p",{children:["Total Views: ",t.totalViews]}),F("p",{children:["Last View: ",(s=t.lastView)==null?void 0:s.toDate().toLocaleString()]})]})]}),F("div",{className:"flex flex-col gap-2 bg-white border-4 drop-shadow-xl rounded-xl px-2 py-2",children:[v("h2",{className:"font-bold",children:"Repeat Viewer Count"}),n&&F("div",{children:[F("p",{children:["Total Views: ",n.totalViews]}),F("p",{children:["Last View:"," ",(o=n.lastView)==null?void 0:o.toDate().toLocaleString()]})]})]})]})})},MO=()=>{const[t,e]=H.useState(""),[n,r]=H.useState(""),[i,s]=H.useState(""),[o,a]=H.useState(""),[l,u]=H.useState(""),[c,h]=H.useState(""),[d,m]=H.useState(""),[_,y]=H.useState([]),[A,p]=H.useState([]),f=async()=>{try{console.log("Updating project list");const I=dE(Wn,"projects"),x=EE(I),L=(await AE(x)).docs.map(be=>({id:be.id,...be.data()})).reverse();p(L)}catch(I){console.error(I)}};H.useEffect(()=>{f()},[]);const g=I=>{I?(e(I.id),r(I.order),s(I.title),a(I.slug),u(I.imgURL),h(I.gitURL),m(I.demoURL),y(I.stack.join(", "))):(e(""),r(""),s(""),a(""),u(""),h(""),m(""),y(""))},E=async I=>{I.preventDefault();const Q=Oi(Wn,"projects",t);try{await bx(Q,{title:i,order:n,slug:o,imgURL:l,gitURL:c,demoURL:d,stack:_.split(",").map(L=>L.trim())}),e(""),r(""),s(""),a(""),u(""),h(""),m(""),y(""),f(),console.log("New entry added")}catch(L){console.error("Error adding entry:",L)}},C=I=>{I.preventDefault(),e(""),r(""),s(""),a(""),u(""),h(""),m(""),y("")},k=async I=>{if(I.preventDefault(),window.confirm(`Confirm deletion of project ${t}?`)&&t){const L=Oi(Wn,"projects",t);try{await Fx(L),e(""),r(""),s(""),a(""),u(""),h(""),m(""),y(""),f(),console.log("Project Deleted")}catch(be){console.error("Error deleting entry:",be)}}};return F("div",{className:"flex flex-col w-full md: 1/2 lg:w-1/3 bg-white border-4 rounded-xl drop-shadow-lg",children:[v("h2",{className:"font-bold ml-2 text-xl sm:text-3xl",children:" Create & Update Projects"}),F("div",{className:"flex flex-row w-full gap-8 ml-4 py-4 text-sm sm:text-md",children:[v("div",{className:"flex flex-row",children:F("select",{className:"px-2 py-1 rounded-lg",value:t,onChange:I=>{const x=A.find(Q=>Q.id===I.target.value);g(x)},children:[v("option",{value:"",children:"Select Project"}),A==null?void 0:A.map(I=>F("option",{value:I.id,children:[I.title," | Order: ",I.order]},I.id))]})}),v("div",{className:"flex flex-row",children:v("button",{className:"bg-red-500 py-2 px-6 rounded-lg",onClick:k,children:"Delete Project"})})]}),F("form",{className:"flex flex-col w-full gap-2 px-2 py-2",onSubmit:E,children:[F("div",{className:"flex flex-col md:flex-row w-full justify-between gap-2",children:[v("input",{placeholder:"Project ID",name:"projectID",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:t,onChange:I=>e(I.target.value)}),v("input",{placeholder:"Project Order 1 = oldest",name:"order",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:n,onChange:I=>r(I.target.value)})]}),v("input",{placeholder:"Title",name:"title",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:i,onChange:I=>s(I.target.value)}),v("input",{placeholder:"Slug",name:"slug",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:o,onChange:I=>a(I.target.value)}),v("input",{placeholder:"imgURL",name:"imgURL",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:l,onChange:I=>u(I.target.value)}),v("input",{placeholder:"GitURL",name:"gitURL",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:c,onChange:I=>h(I.target.value)}),v("input",{placeholder:"DemoURL",name:"demoURL",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:d,onChange:I=>m(I.target.value)}),v("input",{placeholder:"STACK (comma-separated)",name:"stack",className:"rounded-xl border-2 border-black pl-6 py-1 px-2",value:_,onChange:I=>y(I.target.value)}),F("div",{className:"flex flex-row gap-4 text-sm sm:text-md",children:[v("button",{className:"bg-blue-500 py-2 px-6 rounded-lg w-1/2 sm:w-1/4",type:"submit",children:"Submit"}),v("button",{className:"bg-blue-500 py-2 px-6 rounded-lg w-1/2 sm:w-1/4",onClick:C,children:"Clear Form"})]})]})]})},bO=()=>v("div",{className:"bg-white flex flex-col w-full",children:F("div",{className:"flex flex-col my-4 mx-2 gap-6",children:[v(LO,{}),v(MO,{})]})}),FO=()=>{const[t,e]=H.useState(!1),[n,r]=H.useState(""),[i,s]=H.useState(""),[o,a]=H.useState(!1),[l,u]=H.useState(""),c=H.useRef(null),h=async()=>{try{(await gC(Vc,n,i)).user?(e(!0),localStorage.setItem("isLoggedIn","true"),m(),a(!1)):(console.log("Invalid credentials"),u("Invalid credentials"))}catch(y){console.error(y),u("Error logging in: Invalid credentials")}},d=async()=>{try{try{await vC(Vc),window.top.location=window.top.location}catch(y){console.error(y)}}catch(y){console.error(y)}},m=async()=>{try{await new Promise((A,p)=>{const f=Vc.onAuthStateChanged(A,p);return()=>f()})?(e(!0),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("isOwner","true"),u("")):localStorage.setItem("isLoggedIn","false")}catch(y){console.error("Error checking auth state:",y),u("Error verifying authorisation.")}};H.useEffect(()=>{localStorage.getItem("isOwner")&&m()},[]);const _=y=>{c.current&&!c.current.contains(y.target)&&(a(!1),u(""))};return H.useEffect(()=>(document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}),[]),F("div",{className:"w-full",children:[t?v("div",{className:"flex w-1/3 py-2 px-2",children:v("button",{className:"bg-slate-200 rounded-xl px-4 outline-none w-full py-2",onClick:d,children:"Logout"})}):v("div",{className:"flex w-1/3 bg-[#1d1a18]",children:v("div",{className:"flex w-[75px] h-[50px] z-9 absolute top-0 right-0 cursor-default ",onClick:()=>{a(!o)}})}),o&&v("div",{className:"fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-95 text-black",children:v("div",{className:"bg-white border border-gray-300 rounded-xl shadow p-5 w-full max-w-xl",ref:c,children:v("div",{className:"flex flex-col w-full",children:F("div",{className:"flex flex-col pb-0",children:[v("div",{className:"flex items-center justify-center pb-2 text-2xl font-bold",children:v("p",{children:"Admin Login"})}),v("div",{className:"pb-2",children:v("input",{className:"bg-slate-200 rounded-xl pl-2 outline-none w-full py-2",placeholder:"Enter email",onChange:y=>r(y.target.value)})}),v("div",{className:"pb-2",children:v("input",{className:"bg-slate-200 rounded-xl pl-2 outline-none w-full py-2",placeholder:"Enter password",type:"password",onChange:y=>s(y.target.value)})}),v("div",{className:"font-bold text-red-500 text-2xl",children:l?v("p",{children:l}):v("p",{className:"h-[20px]"})}),v("div",{className:"flex flex-row pt-3",children:v("div",{className:"pl-3",children:v("button",{className:"flex items-center justify-center whitespace-nowrap button-72 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-xl py-2 px-6 transition-colors duration-400 ease-in-out shadow-sm",onClick:h,children:"Sign In"})})})]})})})}),v("div",{className:"flex w-full",children:t&&v(bO,{})})]})},$O=()=>{const t=async()=>{const n=localStorage.getItem("alreadyViewed"),r=localStorage.getItem("isOwner"),i="statistics";if(r)console.log("Website owner, not logged view");else if(n){const s=Oi(Wn,i,"RepeatViewerCount");try{await Ay(s,{totalViews:Ry(1),lastView:new Date}),console.log("Repeat Viewer");return}catch(o){console.error("Error updating RepeatViewerCount document:",o)}}else{const s=Oi(Wn,i,"NewViewerCount");try{await Ay(s,{totalViews:Ry(1),lastView:new Date}),console.log("New Viewer Logged")}catch(o){console.error("Error updating NewViewerCount document:",o)}}},e=async()=>{try{await t(),localStorage.setItem("alreadyViewed","true")}catch(n){console.error("Error checking view state:",n)}};return H.useEffect(()=>{e()},[]),null};function UO(){const t=H.useRef(),e=H.useRef();return F("div",{className:"bg-[#1d1a18]",children:[v($O,{}),v("div",{className:"flex w-full",children:v(FO,{})}),F("div",{className:"bg-[#1d1a18] text-stone-200 min-h-screen font-inter ",children:[v(aS,{scrollToContact:()=>{t.current.scrollIntoView({behavior:"smooth"})},refHero:e}),F("div",{className:"max-w-5xl w-11/12 mx-auto ",children:[v(lS,{}),v(xO,{}),v(OO,{refContact:t}),v(VO,{scrollToHero:()=>{e.current.scrollIntoView({behavior:"smooth"})}})]})]})]})}Lc.createRoot(document.getElementById("root")).render(v(UO,{}));
