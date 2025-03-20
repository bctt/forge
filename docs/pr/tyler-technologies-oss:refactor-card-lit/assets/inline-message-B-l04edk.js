import{C as l,j as c,B as m,k as f}from"./constants-DHnR0122.js";import{t as d}from"./feature-detection-C61kIZu7.js";const h=`${l}inline-message`,v={THEME:"theme"},p={THEME:"info"},r={elementName:h,attributes:v,defaults:p},y=`<template>
  <div class="forge-inline-message" part="root">
    <slot name="icon"></slot>
    <div class="container" part="container">
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </div>
</template>
`,b=':host{display:block}:host([hidden]){display:none}.forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-info-container-low, #e3edf7));--_inline-message-color: var(--forge-inline-message-color, var(--forge-theme-text-high, rgba(0, 0, 0, .87)));--_inline-message-shape: var(--forge-inline-message-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_inline-message-padding: var(--forge-inline-message-padding, var(--forge-spacing-small, 12px));--_inline-message-padding-inline: var(--forge-inline-message-padding-inline, var(--_inline-message-padding));--_inline-message-padding-block: var(--forge-inline-message-padding-block, var(--_inline-message-padding));--_inline-message-border-width: var(--forge-inline-message-border-width, var(--forge-border-thin, 1px));--_inline-message-border-style: var(--forge-inline-message-border-style, none);--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-info-container, #c7daf0));--_inline-message-gap: var(--forge-inline-message-gap, var(--forge-spacing-small, 12px));--_inline-message-icon-gap: var(--forge-inline-message-icon-gap, var(--_inline-message-gap));--_inline-message-content-gap: var(--forge-inline-message-content-gap, var(--_inline-message-gap));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-info-container-low, #0b3768))}.forge-inline-message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);background:var(--_inline-message-background);color:var(--_inline-message-color);border-radius:var(--_inline-message-shape);border-width:var(--_inline-message-border-width);border-style:var(--_inline-message-border-style);border-color:var(--_inline-message-border-color);display:flex;align-items:center;gap:var(--_inline-message-icon-gap);box-sizing:border-box;padding-inline:var(--_inline-message-padding-inline);padding-block:var(--_inline-message-padding-block)}.forge-inline-message .container{display:flex;flex-direction:column;gap:var(--_inline-message-content-gap)}::slotted(*){margin:0}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-font-size-scale, .875)));font-weight:var(--forge-typography-heading1-font-weight, 500);line-height:var(--forge-typography-heading1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-heading1-letter-spacing, .0178571429em);text-transform:var(--forge-typography-heading1-text-transform, inherit);text-decoration:var(--forge-typography-heading1-text-decoration, inherit)}::slotted([slot=icon]){color:var(--_inline-message-icon-color);align-self:start}:host([theme=primary]) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-primary-container-low, #e8eaf6));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-primary-container-low, #222c62));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-primary-container, #d1d5ed))}:host([theme=secondary]) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-secondary-container, #fff0c3));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-secondary-container, #8a6804));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-secondary, #ffc107))}:host([theme=tertiary]) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-tertiary-container-low, #e8ebff));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-tertiary-container-low, #213189));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-tertiary-container, #d0d7ff))}:host([theme=success]) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-success-container-low, #e6efe6));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-success-container-low, #19441b));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-success-container, #cde0ce))}:host([theme=warning]) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-warning-container-low, #f9e9e0));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-warning-container-low, #712700));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-warning-container, #f4d3c2))}:host(:is([theme=error],[theme=danger])) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-error-container-low, #f6e0e4));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-error-container-low, #5f0011));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-error-container, #ecc2c9))}:host([theme=info-secondary]) .forge-inline-message{--_inline-message-background: var(--forge-inline-message-background, var(--forge-theme-surface-container-low, #ebebeb));--_inline-message-icon-color: var(--forge-inline-message-icon-color, var(--forge-theme-on-surface-container-low, #000000));--_inline-message-border-color: var(--forge-inline-message-border-color, var(--forge-theme-surface-container, #e0e0e0))}';var _=Object.getOwnPropertyDescriptor,u=(e,a,t,i)=>{for(var o=i>1?void 0:i?_(a,t):a,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=s(o)||o);return o};let g=class extends m{constructor(){super(),f(this,y,b)}get theme(){return this.getAttribute(r.attributes.THEME)??r.defaults.THEME}set theme(e){d(this,e!==r.defaults.THEME,r.attributes.THEME,e)}};g=u([c({name:r.elementName})],g);
