import{l as E,B as m}from"./constants-BjnHqKgS.js";import{d as C,f as v,i as b,c as O}from"./feature-detection-ONR9WHvu.js";import{p as u}from"./event-utils-CyAMYupJ.js";import{B as f,c}from"./base-adapter-CQdYccXX.js";import{f as l}from"./focus-indicator-I_IrwQSK.js";const p={OPEN:"open",DIRECTION:"direction"},w={...p},_={DRAWER:"forge-drawer",LEFT:"left",RIGHT:"right",CLOSING:"closing",CLOSED:"closed",NO_TRANSITION:"no-transition"},D={DRAWER:`.${_.DRAWER}`},L={AFTER_OPEN:"forge-drawer-after-open",AFTER_CLOSE:"forge-drawer-after-close"},t={observedAttributes:p,attributes:w,classes:_,selectors:D,events:L};class g extends f{constructor(e){super(e),this._component=e,this._drawerElement=E(this._component,t.selectors.DRAWER)}proxyScrollEvent(){this.tryUnproxyScrollEvent(),this._unproxyScrollEventCb=u(this._component.shadowRoot,this._component)}tryUnproxyScrollEvent(){this._unproxyScrollEventCb&&this._unproxyScrollEventCb()}setDirection(e){switch(e){case"left":this._drawerElement.classList.remove(t.classes.RIGHT),this._drawerElement.classList.add(t.classes.LEFT);break;case"right":this._drawerElement.classList.remove(t.classes.LEFT),this._drawerElement.classList.add(t.classes.RIGHT);break}}removeDrawerClass(e){C(e,this._drawerElement)}setDrawerClass(e){v(e,this._drawerElement)}listenTransitionComplete(e){this._activeTransitionListener&&this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=i=>{i.propertyName==="transform"&&(this._activeTransitionListener&&(this._drawerElement.removeEventListener("transitionend",this._activeTransitionListener),this._activeTransitionListener=void 0),e())},this._drawerElement.addEventListener("transitionend",this._activeTransitionListener)}}class I{constructor(e){this._adapter=e,this._open=!0,this._direction="left",this._openAnimationListener=()=>this._onOpenComplete(),this._closeAnimationListener=()=>this._onCloseComplete()}initialize(){this._open?this._setOpened():this._setClosed(),this._applyDirection(),this._adapter.proxyScrollEvent()}destroy(){this._adapter.tryUnproxyScrollEvent()}_applyDirection(){this._adapter.setDirection(this._direction),this._adapter.setHostAttribute(t.attributes.DIRECTION,b(this._direction)?this._direction.toString():"")}_onOpenComplete(){if(!this._open)return;this._setOpened();const e=new CustomEvent(t.events.AFTER_OPEN,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_onCloseComplete(){if(this._open)return;this._setClosed();const e=new CustomEvent(t.events.AFTER_CLOSE,{bubbles:!0,composed:!0});this._adapter.dispatchHostEvent(e)}_setOpened(){this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING]),this._adapter.setHostAttribute(t.attributes.OPEN)}_setClosed(){this._adapter.removeDrawerClass([t.classes.CLOSING,t.classes.NO_TRANSITION]),this._adapter.setDrawerClass(t.classes.CLOSED),this._adapter.removeHostAttribute(t.attributes.OPEN)}_applyOpen(){this._open?(this._triggerDrawerOpen(),this._adapter.setHostAttribute(t.attributes.OPEN)):(this._triggerDrawerClose(),this._adapter.removeHostAttribute(t.attributes.OPEN))}async _triggerDrawerOpen(){this._adapter.listenTransitionComplete(this._openAnimationListener),await l(),this._adapter.removeDrawerClass([t.classes.CLOSED,t.classes.CLOSING])}async _triggerDrawerClose(){this._adapter.listenTransitionComplete(this._closeAnimationListener),await l(),this._adapter.setDrawerClass(t.classes.CLOSING)}get open(){return this._open}set open(e){e=!!e,this._open!==e&&(this._open=e,this._adapter.isConnected&&this._applyOpen())}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._adapter.isConnected&&this._applyDirection())}}var A=Object.defineProperty,d=(r,e,i,a)=>{for(var s=void 0,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=o(e,i,s)||s);return s&&A(e,i,s),s};class h extends m{static get observedAttributes(){return Object.values(t.observedAttributes)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(e,i,a){switch(e){case t.observedAttributes.OPEN:this.open=O(a);break;case t.observedAttributes.DIRECTION:this.direction=a;break}}}d([c()],h.prototype,"open");d([c()],h.prototype,"direction");export{h as B,I as a,g as b};
