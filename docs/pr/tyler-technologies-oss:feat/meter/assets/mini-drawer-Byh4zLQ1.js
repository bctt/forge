import{C as s,j as w,k as l}from"./constants-DVLGQE2r.js";import"./feature-detection-DRCh51Sa.js";import{B as h,a as g,b as f}from"./base-drawer-BZflah9e.js";const c=`${s}mini-drawer`,v={HOVER:"hover"},m={elementName:c,attributes:v},b=`<template>
  <div class="root" part="root">
    <div class="forge-drawer mini" part="container">
      <slot name="header"></slot>
      <div class="content" part="content">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
`,u=':host{--_mini-drawer-width: var(--forge-mini-drawer-width, 56px);--_mini-drawer-min-width: var(--forge-mini-drawer-min-width, var(--_mini-drawer-width));--_mini-drawer-hover-width: var(--forge-mini-drawer-hover-width, var(--forge-drawer-width, 256px));--_mini-drawer-transition-duration: var(--forge-mini-drawer-transition-duration, var(--forge-animation-duration-short4, .2s));--_mini-drawer-transition-easing: var(--forge-mini-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_mini-drawer-transition-delay: var(--forge-mini-drawer-transition-delay, .3s);--_mini-drawer-hover-transition-duration: var(--forge-mini-drawer-hover-transition-duration, var(--forge-animation-duration-medium2, .3s));--_mini-drawer-hover-transition-easing: var(--forge-mini-drawer-hover-transition-easing, var(--_mini-drawer-transition-easing));--_mini-drawer-hover-transition-delay: var(--forge-mini-drawer-hover-transition-delay, var(--forge-animation-duration-medium2, .3s))}:host{display:grid;box-sizing:border-box;height:100%;overflow:hidden!important;width:var(--_mini-drawer-width);overflow:visible!important;--forge-divider-margin: 4px 0}:host([direction=right]){min-width:var(--_mini-drawer-width);width:auto}:host([direction=right]) .root{position:relative}:host(:not([open])){display:none}:host([hover]) .right{position:absolute;right:0}:host([hover]) .forge-drawer:hover{width:var(--_mini-drawer-hover-width)!important;transition:width var(--_mini-drawer-hover-transition-duration) var(--_mini-drawer-hover-transition-easing) var(--_mini-drawer-hover-transition-delay)}:host([hover]) .forge-drawer:hover .content{overflow:auto;overflow:overlay}.forge-drawer{--_drawer-background: var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color: var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width: var(--forge-drawer-width, 256px);--_drawer-border-width: var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration: var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, .25s));--_drawer-transition-easing: var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_drawer-transition-duration-close: var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, .2s))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translate(100%);left:auto;z-index:var(--forge-z-index-surface, 1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translate(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translate(-100%);left:0;z-index:var(--forge-z-index-surface, 1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translate(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}.root{z-index:var(--forge-z-index-surface, 1);height:100%;min-width:var(--_mini-drawer-min-width)}.forge-drawer.mini{width:var(--_mini-drawer-width);z-index:var(--forge-z-index-surface, 1);transition:width var(--_mini-drawer-transition-duration) var(--_mini-drawer-transition-easing)}.forge-drawer.mini .content{overflow:hidden}.forge-drawer.closed{width:0}';var p=Object.defineProperty,_=Object.getOwnPropertyDescriptor,x=(e,o,t,a)=>{for(var r=a>1?void 0:a?_(o,t):o,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(a?n(o,t,r):n(r))||r);return a&&r&&p(o,t,r),r};let d=class extends h{constructor(){super(),l(this,b,u),this._core=new g(new f(this))}get hover(){return this.hasAttribute("hover")}set hover(e){this.toggleAttribute("hover",e)}};d=x([w({name:m.elementName})],d);
