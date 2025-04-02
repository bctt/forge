import{j as t,M as r,T as a,C as n}from"./index-Cyf37mg0.js";import{useMDXComponents as s}from"./index-C56jts5a.js";import{C as c}from"./CustomArgTypes-DyWox6lo.js";import{C as l}from"./CssOnlyInformation-6mmSP0-h.js";import{I as h,D as d,V as p,T as m,a as u,A as x,W as f,b as j,c as b,C as y}from"./IconButton.stories-B68dz991.js";import"./iframe-BMJJLdX5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-DXeqrvgL.js";import"./lit-element-B3QVTycr.js";import"./lit-html-CuBe1DX_.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./index-fxMNKkgx.js";import"./icon-D5yjdXv8.js";import"./constants-D2tqnpVB.js";import"./feature-detection-CY6TVbRZ.js";import"./base-adapter-BD6-QDkX.js";import"./index-CiLSBptl.js";import"./index-RsKXMDm2.js";import"./class-map-CuXcqkpw.js";import"./directive-CJw_OlP2.js";import"./icon-button-4fx-LScl.js";import"./base-button-adapter-cyf2Ayfh.js";import"./with-label-aware-DMDMR_5T.js";import"./with-default-aria-DEjfFCHL.js";import"./a11y-utils-DGb1vALN.js";import"./utils-CRxrUqQD.js";import"./focus-indicator-NbLDNrYT.js";import"./state-layer-sxQMIn2c.js";import"./circular-progress-_R2O5GKK.js";import"./badge-N67hmSaz.js";import"./property-2VT-dgmE.js";import"./label-BYO0DIp3.js";import"./button-CutPPNni.js";import"./button-toggle-group-C9JpSiFv.js";import"./with-form-associated-6r37SwZj.js";import"./checkbox-DwEe44-q.js";import"./switch-Clw9p9oC.js";function o(i){const e={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:h}),`
`,t.jsx(a,{}),`
`,t.jsx(e.p,{children:"Icon buttons communicate actions that users can take."}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.p,{children:"Icon buttons can be styled in different ways to indicate their purpose and emphasis level."}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h2,{id:"toggle",children:"Toggle"}),`
`,t.jsx(e.p,{children:"Icon buttons can be toggled on and off to indicate a state change."}),`
`,t.jsxs(e.p,{children:['When using a toggle icon button, ensure that you have provided an "off" icon in the default slot, and a "on" icon placed in the ',t.jsx(e.code,{children:"on"}),` slot.
The "on" icon should be visually distinct from the "off" icon to indicate the current state of the button. Typically an outlined-style icon
is used for the "off" state and a filled-style icon is used for the "on" state, but any icons can be used.`]}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h2,{id:"themed",children:"Themed"}),`
`,t.jsxs(e.p,{children:["Icon buttons can be themed to match the color scheme of the application. The following example shows a themed icon button using the ",t.jsx(e.code,{children:"theme"})," attribute:"]}),`
`,t.jsx(n,{of:u}),`
`,t.jsx(e.h2,{id:"with-anchor",children:"With Anchor"}),`
`,t.jsxs(e.p,{children:["Icon buttons can accept a slotted ",t.jsx(e.code,{children:"<a>"})," element to create a link."]}),`
`,t.jsx(n,{of:x}),`
`,t.jsx(e.h2,{id:"with-badge",children:"With Badge"}),`
`,t.jsx(e.p,{children:"Icon buttons can display a badge to indicate the number of items in a list or the number of notifications."}),`
`,t.jsx(n,{of:f}),`
`,t.jsx(e.h2,{id:"with-circular-progress",children:"With Circular Progress"}),`
`,t.jsx(e.p,{children:"It is common to place a circular progress indicator inside an icon button to indicate that an action is in progress."}),`
`,t.jsx(n,{of:j}),`
`,t.jsx(e.h2,{id:"with-label",children:"With Label"}),`
`,t.jsxs(e.p,{children:["Icons buttons can be composed with the ",t.jsx(e.code,{children:"<forge-label>"})," element to provide an accessible label for the button, as well as the correct label typography."]}),`
`,t.jsx(n,{of:b}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(c,{}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Verify that you can reach every button by keyboard navigation.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Ensure that there is a visual cue that the button is currently in focus."}),`
`,t.jsxs(e.li,{children:["Ensure that there is an ",t.jsx(e.code,{children:"aria-label"})," or ",t.jsx(e.code,{children:"aria-labelledby"})," attribute indicating the purpose of the button."]}),`
`]}),`
`]}),`
`,t.jsx(e.li,{children:"Verify that pressing the space bar or enter key while focused on a button will activate the button in the same manner as if it had been clicked with a mouse."}),`
`,t.jsx(e.li,{children:"If color conveys important information, provide additional cues for users with color perception deficiencies."}),`
`]}),`
`,t.jsx(e.h2,{id:"css-only",children:"CSS-Only"}),`
`,t.jsx(e.p,{children:"The icon-button component is also available as a CSS-only component without the need for JavaScript."}),`
`,t.jsx(n,{of:y}),`
`,t.jsx(l,{})]})}function rt(i={}){const{wrapper:e}={...s(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(o,{...i})}):o(i)}export{rt as default};
