import{j as t,M as r,T as s,C as a}from"./index-DQkJAOqJ.js";import{useMDXComponents as o}from"./index-BOWymNru.js";import{C as c}from"./CustomArgTypes-nOU-1JrQ.js";import{B as l,D as h}from"./ButtonArea.stories-sEd5i5gP.js";import"./iframe-Dn0_c5e7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-Dm6iQleG.js";import"./lit-element-JplMEnZc.js";import"./lit-html-paDGiEfB.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./index-Cf3axooF.js";import"./v4-CQkTLCs1.js";import"./feature-detection-DRCh51Sa.js";import"./icon-DB7kP3Ec.js";import"./constants-9n5_0r7k.js";import"./base-adapter-B6TJxM93.js";import"./index-BmocOEUj.js";import"./index-ByifSpfC.js";import"./card-C10NOeAn.js";import"./button-area-B5zFO3WY.js";import"./focus-indicator-COi7jdIi.js";import"./state-layer-Bf3rUq66.js";import"./event-utils-C1SDeUaq.js";import"./icon-button-DxiF-tf5.js";import"./base-button-adapter-BiKAydtT.js";import"./with-label-aware-OEbK3wHg.js";import"./with-default-aria-B0dk5gj8.js";import"./a11y-utils-DJ_tX8xT.js";import"./tooltip-rAGXZlY6.js";import"./overlay-D0uIIChk.js";import"./with-longpress-listener-BdUe1dXe.js";import"./dismissible-stack-BWoWS1Vy.js";import"./decorators-DOnQS6BC.js";function i(n){const e={code:"code",h2:"h2",li:"li",ul:"ul",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l}),`
`,t.jsx(s,{}),`
`,t.jsx(a,{of:h}),`
`,t.jsx(e.h2,{id:"api",children:"API"}),`
`,t.jsx(c,{}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Always include a slotted ",t.jsx(e.code,{children:"<button>"})," element."]}),`
`,t.jsxs(e.li,{children:["Add a concise, descriptive description of the button area's action as the text content of the slotted button.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"The button's text content should preferably be the same as the visible text within the button area to reduce confusion. This can a portion of the content if long."}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Set any accessible attributes on the slotted button.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsxs(e.li,{children:["Set ",t.jsx(e.code,{children:"aria-controls"})," if the button controls another element on the page."]}),`
`,t.jsxs(e.li,{children:["Set ",t.jsx(e.code,{children:"aria-expanded"})," to reflect the state of the controlled element if appropriate."]}),`
`]}),`
`]}),`
`,t.jsxs(e.li,{children:["Verify that you can reach every nested button by keyboard navigation.",`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Ensure that there is a visual cue that the nested button is currently in focus."}),`
`]}),`
`]}),`
`,t.jsx(e.li,{children:"Verify that pressing the space bar or enter key while focused on a button will activate the button area in the same manner as if it had been clicked with a mouse."}),`
`,t.jsx(e.li,{children:"Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements."}),`
`]})]})}function N(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{N as default};
