import{j as e,M as s,T as a,C as i}from"./index-B2WJr8d7.js";import{useMDXComponents as o}from"./index-B4LwtRoR.js";import{C as l}from"./CustomArgTypes-CKiyrbEj.js";import{D as c,a as d,C as m}from"./DatePicker.stories-CHQhSC2o.js";import"./iframe-CeomP5zY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";import"./utils-DAdTVAL1.js";import"./lit-element-B3QVTycr.js";import"./lit-html-CuBe1DX_.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./feature-detection-C61kIZu7.js";import"./date-picker-GGSwqZuP.js";import"./constants-DHnR0122.js";import"./index-RsKXMDm2.js";import"./calendar-DdBk9cAL.js";import"./base-adapter-B_B1W7NX.js";import"./tooltip-CuraUvU8.js";import"./utils-CRxrUqQD.js";import"./overlay-CLYkgEZv.js";import"./index-CiLSBptl.js";import"./with-longpress-listener-D4mCqU-o.js";import"./dismissible-stack-BOibH_v8.js";import"./with-default-aria-COlelyab.js";import"./a11y-utils-CCSbmmS7.js";import"./focus-indicator-DydcbRnf.js";import"./state-layer-Y8UVngaT.js";import"./event-utils-C1SDeUaq.js";import"./button-7EoU3XJS.js";import"./icon-DNSPAaK0.js";import"./base-button-adapter-BvyEvlN7.js";import"./with-label-aware-CbEUrhML.js";import"./icon-button-DJSm0po0.js";import"./popover-4D_UpSgk.js";import"./base-date-picker-core-UuttSmAK.js";import"./a11y-BxM9_46k.js";import"./text-field-D-jVfukH.js";import"./base-field-BDCxUf4S.js";import"./label-W_tr_-w0.js";import"./button-toggle-group-BIaWvq7W.js";import"./with-form-associated-BgRoomBE.js";import"./checkbox-CZ4HhXrD.js";import"./switch-CVhsVTET.js";function r(n){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"Date pickers are used to allow users to select a date from a calendar."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h2,{id:"custom-date-format",children:"Custom Date Format"}),`
`,e.jsxs(t.p,{children:["Input masking is enabled by default to ensure the user enters the date in the correct format, but you can also customize the date format via the ",e.jsx(t.code,{children:"parseCallback"}),", ",e.jsx(t.code,{children:"formatCallback"}),`,
and `,e.jsx(t.code,{children:"maskFormat"})," properties."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsxs(t.p,{children:["In the example above, the ",e.jsx(t.code,{children:"parseCallback"})," function is used to parse the date string into a ",e.jsx(t.code,{children:"Date"})," object, and the ",e.jsx(t.code,{children:"formatCallback"}),` function is used to format the date object into a string
using the `,e.jsx(t.code,{children:"YYYY-MM-DD"})," format. You will also need to set the ",e.jsx(t.code,{children:"mask-format"})," attribute to ",e.jsx(t.code,{children:"YYYY-MM-DD"})," to enable input masking support."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`function parseCallback(str: string): Date | null {
  if (!str) {
    return null;
  }

  const split = str.split('-');

  if (split.length !== 3) {
    return null;
  }

  const yyyy = +split[0];
  const mm = +split[1];
  const dd = split[2].indexOf('T') ? +split[2].split('T')[0] : +split[2];

  if (!yyyy || isNaN(yyyy) || !mm || isNaN(mm) || !dd || isNaN(dd)) {
    return null;
  }

  return new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
}

function formatCallback(date: Date): string | null {
  return date ? date.toISOString().split('T')[0] : null;
}
`})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"When using a screen reader, ensure keyboard navigation in the calendar is announced."}),`
`,e.jsxs(t.li,{children:["Be sure that you add the proper aria-label to the ",e.jsx(t.code,{children:"<input>"})," element if necessary."]}),`
`,e.jsxs(t.li,{children:["The date picker component will add the following ARIA attributes to the ",e.jsx(t.code,{children:"<input>"})," element for you:",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"aria-live"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"aria-atomic"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"aria-haspopup"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"aria-expanded"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"aria-owns"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"aria-disabled"})}),`
`]}),`
`]}),`
`]})]})}function ie(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{ie as default};
