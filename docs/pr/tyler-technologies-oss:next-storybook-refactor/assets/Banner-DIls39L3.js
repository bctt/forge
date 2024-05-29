import{j as e}from"./jsx-runtime-nzGHpiCh.js";import{u as s}from"./index-CVe7D3X0.js";import{M as r,T as a,C as i}from"./index-D3iR66YO.js";import{C as d}from"./CustomArgTypes-DwxcFTS3.js";import{B as l,D as c,T as m,C as h}from"./Banner.stories-BYgmhOkY.js";import"./iframe-BWHRoQKS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./constants-BizNZGwb.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./index-xLNEZWib.js";import"./icon-BXPRP1uV.js";import"./base-adapter-Bl3BvPgV.js";import"./index-Dh0vMUMR.js";import"./icon-button-DTv_YpXw.js";import"./base-button-foundation-CsaIOj-m.js";import"./with-label-aware-DCBgJY4W.js";import"./with-element-internals-BzJJhLl1.js";import"./focus-indicator-CEbx4qIb.js";import"./utils-CpIAGiZD.js";import"./state-layer-D4lvdfcD.js";import"./event-utils-CtHj37Lc.js";import"./tooltip-C0eym5li.js";import"./overlay-DNZGYSzQ.js";import"./with-longpress-listener-Bnlh8gvi.js";import"./dismissible-stack-CQalC8SW.js";import"./button-HzNux0mZ.js";function o(n){const t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"The banner component is intended to be used as a way to deliver a short but important message to the user. It has a high degree of emphasis and should not be used for general messaging. If you need to show less important messages, or messages scoped to a more specific section of your page, you should consider using the inline message component. instead."}),`
`,e.jsx(t.p,{children:"This component supports built-in predefined themes. It can be configured to be either static or dismissable. It can contain a button to trigger whatever action you need."}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"themed",children:"Themed"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"combined",children:"Combined"}),`
`,e.jsx(t.p,{children:"Here is an example usage combined with a forge-button component:"}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` The design for the banner specifically requests that the button's background be white. Due to
limitations in how deep a css selector can drill into a slotted element, you will need to add that
background color yourself.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["If the banner is used to display an important notification to a user, use the ",e.jsx(t.code,{children:'role="alert"'})," attribute on the ",e.jsx(t.code,{children:"<forge-banner>"})," element.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["This is equivalent to using ",e.jsx(t.code,{children:'aria-live="assertive"'}),"."]}),`
`,e.jsxs(t.li,{children:["If the banner is less urgent, you can use ",e.jsx(t.code,{children:'aria-live="polite"'})," to wait until the user is finished with their current task."]}),`
`]}),`
`]}),`
`]})]})}function K(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{K as default};
