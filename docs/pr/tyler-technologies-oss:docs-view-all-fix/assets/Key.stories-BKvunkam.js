import{d,g as s}from"./utils-cDewhVsU.js";import"./feature-detection-ONR9WHvu.js";import"./key-item-D0H_qeRK.js";const c="forge-key",u=[{label:"Black Guillemot",value:"25%",color:"salmon"},{label:"Great Shearwater",value:"50%",color:"var(--forge-theme-success)"},{label:"Mealy Redpoll",value:"75%",color:"#abcdef"}],y={title:"Components/Key",render:l=>{const t=document.createElement("forge-key");return d(t,l),u.forEach(r=>{const e=document.createElement("forge-key-item");e.inline=l.inline,e.style.setProperty("--forge-key-item-icon-color",r.color);const n=document.createElement("span");n.textContent=r.label;const a=document.createElement("span");a.textContent=r.value,a.slot="value",e.appendChild(n),e.appendChild(a),t.appendChild(e)}),t},component:c,subcomponents:{"Key Item":"forge-key-item"},argTypes:{...s({tagName:"forge-key-item",exclude:["--forge-key-item-icon-color"]}),...s({tagName:c})},args:{inline:!1}},o={};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const g=["Demo"],v=Object.freeze(Object.defineProperty({__proto__:null,Demo:o,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{o as D,v as K};
