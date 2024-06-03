import{x as r,T as a}from"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import{a as S}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{d as P,g as A,G as E,s}from"./constants-DsWS7qYA.js";import{o as L}from"./style-map-D0ILlpbs.js";import{s as I}from"./decorators-B79PnA5z.js";import"./select-dropdown-C23JiqEJ.js";import"./linear-progress-DKdWLu37.js";import"./list-BV_o04GS.js";import"./popover-C8scOPq7.js";import"./overlay-D8q0xwMn.js";import"./index-Dh0vMUMR.js";import"./skeleton-BNerg0to.js";import"./icon-CeIYyYqo.js";import"./select-D5ukLDzm.js";import"./base-field-DBNXrmn_.js";import"./focus-indicator-wpKDCgcD.js";import"./label-D8WTt135.js";import"./button-CKiFrtXU.js";import"./state-layer-5aAa94dU.js";import"./button-toggle-group-OBwQZMTx.js";import"./checkbox-DUDmAjzq.js";import"./icon-button-dWrQYVT_.js";import"./switch-CRaGdf9W.js";const O="forge-select{max-width:256px}",i="forge-select",_=S("change"),M={title:"Components/Select",component:i,render:e=>{const p=P(e),v=p?L(p):a;return r`
      <forge-select
        .label=${e.label}
        .labelPosition=${e.labelPosition}
        .labelAlignment=${e.labelAlignment}
        .variant=${e.variant}
        .theme=${e.theme}
        .shape=${e.shape}
        .density=${e.density}
        .dense=${e.dense}
        .supportTextInset=${e.supportTextInset}
        .floatLabel=${e.floatLabel}
        .placeholder=${e.placeholder}
        .multiple=${e.multiple}
        .open=${e.open}
        ?optional=${e.optional}
        ?disabled=${e.disabled}
        ?required=${e.required}
        ?invalid=${e.invalid}
        style=${v}
        @change=${_}>
        <forge-option value="1">Option 1</forge-option>
        <forge-option value="2">Option 2</forge-option>
        <forge-option value="3">Option 3</forge-option>
        ${e.supportText.length?r`<span slot="support-text">${e.supportText}</span>`:a}
        ${e.supportTextEnd.length?r`<span slot="support-text-end">${e.supportTextEnd}</span>`:a}
      </forge-text-field>
    `},decorators:[I(O)],argTypes:{...A({tagName:i,exclude:["popoverTargetElement","popoverIcon","popoverExpanded","value","selectedIndex","options","optionBuilder","selectedTextBuilder","popupElement","beforeValueChange"],controls:{labelPosition:{control:"select",options:["inline-start","inline-end","block-start","inset","none"]},labelAlignment:{control:"select",options:["default","center","baseline","start","end"]},variant:{control:"select",options:["plain","outlined","tonal","filled","raised"]},theme:{control:"select",options:[...E,"default"]},shape:{control:"select",options:["default","rounded","squared"]},density:{control:"select",options:["default","extra-small","small","medium","large","extra-large"]},supportTextInset:{control:"select",options:["start","end","both","none"]}}}),supportText:{control:{type:"text"}},supportTextEnd:{control:{type:"text"}}},args:{label:"Label",placeholder:"",multiple:!1,labelPosition:"inset",labelAlignment:"default",variant:"outlined",theme:"default",shape:"default",density:"default",dense:!1,supportText:"",supportTextEnd:"",invalid:!1,required:!1,optional:!1,disabled:!1,floatLabel:!1,supportTextInset:"none",open:!1}},t={},o={...s,args:{labelPosition:"block-start"}},l={...s,args:{labelPosition:"inline-start"}},n={...s,args:{multiple:!0}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,f,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    labelPosition: 'block-start'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,g,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    labelPosition: 'inline-start'
  }
}`,...($=(g=l.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var T,h,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  args: {
    multiple: true
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const q=["Demo","LabelAbove","LabelInline","Multiple"],le=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,LabelAbove:o,LabelInline:l,Multiple:n,__namedExportsOrder:q,default:M},Symbol.toStringTag,{value:"Module"}));export{t as D,o as L,n as M,le as S,l as a};
