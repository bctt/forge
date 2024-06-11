import{j as o}from"./jsx-runtime-C7jBrUDO.js";import{u as r}from"./index-2AmhpPxW.js";import{M as n,T as s,C as p}from"./index-C1Pm33MH.js";import{C as a}from"./CustomArgTypes-Bz4845Pk.js";import{P as c,D as l}from"./profile.stories-QnUk-zOB.js";import"./iframe-rh-iCwVz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DXimoRZY.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./utils-K-xB8EYC.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./constants-BMnwgo1j.js";import"./app-bar-profile-button-Brk_4Sfz.js";import"./base-adapter-CfNZnrSk.js";import"./focus-indicator-WHVXAnYX.js";import"./index-Dh0vMUMR.js";import"./state-layer-CoXZFfb6.js";import"./index-CWt9cj6R.js";import"./icon-CiIDkczu.js";import"./icon-button-HggojrXv.js";import"./base-button-adapter-Bnq3CNpx.js";import"./with-label-aware-DCBgJY4W.js";import"./with-default-aria-CsT0RfQJ.js";import"./event-utils-DC3JW7a-.js";import"./tooltip-th-W76HF.js";import"./overlay-BEOKbUF9.js";import"./with-longpress-listener-3qRvv-1T.js";import"./dismissible-stack-BU50KYzw.js";import"./badge-K8SYk47I.js";import"./menu-BGjpcIqp.js";import"./list-CoNOG_pF.js";import"./list-dropdown-aware-core-BKfIippm.js";import"./list-dropdown-DGMFTyZR.js";import"./event-utils-C1SDeUaq.js";import"./linear-progress-DNEsMXxT.js";import"./popover-BDS33NIt.js";import"./skeleton-Cd3epQA8.js";import"./a11y-BxM9_46k.js";import"./profile-card-C5jNN8AA.js";import"./base-component-delegate-9SNKJqFX.js";import"./button-CvtGTUrx.js";import"./avatar-ByFQ3pzx.js";import"./toolbar-ByH3IRVo.js";function i(e){const t={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:c}),`
`,o.jsx(s,{}),`
`,o.jsxs(t.p,{children:["For convenience Forge provides the ",o.jsx(t.code,{children:"<forge-app-bar-profile-button>"})," component. This component uses an icon-button (with a predefined avatar), and is responsible for displaying profile information within a popup. The power of this component is that it will ensure a consistent experience for users across all applications that consume it."]}),`
`,o.jsxs(t.p,{children:["If necessary, you can use the ",o.jsx(t.code,{children:"profileCardBuilder"})," API to provide custom content within the profile card popup."]}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsx(t.p,{children:"It is expected that you place this component in the end slot of the app-bar for consistency and familiarity for users."}),`
`]}),`
`,o.jsx(t.h2,{id:"common",children:"Common"}),`
`,o.jsx(t.p,{children:"A common usage of the profile button will require you to provide some basic information about the user so that it can properly display the data in a familiar location for users. This information needs to be available prior to the user opening the popup."}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t.h2,{id:"custom-content",children:"Custom content"}),`
`,o.jsx(t.p,{children:"The profile card allows for custom content to be placed within its template. This is provided in the form of a callback that you can use to generate DOM that the component will render for you. You will need to use JavaScript to accomplish this."}),`
`,o.jsx(t.p,{children:"The following snippet demonstrates basic usage in vanilla JavaScript. You could alternatively dynamically created an Angular component for instance and return a reference to its host element to render within the profile card. Don't forget to clean up the element to avoid memory leaks in this scenario."}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-typescript",children:`profileButton.profileCardBuilder = () => {
  const list = document.createElement('forge-list');
  // ...
  return list;
};
`})}),`
`,o.jsx(t.h2,{id:"api",children:"API"}),`
`,o.jsx(a,{}),`
`,o.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"The component will handle adding necessary ARIA attributes for you, as well as ensure the proper color contrast ratio is used."}),`
`]})]})}function ro(e={}){const{wrapper:t}={...r(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{ro as default};
