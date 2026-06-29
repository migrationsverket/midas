import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B2UVwHJu.js";import{n,t as r}from"./dist-C_Lgwv5c.js";import{c as i,t as a}from"./panel-BxbTjntk.js";import{n as o,t as s}from"./Header.stories-Dyy2JHWo.js";import{n as c,t as l}from"./Sidebar.stories-R_qzCwUy.js";import{n as u,t as d}from"./Navbar.stories-BVJdU3vK.js";import{i as f,n as p,o as m,s as h,t as g}from"./layout-L9CNzRW6.js";var _,v,y,b,x,S,C,w,T;e((()=>{r(),o(),c(),u(),m(),g(),a(),_=t(),{Primary:v,WithMobileMenu:y}=n(s),{Primary:b}=n(l),{Primary:x}=n(d),S={component:f,title:`Layout/Layout`,tags:[`autodocs`],args:{children:`Content`},parameters:{layout:`fullscreen`,rootElement:`div`}},C={render:e=>(0,_.jsxs)(f,{...e,children:[(0,_.jsx)(y,{}),(0,_.jsxs)(p,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(h,{children:`Content`}),(0,_.jsx)(i,{id:`panel`,defaultOpen:!0,title:`Panel`})]})]})},w={render:e=>(0,_.jsxs)(f,{...e,children:[(0,_.jsx)(v,{}),(0,_.jsxs)(p,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(h,{children:`Content`}),(0,_.jsx)(i,{id:`panel`,defaultOpen:!0,title:`Panel`})]}),(0,_.jsx)(x,{})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
      <HeaderWithMobileMenu />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
    </Layout>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
      <PrimaryHeader />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
      <PrimaryNavbar />
    </Layout>
}`,...w.parameters?.docs?.source}}},T=[`WithMobileMenu`,`WithNavbar`]}))();export{C as WithMobileMenu,w as WithNavbar,T as __namedExportsOrder,S as default};