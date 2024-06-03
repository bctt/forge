import{C as s,D as l,E as c}from"./constants-DbwyRGxi.js";import{B as f,a as g,b as w}from"./base-drawer-ZkxOY03t.js";const b=`${s}drawer`,h={elementName:b},u=`<template>
  <div class="forge-drawer" part="root">
    <slot name="header"></slot>
    <div class="content" part="content">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
`,v=':host{display:flex;flex-direction:column;box-sizing:border-box;height:100%;overflow:hidden!important;--forge-divider-margin: 4px 0}.forge-drawer{--_drawer-background: var(--forge-drawer-background, var(--forge-theme-surface, #ffffff));--_drawer-border-color: var(--forge-drawer-border-color, var(--forge-theme-outline, #e0e0e0));--_drawer-width: var(--forge-drawer-width, 256px);--_drawer-border-width: var(--forge-drawer-border-width, var(--forge-border-thin, 1px));--_drawer-transition-duration: var(--forge-drawer-transition-duration, var(--forge-animation-duration-medium1, .25s));--_drawer-transition-easing: var(--forge-drawer-transition-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_drawer-transition-duration-close: var(--forge-drawer-transition-duration-close, var(--forge-animation-duration-short4, .2s))}.forge-drawer{width:var(--_drawer-width);height:100%;box-sizing:border-box;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;background-color:var(--_drawer-background);border-color:var(--_drawer-border-color);transition-property:transform;transition-duration:var(--_drawer-transition-duration);transition-timing-function:var(--_drawer-transition-easing)}.forge-drawer ::slotted([slot=header]){grid-row:1}.forge-drawer ::slotted([slot=footer]){grid-row:3}.forge-drawer .content{overflow-x:auto;-webkit-overflow-scrolling:"touch";display:flex;flex-direction:column;grid-row:2}.forge-drawer .content::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.forge-drawer .content::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.forge-drawer .content::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.forge-drawer .content::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.forge-drawer .content::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, var(--forge-shape-full, 9999px));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.forge-drawer .content::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.forge-drawer.left{border-right-width:var(--_drawer-border-width);border-right-style:solid}.forge-drawer.right{border-left-width:var(--_drawer-border-width);border-left-style:solid}.forge-drawer.right.closing{transform:translate(100%);left:auto;z-index:var(--forge-z-index-surface, 1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.right.closed{transform:translate(100%);right:0;left:auto;width:0;border:none}.forge-drawer.closing{transform:translate(-100%);left:0;z-index:var(--forge-z-index-surface, 1);position:absolute;top:0;right:0;transition-duration:var(--_drawer-transition-duration-close)}.forge-drawer.closed{transform:translate(-100%);left:0;width:0;border:none}.forge-drawer.no-transition{transition:none!important}@media not all and (min-resolution: .001dpcm){@supports (-webkit-appearance: none) and (stroke-color: transparent){:host([open]){transform:translateZ(0)}}}';var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,_=(i,e,a,o)=>{for(var r=o>1?void 0:o?p(e,a):e,t=i.length-1,n;t>=0;t--)(n=i[t])&&(r=(o?n(e,a,r):n(r))||r);return o&&r&&m(e,a,r),r};let d=class extends f{constructor(){super(),c(this,u,v),this._foundation=new g(new w(this))}};d=_([l({name:h.elementName})],d);
