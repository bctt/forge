import{j as e,M as r,T as s,C as n}from"./index-BM2sEvqD.js";import{useMDXComponents as a}from"./index-CSTMQ_M5.js";import{C as l}from"./CustomArgTypes-DoiwgUDg.js";import{C as h}from"./CssOnlyInformation-D22-keWK.js";import{A as p,D as c,F as m,W as d,C as u,a as b}from"./AppBar.stories-DBde8xJN.js";import"./iframe-BfE5mRgh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";import"./utils-BgrpGqCf.js";import"./lit-element-JplMEnZc.js";import"./lit-html-paDGiEfB.js";import"./index-fxMNKkgx.js";import"./icon-Ctzrqx63.js";import"./constants-BjnHqKgS.js";import"./feature-detection-ONR9WHvu.js";import"./base-adapter-CQdYccXX.js";import"./index-BgGCUUFB.js";import"./decorators-DOnQS6BC.js";import"./app-bar-profile-button-Bso0FNWk.js";import"./focus-indicator-I_IrwQSK.js";import"./state-layer-CxIpCmDW.js";import"./index-CbZAylpk.js";import"./icon-button-D5fTQ0k5.js";import"./base-button-adapter-BUcmIwIL.js";import"./with-label-aware-DAaZnhel.js";import"./with-default-aria-BcIvJ7-x.js";import"./a11y-utils-BOPvdiVn.js";import"./tooltip-CTpoJPTH.js";import"./overlay-D8lPnEIG.js";import"./with-longpress-listener-S3ft74cg.js";import"./dismissible-stack-Dx1UJAF9.js";import"./badge-CzgFSHGZ.js";import"./menu-C6Z4JBtb.js";import"./list-DjbLwyYT.js";import"./list-dropdown-aware-core-BdubphoD.js";import"./list-dropdown-D4ar2DiO.js";import"./event-utils-C1SDeUaq.js";import"./linear-progress-DPUjJFYN.js";import"./popover-C6QnYMTq.js";import"./skeleton-Dfdgg-pt.js";import"./a11y-BxM9_46k.js";import"./base-component-delegate-D9tVS5jC.js";import"./avatar-Du1LPt_G.js";import"./button-ClwhnaJK.js";import"./toolbar-Lhya2ayG.js";import"./expansion-panel-D4IeG1MC.js";import"./open-icon-BJwmkNNX.js";import"./divider-CpwmAwgQ.js";function i(o){const t={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:p}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"App bars are a common component used in web applications to provide a consistent location for branding, navigation, and other common elements."}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"<forge-app-bar>"})," is nothing more than a container for other add-on components, but it provides named slots and a common location for branding logo, title, and other actions."]}),`
`,e.jsx(t.h2,{id:"default",children:"Default"}),`
`,e.jsx(t.p,{children:"A basic app bar just contains a title with no other elements."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h2,{id:"full",children:"Full"}),`
`,e.jsx(t.p,{children:"The following example shows the usage of all of the common app bar elements placed in their corresponding slots."}),`
`,e.jsx(n,{of:m}),`
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
`,e.jsxs(t.p,{children:[`You may need to customize the layout and styles to fit your specific needs. While there are built-in "section" classes for you to use, these are very
specific to the default app bar layout and may not work for `,e.jsx(t.em,{children:"all"}),` use cases. In these scenarios, you can always create your own layout within the app bar element,
and use your own HTML/CSS to style the content within while still using the standard app bar design for the overall container.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<header class="forge-app-bar">
  <div class="my-custom-layout">
    <!-- Custom layout content -->
  </div>
</header>
`})}),`
`,e.jsx(h,{})]})}function me(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{me as default};
