import{t as d}from"./utils-CYJ0zQHl.js";class h{constructor(){this.promise=new Promise((s,e)=>{this._resolveFn=s,this._rejectFn=e})}resolve(s){this._resolveFn(s)}reject(s){this._rejectFn(s)}}const m=Symbol("tryDismiss"),n=Symbol("forgeDismissibleStack");class o{constructor(){this._dismissibleElements=new Set,this._elementsRequestingDismiss=new Map}get dismissing(){var s;return((s=this._deferredDismiss)==null?void 0:s.promise)??Promise.resolve()}static get instance(){return window[n]||(window[n]=new o),window[n]}async dismiss(s,e){const i=Array.from(this._dismissibleElements),t=i.slice(i.indexOf(s)).reverse();for(const r of t)if(!r[m](e))break}async requestDismiss(s,e){var t;if(this._deferredDismiss||(this._deferredDismiss=new h),this._elementsRequestingDismiss.set(s,e),await d(),!this.isRequestingLightDismiss(s))return;const i=Array.from(this._elementsRequestingDismiss).reverse();this._elementsRequestingDismiss.clear();try{for(const[r,l]of i)if(!r[m](l))break}finally{(t=this._deferredDismiss)==null||t.resolve(),this._deferredDismiss=void 0}}add(s){this._dismissibleElements.add(s)}remove(s){this._dismissibleElements.delete(s),this._elementsRequestingDismiss.delete(s)}has(s){return this._dismissibleElements.has(s)}isRequestingLightDismiss(s){return this._elementsRequestingDismiss.has(s)}isMostRecent(s){const e=Array.from(this._dismissibleElements);return e[e.length-1]===s}}export{o as D,m as t};
