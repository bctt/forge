import{C as A,l as b,s as N,k as w,j as O,B as T}from"./constants-BjnHqKgS.js";import{B as x,c as l}from"./base-adapter-CQdYccXX.js";import{E as C,q as B,c as h}from"./feature-detection-ONR9WHvu.js";import{S as V}from"./state-layer-CxIpCmDW.js";import{F as W}from"./focus-indicator-I_IrwQSK.js";import"./index-BgGCUUFB.js";import{a as S,W as P}from"./with-default-aria-BcIvJ7-x.js";const k=`${A}list-item`,R={SELECTED:"selected",ACTIVE:"active",VALUE:"value",DENSE:"dense",INDENTED:"indented",TWO_LINE:"two-line",THREE_LINE:"three-line",WRAP:"wrap",NONINTERACTIVE:"noninteractive",FOCUS_PROPAGATION:"focus-propagation"},U={...R},D={ROOT:"forge-list-item",DISABLED:"disabled",INTERACTIVE:"interactive",INTERNAL_ANCHOR:"anchor"},z={INTERNAL_ANCHOR:"forge-list-item-anchor"},$={ROOT:`.${D.ROOT}`,FORM_CONTROL_LIKE:":is([forge-list-item-interactive],forge-radio,forge-checkbox,forge-switch,input[type=checkbox],input[type=radio]):is([slot=start],[slot=end],[slot=leading],[slot=trailing]):not([forge-ignore])",BUTTON_LIKE:":is(button,[role=button][tabindex]:not([tabindex=-1]),[forge-list-item-interactive]):not([forge-ignore])",IGNORE:"[forge-ignore],[data-forge-ignore]",INTERNAL_ANCHOR:`#${z.INTERNAL_ANCHOR}`,SLOTTED_START_END:":is([slot=start],[slot=end],[slot=leading],[slot=trailing])"},M={SELECT:`${k}-select`},G={FOCUS_PROPAGATION:"allow"},s={elementName:k,observedAttributes:R,attributes:U,classes:D,selectors:$,ids:z,events:M,defaults:G},H=`${A}list`,F={DENSE:"dense",SELECTED_VALUE:"selected-value",INDENTED:"indented",TWO_LINE:"two-line",THREE_LINE:"three-line",WRAP:"wrap",NONINTERACTIVE:"noninteractive"},j={...F},K={SCOPE_TEST:`${H}-item-scope-test`},o={elementName:H,observedAttributes:F,attributes:j,events:K};class q extends x{constructor(t){super(t)}setSelectedListItems(t){const e=this._getOwnListItems();if(e.length){const r=Array.isArray(t)?t:[t];for(const i of e)i.selected=r.some(n=>C(n,i.value))}}setListItemsProperty(t,e){this._getOwnListItems().forEach(r=>r[t]=e)}_getOwnListItems(){const t=B(this._component,s.elementName),e=[],r=i=>{const n=i.composedPath();n.slice(0,n.indexOf(this._component)).some(v=>v.localName===o.elementName.toLowerCase())||e.push(i.target)};return this._component.addEventListener(o.events.SCOPE_TEST,r),t.forEach(i=>i.dispatchEvent(new CustomEvent(o.events.SCOPE_TEST,{bubbles:!0,composed:!0}))),this._component.removeEventListener(o.events.SCOPE_TEST,r),e}}class Q{constructor(t){this._adapter=t,this._dense=!1,this._indented=!1,this._twoLine=!1,this._threeLine=!1,this._wrap=!1,this._noninteractive=!1}initialize(){this._selectedValue!==void 0&&this._selectedValue!==null&&this._adapter.setSelectedListItems(this._selectedValue)}get dense(){return this._dense}set dense(t){this._dense!==t&&(this._dense=t,this._adapter.setListItemsProperty("dense",this._dense),this._adapter.toggleHostAttribute(o.attributes.DENSE,this._dense))}get indented(){return this._indented}set indented(t){this._indented!==t&&(this._indented=t,this._adapter.setListItemsProperty("indented",this._indented),this._adapter.toggleHostAttribute(o.attributes.INDENTED,this._indented))}get selectedValue(){return this._selectedValue}set selectedValue(t){this._selectedValue!==t&&(this._selectedValue=t,this._adapter.setSelectedListItems(this._selectedValue))}get twoLine(){return this._twoLine}set twoLine(t){this._twoLine!==t&&(this._twoLine=t,this._adapter.setListItemsProperty("twoLine",this._twoLine),this._adapter.toggleHostAttribute(o.attributes.TWO_LINE,this._twoLine))}get threeLine(){return this._threeLine}set threeLine(t){this._threeLine!==t&&(this._threeLine=t,this._adapter.setListItemsProperty("threeLine",this._threeLine),this._adapter.toggleHostAttribute(o.attributes.THREE_LINE,this._threeLine))}get wrap(){return this._wrap}set wrap(t){this._wrap!==t&&(this._wrap=t,this._adapter.setListItemsProperty("wrap",this._wrap),this._adapter.toggleHostAttribute(o.attributes.WRAP,this._wrap))}get noninteractive(){return this._noninteractive}set noninteractive(t){this._noninteractive!==t&&(this._noninteractive=t,this._adapter.setListItemsProperty("noninteractive",this._noninteractive),this._adapter.toggleHostAttribute(o.attributes.NONINTERACTIVE,this._noninteractive))}}class X extends x{constructor(t){super(t),this._slotListener=this._onSlotChange.bind(this),this._rootElement=b(t,s.selectors.ROOT),this._defaultSlotElement=b(t,"slot:not([name])"),this._startSlotElement=b(t,"slot[name=start]"),this._endSlotElement=b(t,"slot[name=end]")}get interactiveElement(){return this._interactiveElement}initialize(){const t=this._getParentList();t&&this._inheritParentListProps(t),this._component[N]({role:"listitem"},{setAttribute:!this._component.hasAttribute("role")})}destroy(){this._rootElement.removeEventListener("slotchange",this._slotListener),this._tryCleanupObservers()}initializeInteractiveObserver(t){this._interactiveStateChangeListener=t,this._rootElement.addEventListener("slotchange",this._slotListener),this._initializeInteractiveElement()}destroyInteractiveObserver(){var t;this._rootElement.removeEventListener("slotchange",this._slotListener),this._tryCleanupObservers(),(t=this._interactiveStateChangeListener)==null||t.call(this,!1),this._interactiveStateChangeListener=void 0}addRootListener(t,e,r){this._rootElement.addEventListener(t,e,r)}removeRootListener(t,e,r){this._rootElement.removeEventListener(t,e,r)}setActive(t){this._focusIndicatorElement&&(this._focusIndicatorElement.active=t)}trySelect(t){const e=this._getParentList();return(e==null?void 0:e.selectedValue)===void 0?null:(Array.isArray(e.selectedValue)?e.selectedValue:[e.selectedValue]).some(n=>C(n,t))}animateStateLayer(){var t;(t=this._stateLayerElement)==null||t.playAnimation()}tempDeactivateFocusIndicator(){this._focusIndicatorElement&&(this._focusIndicatorElement.active=!1)}_onSlotChange(t){["","start","end","leading","trailing"].includes(t.target.name)&&this._initializeInteractiveElement()}_initializeInteractiveElement(){this._tryCleanupObservers();const t=this._startSlotElement.assignedElements({flatten:!0}),e=this._endSlotElement.assignedElements({flatten:!0}),i=[...t,...e].find(p=>p.matches(s.selectors.FORM_CONTROL_LIKE));if(i){this._attachInteractiveFormControl(i);return}const n=this._defaultSlotElement.assignedElements({flatten:!0}),a=n.find(p=>p.tagName==="A"),v=n.find(p=>p.matches(s.selectors.BUTTON_LIKE)),E=b(this._component,s.selectors.INTERNAL_ANCHOR);E&&E.remove(),this._interactiveElement=a??v,this._setInteractive(!!this._interactiveElement),a?this._attachInteractiveAnchor(a):v&&this._attachInteractiveButtonLike(v)}_attachInteractiveFormControl(t){this._interactiveElement=t,this._setInteractive(!!this._interactiveElement),this._focusIndicatorElement&&(this._focusIndicatorElement.targetElement=t),this._syncDisabled(t),this._disabledAttrObserver=new MutationObserver(()=>this._syncDisabled(t)),this._disabledAttrObserver.observe(t,{attributes:!0,attributeFilter:["disabled","aria-disabled"]})}_attachInteractiveAnchor(t){const e=b(this._component,s.selectors.INTERNAL_ANCHOR)??document.createElement("a");e.href=t.href,e.tabIndex=-1,e.id=s.ids.INTERNAL_ANCHOR,e.classList.add(s.classes.INTERNAL_ANCHOR),e.setAttribute("aria-hidden","true"),this._rootElement.appendChild(e),this._focusIndicatorElement&&(this._focusIndicatorElement.targetElement=t),this._anchorAttrObserver=new MutationObserver(()=>e.href=t.href),this._anchorAttrObserver.observe(t,{attributes:!0,attributeFilter:["href"]})}_attachInteractiveButtonLike(t){this._focusIndicatorElement&&(this._focusIndicatorElement.targetElement=t),this._syncDisabled(t),this._disabledAttrObserver=new MutationObserver(()=>this._syncDisabled(t)),this._disabledAttrObserver.observe(t,{attributes:!0,attributeFilter:["disabled","aria-disabled"]})}_setInteractive(t){var e,r,i;this._rootElement.classList.toggle(s.classes.INTERACTIVE,t),(e=this._interactiveStateChangeListener)==null||e.call(this,t),t?(this._focusIndicatorElement||(this._focusIndicatorElement=document.createElement("forge-focus-indicator"),this._focusIndicatorElement.setAttribute("part","focus-indicator"),this._focusIndicatorElement.inward=!0,this._rootElement.appendChild(this._focusIndicatorElement)),this._stateLayerElement||(this._stateLayerElement=document.createElement("forge-state-layer"),this._stateLayerElement.targetElement=this._rootElement,this._stateLayerElement.setAttribute("exportparts","surface:state-layer"),this._rootElement.appendChild(this._stateLayerElement))):((r=this._focusIndicatorElement)==null||r.remove(),this._focusIndicatorElement=void 0,(i=this._stateLayerElement)==null||i.remove(),this._stateLayerElement=void 0)}_syncDisabled(t){const e=t.hasAttribute("disabled")||t.getAttribute("aria-disabled")==="true";this._rootElement.classList.toggle(s.classes.DISABLED,e),this._setInteractive(!e)}_getParentList(){return this._component.closest(o.elementName)}_inheritParentListProps(t){t.hasAttribute(o.attributes.NONINTERACTIVE)&&(this._component.noninteractive=!0),t.hasAttribute(o.attributes.DENSE)&&(this._component.dense=!0),t.hasAttribute(o.attributes.INDENTED)&&(this._component.indented=!0),t.hasAttribute(o.attributes.TWO_LINE)&&(this._component.twoLine=!0),t.hasAttribute(o.attributes.THREE_LINE)&&(this._component.threeLine=!0)}_tryCleanupObservers(){var t,e;(t=this._disabledAttrObserver)==null||t.disconnect(),this._disabledAttrObserver=void 0,(e=this._anchorAttrObserver)==null||e.disconnect(),this._anchorAttrObserver=void 0}}class J{constructor(t){this._adapter=t,this._selected=!1,this._active=!1,this._dense=!1,this._indented=!1,this._twoLine=!1,this._threeLine=!1,this._wrap=!1,this._noninteractive=!1,this._focusPropagation=s.defaults.FOCUS_PROPAGATION,this._interactiveStateChangeListener=this._onInteractiveStateChange.bind(this),this._mousedownListener=this._onMousedown.bind(this),this._clickListener=this._onClick.bind(this),this._keydownListener=this._onKeydown.bind(this)}initialize(){this._adapter.initialize(),this._noninteractive?this._adapter.destroyInteractiveObserver():this._adapter.initializeInteractiveObserver(this._interactiveStateChangeListener)}destroy(){this._adapter.destroy()}_onMousedown(t){const r=t.composedPath().filter(i=>i.nodeType===Node.ELEMENT_NODE).some(i=>i===this._adapter.interactiveElement);(this._focusPropagation==="off"||!r)&&t.preventDefault()}_onKeydown(t){var i,n;const r=t.composedPath().filter(a=>a.nodeType===Node.ELEMENT_NODE).some(a=>a.matches(s.selectors.SLOTTED_START_END));if((t.key==="Enter"||t.key===" ")&&t.stopPropagation(),r){(t.key==="Enter"||t.key===" ")&&this._adapter.animateStateLayer(),t.key==="Enter"&&((i=this._adapter.interactiveElement)==null||i.click());return}t.key===" "&&(t.preventDefault(),(n=this._adapter.interactiveElement)==null||n.click())}_onClick(t){var p,y,L;const e=t.composedPath().filter(c=>c.nodeType===Node.ELEMENT_NODE);if(e.some(c=>c.matches(s.selectors.IGNORE)))return;const i=c=>c.matches("label[for]");if(e.filter(i).some(c=>{var u;return c.htmlFor===((u=this._adapter.interactiveElement)==null?void 0:u.id)})){t.stopPropagation();return}const a=c=>c.tagName==="A"&&c.id===s.ids.INTERNAL_ANCHOR;if(e.some(a)){const c=t.ctrlKey||t.metaKey,u=(p=this._adapter.interactiveElement)==null?void 0:p.hasAttribute("target");t.preventDefault(),t.stopImmediatePropagation();const I=c&&!u;I&&((y=this._adapter.interactiveElement)==null||y.setAttribute("target","_blank")),this._clickInteractiveElement(),I&&((L=this._adapter.interactiveElement)==null||L.removeAttribute("target"));return}if(!e.some(c=>c===this._adapter.interactiveElement)){t.stopImmediatePropagation(),this._clickInteractiveElement();return}this._dispatchSelectEvent()}_clickInteractiveElement(){var t,e;this._focusPropagation==="allow"&&((t=this._adapter.interactiveElement)==null||t.focus()),this._adapter.tempDeactivateFocusIndicator(),(e=this._adapter.interactiveElement)==null||e.click()}_onInteractiveStateChange(t){t&&!this._noninteractive?(this._adapter.addRootListener("mousedown",this._mousedownListener,{capture:!0}),this._adapter.addHostListener("click",this._clickListener,{capture:!0}),this._adapter.addHostListener("keydown",this._keydownListener)):(this._adapter.removeRootListener("mousedown",this._mousedownListener,{capture:!0}),this._adapter.removeHostListener("click",this._clickListener,{capture:!0}),this._adapter.removeHostListener("keydown",this._keydownListener))}_dispatchSelectEvent(){const t={value:this._value},e=new CustomEvent(s.events.SELECT,{bubbles:!0,detail:t});this._adapter.dispatchHostEvent(e)}get selected(){return this._selected}set selected(t){t=!!t,this._selected!==t&&(this._selected=t,this._adapter.toggleHostAttribute(s.attributes.SELECTED,this._selected))}get active(){return this._active}set active(t){t=!!t,this._active!==t&&(this._active=t,this._adapter.setActive(this._active),this._adapter.toggleHostAttribute(s.attributes.ACTIVE,this._active))}get value(){return this._value}set value(t){this._value=t;const e=this._adapter.trySelect(this._value);e!==null&&e!==this._selected&&(this.selected=e)}get dense(){return this._dense}set dense(t){t=!!t,this._dense!==t&&(this._dense=t,this._adapter.toggleHostAttribute(s.attributes.DENSE,this._dense))}get indented(){return this._indented}set indented(t){t=!!t,this._indented!==t&&(this._indented=t,this._adapter.toggleHostAttribute(s.attributes.INDENTED,this._indented))}get twoLine(){return this._twoLine}set twoLine(t){t=!!t,this._twoLine!==t&&(this._twoLine=t,this._adapter.toggleHostAttribute(s.attributes.TWO_LINE,this._twoLine))}get threeLine(){return this._threeLine}set threeLine(t){t=!!t,this._threeLine!==t&&(this._threeLine=t,this._adapter.toggleHostAttribute(s.attributes.THREE_LINE,this._threeLine))}get wrap(){return this._wrap}set wrap(t){t=!!t,this._wrap!==t&&(this._wrap=t,this._adapter.toggleHostAttribute(s.attributes.WRAP,this._wrap))}get noninteractive(){return this._noninteractive}set noninteractive(t){t=!!t,this._noninteractive!==t&&(this._noninteractive=t,this._adapter.isConnected&&(this._noninteractive?this._adapter.destroyInteractiveObserver():this._adapter.initializeInteractiveObserver(this._interactiveStateChangeListener)),this._adapter.toggleHostAttribute(s.attributes.NONINTERACTIVE,this._noninteractive))}get focusPropagation(){return this._focusPropagation}set focusPropagation(t){["allow","off"].includes(t)||(t=s.defaults.FOCUS_PROPAGATION),this._focusPropagation!==t&&(this._focusPropagation=t,this._adapter.toggleHostAttribute(s.attributes.FOCUS_PROPAGATION,this._focusPropagation!==s.defaults.FOCUS_PROPAGATION,this._focusPropagation))}}const Y=`<template>
  <div class="forge-list-item" part="root">
    <slot name="start">
      <slot name="leading"></slot>
    </slot>
    <div class="text-container" part="text-container">
      <slot></slot>
      <slot name="secondary-text"></slot>
      <slot name="tertiary-text"></slot>
    </div>
    <slot name="end">
      <slot name="trailing"></slot>
    </slot>
  </div>
</template>
`,Z=':host{--_list-item-indent: var(--forge-list-item-indent, var(--forge-spacing-xxlarge, 48px));--_list-item-dense-indent: var(--forge-list-item-dense-indent, var(--forge-spacing-xxlarge, 48px));--_list-item-disabled-cursor: var(--forge-list-item-disabled-cursor, not-allowed)}:host{display:block;outline:none}:host([hidden]){display:none}.forge-list-item{--_list-item-background: var(--forge-list-item-background, transparent);--_list-item-shape: var(--forge-list-item-shape, 0);--_list-item-padding: var(--forge-list-item-padding, 0 var(--forge-spacing-medium, 16px));--_list-item-margin: var(--forge-list-item-margin, 0);--_list-item-height: var(--forge-list-item-height, 48px);--_list-item-dense-height: var(--forge-list-item-dense-height, 32px);--_list-item-cursor: var(--forge-list-item-cursor, pointer);--_list-item-gap: var(--forge-list-item-gap, var(--forge-spacing-large, 24px));--_list-item-text-color: var(--forge-list-item-text-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_list-item-text-font-size: var(--forge-list-item-text-font-size, var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1))));--_list-item-text-font-weight: var(--forge-list-item-text-font-weight, var(--forge-typography-body2-font-weight, 400));--_list-item-text-line-height: var(--forge-list-item-text-line-height, 1.5rem);--_list-item-selected-color: var(--forge-list-item-selected-color, var(--forge-theme-primary, #3f51b5));--_list-item-selected-background: var(--forge-list-item-selected-background, var(--_list-item-selected-color));--_list-item-selected-opacity: var(--forge-list-item-selected-opacity, .08);--_list-item-selected-start-color: var(--forge-list-item-selected-start-color, var(--_list-item-selected-color));--_list-item-selected-end-color: var(--forge-list-item-selected-end-color, var(--_list-item-selected-color));--_list-item-selected-text-color: var(--forge-list-item-selected-text-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_list-item-disabled-opacity: var(--forge-list-item-disabled-opacity, .38);--_list-item-one-line-height: var(--forge-list-item-one-line-height, var(--_list-item-height));--_list-item-two-line-height: var(--forge-list-item-two-line-height, var(--forge-list-item-height, 72px));--_list-item-three-line-height: var(--forge-list-item-three-line-height, var(--forge-list-item-height, 88px));--_list-item-dense-one-line-height: var(--forge-list-item-dense-one-line-height, var(--_list-item-dense-height));--_list-item-dense-two-line-height: var(--forge-list-item-dense-two-line-height, var(--forge-list-item-dense-height, 56px));--_list-item-dense-three-line-height: var(--forge-list-item-dense-three-line-height, var(--forge-list-item-dense-height, 72px));--_list-item-dense-font-size: var(--forge-list-item-dense-font-size, .875rem);--_list-item-dense-gap: var(--forge-list-item-dense-gap, var(--forge-spacing-xsmall, 8px));--_list-item-start-selected-color: var(--forge-list-item-start-selected-color, var(--_list-item-selected-color));--_list-item-end-selected-color: var(--forge-list-item-end-selected-color, var(--_list-item-selected-color));--_list-item-wrap-padding: var(--forge-list-item-wrap-padding, var(--forge-spacing-xsmall, 8px) var(--forge-spacing-medium, 16px))}.forge-list-item{position:relative;display:flex;gap:var(--_list-item-gap);align-items:center;box-sizing:border-box;outline:none;text-decoration:none;border-radius:var(--_list-item-shape);-webkit-tap-highlight-color:transparent;background-color:var(--_list-item-background);height:var(--_list-item-height);min-height:var(--_list-item-height);padding:var(--_list-item-padding);margin:var(--_list-item-margin)}.forge-list-item.interactive{cursor:var(--_list-item-cursor)}.forge-list-item.disabled{cursor:var(--_list-item-disabled-cursor);opacity:var(--_list-item-disabled-opacity)}.forge-list-item.disabled ::slotted(button){cursor:var(--_list-item-disabled-cursor)}.anchor{position:absolute;top:0;right:0;bottom:0;left:0}:host([two-line]) .forge-list-item{height:var(--_list-item-two-line-height);min-height:var(--_list-item-two-line-height)}:host([three-line]) .forge-list-item{height:var(--_list-item-three-line-height);min-height:var(--_list-item-three-line-height)}:host([dense]) .forge-list-item{--_list-item-gap: var(--_list-item-dense-gap);height:var(--_list-item-dense-one-line-height);min-height:var(--_list-item-dense-one-line-height)}:host([dense]) .text-container{font-size:var(--_list-item-dense-font-size)}:host([dense][indented]){margin-inline-start:var(--_list-item-dense-indent)}:host([dense][two-line]) .forge-list-item{height:var(--_list-item-dense-two-line-height);min-height:var(--_list-item-dense-two-line-height)}:host([dense][three-line]) .forge-list-item{height:var(--_list-item-dense-three-line-height);min-height:var(--_list-item-dense-three-line-height)}:host([selected]) .forge-list-item{color:var(--_list-item-selected-color)}:host([selected]) .forge-list-item:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;opacity:var(--_list-item-selected-opacity);background-color:var(--_list-item-selected-background);pointer-events:none}:host([selected]) .forge-list-item ::slotted([slot=start]),:host([selected]) .forge-list-item ::slotted([slot=end]),:host([selected]) .forge-list-item ::slotted([slot=leading]),:host([selected]) .forge-list-item ::slotted([slot=trailing]){color:var(--_list-item-selected-color);isolation:isolate}:host([selected]) .forge-list-item ::slotted([slot=start]),:host([selected]) .forge-list-item ::slotted([slot=leading]){color:var(--_list-item-start-selected-color)}:host([selected]) .forge-list-item ::slotted([slot=end]),:host([selected]) .forge-list-item ::slotted([slot=trailing]){color:var(--_list-item-end-selected-color)}:host([selected]) .text-container{color:var(--_list-item-selected-color)}:host([selected]) forge-state-layer{--forge-state-layer-color: var(--_list-item-selected-color)}:host([indented]){margin-inline-start:var(--_list-item-indent)}.text-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;isolation:isolate;font-size:var(--_list-item-text-font-size);font-weight:var(--_list-item-text-font-weight);line-height:var(--_list-item-text-line-height);flex:1;contain:layout}slot[name=secondary-text]::slotted(*),slot[name=tertiary-text]::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--_list-item-text-color);display:block}:host([selected]) slot[name=secondary-text]::slotted(*),:host([selected]) slot[name=tertiary-text]::slotted(*){color:var(--_list-item-selected-text-color)}::slotted(:is(button,[role=button][tabindex],[forge-list-item-button])){-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:var(--_list-item-cursor);border:none;padding-block:0;padding-inline:0;margin:0;box-sizing:border-box;background:transparent;color:inherit;outline:none;font:inherit;-webkit-user-select:auto;user-select:auto;text-align:inherit;letter-spacing:inherit;word-spacing:inherit;display:inline}::slotted(a){outline:none;color:inherit!important;text-decoration:none!important}::slotted([slot=start]),::slotted([slot=end]),::slotted([slot=leading]),::slotted([slot=trailing]){color:var(--_list-item-text-color);display:inline-flex;flex-shrink:0;align-items:center;justify-content:center;fill:currentColor}:host(:not([noninteractive])) ::slotted(:is(forge-checkbox,forge-radio,forge-switch):is([slot=start],[slot=end],[slot=leading],[slot=trailing]):not([forge-ignore])){--forge-focus-indicator-display: none;--forge-state-layer-display: none}:host([selected]) ::slotted([slot=start]),:host([selected]) ::slotted([slot=leading]){color:var(--_list-item-start-selected-color)}:host([selected]) ::slotted([slot=end]),:host([selected]) ::slotted([slot=trailing]){color:var(--_list-item-end-selected-color)}:host([wrap]) .forge-list-item{--_list-item-padding: var(--_list-item-wrap-padding);height:auto}:host([wrap]) .text-container{white-space:normal;overflow:visible;text-overflow:clip;line-height:normal}:host([wrap]) slot[name=secondary-text]::slotted(*),:host([wrap]) slot[name=tertiary-text]::slotted(*){white-space:normal;overflow:visible;text-overflow:clip;line-height:normal}forge-focus-indicator{z-index:1;--forge-focus-indicator-shape: calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1))}forge-state-layer{border-radius:inherit}';var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,g=(d,t,e,r)=>{for(var i=r>1?void 0:r?et(t,e):t,n=d.length-1,a;n>=0;n--)(a=d[n])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&tt(t,e,i),i};let m=class extends S(P(T)){static get observedAttributes(){return Object.values(s.observedAttributes)}constructor(){super(),w(this,Y,Z),this._adapter=new X(this),this._core=new J(this._adapter)}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(d,t,e){switch(d){case s.observedAttributes.SELECTED:this.selected=h(e);break;case s.observedAttributes.ACTIVE:this.active=h(e);break;case s.observedAttributes.VALUE:this.value=e;break;case s.observedAttributes.DENSE:this.dense=h(e);break;case s.observedAttributes.INDENTED:this.indented=h(e);break;case s.observedAttributes.TWO_LINE:this.twoLine=h(e);break;case s.observedAttributes.THREE_LINE:this.threeLine=h(e);break;case s.observedAttributes.WRAP:this.wrap=h(e);break;case s.observedAttributes.NONINTERACTIVE:this.noninteractive=h(e);break;case s.observedAttributes.FOCUS_PROPAGATION:this.focusPropagation=e;break}}};g([l()],m.prototype,"selected",2);g([l()],m.prototype,"active",2);g([l()],m.prototype,"value",2);g([l()],m.prototype,"dense",2);g([l()],m.prototype,"indented",2);g([l()],m.prototype,"twoLine",2);g([l()],m.prototype,"threeLine",2);g([l()],m.prototype,"wrap",2);g([l()],m.prototype,"noninteractive",2);g([l()],m.prototype,"focusPropagation",2);m=g([O({name:s.elementName,dependencies:[V,W]})],m);const it=`<template>
  <div class="forge-list" part="root">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
`,st=":host{--_list-navlist-spacing: var(--forge-list-navlist-spacing, var(--forge-spacing-xxsmall, 4px));--_list-navlist-margin: var(--forge-list-navlist-margin, var(--forge-spacing-xxsmall, 4px) var(--forge-spacing-xsmall, 8px));--_list-navlist-height: var(--forge-list-navlist-height, 40px);--_list-navlist-padding: var(--forge-list-navlist-padding, 0 var(--forge-spacing-xsmall, 8px));--_list-navlist-shape: var(--forge-list-navlist-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_list-navlist-font-size: var(--forge-list-navlist-font-size, calc(var(--forge-typography-font-size, 1rem) * .875));--_list-navlist-font-weight: var(--forge-list-navlist-font-weight, 500)}:host{display:block}:host([hidden]){display:none}:host([navlist]){margin-block:var(--_list-navlist-spacing);--forge-list-item-height: var(--_list-navlist-height);--forge-list-item-margin: var(--_list-navlist-margin);--forge-list-item-padding: var(--_list-navlist-padding);--forge-list-item-shape: var(--_list-navlist-shape);--forge-list-item-text-font-size: var(--_list-navlist-font-size);--forge-list-item-text-font-weight: var(--_list-navlist-font-weight)}.forge-list{--_list-spacing: var(--forge-list-spacing, 0);--_list-container-color: var(--forge-list-container-color, transparent)}.forge-list{outline:none;background-color:var(--_list-container-color);margin:0;border-radius:inherit;min-width:inherit}.inner{display:grid;gap:var(--_list-spacing);min-width:0}.inner ::slotted(*){min-width:0}";var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,f=(d,t,e,r)=>{for(var i=r>1?void 0:r?ot(t,e):t,n=d.length-1,a;n>=0;n--)(a=d[n])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&rt(t,e,i),i};let _=class extends S(P(T)){static get observedAttributes(){return Object.values(o.observedAttributes)}constructor(){super(),w(this,it,st),this._core=new Q(new q(this))}connectedCallback(){this[N]({role:"list"},{setAttribute:!this.hasAttribute("role")}),this._core.initialize()}attributeChangedCallback(d,t,e){switch(d){case o.attributes.DENSE:this.dense=h(e);break;case o.attributes.INDENTED:this.indented=h(e);break;case o.attributes.SELECTED_VALUE:this.selectedValue=e;break;case o.attributes.TWO_LINE:this.twoLine=h(e);break;case o.attributes.THREE_LINE:this.threeLine=h(e);break;case o.attributes.WRAP:this.wrap=h(e);break;case o.attributes.NONINTERACTIVE:this.noninteractive=h(e);break}}};f([l()],_.prototype,"dense",2);f([l()],_.prototype,"indented",2);f([l()],_.prototype,"selectedValue",2);f([l()],_.prototype,"twoLine",2);f([l()],_.prototype,"threeLine",2);f([l()],_.prototype,"wrap",2);f([l()],_.prototype,"noninteractive",2);_=f([O({name:o.elementName,dependencies:[m]})],_);export{_ as L,m as a,o as b,s as c};
