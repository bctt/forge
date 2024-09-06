import{j as e}from"./jsx-runtime-gdtrzl5b.js";import{u as r}from"./index-BVBmosDd.js";import{ae as a,af as s,ag as n}from"./index-BfJ3hnjl.js";import{C as l}from"./CustomArgTypes-BPt4I3-M.js";import{C as h}from"./CssOnlyInformation-qksv_CaG.js";import{A as p,D as m,F as c,W as d,C as u,a as b}from"./AppBar.stories-iZ1xRg-w.js";import"./iframe-47unJMMI.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./utils-CmNCmodr.js";import"./lit-element-Dk2-kgKT.js";import"./lit-html-DZH-Jm0H.js";import"./index-fxMNKkgx.js";import"./icon-DHpZ4R73.js";import"./constants-DjE6emXm.js";import"./base-adapter-F7QHxK2H.js";import"./index-Dh0vMUMR.js";import"./decorators-DvEJi2JG.js";import"./app-bar-profile-button-C3o1GtYT.js";import"./focus-indicator-BpCDYqsq.js";import"./state-layer-DkOkOFSZ.js";import"./index-ByifSpfC.js";import"./icon-button-DSVS47IC.js";import"./base-button-adapter-O0rbh8zo.js";import"./with-label-aware-CLWydNrR.js";import"./with-default-aria-DCLjqsVH.js";import"./tooltip-CB-SMzj2.js";import"./overlay-oQigVWsx.js";import"./with-longpress-listener-D-8wsf8o.js";import"./dismissible-stack-DUAAgggE.js";import"./badge-BtnA6UF5.js";import"./menu-CHjAGzjo.js";import"./list-tzlsEZgh.js";import"./list-dropdown-aware-core-DfUgINQ8.js";import"./list-dropdown-BVbYUUzh.js";import"./event-utils-C1SDeUaq.js";import"./linear-progress-BjLGzdmZ.js";import"./popover-DMO_rraq.js";import"./skeleton-AD7XJ-QC.js";import"./a11y-BxM9_46k.js";import"./base-component-delegate-C6iOaLFP.js";import"./avatar-9nkaewEO.js";import"./button-DJU3J9XV.js";import"./toolbar-SJpnF1yY.js";import"./expansion-panel-Da14WzAs.js";import"./divider-V8nRRqMS.js";function i(o){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:p}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"App bars are a common component used in web applications to provide a consistent location for branding, navigation, and other common elements."}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-app-bar>"})," is nothing more than a container for other add-on components, but it provides named slots and a common location for branding logo, title, and other actions."]}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:"A basic app bar just contains a title with no other elements."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"full",children:"Full"}),`
`,e.jsx(t.p,{children:"The following example shows the usage of all of the common app bar elements placed in their corresponding slots."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"themed",children:"Themed"}),`
`,e.jsxs(t.p,{children:["The app bar can be themed by providing a ",e.jsx(t.code,{children:"theme"}),` attribute. By default it will automatically use the "brand" theme and apply the appropriate colors
to itself and all slotted elements by overriding the global theme colors within the context of the app bar itself only.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Important:"}),` This means that if you adjust the global theme variables for colors, the app bar will not be affected by those changes because it
has its own theming context.`]}),`
`]}),`
`,e.jsx(t.h3,{id:"white-theme",children:"White Theme"}),`
`,e.jsxs(t.p,{children:['The app bar provides a built-in "white" theme that can be applied by setting the ',e.jsx(t.code,{children:'theme="white"'}),` attribute. This will change the background color to
white and the contrast/text color to black.`]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h3,{id:"custom-theme",children:"Custom Theme"}),`
`,e.jsxs(t.p,{children:["You can also provide a custom theme by setting the ",e.jsx(t.code,{children:'theme="custom"'}),` attribute. This will disable any global auto-theming that is built-in to the app bar
and allow you to provide your own fully custom styling. This also allows the global theme variables to cascade down into the app bar as they normally would
because the app bar is no longer overriding the global theme variables.`]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Ensure that the user can interact with each sub-component of the app bar using only the keyboard."}),`
`,e.jsxs(t.li,{children:["The app bar component will use an ",e.jsx(t.code,{children:"<h1>"})," for the title by default. If you override the title slot content, be sure to use the proper heading element.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Only ",e.jsx(t.strong,{children:"one"})," ",e.jsx(t.code,{children:"<h1>"})," should be on a page at any given time (unless a new heading hierarchy is created as a sibling)."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["A ",e.jsx(t.code,{children:"<header>"})," element is built-in to the app bar component."]}),`
`]}),`
`,e.jsx(t.h2,{id:"css-only",children:"CSS-Only"}),`
`,e.jsx(t.p,{children:"The app-bar component is also available as a CSS-only component without the need for JavaScript."}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(h,{})]})}function me(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{me as default};
