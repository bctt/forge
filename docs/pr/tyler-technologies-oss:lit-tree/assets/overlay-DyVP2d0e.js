import{C as Qt,l as Zt,B as te,k as ee,j as ne}from"./constants-9n5_0r7k.js";import{B as oe,c as A}from"./base-adapter-B6TJxM93.js";import{k as ie,c as it}from"./feature-detection-DRCh51Sa.js";import{j as ft,a as se,c as re}from"./utils-CYJ0zQHl.js";import"./index-BgGCUUFB.js";const le=["top","right","bottom","left"],Q=Math.min,X=Math.max,ht=Math.round,ct=Math.floor,H=e=>({x:e,y:e}),ae={left:"right",right:"left",bottom:"top",top:"bottom"},ce={start:"end",end:"start"};function vt(e,t,o){return X(e,Q(t,o))}function et(e,t){return typeof e=="function"?e(t):e}function V(e){return e.split("-")[0]}function lt(e){return e.split("-")[1]}function Ft(e){return e==="x"?"y":"x"}function At(e){return e==="y"?"height":"width"}function Z(e){return["top","bottom"].includes(V(e))?"y":"x"}function Ot(e){return Ft(Z(e))}function fe(e,t,o){o===void 0&&(o=!1);const n=lt(e),i=Ot(e),s=At(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=pt(r)),[r,pt(r)]}function he(e){const t=pt(e);return[wt(e),t,wt(t)]}function wt(e){return e.replace(/start|end/g,t=>ce[t])}function pe(e,t,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?s:r;default:return[]}}function de(e,t,o,n){const i=lt(e);let s=pe(V(e),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),t&&(s=s.concat(s.map(wt)))),s}function pt(e){return e.replace(/left|right|bottom|top/g,t=>ae[t])}function ue(e){return{top:0,right:0,bottom:0,left:0,...e}}function Mt(e){return typeof e!="number"?ue(e):{top:e,right:e,bottom:e,left:e}}function dt(e){const{x:t,y:o,width:n,height:i}=e;return{width:n,height:i,top:o,left:t,right:t+n,bottom:o+i,x:t,y:o}}function Dt(e,t,o){let{reference:n,floating:i}=e;const s=Z(t),r=Ot(t),l=At(r),a=V(t),c=s==="y",p=n.x+n.width/2-i.width/2,h=n.y+n.height/2-i.height/2,u=n[l]/2-i[l]/2;let f;switch(a){case"top":f={x:p,y:n.y-i.height};break;case"bottom":f={x:p,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:h};break;case"left":f={x:n.x-i.width,y:h};break;default:f={x:n.x,y:n.y}}switch(lt(t)){case"start":f[r]-=u*(o&&c?-1:1);break;case"end":f[r]+=u*(o&&c?-1:1);break}return f}const me=async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:h}=Dt(c,n,a),u=n,f={},d=0;for(let m=0;m<l.length;m++){const{name:b,fn:y}=l[m],{x:v,y:_,data:E,reset:w}=await y({x:p,y:h,initialPlacement:n,placement:u,strategy:i,middlewareData:f,rects:c,platform:r,elements:{reference:e,floating:t}});p=v??p,h=_??h,f={...f,[b]:{...f[b],...E}},w&&d<=50&&(d++,typeof w=="object"&&(w.placement&&(u=w.placement),w.rects&&(c=w.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:p,y:h}=Dt(c,u,a)),m=-1)}return{x:p,y:h,placement:u,strategy:i,middlewareData:f}};async function ut(e,t){var o;t===void 0&&(t={});const{x:n,y:i,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:u=!1,padding:f=0}=et(t,e),d=Mt(f),b=l[u?h==="floating"?"reference":"floating":h],y=dt(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(b)))==null||o?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:p,strategy:a})),v=h==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),E=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},w=dt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:_,strategy:a}):v);return{top:(y.top-w.top+d.top)/E.y,bottom:(w.bottom-y.bottom+d.bottom)/E.y,left:(y.left-w.left+d.left)/E.x,right:(w.right-y.right+d.right)/E.x}}const ge=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:s,platform:r,elements:l,middlewareData:a}=t,{element:c,padding:p=0}=et(e,t)||{};if(c==null)return{};const h=Mt(p),u={x:o,y:n},f=Ot(i),d=At(f),m=await r.getDimensions(c),b=f==="y",y=b?"top":"left",v=b?"bottom":"right",_=b?"clientHeight":"clientWidth",E=s.reference[d]+s.reference[f]-u[f]-s.floating[d],w=u[f]-s.reference[f],x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let L=x?x[_]:0;(!L||!await(r.isElement==null?void 0:r.isElement(x)))&&(L=l.floating[_]||s.floating[d]);const M=E/2-w/2,D=L/2-m[d]/2-1,T=Q(h[y],D),U=Q(h[v],D),j=T,ot=L-m[d]-U,P=L/2-m[d]/2+M,K=vt(j,P,ot),$=!a.arrow&&lt(i)!=null&&P!==K&&s.reference[d]/2-(P<j?T:U)-m[d]/2<0,I=$?P<j?P-j:P-ot:0;return{[f]:u[f]+I,data:{[f]:K,centerOffset:P-K-I,...$&&{alignmentOffset:I}},reset:$}}}),ye=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:m=!0,...b}=et(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const y=V(i),v=Z(l),_=V(l)===l,E=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=u||(_||!m?[pt(l)]:he(l)),x=d!=="none";!u&&x&&w.push(...de(l,m,d,E));const L=[l,...w],M=await ut(t,b),D=[];let T=((n=s.flip)==null?void 0:n.overflows)||[];if(p&&D.push(M[y]),h){const P=fe(i,r,E);D.push(M[P[0]],M[P[1]])}if(T=[...T,{placement:i,overflows:D}],!D.every(P=>P<=0)){var U,j;const P=(((U=s.flip)==null?void 0:U.index)||0)+1,K=L[P];if(K)return{data:{index:P,overflows:T},reset:{placement:K}};let $=(j=T.filter(I=>I.overflows[0]<=0).sort((I,W)=>I.overflows[1]-W.overflows[1])[0])==null?void 0:j.placement;if(!$)switch(f){case"bestFit":{var ot;const I=(ot=T.filter(W=>{if(x){const Y=Z(W.placement);return Y===v||Y==="y"}return!0}).map(W=>[W.placement,W.overflows.filter(Y=>Y>0).reduce((Y,Jt)=>Y+Jt,0)]).sort((W,Y)=>W[1]-Y[1])[0])==null?void 0:ot[0];I&&($=I);break}case"initialPlacement":$=l;break}if(i!==$)return{reset:{placement:$}}}return{}}}};function Rt(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Nt(e){return le.some(t=>e[t]>=0)}const be=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o}=t,{strategy:n="referenceHidden",...i}=et(e,t);switch(n){case"referenceHidden":{const s=await ut(t,{...i,elementContext:"reference"}),r=Rt(s,o.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Nt(r)}}}case"escaped":{const s=await ut(t,{...i,altBoundary:!0}),r=Rt(s,o.floating);return{data:{escapedOffsets:r,escaped:Nt(r)}}}default:return{}}}}};async function _e(e,t){const{placement:o,platform:n,elements:i}=e,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=V(o),l=lt(o),a=Z(o)==="y",c=["left","top"].includes(r)?-1:1,p=s&&a?-1:1,h=et(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:d}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof d=="number"&&(f=l==="end"?d*-1:d),a?{x:f*p,y:u*c}:{x:u*c,y:f*p}}const ve=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:i,y:s,placement:r,middlewareData:l}=t,a=await _e(t,e);return r===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:r}}}}},we=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:i}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:b=>{let{x:y,y:v}=b;return{x:y,y:v}}},...a}=et(e,t),c={x:o,y:n},p=await ut(t,a),h=Z(V(i)),u=Ft(h);let f=c[u],d=c[h];if(s){const b=u==="y"?"top":"left",y=u==="y"?"bottom":"right",v=f+p[b],_=f-p[y];f=vt(v,f,_)}if(r){const b=h==="y"?"top":"left",y=h==="y"?"bottom":"right",v=d+p[b],_=d-p[y];d=vt(v,d,_)}const m=l.fn({...t,[u]:f,[h]:d});return{...m,data:{x:m.x-o,y:m.y-n,enabled:{[u]:s,[h]:r}}}}}};function gt(){return typeof window<"u"}function nt(e){return $t(e)?(e.nodeName||"").toLowerCase():"#document"}function S(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){var t;return(t=($t(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function $t(e){return gt()?e instanceof Node||e instanceof S(e).Node:!1}function N(e){return gt()?e instanceof Element||e instanceof S(e).Element:!1}function B(e){return gt()?e instanceof HTMLElement||e instanceof S(e).HTMLElement:!1}function kt(e){return!gt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof S(e).ShadowRoot}function at(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=k(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function Ee(e){return["table","td","th"].includes(nt(e))}function yt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pt(e){const t=Ct(),o=N(e)?k(e):e;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function xe(e){let t=z(e);for(;B(t)&&!tt(t);){if(Pt(t))return t;if(yt(t))return null;t=z(t)}return null}function Ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(e){return["html","body","#document"].includes(nt(e))}function k(e){return S(e).getComputedStyle(e)}function bt(e){return N(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function z(e){if(nt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kt(e)&&e.host||F(e);return kt(t)?t.host:t}function Wt(e){const t=z(e);return tt(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&at(t)?t:Wt(t)}function rt(e,t,o){var n;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=Wt(e),s=i===((n=e.ownerDocument)==null?void 0:n.body),r=S(i);if(s){const l=Et(r);return t.concat(r,r.visualViewport||[],at(i)?i:[],l&&o?rt(l):[])}return t.concat(i,rt(i,[],o))}function Et(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Yt(e){const t=k(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=B(e),s=i?e.offsetWidth:o,r=i?e.offsetHeight:n,l=ht(o)!==s||ht(n)!==r;return l&&(o=s,n=r),{width:o,height:n,$:l}}function Lt(e){return N(e)?e:e.contextElement}function J(e){const t=Lt(e);if(!B(t))return H(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:s}=Yt(t);let r=(s?ht(o.width):o.width)/n,l=(s?ht(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Ae=H(0);function zt(e){const t=S(e);return!Ct()||!t.visualViewport?Ae:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Oe(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==S(e)?!1:t}function G(e,t,o,n){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),s=Lt(e);let r=H(1);t&&(n?N(n)&&(r=J(n)):r=J(e));const l=Oe(s,o,n)?zt(s):H(0);let a=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,p=i.width/r.x,h=i.height/r.y;if(s){const u=S(s),f=n&&N(n)?S(n):n;let d=u,m=Et(d);for(;m&&n&&f!==d;){const b=J(m),y=m.getBoundingClientRect(),v=k(m),_=y.left+(m.clientLeft+parseFloat(v.paddingLeft))*b.x,E=y.top+(m.clientTop+parseFloat(v.paddingTop))*b.y;a*=b.x,c*=b.y,p*=b.x,h*=b.y,a+=_,c+=E,d=S(m),m=Et(d)}}return dt({width:p,height:h,x:a,y:c})}function St(e,t){const o=bt(e).scrollLeft;return t?t.left+o:G(F(e)).left+o}function Ut(e,t,o){o===void 0&&(o=!1);const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-(o?0:St(e,n)),s=n.top+t.scrollTop;return{x:i,y:s}}function Pe(e){let{elements:t,rect:o,offsetParent:n,strategy:i}=e;const s=i==="fixed",r=F(n),l=t?yt(t.floating):!1;if(n===r||l&&s)return o;let a={scrollLeft:0,scrollTop:0},c=H(1);const p=H(0),h=B(n);if((h||!h&&!s)&&((nt(n)!=="body"||at(r))&&(a=bt(n)),B(n))){const f=G(n);c=J(n),p.x=f.x+n.clientLeft,p.y=f.y+n.clientTop}const u=r&&!h&&!s?Ut(r,a,!0):H(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+p.x+u.x,y:o.y*c.y-a.scrollTop*c.y+p.y+u.y}}function Ce(e){return Array.from(e.getClientRects())}function Le(e){const t=F(e),o=bt(e),n=e.ownerDocument.body,i=X(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=X(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+St(e);const l=-o.scrollTop;return k(n).direction==="rtl"&&(r+=X(t.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:l}}function Se(e,t){const o=S(e),n=F(e),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,a=0;if(i){s=i.width,r=i.height;const c=Ct();(!c||c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:l,y:a}}function Te(e,t){const o=G(e,!0,t==="fixed"),n=o.top+e.clientTop,i=o.left+e.clientLeft,s=B(e)?J(e):H(1),r=e.clientWidth*s.x,l=e.clientHeight*s.y,a=i*s.x,c=n*s.y;return{width:r,height:l,x:a,y:c}}function It(e,t,o){let n;if(t==="viewport")n=Se(e,o);else if(t==="document")n=Le(F(e));else if(N(t))n=Te(t,o);else{const i=zt(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return dt(n)}function jt(e,t){const o=z(e);return o===t||!N(o)||tt(o)?!1:k(o).position==="fixed"||jt(o,t)}function De(e,t){const o=t.get(e);if(o)return o;let n=rt(e,[],!1).filter(l=>N(l)&&nt(l)!=="body"),i=null;const s=k(e).position==="fixed";let r=s?z(e):e;for(;N(r)&&!tt(r);){const l=k(r),a=Pt(r);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||at(r)&&!a&&jt(e,r))?n=n.filter(p=>p!==r):i=l,r=z(r)}return t.set(e,n),n}function Re(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[...o==="clippingAncestors"?yt(t)?[]:De(t,this._c):[].concat(o),n],l=r[0],a=r.reduce((c,p)=>{const h=It(t,p,i);return c.top=X(h.top,c.top),c.right=Q(h.right,c.right),c.bottom=Q(h.bottom,c.bottom),c.left=X(h.left,c.left),c},It(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Ne(e){const{width:t,height:o}=Yt(e);return{width:t,height:o}}function ke(e,t,o){const n=B(t),i=F(t),s=o==="fixed",r=G(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=H(0);if(n||!n&&!s)if((nt(t)!=="body"||at(i))&&(l=bt(t)),n){const u=G(t,!0,s,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else i&&(a.x=St(i));const c=i&&!n&&!s?Ut(i,l):H(0),p=r.left+l.scrollLeft-a.x-c.x,h=r.top+l.scrollTop-a.y-c.y;return{x:p,y:h,width:r.width,height:r.height}}function _t(e){return k(e).position==="static"}function Ht(e,t){if(!B(e)||k(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return F(e)===o&&(o=o.ownerDocument.body),o}function Xt(e,t){const o=S(e);if(yt(e))return o;if(!B(e)){let i=z(e);for(;i&&!tt(i);){if(N(i)&&!_t(i))return i;i=z(i)}return o}let n=Ht(e,t);for(;n&&Ee(n)&&_t(n);)n=Ht(n,t);return n&&tt(n)&&_t(n)&&!Pt(n)?o:n||xe(e)||o}const Ie=async function(e){const t=this.getOffsetParent||Xt,o=this.getDimensions,n=await o(e.floating);return{reference:ke(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function He(e){return k(e).direction==="rtl"}const Be={convertOffsetParentRelativeRectToViewportRelativeRect:Pe,getDocumentElement:F,getClippingRect:Re,getOffsetParent:Xt,getElementRects:Ie,getClientRects:Ce,getDimensions:Ne,getScale:J,isElement:N,isRTL:He};function Fe(e,t){let o=null,n;const i=F(e);function s(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:c,top:p,width:h,height:u}=e.getBoundingClientRect();if(l||t(),!h||!u)return;const f=ct(p),d=ct(i.clientWidth-(c+h)),m=ct(i.clientHeight-(p+u)),b=ct(c),v={rootMargin:-f+"px "+-d+"px "+-m+"px "+-b+"px",threshold:X(0,Q(1,a))||1};let _=!0;function E(w){const x=w[0].intersectionRatio;if(x!==a){if(!_)return r();x?r(!1,x):n=setTimeout(()=>{r(!1,1e-7)},1e3)}_=!1}try{o=new IntersectionObserver(E,{...v,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,v)}o.observe(e)}return r(!0),s}function Me(e,t,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=Lt(e),p=i||s?[...c?rt(c):[],...rt(t)]:[];p.forEach(y=>{i&&y.addEventListener("scroll",o,{passive:!0}),s&&y.addEventListener("resize",o)});const h=c&&l?Fe(c,o):null;let u=-1,f=null;r&&(f=new ResizeObserver(y=>{let[v]=y;v&&v.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var _;(_=f)==null||_.observe(t)})),o()}),c&&!a&&f.observe(c),f.observe(t));let d,m=a?G(e):null;a&&b();function b(){const y=G(e);m&&(y.x!==m.x||y.y!==m.y||y.width!==m.width||y.height!==m.height)&&o(),m=y,d=requestAnimationFrame(b)}return o(),()=>{var y;p.forEach(v=>{i&&v.removeEventListener("scroll",o),s&&v.removeEventListener("resize",o)}),h==null||h(),(y=f)==null||y.disconnect(),f=null,a&&cancelAnimationFrame(d)}}const $e=ve,We=we,Ye=ye,ze=be,Ue=ge,je=(e,t,o)=>{const n=new Map,i={platform:Be,...o},s={...i.platform,_c:n};return me(e,t,{...i,platform:s})},Vt=["top-start","top","top-end","left-start","left","left-end","right-start","right","right-end"];class st{constructor(t,o,n=0,i=0){this.x=t,this.y=o,this.height=n,this.width=i}getBoundingClientRect(){return{x:this.x,y:this.y,top:this.y,left:this.x,bottom:this.y,right:this.x,width:this.height,height:this.width,toJSON(){}}}static fromElement(t){const o=t.getBoundingClientRect();return new st(o.left,o.top,o.height,o.width)}static fromEvent(t){if(t instanceof MouseEvent)return new st(t.clientX,t.clientY);if(t instanceof TouchEvent)return new st(t.touches[0].clientX,t.touches[0].clientY);throw new Error("Unsupported event type")}}async function Xe({element:e,anchorElement:t,placement:o="bottom",offset:n=!1,offsetOptions:i,strategy:s="fixed",apply:r=!0,flip:l=!0,flipOptions:a={fallbackPlacements:Vt,fallbackStrategy:"initialPlacement"},shift:c=!0,shiftOptions:p,hide:h=!1,hideOptions:u,arrowElement:f,arrowOptions:d={}}){var E,w;const m=[];n&&m.push($e(i)),c&&m.push(We(p)),l&&m.push(Ye(a)),h&&m.push(ze(u)),f&&m.push(Ue({...d,element:f}));const{x:b,y,placement:v,middlewareData:_}=await je(t,e,{strategy:s,placement:o,middleware:m});if(r){const x={left:"0",top:"0",translate:`${ft(b)}px ${ft(y)}px`};Object.assign(e.style,x),(E=_.hide)!=null&&E.referenceHidden?e.style.display="none":e.style.removeProperty("display")}return{x:b,y,hidden:((w=_.hide)==null?void 0:w.referenceHidden)??!1,placement:v,arrow:_.arrow}}const xt=`${Qt}overlay`,Gt={ANCHOR:"anchor",NO_ANCHOR:"no-anchor",OPEN:"open",INLINE:"inline",PLACEMENT:"placement",POSITION_STRATEGY:"position-strategy",HIDE:"hide",PERSISTENT:"persistent",SHIFT:"shift",FLIP:"flip",BOUNDARY:"boundary",FALLBACK_PLACEMENTS:"fallback-placements"},Ve={...Gt,POSITION_PLACEMENT:"position-placement",CLIPPED_X:"clipped-x",CLIPPED_Y:"clipped-y"},Kt={OVERLAY:"forge-overlay"},Ge={ROOT:`.${Kt.OVERLAY}`},Ke={LIGHT_DISMISS:`${xt}-light-dismiss`,DESCENDANT_TEST:`${xt}-descendant-test`},qe={HIDE:"anchor-hidden",FLIP:"auto"},g={elementName:xt,observedAttributes:Gt,attributes:Ve,classes:Kt,selectors:Ge,events:Ke,defaults:qe},mt=ie(),q=Symbol("overlayStack"),Je={left:["right","bottom","top","top-start","top-end","left-start","left-end","right-start","right-end"],"left-start":["left-end","right-start","right-end","bottom","top"],"left-end":["left-start","right-end","right-start","bottom","top","bottom-start","bottom-end"],right:["left","bottom","top","top-start","top-end","left-start","left-end","right-start","right-end"],"right-start":["right-end","left-start","left-end","bottom","top"],"right-end":["right-start","left-end","left-start","bottom","top","bottom-start","bottom-end"],top:["bottom","left","right","bottom-start","left-start","left-end","right-start","right-end"],"top-start":["bottom-start","left","right","left-start","left-end","right-start","right-end"],"top-end":["bottom-end","left","right","right-start","right-end","left-start","left-end"],bottom:["top","left","right","top-start","left-start","left-end","right-start","right-end"],"bottom-start":["top-start","left","right","left-start","left-end","right-start","right-end"],"bottom-end":["top-end","left","right","right-start","right-end","left-start","left-end"]};class Qe extends oe{constructor(t){super(t),this._lightDismissController=new AbortController,this._rootElement=Zt(t,g.selectors.ROOT)}async show(){!this._component.inline&&mt?(this._rootElement.popover="manual",this._rootElement.showPopover()):this._rootElement.removeAttribute("popover"),R[q].add(this._component)}hide(){var t;this.tryCleanupAutoUpdate(),mt&&this._rootElement.matches(":popover-open")&&(this._rootElement.hidePopover(),this._rootElement.removeAttribute("popover")),this._rootElement.style.removeProperty("top"),this._rootElement.style.removeProperty("left"),this._rootElement.style.removeProperty("translate"),this._rootElement.style.removeProperty("display"),(t=this._component.arrowElement)==null||t.removeAttribute("style"),this._component.removeAttribute(g.attributes.POSITION_PLACEMENT),this._component.removeAttribute(g.attributes.CLIPPED_X),this._component.removeAttribute(g.attributes.CLIPPED_Y),R[q].delete(this._component)}tryHideDescendantOverlays(){this._findDescendantOverlays().filter(o=>!o.persistent).forEach(o=>o.open=!1)}locateAnchorElement(t){return se(this._component,t)}positionElement({anchorElement:t,strategy:o,placement:n,hide:i,offset:s,shift:r,flip:l,boundary:a,boundaryElement:c,fallbackPlacements:p}){this.tryCleanupAutoUpdate();const h={...s},u=(c||(a?this._component.closest(`#${a}`):null))??"clippingAncestors";this._autoUpdateCleanup=Me(t,this._rootElement,async()=>{const f={...h};if(this._component.arrowElement){const x=this._component.arrowElementOffset||Math.sqrt(2*this._component.arrowElement.offsetWidth**2)/2;f.mainAxis==null&&(f.mainAxis=0),f.mainAxis+=x}const d=await Xe({element:this._rootElement,anchorElement:t,strategy:o,placement:n,hide:i!=="never",shift:r,shiftOptions:{boundary:u},flip:l!=="never",flipOptions:{fallbackStrategy:"bestFit",fallbackPlacements:p??Je[n]??Vt,crossAxis:l==="cross"||l==="auto",mainAxis:l==="main"||l==="auto"},arrowElement:this._component.arrowElement,offset:!!f,offsetOptions:f}),m=d.placement.split("-")[0],b={top:"bottom",right:"left",bottom:"top",left:"right"}[m];if(b&&this._component.setAttribute(g.attributes.POSITION_PLACEMENT,d.placement),this._component.arrowElement&&d.arrow){const{x,y:L}=d.arrow,M=this._component.arrowElement.offsetWidth,{borderWidth:D="0"}=getComputedStyle(this._component.arrowElement),T=parseFloat(D);Object.assign(this._component.arrowElement.style,{top:L!=null?`${L}px`:"",left:x!=null?`${x}px`:"",right:"",bottom:"",[b]:`${-M/2-T}px`})}const y=Math.max(document.documentElement.clientWidth,window.innerWidth),v=Math.max(document.documentElement.clientHeight,window.innerHeight),_=this._rootElement.getBoundingClientRect(),E=_.right>y||_.left<0,w=_.bottom>v||_.top<0;if(this._component.toggleAttribute(g.attributes.CLIPPED_X,E),this._component.toggleAttribute(g.attributes.CLIPPED_Y,w),E||w){const{x,y:L}=d,{height:M,width:D}=_,T=E?x+D-y:0,U=w?L+M-v:0;this._rootElement.style.translate=`${ft(x-T)}px ${ft(L-U)}px`}})}tryCleanupAutoUpdate(){var t;(t=this._autoUpdateCleanup)==null||t.call(this),this._autoUpdateCleanup=void 0}isMostRecentOpenOverlay(){return Array.from(R[q]).at(-1)===this._component}addLightDismissListener(t){this.removeLightDismissListener();const o=i=>{i.key==="Escape"&&this.isMostRecentOpenOverlay()&&(i.preventDefault(),i.stopPropagation(),t("escape"))};this._component.ownerDocument.addEventListener("keydown",o,{signal:this._lightDismissController.signal});const n=i=>{const s=i.composedPath(),r=Array.from(R[q]),l=r.indexOf(this._component),a=s.some(u=>u instanceof R&&r.indexOf(u)>l),c=i.button===2;if(a||c)return;const p=this._component.anchorElement instanceof st?!1:this._component.anchorElement&&s.includes(this._component.anchorElement),h=s.includes(this._rootElement);!p&&!h&&t("click")};this._component.ownerDocument.addEventListener("pointerup",n,{capture:!0,signal:this._lightDismissController.signal})}removeLightDismissListener(){this._lightDismissController.abort(),this._lightDismissController=new AbortController}_findDescendantOverlays(){const t=Array.from(R[q]),o=t.slice(t.indexOf(this._component)+1).reverse(),n=[];if(o.length){const i=s=>n.push(s.target);this._component.addEventListener(g.events.DESCENDANT_TEST,i),o.forEach(s=>s.dispatchEvent(new CustomEvent(g.events.DESCENDANT_TEST,{bubbles:!0,composed:!0}))),this._component.removeEventListener(g.events.DESCENDANT_TEST,i)}return n}}class Ze{constructor(t){this._adapter=t}initialize(){}}class tn extends Ze{constructor(t){super(t),this._noAnchor=!1,this._open=!1,this._inline=!1,this._placement="bottom",this._positionStrategy="fixed",this._offset={},this._shift=!1,this._hide=g.defaults.HIDE,this._flip=g.defaults.FLIP,this._fallbackPlacements=null,this._persistent=!1,this._arrowElementOffset=0,this._lightDismissListener=this._onLightDismiss.bind(this)}initialize(){this._adapter.tryApplyGlobalConfiguration(["placement","positionStrategy","shift","hide","flip","boundaryElement","fallbackPlacements","persistent"]),!this._noAnchor&&!this._anchorElement&&this._anchor&&(this._anchorElement=this._adapter.locateAnchorElement(this._anchor)),mt||(this.inline=!0),this._adapter.hasHostAttribute(g.attributes.OPEN)&&this._applyOpen(!0)}destroy(){this._open&&this._hideOverlay()}position(){!this._open||this._noAnchor||!this._anchorElement||this._adapter.positionElement({anchorElement:this._anchorElement,strategy:this._positionStrategy,placement:this._placement,hide:this._hide,offset:this._offset,shift:this._shift,flip:this._flip,boundary:this._boundary,boundaryElement:this._boundaryElement,fallbackPlacements:this._fallbackPlacements??void 0})}_onLightDismiss(t){const o={reason:t},n=new CustomEvent(g.events.LIGHT_DISMISS,{bubbles:!1,cancelable:!0,detail:o});this._adapter.dispatchHostEvent(n),!n.defaultPrevented&&this._applyOpen(!1)}_applyOpen(t){this._adapter.isConnected&&(this._open=t,this._open?this._showOverlay():this._hideOverlay(),this._adapter.toggleHostAttribute(g.attributes.OPEN,this._open))}_showOverlay(){this._adapter.show(),this._persistent||this._applyLightDismissListener(),!this._noAnchor&&this._anchorElement&&this.position()}_hideOverlay(){this._adapter.tryHideDescendantOverlays(),this._adapter.hide(),this._adapter.removeLightDismissListener()}_applyLightDismissListener(){this._adapter.addLightDismissListener(this._lightDismissListener)}get anchorElement(){return this._anchorElement}set anchorElement(t){this._anchorElement=t,this._open&&this.position()}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._adapter.isConnected&&(this._anchorElement=this._anchor?this._adapter.locateAnchorElement(this._anchor):null),this._adapter.toggleHostAttribute(g.attributes.ANCHOR,!!this._anchor,this._anchor))}get noAnchor(){return this._noAnchor}set noAnchor(t){t=!!t,this._noAnchor!==t&&(this._noAnchor=t,this._adapter.toggleHostAttribute(g.attributes.NO_ANCHOR,this._noAnchor))}get open(){return this._open}set open(t){t=!!t,this._open!==t&&this._applyOpen(t)}get arrowElement(){return this._arrowElement}set arrowElement(t){this._arrowElement=t,this._open&&this.position()}get arrowElementOffset(){return this._arrowElementOffset}set arrowElementOffset(t){this._arrowElementOffset=t,this._open&&this.position()}get inline(){return this._inline}set inline(t){t=mt?!!t:!0,this._inline!==t&&(this._inline=t,this._adapter.toggleHostAttribute(g.attributes.INLINE,this._inline))}get placement(){return this._placement}set placement(t){this._placement!==t&&(this._placement=t,this._open&&this.position(),this._adapter.setHostAttribute(g.attributes.PLACEMENT,this._placement))}get positionStrategy(){return this._positionStrategy}set positionStrategy(t){this._positionStrategy!==t&&(this._positionStrategy=t,this._open&&this.position(),this._adapter.setHostAttribute(g.attributes.POSITION_STRATEGY,this._positionStrategy))}get offset(){return this._offset}set offset(t){this._offset=t,this._open&&this.position()}get shift(){return this._shift}set shift(t){t=!!t,this._shift!==t&&(this._shift=t,this._open&&this.position(),this._adapter.toggleHostAttribute(g.attributes.SHIFT,this._shift))}get hide(){return this._hide}set hide(t){this._hide!==t&&(this._hide=t??g.defaults.HIDE,this._open&&this.position(),this._adapter.toggleHostAttribute(g.attributes.HIDE,this._hide!==g.defaults.HIDE,String(this._hide)))}get persistent(){return this._persistent}set persistent(t){t=!!t,this._persistent!==t&&(this._persistent=t,this._persistent?this._adapter.removeLightDismissListener():this._open&&this._applyLightDismissListener(),this._adapter.toggleHostAttribute(g.attributes.PERSISTENT,this._persistent))}get flip(){return this._flip}set flip(t){this._flip!==t&&(this._flip=t??g.defaults.FLIP,this._open&&this.position(),this._adapter.toggleHostAttribute(g.attributes.FLIP,this._flip!==g.defaults.FLIP,String(this._flip)))}get boundary(){return this._boundary}set boundary(t){this._boundary!==t&&(this._boundary=t,this._open&&this.position(),this._adapter.toggleHostAttribute(g.attributes.BOUNDARY,!!this._boundary,this._boundary))}get boundaryElement(){return this._boundaryElement}set boundaryElement(t){this._boundaryElement=t,this._open&&this.position()}get fallbackPlacements(){return this._fallbackPlacements}set fallbackPlacements(t){this._fallbackPlacements=t,this._open&&this.position()}}var en=Object.defineProperty,C=(e,t,o,n)=>{for(var i=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(i=r(t,o,i)||i);return i&&en(t,o,i),i};class O extends te{constructor(){super()}position(){this._core.position()}attributeChangedCallback(t,o,n){switch(t){case g.observedAttributes.ANCHOR:this.anchor=n;break;case g.observedAttributes.NO_ANCHOR:this.noAnchor=it(n);break;case g.observedAttributes.OPEN:this.open=it(n);break;case g.observedAttributes.INLINE:this.inline=it(n);break;case g.observedAttributes.PLACEMENT:this.placement=n;break;case g.observedAttributes.POSITION_STRATEGY:this.positionStrategy=n;break;case g.observedAttributes.HIDE:this.hide=n;break;case g.observedAttributes.PERSISTENT:this.persistent=it(n);break;case g.observedAttributes.SHIFT:this.shift=it(n);break;case g.observedAttributes.FLIP:this.flip=n;break;case g.observedAttributes.BOUNDARY:this.boundary=n;break;case g.observedAttributes.FALLBACK_PLACEMENTS:this.fallbackPlacements=n!=null&&n.trim()?re(n):null;break}}}C([A()],O.prototype,"anchorElement");C([A()],O.prototype,"anchor");C([A()],O.prototype,"noAnchor");C([A()],O.prototype,"open");C([A()],O.prototype,"inline");C([A()],O.prototype,"placement");C([A()],O.prototype,"positionStrategy");C([A()],O.prototype,"offset");C([A()],O.prototype,"shift");C([A()],O.prototype,"hide");C([A()],O.prototype,"persistent");C([A()],O.prototype,"flip");C([A()],O.prototype,"boundary");C([A()],O.prototype,"boundaryElement");C([A()],O.prototype,"fallbackPlacements");const nn=`<template>
  <div class="forge-overlay" part="root">
    <slot></slot>
  </div>
</template>
`,on=":host{display:contents}:host([hidden]){display:none}.forge-overlay{--_overlay-position: var(--forge-overlay-position, fixed);--_overlay-z-index: var(--forge-overlay-z-index, var(--forge-z-index-popup, 10));--_overlay-height: var(--forge-overlay-height, fit-content);--_overlay-width: var(--forge-overlay-width, fit-content);--_overlay-position-inline-start: var(--forge-overlay-position-inline-start, auto);--_overlay-position-inline-end: var(--forge-overlay-position-inline-end, auto);--_overlay-position-block-start: var(--forge-overlay-position-block-start, auto);--_overlay-position-block-end: var(--forge-overlay-position-block-end, auto)}.forge-overlay{display:none;box-sizing:border-box;height:var(--_overlay-height);width:var(--_overlay-width);border-radius:inherit;position:var(--_overlay-position);top:0;left:0;z-index:var(--_overlay-z-index);background:inherit;color:inherit}:host([position-strategy=absolute]) .forge-overlay{--_overlay-position: var(--forge-overlay-position, absolute)}:host([open][inline]) .forge-overlay{display:block;padding:0;margin:0;border:none;overflow:visible;inset:unset}:host([open]) .forge-overlay:popover-open{display:block;padding:0;margin:0;border:none;overflow:visible;inset:unset}:host([open][no-anchor]) .forge-overlay:popover-open{top:0;right:0;bottom:0;left:0;margin:auto;margin-inline-start:var(--_overlay-position-inline-start);margin-inline-end:var(--_overlay-position-inline-end);margin-block-start:var(--_overlay-position-block-start);margin-block-end:var(--_overlay-position-block-end)}";var sn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Tt=(e,t,o,n)=>{for(var i=n>1?void 0:n?rn(t,o):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&sn(t,o,i),i},qt,Bt;let R=class extends(Bt=O,qt=q,Bt){static get observedAttributes(){return Object.values(g.observedAttributes)}constructor(){super(),ee(this,nn,on),this._core=new tn(new Qe(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}};R[qt]=new Set;Tt([A()],R.prototype,"arrowElement",2);Tt([A()],R.prototype,"arrowElementOffset",2);R=Tt([ne({name:g.elementName})],R);export{g as O,st as V,R as a};
