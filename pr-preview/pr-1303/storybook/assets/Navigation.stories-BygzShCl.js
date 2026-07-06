import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./iframe-B7UyiEkL.js";import{J as r,Kt as i,S as a,b as o,i as s,m as c,t as l}from"./lucide-react-D0taXNel.js";import{c as u,i as d,n as f,o as p,t as m}from"./navigation-CWA2jrcY.js";import{n as h}from"./navigation-link-Cmu3bukS.js";var g=e({Flat:()=>x,Nested:()=>S,__namedExportsOrder:()=>C,default:()=>b}),_,v,y,b,x,S,C,w=t((()=>{m(),l(),_=n(),v={home:{id:`home`,title:`Home`,href:`/`,icon:(0,_.jsx)(i,{})},applications:{id:`applications`,title:`Applications`,href:`/applications`,icon:(0,_.jsx)(r,{})},newApplication:{id:`new-application`,title:`New`,href:`/applications/new`,icon:(0,_.jsx)(a,{})},sentApplications:{id:`sent-applications`,title:`Sent`,href:`/applications/sent`,icon:(0,_.jsx)(c,{})},savedApplications:{id:`saved-applications`,title:`Saved`,href:`/applications/saved`,icon:(0,_.jsx)(o,{})},profile:{id:`profile`,title:`Profile`,href:`/profile`,icon:(0,_.jsx)(s,{})}},y=({href:e,icon:t,title:n,children:r})=>(0,_.jsxs)(p,{children:[(0,_.jsx)(h,{isActive:e===`/`,href:e,icon:t,children:n}),(0,_.jsx)(f,{items:r,children:y})]}),b={component:u,title:`Layout/Navigation`,tags:[`!autodocs`,`!dev`]},x={args:{items:[v.home,v.profile,v.applications],children:y}},S={args:{items:[{id:`general`,children:[v.home,v.profile]},{id:`applications`,title:`Applications`,children:[{...v.applications,children:[v.newApplication,v.sentApplications,v.savedApplications]}]}],children:e=>(0,_.jsx)(d,{title:e.title,items:e.children,children:y})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [items.home, items.profile, items.applications],
    children: renderItem
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Flat`,`Nested`]}));export{w as n,g as t};