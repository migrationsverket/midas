import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{d as r,u as i}from"./Collection-BOv91l3w.js";import{n as a,t as o}from"./clsx-Qb-WgvrD.js";import{n as s}from"./iframe-CLET--NM.js";import{n as c,t as l}from"./createLucideIcon-BrsN-CPt.js";import{n as u,t as d}from"./house-B11xx8Ov.js";import{n as f,t as p}from"./plus-Kd2ESDy9.js";import{n as m,t as h}from"./save-CkObnXOV.js";import{n as g,t as _}from"./user-CNTHnpMX.js";import{a as v,i as y,n as b,o as x,r as S,t as C}from"./NavigationSection-BEQ-hD9E.js";import{c as w,n as T,s as E,t as D}from"./NavigationLink-CnsRwkYi.js";var O,k;function A(){return(A=e((()=>{c(),O=[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]],k=l(`file-text`,O)})))()}var j,M;function N(){return(N=e((()=>{c(),j=[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]],M=l(`send`,j)})))()}var P,F,I;function L(){return(L=e((()=>{P=`_navigationSubMenu_vfyl6_1`,F=`_collapsed_vfyl6_5`,I={navigationSubMenu:P,collapsed:F}})))()}var R,z,B;function V(){return(V=e((()=>{a(),R=n(),r(),w(),L(),z=s(),B=({className:e,children:t,items:n,...r})=>{let a=(0,R.useContext)(E),{length:s}=Array.from(n||[]);return typeof t==`function`&&s===0?null:(0,z.jsx)(`ul`,{className:o(e,I.navigationSubMenu,{[I.collapsed]:a?.isCollapsed}),children:(0,z.jsx)(i,{items:n,...r,children:t})})},B.__docgenInfo={description:``,methods:[],displayName:`NavigationSubMenu`,props:{className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var H=t({Flat:()=>q,Nested:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),U,W,G,K,q,J,Y;function X(){return(X=e((()=>{x(),y(),T(),b(),V(),A(),u(),f(),m(),N(),g(),U=s(),W={home:{id:`home`,title:`Home`,href:`/`,icon:(0,U.jsx)(d,{})},applications:{id:`applications`,title:`Applications`,href:`/applications`,icon:(0,U.jsx)(k,{})},newApplication:{id:`new-application`,title:`New`,href:`/applications/new`,icon:(0,U.jsx)(p,{})},sentApplications:{id:`sent-applications`,title:`Sent`,href:`/applications/sent`,icon:(0,U.jsx)(M,{})},savedApplications:{id:`saved-applications`,title:`Saved`,href:`/applications/saved`,icon:(0,U.jsx)(h,{})},profile:{id:`profile`,title:`Profile`,href:`/profile`,icon:(0,U.jsx)(_,{})}},G=({href:e,icon:t,title:n,children:r})=>(0,U.jsxs)(S,{children:[(0,U.jsx)(D,{isActive:e===`/`,href:e,icon:t,children:n}),(0,U.jsx)(B,{items:r,children:G})]}),K={component:v,title:`Layout/Navigation`,tags:[`!autodocs`,`!dev`]},q={args:{items:[W.home,W.profile,W.applications],children:G}},J={args:{items:[{id:`general`,children:[W.home,W.profile]},{id:`applications`,title:`Applications`,children:[{...W.applications,children:[W.newApplication,W.sentApplications,W.savedApplications]}]}],children:e=>(0,U.jsx)(C,{title:e.title,items:e.children,children:G})}},Y=[`Flat`,`Nested`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    items: [items.home, items.profile, items.applications],
    children: renderItem
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}}})))()}export{X as n,H as t};