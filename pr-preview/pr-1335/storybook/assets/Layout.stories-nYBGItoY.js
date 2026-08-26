import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-JbGil995.js";import{n,t as r}from"./dist-CYLfF0F6.js";import{c as i,t as a}from"./panel-BQDu0cEI.js";import{n as o,t as s}from"./Header.stories-DNjcnnti.js";import{n as c,t as l}from"./Sidebar.stories-50GNTpVw.js";import{n as u,t as d}from"./Navbar.stories-Buo3yE6w.js";import{i as f,n as p,o as m,s as h,t as g}from"./layout-DZzDiNnU.js";var _,v,y,b,x,S,C,w,T;e((()=>{r(),o(),c(),u(),m(),g(),a(),_=t(),{Desktop:v,Mobile:y}=n(s),{Primary:b}=n(l),{Primary:x}=n(d),S={component:f,title:`Layout/Layout`,tags:[`autodocs`],args:{children:`Content`},parameters:{layout:`fullscreen`,rootElement:`div`}},C={render:e=>(0,_.jsxs)(f,{...e,children:[(0,_.jsx)(y,{}),(0,_.jsxs)(p,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(h,{children:`Content`}),(0,_.jsx)(i,{id:`panel`,defaultOpen:!0,title:`Panel`})]})]})},w={globals:{viewport:{value:`small`}},render:e=>(0,_.jsxs)(f,{...e,children:[(0,_.jsx)(v,{}),(0,_.jsxs)(p,{children:[(0,_.jsx)(b,{}),(0,_.jsx)(h,{children:`Content`}),(0,_.jsx)(i,{id:`panel`,defaultOpen:!0,title:`Panel`})]}),(0,_.jsx)(x,{})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Layout {...args}>
      <HeaderWithMobileMenu />
      <LayoutContent>
        <PrimarySidebar />
        <Main>Content</Main>
        <Panel id='panel' defaultOpen title='Panel' />
      </LayoutContent>
    </Layout>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`WithMobileMenu`,`WithNavbar`]}))();export{C as WithMobileMenu,w as WithNavbar,T as __namedExportsOrder,S as default};