const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-pGllwBrH.js","./index-5RP3f3z-.js","./iframe-DyxU3mHA.js","./_commonjsHelpers-Cpj98o6Y.js","./index-D-8MO0q_.js","./index-BHYIh-Xd.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./iframe-DyxU3mHA.js";import{l as E,r as s,m as d,A as R,H as v,R as n,D as w}from"./index-5RP3f3z-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./index-DrFu-skq.js";var l,m=E;l=m.createRoot,m.hydrateRoot;var a=new Map;function _(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var x=async(e,t,r)=>{let o=await D(t,r);if(_()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(f,{callback:u},e)),i},y=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},D=async(e,t)=>{let r=a.get(e);return r||(r=l(e,t),a.set(e,r)),r},g={code:d,a:R,...v},A=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},P=class{constructor(){this.render=async(e,t,r)=>{let o={...g,...t==null?void 0:t.components},i=w;return new Promise((u,p)=>{h(async()=>{const{MDXProvider:c}=await import("./index-pGllwBrH.js");return{MDXProvider:c}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({MDXProvider:c})=>x(n.createElement(A,{showException:p,key:Math.random()},n.createElement(c,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{y(e)}}};export{P as DocsRenderer,g as defaultComponents};
