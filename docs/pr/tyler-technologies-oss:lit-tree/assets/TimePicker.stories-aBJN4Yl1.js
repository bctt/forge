import"./lit-element-JplMEnZc.js";import{x as p}from"./lit-html-paDGiEfB.js";import{g as l}from"./utils-DlykE8tv.js";import"./feature-detection-DRCh51Sa.js";import"./time-picker-CjeCQsLp.js";import"./index-BgGCUUFB.js";import"./text-field-AvpciTks.js";import"./base-field-CiyMRbdM.js";import"./focus-indicator-CFAnWQXZ.js";import"./label-DRSqqPa2.js";import"./button-BRfTMEeh.js";import"./state-layer-DCupnvce.js";import"./button-toggle-group-Dvk8YwvA.js";import"./checkbox-qSS9ySuf.js";import"./icon-button-nddYOp-w.js";import"./icon-B5R9pr_c.js";import"./switch-BhcBCb-7.js";import"./linear-progress-CqfIuBkR.js";import"./list-DDpi_hz2.js";import"./popover-pwa-lLuJ.js";import"./overlay-DyVP2d0e.js";import"./skeleton-D2S3-1Sc.js";const t="forge-time-picker",s={title:"Components/Time Picker",render:o=>p`
      <forge-time-picker
        .allowSeconds=${o.allowSeconds}
        .masked=${o.masked}
        .showMaskFormat=${o.showMaskFormat}
        .use24HourTime=${o.use24HourTime}
        .allowInvalidTime=${o.allowInvalidTime}
        .step=${o.step}
        .allowInput=${o.allowInput}
        .allowDropdown=${o.allowDropdown}
        .showNow=${o.showNow}
        .showHourOptions=${o.showHourOptions}
        .disabled=${o.disabled}>
        <forge-text-field>
          <input id="time-picker" type="text" />
          <label for="time-picker">Time</label>
        </forge-text-field>
      </forge-time-picker>
    `,component:t,parameters:{actions:{disable:!0}},argTypes:{...l({tagName:t,include:["allowSeconds","masked","showMaskFormat","use24HourTime","allowInvalidTime","step","allowInput","allowDropdown","showNow","showHourOptions","disabled"]})},args:{step:30,allowDropdown:!0,allowSeconds:!1,masked:!0,showHourOptions:!0,allowInput:!0}},e={};var r,i,m;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const a=["Demo"],N=Object.freeze(Object.defineProperty({__proto__:null,Demo:e,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{e as D,N as T};
