(()=>{var Mx=Object.create;var Gm=Object.defineProperty;var wx=Object.getOwnPropertyDescriptor;var Ex=Object.getOwnPropertyNames;var Tx=Object.getPrototypeOf,Ax=Object.prototype.hasOwnProperty;var Ai=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var bx=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ex(e))!Ax.call(t,r)&&r!==n&&Gm(t,r,{get:()=>e[r],enumerable:!(i=wx(e,r))||i.enumerable});return t};var gt=(t,e,n)=>(n=t!=null?Mx(Tx(t)):{},bx(e||!t||!t.__esModule?Gm(n,"default",{value:t,enumerable:!0}):n,t));var tg=Ai(Ue=>{"use strict";var To=Symbol.for("react.element"),Cx=Symbol.for("react.portal"),Rx=Symbol.for("react.fragment"),Px=Symbol.for("react.strict_mode"),Ix=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Dx=Symbol.for("react.forward_ref"),Ux=Symbol.for("react.suspense"),Fx=Symbol.for("react.memo"),Ox=Symbol.for("react.lazy"),Wm=Symbol.iterator;function kx(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Zm={};function ds(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||Ym}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=ds.prototype;function zu(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||Ym}var Vu=zu.prototype=new Km;Vu.constructor=zu;$m(Vu,ds.prototype);Vu.isPureReactComponent=!0;var Xm=Array.isArray,Jm=Object.prototype.hasOwnProperty,Hu={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!jm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:To,type:t,key:s,ref:o,props:r,_owner:Hu.current}}function Bx(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gu(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qm=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zx(""+t.key):e.toString(36)}function Ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case Cx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bu(o,0):i,Xm(r)?(n="",t!=null&&(n=t.replace(qm,"$&/")+"/"),Ka(r,e,n,"",function(c){return c})):r!=null&&(Gu(r)&&(r=Bx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(qm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Xm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bu(s,a);o+=Ka(s,e,n,l,r)}else if(l=kx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bu(s,a++),o+=Ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Ja={transition:null},Hx={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:Hu};function eg(){throw Error("act(...) is not supported in production builds of React.")}Ue.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!Gu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ue.Component=ds;Ue.Fragment=Rx;Ue.Profiler=Ix;Ue.PureComponent=zu;Ue.StrictMode=Px;Ue.Suspense=Ux;Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;Ue.act=eg;Ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$m({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!jm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:To,type:t.type,key:r,ref:s,props:i,_owner:o}};Ue.createContext=function(t){return t={$$typeof:Nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lx,_context:t},t.Consumer=t};Ue.createElement=Qm;Ue.createFactory=function(t){var e=Qm.bind(null,t);return e.type=t,e};Ue.createRef=function(){return{current:null}};Ue.forwardRef=function(t){return{$$typeof:Dx,render:t}};Ue.isValidElement=Gu;Ue.lazy=function(t){return{$$typeof:Ox,_payload:{_status:-1,_result:t},_init:Vx}};Ue.memo=function(t,e){return{$$typeof:Fx,type:t,compare:e===void 0?null:e}};Ue.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};Ue.unstable_act=eg;Ue.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ue.useContext=function(t){return Jt.current.useContext(t)};Ue.useDebugValue=function(){};Ue.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ue.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ue.useId=function(){return Jt.current.useId()};Ue.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ue.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ue.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ue.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ue.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ue.useRef=function(t){return Jt.current.useRef(t)};Ue.useState=function(t){return Jt.current.useState(t)};Ue.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ue.useTransition=function(){return Jt.current.useTransition()};Ue.version="18.3.1"});var Yn=Ai((C2,ng)=>{"use strict";ng.exports=tg()});var fg=Ai(at=>{"use strict";function Yu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<ja(r,e))t[i]=e,t[n]=r,n=i;else break e}}function $n(t){return t.length===0?null:t[0]}function el(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>ja(a,n))l<r&&0>ja(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>ja(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function ja(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(ig=performance,at.unstable_now=function(){return ig.now()}):(Wu=Date,rg=Wu.now(),at.unstable_now=function(){return Wu.now()-rg});var ig,Wu,rg,fi=[],Ji=[],Gx=1,Un=null,Gt=3,tl=!1,Dr=!1,bo=!1,ag=typeof setTimeout=="function"?setTimeout:null,lg=typeof clearTimeout=="function"?clearTimeout:null,sg=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $u(t){for(var e=$n(Ji);e!==null;){if(e.callback===null)el(Ji);else if(e.startTime<=t)el(Ji),e.sortIndex=e.expirationTime,Yu(fi,e);else break;e=$n(Ji)}}function Zu(t){if(bo=!1,$u(t),!Dr)if($n(fi)!==null)Dr=!0,Ju(Ku);else{var e=$n(Ji);e!==null&&ju(Zu,e.startTime-t)}}function Ku(t,e){Dr=!1,bo&&(bo=!1,lg(Co),Co=-1),tl=!0;var n=Gt;try{for($u(e),Un=$n(fi);Un!==null&&(!(Un.expirationTime>e)||t&&!hg());){var i=Un.callback;if(typeof i=="function"){Un.callback=null,Gt=Un.priorityLevel;var r=i(Un.expirationTime<=e);e=at.unstable_now(),typeof r=="function"?Un.callback=r:Un===$n(fi)&&el(fi),$u(e)}else el(fi);Un=$n(fi)}if(Un!==null)var s=!0;else{var o=$n(Ji);o!==null&&ju(Zu,o.startTime-e),s=!1}return s}finally{Un=null,Gt=n,tl=!1}}var nl=!1,Qa=null,Co=-1,cg=5,ug=-1;function hg(){return!(at.unstable_now()-ug<cg)}function Xu(){if(Qa!==null){var t=at.unstable_now();ug=t;var e=!0;try{e=Qa(!0,t)}finally{e?Ao():(nl=!1,Qa=null)}}else nl=!1}var Ao;typeof sg=="function"?Ao=function(){sg(Xu)}:typeof MessageChannel!="undefined"?(qu=new MessageChannel,og=qu.port2,qu.port1.onmessage=Xu,Ao=function(){og.postMessage(null)}):Ao=function(){ag(Xu,0)};var qu,og;function Ju(t){Qa=t,nl||(nl=!0,Ao())}function ju(t,e){Co=ag(function(){t(at.unstable_now())},e)}at.unstable_IdlePriority=5;at.unstable_ImmediatePriority=1;at.unstable_LowPriority=4;at.unstable_NormalPriority=3;at.unstable_Profiling=null;at.unstable_UserBlockingPriority=2;at.unstable_cancelCallback=function(t){t.callback=null};at.unstable_continueExecution=function(){Dr||tl||(Dr=!0,Ju(Ku))};at.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):cg=0<t?Math.floor(1e3/t):5};at.unstable_getCurrentPriorityLevel=function(){return Gt};at.unstable_getFirstCallbackNode=function(){return $n(fi)};at.unstable_next=function(t){switch(Gt){case 1:case 2:case 3:var e=3;break;default:e=Gt}var n=Gt;Gt=e;try{return t()}finally{Gt=n}};at.unstable_pauseExecution=function(){};at.unstable_requestPaint=function(){};at.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Gt;Gt=t;try{return e()}finally{Gt=n}};at.unstable_scheduleCallback=function(t,e,n){var i=at.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:Gx++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Yu(Ji,t),$n(fi)===null&&t===$n(Ji)&&(bo?(lg(Co),Co=-1):bo=!0,ju(Zu,n-i))):(t.sortIndex=r,Yu(fi,t),Dr||tl||(Dr=!0,Ju(Ku))),t};at.unstable_shouldYield=hg;at.unstable_wrapCallback=function(t){var e=Gt;return function(){var n=Gt;Gt=e;try{return t.apply(this,arguments)}finally{Gt=n}}}});var pg=Ai((P2,dg)=>{"use strict";dg.exports=fg()});var yy=Ai(Cn=>{"use strict";var Wx=Yn(),An=pg();function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S0=new Set,Ko={};function Yr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Ko[t]=e,t=0;t<e.length;t++)S0.add(e[t])}var Li=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Sh=Object.prototype.hasOwnProperty,Xx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mg={},gg={};function qx(t){return Sh.call(gg,t)?!0:Sh.call(mg,t)?!1:Xx.test(t)?gg[t]=!0:(mg[t]=!0,!1)}function Yx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $x(t,e,n,i){if(e===null||typeof e=="undefined"||Yx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Ht[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($x(e,n,r,i)&&(n=null),i||r===null?qx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),Mh=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var E0=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var vg=Symbol.iterator;function Ro(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Qu;function Oo(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var eh=!1;function th(t,e){if(!t||eh)return"";eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function Zx(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=th(t.type,!1),t;case 11:return t=th(t.type.render,!1),t;case 1:return t=th(t.type,!0),t;default:return""}}function Th(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case Mh:return"Profiler";case vf:return"StrictMode";case wh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w0:return(t.displayName||"Context")+".Consumer";case M0:return(t._context.displayName||"Context")+".Provider";case yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:Th(t.type)||"Memo";case Qi:e=t._payload,t=t._init;try{return Th(t(e))}catch{}}return null}function Kx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Th(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jx(t){var e=T0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=Jx(t))}function A0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=T0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b0(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function bh(t,e){b0(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _g(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ko(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function C0(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function R0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?R0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,P0=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jx=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function I0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function L0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=I0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Qx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if(Qx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,Rs=null,Ps=null;function Mg(t){if(t=ma(t)){if(typeof Dh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=oc(e),Dh(t.stateNode,t.type,e))}}function N0(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function D0(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function U0(t,e){return t(e)}function F0(){}var nh=!1;function O0(t,e,n){if(nh)return t(e,n);nh=!0;try{return U0(t,e,n)}finally{nh=!1,(Rs!==null||Ps!==null)&&(F0(),D0())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Uh=!1;if(Li)try{ps={},Object.defineProperty(ps,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Uh=!1}var ps;function e1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ho=!1,Nl=null,Dl=!1,Fh=null,t1={onError:function(t){Ho=!0,Nl=t}};function n1(t,e,n,i,r,s,o,a,l){Ho=!1,Nl=null,e1.apply(t1,arguments)}function i1(t,e,n,i,r,s,o,a,l){if(n1.apply(this,arguments),Ho){if(Ho){var c=Nl;Ho=!1,Nl=null}else throw Error(j(198));Dl||(Dl=!0,Fh=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function k0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wg(t){if($r(t)!==t)throw Error(j(188))}function r1(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wg(r),t;if(s===i)return wg(r),e;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function B0(t){return t=r1(t),t!==null?z0(t):null}function z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z0(t);if(e!==null)return e;t=t.sibling}return null}var V0=An.unstable_scheduleCallback,Eg=An.unstable_cancelCallback,s1=An.unstable_shouldYield,o1=An.unstable_requestPaint,Et=An.unstable_now,a1=An.unstable_getCurrentPriorityLevel,Sf=An.unstable_ImmediatePriority,H0=An.unstable_UserBlockingPriority,Ul=An.unstable_NormalPriority,l1=An.unstable_LowPriority,G0=An.unstable_IdlePriority,nc=null,gi=null;function c1(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(nc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:f1,u1=Math.log,h1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(u1(t)/h1|0)|0}var ol=64,al=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function d1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=d1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W0(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function ih(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function m1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function X0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q0,wf,Y0,$0,Z0,kh=!1,ll=[],sr=null,or=null,ar=null,Qo=new Map,ea=new Map,tr=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tg(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ma(e),e!==null&&wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function v1(t,e,n,i,r){switch(e){case"focusin":return sr=Po(sr,t,e,n,i,r),!0;case"dragenter":return or=Po(or,t,e,n,i,r),!0;case"mouseover":return ar=Po(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qo.set(s,Po(Qo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,Po(ea.get(s)||null,t,e,n,i,r)),!0}return!1}function K0(t){var e=Or(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=k0(n),e!==null){t.blockedOn=e,Z0(t.priority,function(){Y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nh=i,n.target.dispatchEvent(i),Nh=null}else return e=ma(n),e!==null&&wf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ag(t,e,n){Ml(t)&&n.delete(e)}function y1(){kh=!1,sr!==null&&Ml(sr)&&(sr=null),or!==null&&Ml(or)&&(or=null),ar!==null&&Ml(ar)&&(ar=null),Qo.forEach(Ag),ea.forEach(Ag)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,y1)))}function ta(t){function e(r){return Io(r,t)}if(0<ll.length){Io(ll[0],t);for(var n=1;n<ll.length;n++){var i=ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&Io(sr,t),or!==null&&Io(or,t),ar!==null&&Io(ar,t),Qo.forEach(e),ea.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)K0(n),n.blockedOn===null&&tr.shift()}var Is=Fi.ReactCurrentBatchConfig,Ol=!0;function _1(t,e,n,i){var r=tt,s=Is.transition;Is.transition=null;try{tt=1,Ef(t,e,n,i)}finally{tt=r,Is.transition=s}}function x1(t,e,n,i){var r=tt,s=Is.transition;Is.transition=null;try{tt=4,Ef(t,e,n,i)}finally{tt=r,Is.transition=s}}function Ef(t,e,n,i){if(Ol){var r=Bh(t,e,n,i);if(r===null)uh(t,e,i,kl,n),Tg(t,i);else if(v1(r,t,e,n,i))i.stopPropagation();else if(Tg(t,i),e&4&&-1<g1.indexOf(t)){for(;r!==null;){var s=ma(r);if(s!==null&&q0(s),s=Bh(t,e,n,i),s===null&&uh(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uh(t,e,i,null,n)}}var kl=null;function Bh(t,e,n,i){if(kl=null,t=xf(i),t=Or(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=k0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function J0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a1()){case Sf:return 1;case H0:return 4;case Ul:case l1:return 16;case G0:return 536870912;default:return 16}default:return 16}}var ir=null,Tf=null,wl=null;function j0(){if(wl)return wl;var t,e=Tf,n=e.length,i,r="value"in ir?ir.value:ir.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return wl=r.slice(t,1<i?1-i:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function bg(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:bg,this.isPropagationStopped=bg,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=bn(Vs),pa=_t({},Vs,{view:0,detail:0}),S1=bn(pa),rh,sh,Lo,ic=_t({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(rh=t.screenX-Lo.screenX,sh=t.screenY-Lo.screenY):sh=rh=0,Lo=t),rh)},movementY:function(t){return"movementY"in t?t.movementY:sh}}),Cg=bn(ic),M1=_t({},ic,{dataTransfer:0}),w1=bn(M1),E1=_t({},pa,{relatedTarget:0}),oh=bn(E1),T1=_t({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=bn(T1),b1=_t({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C1=bn(b1),R1=_t({},Vs,{data:0}),Rg=bn(R1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L1[t])?!!e[t]:!1}function bf(){return N1}var D1=_t({},pa,{key:function(t){if(t.key){var e=P1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U1=bn(D1),F1=_t({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=bn(F1),O1=_t({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),k1=bn(O1),B1=_t({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=bn(B1),V1=_t({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=bn(V1),G1=[9,13,27,32],Cf=Li&&"CompositionEvent"in window,Go=null;Li&&"documentMode"in document&&(Go=document.documentMode);var W1=Li&&"TextEvent"in window&&!Go,Q0=Li&&(!Cf||Go&&8<Go&&11>=Go),Ig=" ",Lg=!1;function ev(t,e){switch(t){case"keyup":return G1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function X1(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(Lg=!0,Ig);case"textInput":return t=e.data,t===Ig&&Lg?null:t;default:return null}}function q1(t,e){if(ys)return t==="compositionend"||!Cf&&ev(t,e)?(t=j0(),wl=Tf=ir=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Y1[t.type]:e==="textarea"}function nv(t,e,n,i){N0(i),e=Bl(e,"onChange"),0<e.length&&(n=new Af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,na=null;function $1(t){dv(t,0)}function rc(t){var e=Ss(t);if(A0(e))return t}function Z1(t,e){if(t==="change")return e}var iv=!1;Li&&(Li?(hl="oninput"in document,hl||(ah=document.createElement("div"),ah.setAttribute("oninput","return;"),hl=typeof ah.oninput=="function"),ul=hl):ul=!1,iv=ul&&(!document.documentMode||9<document.documentMode));var ul,hl,ah;function Dg(){Wo&&(Wo.detachEvent("onpropertychange",rv),na=Wo=null)}function rv(t){if(t.propertyName==="value"&&rc(na)){var e=[];nv(e,na,t,xf(t)),O0($1,e)}}function K1(t,e,n){t==="focusin"?(Dg(),Wo=e,na=n,Wo.attachEvent("onpropertychange",rv)):t==="focusout"&&Dg()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rc(na)}function j1(t,e){if(t==="click")return rc(e)}function Q1(t,e){if(t==="input"||t==="change")return rc(e)}function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:eS;function ia(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sh.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fg(t,e){var n=Ug(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ug(n)}}function sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ov(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tS(t){var e=ov(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sv(n.ownerDocument.documentElement,n)){if(i!==null&&Rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fg(n,s);var o=Fg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nS=Li&&"documentMode"in document&&11>=document.documentMode,_s=null,zh=null,Xo=null,Vh=!1;function Og(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||_s==null||_s!==Ll(i)||(i=_s,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xo&&ia(Xo,i)||(Xo=i,i=Bl(zh,"onSelect"),0<i.length&&(e=new Af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},lh={},av={};Li&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function sc(t){if(lh[t])return lh[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in av)return lh[t]=e[n];return t}var lv=sc("animationend"),cv=sc("animationiteration"),uv=sc("animationstart"),hv=sc("transitionend"),fv=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){fv.set(t,e),Yr(e,[t])}for(dl=0;dl<kg.length;dl++)pl=kg[dl],Bg=pl.toLowerCase(),zg=pl[0].toUpperCase()+pl.slice(1),mr(Bg,"on"+zg);var pl,Bg,zg,dl;mr(lv,"onAnimationEnd");mr(cv,"onAnimationIteration");mr(uv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(hv,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Vg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,i1(i,e,void 0,t),t.currentTarget=null}function dv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vg(r,a,c),s=l}}}if(Dl)throw t=Fh,Dl=!1,Fh=null,t}function ht(t,e){var n=e[qh];n===void 0&&(n=e[qh]=new Set);var i=t+"__bubble";n.has(i)||(pv(e,t,2,!1),n.add(i))}function ch(t,e,n){var i=0;e&&(i|=4),pv(n,t,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[ml]){t[ml]=!0,S0.forEach(function(n){n!=="selectionchange"&&(iS.has(n)||ch(n,!1,t),ch(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,ch("selectionchange",!1,e))}}function pv(t,e,n,i){switch(J0(e)){case 1:var r=_1;break;case 4:r=x1;break;default:r=Ef}n=r.bind(null,e,n,t),r=void 0,!Uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uh(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}O0(function(){var c=s,u=xf(n),f=[];e:{var d=fv.get(t);if(d!==void 0){var p=Af,y=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":p=U1;break;case"focusin":y="focus",p=oh;break;case"focusout":y="blur",p=oh;break;case"beforeblur":case"afterblur":p=oh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=k1;break;case lv:case cv:case uv:p=A1;break;case hv:p=z1;break;case"scroll":p=S1;break;case"wheel":p=H1;break;case"copy":case"cut":case"paste":p=C1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pg}var S=(e&4)!==0,v=!S&&t==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var m=c,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=jo(m,h),x!=null&&S.push(sa(m,x,g)))),v)break;m=m.return}0<S.length&&(d=new p(d,y,null,n,u),f.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Nh&&(y=n.relatedTarget||n.fromElement)&&(Or(y)||y[Ni]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Or(y):null,y!==null&&(v=$r(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(S=Cg,x="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(S=Pg,x="onPointerLeave",h="onPointerEnter",m="pointer"),v=p==null?d:Ss(p),g=y==null?d:Ss(y),d=new S(x,m+"leave",p,n,u),d.target=v,d.relatedTarget=g,x=null,Or(u)===c&&(S=new S(h,m+"enter",y,n,u),S.target=g,S.relatedTarget=v,x=S),v=x,p&&y)t:{for(S=p,h=y,m=0,g=S;g;g=ms(g))m++;for(g=0,x=h;x;x=ms(x))g++;for(;0<m-g;)S=ms(S),m--;for(;0<g-m;)h=ms(h),g--;for(;m--;){if(S===h||h!==null&&S===h.alternate)break t;S=ms(S),h=ms(h)}S=null}else S=null;p!==null&&Hg(f,d,p,S,!1),y!==null&&v!==null&&Hg(f,v,y,S,!0)}}e:{if(d=c?Ss(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=Z1;else if(Ng(d))if(iv)b=Q1;else{b=J1;var T=K1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=j1);if(b&&(b=b(t,c))){nv(f,b,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Ch(d,"number",d.value)}switch(T=c?Ss(c):window,t){case"focusin":(Ng(T)||T.contentEditable==="true")&&(_s=T,zh=c,Xo=null);break;case"focusout":Xo=zh=_s=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,Og(f,n,u);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":Og(f,n,u)}var A;if(Cf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ys?ev(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Q0&&n.locale!=="ko"&&(ys||R!=="onCompositionStart"?R==="onCompositionEnd"&&ys&&(A=j0()):(ir=u,Tf="value"in ir?ir.value:ir.textContent,ys=!0)),T=Bl(c,R),0<T.length&&(R=new Rg(R,t,null,n,u),f.push({event:R,listeners:T}),A?R.data=A:(A=tv(n),A!==null&&(R.data=A)))),(A=W1?X1(t,n):q1(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(u=new Rg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}dv(f,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(t,n),s!=null&&i.unshift(sa(t,s,r)),s=jo(t,e),s!=null&&i.push(sa(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=jo(n,s),l!=null&&o.unshift(sa(n,l,a))):r||(l=jo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rS=/\r\n?/g,sS=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(rS,`
`).replace(sS,"")}function gl(t,e,n){if(e=Gg(e),Gg(t)!==e&&n)throw Error(j(425))}function zl(){}var Hh=null,Gh=null;function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg!="undefined"?function(t){return Wg.resolve(null).then(t).catch(lS)}:Xh;function lS(t){setTimeout(function(){throw t})}function hh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),mi="__reactFiber$"+Hs,oa="__reactProps$"+Hs,Ni="__reactContainer$"+Hs,qh="__reactEvents$"+Hs,cS="__reactListeners$"+Hs,uS="__reactHandles$"+Hs;function Or(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xg(t);t!==null;){if(n=t[mi])return n;t=Xg(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[mi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function oc(t){return t[oa]||null}var Yh=[],Ms=-1;function gr(t){return{current:t}}function ft(t){0>Ms||(t.current=Yh[Ms],Yh[Ms]=null,Ms--)}function lt(t,e){Ms++,Yh[Ms]=t.current,t.current=e}var pr={},Yt=gr(pr),un=gr(!1),Hr=pr;function Us(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Vl(){ft(un),ft(Yt)}function qg(t,e,n){if(Yt.current!==pr)throw Error(j(168));lt(Yt,e),lt(un,n)}function mv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(j(108,Kx(t)||"Unknown",r));return _t({},n,i)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Hr=Yt.current,lt(Yt,t),lt(un,un.current),!0}function Yg(t,e,n){var i=t.stateNode;if(!i)throw Error(j(169));n?(t=mv(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,ft(un),ft(Yt),lt(Yt,t)):ft(un),lt(un,n)}var Ci=null,ac=!1,fh=!1;function gv(t){Ci===null?Ci=[t]:Ci.push(t)}function hS(t){ac=!0,gv(t)}function vr(){if(!fh&&Ci!==null){fh=!0;var t=0,e=tt;try{var n=Ci;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,ac=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),V0(Sf,vr),r}finally{tt=e,fh=!1}}return null}var ws=[],Es=0,Gl=null,Wl=0,Fn=[],On=0,Gr=null,Ri=1,Pi="";function Ur(t,e){ws[Es++]=Wl,ws[Es++]=Gl,Gl=t,Wl=e}function vv(t,e,n){Fn[On++]=Ri,Fn[On++]=Pi,Fn[On++]=Gr,Gr=t;var i=Ri;t=Pi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-Qn(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function Pf(t){t.return!==null&&(Ur(t,1),vv(t,1,0))}function If(t){for(;t===Gl;)Gl=ws[--Es],ws[Es]=null,Wl=ws[--Es],ws[Es]=null;for(;t===Gr;)Gr=Fn[--On],Fn[On]=null,Pi=Fn[--On],Fn[On]=null,Ri=Fn[--On],Fn[On]=null}var Tn=null,En=null,pt=!1,jn=null;function yv(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $g(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function $h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(pt){var e=En;if(e){var n=e;if(!$g(t,e)){if($h(t))throw Error(j(418));e=lr(n.nextSibling);var i=Tn;e&&$g(t,e)?yv(i,n):(t.flags=t.flags&-4097|2,pt=!1,Tn=t)}}else{if($h(t))throw Error(j(418));t.flags=t.flags&-4097|2,pt=!1,Tn=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function vl(t){if(t!==Tn)return!1;if(!pt)return Zg(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wh(t.type,t.memoizedProps)),e&&(e=En)){if($h(t))throw _v(),Error(j(418));for(;e;)yv(t,e),e=lr(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?lr(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=En;t;)t=lr(t.nextSibling)}function Fs(){En=Tn=null,pt=!1}function Lf(t){jn===null?jn=[t]:jn.push(t)}var fS=Fi.ReactCurrentBatchConfig;function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var i=n.stateNode}if(!i)throw Error(j(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kg(t){var e=t._init;return e(t._payload)}function xv(t){function e(h,m){if(t){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=fr(h,m),h.index=0,h.sibling=null,h}function s(h,m,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,g,x){return m===null||m.tag!==6?(m=_h(g,h.mode,x),m.return=h,m):(m=r(m,g),m.return=h,m)}function l(h,m,g,x){var b=g.type;return b===vs?u(h,m,g.props.children,x,g.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Qi&&Kg(b)===m.type)?(x=r(m,g.props),x.ref=No(h,m,g),x.return=h,x):(x=Il(g.type,g.key,g.props,null,h.mode,x),x.ref=No(h,m,g),x.return=h,x)}function c(h,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=xh(g,h.mode,x),m.return=h,m):(m=r(m,g.children||[]),m.return=h,m)}function u(h,m,g,x,b){return m===null||m.tag!==7?(m=Vr(g,h.mode,x,b),m.return=h,m):(m=r(m,g),m.return=h,m)}function f(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_h(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case il:return g=Il(m.type,m.key,m.props,null,h.mode,g),g.ref=No(h,null,m),g.return=h,g;case gs:return m=xh(m,h.mode,g),m.return=h,m;case Qi:var x=m._init;return f(h,x(m._payload),g)}if(ko(m)||Ro(m))return m=Vr(m,h.mode,g,null),m.return=h,m;yl(h,m)}return null}function d(h,m,g,x){var b=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case il:return g.key===b?l(h,m,g,x):null;case gs:return g.key===b?c(h,m,g,x):null;case Qi:return b=g._init,d(h,m,b(g._payload),x)}if(ko(g)||Ro(g))return b!==null?null:u(h,m,g,x,null);yl(h,g)}return null}function p(h,m,g,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(m,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case il:return h=h.get(x.key===null?g:x.key)||null,l(m,h,x,b);case gs:return h=h.get(x.key===null?g:x.key)||null,c(m,h,x,b);case Qi:var T=x._init;return p(h,m,g,T(x._payload),b)}if(ko(x)||Ro(x))return h=h.get(g)||null,u(m,h,x,b,null);yl(m,x)}return null}function y(h,m,g,x){for(var b=null,T=null,A=m,R=m=0,F=null;A!==null&&R<g.length;R++){A.index>R?(F=A,A=null):F=A.sibling;var _=d(h,A,g[R],x);if(_===null){A===null&&(A=F);break}t&&A&&_.alternate===null&&e(h,A),m=s(_,m,R),T===null?b=_:T.sibling=_,T=_,A=F}if(R===g.length)return n(h,A),pt&&Ur(h,R),b;if(A===null){for(;R<g.length;R++)A=f(h,g[R],x),A!==null&&(m=s(A,m,R),T===null?b=A:T.sibling=A,T=A);return pt&&Ur(h,R),b}for(A=i(h,A);R<g.length;R++)F=p(A,h,R,g[R],x),F!==null&&(t&&F.alternate!==null&&A.delete(F.key===null?R:F.key),m=s(F,m,R),T===null?b=F:T.sibling=F,T=F);return t&&A.forEach(function(w){return e(h,w)}),pt&&Ur(h,R),b}function S(h,m,g,x){var b=Ro(g);if(typeof b!="function")throw Error(j(150));if(g=b.call(g),g==null)throw Error(j(151));for(var T=b=null,A=m,R=m=0,F=null,_=g.next();A!==null&&!_.done;R++,_=g.next()){A.index>R?(F=A,A=null):F=A.sibling;var w=d(h,A,_.value,x);if(w===null){A===null&&(A=F);break}t&&A&&w.alternate===null&&e(h,A),m=s(w,m,R),T===null?b=w:T.sibling=w,T=w,A=F}if(_.done)return n(h,A),pt&&Ur(h,R),b;if(A===null){for(;!_.done;R++,_=g.next())_=f(h,_.value,x),_!==null&&(m=s(_,m,R),T===null?b=_:T.sibling=_,T=_);return pt&&Ur(h,R),b}for(A=i(h,A);!_.done;R++,_=g.next())_=p(A,h,R,_.value,x),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?R:_.key),m=s(_,m,R),T===null?b=_:T.sibling=_,T=_);return t&&A.forEach(function(O){return e(h,O)}),pt&&Ur(h,R),b}function v(h,m,g,x){if(typeof g=="object"&&g!==null&&g.type===vs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case il:e:{for(var b=g.key,T=m;T!==null;){if(T.key===b){if(b=g.type,b===vs){if(T.tag===7){n(h,T.sibling),m=r(T,g.props.children),m.return=h,h=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Qi&&Kg(b)===T.type){n(h,T.sibling),m=r(T,g.props),m.ref=No(h,T,g),m.return=h,h=m;break e}n(h,T);break}else e(h,T);T=T.sibling}g.type===vs?(m=Vr(g.props.children,h.mode,x,g.key),m.return=h,h=m):(x=Il(g.type,g.key,g.props,null,h.mode,x),x.ref=No(h,m,g),x.return=h,h=x)}return o(h);case gs:e:{for(T=g.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(h,m.sibling),m=r(m,g.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=xh(g,h.mode,x),m.return=h,h=m}return o(h);case Qi:return T=g._init,v(h,m,T(g._payload),x)}if(ko(g))return y(h,m,g,x);if(Ro(g))return S(h,m,g,x);yl(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,g),m.return=h,h=m):(n(h,m),m=_h(g,h.mode,x),m.return=h,h=m),o(h)):n(h,m)}return v}var Os=xv(!0),Sv=xv(!1),Xl=gr(null),ql=null,Ts=null,Nf=null;function Df(){Nf=Ts=ql=null}function Uf(t){var e=Xl.current;ft(Xl),t._currentValue=e}function Kh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){ql=t,Nf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Nf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(ql===null)throw Error(j(308));Ts=t,ql.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var kr=null;function Ff(t){kr===null?kr=[t]:kr.push(t)}function Mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}function Jg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,S=a;switch(d=e,p=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){f=y.call(p,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,d=typeof y=="function"?y.call(p,f,d):y,d==null)break e;f=_t({},f,d);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=f}}function jg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(j(191,r));r.call(i)}}}var ga={},vi=gr(ga),aa=gr(ga),la=gr(ga);function Br(t){if(t===ga)throw Error(j(174));return t}function kf(t,e){switch(lt(la,e),lt(aa,t),lt(vi,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}ft(vi),lt(vi,e)}function ks(){ft(vi),ft(aa),ft(la)}function Ev(t){Br(la.current);var e=Br(vi.current),n=Ph(e,t.type);e!==n&&(lt(aa,t),lt(vi,n))}function Bf(t){aa.current===t&&(ft(vi),ft(aa))}var vt=gr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dh=[];function zf(){for(var t=0;t<dh.length;t++)dh[t]._workInProgressVersionPrimary=null;dh.length=0}var Al=Fi.ReactCurrentDispatcher,ph=Fi.ReactCurrentBatchConfig,Wr=0,yt=null,Pt=null,Ut=null,Zl=!1,qo=!1,ca=0,dS=0;function Wt(){throw Error(j(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Hf(t,e,n,i,r,s){if(Wr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?vS:yS,t=n(i,r),qo){s=0;do{if(qo=!1,ca=0,25<=s)throw Error(j(301));s+=1,Ut=Pt=null,e.updateQueue=null,Al.current=_S,t=n(i,r)}while(qo)}if(Al.current=Kl,e=Pt!==null&&Pt.next!==null,Wr=0,Ut=Pt=yt=null,Zl=!1,e)throw Error(j(300));return t}function Gf(){var t=ca!==0;return ca=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Vn(){if(Pt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ut===null?yt.memoizedState:Ut.next;if(e!==null)Ut=e,Pt=t;else{if(t===null)throw Error(j(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ua(t,e){return typeof e=="function"?e(t):e}function mh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Tv(){}function Av(t,e){var n=yt,i=Vn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Wf(Rv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ha(9,Cv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(j(349));Wr&30||bv(n,e,r)}return r}function bv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,i){e.value=n,e.getSnapshot=i,Pv(e)&&Iv(t)}function Rv(t,e,n){return n(function(){Pv(e)&&Iv(t)})}function Pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function Iv(t){var e=Di(t,1);e!==null&&ei(e,t,1,-1)}function Qg(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=gS.bind(null,yt,t),[e.memoizedState,t]}function ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Lv(){return Vn().memoizedState}function bl(t,e,n,i){var r=pi();yt.flags|=t,r.memoizedState=ha(1|e,n,void 0,i===void 0?null:i)}function lc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&Vf(i,o.deps)){r.memoizedState=ha(e,n,s,i);return}}yt.flags|=t,r.memoizedState=ha(1|e,n,s,i)}function e0(t,e){return bl(8390656,8,t,e)}function Wf(t,e){return lc(2048,8,t,e)}function Nv(t,e){return lc(4,2,t,e)}function Dv(t,e){return lc(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){return n=n!=null?n.concat([t]):null,lc(4,4,Uv.bind(null,e,t),n)}function Xf(){}function Ov(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kv(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Bv(t,e,n){return Wr&21?(ti(n,e)||(n=W0(),yt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function pS(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=ph.transition;ph.transition={};try{t(!1),e()}finally{tt=n,ph.transition=i}}function zv(){return Vn().memoizedState}function mS(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Hv(e,n);else if(n=Mv(t,e,n,i),n!==null){var r=Qt();ei(n,t,i,r),Gv(n,e,i)}}function gS(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Hv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,Ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Mv(t,e,r,i),n!==null&&(r=Qt(),ei(n,t,i,r),Gv(n,e,i))}}function Vv(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Hv(t,e){qo=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}var Kl={readContext:zn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},vS={readContext:zn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:e0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Qg,useDebugValue:Xf,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Qg(!1),e=t[0];return t=pS.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=pi();if(pt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ft===null)throw Error(j(349));Wr&30||bv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,e0(Rv.bind(null,i,s,t),[t]),i.flags|=2048,ha(9,Cv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Ft.identifierPrefix;if(pt){var n=Pi,i=Ri;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yS={readContext:zn,useCallback:Ov,useContext:zn,useEffect:Wf,useImperativeHandle:Fv,useInsertionEffect:Nv,useLayoutEffect:Dv,useMemo:kv,useReducer:mh,useRef:Lv,useState:function(){return mh(ua)},useDebugValue:Xf,useDeferredValue:function(t){var e=Vn();return Bv(e,Pt.memoizedState,t)},useTransition:function(){var t=mh(ua)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:Av,useId:zv,unstable_isNewReconciler:!1},_S={readContext:zn,useCallback:Ov,useContext:zn,useEffect:Wf,useImperativeHandle:Fv,useInsertionEffect:Nv,useLayoutEffect:Dv,useMemo:kv,useReducer:gh,useRef:Lv,useState:function(){return gh(ua)},useDebugValue:Xf,useDeferredValue:function(t){var e=Vn();return Pt===null?e.memoizedState=t:Bv(e,Pt.memoizedState,t)},useTransition:function(){var t=gh(ua)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Tv,useSyncExternalStore:Av,useId:zv,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=hr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ei(e,t,r,i),Tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=hr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ei(e,t,r,i),Tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=hr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ei(e,t,i,n),Tl(e,t,i))}};function t0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,s):!0}function Wv(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=hn(e)?Hr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function n0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function jh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Of(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=hn(e)?Hr:Yt.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=Zx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,uf=i),Qh(t,e)},n}function qv(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function i0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=DS.bind(null,t,e,n),e.then(t,t))}function r0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function s0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var SS=Fi.ReactCurrentOwner,cn=!1;function jt(t,e,n,i){e.child=t===null?Sv(e,null,n,i):Os(e,t.child,n,i)}function o0(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Hf(t,e,n,i,s,r),n=Gf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(pt&&n&&Pf(e),e.flags|=1,jt(t,e,i,r),e.child)}function a0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yv(t,e,s,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ia(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return ef(t,e,n,i,r)}function $v(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(bs,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(bs,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(bs,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(bs,wn),wn|=i;return jt(t,e,r,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,i,r){var s=hn(n)?Hr:Yt.current;return s=Us(e,s),Ls(e,r),n=Hf(t,e,n,i,s,r),i=Gf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(pt&&i&&Pf(e),e.flags|=1,jt(t,e,n,r),e.child)}function l0(t,e,n,i,r){if(hn(n)){var s=!0;Hl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)Cl(t,e),Wv(e,n,i),jh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=hn(n)?Hr:Yt.current,c=Us(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&n0(e,o,i,c),er=!1;var d=e.memoizedState;o.state=d,Yl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||er?(typeof u=="function"&&(Jh(e,n,u,i),l=e.memoizedState),(a=er||t0(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=hn(n)?Hr:Yt.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&n0(e,o,i,l),er=!1,d=e.memoizedState,o.state=d,Yl(e,i,o,r);var y=e.memoizedState;a!==f||d!==y||un.current||er?(typeof p=="function"&&(Jh(e,n,p,i),y=e.memoizedState),(c=er||t0(e,n,c,i,d,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return tf(t,e,n,i,s,r)}function tf(t,e,n,i,r,s){Zv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yg(e,n,!1),Ui(t,e,s);i=e.stateNode,SS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Yg(e,n,!0),e.child}function Kv(t){var e=t.stateNode;e.pendingContext?qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qg(t,e.context,!1),kf(t,e.containerInfo)}function c0(t,e,n,i,r){return Fs(),Lf(r),e.flags|=256,jt(t,e,n,i),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jv(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(vt,r&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):qf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return MS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nf,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qf(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,i){return i!==null&&Lf(i),Os(e,t.child,null,n),t=qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vh(Error(j(422))),_l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=rf(o),e.memoizedState=nf,s);if(!(e.mode&1))return _l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(j(419)),i=vh(s,i,void 0),_l(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),ei(i,t,r,-1))}return jf(),i=vh(Error(j(421))),_l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=US.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=lr(r.nextSibling),Tn=e,pt=!0,jn=null,t!==null&&(Fn[On++]=Ri,Fn[On++]=Pi,Fn[On++]=Gr,Ri=t.id,Pi=t.overflow,Gr=e),e=qf(e,i.children),e.flags|=4096,e)}function u0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Kh(t.return,e,n)}function yh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function jv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,n,e);else if(t.tag===19)u0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wS(t,e,n){switch(e.tag){case 3:Kv(e),Fs();break;case 5:Ev(e);break;case 1:hn(e.type)&&Hl(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Jv(t,e,n):(lt(vt,vt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);lt(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return jv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return Ui(t,e,n)}var Qv,sf,ey,ty;Qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};ey=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(vi.current);var s=null;switch(n){case"input":r=Ah(t,r),i=Ah(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Rh(t,r),i=Rh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}Ih(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ty=function(t,e,n,i){n!==i&&(e.flags|=4)};function Do(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ES(t,e,n){var i=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&Vl(),Xt(e),null;case 3:return i=e.stateNode,ks(),ft(un),ft(Yt),zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(df(jn),jn=null))),sf(t,e),Xt(e),null;case 5:Bf(e);var r=Br(la.current);if(n=e.type,t!==null&&e.stateNode!=null)ey(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(j(166));return Xt(e),null}if(t=Br(vi.current),vl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[oa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<zo.length;r++)ht(zo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":yg(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":xg(i,s),ht("invalid",i)}Ih(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":rl(i),_g(i,s,!0);break;case"textarea":rl(i),Sg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[oa]=i,Qv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lh(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<zo.length;r++)ht(zo[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":yg(t,i),r=Ah(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ht("invalid",t);break;case"textarea":xg(t,i),r=Rh(t,i),ht("invalid",t);break;default:r=i}Ih(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?L0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&P0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jo(t,l):typeof l=="number"&&Jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&gf(t,s,l,o))}switch(n){case"input":rl(t),_g(t,i,!1);break;case"textarea":rl(t),Sg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)ty(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(j(166));if(n=Br(la.current),Br(vi.current),vl(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:gl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Xt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&En!==null&&e.mode&1&&!(e.flags&128))_v(),Fs(),e.flags|=98560,s=!1;else if(s=vl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[mi]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(df(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?It===0&&(It=3):jf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return ks(),sf(t,e),t===null&&ra(e.stateNode.containerInfo),Xt(e),null;case 10:return Uf(e.type._context),Xt(e),null;case 17:return hn(e.type)&&Vl(),Xt(e),null;case 19:if(ft(vt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>zs&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Xt(e),null}else 2*Et()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=vt.current,lt(vt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Jf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function TS(t,e){switch(If(e),e.tag){case 1:return hn(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),ft(un),ft(Yt),zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return ks(),null;case 10:return Uf(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var xl=!1,qt=!1,AS=typeof WeakSet=="function"?WeakSet:Set,he=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function of(t,e,n){try{n()}catch(i){St(t,e,i)}}var h0=!1;function bS(t,e){if(Hh=Ol,t=ov(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:t,selectionRange:n},Ol=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,v=y.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:Kn(e.type,S),v);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){St(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return y=h0,h0=!1,y}function Yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&of(e,n,s)}r=r.next}while(r!==i)}}function uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ny(t){var e=t.alternate;e!==null&&(t.alternate=null,ny(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[oa],delete e[qh],delete e[cS],delete e[uS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iy(t){return t.tag===5||t.tag===3||t.tag===4}function f0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cf(t,e,n),t=t.sibling;t!==null;)cf(t,e,n),t=t.sibling}var zt=null,Jn=!1;function ji(t,e,n){for(n=n.child;n!==null;)ry(t,e,n),n=n.sibling}function ry(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(nc,n)}catch{}switch(n.tag){case 5:qt||As(n,e);case 6:var i=zt,r=Jn;zt=null,ji(t,e,n),zt=i,Jn=r,zt!==null&&(Jn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Jn?(t=zt,n=n.stateNode,t.nodeType===8?hh(t.parentNode,n):t.nodeType===1&&hh(t,n),ta(t)):hh(zt,n.stateNode));break;case 4:i=zt,r=Jn,zt=n.stateNode.containerInfo,Jn=!0,ji(t,e,n),zt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&of(n,e,o),r=r.next}while(r!==i)}ji(t,e,n);break;case 1:if(!qt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}ji(t,e,n);break;case 21:ji(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,ji(t,e,n),qt=i):ji(t,e,n);break;default:ji(t,e,n)}}function d0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AS),e.forEach(function(i){var r=FS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Jn=!1;break e;case 3:zt=a.stateNode.containerInfo,Jn=!0;break e;case 4:zt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(zt===null)throw Error(j(160));ry(s,o,r),zt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sy(e,t),e=e.sibling}function sy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),di(t),i&4){try{Yo(3,t,t.return),uc(3,t)}catch(S){St(t,t.return,S)}try{Yo(5,t,t.return)}catch(S){St(t,t.return,S)}}break;case 1:Zn(e,t),di(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Zn(e,t),di(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Jo(r,"")}catch(S){St(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b0(r,s),Lh(a,o);var c=Lh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?L0(r,f):u==="dangerouslySetInnerHTML"?P0(r,f):u==="children"?Jo(r,f):gf(r,u,f,c)}switch(a){case"input":bh(r,s);break;case"textarea":C0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(S){St(t,t.return,S)}}break;case 6:if(Zn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(j(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){St(t,t.return,S)}}break;case 3:if(Zn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(S){St(t,t.return,S)}break;case 4:Zn(e,t),di(t);break;case 13:Zn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zf=Et())),i&4&&d0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,Zn(e,t),qt=c):Zn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(f=he=u;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:Yo(4,d,d.return);break;case 1:As(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(S){St(i,n,S)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){m0(f);continue}}p!==null?(p.return=d,he=p):m0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=I0("display",o))}catch(S){St(t,t.return,S)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){St(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zn(e,t),di(t),i&4&&d0(t);break;case 21:break;default:Zn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iy(n)){var i=n;break e}n=n.return}throw Error(j(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jo(r,""),i.flags&=-33);var s=f0(t);cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=f0(t);lf(t,a,o);break;default:throw Error(j(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CS(t,e,n){he=t,oy(t,e,n)}function oy(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||xl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=xl;var c=qt;if(xl=o,(qt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?g0(r):l!==null?(l.return=o,he=l):g0(r);for(;s!==null;)he=s,oy(s,e,n),s=s.sibling;he=r,xl=a,qt=c}p0(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):p0(t,e,n)}}function p0(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ta(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}qt||e.flags&512&&af(e)}catch(d){St(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function m0(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function g0(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{af(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{af(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var RS=Math.ceil,Jl=Fi.ReactCurrentDispatcher,Yf=Fi.ReactCurrentOwner,Bn=Fi.ReactCurrentBatchConfig,qe=0,Ft=null,bt=null,Vt=0,wn=0,bs=gr(0),It=0,fa=null,Xr=0,hc=0,$f=0,$o=null,ln=null,Zf=0,zs=1/0,bi=null,jl=!1,uf=null,ur=null,Sl=!1,rr=null,Ql=0,Zo=0,hf=null,Rl=-1,Pl=0;function Qt(){return qe&6?Et():Rl!==-1?Rl:Rl=Et()}function hr(t){return t.mode&1?qe&2&&Vt!==0?Vt&-Vt:fS.transition!==null?(Pl===0&&(Pl=W0()),Pl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:J0(t.type)),t):1}function ei(t,e,n,i){if(50<Zo)throw Zo=0,hf=null,Error(j(185));da(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(hc|=n),It===4&&nr(t,Vt)),fn(t,i),n===1&&qe===0&&!(e.mode&1)&&(zs=Et()+500,ac&&vr()))}function fn(t,e){var n=t.callbackNode;p1(t,e);var i=Fl(t,t===Ft?Vt:0);if(i===0)n!==null&&Eg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eg(n),e===1)t.tag===0?hS(v0.bind(null,t)):gv(v0.bind(null,t)),aS(function(){!(qe&6)&&vr()}),n=null;else{switch(X0(i)){case 1:n=Sf;break;case 4:n=H0;break;case 16:n=Ul;break;case 536870912:n=G0;break;default:n=Ul}n=py(n,ay.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ay(t,e){if(Rl=-1,Pl=0,qe&6)throw Error(j(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Fl(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=qe;qe|=2;var s=cy();(Ft!==t||Vt!==e)&&(bi=null,zs=Et()+500,zr(t,e));do try{LS();break}catch(a){ly(t,a)}while(!0);Df(),Jl.current=s,qe=r,bt!==null?e=0:(Ft=null,Vt=0,e=It)}if(e!==0){if(e===2&&(r=Oh(t),r!==0&&(i=r,e=ff(t,r))),e===1)throw n=fa,zr(t,0),nr(t,i),fn(t,Et()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!PS(r)&&(e=ec(t,i),e===2&&(s=Oh(t),s!==0&&(i=s,e=ff(t,s))),e===1))throw n=fa,zr(t,0),nr(t,i),fn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(j(345));case 2:Fr(t,ln,bi);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=Zf+500-Et(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Xh(Fr.bind(null,t,ln,bi),e);break}Fr(t,ln,bi);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*RS(i/1960))-i,10<i){t.timeoutHandle=Xh(Fr.bind(null,t,ln,bi),i);break}Fr(t,ln,bi);break;case 5:Fr(t,ln,bi);break;default:throw Error(j(329))}}}return fn(t,Et()),t.callbackNode===n?ay.bind(null,t):null}function ff(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=ln,ln=n,e!==null&&df(e)),t}function df(t){ln===null?ln=t:ln.push.apply(ln,t)}function PS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~$f,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function v0(t){if(qe&6)throw Error(j(327));Ns();var e=Fl(t,0);if(!(e&1))return fn(t,Et()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=Oh(t);i!==0&&(e=i,n=ff(t,i))}if(n===1)throw n=fa,zr(t,0),nr(t,e),fn(t,Et()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,ln,bi),fn(t,Et()),null}function Kf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(zs=Et()+500,ac&&vr())}}function qr(t){rr!==null&&rr.tag===0&&!(qe&6)&&Ns();var e=qe;qe|=1;var n=Bn.transition,i=tt;try{if(Bn.transition=null,tt=1,t)return t()}finally{tt=i,Bn.transition=n,qe=e,!(qe&6)&&vr()}}function Jf(){wn=bs.current,ft(bs)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oS(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(If(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:ks(),ft(un),ft(Yt),zf();break;case 5:Bf(i);break;case 4:ks();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:Uf(i.type._context);break;case 22:case 23:Jf()}n=n.return}if(Ft=t,bt=t=fr(t.current,null),Vt=wn=e,It=0,fa=null,$f=hc=Xr=0,ln=$o=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function ly(t,e){do{var n=bt;try{if(Df(),Al.current=Kl,Zl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if(Wr=0,Ut=Pt=yt=null,qo=!1,ca=0,Yf.current=null,n===null||n.return===null){It=1,fa=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=r0(o);if(p!==null){p.flags&=-257,s0(p,o,a,s,e),p.mode&1&&i0(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var S=new Set;S.add(l),e.updateQueue=S}else y.add(l);break e}else{if(!(e&1)){i0(s,c,e),jf();break e}l=Error(j(426))}}else if(pt&&a.mode&1){var v=r0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),s0(v,o,a,s,e),Lf(Bs(l,a));break e}}s=l=Bs(l,a),It!==4&&(It=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Xv(s,l,e);Jg(s,h);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ur===null||!ur.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=qv(s,a,e);Jg(s,x);break e}}s=s.return}while(s!==null)}hy(n)}catch(b){e=b,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function cy(){var t=Jl.current;return Jl.current=Kl,t===null?Kl:t}function jf(){(It===0||It===3||It===2)&&(It=4),Ft===null||!(Xr&268435455)&&!(hc&268435455)||nr(Ft,Vt)}function ec(t,e){var n=qe;qe|=2;var i=cy();(Ft!==t||Vt!==e)&&(bi=null,zr(t,e));do try{IS();break}catch(r){ly(t,r)}while(!0);if(Df(),qe=n,Jl.current=i,bt!==null)throw Error(j(261));return Ft=null,Vt=0,It}function IS(){for(;bt!==null;)uy(bt)}function LS(){for(;bt!==null&&!s1();)uy(bt)}function uy(t){var e=dy(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?hy(t):bt=e,Yf.current=null}function hy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TS(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,bt=null;return}}else if(n=ES(n,e,wn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);It===0&&(It=5)}function Fr(t,e,n){var i=tt,r=Bn.transition;try{Bn.transition=null,tt=1,NS(t,e,n,i)}finally{Bn.transition=r,tt=i}return null}function NS(t,e,n,i){do Ns();while(rr!==null);if(qe&6)throw Error(j(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m1(t,s),t===Ft&&(bt=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,py(Ul,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=tt;tt=1;var a=qe;qe|=4,Yf.current=null,bS(t,n),sy(n,t),tS(Gh),Ol=!!Hh,Gh=Hh=null,t.current=n,CS(n,t,r),o1(),qe=a,tt=o,Bn.transition=s}else t.current=n;if(Sl&&(Sl=!1,rr=t,Ql=r),s=t.pendingLanes,s===0&&(ur=null),c1(n.stateNode,i),fn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=uf,uf=null,t;return Ql&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===hf?Zo++:(Zo=0,hf=t):Zo=0,vr(),null}function Ns(){if(rr!==null){var t=X0(Ql),e=Bn.transition,n=tt;try{if(Bn.transition=null,tt=16>t?16:t,rr===null)var i=!1;else{if(t=rr,rr=null,Ql=0,qe&6)throw Error(j(331));var r=qe;for(qe|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:Yo(8,u,s)}var f=u.child;if(f!==null)f.return=u,he=f;else for(;he!==null;){u=he;var d=u.sibling,p=u.return;if(ny(u),u===c){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var v=S.sibling;S.sibling=null,S=v}while(S!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,he=h;break e}he=s.return}}var m=t.current;for(he=m;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=m;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uc(9,a)}}catch(b){St(a,a.return,b)}if(a===o){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if(qe=r,vr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(nc,t)}catch{}i=!0}return i}finally{tt=n,Bn.transition=e}}return!1}function y0(t,e,n){e=Bs(n,e),e=Xv(t,e,1),t=cr(t,e,1),e=Qt(),t!==null&&(da(t,1,e),fn(t,e))}function St(t,e,n){if(t.tag===3)y0(t,t,n);else for(;e!==null;){if(e.tag===3){y0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Bs(n,t),t=qv(e,t,1),e=cr(e,t,1),t=Qt(),e!==null&&(da(e,1,t),fn(e,t));break}}e=e.return}}function DS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Et()-Zf?zr(t,0):$f|=n),fn(t,e)}function fy(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=Qt();t=Di(t,e),t!==null&&(da(t,e,n),fn(t,n))}function US(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fy(t,n)}function FS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(j(314))}i!==null&&i.delete(e),fy(t,n)}var dy;dy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,wS(t,e,n);cn=!!(t.flags&131072)}else cn=!1,pt&&e.flags&1048576&&vv(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cl(t,e),t=e.pendingProps;var r=Us(e,Yt.current);Ls(e,n),r=Hf(null,e,i,t,r,n);var s=Gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Of(e),r.updater=cc,e.stateNode=r,r._reactInternals=e,jh(e,i,t,n),e=tf(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Pf(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kS(i),t=Kn(i,t),r){case 0:e=ef(null,e,i,t,n);break e;case 1:e=l0(null,e,i,t,n);break e;case 11:e=o0(null,e,i,t,n);break e;case 14:e=a0(null,e,i,Kn(i.type,t),n);break e}throw Error(j(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),ef(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),l0(t,e,i,r,n);case 3:e:{if(Kv(e),t===null)throw Error(j(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wv(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(j(423)),e),e=c0(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(j(424)),e),e=c0(t,e,i,n,r);break e}else for(En=lr(e.stateNode.containerInfo.firstChild),Tn=e,pt=!0,jn=null,n=Sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=Ui(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Ev(e),t===null&&Zh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wh(i,r)?o=null:s!==null&&Wh(i,s)&&(e.flags|=32),Zv(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return Jv(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),o0(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Xl,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!un.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=zn(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),a0(t,e,i,r,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Cl(t,e),e.tag=1,hn(i)?(t=!0,Hl(e)):t=!1,Ls(e,n),Wv(e,i,r),jh(e,i,r,n),tf(null,e,i,!0,t,n);case 19:return jv(t,e,n);case 22:return $v(t,e,n)}throw Error(j(156,e.tag))};function py(t,e){return V0(t,e)}function OS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new OS(t,e,n,i)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kS(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yf)return 11;if(t===_f)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Vr(n.children,r,s,e);case vf:o=8,r|=8;break;case Mh:return t=kn(12,n,e,r|2),t.elementType=Mh,t.lanes=s,t;case wh:return t=kn(13,n,e,r),t.elementType=wh,t.lanes=s,t;case Eh:return t=kn(19,n,e,r),t.elementType=Eh,t.lanes=s,t;case E0:return fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case M0:o=10;break e;case w0:o=9;break e;case yf:o=11;break e;case _f:o=14;break e;case Qi:o=16,i=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function fc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=E0,t.lanes=n,t.stateNode={isHidden:!1},t}function _h(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function xh(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ih(0),this.expirationTimes=ih(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ih(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ed(t,e,n,i,r,s,o,a,l){return t=new BS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(s),t}function zS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function my(t){if(!t)return pr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(hn(n))return mv(t,n,e)}return e}function gy(t,e,n,i,r,s,o,a,l){return t=ed(n,i,!0,t,r,s,o,a,l),t.context=my(null),n=t.current,i=Qt(),r=hr(n),s=Ii(i,r),s.callback=e!=null?e:null,cr(n,s,r),t.current.lanes=r,da(t,r,i),fn(t,i),t}function dc(t,e,n,i){var r=e.current,s=Qt(),o=hr(r);return n=my(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(ei(t,r,o,s),Tl(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function td(t,e){_0(t,e),(t=t.alternate)&&_0(t,e)}function VS(){return null}var vy=typeof reportError=="function"?reportError:function(t){console.error(t)};function nd(t){this._internalRoot=t}pc.prototype.render=nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));dc(t,e,null,null)};pc.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){dc(null,t,null,null)}),e[Ni]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&K0(t)}};function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function x0(){}function HS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=gy(e,i,t,0,null,!1,!1,"",x0);return t._reactRootContainer=o,t[Ni]=o.current,ra(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=ed(t,0,!1,null,null,!1,!1,"",x0);return t._reactRootContainer=l,t[Ni]=l.current,ra(t.nodeType===8?t.parentNode:t),qr(function(){dc(e,l,n,i)}),l}function gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}dc(e,o,t,r)}else o=HS(n,e,t,r,i);return tc(o)}q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(Mf(e,n|1),fn(e,Et()),!(qe&6)&&(zs=Et()+500,vr()))}break;case 13:qr(function(){var i=Di(t,1);if(i!==null){var r=Qt();ei(i,t,1,r)}}),td(t,1)}};wf=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=Qt();ei(e,t,134217728,n)}td(t,134217728)}};Y0=function(t){if(t.tag===13){var e=hr(t),n=Di(t,e);if(n!==null){var i=Qt();ei(n,t,e,i)}td(t,e)}};$0=function(){return tt};Z0=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Dh=function(t,e,n){switch(e){case"input":if(bh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=oc(i);if(!r)throw Error(j(90));A0(i),bh(i,r)}}}break;case"textarea":C0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};U0=Kf;F0=qr;var GS={usingClientEntryPoint:!1,Events:[ma,Ss,oc,N0,D0,Kf]},Uo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B0(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||VS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fo.isDisabled&&Fo.supportsFiber))try{nc=Fo.inject(WS),gi=Fo}catch{}var Fo;Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(e))throw Error(j(200));return zS(t,e,null,n)};Cn.createRoot=function(t,e){if(!id(t))throw Error(j(299));var n=!1,i="",r=vy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ed(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ra(t.nodeType===8?t.parentNode:t),new nd(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=B0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return qr(t)};Cn.hydrate=function(t,e,n){if(!mc(e))throw Error(j(200));return gc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!id(t))throw Error(j(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=vy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=gy(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Ni]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pc(e)};Cn.render=function(t,e,n){if(!mc(e))throw Error(j(200));return gc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!mc(t))throw Error(j(40));return t._reactRootContainer?(qr(function(){gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Cn.unstable_batchedUpdates=Kf;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return gc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426"});var Sy=Ai((L2,xy)=>{"use strict";function _y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)}catch(t){console.error(t)}}_y(),xy.exports=yy()});var wy=Ai(rd=>{"use strict";var My=Sy();rd.createRoot=My.createRoot,rd.hydrateRoot=My.hydrateRoot;var N2});var Cy=Ai(Sc=>{"use strict";var jS=Yn(),QS=Symbol.for("react.element"),eM=Symbol.for("react.fragment"),tM=Object.prototype.hasOwnProperty,nM=jS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iM={key:!0,ref:!0,__self:!0,__source:!0};function by(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)tM.call(e,i)&&!iM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:QS,type:t,key:s,ref:o,props:r,_owner:nM.current}}Sc.Fragment=eM;Sc.jsx=by;Sc.jsxs=by});var tn=Ai((H2,Ry)=>{"use strict";Ry.exports=Cy()});var IC=gt(Yn(),1),mx=gt(wy(),1);var qa=gt(Yn(),1);var vc={story:"Story",characters:"Characters",metrics:"Franchise Metrics"},XS={[vc.story]:{dims:["Chapter","Era","Title","Kicker","Body","Accent"],sort:"Chapter"},[vc.characters]:{dims:["Order","Id","Name","Country","Style","Debut","Tagline","Bio","Moves","Theme","Palette","Build"],sort:"Order"},[vc.metrics]:{dims:["Franchise","Title","Year","Category","Unit","Source","Source URL","As Of","Note"],measures:["Value"]}};function qS(t){return t&&Array.isArray(t.data)?t.data:[]}function YS(t){let e=t.dims.map(n=>({fieldCaption:n,fieldAlias:n}));return(t.measures||[]).forEach(n=>e.push({fieldCaption:n,function:"SUM",fieldAlias:n})),{fields:e}}function $S(){let t=tableau.extensions.workbook;if(t&&typeof t.getAllDataSourcesAsync=="function")return t.getAllDataSourcesAsync();let e=tableau.extensions.worksheetContent;return e&&e.worksheet&&typeof e.worksheet.getDataSourcesAsync=="function"?e.worksheet.getDataSourcesAsync():Promise.resolve([])}async function Ey(){if(!window.tableau||!tableau.extensions)throw new Error("Extensions API not loaded");await tableau.extensions.initializeAsync();let t=await $S(),e=new Map((t||[]).map(r=>[r.name,r])),n={loadedAt:new Date},i=[];return await Promise.all(Object.entries(vc).map(async([r,s])=>{let o=e.get(s);if(!o){i.push(s),n[r]=[];return}let a=XS[s],l=qS(await o.queryAsync(YS(a)));a.sort&&l.sort((c,u)=>Number(c[a.sort])-Number(u[a.sort])),n[r]=l})),n.missing=i,n.sourceNames=(t||[]).map(r=>r.name),n}var dn=gt(Yn(),1);function ZS(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Rn(t){let e=typeof t=="string"?ZS(t):t>>>0;return function(){e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var nt=(t,e,n)=>Math.max(e,Math.min(n,t)),Gs=(t,e,n)=>t+(e-t)*n,Ws=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,va=t=>1-Math.pow(1-t,3);function KS(t){let e=t.replace("#",""),n=parseInt(e.length===3?e.split("").map(i=>i+i).join(""):e,16);return[n>>16&255,n>>8&255,n&255]}function sd(t,e){let[n,i,r]=KS(t),s=o=>nt(Math.round(e<0?o*(1+e):o+(255-o)*e),0,255);return`rgb(${s(n)},${s(i)},${s(r)})`}function Xs(t,e={}){var u,f,d,p,y,S,v;let n=Rn((u=e.seed)!=null?u:1),i=(f=e.width)!=null?f:80,r=(d=e.bristles)!=null?d:Math.round(nt(i/2.2,18,120)),s=(p=e.dry)!=null?p:.5,o=(y=e.wobble)!=null?y:i*.08,a=JS(t,(S=e.step)!=null?S:6),l=a.map((h,m)=>{let g=a[Math.max(0,m-1)],x=a[Math.min(a.length-1,m+1)],b=x[0]-g[0],T=x[1]-g[1],A=Math.hypot(b,T)||1;return[-T/A,b/A]}),c=[];for(let h=0;h<r;h++){let m=(h/(r-1)-.5)*i*(.9+n()*.2),g=Math.abs(m)/(i/2),x=n()*.06+g*.05,b=g*s*.35+n()*s*.18,T=i/r*(2.2+n()*1.8)*(1-g*.45),A=g<.6?.9+n()*.1:.45+n()*.5-g*.2,R=n()*Math.PI*2,F=.004+n()*.01,_=[],w=Math.floor(n()*3*s+g*2*s);for(let D=0;D<w;D++){let k=.45+n()*.55;_.push([k,k+.02+n()*.12])}let O=a.map((D,k)=>{let $=l[k],H=k/(a.length-1),K=Math.sin(Math.PI*nt(H*1.15+.04,0,1))**.35,z=m*(.55+.45*K)+Math.sin(k*F*40+R)*o*.15;return[D[0]+$[0]*z,D[1]+$[1]*z]});c.push({pts:O,startLag:x,endEarly:b,thick:T,alpha:A,gaps:_})}return{bristles:c,width:i,core:a,color:(v=e.color)!=null?v:"#ece6d6"}}function JS(t,e){let n=[],i=r=>t[nt(r,0,t.length-1)];for(let r=0;r<t.length-1;r++){let s=i(r-1),o=i(r),a=i(r+1),l=i(r+2),c=Math.hypot(a[0]-o[0],a[1]-o[1]),u=Math.max(2,Math.ceil(c/e));for(let f=0;f<u;f++){let d=f/u,p=d*d,y=p*d,S=(v,h,m,g)=>.5*(2*h+(-v+m)*d+(2*v-5*h+4*m-g)*p+(-v+3*h-3*m+g)*y);n.push([S(s[0],o[0],a[0],l[0]),S(s[1],o[1],a[1],l[1])])}}return n.push(t[t.length-1]),n}function ya(t,e,n,i={}){var s,o,a;if(n<=0)return;let r=!!i.reverse;if(t.save(),t.strokeStyle=(s=i.color)!=null?s:e.color,t.lineCap="round",t.lineJoin="round",e.core&&i.core!==!1){let l=e.core.length,c=r?Math.max(.04,1-n):.04,u=r?.9:Math.min(.9,n*1.02);if(u>c){t.globalAlpha=(o=i.alpha)!=null?o:1,t.lineWidth=e.width*.42,t.lineCap="butt",t.beginPath();for(let f=Math.floor(c*(l-1));f<=Math.floor(u*(l-1));f++){let d=e.core[f];f===Math.floor(c*(l-1))?t.moveTo(d[0],d[1]):t.lineTo(d[0],d[1])}t.stroke(),t.lineCap="round"}}for(let l of e.bristles){let c=l.pts.length,u,f;if(r?(u=Math.max(l.startLag,1-n),f=1-l.endEarly):(u=l.startLag,f=Math.min(1-l.endEarly,n*(1+l.startLag))),f<=u)continue;t.globalAlpha=nt(l.alpha,.05,1)*((a=i.alpha)!=null?a:1),t.lineWidth=l.thick,t.beginPath();let d=!1,p=Math.floor(u*(c-1)),y=Math.floor(f*(c-1));for(let S=p;S<=y;S++){let v=S/(c-1),h=!1;for(let g of l.gaps)v>g[0]&&v<g[1]&&(h=!0);if(h){d=!1;continue}let m=l.pts[S];d?t.lineTo(m[0],m[1]):(t.moveTo(m[0],m[1]),d=!0)}t.stroke()}t.restore()}function yc(t,e,n,i,r=7,s={}){var u,f;let o=Rn(r),a=(u=s.rows)!=null?u:Math.max(3,Math.round(i/150)),l=i/a,c=[];for(let d=0;d<a;d++){let p=e+l*(d+.5)+(o()-.5)*l*.15,S=d%2===0?[t-n*.05,t+n*1.04]:[t+n*1.05,t-n*.04],v=[],h=5;for(let m=0;m<h;m++){let g=m/(h-1);v.push([Gs(S[0],S[1],g),p+Math.sin(g*Math.PI*(1+o()))*l*.12*(o()-.5)])}c.push(Xs(v,{width:l*(1.55+o()*.3),seed:r*31+d,dry:(f=s.dry)!=null?f:.55,color:s.color}))}return c}function _c(t,e,n,i={}){var a;let r=e.length,s=(a=i.overlap)!=null?a:.35,o=1/(r-(r-1)*s);e.forEach((l,c)=>{let u=c*o*(1-s),f=nt((n-u)/o,0,1);if(i.reverse){let p=(r-1-c)*o*(1-s),y=1-nt((1-n-p)/o,0,1);ya(t,l,y,{...i,reverse:!0})}else ya(t,l,f,i)})}function Ty(t,e,n,i=3,r={}){let s=Rn(i),o=[],a=s()*Math.PI*2,l=Math.PI*(1.7+s()*.2);for(let c=0;c<=18;c++){let u=a+l*c/18,f=n*(1+(s()-.5)*.05);o.push([t+Math.cos(u)*f,e+Math.sin(u)*f])}return Xs(o,{width:n*.32,seed:i+11,dry:.8,...r})}function od(t,e,n,i=5,r={}){var l,c;let s=document.createElement("canvas");s.width=t,s.height=e;let o=s.getContext("2d"),a=Xs([[t*.04,e*.55],[t*.35,e*.47],[t*.7,e*.53],[t*.96,e*.46]],{width:e*((l=r.thickness)!=null?l:.82),seed:i,dry:(c=r.dry)!=null?c:.65,color:n});return ya(o,a,1),s.toDataURL("image/png")}var ld=()=>typeof window!="undefined"&&window.HADO_ASSETS||{files:{},audio:{},sprites:{}};function yr(t){var e;return((e=ld().files)==null?void 0:e[t])||null}function cd(t){var e;return((e=ld().audio)==null?void 0:e[t])||null}function Ay(t){var i;let e=(i=ld().sprites)==null?void 0:i[t];if(!e)return null;let n=yr(`sprites/${e.file}`);return n?{...e,image:n}:null}var ad=new Map;function ud(t){if(!t)return null;if(!ad.has(t)){let e=new Image;e.src=t,ad.set(t,e)}return ad.get(t)}function hd(t){return new Promise(e=>{if(!t)return e(null);let n=ud(t);if(n.complete&&n.naturalWidth)return e(n);n.onload=()=>e(n),n.onerror=()=>e(null)})}var xc=gt(Yn(),1);function qs(t,e=.01){let n=(0,xc.useRef)(!0);return(0,xc.useEffect)(()=>{if(!t.current||typeof IntersectionObserver=="undefined")return;let i=new IntersectionObserver(r=>{for(let s of r)n.current=s.isIntersecting},{threshold:e});return i.observe(t.current),()=>i.disconnect()},[t,e]),n}var ni=gt(tn(),1),rM=["","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341"],Mc="#ece6d6",Py="#141a2b",Iy=520,Ly=950,Ny='"HadoBrush", "Kaushan Script", "Brush Script MT", "Segoe Script", cursive',sM='"HadoDisplay", "Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',wc='Georgia, "Times New Roman", serif';function Dy(t,e,n){let i=String(e||"").split(/\s+/),r=[],s="";for(let o of i){let a=s?`${s} ${o}`:o;t.measureText(a).width>n&&s?(r.push(s),s=o):s=a}return s&&r.push(s),r}function oM(t,e,n,i){let r=n<760;if(t===0){let p=n/2,y=i*.47,S=Math.min(n*.92,1200);return{kind:"title",strokes:[Xs([[p-S/2,y-i*.05],[p-S*.15,y-i*.09],[p+S*.2,y-i*.06],[p+S/2,y-i*.1]],{width:i*.24,seed:101,dry:.7,color:Mc}),Xs([[p+S*.46,y+i*.1],[p+S*.1,y+i*.13],[p-S*.25,y+i*.09],[p-S*.44,y+i*.12]],{width:i*.2,seed:202,dry:.75,color:Mc})],cx:p,cy:y,sw:S}}let s=e[t-1],o=r?n*.05:n*.36,a=r?n*.9:n*.56,l=i*.18,c=i*.62,u=yc(o,l,a,c,13+t*7,{color:Mc,rows:r?6:5}),f=Math.min(n*.13,i*.2),d=r?null:Ty(n*.19,i*.47,f,40+t,{color:(s==null?void 0:s.Accent)||"#c4283c"});return{kind:"chapter",strokes:u,px:o,py:l,pw:a,ph:c,enso:d,ensoR:f,narrow:r,ch:s}}function aM(t,e,n,i,r,s){if(e.kind==="title"){t.save(),t.globalCompositeOperation="source-atop",t.fillStyle=Py,t.textAlign="center",t.textBaseline="middle";let y=Math.min(n*.075,110);t.font=`${y}px ${Ny}`,t.fillText("Way of the",e.cx,e.cy-i*.115),t.font=`italic ${Math.max(14,y*.22)}px ${wc}`,t.fillText("A visual history of Street Fighter  \xB7  1987 \u2013 today",e.cx,e.cy+i*.135),t.restore();return}let o=e.ch;if(!o)return;let a=Math.max(24,e.pw*.07),l=e.px+a,c=e.py+a*1.1,u=e.pw-a*2;if(t.save(),t.globalCompositeOperation="source-atop",s){let y=e.ph*.9,S=s.naturalWidth/s.naturalHeight*y;t.globalAlpha=.22,t.drawImage(s,e.px+e.pw-S,e.py+e.ph*.05,S,y),t.globalAlpha=1}t.textBaseline="top",t.fillStyle=o.Accent&&o.Accent!=="#e8e2d0"?o.Accent:"#c4283c";let f=nt(n*.014,12,17);t.font=`700 ${f}px ${wc}`,t.fillText(`${String(o.Era).toUpperCase()}   \xB7   ${o.Kicker}`,l,c),c+=f*2,t.fillStyle=Py;let d=nt(n*.05,30,74);t.font=`${d}px ${Ny}`;for(let y of Dy(t,o.Title,u))t.fillText(y,l,c),c+=d*1.08;c+=d*.25;let p=nt(n*.0155,15,21);t.font=`${p}px ${wc}`,t.fillStyle="#232a3d";for(let y of Dy(t,o.Body,Math.min(u,640)))t.fillText(y,l,c),c+=p*1.55;t.restore()}function lM(t,e,n,i,r,s){if(s<=0)return;t.save(),t.globalAlpha=nt(s,0,1);let o=.85+.15*va(nt(s,0,1)),a=e.cy+i*.035;if(t.translate(e.cx,a),t.scale(o,o),r){let l=Math.min(i*.24,n*.16),c=r.naturalWidth/r.naturalHeight*l;t.drawImage(r,-c/2,-l/2,c,l)}else{let l=Math.min(n*.17,230);t.font=`italic 900 ${l}px ${sM}`,t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",t.lineWidth=l*.12,t.strokeStyle="#0b0f1e",t.strokeText("HADO",0,0);let c=t.createLinearGradient(0,-l/2,0,l/2);c.addColorStop(0,"#fff2a8"),c.addColorStop(.45,"#f6b42c"),c.addColorStop(.55,"#e0631d"),c.addColorStop(1,"#b0161f"),t.fillStyle=c,t.fillText("HADO",0,0),t.lineWidth=l*.02,t.strokeStyle="#fff6cf",t.strokeText("HADO",0,-l*.01)}t.restore()}function cM(t,e,n,i,r,s){var l;if(!e.enso)return;ya(t,e.enso,r,{reverse:s});let o=s?r:nt((r-.4)/.6,0,1);if(o<=0)return;t.save(),t.globalAlpha=o,t.fillStyle=Mc,t.textAlign="center",t.textBaseline="middle";let a=Number((l=e.ch)==null?void 0:l.Chapter)||0;t.font=`${e.ensoR*1.05}px "Hiragino Mincho ProN", "Yu Mincho", "Noto Serif CJK JP", serif`,t.fillText(rM[a]||String(a),n*.19,i*.47),t.font=`600 ${nt(n*.012,11,14)}px ${wc}`,t.globalAlpha=o*.7,t.fillText(`CHAPTER ${a}`,n*.19,i*.47+e.ensoR*1.35),t.restore()}function uM(t,e,n,i,r,s){let o=t.createLinearGradient(0,0,0,n);o.addColorStop(0,"#070b18"),o.addColorStop(.55,"#0d1630"),o.addColorStop(1,"#141f3e"),t.fillStyle=o,t.fillRect(0,0,e,n);for(let a of r){let l=.5+.5*Math.sin(i*.001*a.sp+a.ph);t.globalAlpha=a.a*(.4+.6*l),t.fillStyle="#dfe6ff",t.fillRect(a.x*e,a.y*n,a.r,a.r)}t.globalAlpha=1;for(let a=0;a<4;a++){let l=n*(.15+a*.22),c=(i*.006*(a%2?1:-.7)+a*300)%(e+800)-400,u=t.createRadialGradient(c,l,0,c,l,420);u.addColorStop(0,"rgba(60,80,140,0.10)"),u.addColorStop(1,"rgba(60,80,140,0)"),t.fillStyle=u,t.fillRect(c-420,l-420,840,840)}s>0&&(t.fillStyle=`rgba(200,215,255,${s*.12})`,t.fillRect(0,0,e,n))}function fd({chapters:t,height:e}){let n=(0,dn.useRef)(null),i=(0,dn.useRef)(null),r=(0,dn.useRef)(null),[s,o]=(0,dn.useState)(0),a=t.length+1,l=(0,dn.useRef)({shown:0,target:0,phase:"paint",start:performance.now(),layouts:new Map}),c=(0,dn.useRef)({logo:null,story:{}}),u=qs(n,.05);(0,dn.useEffect)(()=>{hd(yr("img/hado-logo.png")||yr("img/hado-logo.webp")).then(p=>{c.current.logo=p}),t.forEach(p=>{hd(yr(`img/story/${p.Chapter}.png`)||yr(`img/story/${p.Chapter}.jpg`)).then(y=>{y&&(c.current.story[p.Chapter]=y)})})},[t]);let f=(0,dn.useCallback)(p=>{let y=l.current;if(p=nt(p,0,a-1),p===y.target)return!1;if(y.target=p,y.phase==="paint"||y.phase==="idle"){let S=performance.now(),v=y.phase==="idle"?1:nt((S-y.start)/Ly,0,1);y.phase="unpaint",y.start=S-(1-v)*Iy}return o(p),!0},[a]);(0,dn.useEffect)(()=>{let p=n.current,y=0,S=null,v=x=>{let b=l.current,T=Math.sign(x.deltaY);if(!T||T>0&&b.target>=a-1||T<0&&b.target<=0)return;x.preventDefault();let R=performance.now();R<y||Math.abs(x.deltaY)<4||(y=R+700,f(b.target+T))},h=x=>{S=x.touches[0].clientY},m=x=>{if(S==null)return;let b=S-x.touches[0].clientY,T=l.current,A=Math.sign(b);A>0&&T.target>=a-1||A<0&&T.target<=0||(x.preventDefault(),Math.abs(b)>40&&(f(T.target+A),S=null))},g=x=>{x.key==="ArrowDown"||x.key==="PageDown"||x.key===" "?f(l.current.target+1)&&x.preventDefault():(x.key==="ArrowUp"||x.key==="PageUp")&&f(l.current.target-1)&&x.preventDefault()};return p.addEventListener("wheel",v,{passive:!1}),p.addEventListener("touchstart",h,{passive:!0}),p.addEventListener("touchmove",m,{passive:!1}),p.addEventListener("keydown",g),()=>{p.removeEventListener("wheel",v),p.removeEventListener("touchstart",h),p.removeEventListener("touchmove",m),p.removeEventListener("keydown",g)}},[f,a]),(0,dn.useEffect)(()=>{let p=i.current,y=r.current,S=p.getContext("2d"),v=y.getContext("2d"),h=Rn(9),m=Array.from({length:140},()=>({x:h(),y:h()*.9,r:h()<.85?1:2,a:.3+h()*.7,sp:.5+h()*2,ph:h()*6})),g=0,x=0,b=1,T,A=0,R=()=>{let O=n.current.getBoundingClientRect();b=Math.min(window.devicePixelRatio||1,2),g=Math.round(O.width),x=Math.round(O.height);for(let D of[p,y])D.width=g*b,D.height=x*b;l.current.layouts.clear()},F=O=>{let D=l.current.layouts;return D.has(O)||D.set(O,oM(O,t,g,x)),D.get(O)};R();let _=new ResizeObserver(R);_.observe(n.current);let w=O=>{var K;if(T=requestAnimationFrame(w),!u.current)return;let D=l.current;S.setTransform(b,0,0,b,0,0),Math.random()<.002&&(A=1),A*=.9,uM(S,g,x,O,m,A);let k,$=!1;if(D.phase==="unpaint"){let z=nt((O-D.start)/Iy,0,1);k=1-Ws(z),$=!0,z>=1&&(D.shown=D.target,D.phase="paint",D.start=O,k=0,$=!1)}else{let z=nt((O-D.start)/Ly,0,1);k=va(z),z>=1&&D.phase==="paint"&&(D.phase="idle")}let H=F(D.shown);v.setTransform(b,0,0,b,0,0),v.clearRect(0,0,g,x),_c(v,H.strokes,k,{reverse:$,overlap:.45}),aM(v,H,g,x,c.current.logo,c.current.story[(K=H.ch)==null?void 0:K.Chapter]),v.globalCompositeOperation="source-over",H.kind==="title"?lM(v,H,g,x,c.current.logo,$?k:(k-.35)/.65):cM(v,H,g,x,k,$)};return T=requestAnimationFrame(w),()=>{cancelAnimationFrame(T),_.disconnect()}},[t,u]);let d=s>0?t[s-1]:null;return(0,ni.jsxs)("section",{className:"intro",ref:n,style:{height:e},tabIndex:0,"aria-roledescription":"story","aria-label":"Way of the Hado \u2014 story. Use arrow keys or scroll to move between chapters.",children:[(0,ni.jsx)("canvas",{ref:i,className:"layer","aria-hidden":"true"}),(0,ni.jsx)("canvas",{ref:r,className:"layer","aria-hidden":"true"}),(0,ni.jsx)("div",{className:"sr-only","aria-live":"polite",children:d?`Chapter ${d.Chapter}, ${d.Era}: ${d.Title}. ${d.Body}`:"Way of the Hado. A visual history of Street Fighter."}),(0,ni.jsx)("nav",{className:"story-dots","aria-label":"Story chapters",children:Array.from({length:a},(p,y)=>{var S;return(0,ni.jsx)("button",{className:y===s?"on":"",onClick:()=>f(y),"aria-label":y===0?"Title":`Chapter ${y}: ${(S=t[y-1])==null?void 0:S.Title}`,"aria-current":y===s?"step":void 0,children:(0,ni.jsx)("span",{children:y===0?"\u25C6":y})},y)})}),(0,ni.jsxs)("div",{className:`scroll-hint ${s===a-1?"end":""}`,"aria-hidden":"true",children:[s===a-1?"Keep scrolling \u2014 meet the fighters":"Scroll to paint the next chapter",(0,ni.jsx)("span",{className:"chev",children:"\u25BC"})]})]})}var kt=gt(Yn(),1);var um="169";var hM=0,Uy=1,fM=2;var B_=1,dM=2,Hi=3,Cr=0,vn=1,Ln=2,Ar=0,uo=1,Pa=2,Fy=3,Oy=4,pM=5,ns=100,mM=101,gM=102,vM=103,yM=104,_M=200,xM=201,SM=202,MM=203,qd=204,Yd=205,wM=206,EM=207,TM=208,AM=209,bM=210,CM=211,RM=212,PM=213,IM=214,$d=0,Zd=1,Kd=2,mo=3,Jd=4,jd=5,Qd=6,ep=7,hm=0,LM=1,NM=2,br=0,DM=1,UM=2,FM=3,OM=4,kM=5,BM=6,zM=7;var z_=300,go=301,vo=302,tp=303,np=304,Cu=306,Ia=1e3,ss=1001,ip=1002,Lt=1003,fm=1004;var Ec=1005;var oi=1006,dd=1007;var os=1008;var Xi=1009,V_=1010,H_=1011,La=1012,dm=1013,as=1014,_i=1015,Va=1016,pm=1017,mm=1018,yo=1020,G_=35902,W_=1021,X_=1022,ai=1023,q_=1024,Y_=1025,ho=1026,_o=1027,gm=1028,vm=1029,$_=1030,ym=1031;var _m=1033,Zc=33776,Kc=33777,Jc=33778,jc=33779,rp=35840,sp=35841,op=35842,ap=35843,lp=36196,cp=37492,up=37496,hp=37808,fp=37809,dp=37810,pp=37811,mp=37812,gp=37813,vp=37814,yp=37815,_p=37816,xp=37817,Sp=37818,Mp=37819,wp=37820,Ep=37821,Qc=36492,Tp=36494,Ap=36495,Z_=36283,bp=36284,Cp=36285,Rp=36286;var tu=2300,Pp=2301,pd=2302,ky=2400,By=2401,zy=2402;var VM=3200,HM=3201;var K_=0,GM=1,Tr="",mn="srgb",Lr="srgb-linear",xm="display-p3",Ru="display-p3-linear",nu="linear",dt="srgb",iu="rec709",ru="p3";var Ys=7680;var Vy=519,WM=512,XM=513,qM=514,J_=515,YM=516,$M=517,ZM=518,KM=519,Hy=35044;var Gy="300 es",Wi=2e3,su=2001,Rr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var md=Math.PI/180,Ip=180/Math.PI;function Ha(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function gn(t,e,n){return Math.max(e,Math.min(n,t))}function JM(t,e){return(t%e+e)%e}function gd(t,e,n){return(1-n)*t+n*e}function _a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var ke=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],y=i[8],S=r[0],v=r[3],h=r[6],m=r[1],g=r[4],x=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*S+a*m+l*b,s[3]=o*v+a*g+l*T,s[6]=o*h+a*x+l*A,s[1]=c*S+u*m+f*b,s[4]=c*v+u*g+f*T,s[7]=c*h+u*x+f*A,s[2]=d*S+p*m+y*b,s[5]=d*v+p*g+y*T,s[8]=d*h+p*x+y*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,y=n*f+i*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/y;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(vd.makeScale(e,n)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,n){return this.premultiply(vd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vd=new De;function j_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ou(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jM(){let t=ou("canvas");return t.style.display="block",t}var Wy={};function eu(t){t in Wy||(Wy[t]=!0,console.warn(t))}function QM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function ew(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tw(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xy=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qy=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xa={[Lr]:{transfer:nu,primaries:iu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[mn]:{transfer:dt,primaries:iu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ru]:{transfer:nu,primaries:ru,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(qy),fromReference:t=>t.applyMatrix3(Xy)},[xm]:{transfer:dt,primaries:ru,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(qy),fromReference:t=>t.applyMatrix3(Xy).convertLinearToSRGB()}},nw=new Set([Lr,Ru]),Qe={enabled:!0,_workingColorSpace:Lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=xa[e].toReference,r=xa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xa[t].primaries},getTransfer:function(t){return t===Tr?nu:xa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(xa[e].luminanceCoefficients)}};function fo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var $s,Lp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=ou("canvas")),$s.width=e.width,$s.height=e.height;let i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$s}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let n=ou("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fo(n[i]/255)*255):n[i]=fo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iw=0,au=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_d(r[o].image)):s.push(_d(r[o]))}else s=_d(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function _d(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Lp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rw=0,yn=class t extends Rr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ss,r=ss,s=oi,o=os,a=ai,l=Xi,c=t.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Ha(),this.name="",this.source=new au(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=z_;yn.DEFAULT_ANISOTROPY=1;var st=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],y=l[9],S=l[2],v=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(y-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(y+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let g=(c+1)/2,x=(p+1)/2,b=(h+1)/2,T=(u+d)/4,A=(f+S)/4,R=(y+v)/4;return g>x&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-y)*(v-y)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-y)/m,this.y=(f-S)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Np=class extends Rr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new au(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qi=class extends Np{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},lu=class extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dp=class extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],y=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=y,e[n+3]=S;return}if(f!==S||l!==d||c!==p||u!==y){let v=1-a,h=l*d+c*p+u*y+f*S,m=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){let b=Math.sqrt(g),T=Math.atan2(b,h*m);v=Math.sin(v*T)/b,a=Math.sin(a*T)/b}let x=a*m;if(l=l*v+d*x,c=c*v+p*x,u=u*v+y*x,f=f*v+S*x,v===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+u*f+l*p-c*d,e[n+1]=l*y+u*d+c*f-a*p,e[n+2]=c*y+u*p+a*d-l*f,e[n+3]=u*y-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*y,this._y=c*p*f-d*u*y,this._z=c*u*y+d*p*f,this._w=c*u*f-d*p*y;break;case"YXZ":this._x=d*u*f+c*p*y,this._y=c*p*f-d*u*y,this._z=c*u*y-d*p*f,this._w=c*u*f+d*p*y;break;case"ZXY":this._x=d*u*f-c*p*y,this._y=c*p*f+d*u*y,this._z=c*u*y+d*p*f,this._w=c*u*f-d*p*y;break;case"ZYX":this._x=d*u*f-c*p*y,this._y=c*p*f+d*u*y,this._z=c*u*y-d*p*f,this._w=c*u*f+d*p*y;break;case"YZX":this._x=d*u*f+c*p*y,this._y=c*p*f+d*u*y,this._z=c*u*y-d*p*f,this._w=c*u*f-d*p*y;break;case"XZY":this._x=d*u*f-c*p*y,this._y=c*p*f-d*u*y,this._z=c*u*y+d*p*f,this._w=c*u*f+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yy.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xd=new L,Yy=new xi,Yi=class{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tc.copy(i.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Ac.subVectors(this.max,Sa),Zs.subVectors(e.a,Sa),Ks.subVectors(e.b,Sa),Js.subVectors(e.c,Sa),_r.subVectors(Ks,Zs),xr.subVectors(Js,Ks),Zr.subVectors(Zs,Js);let n=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-Zr.z,Zr.y,_r.z,0,-_r.x,xr.z,0,-xr.x,Zr.z,0,-Zr.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-Zr.y,Zr.x,0];return!Sd(n,Zs,Ks,Js,Ac)||(n=[1,0,0,0,1,0,0,0,1],!Sd(n,Zs,Ks,Js,Ac))?!1:(bc.crossVectors(_r,xr),n=[bc.x,bc.y,bc.z],Sd(n,Zs,Ks,Js,Ac))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new L,new L,new L,new L,new L,new L,new L,new L],ii=new L,Tc=new Yi,Zs=new L,Ks=new L,Js=new L,_r=new L,xr=new L,Zr=new L,Sa=new L,Ac=new L,bc=new L,Kr=new L;function Sd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Kr.fromArray(t,s);let a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=n.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var sw=new Yi,Ma=new L,Md=new L,Pr=class{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let n=Ma.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Md)),this.expandByPoint(Ma.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new L,wd=new L,Cc=new L,Sr=new L,Ed=new L,Rc=new L,Td=new L,Na=class{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wd.copy(e).add(n).multiplyScalar(.5),Cc.copy(n).sub(e).normalize(),Sr.copy(this.origin).sub(wd);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Cc),a=Sr.dot(this.direction),l=-Sr.dot(Cc),c=Sr.lengthSq(),u=Math.abs(1-o*o),f,d,p,y;if(u>0)if(f=o*l-a,d=o*a-l,y=s*u,f>=0)if(d>=-y)if(d<=y){let S=1/u;f*=S,d*=S,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-y?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=y?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wd).addScaledVector(Cc,d),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);let i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){Ed.subVectors(n,e),Rc.subVectors(i,e),Td.crossVectors(Ed,Rc);let o=this.direction.dot(Td),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);let l=a*this.direction.dot(Rc.crossVectors(Sr,Rc));if(l<0)return null;let c=a*this.direction.dot(Ed.cross(Sr));if(c<0||l+c>o)return null;let u=-a*Sr.dot(Td);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class t{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,y,S,v){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,y,S,v)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,y,S,v){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=y,h[11]=S,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*f,y=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+y*c,n[5]=d-S*c,n[9]=-a*l,n[2]=S-d*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*f,y=c*u,S=c*f;n[0]=d+S*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-y,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*f,y=c*u,S=c*f;n[0]=d-S*a,n[4]=-o*f,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*u,n[9]=S-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*f,y=a*u,S=a*f;n[0]=l*u,n[4]=y*c-p,n[8]=d*c+S,n[1]=l*f,n[5]=S*c+d,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,y=a*l,S=a*c;n[0]=l*u,n[4]=S-d*f,n[8]=y*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+y,n[10]=d-S*f}else if(e.order==="XZY"){let d=o*l,p=o*c,y=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+S,n[5]=o*u,n[9]=p*f-y,n[2]=y*f-p,n[6]=a*u,n[10]=S*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ow,e,aw)}lookAt(e,n,i){let r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Mr.crossVectors(i,Pn),Mr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Mr.crossVectors(i,Pn)),Mr.normalize(),Pc.crossVectors(Pn,Mr),r[0]=Mr.x,r[4]=Pc.x,r[8]=Pn.x,r[1]=Mr.y,r[5]=Pc.y,r[9]=Pn.y,r[2]=Mr.z,r[6]=Pc.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],y=i[2],S=i[6],v=i[10],h=i[14],m=i[3],g=i[7],x=i[11],b=i[15],T=r[0],A=r[4],R=r[8],F=r[12],_=r[1],w=r[5],O=r[9],D=r[13],k=r[2],$=r[6],H=r[10],K=r[14],z=r[3],se=r[7],Q=r[11],fe=r[15];return s[0]=o*T+a*_+l*k+c*z,s[4]=o*A+a*w+l*$+c*se,s[8]=o*R+a*O+l*H+c*Q,s[12]=o*F+a*D+l*K+c*fe,s[1]=u*T+f*_+d*k+p*z,s[5]=u*A+f*w+d*$+p*se,s[9]=u*R+f*O+d*H+p*Q,s[13]=u*F+f*D+d*K+p*fe,s[2]=y*T+S*_+v*k+h*z,s[6]=y*A+S*w+v*$+h*se,s[10]=y*R+S*O+v*H+h*Q,s[14]=y*F+S*D+v*K+h*fe,s[3]=m*T+g*_+x*k+b*z,s[7]=m*A+g*w+x*$+b*se,s[11]=m*R+g*O+x*H+b*Q,s[15]=m*F+g*D+x*K+b*fe,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],y=e[3],S=e[7],v=e[11],h=e[15];return y*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+S*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+v*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],y=e[12],S=e[13],v=e[14],h=e[15],m=f*v*c-S*d*c+S*l*p-a*v*p-f*l*h+a*d*h,g=y*d*c-u*v*c-y*l*p+o*v*p+u*l*h-o*d*h,x=u*S*c-y*f*c+y*a*p-o*S*p-u*a*h+o*f*h,b=y*f*l-u*S*l-y*a*d+o*S*d+u*a*v-o*f*v,T=n*m+i*g+r*x+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=m*A,e[1]=(S*d*s-f*v*s-S*r*p+i*v*p+f*r*h-i*d*h)*A,e[2]=(a*v*s-S*l*s+S*r*c-i*v*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*v*s-y*d*s+y*r*p-n*v*p-u*r*h+n*d*h)*A,e[6]=(y*l*s-o*v*s-y*r*c+n*v*c+o*r*h-n*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=x*A,e[9]=(y*f*s-u*S*s-y*i*p+n*S*p+u*i*h-n*f*h)*A,e[10]=(o*S*s-y*a*s+y*i*c-n*S*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=b*A,e[13]=(u*S*r-y*f*r+y*i*d-n*S*d-u*i*v+n*f*v)*A,e[14]=(y*a*r-o*S*r-y*i*l+n*S*l+o*i*v-n*a*v)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,y=s*f,S=o*u,v=o*f,h=a*f,m=l*c,g=l*u,x=l*f,b=i.x,T=i.y,A=i.z;return r[0]=(1-(S+h))*b,r[1]=(p+x)*b,r[2]=(y-g)*b,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(d+h))*T,r[6]=(v+m)*T,r[7]=0,r[8]=(y+g)*A,r[9]=(v-m)*A,r[10]=(1-(d+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=js.set(r[0],r[1],r[2]).length(),o=js.set(r[4],r[5],r[6]).length(),a=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let c=1/s,u=1/o,f=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,n.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Wi){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),p,y;if(a===Wi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===su)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Wi){let l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u,y,S;if(a===Wi)y=(o+s)*f,S=-2*f;else if(a===su)y=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},js=new L,ri=new it,ow=new L(0,0,0),aw=new L(1,1,1),Mr=new L,Pc=new L,Pn=new L,$y=new it,Zy=new xi,Gn=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $y.makeRotationFromQuaternion(e),this.setFromRotationMatrix($y,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zy.setFromEuler(this),this.setFromQuaternion(Zy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lw=0,Ky=new L,Qs=new xi,Bi=new it,Ic=new L,wa=new L,cw=new L,uw=new xi,Jy=new L(1,0,0),jy=new L(0,1,0),Qy=new L(0,0,1),e_={type:"added"},hw={type:"removed"},eo={type:"childadded",child:null},Ad={type:"childremoved",child:null},sn=class t extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new L,n=new Gn,i=new xi,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new De}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,n){return Qs.setFromAxisAngle(e,n),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Jy,e)}rotateY(e){return this.rotateOnAxis(jy,e)}rotateZ(e){return this.rotateOnAxis(Qy,e)}translateOnAxis(e,n){return Ky.copy(e).applyQuaternion(this.quaternion),this.position.add(Ky.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jy,e)}translateY(e){return this.translateOnAxis(jy,e)}translateZ(e){return this.translateOnAxis(Qy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ic.copy(e):Ic.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(wa,Ic,this.up):Bi.lookAt(Ic,wa,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Qs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hw),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,uw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};sn.DEFAULT_UP=new L(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new L,zi=new L,bd=new L,Vi=new L,to=new L,no=new L,t_=new L,Cd=new L,Rd=new L,Pd=new L,Id=new st,Ld=new st,Nd=new st,is=class t{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),zi.subVectors(i,n),bd.subVectors(e,n);let o=si.dot(si),a=si.dot(zi),l=si.dot(bd),c=zi.dot(zi),u=zi.dot(bd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(c*l-a*u)*d,y=(o*u-a*l)*d;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Id.setScalar(0),Ld.setScalar(0),Nd.setScalar(0),Id.fromBufferAttribute(e,n),Ld.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Id,s.x),o.addScaledVector(Ld,s.y),o.addScaledVector(Nd,s.z),o}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),zi.subVectors(e,n),si.cross(zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),si.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;to.subVectors(r,i),no.subVectors(s,i),Cd.subVectors(e,i);let l=to.dot(Cd),c=no.dot(Cd);if(l<=0&&c<=0)return n.copy(i);Rd.subVectors(e,r);let u=to.dot(Rd),f=no.dot(Rd);if(u>=0&&f<=u)return n.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(to,o);Pd.subVectors(e,s);let p=to.dot(Pd),y=no.dot(Pd);if(y>=0&&p<=y)return n.copy(s);let S=p*c-l*y;if(S<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(no,a);let v=u*y-p*f;if(v<=0&&f-u>=0&&p-y>=0)return t_.subVectors(s,r),a=(f-u)/(f-u+(p-y)),n.copy(r).addScaledVector(t_,a);let h=1/(v+S+d);return o=S*h,a=d*h,n.copy(i).addScaledVector(to,o).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Fe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=JM(e,1),n=gn(n,0,1),i=gn(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dd(o,s,e+1/3),this.g=Dd(o,s,e),this.b=Dd(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mn){let i=Q_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=yd(e.r),this.g=yd(e.g),this.b=yd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Qe.fromWorkingColorSpace(Zt.copy(this),e),Math.round(gn(Zt.r*255,0,255))*65536+Math.round(gn(Zt.g*255,0,255))*256+Math.round(gn(Zt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Zt.copy(this),n);let i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=mn){Qe.fromWorkingColorSpace(Zt.copy(this),e);let n=Zt.r,i=Zt.g,r=Zt.b;return e!==mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+n,wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wr),e.getHSL(Lc);let i=gd(wr.h,Lc.h,n),r=gd(wr.s,Lc.s,n),s=gd(wr.l,Lc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Fe;Fe.NAMES=Q_;var fw=0,Ir=class extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=uo,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},li=class extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new L,Nc=new ke,Nn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hy,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nc.fromBufferAttribute(this,n),Nc.applyMatrix3(e),this.setXY(n,Nc.x,Nc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_a(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_a(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_a(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_a(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hy&&(e.usage=this.usage),e}};var cu=class extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var uu=class extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var rn=class extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}},dw=0,Hn=new it,Ud=new sn,io=new L,In=new Yi,Ea=new Yi,Ot=new L,Wn=class t extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?uu:cu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(In.min,Ea.min),In.expandByPoint(Ot),Ot.addVectors(In.max,Ea.max),In.expandByPoint(Ot)):(In.expandByPoint(Ea.min),In.expandByPoint(Ea.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(e,c),Ot.add(io)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new L,l[R]=new L;let c=new L,u=new L,f=new L,d=new ke,p=new ke,y=new ke,S=new L,v=new L;function h(R,F,_){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,F),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,F),y.fromBufferAttribute(s,_),u.sub(c),f.sub(c),p.sub(d),y.sub(d);let w=1/(p.x*y.y-y.x*p.y);isFinite(w)&&(S.copy(u).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(w),v.copy(f).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(w),a[R].add(S),a[F].add(S),a[_].add(S),l[R].add(v),l[F].add(v),l[_].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,F=m.length;R<F;++R){let _=m[R],w=_.start,O=_.count;for(let D=w,k=w+O;D<k;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let g=new L,x=new L,b=new L,T=new L;function A(R){b.fromBufferAttribute(r,R),T.copy(b);let F=a[R];g.copy(F),g.sub(b.multiplyScalar(b.dot(F))).normalize(),x.crossVectors(T,F);let w=x.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,w)}for(let R=0,F=m.length;R<F;++R){let _=m[R],w=_.start,O=_.count;for(let D=w,k=w+O;D<k;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let y=e.getX(d+0),S=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,v),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),p=0,y=0;for(let S=0,v=l.length;S<v;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let h=0;h<u;h++)d[y++]=c[p++]}return new Nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},n_=new it,Jr=new Na,Dc=new Pr,i_=new L,Uc=new L,Fc=new L,Oc=new L,Fd=new L,kc=new L,r_=new L,Bc=new L,Mt=class extends sn{constructor(e=new Wn,n=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){kc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(Fd.fromBufferAttribute(f,e),o?kc.addScaledVector(Fd,u):kc.addScaledVector(Fd.sub(n),u))}n.add(kc)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Dc.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Dc,i_)===null||Jr.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(n_),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,S=d.length;y<S;y++){let v=d[y],h=o[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,b=g;x<b;x+=3){let T=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);r=zc(this,h,e,i,c,u,f,T,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{let y=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let v=y,h=S;v<h;v+=3){let m=a.getX(v),g=a.getX(v+1),x=a.getX(v+2);r=zc(this,o,e,i,c,u,f,m,g,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,S=d.length;y<S;y++){let v=d[y],h=o[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,b=g;x<b;x+=3){let T=x,A=x+1,R=x+2;r=zc(this,h,e,i,c,u,f,T,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{let y=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let v=y,h=S;v<h;v+=3){let m=v,g=v+1,x=v+2;r=zc(this,o,e,i,c,u,f,m,g,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}};function pw(t,e,n,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cr,a),l===null)return null;Bc.copy(a),Bc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Bc);return c<n.near||c>n.far?null:{distance:c,point:Bc.clone(),object:t}}function zc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Uc),t.getVertexPosition(l,Fc),t.getVertexPosition(c,Oc);let u=pw(t,e,n,i,Uc,Fc,Oc,r_);if(u){let f=new L;is.getBarycoord(r_,Uc,Fc,Oc,f),r&&(u.uv=is.getInterpolatedAttribute(r,a,l,c,f,new ke)),s&&(u.uv1=is.getInterpolatedAttribute(s,a,l,c,f,new ke)),o&&(u.normal=is.getInterpolatedAttribute(o,a,l,c,f,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};is.getNormal(Uc,Fc,Oc,d.normal),u.face=d,u.barycoord=f}return u}var Ua=class t extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function y(S,v,h,m,g,x,b,T,A,R,F){let _=x/A,w=b/R,O=x/2,D=b/2,k=T/2,$=A+1,H=R+1,K=0,z=0,se=new L;for(let Q=0;Q<H;Q++){let fe=Q*w-D;for(let Oe=0;Oe<$;Oe++){let ze=Oe*_-O;se[S]=ze*m,se[v]=fe*g,se[h]=k,c.push(se.x,se.y,se.z),se[S]=0,se[v]=0,se[h]=T>0?1:-1,u.push(se.x,se.y,se.z),f.push(Oe/A),f.push(1-Q/R),K+=1}}for(let Q=0;Q<R;Q++)for(let fe=0;fe<A;fe++){let Oe=d+fe+$*Q,ze=d+fe+$*(Q+1),X=d+(fe+1)+$*(Q+1),ee=d+(fe+1)+$*Q;l.push(Oe,ze,ee),l.push(ze,X,ee),z+=6}a.addGroup(p,z,F),p+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xo(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){let e={};for(let n=0;n<t.length;n++){let i=xo(t[n]);for(let r in i)e[r]=i[r]}return e}function mw(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ex(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var gw={clone:xo,merge:nn},vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=mw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},hu=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Er=new L,s_=new ke,o_=new ke,Kt=class extends hu{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Ip*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ip*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,n){return this.getViewBounds(e,s_,o_),n.subVectors(o_,s_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(md*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ro=-90,so=1,Up=class extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(ro,so,e,n);r.layers=this.layers,this.add(r);let s=new Kt(ro,so,e,n);s.layers=this.layers,this.add(s);let o=new Kt(ro,so,e,n);o.layers=this.layers,this.add(o);let a=new Kt(ro,so,e,n);a.layers=this.layers,this.add(a);let l=new Kt(ro,so,e,n);l.layers=this.layers,this.add(l);let c=new Kt(ro,so,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===su)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},fu=class extends yn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:go,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fp=class extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fu(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ar});s.uniforms.tEquirect.value=n;let o=new Mt(r,s),a=n.minFilter;return n.minFilter===os&&(n.minFilter=oi),new Up(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},Od=new L,_w=new L,xw=new De,Gi=class{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Od.subVectors(i,n).cross(_w.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||xw.getNormalMatrix(e),r=this.coplanarPoint(Od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jr=new Pr,Vc=new L,Fa=class{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],y=r[9],S=r[10],v=r[11],h=r[12],m=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,v-p,x-h).normalize(),i[1].setComponents(l+s,d+c,v+p,x+h).normalize(),i[2].setComponents(l+o,d+u,v+y,x+m).normalize(),i[3].setComponents(l-o,d-u,v-y,x-m).normalize(),i[4].setComponents(l-a,d-f,v-S,x-g).normalize(),n===Wi)i[5].setComponents(l+a,d+f,v+S,x+g).normalize();else if(n===su)i[5].setComponents(a,f,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Vc.x=r.normal.x>0?e.max.x:e.min.x,Vc.y=r.normal.y>0?e.max.y:e.min.y,Vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Sw(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,y)=>p.start-y.start);let d=0;for(let p=1;p<f.length;p++){let y=f[d],S=f[p];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,y=f.length;p<y;p++){let S=f[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ci=class t extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],y=[],S=[],v=[];for(let h=0;h<u;h++){let m=h*d-o;for(let g=0;g<c;g++){let x=g*f-s;y.push(x,-m,0),S.push(0,0,1),v.push(g/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){let g=m+c*h,x=m+c*(h+1),b=m+1+c*(h+1),T=m+1+c*h;p.push(g,x,T),p.push(x,b,T)}this.setIndex(p),this.setAttribute("position",new rn(y,3)),this.setAttribute("normal",new rn(S,3)),this.setAttribute("uv",new rn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Mw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ww=`#ifdef USE_ALPHAHASH
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
#endif`,Ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Aw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cw=`#ifdef USE_AOMAP
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
#endif`,Rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pw=`#ifdef USE_BATCHING
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
#endif`,Iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uw=`#ifdef USE_IRIDESCENCE
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
#endif`,Fw=`#ifdef USE_BUMPMAP
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
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xw=`#define PI 3.141592653589793
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
} // validated`,qw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yw=`vec3 transformedNormal = objectNormal;
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
#endif`,$w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qw=`
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
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,sE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
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
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
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
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
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
#endif`,xE=`struct PhysicalMaterial {
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
}`,SE=`
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
#endif`,ME=`#if defined( RE_IndirectDiffuse )
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IE=`#if defined( USE_POINTS_UV )
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
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,aT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
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
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MT=`uniform sampler2D t2D;
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
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
}`,CT=`#if DEPTH_PACKING == 3200
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
}`,RT=`#define DISTANCE
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
}`,PT=`#define DISTANCE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`uniform float scale;
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
}`,DT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,FT=`uniform vec3 diffuse;
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
}`,OT=`#define LAMBERT
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
}`,kT=`#define LAMBERT
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
}`,BT=`#define MATCAP
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
}`,zT=`#define MATCAP
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
}`,VT=`#define NORMAL
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
}`,HT=`#define NORMAL
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
}`,GT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,XT=`#define STANDARD
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
}`,qT=`#define STANDARD
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
}`,YT=`#define TOON
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
}`,$T=`#define TOON
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
}`,ZT=`uniform float size;
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
}`,KT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,jT=`uniform vec3 color;
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
}`,QT=`uniform float rotation;
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
}`,eA=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Mw,alphahash_pars_fragment:ww,alphamap_fragment:Ew,alphamap_pars_fragment:Tw,alphatest_fragment:Aw,alphatest_pars_fragment:bw,aomap_fragment:Cw,aomap_pars_fragment:Rw,batching_pars_vertex:Pw,batching_vertex:Iw,begin_vertex:Lw,beginnormal_vertex:Nw,bsdfs:Dw,iridescence_fragment:Uw,bumpmap_pars_fragment:Fw,clipping_planes_fragment:Ow,clipping_planes_pars_fragment:kw,clipping_planes_pars_vertex:Bw,clipping_planes_vertex:zw,color_fragment:Vw,color_pars_fragment:Hw,color_pars_vertex:Gw,color_vertex:Ww,common:Xw,cube_uv_reflection_fragment:qw,defaultnormal_vertex:Yw,displacementmap_pars_vertex:$w,displacementmap_vertex:Zw,emissivemap_fragment:Kw,emissivemap_pars_fragment:Jw,colorspace_fragment:jw,colorspace_pars_fragment:Qw,envmap_fragment:eE,envmap_common_pars_fragment:tE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:rE,fog_vertex:sE,fog_pars_vertex:oE,fog_fragment:aE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:fE,lights_pars_begin:dE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:yE,lights_physical_fragment:_E,lights_physical_pars_fragment:xE,lights_fragment_begin:SE,lights_fragment_maps:ME,lights_fragment_end:wE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:bE,map_fragment:CE,map_pars_fragment:RE,map_particle_fragment:PE,map_particle_pars_fragment:IE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:NE,morphinstance_vertex:DE,morphcolor_vertex:UE,morphnormal_vertex:FE,morphtarget_pars_vertex:OE,morphtarget_vertex:kE,normal_fragment_begin:BE,normal_fragment_maps:zE,normal_pars_fragment:VE,normal_pars_vertex:HE,normal_vertex:GE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:YE,iridescence_pars_fragment:$E,opaque_fragment:ZE,packing:KE,premultiplied_alpha_fragment:JE,project_vertex:jE,dithering_fragment:QE,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:rT,shadowmap_vertex:sT,shadowmask_pars_fragment:oT,skinbase_vertex:aT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:hT,specularmap_pars_fragment:fT,tonemapping_fragment:dT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:vT,uv_pars_vertex:yT,uv_vertex:_T,worldpos_vertex:xT,background_vert:ST,background_frag:MT,backgroundCube_vert:wT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:AT,depth_vert:bT,depth_frag:CT,distanceRGBA_vert:RT,distanceRGBA_frag:PT,equirect_vert:IT,equirect_frag:LT,linedashed_vert:NT,linedashed_frag:DT,meshbasic_vert:UT,meshbasic_frag:FT,meshlambert_vert:OT,meshlambert_frag:kT,meshmatcap_vert:BT,meshmatcap_frag:zT,meshnormal_vert:VT,meshnormal_frag:HT,meshphong_vert:GT,meshphong_frag:WT,meshphysical_vert:XT,meshphysical_frag:qT,meshtoon_vert:YT,meshtoon_frag:$T,points_vert:ZT,points_frag:KT,shadow_vert:JT,shadow_frag:jT,sprite_vert:QT,sprite_frag:eA},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},yi={basic:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:nn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:nn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:nn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:nn([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:nn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:nn([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:nn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:nn([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:nn([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:nn([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};yi.physical={uniforms:nn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Hc={r:0,b:0,g:0},Qr=new Gn,tA=new it;function nA(t,e,n,i,r,s,o){let a=new Fe(0),l=s===!0?0:1,c,u,f=null,d=0,p=null;function y(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?n:e).get(g)),g}function S(m){let g=!1,x=y(m);x===null?h(a,l):x&&x.isColor&&(h(x,1),g=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(m,g){let x=y(g);x&&(x.isCubeTexture||x.mapping===Cu)?(u===void 0&&(u=new Mt(new Ua(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:xo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qr.copy(g.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Qr)),u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==dt,(f!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Mt(new ci(2,2),new Si({name:"BackgroundMaterial",uniforms:xo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function h(m,g){m.getRGB(Hc,ex(t)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(a,l)},render:S,addToRenderList:v}}function iA(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(_,w,O,D,k){let $=!1,H=f(D,O,w);s!==H&&(s=H,c(s.object)),$=p(_,D,O,k),$&&y(_,D,O,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(_,w,O,D),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,w,O){let D=O.wireframe===!0,k=i[_.id];k===void 0&&(k={},i[_.id]=k);let $=k[w.id];$===void 0&&($={},k[w.id]=$);let H=$[D];return H===void 0&&(H=d(l()),$[D]=H),H}function d(_){let w=[],O=[],D=[];for(let k=0;k<n;k++)w[k]=0,O[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:D,object:_,attributes:{},index:null}}function p(_,w,O,D){let k=s.attributes,$=w.attributes,H=0,K=O.getAttributes();for(let z in K)if(K[z].location>=0){let Q=k[z],fe=$[z];if(fe===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor)),Q===void 0||Q.attribute!==fe||fe&&Q.data!==fe.data)return!0;H++}return s.attributesNum!==H||s.index!==D}function y(_,w,O,D){let k={},$=w.attributes,H=0,K=O.getAttributes();for(let z in K)if(K[z].location>=0){let Q=$[z];Q===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));let fe={};fe.attribute=Q,Q&&Q.data&&(fe.data=Q.data),k[z]=fe,H++}s.attributes=k,s.attributesNum=H,s.index=D}function S(){let _=s.newAttributes;for(let w=0,O=_.length;w<O;w++)_[w]=0}function v(_){h(_,0)}function h(_,w){let O=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;O[_]=1,D[_]===0&&(t.enableVertexAttribArray(_),D[_]=1),k[_]!==w&&(t.vertexAttribDivisor(_,w),k[_]=w)}function m(){let _=s.newAttributes,w=s.enabledAttributes;for(let O=0,D=w.length;O<D;O++)w[O]!==_[O]&&(t.disableVertexAttribArray(O),w[O]=0)}function g(_,w,O,D,k,$,H){H===!0?t.vertexAttribIPointer(_,w,O,k,$):t.vertexAttribPointer(_,w,O,D,k,$)}function x(_,w,O,D){S();let k=D.attributes,$=O.getAttributes(),H=w.defaultAttributeValues;for(let K in $){let z=$[K];if(z.location>=0){let se=k[K];if(se===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),se!==void 0){let Q=se.normalized,fe=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;let ze=Oe.buffer,X=Oe.type,ee=Oe.bytesPerElement,ye=X===t.INT||X===t.UNSIGNED_INT||se.gpuType===dm;if(se.isInterleavedBufferAttribute){let de=se.data,Ie=de.stride,Te=se.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<z.locationSize;Ge++)h(z.location+Ge,de.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<z.locationSize;Ge++)v(z.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ge=0;Ge<z.locationSize;Ge++)g(z.location+Ge,fe/z.locationSize,X,Q,Ie*ee,(Te+fe/z.locationSize*Ge)*ee,ye)}else{if(se.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)h(z.location+de,se.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let de=0;de<z.locationSize;de++)v(z.location+de);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let de=0;de<z.locationSize;de++)g(z.location+de,fe/z.locationSize,X,Q,fe*ee,fe/z.locationSize*de*ee,ye)}}else if(H!==void 0){let Q=H[K];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(z.location,Q);break;case 3:t.vertexAttrib3fv(z.location,Q);break;case 4:t.vertexAttrib4fv(z.location,Q);break;default:t.vertexAttrib1fv(z.location,Q)}}}}m()}function b(){R();for(let _ in i){let w=i[_];for(let O in w){let D=w[O];for(let k in D)u(D[k].object),delete D[k];delete w[O]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;let w=i[_.id];for(let O in w){let D=w[O];for(let k in D)u(D[k].object),delete D[k];delete w[O]}delete i[_.id]}function A(_){for(let w in i){let O=i[w];if(O[_.id]===void 0)continue;let D=O[_.id];for(let k in D)u(D[k].object),delete D[k];delete O[_.id]}}function R(){F(),o=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:v,disableUnusedAttributes:m}}function rA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let y=0;y<f;y++)p+=u[y];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],u[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let y=0;for(let S=0;S<f;S++)y+=u[S];for(let S=0;S<d.length;S++)n.update(y,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=y>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:b,maxSamples:T}}function oA(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Gi,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){let y=f.clippingPlanes,S=f.clipIntersection,v=f.clipShadows,h=t.get(f);if(!r||y===null||y.length===0||s&&!v)s?u(null):c();else{let m=s?0:i,g=m*4,x=h.clippingState||null;l.value=x,x=u(y,d,g,p);for(let b=0;b!==g;++b)x[b]=n[b];h.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,y){let S=f!==null?f.length:0,v=null;if(S!==0){if(v=l.value,y!==!0||v===null){let h=p+S*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<h)&&(v=new Float32Array(h));for(let g=0,x=p;g!==S;++g,x+=4)o.copy(f[g]).applyMatrix4(m,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,v}}function aA(t){let e=new WeakMap;function n(o,a){return a===tp?o.mapping=go:a===np&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===tp||a===np)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Fp(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var du=class extends hu{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},lo=4,a_=[.125,.215,.35,.446,.526,.582],rs=20,kd=new du,l_=new Fe,Bd=null,zd=0,Vd=0,Hd=!1,ts=(1+Math.sqrt(5))/2,oo=1/ts,c_=[new L(-ts,oo,0),new L(ts,oo,0),new L(-oo,0,ts),new L(oo,0,ts),new L(0,ts,-oo),new L(0,ts,oo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],pu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,zd,Vd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,Gc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===go||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Va,format:ai,colorSpace:Lr,depthBuffer:!1},r=u_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u_(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lA(s)),this._blurMaterial=cA(s,e,n)}return r}_compileMaterial(e){let n=new Mt(this._lodPlanes[0],e);this._renderer.compile(n,kd)}_sceneToCubeUV(e,n,i,r){let a=new Kt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(l_),u.toneMapping=br,u.autoClear=!1;let p=new li({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),y=new Mt(new Ua,p),S=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,S=!0):(p.color.copy(l_),S=!0);for(let h=0;h<6;h++){let m=h%3;m===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):m===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let g=this._cubeSize;Gc(r,m*g,h>2?g:0,g,g),u.setRenderTarget(r),S&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===go||e.mapping===vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Gc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,kd)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=c_[(r-s-1)%c_.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Mt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),S=s/y,v=isFinite(s)?1+Math.floor(u*S):rs;v>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${rs}`);let h=[],m=0;for(let A=0;A<rs;++A){let R=A/S,F=Math.exp(-R*R/2);h.push(F),A===0?m+=F:A<v&&(m+=2*F)}for(let A=0;A<h.length;A++)h[A]=h[A]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:g}=this;d.dTheta.value=y,d.mipInt.value=g-i;let x=this._sizeLods[r],b=3*x*(r>g-lo?r-g+lo:0),T=4*(this._cubeSize-x);Gc(n,b,T,3*x,2*x),l.setRenderTarget(n),l.render(f,kd)}};function lA(t){let e=[],n=[],i=[],r=t,s=t-lo+1+a_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-lo?l=a_[o-t+lo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,y=6,S=3,v=2,h=1,m=new Float32Array(S*y*p),g=new Float32Array(v*y*p),x=new Float32Array(h*y*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,R=T>2?0:-1,F=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];m.set(F,S*y*T),g.set(d,v*y*T);let _=[T,T,T,T,T,T];x.set(_,h*y*T)}let b=new Wn;b.setAttribute("position",new Nn(m,S)),b.setAttribute("uv",new Nn(g,v)),b.setAttribute("faceIndex",new Nn(x,h)),e.push(b),r>lo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function u_(t,e,n){let i=new qi(t,e,n);return i.texture.mapping=Cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cA(t,e,n){let i=new Float32Array(rs),r=new L(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function h_(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function f_(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Sm(){return`

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
	`}function uA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===tp||l===np,u=l===go||l===vo;if(c||u){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new pu(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new pu(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hA(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&eu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fA(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let y in d.attributes)e.remove(d.attributes[y]);for(let y in d.morphAttributes){let S=d.morphAttributes[y];for(let v=0,h=S.length;v<h;v++)e.remove(S[v])}d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let y in d)e.update(d[y],t.ARRAY_BUFFER);let p=f.morphAttributes;for(let y in p){let S=p[y];for(let v=0,h=S.length;v<h;v++)e.update(S[v],t.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,y=f.attributes.position,S=0;if(p!==null){let m=p.array;S=p.version;for(let g=0,x=m.length;g<x;g+=3){let b=m[g+0],T=m[g+1],A=m[g+2];d.push(b,T,T,A,A,b)}}else if(y!==void 0){let m=y.array;S=y.version;for(let g=0,x=m.length/3-1;g<x;g+=3){let b=g+0,T=g+1,A=g+2;d.push(b,T,T,A,A,b)}}else return;let v=new(j_(d)?uu:cu)(d,1);v.version=S;let h=s.get(f);h&&e.remove(h),s.set(f,v)}function u(f){let d=s.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function dA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,d*o,y),n.update(p,i,y))}function u(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,y);let v=0;for(let h=0;h<y;h++)v+=p[h];n.update(v,i,1)}function f(d,p,y,S){if(y===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],S[h]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,y);let h=0;for(let m=0;m<y;m++)h+=p[m];for(let m=0;m<S.length;m++)n.update(h,i,S[m])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pA(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mA(t,e,n){let i=new WeakMap,r=new st;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let F=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],g=0;p===!0&&(g=1),y===!0&&(g=2),S===!0&&(g=3);let x=a.attributes.position.count*g,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*b*4*f),A=new lu(T,x,b,f);A.type=_i,A.needsUpdate=!0;let R=g*4;for(let _=0;_<f;_++){let w=v[_],O=h[_],D=m[_],k=x*b*4*_;for(let $=0;$<w.count;$++){let H=$*R;p===!0&&(r.fromBufferAttribute(w,$),T[k+H+0]=r.x,T[k+H+1]=r.y,T[k+H+2]=r.z,T[k+H+3]=0),y===!0&&(r.fromBufferAttribute(O,$),T[k+H+4]=r.x,T[k+H+5]=r.y,T[k+H+6]=r.z,T[k+H+7]=0),S===!0&&(r.fromBufferAttribute(D,$),T[k+H+8]=r.x,T[k+H+9]=r.y,T[k+H+10]=r.z,T[k+H+11]=D.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new ke(x,b)},i.set(a,d),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let y=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function gA(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var mu=class extends yn{constructor(e,n,i,r,s,o,a,l,c,u=ho){if(u!==ho&&u!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ho&&(i=as),i===void 0&&u===_o&&(i=yo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},nx=new yn,d_=new mu(1,1),ix=new lu,rx=new Dp,sx=new fu,p_=[],m_=[],g_=new Float32Array(16),v_=new Float32Array(9),y_=new Float32Array(4);function wo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=p_[r];if(s===void 0&&(s=new Float32Array(r),p_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pu(t,e){let n=m_[e];n===void 0&&(n=new Int32Array(e),m_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function _A(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function xA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function SA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;y_.set(i),t.uniformMatrix2fv(this.addr,!1,y_),Dt(n,i)}}function MA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;v_.set(i),t.uniformMatrix3fv(this.addr,!1,v_),Dt(n,i)}}function wA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;g_.set(i),t.uniformMatrix4fv(this.addr,!1,g_),Dt(n,i)}}function EA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function AA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function bA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function CA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function PA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function IA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function LA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(d_.compareFunction=J_,s=d_):s=nx,n.setTexture2D(e||s,r)}function NA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rx,r)}function DA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sx,r)}function UA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ix,r)}function FA(t){switch(t){case 5126:return vA;case 35664:return yA;case 35665:return _A;case 35666:return xA;case 35674:return SA;case 35675:return MA;case 35676:return wA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return bA;case 5125:return CA;case 36294:return RA;case 36295:return PA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}function OA(t,e){t.uniform1fv(this.addr,e)}function kA(t,e){let n=wo(e,this.size,2);t.uniform2fv(this.addr,n)}function BA(t,e){let n=wo(e,this.size,3);t.uniform3fv(this.addr,n)}function zA(t,e){let n=wo(e,this.size,4);t.uniform4fv(this.addr,n)}function VA(t,e){let n=wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HA(t,e){let n=wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GA(t,e){let n=wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WA(t,e){t.uniform1iv(this.addr,e)}function XA(t,e){t.uniform2iv(this.addr,e)}function qA(t,e){t.uniform3iv(this.addr,e)}function YA(t,e){t.uniform4iv(this.addr,e)}function $A(t,e){t.uniform1uiv(this.addr,e)}function ZA(t,e){t.uniform2uiv(this.addr,e)}function KA(t,e){t.uniform3uiv(this.addr,e)}function JA(t,e){t.uniform4uiv(this.addr,e)}function jA(t,e,n){let i=this.cache,r=e.length,s=Pu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||nx,s[o])}function QA(t,e,n){let i=this.cache,r=e.length,s=Pu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rx,s[o])}function eb(t,e,n){let i=this.cache,r=e.length,s=Pu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sx,s[o])}function tb(t,e,n){let i=this.cache,r=e.length,s=Pu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ix,s[o])}function nb(t){switch(t){case 5126:return OA;case 35664:return kA;case 35665:return BA;case 35666:return zA;case 35674:return VA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return XA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return $A;case 36294:return ZA;case 36295:return KA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}var Op=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=FA(n.type)}},kp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nb(n.type)}},Bp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Gd=/(\w+)(\])?(\[|\.)?/g;function __(t,e){t.seq.push(e),t.map[e.id]=e}function ib(t,e,n){let i=t.name,r=i.length;for(Gd.lastIndex=0;;){let s=Gd.exec(i),o=Gd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){__(n,c===void 0?new Op(a,t,e):new kp(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Bp(a),__(n,f)),n=f}}}var po=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ib(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function x_(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var rb=37297,sb=0;function ob(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ab(t){let e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t),i;switch(e===n?i="":e===ru&&n===iu?i="LinearDisplayP3ToLinearSRGB":e===iu&&n===ru&&(i="LinearSRGBToLinearDisplayP3"),t){case Lr:case Ru:return[i,"LinearTransferOETF"];case mn:case xm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function S_(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ob(t.getShaderSource(e),o)}else return r}function lb(t,e){let n=ab(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cb(t,e){let n;switch(e){case DM:n="Linear";break;case UM:n="Reinhard";break;case FM:n="Cineon";break;case OM:n="ACESFilmic";break;case BM:n="AgX";break;case zM:n="Neutral";break;case kM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Wc=new L;function ub(){Qe.getLuminanceCoefficients(Wc);let t=Wc.x.toFixed(4),e=Wc.y.toFixed(4),n=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function fb(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function db(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ca(t){return t!==""}function M_(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(t){return t.replace(pb,gb)}var mb=new Map;function gb(t,e){let n=Ne[e];if(n===void 0){let i=mb.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zp(n)}var vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(t){return t.replace(vb,yb)}function yb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function T_(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function _b(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function xb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case go:case vo:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function Mb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hm:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case NM:e="ENVMAP_BLENDING_ADD";break}return e}function wb(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Eb(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=_b(n),c=xb(n),u=Sb(n),f=Mb(n),d=wb(n),p=hb(n),y=fb(s),S=r.createProgram(),v,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ca).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ca).join(`
`),h.length>0&&(h+=`
`)):(v=[T_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),h=[T_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?Ne.tonemapping_pars_fragment:"",n.toneMapping!==br?cb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,lb("linearToOutputTexel",n.outputColorSpace),ub(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),o=zp(o),o=M_(o,n),o=w_(o,n),a=zp(a),a=M_(a,n),a=w_(a,n),o=E_(o),a=E_(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===Gy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let g=m+v+o,x=m+h+a,b=x_(r,r.VERTEX_SHADER,g),T=x_(r,r.FRAGMENT_SHADER,x);r.attachShader(S,b),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(w){if(t.debug.checkShaderErrors){let O=r.getProgramInfoLog(S).trim(),D=r.getShaderInfoLog(b).trim(),k=r.getShaderInfoLog(T).trim(),$=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,T);else{let K=S_(r,b,"vertex"),z=S_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+K+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||k==="")&&(H=!1);H&&(w.diagnostics={runnable:$,programLog:O,vertexShader:{log:D,prefix:v},fragmentShader:{log:k,prefix:h}})}r.deleteShader(b),r.deleteShader(T),R=new po(r,S),F=db(r,S)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let F;this.getAttributes=function(){return F===void 0&&A(this),F};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(S,rb)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}var Tb=0,Vp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Hp(e),n.set(e,i)),i}},Hp=class{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}};function Ab(t,e,n,i,r,s,o){let a=new Da,l=new Vp,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures,y=r.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,w,O,D,k){let $=D.fog,H=k.geometry,K=_.isMeshStandardMaterial?D.environment:null,z=(_.isMeshStandardMaterial?n:e).get(_.envMap||K),se=z&&z.mapping===Cu?z.image.height:null,Q=S[_.type];_.precision!==null&&(y=r.getMaxPrecision(_.precision),y!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",y,"instead."));let fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Oe=fe!==void 0?fe.length:0,ze=0;H.morphAttributes.position!==void 0&&(ze=1),H.morphAttributes.normal!==void 0&&(ze=2),H.morphAttributes.color!==void 0&&(ze=3);let X,ee,ye,de;if(Q){let an=yi[Q];X=an.vertexShader,ee=an.fragmentShader}else X=_.vertexShader,ee=_.fragmentShader,l.update(_),ye=l.getVertexShaderID(_),de=l.getFragmentShaderID(_);let Ie=t.getRenderTarget(),Te=k.isInstancedMesh===!0,Ge=k.isBatchedMesh===!0,rt=!!_.map,We=!!_.matcap,P=!!z,xn=!!_.aoMap,Ve=!!_.lightMap,$e=!!_.bumpMap,be=!!_.normalMap,ct=!!_.displacementMap,Pe=!!_.emissiveMap,C=!!_.metalnessMap,M=!!_.roughnessMap,B=_.anisotropy>0,Y=_.clearcoat>0,J=_.dispersion>0,q=_.iridescence>0,xe=_.sheen>0,oe=_.transmission>0,pe=B&&!!_.anisotropyMap,Ze=Y&&!!_.clearcoatMap,te=Y&&!!_.clearcoatNormalMap,me=Y&&!!_.clearcoatRoughnessMap,Ce=q&&!!_.iridescenceMap,Re=q&&!!_.iridescenceThicknessMap,ge=xe&&!!_.sheenColorMap,He=xe&&!!_.sheenRoughnessMap,Le=!!_.specularMap,ot=!!_.specularColorMap,I=!!_.specularIntensityMap,ce=oe&&!!_.transmissionMap,W=oe&&!!_.thicknessMap,Z=!!_.gradientMap,ae=!!_.alphaMap,ue=_.alphaTest>0,Xe=!!_.alphaHash,At=!!_.extensions,on=br;_.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(on=t.toneMapping);let Ke={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:ee,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&k._colorsTexture!==null,instancing:Te,instancingColor:Te&&k.instanceColor!==null,instancingMorph:Te&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Lr,alphaToCoverage:!!_.alphaToCoverage,map:rt,matcap:We,envMap:P,envMapMode:P&&z.mapping,envMapCubeUVHeight:se,aoMap:xn,lightMap:Ve,bumpMap:$e,normalMap:be,displacementMap:p&&ct,emissiveMap:Pe,normalMapObjectSpace:be&&_.normalMapType===GM,normalMapTangentSpace:be&&_.normalMapType===K_,metalnessMap:C,roughnessMap:M,anisotropy:B,anisotropyMap:pe,clearcoat:Y,clearcoatMap:Ze,clearcoatNormalMap:te,clearcoatRoughnessMap:me,dispersion:J,iridescence:q,iridescenceMap:Ce,iridescenceThicknessMap:Re,sheen:xe,sheenColorMap:ge,sheenRoughnessMap:He,specularMap:Le,specularColorMap:ot,specularIntensityMap:I,transmission:oe,transmissionMap:ce,thicknessMap:W,gradientMap:Z,opaque:_.transparent===!1&&_.blending===uo&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ue,alphaHash:Xe,combine:_.combine,mapUv:rt&&v(_.map.channel),aoMapUv:xn&&v(_.aoMap.channel),lightMapUv:Ve&&v(_.lightMap.channel),bumpMapUv:$e&&v(_.bumpMap.channel),normalMapUv:be&&v(_.normalMap.channel),displacementMapUv:ct&&v(_.displacementMap.channel),emissiveMapUv:Pe&&v(_.emissiveMap.channel),metalnessMapUv:C&&v(_.metalnessMap.channel),roughnessMapUv:M&&v(_.roughnessMap.channel),anisotropyMapUv:pe&&v(_.anisotropyMap.channel),clearcoatMapUv:Ze&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(_.sheenRoughnessMap.channel),specularMapUv:Le&&v(_.specularMap.channel),specularColorMapUv:ot&&v(_.specularColorMap.channel),specularIntensityMapUv:I&&v(_.specularIntensityMap.channel),transmissionMapUv:ce&&v(_.transmissionMap.channel),thicknessMapUv:W&&v(_.thicknessMap.channel),alphaMapUv:ae&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(rt||ae),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:on,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)w.push(O),w.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(g(w,_),x(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function b(_){let w=S[_.type],O;if(w){let D=yi[w];O=gw.clone(D.uniforms)}else O=_.uniforms;return O}function T(_,w){let O;for(let D=0,k=u.length;D<k;D++){let $=u[D];if($.cacheKey===w){O=$,++O.usedTimes;break}}return O===void 0&&(O=new Eb(t,w,_,s),u.push(O)),O}function A(_){if(--_.usedTimes===0){let w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function R(_){l.remove(_)}function F(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:b,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:F}}function bb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Cb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function A_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function b_(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,y,S,v){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:y,renderOrder:f.renderOrder,z:S,group:v},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=y,h.renderOrder=f.renderOrder,h.z=S,h.group=v),e++,h}function a(f,d,p,y,S,v){let h=o(f,d,p,y,S,v);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,y,S,v){let h=o(f,d,p,y,S,v);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||Cb),i.length>1&&i.sort(d||A_),r.length>1&&r.sort(d||A_)}function u(){for(let f=e,d=t.length;f<d;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Rb(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new b_,t.set(i,[o])):r>=s.length?(o=new b_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Pb(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Fe};break;case"SpotLight":n={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function Ib(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Lb=0;function Nb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Db(t){let e=new Pb,n=Ib(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let r=new L,s=new it,o=new it;function a(c){let u=0,f=0,d=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,y=0,S=0,v=0,h=0,m=0,g=0,x=0,b=0,T=0,A=0;c.sort(Nb);for(let F=0,_=c.length;F<_;F++){let w=c[F],O=w.color,D=w.intensity,k=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*D,f+=O.g*D,d+=O.b*D;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],D);A++}else if(w.isDirectionalLight){let H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let K=w.shadow,z=n.get(w);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=w.shadow.matrix,m++}i.directional[p]=H,p++}else if(w.isSpotLight){let H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(O).multiplyScalar(D),H.distance=k,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[S]=H;let K=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,K.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[S]=K.matrix,w.castShadow){let z=n.get(w);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=$,x++}S++}else if(w.isRectAreaLight){let H=e.get(w);H.color.copy(O).multiplyScalar(D),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[v]=H,v++}else if(w.isPointLight){let H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let K=w.shadow,z=n.get(w);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[y]=z,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=w.shadow.matrix,g++}i.point[y]=H,y++}else if(w.isHemisphereLight){let H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(D),H.groundColor.copy(w.groundColor).multiplyScalar(D),i.hemi[h]=H,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==p||R.pointLength!==y||R.spotLength!==S||R.rectAreaLength!==v||R.hemiLength!==h||R.numDirectionalShadows!==m||R.numPointShadows!==g||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=v,i.point.length=y,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,R.directionalLength=p,R.pointLength=y,R.spotLength=S,R.rectAreaLength=v,R.hemiLength=h,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=A,i.version=Lb++)}function l(c,u){let f=0,d=0,p=0,y=0,S=0,v=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){let g=c[h];if(g.isDirectionalLight){let x=i.directional[f];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),f++}else if(g.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),p++}else if(g.isRectAreaLight){let x=i.rectArea[y];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(g.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let x=i.hemi[S];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(v),S++}}}return{setup:a,setupView:l,state:i}}function C_(t){let e=new Db(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ub(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new C_(t),e.set(r,[a])):s>=o.length?(a=new C_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var Gp=class extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wp=class extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ob=`uniform sampler2D shadow_pass;
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
}`;function kb(t,e,n){let i=new Fa,r=new ke,s=new ke,o=new st,a=new Gp({depthPacking:HM}),l=new Wp,c={},u=n.maxTextureSize,f={[Cr]:vn,[vn]:Cr,[Ln]:Ln},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Fb,fragmentShader:Ob}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let y=new Wn;y.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Mt(y,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B_;let h=this.type;this.render=function(T,A,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;let F=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ar),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let D=h!==Hi&&this.type===Hi,k=h===Hi&&this.type!==Hi;for(let $=0,H=T.length;$<H;$++){let K=T[$],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let se=z.getFrameExtents();if(r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y)),z.map===null||D===!0||k===!0){let fe=this.type!==Hi?{minFilter:Lt,magFilter:Lt}:{};z.map!==null&&z.map.dispose(),z.map=new qi(r.x,r.y,fe),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();let Q=z.getViewportCount();for(let fe=0;fe<Q;fe++){let Oe=z.getViewport(fe);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),O.viewport(o),z.updateMatrices(K,fe),i=z.getFrustum(),x(A,R,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===Hi&&m(z,R),z.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(F,_,w)};function m(T,A){let R=e.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qi(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,R,d,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,R,p,S,null)}function g(T,A,R,F){let _=null,w=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)_=w;else if(_=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=_.uuid,D=A.uuid,k=c[O];k===void 0&&(k={},c[O]=k);let $=k[D];$===void 0&&($=_.clone(),k[D]=$,A.addEventListener("dispose",b)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,F===Hi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=t.properties.get(_);O.light=R}return _}function x(T,A,R,F,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Hi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let D=e.update(T),k=T.material;if(Array.isArray(k)){let $=D.groups;for(let H=0,K=$.length;H<K;H++){let z=$[H],se=k[z.materialIndex];if(se&&se.visible){let Q=g(T,se,F,_);T.onBeforeShadow(t,T,A,R,D,Q,z),t.renderBufferDirect(R,null,D,Q,T,z),T.onAfterShadow(t,T,A,R,D,Q,z)}}}else if(k.visible){let $=g(T,k,F,_);T.onBeforeShadow(t,T,A,R,D,$,null),t.renderBufferDirect(R,null,D,$,T,null),T.onAfterShadow(t,T,A,R,D,$,null)}}let O=T.children;for(let D=0,k=O.length;D<k;D++)x(O[D],A,R,F,_)}function b(T){T.target.removeEventListener("dispose",b);for(let R in c){let F=c[R],_=T.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}var Bb={[$d]:Zd,[Kd]:Qd,[Jd]:ep,[mo]:jd,[Zd]:$d,[Qd]:Kd,[ep]:Jd,[jd]:mo};function zb(t){function e(){let I=!1,ce=new st,W=null,Z=new st(0,0,0,0);return{setMask:function(ae){W!==ae&&!I&&(t.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){I=ae},setClear:function(ae,ue,Xe,At,on){on===!0&&(ae*=At,ue*=At,Xe*=At),ce.set(ae,ue,Xe,At),Z.equals(ce)===!1&&(t.clearColor(ae,ue,Xe,At),Z.copy(ce))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ce=!1,W=null,Z=null,ae=null;return{setReversed:function(ue){ce=ue},setTest:function(ue){ue?ye(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ue){W!==ue&&!I&&(t.depthMask(ue),W=ue)},setFunc:function(ue){if(ce&&(ue=Bb[ue]),Z!==ue){switch(ue){case $d:t.depthFunc(t.NEVER);break;case Zd:t.depthFunc(t.ALWAYS);break;case Kd:t.depthFunc(t.LESS);break;case mo:t.depthFunc(t.LEQUAL);break;case Jd:t.depthFunc(t.EQUAL);break;case jd:t.depthFunc(t.GEQUAL);break;case Qd:t.depthFunc(t.GREATER);break;case ep:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ue}},setLocked:function(ue){I=ue},setClear:function(ue){ae!==ue&&(t.clearDepth(ue),ae=ue)},reset:function(){I=!1,W=null,Z=null,ae=null}}}function i(){let I=!1,ce=null,W=null,Z=null,ae=null,ue=null,Xe=null,At=null,on=null;return{setTest:function(Ke){I||(Ke?ye(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!I&&(t.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,an,Ti){(W!==Ke||Z!==an||ae!==Ti)&&(t.stencilFunc(Ke,an,Ti),W=Ke,Z=an,ae=Ti)},setOp:function(Ke,an,Ti){(ue!==Ke||Xe!==an||At!==Ti)&&(t.stencilOp(Ke,an,Ti),ue=Ke,Xe=an,At=Ti)},setLocked:function(Ke){I=Ke},setClear:function(Ke){on!==Ke&&(t.clearStencil(Ke),on=Ke)},reset:function(){I=!1,ce=null,W=null,Z=null,ae=null,ue=null,Xe=null,At=null,on=null}}}let r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap,c={},u={},f=new WeakMap,d=[],p=null,y=!1,S=null,v=null,h=null,m=null,g=null,x=null,b=null,T=new Fe(0,0,0),A=0,R=!1,F=null,_=null,w=null,O=null,D=null,k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,H=0,K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=H>=2);let z=null,se={},Q=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),Oe=new st().fromArray(Q),ze=new st().fromArray(fe);function X(I,ce,W,Z){let ae=new Uint8Array(4),ue=t.createTexture();t.bindTexture(I,ue),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<W;Xe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(ce+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return ue}let ee={};ee[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ye(t.DEPTH_TEST),s.setFunc(mo),Ve(!1),$e(Uy),ye(t.CULL_FACE),P(Ar);function ye(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function de(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ie(I,ce){return u[I]!==ce?(t.bindFramebuffer(I,ce),u[I]=ce,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Te(I,ce){let W=d,Z=!1;if(I){W=f.get(ce),W===void 0&&(W=[],f.set(ce,W));let ae=I.textures;if(W.length!==ae.length||W[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Xe=ae.length;ue<Xe;ue++)W[ue]=t.COLOR_ATTACHMENT0+ue;W.length=ae.length,Z=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,Z=!0);Z&&t.drawBuffers(W)}function Ge(I){return p!==I?(t.useProgram(I),p=I,!0):!1}let rt={[ns]:t.FUNC_ADD,[mM]:t.FUNC_SUBTRACT,[gM]:t.FUNC_REVERSE_SUBTRACT};rt[vM]=t.MIN,rt[yM]=t.MAX;let We={[_M]:t.ZERO,[xM]:t.ONE,[SM]:t.SRC_COLOR,[qd]:t.SRC_ALPHA,[bM]:t.SRC_ALPHA_SATURATE,[TM]:t.DST_COLOR,[wM]:t.DST_ALPHA,[MM]:t.ONE_MINUS_SRC_COLOR,[Yd]:t.ONE_MINUS_SRC_ALPHA,[AM]:t.ONE_MINUS_DST_COLOR,[EM]:t.ONE_MINUS_DST_ALPHA,[CM]:t.CONSTANT_COLOR,[RM]:t.ONE_MINUS_CONSTANT_COLOR,[PM]:t.CONSTANT_ALPHA,[IM]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,ce,W,Z,ae,ue,Xe,At,on,Ke){if(I===Ar){y===!0&&(de(t.BLEND),y=!1);return}if(y===!1&&(ye(t.BLEND),y=!0),I!==pM){if(I!==S||Ke!==R){if((v!==ns||g!==ns)&&(t.blendEquation(t.FUNC_ADD),v=ns,g=ns),Ke)switch(I){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pa:t.blendFunc(t.ONE,t.ONE);break;case Fy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Oy:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pa:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Fy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Oy:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,m=null,x=null,b=null,T.set(0,0,0),A=0,S=I,R=Ke}return}ae=ae||ce,ue=ue||W,Xe=Xe||Z,(ce!==v||ae!==g)&&(t.blendEquationSeparate(rt[ce],rt[ae]),v=ce,g=ae),(W!==h||Z!==m||ue!==x||Xe!==b)&&(t.blendFuncSeparate(We[W],We[Z],We[ue],We[Xe]),h=W,m=Z,x=ue,b=Xe),(At.equals(T)===!1||on!==A)&&(t.blendColor(At.r,At.g,At.b,on),T.copy(At),A=on),S=I,R=!1}function xn(I,ce){I.side===Ln?de(t.CULL_FACE):ye(t.CULL_FACE);let W=I.side===vn;ce&&(W=!W),Ve(W),I.blending===uo&&I.transparent===!1?P(Ar):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){F!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),F=I)}function $e(I){I!==hM?(ye(t.CULL_FACE),I!==_&&(I===Uy?t.cullFace(t.BACK):I===fM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),_=I}function be(I){I!==w&&($&&t.lineWidth(I),w=I)}function ct(I,ce,W){I?(ye(t.POLYGON_OFFSET_FILL),(O!==ce||D!==W)&&(t.polygonOffset(ce,W),O=ce,D=W)):de(t.POLYGON_OFFSET_FILL)}function Pe(I){I?ye(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+k-1),z!==I&&(t.activeTexture(I),z=I)}function M(I,ce,W){W===void 0&&(z===null?W=t.TEXTURE0+k-1:W=z);let Z=se[W];Z===void 0&&(Z={type:void 0,texture:void 0},se[W]=Z),(Z.type!==I||Z.texture!==ce)&&(z!==W&&(t.activeTexture(W),z=W),t.bindTexture(I,ce||ee[I]),Z.type=I,Z.texture=ce)}function B(){let I=se[z];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Oe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function ge(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function He(I,ce){let W=l.get(ce);W===void 0&&(W=new WeakMap,l.set(ce,W));let Z=W.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(ce,I.name),W.set(I,Z))}function Le(I,ce){let Z=l.get(ce).get(I);a.get(ce)!==Z&&(t.uniformBlockBinding(ce,Z,I.__bindingPointIndex),a.set(ce,Z))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,se={},u={},f=new WeakMap,d=[],p=null,y=!1,S=null,v=null,h=null,m=null,g=null,x=null,b=null,T=new Fe(0,0,0),A=0,R=!1,F=null,_=null,w=null,O=null,D=null,Oe.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ye,disable:de,bindFramebuffer:Ie,drawBuffers:Te,useProgram:Ge,setBlending:P,setMaterial:xn,setFlipSided:Ve,setCullFace:$e,setLineWidth:be,setPolygonOffset:ct,setScissorTest:Pe,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:me,texImage3D:Ce,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:Ze,texStorage3D:te,texSubImage2D:q,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Re,viewport:ge,reset:ot}}function R_(t,e,n,i){let r=Vb(i);switch(n){case W_:return t*e;case q_:return t*e;case Y_:return t*e*2;case gm:return t*e/r.components*r.byteLength;case vm:return t*e/r.components*r.byteLength;case $_:return t*e*2/r.components*r.byteLength;case ym:return t*e*2/r.components*r.byteLength;case X_:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case _m:return t*e*4/r.components*r.byteLength;case Zc:case Kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jc:case jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:case ap:return Math.max(t,16)*Math.max(e,8)/4;case rp:case op:return Math.max(t,8)*Math.max(e,8)/2;case lp:case cp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case up:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qc:case Tp:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Z_:case bp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cp:case Rp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Vb(t){switch(t){case Xi:case V_:return{byteLength:1,components:1};case La:case H_:case Va:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case as:case dm:case _i:return{byteLength:4,components:1};case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Hb(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return p?new OffscreenCanvas(C,M):ou("canvas")}function S(C,M,B){let Y=1,J=Pe(C);if((J.width>B||J.height>B)&&(Y=B/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let q=Math.floor(Y*J.width),xe=Math.floor(Y*J.height);f===void 0&&(f=y(q,xe));let oe=M?y(q,xe):f;return oe.width=q,oe.height=xe,oe.getContext("2d").drawImage(C,0,0,q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+xe+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function v(C){return C.generateMipmaps&&C.minFilter!==Lt&&C.minFilter!==oi}function h(C){t.generateMipmap(C)}function m(C,M,B,Y,J=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===t.RED&&(B===t.FLOAT&&(q=t.R32F),B===t.HALF_FLOAT&&(q=t.R16F),B===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.R8UI),B===t.UNSIGNED_SHORT&&(q=t.R16UI),B===t.UNSIGNED_INT&&(q=t.R32UI),B===t.BYTE&&(q=t.R8I),B===t.SHORT&&(q=t.R16I),B===t.INT&&(q=t.R32I)),M===t.RG&&(B===t.FLOAT&&(q=t.RG32F),B===t.HALF_FLOAT&&(q=t.RG16F),B===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RG8UI),B===t.UNSIGNED_SHORT&&(q=t.RG16UI),B===t.UNSIGNED_INT&&(q=t.RG32UI),B===t.BYTE&&(q=t.RG8I),B===t.SHORT&&(q=t.RG16I),B===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(q=t.RGB16UI),B===t.UNSIGNED_INT&&(q=t.RGB32UI),B===t.BYTE&&(q=t.RGB8I),B===t.SHORT&&(q=t.RGB16I),B===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),B===t.UNSIGNED_INT&&(q=t.RGBA32UI),B===t.BYTE&&(q=t.RGBA8I),B===t.SHORT&&(q=t.RGBA16I),B===t.INT&&(q=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){let xe=J?nu:Qe.getTransfer(Y);B===t.FLOAT&&(q=t.RGBA32F),B===t.HALF_FLOAT&&(q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(q=xe===dt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(C,M){let B;return C?M===null||M===as||M===yo?B=t.DEPTH24_STENCIL8:M===_i?B=t.DEPTH32F_STENCIL8:M===La&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===as||M===yo?B=t.DEPTH_COMPONENT24:M===_i?B=t.DEPTH_COMPONENT32F:M===La&&(B=t.DEPTH_COMPONENT16),B}function x(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==oi?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){let M=C.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&u.delete(M)}function T(C){let M=C.target;M.removeEventListener("dispose",T),F(M)}function A(C){let M=i.get(C);if(M.__webglInit===void 0)return;let B=C.source,Y=d.get(B);if(Y){let J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(Y).length===0&&d.delete(B)}i.remove(C)}function R(C){let M=i.get(C);t.deleteTexture(M.__webglTexture);let B=C.source,Y=d.get(B);delete Y[M.__cacheKey],o.memory.textures--}function F(C){let M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)t.deleteFramebuffer(M.__webglFramebuffer[Y]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=C.textures;for(let Y=0,J=B.length;Y<J;Y++){let q=i.get(B[Y]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(C)}let _=0;function w(){_=0}function O(){let C=_;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),_+=1,C}function D(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function k(C,M){let B=i.get(C);if(C.isVideoTexture&&be(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){let Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function $(C,M){let B=i.get(C);if(C.version>0&&B.__version!==C.version){ze(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function H(C,M){let B=i.get(C);if(C.version>0&&B.__version!==C.version){ze(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function K(C,M){let B=i.get(C);if(C.version>0&&B.__version!==C.version){X(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}let z={[Ia]:t.REPEAT,[ss]:t.CLAMP_TO_EDGE,[ip]:t.MIRRORED_REPEAT},se={[Lt]:t.NEAREST,[fm]:t.NEAREST_MIPMAP_NEAREST,[Ec]:t.NEAREST_MIPMAP_LINEAR,[oi]:t.LINEAR,[dd]:t.LINEAR_MIPMAP_NEAREST,[os]:t.LINEAR_MIPMAP_LINEAR},Q={[WM]:t.NEVER,[KM]:t.ALWAYS,[XM]:t.LESS,[J_]:t.LEQUAL,[qM]:t.EQUAL,[ZM]:t.GEQUAL,[YM]:t.GREATER,[$M]:t.NOTEQUAL};function fe(C,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===oi||M.magFilter===dd||M.magFilter===Ec||M.magFilter===os||M.minFilter===oi||M.minFilter===dd||M.minFilter===Ec||M.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,z[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,z[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,z[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,se[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Lt||M.minFilter!==Ec&&M.minFilter!==os||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));let Y=M.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let q=D(M);if(q!==C.__cacheKey){J[q]===void 0&&(J[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[q].usedTimes++;let xe=J[C.__cacheKey];xe!==void 0&&(J[C.__cacheKey].usedTimes--,xe.usedTimes===0&&R(M)),C.__cacheKey=q,C.__webglTexture=J[q].texture}return B}function ze(C,M,B){let Y=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=t.TEXTURE_3D);let J=Oe(C,M),q=M.source;n.bindTexture(Y,C.__webglTexture,t.TEXTURE0+B);let xe=i.get(q);if(q.version!==xe.__version||J===!0){n.activeTexture(t.TEXTURE0+B);let oe=Qe.getPrimaries(Qe.workingColorSpace),pe=M.colorSpace===Tr?null:Qe.getPrimaries(M.colorSpace),Ze=M.colorSpace===Tr||oe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let te=S(M.image,!1,r.maxTextureSize);te=ct(M,te);let me=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),Re=m(M.internalFormat,me,Ce,M.colorSpace,M.isVideoTexture);fe(Y,M);let ge,He=M.mipmaps,Le=M.isVideoTexture!==!0,ot=xe.__version===void 0||J===!0,I=q.dataReady,ce=x(M,te);if(M.isDepthTexture)Re=g(M.format===_o,M.type),ot&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Re,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,me,Ce,null));else if(M.isDataTexture)if(He.length>0){Le&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,He[0].width,He[0].height);for(let W=0,Z=He.length;W<Z;W++)ge=He[W],Le?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,me,Ce,ge.data):n.texImage2D(t.TEXTURE_2D,W,Re,ge.width,ge.height,0,me,Ce,ge.data);M.generateMipmaps=!1}else Le?(ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,te.width,te.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,me,Ce,te.data)):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,me,Ce,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,He[0].width,He[0].height,te.depth);for(let W=0,Z=He.length;W<Z;W++)if(ge=He[W],M.format!==ai)if(me!==null)if(Le){if(I)if(M.layerUpdates.size>0){let ae=R_(ge.width,ge.height,M.format,M.type);for(let ue of M.layerUpdates){let Xe=ge.data.subarray(ue*ae/ge.data.BYTES_PER_ELEMENT,(ue+1)*ae/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,ue,ge.width,ge.height,1,me,Xe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,te.depth,me,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Re,ge.width,ge.height,te.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,te.depth,me,Ce,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Re,ge.width,ge.height,te.depth,0,me,Ce,ge.data)}else{Le&&ot&&n.texStorage2D(t.TEXTURE_2D,ce,Re,He[0].width,He[0].height);for(let W=0,Z=He.length;W<Z;W++)ge=He[W],M.format!==ai?me!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,me,Ce,ge.data):n.texImage2D(t.TEXTURE_2D,W,Re,ge.width,ge.height,0,me,Ce,ge.data)}else if(M.isDataArrayTexture)if(Le){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Re,te.width,te.height,te.depth),I)if(M.layerUpdates.size>0){let W=R_(te.width,te.height,M.format,M.type);for(let Z of M.layerUpdates){let ae=te.data.subarray(Z*W/te.data.BYTES_PER_ELEMENT,(Z+1)*W/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,me,Ce,ae)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Ce,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,me,Ce,te.data);else if(M.isData3DTexture)Le?(ot&&n.texStorage3D(t.TEXTURE_3D,ce,Re,te.width,te.height,te.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,me,Ce,te.data);else if(M.isFramebufferTexture){if(ot)if(Le)n.texStorage2D(t.TEXTURE_2D,ce,Re,te.width,te.height);else{let W=te.width,Z=te.height;for(let ae=0;ae<ce;ae++)n.texImage2D(t.TEXTURE_2D,ae,Re,W,Z,0,me,Ce,null),W>>=1,Z>>=1}}else if(He.length>0){if(Le&&ot){let W=Pe(He[0]);n.texStorage2D(t.TEXTURE_2D,ce,Re,W.width,W.height)}for(let W=0,Z=He.length;W<Z;W++)ge=He[W],Le?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,me,Ce,ge):n.texImage2D(t.TEXTURE_2D,W,Re,me,Ce,ge);M.generateMipmaps=!1}else if(Le){if(ot){let W=Pe(te);n.texStorage2D(t.TEXTURE_2D,ce,Re,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ce,te)}else n.texImage2D(t.TEXTURE_2D,0,Re,me,Ce,te);v(M)&&h(Y),xe.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function X(C,M,B){if(M.image.length!==6)return;let Y=Oe(C,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);let q=i.get(J);if(J.version!==q.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);let xe=Qe.getPrimaries(Qe.workingColorSpace),oe=M.colorSpace===Tr?null:Qe.getPrimaries(M.colorSpace),pe=M.colorSpace===Tr||xe===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ze&&!te?me[Z]=S(M.image[Z],!0,r.maxCubemapSize):me[Z]=te?M.image[Z].image:M.image[Z],me[Z]=ct(M,me[Z]);let Ce=me[0],Re=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),He=m(M.internalFormat,Re,ge,M.colorSpace),Le=M.isVideoTexture!==!0,ot=q.__version===void 0||Y===!0,I=J.dataReady,ce=x(M,Ce);fe(t.TEXTURE_CUBE_MAP,M);let W;if(Ze){Le&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){W=me[Z].mipmaps;for(let ae=0;ae<W.length;ae++){let ue=W[ae];M.format!==ai?Re!==null?Le?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ue.width,ue.height,Re,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,He,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ue.width,ue.height,Re,ge,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,He,ue.width,ue.height,0,Re,ge,ue.data)}}}else{if(W=M.mipmaps,Le&&ot){W.length>0&&ce++;let Z=Pe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Re,ge,me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,me[Z].width,me[Z].height,0,Re,ge,me[Z].data);for(let ae=0;ae<W.length;ae++){let Xe=W[ae].image[Z].image;Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Xe.width,Xe.height,Re,ge,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,He,Xe.width,Xe.height,0,Re,ge,Xe.data)}}else{Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,ge,me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Re,ge,me[Z]);for(let ae=0;ae<W.length;ae++){let ue=W[ae];Le?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Re,ge,ue.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,He,Re,ge,ue.image[Z])}}}v(M)&&h(t.TEXTURE_CUBE_MAP),q.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ee(C,M,B,Y,J,q){let xe=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),pe=m(B.internalFormat,xe,oe,B.colorSpace);if(!i.get(M).__hasExternalTextures){let te=Math.max(1,M.width>>q),me=Math.max(1,M.height>>q);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,q,pe,te,me,M.depth,0,xe,oe,null):n.texImage2D(J,q,pe,te,me,0,xe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,i.get(B).__webglTexture,0,Ve(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,i.get(B).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){let Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,q=g(M.stencilBuffer,J),xe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Ve(M);$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,q,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,C)}else{let Y=M.textures;for(let J=0;J<Y.length;J++){let q=Y[J],xe=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),pe=m(q.internalFormat,xe,oe,q.colorSpace),Ze=Ve(M);B&&$e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,pe,M.width,M.height):$e(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let Y=i.get(M.depthTexture).__webglTexture,J=Ve(M);if(M.depthTexture.format===ho)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(M.depthTexture.format===_o)$e(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ie(C){let M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=t.createRenderbuffer(),ye(M.__webglDepthbuffer[Y],C,!1);else{let J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ye(M.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(C,M,B){let Y=i.get(C);M!==void 0&&ee(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ie(C)}function Ge(C){let M=C.texture,B=i.get(C),Y=i.get(M);C.addEventListener("dispose",T);let J=C.textures,q=C.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let pe=0;pe<M.mipmaps.length;pe++)B.__webglFramebuffer[oe][pe]=t.createFramebuffer()}else B.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)B.__webglFramebuffer[oe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(xe)for(let oe=0,pe=J.length;oe<pe;oe++){let Ze=i.get(J[oe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&$e(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){let pe=J[oe];B.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);let Ze=s.convert(pe.format,pe.colorSpace),te=s.convert(pe.type),me=m(pe.internalFormat,Ze,te,pe.colorSpace,C.isXRRenderTarget===!0),Ce=Ve(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,me,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(t.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ee(B.__webglFramebuffer[oe][pe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ee(B.__webglFramebuffer[oe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);v(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let oe=0,pe=J.length;oe<pe;oe++){let Ze=J[oe],te=i.get(Ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),fe(t.TEXTURE_2D,Ze),ee(B.__webglFramebuffer,C,Ze,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),v(Ze)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Y.__webglTexture),fe(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ee(B.__webglFramebuffer[pe],C,M,t.COLOR_ATTACHMENT0,oe,pe);else ee(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,oe,0);v(M)&&h(oe),n.unbindTexture()}C.depthBuffer&&Ie(C)}function rt(C){let M=C.textures;for(let B=0,Y=M.length;B<Y;B++){let J=M[B];if(v(J)){let q=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(J).__webglTexture;n.bindTexture(q,xe),h(q),n.unbindTexture()}}}let We=[],P=[];function xn(C){if(C.samples>0){if($e(C)===!1){let M=C.textures,B=C.width,Y=C.height,J=t.COLOR_BUFFER_BIT,q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(C),oe=M.length>1;if(oe)for(let pe=0;pe<M.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);let Ze=i.get(M[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,J,t.NEAREST),l===!0&&(We.length=0,P.length=0,We.push(t.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(We.push(q),P.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<M.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);let Ze=i.get(M[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function $e(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(C){let M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ct(C,M){let B=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Lr&&B!==Tr&&(Qe.getTransfer(B)===dt?(Y!==ai||J!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Pe(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Te,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=$e}function Gb(t,e){function n(i,r=Tr){let s,o=Qe.getTransfer(r);if(i===Xi)return t.UNSIGNED_BYTE;if(i===pm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===mm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===G_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===V_)return t.BYTE;if(i===H_)return t.SHORT;if(i===La)return t.UNSIGNED_SHORT;if(i===dm)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===Va)return t.HALF_FLOAT;if(i===W_)return t.ALPHA;if(i===X_)return t.RGB;if(i===ai)return t.RGBA;if(i===q_)return t.LUMINANCE;if(i===Y_)return t.LUMINANCE_ALPHA;if(i===ho)return t.DEPTH_COMPONENT;if(i===_o)return t.DEPTH_STENCIL;if(i===gm)return t.RED;if(i===vm)return t.RED_INTEGER;if(i===$_)return t.RG;if(i===ym)return t.RG_INTEGER;if(i===_m)return t.RGBA_INTEGER;if(i===Zc||i===Kc||i===Jc||i===jc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rp||i===sp||i===op||i===ap)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===op)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ap)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lp||i===cp||i===up)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lp||i===cp)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===up)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hp||i===fp||i===dp||i===pp||i===mp||i===gp||i===vp||i===yp||i===_p||i===xp||i===Sp||i===Mp||i===wp||i===Ep)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_p)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ep)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===Tp||i===Ap)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qc)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ap)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Z_||i===bp||i===Cp||i===Rp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Xp=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},co=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wb={type:"move"},Ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let v=n.getJointPose(S,i),h=this._getHandJoint(c,S);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,y=.005;c.inputState.pinching&&d>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new co;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
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

}`,qp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new yn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Si({vertexShader:Xb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yp=class extends Rr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,y=null,S=new qp,v=n.getContextAttributes(),h=null,m=null,g=[],x=[],b=new ke,T=null,A=new Kt;A.layers.enable(1),A.viewport=new st;let R=new Kt;R.layers.enable(2),R.viewport=new st;let F=[A,R],_=new Xp;_.layers.enable(1),_.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=g[X];return ee===void 0&&(ee=new Ra,g[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=g[X];return ee===void 0&&(ee=new Ra,g[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=g[X];return ee===void 0&&(ee=new Ra,g[X]=ee),ee.getHandSpace()};function D(X){let ee=x.indexOf(X.inputSource);if(ee===-1)return;let ye=g[ee];ye!==void 0&&(ye.update(X.inputSource,X.frame,c||o),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",$);for(let X=0;X<g.length;X++){let ee=x[X];ee!==null&&(x[X]=null,g[X].disconnect(ee))}w=null,O=null,S.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,m=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",k),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new qi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,ye=null,de=null;v.depth&&(de=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=v.stencil?_o:ho,ye=v.stencil?yo:as);let Ie={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new qi(d.textureWidth,d.textureHeight,{format:ai,type:Xi,depthTexture:new mu(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(X){for(let ee=0;ee<X.removed.length;ee++){let ye=X.removed[ee],de=x.indexOf(ye);de>=0&&(x[de]=null,g[de].disconnect(ye))}for(let ee=0;ee<X.added.length;ee++){let ye=X.added[ee],de=x.indexOf(ye);if(de===-1){for(let Te=0;Te<g.length;Te++)if(Te>=x.length){x.push(ye),de=Te;break}else if(x[Te]===null){x[Te]=ye,de=Te;break}if(de===-1)break}let Ie=g[de];Ie&&Ie.connect(ye)}}let H=new L,K=new L;function z(X,ee,ye){H.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);let de=H.distanceTo(K),Ie=ee.projectionMatrix.elements,Te=ye.projectionMatrix.elements,Ge=Ie[14]/(Ie[10]-1),rt=Ie[14]/(Ie[10]+1),We=(Ie[9]+1)/Ie[5],P=(Ie[9]-1)/Ie[5],xn=(Ie[8]-1)/Ie[0],Ve=(Te[8]+1)/Te[0],$e=Ge*xn,be=Ge*Ve,ct=de/(-xn+Ve),Pe=ct*-xn;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let C=Ge+ct,M=rt+ct,B=$e-Pe,Y=be+(de-Pe),J=We*rt/M*C,q=P*rt/M*C;X.projectionMatrix.makePerspective(B,Y,J,q,C,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,ye=X.far;S.texture!==null&&(S.depthNear>0&&(ee=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),_.near=R.near=A.near=ee,_.far=R.far=A.far=ye,(w!==_.near||O!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,O=_.far);let de=X.parent,Ie=_.cameras;se(_,de);for(let Te=0;Te<Ie.length;Te++)se(Ie[Te],de);Ie.length===2?z(_,A,R):_.projectionMatrix.copy(A.projectionMatrix),Q(X,_,de)};function Q(X,ee,ye){ye===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ip*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(_)};let fe=null;function Oe(X,ee){if(u=ee.getViewerPose(c||o),y=ee,u!==null){let ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let de=!1;ye.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Te=0;Te<ye.length;Te++){let Ge=ye[Te],rt=null;if(p!==null)rt=p.getViewport(Ge);else{let P=f.getViewSubImage(d,Ge);rt=P.viewport,Te===0&&(e.setRenderTargetTextures(m,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(m))}let We=F[Te];We===void 0&&(We=new Kt,We.layers.enable(Te),We.viewport=new st,F[Te]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(rt.x,rt.y,rt.width,rt.height),Te===0&&(_.matrix.copy(We.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(We)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Te=f.getDepthInformation(ye[0]);Te&&Te.isValid&&Te.texture&&S.init(e,Te,r.renderState)}}for(let ye=0;ye<g.length;ye++){let de=x[ye],Ie=g[ye];de!==null&&Ie!==void 0&&Ie.update(de,ee,c||o)}fe&&fe(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),y=null}let ze=new tx;ze.setAnimationLoop(Oe),this.setAnimationLoop=function(X){fe=X},this.dispose=function(){}}},es=new Gn,Yb=new it;function $b(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,ex(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,m,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(v,h):h.isMeshToonMaterial?(s(v,h),f(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h)):h.isMeshStandardMaterial?(s(v,h),d(v,h),h.isMeshPhysicalMaterial&&p(v,h,x)):h.isMeshMatcapMaterial?(s(v,h),y(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),S(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,m,g):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===vn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===vn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);let m=e.get(h),g=m.envMap,x=m.envMapRotation;g&&(v.envMap.value=g,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),v.envMapRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(es)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,m,g){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*m,v.scale.value=g*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function f(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function d(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,m){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,h){h.matcap&&(v.matcap.value=h.matcap)}function S(v,h){let m=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zb(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){let x=g.program;i.uniformBlockBinding(m,x)}function c(m,g){let x=r[m.id];x===void 0&&(y(m),x=u(m),r[m.id]=x,m.addEventListener("dispose",v));let b=g.program;i.updateUBOMapping(m,b);let T=e.render.frame;s[m.id]!==T&&(d(m),s[m.id]=T)}function u(m){let g=f();m.__bindingPointIndex=g;let x=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){let g=r[m.id],x=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=x.length;T<A;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let F=0,_=R.length;F<_;F++){let w=R[F];if(p(w,T,F,b)===!0){let O=w.__offset,D=Array.isArray(w.value)?w.value:[w.value],k=0;for(let $=0;$<D.length;$++){let H=D[$],K=S(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,O+k,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,x,b){let T=m.value,A=g+"_"+x;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{let R=b[A];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return b[A]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function y(m){let g=m.uniforms,x=0,b=16;for(let A=0,R=g.length;A<R;A++){let F=Array.isArray(g[A])?g[A]:[g[A]];for(let _=0,w=F.length;_<w;_++){let O=F[_],D=Array.isArray(O.value)?O.value:[O.value];for(let k=0,$=D.length;k<$;k++){let H=D[k],K=S(H),z=x%b,se=z%K.boundary,Q=z+se;x+=se,Q!==0&&b-Q<K.storage&&(x+=b-Q),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}let T=x%b;return T>0&&(x+=b-T),m.__size=x,m.__cache={},this}function S(m){let g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){let g=m.target;g.removeEventListener("dispose",v);let x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(let m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var gu=class{constructor(e={}){let{canvas:n=jM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),y=new Int32Array(4),S=null,v=null,h=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=br,this.toneMappingExposure=1;let g=this,x=!1,b=0,T=0,A=null,R=-1,F=null,_=new st,w=new st,O=null,D=new Fe(0),k=0,$=n.width,H=n.height,K=1,z=null,se=null,Q=new st(0,0,$,H),fe=new st(0,0,$,H),Oe=!1,ze=new Fa,X=!1,ee=!1,ye=new it,de=new it,Ie=new L,Te=new st,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function We(){return A===null?K:1}let P=i;function xn(E,N){return n.getContext(E,N)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${um}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",ue,!1),P===null){let N="webgl2";if(P=xn(N,E),P===null)throw xn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,$e,be,ct,Pe,C,M,B,Y,J,q,xe,oe,pe,Ze,te,me,Ce,Re,ge,He,Le,ot,I;function ce(){Ve=new hA(P),Ve.init(),Le=new Gb(P,Ve),$e=new sA(P,Ve,e,Le),be=new zb(P),$e.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),ct=new pA(P),Pe=new bb,C=new Hb(P,Ve,be,Pe,$e,Le,ct),M=new aA(g),B=new uA(g),Y=new Sw(P),ot=new iA(P,Y),J=new fA(P,Y,ct,ot),q=new gA(P,J,Y,ct),Re=new mA(P,$e,C),te=new oA(Pe),xe=new Ab(g,M,B,Ve,$e,ot,te),oe=new $b(g,Pe),pe=new Rb,Ze=new Ub(Ve),Ce=new nA(g,M,B,be,q,d,l),me=new kb(g,q,$e),I=new Zb(P,ct,$e,be),ge=new rA(P,Ve,ct),He=new dA(P,Ve,ct),ct.programs=xe.programs,g.capabilities=$e,g.extensions=Ve,g.properties=Pe,g.renderLists=pe,g.shadowMap=me,g.state=be,g.info=ct}ce();let W=new Yp(g,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize($,H,!1))},this.getSize=function(E){return E.set($,H)},this.setSize=function(E,N,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,H=N,n.width=Math.floor(E*K),n.height=Math.floor(N*K),V===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set($*K,H*K).floor()},this.setDrawingBufferSize=function(E,N,V){$=E,H=N,K=V,n.width=Math.floor(E*V),n.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,N,V,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,V,G),be.viewport(_.copy(Q).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,N,V,G){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,N,V,G),be.scissor(w.copy(fe).multiplyScalar(K).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){be.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let U=!1;if(A!==null){let ie=A.texture.format;U=ie===_m||ie===ym||ie===vm}if(U){let ie=A.texture.type,le=ie===Xi||ie===as||ie===La||ie===yo||ie===pm||ie===mm,ve=Ce.getClearColor(),_e=Ce.getClearAlpha(),Ee=ve.r,Ae=ve.g,Se=ve.b;le?(p[0]=Ee,p[1]=Ae,p[2]=Se,p[3]=_e,P.clearBufferuiv(P.COLOR,0,p)):(y[0]=Ee,y[1]=Ae,y[2]=Se,y[3]=_e,P.clearBufferiv(P.COLOR,0,y))}else G|=P.COLOR_BUFFER_BIT}N&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),Ze.dispose(),Pe.dispose(),M.dispose(),B.dispose(),q.dispose(),ot.dispose(),I.dispose(),xe.dispose(),W.dispose(),W.removeEventListener("sessionstart",Um),W.removeEventListener("sessionend",Fm),Nr.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let E=ct.autoReset,N=me.enabled,V=me.autoUpdate,G=me.needsUpdate,U=me.type;ce(),ct.autoReset=E,me.enabled=N,me.autoUpdate=V,me.needsUpdate=G,me.type=U}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){let N=E.target;N.removeEventListener("dispose",Xe),At(N)}function At(E){on(E),Pe.remove(E)}function on(E){let N=Pe.get(E).programs;N!==void 0&&(N.forEach(function(V){xe.releaseProgram(V)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,U,ie){N===null&&(N=Ge);let le=U.isMesh&&U.matrixWorld.determinant()<0,ve=yx(E,N,V,G,U);be.setMaterial(G,le);let _e=V.index,Ee=1;if(G.wireframe===!0){if(_e=J.getWireframeAttribute(V),_e===void 0)return;Ee=2}let Ae=V.drawRange,Se=V.attributes.position,et=Ae.start*Ee,ut=(Ae.start+Ae.count)*Ee;ie!==null&&(et=Math.max(et,ie.start*Ee),ut=Math.min(ut,(ie.start+ie.count)*Ee)),_e!==null?(et=Math.max(et,0),ut=Math.min(ut,_e.count)):Se!=null&&(et=Math.max(et,0),ut=Math.min(ut,Se.count));let xt=ut-et;if(xt<0||xt===1/0)return;ot.setup(U,G,ve,V,_e);let Sn,Je=ge;if(_e!==null&&(Sn=Y.get(_e),Je=He,Je.setIndex(Sn)),U.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*We()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(U.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),be.setLineWidth(Me*We()),U.isLineSegments?Je.setMode(P.LINES):U.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else U.isPoints?Je.setMode(P.POINTS):U.isSprite&&Je.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Me=U._multiDrawStarts,Bt=U._multiDrawCounts,je=U._multiDrawCount,qn=_e?Y.get(_e).bytesPerElement:1,fs=Pe.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<je;Mn++)fs.setValue(P,"_gl_DrawID",Mn),Je.render(Me[Mn]/qn,Bt[Mn])}else if(U.isInstancedMesh)Je.renderInstances(et,xt,U.count);else if(V.isInstancedBufferGeometry){let Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Me);Je.renderInstances(et,xt,Bt)}else Je.render(et,xt)};function Ke(E,N,V){E.transparent===!0&&E.side===Ln&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,$a(E,N,V),E.side=Cr,E.needsUpdate=!0,$a(E,N,V),E.side=Ln):$a(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),v=Ze.get(V),v.init(N),m.push(v),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),E!==V&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights();let G=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ie=U.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){let ve=ie[le];Ke(ve,V,U),G.add(ve)}else Ke(ie,V,U),G.add(ie)}),m.pop(),v=null,G},this.compileAsync=function(E,N,V=null){let G=this.compile(E,N,V);return new Promise(U=>{function ie(){if(G.forEach(function(le){Pe.get(le).currentProgram.isReady()&&G.delete(le)}),G.size===0){U(E);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let an=null;function Ti(E){an&&an(E)}function Um(){Nr.stop()}function Fm(){Nr.start()}let Nr=new tx;Nr.setAnimationLoop(Ti),typeof self!="undefined"&&Nr.setContext(self),this.setAnimationLoop=function(E){an=E,W.setAnimationLoop(E),E===null?Nr.stop():Nr.start()},W.addEventListener("sessionstart",Um),W.addEventListener("sessionend",Fm),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,N,A),v=Ze.get(E,m.length),v.init(N),m.push(v),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(de),ee=this.localClippingEnabled,X=te.init(this.clippingPlanes,ee),S=pe.get(E,h.length),S.init(),h.push(S),W.enabled===!0&&W.isPresenting===!0){let ie=g.xr.getDepthSensingMesh();ie!==null&&Uu(ie,N,-1/0,g.sortObjects)}Uu(E,N,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(z,se),rt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,rt&&Ce.addToRenderList(S,E),this.info.render.frame++,X===!0&&te.beginShadows();let V=v.state.shadowsArray;me.render(V,E,N),X===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=S.opaque,U=S.transmissive;if(v.setupLights(),N.isArrayCamera){let ie=N.cameras;if(U.length>0)for(let le=0,ve=ie.length;le<ve;le++){let _e=ie[le];km(G,U,E,_e)}rt&&Ce.render(E);for(let le=0,ve=ie.length;le<ve;le++){let _e=ie[le];Om(S,E,_e,_e.viewport)}}else U.length>0&&km(G,U,E,N),rt&&Ce.render(E),Om(S,E,N);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(g,E,N),ot.resetDefaultState(),R=-1,F=null,m.pop(),m.length>0?(v=m[m.length-1],X===!0&&te.setGlobalState(g.clippingPlanes,v.state.camera)):v=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function Uu(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ze.intersectsSprite(E)){G&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);let le=q.update(E),ve=E.material;ve.visible&&S.push(E,le,ve,V,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ze.intersectsObject(E))){let le=q.update(E),ve=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Te.copy(le.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(ve)){let _e=le.groups;for(let Ee=0,Ae=_e.length;Ee<Ae;Ee++){let Se=_e[Ee],et=ve[Se.materialIndex];et&&et.visible&&S.push(E,le,et,V,Te.z,Se)}}else ve.visible&&S.push(E,le,ve,V,Te.z,null)}}let ie=E.children;for(let le=0,ve=ie.length;le<ve;le++)Uu(ie[le],N,V,G)}function Om(E,N,V,G){let U=E.opaque,ie=E.transmissive,le=E.transparent;v.setupLightsView(V),X===!0&&te.setGlobalState(g.clippingPlanes,V),G&&be.viewport(_.copy(G)),U.length>0&&Ya(U,N,V),ie.length>0&&Ya(ie,N,V),le.length>0&&Ya(le,N,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function km(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[G.id]===void 0&&(v.state.transmissionRenderTarget[G.id]=new qi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Va:Xi,minFilter:os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ie=v.state.transmissionRenderTarget[G.id],le=G.viewport||_;ie.setSize(le.z,le.w);let ve=g.getRenderTarget();g.setRenderTarget(ie),g.getClearColor(D),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,.5),g.clear(),rt&&Ce.render(V);let _e=g.toneMapping;g.toneMapping=br;let Ee=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),X===!0&&te.setGlobalState(g.clippingPlanes,G),Ya(E,V,G),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Se=0,et=N.length;Se<et;Se++){let ut=N[Se],xt=ut.object,Sn=ut.geometry,Je=ut.material,Me=ut.group;if(Je.side===Ln&&xt.layers.test(G.layers)){let Bt=Je.side;Je.side=vn,Je.needsUpdate=!0,Bm(xt,V,G,Sn,Je,Me),Je.side=Bt,Je.needsUpdate=!0,Ae=!0}}Ae===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}g.setRenderTarget(ve),g.setClearColor(D,k),Ee!==void 0&&(G.viewport=Ee),g.toneMapping=_e}function Ya(E,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ie=E.length;U<ie;U++){let le=E[U],ve=le.object,_e=le.geometry,Ee=G===null?le.material:G,Ae=le.group;ve.layers.test(V.layers)&&Bm(ve,N,V,_e,Ee,Ae)}}function Bm(E,N,V,G,U,ie){E.onBeforeRender(g,N,V,G,U,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(g,N,V,G,E,ie),U.transparent===!0&&U.side===Ln&&U.forceSinglePass===!1?(U.side=vn,U.needsUpdate=!0,g.renderBufferDirect(V,N,G,U,E,ie),U.side=Cr,U.needsUpdate=!0,g.renderBufferDirect(V,N,G,U,E,ie),U.side=Ln):g.renderBufferDirect(V,N,G,U,E,ie),E.onAfterRender(g,N,V,G,U,ie)}function $a(E,N,V){N.isScene!==!0&&(N=Ge);let G=Pe.get(E),U=v.state.lights,ie=v.state.shadowsArray,le=U.state.version,ve=xe.getParameters(E,U.state,ie,N,V),_e=xe.getProgramCacheKey(ve),Ee=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ee===void 0&&(E.addEventListener("dispose",Xe),Ee=new Map,G.programs=Ee);let Ae=Ee.get(_e);if(Ae!==void 0){if(G.currentProgram===Ae&&G.lightsStateVersion===le)return Vm(E,ve),Ae}else ve.uniforms=xe.getUniforms(E),E.onBeforeCompile(ve,g),Ae=xe.acquireProgram(ve,_e),Ee.set(_e,Ae),G.uniforms=ve.uniforms;let Se=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=te.uniform),Vm(E,ve),G.needsLights=xx(E),G.lightsStateVersion=le,G.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ae,G.uniformsList=null,Ae}function zm(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=po.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Vm(E,N){let V=Pe.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function yx(E,N,V,G,U){N.isScene!==!0&&(N=Ge),C.resetTextureUnits();let ie=N.fog,le=G.isMeshStandardMaterial?N.environment:null,ve=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Lr,_e=(G.isMeshStandardMaterial?B:M).get(G.envMap||le),Ee=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ae=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,xt=br;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=g.toneMapping);let Sn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=Sn!==void 0?Sn.length:0,Me=Pe.get(G),Bt=v.state.lights;if(X===!0&&(ee===!0||E!==F)){let Dn=E===F&&G.id===R;te.setState(G,E,Dn)}let je=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Bt.state.version||Me.outputColorSpace!==ve||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==_e||G.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Ee||Me.vertexTangents!==Ae||Me.morphTargets!==Se||Me.morphNormals!==et||Me.morphColors!==ut||Me.toneMapping!==xt||Me.morphTargetsCount!==Je)&&(je=!0):(je=!0,Me.__version=G.version);let qn=Me.currentProgram;je===!0&&(qn=$a(G,N,U));let fs=!1,Mn=!1,Fu=!1,wt=qn.getUniforms(),Ki=Me.uniforms;if(be.useProgram(qn.program)&&(fs=!0,Mn=!0,Fu=!0),G.id!==R&&(R=G.id,Mn=!0),fs||F!==E){$e.reverseDepthBuffer?(ye.copy(E.projectionMatrix),ew(ye),tw(ye),wt.setValue(P,"projectionMatrix",ye)):wt.setValue(P,"projectionMatrix",E.projectionMatrix),wt.setValue(P,"viewMatrix",E.matrixWorldInverse);let Dn=wt.map.cameraPosition;Dn!==void 0&&Dn.setValue(P,Ie.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,Mn=!0,Fu=!0)}if(U.isSkinnedMesh){wt.setOptional(P,U,"bindMatrix"),wt.setOptional(P,U,"bindMatrixInverse");let Dn=U.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),wt.setValue(P,"boneTexture",Dn.boneTexture,C))}U.isBatchedMesh&&(wt.setOptional(P,U,"batchingTexture"),wt.setValue(P,"batchingTexture",U._matricesTexture,C),wt.setOptional(P,U,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",U._indirectTexture,C),wt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",U._colorsTexture,C));let Ou=V.morphAttributes;if((Ou.position!==void 0||Ou.normal!==void 0||Ou.color!==void 0)&&Re.update(U,V,qn),(Mn||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,wt.setValue(P,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ki.envMap.value=_e,Ki.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ki.envMapIntensity.value=N.environmentIntensity),Mn&&(wt.setValue(P,"toneMappingExposure",g.toneMappingExposure),Me.needsLights&&_x(Ki,Fu),ie&&G.fog===!0&&oe.refreshFogUniforms(Ki,ie),oe.refreshMaterialUniforms(Ki,G,K,H,v.state.transmissionRenderTarget[E.id]),po.upload(P,zm(Me),Ki,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(po.upload(P,zm(Me),Ki,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(P,"center",U.center),wt.setValue(P,"modelViewMatrix",U.modelViewMatrix),wt.setValue(P,"normalMatrix",U.normalMatrix),wt.setValue(P,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Dn=G.uniformsGroups;for(let ku=0,Sx=Dn.length;ku<Sx;ku++){let Hm=Dn[ku];I.update(Hm,qn),I.bind(Hm,qn)}}return qn}function _x(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function xx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,V){Pe.get(E.texture).__webglTexture=N,Pe.get(E.depthTexture).__webglTexture=V;let G=Pe.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let V=Pe.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){A=E,b=N,T=V;let G=!0,U=null,ie=!1,le=!1;if(E){let _e=Pe.get(E);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(_e.__hasExternalTextures)C.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Se=E.depthTexture;if(_e.__boundDepthTexture!==Se){if(Se!==null&&Pe.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(le=!0);let Ae=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?U=Ae[N][V]:U=Ae[N],ie=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?U=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[V]:U=Ae,_.copy(E.viewport),w.copy(E.scissor),O=E.scissorTest}else _.copy(Q).multiplyScalar(K).floor(),w.copy(fe).multiplyScalar(K).floor(),O=Oe;if(be.bindFramebuffer(P.FRAMEBUFFER,U)&&G&&be.drawBuffers(E,U),be.viewport(_),be.scissor(w),be.setScissorTest(O),ie){let _e=Pe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,V)}else if(le){let _e=Pe.get(E.texture),Ee=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,V||0,Ee)}R=-1},this.readRenderTargetPixels=function(E,N,V,G,U,ie,le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(ve=ve[le]),ve){be.bindFramebuffer(P.FRAMEBUFFER,ve);try{let _e=E.texture,Ee=_e.format,Ae=_e.type;if(!$e.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-U&&P.readPixels(N,V,G,U,Le.convert(Ee),Le.convert(Ae),ie)}finally{let _e=A!==null?Pe.get(A).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,G,U,ie,le){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(ve=ve[le]),ve){let _e=E.texture,Ee=_e.format,Ae=_e.type;if(!$e.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&V>=0&&V<=E.height-U){be.bindFramebuffer(P.FRAMEBUFFER,ve);let Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(N,V,G,U,Le.convert(Ee),Le.convert(Ae),0);let et=A!==null?Pe.get(A).__webglFramebuffer:null;be.bindFramebuffer(P.FRAMEBUFFER,et);let ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await QM(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Se),P.deleteSync(ut),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(eu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-V),U=Math.floor(E.image.width*G),ie=Math.floor(E.image.height*G),le=N!==null?N.x:0,ve=N!==null?N.y:0;C.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,le,ve,U,ie),be.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,G=null,U=0){E.isTexture!==!0&&(eu("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,V=null);let ie,le,ve,_e,Ee,Ae;V!==null?(ie=V.max.x-V.min.x,le=V.max.y-V.min.y,ve=V.min.x,_e=V.min.y):(ie=E.image.width,le=E.image.height,ve=0,_e=0),G!==null?(Ee=G.x,Ae=G.y):(Ee=0,Ae=0);let Se=Le.convert(N.format),et=Le.convert(N.type);C.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let ut=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),Me=P.getParameter(P.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ee,Ae,ie,le,Se,et,Bt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ee,Ae,Bt.width,Bt.height,Se,Bt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ee,Ae,ie,le,Se,et,Bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me),U===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,G=null,U=0){E.isTexture!==!0&&(eu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0);let ie,le,ve,_e,Ee,Ae,Se,et,ut,xt=E.isCompressedTexture?E.mipmaps[U]:E.image;V!==null?(ie=V.max.x-V.min.x,le=V.max.y-V.min.y,ve=V.max.z-V.min.z,_e=V.min.x,Ee=V.min.y,Ae=V.min.z):(ie=xt.width,le=xt.height,ve=xt.depth,_e=0,Ee=0,Ae=0),G!==null?(Se=G.x,et=G.y,ut=G.z):(Se=0,et=0,ut=0);let Sn=Le.convert(N.format),Je=Le.convert(N.type),Me;if(N.isData3DTexture)C.setTexture3D(N,0),Me=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Me=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Bt=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qn=P.getParameter(P.UNPACK_SKIP_PIXELS),fs=P.getParameter(P.UNPACK_SKIP_ROWS),Mn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ee),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Me,U,Se,et,ut,ie,le,ve,Sn,Je,xt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,U,Se,et,ut,ie,le,ve,Sn,xt.data):P.texSubImage3D(Me,U,Se,et,ut,ie,le,ve,Sn,Je,xt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qn),P.pixelStorei(P.UNPACK_SKIP_ROWS,fs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Mn),U===0&&N.generateMipmaps&&P.generateMipmap(Me),be.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,be.reset(),ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===xm?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ru?"display-p3":"srgb"}};var vu=class t{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=n,this.far=i}clone(){return new t(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yu=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var $p=class extends yn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Lt,u=Lt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _u=class extends Nn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ao=new it,P_=new it,Xc=[],I_=new Yi,Kb=new it,Ta=new Mt,Aa=new Pr,xu=class extends Mt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new _u(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Kb)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ao),I_.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union(I_)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ao),Aa.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(Aa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){let i=this.matrixWorld,r=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(i),e.ray.intersectsSphere(Aa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ao),P_.multiplyMatrices(i,ao),Ta.matrixWorld=P_,Ta.raycast(e,Xc);for(let o=0,a=Xc.length;o<a;o++){let l=Xc[o];l.instanceId=s,l.object=this,n.push(l)}Xc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new _u(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $p(new Float32Array(r*this.count),r,this.count,gm,_i));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Oa=class extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},L_=new it,Zp=new Na,qc=new Pr,Yc=new L,Su=class extends sn{constructor(e=new Wn,n=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(r),qc.radius+=s,e.ray.intersectsSphere(qc)===!1)return;L_.copy(r).invert(),Zp.copy(e.ray).applyMatrix4(L_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let y=d,S=p;y<S;y++){let v=c.getX(y);Yc.fromBufferAttribute(f,v),N_(Yc,v,l,r,e,n,this)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let y=d,S=p;y<S;y++)Yc.fromBufferAttribute(f,y),N_(Yc,y,l,r,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function N_(t,e,n,i,r,s,o){let a=Zp.distanceSqToPoint(t);if(a<n){let l=new L;Zp.closestPointToPoint(t,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ka=class extends yn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kp=class t extends Wn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new rn(s,3)),this.setAttribute("normal",new rn(s.slice(),3)),this.setAttribute("uv",new rn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){let g=new L,x=new L,b=new L;for(let T=0;T<n.length;T+=3)p(n[T+0],g),p(n[T+1],x),p(n[T+2],b),l(g,x,b,m)}function l(m,g,x,b){let T=b+1,A=[];for(let R=0;R<=T;R++){A[R]=[];let F=m.clone().lerp(x,R/T),_=g.clone().lerp(x,R/T),w=T-R;for(let O=0;O<=w;O++)O===0&&R===T?A[R][O]=F:A[R][O]=F.clone().lerp(_,O/w)}for(let R=0;R<T;R++)for(let F=0;F<2*(T-R)-1;F++){let _=Math.floor(F/2);F%2===0?(d(A[R][_+1]),d(A[R+1][_]),d(A[R][_])):(d(A[R][_+1]),d(A[R+1][_+1]),d(A[R+1][_]))}}function c(m){let g=new L;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(m),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z}function u(){let m=new L;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];let x=v(m)/2/Math.PI+.5,b=h(m)/Math.PI+.5;o.push(x,1-b)}y(),f()}function f(){for(let m=0;m<o.length;m+=6){let g=o[m+0],x=o[m+2],b=o[m+4],T=Math.max(g,x,b),A=Math.min(g,x,b);T>.9&&A<.1&&(g<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function p(m,g){let x=m*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function y(){let m=new L,g=new L,x=new L,b=new L,T=new ke,A=new ke,R=new ke;for(let F=0,_=0;F<s.length;F+=9,_+=6){m.set(s[F+0],s[F+1],s[F+2]),g.set(s[F+3],s[F+4],s[F+5]),x.set(s[F+6],s[F+7],s[F+8]),T.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),R.set(o[_+4],o[_+5]),b.copy(m).add(g).add(x).divideScalar(3);let w=v(b);S(T,_+0,m,w),S(A,_+2,g,w),S(R,_+4,x,w)}}function S(m,g,x,b){b<0&&m.x===1&&(o[g]=m.x-1),x.x===0&&x.z===0&&(o[g]=b/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.details)}},Mu=class t extends Kp{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var So=class extends Ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K_,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $c(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Jb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Mo=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ky,endingEnd:ky}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case By:s=e,a=2*n-i;break;case zy:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case By:o=e,l=2*i-n;break;case zy:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,y=(i-n)/(r-n),S=y*y,v=S*y,h=-d*v+2*d*S-d*y,m=(1+d)*v+(-1.5-2*d)*S+(-.5+d)*y+1,g=(-1-p)*v+(1.5+p)*S+.5*y,x=p*v-p*S;for(let b=0;b!==a;++b)s[b]=h*o[u+b]+m*o[c+b]+g*o[l+b]+x*o[f+b];return s}},jp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},Qp=class extends Mo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ui=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$c(n,this.TimeBufferType),this.values=$c(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:$c(e.times,Array),values:$c(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case tu:n=this.InterpolantFactoryMethodDiscrete;break;case Pp:n=this.InterpolantFactoryMethodLinear;break;case pd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tu;case this.InterpolantFactoryMethodLinear:return Pp;case this.InterpolantFactoryMethodSmooth:return pd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Jb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===pd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,p=f+i;for(let y=0;y!==i;++y){let S=n[f+y];if(S!==n[d+y]||S!==n[p+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Pp;var ls=class extends ui{constructor(e,n,i){super(e,n,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=tu;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var em=class extends ui{};em.prototype.ValueTypeName="color";var tm=class extends ui{};tm.prototype.ValueTypeName="number";var nm=class extends Mo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)xi.slerpFlat(s,0,o,c-a,o,c,l);return s}},wu=class extends ui{InterpolantFactoryMethodLinear(e){return new nm(this.times,this.values,this.getValueSize(),e)}};wu.prototype.ValueTypeName="quaternion";wu.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends ui{constructor(e,n,i){super(e,n,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=tu;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var im=class extends ui{};im.prototype.ValueTypeName="vector";var rm=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],y=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}},jb=new rm,sm=class{constructor(e){this.manager=e!==void 0?e:jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sm.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ba=class extends sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var Wd=new it,D_=new L,U_=new L,Eu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;D_.setFromMatrixPosition(e.matrixWorld),n.position.copy(D_),U_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(U_),n.updateMatrixWorld(),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var F_=new it,ba=new L,Xd=new L,om=class extends Eu{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,n=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),Xd.copy(i.position),Xd.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Xd),i.updateMatrixWorld(),r.makeTranslation(-ba.x,-ba.y,-ba.z),F_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(F_)}},za=class extends Ba{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new om}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},am=class extends Eu{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tu=class extends Ba{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new am}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Au=class extends Ba{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mm="\\[\\]\\.:\\/",Qb=new RegExp("["+Mm+"]","g"),wm="[^"+Mm+"]",e2="[^"+Mm.replace("\\.","")+"]",t2=/((?:WC+[\/:])*)/.source.replace("WC",wm),n2=/(WCOD+)?/.source.replace("WCOD",e2),i2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wm),r2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wm),s2=new RegExp("^"+t2+n2+i2+r2+"$"),o2=["material","materials","bones","map"],lm=class{constructor(e,n,i){let r=i||mt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},mt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qb,"")}static parseTrackName(e){let n=s2.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);o2.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=lm;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z2=new Float32Array(1);var O_=new it,bu=class{constructor(e,n,i=0,r=1/0){this.ray=new Na(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return O_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O_),this}intersectObject(e,n=!0,i=[]){return cm(e,this,i,n),i.sort(k_),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)cm(e[r],this,i,n);return i.sort(k_),i}};function k_(t,e){return t.distance-e.distance}function cm(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)cm(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);var wi=128,ax=124,Tt=1.3,ox={slim:{w:.85,h:1},medium:{w:1,h:1},heavy:{w:1.2,h:1.04},huge:{w:1.42,h:1.1}},l2={rx:0,ry:0,rot:0,fx:1,alpha:1,lean:.08,head:0,sA1:.75,eA1:1.85,sA2:.55,eA2:2.1,h1:.42,k1:-.42,h2:-.38,k2:.3,fx2:null},we=t=>({...l2,...t}),c2=[[we({}),180],[we({ry:1,sA1:.72,eA1:1.9}),180],[we({ry:2,sA1:.7,eA1:1.95,sA2:.5}),180],[we({ry:1}),180]],Tm={projectile:[[we({lean:-.12,sA1:-.5,eA1:.5,sA2:-.6,eA2:.4,ry:2}),160],[we({lean:-.18,sA1:-.7,eA1:.7,sA2:-.8,eA2:.6,ry:3}),140],[we({lean:.28,sA1:1.52,eA1:0,sA2:1.45,eA2:.05,h1:.8,k1:-.8,h2:-.7,k2:.1,ry:4}),120,"projectile"],[we({lean:.28,sA1:1.52,eA1:0,sA2:1.45,eA2:.05,h1:.8,k1:-.8,h2:-.7,k2:.1,ry:4}),420],[we({lean:.15,ry:2}),160]],fire:[[we({lean:-.2,head:-.2,sA1:-.4,sA2:-.5,ry:1}),220],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire"}),120,"fire"],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire2"}),120],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire"}),120],[we({lean:.2,head:.25,sA1:.3,eA1:.4,sA2:.2,eA2:.4,ry:2,fx2:"fire2"}),120],[we({}),160]],uppercut:[[we({ry:8,lean:.25,sA1:.2,eA1:.6,h1:.9,k1:-1.4,h2:-.3,k2:.9}),120],[we({ry:-18,lean:.05,sA1:2.95,eA1:.05,sA2:.3,eA2:1.2,h1:1.1,k1:-1.8,h2:.1,k2:.2}),160],[we({ry:-34,lean:-.05,sA1:3.05,eA1:0,sA2:.2,eA2:1,h1:1.2,k1:-2,h2:.1,k2:.1}),260],[we({ry:-14,lean:.05,sA1:2.4,eA1:.4,h1:.6,k1:-.8,h2:-.2,k2:.4}),150],[we({ry:4,h1:.7,k1:-1,h2:-.5,k2:.8}),160]],spin:[0,1,2,3,4,5,6,7].map(t=>[we({ry:-16,rx:t*3,fx:t%2?-1:1,lean:0,sA1:1.2,eA1:.3,sA2:-.9,eA2:.4,h1:1.57,k1:0,h2:.5,k2:-1.6}),90]).concat([[we({rx:24,ry:2}),140],[we({rx:12}),120]]),punch:[0,1,2,3,4,5,6,7].map(t=>[t%2?we({lean:.2,sA1:1.6+(t%4===1?.2:-.1),eA1:0,sA2:.6,eA2:1.8,h1:.6,k1:-.6}):we({lean:.2,sA2:1.55,eA2:0,sA1:.5,eA1:1.6,h1:.6,k1:-.6}),70]).concat([[we({}),140]]),kick:[0,1,2,3,4,5,6,7].map(t=>[we({ry:-6,lean:-.25,h1:[1.35,1.75,1.5,1.9][t%4],k1:0,h2:-.15,k2:.1,sA1:1,eA1:1.2,sA2:-.4,eA2:.5}),70]).concat([[we({}),140]]),charge:[[we({ry:4,lean:.3,h1:.8,k1:-1.1,h2:-.6,k2:.6}),140],[we({ry:-8,rx:10,lean:1.35,sA1:1.5,eA1:0,sA2:1.4,eA2:0,h1:-.9,k1:.2,h2:-1.2,k2:.3}),90],[we({ry:-8,rx:22,lean:1.4,sA1:1.55,eA1:0,sA2:1.45,eA2:0,h1:-1,k1:.2,h2:-1.3,k2:.3}),90],[we({ry:-8,rx:30,lean:1.45,sA1:1.55,eA1:0,sA2:1.45,eA2:0,h1:-1,k1:.2,h2:-1.3,k2:.3}),200],[we({rx:18,ry:2}),140],[we({rx:8}),120]],grab:[[we({lean:.3,sA1:1.6,eA1:0,sA2:1.5,eA2:.1}),160],...[0,1,2,3,4,5].map(t=>[we({ry:-6-t%3*4,fx:t%2?-1:1,lean:0,sA1:1.6,eA1:0,sA2:1.6,eA2:0}),100]),[we({ry:6,lean:.3,h1:.9,k1:-1.3,h2:-.6,k2:.9}),260]],electric:[0,1,2,3,4,5,6,7,8,9].map(t=>[we({ry:7,lean:.35,sA1:2.4+t%2*.3,eA1:.6,sA2:2.2,eA2:.7,h1:.9,k1:-1.4,h2:-.6,k2:1,fx2:t%2?"zap":"zap2"}),70]).concat([[we({}),140]]),roll:[0,1,2,3,4,5,6,7].map(t=>[we({ry:-10,rx:t*5,rot:t*Math.PI/2,lean:.9,head:.6,sA1:1.8,eA1:1.2,sA2:1.7,eA2:1.3,h1:2.2,k1:-2.6,h2:2,k2:-2.5}),70]).concat([[we({rx:30,ry:2}),140],[we({rx:14}),120]]),flip:[0,1,2,3,4,5,6,7].map(t=>{let e=t/7;return[we({ry:-Math.sin(e*Math.PI)*40,rx:e*26,rot:e*Math.PI*2,lean:.6,sA1:2.6,eA1:.3,sA2:2.4,eA2:.4,h1:1.6,k1:-1.8,h2:1.4,k2:-1.6}),85]}).concat([[we({rx:26,ry:4,h1:.8,k1:-1.2}),140],[we({rx:12}),120]]),teleport:[[we({alpha:.6,ry:1}),90],[we({alpha:.3,ry:2}),90],[we({alpha:0,ry:2}),260],[we({alpha:.3,rx:30}),90],[we({alpha:.7,rx:30}),90],[we({rx:30}),160],[we({rx:12}),120]]},j2=Object.keys(Tm);function Am(t){return(t||"").split(";").map(e=>e.trim()).filter(Boolean).map(e=>{let[n,i]=e.split(":");return{name:n.trim(),kind:(i||"punch").trim()}})}function u2(t){let[e,n,i,r,s]=(t||"").split(";").map(o=>o.trim());return{gi:e||"#f2efe6",skin:n||"#e0a878",hair:i||"#2a1a12",accent:r||"#c4283c",belt:s||"#1a1a1a"}}var $i=class{constructor(e,n={}){this.c=e,this.pal=u2(e.Palette),this.build=ox[e.Build]||ox.medium,this.moves=Am(e.Moves),this.canvas=document.createElement("canvas"),this.canvas.width=wi,this.canvas.height=wi,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),this.ctx.imageSmoothingEnabled=!1,this.onEvent=n.onEvent||(()=>{}),this.sheet=Ay(e.Id),this.sheetImg=this.sheet?ud(this.sheet.image):null,this.setMove(null),this.dirty=!0,this.render()}get usingSheet(){return!!(this.sheetImg&&this.sheetImg.complete&&this.sheetImg.naturalWidth)}setMove(e){let n=e?this.moves.find(i=>i.name===e):null;if(this.moveName=n?n.name:null,this.kind=n?n.kind:"idle",this.frames=n?Tm[n.kind]||Tm.punch:c2,this.frame=0,this.t=0,this.dirty=!0,this.firedFrame=-1,this.sheet){let i=this.sheet.anims||{};this.sheetAnim=n&&(i[n.name]||i[n.kind])||i.idle||null}}update(e){var i;if(this.t+=e,this.usingSheet&&this.sheetAnim){let r=this.sheetAnim.fps||10,s=this.sheetAnim.frames.length,o=Math.floor(this.t/1e3*r);if(this.moveName&&o>=s)return this.setMove(null),!0;let a=o%s;return a!==this.frame||this.dirty?(this.frame=a,this.moveName&&this.sheetAnim.event&&a===((i=this.sheetAnim.eventFrame)!=null?i:0)&&this.firedFrame!==a&&(this.firedFrame=a,this.onEvent(this.sheetAnim.event,this)),this.render(),!0):!1}let n=this.dirty;for(;this.t>=this.frames[this.frame][1];){if(this.t-=this.frames[this.frame][1],this.frame++,n=!0,this.frame>=this.frames.length){if(this.moveName)return this.setMove(null),this.render(),!0;this.frame=0}let r=this.frames[this.frame][2];r&&this.firedFrame!==this.frame&&(this.firedFrame=this.frame,this.onEvent(r,this))}return n&&this.render(),n}render(){this.dirty=!1;let e=this.ctx;if(e.clearRect(0,0,wi,wi),this.usingSheet&&this.sheetAnim){let n=this.sheetAnim.frames[this.frame%this.sheetAnim.frames.length],[i,r,s,o,a]=n,l=Math.min(1,(wi-4)/o,(wi-4)/s)*(this.sheet.scale||1),c=s*l,u=o*l,f=a!=null?a*l:c/2;e.drawImage(this.sheetImg,i,r,s,o,Math.round(wi*.42-f),Math.round(ax+2-u),c,u);return}h2(e,this.frames[this.frame][0],this.pal,this.build,this.c.Id)}};function Mi(t,e,n,i,r,s,o,a){let l=e+Math.sin(r)*i,c=n+Math.cos(r)*i;return t.lineCap="round",t.strokeStyle=a,t.lineWidth=s+2,t.beginPath(),t.moveTo(e,n),t.lineTo(l,c),t.stroke(),t.strokeStyle=o,t.lineWidth=s,t.beginPath(),t.moveTo(e,n),t.lineTo(l,c),t.stroke(),[l,c]}function Em(t,e,n,i,r,s){t.fillStyle=s,t.beginPath(),t.arc(e,n,i+1,0,Math.PI*2),t.fill(),t.fillStyle=r,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}function h2(t,e,n,i,r){let s="#0d0f1a",o=i.w,a=i.h,l=15*Tt*a,c=15*Tt*a,u=21*Tt*a,f=11.5*Tt*a,d=10.5*Tt*a,p=6.2*Tt,y=5.5*Tt*o,S=4.6*Tt*o;t.save(),t.globalAlpha=e.alpha;let v=54+e.rx,h=ax-l-c+2+e.ry;t.translate(v,h-u*.3),t.rotate(e.rot),t.scale(e.fx,1),t.translate(0,u*.3);let m=sd(n.gi,-.35),g=sd(n.skin,-.3),x=[Math.sin(e.lean)*u,-Math.cos(e.lean)*u],b=Q=>[x[0]+(Q?-2:2)*o,x[1]+3],T=Mi(t,-2,0,l,e.h2,y,m,s),A=Mi(t,T[0],T[1],c,e.h2+e.k2,y*.9,m,s);Mi(t,A[0],A[1],4*Tt,Math.PI/2,3*Tt,g,s);let R=b(1),F=Mi(t,R[0],R[1],f,e.sA2,S,o>1.1?g:m,s),_=Mi(t,F[0],F[1],d,e.sA2+e.eA2,S*.9,g,s);Em(t,_[0],_[1],2.6*Tt*o,g,s),t.lineCap="round",t.strokeStyle=s,t.lineWidth=12*Tt*o+2,t.beginPath(),t.moveTo(0,-2),t.lineTo(x[0]*.92,x[1]*.92),t.stroke(),t.strokeStyle=n.gi,t.lineWidth=12*Tt*o,t.stroke(),t.strokeStyle=n.skin,t.lineWidth=4*Tt*o,t.beginPath(),t.moveTo(x[0]*.9,x[1]*.9),t.lineTo(x[0]*.55,x[1]*.55),t.stroke(),t.strokeStyle=n.belt,t.lineWidth=3*Tt;let w=Math.cos(e.lean)*6*Tt*o,O=Math.sin(e.lean)*6*Tt*o;t.beginPath(),t.moveTo(x[0]*.12-w,x[1]*.12-O),t.lineTo(x[0]*.12+w,x[1]*.12+O),t.stroke(),T=Mi(t,2,0,l,e.h1,y,n.gi,s),A=Mi(t,T[0],T[1],c,e.h1+e.k1,y*.9,n.gi,s),Mi(t,A[0],A[1],4*Tt,Math.PI/2,3*Tt,n.skin,s);let D=x[0]+Math.sin(e.lean+e.head)*p*1.1,k=x[1]-Math.cos(e.lean+e.head)*p*1.1;Em(t,D,k,p,n.skin,s),t.fillStyle=n.hair,t.beginPath(),t.arc(D-.5,k-1,p,Math.PI*1.02+e.lean,Math.PI*1.98+e.lean),t.fill(),t.strokeStyle=n.accent,t.lineWidth=2.2*Tt,t.beginPath(),t.moveTo(D-p,k-1.5),t.lineTo(D+p,k-1.5),t.moveTo(D-p,k-1.5),t.lineTo(D-p-6,k+2),t.stroke(),t.fillStyle=s,t.fillRect(D+p*.35,k+.5,2,2);let $=b(0);if(F=Mi(t,$[0],$[1],f,e.sA1,S,o>1.1?n.skin:n.gi,s),_=Mi(t,F[0],F[1],d,e.sA1+e.eA1,S*.9,n.skin,s),Em(t,_[0],_[1],2.8*Tt*o,n.skin,s),e.fx2==="fire"||e.fx2==="fire2"){let Q=e.fx2==="fire2"?1.25:1;t.fillStyle="#f2a93b",t.beginPath(),t.moveTo(D+p,k+2),t.lineTo(D+p+40*Q,k-12*Q),t.lineTo(D+p+46*Q,k+6),t.lineTo(D+p+38*Q,k+18*Q),t.closePath(),t.fill(),t.fillStyle="#ffe28a",t.beginPath(),t.moveTo(D+p,k+2),t.lineTo(D+p+24*Q,k-5),t.lineTo(D+p+24*Q,k+9),t.closePath(),t.fill()}t.restore();let H=t.getImageData(0,0,wi,wi),K=H.data,z=e.fx2==="zap"||e.fx2==="zap2",se=e.fx2==="zap"?[255,238,120]:[140,220,255];for(let Q=3;Q<K.length;Q+=4)K[Q]<110?K[Q]=0:K[Q]=Math.round(255*nt(e.alpha,0,1));if(z){let Q=wi,fe=new Uint8ClampedArray(K);for(let Oe=1;Oe<Q-1;Oe++)for(let ze=1;ze<Q-1;ze++){let X=(Oe*Q+ze)*4;fe[X+3]||(fe[X+7]||fe[X-1]||fe[X+Q*4+3]||fe[X-Q*4+3])&&(ze+Oe+(e.fx2==="zap"?0:1))%3&&(K[X]=se[0],K[X+1]=se[1],K[X+2]=se[2],K[X+3]=255)}}t.putImageData(H,0,0)}var f2=3,Iu=2.05,Lu=2.7;function Eo(t,e,n,i={}){let r=document.createElement("canvas");r.width=t,r.height=e,n(r.getContext("2d"),t,e);let s=new ka(r);return s.magFilter=Lt,s.minFilter=i.mip?fm:Lt,s.generateMipmaps=!!i.mip,s.colorSpace=mn,i.repeat&&(s.wrapS=s.wrapT=Ia,s.repeat.set(i.repeat[0],i.repeat[1])),s}function d2(){let t=Rn(77);return Eo(128,128,(e,n,i)=>{let r=["#1d2a1a","#24331f","#2c3b22","#3a3424","#2f2a20","#463d2c","#1a2216"];for(let s=0;s<i;s+=2)for(let o=0;o<n;o+=2){let a=t();e.fillStyle=r[Math.floor(a*a*r.length)],e.fillRect(o,s,2,2)}for(let s=0;s<18;s++){e.fillStyle=t()<.5?"#4a3e2c":"#3b3226";let o=t()*n,a=t()*i,l=3+t()*9;for(let c=0;c<l*6;c++)e.fillRect(Math.round(o+(t()-.5)*l*2),Math.round(a+(t()-.5)*l),2,2)}for(let s=0;s<60;s++)e.fillStyle=t()<.5?"#5d5a52":"#77736a",e.fillRect(Math.round(t()*n),Math.round(t()*i),2,1)},{repeat:[18,12],mip:!0})}function p2(){return Eo(4,256,(t,e,n)=>{let i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"#04060f"),i.addColorStop(.5,"#0a1126"),i.addColorStop(.8,"#111b3a"),i.addColorStop(1,"#1a2647"),t.fillStyle=i,t.fillRect(0,0,e,n)})}function m2(){let t=Rn(31);return Eo(512,128,(e,n,i)=>{e.fillStyle="#0b1022",e.beginPath(),e.moveTo(0,i);let r=i*.6;for(let s=0;s<=n;s+=8)r=nt(r+(t()-.5)*18,i*.25,i*.85),e.lineTo(s,r);e.lineTo(n,i),e.fill();for(let s=0;s<6;s++){let o=t()*n,a=20+t()*40;e.fillRect(o,i-a-20,5,a+20),t()<.5&&e.fillRect(o-10,i-a-22,26,4)}})}function g2(){let t=Rn(5);return Eo(32,32,(e,n,i)=>{for(let r=0;r<14;r++){e.fillStyle=["#2f4a26","#3c5c2c","#263d1f","#4d6b32"][r%4];let s=2+t()*(n-4),o=8+t()*20,a=(t()-.5)*6;for(let l=0;l<o;l+=2)e.fillRect(Math.round(s+a*l/o),i-l-2,2,2)}})}function v2(t){return Eo(32,32,(e,n,i)=>{let r=n/2,s=i/2;for(let o=0;o<i;o+=2)for(let a=0;a<n;a+=2){let l=Math.hypot(a-r,o-s)/(n/2);l>1||(e.fillStyle=l<.35?"#ffffff":l<.6?"#cfe8ff":t,e.globalAlpha=l<.6?1:.85-l*.4,e.fillRect(a,o,2,2))}})}function y2(){return Eo(32,16,(t,e,n)=>{t.fillStyle="rgba(0,0,0,0.55)",t.beginPath(),t.ellipse(e/2,n/2,e/2-1,n/2-1,0,0,Math.PI*2),t.fill()})}function cx(t,e,n,i=6,r=!0){let s=[e,n],o=e.distanceTo(n)*.18;for(let c=0;c<i;c++){let u=[];for(let f=0;f<s.length-1;f++){let d=s[f],p=s[f+1],y=d.clone().lerp(p,.5);y.x+=(t()-.5)*o*2,y.z+=(t()-.5)*o,u.push(d,y)}u.push(s[s.length-1]),s=u,o*=.55}let a=[s];if(!r)return a;let l=2+Math.floor(t()*3);for(let c=0;c<l;c++){let u=Math.floor(s.length*(.15+t()*.5)),f=s[u],d=f.clone().add(new L((t()-.5)*8,-3-t()*6,(t()-.5)*2)),p=cx(t,f,d,4,!1)[0];a.push(p)}return a}function lx(t,e,n){let i=[],r=[],s=0,o=new L;for(let[l,c]of t.entries()){let u=l===0?e:e*.55;for(let f=0;f<c.length;f++){let d=c[Math.max(0,f-1)],p=c[Math.min(c.length-1,f+1)];if(o.subVectors(p,d).cross(n).normalize().multiplyScalar(u*(1-f/c.length*.5)),i.push(c[f].x-o.x,c[f].y-o.y,c[f].z-o.z),i.push(c[f].x+o.x,c[f].y+o.y,c[f].z+o.z),f>0){let y=s+f*2;r.push(y-2,y-1,y,y-1,y+1,y)}}s+=c.length*2}let a=new Wn;return a.setAttribute("position",new rn(i,3)),a.setIndex(r),a}var Nu=class{constructor(e,n,i={}){this.container=e,this.cb=i,this.rng=Rn(2024),this.mode="overview",this.hovered=null,this.selected=null,this.visible=!0,this.projectiles=[],this.bolts=[],this.nextBolt=800,this.flash=0;let r=this.renderer=new gu({antialias:!1,powerPreference:"low-power"});r.setPixelRatio(1/f2),r.outputColorSpace=mn,r.domElement.className="field-canvas",e.appendChild(r.domElement);let s=this.scene=new yu;this.skyTex=p2(),s.background=this.skyTex,s.fog=new vu(659750,14,42),this.camera=new Kt(38,1,.1,200),this.ambient=new Au(4872842,1.1),s.add(this.ambient),this.moon=new Tu(9414368,.9),this.moon.position.set(-6,10,8),s.add(this.moon),this.boltLight=new za(13623551,0,60,1.2),s.add(this.boltLight);let o=new Mt(new ci(160,110),new So({map:d2()}));o.rotation.x=-Math.PI/2,o.position.z=0,s.add(o);let a=new Mt(new ci(120,30),new li({map:m2(),transparent:!0,fog:!1}));a.position.set(0,6,-34),s.add(a),this.foreground=[];let l=new So({color:5985865,flatShading:!0}),c=this.rng;for(let m=0;m<70;m++){let g=.12+c()*c()*.9,x=new Mt(new Mu(g,0),l),b=(c()-.5)*40,T=-2-c()*22;c()<.35&&(T=1.2+c()*3),Math.abs(T)<1.2&&(T-=2),x.position.set(b,g*.4,T),x.rotation.set(c()*3,c()*3,c()*3),x.scale.y=.6+c()*.5,T>-1.5&&this.foreground.push(x),s.add(x)}let u=new ci(.9,.9);u.translate(0,.45,0);let f=new So({map:g2(),transparent:!0,alphaTest:.5,side:Ln}),d=420,p=new xu(u,f,d),y=new it,S=new xi;for(let m=0;m<d;m++){let g=(c()-.5)*50,x=4-c()*28,b=.6+c()*.9;S.setFromEuler(new Gn(0,(c()-.5)*.5,0)),y.compose(new L(g,0,x),S,new L(b,b,b)),p.setMatrixAt(m,y)}s.add(p);let v=new Wn,h=[];for(let m=0;m<160;m++)h.push((c()-.5)*30,c()*8,-c()*16+3);v.setAttribute("position",new rn(h,3)),this.dust=new Su(v,new Oa({color:10466024,size:.05,transparent:!0,opacity:.6})),s.add(this.dust),this.shadowTex=y2(),this.fighters=n.map((m,g)=>{let x=Math.ceil(n.length/2),b=g%2,A=(Math.floor(g/2)-(x-1)/2)*Iu+(b?Iu/2:0)-Iu/4,R=b?-1.9:0,F=new $i(m,{onEvent:(k,$)=>this.onFighterEvent(k,$)}),_=new ka(F.canvas);_.magFilter=Lt,_.minFilter=Lt,_.generateMipmaps=!1,_.colorSpace=mn;let w=new li({map:_,transparent:!0,alphaTest:.5,color:2764880,fog:!1}),O=new Mt(new ci(Lu,Lu),w);O.position.set(A,Lu/2-.08,R),O.userData.id=m.Id,s.add(O);let D=new Mt(new ci(1.3,.45),new li({map:this.shadowTex,transparent:!0,depthWrite:!1}));return D.rotation.x=-Math.PI/2,D.position.set(A-.25,.02,R),s.add(D),{c:m,f:F,tex:_,mat:w,mesh:O,sh:D,home:new L(A,O.position.y,R),tint:0,fade:1,phase:c()*600}}),this.fighters.forEach(m=>m.f.update(m.phase)),this.raycaster=new bu,this.pointer=new ke(-9,-9),this.camFrom=null,this.camT=1,this.camPos=new L,this.camLook=new L,this.onMove=m=>{let g=r.domElement.getBoundingClientRect();this.pointer.set((m.clientX-g.left)/g.width*2-1,-((m.clientY-g.top)/g.height)*2+1)},this.onLeave=()=>this.pointer.set(-9,-9),this.onClick=()=>{this.mode==="overview"&&this.hovered&&this.select(this.hovered)},r.domElement.addEventListener("pointermove",this.onMove),r.domElement.addEventListener("pointerleave",this.onLeave),r.domElement.addEventListener("click",this.onClick),this.resize(),this.overviewPose(this.camPos,this.camLook),this.last=performance.now(),this.loop=this.loop.bind(this),this.raf=requestAnimationFrame(this.loop)}resize(){let e=this.container.clientWidth,n=this.container.clientHeight;this.w=e,this.h=n,this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.camT>=1&&(this.mode==="overview"?this.overviewPose(this.camPos,this.camLook):this.detailPose(this.selected,this.camPos,this.camLook))}overviewPose(e,n){var l;let r=(Math.ceil((((l=this.fighters)==null?void 0:l.length)||16)/2)-1)/2*Iu+Lu*.7,s=this.camera.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*this.camera.aspect),a=nt(r/Math.tan(o/2),8,40);e.set(0,2.1+a*.05,a+.5),n.set(0,2,-1)}detailPose(e,n,i){let r=this.fighters.find(c=>c.c.Id===e);if(!r)return this.overviewPose(n,i);let s=7.4,o=this.camera.fov*Math.PI/180,a=Math.tan(o/2)*s*this.camera.aspect,l=this.camera.aspect>1.2?a*.52:0;n.set(r.home.x+l,2.1,r.home.z+s),i.set(r.home.x+l,1.45,r.home.z)}tweenCamera(e,n){this.camFrom={pos:this.camPos.clone(),look:this.camLook.clone()},this.camTo={pos:e,look:n},this.camT=0}select(e){var r,s,o,a;this.mode="detail",this.selected=e,this.hovered=null;let n=new L,i=new L;this.detailPose(e,n,i),this.tweenCamera(n,i),(s=(r=this.cb).onSelect)==null||s.call(r,e),(a=(o=this.cb).onHover)==null||a.call(o,null)}back(){var s,o;let e=this.selected;this.mode="overview",this.selected=null;let n=this.fighters.find(a=>a.c.Id===e);n==null||n.f.setMove(null);let i=new L,r=new L;this.overviewPose(i,r),this.tweenCamera(i,r),(o=(s=this.cb).onSelect)==null||o.call(s,null)}playMove(e){let n=this.fighters.find(i=>i.c.Id===this.selected);n&&n.f.setMove(e)}onFighterEvent(e,n){if(e!=="projectile")return;let i=this.fighters.find(l=>l.f===n);if(!i)return;let r=n.pal.accent,s=new li({map:v2(r),transparent:!0,blending:Pa,depthWrite:!1,fog:!1}),o=new Mt(new ci(.9,.9),s);o.position.set(i.mesh.position.x+.95,i.mesh.position.y+.2,i.mesh.position.z+.05),this.scene.add(o);let a=new za(new Fe(r),3,6,1.5);a.position.copy(o.position),this.scene.add(a),this.projectiles.push({m:o,light:a,life:0})}spawnBolt(){let e=this.rng,n=(e()-.5)*36,i=-8-e()*18,r=new L(n+(e()-.5)*6,20,i),s=new L(n,0,i),o=cx(e,r,s),a=new L().subVectors(this.camera.position,s).normalize(),l=new Mt(lx(o,.09,a),new li({color:15922943,transparent:!0,fog:!1,side:Ln})),c=new Mt(lx(o,.45,a),new li({color:7310591,transparent:!0,opacity:.35,blending:Pa,depthWrite:!1,fog:!1,side:Ln}));this.scene.add(c,l),this.bolts.push({core:l,glow:c,life:0,max:260+e()*260}),this.boltLight.position.set(n,8,i+4),this.flash=1}setVisible(e){this.visible=e}loop(e){var r,s;this.raf=requestAnimationFrame(this.loop);let n=Math.min(64,e-this.last);if(this.last=e,!this.visible)return;if(this.camT<1&&this.camFrom){this.camT=Math.min(1,this.camT+n/1100);let o=Ws(this.camT);this.camPos.lerpVectors(this.camFrom.pos,this.camTo.pos,o),this.camLook.lerpVectors(this.camFrom.look,this.camTo.look,o)}let i=Math.sin(e*25e-5)*.15;if(this.camera.position.set(this.camPos.x+i,this.camPos.y,this.camPos.z),this.camera.lookAt(this.camLook),this.mode==="overview"&&this.camT>=1){this.raycaster.setFromCamera(this.pointer,this.camera);let o=this.raycaster.intersectObjects(this.fighters.map(l=>l.mesh)),a=o.length?o[0].object.userData.id:null;a!==this.hovered&&(this.hovered=a,this.renderer.domElement.style.cursor=a?"pointer":"default",(s=(r=this.cb).onHover)==null||s.call(r,a))}for(let o of this.fighters){let a=o.c.Id===this.selected,l=this.mode==="overview"?o.c.Id===this.hovered:a;o.tint=Gs(o.tint,l?1:0,Math.min(1,n/120));let c=this.mode==="detail"&&!a?0:1;o.fade=Gs(o.fade,c,Math.min(1,n/250));let u=.07+this.flash*.3,f=Gs(u,1,o.tint);o.mat.color.setRGB(f,f*(.96+o.tint*.04),f*(1.5-o.tint*.5)),o.mat.opacity=o.fade,o.mesh.visible=o.fade>.02,o.sh.visible=o.mesh.visible;let d=o.tint*.12*(this.mode==="overview"?1:0);o.mesh.position.y=o.home.y+d,l||o.f.moveName?o.f.update(n)&&(o.tex.needsUpdate=!0):o.f.update(n*.5)&&(o.tex.needsUpdate=!0)}for(let o of this.foreground)o.visible=this.mode==="overview";for(let o=this.projectiles.length-1;o>=0;o--){let a=this.projectiles[o];a.life+=n,a.m.position.x+=n*.006,a.m.rotation.z+=n*.01;let l=1+Math.sin(a.life*.05)*.12;a.m.scale.set(l,l,l),a.light.position.copy(a.m.position),a.life>1400&&(this.scene.remove(a.m,a.light),a.m.geometry.dispose(),a.m.material.map.dispose(),a.m.material.dispose(),this.projectiles.splice(o,1))}this.nextBolt-=n,this.nextBolt<=0&&(this.spawnBolt(),this.rng()<.35&&setTimeout(()=>this.spawnBolt(),120),this.nextBolt=1400+this.rng()*3800);for(let o=this.bolts.length-1;o>=0;o--){let a=this.bolts[o];a.life+=n;let l=a.life<a.max*.6?Math.floor(a.life/45)%3!==1?1:.25:1-(a.life-a.max*.6)/(a.max*.4);a.core.material.opacity=nt(l,0,1),a.glow.material.opacity=nt(l,0,1)*.35,a.life>a.max&&(this.scene.remove(a.core,a.glow),a.core.geometry.dispose(),a.glow.geometry.dispose(),a.core.material.dispose(),a.glow.material.dispose(),this.bolts.splice(o,1))}this.flash*=Math.pow(.9,n/16),this.boltLight.intensity=this.flash*260,this.ambient.intensity=1.1+this.flash*1.6,this.dust.position.y=Math.sin(e*3e-4)*.2,this.dust.rotation.y=e*2e-5,this.renderer.render(this.scene,this.camera)}dispose(){cancelAnimationFrame(this.raf);let e=this.renderer.domElement;e.removeEventListener("pointermove",this.onMove),e.removeEventListener("pointerleave",this.onLeave),e.removeEventListener("click",this.onClick),this.scene.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.renderer.dispose(),e.remove()}};var us=gt(Yn(),1);var Ga=gt(tn(),1);function bm({open:t,seed:e=3,color:n="#ece6d6",className:i="",children:r,paintMs:s=850,onClosed:o}){let a=(0,us.useRef)(null),l=(0,us.useRef)(null),c=(0,us.useRef)({p:0,target:0,from:0,start:0,strokes:null,w:0,h:0});return(0,us.useEffect)(()=>{let u=c.current;u.from=u.p,u.target=t?1:0,u.start=performance.now()},[t]),(0,us.useEffect)(()=>{let u=l.current,f=u.getContext("2d"),d,p=c.current,y=()=>{let h=a.current.getBoundingClientRect(),m=Math.min(window.devicePixelRatio||1,2);p.w=h.width,p.h=h.height,u.width=h.width*m,u.height=h.height*m,f.setTransform(m,0,0,m,0,0),p.strokes=yc(h.width*.03,h.height*.02,h.width*.94,h.height*.96,e,{color:n,rows:Math.max(4,Math.round(h.height/120)),dry:.6}),p.dirty=!0};y();let S=new ResizeObserver(y);S.observe(a.current);let v=h=>{d=requestAnimationFrame(v);let m=p.target?s:s*.6,g=nt((h-p.start)/m,0,1),x=p.p;p.p=p.from+(p.target-p.from)*(p.target?va(g):Ws(g)),!(x===p.p&&!p.dirty)&&(p.dirty=!1,f.clearRect(0,0,p.w,p.h),_c(f,p.strokes,p.p,{reverse:!p.target,overlap:.5}),!p.target&&g>=1&&x!==0&&(o==null||o()))};return d=requestAnimationFrame(v),()=>{cancelAnimationFrame(d),S.disconnect()}},[e,n,s,o]),(0,Ga.jsxs)("div",{ref:a,className:`brush-panel ${t?"open":""} ${i}`,children:[(0,Ga.jsx)("canvas",{ref:l,className:"brush-panel-bg","aria-hidden":"true"}),(0,Ga.jsx)("div",{className:"brush-panel-content",children:r})]})}var Be=gt(tn(),1);function _2(){try{let t=document.createElement("canvas");return!!(t.getContext("webgl2")||t.getContext("webgl"))}catch{return!1}}function x2({characters:t,onSelect:e,onHover:n,selected:i,fighterRef:r}){let s=(0,kt.useRef)(null);return(0,kt.useEffect)(()=>{let o=t.map(f=>new $i(f));r.current=o;let a=s.current;a.textContent="",o.forEach(f=>{let d=document.createElement("button");d.className="fallback-fighter",d.setAttribute("aria-label",f.c.Name),d.appendChild(f.canvas),d.addEventListener("mouseenter",()=>n(f.c.Id)),d.addEventListener("mouseleave",()=>n(null)),d.addEventListener("click",()=>e(f.c.Id)),a.appendChild(d)});let l,c=performance.now(),u=f=>{l=requestAnimationFrame(u);let d=f-c;c=f,o.forEach(p=>p.update(d))};return l=requestAnimationFrame(u),()=>cancelAnimationFrame(l)},[t]),(0,Be.jsx)("div",{ref:s,className:`fallback-row ${i?"has-selection":""}`,"data-selected":i||""})}function Cm({characters:t,height:e}){let n=(0,kt.useRef)(null),i=(0,kt.useRef)(null),r=(0,kt.useRef)(null),s=(0,kt.useRef)([]),[o,a]=(0,kt.useState)(null),[l,c]=(0,kt.useState)(null),[u,f]=(0,kt.useState)(null),[d]=(0,kt.useState)(_2),[p,y]=(0,kt.useState)(null),S=qs(i,.01),v=(0,kt.useMemo)(()=>od(360,110,"#c4283c",9),[]),h=(0,kt.useMemo)(()=>od(360,110,"#e23a4e",21),[]);(0,kt.useEffect)(()=>{if(!d)return;let R;try{R=new Nu(n.current,t,{onHover:a,onSelect:w=>{c(w),f(null)}})}catch(w){y(w.message||String(w));return}r.current=R;let F=new ResizeObserver(()=>R.resize());F.observe(n.current);let _=setInterval(()=>R.setVisible(S.current),200);return()=>{clearInterval(_),F.disconnect(),R.dispose()}},[t,d]);let m=t.find(R=>R.Id===l),g=t.find(R=>R.Id===o),x=m?Am(m.Moves):[],b=R=>{r.current?r.current.select(R):(c(R),f(null))},T=()=>{r.current?r.current.back():c(null),f(null)},A=R=>{var F;f(R),r.current?r.current.playMove(R):(F=s.current.find(_=>_.c.Id===l))==null||F.setMove(R)};return(0,Be.jsxs)("section",{className:"characters",ref:i,style:{height:e},"aria-label":"The fighters",children:[(0,Be.jsx)("div",{className:"field-stage",ref:n,children:(!d||p)&&(0,Be.jsx)(x2,{characters:t,selected:l,fighterRef:s,onHover:a,onSelect:b})}),(0,Be.jsxs)("header",{className:`section-head ${l?"dim":""}`,children:[(0,Be.jsx)("p",{className:"eyebrow",children:"Super Street Fighter II \xB7 16 World Warriors"}),(0,Be.jsx)("h2",{className:"brush-title",children:"The Fighters"}),(0,Be.jsx)("p",{className:"lede",children:"Lightning lights the field \u2014 hover a fighter to bring them out of the dark, click to step in close."})]}),(0,Be.jsx)("div",{className:`hover-tag ${g&&!l?"show":""}`,"aria-live":"polite",children:g&&!l&&(0,Be.jsxs)(Be.Fragment,{children:[(0,Be.jsx)("strong",{children:g.Name}),(0,Be.jsxs)("span",{children:[g.Country," \xB7 ",g.Style]})]})}),(0,Be.jsx)("nav",{className:"sr-only","aria-label":"Choose a fighter",children:t.map(R=>(0,Be.jsx)("button",{onClick:()=>b(R.Id),children:R.Name},R.Id))}),(0,Be.jsx)(bm,{open:!!m,seed:m?m.Name.length*7:3,className:"bio-panel",children:m&&(0,Be.jsxs)("div",{className:"bio",children:[(0,Be.jsx)("button",{className:"back",onClick:T,children:"\u2190 All fighters"}),(0,Be.jsxs)("p",{className:"eyebrow ink",children:[m.Country," \xB7 ",m.Style]}),(0,Be.jsx)("h3",{className:"brush-title ink",children:m.Name}),(0,Be.jsx)("p",{className:"tagline",children:m.Tagline}),(0,Be.jsx)("p",{className:"bio-text",children:m.Bio}),(0,Be.jsxs)("dl",{className:"facts",children:[(0,Be.jsxs)("div",{children:[(0,Be.jsx)("dt",{children:"Debut"}),(0,Be.jsx)("dd",{children:m.Debut})]}),(0,Be.jsxs)("div",{children:[(0,Be.jsx)("dt",{children:"Fighting style"}),(0,Be.jsx)("dd",{children:m.Style})]})]}),(0,Be.jsx)("p",{className:"moves-label",children:"Special moves"}),(0,Be.jsx)("div",{className:"moves",children:x.map(R=>(0,Be.jsx)("button",{className:`move ${u===R.name?"active":""}`,style:{"--stroke":`url(${v})`,"--stroke-hover":`url(${h})`},onClick:()=>A(R.name),children:R.name},R.name))})]},m.Id)}),p&&(0,Be.jsxs)("p",{className:"error small",children:["3D field unavailable (",p,") \u2014 showing the 2D roster instead."]})]})}var Rt=gt(Yn(),1);var ux={minor:[0,2,3,5,7,8,10],dorian:[0,2,3,5,7,9,10],phrygian:[0,1,3,5,7,8,10],major:[0,2,4,5,7,9,11],mixolydian:[0,2,4,5,7,9,10]},Du=class{constructor(){this.ctx=null,this.timer=null,this.analyser=null,this.volume=.5}ensure(){if(this.ctx)return this.ctx;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.volume*.35,this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.master.connect(this.analyser),this.analyser.connect(this.ctx.destination);let n=this.ctx.sampleRate*.3;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1;return this.ctx}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e*.35)}compose(e){let n=Rn(`theme:${e}`),i=Object.keys(ux),r=ux[i[Math.floor(n()*i.length)]],s=45+Math.floor(n()*10),o=128+Math.floor(n()*40),a=[0,5,3,4].map(u=>(u+Math.floor(n()*2))%7),l=[];for(let u=0;u<16;u++)l.push(n()<.62?Math.floor(n()*9)-1:null);let c=[];for(let u=0;u<4;u++)for(let f=0;f<16;f++){let d=l[f];d!=null&&u===3&&f>8&&(d=d+2),d!=null&&u===1&&n()<.3&&(d=null),c.push(d==null?null:d+a[u])}return{scale:r,root:s,bpm:o,prog:a,melody:c}}noteFreq(e,n,i){let r=e.scale,s=Math.floor(n/r.length),o=(n%r.length+r.length)%r.length,a=e.root+12*(i+s)+r[o];return 440*Math.pow(2,(a-69)/12)}play(e){let n=this.ensure();if(!n)return;n.state==="suspended"&&n.resume(),this.stop();let i=this.compose(e),r=60/i.bpm/4,s=0,o=n.currentTime+.05,a=()=>{for(;o<n.currentTime+.2;)this.scheduleStep(i,s,o,r),o+=r,s=(s+1)%64};a(),this.timer=setInterval(a,50),this.playing=!0}scheduleStep(e,n,i,r){let s=this.ctx,o=Math.floor(n/16),a=n%16,l=e.melody[n];if(l!=null&&this.tone("square",this.noteFreq(e,l,2),i,r*.9,.14),a%2===0){let c=e.prog[o]+(a%8===4?4:0);this.tone("triangle",this.noteFreq(e,c,0),i,r*1.8,.32)}if(a%2===1){let c=[0,2,4][(a>>1)%3];this.tone("square",this.noteFreq(e,e.prog[o]+c,1),i,r*.5,.04)}return a%8===0&&this.kick(i),a%8===4&&this.snare(i),a%2===0&&this.hat(i),s}tone(e,n,i,r,s){let o=this.ctx,a=o.createOscillator(),l=o.createGain();a.type=e,a.frequency.value=n,l.gain.setValueAtTime(s,i),l.gain.exponentialRampToValueAtTime(.001,i+r),a.connect(l),l.connect(this.master),a.start(i),a.stop(i+r+.02)}kick(e){let n=this.ctx,i=n.createOscillator(),r=n.createGain();i.frequency.setValueAtTime(140,e),i.frequency.exponentialRampToValueAtTime(40,e+.12),r.gain.setValueAtTime(.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.15),i.connect(r),r.connect(this.master),i.start(e),i.stop(e+.16)}noiseHit(e,n,i,r){let s=this.ctx,o=s.createBufferSource();o.buffer=this.noise;let a=s.createBiquadFilter();a.type="highpass",a.frequency.value=r;let l=s.createGain();l.gain.setValueAtTime(i,e),l.gain.exponentialRampToValueAtTime(.001,e+n),o.connect(a),a.connect(l),l.connect(this.master),o.start(e),o.stop(e+n)}snare(e){this.noiseHit(e,.14,.25,1200)}hat(e){this.noiseHit(e,.03,.06,7e3)}levels(e=16){if(!this.analyser||!this.playing)return null;let n=new Uint8Array(this.analyser.frequencyBinCount);this.analyser.getByteFrequencyData(n);let i=[];for(let r=0;r<e;r++)i.push(n[Math.min(n.length-1,r+1)]/255);return i}stop(){this.timer&&clearInterval(this.timer),this.timer=null,this.playing=!1}};var Ye=gt(tn(),1),Rm=8;function S2({character:t}){let e=(0,Rt.useRef)(null);return(0,Rt.useEffect)(()=>{let n=e.current;n.textContent="";let i=yr(`img/portraits/${t.Id}.png`);if(i){let a=document.createElement("img");a.src=i,a.alt="",n.appendChild(a);return}let r=new $i(t),s=document.createElement("canvas");s.width=48,s.height=48;let o=s.getContext("2d");o.imageSmoothingEnabled=!1,o.drawImage(r.canvas,34,18,64,64,0,0,48,48),n.appendChild(s)},[t]),(0,Ye.jsx)("span",{className:"portrait",ref:e,"aria-hidden":"true"})}function M2({character:t,playing:e}){let n=(0,Rt.useRef)(null);return(0,Rt.useEffect)(()=>{if(!t)return;let i=new $i(t),r=n.current;r.textContent="",r.appendChild(i.canvas);let s,o=performance.now(),a=0,l=c=>{s=requestAnimationFrame(l);let u=c-o;o=c,i.update(u*(e?1.3:1)),a+=u,e&&a>4200&&!i.moveName&&i.moves.length&&(a=0,i.setMove(i.moves[Math.floor(Math.random()*i.moves.length)].name))};return s=requestAnimationFrame(l),()=>cancelAnimationFrame(s)},[t,e]),(0,Ye.jsx)("div",{className:"big-fighter",ref:n,"aria-hidden":"true"})}function Pm({characters:t,height:e}){var A,R;let n=(0,Rt.useRef)(null),i=(0,Rt.useRef)(null),[r,s]=(0,Rt.useState)(0),[o,a]=(0,Rt.useState)(null),[l,c]=(0,Rt.useState)(!1),[u,f]=(0,Rt.useState)(.6),d=(0,Rt.useMemo)(()=>new Du,[]),p=(0,Rt.useRef)(null),y=qs(n,.01),S=o!=null?t[o]:null,v=t[r],h=S?cd(S.Id):null,m=()=>{d.stop(),p.current&&p.current.pause()},g=F=>{s(F),a(F),m();let _=t[F],w=cd(_.Id);w?(p.current||(p.current=new Audio),p.current.src=w,p.current.loop=!0,p.current.volume=u,p.current.play().catch(()=>{})):(d.setVolume(u),d.play(_.Id)),c(!0)},x=()=>{if(!S)return g(r);l?(m(),c(!1)):g(o)};(0,Rt.useEffect)(()=>{d.setVolume(u),p.current&&(p.current.volume=u)},[u,d]),(0,Rt.useEffect)(()=>{let F=setInterval(()=>{!y.current&&l&&(m(),c(!1))},400);return()=>clearInterval(F)}),(0,Rt.useEffect)(()=>()=>m(),[]),(0,Rt.useEffect)(()=>{let F=i.current,_=F.getContext("2d"),w,O=16,D=new Array(O).fill(0),k=$=>{if(w=requestAnimationFrame(k),!y.current)return;let H=!h&&l?d.levels(O):null;for(let z=0;z<O;z++){let se=l?H?H[z]:.35+.45*Math.abs(Math.sin($*.004*(1+z*.13)+z)):.04;D[z]+=(se-D[z])*.3}_.clearRect(0,0,F.width,F.height);let K=F.width/O;for(let z=0;z<O;z++){let se=Math.round(D[z]*10);for(let Q=0;Q<se;Q++)_.fillStyle=Q>7?"#ff4a4a":Q>4?"#ffd23f":"#3fe07a",_.fillRect(z*K+1,F.height-(Q+1)*5,K-2,4)}};return w=requestAnimationFrame(k),()=>cancelAnimationFrame(w)},[l,h,d]);let b=F=>{let _=t.length,w=r;if(F.key==="ArrowRight")w=(r+1)%_;else if(F.key==="ArrowLeft")w=(r-1+_)%_;else if(F.key==="ArrowDown")w=Math.min(_-1,r+Rm);else if(F.key==="ArrowUp")w=Math.max(0,r-Rm);else if(F.key==="Enter"||F.key===" "){F.preventDefault(),g(r);return}else return;F.preventDefault(),s(w)},T=S||v;return(0,Ye.jsxs)("section",{className:"soundtrack",ref:n,style:{height:e},"aria-label":"Soundtracks",children:[(0,Ye.jsx)("div",{className:"crt","aria-hidden":"true"}),(0,Ye.jsxs)("header",{className:"ost-head",children:[(0,Ye.jsx)("p",{className:"pixel eyebrow-pixel",children:"Sound test"}),(0,Ye.jsx)("h2",{className:"pixel ost-title",children:"Select your theme"})]}),(0,Ye.jsxs)("div",{className:"ost-stage",children:[(0,Ye.jsxs)("div",{className:"player p1",children:[(0,Ye.jsx)("div",{className:"player-tag pixel",children:"1P"}),(0,Ye.jsx)(M2,{character:T,playing:l}),(0,Ye.jsx)("div",{className:"nameplate pixel",children:(A=T==null?void 0:T.Name)==null?void 0:A.toUpperCase()}),(0,Ye.jsx)("div",{className:"pixel small-pixel",children:(R=T==null?void 0:T.Country)==null?void 0:R.toUpperCase()})]}),(0,Ye.jsxs)("div",{className:"now-playing",children:[(0,Ye.jsx)("p",{className:"pixel small-pixel dimmed",children:"Now playing"}),(0,Ye.jsx)("p",{className:"pixel track",children:S?S.Theme:"\u2014 insert coin \u2014"}),(0,Ye.jsx)("canvas",{ref:i,width:"240",height:"56",className:"eq","aria-hidden":"true"}),(0,Ye.jsxs)("div",{className:"transport",children:[(0,Ye.jsx)("button",{className:"pixel-btn",onClick:x,"aria-label":l?"Pause":"Play",children:l?"\u275A\u275A":"\u25BA"}),(0,Ye.jsxs)("label",{className:"vol pixel small-pixel",children:["VOL",(0,Ye.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:u,onChange:F=>f(Number(F.target.value))})]})]}),(0,Ye.jsx)("p",{className:"ost-note",children:S?h?"Playing the bundled track.":"Placeholder chiptune \u2014 add assets/audio/"+S.Id+".mp3 to play the real theme.":"Pick a fighter to hear their stage theme."})]}),(0,Ye.jsxs)("div",{className:"player p2","aria-hidden":"true",children:[(0,Ye.jsx)("div",{className:"player-tag pixel p2-tag",children:"2P"}),(0,Ye.jsx)("div",{className:"empty-slot"}),(0,Ye.jsx)("div",{className:"nameplate pixel blink",children:"PRESS START"})]})]}),(0,Ye.jsx)("div",{className:"select-grid",role:"listbox","aria-label":"Fighters",tabIndex:0,"aria-activedescendant":`ost-${v==null?void 0:v.Id}`,onKeyDown:b,style:{"--cols":Rm},children:t.map((F,_)=>(0,Ye.jsxs)("button",{id:`ost-${F.Id}`,role:"option","aria-selected":o===_,className:`tile ${r===_?"cursor":""} ${o===_?"chosen":""}`,onMouseEnter:()=>s(_),onClick:()=>g(_),title:F.Name,children:[(0,Ye.jsx)(S2,{character:F}),r===_&&(0,Ye.jsx)("span",{className:"cursor-tag pixel",children:"1P"}),(0,Ye.jsx)("span",{className:"sr-only",children:F.Name})]},F.Id))})]})}var _n=gt(Yn(),1),ne=gt(tn(),1),Ei="Street Fighter",Xa="#e2403f",Im="#7d86a3",fx="rgba(236,230,214,0.10)";var hs=t=>typeof t=="number"?t:parseFloat(String(t).replace(/,/g,"")),hi=t=>{let[e,n="6",i="15"]=String(t||"").split("-");return new Date(Number(e),Number(n)-1,Number(i))},Zi=t=>`${t>=10?Math.round(t):t.toFixed(1)}M`,Wa=t=>t>=1e3?`$${(t/1e3).toFixed(1)}B`:`$${t>=10?Math.round(t):t.toFixed(1)}M`;function w2(t){let[e,n]=(0,_n.useState)(800);return(0,_n.useEffect)(()=>{let i=new ResizeObserver(([r])=>n(Math.round(r.contentRect.width)));return i.observe(t.current),()=>i.disconnect()},[t]),e}function dx(t){let e=Math.pow(10,Math.floor(Math.log10(t))),n=t/e;return(n<=1?1:n<=2?2:n<=2.5?2.5:n<=5?5:10)*e}function px({tip:t}){return t?(0,ne.jsxs)("div",{className:"tip",style:{left:t.x,top:t.y},role:"status",children:[(0,ne.jsx)("strong",{children:t.title}),(0,ne.jsx)("span",{children:t.value}),t.source&&(0,ne.jsx)("em",{children:t.source})]}):null}function E2({rows:t,width:e}){let[n,i]=(0,_n.useState)(null),r=(0,_n.useMemo)(()=>{let m=new Map;return t.filter(g=>g.Category==="Series units (cumulative)").forEach(g=>{m.has(g.Franchise)||m.set(g.Franchise,[]),m.get(g.Franchise).push({d:hi(g["As Of"]),v:hs(g.Value),r:g})}),[...m.entries()].map(([g,x])=>({name:g,pts:x.sort((b,T)=>b.d-T.d)})).filter(g=>g.pts.length>1&&g.pts.every((x,b)=>!b||x.v>=g.pts[b-1].v))},[t]);if(!r.length)return null;let s=380,o={t:20,r:150,b:34,l:44},a=e-o.l-o.r,l=s-o.t-o.b,c=r.flatMap(m=>m.pts),u=new Date(Math.min(...c.map(m=>m.d))),f=new Date(Math.max(...c.map(m=>m.d)));u.setMonth(0,1);let d=dx(Math.max(...c.map(m=>m.v))*1.05),p=m=>o.l+(m-u)/(f-u)*a,y=m=>o.t+l-m/d*l,S=[];for(let m=u.getFullYear();m<=f.getFullYear();m++)S.push(m);let v=Math.ceil(S.length/Math.max(2,Math.floor(a/70))),h=r.map(m=>({s:m,y:y(m.pts[m.pts.length-1].v)})).sort((m,g)=>m.y-g.y);for(let m=1;m<h.length;m++)h[m].y-h[m-1].y<18&&(h[m].y=h[m-1].y+18);return(0,ne.jsxs)("div",{className:"chart",children:[(0,ne.jsxs)("svg",{width:e,height:s,role:"img","aria-label":"Cumulative series units sold over time by franchise",children:[[0,.25,.5,.75,1].map(m=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("line",{x1:o.l,x2:o.l+a,y1:y(d*m),y2:y(d*m),stroke:fx}),(0,ne.jsxs)("text",{x:o.l-8,y:y(d*m),dy:"0.32em",textAnchor:"end",className:"axis",children:[Math.round(d*m),"M"]})]},m)),S.filter((m,g)=>g%v===0).map(m=>(0,ne.jsx)("text",{x:p(new Date(m,0,1)),y:s-10,textAnchor:"middle",className:"axis",children:m},m)),[...r].sort(m=>m.name===Ei?1:-1).map(m=>{let g=m.name===Ei,x=m.pts.map((b,T)=>`${T?"L":"M"}${p(b.d)},${y(b.v)}`).join("");return(0,ne.jsxs)("g",{children:[(0,ne.jsx)("path",{d:x,fill:"none",stroke:g?Xa:Im,strokeWidth:g?3.5:2,opacity:g?1:.75}),m.pts.map((b,T)=>(0,ne.jsx)("circle",{cx:p(b.d),cy:y(b.v),r:g?4.5:3.2,fill:g?Xa:Im,stroke:"#0b1022",strokeWidth:"1.5",onMouseEnter:()=>i({x:p(b.d),y:y(b.v)-12,title:`${m.name} \xB7 ${b.r["As Of"]}`,value:`${Zi(b.v)} units sold (lifetime)`,source:b.r.Source}),onMouseLeave:()=>i(null)},T))]},m.name)}),h.map(({s:m,y:g})=>{let x=m.pts[m.pts.length-1],b=m.name===Ei;return(0,ne.jsxs)("text",{x:p(x.d)+10,y:g,dy:"0.32em",className:`direct ${b?"sf":""}`,children:[m.name," ",(0,ne.jsx)("tspan",{className:"val",children:Zi(x.v)})]},m.name)})]}),(0,ne.jsx)(px,{tip:n})]})}function hx({items:t,width:e,fmt:n,label:i}){let[r,s]=(0,_n.useState)(null),o=30,a={t:6,r:70,b:6,l:Math.min(270,e*.42)},l=a.t+a.b+t.length*o,c=e-a.l-a.r,u=Math.max(...t.map(f=>f.v));return(0,ne.jsxs)("div",{className:"chart",children:[(0,ne.jsx)("svg",{width:e,height:l,role:"img","aria-label":i,children:t.map((f,d)=>{let p=f.franchise===Ei,y=a.t+d*o,S=Math.max(2,f.v/u*c);return(0,ne.jsxs)("g",{onMouseEnter:()=>s({x:a.l+S,y,title:f.label,value:n(f.v),source:`${f.source}${f.note?" \u2014 "+f.note:""}`}),onMouseLeave:()=>s(null),children:[(0,ne.jsx)("text",{x:a.l-10,y:y+o/2,dy:"0.32em",textAnchor:"end",className:`bar-label ${p?"sf":""}`,children:f.label}),(0,ne.jsx)("rect",{x:a.l,y:y+5,width:S,height:o-10,fill:p?Xa:Im,opacity:p?1:.6,rx:"1"}),(0,ne.jsx)("text",{x:a.l+S+6,y:y+o/2,dy:"0.32em",className:`bar-val ${p?"sf":""}`,children:n(f.v)})]},f.label)})}),(0,ne.jsx)(px,{tip:r})]})}function T2({rows:t,width:e}){let n=t.filter(p=>p.Title==="Street Fighter 6"&&p.Category==="Title units").map(p=>({d:hi(p["As Of"]),v:hs(p.Value),r:p})).sort((p,y)=>p.d-y.d);if(n.length<2)return null;let i=200,r={t:16,r:50,b:28,l:40},s=e-r.l-r.r,o=i-r.t-r.b,a=new Date(2023,5,1),l=n[n.length-1].d,c=dx(n[n.length-1].v),u=p=>r.l+(p-a)/(l-a||1)*s,f=p=>r.t+o-p/c*o,d=`M${u(a)},${f(0)}`;return n.forEach(p=>{d+=`H${u(p.d)}V${f(p.v)}`}),(0,ne.jsxs)("svg",{width:e,height:i,role:"img","aria-label":"Street Fighter 6 cumulative sales milestones",children:[[0,.5,1].map(p=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("line",{x1:r.l,x2:r.l+s,y1:f(c*p),y2:f(c*p),stroke:fx}),(0,ne.jsxs)("text",{x:r.l-6,y:f(c*p),dy:"0.32em",textAnchor:"end",className:"axis",children:[c*p,"M"]})]},p)),(0,ne.jsx)("path",{d,fill:"none",stroke:Xa,strokeWidth:"3"}),n.map((p,y)=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("circle",{cx:u(p.d),cy:f(p.v),r:"4",fill:Xa}),(y===0||y===n.length-1)&&(0,ne.jsxs)("text",{x:u(p.d)+(y?0:8),y:f(p.v)+(y?-10:-4),textAnchor:y?"end":"start",className:"bar-val sf",children:[Zi(p.v)," \xB7 ",p.r["As Of"]]})]},y)),[2023,2024,2025,2026].filter(p=>new Date(p,0,1)<=l).map(p=>(0,ne.jsx)("text",{x:u(new Date(Math.max(a,new Date(p,0,1)))),y:i-8,textAnchor:"middle",className:"axis",children:p},p))]})}function Lm({rows:t,loadedAt:e}){var h;let n=(0,_n.useRef)(null),i=w2(n),r=i>980?(i-48)/2:i,s=m=>{let g=t.filter(m).sort((x,b)=>hi(b["As Of"])-hi(x["As Of"]))[0];return g?{v:hs(g.Value),r:g}:null},o=(0,_n.useMemo)(()=>{let m=new Map;return t.filter(g=>g.Category==="Series units (cumulative)").forEach(g=>{let x=m.get(g.Franchise);(!x||hi(g["As Of"])>hi(x["As Of"]))&&m.set(g.Franchise,g)}),[...m.values()].map(g=>({franchise:g.Franchise,v:hs(g.Value),r:g})).sort((g,x)=>x.v-g.v)},[t]),a=o.findIndex(m=>m.franchise===Ei)+1,l=o.find(m=>m.franchise===Ei),c=t.filter(m=>m.Franchise===Ei&&m.Category==="Series units (cumulative)").sort((m,g)=>hi(m["As Of"])-hi(g["As Of"]))[0],u=(0,_n.useMemo)(()=>{let m=new Map;return t.filter(g=>g.Category==="Title units").forEach(g=>{let x=m.get(g.Title);(!x||hi(g["As Of"])>hi(x["As Of"]))&&m.set(g.Title,g)}),[...m.values()].map(g=>({label:g.Title,franchise:g.Franchise,v:hs(g.Value),source:g.Source,note:g.Note})).sort((g,x)=>x.v-g.v).slice(0,14)},[t]),f=(0,_n.useMemo)(()=>t.filter(m=>m.Category==="Box office").map(m=>({label:m.Title,franchise:m.Franchise,v:hs(m.Value),source:m.Source,note:m.Note})).sort((m,g)=>g.v-m.v),[t]),d=f.filter(m=>m.franchise===Ei).reduce((m,g)=>m+g.v,0),p=s(m=>m.Title==="Street Fighter 6"&&m.Category==="Title units"),y=s(m=>m.Franchise===Ei&&m.Category==="Arcade revenue"&&/all versions/i.test(m.Title)),S=(0,_n.useMemo)(()=>{let m=new Map;return t.forEach(g=>{g.Source&&!m.has(g.Source)&&m.set(g.Source,g["Source URL"])}),[...m.entries()]},[t]),v=t.filter(m=>/secondary|estimate|derived/i.test(`${m.Note} ${m.Source}`)).length;return t.length?(0,ne.jsxs)("section",{className:"franchise",ref:n,"aria-label":"The franchise in numbers",children:[(0,ne.jsxs)("header",{className:"section-head static",children:[(0,ne.jsx)("p",{className:"eyebrow",children:"The franchise in numbers"}),(0,ne.jsx)("h2",{className:"brush-title",children:l?`${Zi(l.v)} games sold \u2014 and still climbing`:"Street Fighter by the numbers"}),(0,ne.jsx)("p",{className:"lede",children:l&&`Street Fighter ranks #${a} among fighting-game franchises in lifetime units, behind ${o.slice(0,a-1).map(m=>m.franchise).join(", ")}. ${c?`Since ${hi(c["As Of"]).getFullYear()} it has added ${Zi(l.v-hs(c.Value))} units, `:""}driven by Street Fighter 6. Its real outlier is the arcade: Street Fighter II's estimated lifetime gross dwarfs anything in this genre.`})]}),(0,ne.jsxs)("div",{className:"kpis",children:[l&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsx)("span",{className:"kpi-v",children:Zi(l.v)}),(0,ne.jsx)("span",{className:"kpi-l",children:"series units sold"}),(0,ne.jsxs)("span",{className:"kpi-s",children:["as of ",l.r["As Of"]]})]}),p&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsx)("span",{className:"kpi-v",children:Zi(p.v)}),(0,ne.jsx)("span",{className:"kpi-l",children:"Street Fighter 6"}),(0,ne.jsxs)("span",{className:"kpi-s",children:["as of ",p.r["As Of"]]})]}),d>0&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsx)("span",{className:"kpi-v",children:Wa(d)}),(0,ne.jsx)("span",{className:"kpi-l",children:"worldwide box office, all SF films"}),(0,ne.jsx)("span",{className:"kpi-s",children:"unadjusted USD"})]}),y&&(0,ne.jsxs)("div",{className:"kpi",children:[(0,ne.jsxs)("span",{className:"kpi-v",children:["~",Wa(y.v)]}),(0,ne.jsx)("span",{className:"kpi-l",children:"Street Fighter II lifetime gross"}),(0,ne.jsx)("span",{className:"kpi-s",children:"estimate, 2016 dollars"})]})]}),(0,ne.jsxs)("div",{className:"panel wide",children:[(0,ne.jsx)("h3",{children:"Street Fighter climbs steadily but trails Mortal Kombat, Smash and Tekken in lifetime units"}),(0,ne.jsx)("p",{className:"sub",children:"Cumulative franchise units sold, millions, by reporting date. Hover a point for its source. Series with conflicting totals (e.g. Soulcalibur) are omitted."}),(0,ne.jsx)(E2,{rows:t,width:i})]}),(0,ne.jsxs)("div",{className:"grid2",children:[(0,ne.jsxs)("div",{className:"panel",children:[(0,ne.jsx)("h3",{children:"Smash Ultimate outsells every other fighting game; Street Fighter V and 6 lead Capcom's modern era"}),(0,ne.jsx)("p",{className:"sub",children:"Lifetime units of individual titles, latest figure, millions"}),(0,ne.jsx)(hx,{items:u,width:r,fmt:Zi,label:"Best-selling individual fighting games"})]}),(0,ne.jsxs)("div",{className:"panel",children:[(0,ne.jsxs)("h3",{children:["Mortal Kombat rules the box office; Street Fighter's films total ",Wa(d),", led by"," ",((h=f.find(m=>m.franchise===Ei))==null?void 0:h.label)||"its 1994 film"]}),(0,ne.jsx)("p",{className:"sub",children:"Worldwide box office, millions of USD, not adjusted for inflation"}),(0,ne.jsx)(hx,{items:f,width:r,fmt:Wa,label:"Fighting-game film box office"})]})]}),(0,ne.jsxs)("div",{className:"grid2",children:[(0,ne.jsxs)("div",{className:"panel",children:[(0,ne.jsxs)("h3",{children:["Street Fighter 6 passed ",p?Zi(p.v):"its latest milestone"," in about three years"]}),(0,ne.jsx)("p",{className:"sub",children:"Cumulative units at each announced milestone"}),(0,ne.jsx)(T2,{rows:t,width:r})]}),(0,ne.jsxs)("div",{className:"panel callout",children:[(0,ne.jsx)("h3",{children:"Why the arcade number matters"}),(0,ne.jsxs)("p",{children:["In the early 1990s, Street Fighter II sold arcade cabinets and kits, and every coin-op round was a sale. Estimates of its lifetime gross run around ",y?Wa(y.v):"$10B"," (inflation-adjusted, counting arcade and home versions), far more than any fighting game has made from units at retail. Treat it as an order of magnitude, not an audited figure."]})]})]}),(0,ne.jsxs)("footer",{className:"sources",children:[(0,ne.jsxs)("p",{children:[(0,ne.jsx)("strong",{children:"Sources & caveats."})," Queried live from the \u201CFranchise Metrics\u201D datasource",e?` at ${e.toLocaleString()}`:"",". Figures were compiled from publisher IR releases and press coverage;"," ",v," of ",t.length," rows rely on secondary reporting or estimates (see the Note column). Publishers count units differently (sell-in vs. sell-through, bundles, digital)."]}),(0,ne.jsx)("ul",{children:S.map(([m,g])=>(0,ne.jsxs)("li",{children:[m,g?(0,ne.jsxs)("span",{className:"url",children:[" \u2014 ",g]}):null]},m))})]})]}):(0,ne.jsx)("section",{className:"franchise",ref:n,children:(0,ne.jsx)("p",{className:"error",children:"No rows came back from the \u201CFranchise Metrics\u201D datasource."})})}var Xn=gt(tn(),1),Nm={intro:1e3,characters:1050,soundtrack:840};function Dm(){let[t,e]=(0,qa.useState)(null),[n,i]=(0,qa.useState)(null);return(0,qa.useEffect)(()=>{Ey().then(e).catch(r=>i(r&&(r.message||r.errorCode)||String(r)))},[]),n?(0,Xn.jsx)("div",{className:"boot",children:(0,Xn.jsxs)("p",{className:"error",children:["Live query unavailable: ",n]})}):t?(0,Xn.jsxs)("main",{children:[t.missing.length>0&&(0,Xn.jsxs)("p",{className:"error banner",children:["Missing datasource(s): ",t.missing.join(", "),". Found: ",t.sourceNames.join(", ")||"none","."]}),t.story.length>0&&(0,Xn.jsx)(fd,{chapters:t.story,height:Nm.intro}),t.characters.length>0&&(0,Xn.jsx)(Cm,{characters:t.characters,height:Nm.characters}),t.characters.length>0&&(0,Xn.jsx)(Pm,{characters:t.characters,height:Nm.soundtrack}),(0,Xn.jsx)(Lm,{rows:t.metrics,loadedAt:t.loadedAt})]}):(0,Xn.jsx)("div",{className:"boot",children:(0,Xn.jsx)("p",{className:"loading",children:"Loading the Way of the Hado\u2026"})})}var vx=gt(tn(),1);function gx(t){let e=document.getElementById("app");e.textContent="";let n=document.createElement("p");n.className="error",n.textContent=`Live query unavailable: ${t}`,e.appendChild(n)}window.addEventListener("error",t=>{document.querySelector("main")||gx(t.message)});try{(0,mx.createRoot)(document.getElementById("app")).render((0,vx.jsx)(Dm,{}))}catch(t){gx(t.message||String(t))}})();
