import{C as T,l as m,k as S,j as A,B as C}from"./constants-9n5_0r7k.js";import{B as k,c as d}from"./base-adapter-B6TJxM93.js";import{y as x,u as M,B as P,o as w,c as _,b as O}from"./feature-detection-DRCh51Sa.js";import{B as f,a as D}from"./backdrop-CpAR1sZH.js";import{W as I,a as N}from"./with-default-aria-B0dk5gj8.js";import{D as v,t as R}from"./dismissible-stack-Be9vfpxH.js";const c=`${T}dialog`,u={OPEN:"open",VISIBLE:"visible",MODE:"mode",TYPE:"type",ANIMATION_TYPE:"animation-type",PRESET:"preset",PERSISTENT:"persistent",FULLSCREEN:"fullscreen",FULLSCREEN_THRESHOLD:"fullscreen-threshold",TRIGGER:"trigger",MOVEABLE:"moveable",MOVE_TARGET:"move-target",POSITION_STRATEGY:"position-strategy",PLACEMENT:"placement",SIZE_STRATEGY:"size-strategy",LABEL:"label",DESCRIPTION:"description"},z={...u,ARIA_LABEL_ID:"forge-dialog-label",ARIA_DESCIPTION_ID:"forge-dialog-description"},B={MOVED:"moved",MOVING:"moving"},H={DIALOG:".forge-dialog",SURFACE:".surface",MOVE_HANDLE:".move-handle",AUTOFOCUS:":is([autofocus],[forge-dialog-focus])"},F={BEFORE_CLOSE:`${c}-before-close`,OPEN:`${c}-open`,CLOSE:`${c}-close`,MOVE_START:`${c}-move-start`,MOVE:`${c}-move`,MOVE_END:`${c}-move-end`,FULLSCREEN_CHANGE:`${c}-fullscreen-change`},G={MODE:"modal",TYPE:"dialog",ANIMATION_TYPE:"zoom",PRESET:"dialog",SIZE_STRATEGY:"content",POSITION_STRATEGY:"viewport",PLACEMENT:"center",FULLSCREEN_THRESHOLD:599},t={elementName:c,observedAttributes:u,classes:B,attributes:z,selectors:H,events:F,defaults:G},b=Symbol("hideBackdrop"),E=Symbol("showBackdrop"),p=Symbol("dialogStack");class Y extends k{get moveHandleElement(){return this._moveHandleElement}get surfaceElement(){return this._surfaceElement}constructor(e){super(e),this._dialogElement=m(e,t.selectors.DIALOG),this._surfaceElement=m(e,t.selectors.SURFACE),this._moveHandleElement=m(e,t.selectors.MOVE_HANDLE),this._backdropElement=m(e,f.elementName),this._backdropElement.shadowRoot||window.customElements.upgrade(this._backdropElement)}show(){if(this._dialogElement.open)return;this._component.type!=="dialog"&&this._dialogElement.setAttribute("role",this._component.type);const e=this._component.mode==="modal"||this._component.mode==="inline-modal";e||this._dialogElement.setAttribute("aria-modal","false"),e&&(this._component.animationType==="none"?this._backdropElement.show():this._backdropElement.fadeIn()),this._component.mode==="modal"?this._dialogElement.showModal():this._dialogElement.show(),e&&this._hideBackdrops(),r[p].add(this._component)}_hideBackdrops(){r[p].forEach(e=>e[b]())}_showBackdropMostRecent(){var e;(e=Array.from(r[p]).filter(i=>i.mode==="modal"||i.mode==="inline-modal").at(-1))==null||e[E]()}async hide(){const e=()=>{this._surfaceElement.classList.remove(f.classes.EXITING),this._dialogElement.close(),r[p].delete(this._component),this._showBackdropMostRecent()};if(this._component.animationType==="none")return Promise.resolve(e());this._backdropElement.fadeOut(),await x(this._surfaceElement,f.classes.EXITING),e()}addDialogFormSubmitListener(e){this._dialogElement.addEventListener("submit",e)}removeDialogFormSubmitListener(e){this._dialogElement.removeEventListener("submit",e)}addDialogCancelListener(e){this._dialogElement.addEventListener("cancel",e)}removeDialogCancelListener(e){this._dialogElement.removeEventListener("cancel",e)}addBackdropDismissListener(e){this._backdropElement.addEventListener("click",e)}removeBackdropDismissListener(e){this._backdropElement.removeEventListener("click",e)}tryAutofocus(){window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{if(!this._component.matches(":focus-within")&&(this._dialogElement.focus(),this._component.open&&this._dialogElement.isConnected)){const i=this._component.querySelector(t.selectors.AUTOFOCUS);i==null||i.focus()}})})}tryLocateTriggerElement(e){if(!e){this.triggerElement=null;return}const i=this._component.getRootNode();this.triggerElement=i.querySelector(`#${e}`)}addTriggerInteractionListener(e){var i;(i=this.triggerElement)==null||i.addEventListener("click",e)}removeTriggerInteractionListener(e){var i;(i=this.triggerElement)==null||i.removeEventListener("click",e)}hideBackdrop(){this._backdropElement.fadeOut()}showBackdrop(){this._backdropElement.fadeIn()}addSurfaceClass(e){this._surfaceElement.classList.add(e)}removeSurfaceClass(e){this._surfaceElement.classList.remove(e)}addFullscreenListener(e,i){this._fullscreenMediaQuery=window.matchMedia(`(max-width: ${e}px)`),this._fullscreenMediaQuery.addEventListener("change",o=>i(o.matches)),!this._component.fullscreen&&this._fullscreenMediaQuery.matches&&i(!0)}removeFullscreenListener(e){var i;(i=this._fullscreenMediaQuery)==null||i.removeEventListener("change",o=>e(o.matches)),this._fullscreenMediaQuery=void 0}setAccessibleLabel(e){var i;e!=null&&e.trim()?(this._accessibleLabelElement=this._createVisuallyHiddenElement(t.attributes.ARIA_LABEL_ID,e),this._dialogElement.appendChild(this._accessibleLabelElement),this._dialogElement.setAttribute("aria-labelledby",this._accessibleLabelElement.id)):(this._dialogElement.removeAttribute("aria-labelledby"),(i=this._accessibleLabelElement)==null||i.remove())}setAccessibleDescription(e){var i;e!=null&&e.trim()?(this._accessibleDescriptionElement=this._createVisuallyHiddenElement(t.attributes.ARIA_DESCIPTION_ID,e),this._dialogElement.appendChild(this._accessibleDescriptionElement),this._dialogElement.setAttribute("aria-describedby",this._accessibleDescriptionElement.id)):(this._dialogElement.removeAttribute("aria-describedby"),(i=this._accessibleDescriptionElement)==null||i.remove())}_createVisuallyHiddenElement(e,i){const o=document.createElement("div");return o.classList.add("visually-hidden"),o.id=e,o.textContent=i.trim(),o}}function U(h=class{}){class e extends h{constructor(){super(...arguments),this._isMoving=!1,this._activeElement=void 0,this._movePointerDownListener=this._onMoveTargetPointerDown.bind(this),this._movePointerMoveListener=this._onMoveTargetPointerMove.bind(this),this._movePointerUpListener=this._onMoveTargetPointerUp.bind(this)}stopMoveListener(){this._updatePosition(null,null),document.removeEventListener("pointermove",this._movePointerMoveListener),document.removeEventListener("pointerup",this._movePointerUpListener),this._isMoving=!1,this._moveContext=void 0,this._lastPosition=void 0,this._activeElement=void 0}_onMoveTargetPointerDown(o){o.preventDefault(),this._captureActiveElement();const a=this._getMoveableBounds();this._moveContext={top:o.pageY-a.top,left:o.pageX-a.left,height:a.height,width:a.width},document.addEventListener("pointermove",this._movePointerMoveListener),document.addEventListener("pointerup",this._movePointerUpListener)}_onMoveTargetPointerMove(o){o.preventDefault();const a=this._calculateOffsetPosition(o.pageX,o.pageY,this._moveContext);if(!this._isMoving&&(this._isMoving=!0,this._onMoveStart()))return;const s=this._clampPosition(a,this._moveContext);if((!this._lastPosition||s.x!==this._lastPosition.x||s.y!==this._lastPosition.y)&&!this._onMove(s)){this._lastPosition={...s};const g=this._normalizePositionValue(s.x),L=this._normalizePositionValue(s.y);this._updatePosition(g,L)}}_onMoveTargetPointerUp(o){this._isMoving&&this._onMoveEnd(),this._moveComplete()}_moveComplete(){this._tryRestoreActiveElement(),document.removeEventListener("pointermove",this._movePointerMoveListener),document.removeEventListener("pointerup",this._movePointerUpListener),this._lastPosition=void 0,this._moveContext=void 0,this._isMoving=!1}_captureActiveElement(){var o;this._activeElement=M(),(o=this._activeElement)==null||o.blur()}_tryRestoreActiveElement(){var o;(o=this._activeElement)!=null&&o.isConnected&&this._activeElement.focus(),this._activeElement=void 0}_normalizePositionValue(o){return P(o)?`${o}px`:w(o)?o:null}_calculateOffsetPosition(o,a,s){return{x:o-((s==null?void 0:s.left)??0),y:a-((s==null?void 0:s.top)??0)}}_clampPosition({x:o,y:a},s){let l=0,g=0;return s&&(l=s.width,g=s.height),o<=0?o=0:o+l>=window.innerWidth&&(o=window.innerWidth-l),a<=0?a=0:a+g>=window.innerHeight&&(a=window.innerHeight-g),{x:o,y:a}}}return e}class V extends U(Object){constructor(e){super(),this._config=e,this._startMoveListener()}destroy(){this._stopMoveListener(),super.stopMoveListener()}_getMoveableBounds(){return this._config.surfaceElement.getBoundingClientRect()}_updatePosition(e,i){this._config.surfaceElement.style.top=i??"",this._config.surfaceElement.style.left=e??""}_onMoveStart(){return this._config.onMoveStart()}_onMove(e){return this._config.onMove(e)}_onMoveEnd(){this._config.onMoveEnd()}_startMoveListener(){this._config.handleElement.addEventListener("pointerdown",this._movePointerDownListener)}_stopMoveListener(){this._config.handleElement.removeEventListener("pointerdown",this._movePointerDownListener)}}class ${constructor(e){this._adapter=e,this._open=!1,this._mode=t.defaults.MODE,this._type=t.defaults.TYPE,this._animationType=t.defaults.ANIMATION_TYPE,this._preset=t.defaults.PRESET,this._persistent=!1,this._fullscreen=!1,this._fullscreenThreshold=t.defaults.FULLSCREEN_THRESHOLD,this._trigger="",this._moveable=!1,this._label="",this._description="",this._sizeStrategy=t.defaults.SIZE_STRATEGY,this._placement=t.defaults.PLACEMENT,this._positionStrategy=t.defaults.POSITION_STRATEGY,this._escapeDismissListener=this._onEscapeDismiss.bind(this),this._backdropDismissListener=this._onBackdropDismiss.bind(this),this._dialogFormSubmitListener=this._onDialogFormSubmit.bind(this),this._triggerClickListener=this._onTriggerClick.bind(this),this._fullscreenListener=this._onFullscreenChange.bind(this)}initialize(){this._adapter.tryApplyGlobalConfiguration(["mode","animationType","positionStrategy","sizeStrategy","persistent","moveable","fullscreenThreshold"]),this._trigger&&!this._adapter.triggerElement&&this._adapter.tryLocateTriggerElement(this._trigger),this._adapter.triggerElement&&this._adapter.addTriggerInteractionListener(this._triggerClickListener),this._open&&this._applyOpen()}destroy(){this._adapter.triggerElement&&this._adapter.removeTriggerInteractionListener(this._triggerClickListener),this._moveController&&this._destroyMoveController(),this._open&&this._hide()}dispatchBeforeCloseEvent(){const e=new CustomEvent(t.events.BEFORE_CLOSE,{cancelable:!0,bubbles:!0,composed:!0});return this._adapter.dispatchHostEvent(e),!e.defaultPrevented}hideBackdrop(){this._adapter.hideBackdrop()}showBackdrop(){this._adapter.showBackdrop()}_show(){this._adapter.show(),this._adapter.addDialogFormSubmitListener(this._dialogFormSubmitListener),v.instance.add(this._adapter.hostElement),this._mode==="modal"?this._adapter.addDialogCancelListener(this._escapeDismissListener):this._mode==="inline-modal"&&this._adapter.addDocumentListener("keydown",this._escapeDismissListener),this._persistent||this._adapter.addBackdropDismissListener(this._backdropDismissListener),this._moveable&&!this._fullscreen&&this._initializeMoveController(),!this._fullscreen&&this._fullscreenThreshold>0&&(this._originalFullscreenValue=this._fullscreen,this._adapter.addFullscreenListener(this._fullscreenThreshold,this._fullscreenListener)),this._adapter.dispatchHostEvent(new CustomEvent(t.events.OPEN,{bubbles:!0,composed:!0}))}async _hide(){this._adapter.removeDialogFormSubmitListener(this._dialogFormSubmitListener),this._adapter.removeDialogCancelListener(this._escapeDismissListener),this._adapter.removeDocumentListener("keydown",this._escapeDismissListener),this._adapter.removeBackdropDismissListener(this._backdropDismissListener),v.instance.remove(this._adapter.hostElement),await this._adapter.hide(),typeof this._originalFullscreenValue=="boolean"&&(this.fullscreen=this._originalFullscreenValue),this._originalFullscreenValue=void 0,this._moveController&&this._destroyMoveController(),this._adapter.dispatchHostEvent(new CustomEvent(t.events.CLOSE,{bubbles:!0,composed:!0}))}async _applyOpen(){this._open?(this._show(),this._adapter.tryAutofocus()):await this._hide(),this._adapter.toggleHostAttribute(t.attributes.VISIBLE,this._open),this._adapter.toggleHostAttribute(t.attributes.OPEN,this._open)}_onEscapeDismiss(e){if(e.type==="keydown"){if(e.key!=="Escape"||!v.instance.isMostRecent(this._adapter.hostElement))return}else e.type==="cancel"&&e.preventDefault();this._persistent||this._tryClose()}_onBackdropDismiss(){this._tryClose()}_onDialogFormSubmit(e){var o,a;e.stopPropagation(),(((o=e.submitter)==null?void 0:o.getAttribute("formmethod"))==="dialog"||((a=e.target)==null?void 0:a.getAttribute("method"))==="dialog")&&this._tryClose()}_onFullscreenChange(e){this.fullscreen=e;const i=new CustomEvent(t.events.FULLSCREEN_CHANGE,{bubbles:!0,composed:!0,detail:e});this._adapter.dispatchHostEvent(i)}_tryClose(){this.dispatchBeforeCloseEvent()&&(this.open=!1)}_onTriggerClick(e){this.open=!this._open}_initializeMoveController(){if(this._moveController)return;const e=()=>{const l=new CustomEvent(t.events.MOVE_START,{cancelable:!0});return this._adapter.dispatchHostEvent(l),l.defaultPrevented},i=l=>{const g=new CustomEvent(t.events.MOVE,{detail:l,cancelable:!0});return this._adapter.dispatchHostEvent(g),g.defaultPrevented||(this._adapter.addSurfaceClass(t.classes.MOVED),this._adapter.addSurfaceClass(t.classes.MOVING)),g.defaultPrevented},o=()=>{const l=new CustomEvent(t.events.MOVE_END);this._adapter.removeSurfaceClass(t.classes.MOVING),this._adapter.dispatchHostEvent(l)},{moveHandleElement:a,surfaceElement:s}=this._adapter;this._moveController=new V({handleElement:a,surfaceElement:s,onMoveStart:e,onMove:i,onMoveEnd:o})}_destroyMoveController(){var e;this._adapter.removeSurfaceClass(t.classes.MOVED),(e=this._moveController)==null||e.destroy(),this._moveController=void 0}_applyMoveable({enabled:e}={enabled:this._moveable}){e?this._initializeMoveController():this._destroyMoveController()}get open(){return this._open}set open(e){e=!!e,this._open!==e&&(this._open=e,this._adapter.isConnected&&this._applyOpen())}get mode(){return this._mode}set mode(e){this._mode!==e&&(this._mode=e,this._adapter.setHostAttribute(t.attributes.MODE,this._mode))}get type(){return this._type}set type(e){this._type!==e&&(this._type=e,this._adapter.setHostAttribute(t.attributes.TYPE,this._type))}get animationType(){return this._animationType}set animationType(e){this._animationType!==e&&(this._animationType=e,this._adapter.setHostAttribute(t.attributes.ANIMATION_TYPE,this._animationType))}get preset(){return this._preset}set preset(e){this._preset!==e&&(this._preset=e,this._adapter.setHostAttribute(t.attributes.PRESET,this._preset))}get persistent(){return this._persistent}set persistent(e){e=!!e,this._persistent!==e&&(this._persistent=e,this._adapter.toggleHostAttribute(t.attributes.PERSISTENT,this._persistent))}get fullscreen(){return this._fullscreen}set fullscreen(e){e=!!e,this._fullscreen!==e&&(this._fullscreen=e,this._applyMoveable({enabled:!this._fullscreen}),this._adapter.toggleHostAttribute(t.attributes.FULLSCREEN,this._fullscreen))}get fullscreenThreshold(){return this._fullscreenThreshold}set fullscreenThreshold(e){this._fullscreenThreshold!==e&&(this._fullscreenThreshold=e,this._adapter.isConnected&&this._open&&!this._fullscreen&&this._fullscreenThreshold>0&&(this._adapter.removeFullscreenListener(this._fullscreenListener),this._adapter.addFullscreenListener(this._fullscreenThreshold,this._fullscreenListener)),this._adapter.setHostAttribute(t.attributes.FULLSCREEN_THRESHOLD,this._fullscreenThreshold.toString()))}get trigger(){return this._trigger??""}set trigger(e){this._trigger!==e&&(this._trigger=e,this._adapter.triggerElement&&this._adapter.removeTriggerInteractionListener(this._triggerClickListener),this._adapter.isConnected&&(this._adapter.tryLocateTriggerElement(this._trigger),this._adapter.addTriggerInteractionListener(this._triggerClickListener)),this._adapter.setHostAttribute(t.attributes.TRIGGER,this._trigger))}get triggerElement(){return this._adapter.triggerElement}set triggerElement(e){this._adapter.triggerElement&&this._adapter.removeTriggerInteractionListener(this._triggerClickListener),this._trigger&&(this._trigger=""),this._adapter.triggerElement=e,this._adapter.isConnected&&this._adapter.addTriggerInteractionListener(this._triggerClickListener)}get moveable(){return this._moveable}set moveable(e){e=!!e,this._moveable!==e&&(this._moveable=e,this._adapter.isConnected&&this._open&&this._applyMoveable(),this._adapter.toggleHostAttribute(t.attributes.MOVEABLE,this._moveable))}get label(){return this._label}set label(e){this._label!==e&&(this._label=e,this._adapter.setAccessibleLabel(this._label))}get description(){return this._description}set description(e){this._description!==e&&(this._description=e,this._adapter.setAccessibleDescription(this._description))}get positionStrategy(){return this._positionStrategy}set positionStrategy(e){this._positionStrategy!==e&&(this._positionStrategy=e,this._adapter.setHostAttribute(t.attributes.POSITION_STRATEGY,this._positionStrategy))}get sizeStrategy(){return this._sizeStrategy}set sizeStrategy(e){this._sizeStrategy!==e&&(this._sizeStrategy=e,this._adapter.setHostAttribute(t.attributes.SIZE_STRATEGY,this._sizeStrategy))}get placement(){return this._placement}set placement(e){this._placement!==e&&(this._placement=e,this._adapter.setHostAttribute(t.attributes.PLACEMENT,this._placement))}}const j=`<template>
  <dialog class="forge-dialog" part="root">
    <forge-backdrop exportparts="root:backdrop"></forge-backdrop>
    <div class="surface" part="surface">
      <div class="move-handle-container" part="move-handle-container">
        <div class="move-handle" part="move-handle">
          <slot name="move-handle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" part="move-handle-icon">
              <path d="M3 15v-2h2v2H3m0-4V9h2v2H3m4 4v-2h2v2H7m0-4V9h2v2H7m4 4v-2h2v2h-2m0-4V9h2v2h-2m4 4v-2h2v2h-2m0-4V9h2v2h-2m4 4v-2h2v2h-2m0-4V9h2v2h-2z" />
            </svg>
          </slot>
        </div>
      </div>
      <slot></slot>
    </div>
  </dialog>
</template>
`,W="@keyframes forge-dialog-zoom-in{0%{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}to{opacity:1;scale:1}}@keyframes forge-dialog-zoom-out{0%{opacity:1;scale:1}to{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}}@keyframes forge-dialog-fade-in{0%{opacity:var(--_dialog-fade-opacity)}to{opacity:1}}@keyframes forge-dialog-fade-out{0%{opacity:1}to{opacity:var(--_dialog-fade-opacity)}}@keyframes forge-dialog-slide-in{0%{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}to{opacity:1;translate:0 0}}@keyframes forge-dialog-slide-out{0%{opacity:1;translate:0 0}to{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}@layer base,nonmodal,animation,placement,size-strategy,preset,fullscreen,position-strategy,media;@layer base{:host{display:none;--forge-theme-surface: var(--forge-theme-surface-bright, #ffffff)}:host([hidden]){display:none}.forge-dialog{--_dialog-background: var(--forge-dialog-background, var(--forge-theme-surface-bright, #ffffff));--_dialog-shape: var(--forge-dialog-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_dialog-elevation: var(--forge-dialog-elevation, 0px 11px 15px -7px rgba(0, 0, 0, .2), 0px 24px 38px 3px rgba(0, 0, 0, .14), 0px 9px 46px 8px rgba(0, 0, 0, .12));--_dialog-spacing: var(--forge-dialog-spacing, auto);--_dialog-block-start-spacing: var(--forge-dialog-block-start-spacing, var(--_dialog-spacing));--_dialog-block-end-spacing: var(--forge-dialog-block-end-spacing, var(--_dialog-spacing));--_dialog-inline-start-spacing: var(--forge-dialog-inline-start-spacing, var(--_dialog-spacing));--_dialog-inline-end-spacing: var(--forge-dialog-inline-end-spacing, var(--_dialog-spacing));--_dialog-padding: var(--forge-dialog-padding, 0);--_dialog-width: var(--forge-dialog-width, fit-content);--_dialog-height: var(--forge-dialog-height, fit-content);--_dialog-min-width: var(--forge-dialog-min-width, 0);--_dialog-max-width: var(--forge-dialog-max-width, calc(100% - var(--forge-spacing-xxlarge, 48px)));--_dialog-min-height: var(--forge-dialog-min-height, 0);--_dialog-max-height: var(--forge-dialog-max-height, calc(100% - var(--forge-spacing-xxlarge, 48px)));--_dialog-z-index: var(--forge-dialog-z-index, var(--forge-z-index-dialog, 8));--_dialog-move-handle-color: var(--forge-dialog-move-handle-color, currentColor);--_dialog-move-handle-size: var(--forge-dialog-move-handle-size, 24px);--_dialog-move-handle-hover-cursor: var(--forge-dialog-move-handle-hover-cursor, grab);--_dialog-move-handle-active-cursor: var(--forge-dialog-move-handle-active-cursor, grabbing);--_dialog-move-handle-spacing: var(--forge-dialog-move-handle-spacing, calc(var(--forge-spacing-xxsmall, 4px) * -1) 0 0);--_dialog-move-transition-duration: var(--forge-dialog-move-transition-duration, var(--forge-animation-duration-short4, .2s));--_dialog-move-transition-easing: var(--forge-dialog-move-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_dialog-moving-opacity: var(--forge-dialog-moving-opacity, .54);--_dialog-enter-animation-duration: var(--forge-dialog-enter-animation-duration, var(--forge-animation-duration-medium1, .25s));--_dialog-enter-animation-easing: var(--forge-dialog-enter-animation-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_dialog-exit-animation-duration: var(--forge-dialog-exit-animation-duration, var(--forge-animation-duration-short2, .1s));--_dialog-exit-animation-easing: var(--forge-dialog-exit-animation-easing, var(--forge-animation-easing-emphasized-accelerate, cubic-bezier(.3, 0, .8, .15)));--_dialog-zoom-opacity: var(--forge-dialog-zoom-opacity, 0);--_dialog-zoom-scale: var(--forge-dialog-zoom-scale, .8);--_dialog-fade-opacity: var(--forge-dialog-fade-opacity, 0);--_dialog-slide-opacity: var(--forge-dialog-slide-opacity, 0);--_dialog-slide-translate: var(--forge-dialog-slide-translate, 0 -30%);--_dialog-backdrop-opacity: var(--forge-dialog-backdrop-opacity, var(--forge-backdrop-opacity, .54));--_dialog-nonmodal-elevation: var(--forge-dialog-nonmodal-elevation, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_dialog-fullscreen-enter-animation-duration: var(--forge-dialog-fullscreen-enter-animation-duration, var(--forge-animation-duration-medium1, .25s));--_dialog-fullscreen-exit-animation-duration: var(--forge-dialog-fullscreen-exit-animation-duration, var(--forge-animation-duration-short2, .1s));--_dialog-position-x: var(--forge-dialog-position-x, 0);--_dialog-position-y: var(--forge-dialog-position-y, 0);--_dialog-preset-sheet-enter-animation-duration: var(--forge-dialog-preset-sheet-enter-animation-duration, var(--forge-animation-duration-medium1, .25s));--_dialog-preset-sheet-exit-animation-duration: var(--forge-dialog-preset-sheet-exit-animation-duration, var(--forge-animation-duration-short3, .15s))}.forge-dialog{position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--_dialog-z-index);background-color:transparent;color:inherit;border:none;width:auto;height:auto;padding:0;margin:0;overflow:visible;max-width:100%;max-height:100%;box-sizing:border-box}.container{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.surface{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;background:var(--_dialog-background);box-shadow:var(--_dialog-elevation);z-index:var(--_dialog-z-index);overflow:hidden;border-radius:var(--_dialog-shape);margin-block-start:var(--_dialog-block-start-spacing);margin-block-end:var(--_dialog-block-end-spacing);margin-inline-start:var(--_dialog-inline-start-spacing);margin-inline-end:var(--_dialog-inline-end-spacing);padding:var(--_dialog-padding);width:var(--_dialog-width);height:var(--_dialog-height);min-width:var(--_dialog-min-width);max-width:var(--_dialog-max-width);min-height:var(--_dialog-min-height);max-height:var(--_dialog-max-height);box-sizing:border-box}.visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:fixed;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}dialog.forge-dialog::backdrop{display:none}forge-backdrop{--forge-backdrop-opacity: var(--_dialog-backdrop-opacity);--forge-backdrop-enter-animation-duration: var(--_dialog-enter-animation-duration);--forge-backdrop-enter-animation-easing: var(--_dialog-enter-animation-easing);--forge-backdrop-exit-animation-duration: var(--_dialog-exit-animation-duration);--forge-backdrop-exit-animation-easing: var(--_dialog-exit-animation-easing)}:host(:not([moveable])) .move-handle{display:none}:host([moveable]:not([fullscreen])) .surface{-webkit-user-select:none;user-select:none;transition-property:opacity;transition-duration:var(--_dialog-move-transition-duration);transition-timing-function:var(--_dialog-move-transition-easing)}:host([moveable]:not([fullscreen])) .surface:not(:hover) .move-handle-container{display:none}:host([moveable]:not([fullscreen])) .surface.moved{margin:0}:host([moveable]:not([fullscreen])) .surface.moving{opacity:var(--_dialog-moving-opacity)}:host([moveable]:not([fullscreen])) .move-handle-container{position:absolute;top:0;z-index:1;display:flex;justify-content:center;width:100%}:host([moveable]:not([fullscreen])) .move-handle-container .move-handle{fill:var(--_dialog-move-handle-color);height:var(--_dialog-move-handle-size);width:var(--_dialog-move-handle-size);margin:var(--_dialog-move-handle-spacing);touch-action:none}:host([moveable]:not([fullscreen])) .move-handle-container .move-handle:hover{cursor:var(--_dialog-move-handle-hover-cursor)}:host([moveable]:not([fullscreen])) .move-handle-container .move-handle:active{cursor:var(--_dialog-move-handle-active-cursor)}:host([moveable]:not([fullscreen])) .move-handle-container .move-handle svg{fill:currentColor}:host([visible]){display:contents}}@layer nonmodal{:host([mode=nonmodal]) .forge-dialog{pointer-events:none}:host([mode=nonmodal]) .container{display:contents}:host([mode=nonmodal]) .surface{--_dialog-elevation: var(--_dialog-nonmodal-elevation);pointer-events:all}:host([mode=nonmodal]) forge-backdrop{display:none}}@layer animation{:host([visible]:not([animation-type=none])) dialog.forge-dialog[open] .surface{animation-duration:var(--_dialog-enter-animation-duration);animation-timing-function:var(--_dialog-enter-animation-easing)}:host([visible]:not([animation-type=none])) dialog.forge-dialog[open] .surface.exiting{animation-duration:var(--_dialog-exit-animation-duration);animation-timing-function:var(--_dialog-exit-animation-easing)}:host([visible]:not([animation-type=none]):is(:not([animation-type]),[animation-type=zoom])) dialog.forge-dialog[open] .surface{animation-name:forge-dialog-zoom-in}:host([visible]:not([animation-type=none]):is(:not([animation-type]),[animation-type=zoom])) dialog.forge-dialog[open] .surface.exiting{animation-name:forge-dialog-zoom-out}:host([visible]:not([animation-type=none])[animation-type=fade]) dialog.forge-dialog[open] .surface{animation-name:forge-dialog-fade-in}:host([visible]:not([animation-type=none])[animation-type=fade]) dialog.forge-dialog[open] .surface.exiting{animation-name:forge-dialog-fade-out}:host([visible]:not([animation-type=none])[animation-type=slide]) dialog.forge-dialog[open] .surface{animation-name:forge-dialog-slide-in}:host([visible]:not([animation-type=none])[animation-type=slide]) dialog.forge-dialog[open] .surface.exiting{animation-name:forge-dialog-slide-out}}@layer placement{:host([placement=custom]) .surface{margin:0;top:var(--_dialog-position-x);left:var(--_dialog-position-y)}:host([placement=top]) .surface{--_dialog-block-start-spacing: var(--forge-dialog-block-start-spacing, 0);top:0;bottom:auto}:host([placement=top-right]) .surface{--_dialog-spacing: var(--forge-dialog-spacing, 0);top:0;left:auto;right:0;bottom:auto}:host([placement=top-left]) .surface{--_dialog-spacing: var(--forge-dialog-spacing, 0);top:0;left:0;right:auto;bottom:auto}:host([placement=bottom]) .surface{--_dialog-block-end-spacing: var(--forge-dialog-block-end-spacing, 0);top:auto;bottom:0}:host([placement=bottom-right]) .surface{--_dialog-spacing: var(--forge-dialog-spacing, 0);top:auto;left:auto;right:0;bottom:0}:host([placement=bottom-left]) .surface{--_dialog-spacing: var(--forge-dialog-spacing, 0);top:auto;left:0;right:auto;bottom:0}}@layer size-strategy{:host([size-strategy=container-inline]) .surface{width:100%}:host([size-strategy=container-block]) .surface{height:100%}}@layer preset{:host([visible]:not([animation-type=none]):is([preset=left-sheet],[preset=right-sheet],[preset=top-sheet],[preset=bottom-sheet])) .forge-dialog{--_dialog-enter-animation-duration: var(--_dialog-preset-sheet-enter-animation-duration);--_dialog-exit-animation-duration: var(--_dialog-preset-sheet-exit-animation-duration)}:host([visible]:not([animation-type=none]):is([preset=left-sheet],[preset=right-sheet],[preset=top-sheet],[preset=bottom-sheet])) .surface{animation-name:forge-dialog-slide-in}:host([visible]:not([animation-type=none]):is([preset=left-sheet],[preset=right-sheet],[preset=top-sheet],[preset=bottom-sheet])) .surface.exiting{animation-name:forge-dialog-slide-out}:host(:is([preset=left-sheet],[preset=right-sheet],[preset=top-sheet],[preset=bottom-sheet])) .surface{--_dialog-max-width: var(--forge-dialog-max-width, none);--_dialog-max-height: var(--forge-dialog-max-height, none);inset:auto;display:inline-flex}:host([preset=left-sheet]) .forge-dialog{--_dialog-slide-translate: var(--forge-dialog-slide-translate, -100% 0)}:host([preset=left-sheet]) .surface{left:0;bottom:0;top:0;height:100%;border-top-left-radius:0;border-bottom-left-radius:0}:host([preset=right-sheet]) .forge-dialog{--_dialog-slide-translate: var(--forge-dialog-slide-translate, 100% 0)}:host([preset=right-sheet]) .surface{right:0;bottom:0;top:0;height:100%;border-top-right-radius:0;border-bottom-right-radius:0}:host([preset=top-sheet]) .forge-dialog{--_dialog-slide-translate: var(--forge-dialog-slide-translate, 0 -100%)}:host([preset=top-sheet]) .surface{top:0;left:0;right:0;border-top-left-radius:0;border-top-right-radius:0}:host([preset=bottom-sheet]) .forge-dialog{--_dialog-slide-translate: var(--forge-dialog-slide-translate, 0 100%)}:host([preset=bottom-sheet]) .surface{bottom:0;left:0;right:0;border-bottom-left-radius:0;border-bottom-right-radius:0}}@layer fullscreen{:host([fullscreen]) .forge-dialog{--_dialog-enter-animation-duration: var(--_dialog-fullscreen-enter-animation-duration);--_dialog-exit-animation-duration: var(--_dialog-fullscreen-exit-animation-duration)}:host([fullscreen]) .surface{height:100%;width:100%;max-width:none;max-height:none;border-radius:0;box-shadow:none}:host([fullscreen]) forge-backdrop{display:none}}@layer position-strategy{:host([position-strategy=viewport]) .forge-dialog{position:fixed}:host([position-strategy=container]) .forge-dialog{position:absolute}:host([position-strategy=container][preset$=-sheet]) .forge-dialog{contain:content}}@layer media{@media (prefers-reduced-motion: reduce){.surface{animation-name:forge-dialog-fade-in}.surface.exiting{animation-name:forge-dialog-fade-out}}}";var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,n=(h,e,i,o)=>{for(var a=o>1?void 0:o?Z(e,i):e,s=h.length-1,l;s>=0;s--)(l=h[s])&&(a=(o?l(e,i,a):l(a))||a);return o&&a&&X(e,i,a),a},y;let r=class extends I(N(C)){static get observedAttributes(){return Object.values(t.observedAttributes)}[(y=p,b)](){this._core.hideBackdrop()}[E](){this._core.showBackdrop()}[R](h){return this._core.dispatchBeforeCloseEvent()}constructor(){super(),S(this,j,W),this._core=new $(new Y(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(h,e,i){switch(h){case t.observedAttributes.OPEN:this.open=_(i);break;case t.observedAttributes.MODE:this.mode=i??t.defaults.MODE;break;case t.observedAttributes.TYPE:this.type=i??t.defaults.TYPE;break;case t.observedAttributes.ANIMATION_TYPE:this.animationType=i??t.defaults.ANIMATION_TYPE;break;case t.observedAttributes.PRESET:this.preset=i??t.defaults.PRESET;break;case t.observedAttributes.PERSISTENT:this.persistent=_(i);break;case t.observedAttributes.FULLSCREEN:this.fullscreen=_(i);break;case t.observedAttributes.FULLSCREEN_THRESHOLD:this.fullscreenThreshold=i==null?t.defaults.FULLSCREEN_THRESHOLD:O(i);break;case t.observedAttributes.TRIGGER:this.trigger=i;break;case t.observedAttributes.MOVEABLE:this.moveable=_(i);break;case t.observedAttributes.POSITION_STRATEGY:this.positionStrategy=i??t.defaults.POSITION_STRATEGY;break;case t.observedAttributes.SIZE_STRATEGY:this.sizeStrategy=i??t.defaults.SIZE_STRATEGY;break;case t.observedAttributes.PLACEMENT:this.placement=i??t.defaults.PLACEMENT;break;case t.observedAttributes.LABEL:this.label=i;break;case t.observedAttributes.DESCRIPTION:this.description=i;break}}show(){this.open=!0}hide(){this.open=!1}};r[y]=new Set;n([d()],r.prototype,"open",2);n([d()],r.prototype,"mode",2);n([d()],r.prototype,"type",2);n([d()],r.prototype,"animationType",2);n([d()],r.prototype,"preset",2);n([d()],r.prototype,"persistent",2);n([d()],r.prototype,"fullscreen",2);n([d()],r.prototype,"fullscreenThreshold",2);n([d()],r.prototype,"trigger",2);n([d()],r.prototype,"triggerElement",2);n([d()],r.prototype,"moveable",2);n([d()],r.prototype,"positionStrategy",2);n([d()],r.prototype,"sizeStrategy",2);n([d()],r.prototype,"placement",2);n([d()],r.prototype,"label",2);n([d()],r.prototype,"description",2);r=n([A({name:t.elementName,dependencies:[D]})],r);export{t as D,r as a,p as d};
