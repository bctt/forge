const f="forge-aria-controls-placeholder";function h(t,e){const r=t.toLowerCase().indexOf(e.toLowerCase());if(r!==-1){const i=r+e.length,o=document.createElement("span"),s=document.createElement("span");return s.style.fontWeight="bold",s.textContent=t.substring(r,i),o.appendChild(document.createTextNode(t.substring(0,r))),o.appendChild(s),o.appendChild(document.createTextNode(t.substring(i))),o}}function g(t,{capture:e=!0,pointerenter:n=!0,focusin:r=!0}={}){let i;const o=()=>{typeof i=="function"&&i()};return{userInteraction:new Promise(l=>{const c={once:!0,capture:e},a=d=>{r&&t.removeEventListener("focusin",u,c),l(d)},u=d=>{n&&t.removeEventListener("pointerenter",a,c),l(d)};i=()=>{n&&t.removeEventListener("pointerenter",a,c),r&&t.removeEventListener("focusin",u,c)},n&&t.addEventListener("pointerenter",a,c),r&&t.addEventListener("focusin",u,c)}),destroy:o}}function m(t,e){return e===0?0:t/100*e}function y(t,e,n,r=0,i=100){const o=n-e,s=t-e;return!o||!s?r:s*i/o+r}function v(...t){return Math.min(...t.map(e=>e??Number.POSITIVE_INFINITY))}function b(t,e){if(!(t&&e))return!1;const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return!(n.top>r.bottom||n.right<r.left||n.bottom<r.top||n.left>r.right)}function C({x:t,y:e},n){if(!n)return!1;const{top:r,left:i,bottom:o,right:s}=n.getBoundingClientRect();return t>=i&&t<=s&&e>=r&&e<=o}function E(t,e){let n=null;return e&&(n=p(t,e)),n||t.parentElement}function p(t,e){const n=t.getRootNode();return e===":host"&&n instanceof ShadowRoot?n.host:n.querySelector(`#${e}`)}function I(t,e,n=!0){return n&&e.append(...t.childNodes),t.insertAdjacentElement("beforebegin",e),t.remove(),e}function L(t,e=","){return t.split(e).map(n=>n.trim())}function P(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}function x(){if(document.getElementById(f))return;const e=document.createElement("div");e.id=f,document.body.appendChild(e)}function O(t){const e=document.getElementById(f);e&&t.setAttribute("aria-controls",e.id)}function R(t=0){return new Promise(e=>setTimeout(e,t))}function T(){return new Promise(t=>requestAnimationFrame(()=>t()))}function w(t,e){return Object.prototype.toString.call(t)===`[object ${e}]`}function N(t){if(typeof t.checkVisibility=="function")return t.checkVisibility();const e=window.getComputedStyle(t);return e.display!=="none"&&e.visibility!=="hidden"&&e.visibility!=="collapse"&&e.opacity!=="0"&&e.getPropertyValue("content-visibility")!=="hidden"}function S(t,e,n){if(n)try{t.states.add(e)}catch{t.states.add(`--${e}`)}else try{t.states.delete(e)}catch{t.states.delete(`--${e}`)}}export{S as a,p as b,L as c,x as d,g as e,T as f,b as g,N as h,C as i,w as j,P as k,E as l,h as m,v as n,y as o,m as p,I as r,O as s,R as t};
