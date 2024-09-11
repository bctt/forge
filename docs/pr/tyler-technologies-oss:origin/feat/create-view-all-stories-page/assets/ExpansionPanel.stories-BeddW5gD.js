import"./lit-element-Dk2-kgKT.js";import{k as u,D as S}from"./lit-html-DZH-Jm0H.js";import{a as $}from"./chunk-454WOBUV-CM0pFb8Z.js";import{b as _,g as h}from"./utils-D1kchwVb.js";import{s as C}from"./style-map-DxfbqtuX.js";import{K as L,i as T}from"./ref-9TtedaQt.js";import{R as E}from"./class-map-D93gIiBE.js";import"./constants-DjE6emXm.js";import"./expansion-panel-Da14WzAs.js";import"./card-DdiAyW6J.js";const c="forge-expansion-panel",R=$("forge-expansion-panel-toggle"),A=$("forge-expansion-panel-animation-complete"),V={title:"Components/Expansion Panel",component:c,render:e=>{const n=_(e),o=n?C(n):S,t=T();function s(p){var l;R(),(l=t.value)==null||l.setAttribute("aria-expanded",p.detail.toString())}return u`
      <forge-expansion-panel
        .open=${e.open}
        .animationType=${e.animationType}
        .orientation=${e.orientation}
        style=${o}
        @forge-expansion-panel-toggle=${s}
        @forge-expansion-panel-animation-complete=${A}>
        <button ${L(t)} slot="header" type="button" aria-expanded=${e.open} aria-controls="content">Toggle</button>
        <div id="content" role="group">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
            nulla quod corporis similique consequuntur facere laborum veniam error eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
            nulla quod corporis similique consequuntur facere laborum veniam error eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
            nulla quod corporis similique consequuntur facere laborum veniam error eius.
          </p>
        </div>
      </forge-expansion-panel>
    `},argTypes:{...h({tagName:c,controls:{orientation:{control:"select",options:["horizontal","vertical"]},animationType:{control:"select",options:["default","none"]}}})},args:{open:!1,orientation:"vertical",animationType:"default"}},i={},r={render:({open:e,animationType:n,orientation:o})=>u`
      <forge-card>
        <forge-expansion-panel .open=${e} .animationType=${n} .orientation=${o}>
          <div slot="header" role="button" tabindex="0" style="display: flex; justify-content: space-between;">
            <div>Header text</div>
            <forge-open-icon></forge-open-icon>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
            nulla quod corporis similique consequuntur facere laborum veniam error eius.
          </p>
        </forge-expansion-panel>
      </forge-card>
    `},a={parameters:{controls:{include:["open"]}},render:({open:e})=>{const n=T();return u`
      <button
        type="button"
        aria-expanded=${e}
        id="my-button"
        @click=${o=>{var s,p;const t=!((s=n.value)!=null&&s.classList.contains("forge-expansion-panel--open"));o.target.setAttribute("aria-expanded",`${t}`),(p=n.value)==null||p.classList.toggle("forge-expansion-panel--open",t)}}>
        Toggle
      </button>
      <div
        ${L(n)}
        class=${E({"forge-expansion-panel":!0,"forge-expansion-panel--open":e})}>
        <div class="forge-expansion-panel__content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae recusandae ullam facilis ipsa deleniti temporibus modi nam, eveniet, dolore aut rem,
          tempore excepturi! Porro corporis culpa quis modi ab corrupti?
        </div>
      </div>
    `}};var m,d,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,b,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    open,
    animationType,
    orientation
  }) => {
    return html\`
      <forge-card>
        <forge-expansion-panel .open=\${open} .animationType=\${animationType} .orientation=\${orientation}>
          <div slot="header" role="button" tabindex="0" style="display: flex; justify-content: space-between;">
            <div>Header text</div>
            <forge-open-icon></forge-open-icon>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus ut illum corporis incidunt quod temporibus consequatur rem! Libero rem
            nulla quod corporis similique consequuntur facere laborum veniam error eius.
          </p>
        </forge-expansion-panel>
      </forge-card>
    \`;
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,q,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['open']
    }
  },
  render: ({
    open
  }) => {
    const panelRef = createRef();
    return html\`
      <button
        type="button"
        aria-expanded=\${open}
        id="my-button"
        @click=\${(evt: PointerEvent) => {
      const expanded = !panelRef.value?.classList.contains('forge-expansion-panel--open');
      (evt.target as HTMLButtonElement).setAttribute('aria-expanded', \`\${expanded}\`);
      panelRef.value?.classList.toggle('forge-expansion-panel--open', expanded);
    }}>
        Toggle
      </button>
      <div
        \${ref(panelRef)}
        class=\${classMap({
      'forge-expansion-panel': true,
      'forge-expansion-panel--open': open
    })}>
        <div class="forge-expansion-panel__content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae recusandae ullam facilis ipsa deleniti temporibus modi nam, eveniet, dolore aut rem,
          tempore excepturi! Porro corporis culpa quis modi ab corrupti?
        </div>
      </div>
    \`;
  }
}`,...(y=(q=a.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};const P=["Demo","WithCard","CSSOnly"],Q=Object.freeze(Object.defineProperty({__proto__:null,CSSOnly:a,Demo:i,WithCard:r,__namedExportsOrder:P,default:V},Symbol.toStringTag,{value:"Module"}));export{a as C,i as D,Q as E,r as W};
