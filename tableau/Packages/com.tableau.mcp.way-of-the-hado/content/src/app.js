(()=>{var By=Object.create;var t1=Object.defineProperty;var zy=Object.getOwnPropertyDescriptor;var Vy=Object.getOwnPropertyNames;var Hy=Object.getPrototypeOf,Gy=Object.prototype.hasOwnProperty;var bi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Wy=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Vy(e))!Gy.call(t,r)&&r!==n&&t1(t,r,{get:()=>e[r],enumerable:!(i=zy(e,r))||i.enumerable});return t};var vt=(t,e,n)=>(n=t!=null?By(Hy(t)):{},Wy(e||!t||!t.__esModule?t1(n,"default",{value:t,enumerable:!0}):n,t));var d1=bi(ke=>{"use strict";var Ro=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),qy=Symbol.for("react.fragment"),Yy=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),Zy=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),e_=Symbol.for("react.lazy"),n1=Symbol.iterator;function t_(t){return t===null||typeof t!="object"?null:(t=n1&&t[n1]||t["@@iterator"],typeof t=="function"?t:null)}var s1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o1=Object.assign,a1={};function ms(t,e,n){this.props=t,this.context=e,this.refs=a1,this.updater=n||s1}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l1(){}l1.prototype=ms.prototype;function qu(t,e,n){this.props=t,this.context=e,this.refs=a1,this.updater=n||s1}var Yu=qu.prototype=new l1;Yu.constructor=qu;o1(Yu,ms.prototype);Yu.isPureReactComponent=!0;var i1=Array.isArray,c1=Object.prototype.hasOwnProperty,$u={current:null},u1={key:!0,ref:!0,__self:!0,__source:!0};function h1(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c1.call(e,i)&&!u1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ro,type:t,key:s,ref:o,props:r,_owner:$u.current}}function n_(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function i_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var r1=/\/+/g;function Xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i_(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case Xy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xu(o,0):i,i1(r)?(n="",t!=null&&(n=t.replace(r1,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(Zu(r)&&(r=n_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(r1,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",i1(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xu(s,a);o+=el(s,e,n,l,r)}else if(l=t_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xu(s,a++),o+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function r_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},tl={transition:null},s_={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:tl,ReactCurrentOwner:$u};function f1(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Zu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=ms;ke.Fragment=qy;ke.Profiler=$y;ke.PureComponent=qu;ke.StrictMode=Yy;ke.Suspense=jy;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;ke.act=f1;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o1({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$u.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)c1.call(e,l)&&!u1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ro,type:t.type,key:r,ref:s,props:i,_owner:o}};ke.createContext=function(t){return t={$$typeof:Ky,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zy,_context:t},t.Consumer=t};ke.createElement=h1;ke.createFactory=function(t){var e=h1.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Jy,render:t}};ke.isValidElement=Zu;ke.lazy=function(t){return{$$typeof:e_,_payload:{_status:-1,_result:t},_init:r_}};ke.memo=function(t,e){return{$$typeof:Qy,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};ke.unstable_act=f1;ke.useCallback=function(t,e){return Jt.current.useCallback(t,e)};ke.useContext=function(t){return Jt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Jt.current.useEffect(t,e)};ke.useId=function(){return Jt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Jt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};ke.useRef=function(t){return Jt.current.useRef(t)};ke.useState=function(t){return Jt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Jt.current.useTransition()};ke.version="18.3.1"});var Zn=bi((oT,p1)=>{"use strict";p1.exports=d1()});var E1=bi(at=>{"use strict";function Qu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<nl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function Kn(t){return t.length===0?null:t[0]}function rl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>nl(a,n))l<r&&0>nl(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>nl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function nl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(m1=performance,at.unstable_now=function(){return m1.now()}):(Ku=Date,g1=Ku.now(),at.unstable_now=function(){return Ku.now()-g1});var m1,Ku,g1,pi=[],Qi=[],o_=1,kn=null,Gt=3,sl=!1,Fr=!1,Io=!1,_1=typeof setTimeout=="function"?setTimeout:null,x1=typeof clearTimeout=="function"?clearTimeout:null,v1=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function eh(t){for(var e=Kn(Qi);e!==null;){if(e.callback===null)rl(Qi);else if(e.startTime<=t)rl(Qi),e.sortIndex=e.expirationTime,Qu(pi,e);else break;e=Kn(Qi)}}function th(t){if(Io=!1,eh(t),!Fr)if(Kn(pi)!==null)Fr=!0,ih(nh);else{var e=Kn(Qi);e!==null&&rh(th,e.startTime-t)}}function nh(t,e){Fr=!1,Io&&(Io=!1,x1(Lo),Lo=-1),sl=!0;var n=Gt;try{for(eh(e),kn=Kn(pi);kn!==null&&(!(kn.expirationTime>e)||t&&!w1());){var i=kn.callback;if(typeof i=="function"){kn.callback=null,Gt=kn.priorityLevel;var r=i(kn.expirationTime<=e);e=at.unstable_now(),typeof r=="function"?kn.callback=r:kn===Kn(pi)&&rl(pi),eh(e)}else rl(pi);kn=Kn(pi)}if(kn!==null)var s=!0;else{var o=Kn(Qi);o!==null&&rh(th,o.startTime-e),s=!1}return s}finally{kn=null,Gt=n,sl=!1}}var ol=!1,il=null,Lo=-1,S1=5,M1=-1;function w1(){return!(at.unstable_now()-M1<S1)}function Ju(){if(il!==null){var t=at.unstable_now();M1=t;var e=!0;try{e=il(!0,t)}finally{e?Po():(ol=!1,il=null)}}else ol=!1}var Po;typeof v1=="function"?Po=function(){v1(Ju)}:typeof MessageChannel!="undefined"?(ju=new MessageChannel,y1=ju.port2,ju.port1.onmessage=Ju,Po=function(){y1.postMessage(null)}):Po=function(){_1(Ju,0)};var ju,y1;function ih(t){il=t,ol||(ol=!0,Po())}function rh(t,e){Lo=_1(function(){t(at.unstable_now())},e)}at.unstable_IdlePriority=5;at.unstable_ImmediatePriority=1;at.unstable_LowPriority=4;at.unstable_NormalPriority=3;at.unstable_Profiling=null;at.unstable_UserBlockingPriority=2;at.unstable_cancelCallback=function(t){t.callback=null};at.unstable_continueExecution=function(){Fr||sl||(Fr=!0,ih(nh))};at.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S1=0<t?Math.floor(1e3/t):5};at.unstable_getCurrentPriorityLevel=function(){return Gt};at.unstable_getFirstCallbackNode=function(){return Kn(pi)};at.unstable_next=function(t){switch(Gt){case 1:case 2:case 3:var e=3;break;default:e=Gt}var n=Gt;Gt=e;try{return t()}finally{Gt=n}};at.unstable_pauseExecution=function(){};at.unstable_requestPaint=function(){};at.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Gt;Gt=t;try{return e()}finally{Gt=n}};at.unstable_scheduleCallback=function(t,e,n){var i=at.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:o_++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Qu(Qi,t),Kn(pi)===null&&t===Kn(Qi)&&(Io?(x1(Lo),Lo=-1):Io=!0,rh(th,n-i))):(t.sortIndex=r,Qu(pi,t),Fr||sl||(Fr=!0,ih(nh))),t};at.unstable_shouldYield=w1;at.unstable_wrapCallback=function(t){var e=Gt;return function(){var n=Gt;Gt=e;try{return t.apply(this,arguments)}finally{Gt=n}}}});var A1=bi((lT,T1)=>{"use strict";T1.exports=E1()});var P2=bi(Rn=>{"use strict";var a_=Zn(),bn=A1();function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,ea={};function Zr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(ea[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var Ni=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),bh=Object.prototype.hasOwnProperty,l_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b1={},C1={};function c_(t){return bh.call(C1,t)?!0:bh.call(b1,t)?!1:l_.test(t)?C1[t]=!0:(b1[t]=!0,!1)}function u_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function h_(t,e,n,i){if(e===null||typeof e=="undefined"||u_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xf,Sf);Ht[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xf,Sf);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xf,Sf);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h_(e,n,r,i)&&(n=null),i||r===null?c_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),ys=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),tr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var F0=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var R1=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=R1&&t[R1]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,sh;function Vo(t){if(sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sh=e&&e[1]||""}return`
`+sh+t}var oh=!1;function ah(t,e){if(!t||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function f_(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=ah(t.type,!1),t;case 11:return t=ah(t.type.render,!1),t;case 1:return t=ah(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case ys:return"Portal";case Ch:return"Profiler";case wf:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U0:return(t.displayName||"Context")+".Consumer";case D0:return(t._context.displayName||"Context")+".Provider";case Ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function d_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p_(t){var e=O0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=p_(t))}function k0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=O0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lh(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function P1(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B0(t,e){e=e.checked,e!=null&&Mf(t,"checked",e,!1)}function Nh(t,e){B0(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dh(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function I1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dh(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(Ho(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function z0(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function N1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,H0=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m_=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){m_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function G0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function W0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=G0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var g_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oh(t,e){if(e){if(g_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zh=null,Is=null,Ls=null;function D1(t){if(t=_a(t)){if(typeof zh!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=uc(e),zh(t.stateNode,t.type,e))}}function X0(t){Is?Ls?Ls.push(t):Ls=[t]:Is=t}function q0(){if(Is){var t=Is,e=Ls;if(Ls=Is=null,D1(t),e)for(t=0;t<e.length;t++)D1(e[t])}}function Y0(t,e){return t(e)}function $0(){}var lh=!1;function Z0(t,e,n){if(lh)return t(e,n);lh=!0;try{return Y0(t,e,n)}finally{lh=!1,(Is!==null||Ls!==null)&&($0(),q0())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Vh=!1;if(Ni)try{gs={},Object.defineProperty(gs,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Vh=!1}var gs;function v_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var qo=!1,Ol=null,kl=!1,Hh=null,y_={onError:function(t){qo=!0,Ol=t}};function __(t,e,n,i,r,s,o,a,l){qo=!1,Ol=null,v_.apply(y_,arguments)}function x_(t,e,n,i,r,s,o,a,l){if(__.apply(this,arguments),qo){if(qo){var c=Ol;qo=!1,Ol=null}else throw Error(Q(198));kl||(kl=!0,Hh=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U1(t){if(Kr(t)!==t)throw Error(Q(188))}function S_(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return U1(r),t;if(s===i)return U1(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function J0(t){return t=S_(t),t!==null?j0(t):null}function j0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=j0(t);if(e!==null)return e;t=t.sibling}return null}var Q0=bn.unstable_scheduleCallback,F1=bn.unstable_cancelCallback,M_=bn.unstable_shouldYield,w_=bn.unstable_requestPaint,Tt=bn.unstable_now,E_=bn.unstable_getCurrentPriorityLevel,bf=bn.unstable_ImmediatePriority,eg=bn.unstable_UserBlockingPriority,Bl=bn.unstable_NormalPriority,T_=bn.unstable_LowPriority,tg=bn.unstable_IdlePriority,oc=null,yi=null;function A_(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(oc,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:R_,b_=Math.log,C_=Math.LN2;function R_(t){return t>>>=0,t===0?32:31-(b_(t)/C_|0)|0}var ul=64,hl=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=n&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function P_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=P_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ng(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function ch(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function L_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rg,Rf,sg,og,ag,Wh=!1,fl=[],ar=null,lr=null,cr=null,ia=new Map,ra=new Map,ir=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function O1(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function Do(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,n,i,r){switch(e){case"focusin":return ar=Do(ar,t,e,n,i,r),!0;case"dragenter":return lr=Do(lr,t,e,n,i,r),!0;case"mouseover":return cr=Do(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,Do(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,Do(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function lg(t){var e=Br(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=K0(n),e!==null){t.blockedOn=e,ag(t.priority,function(){sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bh=i,n.target.dispatchEvent(i),Bh=null}else return e=_a(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function k1(t,e,n){Al(t)&&n.delete(e)}function U_(){Wh=!1,ar!==null&&Al(ar)&&(ar=null),lr!==null&&Al(lr)&&(lr=null),cr!==null&&Al(cr)&&(cr=null),ia.forEach(k1),ra.forEach(k1)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,U_)))}function sa(t){function e(r){return Uo(r,t)}if(0<fl.length){Uo(fl[0],t);for(var n=1;n<fl.length;n++){var i=fl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&Uo(ar,t),lr!==null&&Uo(lr,t),cr!==null&&Uo(cr,t),ia.forEach(e),ra.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&ir.shift()}var Ns=Oi.ReactCurrentBatchConfig,Vl=!0;function F_(t,e,n,i){var r=tt,s=Ns.transition;Ns.transition=null;try{tt=1,Pf(t,e,n,i)}finally{tt=r,Ns.transition=s}}function O_(t,e,n,i){var r=tt,s=Ns.transition;Ns.transition=null;try{tt=4,Pf(t,e,n,i)}finally{tt=r,Ns.transition=s}}function Pf(t,e,n,i){if(Vl){var r=Xh(t,e,n,i);if(r===null)gh(t,e,i,Hl,n),O1(t,i);else if(D_(r,t,e,n,i))i.stopPropagation();else if(O1(t,i),e&4&&-1<N_.indexOf(t)){for(;r!==null;){var s=_a(r);if(s!==null&&rg(s),s=Xh(t,e,n,i),s===null&&gh(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gh(t,e,i,null,n)}}var Hl=null;function Xh(t,e,n,i){if(Hl=null,t=Af(i),t=Br(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E_()){case bf:return 1;case eg:return 4;case Bl:case T_:return 16;case tg:return 536870912;default:return 16}default:return 16}}var sr=null,If=null,bl=null;function ug(){if(bl)return bl;var t,e=If,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return bl=r.slice(t,1<i?1-i:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function B1(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dl:B1,this.isPropagationStopped=B1,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Cn(Gs),ya=xt({},Gs,{view:0,detail:0}),k_=Cn(ya),uh,hh,Fo,ac=xt({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(uh=t.screenX-Fo.screenX,hh=t.screenY-Fo.screenY):hh=uh=0,Fo=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:hh}}),z1=Cn(ac),B_=xt({},ac,{dataTransfer:0}),z_=Cn(B_),V_=xt({},ya,{relatedTarget:0}),fh=Cn(V_),H_=xt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=Cn(H_),W_=xt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X_=Cn(W_),q_=xt({},Gs,{data:0}),V1=Cn(q_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z_[t])?!!e[t]:!1}function Nf(){return K_}var J_=xt({},ya,{key:function(t){if(t.key){var e=Y_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j_=Cn(J_),Q_=xt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),H1=Cn(Q_),e3=xt({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),t3=Cn(e3),n3=xt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),i3=Cn(n3),r3=xt({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s3=Cn(r3),o3=[9,13,27,32],Df=Ni&&"CompositionEvent"in window,Yo=null;Ni&&"documentMode"in document&&(Yo=document.documentMode);var a3=Ni&&"TextEvent"in window&&!Yo,hg=Ni&&(!Df||Yo&&8<Yo&&11>=Yo),G1=" ",W1=!1;function fg(t,e){switch(t){case"keyup":return o3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function l3(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(W1=!0,G1);case"textInput":return t=e.data,t===G1&&W1?null:t;default:return null}}function c3(t,e){if(xs)return t==="compositionend"||!Df&&fg(t,e)?(t=ug(),bl=If=sr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var u3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u3[t.type]:e==="textarea"}function pg(t,e,n,i){X0(i),e=Gl(e,"onChange"),0<e.length&&(n=new Lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,oa=null;function h3(t){Tg(t,0)}function lc(t){var e=ws(t);if(k0(e))return t}function f3(t,e){if(t==="change")return e}var mg=!1;Ni&&(Ni?(ml="oninput"in document,ml||(dh=document.createElement("div"),dh.setAttribute("oninput","return;"),ml=typeof dh.oninput=="function"),pl=ml):pl=!1,mg=pl&&(!document.documentMode||9<document.documentMode));var pl,ml,dh;function q1(){$o&&($o.detachEvent("onpropertychange",gg),oa=$o=null)}function gg(t){if(t.propertyName==="value"&&lc(oa)){var e=[];pg(e,oa,t,Af(t)),Z0(h3,e)}}function d3(t,e,n){t==="focusin"?(q1(),$o=e,oa=n,$o.attachEvent("onpropertychange",gg)):t==="focusout"&&q1()}function p3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(oa)}function m3(t,e){if(t==="click")return lc(e)}function g3(t,e){if(t==="input"||t==="change")return lc(e)}function v3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:v3;function aa(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bh.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function Y1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $1(t,e){var n=Y1(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y1(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y3(t){var e=yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(i!==null&&Uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$1(n,s);var o=$1(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _3=Ni&&"documentMode"in document&&11>=document.documentMode,Ss=null,qh=null,Zo=null,Yh=!1;function Z1(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yh||Ss==null||Ss!==Fl(i)||(i=Ss,"selectionStart"in i&&Uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zo&&aa(Zo,i)||(Zo=i,i=Gl(qh,"onSelect"),0<i.length&&(e=new Lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},ph={},_g={};Ni&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function cc(t){if(ph[t])return ph[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _g)return ph[t]=e[n];return t}var xg=cc("animationend"),Sg=cc("animationiteration"),Mg=cc("animationstart"),wg=cc("transitionend"),Eg=new Map,K1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Eg.set(t,e),Zr(e,[t])}for(vl=0;vl<K1.length;vl++)yl=K1[vl],J1=yl.toLowerCase(),j1=yl[0].toUpperCase()+yl.slice(1),vr(J1,"on"+j1);var yl,J1,j1,vl;vr(xg,"onAnimationEnd");vr(Sg,"onAnimationIteration");vr(Mg,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(wg,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function Q1(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,x_(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Q1(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Q1(r,a,c),s=l}}}if(kl)throw t=Hh,kl=!1,Hh=null,t}function ht(t,e){var n=e[jh];n===void 0&&(n=e[jh]=new Set);var i=t+"__bubble";n.has(i)||(Ag(e,t,2,!1),n.add(i))}function mh(t,e,n){var i=0;e&&(i|=4),Ag(n,t,i,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[_l]){t[_l]=!0,N0.forEach(function(n){n!=="selectionchange"&&(x3.has(n)||mh(n,!1,t),mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,mh("selectionchange",!1,e))}}function Ag(t,e,n,i){switch(cg(e)){case 1:var r=F_;break;case 4:r=O_;break;default:r=Pf}n=r.bind(null,e,n,t),r=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gh(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Z0(function(){var c=s,u=Af(n),h=[];e:{var f=Eg.get(t);if(f!==void 0){var m=Lf,v=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":m=j_;break;case"focusin":v="focus",m=fh;break;case"focusout":v="blur",m=fh;break;case"beforeblur":case"afterblur":m=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=z1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=t3;break;case xg:case Sg:case Mg:m=G_;break;case wg:m=i3;break;case"scroll":m=k_;break;case"wheel":m=s3;break;case"copy":case"cut":case"paste":m=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=H1}var _=(e&4)!==0,y=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var p=c,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=na(p,d),S!=null&&_.push(ca(p,S,g)))),y)break;p=p.return}0<_.length&&(f=new m(f,v,null,n,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Bh&&(v=n.relatedTarget||n.fromElement)&&(Br(v)||v[Di]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Br(v):null,v!==null&&(y=Kr(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(_=z1,S="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=H1,S="onPointerLeave",d="onPointerEnter",p="pointer"),y=m==null?f:ws(m),g=v==null?f:ws(v),f=new _(S,p+"leave",m,n,u),f.target=y,f.relatedTarget=g,S=null,Br(u)===c&&(_=new _(d,p+"enter",v,n,u),_.target=g,_.relatedTarget=y,S=_),y=S,m&&v)t:{for(_=m,d=v,p=0,g=_;g;g=vs(g))p++;for(g=0,S=d;S;S=vs(S))g++;for(;0<p-g;)_=vs(_),p--;for(;0<g-p;)d=vs(d),g--;for(;p--;){if(_===d||d!==null&&_===d.alternate)break t;_=vs(_),d=vs(d)}_=null}else _=null;m!==null&&e0(h,f,m,_,!1),v!==null&&y!==null&&e0(h,y,v,_,!0)}}e:{if(f=c?ws(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=f3;else if(X1(f))if(mg)b=g3;else{b=p3;var A=d3}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=m3);if(b&&(b=b(t,c))){pg(h,b,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Dh(f,"number",f.value)}switch(A=c?ws(c):window,t){case"focusin":(X1(A)||A.contentEditable==="true")&&(Ss=A,qh=c,Zo=null);break;case"focusout":Zo=qh=Ss=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Z1(h,n,u);break;case"selectionchange":if(_3)break;case"keydown":case"keyup":Z1(h,n,u)}var T;if(Df)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else xs?fg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(hg&&n.locale!=="ko"&&(xs||R!=="onCompositionStart"?R==="onCompositionEnd"&&xs&&(T=ug()):(sr=u,If="value"in sr?sr.value:sr.textContent,xs=!0)),A=Gl(c,R),0<A.length&&(R=new V1(R,t,null,n,u),h.push({event:R,listeners:A}),T?R.data=T:(T=dg(n),T!==null&&(R.data=T)))),(T=a3?l3(t,n):c3(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(u=new V1("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=T))}Tg(h,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ca(t,s,r)),s=na(t,e),s!=null&&i.push(ca(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function e0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=na(n,s),l!=null&&o.unshift(ca(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S3=/\r\n?/g,M3=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(S3,`
`).replace(M3,"")}function xl(t,e,n){if(e=t0(e),t0(t)!==e&&n)throw Error(Q(425))}function Wl(){}var $h=null,Zh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,w3=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,E3=typeof queueMicrotask=="function"?queueMicrotask:typeof n0!="undefined"?function(t){return n0.resolve(null).then(t).catch(T3)}:Jh;function T3(t){setTimeout(function(){throw t})}function vh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),vi="__reactFiber$"+Ws,ua="__reactProps$"+Ws,Di="__reactContainer$"+Ws,jh="__reactEvents$"+Ws,A3="__reactListeners$"+Ws,b3="__reactHandles$"+Ws;function Br(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i0(t);t!==null;){if(n=t[vi])return n;t=i0(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[vi]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function uc(t){return t[ua]||null}var Qh=[],Es=-1;function yr(t){return{current:t}}function ft(t){0>Es||(t.current=Qh[Es],Qh[Es]=null,Es--)}function lt(t,e){Es++,Qh[Es]=t.current,t.current=e}var gr={},Yt=yr(gr),hn=yr(!1),Wr=gr;function Os(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Xl(){ft(hn),ft(Yt)}function r0(t,e,n){if(Yt.current!==gr)throw Error(Q(168));lt(Yt,e),lt(hn,n)}function bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,d_(t)||"Unknown",r));return xt({},n,i)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Wr=Yt.current,lt(Yt,t),lt(hn,hn.current),!0}function s0(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=bg(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,ft(hn),ft(Yt),lt(Yt,t)):ft(hn),lt(hn,n)}var Ri=null,hc=!1,yh=!1;function Cg(t){Ri===null?Ri=[t]:Ri.push(t)}function C3(t){hc=!0,Cg(t)}function _r(){if(!yh&&Ri!==null){yh=!0;var t=0,e=tt;try{var n=Ri;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,hc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),Q0(bf,_r),r}finally{tt=e,yh=!1}}return null}var Ts=[],As=0,Yl=null,$l=0,Bn=[],zn=0,Xr=null,Pi=1,Ii="";function Or(t,e){Ts[As++]=$l,Ts[As++]=Yl,Yl=t,$l=e}function Rg(t,e,n){Bn[zn++]=Pi,Bn[zn++]=Ii,Bn[zn++]=Xr,Xr=t;var i=Pi;t=Ii;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pi=1<<32-ti(e)+r|n<<r|i,Ii=s+t}else Pi=1<<s|n<<r|i,Ii=t}function Ff(t){t.return!==null&&(Or(t,1),Rg(t,1,0))}function Of(t){for(;t===Yl;)Yl=Ts[--As],Ts[As]=null,$l=Ts[--As],Ts[As]=null;for(;t===Xr;)Xr=Bn[--zn],Bn[zn]=null,Ii=Bn[--zn],Bn[zn]=null,Pi=Bn[--zn],Bn[zn]=null}var An=null,Tn=null,mt=!1,ei=null;function Pg(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function o0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Pi,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(mt){var e=Tn;if(e){var n=e;if(!o0(t,e)){if(ef(t))throw Error(Q(418));e=ur(n.nextSibling);var i=An;e&&o0(t,e)?Pg(i,n):(t.flags=t.flags&-4097|2,mt=!1,An=t)}}else{if(ef(t))throw Error(Q(418));t.flags=t.flags&-4097|2,mt=!1,An=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function Sl(t){if(t!==An)return!1;if(!mt)return a0(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=Tn)){if(ef(t))throw Ig(),Error(Q(418));for(;e;)Pg(t,e),e=ur(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?ur(t.stateNode.nextSibling):null;return!0}function Ig(){for(var t=Tn;t;)t=ur(t.nextSibling)}function ks(){Tn=An=null,mt=!1}function kf(t){ei===null?ei=[t]:ei.push(t)}var R3=Oi.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function Lg(t){function e(d,p){if(t){var g=d.deletions;g===null?(d.deletions=[p],d.flags|=16):g.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=pr(d,p),d.index=0,d.sibling=null,d}function s(d,p,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<p?(d.flags|=2,p):g):(d.flags|=2,p)):(d.flags|=1048576,p)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,p,g,S){return p===null||p.tag!==6?(p=Th(g,d.mode,S),p.return=d,p):(p=r(p,g),p.return=d,p)}function l(d,p,g,S){var b=g.type;return b===_s?u(d,p,g.props.children,S,g.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&l0(b)===p.type)?(S=r(p,g.props),S.ref=Oo(d,p,g),S.return=d,S):(S=Ul(g.type,g.key,g.props,null,d.mode,S),S.ref=Oo(d,p,g),S.return=d,S)}function c(d,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ah(g,d.mode,S),p.return=d,p):(p=r(p,g.children||[]),p.return=d,p)}function u(d,p,g,S,b){return p===null||p.tag!==7?(p=Gr(g,d.mode,S,b),p.return=d,p):(p=r(p,g),p.return=d,p)}function h(d,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Th(""+p,d.mode,g),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case al:return g=Ul(p.type,p.key,p.props,null,d.mode,g),g.ref=Oo(d,null,p),g.return=d,g;case ys:return p=Ah(p,d.mode,g),p.return=d,p;case tr:var S=p._init;return h(d,S(p._payload),g)}if(Ho(p)||No(p))return p=Gr(p,d.mode,g,null),p.return=d,p;Ml(d,p)}return null}function f(d,p,g,S){var b=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(d,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case al:return g.key===b?l(d,p,g,S):null;case ys:return g.key===b?c(d,p,g,S):null;case tr:return b=g._init,f(d,p,b(g._payload),S)}if(Ho(g)||No(g))return b!==null?null:u(d,p,g,S,null);Ml(d,g)}return null}function m(d,p,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(p,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case al:return d=d.get(S.key===null?g:S.key)||null,l(p,d,S,b);case ys:return d=d.get(S.key===null?g:S.key)||null,c(p,d,S,b);case tr:var A=S._init;return m(d,p,g,A(S._payload),b)}if(Ho(S)||No(S))return d=d.get(g)||null,u(p,d,S,b,null);Ml(p,S)}return null}function v(d,p,g,S){for(var b=null,A=null,T=p,R=p=0,H=null;T!==null&&R<g.length;R++){T.index>R?(H=T,T=null):H=T.sibling;var x=f(d,T,g[R],S);if(x===null){T===null&&(T=H);break}t&&T&&x.alternate===null&&e(d,T),p=s(x,p,R),A===null?b=x:A.sibling=x,A=x,T=H}if(R===g.length)return n(d,T),mt&&Or(d,R),b;if(T===null){for(;R<g.length;R++)T=h(d,g[R],S),T!==null&&(p=s(T,p,R),A===null?b=T:A.sibling=T,A=T);return mt&&Or(d,R),b}for(T=i(d,T);R<g.length;R++)H=m(T,d,R,g[R],S),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?R:H.key),p=s(H,p,R),A===null?b=H:A.sibling=H,A=H);return t&&T.forEach(function(w){return e(d,w)}),mt&&Or(d,R),b}function _(d,p,g,S){var b=No(g);if(typeof b!="function")throw Error(Q(150));if(g=b.call(g),g==null)throw Error(Q(151));for(var A=b=null,T=p,R=p=0,H=null,x=g.next();T!==null&&!x.done;R++,x=g.next()){T.index>R?(H=T,T=null):H=T.sibling;var w=f(d,T,x.value,S);if(w===null){T===null&&(T=H);break}t&&T&&w.alternate===null&&e(d,T),p=s(w,p,R),A===null?b=w:A.sibling=w,A=w,T=H}if(x.done)return n(d,T),mt&&Or(d,R),b;if(T===null){for(;!x.done;R++,x=g.next())x=h(d,x.value,S),x!==null&&(p=s(x,p,R),A===null?b=x:A.sibling=x,A=x);return mt&&Or(d,R),b}for(T=i(d,T);!x.done;R++,x=g.next())x=m(T,d,R,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?R:x.key),p=s(x,p,R),A===null?b=x:A.sibling=x,A=x);return t&&T.forEach(function(k){return e(d,k)}),mt&&Or(d,R),b}function y(d,p,g,S){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case al:e:{for(var b=g.key,A=p;A!==null;){if(A.key===b){if(b=g.type,b===_s){if(A.tag===7){n(d,A.sibling),p=r(A,g.props.children),p.return=d,d=p;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tr&&l0(b)===A.type){n(d,A.sibling),p=r(A,g.props),p.ref=Oo(d,A,g),p.return=d,d=p;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===_s?(p=Gr(g.props.children,d.mode,S,g.key),p.return=d,d=p):(S=Ul(g.type,g.key,g.props,null,d.mode,S),S.ref=Oo(d,p,g),S.return=d,d=S)}return o(d);case ys:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(d,p.sibling),p=r(p,g.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=Ah(g,d.mode,S),p.return=d,d=p}return o(d);case tr:return A=g._init,y(d,p,A(g._payload),S)}if(Ho(g))return v(d,p,g,S);if(No(g))return _(d,p,g,S);Ml(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,g),p.return=d,d=p):(n(d,p),p=Th(g,d.mode,S),p.return=d,d=p),o(d)):n(d,p)}return y}var Bs=Lg(!0),Ng=Lg(!1),Zl=yr(null),Kl=null,bs=null,Bf=null;function zf(){Bf=bs=Kl=null}function Vf(t){var e=Zl.current;ft(Zl),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Kl=t,Bf=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Kl===null)throw Error(Q(308));bs=t,Kl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var zr=null;function Hf(t){zr===null?zr=[t]:zr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}function c0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jl(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=xt({},h,f);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=h}}function u0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var xa={},_i=yr(xa),ha=yr(xa),fa=yr(xa);function Vr(t){if(t===xa)throw Error(Q(174));return t}function Wf(t,e){switch(lt(fa,e),lt(ha,t),lt(_i,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fh(e,t)}ft(_i),lt(_i,e)}function zs(){ft(_i),ft(ha),ft(fa)}function Fg(t){Vr(fa.current);var e=Vr(_i.current),n=Fh(e,t.type);e!==n&&(lt(ha,t),lt(_i,n))}function Xf(t){ha.current===t&&(ft(_i),ft(ha))}var yt=yr(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _h=[];function qf(){for(var t=0;t<_h.length;t++)_h[t]._workInProgressVersionPrimary=null;_h.length=0}var Pl=Oi.ReactCurrentDispatcher,xh=Oi.ReactCurrentBatchConfig,qr=0,_t=null,Pt=null,Ut=null,Ql=!1,Ko=!1,da=0,P3=0;function Wt(){throw Error(Q(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if(qr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?D3:U3,t=n(i,r),Ko){s=0;do{if(Ko=!1,da=0,25<=s)throw Error(Q(301));s+=1,Ut=Pt=null,e.updateQueue=null,Pl.current=F3,t=n(i,r)}while(Ko)}if(Pl.current=ec,e=Pt!==null&&Pt.next!==null,qr=0,Ut=Pt=_t=null,Ql=!1,e)throw Error(Q(300));return t}function Zf(){var t=da!==0;return da=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Wn(){if(Pt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Pt=t;else{if(t===null)throw Error(Q(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function pa(t,e){return typeof e=="function"?e(t):e}function Sh(t){var e=Wn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,_t.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mh(t){var e=Wn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Og(){}function kg(t,e){var n=_t,i=Wn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Kf(Vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ma(9,zg.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(Q(349));qr&30||Bg(n,e,r)}return r}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Gg(t)}function Vg(t,e,n){return n(function(){Hg(e)&&Gg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function Gg(t){var e=Ui(t,1);e!==null&&ni(e,t,1,-1)}function h0(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=N3.bind(null,_t,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wg(){return Wn().memoizedState}function Il(t,e,n,i){var r=gi();_t.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Yf(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function f0(t,e){return Il(8390656,8,t,e)}function Kf(t,e){return fc(2048,8,t,e)}function Xg(t,e){return fc(4,2,t,e)}function qg(t,e){return fc(4,4,t,e)}function Yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,Yg.bind(null,e,t),n)}function Jf(){}function Zg(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kg(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return qr&21?(ii(n,e)||(n=ng(),_t.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function I3(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=xh.transition;xh.transition={};try{t(!1),e()}finally{tt=n,xh.transition=i}}function jg(){return Wn().memoizedState}function L3(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))e2(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=Qt();ni(n,t,i,r),t2(n,e,i)}}function N3(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))e2(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,Hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=Qt(),ni(n,t,i,r),t2(n,e,i))}}function Qg(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function e2(t,e){Ko=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t2(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Cf(t,n)}}var ec={readContext:Gn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},D3={readContext:Gn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:f0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,Yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L3.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:h0,useDebugValue:Jf,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=h0(!1),e=t[0];return t=I3.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=gi();if(mt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),Ft===null)throw Error(Q(349));qr&30||Bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,f0(Vg.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,zg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=Ft.identifierPrefix;if(mt){var n=Ii,i=Pi;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U3={readContext:Gn,useCallback:Zg,useContext:Gn,useEffect:Kf,useImperativeHandle:$g,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Kg,useReducer:Sh,useRef:Wg,useState:function(){return Sh(pa)},useDebugValue:Jf,useDeferredValue:function(t){var e=Wn();return Jg(e,Pt.memoizedState,t)},useTransition:function(){var t=Sh(pa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1},F3={readContext:Gn,useCallback:Zg,useContext:Gn,useEffect:Kf,useImperativeHandle:$g,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Kg,useReducer:Mh,useRef:Wg,useState:function(){return Mh(pa)},useDebugValue:Jf,useDeferredValue:function(t){var e=Wn();return Pt===null?e.memoizedState=t:Jg(e,Pt.memoizedState,t)},useTransition:function(){var t=Mh(pa)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=dr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(ni(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=dr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(ni(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=dr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(ni(e,t,i,n),Rl(e,t,i))}};function d0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function n2(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=fn(e)?Wr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function p0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dc.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=fn(e)?Wr:Yt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&dc.enqueueReplaceState(r,r.state,null),Jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=f_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var O3=typeof WeakMap=="function"?WeakMap:Map;function i2(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,gf=i),of(t,e)},n}function r2(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function m0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new O3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=J3.bind(null,t,e,n),e.then(t,t))}function g0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var k3=Oi.ReactCurrentOwner,un=!1;function jt(t,e,n,i){e.child=t===null?Ng(e,null,n,i):Bs(e,t.child,n,i)}function y0(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=$f(t,e,n,i,s,r),n=Zf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(mt&&n&&Ff(e),e.flags|=1,jt(t,e,i,r),e.child)}function _0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s2(t,e,s,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function s2(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return af(t,e,n,i,r)}function o2(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Rs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Rs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Rs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Rs,En),En|=i;return jt(t,e,r,n),e.child}function a2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=fn(n)?Wr:Yt.current;return s=Os(e,s),Ds(e,r),n=$f(t,e,n,i,s,r),i=Zf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(mt&&i&&Ff(e),e.flags|=1,jt(t,e,n,r),e.child)}function x0(t,e,n,i,r){if(fn(n)){var s=!0;ql(e)}else s=!1;if(Ds(e,r),e.stateNode===null)Ll(t,e),n2(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=fn(n)?Wr:Yt.current,c=Os(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&p0(e,o,i,c),nr=!1;var f=e.memoizedState;o.state=f,Jl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||hn.current||nr?(typeof u=="function"&&(rf(e,n,u,i),l=e.memoizedState),(a=nr||d0(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ug(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=fn(n)?Wr:Yt.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&p0(e,o,i,l),nr=!1,f=e.memoizedState,o.state=f,Jl(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||hn.current||nr?(typeof m=="function"&&(rf(e,n,m,i),v=e.memoizedState),(c=nr||d0(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){a2(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&s0(e,n,!1),Fi(t,e,s);i=e.stateNode,k3.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&s0(e,n,!0),e.child}function l2(t){var e=t.stateNode;e.pendingContext?r0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&r0(t,e.context,!1),Wf(t,e.containerInfo)}function S0(t,e,n,i,r){return ks(),kf(r),e.flags|=256,jt(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function c2(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(yt,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):jf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return B3(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jf(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,i){return i!==null&&kf(i),Bs(e,t.child,null,n),t=jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B3(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wh(Error(Q(422))),wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=cf,s);if(!(e.mode&1))return wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=wh(s,i,void 0),wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ni(i,t,r,-1))}return rd(),i=wh(Error(Q(421))),wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=j3.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=ur(r.nextSibling),An=e,mt=!0,ei=null,t!==null&&(Bn[zn++]=Pi,Bn[zn++]=Ii,Bn[zn++]=Xr,Pi=t.id,Ii=t.overflow,Xr=e),e=jf(e,i.children),e.flags|=4096,e)}function M0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function Eh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function u2(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,n,e);else if(t.tag===19)M0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eh(e,!0,n,null,s);break;case"together":Eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z3(t,e,n){switch(e.tag){case 3:l2(e),ks();break;case 5:Fg(e);break;case 1:fn(e.type)&&ql(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?c2(t,e,n):(lt(yt,yt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);lt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return u2(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,o2(t,e,n)}return Fi(t,e,n)}var h2,hf,f2,d2;h2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hf=function(){};f2=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Vr(_i.current);var s=null;switch(n){case"input":r=Lh(t,r),i=Lh(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Uh(t,r),i=Uh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}Oh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d2=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V3(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&Xl(),Xt(e),null;case 3:return i=e.stateNode,zs(),ft(hn),ft(Yt),qf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(_f(ei),ei=null))),hf(t,e),Xt(e),null;case 5:Xf(e);var r=Vr(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)f2(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Xt(e),null}if(t=Vr(_i.current),Sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)ht(Wo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":P1(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":L1(i,s),ht("invalid",i)}Oh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xl(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":ll(i),I1(i,s,!0);break;case"textarea":ll(i),N1(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[ua]=i,h2(t,e,!1,!1),e.stateNode=t;e:{switch(o=kh(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)ht(Wo[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":P1(t,i),r=Lh(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":L1(t,i),r=Uh(t,i),ht("invalid",t);break;default:r=i}Oh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?W0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&Mf(t,s,l,o))}switch(n){case"input":ll(t),I1(t,i,!1);break;case"textarea":ll(t),N1(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)d2(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=Vr(fa.current),Vr(_i.current),Sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:xl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return Xt(e),null;case 13:if(ft(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Tn!==null&&e.mode&1&&!(e.flags&128))Ig(),ks(),e.flags|=98560,s=!1;else if(s=Sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[vi]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else ei!==null&&(_f(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?It===0&&(It=3):rd())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return zs(),hf(t,e),t===null&&la(e.stateNode.containerInfo),Xt(e),null;case 10:return Vf(e.type._context),Xt(e),null;case 17:return fn(e.type)&&Xl(),Xt(e),null;case 19:if(ft(yt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ko(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Hs&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Xt(e),null}else 2*Tt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=yt.current,lt(yt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function H3(t,e){switch(Of(e),e.tag){case 1:return fn(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ft(hn),ft(Yt),qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(ft(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(yt),null;case 4:return zs(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var El=!1,qt=!1,G3=typeof WeakSet=="function"?WeakSet:Set,de=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function ff(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var w0=!1;function W3(t,e){if($h=Vl,t=yg(),Uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zh={focusedElem:t,selectionRange:n},Vl=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,y=v.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:jn(e.type,_),y);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return v=w0,w0=!1,v}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ff(e,n,s)}r=r.next}while(r!==i)}}function pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p2(t){var e=t.alternate;e!==null&&(t.alternate=null,p2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[ua],delete e[jh],delete e[A3],delete e[b3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m2(t){return t.tag===5||t.tag===3||t.tag===4}function E0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var zt=null,Qn=!1;function er(t,e,n){for(n=n.child;n!==null;)g2(t,e,n),n=n.sibling}function g2(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:qt||Cs(n,e);case 6:var i=zt,r=Qn;zt=null,er(t,e,n),zt=i,Qn=r,zt!==null&&(Qn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Qn?(t=zt,n=n.stateNode,t.nodeType===8?vh(t.parentNode,n):t.nodeType===1&&vh(t,n),sa(t)):vh(zt,n.stateNode));break;case 4:i=zt,r=Qn,zt=n.stateNode.containerInfo,Qn=!0,er(t,e,n),zt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ff(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!qt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,er(t,e,n),qt=i):er(t,e,n);break;default:er(t,e,n)}}function T0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G3),e.forEach(function(i){var r=Q3.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Qn=!1;break e;case 3:zt=a.stateNode.containerInfo,Qn=!0;break e;case 4:zt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(zt===null)throw Error(Q(160));g2(s,o,r),zt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)v2(e,t),e=e.sibling}function v2(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),mi(t),i&4){try{Jo(3,t,t.return),pc(3,t)}catch(_){Mt(t,t.return,_)}try{Jo(5,t,t.return)}catch(_){Mt(t,t.return,_)}}break;case 1:Jn(e,t),mi(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Jn(e,t),mi(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(_){Mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B0(r,s),kh(a,o);var c=kh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?W0(r,h):u==="dangerouslySetInnerHTML"?H0(r,h):u==="children"?ta(r,h):Mf(r,u,h,c)}switch(a){case"input":Nh(r,s);break;case"textarea":z0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(_){Mt(t,t.return,_)}}break;case 6:if(Jn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Mt(t,t.return,_)}}break;case 3:if(Jn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(_){Mt(t,t.return,_)}break;case 4:Jn(e,t),mi(t);break;case 13:Jn(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(td=Tt())),i&4&&T0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,Jn(e,t),qt=c):Jn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(h=de=u;de!==null;){switch(f=de,m=f.child,f.tag){case 0:case 11:case 14:case 15:Jo(4,f,f.return);break;case 1:Cs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Mt(i,n,_)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){b0(h);continue}}m!==null?(m.return=f,de=m):b0(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=G0("display",o))}catch(_){Mt(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Mt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Jn(e,t),mi(t),i&4&&T0(t);break;case 21:break;default:Jn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m2(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=E0(t);mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=E0(t);pf(t,a,o);break;default:throw Error(Q(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function X3(t,e,n){de=t,y2(t,e,n)}function y2(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||El;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=El;var c=qt;if(El=o,(qt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?C0(r):l!==null?(l.return=o,de=l):C0(r);for(;s!==null;)de=s,y2(s,e,n),s=s.sibling;de=r,El=a,qt=c}A0(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):A0(t,e,n)}}function A0(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&u0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}u0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}qt||e.flags&512&&df(e)}catch(f){Mt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function b0(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function C0(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{df(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{df(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var q3=Math.ceil,tc=Oi.ReactCurrentDispatcher,Qf=Oi.ReactCurrentOwner,Hn=Oi.ReactCurrentBatchConfig,Ye=0,Ft=null,Ct=null,Vt=0,En=0,Rs=yr(0),It=0,ga=null,Yr=0,mc=0,ed=0,jo=null,cn=null,td=0,Hs=1/0,Ci=null,nc=!1,gf=null,fr=null,Tl=!1,or=null,ic=0,Qo=0,vf=null,Nl=-1,Dl=0;function Qt(){return Ye&6?Tt():Nl!==-1?Nl:Nl=Tt()}function dr(t){return t.mode&1?Ye&2&&Vt!==0?Vt&-Vt:R3.transition!==null?(Dl===0&&(Dl=ng()),Dl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:cg(t.type)),t):1}function ni(t,e,n,i){if(50<Qo)throw Qo=0,vf=null,Error(Q(185));va(t,n,i),(!(Ye&2)||t!==Ft)&&(t===Ft&&(!(Ye&2)&&(mc|=n),It===4&&rr(t,Vt)),dn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Hs=Tt()+500,hc&&_r()))}function dn(t,e){var n=t.callbackNode;I_(t,e);var i=zl(t,t===Ft?Vt:0);if(i===0)n!==null&&F1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&F1(n),e===1)t.tag===0?C3(R0.bind(null,t)):Cg(R0.bind(null,t)),E3(function(){!(Ye&6)&&_r()}),n=null;else{switch(ig(i)){case 1:n=bf;break;case 4:n=eg;break;case 16:n=Bl;break;case 536870912:n=tg;break;default:n=Bl}n=A2(n,_2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _2(t,e){if(Nl=-1,Dl=0,Ye&6)throw Error(Q(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=zl(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Ye;Ye|=2;var s=S2();(Ft!==t||Vt!==e)&&(Ci=null,Hs=Tt()+500,Hr(t,e));do try{Z3();break}catch(a){x2(t,a)}while(!0);zf(),tc.current=s,Ye=r,Ct!==null?e=0:(Ft=null,Vt=0,e=It)}if(e!==0){if(e===2&&(r=Gh(t),r!==0&&(i=r,e=yf(t,r))),e===1)throw n=ga,Hr(t,0),rr(t,i),dn(t,Tt()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y3(r)&&(e=rc(t,i),e===2&&(s=Gh(t),s!==0&&(i=s,e=yf(t,s))),e===1))throw n=ga,Hr(t,0),rr(t,i),dn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:kr(t,cn,Ci);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=td+500-Tt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jh(kr.bind(null,t,cn,Ci),e);break}kr(t,cn,Ci);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*q3(i/1960))-i,10<i){t.timeoutHandle=Jh(kr.bind(null,t,cn,Ci),i);break}kr(t,cn,Ci);break;case 5:kr(t,cn,Ci);break;default:throw Error(Q(329))}}}return dn(t,Tt()),t.callbackNode===n?_2.bind(null,t):null}function yf(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=rc(t,e),t!==2&&(e=cn,cn=n,e!==null&&_f(e)),t}function _f(t){cn===null?cn=t:cn.push.apply(cn,t)}function Y3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~ed,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function R0(t){if(Ye&6)throw Error(Q(327));Us();var e=zl(t,0);if(!(e&1))return dn(t,Tt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=Gh(t);i!==0&&(e=i,n=yf(t,i))}if(n===1)throw n=ga,Hr(t,0),rr(t,e),dn(t,Tt()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,cn,Ci),dn(t,Tt()),null}function nd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Hs=Tt()+500,hc&&_r())}}function $r(t){or!==null&&or.tag===0&&!(Ye&6)&&Us();var e=Ye;Ye|=1;var n=Hn.transition,i=tt;try{if(Hn.transition=null,tt=1,t)return t()}finally{tt=i,Hn.transition=n,Ye=e,!(Ye&6)&&_r()}}function id(){En=Rs.current,ft(Rs)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,w3(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xl();break;case 3:zs(),ft(hn),ft(Yt),qf();break;case 5:Xf(i);break;case 4:zs();break;case 13:ft(yt);break;case 19:ft(yt);break;case 10:Vf(i.type._context);break;case 22:case 23:id()}n=n.return}if(Ft=t,Ct=t=pr(t.current,null),Vt=En=e,It=0,ga=null,ed=mc=Yr=0,cn=jo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function x2(t,e){do{var n=Ct;try{if(zf(),Pl.current=ec,Ql){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(qr=0,Ut=Pt=_t=null,Ko=!1,da=0,Qf.current=null,n===null||n.return===null){It=1,ga=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=g0(o);if(m!==null){m.flags&=-257,v0(m,o,a,s,e),m.mode&1&&m0(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){m0(s,c,e),rd();break e}l=Error(Q(426))}}else if(mt&&a.mode&1){var y=g0(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),v0(y,o,a,s,e),kf(Vs(l,a));break e}}s=l=Vs(l,a),It!==4&&(It=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=i2(s,l,e);c0(s,d);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fr===null||!fr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=r2(s,a,e);c0(s,S);break e}}s=s.return}while(s!==null)}w2(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function S2(){var t=tc.current;return tc.current=ec,t===null?ec:t}function rd(){(It===0||It===3||It===2)&&(It=4),Ft===null||!(Yr&268435455)&&!(mc&268435455)||rr(Ft,Vt)}function rc(t,e){var n=Ye;Ye|=2;var i=S2();(Ft!==t||Vt!==e)&&(Ci=null,Hr(t,e));do try{$3();break}catch(r){x2(t,r)}while(!0);if(zf(),Ye=n,tc.current=i,Ct!==null)throw Error(Q(261));return Ft=null,Vt=0,It}function $3(){for(;Ct!==null;)M2(Ct)}function Z3(){for(;Ct!==null&&!M_();)M2(Ct)}function M2(t){var e=T2(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?w2(t):Ct=e,Qf.current=null}function w2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H3(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Ct=null;return}}else if(n=V3(n,e,En),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);It===0&&(It=5)}function kr(t,e,n){var i=tt,r=Hn.transition;try{Hn.transition=null,tt=1,K3(t,e,n,i)}finally{Hn.transition=r,tt=i}return null}function K3(t,e,n,i){do Us();while(or!==null);if(Ye&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L_(t,s),t===Ft&&(Ct=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,A2(Bl,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=tt;tt=1;var a=Ye;Ye|=4,Qf.current=null,W3(t,n),v2(n,t),y3(Zh),Vl=!!$h,Zh=$h=null,t.current=n,X3(n,t,r),w_(),Ye=a,tt=o,Hn.transition=s}else t.current=n;if(Tl&&(Tl=!1,or=t,ic=r),s=t.pendingLanes,s===0&&(fr=null),A_(n.stateNode,i),dn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=gf,gf=null,t;return ic&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===vf?Qo++:(Qo=0,vf=t):Qo=0,_r(),null}function Us(){if(or!==null){var t=ig(ic),e=Hn.transition,n=tt;try{if(Hn.transition=null,tt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,ic=0,Ye&6)throw Error(Q(331));var r=Ye;for(Ye|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:Jo(8,u,s)}var h=u.child;if(h!==null)h.return=u,de=h;else for(;de!==null;){u=de;var f=u.sibling,m=u.return;if(p2(u),u===c){de=null;break}if(f!==null){f.return=m,de=f;break}de=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var y=_.sibling;_.sibling=null,_=y}while(_!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,de=d;break e}de=s.return}}var p=t.current;for(de=p;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=p;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(b){Mt(a,a.return,b)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Ye=r,_r(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(oc,t)}catch{}i=!0}return i}finally{tt=n,Hn.transition=e}}return!1}function P0(t,e,n){e=Vs(n,e),e=i2(t,e,1),t=hr(t,e,1),e=Qt(),t!==null&&(va(t,1,e),dn(t,e))}function Mt(t,e,n){if(t.tag===3)P0(t,t,n);else for(;e!==null;){if(e.tag===3){P0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Vs(n,t),t=r2(e,t,1),e=hr(e,t,1),t=Qt(),e!==null&&(va(e,1,t),dn(e,t));break}}e=e.return}}function J3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Tt()-td?Hr(t,0):ed|=n),dn(t,e)}function E2(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=Qt();t=Ui(t,e),t!==null&&(va(t,e,n),dn(t,n))}function j3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E2(t,n)}function Q3(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),E2(t,n)}var T2;T2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,z3(t,e,n);un=!!(t.flags&131072)}else un=!1,mt&&e.flags&1048576&&Rg(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ll(t,e),t=e.pendingProps;var r=Os(e,Yt.current);Ds(e,n),r=$f(null,e,i,t,r,n);var s=Zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gf(e),r.updater=dc,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Ff(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tx(i),t=jn(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=x0(null,e,i,t,n);break e;case 11:e=y0(null,e,i,t,n);break e;case 14:e=_0(null,e,i,jn(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),x0(t,e,i,r,n);case 3:e:{if(l2(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ug(t,e),Jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(Q(423)),e),e=S0(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(Q(424)),e),e=S0(t,e,i,n,r);break e}else for(Tn=ur(e.stateNode.containerInfo.firstChild),An=e,mt=!0,ei=null,n=Ng(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Fi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Fg(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Kh(i,r)?o=null:s!==null&&Kh(i,s)&&(e.flags|=32),a2(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return c2(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),y0(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Zl,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!hn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Gn(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),_0(t,e,i,r,n);case 15:return s2(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Ll(t,e),e.tag=1,fn(i)?(t=!0,ql(e)):t=!1,Ds(e,n),n2(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return u2(t,e,n);case 22:return o2(t,e,n)}throw Error(Q(156,e.tag))};function A2(t,e){return Q0(t,e)}function ex(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new ex(t,e,n,i)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tx(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ef)return 11;if(t===Tf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Gr(n.children,r,s,e);case wf:o=8,r|=8;break;case Ch:return t=Vn(12,n,e,r|2),t.elementType=Ch,t.lanes=s,t;case Rh:return t=Vn(13,n,e,r),t.elementType=Rh,t.lanes=s,t;case Ph:return t=Vn(19,n,e,r),t.elementType=Ph,t.lanes=s,t;case F0:return gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D0:o=10;break e;case U0:o=9;break e;case Ef:o=11;break e;case Tf:o=14;break e;case tr:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function gc(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=F0,t.lanes=n,t.stateNode={isHidden:!1},t}function Th(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Ah(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ch(0),this.expirationTimes=ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ch(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function od(t,e,n,i,r,s,o,a,l){return t=new nx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),t}function ix(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function b2(t){if(!t)return gr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(fn(n))return bg(t,n,e)}return e}function C2(t,e,n,i,r,s,o,a,l){return t=od(n,i,!0,t,r,s,o,a,l),t.context=b2(null),n=t.current,i=Qt(),r=dr(n),s=Li(i,r),s.callback=e!=null?e:null,hr(n,s,r),t.current.lanes=r,va(t,r,i),dn(t,i),t}function vc(t,e,n,i){var r=e.current,s=Qt(),o=dr(r);return n=b2(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(ni(t,r,o,s),Rl(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function I0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ad(t,e){I0(t,e),(t=t.alternate)&&I0(t,e)}function rx(){return null}var R2=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}yc.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));vc(t,e,null,null)};yc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){vc(null,t,null,null)}),e[Di]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&lg(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function sx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=C2(e,i,t,0,null,!1,!1,"",L0);return t._reactRootContainer=o,t[Di]=o.current,la(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=od(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[Di]=l.current,la(t.nodeType===8?t.parentNode:t),$r(function(){vc(e,l,n,i)}),l}function xc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}vc(e,o,t,r)}else o=sx(n,e,t,r,i);return sc(o)}rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(Cf(e,n|1),dn(e,Tt()),!(Ye&6)&&(Hs=Tt()+500,_r()))}break;case 13:$r(function(){var i=Ui(t,1);if(i!==null){var r=Qt();ni(i,t,1,r)}}),ad(t,1)}};Rf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=Qt();ni(e,t,134217728,n)}ad(t,134217728)}};sg=function(t){if(t.tag===13){var e=dr(t),n=Ui(t,e);if(n!==null){var i=Qt();ni(n,t,e,i)}ad(t,e)}};og=function(){return tt};ag=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};zh=function(t,e,n){switch(e){case"input":if(Nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uc(i);if(!r)throw Error(Q(90));k0(i),Nh(i,r)}}}break;case"textarea":z0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};Y0=nd;$0=$r;var ox={usingClientEntryPoint:!1,Events:[_a,ws,uc,X0,q0,nd]},Bo={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J0(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(zo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zo.isDisabled&&zo.supportsFiber))try{oc=zo.inject(ax),yi=zo}catch{}var zo;Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(Q(200));return ix(t,e,null,n)};Rn.createRoot=function(t,e){if(!cd(t))throw Error(Q(299));var n=!1,i="",r=R2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,la(t.nodeType===8?t.parentNode:t),new ld(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=J0(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return $r(t)};Rn.hydrate=function(t,e,n){if(!_c(e))throw Error(Q(200));return xc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!cd(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C2(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Di]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};Rn.render=function(t,e,n){if(!_c(e))throw Error(Q(200));return xc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!_c(t))throw Error(Q(40));return t._reactRootContainer?($r(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Rn.unstable_batchedUpdates=nd;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_c(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return xc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426"});var N2=bi((uT,L2)=>{"use strict";function I2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I2)}catch(t){console.error(t)}}I2(),L2.exports=P2()});var U2=bi(ud=>{"use strict";var D2=N2();ud.createRoot=D2.createRoot,ud.hydrateRoot=D2.hydrateRoot;var hT});var z2=bi(Tc=>{"use strict";var px=Zn(),mx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),vx=Object.prototype.hasOwnProperty,yx=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function B2(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vx.call(e,i)&&!_x.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mx,type:t,key:s,ref:o,props:r,_owner:yx.current}}Tc.Fragment=gx;Tc.jsx=B2;Tc.jsxs=B2});var tn=bi((xT,V2)=>{"use strict";V2.exports=z2()});var nb=vt(Zn(),1),Ly=vt(U2(),1);var Ka=vt(Zn(),1);var Sc={story:"Story",characters:"Characters",metrics:"Franchise Metrics"},lx={[Sc.story]:{dims:["Chapter","Era","Title","Kicker","Body","Accent"],sort:"Chapter"},[Sc.characters]:{dims:["Order","Id","Name","Country","Style","Debut","Tagline","Bio","Moves","Theme","Palette","Build"],sort:"Order"},[Sc.metrics]:{dims:["Franchise","Title","Year","Category","Unit","Source","Source URL","As Of","Note"],measures:["Value"]}};function cx(t){return t&&Array.isArray(t.data)?t.data:[]}function ux(t){let e=t.dims.map(n=>({fieldCaption:n,fieldAlias:n}));return(t.measures||[]).forEach(n=>e.push({fieldCaption:n,function:"SUM",fieldAlias:n})),{fields:e}}function hx(){let t=tableau.extensions.workbook;if(t&&typeof t.getAllDataSourcesAsync=="function")return t.getAllDataSourcesAsync();let e=tableau.extensions.worksheetContent;return e&&e.worksheet&&typeof e.worksheet.getDataSourcesAsync=="function"?e.worksheet.getDataSourcesAsync():Promise.resolve([])}async function F2(){if(!window.tableau||!tableau.extensions)throw new Error("Extensions API not loaded");await tableau.extensions.initializeAsync();let t=await hx(),e=new Map((t||[]).map(r=>[r.name,r])),n={loadedAt:new Date},i=[];return await Promise.all(Object.entries(Sc).map(async([r,s])=>{let o=e.get(s);if(!o){i.push(s),n[r]=[];return}let a=lx[s],l=cx(await o.queryAsync(ux(a)));a.sort&&l.sort((c,u)=>Number(c[a.sort])-Number(u[a.sort])),n[r]=l})),n.missing=i,n.sourceNames=(t||[]).map(r=>r.name),n}var pn=vt(Zn(),1);function hd(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Pn(t){let e=typeof t=="string"?hd(t):t>>>0;return function(){e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var nt=(t,e,n)=>Math.max(e,Math.min(n,t)),Xs=(t,e,n)=>t+(e-t)*n,qs=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,Sa=t=>1-Math.pow(1-t,3);function fx(t){let e=t.replace("#",""),n=parseInt(e.length===3?e.split("").map(i=>i+i).join(""):e,16);return[n>>16&255,n>>8&255,n&255]}function fd(t,e){let[n,i,r]=fx(t),s=o=>nt(Math.round(e<0?o*(1+e):o+(255-o)*e),0,255);return`rgb(${s(n)},${s(i)},${s(r)})`}function Ys(t,e={}){var u,h,f,m,v,_,y;let n=Pn((u=e.seed)!=null?u:1),i=(h=e.width)!=null?h:80,r=(f=e.bristles)!=null?f:Math.round(nt(i/2.2,18,120)),s=(m=e.dry)!=null?m:.5,o=(v=e.wobble)!=null?v:i*.08,a=dx(t,(_=e.step)!=null?_:6),l=a.map((d,p)=>{let g=a[Math.max(0,p-1)],S=a[Math.min(a.length-1,p+1)],b=S[0]-g[0],A=S[1]-g[1],T=Math.hypot(b,A)||1;return[-A/T,b/T]}),c=[];for(let d=0;d<r;d++){let p=(d/(r-1)-.5)*i*(.9+n()*.2),g=Math.abs(p)/(i/2),S=n()*.06+g*.05,b=g*s*.35+n()*s*.18,A=i/r*(2.2+n()*1.8)*(1-g*.45),T=g<.6?.9+n()*.1:.45+n()*.5-g*.2,R=n()*Math.PI*2,H=.004+n()*.01,x=[],w=Math.floor(n()*3*s+g*2*s);for(let D=0;D<w;D++){let O=.45+n()*.55;x.push([O,O+.02+n()*.12])}let k=a.map((D,O)=>{let Z=l[O],U=O/(a.length-1),q=Math.sin(Math.PI*nt(U*1.15+.04,0,1))**.35,z=p*(.55+.45*q)+Math.sin(O*H*40+R)*o*.15;return[D[0]+Z[0]*z,D[1]+Z[1]*z]});c.push({pts:k,startLag:S,endEarly:b,thick:A,alpha:T,gaps:x})}return{bristles:c,width:i,core:a,color:(y=e.color)!=null?y:"#ece6d6"}}function dx(t,e){let n=[],i=r=>t[nt(r,0,t.length-1)];for(let r=0;r<t.length-1;r++){let s=i(r-1),o=i(r),a=i(r+1),l=i(r+2),c=Math.hypot(a[0]-o[0],a[1]-o[1]),u=Math.max(2,Math.ceil(c/e));for(let h=0;h<u;h++){let f=h/u,m=f*f,v=m*f,_=(y,d,p,g)=>.5*(2*d+(-y+p)*f+(2*y-5*d+4*p-g)*m+(-y+3*d-3*p+g)*v);n.push([_(s[0],o[0],a[0],l[0]),_(s[1],o[1],a[1],l[1])])}}return n.push(t[t.length-1]),n}function Ma(t,e,n,i={}){var s,o,a;if(n<=0)return;let r=!!i.reverse;if(t.save(),t.strokeStyle=(s=i.color)!=null?s:e.color,t.lineCap="round",t.lineJoin="round",e.core&&i.core!==!1){let l=e.core.length,c=r?Math.max(.04,1-n):.04,u=r?.9:Math.min(.9,n*1.02);if(u>c){t.globalAlpha=(o=i.alpha)!=null?o:1,t.lineWidth=e.width*.42,t.lineCap="butt",t.beginPath();for(let h=Math.floor(c*(l-1));h<=Math.floor(u*(l-1));h++){let f=e.core[h];h===Math.floor(c*(l-1))?t.moveTo(f[0],f[1]):t.lineTo(f[0],f[1])}t.stroke(),t.lineCap="round"}}for(let l of e.bristles){let c=l.pts.length,u,h;if(r?(u=Math.max(l.startLag,1-n),h=1-l.endEarly):(u=l.startLag,h=Math.min(1-l.endEarly,n*(1+l.startLag))),h<=u)continue;t.globalAlpha=nt(l.alpha,.05,1)*((a=i.alpha)!=null?a:1),t.lineWidth=l.thick,t.beginPath();let f=!1,m=Math.floor(u*(c-1)),v=Math.floor(h*(c-1));for(let _=m;_<=v;_++){let y=_/(c-1),d=!1;for(let g of l.gaps)y>g[0]&&y<g[1]&&(d=!0);if(d){f=!1;continue}let p=l.pts[_];f?t.lineTo(p[0],p[1]):(t.moveTo(p[0],p[1]),f=!0)}t.stroke()}t.restore()}function Mc(t,e,n,i,r=7,s={}){var u,h;let o=Pn(r),a=(u=s.rows)!=null?u:Math.max(3,Math.round(i/150)),l=i/a,c=[];for(let f=0;f<a;f++){let m=e+l*(f+.5)+(o()-.5)*l*.15,_=f%2===0?[t-n*.05,t+n*1.04]:[t+n*1.05,t-n*.04],y=[],d=5;for(let p=0;p<d;p++){let g=p/(d-1);y.push([Xs(_[0],_[1],g),m+Math.sin(g*Math.PI*(1+o()))*l*.12*(o()-.5)])}c.push(Ys(y,{width:l*(1.55+o()*.3),seed:r*31+f,dry:(h=s.dry)!=null?h:.55,color:s.color}))}return c}function wc(t,e,n,i={}){var a;let r=e.length,s=(a=i.overlap)!=null?a:.35,o=1/(r-(r-1)*s);e.forEach((l,c)=>{let u=c*o*(1-s),h=nt((n-u)/o,0,1);if(i.reverse){let m=(r-1-c)*o*(1-s),v=1-nt((1-n-m)/o,0,1);Ma(t,l,v,{...i,reverse:!0})}else Ma(t,l,h,i)})}function O2(t,e,n,i=3,r={}){let s=Pn(i),o=[],a=s()*Math.PI*2,l=Math.PI*(1.7+s()*.2);for(let c=0;c<=18;c++){let u=a+l*c/18,h=n*(1+(s()-.5)*.05);o.push([t+Math.cos(u)*h,e+Math.sin(u)*h])}return Ys(o,{width:n*.32,seed:i+11,dry:.8,...r})}function dd(t,e,n,i=5,r={}){var l,c;let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d"),a=Ys([[t*.04,e*.55],[t*.35,e*.47],[t*.7,e*.53],[t*.96,e*.46]],{width:e*((l=r.thickness)!=null?l:.82),seed:i,dry:(c=r.dry)!=null?c:.65,color:n});return Ma(o,a,1),s.toDataURL("image/png")}var md=()=>typeof window!="undefined"&&window.HADO_ASSETS||{files:{},audio:{},sprites:{}};function In(t){var e;return((e=md().files)==null?void 0:e[t])||null}function gd(t){var e;return((e=md().audio)==null?void 0:e[t])||null}function k2(t){var i;let e=(i=md().sprites)==null?void 0:i[t];if(!e)return null;let n=In(`sprites/${e.file}`);return n?{...e,image:n}:null}var pd=new Map;function $s(t){if(!t)return null;if(!pd.has(t)){let e=new Image;e.src=t,pd.set(t,e)}return pd.get(t)}function vd(t){return new Promise(e=>{if(!t)return e(null);let n=$s(t);if(n.complete&&n.naturalWidth)return e(n);n.onload=()=>e(n),n.onerror=()=>e(null)})}var Ec=vt(Zn(),1);function Zs(t,e=.01){let n=(0,Ec.useRef)(!0);return(0,Ec.useEffect)(()=>{if(!t.current||typeof IntersectionObserver=="undefined")return;let i=new IntersectionObserver(r=>{for(let s of r)n.current=s.isIntersecting},{threshold:e});return i.observe(t.current),()=>i.disconnect()},[t,e]),n}var ri=vt(tn(),1),xx=["","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341"],Ac="#ece6d6",H2="#141a2b",G2=520,W2=950,X2='"HadoBrush", "Kaushan Script", "Brush Script MT", "Segoe Script", cursive',Sx='"HadoDisplay", "Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',bc='Georgia, "Times New Roman", serif';function q2(t,e,n){let i=String(e||"").split(/\s+/),r=[],s="";for(let o of i){let a=s?`${s} ${o}`:o;t.measureText(a).width>n&&s?(r.push(s),s=o):s=a}return s&&r.push(s),r}function Mx(t,e,n,i){let r=n<760;if(t===0){let m=n/2,v=i*.47,_=Math.min(n*.92,1200);return{kind:"title",strokes:[Ys([[m-_/2,v-i*.05],[m-_*.15,v-i*.09],[m+_*.2,v-i*.06],[m+_/2,v-i*.1]],{width:i*.24,seed:101,dry:.7,color:Ac}),Ys([[m+_*.46,v+i*.1],[m+_*.1,v+i*.13],[m-_*.25,v+i*.09],[m-_*.44,v+i*.12]],{width:i*.2,seed:202,dry:.75,color:Ac})],cx:m,cy:v,sw:_}}let s=e[t-1],o=r?n*.05:n*.36,a=r?n*.9:n*.56,l=i*.18,c=i*.62,u=Mc(o,l,a,c,13+t*7,{color:Ac,rows:r?6:5}),h=Math.min(n*.13,i*.2),f=r?null:O2(n*.19,i*.47,h,40+t,{color:(s==null?void 0:s.Accent)||"#c4283c"});return{kind:"chapter",strokes:u,px:o,py:l,pw:a,ph:c,enso:f,ensoR:h,narrow:r,ch:s}}function wx(t,e,n,i,r,s){if(e.kind==="title"){t.save(),t.globalCompositeOperation="source-atop",t.fillStyle=H2,t.textAlign="center",t.textBaseline="middle";let v=Math.min(n*.075,110);t.font=`${v}px ${X2}`,t.fillText("Way of the",e.cx,e.cy-i*.115),t.font=`italic ${Math.max(14,v*.22)}px ${bc}`,t.fillText("A visual history of Street Fighter  \xB7  1987 \u2013 today",e.cx,e.cy+i*.135),t.restore();return}let o=e.ch;if(!o)return;let a=Math.max(24,e.pw*.07),l=e.px+a,c=e.py+a*1.1,u=e.pw-a*2;if(t.save(),t.globalCompositeOperation="source-atop",s){let v=e.ph*.9,_=s.naturalWidth/s.naturalHeight*v;t.globalAlpha=.22,t.drawImage(s,e.px+e.pw-_,e.py+e.ph*.05,_,v),t.globalAlpha=1}t.textBaseline="top",t.fillStyle=o.Accent&&o.Accent!=="#e8e2d0"?o.Accent:"#c4283c";let h=nt(n*.014,12,17);t.font=`700 ${h}px ${bc}`,t.fillText(`${String(o.Era).toUpperCase()}   \xB7   ${o.Kicker}`,l,c),c+=h*2,t.fillStyle=H2;let f=nt(n*.05,30,74);t.font=`${f}px ${X2}`;for(let v of q2(t,o.Title,u))t.fillText(v,l,c),c+=f*1.08;c+=f*.25;let m=nt(n*.0155,15,21);t.font=`${m}px ${bc}`,t.fillStyle="#232a3d";for(let v of q2(t,o.Body,Math.min(u,640)))t.fillText(v,l,c),c+=m*1.55;t.restore()}function Ex(t,e,n,i,r,s){if(s<=0)return;t.save(),t.globalAlpha=nt(s,0,1);let o=.85+.15*Sa(nt(s,0,1)),a=e.cy+i*.035;if(t.translate(e.cx,a),t.scale(o,o),r){let l=Math.min(i*.24,n*.16),c=r.naturalWidth/r.naturalHeight*l;t.drawImage(r,-c/2,-l/2,c,l)}else{let l=Math.min(n*.17,230);t.font=`italic 900 ${l}px ${Sx}`,t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineWidth=l*.12,t.strokeStyle="#0b0f1e",t.strokeText("HADO",0,0);let c=t.createLinearGradient(0,-l/2,0,l/2);c.addColorStop(0,"#fff2a8"),c.addColorStop(.45,"#f6b42c"),c.addColorStop(.55,"#e0631d"),c.addColorStop(1,"#b0161f"),t.fillStyle=c,t.fillText("HADO",0,0),t.lineWidth=l*.02,t.strokeStyle="#fff6cf",t.strokeText("HADO",0,-l*.01)}t.restore()}function Tx(t,e,n,i,r,s){var l;if(!e.enso)return;Ma(t,e.enso,r,{reverse:s});let o=s?r:nt((r-.4)/.6,0,1);if(o<=0)return;t.save(),t.globalAlpha=o,t.fillStyle=Ac,t.textAlign="center",t.textBaseline="middle";let a=Number((l=e.ch)==null?void 0:l.Chapter)||0;t.font=`${e.ensoR*1.05}px "Hiragino Mincho ProN", "Yu Mincho", "Noto Serif CJK JP", serif`,t.fillText(xx[a]||String(a),n*.19,i*.47),t.font=`600 ${nt(n*.012,11,14)}px ${bc}`,t.globalAlpha=o*.7,t.fillText(`CHAPTER ${a}`,n*.19,i*.47+e.ensoR*1.35),t.restore()}function Ax(t,e,n,i,r,s){let o=t.createLinearGradient(0,0,0,n);o.addColorStop(0,"#070b18"),o.addColorStop(.55,"#0d1630"),o.addColorStop(1,"#141f3e"),t.fillStyle=o,t.fillRect(0,0,e,n);for(let a of r){let l=.5+.5*Math.sin(i*.001*a.sp+a.ph);t.globalAlpha=a.a*(.4+.6*l),t.fillStyle="#dfe6ff",t.fillRect(a.x*e,a.y*n,a.r,a.r)}t.globalAlpha=1;for(let a=0;a<4;a++){let l=n*(.15+a*.22),c=(i*.006*(a%2?1:-.7)+a*300)%(e+800)-400,u=t.createRadialGradient(c,l,0,c,l,420);u.addColorStop(0,"rgba(60,80,140,0.10)"),u.addColorStop(1,"rgba(60,80,140,0)"),t.fillStyle=u,t.fillRect(c-420,l-420,840,840)}s>0&&(t.fillStyle=`rgba(200,215,255,${s*.12})`,t.fillRect(0,0,e,n))}function yd({chapters:t,height:e}){let n=(0,pn.useRef)(null),i=(0,pn.useRef)(null),r=(0,pn.useRef)(null),[s,o]=(0,pn.useState)(0),a=t.length+1,l=(0,pn.useRef)({shown:0,target:0,phase:"paint",start:performance.now(),layouts:new Map}),c=(0,pn.useRef)({logo:null,story:{}}),u=Zs(n,.05);(0,pn.useEffect)(()=>{vd(In("img/hado-logo.png")||In("img/hado-logo.webp")).then(m=>{c.current.logo=m}),t.forEach(m=>{vd(In(`img/story/${m.Chapter}.png`)||In(`img/story/${m.Chapter}.jpg`)).then(v=>{v&&(c.current.story[m.Chapter]=v)})})},[t]);let h=(0,pn.useCallback)(m=>{let v=l.current;if(m=nt(m,0,a-1),m===v.target)return!1;if(v.target=m,v.phase==="paint"||v.phase==="idle"){let _=performance.now(),y=v.phase==="idle"?1:nt((_-v.start)/W2,0,1);v.phase="unpaint",v.start=_-(1-y)*G2}return o(m),!0},[a]);(0,pn.useEffect)(()=>{let m=n.current,v=0,_=null,y=S=>{let b=l.current,A=Math.sign(S.deltaY);if(!A||A>0&&b.target>=a-1||A<0&&b.target<=0)return;S.preventDefault();let R=performance.now();R<v||Math.abs(S.deltaY)<4||(v=R+700,h(b.target+A))},d=S=>{_=S.touches[0].clientY},p=S=>{if(_==null)return;let b=_-S.touches[0].clientY,A=l.current,T=Math.sign(b);T>0&&A.target>=a-1||T<0&&A.target<=0||(S.preventDefault(),Math.abs(b)>40&&(h(A.target+T),_=null))},g=S=>{S.key==="ArrowDown"||S.key==="PageDown"||S.key===" "?h(l.current.target+1)&&S.preventDefault():(S.key==="ArrowUp"||S.key==="PageUp")&&h(l.current.target-1)&&S.preventDefault()};return m.addEventListener("wheel",y,{passive:!1}),m.addEventListener("touchstart",d,{passive:!0}),m.addEventListener("touchmove",p,{passive:!1}),m.addEventListener("keydown",g),()=>{m.removeEventListener("wheel",y),m.removeEventListener("touchstart",d),m.removeEventListener("touchmove",p),m.removeEventListener("keydown",g)}},[h,a]),(0,pn.useEffect)(()=>{let m=i.current,v=r.current,_=m.getContext("2d"),y=v.getContext("2d"),d=Pn(9),p=Array.from({length:140},()=>({x:d(),y:d()*.9,r:d()<.85?1:2,a:.3+d()*.7,sp:.5+d()*2,ph:d()*6})),g=0,S=0,b=1,A,T=0,R=()=>{let k=n.current.getBoundingClientRect();b=Math.min(window.devicePixelRatio||1,2),g=Math.round(k.width),S=Math.round(k.height);for(let D of[m,v])D.width=g*b,D.height=S*b;l.current.layouts.clear()},H=k=>{let D=l.current.layouts;return D.has(k)||D.set(k,Mx(k,t,g,S)),D.get(k)};R();let x=new ResizeObserver(R);x.observe(n.current);let w=k=>{var q;if(A=requestAnimationFrame(w),!u.current)return;let D=l.current;_.setTransform(b,0,0,b,0,0),Math.random()<.002&&(T=1),T*=.9,Ax(_,g,S,k,p,T);let O,Z=!1;if(D.phase==="unpaint"){let z=nt((k-D.start)/G2,0,1);O=1-qs(z),Z=!0,z>=1&&(D.shown=D.target,D.phase="paint",D.start=k,O=0,Z=!1)}else{let z=nt((k-D.start)/W2,0,1);O=Sa(z),z>=1&&D.phase==="paint"&&(D.phase="idle")}let U=H(D.shown);y.setTransform(b,0,0,b,0,0),y.clearRect(0,0,g,S),wc(y,U.strokes,O,{reverse:Z,overlap:.45}),wx(y,U,g,S,c.current.logo,c.current.story[(q=U.ch)==null?void 0:q.Chapter]),y.globalCompositeOperation="source-over",U.kind==="title"?Ex(y,U,g,S,c.current.logo,Z?O:(O-.35)/.65):Tx(y,U,g,S,O,Z)};return A=requestAnimationFrame(w),()=>{cancelAnimationFrame(A),x.disconnect()}},[t,u]);let f=s>0?t[s-1]:null;return(0,ri.jsxs)("section",{className:"intro",ref:n,style:{height:e},tabIndex:0,"aria-roledescription":"story","aria-label":"Way of the Hado \u2014 story. Use arrow keys or scroll to move between chapters.",children:[(0,ri.jsx)("canvas",{ref:i,className:"layer","aria-hidden":"true"}),(0,ri.jsx)("canvas",{ref:r,className:"layer","aria-hidden":"true"}),(0,ri.jsx)("div",{className:"sr-only","aria-live":"polite",children:f?`Chapter ${f.Chapter}, ${f.Era}: ${f.Title}. ${f.Body}`:"Way of the Hado. A visual history of Street Fighter."}),(0,ri.jsx)("nav",{className:"story-dots","aria-label":"Story chapters",children:Array.from({length:a},(m,v)=>{var _;return(0,ri.jsx)("button",{className:v===s?"on":"",onClick:()=>h(v),"aria-label":v===0?"Title":`Chapter ${v}: ${(_=t[v-1])==null?void 0:_.Title}`,"aria-current":v===s?"step":void 0,children:(0,ri.jsx)("span",{children:v===0?"\u25C6":v})},v)})}),(0,ri.jsxs)("div",{className:`scroll-hint ${s===a-1?"end":""}`,"aria-hidden":"true",children:[s===a-1?"Keep scrolling \u2014 meet the fighters":"Scroll to paint the next chapter",(0,ri.jsx)("span",{className:"chev",children:"\u25BC"})]})]})}var kt=vt(Zn(),1);var gm="169";var bx=0,Y2=1,Cx=2;var Jv=1,Rx=2,Gi=3,Rr=0,yn=1,Dn=2,br=0,po=1,Da=2,$2=3,Z2=4,Px=5,rs=100,Ix=101,Lx=102,Nx=103,Dx=104,Ux=200,Fx=201,Ox=202,kx=203,jd=204,Qd=205,Bx=206,zx=207,Vx=208,Hx=209,Gx=210,Wx=211,Xx=212,qx=213,Yx=214,ep=0,tp=1,np=2,yo=3,ip=4,rp=5,sp=6,op=7,vm=0,$x=1,Zx=2,Cr=0,Kx=1,Jx=2,jx=3,Qx=4,eS=5,tS=6,nS=7;var jv=300,_o=301,xo=302,ap=303,lp=304,Lu=306,Ua=1e3,as=1001,cp=1002,Lt=1003,ym=1004;var Cc=1005;var li=1006,_d=1007;var ls=1008;var qi=1009,Qv=1010,ey=1011,Fa=1012,_m=1013,cs=1014,Si=1015,Xa=1016,xm=1017,Sm=1018,So=1020,ty=35902,ny=1021,iy=1022,ci=1023,ry=1024,sy=1025,mo=1026,Mo=1027,Mm=1028,wm=1029,oy=1030,Em=1031;var Tm=1033,Qc=33776,eu=33777,tu=33778,nu=33779,up=35840,hp=35841,fp=35842,dp=35843,pp=36196,mp=37492,gp=37496,vp=37808,yp=37809,_p=37810,xp=37811,Sp=37812,Mp=37813,wp=37814,Ep=37815,Tp=37816,Ap=37817,bp=37818,Cp=37819,Rp=37820,Pp=37821,iu=36492,Ip=36494,Lp=36495,ay=36283,Np=36284,Dp=36285,Up=36286;var su=2300,Fp=2301,xd=2302,K2=2400,J2=2401,j2=2402;var iS=3200,rS=3201;var ly=0,sS=1,Ar="",gn="srgb",Nr="srgb-linear",Am="display-p3",Nu="display-p3-linear",ou="linear",dt="srgb",au="rec709",lu="p3";var Ks=7680;var Q2=519,oS=512,aS=513,lS=514,cy=515,cS=516,uS=517,hS=518,fS=519,ev=35044;var tv="300 es",Xi=2e3,cu=2001,Pr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sd=Math.PI/180,Op=180/Math.PI;function qa(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function vn(t,e,n){return Math.max(e,Math.min(n,t))}function dS(t,e){return(t%e+e)%e}function Md(t,e,n){return(1-n)*t+n*e}function wa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var ze=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],v=i[8],_=r[0],y=r[3],d=r[6],p=r[1],g=r[4],S=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*_+a*p+l*b,s[3]=o*y+a*g+l*A,s[6]=o*d+a*S+l*T,s[1]=c*_+u*p+h*b,s[4]=c*y+u*g+h*A,s[7]=c*d+u*S+h*T,s[2]=f*_+m*p+v*b,s[5]=f*y+m*g+v*A,s[8]=f*d+m*S+v*T,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,v=n*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(wd.makeScale(e,n)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,n){return this.premultiply(wd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wd=new De;function uy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pS(){let t=uu("canvas");return t.style.display="block",t}var nv={};function ru(t){t in nv||(nv[t]=!0,console.warn(t))}function mS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function gS(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vS(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var iv=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rv=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[Nr]:{transfer:ou,primaries:au,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[gn]:{transfer:dt,primaries:au,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Nu]:{transfer:ou,primaries:lu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(rv),fromReference:t=>t.applyMatrix3(iv)},[Am]:{transfer:dt,primaries:lu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(rv),fromReference:t=>t.applyMatrix3(iv).convertLinearToSRGB()}},yS=new Set([Nr,Nu]),Qe={enabled:!0,_workingColorSpace:Nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!yS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=Ea[e].toReference,r=Ea[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ea[t].primaries},getTransfer:function(t){return t===Ar?ou:Ea[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ea[e].luminanceCoefficients)}};function go(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ed(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Js,kp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=uu("canvas")),Js.width=e.width,Js.height=e.height;let i=Js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Js}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let n=uu("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=go(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(go(n[i]/255)*255):n[i]=go(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_S=0,hu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Td(r[o].image)):s.push(Td(r[o]))}else s=Td(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Td(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?kp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xS=0,_n=class t extends Pr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=as,r=as,s=li,o=ls,a=ci,l=qi,c=t.DEFAULT_ANISOTROPY,u=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=qa(),this.name="",this.source=new hu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=jv;_n.DEFAULT_ANISOTROPY=1;var st=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],v=l[9],_=l[2],y=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(v-y)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(v+y)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let g=(c+1)/2,S=(m+1)/2,b=(d+1)/2,A=(u+f)/4,T=(h+_)/4,R=(v+y)/4;return g>S&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=R/s),this.set(i,r,s,n),this}let p=Math.sqrt((y-v)*(y-v)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(p)<.001&&(p=1),this.x=(y-v)/p,this.y=(h-_)/p,this.z=(f-u)/p,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bp=class extends Pr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new hu(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends Bp{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},fu=class extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zp=class extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],m=s[o+1],v=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(h!==_||l!==f||c!==m||u!==v){let y=1-a,d=l*f+c*m+u*v+h*_,p=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){let b=Math.sqrt(g),A=Math.atan2(b,d*p);y=Math.sin(y*A)/b,a=Math.sin(a*A)/b}let S=a*p;if(l=l*y+f*S,c=c*y+m*S,u=u*y+v*S,h=h*y+_*S,y===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+u*h+l*m-c*f,e[n+1]=l*v+u*f+c*h-a*m,e[n+2]=c*v+u*m+a*f-l*h,e[n+3]=u*v-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"YXZ":this._x=f*u*h+c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"ZXY":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h-f*m*v;break;case"ZYX":this._x=f*u*h-c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h+f*m*v;break;case"YZX":this._x=f*u*h+c*m*v,this._y=c*m*h+f*u*v,this._z=c*u*v-f*m*h,this._w=c*u*h-f*m*v;break;case"XZY":this._x=f*u*h-c*m*v,this._y=c*m*h-f*u*v,this._z=c*u*v+f*m*h,this._w=c*u*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sv.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ad=new L,sv=new Mi,$i=class{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rc.copy(i.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Pc.subVectors(this.max,Ta),js.subVectors(e.a,Ta),Qs.subVectors(e.b,Ta),eo.subVectors(e.c,Ta),xr.subVectors(Qs,js),Sr.subVectors(eo,Qs),Jr.subVectors(js,eo);let n=[0,-xr.z,xr.y,0,-Sr.z,Sr.y,0,-Jr.z,Jr.y,xr.z,0,-xr.x,Sr.z,0,-Sr.x,Jr.z,0,-Jr.x,-xr.y,xr.x,0,-Sr.y,Sr.x,0,-Jr.y,Jr.x,0];return!bd(n,js,Qs,eo,Pc)||(n=[1,0,0,0,1,0,0,0,1],!bd(n,js,Qs,eo,Pc))?!1:(Ic.crossVectors(xr,Sr),n=[Ic.x,Ic.y,Ic.z],bd(n,js,Qs,eo,Pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ki=[new L,new L,new L,new L,new L,new L,new L,new L],si=new L,Rc=new $i,js=new L,Qs=new L,eo=new L,xr=new L,Sr=new L,Jr=new L,Ta=new L,Pc=new L,Ic=new L,jr=new L;function bd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){jr.fromArray(t,s);let a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),u=i.dot(jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var SS=new $i,Aa=new L,Cd=new L,Ir=class{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):SS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let n=Aa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Cd)),this.expandByPoint(Aa.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bi=new L,Rd=new L,Lc=new L,Mr=new L,Pd=new L,Nc=new L,Id=new L,Oa=class{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,n),Bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rd.copy(e).add(n).multiplyScalar(.5),Lc.copy(n).sub(e).normalize(),Mr.copy(this.origin).sub(Rd);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Lc),a=Mr.dot(this.direction),l=-Mr.dot(Lc),c=Mr.lengthSq(),u=Math.abs(1-o*o),h,f,m,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){let _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rd).addScaledVector(Lc,f),m}intersectSphere(e,n){Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),r=Bi.dot(Bi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,n,i,r,s){Pd.subVectors(n,e),Nc.subVectors(i,e),Id.crossVectors(Pd,Nc);let o=this.direction.dot(Id),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mr.subVectors(this.origin,e);let l=a*this.direction.dot(Nc.crossVectors(Mr,Nc));if(l<0)return null;let c=a*this.direction.dot(Pd.cross(Mr));if(c<0||l+c>o)return null;let u=-a*Mr.dot(Id);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class t{constructor(e,n,i,r,s,o,a,l,c,u,h,f,m,v,_,y){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,m,v,_,y)}set(e,n,i,r,s,o,a,l,c,u,h,f,m,v,_,y){let d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=v,d[11]=_,d[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,m=o*h,v=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){let f=l*u,m=l*h,v=c*u,_=c*h;n[0]=f+_*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=m*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){let f=l*u,m=l*h,v=c*u,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let f=o*u,m=o*h,v=a*u,_=a*h;n[0]=l*u,n[4]=v*c-m,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-f*h,n[8]=v*h+m,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*h+v,n[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,m=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+_,n[5]=o*u,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MS,e,wS)}lookAt(e,n,i){let r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),wr.crossVectors(i,Ln),wr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),wr.crossVectors(i,Ln)),wr.normalize(),Dc.crossVectors(Ln,wr),r[0]=wr.x,r[4]=Dc.x,r[8]=Ln.x,r[1]=wr.y,r[5]=Dc.y,r[9]=Ln.y,r[2]=wr.z,r[6]=Dc.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],v=i[2],_=i[6],y=i[10],d=i[14],p=i[3],g=i[7],S=i[11],b=i[15],A=r[0],T=r[4],R=r[8],H=r[12],x=r[1],w=r[5],k=r[9],D=r[13],O=r[2],Z=r[6],U=r[10],q=r[14],z=r[3],se=r[7],ee=r[11],ue=r[15];return s[0]=o*A+a*x+l*O+c*z,s[4]=o*T+a*w+l*Z+c*se,s[8]=o*R+a*k+l*U+c*ee,s[12]=o*H+a*D+l*q+c*ue,s[1]=u*A+h*x+f*O+m*z,s[5]=u*T+h*w+f*Z+m*se,s[9]=u*R+h*k+f*U+m*ee,s[13]=u*H+h*D+f*q+m*ue,s[2]=v*A+_*x+y*O+d*z,s[6]=v*T+_*w+y*Z+d*se,s[10]=v*R+_*k+y*U+d*ee,s[14]=v*H+_*D+y*q+d*ue,s[3]=p*A+g*x+S*O+b*z,s[7]=p*T+g*w+S*Z+b*se,s[11]=p*R+g*k+S*U+b*ee,s[15]=p*H+g*D+S*q+b*ue,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],v=e[3],_=e[7],y=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+y*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],v=e[12],_=e[13],y=e[14],d=e[15],p=h*y*c-_*f*c+_*l*m-a*y*m-h*l*d+a*f*d,g=v*f*c-u*y*c-v*l*m+o*y*m+u*l*d-o*f*d,S=u*_*c-v*h*c+v*a*m-o*_*m-u*a*d+o*h*d,b=v*h*l-u*_*l-v*a*f+o*_*f+u*a*y-o*h*y,A=n*p+i*g+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=p*T,e[1]=(_*f*s-h*y*s-_*r*m+i*y*m+h*r*d-i*f*d)*T,e[2]=(a*y*s-_*l*s+_*r*c-i*y*c-a*r*d+i*l*d)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(u*y*s-v*f*s+v*r*m-n*y*m-u*r*d+n*f*d)*T,e[6]=(v*l*s-o*y*s-v*r*c+n*y*c+o*r*d-n*l*d)*T,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*m+n*l*m)*T,e[8]=S*T,e[9]=(v*h*s-u*_*s-v*i*m+n*_*m+u*i*d-n*h*d)*T,e[10]=(o*_*s-v*a*s+v*i*c-n*_*c-o*i*d+n*a*d)*T,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*m-n*a*m)*T,e[12]=b*T,e[13]=(u*_*r-v*h*r+v*i*f-n*_*f-u*i*y+n*h*y)*T,e[14]=(v*a*r-o*_*r-v*i*l+n*_*l+o*i*y-n*a*y)*T,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,v=s*h,_=o*u,y=o*h,d=a*h,p=l*c,g=l*u,S=l*h,b=i.x,A=i.y,T=i.z;return r[0]=(1-(_+d))*b,r[1]=(m+S)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+d))*A,r[6]=(y+p)*A,r[7]=0,r[8]=(v+g)*T,r[9]=(y-p)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=to.set(r[0],r[1],r[2]).length(),o=to.set(r[4],r[5],r[6]).length(),a=to.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);let c=1/s,u=1/o,h=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,n.setFromRotationMatrix(oi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Xi){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r),m,v;if(a===Xi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===cu)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Xi){let l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*u,v,_;if(a===Xi)v=(o+s)*h,_=-2*h;else if(a===cu)v=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},to=new L,oi=new it,MS=new L(0,0,0),wS=new L(1,1,1),wr=new L,Dc=new L,Ln=new L,ov=new it,av=new Mi,qn=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ov,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return av.setFromEuler(this),this.setFromQuaternion(av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ES=0,lv=new L,no=new Mi,zi=new it,Uc=new L,ba=new L,TS=new L,AS=new Mi,cv=new L(1,0,0),uv=new L(0,1,0),hv=new L(0,0,1),fv={type:"added"},bS={type:"removed"},io={type:"childadded",child:null},Ld={type:"childremoved",child:null},sn=class t extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new L,n=new qn,i=new Mi,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new De}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(cv,e)}rotateY(e){return this.rotateOnAxis(uv,e)}rotateZ(e){return this.rotateOnAxis(hv,e)}translateOnAxis(e,n){return lv.copy(e).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cv,e)}translateY(e){return this.translateOnAxis(uv,e)}translateZ(e){return this.translateOnAxis(hv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uc.copy(e):Uc.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ba,Uc,this.up):zi.lookAt(Uc,ba,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),no.setFromRotationMatrix(zi),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fv),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bS),Ld.child=e,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fv),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};sn.DEFAULT_UP=new L(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new L,Vi=new L,Nd=new L,Hi=new L,ro=new L,so=new L,dv=new L,Dd=new L,Ud=new L,Fd=new L,Od=new st,kd=new st,Bd=new st,ss=class t{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ai.subVectors(e,n),r.cross(ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ai.subVectors(r,n),Vi.subVectors(i,n),Nd.subVectors(e,n);let o=ai.dot(ai),a=ai.dot(Vi),l=ai.dot(Nd),c=Vi.dot(Vi),u=Vi.dot(Nd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,m=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Od.setScalar(0),kd.setScalar(0),Bd.setScalar(0),Od.fromBufferAttribute(e,n),kd.fromBufferAttribute(e,i),Bd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Od,s.x),o.addScaledVector(kd,s.y),o.addScaledVector(Bd,s.z),o}static isFrontFacing(e,n,i,r){return ai.subVectors(i,n),Vi.subVectors(e,n),ai.cross(Vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ai.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;ro.subVectors(r,i),so.subVectors(s,i),Dd.subVectors(e,i);let l=ro.dot(Dd),c=so.dot(Dd);if(l<=0&&c<=0)return n.copy(i);Ud.subVectors(e,r);let u=ro.dot(Ud),h=so.dot(Ud);if(u>=0&&h<=u)return n.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ro,o);Fd.subVectors(e,s);let m=ro.dot(Fd),v=so.dot(Fd);if(v>=0&&m<=v)return n.copy(s);let _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(so,a);let y=u*v-m*h;if(y<=0&&h-u>=0&&m-v>=0)return dv.subVectors(s,r),a=(h-u)/(h-u+(m-v)),n.copy(r).addScaledVector(dv,a);let d=1/(y+_+f);return o=_*d,a=f*d,n.copy(i).addScaledVector(ro,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function zd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Be=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=dS(e,1),n=vn(n,0,1),i=vn(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zd(o,s,e+1/3),this.g=zd(o,s,e),this.b=zd(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){let i=hy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=Ed(e.r),this.g=Ed(e.g),this.b=Ed(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Qe.fromWorkingColorSpace(Zt.copy(this),e),Math.round(vn(Zt.r*255,0,255))*65536+Math.round(vn(Zt.g*255,0,255))*256+Math.round(vn(Zt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Zt.copy(this),n);let i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=gn){Qe.fromWorkingColorSpace(Zt.copy(this),e);let n=Zt.r,i=Zt.g,r=Zt.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(Fc);let i=Md(Er.h,Fc.h,n),r=Md(Er.s,Fc.s,n),s=Md(Er.l,Fc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Be;Be.NAMES=hy;var CS=0,Lr=class extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=po,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Qd,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==Qd&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q2&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ui=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new L,Oc=new ze,Un=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ev,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(e),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wa(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wa(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wa(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ev&&(e.usage=this.usage),e}};var du=class extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var pu=class extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var rn=class extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}},RS=0,Xn=new it,Vd=new sn,oo=new L,Nn=new $i,Ca=new $i,Ot=new L,Yn=class t extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?pu:du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Nn.min,Ca.min),Nn.expandByPoint(Ot),Ot.addVectors(Nn.max,Ca.max),Nn.expandByPoint(Ot)):(Nn.expandByPoint(Ca.min),Nn.expandByPoint(Ca.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(oo.fromBufferAttribute(e,c),Ot.add(oo)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new L,l[R]=new L;let c=new L,u=new L,h=new L,f=new ze,m=new ze,v=new ze,_=new L,y=new L;function d(R,H,x){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,H),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,H),v.fromBufferAttribute(s,x),u.sub(c),h.sub(c),m.sub(f),v.sub(f);let w=1/(m.x*v.y-v.x*m.y);isFinite(w)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(w),y.copy(h).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(w),a[R].add(_),a[H].add(_),a[x].add(_),l[R].add(y),l[H].add(y),l[x].add(y))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let R=0,H=p.length;R<H;++R){let x=p[R],w=x.start,k=x.count;for(let D=w,O=w+k;D<O;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let g=new L,S=new L,b=new L,A=new L;function T(R){b.fromBufferAttribute(r,R),A.copy(b);let H=a[R];g.copy(H),g.sub(b.multiplyScalar(b.dot(H))).normalize(),S.crossVectors(A,H);let w=S.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,w)}for(let R=0,H=p.length;R<H;++R){let x=p[R],w=x.start,k=x.count;for(let D=w,O=w+k;D<O;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){let v=e.getX(f+0),_=e.getX(f+1),y=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),m=0,v=0;for(let _=0,y=l.length;_<y;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[v++]=c[m++]}return new Un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pv=new it,Qr=new Oa,kc=new Ir,mv=new L,Bc=new L,zc=new L,Vc=new L,Hd=new L,Hc=new L,gv=new L,Gc=new L,wt=class extends sn{constructor(e=new Yn,n=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Hc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Hd.fromBufferAttribute(h,e),o?Hc.addScaledVector(Hd,u):Hc.addScaledVector(Hd.sub(n),u))}n.add(Hc)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(s),Qr.copy(e.ray).recast(e.near),!(kc.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(kc,mv)===null||Qr.origin.distanceToSquared(mv)>(e.far-e.near)**2))&&(pv.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(pv),!(i.boundingBox!==null&&Qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qr)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){let y=f[v],d=o[y.materialIndex],p=Math.max(y.start,m.start),g=Math.min(a.count,Math.min(y.start+y.count,m.start+m.count));for(let S=p,b=g;S<b;S+=3){let A=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);r=Wc(this,d,e,i,c,u,h,A,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{let v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let y=v,d=_;y<d;y+=3){let p=a.getX(y),g=a.getX(y+1),S=a.getX(y+2);r=Wc(this,o,e,i,c,u,h,p,g,S),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){let y=f[v],d=o[y.materialIndex],p=Math.max(y.start,m.start),g=Math.min(l.count,Math.min(y.start+y.count,m.start+m.count));for(let S=p,b=g;S<b;S+=3){let A=S,T=S+1,R=S+2;r=Wc(this,d,e,i,c,u,h,A,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{let v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let y=v,d=_;y<d;y+=3){let p=y,g=y+1,S=y+2;r=Wc(this,o,e,i,c,u,h,p,g,S),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}};function PS(t,e,n,i,r,s,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Gc.copy(a),Gc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Gc);return c<n.near||c>n.far?null:{distance:c,point:Gc.clone(),object:t}}function Wc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Bc),t.getVertexPosition(l,zc),t.getVertexPosition(c,Vc);let u=PS(t,e,n,i,Bc,zc,Vc,gv);if(u){let h=new L;ss.getBarycoord(gv,Bc,zc,Vc,h),r&&(u.uv=ss.getInterpolatedAttribute(r,a,l,c,h,new ze)),s&&(u.uv1=ss.getInterpolatedAttribute(s,a,l,c,h,new ze)),o&&(u.normal=ss.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};ss.getNormal(Bc,zc,Vc,f.normal),u.face=f,u.barycoord=h}return u}var Ba=class t extends Yn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function v(_,y,d,p,g,S,b,A,T,R,H){let x=S/T,w=b/R,k=S/2,D=b/2,O=A/2,Z=T+1,U=R+1,q=0,z=0,se=new L;for(let ee=0;ee<U;ee++){let ue=ee*w-D;for(let Fe=0;Fe<Z;Fe++){let Oe=Fe*x-k;se[_]=Oe*p,se[y]=ue*g,se[d]=O,c.push(se.x,se.y,se.z),se[_]=0,se[y]=0,se[d]=A>0?1:-1,u.push(se.x,se.y,se.z),h.push(Fe/T),h.push(1-ee/R),q+=1}}for(let ee=0;ee<R;ee++)for(let ue=0;ue<T;ue++){let Fe=f+ue+Z*ee,Oe=f+ue+Z*(ee+1),X=f+(ue+1)+Z*(ee+1),J=f+(ue+1)+Z*ee;l.push(Fe,Oe,J),l.push(Oe,X,J),z+=6}a.addGroup(m,z,H),m+=z,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wo(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){let e={};for(let n=0;n<t.length;n++){let i=wo(t[n]);for(let r in i)e[r]=i[r]}return e}function IS(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fy(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var LS={clone:wo,merge:nn},NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},mu=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tr=new L,vv=new ze,yv=new ze,Kt=class extends mu{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Op*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,n){return this.getViewBounds(e,vv,yv),n.subVectors(yv,vv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ao=-90,lo=1,Vp=class extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(ao,lo,e,n);r.layers=this.layers,this.add(r);let s=new Kt(ao,lo,e,n);s.layers=this.layers,this.add(s);let o=new Kt(ao,lo,e,n);o.layers=this.layers,this.add(o);let a=new Kt(ao,lo,e,n);a.layers=this.layers,this.add(a);let l=new Kt(ao,lo,e,n);l.layers=this.layers,this.add(l);let c=new Kt(ao,lo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},gu=class extends _n{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:_o,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hp=class extends Yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gu(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ba(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:br});s.uniforms.tEquirect.value=n;let o=new wt(r,s),a=n.minFilter;return n.minFilter===ls&&(n.minFilter=li),new Vp(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},Gd=new L,US=new L,FS=new De,Wi=class{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Gd.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Gd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||FS.getNormalMatrix(e),r=this.coplanarPoint(Gd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Ir,Xc=new L,za=class{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Xi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],v=r[9],_=r[10],y=r[11],d=r[12],p=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,y-m,S-d).normalize(),i[1].setComponents(l+s,f+c,y+m,S+d).normalize(),i[2].setComponents(l+o,f+u,y+v,S+p).normalize(),i[3].setComponents(l-o,f-u,y-v,S-p).normalize(),i[4].setComponents(l-a,f-h,y-_,S-g).normalize(),n===Xi)i[5].setComponents(l+a,f+h,y+_,S+g).normalize();else if(n===cu)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Xc.x=r.normal.x>0?e.max.x:e.min.x,Xc.y=r.normal.y>0?e.max.y:e.min.y,Xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function dy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function OS(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){let v=h[f],_=h[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){let _=h[m];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hi=class t extends Yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,m=[],v=[],_=[],y=[];for(let d=0;d<u;d++){let p=d*f-o;for(let g=0;g<c;g++){let S=g*h-s;v.push(S,-p,0),_.push(0,0,1),y.push(g/a),y.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<a;p++){let g=p+c*d,S=p+c*(d+1),b=p+1+c*(d+1),A=p+1+c*d;m.push(g,S,A),m.push(S,b,A)}this.setIndex(m),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,x4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:kS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:VS,alphatest_fragment:HS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:XS,batching_pars_vertex:qS,batching_vertex:YS,begin_vertex:$S,beginnormal_vertex:ZS,bsdfs:KS,iridescence_fragment:JS,bumpmap_pars_fragment:jS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:aM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:hM,emissivemap_fragment:fM,emissivemap_pars_fragment:dM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:yM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:PM,envmap_vertex:xM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:wM,fog_pars_fragment:EM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:AM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:CM,lights_pars_begin:RM,lights_toon_fragment:IM,lights_toon_pars_fragment:LM,lights_phong_fragment:NM,lights_phong_pars_fragment:DM,lights_physical_fragment:UM,lights_physical_pars_fragment:FM,lights_fragment_begin:OM,lights_fragment_maps:kM,lights_fragment_end:BM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:GM,map_fragment:WM,map_pars_fragment:XM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:ZM,morphinstance_vertex:KM,morphcolor_vertex:JM,morphnormal_vertex:jM,morphtarget_pars_vertex:QM,morphtarget_vertex:e4,normal_fragment_begin:t4,normal_fragment_maps:n4,normal_pars_fragment:i4,normal_pars_vertex:r4,normal_vertex:s4,normalmap_pars_fragment:o4,clearcoat_normal_fragment_begin:a4,clearcoat_normal_fragment_maps:l4,clearcoat_pars_fragment:c4,iridescence_pars_fragment:u4,opaque_fragment:h4,packing:f4,premultiplied_alpha_fragment:d4,project_vertex:p4,dithering_fragment:m4,dithering_pars_fragment:g4,roughnessmap_fragment:v4,roughnessmap_pars_fragment:y4,shadowmap_pars_fragment:_4,shadowmap_pars_vertex:x4,shadowmap_vertex:S4,shadowmask_pars_fragment:M4,skinbase_vertex:w4,skinning_pars_vertex:E4,skinning_vertex:T4,skinnormal_vertex:A4,specularmap_fragment:b4,specularmap_pars_fragment:C4,tonemapping_fragment:R4,tonemapping_pars_fragment:P4,transmission_fragment:I4,transmission_pars_fragment:L4,uv_pars_fragment:N4,uv_pars_vertex:D4,uv_vertex:U4,worldpos_vertex:F4,background_vert:O4,background_frag:k4,backgroundCube_vert:B4,backgroundCube_frag:z4,cube_vert:V4,cube_frag:H4,depth_vert:G4,depth_frag:W4,distanceRGBA_vert:X4,distanceRGBA_frag:q4,equirect_vert:Y4,equirect_frag:$4,linedashed_vert:Z4,linedashed_frag:K4,meshbasic_vert:J4,meshbasic_frag:j4,meshlambert_vert:Q4,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:aw,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:hw,points_frag:fw,shadow_vert:dw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},xi={basic:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:nn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:nn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:nn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:nn([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:nn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:nn([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:nn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:nn([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:nn([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:nn([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};xi.physical={uniforms:nn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var qc={r:0,b:0,g:0},ts=new qn,vw=new it;function yw(t,e,n,i,r,s,o){let a=new Be(0),l=s===!0?0:1,c,u,h=null,f=0,m=null;function v(p){let g=p.isScene===!0?p.background:null;return g&&g.isTexture&&(g=(p.backgroundBlurriness>0?n:e).get(g)),g}function _(p){let g=!1,S=v(p);S===null?d(a,l):S&&S.isColor&&(d(S,1),g=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(p,g){let S=v(g);S&&(S.isCubeTexture||S.mapping===Lu)?(u===void 0&&(u=new wt(new Ba(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:wo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ts.copy(g.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vw.makeRotationFromEuler(ts)),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==dt,(h!==S||f!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wt(new hi(2,2),new wi({name:"BackgroundMaterial",uniforms:wo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,g){p.getRGB(qc,fy(t)),i.buffers.color.setClear(qc.r,qc.g,qc.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:_,addToRenderList:y}}function _w(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,w,k,D,O){let Z=!1,U=h(D,k,w);s!==U&&(s=U,c(s.object)),Z=m(x,D,k,O),Z&&v(x,D,k,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(x,w,k,D),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function h(x,w,k){let D=k.wireframe===!0,O=i[x.id];O===void 0&&(O={},i[x.id]=O);let Z=O[w.id];Z===void 0&&(Z={},O[w.id]=Z);let U=Z[D];return U===void 0&&(U=f(l()),Z[D]=U),U}function f(x){let w=[],k=[],D=[];for(let O=0;O<n;O++)w[O]=0,k[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:D,object:x,attributes:{},index:null}}function m(x,w,k,D){let O=s.attributes,Z=w.attributes,U=0,q=k.getAttributes();for(let z in q)if(q[z].location>=0){let ee=O[z],ue=Z[z];if(ue===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;U++}return s.attributesNum!==U||s.index!==D}function v(x,w,k,D){let O={},Z=w.attributes,U=0,q=k.getAttributes();for(let z in q)if(q[z].location>=0){let ee=Z[z];ee===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));let ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),O[z]=ue,U++}s.attributes=O,s.attributesNum=U,s.index=D}function _(){let x=s.newAttributes;for(let w=0,k=x.length;w<k;w++)x[w]=0}function y(x){d(x,0)}function d(x,w){let k=s.newAttributes,D=s.enabledAttributes,O=s.attributeDivisors;k[x]=1,D[x]===0&&(t.enableVertexAttribArray(x),D[x]=1),O[x]!==w&&(t.vertexAttribDivisor(x,w),O[x]=w)}function p(){let x=s.newAttributes,w=s.enabledAttributes;for(let k=0,D=w.length;k<D;k++)w[k]!==x[k]&&(t.disableVertexAttribArray(k),w[k]=0)}function g(x,w,k,D,O,Z,U){U===!0?t.vertexAttribIPointer(x,w,k,O,Z):t.vertexAttribPointer(x,w,k,D,O,Z)}function S(x,w,k,D){_();let O=D.attributes,Z=k.getAttributes(),U=w.defaultAttributeValues;for(let q in Z){let z=Z[q];if(z.location>=0){let se=O[q];if(se===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let ee=se.normalized,ue=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;let Oe=Fe.buffer,X=Fe.type,J=Fe.bytesPerElement,pe=X===t.INT||X===t.UNSIGNED_INT||se.gpuType===_m;if(se.isInterleavedBufferAttribute){let ae=se.data,Ie=ae.stride,Te=se.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<z.locationSize;We++)d(z.location+We,ae.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<z.locationSize;We++)y(z.location+We);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let We=0;We<z.locationSize;We++)g(z.location+We,ue/z.locationSize,X,ee,Ie*J,(Te+ue/z.locationSize*We)*J,pe)}else{if(se.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)d(z.location+ae,se.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<z.locationSize;ae++)y(z.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ae=0;ae<z.locationSize;ae++)g(z.location+ae,ue/z.locationSize,X,ee,ue*J,ue/z.locationSize*ae*J,pe)}}else if(U!==void 0){let ee=U[q];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(z.location,ee);break;case 3:t.vertexAttrib3fv(z.location,ee);break;case 4:t.vertexAttrib4fv(z.location,ee);break;default:t.vertexAttrib1fv(z.location,ee)}}}}p()}function b(){R();for(let x in i){let w=i[x];for(let k in w){let D=w[k];for(let O in D)u(D[O].object),delete D[O];delete w[k]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;let w=i[x.id];for(let k in w){let D=w[k];for(let O in D)u(D[O].object),delete D[O];delete w[k]}delete i[x.id]}function T(x){for(let w in i){let k=i[w];if(k[x.id]===void 0)continue;let D=k[x.id];for(let O in D)u(D[O].object),delete D[O];delete k[x.id]}}function R(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:y,disableUnusedAttributes:p}}function xw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];n.update(m,i,1)}function l(c,u,h,f){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_];for(let _=0;_<f.length;_++)n.update(v,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ci&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==qi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:y,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:b,maxSamples:A}}function Mw(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Wi,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,m){let v=h.clippingPlanes,_=h.clipIntersection,y=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!y)s?u(null):c();else{let p=s?0:i,g=p*4,S=d.clippingState||null;l.value=S,S=u(v,f,g,m);for(let b=0;b!==g;++b)S[b]=n[b];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,v){let _=h!==null?h.length:0,y=null;if(_!==0){if(y=l.value,v!==!0||y===null){let d=m+_*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<d)&&(y=new Float32Array(d));for(let g=0,S=m;g!==_;++g,S+=4)o.copy(h[g]).applyMatrix4(p,a),o.normal.toArray(y,S),y[S+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,y}}function ww(t){let e=new WeakMap;function n(o,a){return a===ap?o.mapping=_o:a===lp&&(o.mapping=xo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ap||a===lp)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hp(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var vu=class extends mu{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},ho=4,_v=[.125,.215,.35,.446,.526,.582],os=20,Wd=new vu,xv=new Be,Xd=null,qd=0,Yd=0,$d=!1,is=(1+Math.sqrt(5))/2,co=1/is,Sv=[new L(-is,co,0),new L(is,co,0),new L(-co,0,is),new L(co,0,is),new L(0,is,-co),new L(0,is,co),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],yu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,qd,Yd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_o||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Xa,format:ci,colorSpace:Nr,depthBuffer:!1},r=Mv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ew(s)),this._blurMaterial=Tw(s,e,n)}return r}_compileMaterial(e){let n=new wt(this._lodPlanes[0],e);this._renderer.compile(n,Wd)}_sceneToCubeUV(e,n,i,r){let a=new Kt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xv),u.toneMapping=Cr,u.autoClear=!1;let m=new ui({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),v=new wt(new Ba,m),_=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,_=!0):(m.color.copy(xv),_=!0);for(let d=0;d<6;d++){let p=d%3;p===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):p===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let g=this._cubeSize;Yc(r,p*g,d>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=y}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===_o||e.mapping===xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Yc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wd)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sv[(r-s-1)%Sv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new wt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*os-1),_=s/v,y=isFinite(s)?1+Math.floor(u*_):os;y>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${os}`);let d=[],p=0;for(let T=0;T<os;++T){let R=T/_,H=Math.exp(-R*R/2);d.push(H),T===0?p+=H:T<y&&(p+=2*H)}for(let T=0;T<d.length;T++)d[T]=d[T]/p;f.envMap.value=e.texture,f.samples.value=y,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;let S=this._sizeLods[r],b=3*S*(r>g-ho?r-g+ho:0),A=4*(this._cubeSize-S);Yc(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Wd)}};function Ew(t){let e=[],n=[],i=[],r=t,s=t-ho+1+_v.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ho?l=_v[o-t+ho-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,_=3,y=2,d=1,p=new Float32Array(_*v*m),g=new Float32Array(y*v*m),S=new Float32Array(d*v*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,R=A>2?0:-1,H=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];p.set(H,_*v*A),g.set(f,y*v*A);let x=[A,A,A,A,A,A];S.set(x,d*v*A)}let b=new Yn;b.setAttribute("position",new Un(p,_)),b.setAttribute("uv",new Un(g,y)),b.setAttribute("faceIndex",new Un(S,d)),e.push(b),r>ho&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mv(t,e,n){let i=new Yi(t,e,n);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Tw(t,e,n){let i=new Float32Array(os),r=new L(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function wv(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Ev(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function bm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Aw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ap||l===lp,u=l===_o||l===xo;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new yu(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new yu(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bw(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&ru("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cw(t,e,n,i){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let _=f.morphAttributes[v];for(let y=0,d=_.length;y<d;y++)e.remove(_[y])}f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){let f=h.attributes;for(let v in f)e.update(f[v],t.ARRAY_BUFFER);let m=h.morphAttributes;for(let v in m){let _=m[v];for(let y=0,d=_.length;y<d;y++)e.update(_[y],t.ARRAY_BUFFER)}}function c(h){let f=[],m=h.index,v=h.attributes.position,_=0;if(m!==null){let p=m.array;_=m.version;for(let g=0,S=p.length;g<S;g+=3){let b=p[g+0],A=p[g+1],T=p[g+2];f.push(b,A,A,T,T,b)}}else if(v!==void 0){let p=v.array;_=v.version;for(let g=0,S=p.length/3-1;g<S;g+=3){let b=g+0,A=g+1,T=g+2;f.push(b,A,A,T,T,b)}}else return;let y=new(uy(f)?pu:du)(f,1);y.version=_;let d=s.get(h);d&&e.remove(d),s.set(h,y)}function u(h){let f=s.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Rw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*o),n.update(m,i,1)}function c(f,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,f*o,v),n.update(m,i,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,v);let y=0;for(let d=0;d<v;d++)y+=m[d];n.update(y,i,1)}function h(f,m,v,_){if(v===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{y.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,v);let d=0;for(let p=0;p<v;p++)d+=m[p];for(let p=0;p<_.length;p++)n.update(d,i,_[p])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Pw(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Iw(t,e,n){let i=new WeakMap,r=new st;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let H=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",H)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],p=a.morphAttributes.color||[],g=0;m===!0&&(g=1),v===!0&&(g=2),_===!0&&(g=3);let S=a.attributes.position.count*g,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*b*4*h),T=new fu(A,S,b,h);T.type=Si,T.needsUpdate=!0;let R=g*4;for(let x=0;x<h;x++){let w=y[x],k=d[x],D=p[x],O=S*b*4*x;for(let Z=0;Z<w.count;Z++){let U=Z*R;m===!0&&(r.fromBufferAttribute(w,Z),A[O+U+0]=r.x,A[O+U+1]=r.y,A[O+U+2]=r.z,A[O+U+3]=0),v===!0&&(r.fromBufferAttribute(k,Z),A[O+U+4]=r.x,A[O+U+5]=r.y,A[O+U+6]=r.z,A[O+U+7]=0),_===!0&&(r.fromBufferAttribute(D,Z),A[O+U+8]=r.x,A[O+U+9]=r.y,A[O+U+10]=r.z,A[O+U+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new ze(S,b)},i.set(a,f),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Lw(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var _u=class extends _n{constructor(e,n,i,r,s,o,a,l,c,u=mo){if(u!==mo&&u!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mo&&(i=cs),i===void 0&&u===Mo&&(i=So),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},py=new _n,Tv=new _u(1,1),my=new fu,gy=new zp,vy=new gu,Av=[],bv=[],Cv=new Float32Array(16),Rv=new Float32Array(9),Pv=new Float32Array(4);function Ao(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Av[r];if(s===void 0&&(s=new Float32Array(r),Av[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Du(t,e){let n=bv[e];n===void 0&&(n=new Int32Array(e),bv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Nw(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Dw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Uw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function Fw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Ow(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Pv.set(i),t.uniformMatrix2fv(this.addr,!1,Pv),Dt(n,i)}}function kw(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Rv.set(i),t.uniformMatrix3fv(this.addr,!1,Rv),Dt(n,i)}}function Bw(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;Cv.set(i),t.uniformMatrix4fv(this.addr,!1,Cv),Dt(n,i)}}function zw(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Vw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function Hw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function Gw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function Ww(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function qw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function Yw(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function $w(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Tv.compareFunction=cy,s=Tv):s=py,n.setTexture2D(e||s,r)}function Zw(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gy,r)}function Kw(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vy,r)}function Jw(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||my,r)}function jw(t){switch(t){case 5126:return Nw;case 35664:return Dw;case 35665:return Uw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return Bw;case 5124:case 35670:return zw;case 35667:case 35671:return Vw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return qw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Jw}}function Qw(t,e){t.uniform1fv(this.addr,e)}function eE(t,e){let n=Ao(e,this.size,2);t.uniform2fv(this.addr,n)}function tE(t,e){let n=Ao(e,this.size,3);t.uniform3fv(this.addr,n)}function nE(t,e){let n=Ao(e,this.size,4);t.uniform4fv(this.addr,n)}function iE(t,e){let n=Ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rE(t,e){let n=Ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sE(t,e){let n=Ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oE(t,e){t.uniform1iv(this.addr,e)}function aE(t,e){t.uniform2iv(this.addr,e)}function lE(t,e){t.uniform3iv(this.addr,e)}function cE(t,e){t.uniform4iv(this.addr,e)}function uE(t,e){t.uniform1uiv(this.addr,e)}function hE(t,e){t.uniform2uiv(this.addr,e)}function fE(t,e){t.uniform3uiv(this.addr,e)}function dE(t,e){t.uniform4uiv(this.addr,e)}function pE(t,e,n){let i=this.cache,r=e.length,s=Du(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||py,s[o])}function mE(t,e,n){let i=this.cache,r=e.length,s=Du(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||gy,s[o])}function gE(t,e,n){let i=this.cache,r=e.length,s=Du(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||vy,s[o])}function vE(t,e,n){let i=this.cache,r=e.length,s=Du(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||my,s[o])}function yE(t){switch(t){case 5126:return Qw;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return hE;case 36295:return fE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}var Gp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jw(n.type)}},Wp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yE(n.type)}},Xp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Zd=/(\w+)(\])?(\[|\.)?/g;function Iv(t,e){t.seq.push(e),t.map[e.id]=e}function _E(t,e,n){let i=t.name,r=i.length;for(Zd.lastIndex=0;;){let s=Zd.exec(i),o=Zd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Iv(n,c===void 0?new Gp(a,t,e):new Wp(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Xp(a),Iv(n,h)),n=h}}}var vo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);_E(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Lv(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var xE=37297,SE=0;function ME(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wE(t){let e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t),i;switch(e===n?i="":e===lu&&n===au?i="LinearDisplayP3ToLinearSRGB":e===au&&n===lu&&(i="LinearSRGBToLinearDisplayP3"),t){case Nr:case Nu:return[i,"LinearTransferOETF"];case gn:case Am:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Nv(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ME(t.getShaderSource(e),o)}else return r}function EE(t,e){let n=wE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TE(t,e){let n;switch(e){case Kx:n="Linear";break;case Jx:n="Reinhard";break;case jx:n="Cineon";break;case Qx:n="ACESFilmic";break;case tS:n="AgX";break;case nS:n="Neutral";break;case eS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var $c=new L;function AE(){Qe.getLuminanceCoefficients($c);let t=$c.x.toFixed(4),e=$c.y.toFixed(4),n=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function CE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function La(t){return t!==""}function Dv(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qp(t){return t.replace(PE,LE)}var IE=new Map;function LE(t,e){let n=Ne[e];if(n===void 0){let i=IE.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qp(n)}var NE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(t){return t.replace(NE,DE)}function DE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ov(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Rx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function FE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _o:case xo:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function kE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case vm:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case Zx:e="ENVMAP_BLENDING_ADD";break}return e}function BE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zE(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=UE(n),c=FE(n),u=OE(n),h=kE(n),f=BE(n),m=bE(n),v=CE(s),_=r.createProgram(),y,d,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),y.length>0&&(y+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),d.length>0&&(d+=`
`)):(y=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),d=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Cr?TE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,EE("linearToOutputTexel",n.outputColorSpace),AE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),o=qp(o),o=Dv(o,n),o=Uv(o,n),a=qp(a),a=Dv(a,n),a=Uv(a,n),o=Fv(o),a=Fv(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,d=["#define varying in",n.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let g=p+y+o,S=p+d+a,b=Lv(r,r.VERTEX_SHADER,g),A=Lv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,b),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(w){if(t.debug.checkShaderErrors){let k=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(b).trim(),O=r.getShaderInfoLog(A).trim(),Z=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,A);else{let q=Nv(r,b,"vertex"),z=Nv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+q+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||O==="")&&(U=!1);U&&(w.diagnostics={runnable:Z,programLog:k,vertexShader:{log:D,prefix:y},fragmentShader:{log:O,prefix:d}})}r.deleteShader(b),r.deleteShader(A),R=new vo(r,_),H=RE(r,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,xE)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}var VE=0,Yp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new $p(e),n.set(e,i)),i}},$p=class{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}};function HE(t,e,n,i,r,s,o){let a=new ka,l=new Yp,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures,v=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,w,k,D,O){let Z=D.fog,U=O.geometry,q=x.isMeshStandardMaterial?D.environment:null,z=(x.isMeshStandardMaterial?n:e).get(x.envMap||q),se=z&&z.mapping===Lu?z.image.height:null,ee=_[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));let ue=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Fe=ue!==void 0?ue.length:0,Oe=0;U.morphAttributes.position!==void 0&&(Oe=1),U.morphAttributes.normal!==void 0&&(Oe=2),U.morphAttributes.color!==void 0&&(Oe=3);let X,J,pe,ae;if(ee){let ln=xi[ee];X=ln.vertexShader,J=ln.fragmentShader}else X=x.vertexShader,J=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);let Ie=t.getRenderTarget(),Te=O.isInstancedMesh===!0,We=O.isBatchedMesh===!0,rt=!!x.map,Xe=!!x.matcap,P=!!z,Sn=!!x.aoMap,He=!!x.lightMap,$e=!!x.bumpMap,be=!!x.normalMap,ct=!!x.displacementMap,Pe=!!x.emissiveMap,C=!!x.metalnessMap,M=!!x.roughnessMap,B=x.anisotropy>0,$=x.clearcoat>0,j=x.dispersion>0,Y=x.iridescence>0,xe=x.sheen>0,oe=x.transmission>0,me=B&&!!x.anisotropyMap,Ze=$&&!!x.clearcoatMap,te=$&&!!x.clearcoatNormalMap,ge=$&&!!x.clearcoatRoughnessMap,Ce=Y&&!!x.iridescenceMap,Re=Y&&!!x.iridescenceThicknessMap,ve=xe&&!!x.sheenColorMap,Ge=xe&&!!x.sheenRoughnessMap,Le=!!x.specularMap,ot=!!x.specularColorMap,I=!!x.specularIntensityMap,he=oe&&!!x.transmissionMap,W=oe&&!!x.thicknessMap,K=!!x.gradientMap,le=!!x.alphaMap,fe=x.alphaTest>0,qe=!!x.alphaHash,bt=!!x.extensions,an=Cr;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(an=t.toneMapping);let Ke={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:J,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:We,batchingColor:We&&O._colorsTexture!==null,instancing:Te,instancingColor:Te&&O.instanceColor!==null,instancingMorph:Te&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Nr,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:Xe,envMap:P,envMapMode:P&&z.mapping,envMapCubeUVHeight:se,aoMap:Sn,lightMap:He,bumpMap:$e,normalMap:be,displacementMap:m&&ct,emissiveMap:Pe,normalMapObjectSpace:be&&x.normalMapType===sS,normalMapTangentSpace:be&&x.normalMapType===ly,metalnessMap:C,roughnessMap:M,anisotropy:B,anisotropyMap:me,clearcoat:$,clearcoatMap:Ze,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:j,iridescence:Y,iridescenceMap:Ce,iridescenceThicknessMap:Re,sheen:xe,sheenColorMap:ve,sheenRoughnessMap:Ge,specularMap:Le,specularColorMap:ot,specularIntensityMap:I,transmission:oe,transmissionMap:he,thicknessMap:W,gradientMap:K,opaque:x.transparent===!1&&x.blending===po&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:fe,alphaHash:qe,combine:x.combine,mapUv:rt&&y(x.map.channel),aoMapUv:Sn&&y(x.aoMap.channel),lightMapUv:He&&y(x.lightMap.channel),bumpMapUv:$e&&y(x.bumpMap.channel),normalMapUv:be&&y(x.normalMap.channel),displacementMapUv:ct&&y(x.displacementMap.channel),emissiveMapUv:Pe&&y(x.emissiveMap.channel),metalnessMapUv:C&&y(x.metalnessMap.channel),roughnessMapUv:M&&y(x.roughnessMap.channel),anisotropyMapUv:me&&y(x.anisotropyMap.channel),clearcoatMapUv:Ze&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(x.sheenRoughnessMap.channel),specularMapUv:Le&&y(x.specularMap.channel),specularColorMapUv:ot&&y(x.specularColorMap.channel),specularIntensityMapUv:I&&y(x.specularIntensityMap.channel),transmissionMapUv:he&&y(x.transmissionMap.channel),thicknessMapUv:W&&y(x.thicknessMap.channel),alphaMapUv:le&&y(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(be||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(rt||le),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:an,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dn,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:bt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&x.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(g(w,x),S(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){let w=_[x.type],k;if(w){let D=xi[w];k=LS.clone(D.uniforms)}else k=x.uniforms;return k}function A(x,w){let k;for(let D=0,O=u.length;D<O;D++){let Z=u[D];if(Z.cacheKey===w){k=Z,++k.usedTimes;break}}return k===void 0&&(k=new zE(t,w,x,s),u.push(k)),k}function T(x){if(--x.usedTimes===0){let w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),x.destroy()}}function R(x){l.remove(x)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:H}}function GE(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function WE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bv(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,v,_,y){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:y},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=y),e++,d}function a(h,f,m,v,_,y){let d=o(h,f,m,v,_,y);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(h,f,m,v,_,y){let d=o(h,f,m,v,_,y);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||WE),i.length>1&&i.sort(f||kv),r.length>1&&r.sort(f||kv)}function u(){for(let h=e,f=t.length;h<f;h++){let m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XE(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Bv,t.set(i,[o])):r>=s.length?(o=new Bv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Be};break;case"SpotLight":n={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function YE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var $E=0;function ZE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KE(t){let e=new qE,n=YE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new it,o=new it;function a(c){let u=0,h=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,v=0,_=0,y=0,d=0,p=0,g=0,S=0,b=0,A=0,T=0;c.sort(ZE);for(let H=0,x=c.length;H<x;H++){let w=c[H],k=w.color,D=w.intensity,O=w.distance,Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=k.r*D,h+=k.g*D,f+=k.b*D;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],D);T++}else if(w.isDirectionalLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,z=n.get(w);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=w.shadow.matrix,p++}i.directional[m]=U,m++}else if(w.isSpotLight){let U=e.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(k).multiplyScalar(D),U.distance=O,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[_]=U;let q=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,q.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[_]=q.matrix,w.castShadow){let z=n.get(w);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Z,S++}_++}else if(w.isRectAreaLight){let U=e.get(w);U.color.copy(k).multiplyScalar(D),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[y]=U,y++}else if(w.isPointLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let q=w.shadow,z=n.get(w);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=w.shadow.matrix,g++}i.point[v]=U,v++}else if(w.isHemisphereLight){let U=e.get(w);U.skyColor.copy(w.color).multiplyScalar(D),U.groundColor.copy(w.groundColor).multiplyScalar(D),i.hemi[d]=U,d++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==m||R.pointLength!==v||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==d||R.numDirectionalShadows!==p||R.numPointShadows!==g||R.numSpotShadows!==S||R.numSpotMaps!==b||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=m,R.pointLength=v,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=d,R.numDirectionalShadows=p,R.numPointShadows=g,R.numSpotShadows=S,R.numSpotMaps=b,R.numLightProbes=T,i.version=$E++)}function l(c,u){let h=0,f=0,m=0,v=0,_=0,y=u.matrixWorldInverse;for(let d=0,p=c.length;d<p;d++){let g=c[d];if(g.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(y),h++}else if(g.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(y),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(y),m++}else if(g.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(y),o.identity(),s.copy(g.matrixWorld),s.premultiply(y),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(y),f++}else if(g.isHemisphereLight){let S=i.hemi[_];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(y),_++}}}return{setup:a,setupView:l,state:i}}function zv(t){let e=new KE(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JE(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new zv(t),e.set(r,[a])):s>=o.length?(a=new zv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var Zp=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kp=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e5(t,e,n){let i=new za,r=new ze,s=new ze,o=new st,a=new Zp({depthPacking:rS}),l=new Kp,c={},u=n.maxTextureSize,h={[Rr]:yn,[yn]:Rr,[Dn]:Dn},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:jE,fragmentShader:QE}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let v=new Yn;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new wt(v,f),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jv;let d=this.type;this.render=function(A,T,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||A.length===0)return;let H=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),k=t.state;k.setBlending(br),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let D=d!==Gi&&this.type===Gi,O=d===Gi&&this.type!==Gi;for(let Z=0,U=A.length;Z<U;Z++){let q=A[Z],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||D===!0||O===!0){let ue=this.type!==Gi?{minFilter:Lt,magFilter:Lt}:{};z.map!==null&&z.map.dispose(),z.map=new Yi(r.x,r.y,ue),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();let ee=z.getViewportCount();for(let ue=0;ue<ee;ue++){let Fe=z.getViewport(ue);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),k.viewport(o),z.updateMatrices(q,ue),i=z.getFrustum(),S(T,R,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Gi&&p(z,R),z.needsUpdate=!1}d=this.type,y.needsUpdate=!1,t.setRenderTarget(H,x,w)};function p(A,T){let R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,m,_,null)}function g(A,T,R,H){let x=null,w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)x=w;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=x.uuid,D=T.uuid,O=c[k];O===void 0&&(O={},c[k]=O);let Z=O[D];Z===void 0&&(Z=x.clone(),O[D]=Z,T.addEventListener("dispose",b)),x=Z}if(x.visible=T.visible,x.wireframe=T.wireframe,H===Gi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let k=t.properties.get(x);k.light=R}return x}function S(A,T,R,H,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let D=e.update(A),O=A.material;if(Array.isArray(O)){let Z=D.groups;for(let U=0,q=Z.length;U<q;U++){let z=Z[U],se=O[z.materialIndex];if(se&&se.visible){let ee=g(A,se,H,x);A.onBeforeShadow(t,A,T,R,D,ee,z),t.renderBufferDirect(R,null,D,ee,A,z),A.onAfterShadow(t,A,T,R,D,ee,z)}}}else if(O.visible){let Z=g(A,O,H,x);A.onBeforeShadow(t,A,T,R,D,Z,null),t.renderBufferDirect(R,null,D,Z,A,null),A.onAfterShadow(t,A,T,R,D,Z,null)}}let k=A.children;for(let D=0,O=k.length;D<O;D++)S(k[D],T,R,H,x)}function b(A){A.target.removeEventListener("dispose",b);for(let R in c){let H=c[R],x=A.target.uuid;x in H&&(H[x].dispose(),delete H[x])}}}var t5={[ep]:tp,[np]:sp,[ip]:op,[yo]:rp,[tp]:ep,[sp]:np,[op]:ip,[rp]:yo};function n5(t){function e(){let I=!1,he=new st,W=null,K=new st(0,0,0,0);return{setMask:function(le){W!==le&&!I&&(t.colorMask(le,le,le,le),W=le)},setLocked:function(le){I=le},setClear:function(le,fe,qe,bt,an){an===!0&&(le*=bt,fe*=bt,qe*=bt),he.set(le,fe,qe,bt),K.equals(he)===!1&&(t.clearColor(le,fe,qe,bt),K.copy(he))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,W=null,K=null,le=null;return{setReversed:function(fe){he=fe},setTest:function(fe){fe?pe(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(fe){W!==fe&&!I&&(t.depthMask(fe),W=fe)},setFunc:function(fe){if(he&&(fe=t5[fe]),K!==fe){switch(fe){case ep:t.depthFunc(t.NEVER);break;case tp:t.depthFunc(t.ALWAYS);break;case np:t.depthFunc(t.LESS);break;case yo:t.depthFunc(t.LEQUAL);break;case ip:t.depthFunc(t.EQUAL);break;case rp:t.depthFunc(t.GEQUAL);break;case sp:t.depthFunc(t.GREATER);break;case op:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=fe}},setLocked:function(fe){I=fe},setClear:function(fe){le!==fe&&(t.clearDepth(fe),le=fe)},reset:function(){I=!1,W=null,K=null,le=null}}}function i(){let I=!1,he=null,W=null,K=null,le=null,fe=null,qe=null,bt=null,an=null;return{setTest:function(Ke){I||(Ke?pe(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!I&&(t.stencilMask(Ke),he=Ke)},setFunc:function(Ke,ln,Ai){(W!==Ke||K!==ln||le!==Ai)&&(t.stencilFunc(Ke,ln,Ai),W=Ke,K=ln,le=Ai)},setOp:function(Ke,ln,Ai){(fe!==Ke||qe!==ln||bt!==Ai)&&(t.stencilOp(Ke,ln,Ai),fe=Ke,qe=ln,bt=Ai)},setLocked:function(Ke){I=Ke},setClear:function(Ke){an!==Ke&&(t.clearStencil(Ke),an=Ke)},reset:function(){I=!1,he=null,W=null,K=null,le=null,fe=null,qe=null,bt=null,an=null}}}let r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,f=[],m=null,v=!1,_=null,y=null,d=null,p=null,g=null,S=null,b=null,A=new Be(0,0,0),T=0,R=!1,H=null,x=null,w=null,k=null,D=null,O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,U=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=U>=2);let z=null,se={},ee=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Fe=new st().fromArray(ee),Oe=new st().fromArray(ue);function X(I,he,W,K){let le=new Uint8Array(4),fe=t.createTexture();t.bindTexture(I,fe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<W;qe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(he+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return fe}let J={};J[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),s.setFunc(yo),He(!1),$e(Y2),pe(t.CULL_FACE),P(br);function pe(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ae(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ie(I,he){return u[I]!==he?(t.bindFramebuffer(I,he),u[I]=he,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=he),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(I,he){let W=f,K=!1;if(I){W=h.get(he),W===void 0&&(W=[],h.set(he,W));let le=I.textures;if(W.length!==le.length||W[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,qe=le.length;fe<qe;fe++)W[fe]=t.COLOR_ATTACHMENT0+fe;W.length=le.length,K=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,K=!0);K&&t.drawBuffers(W)}function We(I){return m!==I?(t.useProgram(I),m=I,!0):!1}let rt={[rs]:t.FUNC_ADD,[Ix]:t.FUNC_SUBTRACT,[Lx]:t.FUNC_REVERSE_SUBTRACT};rt[Nx]=t.MIN,rt[Dx]=t.MAX;let Xe={[Ux]:t.ZERO,[Fx]:t.ONE,[Ox]:t.SRC_COLOR,[jd]:t.SRC_ALPHA,[Gx]:t.SRC_ALPHA_SATURATE,[Vx]:t.DST_COLOR,[Bx]:t.DST_ALPHA,[kx]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[Hx]:t.ONE_MINUS_DST_COLOR,[zx]:t.ONE_MINUS_DST_ALPHA,[Wx]:t.CONSTANT_COLOR,[Xx]:t.ONE_MINUS_CONSTANT_COLOR,[qx]:t.CONSTANT_ALPHA,[Yx]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,he,W,K,le,fe,qe,bt,an,Ke){if(I===br){v===!0&&(ae(t.BLEND),v=!1);return}if(v===!1&&(pe(t.BLEND),v=!0),I!==Px){if(I!==_||Ke!==R){if((y!==rs||g!==rs)&&(t.blendEquation(t.FUNC_ADD),y=rs,g=rs),Ke)switch(I){case po:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Da:t.blendFunc(t.ONE,t.ONE);break;case $2:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Z2:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case po:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Da:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $2:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Z2:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,p=null,S=null,b=null,A.set(0,0,0),T=0,_=I,R=Ke}return}le=le||he,fe=fe||W,qe=qe||K,(he!==y||le!==g)&&(t.blendEquationSeparate(rt[he],rt[le]),y=he,g=le),(W!==d||K!==p||fe!==S||qe!==b)&&(t.blendFuncSeparate(Xe[W],Xe[K],Xe[fe],Xe[qe]),d=W,p=K,S=fe,b=qe),(bt.equals(A)===!1||an!==T)&&(t.blendColor(bt.r,bt.g,bt.b,an),A.copy(bt),T=an),_=I,R=!1}function Sn(I,he){I.side===Dn?ae(t.CULL_FACE):pe(t.CULL_FACE);let W=I.side===yn;he&&(W=!W),He(W),I.blending===po&&I.transparent===!1?P(br):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){H!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),H=I)}function $e(I){I!==bx?(pe(t.CULL_FACE),I!==x&&(I===Y2?t.cullFace(t.BACK):I===Cx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),x=I}function be(I){I!==w&&(Z&&t.lineWidth(I),w=I)}function ct(I,he,W){I?(pe(t.POLYGON_OFFSET_FILL),(k!==he||D!==W)&&(t.polygonOffset(he,W),k=he,D=W)):ae(t.POLYGON_OFFSET_FILL)}function Pe(I){I?pe(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+O-1),z!==I&&(t.activeTexture(I),z=I)}function M(I,he,W){W===void 0&&(z===null?W=t.TEXTURE0+O-1:W=z);let K=se[W];K===void 0&&(K={type:void 0,texture:void 0},se[W]=K),(K.type!==I||K.texture!==he)&&(z!==W&&(t.activeTexture(W),z=W),t.bindTexture(I,he||J[I]),K.type=I,K.texture=he)}function B(){let I=se[z];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Fe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function ve(I){Oe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function Ge(I,he){let W=l.get(he);W===void 0&&(W=new WeakMap,l.set(he,W));let K=W.get(I);K===void 0&&(K=t.getUniformBlockIndex(he,I.name),W.set(I,K))}function Le(I,he){let K=l.get(he).get(I);a.get(he)!==K&&(t.uniformBlockBinding(he,K,I.__bindingPointIndex),a.set(he,K))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,se={},u={},h=new WeakMap,f=[],m=null,v=!1,_=null,y=null,d=null,p=null,g=null,S=null,b=null,A=new Be(0,0,0),T=0,R=!1,H=null,x=null,w=null,k=null,D=null,Fe.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:ae,bindFramebuffer:Ie,drawBuffers:Te,useProgram:We,setBlending:P,setMaterial:Sn,setFlipSided:He,setCullFace:$e,setLineWidth:be,setPolygonOffset:ct,setScissorTest:Pe,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:ge,texImage3D:Ce,updateUBOMapping:Ge,uniformBlockBinding:Le,texStorage2D:Ze,texStorage3D:te,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Re,viewport:ve,reset:ot}}function Vv(t,e,n,i){let r=i5(i);switch(n){case ny:return t*e;case ry:return t*e;case sy:return t*e*2;case Mm:return t*e/r.components*r.byteLength;case wm:return t*e/r.components*r.byteLength;case oy:return t*e*2/r.components*r.byteLength;case Em:return t*e*2/r.components*r.byteLength;case iy:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case Tm:return t*e*4/r.components*r.byteLength;case Qc:case eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hp:case dp:return Math.max(t,16)*Math.max(e,8)/4;case up:case fp:return Math.max(t,8)*Math.max(e,8)/2;case pp:case mp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case iu:case Ip:case Lp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ay:case Np:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dp:case Up:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function i5(t){switch(t){case qi:case Qv:return{byteLength:1,components:1};case Fa:case ey:case Xa:return{byteLength:2,components:1};case xm:case Sm:return{byteLength:2,components:4};case cs:case _m:case Si:return{byteLength:4,components:1};case ty:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function r5(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return m?new OffscreenCanvas(C,M):uu("canvas")}function _(C,M,B){let $=1,j=Pe(C);if((j.width>B||j.height>B)&&($=B/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let Y=Math.floor($*j.width),xe=Math.floor($*j.height);h===void 0&&(h=v(Y,xe));let oe=M?v(Y,xe):h;return oe.width=Y,oe.height=xe,oe.getContext("2d").drawImage(C,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+xe+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function y(C){return C.generateMipmaps&&C.minFilter!==Lt&&C.minFilter!==li}function d(C){t.generateMipmap(C)}function p(C,M,B,$,j=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=M;if(M===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),M===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){let xe=j?ou:Qe.getTransfer($);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=xe===dt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(C,M){let B;return C?M===null||M===cs||M===So?B=t.DEPTH24_STENCIL8:M===Si?B=t.DEPTH32F_STENCIL8:M===Fa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cs||M===So?B=t.DEPTH_COMPONENT24:M===Si?B=t.DEPTH_COMPONENT32F:M===Fa&&(B=t.DEPTH_COMPONENT16),B}function S(C,M){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==li?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){let M=C.target;M.removeEventListener("dispose",b),T(M),M.isVideoTexture&&u.delete(M)}function A(C){let M=C.target;M.removeEventListener("dispose",A),H(M)}function T(C){let M=i.get(C);if(M.__webglInit===void 0)return;let B=C.source,$=f.get(B);if($){let j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(C),Object.keys($).length===0&&f.delete(B)}i.remove(C)}function R(C){let M=i.get(C);t.deleteTexture(M.__webglTexture);let B=C.source,$=f.get(B);delete $[M.__cacheKey],o.memory.textures--}function H(C){let M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)t.deleteFramebuffer(M.__webglFramebuffer[$][j]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=C.textures;for(let $=0,j=B.length;$<j;$++){let Y=i.get(B[$]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[$])}i.remove(C)}let x=0;function w(){x=0}function k(){let C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function D(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function O(C,M){let B=i.get(C);if(C.isVideoTexture&&be(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function Z(C,M){let B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function U(C,M){let B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function q(C,M){let B=i.get(C);if(C.version>0&&B.__version!==C.version){X(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}let z={[Ua]:t.REPEAT,[as]:t.CLAMP_TO_EDGE,[cp]:t.MIRRORED_REPEAT},se={[Lt]:t.NEAREST,[ym]:t.NEAREST_MIPMAP_NEAREST,[Cc]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[_d]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},ee={[oS]:t.NEVER,[fS]:t.ALWAYS,[aS]:t.LESS,[cy]:t.LEQUAL,[lS]:t.EQUAL,[hS]:t.GEQUAL,[cS]:t.GREATER,[uS]:t.NOTEQUAL};function ue(C,M){if(M.type===Si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===li||M.magFilter===_d||M.magFilter===Cc||M.magFilter===ls||M.minFilter===li||M.minFilter===_d||M.minFilter===Cc||M.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,z[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,z[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,z[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,se[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Lt||M.minFilter!==Cc&&M.minFilter!==ls||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Fe(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));let $=M.source,j=f.get($);j===void 0&&(j={},f.set($,j));let Y=D(M);if(Y!==C.__cacheKey){j[Y]===void 0&&(j[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[Y].usedTimes++;let xe=j[C.__cacheKey];xe!==void 0&&(j[C.__cacheKey].usedTimes--,xe.usedTimes===0&&R(M)),C.__cacheKey=Y,C.__webglTexture=j[Y].texture}return B}function Oe(C,M,B){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);let j=Fe(C,M),Y=M.source;n.bindTexture($,C.__webglTexture,t.TEXTURE0+B);let xe=i.get(Y);if(Y.version!==xe.__version||j===!0){n.activeTexture(t.TEXTURE0+B);let oe=Qe.getPrimaries(Qe.workingColorSpace),me=M.colorSpace===Ar?null:Qe.getPrimaries(M.colorSpace),Ze=M.colorSpace===Ar||oe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=_(M.image,!1,r.maxTextureSize);te=ct(M,te);let ge=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),Re=p(M.internalFormat,ge,Ce,M.colorSpace,M.isVideoTexture);ue($,M);let ve,Ge=M.mipmaps,Le=M.isVideoTexture!==!0,ot=xe.__version===void 0||j===!0,I=Y.dataReady,he=S(M,te);if(M.isDepthTexture)Re=g(M.format===Mo,M.type),ot&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Re,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,ge,Ce,null));else if(M.isDataTexture)if(Ge.length>0){Le&&ot&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ge[0].width,Ge[0].height);for(let W=0,K=Ge.length;W<K;W++)ve=Ge[W],Le?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Ce,ve.data):n.texImage2D(t.TEXTURE_2D,W,Re,ve.width,ve.height,0,ge,Ce,ve.data);M.generateMipmaps=!1}else Le?(ot&&n.texStorage2D(t.TEXTURE_2D,he,Re,te.width,te.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ce,te.data)):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,ge,Ce,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,Ge[0].width,Ge[0].height,te.depth);for(let W=0,K=Ge.length;W<K;W++)if(ve=Ge[W],M.format!==ci)if(ge!==null)if(Le){if(I)if(M.layerUpdates.size>0){let le=Vv(ve.width,ve.height,M.format,M.type);for(let fe of M.layerUpdates){let qe=ve.data.subarray(fe*le/ve.data.BYTES_PER_ELEMENT,(fe+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,fe,ve.width,ve.height,1,ge,qe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,te.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Re,ve.width,ve.height,te.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,te.depth,ge,Ce,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Re,ve.width,ve.height,te.depth,0,ge,Ce,ve.data)}else{Le&&ot&&n.texStorage2D(t.TEXTURE_2D,he,Re,Ge[0].width,Ge[0].height);for(let W=0,K=Ge.length;W<K;W++)ve=Ge[W],M.format!==ci?ge!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Ce,ve.data):n.texImage2D(t.TEXTURE_2D,W,Re,ve.width,ve.height,0,ge,Ce,ve.data)}else if(M.isDataArrayTexture)if(Le){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Re,te.width,te.height,te.depth),I)if(M.layerUpdates.size>0){let W=Vv(te.width,te.height,M.format,M.type);for(let K of M.layerUpdates){let le=te.data.subarray(K*W/te.data.BYTES_PER_ELEMENT,(K+1)*W/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ge,Ce,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ce,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,ge,Ce,te.data);else if(M.isData3DTexture)Le?(ot&&n.texStorage3D(t.TEXTURE_3D,he,Re,te.width,te.height,te.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,ge,Ce,te.data);else if(M.isFramebufferTexture){if(ot)if(Le)n.texStorage2D(t.TEXTURE_2D,he,Re,te.width,te.height);else{let W=te.width,K=te.height;for(let le=0;le<he;le++)n.texImage2D(t.TEXTURE_2D,le,Re,W,K,0,ge,Ce,null),W>>=1,K>>=1}}else if(Ge.length>0){if(Le&&ot){let W=Pe(Ge[0]);n.texStorage2D(t.TEXTURE_2D,he,Re,W.width,W.height)}for(let W=0,K=Ge.length;W<K;W++)ve=Ge[W],Le?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge,Ce,ve):n.texImage2D(t.TEXTURE_2D,W,Re,ge,Ce,ve);M.generateMipmaps=!1}else if(Le){if(ot){let W=Pe(te);n.texStorage2D(t.TEXTURE_2D,he,Re,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ce,te)}else n.texImage2D(t.TEXTURE_2D,0,Re,ge,Ce,te);y(M)&&d($),xe.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function X(C,M,B){if(M.image.length!==6)return;let $=Fe(C,M),j=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);let Y=i.get(j);if(j.version!==Y.__version||$===!0){n.activeTexture(t.TEXTURE0+B);let xe=Qe.getPrimaries(Qe.workingColorSpace),oe=M.colorSpace===Ar?null:Qe.getPrimaries(M.colorSpace),me=M.colorSpace===Ar||xe===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!Ze&&!te?ge[K]=_(M.image[K],!0,r.maxCubemapSize):ge[K]=te?M.image[K].image:M.image[K],ge[K]=ct(M,ge[K]);let Ce=ge[0],Re=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),Ge=p(M.internalFormat,Re,ve,M.colorSpace),Le=M.isVideoTexture!==!0,ot=Y.__version===void 0||$===!0,I=j.dataReady,he=S(M,Ce);ue(t.TEXTURE_CUBE_MAP,M);let W;if(Ze){Le&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,Ce.width,Ce.height);for(let K=0;K<6;K++){W=ge[K].mipmaps;for(let le=0;le<W.length;le++){let fe=W[le];M.format!==ci?Re!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,fe.width,fe.height,Re,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,fe.width,fe.height,Re,ve,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Ge,fe.width,fe.height,0,Re,ve,fe.data)}}}else{if(W=M.mipmaps,Le&&ot){W.length>0&&he++;let K=Pe(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(te){Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,Re,ve,ge[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,ge[K].width,ge[K].height,0,Re,ve,ge[K].data);for(let le=0;le<W.length;le++){let qe=W[le].image[K].image;Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,qe.width,qe.height,Re,ve,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ge,qe.width,qe.height,0,Re,ve,qe.data)}}else{Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,ve,ge[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Re,ve,ge[K]);for(let le=0;le<W.length;le++){let fe=W[le];Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Re,ve,fe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Ge,Re,ve,fe.image[K])}}}y(M)&&d(t.TEXTURE_CUBE_MAP),Y.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function J(C,M,B,$,j,Y){let xe=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),me=p(B.internalFormat,xe,oe,B.colorSpace);if(!i.get(M).__hasExternalTextures){let te=Math.max(1,M.width>>Y),ge=Math.max(1,M.height>>Y);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,Y,me,te,ge,M.depth,0,xe,oe,null):n.texImage2D(j,Y,me,te,ge,0,xe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,j,i.get(B).__webglTexture,0,He(M)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,j,i.get(B).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){let $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,Y=g(M.stencilBuffer,j),xe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=He(M);$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,Y,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,C)}else{let $=M.textures;for(let j=0;j<$.length;j++){let Y=$[j],xe=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),me=p(Y.internalFormat,xe,oe,Y.colorSpace),Ze=He(M);B&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,me,M.width,M.height):$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);let $=i.get(M.depthTexture).__webglTexture,j=He(M);if(M.depthTexture.format===mo)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(M.depthTexture.format===Mo)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ie(C){let M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[$],C,!1);else{let j=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,j)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(C,M,B){let $=i.get(C);M!==void 0&&J($.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ie(C)}function We(C){let M=C.texture,B=i.get(C),$=i.get(M);C.addEventListener("dispose",A);let j=C.textures,Y=C.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[oe][me]=t.createFramebuffer()}else B.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)B.__webglFramebuffer[oe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(xe)for(let oe=0,me=j.length;oe<me;oe++){let Ze=i.get(j[oe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&$e(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){let me=j[oe];B.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);let Ze=s.convert(me.format,me.colorSpace),te=s.convert(me.type),ge=p(me.internalFormat,Ze,te,me.colorSpace,C.isXRRenderTarget===!0),Ce=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ue(t.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)J(B.__webglFramebuffer[oe][me],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else J(B.__webglFramebuffer[oe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let oe=0,me=j.length;oe<me;oe++){let Ze=j[oe],te=i.get(Ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),ue(t.TEXTURE_2D,Ze),J(B.__webglFramebuffer,C,Ze,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),y(Ze)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,$.__webglTexture),ue(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)J(B.__webglFramebuffer[me],C,M,t.COLOR_ATTACHMENT0,oe,me);else J(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,oe,0);y(M)&&d(oe),n.unbindTexture()}C.depthBuffer&&Ie(C)}function rt(C){let M=C.textures;for(let B=0,$=M.length;B<$;B++){let j=M[B];if(y(j)){let Y=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(j).__webglTexture;n.bindTexture(Y,xe),d(Y),n.unbindTexture()}}}let Xe=[],P=[];function Sn(C){if(C.samples>0){if($e(C)===!1){let M=C.textures,B=C.width,$=C.height,j=t.COLOR_BUFFER_BIT,Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(C),oe=M.length>1;if(oe)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let Ze=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,B,$,0,0,B,$,j,t.NEAREST),l===!0&&(Xe.length=0,P.length=0,Xe.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(Y),P.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,xe.__webglColorRenderbuffer[me]);let Ze=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(C){return Math.min(r.maxSamples,C.samples)}function $e(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(C){let M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ct(C,M){let B=C.colorSpace,$=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Nr&&B!==Ar&&(Qe.getTransfer(B)===dt?($!==ci||j!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Pe(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=O,this.setTexture2DArray=Z,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=Te,this.setupRenderTarget=We,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=J,this.useMultisampledRTT=$e}function s5(t,e){function n(i,r=Ar){let s,o=Qe.getTransfer(r);if(i===qi)return t.UNSIGNED_BYTE;if(i===xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ty)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qv)return t.BYTE;if(i===ey)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===_m)return t.INT;if(i===cs)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Xa)return t.HALF_FLOAT;if(i===ny)return t.ALPHA;if(i===iy)return t.RGB;if(i===ci)return t.RGBA;if(i===ry)return t.LUMINANCE;if(i===sy)return t.LUMINANCE_ALPHA;if(i===mo)return t.DEPTH_COMPONENT;if(i===Mo)return t.DEPTH_STENCIL;if(i===Mm)return t.RED;if(i===wm)return t.RED_INTEGER;if(i===oy)return t.RG;if(i===Em)return t.RG_INTEGER;if(i===Tm)return t.RGBA_INTEGER;if(i===Qc||i===eu||i===tu||i===nu)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===up||i===hp||i===fp||i===dp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===up)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pp||i===mp||i===gp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pp||i===mp)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vp||i===yp||i===_p||i===xp||i===Sp||i===Mp||i===wp||i===Ep||i===Tp||i===Ap||i===bp||i===Cp||i===Rp||i===Pp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_p)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ep)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ap)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===iu||i===Ip||i===Lp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===iu)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ay||i===Np||i===Dp||i===Up)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===iu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Np)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Up)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Jp=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fo=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},o5={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let y=n.getJointPose(_,i),d=this._getHandJoint(c,_);y!==null&&(d.matrix.fromArray(y.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=y.radius),d.visible=y!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o5)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},a5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new _n,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new wi({vertexShader:a5,fragmentShader:l5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qp=class extends Pr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,v=null,_=new jp,y=n.getContextAttributes(),d=null,p=null,g=[],S=[],b=new ze,A=null,T=new Kt;T.layers.enable(1),T.viewport=new st;let R=new Kt;R.layers.enable(2),R.viewport=new st;let H=[T,R],x=new Jp;x.layers.enable(1),x.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=g[X];return J===void 0&&(J=new Na,g[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=g[X];return J===void 0&&(J=new Na,g[X]=J),J.getGripSpace()},this.getHand=function(X){let J=g[X];return J===void 0&&(J=new Na,g[X]=J),J.getHandSpace()};function D(X){let J=S.indexOf(X.inputSource);if(J===-1)return;let pe=g[J];pe!==void 0&&(pe.update(X.inputSource,X.frame,c||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<g.length;X++){let J=S[X];J!==null&&(S[X]=null,g[X].disconnect(J))}w=null,k=null,_.reset(),e.setRenderTarget(d),m=null,f=null,h=null,r=null,p=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",O),r.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let J={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new Yi(m.framebufferWidth,m.framebufferHeight,{format:ci,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let J=null,pe=null,ae=null;y.depth&&(ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=y.stencil?Mo:mo,pe=y.stencil?So:cs);let Ie={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Yi(f.textureWidth,f.textureHeight,{format:ci,type:qi,depthTexture:new _u(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(X){for(let J=0;J<X.removed.length;J++){let pe=X.removed[J],ae=S.indexOf(pe);ae>=0&&(S[ae]=null,g[ae].disconnect(pe))}for(let J=0;J<X.added.length;J++){let pe=X.added[J],ae=S.indexOf(pe);if(ae===-1){for(let Te=0;Te<g.length;Te++)if(Te>=S.length){S.push(pe),ae=Te;break}else if(S[Te]===null){S[Te]=pe,ae=Te;break}if(ae===-1)break}let Ie=g[ae];Ie&&Ie.connect(pe)}}let U=new L,q=new L;function z(X,J,pe){U.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);let ae=U.distanceTo(q),Ie=J.projectionMatrix.elements,Te=pe.projectionMatrix.elements,We=Ie[14]/(Ie[10]-1),rt=Ie[14]/(Ie[10]+1),Xe=(Ie[9]+1)/Ie[5],P=(Ie[9]-1)/Ie[5],Sn=(Ie[8]-1)/Ie[0],He=(Te[8]+1)/Te[0],$e=We*Sn,be=We*He,ct=ae/(-Sn+He),Pe=ct*-Sn;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let C=We+ct,M=rt+ct,B=$e-Pe,$=be+(ae-Pe),j=Xe*rt/M*C,Y=P*rt/M*C;X.projectionMatrix.makePerspective(B,$,j,Y,C,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,pe=X.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),x.near=R.near=T.near=J,x.far=R.far=T.far=pe,(w!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,k=x.far);let ae=X.parent,Ie=x.cameras;se(x,ae);for(let Te=0;Te<Ie.length;Te++)se(Ie[Te],ae);Ie.length===2?z(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),ee(X,x,ae)};function ee(X,J,pe){pe===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Op*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ue=null;function Fe(X,J){if(u=J.getViewerPose(c||o),v=J,u!==null){let pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let ae=!1;pe.length!==x.cameras.length&&(x.cameras.length=0,ae=!0);for(let Te=0;Te<pe.length;Te++){let We=pe[Te],rt=null;if(m!==null)rt=m.getViewport(We);else{let P=h.getViewSubImage(f,We);rt=P.viewport,Te===0&&(e.setRenderTargetTextures(p,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(p))}let Xe=H[Te];Xe===void 0&&(Xe=new Kt,Xe.layers.enable(Te),Xe.viewport=new st,H[Te]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(rt.x,rt.y,rt.width,rt.height),Te===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ae===!0&&x.cameras.push(Xe)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Te=h.getDepthInformation(pe[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,r.renderState)}}for(let pe=0;pe<g.length;pe++){let ae=S[pe],Ie=g[pe];ae!==null&&Ie!==void 0&&Ie.update(ae,J,c||o)}ue&&ue(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}let Oe=new dy;Oe.setAnimationLoop(Fe),this.setAnimationLoop=function(X){ue=X},this.dispose=function(){}}},ns=new qn,c5=new it;function u5(t,e){function n(y,d){y.matrixAutoUpdate===!0&&y.updateMatrix(),d.value.copy(y.matrix)}function i(y,d){d.color.getRGB(y.fogColor.value,fy(t)),d.isFog?(y.fogNear.value=d.near,y.fogFar.value=d.far):d.isFogExp2&&(y.fogDensity.value=d.density)}function r(y,d,p,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(y,d):d.isMeshToonMaterial?(s(y,d),h(y,d)):d.isMeshPhongMaterial?(s(y,d),u(y,d)):d.isMeshStandardMaterial?(s(y,d),f(y,d),d.isMeshPhysicalMaterial&&m(y,d,S)):d.isMeshMatcapMaterial?(s(y,d),v(y,d)):d.isMeshDepthMaterial?s(y,d):d.isMeshDistanceMaterial?(s(y,d),_(y,d)):d.isMeshNormalMaterial?s(y,d):d.isLineBasicMaterial?(o(y,d),d.isLineDashedMaterial&&a(y,d)):d.isPointsMaterial?l(y,d,p,g):d.isSpriteMaterial?c(y,d):d.isShadowMaterial?(y.color.value.copy(d.color),y.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(y,d){y.opacity.value=d.opacity,d.color&&y.diffuse.value.copy(d.color),d.emissive&&y.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(y.map.value=d.map,n(d.map,y.mapTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,n(d.alphaMap,y.alphaMapTransform)),d.bumpMap&&(y.bumpMap.value=d.bumpMap,n(d.bumpMap,y.bumpMapTransform),y.bumpScale.value=d.bumpScale,d.side===yn&&(y.bumpScale.value*=-1)),d.normalMap&&(y.normalMap.value=d.normalMap,n(d.normalMap,y.normalMapTransform),y.normalScale.value.copy(d.normalScale),d.side===yn&&y.normalScale.value.negate()),d.displacementMap&&(y.displacementMap.value=d.displacementMap,n(d.displacementMap,y.displacementMapTransform),y.displacementScale.value=d.displacementScale,y.displacementBias.value=d.displacementBias),d.emissiveMap&&(y.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,y.emissiveMapTransform)),d.specularMap&&(y.specularMap.value=d.specularMap,n(d.specularMap,y.specularMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest);let p=e.get(d),g=p.envMap,S=p.envMapRotation;g&&(y.envMap.value=g,ns.copy(S),ns.x*=-1,ns.y*=-1,ns.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),y.envMapRotation.value.setFromMatrix4(c5.makeRotationFromEuler(ns)),y.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=d.reflectivity,y.ior.value=d.ior,y.refractionRatio.value=d.refractionRatio),d.lightMap&&(y.lightMap.value=d.lightMap,y.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,y.lightMapTransform)),d.aoMap&&(y.aoMap.value=d.aoMap,y.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,y.aoMapTransform))}function o(y,d){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,d.map&&(y.map.value=d.map,n(d.map,y.mapTransform))}function a(y,d){y.dashSize.value=d.dashSize,y.totalSize.value=d.dashSize+d.gapSize,y.scale.value=d.scale}function l(y,d,p,g){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,y.size.value=d.size*p,y.scale.value=g*.5,d.map&&(y.map.value=d.map,n(d.map,y.uvTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,n(d.alphaMap,y.alphaMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest)}function c(y,d){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,y.rotation.value=d.rotation,d.map&&(y.map.value=d.map,n(d.map,y.mapTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,n(d.alphaMap,y.alphaMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest)}function u(y,d){y.specular.value.copy(d.specular),y.shininess.value=Math.max(d.shininess,1e-4)}function h(y,d){d.gradientMap&&(y.gradientMap.value=d.gradientMap)}function f(y,d){y.metalness.value=d.metalness,d.metalnessMap&&(y.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,y.metalnessMapTransform)),y.roughness.value=d.roughness,d.roughnessMap&&(y.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,y.roughnessMapTransform)),d.envMap&&(y.envMapIntensity.value=d.envMapIntensity)}function m(y,d,p){y.ior.value=d.ior,d.sheen>0&&(y.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),y.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(y.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,y.sheenColorMapTransform)),d.sheenRoughnessMap&&(y.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,y.sheenRoughnessMapTransform))),d.clearcoat>0&&(y.clearcoat.value=d.clearcoat,y.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(y.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,y.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(y.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===yn&&y.clearcoatNormalScale.value.negate())),d.dispersion>0&&(y.dispersion.value=d.dispersion),d.iridescence>0&&(y.iridescence.value=d.iridescence,y.iridescenceIOR.value=d.iridescenceIOR,y.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(y.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,y.iridescenceMapTransform)),d.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),d.transmission>0&&(y.transmission.value=d.transmission,y.transmissionSamplerMap.value=p.texture,y.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(y.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,y.transmissionMapTransform)),y.thickness.value=d.thickness,d.thicknessMap&&(y.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=d.attenuationDistance,y.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(y.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(y.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=d.specularIntensity,y.specularColor.value.copy(d.specularColor),d.specularColorMap&&(y.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,y.specularColorMapTransform)),d.specularIntensityMap&&(y.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,d){d.matcap&&(y.matcap.value=d.matcap)}function _(y,d){let p=e.get(d).light;y.referencePosition.value.setFromMatrixPosition(p.matrixWorld),y.nearDistance.value=p.shadow.camera.near,y.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h5(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,g){let S=g.program;i.uniformBlockBinding(p,S)}function c(p,g){let S=r[p.id];S===void 0&&(v(p),S=u(p),r[p.id]=S,p.addEventListener("dispose",y));let b=g.program;i.updateUBOMapping(p,b);let A=e.render.frame;s[p.id]!==A&&(f(p),s[p.id]=A)}function u(p){let g=h();p.__bindingPointIndex=g;let S=t.createBuffer(),b=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(p){let g=r[p.id],S=p.uniforms,b=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=S.length;A<T;A++){let R=Array.isArray(S[A])?S[A]:[S[A]];for(let H=0,x=R.length;H<x;H++){let w=R[H];if(m(w,A,H,b)===!0){let k=w.__offset,D=Array.isArray(w.value)?w.value:[w.value],O=0;for(let Z=0;Z<D.length;Z++){let U=D[Z],q=_(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,k+O,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,g,S,b){let A=p.value,T=g+"_"+S;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{let R=b[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return b[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(p){let g=p.uniforms,S=0,b=16;for(let T=0,R=g.length;T<R;T++){let H=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,w=H.length;x<w;x++){let k=H[x],D=Array.isArray(k.value)?k.value:[k.value];for(let O=0,Z=D.length;O<Z;O++){let U=D[O],q=_(U),z=S%b,se=z%q.boundary,ee=z+se;S+=se,ee!==0&&b-ee<q.storage&&(S+=b-ee),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=q.storage}}}let A=S%b;return A>0&&(S+=b-A),p.__size=S,p.__cache={},this}function _(p){let g={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(g.boundary=4,g.storage=4):p.isVector2?(g.boundary=8,g.storage=8):p.isVector3||p.isColor?(g.boundary=16,g.storage=12):p.isVector4?(g.boundary=16,g.storage=16):p.isMatrix3?(g.boundary=48,g.storage=48):p.isMatrix4?(g.boundary=64,g.storage=64):p.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",p),g}function y(p){let g=p.target;g.removeEventListener("dispose",y);let S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(let p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var xu=class{constructor(e={}){let{canvas:n=pS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),v=new Int32Array(4),_=null,y=null,d=[],p=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Cr,this.toneMappingExposure=1;let g=this,S=!1,b=0,A=0,T=null,R=-1,H=null,x=new st,w=new st,k=null,D=new Be(0),O=0,Z=n.width,U=n.height,q=1,z=null,se=null,ee=new st(0,0,Z,U),ue=new st(0,0,Z,U),Fe=!1,Oe=new za,X=!1,J=!1,pe=new it,ae=new it,Ie=new L,Te=new st,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function Xe(){return T===null?q:1}let P=i;function Sn(E,N){return n.getContext(E,N)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gm}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",fe,!1),P===null){let N="webgl2";if(P=Sn(N,E),P===null)throw Sn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,$e,be,ct,Pe,C,M,B,$,j,Y,xe,oe,me,Ze,te,ge,Ce,Re,ve,Ge,Le,ot,I;function he(){He=new bw(P),He.init(),Le=new s5(P,He),$e=new Sw(P,He,e,Le),be=new n5(P),$e.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),ct=new Pw(P),Pe=new GE,C=new r5(P,He,be,Pe,$e,Le,ct),M=new ww(g),B=new Aw(g),$=new OS(P),ot=new _w(P,$),j=new Cw(P,$,ct,ot),Y=new Lw(P,j,$,ct),Re=new Iw(P,$e,C),te=new Mw(Pe),xe=new HE(g,M,B,He,$e,ot,te),oe=new u5(g,Pe),me=new XE,Ze=new JE(He),Ce=new yw(g,M,B,be,Y,f,l),ge=new e5(g,Y,$e),I=new h5(P,ct,$e,be),ve=new xw(P,He,ct),Ge=new Rw(P,He,ct),ct.programs=xe.programs,g.capabilities=$e,g.extensions=He,g.properties=Pe,g.renderLists=me,g.shadowMap=ge,g.state=be,g.info=ct}he();let W=new Qp(g,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Z,U,!1))},this.getSize=function(E){return E.set(Z,U)},this.setSize=function(E,N,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,U=N,n.width=Math.floor(E*q),n.height=Math.floor(N*q),V===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Z*q,U*q).floor()},this.setDrawingBufferSize=function(E,N,V){Z=E,U=N,q=V,n.width=Math.floor(E*V),n.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(ee)},this.setViewport=function(E,N,V,G){E.isVector4?ee.set(E.x,E.y,E.z,E.w):ee.set(E,N,V,G),be.viewport(x.copy(ee).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,N,V,G){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,N,V,G),be.scissor(w.copy(ue).multiplyScalar(q).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(E){be.setScissorTest(Fe=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let F=!1;if(T!==null){let ie=T.texture.format;F=ie===Tm||ie===Em||ie===wm}if(F){let ie=T.texture.type,ce=ie===qi||ie===cs||ie===Fa||ie===So||ie===xm||ie===Sm,ye=Ce.getClearColor(),_e=Ce.getClearAlpha(),Ee=ye.r,Ae=ye.g,Se=ye.b;ce?(m[0]=Ee,m[1]=Ae,m[2]=Se,m[3]=_e,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Ee,v[1]=Ae,v[2]=Se,v[3]=_e,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}N&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),Ze.dispose(),Pe.dispose(),M.dispose(),B.dispose(),Y.dispose(),ot.dispose(),I.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ym),W.removeEventListener("sessionend",$m),Ur.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=ct.autoReset,N=ge.enabled,V=ge.autoUpdate,G=ge.needsUpdate,F=ge.type;he(),ct.autoReset=E,ge.enabled=N,ge.autoUpdate=V,ge.needsUpdate=G,ge.type=F}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){let N=E.target;N.removeEventListener("dispose",qe),bt(N)}function bt(E){an(E),Pe.remove(E)}function an(E){let N=Pe.get(E).programs;N!==void 0&&(N.forEach(function(V){xe.releaseProgram(V)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,F,ie){N===null&&(N=We);let ce=F.isMesh&&F.matrixWorld.determinant()<0,ye=Uy(E,N,V,G,F);be.setMaterial(G,ce);let _e=V.index,Ee=1;if(G.wireframe===!0){if(_e=j.getWireframeAttribute(V),_e===void 0)return;Ee=2}let Ae=V.drawRange,Se=V.attributes.position,et=Ae.start*Ee,ut=(Ae.start+Ae.count)*Ee;ie!==null&&(et=Math.max(et,ie.start*Ee),ut=Math.min(ut,(ie.start+ie.count)*Ee)),_e!==null?(et=Math.max(et,0),ut=Math.min(ut,_e.count)):Se!=null&&(et=Math.max(et,0),ut=Math.min(ut,Se.count));let St=ut-et;if(St<0||St===1/0)return;ot.setup(F,G,ye,V,_e);let Mn,Je=ve;if(_e!==null&&(Mn=$.get(_e),Je=Ge,Je.setIndex(Mn)),F.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*Xe()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(F.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),be.setLineWidth(Me*Xe()),F.isLineSegments?Je.setMode(P.LINES):F.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else F.isPoints?Je.setMode(P.POINTS):F.isSprite&&Je.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Me=F._multiDrawStarts,Bt=F._multiDrawCounts,je=F._multiDrawCount,$n=_e?$.get(_e).bytesPerElement:1,ps=Pe.get(G).currentProgram.getUniforms();for(let wn=0;wn<je;wn++)ps.setValue(P,"_gl_DrawID",wn),Je.render(Me[wn]/$n,Bt[wn])}else if(F.isInstancedMesh)Je.renderInstances(et,St,F.count);else if(V.isInstancedBufferGeometry){let Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Me);Je.renderInstances(et,St,Bt)}else Je.render(et,St)};function Ke(E,N,V){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,ja(E,N,V),E.side=Rr,E.needsUpdate=!0,ja(E,N,V),E.side=Dn):ja(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),y=Ze.get(V),y.init(N),p.push(y),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(y.pushLight(F),F.castShadow&&y.pushShadow(F))}),y.setupLights();let G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ie=F.material;if(ie)if(Array.isArray(ie))for(let ce=0;ce<ie.length;ce++){let ye=ie[ce];Ke(ye,V,F),G.add(ye)}else Ke(ie,V,F),G.add(ie)}),p.pop(),y=null,G},this.compileAsync=function(E,N,V=null){let G=this.compile(E,N,V);return new Promise(F=>{function ie(){if(G.forEach(function(ce){Pe.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){F(E);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let ln=null;function Ai(E){ln&&ln(E)}function Ym(){Ur.stop()}function $m(){Ur.start()}let Ur=new dy;Ur.setAnimationLoop(Ai),typeof self!="undefined"&&Ur.setContext(self),this.setAnimationLoop=function(E){ln=E,W.setAnimationLoop(E),E===null?Ur.stop():Ur.start()},W.addEventListener("sessionstart",Ym),W.addEventListener("sessionend",$m),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,N,T),y=Ze.get(E,p.length),y.init(N),p.push(y),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Oe.setFromProjectionMatrix(ae),J=this.localClippingEnabled,X=te.init(this.clippingPlanes,J),_=me.get(E,d.length),_.init(),d.push(_),W.enabled===!0&&W.isPresenting===!0){let ie=g.xr.getDepthSensingMesh();ie!==null&&Vu(ie,N,-1/0,g.sortObjects)}Vu(E,N,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(z,se),rt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,rt&&Ce.addToRenderList(_,E),this.info.render.frame++,X===!0&&te.beginShadows();let V=y.state.shadowsArray;ge.render(V,E,N),X===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=_.opaque,F=_.transmissive;if(y.setupLights(),N.isArrayCamera){let ie=N.cameras;if(F.length>0)for(let ce=0,ye=ie.length;ce<ye;ce++){let _e=ie[ce];Km(G,F,E,_e)}rt&&Ce.render(E);for(let ce=0,ye=ie.length;ce<ye;ce++){let _e=ie[ce];Zm(_,E,_e,_e.viewport)}}else F.length>0&&Km(G,F,E,N),rt&&Ce.render(E),Zm(_,E,N);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,N),ot.resetDefaultState(),R=-1,H=null,p.pop(),p.length>0?(y=p[p.length-1],X===!0&&te.setGlobalState(g.clippingPlanes,y.state.camera)):y=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Vu(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Oe.intersectsSprite(E)){G&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);let ce=Y.update(E),ye=E.material;ye.visible&&_.push(E,ce,ye,V,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Oe.intersectsObject(E))){let ce=Y.update(E),ye=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Te.copy(ce.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(ye)){let _e=ce.groups;for(let Ee=0,Ae=_e.length;Ee<Ae;Ee++){let Se=_e[Ee],et=ye[Se.materialIndex];et&&et.visible&&_.push(E,ce,et,V,Te.z,Se)}}else ye.visible&&_.push(E,ce,ye,V,Te.z,null)}}let ie=E.children;for(let ce=0,ye=ie.length;ce<ye;ce++)Vu(ie[ce],N,V,G)}function Zm(E,N,V,G){let F=E.opaque,ie=E.transmissive,ce=E.transparent;y.setupLightsView(V),X===!0&&te.setGlobalState(g.clippingPlanes,V),G&&be.viewport(x.copy(G)),F.length>0&&Ja(F,N,V),ie.length>0&&Ja(ie,N,V),ce.length>0&&Ja(ce,N,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Km(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[G.id]===void 0&&(y.state.transmissionRenderTarget[G.id]=new Yi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Xa:qi,minFilter:ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ie=y.state.transmissionRenderTarget[G.id],ce=G.viewport||x;ie.setSize(ce.z,ce.w);let ye=g.getRenderTarget();g.setRenderTarget(ie),g.getClearColor(D),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),rt&&Ce.render(V);let _e=g.toneMapping;g.toneMapping=Cr;let Ee=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),y.setupLightsView(G),X===!0&&te.setGlobalState(g.clippingPlanes,G),Ja(E,V,G),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Se=0,et=N.length;Se<et;Se++){let ut=N[Se],St=ut.object,Mn=ut.geometry,Je=ut.material,Me=ut.group;if(Je.side===Dn&&St.layers.test(G.layers)){let Bt=Je.side;Je.side=yn,Je.needsUpdate=!0,Jm(St,V,G,Mn,Je,Me),Je.side=Bt,Je.needsUpdate=!0,Ae=!0}}Ae===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}g.setRenderTarget(ye),g.setClearColor(D,O),Ee!==void 0&&(G.viewport=Ee),g.toneMapping=_e}function Ja(E,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ie=E.length;F<ie;F++){let ce=E[F],ye=ce.object,_e=ce.geometry,Ee=G===null?ce.material:G,Ae=ce.group;ye.layers.test(V.layers)&&Jm(ye,N,V,_e,Ee,Ae)}}function Jm(E,N,V,G,F,ie){E.onBeforeRender(g,N,V,G,F,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(g,N,V,G,E,ie),F.transparent===!0&&F.side===Dn&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,g.renderBufferDirect(V,N,G,F,E,ie),F.side=Rr,F.needsUpdate=!0,g.renderBufferDirect(V,N,G,F,E,ie),F.side=Dn):g.renderBufferDirect(V,N,G,F,E,ie),E.onAfterRender(g,N,V,G,F,ie)}function ja(E,N,V){N.isScene!==!0&&(N=We);let G=Pe.get(E),F=y.state.lights,ie=y.state.shadowsArray,ce=F.state.version,ye=xe.getParameters(E,F.state,ie,N,V),_e=xe.getProgramCacheKey(ye),Ee=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",qe),Ee=new Map,G.programs=Ee);let Ae=Ee.get(_e);if(Ae!==void 0){if(G.currentProgram===Ae&&G.lightsStateVersion===ce)return Qm(E,ye),Ae}else ye.uniforms=xe.getUniforms(E),E.onBeforeCompile(ye,g),Ae=xe.acquireProgram(ye,_e),Ee.set(_e,Ae),G.uniforms=ye.uniforms;let Se=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=te.uniform),Qm(E,ye),G.needsLights=Oy(E),G.lightsStateVersion=ce,G.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ae,G.uniformsList=null,Ae}function jm(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=vo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Qm(E,N){let V=Pe.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Uy(E,N,V,G,F){N.isScene!==!0&&(N=We),C.resetTextureUnits();let ie=N.fog,ce=G.isMeshStandardMaterial?N.environment:null,ye=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Nr,_e=(G.isMeshStandardMaterial?B:M).get(G.envMap||ce),Ee=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ae=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,St=Cr;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(St=g.toneMapping);let Mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=Mn!==void 0?Mn.length:0,Me=Pe.get(G),Bt=y.state.lights;if(X===!0&&(J===!0||E!==H)){let On=E===H&&G.id===R;te.setState(G,E,On)}let je=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Bt.state.version||Me.outputColorSpace!==ye||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==_e||G.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Ee||Me.vertexTangents!==Ae||Me.morphTargets!==Se||Me.morphNormals!==et||Me.morphColors!==ut||Me.toneMapping!==St||Me.morphTargetsCount!==Je)&&(je=!0):(je=!0,Me.__version=G.version);let $n=Me.currentProgram;je===!0&&($n=ja(G,N,F));let ps=!1,wn=!1,Hu=!1,Et=$n.getUniforms(),ji=Me.uniforms;if(be.useProgram($n.program)&&(ps=!0,wn=!0,Hu=!0),G.id!==R&&(R=G.id,wn=!0),ps||H!==E){$e.reverseDepthBuffer?(pe.copy(E.projectionMatrix),gS(pe),vS(pe),Et.setValue(P,"projectionMatrix",pe)):Et.setValue(P,"projectionMatrix",E.projectionMatrix),Et.setValue(P,"viewMatrix",E.matrixWorldInverse);let On=Et.map.cameraPosition;On!==void 0&&On.setValue(P,Ie.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,wn=!0,Hu=!0)}if(F.isSkinnedMesh){Et.setOptional(P,F,"bindMatrix"),Et.setOptional(P,F,"bindMatrixInverse");let On=F.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Et.setValue(P,"boneTexture",On.boneTexture,C))}F.isBatchedMesh&&(Et.setOptional(P,F,"batchingTexture"),Et.setValue(P,"batchingTexture",F._matricesTexture,C),Et.setOptional(P,F,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",F._indirectTexture,C),Et.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",F._colorsTexture,C));let Gu=V.morphAttributes;if((Gu.position!==void 0||Gu.normal!==void 0||Gu.color!==void 0)&&Re.update(F,V,$n),(wn||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,Et.setValue(P,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ji.envMap.value=_e,ji.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(ji.envMapIntensity.value=N.environmentIntensity),wn&&(Et.setValue(P,"toneMappingExposure",g.toneMappingExposure),Me.needsLights&&Fy(ji,Hu),ie&&G.fog===!0&&oe.refreshFogUniforms(ji,ie),oe.refreshMaterialUniforms(ji,G,q,U,y.state.transmissionRenderTarget[E.id]),vo.upload(P,jm(Me),ji,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vo.upload(P,jm(Me),ji,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(P,"center",F.center),Et.setValue(P,"modelViewMatrix",F.modelViewMatrix),Et.setValue(P,"normalMatrix",F.normalMatrix),Et.setValue(P,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let On=G.uniformsGroups;for(let Wu=0,ky=On.length;Wu<ky;Wu++){let e1=On[Wu];I.update(e1,$n),I.bind(e1,$n)}}return $n}function Fy(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Oy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,V){Pe.get(E.texture).__webglTexture=N,Pe.get(E.depthTexture).__webglTexture=V;let G=Pe.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let V=Pe.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){T=E,b=N,A=V;let G=!0,F=null,ie=!1,ce=!1;if(E){let _e=Pe.get(E);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(_e.__hasExternalTextures)C.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Se=E.depthTexture;if(_e.__boundDepthTexture!==Se){if(Se!==null&&Pe.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ce=!0);let Ae=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?F=Ae[N][V]:F=Ae[N],ie=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[V]:F=Ae,x.copy(E.viewport),w.copy(E.scissor),k=E.scissorTest}else x.copy(ee).multiplyScalar(q).floor(),w.copy(ue).multiplyScalar(q).floor(),k=Fe;if(be.bindFramebuffer(P.FRAMEBUFFER,F)&&G&&be.drawBuffers(E,F),be.viewport(x),be.scissor(w),be.setScissorTest(k),ie){let _e=Pe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,V)}else if(ce){let _e=Pe.get(E.texture),Ee=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,V||0,Ee)}R=-1},this.readRenderTargetPixels=function(E,N,V,G,F,ie,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){be.bindFramebuffer(P.FRAMEBUFFER,ye);try{let _e=E.texture,Ee=_e.format,Ae=_e.type;if(!$e.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-F&&P.readPixels(N,V,G,F,Le.convert(Ee),Le.convert(Ae),ie)}finally{let _e=T!==null?Pe.get(T).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,G,F,ie,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){let _e=E.texture,Ee=_e.format,Ae=_e.type;if(!$e.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&V>=0&&V<=E.height-F){be.bindFramebuffer(P.FRAMEBUFFER,ye);let Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(N,V,G,F,Le.convert(Ee),Le.convert(Ae),0);let et=T!==null?Pe.get(T).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,et);let ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await mS(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Se),P.deleteSync(ut),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(ru("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(E.image.width*G),ie=Math.floor(E.image.height*G),ce=N!==null?N.x:0,ye=N!==null?N.y:0;C.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ce,ye,F,ie),be.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,G=null,F=0){E.isTexture!==!0&&(ru("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ie,ce,ye,_e,Ee,Ae;V!==null?(ie=V.max.x-V.min.x,ce=V.max.y-V.min.y,ye=V.min.x,_e=V.min.y):(ie=E.image.width,ce=E.image.height,ye=0,_e=0),G!==null?(Ee=G.x,Ae=G.y):(Ee=0,Ae=0);let Se=Le.convert(N.format),et=Le.convert(N.type);C.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let ut=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),Me=P.getParameter(P.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[F]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Ee,Ae,ie,ce,Se,et,Bt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Ee,Ae,Bt.width,Bt.height,Se,Bt.data):P.texSubImage2D(P.TEXTURE_2D,F,Ee,Ae,ie,ce,Se,et,Bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me),F===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,G=null,F=0){E.isTexture!==!0&&(ru("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0);let ie,ce,ye,_e,Ee,Ae,Se,et,ut,St=E.isCompressedTexture?E.mipmaps[F]:E.image;V!==null?(ie=V.max.x-V.min.x,ce=V.max.y-V.min.y,ye=V.max.z-V.min.z,_e=V.min.x,Ee=V.min.y,Ae=V.min.z):(ie=St.width,ce=St.height,ye=St.depth,_e=0,Ee=0,Ae=0),G!==null?(Se=G.x,et=G.y,ut=G.z):(Se=0,et=0,ut=0);let Mn=Le.convert(N.format),Je=Le.convert(N.type),Me;if(N.isData3DTexture)C.setTexture3D(N,0),Me=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Me=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Bt=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$n=P.getParameter(P.UNPACK_SKIP_PIXELS),ps=P.getParameter(P.UNPACK_SKIP_ROWS),wn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ee),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Me,F,Se,et,ut,ie,ce,ye,Mn,Je,St.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,F,Se,et,ut,ie,ce,ye,Mn,St.data):P.texSubImage3D(Me,F,Se,et,ut,ie,ce,ye,Mn,Je,St),P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$n),P.pixelStorei(P.UNPACK_SKIP_ROWS,ps),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wn),F===0&&N.generateMipmaps&&P.generateMipmap(Me),be.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,be.reset(),ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===Am?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Nu?"display-p3":"srgb"}};var Su=class t{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=n,this.far=i}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mu=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var em=class extends _n{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Lt,u=Lt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wu=class extends Un{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},uo=new it,Hv=new it,Zc=[],Gv=new $i,f5=new it,Ra=new wt,Pa=new Ir,Eu=class extends wt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new wu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,f5)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,uo),Gv.copy(e.boundingBox).applyMatrix4(uo),this.boundingBox.union(Gv)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,uo),Pa.copy(e.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(Pa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,uo),Hv.multiplyMatrices(i,uo),Ra.matrixWorld=Hv,Ra.raycast(e,Zc);for(let o=0,a=Zc.length;o<a;o++){let l=Zc[o];l.instanceId=s,l.object=this,n.push(l)}Zc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new wu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new em(new Float32Array(r*this.count),r,this.count,Mm,Si));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Va=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wv=new it,tm=new Oa,Kc=new Ir,Jc=new L,Tu=class extends sn{constructor(e=new Yn,n=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(r),Kc.radius+=s,e.ray.intersectsSphere(Kc)===!1)return;Wv.copy(r).invert(),tm.copy(e.ray).applyMatrix4(Wv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=f,_=m;v<_;v++){let y=c.getX(v);Jc.fromBufferAttribute(h,y),Xv(Jc,y,l,r,e,n,this)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,_=m;v<_;v++)Jc.fromBufferAttribute(h,v),Xv(Jc,v,l,r,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xv(t,e,n,i,r,s,o){let a=tm.distanceSqToPoint(t);if(a<n){let l=new L;tm.closestPointToPoint(t,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ha=class extends _n{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nm=class t extends Yn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new rn(s,3)),this.setAttribute("normal",new rn(s.slice(),3)),this.setAttribute("uv",new rn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){let g=new L,S=new L,b=new L;for(let A=0;A<n.length;A+=3)m(n[A+0],g),m(n[A+1],S),m(n[A+2],b),l(g,S,b,p)}function l(p,g,S,b){let A=b+1,T=[];for(let R=0;R<=A;R++){T[R]=[];let H=p.clone().lerp(S,R/A),x=g.clone().lerp(S,R/A),w=A-R;for(let k=0;k<=w;k++)k===0&&R===A?T[R][k]=H:T[R][k]=H.clone().lerp(x,k/w)}for(let R=0;R<A;R++)for(let H=0;H<2*(A-R)-1;H++){let x=Math.floor(H/2);H%2===0?(f(T[R][x+1]),f(T[R+1][x]),f(T[R][x])):(f(T[R][x+1]),f(T[R+1][x+1]),f(T[R+1][x]))}}function c(p){let g=new L;for(let S=0;S<s.length;S+=3)g.x=s[S+0],g.y=s[S+1],g.z=s[S+2],g.normalize().multiplyScalar(p),s[S+0]=g.x,s[S+1]=g.y,s[S+2]=g.z}function u(){let p=new L;for(let g=0;g<s.length;g+=3){p.x=s[g+0],p.y=s[g+1],p.z=s[g+2];let S=y(p)/2/Math.PI+.5,b=d(p)/Math.PI+.5;o.push(S,1-b)}v(),h()}function h(){for(let p=0;p<o.length;p+=6){let g=o[p+0],S=o[p+2],b=o[p+4],A=Math.max(g,S,b),T=Math.min(g,S,b);A>.9&&T<.1&&(g<.2&&(o[p+0]+=1),S<.2&&(o[p+2]+=1),b<.2&&(o[p+4]+=1))}}function f(p){s.push(p.x,p.y,p.z)}function m(p,g){let S=p*3;g.x=e[S+0],g.y=e[S+1],g.z=e[S+2]}function v(){let p=new L,g=new L,S=new L,b=new L,A=new ze,T=new ze,R=new ze;for(let H=0,x=0;H<s.length;H+=9,x+=6){p.set(s[H+0],s[H+1],s[H+2]),g.set(s[H+3],s[H+4],s[H+5]),S.set(s[H+6],s[H+7],s[H+8]),A.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),b.copy(p).add(g).add(S).divideScalar(3);let w=y(b);_(A,x+0,p,w),_(T,x+2,g,w),_(R,x+4,S,w)}}function _(p,g,S,b){b<0&&p.x===1&&(o[g]=p.x-1),S.x===0&&S.z===0&&(o[g]=b/2/Math.PI+.5)}function y(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.details)}},Au=class t extends nm{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var Eo=class extends Lr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ly,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function jc(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function d5(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var To=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},im=class extends To{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:K2,endingEnd:K2}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case J2:s=e,a=2*n-i;break;case j2:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case J2:o=e,l=2*i-n;break;case j2:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,v=(i-n)/(r-n),_=v*v,y=_*v,d=-f*y+2*f*_-f*v,p=(1+f)*y+(-1.5-2*f)*_+(-.5+f)*v+1,g=(-1-m)*y+(1.5+m)*_+.5*v,S=m*y-m*_;for(let b=0;b!==a;++b)s[b]=d*o[u+b]+p*o[c+b]+g*o[l+b]+S*o[h+b];return s}},rm=class extends To{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},sm=class extends To{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fi=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jc(n,this.TimeBufferType),this.values=jc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:jc(e.times,Array),values:jc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new im(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case su:n=this.InterpolantFactoryMethodDiscrete;break;case Fp:n=this.InterpolantFactoryMethodLinear;break;case xd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return su;case this.InterpolantFactoryMethodLinear:return Fp;case this.InterpolantFactoryMethodSmooth:return xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&d5(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,m=h+i;for(let v=0;v!==i;++v){let _=n[h+v];if(_!==n[f+v]||_!==n[m+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let m=0;m!==i;++m)n[f+m]=n[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Fp;var us=class extends fi{constructor(e,n,i){super(e,n,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=su;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var om=class extends fi{};om.prototype.ValueTypeName="color";var am=class extends fi{};am.prototype.ValueTypeName="number";var lm=class extends To{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)Mi.slerpFlat(s,0,o,c-a,o,c,l);return s}},bu=class extends fi{InterpolantFactoryMethodLinear(e){return new lm(this.times,this.values,this.getValueSize(),e)}};bu.prototype.ValueTypeName="quaternion";bu.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends fi{constructor(e,n,i){super(e,n,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=su;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var cm=class extends fi{};cm.prototype.ValueTypeName="vector";var um=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let m=c[h],v=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}},p5=new um,hm=class{constructor(e){this.manager=e!==void 0?e:p5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hm.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ga=class extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var Kd=new it,qv=new L,Yv=new L,Cu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;qv.setFromMatrixPosition(e.matrixWorld),n.position.copy(qv),Yv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yv),n.updateMatrixWorld(),Kd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $v=new it,Ia=new L,Jd=new L,fm=class extends Cu{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,n=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ia),Jd.copy(i.position),Jd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Jd),i.updateMatrixWorld(),r.makeTranslation(-Ia.x,-Ia.y,-Ia.z),$v.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($v)}},Wa=class extends Ga{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dm=class extends Cu{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ru=class extends Ga{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pu=class extends Ga{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cm="\\[\\]\\.:\\/",m5=new RegExp("["+Cm+"]","g"),Rm="[^"+Cm+"]",g5="[^"+Cm.replace("\\.","")+"]",v5=/((?:WC+[\/:])*)/.source.replace("WC",Rm),y5=/(WCOD+)?/.source.replace("WCOD",g5),_5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rm),x5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rm),S5=new RegExp("^"+v5+y5+_5+x5+"$"),M5=["material","materials","bones","map"],pm=class{constructor(e,n,i){let r=i||gt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},gt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m5,"")}static parseTrackName(e){let n=S5.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);M5.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=pm;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var Zv=new it,Iu=class{constructor(e,n,i=0,r=1/0){this.ray=new Oa(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Zv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zv),this}intersectObject(e,n=!0,i=[]){return mm(e,this,i,n),i.sort(Kv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mm(e[r],this,i,n);return i.sort(Kv),i}};function Kv(t,e){return t.distance-e.distance}function mm(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)mm(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gm}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gm);var Dr=128,E5=200,T5=124,At=1.3,yy={slim:{w:.85,h:1},medium:{w:1,h:1},heavy:{w:1.2,h:1.04},huge:{w:1.42,h:1.1}},A5={rx:0,ry:0,rot:0,fx:1,alpha:1,lean:.08,head:0,sA1:.75,eA1:1.85,sA2:.55,eA2:2.1,h1:.42,k1:-.42,h2:-.38,k2:.3,fx2:null},we=t=>({...A5,...t}),b5=[[we({}),180],[we({ry:1,sA1:.72,eA1:1.9}),180],[we({ry:2,sA1:.7,eA1:1.95,sA2:.5}),180],[we({ry:1}),180]],Im={projectile:[[we({lean:-.12,sA1:-.5,eA1:.5,sA2:-.6,eA2:.4,ry:2}),160],[we({lean:-.18,sA1:-.7,eA1:.7,sA2:-.8,eA2:.6,ry:3}),140],[we({lean:.28,sA1:1.52,eA1:0,sA2:1.45,eA2:.05,h1:.8,k1:-.8,h2:-.7,k2:.1,ry:4}),120,"projectile"],[we({lean:.28,sA1:1.52,eA1:0,sA2:1.45,eA2:.05,h1:.8,k1:-.8,h2:-.7,k2:.1,ry:4}),420],[we({lean:.15,ry:2}),160]],fire:[[we({lean:-.2,head:-.2,sA1:-.4,sA2:-.5,ry:1}),220],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire"}),120,"fire"],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire2"}),120],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire"}),120],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire2"}),120],[we({}),160]],uppercut:[[we({ry:8,lean:.25,sA1:.2,eA1:.6,h1:.9,k1:-1.4,h2:-.3,k2:.9}),120],[we({ry:-18,lean:.05,sA1:2.95,eA1:.05,sA2:.3,eA2:1.2,h1:1.1,k1:-1.8,h2:.1,k2:.2}),160],[we({ry:-34,lean:-.05,sA1:3.05,eA1:0,sA2:.2,eA2:1,h1:1.2,k1:-2,h2:.1,k2:.1}),260],[we({ry:-14,lean:.05,sA1:2.4,eA1:.4,h1:.6,k1:-.8,h2:-.2,k2:.4}),150],[we({ry:4,h1:.7,k1:-1,h2:-.5,k2:.8}),160]],spin:[0,1,2,3,4,5,6,7].map(t=>[we({ry:-16,rx:t*3,fx:t%2?-1:1,lean:0,sA1:1.2,eA1:.3,sA2:-.9,eA2:.4,h1:1.57,k1:0,h2:.5,k2:-1.6}),90]).concat([[we({rx:24,ry:2}),140],[we({rx:12}),120]]),punch:[0,1,2,3,4,5,6,7].map(t=>[t%2?we({lean:.2,sA1:1.6+(t%4===1?.2:-.1),eA1:0,sA2:.6,eA2:1.8,h1:.6,k1:-.6}):we({lean:.2,sA2:1.55,eA2:0,sA1:.5,eA1:1.6,h1:.6,k1:-.6}),70]).concat([[we({}),140]]),kick:[0,1,2,3,4,5,6,7].map(t=>[we({ry:-6,lean:-.25,h1:[1.35,1.75,1.5,1.9][t%4],k1:0,h2:-.15,k2:.1,sA1:1,eA1:1.2,sA2:-.4,eA2:.5}),70]).concat([[we({}),140]]),charge:[[we({ry:4,lean:.3,h1:.8,k1:-1.1,h2:-.6,k2:.6}),140],[we({ry:-8,rx:10,lean:1.35,sA1:1.5,eA1:0,sA2:1.4,eA2:0,h1:-.9,k1:.2,h2:-1.2,k2:.3}),90],[we({ry:-8,rx:22,lean:1.4,sA1:1.55,eA1:0,sA2:1.45,eA2:0,h1:-1,k1:.2,h2:-1.3,k2:.3}),90],[we({ry:-8,rx:30,lean:1.45,sA1:1.55,eA1:0,sA2:1.45,eA2:0,h1:-1,k1:.2,h2:-1.3,k2:.3}),200],[we({rx:18,ry:2}),140],[we({rx:8}),120]],grab:[[we({lean:.3,sA1:1.6,eA1:0,sA2:1.5,eA2:.1}),160],...[0,1,2,3,4,5].map(t=>[we({ry:-6-t%3*4,fx:t%2?-1:1,lean:0,sA1:1.6,eA1:0,sA2:1.6,eA2:0}),100]),[we({ry:6,lean:.3,h1:.9,k1:-1.3,h2:-.6,k2:.9}),260]],electric:[0,1,2,3,4,5,6,7,8,9].map(t=>[we({ry:7,lean:.35,sA1:2.4+t%2*.3,eA1:.6,sA2:2.2,eA2:.7,h1:.9,k1:-1.4,h2:-.6,k2:1,fx2:t%2?"zap":"zap2"}),70]).concat([[we({}),140]]),roll:[0,1,2,3,4,5,6,7].map(t=>[we({ry:-10,rx:t*5,rot:t*Math.PI/2,lean:.9,head:.6,sA1:1.8,eA1:1.2,sA2:1.7,eA2:1.3,h1:2.2,k1:-2.6,h2:2,k2:-2.5}),70]).concat([[we({rx:30,ry:2}),140],[we({rx:14}),120]]),flip:[0,1,2,3,4,5,6,7].map(t=>{let e=t/7;return[we({ry:-Math.sin(e*Math.PI)*40,rx:e*26,rot:e*Math.PI*2,lean:.6,sA1:2.6,eA1:.3,sA2:2.4,eA2:.4,h1:1.6,k1:-1.8,h2:1.4,k2:-1.6}),85]}).concat([[we({rx:26,ry:4,h1:.8,k1:-1.2}),140],[we({rx:12}),120]]),teleport:[[we({alpha:.6,ry:1}),90],[we({alpha:.3,ry:2}),90],[we({alpha:0,ry:2}),260],[we({alpha:.3,rx:30}),90],[we({alpha:.7,rx:30}),90],[we({rx:30}),160],[we({rx:12}),120]]},PT=Object.keys(Im);function Lm(t){return(t||"").split(";").map(e=>e.trim()).filter(Boolean).map(e=>{let[n,i]=e.split(":");return{name:n.trim(),kind:(i||"punch").trim()}})}function C5(t){let[e,n,i,r,s]=(t||"").split(";").map(o=>o.trim());return{gi:e||"#f2efe6",skin:n||"#e0a878",hair:i||"#2a1a12",accent:r||"#c4283c",belt:s||"#1a1a1a"}}var Zi=class{constructor(e,n={}){this.c=e,this.pal=C5(e.Palette),this.build=yy[e.Build]||yy.medium,this.moves=Lm(e.Moves),this.onEvent=n.onEvent||(()=>{}),this.sheet=k2(e.Id),this.sheetImg=this.sheet?$s(this.sheet.image):null,this.sheetImg&&!this.sheetImg.complete&&this.sheetImg.addEventListener("load",()=>{this.dirty=!0}),this.size=this.sheet?E5:Dr,this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.ctx.imageSmoothingEnabled=!1,this.setMove(null),this.dirty=!0,this.render()}get usingSheet(){return!!(this.sheetImg&&this.sheetImg.complete&&this.sheetImg.naturalWidth)}setMove(e){let n=e?this.moves.find(i=>i.name===e):null;if(this.moveName=n?n.name:null,this.kind=n?n.kind:"idle",this.frames=n?Im[n.kind]||Im.punch:b5,this.frame=0,this.t=0,this.dirty=!0,this.firedFrame=-1,this.sheet){let i=this.sheet.anims||{};this.sheetAnim=n&&(i[n.name]||i[n.kind])||i.idle||null}}update(e){var i;if(this.t+=Math.max(0,e||0),this.sheet&&!this.usingSheet)return!1;if(this.usingSheet&&this.sheetAnim){let r=this.sheetAnim.fps||10,s=this.sheetAnim.frames.length,o=Math.floor(this.t/1e3*r);if(this.moveName&&o>=s)return this.setMove(null),!0;let a=o%s;return a!==this.frame||this.dirty?(this.frame=a,this.moveName&&this.sheetAnim.event&&a===((i=this.sheetAnim.eventFrame)!=null?i:0)&&this.firedFrame!==a&&(this.firedFrame=a,this.onEvent(this.sheetAnim.event,this)),this.render(),!0):!1}let n=this.dirty;for(;this.t>=this.frames[this.frame][1];){if(this.t-=this.frames[this.frame][1],this.frame++,n=!0,this.frame>=this.frames.length){if(this.moveName)return this.setMove(null),this.render(),!0;this.frame=0}let r=this.frames[this.frame][2];r&&this.firedFrame!==this.frame&&(this.firedFrame=this.frame,this.onEvent(r,this))}return n&&this.render(),n}render(){this.dirty=!1;let e=this.ctx;if(e.clearRect(0,0,this.size,this.size),this.sheet){if(!this.usingSheet||!this.sheetAnim){this.dirty=!0;return}let n=this.sheetAnim.frames[this.frame%this.sheetAnim.frames.length],[i,r,s,o,a,l=0]=n,c=this.sheet.scale||1,u=s*c,h=o*c,f=a!=null?a*c:u/2,m=Math.round(this.size*.4-f),v=Math.round(this.size-2-h-l*c);e.drawImage(this.sheetImg,i,r,s,o,m,v,u,h);return}R5(e,this.frames[this.frame][0],this.pal,this.build,this.c.Id)}};function Ei(t,e,n,i,r,s,o,a){let l=e+Math.sin(r)*i,c=n+Math.cos(r)*i;return t.lineCap="round",t.strokeStyle=a,t.lineWidth=s+2,t.beginPath(),t.moveTo(e,n),t.lineTo(l,c),t.stroke(),t.strokeStyle=o,t.lineWidth=s,t.beginPath(),t.moveTo(e,n),t.lineTo(l,c),t.stroke(),[l,c]}function Pm(t,e,n,i,r,s){t.fillStyle=s,t.beginPath(),t.arc(e,n,i+1,0,Math.PI*2),t.fill(),t.fillStyle=r,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}function R5(t,e,n,i,r){let s="#0d0f1a",o=i.w,a=i.h,l=15*At*a,c=15*At*a,u=21*At*a,h=11.5*At*a,f=10.5*At*a,m=6.2*At,v=5.5*At*o,_=4.6*At*o;t.save(),t.globalAlpha=e.alpha;let y=54+e.rx,d=T5-l-c+2+e.ry;t.translate(y,d-u*.3),t.rotate(e.rot),t.scale(e.fx,1),t.translate(0,u*.3);let p=fd(n.gi,-.35),g=fd(n.skin,-.3),S=[Math.sin(e.lean)*u,-Math.cos(e.lean)*u],b=ee=>[S[0]+(ee?-2:2)*o,S[1]+3],A=Ei(t,-2,0,l,e.h2,v,p,s),T=Ei(t,A[0],A[1],c,e.h2+e.k2,v*.9,p,s);Ei(t,T[0],T[1],4*At,Math.PI/2,3*At,g,s);let R=b(1),H=Ei(t,R[0],R[1],h,e.sA2,_,o>1.1?g:p,s),x=Ei(t,H[0],H[1],f,e.sA2+e.eA2,_*.9,g,s);Pm(t,x[0],x[1],2.6*At*o,g,s),t.lineCap="round",t.strokeStyle=s,t.lineWidth=12*At*o+2,t.beginPath(),t.moveTo(0,-2),t.lineTo(S[0]*.92,S[1]*.92),t.stroke(),t.strokeStyle=n.gi,t.lineWidth=12*At*o,t.stroke(),t.strokeStyle=n.skin,t.lineWidth=4*At*o,t.beginPath(),t.moveTo(S[0]*.9,S[1]*.9),t.lineTo(S[0]*.55,S[1]*.55),t.stroke(),t.strokeStyle=n.belt,t.lineWidth=3*At;let w=Math.cos(e.lean)*6*At*o,k=Math.sin(e.lean)*6*At*o;t.beginPath(),t.moveTo(S[0]*.12-w,S[1]*.12-k),t.lineTo(S[0]*.12+w,S[1]*.12+k),t.stroke(),A=Ei(t,2,0,l,e.h1,v,n.gi,s),T=Ei(t,A[0],A[1],c,e.h1+e.k1,v*.9,n.gi,s),Ei(t,T[0],T[1],4*At,Math.PI/2,3*At,n.skin,s);let D=S[0]+Math.sin(e.lean+e.head)*m*1.1,O=S[1]-Math.cos(e.lean+e.head)*m*1.1;Pm(t,D,O,m,n.skin,s),t.fillStyle=n.hair,t.beginPath(),t.arc(D-.5,O-1,m,Math.PI*1.02+e.lean,Math.PI*1.98+e.lean),t.fill(),t.strokeStyle=n.accent,t.lineWidth=2.2*At,t.beginPath(),t.moveTo(D-m,O-1.5),t.lineTo(D+m,O-1.5),t.moveTo(D-m,O-1.5),t.lineTo(D-m-6,O+2),t.stroke(),t.fillStyle=s,t.fillRect(D+m*.35,O+.5,2,2);let Z=b(0);if(H=Ei(t,Z[0],Z[1],h,e.sA1,_,o>1.1?n.skin:n.gi,s),x=Ei(t,H[0],H[1],f,e.sA1+e.eA1,_*.9,n.skin,s),Pm(t,x[0],x[1],2.8*At*o,n.skin,s),e.fx2==="fire"||e.fx2==="fire2"){let ee=e.fx2==="fire2"?1.25:1;t.fillStyle="#f2a93b",t.beginPath(),t.moveTo(D+m,O+2),t.lineTo(D+m+40*ee,O-12*ee),t.lineTo(D+m+46*ee,O+6),t.lineTo(D+m+38*ee,O+18*ee),t.closePath(),t.fill(),t.fillStyle="#ffe28a",t.beginPath(),t.moveTo(D+m,O+2),t.lineTo(D+m+24*ee,O-5),t.lineTo(D+m+24*ee,O+9),t.closePath(),t.fill()}t.restore();let U=t.getImageData(0,0,Dr,Dr),q=U.data,z=e.fx2==="zap"||e.fx2==="zap2",se=e.fx2==="zap"?[255,238,120]:[140,220,255];for(let ee=3;ee<q.length;ee+=4)q[ee]<110?q[ee]=0:q[ee]=Math.round(255*nt(e.alpha,0,1));if(z){let ee=Dr,ue=new Uint8ClampedArray(q);for(let Fe=1;Fe<ee-1;Fe++)for(let Oe=1;Oe<ee-1;Oe++){let X=(Fe*ee+Oe)*4;ue[X+3]||(ue[X+7]||ue[X-1]||ue[X+ee*4+3]||ue[X-ee*4+3])&&(Oe+Fe+(e.fx2==="zap"?0:1))%3&&(q[X]=se[0],q[X+1]=se[1],q[X+2]=se[2],q[X+3]=255)}}t.putImageData(U,0,0)}var P5=3,Uu=2.45,Nm=2.7;function bo(t,e,n,i={}){let r=document.createElement("canvas");r.width=t,r.height=e,n(r.getContext("2d"),t,e);let s=new Ha(r);return s.magFilter=Lt,s.minFilter=i.mip?ym:Lt,s.generateMipmaps=!!i.mip,s.colorSpace=gn,i.repeat&&(s.wrapS=s.wrapT=Ua,s.repeat.set(i.repeat[0],i.repeat[1])),s}function I5(){let t=Pn(77);return bo(128,128,(e,n,i)=>{let r=["#1d2a1a","#24331f","#2c3b22","#3a3424","#2f2a20","#463d2c","#1a2216"];for(let s=0;s<i;s+=2)for(let o=0;o<n;o+=2){let a=t();e.fillStyle=r[Math.floor(a*a*r.length)],e.fillRect(o,s,2,2)}for(let s=0;s<18;s++){e.fillStyle=t()<.5?"#4a3e2c":"#3b3226";let o=t()*n,a=t()*i,l=3+t()*9;for(let c=0;c<l*6;c++)e.fillRect(Math.round(o+(t()-.5)*l*2),Math.round(a+(t()-.5)*l),2,2)}for(let s=0;s<60;s++)e.fillStyle=t()<.5?"#5d5a52":"#77736a",e.fillRect(Math.round(t()*n),Math.round(t()*i),2,1)},{repeat:[18,12],mip:!0})}function L5(){return bo(4,256,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#04060f"),i.addColorStop(.5,"#0a1126"),i.addColorStop(.8,"#111b3a"),i.addColorStop(1,"#1a2647"),t.fillStyle=i,t.fillRect(0,0,e,n)})}function N5(){let t=Pn(31);return bo(512,128,(e,n,i)=>{e.fillStyle="#0b1022",e.beginPath(),e.moveTo(0,i);let r=i*.6;for(let s=0;s<=n;s+=8)r=nt(r+(t()-.5)*18,i*.25,i*.85),e.lineTo(s,r);e.lineTo(n,i),e.fill();for(let s=0;s<6;s++){let o=t()*n,a=20+t()*40;e.fillRect(o,i-a-20,5,a+20),t()<.5&&e.fillRect(o-10,i-a-22,26,4)}})}function D5(){let t=Pn(5);return bo(32,32,(e,n,i)=>{for(let r=0;r<14;r++){e.fillStyle=["#2f4a26","#3c5c2c","#263d1f","#4d6b32"][r%4];let s=2+t()*(n-4),o=8+t()*20,a=(t()-.5)*6;for(let l=0;l<o;l+=2)e.fillRect(Math.round(s+a*l/o),i-l-2,2,2)}})}function U5(t){return bo(32,32,(e,n,i)=>{let r=n/2,s=i/2;for(let o=0;o<i;o+=2)for(let a=0;a<n;a+=2){let l=Math.hypot(a-r,o-s)/(n/2);l>1||(e.fillStyle=l<.35?"#ffffff":l<.6?"#cfe8ff":t,e.globalAlpha=l<.6?1:.85-l*.4,e.fillRect(a,o,2,2))}})}function F5(){return bo(32,16,(t,e,n)=>{t.fillStyle="rgba(0,0,0,0.55)",t.beginPath(),t.ellipse(e/2,n/2,e/2-1,n/2-1,0,0,Math.PI*2),t.fill()})}function xy(t,e,n,i=6,r=!0){let s=[e,n],o=e.distanceTo(n)*.18;for(let c=0;c<i;c++){let u=[];for(let h=0;h<s.length-1;h++){let f=s[h],m=s[h+1],v=f.clone().lerp(m,.5);v.x+=(t()-.5)*o*2,v.z+=(t()-.5)*o,u.push(f,v)}u.push(s[s.length-1]),s=u,o*=.55}let a=[s];if(!r)return a;let l=2+Math.floor(t()*3);for(let c=0;c<l;c++){let u=Math.floor(s.length*(.15+t()*.5)),h=s[u],f=h.clone().add(new L((t()-.5)*8,-3-t()*6,(t()-.5)*2)),m=xy(t,h,f,4,!1)[0];a.push(m)}return a}function _y(t,e,n){let i=[],r=[],s=0,o=new L;for(let[l,c]of t.entries()){let u=l===0?e:e*.55;for(let h=0;h<c.length;h++){let f=c[Math.max(0,h-1)],m=c[Math.min(c.length-1,h+1)];if(o.subVectors(m,f).cross(n).normalize().multiplyScalar(u*(1-h/c.length*.5)),i.push(c[h].x-o.x,c[h].y-o.y,c[h].z-o.z),i.push(c[h].x+o.x,c[h].y+o.y,c[h].z+o.z),h>0){let v=s+h*2;r.push(v-2,v-1,v,v-1,v+1,v)}}s+=c.length*2}let a=new Yn;return a.setAttribute("position",new rn(i,3)),a.setIndex(r),a}var Fu=class{constructor(e,n,i={}){this.container=e,this.cb=i,this.rng=Pn(2024),this.mode="overview",this.hovered=null,this.selected=null,this.visible=!0,this.projectiles=[],this.bolts=[],this.nextBolt=800,this.flash=0;let r=this.renderer=new xu({antialias:!1,powerPreference:"low-power"});r.setPixelRatio(1/P5),r.outputColorSpace=gn,r.domElement.className="field-canvas",e.appendChild(r.domElement);let s=this.scene=new Mu;this.skyTex=L5(),s.background=this.skyTex,s.fog=new Su(659750,14,42),this.camera=new Kt(38,1,.1,200),this.ambient=new Pu(4872842,1.1),s.add(this.ambient),this.moon=new Ru(9414368,.9),this.moon.position.set(-6,10,8),s.add(this.moon),this.boltLight=new Wa(13623551,0,60,1.2),s.add(this.boltLight);let o=new wt(new hi(160,110),new Eo({map:I5()}));o.rotation.x=-Math.PI/2,o.position.z=0,s.add(o);let a=new wt(new hi(120,30),new ui({map:N5(),transparent:!0,fog:!1}));a.position.set(0,6,-34),s.add(a),this.foreground=[];let l=new Eo({color:5985865,flatShading:!0}),c=this.rng;for(let p=0;p<70;p++){let g=.12+c()*c()*.9,S=new wt(new Au(g,0),l),b=(c()-.5)*40,A=-2-c()*22;c()<.35&&(A=1.2+c()*3),Math.abs(A)<1.2&&(A-=2),S.position.set(b,g*.4,A),S.rotation.set(c()*3,c()*3,c()*3),S.scale.y=.6+c()*.5,A>-1.5&&this.foreground.push(S),s.add(S)}let u=new hi(.9,.9);u.translate(0,.45,0);let h=new Eo({map:D5(),transparent:!0,alphaTest:.5,side:Dn}),f=420,m=new Eu(u,h,f),v=new it,_=new Mi;for(let p=0;p<f;p++){let g=(c()-.5)*50,S=4-c()*28,b=.6+c()*.9;_.setFromEuler(new qn(0,(c()-.5)*.5,0)),v.compose(new L(g,0,S),_,new L(b,b,b)),m.setMatrixAt(p,v)}s.add(m);let y=new Yn,d=[];for(let p=0;p<160;p++)d.push((c()-.5)*30,c()*8,-c()*16+3);y.setAttribute("position",new rn(d,3)),this.dust=new Tu(y,new Va({color:10466024,size:.05,transparent:!0,opacity:.6})),s.add(this.dust),this.shadowTex=F5(),this.fighters=n.map((p,g)=>{let S=Math.ceil(n.length/2),b=g%2,T=(Math.floor(g/2)-(S-1)/2)*Uu+(b?Uu/2:0)-Uu/4,R=b?-1.9:0,H=new Zi(p,{onEvent:(Z,U)=>this.onFighterEvent(Z,U)}),x=new Ha(H.canvas);x.magFilter=Lt,x.minFilter=Lt,x.generateMipmaps=!1,x.colorSpace=gn;let w=new ui({map:x,transparent:!0,alphaTest:.5,color:2764880,fog:!1}),k=H.size===Dr?Nm:Nm*(H.size/Dr)*.92,D=new wt(new hi(k,k),w);D.position.set(T,k/2-(H.size===Dr?.08:k*.012),R),D.userData.id=p.Id,s.add(D);let O=new wt(new hi(1.3,.45),new ui({map:this.shadowTex,transparent:!0,depthWrite:!1}));return O.rotation.x=-Math.PI/2,O.position.set(T-.25,.02,R),s.add(O),{c:p,f:H,tex:x,mat:w,mesh:D,sh:O,home:new L(T,D.position.y,R),tint:0,fade:1,phase:c()*600}}),this.fighters.forEach(p=>p.f.update(p.phase)),this.raycaster=new Iu,this.pointer=new ze(-9,-9),this.camFrom=null,this.camT=1,this.camPos=new L,this.camLook=new L,this.onMove=p=>{let g=r.domElement.getBoundingClientRect();this.pointer.set((p.clientX-g.left)/g.width*2-1,-((p.clientY-g.top)/g.height)*2+1)},this.onLeave=()=>this.pointer.set(-9,-9),this.onClick=()=>{this.mode==="overview"&&this.hovered&&this.select(this.hovered)},r.domElement.addEventListener("pointermove",this.onMove),r.domElement.addEventListener("pointerleave",this.onLeave),r.domElement.addEventListener("click",this.onClick),this.resize(),this.overviewPose(this.camPos,this.camLook),this.last=performance.now(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}resize(){let e=this.container.clientWidth,n=this.container.clientHeight;this.w=e,this.h=n,this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.camT>=1&&(this.mode==="overview"?this.overviewPose(this.camPos,this.camLook):this.detailPose(this.selected,this.camPos,this.camLook))}overviewPose(e,n){var l;let r=(Math.ceil((((l=this.fighters)==null?void 0:l.length)||16)/2)-1)/2*Uu+Nm*.7,s=this.camera.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*this.camera.aspect),a=nt(r/Math.tan(o/2),8,40);e.set(0,2.1+a*.05,a+.5),n.set(0,2,-1)}detailPose(e,n,i){let r=this.fighters.find(c=>c.c.Id===e);if(!r)return this.overviewPose(n,i);let s=7.4,o=this.camera.fov*Math.PI/180,a=Math.tan(o/2)*s*this.camera.aspect,l=this.camera.aspect>1.2?a*.52:0;n.set(r.home.x+l,2.1,r.home.z+s),i.set(r.home.x+l,1.45,r.home.z)}tweenCamera(e,n){this.camFrom={pos:this.camPos.clone(),look:this.camLook.clone()},this.camTo={pos:e,look:n},this.camT=0}select(e){var r,s,o,a;this.mode="detail",this.selected=e,this.hovered=null;let n=new L,i=new L;this.detailPose(e,n,i),this.tweenCamera(n,i),(s=(r=this.cb).onSelect)==null||s.call(r,e),(a=(o=this.cb).onHover)==null||a.call(o,null)}back(){var s,o;let e=this.selected;this.mode="overview",this.selected=null;let n=this.fighters.find(a=>a.c.Id===e);n==null||n.f.setMove(null);let i=new L,r=new L;this.overviewPose(i,r),this.tweenCamera(i,r),(o=(s=this.cb).onSelect)==null||o.call(s,null)}playMove(e){let n=this.fighters.find(i=>i.c.Id===this.selected);n&&n.f.setMove(e)}onFighterEvent(e,n){if(e!=="projectile")return;let i=this.fighters.find(l=>l.f===n);if(!i)return;let r=n.pal.accent,s=new ui({map:U5(r),transparent:!0,blending:Da,depthWrite:!1,fog:!1}),o=new wt(new hi(.9,.9),s);o.position.set(i.mesh.position.x+.95,i.mesh.position.y+.2,i.mesh.position.z+.05),this.scene.add(o);let a=new Wa(new Be(r),3,6,1.5);a.position.copy(o.position),this.scene.add(a),this.projectiles.push({m:o,light:a,life:0})}spawnBolt(){let e=this.rng,n=(e()-.5)*36,i=-8-e()*18,r=new L(n+(e()-.5)*6,20,i),s=new L(n,0,i),o=xy(e,r,s),a=new L().subVectors(this.camera.position,s).normalize(),l=new wt(_y(o,.09,a),new ui({color:15922943,transparent:!0,fog:!1,side:Dn})),c=new wt(_y(o,.45,a),new ui({color:7310591,transparent:!0,opacity:.35,blending:Da,depthWrite:!1,fog:!1,side:Dn}));this.scene.add(c,l),this.bolts.push({core:l,glow:c,life:0,max:260+e()*260}),this.boltLight.position.set(n,8,i+4),this.flash=1}setVisible(e){this.visible=e}loop(e){var r,s;this.raf=requestAnimationFrame(this.loop);let n=Math.min(64,e-this.last);if(this.last=e,!this.visible)return;if(this.camT<1&&this.camFrom){this.camT=Math.min(1,this.camT+n/1100);let o=qs(this.camT);this.camPos.lerpVectors(this.camFrom.pos,this.camTo.pos,o),this.camLook.lerpVectors(this.camFrom.look,this.camTo.look,o)}let i=Math.sin(e*25e-5)*.15;if(this.camera.position.set(this.camPos.x+i,this.camPos.y,this.camPos.z),this.camera.lookAt(this.camLook),this.mode==="overview"&&this.camT>=1){this.raycaster.setFromCamera(this.pointer,this.camera);let o=this.raycaster.intersectObjects(this.fighters.map(l=>l.mesh)),a=o.length?o[0].object.userData.id:null;a!==this.hovered&&(this.hovered=a,this.renderer.domElement.style.cursor=a?"pointer":"default",(s=(r=this.cb).onHover)==null||s.call(r,a))}for(let o of this.fighters){let a=o.c.Id===this.selected,l=this.mode==="overview"?o.c.Id===this.hovered:a;o.tint=Xs(o.tint,l?1:0,Math.min(1,n/120));let c=this.mode==="detail"&&!a?0:1;o.fade=Xs(o.fade,c,Math.min(1,n/250));let u=.07+this.flash*.3,h=Xs(u,1,o.tint);o.mat.color.setRGB(h,h*(.96+o.tint*.04),h*(1.5-o.tint*.5)),o.mat.opacity=o.fade,o.mesh.visible=o.fade>.02,o.sh.visible=o.mesh.visible;let f=o.tint*.12*(this.mode==="overview"?1:0);o.mesh.position.y=o.home.y+f,l||o.f.moveName?o.f.update(n)&&(o.tex.needsUpdate=!0):o.f.update(n*.5)&&(o.tex.needsUpdate=!0)}for(let o of this.foreground)o.visible=this.mode==="overview";for(let o=this.projectiles.length-1;o>=0;o--){let a=this.projectiles[o];a.life+=n,a.m.position.x+=n*.006,a.m.rotation.z+=n*.01;let l=1+Math.sin(a.life*.05)*.12;a.m.scale.set(l,l,l),a.light.position.copy(a.m.position),a.life>1400&&(this.scene.remove(a.m,a.light),a.m.geometry.dispose(),a.m.material.map.dispose(),a.m.material.dispose(),this.projectiles.splice(o,1))}this.nextBolt-=n,this.nextBolt<=0&&(this.spawnBolt(),this.rng()<.35&&setTimeout(()=>this.spawnBolt(),120),this.nextBolt=1400+this.rng()*3800);for(let o=this.bolts.length-1;o>=0;o--){let a=this.bolts[o];a.life+=n;let l=a.life<a.max*.6?Math.floor(a.life/45)%3!==1?1:.25:1-(a.life-a.max*.6)/(a.max*.4);a.core.material.opacity=nt(l,0,1),a.glow.material.opacity=nt(l,0,1)*.35,a.life>a.max&&(this.scene.remove(a.core,a.glow),a.core.geometry.dispose(),a.glow.geometry.dispose(),a.core.material.dispose(),a.glow.material.dispose(),this.bolts.splice(o,1))}this.flash*=Math.pow(.9,n/16),this.boltLight.intensity=this.flash*260,this.ambient.intensity=1.1+this.flash*1.6,this.dust.position.y=Math.sin(e*3e-4)*.2,this.dust.rotation.y=e*2e-5,this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.raf);let e=this.renderer.domElement;e.removeEventListener("pointermove",this.onMove),e.removeEventListener("pointerleave",this.onLeave),e.removeEventListener("click",this.onClick),this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.renderer.dispose(),e.remove()}};var fs=vt(Zn(),1);var Ya=vt(tn(),1);function Dm({open:t,seed:e=3,color:n="#ece6d6",className:i="",children:r,paintMs:s=850,onClosed:o}){let a=(0,fs.useRef)(null),l=(0,fs.useRef)(null),c=(0,fs.useRef)({p:0,target:0,from:0,start:0,strokes:null,w:0,h:0});return(0,fs.useEffect)(()=>{let u=c.current;u.from=u.p,u.target=t?1:0,u.start=performance.now()},[t]),(0,fs.useEffect)(()=>{let u=l.current,h=u.getContext("2d"),f,m=c.current,v=()=>{let d=a.current.getBoundingClientRect(),p=Math.min(window.devicePixelRatio||1,2);m.w=d.width,m.h=d.height,u.width=d.width*p,u.height=d.height*p,h.setTransform(p,0,0,p,0,0),m.strokes=Mc(d.width*.03,d.height*.02,d.width*.94,d.height*.96,e,{color:n,rows:Math.max(4,Math.round(d.height/120)),dry:.6}),m.dirty=!0};v();let _=new ResizeObserver(v);_.observe(a.current);let y=d=>{f=requestAnimationFrame(y);let p=m.target?s:s*.6,g=nt((d-m.start)/p,0,1),S=m.p;m.p=m.from+(m.target-m.from)*(m.target?Sa(g):qs(g)),!(S===m.p&&!m.dirty)&&(m.dirty=!1,h.clearRect(0,0,m.w,m.h),wc(h,m.strokes,m.p,{reverse:!m.target,overlap:.5}),!m.target&&g>=1&&S!==0&&(o==null||o()))};return f=requestAnimationFrame(y),()=>{cancelAnimationFrame(f),_.disconnect()}},[e,n,s,o]),(0,Ya.jsxs)("div",{ref:a,className:`brush-panel ${t?"open":""} ${i}`,children:[(0,Ya.jsx)("canvas",{ref:l,className:"brush-panel-bg","aria-hidden":"true"}),(0,Ya.jsx)("div",{className:"brush-panel-content",children:r})]})}var Ve=vt(tn(),1);function O5(){try{let t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}function k5({characters:t,onSelect:e,onHover:n,selected:i,fighterRef:r}){let s=(0,kt.useRef)(null);return(0,kt.useEffect)(()=>{let o=t.map(h=>new Zi(h));r.current=o;let a=s.current;a.textContent="",o.forEach(h=>{let f=document.createElement("button");f.className="fallback-fighter",f.setAttribute("aria-label",h.c.Name),f.appendChild(h.canvas),f.addEventListener("mouseenter",()=>n(h.c.Id)),f.addEventListener("mouseleave",()=>n(null)),f.addEventListener("click",()=>e(h.c.Id)),a.appendChild(f)});let l,c=performance.now(),u=h=>{l=requestAnimationFrame(u);let f=h-c;c=h,o.forEach(m=>m.update(f))};return l=requestAnimationFrame(u),()=>cancelAnimationFrame(l)},[t]),(0,Ve.jsx)("div",{ref:s,className:`fallback-row ${i?"has-selection":""}`,"data-selected":i||""})}function Um({characters:t,height:e}){let n=(0,kt.useRef)(null),i=(0,kt.useRef)(null),r=(0,kt.useRef)(null),s=(0,kt.useRef)([]),[o,a]=(0,kt.useState)(null),[l,c]=(0,kt.useState)(null),[u,h]=(0,kt.useState)(null),[f]=(0,kt.useState)(O5),[m,v]=(0,kt.useState)(null),_=Zs(i,.01),y=(0,kt.useMemo)(()=>dd(360,110,"#c4283c",9),[]),d=(0,kt.useMemo)(()=>dd(360,110,"#e23a4e",21),[]);(0,kt.useEffect)(()=>{if(!f)return;let R;try{R=new Fu(n.current,t,{onHover:a,onSelect:w=>{c(w),h(null)}})}catch(w){v(w.message||String(w));return}r.current=R;let H=new ResizeObserver(()=>R.resize());H.observe(n.current);let x=setInterval(()=>R.setVisible(_.current),200);return()=>{clearInterval(x),H.disconnect(),R.dispose()}},[t,f]);let p=t.find(R=>R.Id===l),g=t.find(R=>R.Id===o),S=p?Lm(p.Moves):[],b=R=>{r.current?r.current.select(R):(c(R),h(null))},A=()=>{r.current?r.current.back():c(null),h(null)},T=R=>{var H;h(R),r.current?r.current.playMove(R):(H=s.current.find(x=>x.c.Id===l))==null||H.setMove(R)};return(0,Ve.jsxs)("section",{className:"characters",ref:i,style:{height:e},"aria-label":"The fighters",children:[(0,Ve.jsx)("div",{className:"field-stage",ref:n,children:(!f||m)&&(0,Ve.jsx)(k5,{characters:t,selected:l,fighterRef:s,onHover:a,onSelect:b})}),(0,Ve.jsxs)("header",{className:`section-head ${l?"dim":""}`,children:[(0,Ve.jsx)("p",{className:"eyebrow",children:"Super Street Fighter II \xB7 16 World Warriors"}),(0,Ve.jsx)("h2",{className:"brush-title",children:"The Fighters"}),(0,Ve.jsx)("p",{className:"lede",children:"Lightning lights the field \u2014 hover a fighter to bring them out of the dark, click to step in close."})]}),(0,Ve.jsx)("div",{className:`hover-tag ${g&&!l?"show":""}`,"aria-live":"polite",children:g&&!l&&(0,Ve.jsxs)(Ve.Fragment,{children:[(0,Ve.jsx)("strong",{children:g.Name}),(0,Ve.jsxs)("span",{children:[g.Country," \xB7 ",g.Style]})]})}),(0,Ve.jsx)("nav",{className:"sr-only","aria-label":"Choose a fighter",children:t.map(R=>(0,Ve.jsx)("button",{onClick:()=>b(R.Id),children:R.Name},R.Id))}),(0,Ve.jsx)(Dm,{open:!!p,seed:p?p.Name.length*7:3,className:"bio-panel",children:p&&(0,Ve.jsxs)("div",{className:"bio",children:[(0,Ve.jsx)("button",{className:"back",onClick:A,children:"\u2190 All fighters"}),(0,Ve.jsxs)("p",{className:"eyebrow ink",children:[p.Country," \xB7 ",p.Style]}),(0,Ve.jsx)("h3",{className:"brush-title ink",children:p.Name}),(0,Ve.jsx)("p",{className:"tagline",children:p.Tagline}),(0,Ve.jsx)("p",{className:"bio-text",children:p.Bio}),(0,Ve.jsxs)("dl",{className:"facts",children:[(0,Ve.jsxs)("div",{children:[(0,Ve.jsx)("dt",{children:"Debut"}),(0,Ve.jsx)("dd",{children:p.Debut})]}),(0,Ve.jsxs)("div",{children:[(0,Ve.jsx)("dt",{children:"Fighting style"}),(0,Ve.jsx)("dd",{children:p.Style})]})]}),(0,Ve.jsx)("p",{className:"moves-label",children:"Special moves"}),(0,Ve.jsx)("div",{className:"moves",children:S.map(R=>(0,Ve.jsx)("button",{className:`move ${u===R.name?"active":""}`,style:{"--stroke":`url(${y})`,"--stroke-hover":`url(${d})`},onClick:()=>T(R.name),children:R.name},R.name))})]},p.Id)}),m&&(0,Ve.jsxs)("p",{className:"error small",children:["3D field unavailable (",m,") \u2014 showing the 2D roster instead."]})]})}var pt=vt(Zn(),1);var Sy={minor:[0,2,3,5,7,8,10],dorian:[0,2,3,5,7,9,10],phrygian:[0,1,3,5,7,8,10],major:[0,2,4,5,7,9,11],mixolydian:[0,2,4,5,7,9,10]},Ou=class{constructor(){this.ctx=null,this.timer=null,this.analyser=null,this.volume=.5}ensure(){if(this.ctx)return this.ctx;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.volume*.35,this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.master.connect(this.analyser),this.analyser.connect(this.ctx.destination);let n=this.ctx.sampleRate*.3;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1;return this.ctx}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e*.35)}compose(e){let n=Pn(`theme:${e}`),i=Object.keys(Sy),r=Sy[i[Math.floor(n()*i.length)]],s=45+Math.floor(n()*10),o=128+Math.floor(n()*40),a=[0,5,3,4].map(u=>(u+Math.floor(n()*2))%7),l=[];for(let u=0;u<16;u++)l.push(n()<.62?Math.floor(n()*9)-1:null);let c=[];for(let u=0;u<4;u++)for(let h=0;h<16;h++){let f=l[h];f!=null&&u===3&&h>8&&(f=f+2),f!=null&&u===1&&n()<.3&&(f=null),c.push(f==null?null:f+a[u])}return{scale:r,root:s,bpm:o,prog:a,melody:c}}noteFreq(e,n,i){let r=e.scale,s=Math.floor(n/r.length),o=(n%r.length+r.length)%r.length,a=e.root+12*(i+s)+r[o];return 440*Math.pow(2,(a-69)/12)}play(e){let n=this.ensure();if(!n)return;n.state==="suspended"&&n.resume(),this.stop();let i=this.compose(e),r=60/i.bpm/4,s=0,o=n.currentTime+.05,a=()=>{for(;o<n.currentTime+.2;)this.scheduleStep(i,s,o,r),o+=r,s=(s+1)%64};a(),this.timer=setInterval(a,50),this.playing=!0}scheduleStep(e,n,i,r){let s=this.ctx,o=Math.floor(n/16),a=n%16,l=e.melody[n];if(l!=null&&this.tone("square",this.noteFreq(e,l,2),i,r*.9,.14),a%2===0){let c=e.prog[o]+(a%8===4?4:0);this.tone("triangle",this.noteFreq(e,c,0),i,r*1.8,.32)}if(a%2===1){let c=[0,2,4][(a>>1)%3];this.tone("square",this.noteFreq(e,e.prog[o]+c,1),i,r*.5,.04)}return a%8===0&&this.kick(i),a%8===4&&this.snare(i),a%2===0&&this.hat(i),s}tone(e,n,i,r,s){let o=this.ctx,a=o.createOscillator(),l=o.createGain();a.type=e,a.frequency.value=n,l.gain.setValueAtTime(s,i),l.gain.exponentialRampToValueAtTime(.001,i+r),a.connect(l),l.connect(this.master),a.start(i),a.stop(i+r+.02)}kick(e){let n=this.ctx,i=n.createOscillator(),r=n.createGain();i.frequency.setValueAtTime(140,e),i.frequency.exponentialRampToValueAtTime(40,e+.12),r.gain.setValueAtTime(.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.15),i.connect(r),r.connect(this.master),i.start(e),i.stop(e+.16)}noiseHit(e,n,i,r){let s=this.ctx,o=s.createBufferSource();o.buffer=this.noise;let a=s.createBiquadFilter();a.type="highpass",a.frequency.value=r;let l=s.createGain();l.gain.setValueAtTime(i,e),l.gain.exponentialRampToValueAtTime(.001,e+n),o.connect(a),a.connect(l),l.connect(this.master),o.start(e),o.stop(e+n)}snare(e){this.noiseHit(e,.14,.25,1200)}hat(e){this.noiseHit(e,.03,.06,7e3)}levels(e=16){if(!this.analyser||!this.playing)return null;let n=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteFrequencyData(n);let i=[];for(let r=0;r<e;r++)i.push(n[Math.min(n.length-1,r+1)]/255);return i}stop(){this.timer&&clearInterval(this.timer),this.timer=null,this.playing=!1}};function Fm(t){return t}function ku(t){if(t==null)return Fm;var e,n,i=t.scale[0],r=t.scale[1],s=t.translate[0],o=t.translate[1];return function(a,l){l||(e=n=0);var c=2,u=a.length,h=new Array(u);for(h[0]=(e+=a[0])*i+s,h[1]=(n+=a[1])*r+o;c<u;)h[c]=a[c],++c;return h}}function My(t,e){for(var n,i=t.length,r=i-e;r<--i;)n=t[r],t[r++]=t[i],t[i]=n}function Om(t,e){return typeof e=="string"&&(e=t.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(n){return wy(t,n)})}:wy(t,e)}function wy(t,e){var n=e.id,i=e.bbox,r=e.properties==null?{}:e.properties,s=km(t,e);return n==null&&i==null?{type:"Feature",properties:r,geometry:s}:i==null?{type:"Feature",id:n,properties:r,geometry:s}:{type:"Feature",id:n,bbox:i,properties:r,geometry:s}}function km(t,e){var n=ku(t.transform),i=t.arcs;function r(u,h){h.length&&h.pop();for(var f=i[u<0?~u:u],m=0,v=f.length;m<v;++m)h.push(n(f[m],m));u<0&&My(h,v)}function s(u){return n(u)}function o(u){for(var h=[],f=0,m=u.length;f<m;++f)r(u[f],h);return h.length<2&&h.push(h[0]),h}function a(u){for(var h=o(u);h.length<4;)h.push(h[0]);return h}function l(u){return u.map(a)}function c(u){var h=u.type,f;switch(h){case"GeometryCollection":return{type:h,geometries:u.geometries.map(c)};case"Point":f=s(u.coordinates);break;case"MultiPoint":f=u.coordinates.map(s);break;case"LineString":f=o(u.arcs);break;case"MultiLineString":f=u.arcs.map(o);break;case"Polygon":f=l(u.arcs);break;case"MultiPolygon":f=u.arcs.map(l);break;default:return null}return{type:h,coordinates:f}}return c(e)}var Bm={type:"Topology",objects:{land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},arcs:[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]],bbox:[-180,-85.60903777459777,180,83.64513000000002],transform:{scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]}};var Fn=256,Ki=128,Ty=78,Ay=136,Bu=(t,e)=>[(t+180)/360*Fn,(Ty-e)/Ay*Ki],Co={ryu:{country:"japan",lon:135.8,lat:34.7},honda:{country:"japan",lon:139.7,lat:35.7},blanka:{country:"brazil",lon:-60,lat:-3},guile:{country:"usa",lon:-117.5,lat:34.6},ken:{country:"usa",lon:-122.4,lat:37.8},balrog:{country:"usa",lon:-115.1,lat:36.2},chunli:{country:"china",lon:116.4,lat:39.9},zangief:{country:"ussr",lon:90,lat:62},dhalsim:{country:"india",lon:78,lat:27},thawk:{country:"mexico",lon:-99,lat:19.4},feilong:{country:"hongkong",lon:114.2,lat:22.3},deejay:{country:"jamaica",lon:-77.3,lat:18.1},cammy:{country:"england",lon:-2,lat:52},vega:{country:"spain",lon:-3.7,lat:40.4},sagat:{country:"thailand",lon:99,lat:14},bison:{country:"thailand",lon:100.5,lat:13.7}},zu={ussr:[160,4],china:[205,8],japan:[243,44],hongkong:[224,70],thailand:[190,80],india:[168,56],england:[108,4],spain:[106,40],usa:[30,10],mexico:[38,64],jamaica:[84,62],brazil:[114,86]},G5={ussr:"U.S.S.R.",china:"CHINA",japan:"JAPAN",hongkong:"HONGKONG",thailand:"THAILAND",india:"INDIA",england:"ENGLAND",spain:"SPAIN",usa:"U.S.A.",mexico:"MEXICO",jamaica:"JAMAICA",brazil:"BRAZIL"},Ey=[12,22,112],W5=[96,176,255],X5=[40,96,214],q5=[214,168,98],Y5=[176,128,70],$5=[150,100,52],zm=null;function Z5(){if(zm)return zm;let t=document.createElement("canvas");t.width=Fn,t.height=Ki;let e=t.getContext("2d",{willReadFrequently:!0}),n=Om(Bm,Bm.objects.land);e.fillStyle="#fff";let r=(n.features?n.features.map(u=>u.geometry):[n.geometry]).flatMap(u=>u?u.type==="Polygon"?[u.coordinates]:u.coordinates:[]);for(let u of[-Fn,0,Fn]){e.beginPath();for(let h of r)for(let f of h){let m=null,v=0;f.forEach(([_,y],d)=>{m!=null&&Math.abs(_-m)>180&&(v+=m>_?360:-360),m=_;let[p,g]=Bu(_+v,Math.max(y,-Ay+Ty));d===0?e.moveTo(p+u,g):e.lineTo(p+u,g)}),e.closePath()}e.fill("evenodd")}let s=e.getImageData(0,0,Fn,Ki).data,o=new Uint8Array(Fn*Ki);for(let u=0;u<o.length;u++)o[u]=s[u*4+3]>110?1:0;let a=(u,h)=>u<0||h<0||u>=Fn||h>=Ki?0:o[h*Fn+u],l=e.createImageData(Fn,Ki),c=l.data;for(let u=0;u<Ki;u++)for(let h=0;h<Fn;h++){let f=(u*Fn+h)*4,m=Ey;if(a(h,u)){let v=!a(h-1,u)||!a(h+1,u)||!a(h,u-1)||!a(h,u+1),_=hd(`${h},${u}`)%23;m=v?$5:_===0||_===7?Y5:q5}else{let v=3;for(let _=-2;_<=2;_++)for(let y=-2;y<=2;y++)a(h+y,u+_)&&(v=Math.min(v,Math.max(Math.abs(y),Math.abs(_))));m=v===1?W5:v===2?X5:Ey}c[f]=m[0],c[f+1]=m[1],c[f+2]=m[2],c[f+3]=255}return zm=l,l}function K5(t,e){let[n,i]=zu[t],r=e?e.naturalWidth:26,s=e?e.naturalHeight:20;return{x:Math.round(n-r/2),y:i,w:r,h:s}}function J5(t,e,n){return[Math.max(t.x,Math.min(e,t.x+t.w-1)),Math.max(t.y,Math.min(n,t.y+12))]}function by(t,e,n,i){t.imageSmoothingEnabled=!1,t.putImageData(Z5(),0,0);let r=Co[e],s=[];for(let[a,l]of Object.entries(Co)){let[c,u]=Bu(l.lon,l.lat).map(Math.round);t.fillStyle=a===e?"#fff36b":"#e83a2e",t.fillRect(c-1,u-1,2,2)}let o=Object.keys(zu).map(a=>{let l=!!r&&r.country===a,c=n[a]||{},u=v=>v&&v.complete&&v.naturalWidth?v:null,h=l?u(c.on):u(c.off)||u(c.on),f=K5(a,h),m=l?r:Object.values(Co).find(v=>v.country===a);if(m){let[v,_]=Bu(m.lon,m.lat).map(Math.round);s.push({from:J5(f,v,_),to:[v,_],lit:l})}return{country:a,lit:l,img:h,off:u(c.off),box:f}});s.sort((a,l)=>a.lit-l.lit);for(let a of s)t.strokeStyle=a.lit?"#fff36b":"rgba(236,240,255,0.45)",t.lineWidth=1,t.beginPath(),t.moveTo(a.from[0]+.5,a.from[1]+.5),t.lineTo(a.to[0]+.5,a.to[1]+.5),t.stroke();for(let a of o){let{box:l}=a;a.img?t.drawImage(a.lit&&!i&&a.off?a.off:a.img,l.x,l.y):(t.fillStyle=a.lit&&i?"#ffd23f":"#5d6488",t.fillRect(l.x,l.y,l.w,10),t.fillStyle="#0b1022",t.font="7px monospace",t.fillText(G5[a.country],l.x+1,l.y+8))}if(r){let[a,l]=Bu(r.lon,r.lat).map(Math.round);t.fillStyle=i?"#ffffff":"#ff3b3b",t.fillRect(a-2,l-2,4,4),i&&(t.strokeStyle="#ff3b3b",t.strokeRect(a-4.5,l-4.5,9,9))}}var Ue=vt(tn(),1),Vm=8;function j5({character:t}){let e=(0,pt.useRef)(null);return(0,pt.useEffect)(()=>{let n=e.current;n.textContent="";let i=In(`img/portraits/${t.Id}.png`);if(i){let a=document.createElement("img");a.src=i,a.alt="",n.appendChild(a);return}let r=new Zi(t),s=document.createElement("canvas");s.width=48,s.height=48;let o=s.getContext("2d");o.imageSmoothingEnabled=!1,o.drawImage(r.canvas,34,18,64,64,0,0,48,48),n.appendChild(s)},[t]),(0,Ue.jsx)("span",{className:"portrait",ref:e,"aria-hidden":"true"})}function Q5({character:t,playing:e}){let n=(0,pt.useRef)(null);return(0,pt.useEffect)(()=>{if(!t)return;let i=new Zi(t),r=n.current;r.textContent="",r.appendChild(i.canvas);let s,o=performance.now(),a=0,l=c=>{s=requestAnimationFrame(l);let u=c-o;o=c,i.update(u*(e?1.3:1)),a+=u,e&&a>4200&&!i.moveName&&i.moves.length&&(a=0,i.setMove(i.moves[Math.floor(Math.random()*i.moves.length)].name))};return s=requestAnimationFrame(l),()=>cancelAnimationFrame(s)},[t,e]),(0,Ue.jsx)("div",{className:"big-fighter",ref:n,"aria-hidden":"true"})}function eT({character:t}){let e=(0,pt.useRef)(null),n=(0,pt.useMemo)(()=>{let r={};for(let s of Object.keys(zu)){let o=In(`img/flags/${s}.png`),a=In(`img/flags/${s}-off.png`);r[s]={on:o?$s(o):null,off:a?$s(a):null}}return r},[]);(0,pt.useEffect)(()=>{let r=e.current.getContext("2d"),s=!0,o=()=>by(r,t==null?void 0:t.Id,n,s);o();let a=setInterval(()=>{s=!s,o()},320);return()=>clearInterval(a)},[t,n]);let i=t?Co[t.Id]:null;return(0,Ue.jsx)("canvas",{ref:e,width:Fn,height:Ki,className:"stage-map",role:"img","aria-label":i?`World map: ${t.Name}'s stage in ${t.Country}`:"World map of the stages"})}function Hm({characters:t,height:e}){var O,Z;let n=(0,pt.useRef)(null),i=(0,pt.useRef)(null),[r,s]=(0,pt.useState)(0),[o,a]=(0,pt.useState)(!1),[l,c]=(0,pt.useState)(!1),[u,h]=(0,pt.useState)(!1),[f,m]=(0,pt.useState)(.6),v=(0,pt.useMemo)(()=>new Ou,[]),_=(0,pt.useRef)(null),y=(0,pt.useRef)(null),d=Zs(n,.01),p=t[r],g=p?gd(p.Id):null,S=()=>{clearTimeout(y.current),v.stop(),_.current&&_.current.pause(),h(!1)},b=U=>{v.stop(),_.current&&_.current.pause();let q=t[U],z=gd(q.Id);z?(_.current||(_.current=new Audio),_.current.src=z,_.current.loop=!0,_.current.volume=f,_.current.play().catch(()=>{})):(v.setVolume(f),v.play(q.Id)),h(!0)},A=(U,{immediate:q=!1}={})=>{s(U),!(!o||l)&&(clearTimeout(y.current),y.current=setTimeout(()=>b(U),q?0:220))},T=()=>{o||(a(!0),l||b(r))},R=()=>{l?(c(!1),a(!0),b(r)):(c(!0),S())};(0,pt.useEffect)(()=>{v.setVolume(f),_.current&&(_.current.volume=f)},[f,v]),(0,pt.useEffect)(()=>{let U=setInterval(()=>{!d.current&&u&&S()},400);return()=>clearInterval(U)}),(0,pt.useEffect)(()=>()=>S(),[]),(0,pt.useEffect)(()=>{let U=i.current,q=U.getContext("2d"),z,se=16,ee=new Array(se).fill(0),ue=Fe=>{if(z=requestAnimationFrame(ue),!d.current)return;let Oe=!g&&u?v.levels(se):null;for(let J=0;J<se;J++){let pe=u?Oe?Oe[J]:.35+.45*Math.abs(Math.sin(Fe*.004*(1+J*.13)+J)):.04;ee[J]+=(pe-ee[J])*.3}q.clearRect(0,0,U.width,U.height);let X=U.width/se;for(let J=0;J<se;J++){let pe=Math.round(ee[J]*8);for(let ae=0;ae<pe;ae++)q.fillStyle=ae>5?"#ff4a4a":ae>3?"#ffd23f":"#3fe07a",q.fillRect(J*X+1,U.height-(ae+1)*5,X-2,4)}};return z=requestAnimationFrame(ue),()=>cancelAnimationFrame(z)},[u,g,v]);let H=U=>{let q=t.length,z=r;if(U.key==="ArrowRight")z=(r+1)%q;else if(U.key==="ArrowLeft")z=(r-1+q)%q;else if(U.key==="ArrowDown")z=Math.min(q-1,r+Vm);else if(U.key==="ArrowUp")z=Math.max(0,r-Vm);else if(U.key==="Enter"||U.key===" "){U.preventDefault(),T();return}else return;U.preventDefault(),T(),A(z)},x=p?In(`img/select/${p.Id}.png`):null,w=p?Co[p.Id]:null,k=w?In(`img/flags/${w.country}.png`):null,D=In("img/select-bg.png");return(0,Ue.jsxs)("section",{className:"soundtrack",ref:n,onPointerDown:T,style:{height:e,...D&&{backgroundImage:`linear-gradient(rgba(4,6,20,0.55), rgba(4,6,20,0.8)), url(${D})`,backgroundSize:"auto, 512px auto"}},"aria-label":"Soundtracks",children:[(0,Ue.jsx)("div",{className:"crt","aria-hidden":"true"}),(0,Ue.jsxs)("header",{className:"ost-head",children:[(0,Ue.jsx)("p",{className:"pixel eyebrow-pixel",children:"Sound test"}),(0,Ue.jsx)("h2",{className:"pixel ost-title",children:"Player select"})]}),(0,Ue.jsxs)("div",{className:"ost-stage",children:[(0,Ue.jsxs)("div",{className:`player p1 ${x?"has-portrait":""}`,children:[(0,Ue.jsx)("div",{className:"player-tag pixel",children:"1P"}),x?(0,Ue.jsx)("img",{className:"select-portrait",src:x,alt:""}):(0,Ue.jsx)("div",{className:"nameplate pixel",children:(O=p==null?void 0:p.Name)==null?void 0:O.toUpperCase()}),(0,Ue.jsx)(Q5,{character:p,playing:u}),k?(0,Ue.jsx)("img",{className:"flag",src:k,alt:p==null?void 0:p.Country}):(0,Ue.jsx)("div",{className:"pixel small-pixel",children:(Z=p==null?void 0:p.Country)==null?void 0:Z.toUpperCase()}),(0,Ue.jsx)("span",{className:"sr-only",children:p==null?void 0:p.Name})]}),(0,Ue.jsxs)("div",{className:"map-col",children:[(0,Ue.jsx)(eT,{character:p}),(0,Ue.jsxs)("div",{className:"now-playing",children:[(0,Ue.jsxs)("div",{className:"np-text",children:[(0,Ue.jsx)("p",{className:"pixel small-pixel dimmed",children:u?"Now playing":o&&!l?"Paused":"Sound test"}),(0,Ue.jsx)("p",{className:"pixel track",children:u||o?p==null?void 0:p.Theme:"Click a fighter to start the music"})]}),(0,Ue.jsx)("canvas",{ref:i,width:"160",height:"40",className:"eq","aria-hidden":"true"}),(0,Ue.jsxs)("div",{className:"transport",children:[(0,Ue.jsx)("button",{className:"pixel-btn",onClick:R,"aria-label":l?"Unmute":"Mute","aria-pressed":l,children:l?"\u266A\u0338":"\u266A"}),(0,Ue.jsxs)("label",{className:"vol pixel small-pixel",children:["VOL",(0,Ue.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:f,onChange:U=>m(Number(U.target.value))})]})]})]}),(0,Ue.jsx)("p",{className:"ost-note",children:g?"Hover or use the arrow keys to switch fighters; their theme follows.":`Hover or use the arrow keys to switch fighters. Placeholder chiptune: add assets/audio/${p==null?void 0:p.Id}.mp3 for the real theme.`})]}),(0,Ue.jsxs)("div",{className:"player p2","aria-hidden":"true",children:[(0,Ue.jsx)("div",{className:"player-tag pixel p2-tag",children:"2P"}),(0,Ue.jsx)("div",{className:"empty-slot"}),(0,Ue.jsx)("div",{className:"nameplate pixel blink",children:"PRESS START"})]})]}),(0,Ue.jsx)("div",{className:"select-grid",role:"listbox","aria-label":"Fighters",tabIndex:0,"aria-activedescendant":`ost-${p==null?void 0:p.Id}`,onKeyDown:H,style:{"--cols":Vm},children:t.map((U,q)=>(0,Ue.jsxs)("button",{id:`ost-${U.Id}`,role:"option","aria-selected":r===q,className:`tile ${r===q?"cursor":""}`,onMouseEnter:()=>A(q),onFocus:()=>A(q),onClick:()=>{o||T(),A(q,{immediate:!0})},title:U.Name,children:[(0,Ue.jsx)(j5,{character:U}),r===q&&(0,Ue.jsx)("span",{className:"cursor-tag pixel",children:"1P"}),(0,Ue.jsx)("span",{className:"sr-only",children:U.Name})]},U.Id))})]})}var xn=vt(Zn(),1),ne=vt(tn(),1),Ti="Street Fighter",Za="#e2403f",Gm="#7d86a3",Ry="rgba(236,230,214,0.10)";var ds=t=>typeof t=="number"?t:parseFloat(String(t).replace(/,/g,"")),di=t=>{let[e,n="6",i="15"]=String(t||"").split("-");return new Date(Number(e),Number(n)-1,Number(i))},Ji=t=>`${t>=10?Math.round(t):t.toFixed(1)}M`,$a=t=>t>=1e3?`$${(t/1e3).toFixed(1)}B`:`$${t>=10?Math.round(t):t.toFixed(1)}M`;function tT(t){let[e,n]=(0,xn.useState)(800);return(0,xn.useEffect)(()=>{let i=new ResizeObserver(([r])=>n(Math.round(r.contentRect.width)));return i.observe(t.current),()=>i.disconnect()},[t]),e}function Py(t){let e=Math.pow(10,Math.floor(Math.log10(t))),n=t/e;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*e}function Iy({tip:t}){return t?(0,ne.jsxs)("div",{className:"tip",style:{left:t.x,top:t.y},role:"status",children:[(0,ne.jsx)("strong",{children:t.title}),(0,ne.jsx)("span",{children:t.value}),t.source&&(0,ne.jsx)("em",{children:t.source})]}):null}function nT({rows:t,width:e}){let[n,i]=(0,xn.useState)(null),r=(0,xn.useMemo)(()=>{let p=new Map;return t.filter(g=>g.Category==="Series units (cumulative)").forEach(g=>{p.has(g.Franchise)||p.set(g.Franchise,[]),p.get(g.Franchise).push({d:di(g["As Of"]),v:ds(g.Value),r:g})}),[...p.entries()].map(([g,S])=>({name:g,pts:S.sort((b,A)=>b.d-A.d)})).filter(g=>g.pts.length>1&&g.pts.every((S,b)=>!b||S.v>=g.pts[b-1].v))},[t]);if(!r.length)return null;let s=380,o={t:20,r:150,b:34,l:44},a=e-o.l-o.r,l=s-o.t-o.b,c=r.flatMap(p=>p.pts),u=new Date(Math.min(...c.map(p=>p.d))),h=new Date(Math.max(...c.map(p=>p.d)));u.setMonth(0,1);let f=Py(Math.max(...c.map(p=>p.v))*1.05),m=p=>o.l+(p-u)/(h-u)*a,v=p=>o.t+l-p/f*l,_=[];for(let p=u.getFullYear();p<=h.getFullYear();p++)_.push(p);let y=Math.ceil(_.length/Math.max(2,Math.floor(a/70))),d=r.map(p=>({s:p,y:v(p.pts[p.pts.length-1].v)})).sort((p,g)=>p.y-g.y);for(let p=1;p<d.length;p++)d[p].y-d[p-1].y<18&&(d[p].y=d[p-1].y+18);return(0,ne.jsxs)("div",{className:"chart",children:[(0,ne.jsxs)("svg",{width:e,height:s,role:"img","aria-label":"Cumulative series units sold over time by franchise",children:[[0,.25,.5,.75,1].map(p=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("line",{x1:o.l,x2:o.l+a,y1:v(f*p),y2:v(f*p),stroke:Ry}),(0,ne.jsxs)("text",{x:o.l-8,y:v(f*p),dy:"0.32em",textAnchor:"end",className:"axis",children:[Math.round(f*p),"M"]})]},p)),_.filter((p,g)=>g%y===0).map(p=>(0,ne.jsx)("text",{x:m(new Date(p,0,1)),y:s-10,textAnchor:"middle",className:"axis",children:p},p)),[...r].sort(p=>p.name===Ti?1:-1).map(p=>{let g=p.name===Ti,S=p.pts.map((b,A)=>`${A?"L":"M"}${m(b.d)},${v(b.v)}`).join("");return(0,ne.jsxs)("g",{children:[(0,ne.jsx)("path",{d:S,fill:"none",stroke:g?Za:Gm,strokeWidth:g?3.5:2,opacity:g?1:.75}),p.pts.map((b,A)=>(0,ne.jsx)("circle",{cx:m(b.d),cy:v(b.v),r:g?4.5:3.2,fill:g?Za:Gm,stroke:"#0b1022",strokeWidth:"1.5",onMouseEnter:()=>i({x:m(b.d),y:v(b.v)-12,title:`${p.name} \xB7 ${b.r["As Of"]}`,value:`${Ji(b.v)} units sold (lifetime)`,source:b.r.Source}),onMouseLeave:()=>i(null)},A))]},p.name)}),d.map(({s:p,y:g})=>{let S=p.pts[p.pts.length-1],b=p.name===Ti;return(0,ne.jsxs)("text",{x:m(S.d)+10,y:g,dy:"0.32em",className:`direct ${b?"sf":""}`,children:[p.name," ",(0,ne.jsx)("tspan",{className:"val",children:Ji(S.v)})]},p.name)})]}),(0,ne.jsx)(Iy,{tip:n})]})}function Cy({items:t,width:e,fmt:n,label:i}){let[r,s]=(0,xn.useState)(null),o=30,a={t:6,r:70,b:6,l:Math.min(270,e*.42)},l=a.t+a.b+t.length*o,c=e-a.l-a.r,u=Math.max(...t.map(h=>h.v));return(0,ne.jsxs)("div",{className:"chart",children:[(0,ne.jsx)("svg",{width:e,height:l,role:"img","aria-label":i,children:t.map((h,f)=>{let m=h.franchise===Ti,v=a.t+f*o,_=Math.max(2,h.v/u*c);return(0,ne.jsxs)("g",{onMouseEnter:()=>s({x:a.l+_,y:v,title:h.label,value:n(h.v),source:`${h.source}${h.note?" \u2014 "+h.note:""}`}),onMouseLeave:()=>s(null),children:[(0,ne.jsx)("text",{x:a.l-10,y:v+o/2,dy:"0.32em",textAnchor:"end",className:`bar-label ${m?"sf":""}`,children:h.label}),(0,ne.jsx)("rect",{x:a.l,y:v+5,width:_,height:o-10,fill:m?Za:Gm,opacity:m?1:.6,rx:"1"}),(0,ne.jsx)("text",{x:a.l+_+6,y:v+o/2,dy:"0.32em",className:`bar-val ${m?"sf":""}`,children:n(h.v)})]},h.label)})}),(0,ne.jsx)(Iy,{tip:r})]})}function iT({rows:t,width:e}){let n=t.filter(m=>m.Title==="Street Fighter 6"&&m.Category==="Title units").map(m=>({d:di(m["As Of"]),v:ds(m.Value),r:m})).sort((m,v)=>m.d-v.d);if(n.length<2)return null;let i=200,r={t:16,r:50,b:28,l:40},s=e-r.l-r.r,o=i-r.t-r.b,a=new Date(2023,5,1),l=n[n.length-1].d,c=Py(n[n.length-1].v),u=m=>r.l+(m-a)/(l-a||1)*s,h=m=>r.t+o-m/c*o,f=`M${u(a)},${h(0)}`;return n.forEach(m=>{f+=`H${u(m.d)}V${h(m.v)}`}),(0,ne.jsxs)("svg",{width:e,height:i,role:"img","aria-label":"Street Fighter 6 cumulative sales milestones",children:[[0,.5,1].map(m=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("line",{x1:r.l,x2:r.l+s,y1:h(c*m),y2:h(c*m),stroke:Ry}),(0,ne.jsxs)("text",{x:r.l-6,y:h(c*m),dy:"0.32em",textAnchor:"end",className:"axis",children:[c*m,"M"]})]},m)),(0,ne.jsx)("path",{d:f,fill:"none",stroke:Za,strokeWidth:"3"}),n.map((m,v)=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("circle",{cx:u(m.d),cy:h(m.v),r:"4",fill:Za}),(v===0||v===n.length-1)&&(0,ne.jsxs)("text",{x:u(m.d)+(v?0:8),y:h(m.v)+(v?-10:-4),textAnchor:v?"end":"start",className:"bar-val sf",children:[Ji(m.v)," \xB7 ",m.r["As Of"]]})]},v)),[2023,2024,2025,2026].filter(m=>new Date(m,0,1)<=l).map(m=>(0,ne.jsx)("text",{x:u(new Date(Math.max(a,new Date(m,0,1)))),y:i-8,textAnchor:"middle",className:"axis",children:m},m))]})}function Wm({rows:t,loadedAt:e}){var d;let n=(0,xn.useRef)(null),i=tT(n),r=i>980?(i-48)/2:i,s=p=>{let g=t.filter(p).sort((S,b)=>di(b["As Of"])-di(S["As Of"]))[0];return g?{v:ds(g.Value),r:g}:null},o=(0,xn.useMemo)(()=>{let p=new Map;return t.filter(g=>g.Category==="Series units (cumulative)").forEach(g=>{let S=p.get(g.Franchise);(!S||di(g["As Of"])>di(S["As Of"]))&&p.set(g.Franchise,g)}),[...p.values()].map(g=>({franchise:g.Franchise,v:ds(g.Value),r:g})).sort((g,S)=>S.v-g.v)},[t]),a=o.findIndex(p=>p.franchise===Ti)+1,l=o.find(p=>p.franchise===Ti),c=t.filter(p=>p.Franchise===Ti&&p.Category==="Series units (cumulative)").sort((p,g)=>di(p["As Of"])-di(g["As Of"]))[0],u=(0,xn.useMemo)(()=>{let p=new Map;return t.filter(g=>g.Category==="Title units").forEach(g=>{let S=p.get(g.Title);(!S||di(g["As Of"])>di(S["As Of"]))&&p.set(g.Title,g)}),[...p.values()].map(g=>({label:g.Title,franchise:g.Franchise,v:ds(g.Value),source:g.Source,note:g.Note})).sort((g,S)=>S.v-g.v).slice(0,14)},[t]),h=(0,xn.useMemo)(()=>t.filter(p=>p.Category==="Box office").map(p=>({label:p.Title,franchise:p.Franchise,v:ds(p.Value),source:p.Source,note:p.Note})).sort((p,g)=>g.v-p.v),[t]),f=h.filter(p=>p.franchise===Ti).reduce((p,g)=>p+g.v,0),m=s(p=>p.Title==="Street Fighter 6"&&p.Category==="Title units"),v=s(p=>p.Franchise===Ti&&p.Category==="Arcade revenue"&&/all versions/i.test(p.Title)),_=(0,xn.useMemo)(()=>{let p=new Map;return t.forEach(g=>{g.Source&&!p.has(g.Source)&&p.set(g.Source,g["Source URL"])}),[...p.entries()]},[t]),y=t.filter(p=>/secondary|estimate|derived/i.test(`${p.Note} ${p.Source}`)).length;return t.length?(0,ne.jsxs)("section",{className:"franchise",ref:n,"aria-label":"The franchise in numbers",children:[(0,ne.jsxs)("header",{className:"section-head static",children:[(0,ne.jsx)("p",{className:"eyebrow",children:"The franchise in numbers"}),(0,ne.jsx)("h2",{className:"brush-title",children:l?`${Ji(l.v)} games sold \u2014 and still climbing`:"Street Fighter by the numbers"}),(0,ne.jsx)("p",{className:"lede",children:l&&`Street Fighter ranks #${a} among fighting-game franchises in lifetime units, behind ${o.slice(0,a-1).map(p=>p.franchise).join(", ")}. ${c?`Since ${di(c["As Of"]).getFullYear()} it has added ${Ji(l.v-ds(c.Value))} units, `:""}driven by Street Fighter 6. Its real outlier is the arcade: Street Fighter II's estimated lifetime gross dwarfs anything in this genre.`})]}),(0,ne.jsxs)("div",{className:"kpis",children:[l&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsx)("span",{className:"kpi-v",children:Ji(l.v)}),(0,ne.jsx)("span",{className:"kpi-l",children:"series units sold"}),(0,ne.jsxs)("span",{className:"kpi-s",children:["as of ",l.r["As Of"]]})]}),m&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsx)("span",{className:"kpi-v",children:Ji(m.v)}),(0,ne.jsx)("span",{className:"kpi-l",children:"Street Fighter 6"}),(0,ne.jsxs)("span",{className:"kpi-s",children:["as of ",m.r["As Of"]]})]}),f>0&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsx)("span",{className:"kpi-v",children:$a(f)}),(0,ne.jsx)("span",{className:"kpi-l",children:"worldwide box office, all SF films"}),(0,ne.jsx)("span",{className:"kpi-s",children:"unadjusted USD"})]}),v&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsxs)("span",{className:"kpi-v",children:["~",$a(v.v)]}),(0,ne.jsx)("span",{className:"kpi-l",children:"Street Fighter II lifetime gross"}),(0,ne.jsx)("span",{className:"kpi-s",children:"estimate, 2016 dollars"})]})]}),(0,ne.jsxs)("div",{className:"panel wide",children:[(0,ne.jsx)("h3",{children:"Street Fighter climbs steadily but trails Mortal Kombat, Smash and Tekken in lifetime units"}),(0,ne.jsx)("p",{className:"sub",children:"Cumulative franchise units sold, millions, by reporting date. Hover a point for its source. Series with conflicting totals (e.g. Soulcalibur) are omitted."}),(0,ne.jsx)(nT,{rows:t,width:i})]}),(0,ne.jsxs)("div",{className:"grid2",children:[(0,ne.jsxs)("div",{className:"panel",children:[(0,ne.jsx)("h3",{children:"Smash Ultimate outsells every other fighting game; Street Fighter V and 6 lead Capcom's modern era"}),(0,ne.jsx)("p",{className:"sub",children:"Lifetime units of individual titles, latest figure, millions"}),(0,ne.jsx)(Cy,{items:u,width:r,fmt:Ji,label:"Best-selling individual fighting games"})]}),(0,ne.jsxs)("div",{className:"panel",children:[(0,ne.jsxs)("h3",{children:["Mortal Kombat rules the box office; Street Fighter's films total ",$a(f),", led by"," ",((d=h.find(p=>p.franchise===Ti))==null?void 0:d.label)||"its 1994 film"]}),(0,ne.jsx)("p",{className:"sub",children:"Worldwide box office, millions of USD, not adjusted for inflation"}),(0,ne.jsx)(Cy,{items:h,width:r,fmt:$a,label:"Fighting-game film box office"})]})]}),(0,ne.jsxs)("div",{className:"grid2",children:[(0,ne.jsxs)("div",{className:"panel",children:[(0,ne.jsxs)("h3",{children:["Street Fighter 6 passed ",m?Ji(m.v):"its latest milestone"," in about three years"]}),(0,ne.jsx)("p",{className:"sub",children:"Cumulative units at each announced milestone"}),(0,ne.jsx)(iT,{rows:t,width:r})]}),(0,ne.jsxs)("div",{className:"panel callout",children:[(0,ne.jsx)("h3",{children:"Why the arcade number matters"}),(0,ne.jsxs)("p",{children:["In the early 1990s, Street Fighter II sold arcade cabinets and kits, and every coin-op round was a sale. Estimates of its lifetime gross run around ",v?$a(v.v):"$10B"," (inflation-adjusted, counting arcade and home versions), far more than any fighting game has made from units at retail. Treat it as an order of magnitude, not an audited figure."]})]})]}),(0,ne.jsxs)("footer",{className:"sources",children:[(0,ne.jsxs)("p",{children:[(0,ne.jsx)("strong",{children:"Sources & caveats."})," Queried live from the \u201CFranchise Metrics\u201D datasource",e?` at ${e.toLocaleString()}`:"",". Figures were compiled from publisher IR releases and press coverage;"," ",y," of ",t.length," rows rely on secondary reporting or estimates (see the Note column). Publishers count units differently (sell-in vs. sell-through, bundles, digital)."]}),(0,ne.jsx)("ul",{children:_.map(([p,g])=>(0,ne.jsxs)("li",{children:[p,g?(0,ne.jsxs)("span",{className:"url",children:[" \u2014 ",g]}):null]},p))})]})]}):(0,ne.jsx)("section",{className:"franchise",ref:n,children:(0,ne.jsx)("p",{className:"error",children:"No rows came back from the \u201CFranchise Metrics\u201D datasource."})})}var on=vt(tn(),1),Xm={intro:1e3,characters:1050,soundtrack:840};function qm(){let[t,e]=(0,Ka.useState)(null),[n,i]=(0,Ka.useState)(null);return(0,Ka.useEffect)(()=>{F2().then(e).catch(r=>i(r&&(r.message||r.errorCode)||String(r)))},[]),n?(0,on.jsx)("div",{className:"boot",children:(0,on.jsxs)("p",{className:"error",children:["Live query unavailable: ",n]})}):t?(0,on.jsxs)("main",{children:[t.missing.length>0&&(0,on.jsxs)("p",{className:"error banner",children:["Missing datasource(s): ",t.missing.join(", "),". Found: ",t.sourceNames.join(", ")||"none","."]}),t.story.length>0&&(0,on.jsx)(yd,{chapters:t.story,height:Xm.intro}),t.characters.length>0&&(0,on.jsx)(Um,{characters:t.characters,height:Xm.characters}),t.characters.length>0&&(0,on.jsx)(Hm,{characters:t.characters,height:Xm.soundtrack}),(0,on.jsx)(Wm,{rows:t.metrics,loadedAt:t.loadedAt}),(0,on.jsx)("footer",{className:"credits",children:(0,on.jsxs)("p",{children:["A non-commercial fan visualization. Street Fighter and all characters, names and artwork are \xA9 Capcom. Character sprites from ",(0,on.jsx)("em",{children:"Super Street Fighter II"})," were ripped by Lord Zymeth (finaldestinationpixelation.com) and shared on The Spriters Resource. Select-screen portraits ripped by Phatman; select-screen artwork (named portraits, flags and background) captured by GaryCXJK. World map outlines from Natural Earth (public domain). Story text, charts and placeholder art by the author."]})})]}):(0,on.jsx)("div",{className:"boot",children:(0,on.jsx)("p",{className:"loading",children:"Loading the Way of the Hado\u2026"})})}var Dy=vt(tn(),1);function Ny(t){let e=document.getElementById("app");e.textContent="";let n=document.createElement("p");n.className="error",n.textContent=`Live query unavailable: ${t}`,e.appendChild(n)}window.addEventListener("error",t=>{document.querySelector("main")||Ny(t.message)});try{(0,Ly.createRoot)(document.getElementById("app")).render((0,Dy.jsx)(qm,{}))}catch(t){Ny(t.message||String(t))}})();
