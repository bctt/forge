import{ae as e,af as n,ag as a,ah as o}from"./index-D1-4-lSV.js";import{u as s}from"./index-yFeMZfPT.js";import{C as l}from"./CustomArgTypes-BqgQg-XE.js";import{C as p,D as d,W as c}from"./ChipField.stories-BZmAVNH4.js";import"./iframe-CJQJ_dnZ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-BYbK8YLU.js";import"./lit-element-CgJqSpuc.js";import"./lit-html-paDGiEfB.js";import"./style-map-C9nPWcxA.js";import"./directive-CF8sV3Lr.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./ref-DJjbfkOF.js";import"./directive-helpers-DcB0QpIl.js";import"./constants-CFf81ck9.js";import"./autocomplete-CJL0soGc.js";import"./base-adapter-Dh44vCkH.js";import"./index-ByifSpfC.js";import"./divider-DxhaIm8U.js";import"./icon-FszQmWVN.js";import"./index-BmocOEUj.js";import"./linear-progress-DKZR2TB_.js";import"./with-default-aria-CAIVLMQ_.js";import"./list-CZ9CZlmI.js";import"./state-layer-COSQHCpS.js";import"./focus-indicator-DesOnyyZ.js";import"./list-dropdown-aware-core-CaeHXzLo.js";import"./list-dropdown-B7EP9sPF.js";import"./event-utils-C1SDeUaq.js";import"./popover-AeD9fFPd.js";import"./overlay-DUpFUxF7.js";import"./with-longpress-listener-B4oujpK4.js";import"./dismissible-stack-DVth9mRg.js";import"./skeleton-RPu_OG0b.js";import"./a11y-BxM9_46k.js";import"./text-field-C3Py5-zj.js";import"./base-field-131QGE6E.js";import"./label-DWwWn2Nz.js";import"./button-CVZhEkBO.js";import"./base-button-adapter-BS886vuU.js";import"./with-label-aware-CjYHyB6d.js";import"./button-toggle-group-C7b9_lqU.js";import"./with-form-associated-CVqCUEW0.js";import"./checkbox-BavEIv2Q.js";import"./icon-button-CSqhF-TJ.js";import"./switch-DTtl0JRG.js";import"./tooltip-ClBWJcYu.js";import"./chip-set-DlzVAbEB.js";function r(t){const i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:p}),`
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
`]})]})}function ce(t={}){const{wrapper:i}={...s(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{ce as default};
