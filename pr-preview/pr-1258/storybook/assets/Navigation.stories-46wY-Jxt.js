import{r as h,j as e}from"./iframe-1_iu-uVv.js";import{N as f,a as g,b as y}from"./NavigationSection-C8YOdbWd.js";import{S as v,N as x}from"./NavigationLink-D4e7CmE2.js";import{c as N}from"./clsx-B-dksMZM.js";import{$ as _}from"./Collection-D99_FTQW.js";import{U as S}from"./user-CutH077L.js";import{S as j}from"./save-BZcVPy_r.js";import{c as d}from"./createLucideIcon-BbCelBYg.js";import{P as b}from"./plus-CxK3mTrC.js";import{H as A}from"./house-EhL9zkY6.js";const M=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],I=d("file-text",M);const V=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],k=d("send",V),w="_navigationSubMenu_vfyl6_1",q="_collapsed_vfyl6_5",p={navigationSubMenu:w,collapsed:q},r=({className:t,children:o,items:s,...l})=>{const m=h.useContext(v),{length:u}=Array.from(s||[]);return typeof o=="function"&&u===0?null:e.jsx("ul",{className:N(t,p.navigationSubMenu,{[p.collapsed]:m?.isCollapsed}),children:e.jsx(_,{items:s,...l,children:o})})};try{r.displayName="NavigationSubMenu",r.__docgenInfo={description:"",displayName:"NavigationSubMenu",props:{items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},children:{defaultValue:null,description:"The contents of the collection.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactNode)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},idScope:{defaultValue:null,description:"A scope to prepend to all child item ids to ensure they are unique.",name:"idScope",required:!1,type:{name:"Key"}},addIdAndValue:{defaultValue:null,description:"Whether to add `id` and `value` props to all child items.",name:"addIdAndValue",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const i={home:{id:"home",title:"Home",href:"/",icon:e.jsx(A,{})},applications:{id:"applications",title:"Applications",href:"/applications",icon:e.jsx(I,{})},newApplication:{id:"new-application",title:"New",href:"/applications/new",icon:e.jsx(b,{})},sentApplications:{id:"sent-applications",title:"Sent",href:"/applications/sent",icon:e.jsx(k,{})},savedApplications:{id:"saved-applications",title:"Saved",href:"/applications/saved",icon:e.jsx(j,{})},profile:{id:"profile",title:"Profile",href:"/profile",icon:e.jsx(S,{})}},c=({href:t,icon:o,title:s,children:l})=>e.jsxs(g,{children:[e.jsx(x,{isActive:t==="/",href:t,icon:o,children:s}),e.jsx(r,{items:l,children:c})]}),C={component:f,title:"Layout/Navigation",tags:["!autodocs","!dev"]},a={args:{items:[i.home,i.profile,i.applications],children:c}},n={args:{items:[{id:"general",children:[i.home,i.profile]},{id:"applications",title:"Applications",children:[{...i.applications,children:[i.newApplication,i.sentApplications,i.savedApplications]}]}],children:t=>e.jsx(y,{title:t.title,items:t.children,children:c})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [items.home, items.profile, items.applications],
    children: renderItem
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'general',
      children: [items.home, items.profile]
    }, {
      id: 'applications',
      title: 'Applications',
      children: [{
        ...items.applications,
        children: [items.newApplication, items.sentApplications, items.savedApplications]
      }]
    }],
    children: section => <NavigationSection title={section.title} items={section.children}>
        {renderItem}
      </NavigationSection>
  }
}`,...n.parameters?.docs?.source}}};const H=["Flat","Nested"],K=Object.freeze(Object.defineProperty({__proto__:null,Flat:a,Nested:n,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{K as n};
