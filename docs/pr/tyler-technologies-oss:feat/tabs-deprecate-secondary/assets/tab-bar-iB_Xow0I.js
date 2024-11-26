import{C as k,q as m,t as A,a8 as V,o as B,B as L,p as I,b as d,d as j}from"./constants-CFf81ck9.js";import{B as O,c}from"./base-adapter-Dh44vCkH.js";import{I as K,a as F}from"./icon-FszQmWVN.js";import"./index-BmocOEUj.js";import{I as $}from"./icon-button-DxSYWoFH.js";import{P as T,F as E,N as w,G as C}from"./index-ByifSpfC.js";import{F as P}from"./focus-indicator-DesOnyyZ.js";import{a as U,S as M}from"./state-layer-COSQHCpS.js";import{f as q}from"./base-button-adapter-BS886vuU.js";const N=`${k}tab-bar`,z={DISABLED:"disabled",ACTIVE_TAB:"active-tab",VERTICAL:"vertical",STACKED:"stacked",CLUSTERED:"clustered",SECONDARY:"secondary",INVERTED:"inverted",AUTO_ACTIVATE:"auto-activate",SCROLL_BUTTONS:"scroll-buttons"},G={...z},Y={"data-aria-label":"aria-label"},W={ROOT:".forge-tab-bar",SCROLL_CONTAINER:".scroll-container",DEFAULT_SLOT:"slot:not([name])"},X={SCROLL_BUTTON:"scroll-button"},J={CHANGE:`${N}-change`},Q={SCROLL_MARGIN:48},i={elementName:N,observedAttributes:z,attributes:G,forwardedAttributes:Y,events:J,selectors:W,classes:X,numbers:Q},x=new Map([["default",new Set(["Home","End"])],["horizontal",new Set(["ArrowLeft","ArrowRight"])],["vertical",new Set(["ArrowUp","ArrowDown"])]]),D=`${k}tab`,R={DISABLED:"disabled",SELECTED:"selected",VERTICAL:"vertical",STACKED:"stacked",SECONDARY:"secondary",INVERTED:"inverted"},Z={...R},tt={INDICATOR:".indicator"},et={},rt={SELECT:`${D}-select`},ot={EASING:"cubic-bezier(0.4, 0, 0.2, 1)"},at={ANIMATION_DURATION:250},s={elementName:D,observedAttributes:R,attributes:Z,selectors:tt,classes:et,events:rt,strings:ot,numbers:at};class it extends O{constructor(t){super(t),this._tabIndicatorElement=m(this._component,s.selectors.INDICATOR),this._stateLayerElement=m(this._component,U.elementName)}initialize(){this._component.tabIndex=this._component.selected?0:-1,this._component.setAttribute("role","tab"),this._component.setAttribute("aria-selected",this._component.selected?"true":"false")}addInteractionListener(t,e){this._component.addEventListener(t,e)}setDisabled(t){this._stateLayerElement.disabled=t,this._component.tabIndex=t?-1:this._component.selected?0:-1,this._component.setAttribute("aria-disabled",String(t)),A(this._component,t,s.attributes.DISABLED,String(t))}setSelected(t){this._component.tabIndex=t?0:-1,this._component.setAttribute("aria-selected",String(t))}animateSelected(){this._tabIndicatorElement.getAnimations().forEach(e=>e.cancel());const t=this._getKeyframes();t&&this._tabIndicatorElement.animate(t,{duration:s.numbers.ANIMATION_DURATION,easing:s.strings.EASING})}animateStateLayer(){this._stateLayerElement.playAnimation()}_getKeyframes(){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!this._component.selected)return t?[{opacity:1},{transform:"none"}]:null;const e={},o=this._component.vertical,r=this._getSelectedTabIndicator(),a=(r==null?void 0:r.getBoundingClientRect())??{},n=o?a.top:a.left,l=o?a.height:a.width,h=this._tabIndicatorElement.getBoundingClientRect(),_=o?h.top:h.left,g=o?h.height:h.width,y=o?"Y":"X",S=l/g;return!t&&n!==void 0&&_!==void 0&&!isNaN(S)?e.transform=`translate${y}(${(n-_).toFixed(4)}px) scale${y}(${S.toFixed(4)})`:e.opacity=0,[e,{transform:"none"}]}_getSelectedTabIndicator(){const t=V(this._component,i.elementName);if(t){const o=Array.from(t.querySelectorAll(s.elementName)).find(r=>r.hasAttribute(s.attributes.SELECTED));if(o)return m(o,s.selectors.INDICATOR)}return null}}class st{constructor(t){this._adapter=t,this._selected=!1,this._disabled=!1,this._vertical=!1,this._stacked=!1,this._secondary=!1,this._inverted=!1,this._clickListener=()=>this._onClick(),this._keydownListener=e=>this._onKeydown(e)}initialize(){this._adapter.initialize(),this._adapter.addInteractionListener("click",this._clickListener),this._adapter.addInteractionListener("keydown",this._keydownListener)}_onClick(){this._disabled||this._selected||this._dispatchSelectEvent()}_onKeydown(t){if(this._disabled||this._selected)return;(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._adapter.animateStateLayer(),this._dispatchSelectEvent())}_dispatchSelectEvent(){this._adapter.dispatchHostEvent(new CustomEvent(s.events.SELECT,{bubbles:!0,composed:!0}))}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,this._adapter.setDisabled(this._disabled),this._adapter.toggleHostAttribute(s.attributes.DISABLED,this._disabled))}get selected(){return this._selected}set selected(t){this._selected!==t&&(this._selected=t,this._adapter.setSelected(this._selected),this._adapter.animateSelected(),this._adapter.toggleHostAttribute(s.attributes.SELECTED,this._selected))}get vertical(){return this._vertical}set vertical(t){this._vertical!==t&&(this._vertical=t,this._adapter.toggleHostAttribute(s.attributes.VERTICAL,this._vertical))}get stacked(){return this._stacked}set stacked(t){this._stacked!==t&&(this._stacked=t,this._adapter.toggleHostAttribute(s.attributes.STACKED,this._stacked))}get secondary(){return this._secondary}set secondary(t){this._secondary!==t&&(this._secondary=t,this._adapter.toggleHostAttribute(s.attributes.SECONDARY,this._secondary))}get inverted(){return this._inverted}set inverted(t){this._inverted!==t&&(this._inverted=t,this._adapter.toggleHostAttribute(s.attributes.INVERTED,this._inverted))}}const nt=`<template>
  <div class="forge-tab" part="container">
    <span class="content" part="content">
      <slot name="start">
        <slot name="leading"></slot>
      </slot>
      <span class="label" part="label">
        <slot></slot>
      </span>
      <slot name="end">
        <slot name="trailing"></slot>
      </slot>
      <span class="indicator" part="indicator"></span>
    </span>
    <forge-state-layer exportparts="surface:state-layer" target=":host"></forge-state-layer>
    <forge-focus-indicator part="focus-indicator" target=":host" inward></forge-focus-indicator>
  </div>
</template>
`,ct=':host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:middle}:host([hidden]){display:none}.forge-tab{--_tab-active-color: var(--forge-tab-active-color, var(--forge-theme-primary, #3f51b5));--_tab-inactive-color: var(--forge-tab-inactive-color, var(--forge-theme-text-medium, rgba(0, 0, 0, .6)));--_tab-height: var(--forge-tab-height, 48px);--_tab-stacked-height: var(--forge-tab-stacked-height, 64px);--_tab-padding-block: var(--forge-tab-padding-block, 0);--_tab-padding-inline: var(--forge-tab-padding-inline, 0);--_tab-disabled-opacity: var(--forge-tab-disabled-opacity, .38);--_tab-indicator-color: var(--forge-tab-indicator-color, var(--_tab-active-color));--_tab-indicator-height: var(--forge-tab-indicator-height, 3px);--_tab-indicator-shape: var(--forge-tab-indicator-shape, 3px 3px 0 0);--_tab-vertical-indicator-shape: var(--forge-tab-vertical-indicator-shape, 3px 0 0 3px);--_tab-secondary-indicator-height: var(--forge-tab-secondary-indicator-height, 2px);--_tab-secondary-indicator-shape: var(--forge-tab-secondary-indicator-shape, 0);--_tab-inverted-indicator-shape: var(--forge-tab-inverted-indicator-shape, 0 0 3px 3px);--_tab-vertical-inverted-indicator-shape: var(--forge-tab-vertical-inverted-indicator-shape, 0 3px 3px 0);--_tab-container-color: var(--forge-tab-container-color, transparent);--_tab-container-height: var(--forge-tab-container-height, var(--_tab-height));--_tab-container-shape: var(--forge-tab-container-shape, 0);--_tab-content-height: var(--forge-tab-content-height, var(--_tab-height));--_tab-content-spacing: var(--forge-tab-content-spacing, var(--forge-spacing-xxsmall, 4px));--_tab-content-padding: var(--forge-tab-content-padding, var(--forge-spacing-xxsmall, 4px));--_tab-content-padding-block: var(--forge-tab-content-padding-block, var(--_tab-content-padding));--_tab-content-padding-inline: var(--forge-tab-content-padding-inline, var(--_tab-content-padding));--_tab-content-padding-inline-secondary: var(--forge-tab-content-padding-inline-secondary, var(--forge-spacing-medium, 16px));--_tab-active-focus-icon-color: var(--forge-tab-active-focus-icon-color, var(--_tab-active-color));--_tab-active-hover-icon-color: var(--forge-tab-active-hover-icon-color, var(--_tab-active-color));--_tab-active-icon-color: var(--forge-tab-active-icon-color, var(--_tab-active-color));--_tab-active-pressed-icon-color: var(--forge-tab-active-pressed-icon-color, var(--_tab-active-color));--_tab-icon-size: var(--forge-tab-icon-size, 24px);--_tab-focus-icon-color: var(--forge-tab-focus-icon-color, var(--_tab-inactive-color));--_tab-hover-icon-color: var(--forge-tab-hover-icon-color, var(--_tab-inactive-color));--_tab-icon-color: var(--forge-tab-icon-color, var(--_tab-inactive-color));--_tab-pressed-icon-color: var(--forge-tab-pressed-icon-color, var(--_tab-inactive-color));--_tab-active-focus-label-text-color: var(--forge-tab-active-focus-label-text-color, var(--_tab-active-color));--_tab-active-hover-label-text-color: var(--forge-tab-active-hover-label-text-color, var(--_tab-active-color));--_tab-active-label-text-color: var(--forge-tab-active-label-text-color, var(--_tab-active-color));--_tab-active-pressed-label-text-color: var(--forge-tab-active-pressed-label-text-color, var(--_tab-active-color));--_tab-focus-label-text-color: var(--forge-tab-focus-label-text-color, var(--_tab-inactive-color));--_tab-hover-label-text-color: var(--forge-tab-hover-label-text-color, var(--_tab-inactive-color));--_tab-label-text-color: var(--forge-tab-label-text-color, var(--_tab-inactive-color));--_tab-pressed-label-text-color: var(--forge-tab-pressed-label-text-color, var(--_tab-inactive-color))}.forge-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border:none;outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;background:transparent;text-decoration:none;width:100%;position:relative;padding-block:var(--_tab-padding-block);padding-inline:var(--_tab-padding-inline);margin:0;z-index:0;background-color:var(--_tab-container-color);color:var(--_tab-label-text-color);min-height:var(--_tab-container-height)}.forge-tab::-moz-focus-inner{padding:0;border:0}.forge-tab ::slotted([slot=leading]),.forge-tab ::slotted([slot=trailing]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_tab-icon-color);font-size:var(--_tab-icon-size);width:var(--_tab-icon-size);height:var(--_tab-icon-size)}.forge-tab:hover{color:var(--_tab-hover-label-text-color);cursor:pointer}.forge-tab:hover ::slotted([slot=leading]),.forge-tab:hover ::slotted([slot=trailing]){color:var(--_tab-hover-icon-color)}.forge-tab .content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;white-space:nowrap;transition:.15s color linear;max-height:calc(var(--_tab-content-height) + 2 * var(--_tab-content-padding-block));min-height:var(--_tab-content-height);width:100%;padding-block:var(--_tab-content-padding-block);padding-inline:var(--_tab-content-padding-inline);gap:var(--_tab-content-spacing)}.forge-tab .content .label{display:inline-block;line-height:1}.forge-tab .indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_tab-indicator-color);border-radius:var(--_tab-indicator-shape);height:var(--_tab-indicator-height);min-width:100%;inset:auto 0 0;opacity:0}:host,::slotted(*){white-space:nowrap}forge-focus-indicator{--forge-focus-indicator-color: var(--_tab-active-color);--forge-focus-indicator-shape: 8px}forge-state-layer{--forge-state-layer-color: var(--_tab-inactive-color)}:host(:focus) .forge-tab{color:var(--_tab-focus-label-text-color)}:host(:focus) .forge-tab ::slotted([slot=leading]),:host(:focus) .forge-tab ::slotted([slot=trailing]){color:var(--_tab-focus-icon-color)}:host(:active) .forge-tab{color:var(--_tab-pressed-label-text-color);outline:none}:host(:active) .forge-tab ::slotted([slot=leading]),:host(:active) .forge-tab ::slotted([slot=trailing]){color:var(--_tab-pressed-icon-color)}:host([disabled]){cursor:not-allowed}:host([disabled]) .forge-tab{opacity:var(--_tab-disabled-opacity);pointer-events:none}:host([selected]) .forge-tab{color:var(--_tab-active-label-text-color)}:host([selected]) .forge-tab ::slotted([slot=start]),:host([selected]) .forge-tab ::slotted([slot=end]),:host([selected]) .forge-tab ::slotted([slot=leading]),:host([selected]) .forge-tab ::slotted([slot=trailing]){color:var(--_tab-active-icon-color)}:host([selected]) .forge-tab:hover{color:var(--_tab-active-hover-label-text-color)}:host([selected]) .forge-tab:hover ::slotted([slot=start]),:host([selected]) .forge-tab:hover ::slotted([slot=end]),:host([selected]) .forge-tab:hover ::slotted([slot=leading]),:host([selected]) .forge-tab:hover ::slotted([slot=trailing]){color:var(--_tab-active-hover-icon-color)}:host([selected]) .forge-tab .indicator{opacity:1}:host([selected]) forge-state-layer{--forge-state-layer-color: var(--_tab-active-color)}:host([selected]:not([vertical])) forge-focus-indicator{--forge-focus-indicator-offset-block: 0 calc(var(--_tab-indicator-height) + 1px)}:host([selected]:focus) .forge-tab{color:var(--_tab-active-focus-label-text-color)}:host([selected]:focus) .forge-tab ::slotted([slot=leading]),:host([selected]:focus) .forge-tab ::slotted([slot=trailing]){color:var(--_tab-active-focus-icon-color)}:host([selected]:active) .forge-tab{color:var(--_tab-active-pressed-label-text-color)}:host([selected]:active) .forge-tab ::slotted([slot=leading]),:host([selected]:active) .forge-tab ::slotted([slot=trailing]){color:var(--_tab-active-pressed-icon-color)}:host([stacked]) .forge-tab{--_tab-height: var(--_tab-stacked-height)}:host([stacked]) .forge-tab .content{flex-direction:column}:host([vertical]) .forge-tab{--_tab-padding-inline: var(--forge-tab-padding-inline, 0);width:100%;flex-direction:row;border-bottom:none}:host([vertical]) .forge-tab .content{width:100%;min-height:100%}:host([vertical]) .forge-tab .indicator{height:100%;min-width:var(--_tab-indicator-height);inset:0 0 0 auto}:host([vertical]) forge-focus-indicator{--forge-focus-indicator-offset-inline: 0 calc(var(--_tab-indicator-height) + 1px)}:host([vertical]) .forge-tab{--_tab-indicator-shape: var(--_tab-vertical-indicator-shape)}:host([inverted]) .forge-tab{--_tab-indicator-shape: var(--_tab-inverted-indicator-shape)}:host([inverted]) .indicator{inset:0 0 auto;transform-origin:top left}:host([inverted][vertical]) .forge-tab{--_tab-indicator-shape: var(--_tab-vertical-inverted-indicator-shape)}:host([inverted][vertical]) .indicator{inset:0 auto 0 0}';var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,u=(b,t,e,o)=>{for(var r=o>1?void 0:o?dt(t,e):t,a=b.length-1,n;a>=0;a--)(n=b[a])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&lt(t,e,r),r};let p=class extends L{static get observedAttributes(){return Object.values(s.observedAttributes)}constructor(){super(),I(this,nt,ct),this._core=new st(new it(this))}connectedCallback(){this._core.initialize()}attributeChangedCallback(b,t,e){switch(b){case s.observedAttributes.DISABLED:this.disabled=d(e);break;case s.observedAttributes.SELECTED:this.selected=d(e);break;case s.observedAttributes.VERTICAL:this.vertical=d(e);break;case s.observedAttributes.STACKED:this.stacked=d(e);break;case s.observedAttributes.SECONDARY:this.secondary=d(e);break;case s.observedAttributes.INVERTED:this.inverted=d(e);break}}};u([c()],p.prototype,"disabled",2);u([c()],p.prototype,"selected",2);u([c()],p.prototype,"vertical",2);u([c()],p.prototype,"stacked",2);u([c()],p.prototype,"secondary",2);u([c()],p.prototype,"inverted",2);p=u([B({name:s.elementName,dependencies:[P,M]})],p);class bt extends O{constructor(t){super(t),this._defaultSlotElement=m(this._component,i.selectors.DEFAULT_SLOT),this._rootElement=m(this._component,i.selectors.ROOT),this._scrollContainer=m(this._component,i.selectors.SCROLL_CONTAINER)}initialize(){this._forwardObserver=q(this._component,Object.keys(i.forwardedAttributes),(t,e)=>{A(this._scrollContainer,!!e,i.forwardedAttributes[t],e??void 0)})}destroy(){var t;(t=this._forwardObserver)==null||t.disconnect(),this._forwardObserver=void 0}initializeContainerSizeObserver(t){this._resizeObserver=new ResizeObserver(()=>t()),this._resizeObserver.observe(this._component)}initializeScrollObserver(t){this._scrollContainer.addEventListener("scroll",t,{passive:!0})}destroyContainerSizeObserver(){var t;(t=this._resizeObserver)==null||t.disconnect(),this._resizeObserver=void 0}destroyScrollObserver(t){this._scrollContainer.removeEventListener("scroll",t,{passive:!0})}setVertical(t){A(this._scrollContainer,!!t,"aria-orientation","vertical")}setScrollBackwardButtonListener(t){var e;(e=this._backwardScrollButton)==null||e.addEventListener("click",t)}setScrollForwardButtonListener(t){var e;(e=this._forwardScrollButton)==null||e.addEventListener("click",t)}addSlotListener(t){this._defaultSlotElement.addEventListener("slotchange",t)}getTabs(){return Array.from(this._component.querySelectorAll(s.elementName))}async tryScrollTabIntoView(t){if(await new Promise(requestAnimationFrame),!t.isConnected||!t.selected&&!t.matches(":focus"))return;const e=this._component.vertical,o=e?this._scrollContainer.offsetTop:this._scrollContainer.offsetLeft,r=e?t.offsetTop:t.offsetLeft,a=e?t.offsetHeight:t.offsetWidth,n=e?this._scrollContainer.scrollTop:this._scrollContainer.scrollLeft,l=e?this._scrollContainer.offsetHeight:this._scrollContainer.offsetWidth,h=r-(i.numbers.SCROLL_MARGIN+o),_=r+a-l+(i.numbers.SCROLL_MARGIN-o),g=Math.min(h,Math.max(_,n)),y=t.matches(":focus")?"smooth":"instant";this._scrollContainer.scrollTo({behavior:y,[e?"left":"top"]:0,[e?"top":"left"]:g})}getScrollState(){const{scrollHeight:t,scrollWidth:e,scrollLeft:o,scrollTop:r,clientHeight:a,clientWidth:n}=this._scrollContainer,l=this._component.vertical?a+r:n+o,h=this._component.vertical?t:e,_=l===h;return{isScrolledStart:(this._component.vertical?l-a:l-n)===0,isScrolledEnd:_}}isScrollable(){const{scrollHeight:t,scrollWidth:e,clientHeight:o,clientWidth:r}=this._scrollContainer;return this._component.vertical?t>o:e>r}setScrollButtons(t){var e,o;t?(this._backwardScrollButton=this._createScrollButton(this._component.vertical?T.name:E.name),this._rootElement.insertAdjacentElement("afterbegin",this._backwardScrollButton),this._forwardScrollButton=this._createScrollButton(this._component.vertical?w.name:C.name),this._rootElement.insertAdjacentElement("beforeend",this._forwardScrollButton)):((e=this._backwardScrollButton)==null||e.remove(),this._backwardScrollButton=void 0,(o=this._forwardScrollButton)==null||o.remove(),this._forwardScrollButton=void 0)}syncScrollButtons({backwardEnabled:t,forwardEnabled:e}){var o,r;if(this._backwardScrollButton){const a=!t;a&&this._backwardScrollButton.matches(":focus")&&((o=this._forwardScrollButton)==null||o.focus()),this._backwardScrollButton.disabled=a}if(this._forwardScrollButton){const a=!e;a&&this._forwardScrollButton.matches(":focus")&&((r=this._backwardScrollButton)==null||r.focus()),this._forwardScrollButton.disabled=a}}scroll(t){const e=this._component.vertical?this._scrollContainer.offsetHeight:this._scrollContainer.offsetWidth;this._scrollContainer.scrollBy({behavior:"smooth",[this._component.vertical?"top":"left"]:e*(t==="forward"?1:-1)})}updateScrollButtonIcons(t){var r,a;const e=(r=this._backwardScrollButton)==null?void 0:r.querySelector("forge-icon");e&&(e.name=t?T.name:E.name);const o=(a=this._forwardScrollButton)==null?void 0:a.querySelector("forge-icon");o&&(o.name=t?w.name:C.name)}_createScrollButton(t){const e=document.createElement("forge-icon-button");e.classList.add(i.classes.SCROLL_BUTTON),e.shape="squared",e.type="button",e.tabIndex=-1,e.setAttribute("aria-hidden","true");const o=document.createElement("forge-icon");return o.name=t,e.appendChild(o),e}}class ht{constructor(t){this._adapter=t,this._isInitialized=!1,this._disabled=!1,this._vertical=!1,this._clustered=!1,this._stacked=!1,this._secondary=!1,this._inverted=!1,this._autoActivate=!1,this._scrollButtons=!1,this._tabs=[],this._scrollButtonsVisible=!1,this._tabsChangedListener=()=>this._onTabsChanged(),this._tabSelectedListener=e=>this._onTabSelected(e),this._keydownListener=e=>this._onKeydown(e),this._resizeListener=()=>this._onResize(),this._scrollListener=()=>this._onScroll(),this._scrollBackwardButtonListener=()=>this._onScrollBackward(),this._scrollForwardButtonListener=()=>this._onScrollForward()}initialize(){this._adapter.initialize(),this._adapter.addSlotListener(this._tabsChangedListener),this._adapter.addHostListener(s.events.SELECT,this._tabSelectedListener),this._adapter.addHostListener("keydown",this._keydownListener),this._adapter.setVertical(this._vertical),this._scrollButtons&&(this._adapter.initializeContainerSizeObserver(this._resizeListener),this._adapter.initializeScrollObserver(this._scrollListener),this._updateScrollState()),this._tryScrollActiveTabIntoView(),this._isInitialized=!0}destroy(){this._adapter.destroy(),this._adapter.destroyContainerSizeObserver(),this._adapter.destroyScrollObserver(this._scrollListener),this._isInitialized=!1}async _onTabsChanged(){this._tabs=this._adapter.getTabs(),this._syncTabState(),this._tryScrollActiveTabIntoView()}_onTabSelected(t){this._selectTab(t.target)}async _onKeydown(t){var a,n;const e=this._vertical?"vertical":"horizontal";if(!(((a=x.get("default"))==null?void 0:a.has(t.key))||((n=x.get(e))==null?void 0:n.has(t.key))))return;t.preventDefault();let r=-1;if(t.key==="Home")r=this._tabs.findIndex(l=>!l.disabled);else if(t.key==="End")r=this._tabs.reduceRight((l,h,_)=>!h.disabled&&l===-1?_:l,-1);else{const l=this._tabs.findIndex(g=>g.matches(":focus")),h=t.key==="ArrowLeft"||t.key==="ArrowUp",_=g=>{var S;r=g+(h?-1:1),r=r<0?this._tabs.length-1:r%this._tabs.length,!this._tabs.every(H=>H.disabled)&&((S=this._tabs[r])!=null&&S.disabled)&&_(r)};_(l)}r!==-1&&(this._autoActivate?this._selectTab(this._tabs[r]):(this._tabs[r].focus({preventScroll:!0}),await this._adapter.tryScrollTabIntoView(this._tabs[r])))}async _selectTab(t,e=!0){if(!t||t.disabled)return;const o=this._tabs.find(r=>r.selected);if(o!==t){if(e){const r=this._tabs.indexOf(t),a=new CustomEvent(i.events.CHANGE,{detail:{index:r},bubbles:!0,cancelable:!0,composed:!0});if(this._adapter.dispatchHostEvent(a),a.defaultPrevented)return}t.selected=!0,t.focus({preventScroll:!0}),await this._adapter.tryScrollTabIntoView(t),o&&(o.selected=!1),this._activeTab=this._tabs.indexOf(t)}}_syncTabState(){this._tabs.forEach((t,e)=>{t.selected=e===this._activeTab,this._disabled&&(t.disabled=this._disabled),t.vertical=this._vertical,t.stacked=this._stacked,t.secondary=this._secondary,t.inverted=this._inverted})}_onResize(){this._detectScrollableStatus()}_onScroll(){this._updateScrollState()}_onScrollBackward(){this._adapter.scroll("backward")}_onScrollForward(){this._adapter.scroll("forward")}_detectScrollableStatus(){const t=this._adapter.isScrollable();this._scrollButtonsVisible!==t&&(this._adapter.setScrollButtons(t),t?(this._adapter.initializeScrollObserver(this._scrollListener),this._updateScrollState(),this._adapter.setScrollBackwardButtonListener(this._scrollBackwardButtonListener),this._adapter.setScrollForwardButtonListener(this._scrollForwardButtonListener)):this._adapter.destroyScrollObserver(this._scrollListener),this._scrollButtonsVisible=t)}_updateScrollState(){const{isScrolledEnd:t,isScrolledStart:e}=this._adapter.getScrollState(),o={backwardEnabled:!e,forwardEnabled:!t};this._adapter.syncScrollButtons(o)}_tryScrollActiveTabIntoView(){this._tabScrollAnimationFrame&&window.cancelAnimationFrame(this._tabScrollAnimationFrame),this._tabScrollAnimationFrame=window.requestAnimationFrame(()=>{this._tabScrollAnimationFrame=void 0,this._adapter.isScrollable()&&typeof this._activeTab=="number"&&this._activeTab>=0&&this._tabs[this._activeTab]&&this._adapter.tryScrollTabIntoView(this._tabs[this._activeTab])})}get disabled(){return this._disabled}set disabled(t){t=!!t,this._disabled!==t&&(this._disabled=t,this._tabs.forEach(e=>e.disabled=this._disabled),this._adapter.toggleHostAttribute(i.attributes.DISABLED,this._disabled))}get activeTab(){return this._activeTab}set activeTab(t){if(this._activeTab!==t)if(this._activeTab=t??void 0,typeof this._activeTab=="number"){const e=this._tabs[this._activeTab];this._selectTab(e,!1),this._adapter.setHostAttribute(i.attributes.ACTIVE_TAB,String(this._activeTab))}else this._tabs.forEach(e=>e.selected=!1),this._adapter.removeHostAttribute(i.attributes.ACTIVE_TAB)}get vertical(){return this._vertical}set vertical(t){t=!!t,this._vertical!==t&&(this._vertical=t,this._isInitialized&&this._adapter.setVertical(this._vertical),this._tabs.forEach(e=>e.vertical=this._vertical),this._scrollButtonsVisible&&this._adapter.updateScrollButtonIcons(this._vertical),this._adapter.toggleHostAttribute(s.attributes.VERTICAL,this._vertical))}get clustered(){return this._clustered}set clustered(t){t=!!t,this._clustered!==t&&(this._clustered=t,this._adapter.toggleHostAttribute(i.attributes.CLUSTERED,this._clustered))}get stacked(){return this._stacked}set stacked(t){t=!!t,this._stacked!==t&&(this._stacked=t,this._tabs.forEach(e=>e.stacked=this._stacked),this._adapter.toggleHostAttribute(i.attributes.STACKED,this._stacked))}get secondary(){return this._secondary}set secondary(t){t=!!t,this._secondary!==t&&(this._secondary=t,this._tabs.forEach(e=>e.secondary=this._secondary),this._adapter.toggleHostAttribute(i.attributes.SECONDARY,this._secondary))}get inverted(){return this._inverted}set inverted(t){t=!!t,this._inverted!==t&&(this._inverted=t,this._tabs.forEach(e=>e.inverted=this._inverted),this._adapter.toggleHostAttribute(i.attributes.INVERTED,this._inverted))}get autoActivate(){return this._autoActivate}set autoActivate(t){t=!!t,this._autoActivate!==t&&(this._autoActivate=t,this._adapter.toggleHostAttribute(i.attributes.AUTO_ACTIVATE,this._autoActivate))}get scrollButtons(){return this._scrollButtons}set scrollButtons(t){t=!!t,this._scrollButtons!==t&&(this._scrollButtons=!!t,this._isInitialized&&(this._scrollButtons?(this._adapter.initializeContainerSizeObserver(this._resizeListener),this._adapter.initializeScrollObserver(this._scrollListener),this._detectScrollableStatus(),this._updateScrollState(),this._tryScrollActiveTabIntoView()):(this._adapter.destroyContainerSizeObserver(),this._adapter.destroyScrollObserver(this._scrollListener),this._adapter.setScrollButtons(this._scrollButtons),this._scrollButtonsVisible=!1)),this._adapter.setHostAttribute(i.attributes.SCROLL_BUTTONS,String(this._scrollButtons)))}}const _t=`<template>
  <div class="forge-tab-bar" part="container">
    <div role="tablist" class="scroll-container" part="scroll-container">
      <slot></slot>
    </div>
  </div>
</template>
`,ft=":host{position:relative;display:block}:host([hidden]){display:none}.forge-tab-bar{--_tab-bar-justify: var(--forge-tab-bar-justify, space-between);--_tab-bar-stretch: var(--forge-tab-bar-stretch, 1);--_tab-bar-divider-color: var(--forge-tab-bar-divider-color, var(--forge-theme-outline, #e0e0e0));--_tab-bar-divider-thickness: var(--forge-tab-bar-divider-thickness, 1px)}.forge-tab-bar{position:relative;display:grid;grid-template-columns:auto 1fr auto;max-width:100%;max-height:100%;align-items:center;border-bottom:var(--_tab-bar-divider-thickness) solid var(--_tab-bar-divider-color)}.scroll-container{position:relative;display:flex;justify-content:var(--_tab-bar-justify);align-items:flex-end;box-sizing:border-box;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;grid-column:2}.scroll-container::-webkit-scrollbar{display:none}::slotted(*){flex:var(--_tab-bar-stretch)}::slotted([selected]){z-index:1}forge-icon-button{--forge-icon-button-shape-squared: 0px}:host([vertical]) .forge-tab-bar{grid-template-columns:none;grid-template-rows:auto 1fr auto;align-items:initial;border-bottom:none;border-right:var(--_tab-bar-divider-thickness) solid var(--_tab-bar-divider-color);height:100%}:host([vertical]) .scroll-container{display:inline-flex;flex-direction:column;align-items:stretch;gap:0;grid-column:auto;grid-row:2}:host([vertical]) .scroll-button{justify-self:center}:host([inverted]:not([vertical])) .forge-tab-bar{border-bottom:none;border-top:variale(divider-thickness) solid var(--_tab-bar-divider-color)}:host([inverted][vertical]) .forge-tab-bar{border-bottom:none;border-top:var(--_tab-bar-divider-thickness) solid var(--_tab-bar-divider-color)}:host([clustered]) .forge-tab-bar{--_tab-bar-justify: var(--forge-tab-bar-justify, flex-start);--_tab-bar-stretch: var(--forge-tab-bar-stretch, 0)}:host([clustered=start]) .forge-tab-bar{--_tab-bar-justify: var(--forge-tab-bar-justify, flex-start)}:host([clustered=center]) .forge-tab-bar{--_tab-bar-justify: var(--forge-tab-bar-justify, center)}:host([clustered=end]) .forge-tab-bar{--_tab-bar-justify: var(--forge-tab-bar-justify, flex-end)}";var vt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,v=(b,t,e,o)=>{for(var r=o>1?void 0:o?pt(t,e):t,a=b.length-1,n;a>=0;a--)(n=b[a])&&(r=(o?n(t,e,r):n(r))||r);return o&&r&&vt(t,e,r),r};let f=class extends L{static get observedAttributes(){return Object.values(i.observedAttributes)}constructor(){super(),K.define([E,C,T,w]),I(this,_t,ft),this._core=new ht(new bt(this))}connectedCallback(){this._core.initialize()}disconnectedCallback(){this._core.destroy()}attributeChangedCallback(b,t,e){switch(b){case i.observedAttributes.DISABLED:this.disabled=d(e);break;case i.observedAttributes.ACTIVE_TAB:this.activeTab=e?j(e):void 0;break;case i.observedAttributes.VERTICAL:this.vertical=d(e);break;case i.observedAttributes.CLUSTERED:this.clustered=d(e);break;case i.observedAttributes.STACKED:this.stacked=d(e);break;case i.observedAttributes.SECONDARY:this.secondary=d(e);break;case i.observedAttributes.INVERTED:this.inverted=d(e);break;case i.observedAttributes.AUTO_ACTIVATE:this.autoActivate=d(e);break;case i.observedAttributes.SCROLL_BUTTONS:this.scrollButtons=d(e);break}}};v([c()],f.prototype,"disabled",2);v([c()],f.prototype,"activeTab",2);v([c()],f.prototype,"vertical",2);v([c()],f.prototype,"clustered",2);v([c()],f.prototype,"stacked",2);v([c()],f.prototype,"secondary",2);v([c()],f.prototype,"inverted",2);v([c()],f.prototype,"autoActivate",2);v([c()],f.prototype,"scrollButtons",2);f=v([B({name:i.elementName,dependencies:[p,$,F]})],f);
