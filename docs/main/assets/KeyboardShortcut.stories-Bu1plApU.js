import{x as c}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g as s}from"./utils-Dtr3SQvK.js";import"./constants-ngK8be3i.js";import"./keyboard-shortcut-Bgy0e1E1.js";import"./button-GqT3ELiS.js";import"./focus-indicator-C4Z5XP1c.js";import"./index-Dh0vMUMR.js";import"./state-layer-BisR_hRI.js";const o="forge-keyboard-shortcut",n=i("forge-keyboard-shortcut-activate"),p=i("activateCallback"),d={title:"Components/Keyboard Shortcut",render:e=>c`
      <forge-button variant="raised">Shortcut target</forge-button>
      <forge-keyboard-shortcut
        .activateCallback=${p}
        .keyBinding=${e.keyBinding}
        .global=${e.global}
        .allowWhileTyping=${e.allowWhileTyping}
        .preventDefault=${e.preventDefault}
        .capture=${e.capture}
        .useCode=${e.useCode}
        .disabled=${e.disabled}
        @forge-keyboard-shortcut-activate=${n}>
      </forge-keyboard-shortcut>
    `,component:o,argTypes:{...s({tagName:o,exclude:["activateCallback","target","key"]})},args:{keyBinding:"a",global:!1,allowWhileTyping:!1,preventDefault:!1,capture:!1,useCode:!1,disabled:!1}},t={};var a,r,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const u=["Demo"],S=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{t as D,S as K};
