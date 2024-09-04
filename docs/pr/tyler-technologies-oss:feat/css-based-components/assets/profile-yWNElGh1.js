import{j as o}from"./jsx-runtime-CFMSJ0Oo.js";import{u as r}from"./index-eZawsjBl.js";import{ae as n,af as s,ag as a}from"./index-CsV2yrIV.js";import{C as p}from"./CustomArgTypes-C9HfBMq3.js";import{P as c,D as l}from"./profile.stories-CbCHTmiR.js";import"./iframe-Da-5sk24.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./utils-CeeIIWTn.js";import"./lit-element-BOOoordI.js";import"./lit-html-BWgXkSvR.js";import"./constants-DjE6emXm.js";import"./app-bar-profile-button-Ci1kdtkF.js";import"./base-adapter-F7QHxK2H.js";import"./focus-indicator-BpCDYqsq.js";import"./index-Dh0vMUMR.js";import"./state-layer-DkOkOFSZ.js";import"./index-ByifSpfC.js";import"./icon-DHpZ4R73.js";import"./icon-button-B5lcHsAP.js";import"./base-button-adapter-BVW_ZDRM.js";import"./with-label-aware-CLWydNrR.js";import"./with-default-aria-B4PYKb3X.js";import"./tooltip-DHBxVVPY.js";import"./overlay-DasBtrG-.js";import"./with-longpress-listener-D-8wsf8o.js";import"./dismissible-stack-DUAAgggE.js";import"./badge-BtnA6UF5.js";import"./menu-DNArUS-4.js";import"./list-ER_0ZOrZ.js";import"./list-dropdown-aware-core-BegcX5HQ.js";import"./list-dropdown-CxkGRIF8.js";import"./event-utils-C1SDeUaq.js";import"./linear-progress-CVy9jv9h.js";import"./popover-BJdewMbT.js";import"./skeleton-AD7XJ-QC.js";import"./a11y-BxM9_46k.js";import"./base-component-delegate-C6iOaLFP.js";import"./avatar-9nkaewEO.js";import"./button-CoZ69e4-.js";import"./toolbar-SJpnF1yY.js";function i(t){const e={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:c}),`
`,o.jsx(s,{}),`
`,o.jsxs(e.p,{children:["For convenience Forge provides the ",o.jsx(e.code,{children:"<forge-app-bar-profile-button>"})," component. This component uses an icon-button (with a predefined avatar), and is responsible for displaying profile information within a popup. The power of this component is that it will ensure a consistent experience for users across all applications that consume it."]}),`
`,o.jsxs(e.p,{children:["If necessary, you can use the ",o.jsx(e.code,{children:"profileCardBuilder"})," API to provide custom content within the profile card popup."]}),`
`,o.jsxs(e.blockquote,{children:[`
`,o.jsx(e.p,{children:"It is expected that you place this component in the end slot of the app-bar for consistency and familiarity for users."}),`
`]}),`
`,o.jsx(e.h2,{id:"common",children:"Common"}),`
`,o.jsx(e.p,{children:"A common usage of the profile button will require you to provide some basic information about the user so that it can properly display the data in a familiar location for users. This information needs to be available prior to the user opening the popup."}),`
`,o.jsx(a,{of:l}),`
`,o.jsx(e.h2,{id:"custom-content",children:"Custom content"}),`
`,o.jsx(e.p,{children:"The profile card allows for custom content to be placed within its template. This is provided in the form of a callback that you can use to generate DOM that the component will render for you. You will need to use JavaScript to accomplish this."}),`
`,o.jsx(e.p,{children:"The following snippet demonstrates basic usage in vanilla JavaScript. You could alternatively dynamically created an Angular component for instance and return a reference to its host element to render within the profile card. Don't forget to clean up the element to avoid memory leaks in this scenario."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-typescript",children:`profileButton.profileCardBuilder = () => {
  const list = document.createElement('forge-list');
  // ...
  return list;
};
`})}),`
`,o.jsx(e.h2,{id:"api",children:"API"}),`
`,o.jsx(p,{}),`
`,o.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:"The component will handle adding necessary ARIA attributes for you, as well as ensure the proper color contrast ratio is used."}),`
`]})]})}function eo(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{eo as default};
