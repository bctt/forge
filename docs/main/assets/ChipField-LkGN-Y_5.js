import{j as e,M as s,T as a,C as o}from"./index-DcksbLeB.js";import{useMDXComponents as n}from"./index-BW1dMrzB.js";import{C as l}from"./CustomArgTypes-DSfqBLlu.js";import{C as p,D as d,W as c}from"./ChipField.stories-YTn_vaBP.js";import"./iframe-crPFbIFC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-BpDjixmL.js";import"./lit-element-JplMEnZc.js";import"./lit-html-paDGiEfB.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./index-Cf3axooF.js";import"./v4-CQkTLCs1.js";import"./ref-DJjbfkOF.js";import"./directive-helpers-DcB0QpIl.js";import"./feature-detection-DRCh51Sa.js";import"./autocomplete-DFsIZV9P.js";import"./constants-9n5_0r7k.js";import"./base-adapter-B6TJxM93.js";import"./index-ByifSpfC.js";import"./divider-75u-P60s.js";import"./icon-DB7kP3Ec.js";import"./index-BmocOEUj.js";import"./linear-progress-CqfIuBkR.js";import"./with-default-aria-B0dk5gj8.js";import"./a11y-utils-DJ_tX8xT.js";import"./list-Bv7kjVDD.js";import"./state-layer-Bf3rUq66.js";import"./focus-indicator-COi7jdIi.js";import"./list-dropdown-aware-core-Ch0HCi5M.js";import"./list-dropdown-CJm_oFgW.js";import"./event-utils-C1SDeUaq.js";import"./popover-DHJf1hjV.js";import"./overlay-D0uIIChk.js";import"./with-longpress-listener-BdUe1dXe.js";import"./dismissible-stack-BWoWS1Vy.js";import"./skeleton-D2S3-1Sc.js";import"./a11y-BxM9_46k.js";import"./text-field-9UjuK6J4.js";import"./base-field-DSt6Q--T.js";import"./label-BQDo_6Ok.js";import"./button-CTEnnZLo.js";import"./base-button-adapter-BiKAydtT.js";import"./with-label-aware-OEbK3wHg.js";import"./button-toggle-group-CgQVCgmR.js";import"./with-form-associated-Bje5Hee1.js";import"./checkbox-BuDarGh4.js";import"./icon-button-DxiF-tf5.js";import"./switch-JIh-AUnA.js";import"./tooltip-rAGXZlY6.js";import"./chip-set-CQwT8fjA.js";function r(t){const i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(a,{}),`
`,e.jsx(i.p,{children:"Chip fields are a specialized variant of text field that allows users to input multiple values in a single field and represent them as chips."}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h2,{id:"deprecation-notice",children:"Deprecation Notice"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"<forge-chip-field>"})," component is deprecated and will be removed in a future release. Existing components such as ",e.jsx(i.code,{children:"<forge-text-field>"}),` and
`,e.jsx(i.code,{children:"<forge-select>"})," will be able to be used to create similar functionality which removes the current need for this specialized component."]}),`
`,e.jsx(i.h2,{id:"with-autocomplete",children:"With Autocomplete"}),`
`,e.jsx(i.p,{children:"It is common to use an autocomplete component with a chip field to provide suggestions to the user as they type."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Add an ",e.jsx(i.code,{children:"id"})," to your ",e.jsx(i.code,{children:"<input>"})," element and bind it to your ",e.jsx(i.code,{children:"<label>"})," element using the for attribute on the ",e.jsx(i.code,{children:"<label>"}),"."]}),`
`,e.jsxs(i.li,{children:["Ensure that the chips that are added to the field have descriptive ",e.jsx(i.code,{children:"aria-label"})," or ",e.jsx(i.code,{children:"aria-labelledby"})," attributes."]}),`
`,e.jsxs(i.li,{children:["Make sure that the member chips that are added can be accessed via the keyboard left and right arrows.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"There should be a distinct visual cue that indicates which chip is focused"}),`
`]}),`
`]}),`
`,e.jsx(i.li,{children:"Similarly, make sure that when a chip is focused using the arrow keys, that the backspace and delete keys do remove them."}),`
`,e.jsx(i.li,{children:"Ensure that when disabled, the entire field as well as the member chips all appear visually and interactively disabled."}),`
`]})]})}function ce(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{ce as default};
