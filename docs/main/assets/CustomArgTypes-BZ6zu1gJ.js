import{ae as e,aC as C,v as m,aw as y,aj as A}from"./index-CEtVyEX8.js";import{f as E,a as M,h as D,i as I,j as B}from"./utils-tMt8VPCc.js";const G="_container_10gh2_2",v="_codeLink_10gh2_6",R="_subcomponentHeader_10gh2_12",U="_section_10gh2_18",z="_table_10gh2_22",j={container:G,codeLink:v,subcomponentHeader:R,section:U,table:z,"sb-anchor":"_sb-anchor_10gh2_28","sb-unstyled":"_sb-unstyled_10gh2_28"};function d({text:s,href:t}){return e.jsx("p",{children:e.jsxs("i",{children:["Learn more about ",e.jsx("a",{href:`./${t}`,children:s}),"."]})})}function x({title:s,name:t,children:n,headingLevel:r="h3"}){const l=(r==="h3"?s:`${t}-${s}`).toLowerCase().replace(/[^a-z0-9]/gi,"-");return e.jsxs("section",{className:j.section,children:[e.jsx(C,{as:r,id:l,children:s}),n]})}const O=["(default)"];function _({items:s}){return e.jsxs("table",{className:j.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map((t,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:O.includes(t.name)?e.jsx("i",{children:t.name}):e.jsx(m,{children:t.name})}),e.jsx("td",{children:e.jsx(y,{children:t.description})})]},`${t.name}-${n}`))})]})}function F(){return e.jsx("img",{className:"github-logo",src:"./github-mark.png",alt:"GitHub Logo",style:{height:"1.5rem",width:"1.5rem"}})}const H="https://github.com/tyler-technologies-oss/forge/tree",P=s=>s.replace(/^forge-/gi,"").replace(/-/g," ").replace(/(?:^|\s)\S/g,t=>t.toUpperCase());function b({typeText:s}){s=I(s);const t=[...new Set(s.match(/\w+/g)??[])].sort((r,a)=>a.length-r.length),n=D();return t.forEach(r=>{const a=B(r);if(a){const{path:l,lineNumber:h}=a,c=`${H}/${n}/${l}#L${h}`,o=new RegExp(`(?<!>)${r}`,"g");s=s.replace(o,`<a href=${c} target="_blank" rel="noreferrer noopener">${r}</a>`)}}),e.jsx(m,{children:e.jsx("span",{dangerouslySetInnerHTML:{__html:s}})})}function N({items:s,globalConfigProperties:t}){return e.jsxs("table",{className:j.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"}),t!=null&&t.length?e.jsx("th",{style:{whiteSpace:"nowrap",textAlign:"center"},children:"Global Config"}):null]})}),e.jsx("tbody",{children:s==null?void 0:s.map((n,r)=>{var a;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(m,{children:n.name})}),e.jsx("td",{children:(a=n.type)!=null&&a.text?e.jsx(b,{typeText:n.type.text}):"-"}),e.jsx("td",{children:n.default?e.jsx(m,{children:n.default}):"-"}),e.jsx("td",{children:e.jsx(y,{children:n.description})}),t!=null&&t.length?e.jsx("td",{style:{textAlign:"center"},children:t.includes(n.name)?"✅":""}):null]},`${n.name}-${r}`)})})]})}function X({items:s}){return e.jsxs("table",{className:j.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Type"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map(t=>{var n;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(m,{children:t.name})}),e.jsx("td",{children:e.jsx(y,{children:t.description})}),e.jsx("td",{children:(n=t.type)!=null&&n.text?e.jsx(b,{typeText:t.type.text}):"-"})]},t.name)})})]})}function q({items:s}){return e.jsxs("table",{className:j.table,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Parameters"}),e.jsx("th",{children:"Return Type"})]})}),e.jsx("tbody",{children:s==null?void 0:s.map(t=>{var n,r,a;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(m,{children:`${t.name}()`})}),e.jsx("td",{children:e.jsx(y,{children:t.description})}),e.jsx("td",{children:(n=t.parameters)!=null&&n.length?e.jsx(b,{typeText:K(t.parameters)}):"-"}),e.jsx("td",{children:(a=(r=t.return)==null?void 0:r.type)!=null&&a.text?e.jsx(b,{typeText:t.return.type.text}):"-"})]},t.name)})})]})}function J({dependencies:s}){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This component will automatically include the following components:"}),e.jsx("ul",{children:s.map(t=>{const n=t.toLowerCase().replace(/^forge-/gi,"").replace(/[^a-z0-9]/gi,"-");return e.jsx("li",{children:e.jsx("a",{href:`./?path=/docs/components-${n}--docs`,children:`<${t}>`})},t)})})]})}function K(s){return s.map(t=>`${t.name}: ${t.type.text}`).join(", ")}function p(s){return s.sort((t,n)=>t.name.localeCompare(n.name))}function L({tagName:s,headingLevel:t}){var S,$,T,w,k;const n=M(s),r=(S=n.members)==null?void 0:S.filter(i=>i.kind==="field"&&i.privacy==="public"),a=n.attributes,l=($=n.members)==null?void 0:$.filter(i=>i.kind==="method"&&i.privacy==="public"),h=n.events,c=(T=n.dependencies)==null?void 0:T.map(({name:i})=>i),o=(w=n.globalConfigProperties)==null?void 0:w.map(({name:i})=>i),u=((k=n.slots)==null?void 0:k.map(i=>(i.name||(i.name="(default)"),i)))??[],g=n.cssProperties,f=n.cssParts;return e.jsxs("div",{children:[!!(r!=null&&r.length)&&e.jsxs(x,{title:"Properties",name:s,headingLevel:t,children:[e.jsx(N,{items:p(r),globalConfigProperties:o}),e.jsx(d,{text:"Properties",href:"?path=/docs/getting-started-usage--docs#properties--attributes"}),o!=null&&o.length?e.jsx(d,{text:"Global Configuration",href:"?path=/docs/getting-started-global-configuration--docs"}):null]}),!!(a!=null&&a.length)&&e.jsxs(x,{title:"Attributes",name:s,headingLevel:t,children:[e.jsx(N,{items:p(a)}),e.jsx(d,{text:"Attributes",href:"?path=/docs/getting-started-usage--docs#properties--attributes"})]}),!!(h!=null&&h.length)&&e.jsxs(x,{title:"Events",name:s,headingLevel:t,children:[e.jsx(X,{items:p(h)}),e.jsx(d,{text:"Events",href:"?path=/docs/getting-started-usage--docs#events"})]}),!!(u!=null&&u.length)&&e.jsxs(x,{title:"Slots",name:s,headingLevel:t,children:[e.jsx(_,{items:p(u)}),e.jsx(d,{text:"Slots",href:"?path=/docs/getting-started-usage--docs#slots"})]}),!!(l!=null&&l.length)&&e.jsxs(x,{title:"Methods",name:s,headingLevel:t,children:[e.jsx(q,{items:p(l)}),e.jsx(d,{text:"Methods",href:"?path=/docs/getting-started-usage--docs#methods"})]}),!!(g!=null&&g.length)&&e.jsxs(x,{title:"CSS Custom Properties",name:s,headingLevel:t,children:[e.jsx(_,{items:p(g)}),e.jsx(d,{text:"CSS Custom Properties",href:"?path=/docs/getting-started-usage--docs#css-custom-properties"})]}),!!(f!=null&&f.length)&&e.jsxs(x,{title:"CSS Shadow Parts",name:s,headingLevel:t,children:[e.jsx(_,{items:p(f)}),e.jsx(d,{text:"CSS Shadow Parts",href:"?path=/docs/getting-started-usage--docs#css-shadow-parts"})]}),!!(c!=null&&c.length)&&e.jsx(x,{title:"Dependencies",name:s,headingLevel:t,children:e.jsx(J,{dependencies:c.sort()})})]})}function W(){const s=A("story",["story"]),t=s.story.component;if(!t||typeof t!="string")return null;const n=s.story.subcomponents,r=!!n&&Object.keys(n).length>0,a=D(),l=({modulePath:c,className:o})=>e.jsx("a",{href:`${H}/${a}/${c}`,rel:"noreferrer noopener",target:"_blank",className:o,children:e.jsx(F,{})});if(!r){const c=E(t);return e.jsxs("div",{className:j.container,children:[c!=null&&c.path?e.jsx(l,{modulePath:c.path,className:j.codeLink}):null,e.jsx(L,{tagName:t,headingLevel:"h3"})]})}const h=[t,...Object.values(n)];return e.jsx("div",{children:h.map(c=>{const o=`${c.toLowerCase().replace(/[^a-z0-9]/gi,"-")}-api`,u=E(c);return e.jsxs("div",{style:{marginBlockStart:"24px"},children:[e.jsxs("div",{className:j.subcomponentHeader,children:[e.jsx(C,{as:"h3",id:o,children:P(c)}),u.path?e.jsx(l,{modulePath:u.path}):null]}),e.jsx(L,{tagName:c,headingLevel:"h4"})]},c)})})}export{W as C,_ as N,x as S,d as U};
