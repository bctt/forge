import{j as e}from"./jsx-runtime-tdvS7QP1.js";import{u as s}from"./index-CYGJqqE5.js";import{M as r,T as a,C as n}from"./index-BHI_LK3P.js";import{C as d}from"./CustomArgTypes-Bn_DiUFM.js";import{B as l,D as m,T as c,C as h}from"./Banner.stories-Bg30Ukbq.js";import"./iframe-Dm9GkP7p.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-BrN94tQ9.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./index-CDQrnaq1.js";import"./icon-V4IE3JYq.js";import"./base-adapter-BIKyOSkq.js";import"./constants-C96o6uhb.js";import"./index-Dh0vMUMR.js";import"./banner-yl8ycpGC.js";import"./icon-button-CZlBA0tM.js";import"./base-button-adapter-CRi8-gKl.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria-lryJjX2Z.js";import"./event-utils-DC3JW7a-.js";import"./focus-indicator-By3BQe1w.js";import"./state-layer-b0IlkqgO.js";import"./tooltip-ujb0qApC.js";import"./overlay-BAE6BB-F.js";import"./with-longpress-listener-DSRt_cqb.js";import"./dismissible-stack-BU50KYzw.js";import"./button-D5XxdyZ6.js";function o(i){const t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"The banner component is intended to be used as a way to deliver a short but important message to the user. It has a high degree of emphasis and should not be used for general messaging. If you need to show less important messages, or messages scoped to a more specific section of your page, you should consider using the inline message component. instead."}),`
`,e.jsx(t.p,{children:"This component supports built-in predefined themes. It can be configured to be either static or dismissible. It can contain a button to trigger whatever action you need."}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"themed",children:"Themed"}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"combined",children:"Combined"}),`
`,e.jsx(t.p,{children:"Here is an example usage combined with a forge-button component:"}),`
`,e.jsx(n,{of:h}),`
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
`]})]})}function O(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{O as default};
