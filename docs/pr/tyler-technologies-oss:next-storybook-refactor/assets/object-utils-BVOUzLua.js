function a(e,r){let t=r.replace(/\[(\w+)\]/g,".$1");t=t.replace(/^\./,"");const n=t.split(".");for(let o=0;o<n.length;++o){const i=n[o];if(e&&typeof e=="object"&&i in e)e=e[i];else{e="";break}}return e}function c(e,r){return e.find(t=>s(t,r))}function p(e,r){if(!e||!e.length)throw new Error("Invalid key");const t={};for(const n of e)if(Object.prototype.hasOwnProperty.call(r,n))t[n]=r[n];else throw new Error(`Invalid key. The property "${n}" does not exist in the data.`);return t}function s(e,r){return Object.keys(r).every(t=>e[t]===r[t])}function f(e,r,t,n){let o=r;r.hasOwnProperty(t)||(o=Object.getPrototypeOf(r));const i=Object.getOwnPropertyDescriptor(o,t);if(!i)throw new Error(`Property ${t} does not exist.`);return Object.defineProperty(r,t,{configurable:!0,get(){return i.get?i.get.apply(this,arguments):void 0},set(){i.set&&i.set.apply(this,arguments),n.apply(e,arguments)}}),()=>Object.defineProperty(r,t,i)}export{p as c,c as f,a as g,f as l,s as m};
