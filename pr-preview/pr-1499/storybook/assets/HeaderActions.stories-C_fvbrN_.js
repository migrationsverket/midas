import{n as e,r as t}from"./rolldown-runtime-BCiCTKAo.js";import{n,t as r}from"./clsx-DCdnwCma.js";import{n as i,t as a}from"./bell-Cc8gIIc7.js";import{n as o,t as s}from"./settings-BRKyrndE.js";import{n as c,t as l}from"./user-DU1dix6_.js";import{n as u}from"./iframe-B62b4C7G.js";import{i as d,n as f,r as p,t as m}from"./HeaderAction-CzIA_NZI.js";var h,g;function _(){return(_=e((()=>{h=`_headerActions_zpqnd_1`,g={headerActions:h}})))()}var v,y;function b(){return(b=e((()=>{n(),d(),_(),v=u(),y=({children:e,className:t,orientation:n=`horizontal`})=>(0,v.jsx)(`div`,{className:r(g.headerActions,t),children:(0,v.jsx)(p.Provider,{value:{orientation:n},children:e})}),y.__docgenInfo={description:``,methods:[],displayName:`HeaderActions`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},orientation:{required:!1,tsType:{name:`ToolbarProps['orientation']`,raw:`ToolbarProps['orientation']`},description:`Places each action's label next to its icon, or below it. On small
screens the labels are hidden either way, and only the icons show

@default 'horizontal'`,defaultValue:{value:`'horizontal'`,computed:!1}}}}})))()}var x=t({Primary:()=>w,Vertical:()=>T,__namedExportsOrder:()=>E,default:()=>C}),S,C,w,T,E;function D(){return(D=e((()=>{i(),o(),c(),b(),f(),S=u(),C={component:y,title:`Layout/Header/HeaderActions`,tags:[`!autodocs`,`!dev`],parameters:{layout:`fullscreen`}},w={render:e=>(0,S.jsxs)(y,{...e,children:[(0,S.jsx)(m,{icon:(0,S.jsx)(a,{size:20}),children:`Notiser`}),(0,S.jsx)(m,{icon:(0,S.jsx)(s,{size:20}),children:`Inställningar`}),(0,S.jsx)(m,{icon:(0,S.jsx)(l,{size:20}),children:`Min profil`})]})},T={args:{orientation:`vertical`},render:w.render},E=[`Primary`,`Vertical`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <HeaderActions {...args}>
      <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
      <HeaderAction icon={<Settings size={20} />}>Inställningar</HeaderAction>
      <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
    </HeaderActions>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: Primary.render
}`,...T.parameters?.docs?.source}}}})))()}export{D as n,x as t};