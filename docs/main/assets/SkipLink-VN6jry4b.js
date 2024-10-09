import{j as e}from"./jsx-runtime-09Psuw5f.js";import{u as o}from"./index-CifnwB8G.js";import{ae as s,af as a,ag as r}from"./index-DS3-dU_A.js";import{C as l}from"./CustomArgTypes-BNrPzZVJ.js";import{S as p,D as c}from"./SkipLink.stories-BP98ypwl.js";import"./iframe-CQnZhdaF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./utils-CRuDW25z.js";import"./lit-element-Dk2-kgKT.js";import"./lit-html-DZH-Jm0H.js";import"./style-map-DxfbqtuX.js";import"./directive-Ctav8iJK.js";import"./constants-DjE6emXm.js";import"./skip-link-BFbD7EHn.js";import"./index-Dh0vMUMR.js";import"./focus-indicator-_fDu4ZqT.js";import"./base-adapter-F7QHxK2H.js";import"./state-layer-DTKAXCUq.js";function i(n){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"Skip links are used at the beginning of a page to allow users to skip over repetitive content."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["Always include a skip link as the first child of the ",e.jsx(t.code,{children:"<body>"}),` element that targets the main content of the page. Any page with
content, navigation or otherwise, that repeats across the start of multiple pages should include a skip link. You may use more
than one to link to multiple areas of the page, but be judicious because too many skip links can themselves become frustrating
to navigate. Remember, users of assistive technology have their own methods to navigate between landmarks on a page and may not
appreciate the extra "help."`]}),`
`,e.jsx(t.p,{children:`You may also include an inline skip link within a page to skip to relevant content. For example, a skip link could be used to
bypass search filters and go directly to the list of results. Ensure that the text of the skip link clearly indicates what it
navigates to.`}),`
`,e.jsxs(t.p,{children:["The target element should always have ",e.jsx(t.code,{children:'tabindex="-1"'}),` set as an attribute if it is not otherwise focusable. This allows the
browser to focus it after navigation without including it in the tab order.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:`In Safari, the skip link component does not behave the same as in other browsers because anchor links are never included in the
tab order. Screen reader users can still perceive the skip link and use it to navigate the page.`}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",rel:"nofollow",children:"See WCAG Success Criterion 2.4.1 for more information."})}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(l,{})]})}function X(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{X as default};
