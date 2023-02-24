(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,r){"use strict";var o=r(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return o.isMemo(e)?a:s[e.$$typeof]||i}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var l=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var i=f(r);i&&i!==m&&e(t,i,o)}var a=u(r);p&&(a=a.concat(p(r)));for(var s=c(t),g=c(r),h=0;h<a.length;++h){var y=a[h];if(!n[y]&&!(o&&o[y])&&!(g&&g[y])&&!(s&&s[y])){var b=d(r,y);try{l(t,y,b)}catch(e){}}}}return t}},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1201)}])},1201:function(e,t,r){"use strict";let o,i,n;r.r(t),r.d(t,{default:function(){return eS}});var a,s=r(5893);r(168),r(2523),r(8912),r(3641),r(1717),r(7099),r(1082),r(3352),r(7073),r(1701),r(228);var c=r(7294),l=r(9008),u=r.n(l),p=r(5697),d=r.n(p);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var m=(0,c.forwardRef)(function(e,t){var r=e.color,o=e.size,i=void 0===o?24:o,n=function(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["color","size"]);return c.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),c.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),c.createElement("polyline",{points:"5 12 12 5 19 12"}))});m.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},m.displayName="ArrowUp";let g=e=>{let{scrollStepInPx:t,delayInMs:r}=e,[o,i]=c.useState(!1),n=c.useRef(null);c.useEffect(()=>{document.addEventListener("scroll",()=>{window.scrollY>170?i(!0):i(!1)})},[]);let a=()=>{0===window.pageYOffset&&clearInterval(n.current),window.scroll(0,window.pageYOffset-t)},l=()=>{n.current=setInterval(a,r)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"go-top ".concat(o?"active":""),onClick:l,children:(0,s.jsx)(m,{})})})},h=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"lang-didebar",children:(0,s.jsx)("a",{href:"/contact/",title:"Best IT Solution",children:"IPREX"})})}),y={data:""},b=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||y,v=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,x=(e,t)=>{let r="",o="",i="";for(let n in e){let a=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+a+";":o+="f"==n[1]?x(a,n):n+"{"+x(a,"k"==n[1]?"":t)+"}":"object"==typeof a?o+=x(a,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=a&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=x.p?x.p(n,a):n+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+o},S={},O=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+O(e[r]);return t}return e},E=(e,t,r,o,i)=>{var n,a;let s=O(e),c=S[s]||(S[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!S[c]){let t=s!==e?e:(e=>{let t,r,o=[{}];for(;t=v.exec(e.replace(w,""));)t[4]?o.shift():t[3]?(r=t[3].replace(j," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(j," ").trim();return o[0]})(e);S[c]=x(i?{["@keyframes "+c]:t}:t,r?"":"."+c)}let l=r&&S.g?S.g:null;return r&&(S.g=S[c]),n=S[c],a=t,l?a.data=a.data.replace(l,n):-1===a.data.indexOf(n)&&(a.data=o?n+a.data:a.data+n),c},_=(e,t,r)=>e.reduce((e,o,i)=>{let n=t[i];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":x(e,""):!1===e?"":e}return e+o+(null==n?"":n)},"");function T(e){let t=this||{},r=e.call?e(t.p):e;return E(r.unshift?r.raw?_(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,b(t.target),t.g,t.o,t.k)}T.bind({g:1});let I,k,$,C=T.bind({k:1});function N(e,t){let r=this||{};return function(){let o=arguments;function i(n,a){let s=Object.assign({},n),c=s.className||i.className;r.p=Object.assign({theme:k&&k()},s),r.o=/ *go\d+/.test(c),s.className=T.apply(r,o)+(c?" "+c:""),t&&(s.ref=a);let l=e;return e[0]&&(l=s.as||e,delete s.as),$&&l[0]&&$(s),I(l,s)}return t?t(i):i}}var P=e=>"function"==typeof e,D=(e,t)=>P(e)?e(t):e,R=(i=0,()=>(++i).toString()),M=()=>{if(void 0===n&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n},A=new Map,L=e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),B({type:4,toastId:e})},1e3);A.set(e,t)},U=e=>{let t=A.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&U(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?L(o):e.toasts.forEach(e=>{L(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},F=[],q={toasts:[],pausedAt:void 0},B=e=>{q=z(q,e),F.forEach(e=>{e(q)})},X={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(e={})=>{let[t,r]=(0,c.useState)(q);(0,c.useEffect)(()=>(F.push(r),()=>{let e=F.indexOf(r);e>-1&&F.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||X[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},H=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||R()}),V=e=>(t,r)=>{let o=H(t,e,r);return B({type:2,toast:o}),o.id},Y=(e,t)=>V("blank")(e,t);Y.error=V("error"),Y.success=V("success"),Y.loading=V("loading"),Y.custom=V("custom"),Y.dismiss=e=>{B({type:3,toastId:e})},Y.remove=e=>B({type:4,toastId:e}),Y.promise=(e,t,r)=>{let o=Y.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(Y.success(D(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e)).catch(e=>{Y.error(D(t.error,e),{id:o,...r,...null==r?void 0:r.error})}),e};var Z=(e,t)=>{B({type:1,toast:{id:e,height:t}})},Q=()=>{B({type:5,time:Date.now()})},G=e=>{let{toasts:t,pausedAt:r}=W(e);(0,c.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&Y.dismiss(t.id);return}return setTimeout(()=>Y.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let o=(0,c.useCallback)(()=>{r&&B({type:6,time:Date.now()})},[r]),i=(0,c.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:i=8,defaultPosition:n}=r||{},a=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=a.findIndex(t=>t.id===e.id),c=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...o?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:Q,endPause:o,calculateOffset:i}}},J=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,ee=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${C`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,et=N("div")`
  position: absolute;
`,er=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,eo=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ei=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?c.createElement(eo,null,t):t:"blank"===r?null:c.createElement(er,null,c.createElement(K,{...o}),"loading"!==r&&c.createElement(et,null,"error"===r?c.createElement(J,{...o}):c.createElement(ee,{...o})))},en=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ec=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,el=(e,t)=>{let r=e.includes("top")?1:-1,[o,i]=M()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[en(r),ea(r)];return{animation:t?`${C(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eu=c.memo(({toast:e,position:t,style:r,children:o})=>{let i=e.height?el(e.position||t||"top-center",e.visible):{opacity:0},n=c.createElement(ei,{toast:e}),a=c.createElement(ec,{...e.ariaProps},D(e.message,e));return c.createElement(es,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof o?o({icon:n,message:a}):c.createElement(c.Fragment,null,n,a))});a=c.createElement,x.p=void 0,I=a,k=void 0,$=void 0;var ep=({id:e,className:t,style:r,onHeightUpdate:o,children:i})=>{let n=c.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:n,className:t,style:r},i)},ed=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},ef=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,containerStyle:n,containerClassName:a})=>{let{toasts:s,handlers:l}=G(r);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(r=>{let n=r.position||t,a=ed(n,l.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return c.createElement(ep,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?ef:"",style:a},"custom"===r.type?D(r.message,r):i?i(r):c.createElement(eu,{toast:r,position:n}))}))};let eg=e=>{let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u(),{children:[(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("title",{children:"StartP - React Next IT Startup & Digital Agency Template"})]}),t,(0,s.jsx)(em,{position:"top-right"}),(0,s.jsx)(g,{scrollStepInPx:"100",delayInMs:"10.50"}),(0,s.jsx)(h,{})]})};var eh=r(1043),ey=r(1235),eb=r(8500);let ev={products:[{id:"wood-pencil",name:"Wood Pencil",price:19.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image1.jpg",images:[{id:1,img:"/images/shop-image/shop-image1.jpg"},{id:2,img:"/images/shop-image/shop-image1.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image1.jpg"}]},{id:"t-shirt",name:"T-Shirt",price:22.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image2.jpg",images:[{id:1,img:"/images/shop-image/shop-image1.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image2.jpg"}]},{id:"casual-shoe",name:"Casual Shoe",price:31.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image3.jpg",images:[{id:1,img:"/images/shop-image/shop-image3.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image2.jpg"}]},{id:"coffee-bag",name:"Coffee Bag",price:4.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image4.jpg",images:[{id:1,img:"/images/shop-image/shop-image4.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image4.jpg"}]},{id:"single-chair",name:"Single Chair",price:149.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image5.jpg",images:[{id:1,img:"/images/shop-image/shop-image5.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image4.jpg"}]},{id:"business-card",name:"Business Card",price:1.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image6.jpg",images:[{id:1,img:"/images/shop-image/shop-image6.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image4.jpg"}]},{id:"book-cover",name:"Book Cover",price:3.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image7.jpg",images:[{id:1,img:"/images/shop-image/shop-image7.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image4.jpg"}]},{id:"wall-watch",name:"Wall Watch",price:9.99,desc:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",availability:"In Stock",image:"/images/shop-image/shop-image8.jpg",images:[{id:1,img:"/images/shop-image/shop-image8.jpg"},{id:2,img:"/images/shop-image/shop-image2.jpg"},{id:3,img:"/images/shop-image/shop-image1.jpg"},{id:4,img:"/images/shop-image/shop-image4.jpg"}]}],cart:[],total:0},ew=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ev,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":let r=e.products.find(e=>e.id===t.id);if(e.cart.find(e=>t.id===e.id))return r.quantity+=1,{...e,total:e.total+r.price};{r.quantity=1;let t=e.total+r.price;return{...e,cart:[...e.cart,r],total:t}}case"ADD_QUANTITY":let o=e.cart.find(e=>e.id===t.id);o.quantity+=1;let i=e.total+o.price;return{...e,total:i};case"SUB_QUANTITY":let n=e.products.find(e=>e.id===t.id);if(1===n.quantity){let r=e.cart.filter(e=>e.id!==t.id),o=e.total-n.price;return{...e,cart:r,total:o}}{n.quantity-=1;let t=e.total-n.price;return{...e,total:t}}case"ADD_QUANTITY_WITH_NUMBER":let a=e.products.find(e=>e.id===t.id);if(e.cart.find(e=>t.id===e.id))return addeaddedItemDdItem.quantity+=t.qty,{...e,total:e.total+a.price*t.qty};{a.quantity=t.qty;let r=e.total+a.price*t.qty;return{...e,cart:[...e.cart,a],total:r}}case"REMOVE_ITEM":let s=e.cart.find(e=>t.id===e.id),c=e.cart.filter(e=>t.id!==e.id),l=e.total-s.price*s.quantity;return{...e,cart:c,total:l};case"RESET":return{...e,cart:[]};default:return e}};function ej(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ev;return(0,ey.MT)(ew,e,(0,eb.Uo)((0,ey.md)()))}let ex=e=>{let t=null!=o?o:ej(e);return e&&o&&(t=ej({...o.getState(),...e}),o=void 0),o||(o=t),t};function eS(e){let{Component:t,pageProps:r}=e,o=function(e){let t=(0,c.useMemo)(()=>ex(e),[e]);return t}(r.initialReduxState);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(eh.zt,{store:o,children:[(0,s.jsx)(eg,{}),(0,s.jsx)(u(),{children:(0,s.jsx)("title",{children:"I-Prex Best IT Solution"})}),(0,s.jsx)(t,{...r})]})})}},2523:function(){},7099:function(){},3352:function(){},1082:function(){},168:function(){},8912:function(){},3641:function(){},1701:function(){},228:function(){},1717:function(){},7073:function(){},9008:function(e,t,r){e.exports=r(3121)},2703:function(e,t,r){"use strict";var o=r(414);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,n,a){if(a!==o){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,n=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case p:case n:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case l:case d:case h:case g:case c:return e;default:return t}}case i:return t}}}function x(e){return j(e)===p}t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=d,t.Fragment=n,t.Lazy=h,t.Memo=g,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return x(e)||j(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return j(e)===l},t.isContextProvider=function(e){return j(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return j(e)===d},t.isFragment=function(e){return j(e)===n},t.isLazy=function(e){return j(e)===h},t.isMemo=function(e){return j(e)===g},t.isPortal=function(e){return j(e)===i},t.isProfiler=function(e){return j(e)===s},t.isStrictMode=function(e){return j(e)===a},t.isSuspense=function(e){return j(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===p||e===s||e===a||e===f||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===g||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},t.typeOf=j},9864:function(e,t,r){"use strict";e.exports=r(9921)},1043:function(e,t,r){"use strict";r.d(t,{zt:function(){return p},v9:function(){return f}});var o,i,n=r(7294),a=n.createContext(null),s=function(e){e()},c={notify:function(){},get:function(){return[]}};function l(e,t){var r,o=c;function i(){a.onStateChange&&a.onStateChange()}function n(){if(!r){var n,a,c;r=t?t.addNestedSub(i):e.subscribe(i),n=s,a=null,c=null,o={clear:function(){a=null,c=null},notify:function(){n(function(){for(var e=a;e;)e.callback(),e=e.next})},get:function(){for(var e=[],t=a;t;)e.push(t),t=t.next;return e},subscribe:function(e){var t=!0,r=c={callback:e,next:null,prev:c};return r.prev?r.prev.next=r:a=r,function(){t&&null!==a&&(t=!1,r.next?r.next.prev=r.prev:c=r.prev,r.prev?r.prev.next=r.next:a=r.next)}}}}}var a={addNestedSub:function(e){return n(),o.subscribe(e)},notifyNestedSubs:function(){o.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(r)},trySubscribe:n,tryUnsubscribe:function(){r&&(r(),r=void 0,o.clear(),o=c)},getListeners:function(){return o}};return a}var u="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect,p=function(e){var t=e.store,r=e.context,o=e.children,i=(0,n.useMemo)(function(){var e=l(t);return{store:t,subscription:e}},[t]),s=(0,n.useMemo)(function(){return t.getState()},[t]);return u(function(){var e=i.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}},[i,s]),n.createElement((r||a).Provider,{value:i},o)};r(8679),r(2973);var d=function(e,t){return e===t},f=(void 0===o&&(o=a),i=o===a?function(){return(0,n.useContext)(a)}:function(){return(0,n.useContext)(o)},function(e,t){void 0===t&&(t=d);var r=i(),o=function(e,t,r,o){var i,a=(0,n.useReducer)(function(e){return e+1},0)[1],s=(0,n.useMemo)(function(){return l(r,o)},[r,o]),c=(0,n.useRef)(),p=(0,n.useRef)(),d=(0,n.useRef)(),f=(0,n.useRef)(),m=r.getState();try{if(e!==p.current||m!==d.current||c.current){var g=e(m);i=void 0!==f.current&&t(g,f.current)?f.current:g}else i=f.current}catch(e){throw c.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),e}return u(function(){p.current=e,d.current=m,f.current=i,c.current=void 0}),u(function(){function e(){try{var e=r.getState();if(e===d.current)return;var o=p.current(e);if(t(o,f.current))return;f.current=o,d.current=e}catch(e){c.current=e}a()}return s.onStateChange=e,s.trySubscribe(),e(),function(){return s.tryUnsubscribe()}},[r,s]),i}(e,t,r.store,r.subscription);return(0,n.useDebugValue)(o),o});s=r(3935).unstable_batchedUpdates},8359:function(e,t){"use strict";/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=60103,o=60106,i=60107,n=60108,a=60114,s=60109,c=60110,l=60112,u=60113,p=60120,d=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var m=Symbol.for;m("react.element"),m("react.portal"),m("react.fragment"),m("react.strict_mode"),m("react.profiler"),m("react.provider"),m("react.context"),m("react.forward_ref"),m("react.suspense"),m("react.suspense_list"),m("react.memo"),m("react.lazy"),m("react.block"),m("react.server.block"),m("react.fundamental"),m("react.debug_trace_mode"),m("react.legacy_hidden")}},2973:function(e,t,r){"use strict";r(8359)},8500:function(e,t,r){"use strict";var o=r(1235).qC;t.Uo="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?o:o.apply(null,arguments)},"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},1235:function(e,t,r){"use strict";r.d(t,{md:function(){return _},qC:function(){return O},MT:function(){return S}});var o,i,n="object"==typeof global&&global&&global.Object===Object&&global,a="object"==typeof self&&self&&self.Object===Object&&self,s=(n||a||Function("return this")()).Symbol,c=Object.prototype,l=c.hasOwnProperty,u=c.toString,p=s?s.toStringTag:void 0,d=function(e){var t=l.call(e,p),r=e[p];try{e[p]=void 0;var o=!0}catch(e){}var i=u.call(e);return o&&(t?e[p]=r:delete e[p]),i},f=Object.prototype.toString,m=s?s.toStringTag:void 0,g=(o=Object.getPrototypeOf,i=Object,function(e){return o(i(e))}),h=Object.prototype,y=Function.prototype.toString,b=h.hasOwnProperty,v=y.call(Object),w=function(e){if(!(null!=e&&"object"==typeof e)||"[object Object]"!=(null==(t=e)?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?d(t):f.call(t)))return!1;var t,r=g(e);if(null===r)return!0;var o=b.call(r,"constructor")&&r.constructor;return"function"==typeof o&&o instanceof o&&y.call(o)==v},j=r(8123),x={INIT:"@@redux/INIT"};function S(e,t,r){if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw Error("Expected the enhancer to be a function.");return r(S)(e,t)}if("function"!=typeof e)throw Error("Expected the reducer to be a function.");var o,i=e,n=t,a=[],s=a,c=!1;function l(){s===a&&(s=a.slice())}function u(e){if("function"!=typeof e)throw Error("Expected listener to be a function.");var t=!0;return l(),s.push(e),function(){if(t){t=!1,l();var r=s.indexOf(e);s.splice(r,1)}}}function p(e){if(!w(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw Error("Reducers may not dispatch actions.");try{c=!0,n=i(n,e)}finally{c=!1}for(var t=a=s,r=0;r<t.length;r++)(0,t[r])();return e}return p({type:x.INIT}),(o={dispatch:p,subscribe:u,getState:function(){return n},replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");i=e,p({type:x.INIT})}})[j.Z]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e)throw TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(n)}return t(),{unsubscribe:u(t)}}})[j.Z]=function(){return this},e},o}function O(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};function _(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(r,o,i){var n=e(r,o,i),a=n.dispatch,s=[],c={getState:n.getState,dispatch:function(e){return a(e)}};return s=t.map(function(e){return e(c)}),a=O.apply(void 0,s)(n.dispatch),E({},n,{dispatch:a})}}}},8123:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}}),e=r.hmd(e);var o,i,n,a=("function"==typeof(i=("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r.g?r.g:e).Symbol)?i.observable?o=i.observable:(o=i("observable"),i.observable=o):o="@@observable",o)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);