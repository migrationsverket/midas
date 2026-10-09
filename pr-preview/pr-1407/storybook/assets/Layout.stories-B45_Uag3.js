import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t}from"./iframe-vO5Lg-Ve.js";import{n,t as r}from"./dist-B3zNCnM0.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./LayoutContent-DDhsOYeN.js";import{n as f,t as p}from"./Header.stories-0xNTYN2M.js";import{n as m,t as h}from"./Sidebar.stories-C36NvW2e.js";import{n as g,t as _}from"./Navbar.stories-CBCjQrm_.js";var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),f(),m(),g(),c(),o(),s(),a(),v=t(),{Desktop:y,Mobile:b}=n(p),{Primary:x}=n(h),{Primary:S}=n(_),C={component:l,title:`Layout/Layout`,tags:[`autodocs`],args:{children:`Content`},parameters:{layout:`fullscreen`,rootElement:`div`}},w={render:e=>(0,v.jsxs)(l,{...e,children:[(0,v.jsx)(b,{}),(0,v.jsxs)(d,{children:[(0,v.jsx)(x,{}),(0,v.jsx)(i,{children:`Content`}),(0,v.jsx)(u,{id:`panel`,defaultOpen:!0,title:`Panel`})]})]})},T={globals:{viewport:{value:`small`}},render:e=>(0,v.jsxs)(l,{...e,children:[(0,v.jsx)(y,{}),(0,v.jsxs)(d,{children:[(0,v.jsx)(x,{}),(0,v.jsx)(i,{children:`Content`}),(0,v.jsx)(u,{id:`panel`,defaultOpen:!0,title:`Panel`})]}),(0,v.jsx)(S,{})]})},E=[`WithMobileMenu`,`WithNavbar`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
      <HeaderWithMobileMenu />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
    </Layout>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'small'
    }
  },
  render: args => <Layout {...args}>
      <PrimaryHeader />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
      <PrimaryNavbar />
    </Layout>
}`,...T.parameters?.docs?.source}}}})))()}D();export{w as WithMobileMenu,T as WithNavbar,E as __namedExportsOrder,C as default};