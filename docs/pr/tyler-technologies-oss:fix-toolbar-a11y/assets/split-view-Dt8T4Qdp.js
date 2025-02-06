import{C as R,l as S,j as N,B as H,k}from"./constants-BjnHqKgS.js";import{B as M,c as d}from"./base-adapter-CQdYccXX.js";import{i as _,t as L,y as T,b as B,c as b,N as I,A as W}from"./feature-detection-ONR9WHvu.js";import{a as Y}from"./index-nygIasyA.js";import{Q as G}from"./index-ByifSpfC.js";import{k as C,m as K,p as X,F as j}from"./focus-indicator-R2otSvsR.js";import{e as x}from"./event-utils-CyAMYupJ.js";import{I as F,a as V}from"./icon-B5S0VGIT.js";import"./index-BmocOEUj.js";import{S as q}from"./state-layer-B7GOb8iB.js";const c=`${R}split-view-panel`,Q={RESIZABLE:"resizable",SIZE:"size",MIN:"min",MAX:"max",OPEN:"open",ACCESSIBLE_LABEL:"accessible-label",DISABLED:"disabled",ALLOW_CLOSE:"allow-close",AUTO_CLOSE:"auto-close",AUTO_CLOSE_THRESHOLD:"auto-close-threshold",ORIENTATION:"orientation"},J={ROOT:"forge-split-view-panel",GRABBED:"forge-split-view-panel--grabbed",HANDLE:"forge-split-view-panel__handle",ICON:"forge-split-view-panel__icon",CONTENT:"forge-split-view-panel__content",CLOSED:"forge-split-view-panel--closed",CLOSING:"forge-split-view-panel--closing",OPENING:"forge-split-view-panel--opening",DISABLED:"forge-split-view-panel--disabled",OVERLAY:"forge-split-view-panel-overlay"},z={ROOT:"root",HANDLE:"handle",ICON:"icon",STATE_LAYER:"state-layer",CONTENT:"content"},ee={ROOT:`#${z.ROOT}`,HANDLE:`#${z.HANDLE}`,ICON:`#${z.ICON}`,STATE_LAYER:`#${z.STATE_LAYER}`,CONTENT:`#${z.CONTENT}`},te={WILL_RESIZE:`${c}-will-resize`,RESIZE_START:`${c}-resize-start`,RESIZE_END:`${c}-resize-end`,RESIZE:`${c}-resize`,DID_OPEN:`${c}-did-open`,DID_CLOSE:`${c}-did-close`,WILL_OPEN:`${c}-will-open`,WILL_CLOSE:`${c}-will-close`},ie={STATE_LAYER_ACTIVATION_WAIT:200},se={SIZE:"--forge-split-view-panel-size",CURSOR:"--forge-split-view-panel-cursor"},s={elementName:c,attributes:Q,classes:J,ids:z,selectors:ee,events:te,numbers:ie,customCssProperties:se};var A=(i=>(i[i.Under=1]="Under",i[i.Active=2]="Active",i[i.Above=3]="Above",i))(A||{});function re(){return{orientation:"horizontal",resizable:"off",arrowKeyHeld:!1,keyboardDelta:0,isAtMin:!1,isAtMax:!1,min:0}}function oe(i,e){const t=i.getContentSize(e.orientation);return{...e,currentSize:t,startSize:t,availableSpace:i.getAvailableSpace(e.orientation,e.resizable),siblingSize:i.getSiblingContentSize(),isAtMin:!1,isAtMax:!1}}function ae(i){return{...i,arrowKeyHeld:!1,keyboardDelta:0,isAtMin:!1,isAtMax:!1}}function ne(i,e,t){if(t.startPoint===void 0||t.startSize===void 0)return!1;const r=t.currentSize,o=t.orientation==="horizontal"?e.clientX:e.clientY;let a=t.startPoint-o;t.resizable==="start"&&(a*=-1);const n=t.startSize-a;t.currentSize=w(n,t),i.setContentSize(t.currentSize),O(i,t,"pointer"),i.setValuenow(P(t.currentSize,t));const h=n-t.currentSize+a;return $(i,h,t),r!==t.currentSize}function le(i,e,t){if(t.startSize===void 0)return!1;const r=t.currentSize;t.keyboardDelta+=e;const o=t.startSize+t.keyboardDelta;t.currentSize=w(o,t),i.setContentSize(t.currentSize),O(i,t,"keyboard"),i.setValuenow(P(t.currentSize,t));const a=o-t.currentSize+t.keyboardDelta*-1;return $(i,a,t),r!==t.currentSize}function he(i,e){return i.setContentSize(e.min),e.min}function pe(i,e){const t=i.getAvailableSpace(e.orientation,e.resizable),r=C(e.max,t);return i.setContentSize(r),r}function $(i,e,t){if(t.siblingSize!==void 0){const r=t.siblingSize+e;i.setSiblingContentSize(r)}}function w(i,e){return i=Math.max(i,e.min),i=C(i,e.max,e.availableSpace),i}function O(i,e,t){if(e.currentSize===void 0)return!1;if(e.currentSize<=e.min)return e.isAtMin||(i.animateStateLayer(t==="pointer"),t==="pointer"&&i.setBodyCursor(e.orientation,{resizable:e.resizable,boundary:"min"}),e.isAtMin=!0),!0;e.isAtMin&&(e.isAtMin=!1);const r=C(e.max,e.availableSpace);return e.currentSize>=r?(e.isAtMax||(i.animateStateLayer(t==="pointer"),t==="pointer"&&i.setBodyCursor(e.orientation,{resizable:e.resizable,boundary:"max"}),e.isAtMax=!0),!0):(e.isAtMax&&(e.isAtMax=!1),t==="pointer"&&i.setBodyCursor(e.orientation),!1)}function de(i,e,t){if(e<=t.min)return i.setHandleCursor(t.orientation,{resizable:t.resizable,boundary:"min"}),!0;const r=C(t.max,t.availableSpace);return e>=r?(i.setHandleCursor(t.orientation,{resizable:t.resizable,boundary:"max"}),!0):(i.setHandleCursor(t.orientation),!1)}function P(i,e){if(!e.availableSpace&&!e.max)return 100;const t=C(e.max,e.availableSpace);return K(i,e.min,t)}function D(i,e){if(i==="horizontal")switch(e==null?void 0:e.boundary){case"min":return e.resizable==="end"?"e-resize":"w-resize";case"max":return e.resizable==="end"?"w-resize":"e-resize";default:return"col-resize"}else switch(e==null?void 0:e.boundary){case"min":return e.resizable==="end"?"s-resize":"n-resize";case"max":return e.resizable==="end"?"n-resize":"s-resize";default:return"row-resize"}}function _e(i){return i==="horizontal"?"drag_vertical_variant":"drag_handle"}function E(i){const e=i.resizable;if(e==="off")return;let t=i;do t=e==="end"?t.nextElementSibling:t.previousElementSibling;while(t instanceof p&&!t.open);if(t instanceof p)return t}function ue(i){var a;if(!isNaN(+i))return{amount:+i,unit:"px"};const e=/(^\d*\.?\d*)\s*(px|%$)?/i,t=i.match(e),r=t!=null&&t[1]?+t[1]:-1,o=((a=t==null?void 0:t[2])==null?void 0:a.toLowerCase())??"";return{amount:r,unit:o}}function m(i,e){const t=ue(i);return t.unit==="%"?X(t.amount,e):t.amount}function ce(){const i=document.createElement("div");return i.classList.add(s.classes.OVERLAY),i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100vw",i.style.height="100vh",i.style.zIndex="9999",i}class be{constructor(e){this._adapter=e,this._size=200,this._min=0,this._accessibleLabel="Split view panel",this._open=!0,this._state=re(),this._isInitialized=!1,this._parentProperties={},this._pointerdownListener=t=>this._onPointerdown(t),this._pointerupListener=t=>this._onPointerup(t),this._pointermoveListener=t=>this._onPointermove(t),this._keydownListener=t=>this._onKeydown(t),this._keyupListener=t=>this._onKeyup(t)}get _orientation(){return this._state.orientation}set _orientation(e){this._state.orientation=e}get _resizable(){return this._state.resizable}set _resizable(e){this._state.resizable=e}get _pixelMin(){return this._state.min}set _pixelMin(e){this._state.min=e}get _pixelMax(){return this._state.max}set _pixelMax(e){this._state.max=e}get _appliedDisabled(){return this._disabled??this._parentProperties.disabled??!1}get _appliedAllowClose(){return this._allowClose??this._parentProperties.allowClose??!1}get _appliedAutoClose(){return this._autoClose??this._parentProperties.autoClose??!1}get _appliedAutoCloseThreshold(){return this._autoCloseThreshold??this._parentProperties.autoCloseThreshold??0}initialize(){this._adapter.initialize(),this._adapter.setPointerdownListener(this._pointerdownListener),this._adapter.setKeydownListener(this._keydownListener),this._getParentProperties(),this._applyResizable(),this._applyMin(),this._applyMax(),this._applySize(),this._applyAccessibleLabel(),this._applyOpen(),this._applyDisabled(),this._applyAllowClose(),this._applyAutoClose(),this._applyAutoCloseThreshold(),this._isInitialized=!0}destroy(){this._adapter.tryRemoveOverlay(),this._adapter.removePointerupListener(this._pointerupListener),this._adapter.removePointermoveListener(this._pointermoveListener)}_onPointerdown(e){this._appliedDisabled||!this._allowResize("pointer")||(e.preventDefault(),this._adapter.setPointermoveListener(this._pointermoveListener),this._adapter.setPointerupListener(this._pointerupListener),this._handlePointerdown(e))}_onPointerup(e){e.preventDefault(),this._adapter.removePointermoveListener(this._pointermoveListener),this._adapter.removePointerupListener(this._pointerupListener),this._handlePointerup()}_onPointermove(e){if(!this._appliedDisabled){if(e.preventDefault(),e.buttons===0){this._adapter.removePointermoveListener(this._pointermoveListener),this._adapter.removePointerupListener(this._pointerupListener),this._handlePointerup();return}this._handlePointermove(e)}}_onKeydown(e){this._appliedDisabled||(e.key==="Enter"?this._handleEnterKey(e):e.key==="Home"&&this._allowResize("keyboard")?this._handleHomeKey(e):e.key==="End"&&this._allowResize("keyboard")?this._handleEndKey(e):x(e)&&this._allowResize("keyboard")&&(this._adapter.setKeyupListener(this._keyupListener),this._handleArrowKey(e)))}_onKeyup(e){x(e)&&(this._adapter.removeKeyupListener(this._keyupListener),this._handleArrowKeyUp())}_handleEnterKey(e){this._appliedAllowClose&&(e.preventDefault(),this._tryOpenOrClose(!this._open,!1,!0))}_handleHomeKey(e){e.preventDefault();const t=he(this._adapter,this._state);this._adapter.emitHostEvent(s.events.RESIZE,t),this._tryAutoClose()}_handleEndKey(e){e.preventDefault();const t=pe(this._adapter,this._state);this._adapter.emitHostEvent(s.events.RESIZE,t)}_handleArrowKey(e){let t=0;if(this._orientation==="horizontal")switch(e.key){case"ArrowLeft":t=-1;break;case"ArrowRight":t=1;break;default:return}else switch(e.key){case"ArrowUp":t=-1;break;case"ArrowDown":t=1;break;default:return}e.preventDefault(),this._resizable==="start"&&(t*=-1),e.shiftKey&&(t*=10),this._tryHandleArrowKeyDown(),this._handleArrowKeyHeld(t)}_tryHandleArrowKeyDown(){this._state.arrowKeyHeld||this._startResize(),this._state.arrowKeyHeld=!0}_handleArrowKeyUp(){this._endResize()}_handleArrowKeyHeld(e){le(this._adapter,e,this._state)&&this._adapter.emitHostEvent(s.events.RESIZE,this._state.currentSize)}_handlePointerdown(e){this._adapter.setGrabbed(!0),this._adapter.focusHandle(),this._startResize(),this._state.startPoint=this._orientation==="horizontal"?e.clientX:e.clientY,O(this._adapter,this._state,"pointer")}_handlePointerup(){this._adapter.setGrabbed(!1),this._endResize()}_handlePointermove(e){ne(this._adapter,e,this._state)&&this._adapter.emitHostEvent(s.events.RESIZE,this._state.currentSize)}_allowResize(e){return this._adapter.emitHostEvent(s.events.WILL_RESIZE,{inputDeviceType:e},!0,!0)}_startResize(){this._state=oe(this._adapter,this._state),this._adapter.emitHostEvent(s.events.RESIZE_START,this._state.startSize)}_endResize(){this._adapter.emitHostEvent(s.events.RESIZE_END,this._state.currentSize),this._adapter.updateParent({accessibility:this._state.startSize!==this._state.currentSize,cursor:!0}),this._state=ae(this._state),this._tryAutoClose()}_tryOpenOrClose(e=!0,t=!1,r=!1){const o=e?s.events.WILL_OPEN:s.events.WILL_CLOSE,a={auto:t,userInitiated:r};this._adapter.emitHostEvent(o,a,!0,!0)&&(this._open=e,this._applyOpen(a))}_tryAutoClose(){const e=this._adapter.getContentSize(this._orientation);this._appliedAutoClose&&e<=this._appliedAutoCloseThreshold&&this._tryOpenOrClose(!1,!0,!1)}_getParentProperties(){const e=this._adapter.getParentProperty("disabled");this._parentProperties.disabled=e,this._applyParentDisabled();const t=this._adapter.getParentProperty("allowClose");this._parentProperties.allowClose=t;const r=this._adapter.getParentProperty("autoClose");this._parentProperties.autoClose=r,this._applyParentAutoClose();const o=this._adapter.getParentProperty("autoCloseThreshold");this._parentProperties.autoCloseThreshold=o,this._applyParentAutoCloseThreshold()}_applyOrientation(){this._adapter.setOrientation(this._orientation)}get resizable(){return this._resizable}set resizable(e){this._resizable!==e&&(this._resizable=e,this._applyResizable())}_applyResizable(){this._adapter.setHostAttribute(s.attributes.RESIZABLE,this._resizable),this._adapter.setResizable(this._resizable)}get size(){return this._size}set size(e){this._size.toString()!==e.toString()&&(this._size=e,this._applySize())}_applySize(){const e=this._adapter.getParentSize(this._orientation),t=m(this._size,e);this._adapter.setHostAttribute(s.attributes.SIZE,this._size.toString()),this._adapter.setContentSize(t),window.requestAnimationFrame(()=>{const r=this._adapter.getAvailableSpace(this._orientation,this._resizable),o=C(this._pixelMax,r),a=K(t,this._pixelMin,o);this._adapter.setValuenow(a),this._adapter.updateParent({cursor:!0})})}get min(){return this._min}set min(e){this._min.toString()!==e.toString()&&(this._min=e,this._applyMin())}_applyMin(){this._adapter.setHostAttribute(s.attributes.MIN,this._min.toString());const e=this._adapter.getParentSize(this._orientation);if(this._pixelMin=m(this._min,e),this._resizable==="off")return;const t=this._adapter.getContentSize(this._orientation);t<this._pixelMin&&this.setContentSize(t)}get max(){return this._max}set max(e){var t;((t=this._max)==null?void 0:t.toString())!==(e==null?void 0:e.toString())&&(this._max=e,this._applyMax())}_applyMax(){var r;if(this._adapter.toggleHostAttribute(s.attributes.MAX,this._max!==void 0,(r=this._max)==null?void 0:r.toString()),this._max===void 0){this._pixelMax=void 0;return}const e=this._adapter.getParentSize(this._orientation);if(this._pixelMax=m(this._max,e),this._resizable==="off")return;const t=this._adapter.getContentSize(this._orientation);t>this._pixelMax&&this.setContentSize(t)}get accessibleLabel(){return this._accessibleLabel}set accessibleLabel(e){this._accessibleLabel!==e&&(this._accessibleLabel=e,this._applyAccessibleLabel())}_applyAccessibleLabel(){this._adapter.setHostAttribute(s.attributes.ACCESSIBLE_LABEL,this._accessibleLabel),this._adapter.setAccessibleLabel(this._accessibleLabel)}get open(){return this._open}set open(e){if(this._open!==e){if(this._isInitialized){this._tryOpenOrClose(e,!1,!1);return}this._open=e;const t=this._isInitialized?{auto:!1,userInitiated:!1}:void 0;this._applyOpen(t)}}_applyOpen(e){this._adapter.setHostAttribute(s.attributes.OPEN,this._open.toString()),this._adapter.setOpen(this._open,this._isInitialized,e)}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._applyDisabled())}_applyDisabled(){this._adapter.toggleHostAttribute(s.attributes.DISABLED,this._disabled??!1),this._adapter.setDisabled(this._appliedDisabled)}_applyParentDisabled(){this._isInitialized&&!_(this._disabled)&&this._adapter.setDisabled(this._appliedDisabled)}get allowClose(){return this._allowClose}set allowClose(e){this._allowClose!==e&&(this._allowClose=e,this._applyAllowClose())}_applyAllowClose(){this._adapter.toggleHostAttribute(s.attributes.ALLOW_CLOSE,this._allowClose??!1)}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose!==e&&(this._autoClose=e,this._applyAutoClose())}_applyAutoClose(){this._adapter.toggleHostAttribute(s.attributes.AUTO_CLOSE,this._autoClose??!1),this._isInitialized&&this._tryAutoClose()}_applyParentAutoClose(){this._isInitialized&&!_(this._autoClose)&&this._tryAutoClose()}get autoCloseThreshold(){return this._autoCloseThreshold}set autoCloseThreshold(e){this._autoCloseThreshold!==e&&(this._autoCloseThreshold=e,this._applyAutoCloseThreshold())}_applyAutoCloseThreshold(){var e;this._adapter.toggleHostAttribute(s.attributes.AUTO_CLOSE_THRESHOLD,_(this._autoCloseThreshold),(e=this.autoCloseThreshold)==null?void 0:e.toString()),this._isInitialized&&this._tryAutoClose()}_applyParentAutoCloseThreshold(){this._isInitialized&&!_(this._autoCloseThreshold)&&this._tryAutoClose()}getContentSize(){return this._adapter.getContentSize(this._orientation)}getCollapsibleSize(){const e=this._adapter.getParentSize(this._orientation),t=m(this._min,e);return this._adapter.getContentSize(this._orientation)-t}setContentSize(e){if(this._resizable==="off")return;const t=w(e,this._state);this._adapter.setContentSize(t),this._isInitialized&&this._adapter.emitHostEvent(s.events.RESIZE,t)}update(e){if(e.orientation&&(this._orientation=e.orientation,this._applyOrientation()),e.properties&&(_(e.properties.disabled)&&this._parentProperties.disabled!==e.properties.disabled&&(this._parentProperties.disabled=e.properties.disabled,this._applyDisabled()),_(e.properties.allowClose)&&(this._parentProperties.allowClose=e.properties.allowClose),_(e.properties.autoClose)&&this._parentProperties.autoClose!==e.properties.autoClose&&(this._parentProperties.autoClose=e.properties.autoClose,_(this._autoClose)||this._applyAutoClose()),_(e.properties.autoCloseThreshold)&&this._parentProperties.autoCloseThreshold!==e.properties.autoCloseThreshold&&(this._parentProperties.autoCloseThreshold=e.properties.autoCloseThreshold,_(this._autoCloseThreshold)||this._applyAutoCloseThreshold())),e.size&&this.open){const o=this._adapter.getParentSize(this._orientation);this._pixelMin=m(this._min,o),this._pixelMax=_(this._max)?m(this._max,o):void 0,this.setContentSize(this._adapter.getContentSize(this._orientation))}if(this._resizable==="off")return;const t=this._adapter.getContentSize(this._orientation),r=this._adapter.getAvailableSpace(this._orientation,this._resizable);if(e.accessibility&&this.open){const o=P(t,{...this._state,availableSpace:r});this._adapter.setValuenow(o)}e.cursor&&de(this._adapter,t,{...this._state,availableSpace:r})}}const fe=`${R}split-view`,me={ORIENTATION:"orientation",DISABLED:"disabled",ALLOW_CLOSE:"allow-close",AUTO_CLOSE:"auto-close",AUTO_CLOSE_THRESHOLD:"auto-close-threshold"},Se={ROOT:"forge-split-view"},U={ROOT:"root"},ze={ROOT:`#${U.ROOT}`,PANEL:s.elementName},Ce={RESIZE_THROTTLE_THRESHOLD:200},ge={ANIMATING_LAYER:"--forge-split-view-animating-layer"},l={elementName:fe,attributes:me,classes:Se,ids:U,selectors:ze,numbers:Ce,customCssProperties:ge};class ye extends M{constructor(e){super(e),this._root=S(e,s.selectors.ROOT),this._handle=S(e,s.selectors.HANDLE),this._icon=S(e,s.selectors.ICON),this._stateLayer=S(e,s.selectors.STATE_LAYER),this._content=S(e,s.selectors.CONTENT)}initialize(){const e=this._component.parentElement;(e==null?void 0:e.tagName.toLowerCase())===l.elementName&&(this._parent=e)}tryRemoveOverlay(){var e;(e=this._overlay)==null||e.remove(),this._overlay=void 0}setPointerdownListener(e){this._handle.addEventListener("pointerdown",e)}setPointerupListener(e){document.addEventListener("pointerup",e)}removePointerupListener(e){document.removeEventListener("pointerup",e)}setPointermoveListener(e){document.addEventListener("pointermove",e)}removePointermoveListener(e){document.removeEventListener("pointermove",e)}setKeydownListener(e){this._handle.addEventListener("keydown",e)}setKeyupListener(e){this._handle.addEventListener("keyup",e)}removeKeyupListener(e){this._handle.removeEventListener("keyup",e)}getParentProperty(e){var t;return(t=this._parent)==null?void 0:t[e]}setAccessibleLabel(e){this._handle.setAttribute("aria-label",e)}setDisabled(e){this._root.classList.toggle(s.classes.DISABLED,e),this._handle&&(this._handle.setAttribute("tabindex",e?"-1":"0"),L(this._handle,e,"aria-disabled","true"))}setResizable(e){this._root.setAttribute(s.attributes.RESIZABLE,e.toString()),L(this._handle,e!=="off","aria-valuemin","0"),L(this._handle,e!=="off","aria-valuemax","100"),e!=="off"&&(this._handle.remove(),e==="end"?this._root.append(this._handle):this._root.prepend(this._handle))}setOrientation(e){this._root.setAttribute(s.attributes.ORIENTATION,e),this._handle.setAttribute("aria-orientation",e==="horizontal"?"vertical":"horizontal"),this._icon.setAttribute("name",_e(e))}setOpen(e,t=!0,r){var a,n;const o=()=>{var h,y;e||this._root.classList.add(s.classes.CLOSED),r&&this.emitHostEvent(e?s.events.DID_OPEN:s.events.DID_CLOSE,r),(h=this._parent)==null||h.unlayerSlottedPanels(),(y=this._parent)==null||y.update({accessibility:!0,cursor:!0})};if(e&&this._root.classList.contains(s.classes.CLOSED)){if(this._root.classList.remove(s.classes.CLOSED),!t){o();return}(a=this._parent)==null||a.layerSlottedPanels(this._component),T(this._root,s.classes.OPENING,!0).then(()=>{o()})}else if(!e&&!this._root.classList.contains(s.classes.CLOSED)){if(!t){o();return}(n=this._parent)==null||n.layerSlottedPanels(this._component),T(this._root,s.classes.CLOSING,!0).then(()=>{o()})}}setGrabbed(e){var t;this._root.classList.toggle(s.classes.GRABBED,e),this._handle.setAttribute("aria-grabbed",e.toString()),e?(this._overlay||(this._overlay=ce()),document.body.append(this._overlay)):(t=this._overlay)==null||t.remove()}setHandleCursor(e,t){e?this._root.style.setProperty(s.customCssProperties.CURSOR,D(e,t)):this._root.style.removeProperty(s.customCssProperties.CURSOR)}setBodyCursor(e,t){var r;(r=this._overlay)==null||r.style.setProperty("cursor",D(e,t))}getContentSize(e){return e==="horizontal"?this._content.clientWidth:this._content.clientHeight}setContentSize(e){this._component.style.setProperty(s.customCssProperties.SIZE,`${e}px`)}setValuenow(e){this._handle.setAttribute("aria-valuenow",e.toFixed(2))}focusHandle(){this._handle.focus()}getAvailableSpace(e,t){if(t==="off")return-1;const r=E(this._component);return r?r.getCollapsibleSize()+this.getContentSize(e):this.getParentSize(e)}getSiblingContentSize(){const e=E(this._component);return(e==null?void 0:e.getContentSize())??0}setSiblingContentSize(e){const t=E(this._component);t==null||t.setContentSize(e)}animateStateLayer(e){e?window.setTimeout(()=>{this._stateLayer.playAnimation()},s.numbers.STATE_LAYER_ACTIVATION_WAIT):this._stateLayer.playAnimation()}getParentSize(e){var r,o;return(e==="horizontal"?(r=this._parent)==null?void 0:r.clientWidth:(o=this._parent)==null?void 0:o.clientHeight)??0}updateParent(e){var t;(t=this._parent)==null||t.update(e)}}const ve=`<template>
  <div class="forge-split-view-panel" id="root" part="root">
    <div class="forge-split-view-panel__handle" id="handle" part="handle" role="separator" aria-controls="content" aria-grabbed="false" tabindex="0">
      <forge-icon class="forge-split-view-panel__icon" id="icon" part="icon"></forge-icon>
      <forge-state-layer target="handle" id="state-layer" exportparts="surface:state-layer"></forge-state-layer>
      <forge-focus-indicator inward target="handle" part="focus-indicator"></forge-focus-indicator>
    </div>
    <div class="forge-split-view-panel__content" id="content" part="content" role="group">
      <slot></slot>
    </div>
  </div>
</template>
`,Ae=".forge-split-view-panel{display:flex;width:100%;height:100%;overflow:hidden}.forge-split-view-panel__handle{color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));background-color:var(--forge-theme-outline, #e0e0e0);position:relative;display:flex;flex-shrink:0;justify-content:center;align-items:center;outline:none}.forge-split-view-panel__content{flex:1;overflow:hidden}.forge-split-view-panel--closed{display:none}.forge-split-view-panel--disabled #handle{pointer-events:none}.forge-split-view-panel--disabled .forge-split-view-panel__icon{display:none}.forge-split-view-panel[orientation=horizontal]{min-width:var(--forge-split-view-handle-width, 8px);width:calc(var(--forge-split-view-panel-size, unset) + var(--forge-split-view-handle-width, 8px));flex-direction:row}.forge-split-view-panel[orientation=horizontal] .forge-split-view-panel__handle{width:var(--forge-split-view-handle-width, 8px);cursor:var(--forge-split-view-panel-cursor)}.forge-split-view-panel[orientation=horizontal].forge-split-view-panel--closing[resizable=end]{position:absolute;top:0;left:0;animation-name:u6g3lzz;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1))}@keyframes u6g3lzz{0%{transform:none}to{transform:translate(-100%)}}.forge-split-view-panel[orientation=horizontal].forge-split-view-panel--closing[resizable=start]{position:absolute;top:0;right:0;animation-name:u6g3m0u;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1))}@keyframes u6g3m0u{0%{transform:none}to{transform:translate(100%)}}.forge-split-view-panel[orientation=horizontal].forge-split-view-panel--opening[resizable=end]{position:absolute;top:0;left:0;animation-name:u6g3m1c;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1));animation-direction:reverse}@keyframes u6g3m1c{0%{transform:none}to{transform:translate(-100%)}}.forge-split-view-panel[orientation=horizontal].forge-split-view-panel--opening[resizable=start]{position:absolute;top:0;right:0;animation-name:u6g3m2c;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1));animation-direction:reverse}@keyframes u6g3m2c{0%{transform:none}to{transform:translate(100%)}}.forge-split-view-panel[orientation=vertical]{min-height:var(--forge-split-view-handle-width, 8px);height:calc(var(--forge-split-view-panel-size, unset) + var(--forge-split-view-handle-width, 8px));flex-direction:column}.forge-split-view-panel[orientation=vertical] .forge-split-view-panel__handle{height:var(--forge-split-view-handle-width, 8px);cursor:var(--forge-split-view-panel-cursor)}.forge-split-view-panel[orientation=vertical].forge-split-view-panel--closing[resizable=end]{position:absolute;top:0;left:0;animation-name:u6g3m2m;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1))}@keyframes u6g3m2m{0%{transform:none}to{transform:translateY(-100%)}}.forge-split-view-panel[orientation=vertical].forge-split-view-panel--closing[resizable=start]{position:absolute;bottom:0;left:0;animation-name:u6g3m2w;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1))}@keyframes u6g3m2w{0%{transform:none}to{transform:translateY(100%)}}.forge-split-view-panel[orientation=vertical].forge-split-view-panel--opening[resizable=end]{position:absolute;top:0;left:0;animation-name:u6g3m2z;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1));animation-direction:reverse}@keyframes u6g3m2z{0%{transform:none}to{transform:translateY(-100%)}}.forge-split-view-panel[orientation=vertical].forge-split-view-panel--opening[resizable=start]{position:absolute;bottom:0;left:0;animation-name:u6g3m3w;animation-duration:var(--forge-animation-duration-medium2, .3s);animation-timing-function:var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1));animation-direction:reverse}@keyframes u6g3m3w{0%{transform:none}to{transform:translateY(100%)}}:host{z-index:var(--forge-split-view-animating-layer)!important;display:block;position:relative;height:100%;width:100%;flex:0}:host([hidden]){display:none}:host(:not([resizable=start],[resizable=end])){flex:1}:host(:not([resizable=start],[resizable=end])) .forge-split-view-panel{width:100%;height:100%;min-width:0;min-height:0}:host(:not([resizable=start],[resizable=end])) .forge-split-view-panel__handle{display:none}forge-focus-indicator{--forge-focus-indicator-active-width: 2px}";var Le=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,u=(i,e,t,r)=>{for(var o=r>1?void 0:r?Ee(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&Le(e,t,o),o};let p=class extends H{static get observedAttributes(){return[s.attributes.RESIZABLE,s.attributes.SIZE,s.attributes.MIN,s.attributes.MAX,s.attributes.ACCESSIBLE_LABEL,s.attributes.OPEN,s.attributes.DISABLED,s.attributes.ALLOW_CLOSE,s.attributes.AUTO_CLOSE,s.attributes.AUTO_CLOSE_THRESHOLD]}constructor(){super(),F.define([Y,G]),k(this,ve,Ae),this._core=new be(new ye(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(i,e,t){switch(i){case s.attributes.RESIZABLE:this.resizable=t;break;case s.attributes.SIZE:this.size=t;break;case s.attributes.MIN:this.min=t;break;case s.attributes.MAX:t?this.max=t:this.max=void 0;break;case s.attributes.ACCESSIBLE_LABEL:this.accessibleLabel=t;break;case s.attributes.OPEN:this.open=b(t);break;case s.attributes.DISABLED:this.hasAttribute(i)?this.disabled=b(t):this.disabled=void 0;break;case s.attributes.ALLOW_CLOSE:this.hasAttribute(i)?this.allowClose=b(t):this.allowClose=void 0;break;case s.attributes.AUTO_CLOSE:this.hasAttribute(i)?this.autoClose=b(t):this.autoClose=void 0;break;case s.attributes.AUTO_CLOSE_THRESHOLD:t?this.autoCloseThreshold=B(t):this.autoCloseThreshold=void 0;break}}getContentSize(){return this._core.getContentSize()}getCollapsibleSize(){return this._core.getCollapsibleSize()}setContentSize(i){this._core.setContentSize(i)}update(i){this._core.update(i)}};u([d()],p.prototype,"resizable",2);u([d()],p.prototype,"size",2);u([d()],p.prototype,"min",2);u([d()],p.prototype,"max",2);u([d()],p.prototype,"accessibleLabel",2);u([d()],p.prototype,"open",2);u([d()],p.prototype,"disabled",2);u([d()],p.prototype,"allowClose",2);u([d()],p.prototype,"autoClose",2);u([d()],p.prototype,"autoCloseThreshold",2);p=u([N({name:s.elementName,dependencies:[V,q,j]})],p);class we extends M{constructor(e){super(e),this._root=S(e,l.selectors.ROOT)}registerSlotListener(e){this._root.addEventListener("slotchange",e)}registerDidOpenListener(e){this._root.addEventListener(s.events.DID_OPEN,e)}registerDidCloseListener(e){this._root.addEventListener(s.events.DID_CLOSE,e)}observeResize(e){I.observe(this._root,e)}unobserveResize(){I.unobserve(this._root)}getSlottedPanels(){const e=this._component.querySelectorAll(l.selectors.PANEL);return Array.from(e).filter(o=>o.parentElement===this._component)}refitSlottedPanels(e){const t=e==="horizontal"?this._root.clientWidth:this._root.clientHeight,r=this.getSlottedPanels(),o=r.map(n=>{var v;const h=(v=n.shadowRoot)==null?void 0:v.querySelector(s.selectors.ROOT);return(e==="horizontal"?h==null?void 0:h.clientWidth:h==null?void 0:h.clientHeight)??0}).reduce((n,h)=>n+h,0);if(o<=t)return;let a=o-t;r.slice().reverse().forEach(n=>{if(a<=0)return;const h=n.getContentSize(),y=n.getCollapsibleSize(),v=Math.min(a,y),Z=h-v;n.setContentSize(Z),a-=v})}}class Oe{constructor(e){this._adapter=e,this._orientation="horizontal",this._disabled=!1,this._allowClose=!1,this._autoClose=!1,this._autoCloseThreshold=0,this._isInitialized=!1,this._slotListener=t=>this._onSlotChange(t),this._didOpenListener=()=>this._onDidOpen(),this._didCloseListener=()=>this._onDidClose(),this._resizeObserverCallback=W(t=>this._onResize(t),l.numbers.RESIZE_THROTTLE_THRESHOLD)}initialize(){this._adapter.registerSlotListener(this._slotListener),this._adapter.registerDidOpenListener(this._didOpenListener),this._adapter.registerDidCloseListener(this._didCloseListener),this._adapter.observeResize(this._resizeObserverCallback),this._applyOrientation(),this._isInitialized=!0}destroy(){this._adapter.unobserveResize()}_onSlotChange(e){this._layoutSlottedPanels(),this.update({accessibility:!0,cursor:!0,orientation:this._orientation})}_onDidOpen(){this._adapter.refitSlottedPanels(this._orientation),this.update({accessibility:!0,cursor:!0,size:!0})}_onDidClose(){this._adapter.refitSlottedPanels(this._orientation),this.update({accessibility:!0,cursor:!0,size:!0})}_onResize(e){this.update({accessibility:!0,cursor:!0,size:!0})}_layoutSlottedPanels(){const e=this._adapter.getSlottedPanels();e.length<2||e.some(t=>t.resizable!=="off")||e.slice(1).forEach(t=>t.resizable="start")}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._applyOrientation())}_applyOrientation(){this._adapter.setHostAttribute(l.attributes.ORIENTATION,this._orientation),this.update({orientation:this._orientation}),this._isInitialized&&this._adapter.refitSlottedPanels(this._orientation),this.update({accessibility:!0,cursor:!0})}get disabled(){return this._disabled}set disabled(e){this._disabled!==e&&(this._disabled=e,this._applyDisabled())}_applyDisabled(){this._adapter.toggleHostAttribute(l.attributes.DISABLED,this._disabled),this.update({properties:{disabled:this._disabled}})}get allowClose(){return this._allowClose}set allowClose(e){this._allowClose!==e&&(this._allowClose=e,this._applyAllowClose())}_applyAllowClose(){this._adapter.toggleHostAttribute(l.attributes.ALLOW_CLOSE,this._allowClose),this.update({properties:{allowClose:this._allowClose}})}get autoClose(){return this._autoClose}set autoClose(e){this._autoClose!==e&&(this._autoClose=e,this._applyAutoClose())}_applyAutoClose(){this._adapter.toggleHostAttribute(l.attributes.AUTO_CLOSE,this._autoClose),this.update({properties:{autoClose:this._autoClose}})}get autoCloseThreshold(){return this._autoCloseThreshold}set autoCloseThreshold(e){this._autoCloseThreshold!==e&&(this._autoCloseThreshold=e,this._applyAutoCloseThreshold())}_applyAutoCloseThreshold(){this._adapter.setHostAttribute(l.attributes.AUTO_CLOSE_THRESHOLD,this._autoCloseThreshold.toString()),this.update({properties:{autoCloseThreshold:this._autoCloseThreshold}})}layerSlottedPanels(e){const t=this._adapter.getSlottedPanels(),r=e.resizable==="start"?1:-1;let o=e.resizable==="start"?A.Under:A.Above;t.forEach(a=>{(a===e||o===A.Active)&&(o+=r),a.style.setProperty(l.customCssProperties.ANIMATING_LAYER,o.toString())})}unlayerSlottedPanels(){this._adapter.getSlottedPanels().forEach(t=>{t.style.removeProperty(l.customCssProperties.ANIMATING_LAYER)})}update(e){this._adapter.getSlottedPanels().forEach(r=>{r.update(e)})}refitSlottedPanels(){this._adapter.refitSlottedPanels(this._orientation)}}const Pe=`<template>
  <div class="forge-split-view" id="root" part="root">
    <slot></slot>
  </div>
</template>
`,Te=".forge-split-view{display:flex;width:100%;height:100%}:host{--forge-split-view-handle-width: 8px;display:block;height:100%;width:100%;overflow:hidden}:host([hidden]){display:none}:host([orientation=horizontal]) .forge-split-view{flex-direction:row}:host([orientation=vertical]) .forge-split-view{flex-direction:column}";var Ie=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,g=(i,e,t,r)=>{for(var o=r>1?void 0:r?xe(e,t):e,a=i.length-1,n;a>=0;a--)(n=i[a])&&(o=(r?n(e,t,o):n(o))||o);return r&&o&&Ie(e,t,o),o};let f=class extends H{static get observedAttributes(){return[l.attributes.ORIENTATION,l.attributes.DISABLED,l.attributes.ALLOW_CLOSE,l.attributes.AUTO_CLOSE,l.attributes.AUTO_CLOSE_THRESHOLD]}constructor(){super(),k(this,Pe,Te),this._core=new Oe(new we(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(i,e,t){switch(i){case l.attributes.ORIENTATION:this.orientation=t;break;case l.attributes.DISABLED:this.disabled=b(t);break;case l.attributes.ALLOW_CLOSE:this.allowClose=b(t);break;case l.attributes.AUTO_CLOSE:this.autoClose=b(t);break;case l.attributes.AUTO_CLOSE_THRESHOLD:this.autoCloseThreshold=B(t);break}}layerSlottedPanels(i){this._core.layerSlottedPanels(i)}unlayerSlottedPanels(){this._core.unlayerSlottedPanels()}update(i){this._core.update(i)}refit(){this._core.refitSlottedPanels()}};g([d()],f.prototype,"orientation",2);g([d()],f.prototype,"disabled",2);g([d()],f.prototype,"allowClose",2);g([d()],f.prototype,"autoClose",2);g([d()],f.prototype,"autoCloseThreshold",2);f=g([N({name:l.elementName,dependencies:[p]})],f);
